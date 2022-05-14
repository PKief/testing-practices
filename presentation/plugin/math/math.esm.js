import"regenerator-runtime/runtime.js";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),a=c,u=Function.prototype.call,f=a?u.bind(u):function(){return u.apply(u,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h=p&&!l.call({1:2},1);s.f=h?function(t){var e=p(this,t);return!!e&&e.enumerable}:l;var d,v,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=c,b=Function.prototype,g=b.bind,j=b.call,O=m&&g.bind(j,j),w=m?function(t){return t&&O(t)}:function(t){return t&&function(){return j.apply(t,arguments)}},x=w,S=x({}.toString),E=x("".slice),P=function(t){return E(S(t),8,-1)},T=w,C=o,R=P,M=n.Object,k=T("".split),_=C((function(){return!M("z").propertyIsEnumerable(0)}))?function(t){return"String"==R(t)?k(t,""):M(t)}:M,A=n.TypeError,I=function(t){if(null==t)throw A("Can't call method on "+t);return t},N=_,F=I,J=function(t){return N(F(t))},D=function(t){return"function"==typeof t},L=D,U=function(t){return"object"==typeof t?null!==t:L(t)},$=n,z=D,H=function(t){return z(t)?t:void 0},G=function(t,e){return arguments.length<2?H($[t]):$[t]&&$[t][e]},B=w({}.isPrototypeOf),W=G("navigator","userAgent")||"",q=n,X=W,K=q.process,Q=q.Deno,V=K&&K.versions||Q&&Q.version,Y=V&&V.v8;Y&&(v=(d=Y.split("."))[0]>0&&d[0]<4?1:+(d[0]+d[1])),!v&&X&&(!(d=X.match(/Edge\/(\d+)/))||d[1]>=74)&&(d=X.match(/Chrome\/(\d+)/))&&(v=+d[1]);var Z=v,tt=Z,et=o,nt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),rt=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ot=G,it=D,ct=B,at=rt,ut=n.Object,ft=at?function(t){return"symbol"==typeof t}:function(t){var e=ot("Symbol");return it(e)&&ct(e.prototype,ut(t))},st=n.String,lt=function(t){try{return st(t)}catch(t){return"Object"}},pt=D,ht=lt,dt=n.TypeError,vt=function(t){if(pt(t))return t;throw dt(ht(t)+" is not a function")},yt=vt,mt=function(t,e){var n=t[e];return null==n?void 0:yt(n)},bt=f,gt=D,jt=U,Ot=n.TypeError,wt={exports:{}},xt=n,St=Object.defineProperty,Et=function(t,e){try{St(xt,t,{value:e,configurable:!0,writable:!0})}catch(n){xt[t]=e}return e},Pt=Et,Tt=n["__core-js_shared__"]||Pt("__core-js_shared__",{}),Ct=Tt;(wt.exports=function(t,e){return Ct[t]||(Ct[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Rt=I,Mt=n.Object,kt=function(t){return Mt(Rt(t))},_t=kt,At=w({}.hasOwnProperty),It=Object.hasOwn||function(t,e){return At(_t(t),e)},Nt=w,Ft=0,Jt=Math.random(),Dt=Nt(1..toString),Lt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Ft+Jt,36)},Ut=n,$t=wt.exports,zt=It,Ht=Lt,Gt=nt,Bt=rt,Wt=$t("wks"),qt=Ut.Symbol,Xt=qt&&qt.for,Kt=Bt?qt:qt&&qt.withoutSetter||Ht,Qt=function(t){if(!zt(Wt,t)||!Gt&&"string"!=typeof Wt[t]){var e="Symbol."+t;Gt&&zt(qt,t)?Wt[t]=qt[t]:Wt[t]=Bt&&Xt?Xt(e):Kt(e)}return Wt[t]},Vt=f,Yt=U,Zt=ft,te=mt,ee=function(t,e){var n,r;if("string"===e&&gt(n=t.toString)&&!jt(r=bt(n,t)))return r;if(gt(n=t.valueOf)&&!jt(r=bt(n,t)))return r;if("string"!==e&&gt(n=t.toString)&&!jt(r=bt(n,t)))return r;throw Ot("Can't convert object to primitive value")},ne=Qt,re=n.TypeError,oe=ne("toPrimitive"),ie=function(t,e){if(!Yt(t)||Zt(t))return t;var n,r=te(t,oe);if(r){if(void 0===e&&(e="default"),n=Vt(r,t,e),!Yt(n)||Zt(n))return n;throw re("Can't convert object to primitive value")}return void 0===e&&(e="number"),ee(t,e)},ce=ft,ae=function(t){var e=ie(t,"string");return ce(e)?e:e+""},ue=U,fe=n.document,se=ue(fe)&&ue(fe.createElement),le=function(t){return se?fe.createElement(t):{}},pe=le,he=!i&&!o((function(){return 7!=Object.defineProperty(pe("div"),"a",{get:function(){return 7}}).a})),de=i,ve=f,ye=s,me=y,be=J,ge=ae,je=It,Oe=he,we=Object.getOwnPropertyDescriptor;r.f=de?we:function(t,e){if(t=be(t),e=ge(e),Oe)try{return we(t,e)}catch(t){}if(je(t,e))return me(!ve(ye.f,t,e),t[e])};var xe={},Se=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ee=n,Pe=U,Te=Ee.String,Ce=Ee.TypeError,Re=function(t){if(Pe(t))return t;throw Ce(Te(t)+" is not an object")},Me=i,ke=he,_e=Se,Ae=Re,Ie=ae,Ne=n.TypeError,Fe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor;xe.f=Me?_e?function(t,e,n){if(Ae(t),e=Ie(e),Ae(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=Je(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Fe(t,e,n)}:Fe:function(t,e,n){if(Ae(t),e=Ie(e),Ae(n),ke)try{return Fe(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ne("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var De=xe,Le=y,Ue=i?function(t,e,n){return De.f(t,e,Le(1,n))}:function(t,e,n){return t[e]=n,t},$e={exports:{}},ze=i,He=It,Ge=Function.prototype,Be=ze&&Object.getOwnPropertyDescriptor,We=He(Ge,"name"),qe={EXISTS:We,PROPER:We&&"something"===function(){}.name,CONFIGURABLE:We&&(!ze||ze&&Be(Ge,"name").configurable)},Xe=D,Ke=Tt,Qe=w(Function.toString);Xe(Ke.inspectSource)||(Ke.inspectSource=function(t){return Qe(t)});var Ve,Ye,Ze,tn=Ke.inspectSource,en=D,nn=tn,rn=n.WeakMap,on=en(rn)&&/native code/.test(nn(rn)),cn=wt.exports,an=Lt,un=cn("keys"),fn=function(t){return un[t]||(un[t]=an(t))},sn={},ln=on,pn=n,hn=w,dn=U,vn=Ue,yn=It,mn=Tt,bn=fn,gn=sn,jn=pn.TypeError,On=pn.WeakMap;if(ln||mn.state){var wn=mn.state||(mn.state=new On),xn=hn(wn.get),Sn=hn(wn.has),En=hn(wn.set);Ve=function(t,e){if(Sn(wn,t))throw new jn("Object already initialized");return e.facade=t,En(wn,t,e),e},Ye=function(t){return xn(wn,t)||{}},Ze=function(t){return Sn(wn,t)}}else{var Pn=bn("state");gn[Pn]=!0,Ve=function(t,e){if(yn(t,Pn))throw new jn("Object already initialized");return e.facade=t,vn(t,Pn,e),e},Ye=function(t){return yn(t,Pn)?t[Pn]:{}},Ze=function(t){return yn(t,Pn)}}var Tn={set:Ve,get:Ye,has:Ze,enforce:function(t){return Ze(t)?Ye(t):Ve(t,{})},getterFor:function(t){return function(e){var n;if(!dn(e)||(n=Ye(e)).type!==t)throw jn("Incompatible receiver, "+t+" required");return n}}},Cn=o,Rn=D,Mn=It,kn=i,_n=qe.CONFIGURABLE,An=tn,In=Tn.enforce,Nn=Tn.get,Fn=Object.defineProperty,Jn=kn&&!Cn((function(){return 8!==Fn((function(){}),"length",{value:8}).length})),Dn=String(String).split("String"),Ln=$e.exports=function(t,e,n){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Mn(t,"name")||_n&&t.name!==e)&&Fn(t,"name",{value:e,configurable:!0}),Jn&&n&&Mn(n,"arity")&&t.length!==n.arity&&Fn(t,"length",{value:n.arity}),n&&Mn(n,"constructor")&&n.constructor){if(kn)try{Fn(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var r=In(t);return Mn(r,"source")||(r.source=Dn.join("string"==typeof e?e:"")),t};Function.prototype.toString=Ln((function(){return Rn(this)&&Nn(this).source||An(this)}),"toString");var Un=n,$n=D,zn=Ue,Hn=$e.exports,Gn=Et,Bn=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,a=r&&void 0!==r.name?r.name:e;return $n(n)&&Hn(n,a,r),t===Un?(i?t[e]=n:Gn(e,n),t):(o?!c&&t[e]&&(i=!0):delete t[e],i?t[e]=n:zn(t,e,n),t)},Wn={},qn=Math.ceil,Xn=Math.floor,Kn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Xn:qn)(e)},Qn=Kn,Vn=Math.max,Yn=Math.min,Zn=Kn,tr=Math.min,er=function(t){return t>0?tr(Zn(t),9007199254740991):0},nr=function(t){return er(t.length)},rr=J,or=function(t,e){var n=Qn(t);return n<0?Vn(n+e,0):Yn(n,e)},ir=nr,cr=function(t){return function(e,n,r){var o,i=rr(e),c=ir(i),a=or(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},ar={includes:cr(!0),indexOf:cr(!1)},ur=It,fr=J,sr=ar.indexOf,lr=sn,pr=w([].push),hr=function(t,e){var n,r=fr(t),o=0,i=[];for(n in r)!ur(lr,n)&&ur(r,n)&&pr(i,n);for(;e.length>o;)ur(r,n=e[o++])&&(~sr(i,n)||pr(i,n));return i},dr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vr=hr,yr=dr.concat("length","prototype");Wn.f=Object.getOwnPropertyNames||function(t){return vr(t,yr)};var mr={};mr.f=Object.getOwnPropertySymbols;var br=G,gr=Wn,jr=mr,Or=Re,wr=w([].concat),xr=br("Reflect","ownKeys")||function(t){var e=gr.f(Or(t)),n=jr.f;return n?wr(e,n(t)):e},Sr=It,Er=xr,Pr=r,Tr=xe,Cr=o,Rr=D,Mr=/#|\.prototype\./,kr=function(t,e){var n=Ar[_r(t)];return n==Nr||n!=Ir&&(Rr(e)?Cr(e):!!e)},_r=kr.normalize=function(t){return String(t).replace(Mr,".").toLowerCase()},Ar=kr.data={},Ir=kr.NATIVE="N",Nr=kr.POLYFILL="P",Fr=kr,Jr=n,Dr=r.f,Lr=Ue,Ur=Bn,$r=Et,zr=function(t,e,n){for(var r=Er(e),o=Tr.f,i=Pr.f,c=0;c<r.length;c++){var a=r[c];Sr(t,a)||n&&Sr(n,a)||o(t,a,i(e,a))}},Hr=Fr,Gr=function(t,e){var n,r,o,i,c,a=t.target,u=t.global,f=t.stat;if(n=u?Jr:f?Jr[a]||$r(a,{}):(Jr[a]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=Dr(n,r))&&c.value:n[r],!Hr(u?r:a+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;zr(i,o)}(t.sham||o&&o.sham)&&Lr(i,"sham",!0),Ur(n,r,i,t)}},Br=hr,Wr=dr,qr=Object.keys||function(t){return Br(t,Wr)},Xr=i,Kr=w,Qr=f,Vr=o,Yr=qr,Zr=mr,to=s,eo=kt,no=_,ro=Object.assign,oo=Object.defineProperty,io=Kr([].concat),co=!ro||Vr((function(){if(Xr&&1!==ro({b:1},ro(oo({},"a",{enumerable:!0,get:function(){oo(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=ro({},t)[n]||Yr(ro({},e)).join("")!=r}))?function(t,e){for(var n=eo(t),r=arguments.length,o=1,i=Zr.f,c=to.f;r>o;)for(var a,u=no(arguments[o++]),f=i?io(Yr(u),i(u)):Yr(u),s=f.length,l=0;s>l;)a=f[l++],Xr&&!Qr(c,u,a)||(n[a]=u[a]);return n}:ro,ao=co;function uo(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function fo(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?uo(Object(n),!0).forEach((function(e){po(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):uo(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function so(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function lo(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){so(i,r,o,c,a,"next",t)}function a(t){so(i,r,o,c,a,"throw",t)}c(void 0)}))}}function po(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ho(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function vo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yo(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return vo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vo(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}Gr({target:"Object",stat:!0,arity:2,forced:Object.assign!==ao},{assign:ao});var mo={};mo[Qt("toStringTag")]="z";var bo="[object z]"===String(mo),go=n,jo=bo,Oo=D,wo=P,xo=Qt("toStringTag"),So=go.Object,Eo="Arguments"==wo(function(){return arguments}()),Po=jo?wo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=So(t),xo))?n:Eo?wo(e):"Object"==(r=wo(e))&&Oo(e.callee)?"Arguments":r},To=Po,Co=bo?{}.toString:function(){return"[object "+To(this)+"]"};bo||Bn(Object.prototype,"toString",Co,{unsafe:!0});var Ro="process"==P(n.process),Mo=n,ko=D,_o=Mo.String,Ao=Mo.TypeError,Io=w,No=Re,Fo=function(t){if("object"==typeof t||ko(t))return t;throw Ao("Can't set "+_o(t)+" as a prototype")},Jo=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Io(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return No(n),Fo(r),e?t(n,r):n.__proto__=r,n}}():void 0),Do=xe.f,Lo=It,Uo=Qt("toStringTag"),$o=G,zo=xe,Ho=i,Go=Qt("species"),Bo=B,Wo=n.TypeError,qo=w,Xo=o,Ko=D,Qo=Po,Vo=tn,Yo=function(){},Zo=[],ti=G("Reflect","construct"),ei=/^\s*(?:class|function)\b/,ni=qo(ei.exec),ri=!ei.exec(Yo),oi=function(t){if(!Ko(t))return!1;try{return ti(Yo,Zo,t),!0}catch(t){return!1}},ii=function(t){if(!Ko(t))return!1;switch(Qo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ri||!!ni(ei,Vo(t))}catch(t){return!0}};ii.sham=!0;var ci,ai,ui,fi,si=!ti||Xo((function(){var t;return oi(oi.call)||!oi(Object)||!oi((function(){t=!0}))||t}))?ii:oi,li=si,pi=lt,hi=n.TypeError,di=Re,vi=function(t){if(li(t))return t;throw hi(pi(t)+" is not a constructor")},yi=Qt("species"),mi=c,bi=Function.prototype,gi=bi.apply,ji=bi.call,Oi="object"==typeof Reflect&&Reflect.apply||(mi?ji.bind(gi):function(){return ji.apply(gi,arguments)}),wi=vt,xi=c,Si=w(w.bind),Ei=function(t,e){return wi(t),void 0===e?t:xi?Si(t,e):function(){return t.apply(e,arguments)}},Pi=G("document","documentElement"),Ti=w([].slice),Ci=n.TypeError,Ri=/(?:ipad|iphone|ipod).*applewebkit/i.test(W),Mi=n,ki=Oi,_i=Ei,Ai=D,Ii=It,Ni=o,Fi=Pi,Ji=Ti,Di=le,Li=function(t,e){if(t<e)throw Ci("Not enough arguments");return t},Ui=Ri,$i=Ro,zi=Mi.setImmediate,Hi=Mi.clearImmediate,Gi=Mi.process,Bi=Mi.Dispatch,Wi=Mi.Function,qi=Mi.MessageChannel,Xi=Mi.String,Ki=0,Qi={};try{ci=Mi.location}catch(t){}var Vi=function(t){if(Ii(Qi,t)){var e=Qi[t];delete Qi[t],e()}},Yi=function(t){return function(){Vi(t)}},Zi=function(t){Vi(t.data)},tc=function(t){Mi.postMessage(Xi(t),ci.protocol+"//"+ci.host)};zi&&Hi||(zi=function(t){Li(arguments.length,1);var e=Ai(t)?t:Wi(t),n=Ji(arguments,1);return Qi[++Ki]=function(){ki(e,void 0,n)},ai(Ki),Ki},Hi=function(t){delete Qi[t]},$i?ai=function(t){Gi.nextTick(Yi(t))}:Bi&&Bi.now?ai=function(t){Bi.now(Yi(t))}:qi&&!Ui?(fi=(ui=new qi).port2,ui.port1.onmessage=Zi,ai=_i(fi.postMessage,fi)):Mi.addEventListener&&Ai(Mi.postMessage)&&!Mi.importScripts&&ci&&"file:"!==ci.protocol&&!Ni(tc)?(ai=tc,Mi.addEventListener("message",Zi,!1)):ai="onreadystatechange"in Di("script")?function(t){Fi.appendChild(Di("script")).onreadystatechange=function(){Fi.removeChild(this),Vi(t)}}:function(t){setTimeout(Yi(t),0)});var ec,nc,rc,oc,ic,cc,ac,uc,fc={set:zi,clear:Hi},sc=n,lc=/ipad|iphone|ipod/i.test(W)&&void 0!==sc.Pebble,pc=/web0s(?!.*chrome)/i.test(W),hc=n,dc=Ei,vc=r.f,yc=fc.set,mc=Ri,bc=lc,gc=pc,jc=Ro,Oc=hc.MutationObserver||hc.WebKitMutationObserver,wc=hc.document,xc=hc.process,Sc=hc.Promise,Ec=vc(hc,"queueMicrotask"),Pc=Ec&&Ec.value;Pc||(ec=function(){var t,e;for(jc&&(t=xc.domain)&&t.exit();nc;){e=nc.fn,nc=nc.next;try{e()}catch(t){throw nc?oc():rc=void 0,t}}rc=void 0,t&&t.enter()},mc||jc||gc||!Oc||!wc?!bc&&Sc&&Sc.resolve?((ac=Sc.resolve(void 0)).constructor=Sc,uc=dc(ac.then,ac),oc=function(){uc(ec)}):jc?oc=function(){xc.nextTick(ec)}:(yc=dc(yc,hc),oc=function(){yc(ec)}):(ic=!0,cc=wc.createTextNode(""),new Oc(ec).observe(cc,{characterData:!0}),oc=function(){cc.data=ic=!ic}));var Tc=Pc||function(t){var e={fn:t,next:void 0};rc&&(rc.next=e),nc||(nc=e,oc()),rc=e},Cc=n,Rc=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Mc=function(){this.head=null,this.tail=null};Mc.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}};var kc=Mc,_c=n.Promise,Ac="object"==typeof window&&"object"!=typeof Deno,Ic=n,Nc=_c,Fc=D,Jc=Fr,Dc=tn,Lc=Qt,Uc=Ac,$c=Z;Nc&&Nc.prototype;var zc=Lc("species"),Hc=!1,Gc=Fc(Ic.PromiseRejectionEvent),Bc=Jc("Promise",(function(){var t=Dc(Nc),e=t!==String(Nc);if(!e&&66===$c)return!0;if($c>=51&&/native code/.test(t))return!1;var n=new Nc((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[zc]=r,!(Hc=n.then((function(){}))instanceof r)||!e&&Uc&&!Gc})),Wc={CONSTRUCTOR:Bc,REJECTION_EVENT:Gc,SUBCLASSING:Hc},qc={},Xc=vt,Kc=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Xc(e),this.reject=Xc(n)};qc.f=function(t){return new Kc(t)};var Qc,Vc,Yc,Zc=Gr,ta=Ro,ea=n,na=f,ra=Bn,oa=Jo,ia=function(t,e,n){t&&!n&&(t=t.prototype),t&&!Lo(t,Uo)&&Do(t,Uo,{configurable:!0,value:e})},ca=function(t){var e=$o(t),n=zo.f;Ho&&e&&!e[Go]&&n(e,Go,{configurable:!0,get:function(){return this}})},aa=vt,ua=D,fa=U,sa=function(t,e){if(Bo(e,t))return t;throw Wo("Incorrect invocation")},la=function(t,e){var n,r=di(t).constructor;return void 0===r||null==(n=di(r)[yi])?e:vi(n)},pa=fc.set,ha=Tc,da=function(t,e){var n=Cc.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))},va=Rc,ya=kc,ma=Tn,ba=_c,ga=qc,ja=Wc.CONSTRUCTOR,Oa=Wc.REJECTION_EVENT,wa=Wc.SUBCLASSING,xa=ma.getterFor("Promise"),Sa=ma.set,Ea=ba&&ba.prototype,Pa=ba,Ta=Ea,Ca=ea.TypeError,Ra=ea.document,Ma=ea.process,ka=ga.f,_a=ka,Aa=!!(Ra&&Ra.createEvent&&ea.dispatchEvent),Ia=function(t){var e;return!(!fa(t)||!ua(e=t.then))&&e},Na=function(t,e){var n,r,o,i=e.value,c=1==e.state,a=c?t.ok:t.fail,u=t.resolve,f=t.reject,s=t.domain;try{a?(c||(2===e.rejection&&Ua(e),e.rejection=1),!0===a?n=i:(s&&s.enter(),n=a(i),s&&(s.exit(),o=!0)),n===t.promise?f(Ca("Promise-chain cycle")):(r=Ia(n))?na(r,n,u,f):u(n)):f(i)}catch(t){s&&!o&&s.exit(),f(t)}},Fa=function(t,e){t.notified||(t.notified=!0,ha((function(){for(var n,r=t.reactions;n=r.get();)Na(n,t);t.notified=!1,e&&!t.rejection&&Da(t)})))},Ja=function(t,e,n){var r,o;Aa?((r=Ra.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),ea.dispatchEvent(r)):r={promise:e,reason:n},!Oa&&(o=ea["on"+t])?o(r):"unhandledrejection"===t&&da("Unhandled promise rejection",n)},Da=function(t){na(pa,ea,(function(){var e,n=t.facade,r=t.value;if(La(t)&&(e=va((function(){ta?Ma.emit("unhandledRejection",r,n):Ja("unhandledrejection",n,r)})),t.rejection=ta||La(t)?2:1,e.error))throw e.value}))},La=function(t){return 1!==t.rejection&&!t.parent},Ua=function(t){na(pa,ea,(function(){var e=t.facade;ta?Ma.emit("rejectionHandled",e):Ja("rejectionhandled",e,t.value)}))},$a=function(t,e,n){return function(r){t(e,r,n)}},za=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,Fa(t,!0))},Ha=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Ca("Promise can't be resolved itself");var r=Ia(e);r?ha((function(){var n={done:!1};try{na(r,e,$a(Ha,n,t),$a(za,n,t))}catch(e){za(n,e,t)}})):(t.value=e,t.state=1,Fa(t,!1))}catch(e){za({done:!1},e,t)}}};if(ja&&(Ta=(Pa=function(t){sa(this,Ta),aa(t),na(Qc,this);var e=xa(this);try{t($a(Ha,e),$a(za,e))}catch(t){za(e,t)}}).prototype,(Qc=function(t){Sa(this,{type:"Promise",done:!1,notified:!1,parent:!1,reactions:new ya,rejection:!1,state:0,value:void 0})}).prototype=ra(Ta,"then",(function(t,e){var n=xa(this),r=ka(la(this,Pa));return n.parent=!0,r.ok=!ua(t)||t,r.fail=ua(e)&&e,r.domain=ta?Ma.domain:void 0,0==n.state?n.reactions.add(r):ha((function(){Na(r,n)})),r.promise})),Vc=function(){var t=new Qc,e=xa(t);this.promise=t,this.resolve=$a(Ha,e),this.reject=$a(za,e)},ga.f=ka=function(t){return t===Pa||undefined===t?new Vc(t):_a(t)},ua(ba)&&Ea!==Object.prototype)){Yc=Ea.then,wa||ra(Ea,"then",(function(t,e){var n=this;return new Pa((function(t,e){na(Yc,n,t,e)})).then(t,e)}),{unsafe:!0});try{delete Ea.constructor}catch(t){}oa&&oa(Ea,Ta)}Zc({global:!0,constructor:!0,wrap:!0,forced:ja},{Promise:Pa}),ia(Pa,"Promise",!1),ca("Promise");var Ga={},Ba=Ga,Wa=Qt("iterator"),qa=Array.prototype,Xa=Po,Ka=mt,Qa=Ga,Va=Qt("iterator"),Ya=function(t){if(null!=t)return Ka(t,Va)||Ka(t,"@@iterator")||Qa[Xa(t)]},Za=f,tu=vt,eu=Re,nu=lt,ru=Ya,ou=n.TypeError,iu=f,cu=Re,au=mt,uu=Ei,fu=f,su=Re,lu=lt,pu=function(t){return void 0!==t&&(Ba.Array===t||qa[Wa]===t)},hu=nr,du=B,vu=function(t,e){var n=arguments.length<2?ru(t):e;if(tu(n))return eu(Za(n,t));throw ou(nu(t)+" is not iterable")},yu=Ya,mu=function(t,e,n){var r,o;cu(t);try{if(!(r=au(t,"return"))){if("throw"===e)throw n;return n}r=iu(r,t)}catch(t){o=!0,r=t}if("throw"===e)throw n;if(o)throw r;return cu(r),n},bu=n.TypeError,gu=function(t,e){this.stopped=t,this.result=e},ju=gu.prototype,Ou=function(t,e,n){var r,o,i,c,a,u,f,s=n&&n.that,l=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),h=!(!n||!n.INTERRUPTED),d=uu(e,s),v=function(t){return r&&mu(r,"normal",t),new gu(!0,t)},y=function(t){return l?(su(t),h?d(t[0],t[1],v):d(t[0],t[1])):h?d(t,v):d(t)};if(p)r=t;else{if(!(o=yu(t)))throw bu(lu(t)+" is not iterable");if(pu(o)){for(i=0,c=hu(t);c>i;i++)if((a=y(t[i]))&&du(ju,a))return a;return new gu(!1)}r=vu(t,o)}for(u=r.next;!(f=fu(u,r)).done;){try{a=y(f.value)}catch(t){mu(r,"throw",t)}if("object"==typeof a&&a&&du(ju,a))return a}return new gu(!1)},wu=Qt("iterator"),xu=!1;try{var Su=0,Eu={next:function(){return{done:!!Su++}},return:function(){xu=!0}};Eu[wu]=function(){return this},Array.from(Eu,(function(){throw 2}))}catch(t){}var Pu=_c,Tu=function(t,e){if(!e&&!xu)return!1;var n=!1;try{var r={};r[wu]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n},Cu=Wc.CONSTRUCTOR||!Tu((function(t){Pu.all(t).then(void 0,(function(){}))})),Ru=f,Mu=vt,ku=qc,_u=Rc,Au=Ou;Gr({target:"Promise",stat:!0,forced:Cu},{all:function(t){var e=this,n=ku.f(e),r=n.resolve,o=n.reject,i=_u((function(){var n=Mu(e.resolve),i=[],c=0,a=1;Au(t,(function(t){var u=c++,f=!1;a++,Ru(n,e,t).then((function(t){f||(f=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise}});var Iu=Gr,Nu=Wc.CONSTRUCTOR,Fu=_c,Ju=G,Du=D,Lu=Bn,Uu=Fu&&Fu.prototype;if(Iu({target:"Promise",proto:!0,forced:Nu,real:!0},{catch:function(t){return this.then(void 0,t)}}),Du(Fu)){var $u=Ju("Promise").prototype.catch;Uu.catch!==$u&&Lu(Uu,"catch",$u,{unsafe:!0})}var zu=f,Hu=vt,Gu=qc,Bu=Rc,Wu=Ou;Gr({target:"Promise",stat:!0,forced:Cu},{race:function(t){var e=this,n=Gu.f(e),r=n.reject,o=Bu((function(){var o=Hu(e.resolve);Wu(t,(function(t){zu(o,e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var qu=f,Xu=qc;Gr({target:"Promise",stat:!0,forced:Wc.CONSTRUCTOR},{reject:function(t){var e=Xu.f(this);return qu(e.reject,void 0,t),e.promise}});var Ku=Re,Qu=U,Vu=qc,Yu=Gr,Zu=Wc.CONSTRUCTOR,tf=function(t,e){if(Ku(t),Qu(e)&&e.constructor===t)return e;var n=Vu.f(t);return(0,n.resolve)(e),n.promise};G("Promise"),Yu({target:"Promise",stat:!0,forced:Zu},{resolve:function(t){return tf(this,t)}});var ef={},nf=i,rf=Se,of=xe,cf=Re,af=J,uf=qr;ef.f=nf&&!rf?Object.defineProperties:function(t,e){cf(t);for(var n,r=af(e),o=uf(e),i=o.length,c=0;i>c;)of.f(t,n=o[c++],r[n]);return t};var ff,sf=Re,lf=ef,pf=dr,hf=sn,df=Pi,vf=le,yf=fn("IE_PROTO"),mf=function(){},bf=function(t){return"<script>"+t+"<\/script>"},gf=function(t){t.write(bf("")),t.close();var e=t.parentWindow.Object;return t=null,e},jf=function(){try{ff=new ActiveXObject("htmlfile")}catch(t){}var t,e;jf="undefined"!=typeof document?document.domain&&ff?gf(ff):((e=vf("iframe")).style.display="none",df.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(bf("document.F=Object")),t.close(),t.F):gf(ff);for(var n=pf.length;n--;)delete jf.prototype[pf[n]];return jf()};hf[yf]=!0;var Of=Object.create||function(t,e){var n;return null!==t?(mf.prototype=sf(t),n=new mf,mf.prototype=null,n[yf]=t):n=jf(),void 0===e?n:lf.f(n,e)},wf=xe,xf=Qt("unscopables"),Sf=Array.prototype;null==Sf[xf]&&wf.f(Sf,xf,{configurable:!0,value:Of(null)});var Ef=ar.includes,Pf=function(t){Sf[xf][t]=!0};Gr({target:"Array",proto:!0,forced:o((function(){return!Array(1).includes()}))},{includes:function(t){return Ef(this,t,arguments.length>1?arguments[1]:void 0)}}),Pf("includes");var Tf=U,Cf=P,Rf=Qt("match"),Mf=function(t){var e;return Tf(t)&&(void 0!==(e=t[Rf])?!!e:"RegExp"==Cf(t))},kf=n.TypeError,_f=Po,Af=n.String,If=Qt("match"),Nf=Gr,Ff=function(t){if(Mf(t))throw kf("The method doesn't accept regular expressions");return t},Jf=I,Df=function(t){if("Symbol"===_f(t))throw TypeError("Cannot convert a Symbol value to a string");return Af(t)},Lf=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[If]=!1,"/./"[t](e)}catch(t){}}return!1},Uf=w("".indexOf);Nf({target:"String",proto:!0,forced:!Lf("includes")},{includes:function(t){return!!~Uf(Df(Jf(this)),Df(Ff(t)),arguments.length>1?arguments[1]:void 0)}});var $f=["local","version","extensions"],zf=function(){var t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(n){var r=(t=n).getConfig().mathjax2||t.getConfig().math||{},o=fo(fo({},e),r),i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax=fo(fo({},e.tex2jax),r.tex2jax),o.mathjax=o.config=null,function(t,e){var n=this,r=document.querySelector("head"),o=document.createElement("script");o.type="text/javascript",o.src=t;var i=function(){"function"==typeof e&&(e.call(),e=null)};o.onload=i,o.onreadystatechange=function(){"loaded"===n.readyState&&i()},r.appendChild(o)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},Hf=zf,Gf=Plugin=Object.assign(Hf(),{KaTeX:function(){var t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]},n=function(t){return new Promise((function(e,n){var r=document.createElement("script");r.type="text/javascript",r.onload=e,r.onerror=n,r.src=t,document.head.append(r)}))};function r(){return(r=lo(regeneratorRuntime.mark((function t(e){var r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=yo(e),t.prev=1,r.s();case 3:if((o=r.n()).done){t.next=9;break}return i=o.value,t.next=7,n(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r.e(t.t0);case 14:return t.prev=14,r.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))).apply(this,arguments)}return{id:"katex",init:function(n){var o=this,i=(t=n).getConfig().katex||{},c=fo(fo({},e),i);c.local,c.version,c.extensions;var a=ho(c,$f),u=c.local||"https://cdn.jsdelivr.net/npm/katex",f=c.local?"":"@"+c.version,s=u+f+"/dist/katex.min.css",l=u+f+"/dist/contrib/mhchem.min.js",p=u+f+"/dist/contrib/auto-render.min.js",h=[u+f+"/dist/katex.min.js"];c.extensions&&c.extensions.includes("mhchem")&&h.push(l),h.push(p);var d,v,y=function(){renderMathInElement(n.getSlidesElement(),a),t.layout()};d=s,(v=document.createElement("link")).rel="stylesheet",v.href=d,document.head.appendChild(v),function(t){return r.apply(this,arguments)}(h).then((function(){t.isReady()?y():t.on("ready",y.bind(o))}))}}},MathJax2:zf,MathJax3:function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"mathjax3",init:function(e){var n=e.getConfig().mathjax3||{},r=fo(fo({},t),n);r.tex=fo(fo({},t.tex),n.tex),r.options=fo(fo({},t.options),n.options),r.startup=fo(fo({},t.startup),n.startup);var o=r.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";r.mathjax=null,window.MathJax=r,function(t,e){var n=document.createElement("script");n.type="text/javascript",n.id="MathJax-script",n.src=t,n.async=!0,n.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(n)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});export{Gf as default};
