const pkg = require('./package.json')
const yargs = require('yargs')
const through = require('through2');

const { rollup } = require('rollup')
const { terser } = require('rollup-plugin-terser')
const babel = require('@rollup/plugin-babel').default
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve').default
const sass = require('sass')

const gulp = require('gulp')
const zip = require('gulp-zip')
const header = require('gulp-header')
const eslint = require('gulp-eslint')
const minify = require('gulp-clean-css')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug-3');

const root = yargs.argv.root || 'presentation'
const port = yargs.argv.port || 8000
const host = yargs.argv.host || 'localhost'

const banner = `/*!
* reveal.js ${pkg.version}
* ${pkg.homepage}
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/\n`

// Prevents warnings from opening too many test pages
process.setMaxListeners(20);

const babelConfig = {
  babelHelpers: 'bundled',
  ignore: ['node_modules'],
  compact: false,
  extensions: ['.js', '.html'],
  plugins: [
    'transform-html-import-to-string'
  ],
  presets: [[
    '@babel/preset-env',
    {
      corejs: 3,
      useBuiltIns: 'usage',
      modules: false
    }
  ]]
};

// Our ES module bundle only targets newer browsers with
// module support. Browsers are targeted explicitly instead
// of using the "esmodule: true" target since that leads to
// polyfilling older browsers and a larger bundle.
const babelConfigESM = JSON.parse(JSON.stringify(babelConfig));
babelConfigESM.presets[0][1].targets = {
  browsers: [
    'last 2 Chrome versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'last 2 Firefox versions',
    'last 2 Edge versions',
  ]
};

let cache = {};

// Creates a bundle with broad browser support, exposed
// as UMD
gulp.task('js-es5', () => {
  return rollup({
    cache: cache.umd,
    input: 'presentation/js/index.js',
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig),
      terser()
    ]
  }).then(bundle => {
    cache.umd = bundle.cache;
    return bundle.write({
      name: 'Reveal',
      file: './presentation/dist/reveal.js',
      format: 'umd',
      banner: banner,
      sourcemap: true
    });
  });
})

// Creates an ES module bundle
gulp.task('js-es6', () => {
  return rollup({
    cache: cache.esm,
    input: 'presentation/js/index.js',
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfigESM),
      terser()
    ]
  }).then(bundle => {
    cache.esm = bundle.cache;
    return bundle.write({
      file: './presentation/dist/reveal.esm.js',
      format: 'es',
      banner: banner,
      sourcemap: true
    });
  });
})
gulp.task('js', gulp.parallel('js-es5', 'js-es6'));

// Creates a UMD and ES module bundle for each of our
// built-in plugins
const nodeModulesThatShouldBeIncluded = ['highlight\\.js', 'marked', 'plantuml-encoder'];
const nodeModulesIgnore = new RegExp(`node_modules\\/(?!(${nodeModulesThatShouldBeIncluded.join('|')})\\/).*/`)
gulp.task('plugins', () => {
  return Promise.all([
    { name: 'RevealHighlight', input: './presentation/plugin/highlight/plugin.js', output: './presentation/plugin/highlight/highlight' },
    { name: 'RevealMarkdown', input: './presentation/plugin/markdown/plugin.js', output: './presentation/plugin/markdown/markdown' },
    { name: 'RevealSearch', input: './presentation/plugin/search/plugin.js', output: './presentation/plugin/search/search' },
    { name: 'RevealNotes', input: './presentation/plugin/notes/plugin.js', output: './presentation/plugin/notes/notes' },
    { name: 'RevealZoom', input: './presentation/plugin/zoom/plugin.js', output: './presentation/plugin/zoom/zoom' },
  ].map(plugin => {
    return rollup({
      cache: cache[plugin.input],
      input: plugin.input,
      plugins: [
        resolve(),
        commonjs(),
        babel({
          ...babelConfig,
          ignore: [nodeModulesIgnore],
        }),
        terser()
      ]
    }).then(bundle => {
      cache[plugin.input] = bundle.cache;
      bundle.write({
        file: plugin.output + '.esm.js',
        name: plugin.name,
        format: 'es'
      })

      bundle.write({
        file: plugin.output + '.js',
        name: plugin.name,
        format: 'umd'
      })
    });
  }));
})

// a custom pipeable step to transform Sass to CSS
function compileSass() {
  return through.obj((vinylFile, encoding, callback) => {
    const transformedFile = vinylFile.clone();

    sass.render({
      data: transformedFile.contents.toString(),
      includePaths: ['presentation/css/', 'presentation/css/theme/template']
    }, (err, result) => {
      if (err) {
        console.log(vinylFile.path);
        console.log(err.formatted);
      }
      else {
        transformedFile.extname = '.css';
        transformedFile.contents = result.css;
        callback(null, transformedFile);
      }
    });
  });
}

gulp.task('css-themes', () => gulp.src(['./presentation/css/theme/source/*.{sass,scss}'])
  .pipe(compileSass())
  .pipe(gulp.dest('./presentation/dist/theme')))

gulp.task('css-core', () => gulp.src(['presentation/css/reveal.scss'])
  .pipe(compileSass())
  .pipe(autoprefixer())
  .pipe(minify({ compatibility: 'ie9' }))
  .pipe(header(banner))
  .pipe(gulp.dest('./presentation/dist')))

gulp.task('css', gulp.parallel('css-themes', 'css-core'))

gulp.task('eslint', () => gulp.src(['./presentation/js/**', 'gulpfile.js'])
  .pipe(eslint())
  .pipe(eslint.format()))

gulp.task('default', gulp.series(gulp.parallel('js', 'css', 'plugins')))

gulp.task('html', () => gulp.src('./presentation/pug/index.pug').pipe(pug({})).pipe(gulp.dest('./presentation')))

gulp.task('build', gulp.parallel('js', 'css', 'plugins', 'html'))

gulp.task('package', gulp.series(() =>

  gulp.src(
    [
      './presentation/index.html',
      './presentation/dist/**',
      './presentation/lib/**',
      './presentation/images/**',
      './presentation/plugin/**',
      './presentation/**.md'
    ],
    { base: './' }
  )
    .pipe(zip('reveal-js-presentation.zip')).pipe(gulp.dest('./presentation/'))

))

gulp.task('reload', () => gulp.src(['presentation/*.html', 'presentation/*.md'])
  .pipe(connect.reload()));

gulp.task('serve', () => {

  connect.server({
    root: root,
    port: port,
    host: host,
    livereload: true
  })

  gulp.watch(['presentation/*.html'], gulp.series('reload'))

  gulp.watch(['presentation/pug/**'], gulp.series('html'));

  gulp.watch(['presentation/js/**'], gulp.series('js', 'reload', 'eslint'))

  gulp.watch(['presentation/plugin/**/plugin.js', 'presentation/plugin/**/*.html'], gulp.series('plugins', 'reload'))

  gulp.watch([
    'presentation/css/theme/source/*.{sass,scss}',
    'presentation/css/theme/template/*.{sass,scss}',
  ], gulp.series('css-themes', 'reload'))

  gulp.watch([
    'presentation/css/*.scss',
    'presentation/css/print/*.{sass,scss,css}'
  ], gulp.series('css-core', 'reload'))

})
