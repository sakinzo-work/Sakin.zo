(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))d(j);new MutationObserver(j=>{for(const H of j)if(H.type==="childList")for(const G of H.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&d(G)}).observe(document,{childList:!0,subtree:!0});function M(j){const H={};return j.integrity&&(H.integrity=j.integrity),j.referrerPolicy&&(H.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?H.credentials="include":j.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function d(j){if(j.ep)return;j.ep=!0;const H=M(j);fetch(j.href,H)}})();var cc={exports:{}},kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function rh(){if(wf)return kr;wf=1;var v=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function M(d,j,H){var G=null;if(H!==void 0&&(G=""+H),j.key!==void 0&&(G=""+j.key),"key"in j){H={};for(var gn in j)gn!=="key"&&(H[gn]=j[gn])}else H=j;return j=H.ref,{$$typeof:v,type:d,key:G,ref:j!==void 0?j:null,props:H}}return kr.Fragment=A,kr.jsx=M,kr.jsxs=M,kr}var Sf;function lh(){return Sf||(Sf=1,cc.exports=rh()),cc.exports}var S=lh(),sc={exports:{}},zr={},uc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function ih(){return kf||(kf=1,(function(v){function A(x,E){var U=x.length;x.push(E);n:for(;0<U;){var rn=U-1>>>1,sn=x[rn];if(0<j(sn,E))x[rn]=E,x[U]=sn,U=rn;else break n}}function M(x){return x.length===0?null:x[0]}function d(x){if(x.length===0)return null;var E=x[0],U=x.pop();if(U!==E){x[0]=U;n:for(var rn=0,sn=x.length,u=sn>>>1;rn<u;){var k=2*(rn+1)-1,T=x[k],D=k+1,Y=x[D];if(0>j(T,U))D<sn&&0>j(Y,T)?(x[rn]=Y,x[D]=U,rn=D):(x[rn]=T,x[k]=U,rn=k);else if(D<sn&&0>j(Y,U))x[rn]=Y,x[D]=U,rn=D;else break n}}return E}function j(x,E){var U=x.sortIndex-E.sortIndex;return U!==0?U:x.id-E.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;v.unstable_now=function(){return H.now()}}else{var G=Date,gn=G.now();v.unstable_now=function(){return G.now()-gn}}var L=[],z=[],nn=1,N=null,pn=3,$n=!1,Hn=!1,_n=!1,Oe=!1,Wn=typeof setTimeout=="function"?setTimeout:null,Ie=typeof clearTimeout=="function"?clearTimeout:null,Ln=typeof setImmediate<"u"?setImmediate:null;function ce(x){for(var E=M(z);E!==null;){if(E.callback===null)d(z);else if(E.startTime<=x)d(z),E.sortIndex=E.expirationTime,A(L,E);else break;E=M(z)}}function ze(x){if(_n=!1,ce(x),!Hn)if(M(L)!==null)Hn=!0,Rn||(Rn=!0,qn());else{var E=M(z);E!==null&&ye(ze,E.startTime-x)}}var Rn=!1,F=-1,Yn=5,Ae=-1;function Zt(){return Oe?!0:!(v.unstable_now()-Ae<Yn)}function Ee(){if(Oe=!1,Rn){var x=v.unstable_now();Ae=x;var E=!0;try{n:{Hn=!1,_n&&(_n=!1,Ie(F),F=-1),$n=!0;var U=pn;try{e:{for(ce(x),N=M(L);N!==null&&!(N.expirationTime>x&&Zt());){var rn=N.callback;if(typeof rn=="function"){N.callback=null,pn=N.priorityLevel;var sn=rn(N.expirationTime<=x);if(x=v.unstable_now(),typeof sn=="function"){N.callback=sn,ce(x),E=!0;break e}N===M(L)&&d(L),ce(x)}else d(L);N=M(L)}if(N!==null)E=!0;else{var u=M(z);u!==null&&ye(ze,u.startTime-x),E=!1}}break n}finally{N=null,pn=U,$n=!1}E=void 0}}finally{E?qn():Rn=!1}}}var qn;if(typeof Ln=="function")qn=function(){Ln(Ee)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Le=zt.port2;zt.port1.onmessage=Ee,qn=function(){Le.postMessage(null)}}else qn=function(){Wn(Ee,0)};function ye(x,E){F=Wn(function(){x(v.unstable_now())},E)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(x){x.callback=null},v.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yn=0<x?Math.floor(1e3/x):5},v.unstable_getCurrentPriorityLevel=function(){return pn},v.unstable_next=function(x){switch(pn){case 1:case 2:case 3:var E=3;break;default:E=pn}var U=pn;pn=E;try{return x()}finally{pn=U}},v.unstable_requestPaint=function(){Oe=!0},v.unstable_runWithPriority=function(x,E){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var U=pn;pn=x;try{return E()}finally{pn=U}},v.unstable_scheduleCallback=function(x,E,U){var rn=v.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?rn+U:rn):U=rn,x){case 1:var sn=-1;break;case 2:sn=250;break;case 5:sn=1073741823;break;case 4:sn=1e4;break;default:sn=5e3}return sn=U+sn,x={id:nn++,callback:E,priorityLevel:x,startTime:U,expirationTime:sn,sortIndex:-1},U>rn?(x.sortIndex=U,A(z,x),M(L)===null&&x===M(z)&&(_n?(Ie(F),F=-1):_n=!0,ye(ze,U-rn))):(x.sortIndex=sn,A(L,x),Hn||$n||(Hn=!0,Rn||(Rn=!0,qn()))),x},v.unstable_shouldYield=Zt,v.unstable_wrapCallback=function(x){var E=pn;return function(){var U=pn;pn=E;try{return x.apply(this,arguments)}finally{pn=U}}}})(dc)),dc}var zf;function oh(){return zf||(zf=1,uc.exports=ih()),uc.exports}var fc={exports:{}},R={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function ch(){if(Af)return R;Af=1;var v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),G=Symbol.for("react.context"),gn=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),pn=Symbol.iterator;function $n(u){return u===null||typeof u!="object"?null:(u=pn&&u[pn]||u["@@iterator"],typeof u=="function"?u:null)}var Hn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_n=Object.assign,Oe={};function Wn(u,k,T){this.props=u,this.context=k,this.refs=Oe,this.updater=T||Hn}Wn.prototype.isReactComponent={},Wn.prototype.setState=function(u,k){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,k,"setState")},Wn.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Ie(){}Ie.prototype=Wn.prototype;function Ln(u,k,T){this.props=u,this.context=k,this.refs=Oe,this.updater=T||Hn}var ce=Ln.prototype=new Ie;ce.constructor=Ln,_n(ce,Wn.prototype),ce.isPureReactComponent=!0;var ze=Array.isArray;function Rn(){}var F={H:null,A:null,T:null,S:null},Yn=Object.prototype.hasOwnProperty;function Ae(u,k,T){var D=T.ref;return{$$typeof:v,type:u,key:k,ref:D!==void 0?D:null,props:T}}function Zt(u,k){return Ae(u.type,k,u.props)}function Ee(u){return typeof u=="object"&&u!==null&&u.$$typeof===v}function qn(u){var k={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(T){return k[T]})}var zt=/\/+/g;function Le(u,k){return typeof u=="object"&&u!==null&&u.key!=null?qn(""+u.key):k.toString(36)}function ye(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Rn,Rn):(u.status="pending",u.then(function(k){u.status==="pending"&&(u.status="fulfilled",u.value=k)},function(k){u.status==="pending"&&(u.status="rejected",u.reason=k)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function x(u,k,T,D,Y){var Z=typeof u;(Z==="undefined"||Z==="boolean")&&(u=null);var en=!1;if(u===null)en=!0;else switch(Z){case"bigint":case"string":case"number":en=!0;break;case"object":switch(u.$$typeof){case v:case A:en=!0;break;case nn:return en=u._init,x(en(u._payload),k,T,D,Y)}}if(en)return Y=Y(u),en=D===""?"."+Le(u,0):D,ze(Y)?(T="",en!=null&&(T=en.replace(zt,"$&/")+"/"),x(Y,k,T,"",function(ja){return ja})):Y!=null&&(Ee(Y)&&(Y=Zt(Y,T+(Y.key==null||u&&u.key===Y.key?"":(""+Y.key).replace(zt,"$&/")+"/")+en)),k.push(Y)),1;en=0;var Nn=D===""?".":D+":";if(ze(u))for(var bn=0;bn<u.length;bn++)D=u[bn],Z=Nn+Le(D,bn),en+=x(D,k,T,Z,Y);else if(bn=$n(u),typeof bn=="function")for(u=bn.call(u),bn=0;!(D=u.next()).done;)D=D.value,Z=Nn+Le(D,bn++),en+=x(D,k,T,Z,Y);else if(Z==="object"){if(typeof u.then=="function")return x(ye(u),k,T,D,Y);throw k=String(u),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return en}function E(u,k,T){if(u==null)return u;var D=[],Y=0;return x(u,D,"","",function(Z){return k.call(T,Z,Y++)}),D}function U(u){if(u._status===-1){var k=u._result;k=k(),k.then(function(T){(u._status===0||u._status===-1)&&(u._status=1,u._result=T)},function(T){(u._status===0||u._status===-1)&&(u._status=2,u._result=T)}),u._status===-1&&(u._status=0,u._result=k)}if(u._status===1)return u._result.default;throw u._result}var rn=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},sn={map:E,forEach:function(u,k,T){E(u,function(){k.apply(this,arguments)},T)},count:function(u){var k=0;return E(u,function(){k++}),k},toArray:function(u){return E(u,function(k){return k})||[]},only:function(u){if(!Ee(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return R.Activity=N,R.Children=sn,R.Component=Wn,R.Fragment=M,R.Profiler=j,R.PureComponent=Ln,R.StrictMode=d,R.Suspense=L,R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,R.__COMPILER_RUNTIME={__proto__:null,c:function(u){return F.H.useMemoCache(u)}},R.cache=function(u){return function(){return u.apply(null,arguments)}},R.cacheSignal=function(){return null},R.cloneElement=function(u,k,T){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var D=_n({},u.props),Y=u.key;if(k!=null)for(Z in k.key!==void 0&&(Y=""+k.key),k)!Yn.call(k,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&k.ref===void 0||(D[Z]=k[Z]);var Z=arguments.length-2;if(Z===1)D.children=T;else if(1<Z){for(var en=Array(Z),Nn=0;Nn<Z;Nn++)en[Nn]=arguments[Nn+2];D.children=en}return Ae(u.type,Y,D)},R.createContext=function(u){return u={$$typeof:G,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:H,_context:u},u},R.createElement=function(u,k,T){var D,Y={},Z=null;if(k!=null)for(D in k.key!==void 0&&(Z=""+k.key),k)Yn.call(k,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(Y[D]=k[D]);var en=arguments.length-2;if(en===1)Y.children=T;else if(1<en){for(var Nn=Array(en),bn=0;bn<en;bn++)Nn[bn]=arguments[bn+2];Y.children=Nn}if(u&&u.defaultProps)for(D in en=u.defaultProps,en)Y[D]===void 0&&(Y[D]=en[D]);return Ae(u,Z,Y)},R.createRef=function(){return{current:null}},R.forwardRef=function(u){return{$$typeof:gn,render:u}},R.isValidElement=Ee,R.lazy=function(u){return{$$typeof:nn,_payload:{_status:-1,_result:u},_init:U}},R.memo=function(u,k){return{$$typeof:z,type:u,compare:k===void 0?null:k}},R.startTransition=function(u){var k=F.T,T={};F.T=T;try{var D=u(),Y=F.S;Y!==null&&Y(T,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Rn,rn)}catch(Z){rn(Z)}finally{k!==null&&T.types!==null&&(k.types=T.types),F.T=k}},R.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},R.use=function(u){return F.H.use(u)},R.useActionState=function(u,k,T){return F.H.useActionState(u,k,T)},R.useCallback=function(u,k){return F.H.useCallback(u,k)},R.useContext=function(u){return F.H.useContext(u)},R.useDebugValue=function(){},R.useDeferredValue=function(u,k){return F.H.useDeferredValue(u,k)},R.useEffect=function(u,k){return F.H.useEffect(u,k)},R.useEffectEvent=function(u){return F.H.useEffectEvent(u)},R.useId=function(){return F.H.useId()},R.useImperativeHandle=function(u,k,T){return F.H.useImperativeHandle(u,k,T)},R.useInsertionEffect=function(u,k){return F.H.useInsertionEffect(u,k)},R.useLayoutEffect=function(u,k){return F.H.useLayoutEffect(u,k)},R.useMemo=function(u,k){return F.H.useMemo(u,k)},R.useOptimistic=function(u,k){return F.H.useOptimistic(u,k)},R.useReducer=function(u,k,T){return F.H.useReducer(u,k,T)},R.useRef=function(u){return F.H.useRef(u)},R.useState=function(u){return F.H.useState(u)},R.useSyncExternalStore=function(u,k,T){return F.H.useSyncExternalStore(u,k,T)},R.useTransition=function(){return F.H.useTransition()},R.version="19.2.8",R}var Ef;function vc(){return Ef||(Ef=1,fc.exports=ch()),fc.exports}var pc={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function sh(){if(Tf)return Bn;Tf=1;var v=vc();function A(L){var z="https://react.dev/errors/"+L;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var nn=2;nn<arguments.length;nn++)z+="&args[]="+encodeURIComponent(arguments[nn])}return"Minified React error #"+L+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var d={d:{f:M,r:function(){throw Error(A(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},j=Symbol.for("react.portal");function H(L,z,nn){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:N==null?null:""+N,children:L,containerInfo:z,implementation:nn}}var G=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gn(L,z){if(L==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Bn.createPortal=function(L,z){var nn=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(A(299));return H(L,z,null,nn)},Bn.flushSync=function(L){var z=G.T,nn=d.p;try{if(G.T=null,d.p=2,L)return L()}finally{G.T=z,d.p=nn,d.d.f()}},Bn.preconnect=function(L,z){typeof L=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,d.d.C(L,z))},Bn.prefetchDNS=function(L){typeof L=="string"&&d.d.D(L)},Bn.preinit=function(L,z){if(typeof L=="string"&&z&&typeof z.as=="string"){var nn=z.as,N=gn(nn,z.crossOrigin),pn=typeof z.integrity=="string"?z.integrity:void 0,$n=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;nn==="style"?d.d.S(L,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:N,integrity:pn,fetchPriority:$n}):nn==="script"&&d.d.X(L,{crossOrigin:N,integrity:pn,fetchPriority:$n,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Bn.preinitModule=function(L,z){if(typeof L=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var nn=gn(z.as,z.crossOrigin);d.d.M(L,{crossOrigin:nn,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&d.d.M(L)},Bn.preload=function(L,z){if(typeof L=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var nn=z.as,N=gn(nn,z.crossOrigin);d.d.L(L,nn,{crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Bn.preloadModule=function(L,z){if(typeof L=="string")if(z){var nn=gn(z.as,z.crossOrigin);d.d.m(L,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:nn,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else d.d.m(L)},Bn.requestFormReset=function(L){d.d.r(L)},Bn.unstable_batchedUpdates=function(L,z){return L(z)},Bn.useFormState=function(L,z,nn){return G.H.useFormState(L,z,nn)},Bn.useFormStatus=function(){return G.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var Mf;function uh(){if(Mf)return pc.exports;Mf=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(A){console.error(A)}}return v(),pc.exports=sh(),pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function dh(){if(Cf)return zr;Cf=1;var v=oh(),A=vc(),M=uh();function d(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function H(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function G(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function gn(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function L(n){if(H(n)!==n)throw Error(d(188))}function z(n){var e=n.alternate;if(!e){if(e=H(n),e===null)throw Error(d(188));return e!==n?null:n}for(var t=n,a=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return L(r),n;if(l===a)return L(r),e;l=l.sibling}throw Error(d(188))}if(t.return!==a.return)t=r,a=l;else{for(var i=!1,o=r.child;o;){if(o===t){i=!0,t=r,a=l;break}if(o===a){i=!0,a=r,t=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===t){i=!0,t=l,a=r;break}if(o===a){i=!0,a=l,t=r;break}o=o.sibling}if(!i)throw Error(d(189))}}if(t.alternate!==a)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?n:e}function nn(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=nn(n),e!==null)return e;n=n.sibling}return null}var N=Object.assign,pn=Symbol.for("react.element"),$n=Symbol.for("react.transitional.element"),Hn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Wn=Symbol.for("react.profiler"),Ie=Symbol.for("react.consumer"),Ln=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Rn=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),Zt=Symbol.for("react.memo_cache_sentinel"),Ee=Symbol.iterator;function qn(n){return n===null||typeof n!="object"?null:(n=Ee&&n[Ee]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Symbol.for("react.client.reference");function Le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===zt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _n:return"Fragment";case Wn:return"Profiler";case Oe:return"StrictMode";case ze:return"Suspense";case Rn:return"SuspenseList";case Ae:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Hn:return"Portal";case Ln:return n.displayName||"Context";case Ie:return(n._context.displayName||"Context")+".Consumer";case ce:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return e=n.displayName||null,e!==null?e:Le(n.type)||"Memo";case Yn:e=n._payload,n=n._init;try{return Le(n(e))}catch{}}return null}var ye=Array.isArray,x=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},rn=[],sn=-1;function u(n){return{current:n}}function k(n){0>sn||(n.current=rn[sn],rn[sn]=null,sn--)}function T(n,e){sn++,rn[sn]=n.current,n.current=e}var D=u(null),Y=u(null),Z=u(null),en=u(null);function Nn(n,e){switch(T(Z,e),T(Y,n),T(D,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Gd(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Gd(e),n=Zd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}k(D),T(D,n)}function bn(){k(D),k(Y),k(Z)}function ja(n){n.memoizedState!==null&&T(en,n);var e=D.current,t=Zd(e,n.type);e!==t&&(T(Y,n),T(D,t))}function Ar(n){Y.current===n&&(k(D),k(Y)),en.current===n&&(k(en),xr._currentValue=U)}var Gl,xc;function At(n){if(Gl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||"",xc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gl+n+xc}var Zl=!1;function Xl(n,e){if(!n||Zl)return"";Zl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var w=function(){throw Error()};if(Object.defineProperty(w.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(w,[])}catch(m){var g=m}Reflect.construct(n,[],w)}else{try{w.call()}catch(m){g=m}n.call(w.prototype)}}else{try{throw Error()}catch(m){g=m}(w=n())&&typeof w.catch=="function"&&w.catch(function(){})}}catch(m){if(m&&g&&typeof m.stack=="string")return[m.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),i=l[0],o=l[1];if(i&&o){var c=i.split(`
`),h=o.split(`
`);for(r=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;r<h.length&&!h[r].includes("DetermineComponentFrameRoot");)r++;if(a===c.length||r===h.length)for(a=c.length-1,r=h.length-1;1<=a&&0<=r&&c[a]!==h[r];)r--;for(;1<=a&&0<=r;a--,r--)if(c[a]!==h[r]){if(a!==1||r!==1)do if(a--,r--,0>r||c[a]!==h[r]){var b=`
`+c[a].replace(" at new "," at ");return n.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",n.displayName)),b}while(1<=a&&0<=r);break}}}finally{Zl=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?At(t):""}function _f(n,e){switch(n.tag){case 26:case 27:case 5:return At(n.type);case 16:return At("Lazy");case 13:return n.child!==e&&e!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return Xl(n.type,!1);case 11:return Xl(n.type.render,!1);case 1:return Xl(n.type,!0);case 31:return At("Activity");default:return""}}function yc(n){try{var e="",t=null;do e+=_f(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Vl=Object.prototype.hasOwnProperty,Kl=v.unstable_scheduleCallback,Jl=v.unstable_cancelCallback,Nf=v.unstable_shouldYield,Uf=v.unstable_requestPaint,In=v.unstable_now,Hf=v.unstable_getCurrentPriorityLevel,wc=v.unstable_ImmediatePriority,Sc=v.unstable_UserBlockingPriority,Er=v.unstable_NormalPriority,Rf=v.unstable_LowPriority,kc=v.unstable_IdlePriority,Yf=v.log,qf=v.unstable_setDisableYieldValue,Da=null,Pn=null;function Pe(n){if(typeof Yf=="function"&&qf(n),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(Da,n)}catch{}}var ne=Math.clz32?Math.clz32:Zf,Qf=Math.log,Gf=Math.LN2;function Zf(n){return n>>>=0,n===0?32:31-(Qf(n)/Gf|0)|0}var Tr=256,Mr=262144,Cr=4194304;function Et(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function jr(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var r=0,l=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var o=a&134217727;return o!==0?(a=o&~l,a!==0?r=Et(a):(i&=o,i!==0?r=Et(i):t||(t=o&~n,t!==0&&(r=Et(t))))):(o=a&~l,o!==0?r=Et(o):i!==0?r=Et(i):t||(t=a&~n,t!==0&&(r=Et(t)))),r===0?0:e!==0&&e!==r&&(e&l)===0&&(l=r&-r,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:r}function Oa(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Xf(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var n=Cr;return Cr<<=1,(Cr&62914560)===0&&(Cr=4194304),n}function Fl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function La(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Vf(n,e,t,a,r,l){var i=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var o=n.entanglements,c=n.expirationTimes,h=n.hiddenUpdates;for(t=i&~t;0<t;){var b=31-ne(t),w=1<<b;o[b]=0,c[b]=-1;var g=h[b];if(g!==null)for(h[b]=null,b=0;b<g.length;b++){var m=g[b];m!==null&&(m.lane&=-536870913)}t&=~w}a!==0&&Ac(n,a,0),l!==0&&r===0&&n.tag!==0&&(n.suspendedLanes|=l&~(i&~e))}function Ac(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-ne(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function Ec(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-ne(t),r=1<<a;r&e|n[a]&e&&(n[a]|=e),t&=~r}}function Tc(n,e){var t=e&-e;return t=(t&42)!==0?1:$l(t),(t&(n.suspendedLanes|e))!==0?0:t}function $l(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Wl(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Mc(){var n=E.p;return n!==0?n:(n=window.event,n===void 0?32:hf(n.type))}function Cc(n,e){var t=E.p;try{return E.p=n,e()}finally{E.p=t}}var nt=Math.random().toString(36).slice(2),Mn="__reactFiber$"+nt,Qn="__reactProps$"+nt,Xt="__reactContainer$"+nt,Il="__reactEvents$"+nt,Kf="__reactListeners$"+nt,Jf="__reactHandles$"+nt,jc="__reactResources$"+nt,Ba="__reactMarker$"+nt;function Pl(n){delete n[Mn],delete n[Qn],delete n[Il],delete n[Kf],delete n[Jf]}function Vt(n){var e=n[Mn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Xt]||t[Mn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Wd(n);n!==null;){if(t=n[Mn])return t;n=Wd(n)}return e}n=t,t=n.parentNode}return null}function Kt(n){if(n=n[Mn]||n[Xt]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function _a(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(d(33))}function Jt(n){var e=n[jc];return e||(e=n[jc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function En(n){n[Ba]=!0}var Dc=new Set,Oc={};function Tt(n,e){Ft(n,e),Ft(n+"Capture",e)}function Ft(n,e){for(Oc[n]=e,n=0;n<e.length;n++)Dc.add(e[n])}var Ff=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lc={},Bc={};function $f(n){return Vl.call(Bc,n)?!0:Vl.call(Lc,n)?!1:Ff.test(n)?Bc[n]=!0:(Lc[n]=!0,!1)}function Dr(n,e,t){if($f(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Or(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Be(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+a)}}function se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function _c(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wf(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(i){t=""+i,l.call(this,i)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ni(n){if(!n._valueTracker){var e=_c(n)?"checked":"value";n._valueTracker=Wf(n,e,""+n[e])}}function Nc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=_c(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var If=/[\n"\\]/g;function ue(n){return n.replace(If,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ei(n,e,t,a,r,l,i,o){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+se(e)):n.value!==""+se(e)&&(n.value=""+se(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?ti(n,i,se(e)):t!=null?ti(n,i,se(t)):a!=null&&n.removeAttribute("value"),r==null&&l!=null&&(n.defaultChecked=!!l),r!=null&&(n.checked=r&&typeof r!="function"&&typeof r!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+se(o):n.removeAttribute("name")}function Uc(n,e,t,a,r,l,i,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ni(n);return}t=t!=null?""+se(t):"",e=e!=null?""+se(e):t,o||e===n.value||(n.value=e),n.defaultValue=e}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=o?n.checked:!!a,n.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),ni(n)}function ti(n,e,t){e==="number"&&Lr(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function $t(n,e,t,a){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&a&&(n[t].defaultSelected=!0)}else{for(t=""+se(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,a&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Hc(n,e,t){if(e!=null&&(e=""+se(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+se(t):""}function Rc(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(d(92));if(ye(a)){if(1<a.length)throw Error(d(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=se(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),ni(n)}function Wt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Pf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yc(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||Pf.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function qc(n,e,t){if(e!=null&&typeof e!="object")throw Error(d(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var r in e)a=e[r],e.hasOwnProperty(r)&&t[r]!==a&&Yc(n,r,a)}else for(var l in e)e.hasOwnProperty(l)&&Yc(n,l,e[l])}function ai(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(n){return ep.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function _e(){}var ri=null;function li(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var It=null,Pt=null;function Qc(n){var e=Kt(n);if(e&&(n=e.stateNode)){var t=n[Qn]||null;n:switch(n=e.stateNode,e.type){case"input":if(ei(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ue(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var r=a[Qn]||null;if(!r)throw Error(d(90));ei(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&Nc(a)}break n;case"textarea":Hc(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&$t(n,!!t.multiple,e,!1)}}}var ii=!1;function Gc(n,e,t){if(ii)return n(e,t);ii=!0;try{var a=n(e);return a}finally{if(ii=!1,(It!==null||Pt!==null)&&(wl(),It&&(e=It,n=Pt,Pt=It=null,Qc(e),n)))for(e=0;e<n.length;e++)Qc(n[e])}}function Na(n,e){var t=n.stateNode;if(t===null)return null;var a=t[Qn]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(d(231,e,typeof t));return t}var Ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=!1;if(Ne)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){oi=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{oi=!1}var et=null,ci=null,_r=null;function Zc(){if(_r)return _r;var n,e=ci,t=e.length,a,r="value"in et?et.value:et.textContent,l=r.length;for(n=0;n<t&&e[n]===r[n];n++);var i=t-n;for(a=1;a<=i&&e[t-a]===r[l-a];a++);return _r=r.slice(n,1<a?1-a:void 0)}function Nr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ur(){return!0}function Xc(){return!1}function Gn(n){function e(t,a,r,l,i){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ur:Xc,this.isPropagationStopped=Xc,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),e}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hr=Gn(Mt),Ha=N({},Mt,{view:0,detail:0}),tp=Gn(Ha),si,ui,Ra,Rr=N({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ra&&(Ra&&n.type==="mousemove"?(si=n.screenX-Ra.screenX,ui=n.screenY-Ra.screenY):ui=si=0,Ra=n),si)},movementY:function(n){return"movementY"in n?n.movementY:ui}}),Vc=Gn(Rr),ap=N({},Rr,{dataTransfer:0}),rp=Gn(ap),lp=N({},Ha,{relatedTarget:0}),di=Gn(lp),ip=N({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),op=Gn(ip),cp=N({},Mt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sp=Gn(cp),up=N({},Mt,{data:0}),Kc=Gn(up),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=pp[n])?!!e[n]:!1}function fi(){return hp}var gp=N({},Ha,{key:function(n){if(n.key){var e=dp[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Nr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fi,charCode:function(n){return n.type==="keypress"?Nr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mp=Gn(gp),vp=N({},Rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=Gn(vp),bp=N({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fi}),xp=Gn(bp),yp=N({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=Gn(yp),Sp=N({},Rr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kp=Gn(Sp),zp=N({},Mt,{newState:0,oldState:0}),Ap=Gn(zp),Ep=[9,13,27,32],pi=Ne&&"CompositionEvent"in window,Ya=null;Ne&&"documentMode"in document&&(Ya=document.documentMode);var Tp=Ne&&"TextEvent"in window&&!Ya,Fc=Ne&&(!pi||Ya&&8<Ya&&11>=Ya),$c=" ",Wc=!1;function Ic(n,e){switch(n){case"keyup":return Ep.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var na=!1;function Mp(n,e){switch(n){case"compositionend":return Pc(e);case"keypress":return e.which!==32?null:(Wc=!0,$c);case"textInput":return n=e.data,n===$c&&Wc?null:n;default:return null}}function Cp(n,e){if(na)return n==="compositionend"||!pi&&Ic(n,e)?(n=Zc(),_r=ci=et=null,na=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fc&&e.locale!=="ko"?null:e.data;default:return null}}var jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!jp[n.type]:e==="textarea"}function es(n,e,t,a){It?Pt?Pt.push(a):Pt=[a]:It=a,e=Ml(e,"onChange"),0<e.length&&(t=new Hr("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var qa=null,Qa=null;function Dp(n){Ud(n,0)}function Yr(n){var e=_a(n);if(Nc(e))return n}function ts(n,e){if(n==="change")return e}var as=!1;if(Ne){var hi;if(Ne){var gi="oninput"in document;if(!gi){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),gi=typeof rs.oninput=="function"}hi=gi}else hi=!1;as=hi&&(!document.documentMode||9<document.documentMode)}function ls(){qa&&(qa.detachEvent("onpropertychange",is),Qa=qa=null)}function is(n){if(n.propertyName==="value"&&Yr(Qa)){var e=[];es(e,Qa,n,li(n)),Gc(Dp,e)}}function Op(n,e,t){n==="focusin"?(ls(),qa=e,Qa=t,qa.attachEvent("onpropertychange",is)):n==="focusout"&&ls()}function Lp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yr(Qa)}function Bp(n,e){if(n==="click")return Yr(e)}function _p(n,e){if(n==="input"||n==="change")return Yr(e)}function Np(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ee=typeof Object.is=="function"?Object.is:Np;function Ga(n,e){if(ee(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!Vl.call(e,r)||!ee(n[r],e[r]))return!1}return!0}function os(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cs(n,e){var t=os(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=os(t)}}function ss(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ss(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function us(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Lr(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Lr(n.document)}return e}function mi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Up=Ne&&"documentMode"in document&&11>=document.documentMode,ea=null,vi=null,Za=null,bi=!1;function ds(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bi||ea==null||ea!==Lr(a)||(a=ea,"selectionStart"in a&&mi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Ga(Za,a)||(Za=a,a=Ml(vi,"onSelect"),0<a.length&&(e=new Hr("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=ea)))}function Ct(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ta={animationend:Ct("Animation","AnimationEnd"),animationiteration:Ct("Animation","AnimationIteration"),animationstart:Ct("Animation","AnimationStart"),transitionrun:Ct("Transition","TransitionRun"),transitionstart:Ct("Transition","TransitionStart"),transitioncancel:Ct("Transition","TransitionCancel"),transitionend:Ct("Transition","TransitionEnd")},xi={},fs={};Ne&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function jt(n){if(xi[n])return xi[n];if(!ta[n])return n;var e=ta[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in fs)return xi[n]=e[t];return n}var ps=jt("animationend"),hs=jt("animationiteration"),gs=jt("animationstart"),Hp=jt("transitionrun"),Rp=jt("transitionstart"),Yp=jt("transitioncancel"),ms=jt("transitionend"),vs=new Map,yi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yi.push("scrollEnd");function we(n,e){vs.set(n,e),Tt(e,[n])}var qr=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},de=[],aa=0,wi=0;function Qr(){for(var n=aa,e=wi=aa=0;e<n;){var t=de[e];de[e++]=null;var a=de[e];de[e++]=null;var r=de[e];de[e++]=null;var l=de[e];if(de[e++]=null,a!==null&&r!==null){var i=a.pending;i===null?r.next=r:(r.next=i.next,i.next=r),a.pending=r}l!==0&&bs(t,r,l)}}function Gr(n,e,t,a){de[aa++]=n,de[aa++]=e,de[aa++]=t,de[aa++]=a,wi|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Si(n,e,t,a){return Gr(n,e,t,a),Zr(n)}function Dt(n,e){return Gr(n,null,null,e),Zr(n)}function bs(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var r=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(r=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,r&&e!==null&&(r=31-ne(t),n=l.hiddenUpdates,a=n[r],a===null?n[r]=[e]:a.push(e),e.lane=t|536870912),l):null}function Zr(n){if(50<fr)throw fr=0,Oo=null,Error(d(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ra={};function qp(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function te(n,e,t,a){return new qp(n,e,t,a)}function ki(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ue(n,e){var t=n.alternate;return t===null?(t=te(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function xs(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Xr(n,e,t,a,r,l){var i=0;if(a=n,typeof n=="function")ki(n)&&(i=1);else if(typeof n=="string")i=V0(n,t,D.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Ae:return n=te(31,t,e,r),n.elementType=Ae,n.lanes=l,n;case _n:return Ot(t.children,r,l,e);case Oe:i=8,r|=24;break;case Wn:return n=te(12,t,e,r|2),n.elementType=Wn,n.lanes=l,n;case ze:return n=te(13,t,e,r),n.elementType=ze,n.lanes=l,n;case Rn:return n=te(19,t,e,r),n.elementType=Rn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ln:i=10;break n;case Ie:i=9;break n;case ce:i=11;break n;case F:i=14;break n;case Yn:i=16,a=null;break n}i=29,t=Error(d(130,n===null?"null":typeof n,"")),a=null}return e=te(i,t,e,r),e.elementType=n,e.type=a,e.lanes=l,e}function Ot(n,e,t,a){return n=te(7,n,a,e),n.lanes=t,n}function zi(n,e,t){return n=te(6,n,null,e),n.lanes=t,n}function ys(n){var e=te(18,null,null,0);return e.stateNode=n,e}function Ai(n,e,t){return e=te(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var ws=new WeakMap;function fe(n,e){if(typeof n=="object"&&n!==null){var t=ws.get(n);return t!==void 0?t:(e={value:n,source:e,stack:yc(e)},ws.set(n,e),e)}return{value:n,source:e,stack:yc(e)}}var la=[],ia=0,Vr=null,Xa=0,pe=[],he=0,tt=null,Te=1,Me="";function He(n,e){la[ia++]=Xa,la[ia++]=Vr,Vr=n,Xa=e}function Ss(n,e,t){pe[he++]=Te,pe[he++]=Me,pe[he++]=tt,tt=n;var a=Te;n=Me;var r=32-ne(a)-1;a&=~(1<<r),t+=1;var l=32-ne(e)+r;if(30<l){var i=r-r%5;l=(a&(1<<i)-1).toString(32),a>>=i,r-=i,Te=1<<32-ne(e)+r|t<<r|a,Me=l+n}else Te=1<<l|t<<r|a,Me=n}function Ei(n){n.return!==null&&(He(n,1),Ss(n,1,0))}function Ti(n){for(;n===Vr;)Vr=la[--ia],la[ia]=null,Xa=la[--ia],la[ia]=null;for(;n===tt;)tt=pe[--he],pe[he]=null,Me=pe[--he],pe[he]=null,Te=pe[--he],pe[he]=null}function ks(n,e){pe[he++]=Te,pe[he++]=Me,pe[he++]=tt,Te=e.id,Me=e.overflow,tt=n}var Cn=null,dn=null,$=!1,at=null,ge=!1,Mi=Error(d(519));function rt(n){var e=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(fe(e,n)),Mi}function zs(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[Mn]=n,e[Qn]=a,t){case"dialog":V("cancel",e),V("close",e);break;case"iframe":case"object":case"embed":V("load",e);break;case"video":case"audio":for(t=0;t<hr.length;t++)V(hr[t],e);break;case"source":V("error",e);break;case"img":case"image":case"link":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"input":V("invalid",e),Uc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":V("invalid",e);break;case"textarea":V("invalid",e),Rc(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||qd(e.textContent,t)?(a.popover!=null&&(V("beforetoggle",e),V("toggle",e)),a.onScroll!=null&&V("scroll",e),a.onScrollEnd!=null&&V("scrollend",e),a.onClick!=null&&(e.onclick=_e),e=!0):e=!1,e||rt(n,!0)}function As(n){for(Cn=n.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:ge=!1;return;case 27:case 3:ge=!0;return;default:Cn=Cn.return}}function oa(n){if(n!==Cn)return!1;if(!$)return As(n),$=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Ko(n.type,n.memoizedProps)),t=!t),t&&dn&&rt(n),As(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));dn=$d(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));dn=$d(n)}else e===27?(e=dn,bt(n.type)?(n=Io,Io=null,dn=n):dn=e):dn=Cn?ve(n.stateNode.nextSibling):null;return!0}function Lt(){dn=Cn=null,$=!1}function Ci(){var n=at;return n!==null&&(Kn===null?Kn=n:Kn.push.apply(Kn,n),at=null),n}function Va(n){at===null?at=[n]:at.push(n)}var ji=u(null),Bt=null,Re=null;function lt(n,e,t){T(ji,e._currentValue),e._currentValue=t}function Ye(n){n._currentValue=ji.current,k(ji)}function Di(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function Oi(n,e,t,a){var r=n.child;for(r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){var i=r.child;l=l.firstContext;n:for(;l!==null;){var o=l;l=r;for(var c=0;c<e.length;c++)if(o.context===e[c]){l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),Di(l.return,t,n),a||(i=null);break n}l=o.next}}else if(r.tag===18){if(i=r.return,i===null)throw Error(d(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Di(i,t,n),i=null}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===n){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}}function ca(n,e,t,a){n=null;for(var r=e,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var i=r.alternate;if(i===null)throw Error(d(387));if(i=i.memoizedProps,i!==null){var o=r.type;ee(r.pendingProps.value,i.value)||(n!==null?n.push(o):n=[o])}}else if(r===en.current){if(i=r.alternate,i===null)throw Error(d(387));i.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(n!==null?n.push(xr):n=[xr])}r=r.return}n!==null&&Oi(e,n,t,a),e.flags|=262144}function Kr(n){for(n=n.firstContext;n!==null;){if(!ee(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function _t(n){Bt=n,Re=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function jn(n){return Es(Bt,n)}function Jr(n,e){return Bt===null&&_t(n),Es(n,e)}function Es(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Re===null){if(n===null)throw Error(d(308));Re=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Re=Re.next=e;return t}var Qp=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Gp=v.unstable_scheduleCallback,Zp=v.unstable_NormalPriority,wn={$$typeof:Ln,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Li(){return{controller:new Qp,data:new Map,refCount:0}}function Ka(n){n.refCount--,n.refCount===0&&Gp(Zp,function(){n.controller.abort()})}var Ja=null,Bi=0,sa=0,ua=null;function Xp(n,e){if(Ja===null){var t=Ja=[];Bi=0,sa=Ho(),ua={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Bi++,e.then(Ts,Ts),e}function Ts(){if(--Bi===0&&Ja!==null){ua!==null&&(ua.status="fulfilled");var n=Ja;Ja=null,sa=0,ua=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Vp(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var r=0;r<t.length;r++)(0,t[r])(e)},function(r){for(a.status="rejected",a.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),a}var Ms=x.S;x.S=function(n,e){dd=In(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xp(n,e),Ms!==null&&Ms(n,e)};var Nt=u(null);function _i(){var n=Nt.current;return n!==null?n:un.pooledCache}function Fr(n,e){e===null?T(Nt,Nt.current):T(Nt,e.pool)}function Cs(){var n=_i();return n===null?null:{parent:wn._currentValue,pool:n}}var da=Error(d(460)),Ni=Error(d(474)),$r=Error(d(542)),Wr={then:function(){}};function js(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ds(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(_e,_e),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Ls(n),n;default:if(typeof e.status=="string")e.then(_e,_e);else{if(n=un,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=a}},function(a){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Ls(n),n}throw Ht=e,da}}function Ut(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ht=t,da):t}}var Ht=null;function Os(){if(Ht===null)throw Error(d(459));var n=Ht;return Ht=null,n}function Ls(n){if(n===da||n===$r)throw Error(d(483))}var fa=null,Fa=0;function Ir(n){var e=Fa;return Fa+=1,fa===null&&(fa=[]),Ds(fa,n,e)}function $a(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Pr(n,e){throw e.$$typeof===pn?Error(d(525)):(n=Object.prototype.toString.call(e),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Bs(n){function e(f,s){if(n){var p=f.deletions;p===null?(f.deletions=[s],f.flags|=16):p.push(s)}}function t(f,s){if(!n)return null;for(;s!==null;)e(f,s),s=s.sibling;return null}function a(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function r(f,s){return f=Ue(f,s),f.index=0,f.sibling=null,f}function l(f,s,p){return f.index=p,n?(p=f.alternate,p!==null?(p=p.index,p<s?(f.flags|=67108866,s):p):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function i(f){return n&&f.alternate===null&&(f.flags|=67108866),f}function o(f,s,p,y){return s===null||s.tag!==6?(s=zi(p,f.mode,y),s.return=f,s):(s=r(s,p),s.return=f,s)}function c(f,s,p,y){var B=p.type;return B===_n?b(f,s,p.props.children,y,p.key):s!==null&&(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Yn&&Ut(B)===s.type)?(s=r(s,p.props),$a(s,p),s.return=f,s):(s=Xr(p.type,p.key,p.props,null,f.mode,y),$a(s,p),s.return=f,s)}function h(f,s,p,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Ai(p,f.mode,y),s.return=f,s):(s=r(s,p.children||[]),s.return=f,s)}function b(f,s,p,y,B){return s===null||s.tag!==7?(s=Ot(p,f.mode,y,B),s.return=f,s):(s=r(s,p),s.return=f,s)}function w(f,s,p){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=zi(""+s,f.mode,p),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case $n:return p=Xr(s.type,s.key,s.props,null,f.mode,p),$a(p,s),p.return=f,p;case Hn:return s=Ai(s,f.mode,p),s.return=f,s;case Yn:return s=Ut(s),w(f,s,p)}if(ye(s)||qn(s))return s=Ot(s,f.mode,p,null),s.return=f,s;if(typeof s.then=="function")return w(f,Ir(s),p);if(s.$$typeof===Ln)return w(f,Jr(f,s),p);Pr(f,s)}return null}function g(f,s,p,y){var B=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return B!==null?null:o(f,s,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $n:return p.key===B?c(f,s,p,y):null;case Hn:return p.key===B?h(f,s,p,y):null;case Yn:return p=Ut(p),g(f,s,p,y)}if(ye(p)||qn(p))return B!==null?null:b(f,s,p,y,null);if(typeof p.then=="function")return g(f,s,Ir(p),y);if(p.$$typeof===Ln)return g(f,s,Jr(f,p),y);Pr(f,p)}return null}function m(f,s,p,y,B){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(p)||null,o(s,f,""+y,B);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $n:return f=f.get(y.key===null?p:y.key)||null,c(s,f,y,B);case Hn:return f=f.get(y.key===null?p:y.key)||null,h(s,f,y,B);case Yn:return y=Ut(y),m(f,s,p,y,B)}if(ye(y)||qn(y))return f=f.get(p)||null,b(s,f,y,B,null);if(typeof y.then=="function")return m(f,s,p,Ir(y),B);if(y.$$typeof===Ln)return m(f,s,p,Jr(s,y),B);Pr(s,y)}return null}function C(f,s,p,y){for(var B=null,W=null,O=s,Q=s=0,J=null;O!==null&&Q<p.length;Q++){O.index>Q?(J=O,O=null):J=O.sibling;var I=g(f,O,p[Q],y);if(I===null){O===null&&(O=J);break}n&&O&&I.alternate===null&&e(f,O),s=l(I,s,Q),W===null?B=I:W.sibling=I,W=I,O=J}if(Q===p.length)return t(f,O),$&&He(f,Q),B;if(O===null){for(;Q<p.length;Q++)O=w(f,p[Q],y),O!==null&&(s=l(O,s,Q),W===null?B=O:W.sibling=O,W=O);return $&&He(f,Q),B}for(O=a(O);Q<p.length;Q++)J=m(O,f,Q,p[Q],y),J!==null&&(n&&J.alternate!==null&&O.delete(J.key===null?Q:J.key),s=l(J,s,Q),W===null?B=J:W.sibling=J,W=J);return n&&O.forEach(function(kt){return e(f,kt)}),$&&He(f,Q),B}function _(f,s,p,y){if(p==null)throw Error(d(151));for(var B=null,W=null,O=s,Q=s=0,J=null,I=p.next();O!==null&&!I.done;Q++,I=p.next()){O.index>Q?(J=O,O=null):J=O.sibling;var kt=g(f,O,I.value,y);if(kt===null){O===null&&(O=J);break}n&&O&&kt.alternate===null&&e(f,O),s=l(kt,s,Q),W===null?B=kt:W.sibling=kt,W=kt,O=J}if(I.done)return t(f,O),$&&He(f,Q),B;if(O===null){for(;!I.done;Q++,I=p.next())I=w(f,I.value,y),I!==null&&(s=l(I,s,Q),W===null?B=I:W.sibling=I,W=I);return $&&He(f,Q),B}for(O=a(O);!I.done;Q++,I=p.next())I=m(O,f,Q,I.value,y),I!==null&&(n&&I.alternate!==null&&O.delete(I.key===null?Q:I.key),s=l(I,s,Q),W===null?B=I:W.sibling=I,W=I);return n&&O.forEach(function(ah){return e(f,ah)}),$&&He(f,Q),B}function cn(f,s,p,y){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case $n:n:{for(var B=p.key;s!==null;){if(s.key===B){if(B=p.type,B===_n){if(s.tag===7){t(f,s.sibling),y=r(s,p.props.children),y.return=f,f=y;break n}}else if(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Yn&&Ut(B)===s.type){t(f,s.sibling),y=r(s,p.props),$a(y,p),y.return=f,f=y;break n}t(f,s);break}else e(f,s);s=s.sibling}p.type===_n?(y=Ot(p.props.children,f.mode,y,p.key),y.return=f,f=y):(y=Xr(p.type,p.key,p.props,null,f.mode,y),$a(y,p),y.return=f,f=y)}return i(f);case Hn:n:{for(B=p.key;s!==null;){if(s.key===B)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){t(f,s.sibling),y=r(s,p.children||[]),y.return=f,f=y;break n}else{t(f,s);break}else e(f,s);s=s.sibling}y=Ai(p,f.mode,y),y.return=f,f=y}return i(f);case Yn:return p=Ut(p),cn(f,s,p,y)}if(ye(p))return C(f,s,p,y);if(qn(p)){if(B=qn(p),typeof B!="function")throw Error(d(150));return p=B.call(p),_(f,s,p,y)}if(typeof p.then=="function")return cn(f,s,Ir(p),y);if(p.$$typeof===Ln)return cn(f,s,Jr(f,p),y);Pr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,s!==null&&s.tag===6?(t(f,s.sibling),y=r(s,p),y.return=f,f=y):(t(f,s),y=zi(p,f.mode,y),y.return=f,f=y),i(f)):t(f,s)}return function(f,s,p,y){try{Fa=0;var B=cn(f,s,p,y);return fa=null,B}catch(O){if(O===da||O===$r)throw O;var W=te(29,O,null,f.mode);return W.lanes=y,W.return=f,W}finally{}}}var Rt=Bs(!0),_s=Bs(!1),it=!1;function Ui(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hi(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ot(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ct(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(P&2)!==0){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,e=Zr(n),bs(n,null,t),e}return Gr(n,a,e,t),Zr(n)}function Wa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ec(n,t)}}function Ri(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?r=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var Yi=!1;function Ia(){if(Yi){var n=ua;if(n!==null)throw n}}function Pa(n,e,t,a){Yi=!1;var r=n.updateQueue;it=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,h=c.next;c.next=null,i===null?l=h:i.next=h,i=c;var b=n.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==i&&(o===null?b.firstBaseUpdate=h:o.next=h,b.lastBaseUpdate=c))}if(l!==null){var w=r.baseState;i=0,b=h=c=null,o=l;do{var g=o.lane&-536870913,m=g!==o.lane;if(m?(K&g)===g:(a&g)===g){g!==0&&g===sa&&(Yi=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var C=n,_=o;g=e;var cn=t;switch(_.tag){case 1:if(C=_.payload,typeof C=="function"){w=C.call(cn,w,g);break n}w=C;break n;case 3:C.flags=C.flags&-65537|128;case 0:if(C=_.payload,g=typeof C=="function"?C.call(cn,w,g):C,g==null)break n;w=N({},w,g);break n;case 2:it=!0}}g=o.callback,g!==null&&(n.flags|=64,m&&(n.flags|=8192),m=r.callbacks,m===null?r.callbacks=[g]:m.push(g))}else m={lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(h=b=m,c=w):b=b.next=m,i|=g;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;m=o,o=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);b===null&&(c=w),r.baseState=c,r.firstBaseUpdate=h,r.lastBaseUpdate=b,l===null&&(r.shared.lanes=0),pt|=i,n.lanes=i,n.memoizedState=w}}function Ns(n,e){if(typeof n!="function")throw Error(d(191,n));n.call(e)}function Us(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Ns(t[n],e)}var pa=u(null),nl=u(0);function Hs(n,e){n=Fe,T(nl,n),T(pa,e),Fe=n|e.baseLanes}function qi(){T(nl,Fe),T(pa,pa.current)}function Qi(){Fe=nl.current,k(pa),k(nl)}var ae=u(null),me=null;function st(n){var e=n.alternate;T(xn,xn.current&1),T(ae,n),me===null&&(e===null||pa.current!==null||e.memoizedState!==null)&&(me=n)}function Gi(n){T(xn,xn.current),T(ae,n),me===null&&(me=n)}function Rs(n){n.tag===22?(T(xn,xn.current),T(ae,n),me===null&&(me=n)):ut()}function ut(){T(xn,xn.current),T(ae,ae.current)}function re(n){k(ae),me===n&&(me=null),k(xn)}var xn=u(0);function el(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||$o(t)||Wo(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qe=0,q=null,ln=null,Sn=null,tl=!1,ha=!1,Yt=!1,al=0,nr=0,ga=null,Kp=0;function mn(){throw Error(d(321))}function Zi(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ee(n[t],e[t]))return!1;return!0}function Xi(n,e,t,a,r,l){return qe=l,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x.H=n===null||n.memoizedState===null?Su:io,Yt=!1,l=t(a,r),Yt=!1,ha&&(l=qs(e,t,a,r)),Ys(n),l}function Ys(n){x.H=ar;var e=ln!==null&&ln.next!==null;if(qe=0,Sn=ln=q=null,tl=!1,nr=0,ga=null,e)throw Error(d(300));n===null||kn||(n=n.dependencies,n!==null&&Kr(n)&&(kn=!0))}function qs(n,e,t,a){q=n;var r=0;do{if(ha&&(ga=null),nr=0,ha=!1,25<=r)throw Error(d(301));if(r+=1,Sn=ln=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}x.H=ku,l=e(t,a)}while(ha);return l}function Jp(){var n=x.H,e=n.useState()[0];return e=typeof e.then=="function"?er(e):e,n=n.useState()[0],(ln!==null?ln.memoizedState:null)!==n&&(q.flags|=1024),e}function Vi(){var n=al!==0;return al=0,n}function Ki(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Ji(n){if(tl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}tl=!1}qe=0,Sn=ln=q=null,ha=!1,nr=al=0,ga=null}function Un(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?q.memoizedState=Sn=n:Sn=Sn.next=n,Sn}function yn(){if(ln===null){var n=q.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var e=Sn===null?q.memoizedState:Sn.next;if(e!==null)Sn=e,ln=n;else{if(n===null)throw q.alternate===null?Error(d(467)):Error(d(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},Sn===null?q.memoizedState=Sn=n:Sn=Sn.next=n}return Sn}function rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function er(n){var e=nr;return nr+=1,ga===null&&(ga=[]),n=Ds(ga,n,e),e=q,(Sn===null?e.memoizedState:Sn.next)===null&&(e=e.alternate,x.H=e===null||e.memoizedState===null?Su:io),n}function ll(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return er(n);if(n.$$typeof===Ln)return jn(n)}throw Error(d(438,String(n)))}function Fi(n){var e=null,t=q.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=rl(),q.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=Zt;return e.index++,t}function Qe(n,e){return typeof e=="function"?e(n):e}function il(n){var e=yn();return $i(e,ln,n)}function $i(n,e,t){var a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=t;var r=n.baseQueue,l=a.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}e.baseQueue=r=l,a.pending=null}if(l=n.baseState,r===null)n.memoizedState=l;else{e=r.next;var o=i=null,c=null,h=e,b=!1;do{var w=h.lane&-536870913;if(w!==h.lane?(K&w)===w:(qe&w)===w){var g=h.revertLane;if(g===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),w===sa&&(b=!0);else if((qe&g)===g){h=h.next,g===sa&&(b=!0);continue}else w={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=w,i=l):c=c.next=w,q.lanes|=g,pt|=g;w=h.action,Yt&&t(l,w),l=h.hasEagerState?h.eagerState:t(l,w)}else g={lane:w,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(o=c=g,i=l):c=c.next=g,q.lanes|=w,pt|=w;h=h.next}while(h!==null&&h!==e);if(c===null?i=l:c.next=o,!ee(l,n.memoizedState)&&(kn=!0,b&&(t=ua,t!==null)))throw t;n.memoizedState=l,n.baseState=i,n.baseQueue=c,a.lastRenderedState=l}return r===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function Wi(n){var e=yn(),t=e.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=n;var a=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do l=n(l,i.action),i=i.next;while(i!==r);ee(l,e.memoizedState)||(kn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function Qs(n,e,t){var a=q,r=yn(),l=$;if(l){if(t===void 0)throw Error(d(407));t=t()}else t=e();var i=!ee((ln||r).memoizedState,t);if(i&&(r.memoizedState=t,kn=!0),r=r.queue,no(Xs.bind(null,a,r,n),[n]),r.getSnapshot!==e||i||Sn!==null&&Sn.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Zs.bind(null,a,r,t,e),null),un===null)throw Error(d(349));l||(qe&127)!==0||Gs(a,e,t)}return t}function Gs(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=q.updateQueue,e===null?(e=rl(),q.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Zs(n,e,t,a){e.value=t,e.getSnapshot=a,Vs(e)&&Ks(n)}function Xs(n,e,t){return t(function(){Vs(e)&&Ks(n)})}function Vs(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ee(n,t)}catch{return!0}}function Ks(n){var e=Dt(n,2);e!==null&&Jn(e,n,2)}function Ii(n){var e=Un();if(typeof n=="function"){var t=n;if(n=t(),Yt){Pe(!0);try{t()}finally{Pe(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:n},e}function Js(n,e,t,a){return n.baseState=t,$i(n,ln,typeof a=="function"?a:Qe)}function Fp(n,e,t,a,r){if(sl(n))throw Error(d(485));if(n=e.action,n!==null){var l={payload:r,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){l.listeners.push(i)}};x.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,Fs(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Fs(n,e){var t=e.action,a=e.payload,r=n.state;if(e.isTransition){var l=x.T,i={};x.T=i;try{var o=t(r,a),c=x.S;c!==null&&c(i,o),$s(n,e,o)}catch(h){Pi(n,e,h)}finally{l!==null&&i.types!==null&&(l.types=i.types),x.T=l}}else try{l=t(r,a),$s(n,e,l)}catch(h){Pi(n,e,h)}}function $s(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Ws(n,e,a)},function(a){return Pi(n,e,a)}):Ws(n,e,t)}function Ws(n,e,t){e.status="fulfilled",e.value=t,Is(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Fs(n,t)))}function Pi(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Is(e),e=e.next;while(e!==a)}n.action=null}function Is(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Ps(n,e){return e}function nu(n,e){if($){var t=un.formState;if(t!==null){n:{var a=q;if($){if(dn){e:{for(var r=dn,l=ge;r.nodeType!==8;){if(!l){r=null;break e}if(r=ve(r.nextSibling),r===null){r=null;break e}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){dn=ve(r.nextSibling),a=r.data==="F!";break n}}rt(a)}a=!1}a&&(e=t[0])}}return t=Un(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},t.queue=a,t=xu.bind(null,q,a),a.dispatch=t,a=Ii(!1),l=lo.bind(null,q,!1,a.queue),a=Un(),r={state:e,dispatch:null,action:n,pending:null},a.queue=r,t=Fp.bind(null,q,r,l,t),r.dispatch=t,a.memoizedState=n,[e,t,!1]}function eu(n){var e=yn();return tu(e,ln,n)}function tu(n,e,t){if(e=$i(n,e,Ps)[0],n=il(Qe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=er(e)}catch(i){throw i===da?$r:i}else a=e;e=yn();var r=e.queue,l=r.dispatch;return t!==e.memoizedState&&(q.flags|=2048,ma(9,{destroy:void 0},$p.bind(null,r,t),null)),[a,l,n]}function $p(n,e){n.action=e}function au(n){var e=yn(),t=ln;if(t!==null)return tu(e,t,n);yn(),e=e.memoizedState,t=yn();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function ma(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=q.updateQueue,e===null&&(e=rl(),q.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function ru(){return yn().memoizedState}function ol(n,e,t,a){var r=Un();q.flags|=n,r.memoizedState=ma(1|e,{destroy:void 0},t,a===void 0?null:a)}function cl(n,e,t,a){var r=yn();a=a===void 0?null:a;var l=r.memoizedState.inst;ln!==null&&a!==null&&Zi(a,ln.memoizedState.deps)?r.memoizedState=ma(e,l,t,a):(q.flags|=n,r.memoizedState=ma(1|e,l,t,a))}function lu(n,e){ol(8390656,8,n,e)}function no(n,e){cl(2048,8,n,e)}function Wp(n){q.flags|=4;var e=q.updateQueue;if(e===null)e=rl(),q.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function iu(n){var e=yn().memoizedState;return Wp({ref:e,nextImpl:n}),function(){if((P&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}function ou(n,e){return cl(4,2,n,e)}function cu(n,e){return cl(4,4,n,e)}function su(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function uu(n,e,t){t=t!=null?t.concat([n]):null,cl(4,4,su.bind(null,e,n),t)}function eo(){}function du(n,e){var t=yn();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&Zi(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function fu(n,e){var t=yn();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&Zi(e,a[1]))return a[0];if(a=n(),Yt){Pe(!0);try{n()}finally{Pe(!1)}}return t.memoizedState=[a,e],a}function to(n,e,t){return t===void 0||(qe&1073741824)!==0&&(K&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=pd(),q.lanes|=n,pt|=n,t)}function pu(n,e,t,a){return ee(t,e)?t:pa.current!==null?(n=to(n,t,a),ee(n,e)||(kn=!0),n):(qe&42)===0||(qe&1073741824)!==0&&(K&261930)===0?(kn=!0,n.memoizedState=t):(n=pd(),q.lanes|=n,pt|=n,e)}function hu(n,e,t,a,r){var l=E.p;E.p=l!==0&&8>l?l:8;var i=x.T,o={};x.T=o,lo(n,!1,e,t);try{var c=r(),h=x.S;if(h!==null&&h(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=Vp(c,a);tr(n,e,b,oe(n))}else tr(n,e,a,oe(n))}catch(w){tr(n,e,{then:function(){},status:"rejected",reason:w},oe())}finally{E.p=l,i!==null&&o.types!==null&&(i.types=o.types),x.T=i}}function Ip(){}function ao(n,e,t,a){if(n.tag!==5)throw Error(d(476));var r=gu(n).queue;hu(n,r,e,U,t===null?Ip:function(){return mu(n),t(a)})}function gu(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:U},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qe,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function mu(n){var e=gu(n);e.next===null&&(e=n.alternate.memoizedState),tr(n,e.next.queue,{},oe())}function ro(){return jn(xr)}function vu(){return yn().memoizedState}function bu(){return yn().memoizedState}function Pp(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=oe();n=ot(t);var a=ct(e,n,t);a!==null&&(Jn(a,e,t),Wa(a,e,t)),e={cache:Li()},n.payload=e;return}e=e.return}}function n0(n,e,t){var a=oe();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},sl(n)?yu(e,t):(t=Si(n,e,t,a),t!==null&&(Jn(t,n,a),wu(t,e,a)))}function xu(n,e,t){var a=oe();tr(n,e,t,a)}function tr(n,e,t,a){var r={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(sl(n))yu(e,r);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var i=e.lastRenderedState,o=l(i,t);if(r.hasEagerState=!0,r.eagerState=o,ee(o,i))return Gr(n,e,r,0),un===null&&Qr(),!1}catch{}finally{}if(t=Si(n,e,r,a),t!==null)return Jn(t,n,a),wu(t,e,a),!0}return!1}function lo(n,e,t,a){if(a={lane:2,revertLane:Ho(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sl(n)){if(e)throw Error(d(479))}else e=Si(n,t,a,2),e!==null&&Jn(e,n,2)}function sl(n){var e=n.alternate;return n===q||e!==null&&e===q}function yu(n,e){ha=tl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wu(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,Ec(n,t)}}var ar={readContext:jn,use:ll,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};ar.useEffectEvent=mn;var Su={readContext:jn,use:ll,useCallback:function(n,e){return Un().memoizedState=[n,e===void 0?null:e],n},useContext:jn,useEffect:lu,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,ol(4194308,4,su.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ol(4194308,4,n,e)},useInsertionEffect:function(n,e){ol(4,2,n,e)},useMemo:function(n,e){var t=Un();e=e===void 0?null:e;var a=n();if(Yt){Pe(!0);try{n()}finally{Pe(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=Un();if(t!==void 0){var r=t(e);if(Yt){Pe(!0);try{t(e)}finally{Pe(!1)}}}else r=e;return a.memoizedState=a.baseState=r,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},a.queue=n,n=n.dispatch=n0.bind(null,q,n),[a.memoizedState,n]},useRef:function(n){var e=Un();return n={current:n},e.memoizedState=n},useState:function(n){n=Ii(n);var e=n.queue,t=xu.bind(null,q,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:eo,useDeferredValue:function(n,e){var t=Un();return to(t,n,e)},useTransition:function(){var n=Ii(!1);return n=hu.bind(null,q,n.queue,!0,!1),Un().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=q,r=Un();if($){if(t===void 0)throw Error(d(407));t=t()}else{if(t=e(),un===null)throw Error(d(349));(K&127)!==0||Gs(a,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,lu(Xs.bind(null,a,l,n),[n]),a.flags|=2048,ma(9,{destroy:void 0},Zs.bind(null,a,l,t,e),null),t},useId:function(){var n=Un(),e=un.identifierPrefix;if($){var t=Me,a=Te;t=(a&~(1<<32-ne(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=al++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=Kp++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:ro,useFormState:nu,useActionState:nu,useOptimistic:function(n){var e=Un();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=lo.bind(null,q,!0,t),t.dispatch=e,[n,e]},useMemoCache:Fi,useCacheRefresh:function(){return Un().memoizedState=Pp.bind(null,q)},useEffectEvent:function(n){var e=Un(),t={impl:n};return e.memoizedState=t,function(){if((P&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},io={readContext:jn,use:ll,useCallback:du,useContext:jn,useEffect:no,useImperativeHandle:uu,useInsertionEffect:ou,useLayoutEffect:cu,useMemo:fu,useReducer:il,useRef:ru,useState:function(){return il(Qe)},useDebugValue:eo,useDeferredValue:function(n,e){var t=yn();return pu(t,ln.memoizedState,n,e)},useTransition:function(){var n=il(Qe)[0],e=yn().memoizedState;return[typeof n=="boolean"?n:er(n),e]},useSyncExternalStore:Qs,useId:vu,useHostTransitionStatus:ro,useFormState:eu,useActionState:eu,useOptimistic:function(n,e){var t=yn();return Js(t,ln,n,e)},useMemoCache:Fi,useCacheRefresh:bu};io.useEffectEvent=iu;var ku={readContext:jn,use:ll,useCallback:du,useContext:jn,useEffect:no,useImperativeHandle:uu,useInsertionEffect:ou,useLayoutEffect:cu,useMemo:fu,useReducer:Wi,useRef:ru,useState:function(){return Wi(Qe)},useDebugValue:eo,useDeferredValue:function(n,e){var t=yn();return ln===null?to(t,n,e):pu(t,ln.memoizedState,n,e)},useTransition:function(){var n=Wi(Qe)[0],e=yn().memoizedState;return[typeof n=="boolean"?n:er(n),e]},useSyncExternalStore:Qs,useId:vu,useHostTransitionStatus:ro,useFormState:au,useActionState:au,useOptimistic:function(n,e){var t=yn();return ln!==null?Js(t,ln,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Fi,useCacheRefresh:bu};ku.useEffectEvent=iu;function oo(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:N({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var co={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=oe(),r=ot(a);r.payload=e,t!=null&&(r.callback=t),e=ct(n,r,a),e!==null&&(Jn(e,n,a),Wa(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=oe(),r=ot(a);r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=ct(n,r,a),e!==null&&(Jn(e,n,a),Wa(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=oe(),a=ot(t);a.tag=2,e!=null&&(a.callback=e),e=ct(n,a,t),e!==null&&(Jn(e,n,t),Wa(e,n,t))}};function zu(n,e,t,a,r,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,i):e.prototype&&e.prototype.isPureReactComponent?!Ga(t,a)||!Ga(r,l):!0}function Au(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&co.enqueueReplaceState(e,e.state,null)}function qt(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=N({},t));for(var r in n)t[r]===void 0&&(t[r]=n[r])}return t}function Eu(n){qr(n)}function Tu(n){console.error(n)}function Mu(n){qr(n)}function ul(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Cu(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function so(n,e,t){return t=ot(t),t.tag=3,t.payload={element:null},t.callback=function(){ul(n,e)},t}function ju(n){return n=ot(n),n.tag=3,n}function Du(n,e,t,a){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var l=a.value;n.payload=function(){return r(l)},n.callback=function(){Cu(e,t,a)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Cu(e,t,a),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function e0(n,e,t,a,r){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&ca(e,t,r,!0),t=ae.current,t!==null){switch(t.tag){case 31:case 13:return me===null?Sl():t.alternate===null&&vn===0&&(vn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,a===Wr?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),_o(n,a,r)),!1;case 22:return t.flags|=65536,a===Wr?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),_o(n,a,r)),!1}throw Error(d(435,t.tag))}return _o(n,a,r),Sl(),!1}if($)return e=ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,a!==Mi&&(n=Error(d(422),{cause:a}),Va(fe(n,t)))):(a!==Mi&&(e=Error(d(423),{cause:a}),Va(fe(e,t))),n=n.current.alternate,n.flags|=65536,r&=-r,n.lanes|=r,a=fe(a,t),r=so(n.stateNode,a,r),Ri(n,r),vn!==4&&(vn=2)),!1;var l=Error(d(520),{cause:a});if(l=fe(l,t),dr===null?dr=[l]:dr.push(l),vn!==4&&(vn=2),e===null)return!0;a=fe(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=r&-r,t.lanes|=n,n=so(t.stateNode,a,n),Ri(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ht===null||!ht.has(l))))return t.flags|=65536,r&=-r,t.lanes|=r,r=ju(r),Du(r,n,t,a),Ri(t,r),!1}t=t.return}while(t!==null);return!1}var uo=Error(d(461)),kn=!1;function Dn(n,e,t,a){e.child=n===null?_s(e,null,t,a):Rt(e,n.child,t,a)}function Ou(n,e,t,a,r){t=t.render;var l=e.ref;if("ref"in a){var i={};for(var o in a)o!=="ref"&&(i[o]=a[o])}else i=a;return _t(e),a=Xi(n,e,t,i,l,r),o=Vi(),n!==null&&!kn?(Ki(n,e,r),Ge(n,e,r)):($&&o&&Ei(e),e.flags|=1,Dn(n,e,a,r),e.child)}function Lu(n,e,t,a,r){if(n===null){var l=t.type;return typeof l=="function"&&!ki(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,Bu(n,e,l,a,r)):(n=Xr(t.type,null,a,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!xo(n,r)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ga,t(i,a)&&n.ref===e.ref)return Ge(n,e,r)}return e.flags|=1,n=Ue(l,a),n.ref=e.ref,n.return=e,e.child=n}function Bu(n,e,t,a,r){if(n!==null){var l=n.memoizedProps;if(Ga(l,a)&&n.ref===e.ref)if(kn=!1,e.pendingProps=a=l,xo(n,r))(n.flags&131072)!==0&&(kn=!0);else return e.lanes=n.lanes,Ge(n,e,r)}return fo(n,e,t,a,r)}function _u(n,e,t,a){var r=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~l}else a=0,e.child=null;return Nu(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Fr(e,l!==null?l.cachePool:null),l!==null?Hs(e,l):qi(),Rs(e);else return a=e.lanes=536870912,Nu(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(Fr(e,l.cachePool),Hs(e,l),ut(),e.memoizedState=null):(n!==null&&Fr(e,null),qi(),ut());return Dn(n,e,r,t),e.child}function rr(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Nu(n,e,t,a,r){var l=_i();return l=l===null?null:{parent:wn._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&Fr(e,null),qi(),Rs(e),n!==null&&ca(n,e,a,!0),e.childLanes=r,null}function dl(n,e){return e=pl({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function Uu(n,e,t){return Rt(e,n.child,null,t),n=dl(e,e.pendingProps),n.flags|=2,re(e),e.memoizedState=null,n}function t0(n,e,t){var a=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,n===null){if($){if(a.mode==="hidden")return n=dl(e,a),e.lanes=536870912,rr(null,n);if(Gi(e),(n=dn)?(n=Fd(n,ge),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:tt!==null?{id:Te,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},t=ys(n),t.return=e,e.child=t,Cn=e,dn=null)):n=null,n===null)throw rt(e);return e.lanes=536870912,null}return dl(e,a)}var l=n.memoizedState;if(l!==null){var i=l.dehydrated;if(Gi(e),r)if(e.flags&256)e.flags&=-257,e=Uu(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(d(558));else if(kn||ca(n,e,t,!1),r=(t&n.childLanes)!==0,kn||r){if(a=un,a!==null&&(i=Tc(a,t),i!==0&&i!==l.retryLane))throw l.retryLane=i,Dt(n,i),Jn(a,n,i),uo;Sl(),e=Uu(n,e,t)}else n=l.treeContext,dn=ve(i.nextSibling),Cn=e,$=!0,at=null,ge=!1,n!==null&&ks(e,n),e=dl(e,a),e.flags|=4096;return e}return n=Ue(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function fl(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function fo(n,e,t,a,r){return _t(e),t=Xi(n,e,t,a,void 0,r),a=Vi(),n!==null&&!kn?(Ki(n,e,r),Ge(n,e,r)):($&&a&&Ei(e),e.flags|=1,Dn(n,e,t,r),e.child)}function Hu(n,e,t,a,r,l){return _t(e),e.updateQueue=null,t=qs(e,a,t,r),Ys(n),a=Vi(),n!==null&&!kn?(Ki(n,e,l),Ge(n,e,l)):($&&a&&Ei(e),e.flags|=1,Dn(n,e,t,l),e.child)}function Ru(n,e,t,a,r){if(_t(e),e.stateNode===null){var l=ra,i=t.contextType;typeof i=="object"&&i!==null&&(l=jn(i)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=co,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},Ui(e),i=t.contextType,l.context=typeof i=="object"&&i!==null?jn(i):ra,l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oo(e,t,i,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&co.enqueueReplaceState(l,l.state,null),Pa(e,a,l,r),Ia(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var o=e.memoizedProps,c=qt(t,o);l.props=c;var h=l.context,b=t.contextType;i=ra,typeof b=="object"&&b!==null&&(i=jn(b));var w=t.getDerivedStateFromProps;b=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==i)&&Au(e,l,a,i),it=!1;var g=e.memoizedState;l.state=g,Pa(e,a,l,r),Ia(),h=e.memoizedState,o||g!==h||it?(typeof w=="function"&&(oo(e,t,w,a),h=e.memoizedState),(c=it||zu(e,t,c,a,g,h,i))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),l.props=a,l.state=h,l.context=i,a=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,Hi(n,e),i=e.memoizedProps,b=qt(t,i),l.props=b,w=e.pendingProps,g=l.context,h=t.contextType,c=ra,typeof h=="object"&&h!==null&&(c=jn(h)),o=t.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==w||g!==c)&&Au(e,l,a,c),it=!1,g=e.memoizedState,l.state=g,Pa(e,a,l,r),Ia();var m=e.memoizedState;i!==w||g!==m||it||n!==null&&n.dependencies!==null&&Kr(n.dependencies)?(typeof o=="function"&&(oo(e,t,o,a),m=e.memoizedState),(b=it||zu(e,t,b,a,g,m,c)||n!==null&&n.dependencies!==null&&Kr(n.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,m,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,m,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=m),l.props=a,l.state=m,l.context=c,a=b):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&g===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,fl(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=Rt(e,n.child,null,r),e.child=Rt(e,null,t,r)):Dn(n,e,t,r),e.memoizedState=l.state,n=e.child):n=Ge(n,e,r),n}function Yu(n,e,t,a){return Lt(),e.flags|=256,Dn(n,e,t,a),e.child}var po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ho(n){return{baseLanes:n,cachePool:Cs()}}function go(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=ie),n}function qu(n,e,t){var a=e.pendingProps,r=!1,l=(e.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(xn.current&2)!==0),i&&(r=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if($){if(r?st(e):ut(),(n=dn)?(n=Fd(n,ge),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:tt!==null?{id:Te,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},t=ys(n),t.return=e,e.child=t,Cn=e,dn=null)):n=null,n===null)throw rt(e);return Wo(n)?e.lanes=32:e.lanes=536870912,null}var o=a.children;return a=a.fallback,r?(ut(),r=e.mode,o=pl({mode:"hidden",children:o},r),a=Ot(a,r,t,null),o.return=e,a.return=e,o.sibling=a,e.child=o,a=e.child,a.memoizedState=ho(t),a.childLanes=go(n,i,t),e.memoizedState=po,rr(null,a)):(st(e),mo(e,o))}var c=n.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(l)e.flags&256?(st(e),e.flags&=-257,e=vo(n,e,t)):e.memoizedState!==null?(ut(),e.child=n.child,e.flags|=128,e=null):(ut(),o=a.fallback,r=e.mode,a=pl({mode:"visible",children:a.children},r),o=Ot(o,r,t,null),o.flags|=2,a.return=e,o.return=e,a.sibling=o,e.child=a,Rt(e,n.child,null,t),a=e.child,a.memoizedState=ho(t),a.childLanes=go(n,i,t),e.memoizedState=po,e=rr(null,a));else if(st(e),Wo(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(d(419)),a.stack="",a.digest=i,Va({value:a,source:null,stack:null}),e=vo(n,e,t)}else if(kn||ca(n,e,t,!1),i=(t&n.childLanes)!==0,kn||i){if(i=un,i!==null&&(a=Tc(i,t),a!==0&&a!==c.retryLane))throw c.retryLane=a,Dt(n,a),Jn(i,n,a),uo;$o(o)||Sl(),e=vo(n,e,t)}else $o(o)?(e.flags|=192,e.child=n.child,e=null):(n=c.treeContext,dn=ve(o.nextSibling),Cn=e,$=!0,at=null,ge=!1,n!==null&&ks(e,n),e=mo(e,a.children),e.flags|=4096);return e}return r?(ut(),o=a.fallback,r=e.mode,c=n.child,h=c.sibling,a=Ue(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,h!==null?o=Ue(h,o):(o=Ot(o,r,t,null),o.flags|=2),o.return=e,a.return=e,a.sibling=o,e.child=a,rr(null,a),a=e.child,o=n.child.memoizedState,o===null?o=ho(t):(r=o.cachePool,r!==null?(c=wn._currentValue,r=r.parent!==c?{parent:c,pool:c}:r):r=Cs(),o={baseLanes:o.baseLanes|t,cachePool:r}),a.memoizedState=o,a.childLanes=go(n,i,t),e.memoizedState=po,rr(n.child,a)):(st(e),t=n.child,n=t.sibling,t=Ue(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=t,e.memoizedState=null,t)}function mo(n,e){return e=pl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function pl(n,e){return n=te(22,n,null,e),n.lanes=0,n}function vo(n,e,t){return Rt(e,n.child,null,t),n=mo(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Qu(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),Di(n.return,e,t)}function bo(n,e,t,a,r,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r,treeForkCount:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r,i.treeForkCount=l)}function Gu(n,e,t){var a=e.pendingProps,r=a.revealOrder,l=a.tail;a=a.children;var i=xn.current,o=(i&2)!==0;if(o?(i=i&1|2,e.flags|=128):i&=1,T(xn,i),Dn(n,e,a,t),a=$?Xa:0,!o&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qu(n,t,e);else if(n.tag===19)Qu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&el(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),bo(e,!1,r,t,l,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&el(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}bo(e,!0,t,null,l,a);break;case"together":bo(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ge(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),pt|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(ca(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(d(153));if(e.child!==null){for(n=e.child,t=Ue(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ue(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function xo(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Kr(n)))}function a0(n,e,t){switch(e.tag){case 3:Nn(e,e.stateNode.containerInfo),lt(e,wn,n.memoizedState.cache),Lt();break;case 27:case 5:ja(e);break;case 4:Nn(e,e.stateNode.containerInfo);break;case 10:lt(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Gi(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(st(e),e.flags|=128,null):(t&e.child.childLanes)!==0?qu(n,e,t):(st(e),n=Ge(n,e,t),n!==null?n.sibling:null);st(e);break;case 19:var r=(n.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(ca(n,e,t,!1),a=(t&e.childLanes)!==0),r){if(a)return Gu(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),T(xn,xn.current),a)break;return null;case 22:return e.lanes=0,_u(n,e,t,e.pendingProps);case 24:lt(e,wn,n.memoizedState.cache)}return Ge(n,e,t)}function Zu(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)kn=!0;else{if(!xo(n,t)&&(e.flags&128)===0)return kn=!1,a0(n,e,t);kn=(n.flags&131072)!==0}else kn=!1,$&&(e.flags&1048576)!==0&&Ss(e,Xa,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=Ut(e.elementType),e.type=n,typeof n=="function")ki(n)?(a=qt(n,a),e.tag=1,e=Ru(null,e,n,a,t)):(e.tag=0,e=fo(null,e,n,a,t));else{if(n!=null){var r=n.$$typeof;if(r===ce){e.tag=11,e=Ou(null,e,n,a,t);break n}else if(r===F){e.tag=14,e=Lu(null,e,n,a,t);break n}}throw e=Le(n)||n,Error(d(306,e,""))}}return e;case 0:return fo(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,r=qt(a,e.pendingProps),Ru(n,e,a,r,t);case 3:n:{if(Nn(e,e.stateNode.containerInfo),n===null)throw Error(d(387));a=e.pendingProps;var l=e.memoizedState;r=l.element,Hi(n,e),Pa(e,a,null,t);var i=e.memoizedState;if(a=i.cache,lt(e,wn,a),a!==l.cache&&Oi(e,[wn],t,!0),Ia(),a=i.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Yu(n,e,a,t);break n}else if(a!==r){r=fe(Error(d(424)),e),Va(r),e=Yu(n,e,a,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(dn=ve(n.firstChild),Cn=e,$=!0,at=null,ge=!0,t=_s(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Lt(),a===r){e=Ge(n,e,t);break n}Dn(n,e,a,t)}e=e.child}return e;case 26:return fl(n,e),n===null?(t=ef(e.type,null,e.pendingProps,null))?e.memoizedState=t:$||(t=e.type,n=e.pendingProps,a=Cl(Z.current).createElement(t),a[Mn]=e,a[Qn]=n,On(a,t,n),En(a),e.stateNode=a):e.memoizedState=ef(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return ja(e),n===null&&$&&(a=e.stateNode=Id(e.type,e.pendingProps,Z.current),Cn=e,ge=!0,r=dn,bt(e.type)?(Io=r,dn=ve(a.firstChild)):dn=r),Dn(n,e,e.pendingProps.children,t),fl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&$&&((r=a=dn)&&(a=L0(a,e.type,e.pendingProps,ge),a!==null?(e.stateNode=a,Cn=e,dn=ve(a.firstChild),ge=!1,r=!0):r=!1),r||rt(e)),ja(e),r=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,a=l.children,Ko(r,l)?a=null:i!==null&&Ko(r,i)&&(e.flags|=32),e.memoizedState!==null&&(r=Xi(n,e,Jp,null,null,t),xr._currentValue=r),fl(n,e),Dn(n,e,a,t),e.child;case 6:return n===null&&$&&((n=t=dn)&&(t=B0(t,e.pendingProps,ge),t!==null?(e.stateNode=t,Cn=e,dn=null,n=!0):n=!1),n||rt(e)),null;case 13:return qu(n,e,t);case 4:return Nn(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Rt(e,null,a,t):Dn(n,e,a,t),e.child;case 11:return Ou(n,e,e.type,e.pendingProps,t);case 7:return Dn(n,e,e.pendingProps,t),e.child;case 8:return Dn(n,e,e.pendingProps.children,t),e.child;case 12:return Dn(n,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,lt(e,e.type,a.value),Dn(n,e,a.children,t),e.child;case 9:return r=e.type._context,a=e.pendingProps.children,_t(e),r=jn(r),a=a(r),e.flags|=1,Dn(n,e,a,t),e.child;case 14:return Lu(n,e,e.type,e.pendingProps,t);case 15:return Bu(n,e,e.type,e.pendingProps,t);case 19:return Gu(n,e,t);case 31:return t0(n,e,t);case 22:return _u(n,e,t,e.pendingProps);case 24:return _t(e),a=jn(wn),n===null?(r=_i(),r===null&&(r=un,l=Li(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=t),r=l),e.memoizedState={parent:a,cache:r},Ui(e),lt(e,wn,r)):((n.lanes&t)!==0&&(Hi(n,e),Pa(e,null,null,t),Ia()),r=n.memoizedState,l=e.memoizedState,r.parent!==a?(r={parent:a,cache:a},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),lt(e,wn,a)):(a=l.cache,lt(e,wn,a),a!==r.cache&&Oi(e,[wn],t,!0))),Dn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function Ze(n){n.flags|=4}function yo(n,e,t,a,r){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(r&335544128)===r)if(n.stateNode.complete)n.flags|=8192;else if(vd())n.flags|=8192;else throw Ht=Wr,Ni}else n.flags&=-16777217}function Xu(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!of(e))if(vd())n.flags|=8192;else throw Ht=Wr,Ni}function hl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?zc():536870912,n.lanes|=e,ya|=e)}function lr(n,e){if(!$)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function fn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function r0(n,e,t){var a=e.pendingProps;switch(Ti(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return fn(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ye(wn),bn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(oa(e)?Ze(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci())),fn(e),null;case 26:var r=e.type,l=e.memoizedState;return n===null?(Ze(e),l!==null?(fn(e),Xu(e,l)):(fn(e),yo(e,r,null,a,t))):l?l!==n.memoizedState?(Ze(e),fn(e),Xu(e,l)):(fn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&Ze(e),fn(e),yo(e,r,n,a,t)),null;case 27:if(Ar(e),t=Z.current,r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Ze(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return fn(e),null}n=D.current,oa(e)?zs(e):(n=Id(r,a,t),e.stateNode=n,Ze(e))}return fn(e),null;case 5:if(Ar(e),r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Ze(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return fn(e),null}if(l=D.current,oa(e))zs(e);else{var i=Cl(Z.current);switch(l){case 1:l=i.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=i.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=i.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?i.createElement(r,{is:a.is}):i.createElement(r)}}l[Mn]=e,l[Qn]=a;n:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)l.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break n;for(;i.sibling===null;){if(i.return===null||i.return===e)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=l;n:switch(On(l,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&Ze(e)}}return fn(e),yo(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&Ze(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(n=Z.current,oa(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,r=Cn,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}n[Mn]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||qd(n.nodeValue,t)),n||rt(e,!0)}else n=Cl(n).createTextNode(a),n[Mn]=e,e.stateNode=n}return fn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=oa(e),t!==null){if(n===null){if(!a)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[Mn]=e}else Lt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fn(e),n=!1}else t=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(re(e),e):(re(e),null);if((e.flags&128)!==0)throw Error(d(558))}return fn(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(r=oa(e),a!==null&&a.dehydrated!==null){if(n===null){if(!r)throw Error(d(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Mn]=e}else Lt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fn(e),r=!1}else r=Ci(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(re(e),e):(re(e),null)}return re(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),hl(e,e.updateQueue),fn(e),null);case 4:return bn(),n===null&&Qo(e.stateNode.containerInfo),fn(e),null;case 10:return Ye(e.type),fn(e),null;case 19:if(k(xn),a=e.memoizedState,a===null)return fn(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)lr(a,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=el(n),l!==null){for(e.flags|=128,lr(a,!1),n=l.updateQueue,e.updateQueue=n,hl(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)xs(t,n),t=t.sibling;return T(xn,xn.current&1|2),$&&He(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&In()>xl&&(e.flags|=128,r=!0,lr(a,!1),e.lanes=4194304)}else{if(!r)if(n=el(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,hl(e,n),lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!$)return fn(e),null}else 2*In()-a.renderingStartTime>xl&&t!==536870912&&(e.flags|=128,r=!0,lr(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=In(),n.sibling=null,t=xn.current,T(xn,r?t&1|2:t&1),$&&He(e,a.treeForkCount),n):(fn(e),null);case 22:case 23:return re(e),Qi(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),t=e.updateQueue,t!==null&&hl(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&k(Nt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ye(wn),fn(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function l0(n,e){switch(Ti(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ye(wn),bn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Ar(e),null;case 31:if(e.memoizedState!==null){if(re(e),e.alternate===null)throw Error(d(340));Lt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(re(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(d(340));Lt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return k(xn),null;case 4:return bn(),null;case 10:return Ye(e.type),null;case 22:case 23:return re(e),Qi(),n!==null&&k(Nt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ye(wn),null;case 25:return null;default:return null}}function Vu(n,e){switch(Ti(e),e.tag){case 3:Ye(wn),bn();break;case 26:case 27:case 5:Ar(e);break;case 4:bn();break;case 31:e.memoizedState!==null&&re(e);break;case 13:re(e);break;case 19:k(xn);break;case 10:Ye(e.type);break;case 22:case 23:re(e),Qi(),n!==null&&k(Nt);break;case 24:Ye(wn)}}function ir(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var r=a.next;t=r;do{if((t.tag&n)===n){a=void 0;var l=t.create,i=t.inst;a=l(),i.destroy=a}t=t.next}while(t!==r)}}catch(o){an(e,e.return,o)}}function dt(n,e,t){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&n)===n){var i=a.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,r=e;var c=t,h=o;try{h()}catch(b){an(r,c,b)}}}a=a.next}while(a!==l)}}catch(b){an(e,e.return,b)}}function Ku(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Us(e,t)}catch(a){an(n,n.return,a)}}}function Ju(n,e,t){t.props=qt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){an(n,e,a)}}function or(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(r){an(n,e,r)}}function Ce(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(r){an(n,e,r)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){an(n,e,r)}else t.current=null}function Fu(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(r){an(n,n.return,r)}}function wo(n,e,t){try{var a=n.stateNode;T0(a,n.type,t,e),a[Qn]=e}catch(r){an(n,n.return,r)}}function $u(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&bt(n.type)||n.tag===4}function So(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||$u(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&bt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ko(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_e));else if(a!==4&&(a===27&&bt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(ko(n,e,t),n=n.sibling;n!==null;)ko(n,e,t),n=n.sibling}function gl(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(a===27&&bt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(gl(n,e,t),n=n.sibling;n!==null;)gl(n,e,t),n=n.sibling}function Wu(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);On(e,a,t),e[Mn]=n,e[Qn]=t}catch(l){an(n,n.return,l)}}var Xe=!1,zn=!1,zo=!1,Iu=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function i0(n,e){if(n=n.containerInfo,Xo=Nl,n=us(n),mi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var i=0,o=-1,c=-1,h=0,b=0,w=n,g=null;e:for(;;){for(var m;w!==t||r!==0&&w.nodeType!==3||(o=i+r),w!==l||a!==0&&w.nodeType!==3||(c=i+a),w.nodeType===3&&(i+=w.nodeValue.length),(m=w.firstChild)!==null;)g=w,w=m;for(;;){if(w===n)break e;if(g===t&&++h===r&&(o=i),g===l&&++b===a&&(c=i),(m=w.nextSibling)!==null)break;w=g,g=w.parentNode}w=m}t=o===-1||c===-1?null:{start:o,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vo={focusedElem:n,selectionRange:t},Nl=!1,Tn=e;Tn!==null;)if(e=Tn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Tn=n;else for(;Tn!==null;){switch(e=Tn,l=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)r=n[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,t=e,r=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var C=qt(t.type,r);n=a.getSnapshotBeforeUpdate(C,l),a.__reactInternalSnapshotBeforeUpdate=n}catch(_){an(t,t.return,_)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Fo(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(d(163))}if(n=e.sibling,n!==null){n.return=e.return,Tn=n;break}Tn=e.return}}function Pu(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ke(n,t),a&4&&ir(5,t);break;case 1:if(Ke(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(i){an(t,t.return,i)}else{var r=qt(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(r,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){an(t,t.return,i)}}a&64&&Ku(t),a&512&&or(t,t.return);break;case 3:if(Ke(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Us(n,e)}catch(i){an(t,t.return,i)}}break;case 27:e===null&&a&4&&Wu(t);case 26:case 5:Ke(n,t),e===null&&a&4&&Fu(t),a&512&&or(t,t.return);break;case 12:Ke(n,t);break;case 31:Ke(n,t),a&4&&td(n,t);break;case 13:Ke(n,t),a&4&&ad(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=g0.bind(null,t),_0(n,t))));break;case 22:if(a=t.memoizedState!==null||Xe,!a){e=e!==null&&e.memoizedState!==null||zn,r=Xe;var l=zn;Xe=a,(zn=e)&&!l?Je(n,t,(t.subtreeFlags&8772)!==0):Ke(n,t),Xe=r,zn=l}break;case 30:break;default:Ke(n,t)}}function nd(n){var e=n.alternate;e!==null&&(n.alternate=null,nd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Pl(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var hn=null,Zn=!1;function Ve(n,e,t){for(t=t.child;t!==null;)ed(n,e,t),t=t.sibling}function ed(n,e,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Da,t)}catch{}switch(t.tag){case 26:zn||Ce(t,e),Ve(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:zn||Ce(t,e);var a=hn,r=Zn;bt(t.type)&&(hn=t.stateNode,Zn=!1),Ve(n,e,t),mr(t.stateNode),hn=a,Zn=r;break;case 5:zn||Ce(t,e);case 6:if(a=hn,r=Zn,hn=null,Ve(n,e,t),hn=a,Zn=r,hn!==null)if(Zn)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(t.stateNode)}catch(l){an(t,e,l)}else try{hn.removeChild(t.stateNode)}catch(l){an(t,e,l)}break;case 18:hn!==null&&(Zn?(n=hn,Kd(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Ma(n)):Kd(hn,t.stateNode));break;case 4:a=hn,r=Zn,hn=t.stateNode.containerInfo,Zn=!0,Ve(n,e,t),hn=a,Zn=r;break;case 0:case 11:case 14:case 15:dt(2,t,e),zn||dt(4,t,e),Ve(n,e,t);break;case 1:zn||(Ce(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Ju(t,e,a)),Ve(n,e,t);break;case 21:Ve(n,e,t);break;case 22:zn=(a=zn)||t.memoizedState!==null,Ve(n,e,t),zn=a;break;default:Ve(n,e,t)}}function td(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ma(n)}catch(t){an(e,e.return,t)}}}function ad(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ma(n)}catch(t){an(e,e.return,t)}}function o0(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Iu),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Iu),e;default:throw Error(d(435,n.tag))}}function ml(n,e){var t=o0(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var r=m0.bind(null,n,a);a.then(r,r)}})}function Xn(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a],l=n,i=e,o=i;n:for(;o!==null;){switch(o.tag){case 27:if(bt(o.type)){hn=o.stateNode,Zn=!1;break n}break;case 5:hn=o.stateNode,Zn=!1;break n;case 3:case 4:hn=o.stateNode.containerInfo,Zn=!0;break n}o=o.return}if(hn===null)throw Error(d(160));ed(l,i,r),hn=null,Zn=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)rd(e,n),e=e.sibling}var Se=null;function rd(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Xn(e,n),Vn(n),a&4&&(dt(3,n,n.return),ir(3,n),dt(5,n,n.return));break;case 1:Xn(e,n),Vn(n),a&512&&(zn||t===null||Ce(t,t.return)),a&64&&Xe&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var r=Se;if(Xn(e,n),Vn(n),a&512&&(zn||t===null||Ce(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=n.memoizedState,t===null)if(a===null)if(n.stateNode===null){n:{a=n.type,t=n.memoizedProps,r=r.ownerDocument||r;e:switch(a){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Ba]||l[Mn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(a),r.head.insertBefore(l,r.querySelector("head > title"))),On(l,a,t),l[Mn]=n,En(l),a=l;break n;case"link":var i=rf("link","href",r).get(a+(t.href||""));if(i){for(var o=0;o<i.length;o++)if(l=i[o],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(o,1);break e}}l=r.createElement(a),On(l,a,t),r.head.appendChild(l);break;case"meta":if(i=rf("meta","content",r).get(a+(t.content||""))){for(o=0;o<i.length;o++)if(l=i[o],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(o,1);break e}}l=r.createElement(a),On(l,a,t),r.head.appendChild(l);break;default:throw Error(d(468,a))}l[Mn]=n,En(l),a=l}n.stateNode=a}else lf(r,n.type,n.stateNode);else n.stateNode=af(r,a,n.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?lf(r,n.type,n.stateNode):af(r,a,n.memoizedProps)):a===null&&n.stateNode!==null&&wo(n,n.memoizedProps,t.memoizedProps)}break;case 27:Xn(e,n),Vn(n),a&512&&(zn||t===null||Ce(t,t.return)),t!==null&&a&4&&wo(n,n.memoizedProps,t.memoizedProps);break;case 5:if(Xn(e,n),Vn(n),a&512&&(zn||t===null||Ce(t,t.return)),n.flags&32){r=n.stateNode;try{Wt(r,"")}catch(C){an(n,n.return,C)}}a&4&&n.stateNode!=null&&(r=n.memoizedProps,wo(n,r,t!==null?t.memoizedProps:r)),a&1024&&(zo=!0);break;case 6:if(Xn(e,n),Vn(n),a&4){if(n.stateNode===null)throw Error(d(162));a=n.memoizedProps,t=n.stateNode;try{t.nodeValue=a}catch(C){an(n,n.return,C)}}break;case 3:if(Ol=null,r=Se,Se=jl(e.containerInfo),Xn(e,n),Se=r,Vn(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(C){an(n,n.return,C)}zo&&(zo=!1,ld(n));break;case 4:a=Se,Se=jl(n.stateNode.containerInfo),Xn(e,n),Vn(n),Se=a;break;case 12:Xn(e,n),Vn(n);break;case 31:Xn(e,n),Vn(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,ml(n,a)));break;case 13:Xn(e,n),Vn(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(bl=In()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,ml(n,a)));break;case 22:r=n.memoizedState!==null;var c=t!==null&&t.memoizedState!==null,h=Xe,b=zn;if(Xe=h||r,zn=b||c,Xn(e,n),zn=b,Xe=h,Vn(n),a&8192)n:for(e=n.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(t===null||c||Xe||zn||Qt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){c=t=e;try{if(l=c.stateNode,r)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=c.stateNode;var w=c.memoizedProps.style,g=w!=null&&w.hasOwnProperty("display")?w.display:null;o.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(C){an(c,c.return,C)}}}else if(e.tag===6){if(t===null){c=e;try{c.stateNode.nodeValue=r?"":c.memoizedProps}catch(C){an(c,c.return,C)}}}else if(e.tag===18){if(t===null){c=e;try{var m=c.stateNode;r?Jd(m,!0):Jd(c.stateNode,!1)}catch(C){an(c,c.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,ml(n,t))));break;case 19:Xn(e,n),Vn(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,ml(n,a)));break;case 30:break;case 21:break;default:Xn(e,n),Vn(n)}}function Vn(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if($u(a)){t=a;break}a=a.return}if(t==null)throw Error(d(160));switch(t.tag){case 27:var r=t.stateNode,l=So(n);gl(n,l,r);break;case 5:var i=t.stateNode;t.flags&32&&(Wt(i,""),t.flags&=-33);var o=So(n);gl(n,o,i);break;case 3:case 4:var c=t.stateNode.containerInfo,h=So(n);ko(n,h,c);break;default:throw Error(d(161))}}catch(b){an(n,n.return,b)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ld(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;ld(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Ke(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Pu(n,e.alternate,e),e=e.sibling}function Qt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:dt(4,e,e.return),Qt(e);break;case 1:Ce(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Ju(e,e.return,t),Qt(e);break;case 27:mr(e.stateNode);case 26:case 5:Ce(e,e.return),Qt(e);break;case 22:e.memoizedState===null&&Qt(e);break;case 30:Qt(e);break;default:Qt(e)}n=n.sibling}}function Je(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,r=n,l=e,i=l.flags;switch(l.tag){case 0:case 11:case 15:Je(r,l,t),ir(4,l);break;case 1:if(Je(r,l,t),a=l,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(h){an(a,a.return,h)}if(a=l,r=a.updateQueue,r!==null){var o=a.stateNode;try{var c=r.shared.hiddenCallbacks;if(c!==null)for(r.shared.hiddenCallbacks=null,r=0;r<c.length;r++)Ns(c[r],o)}catch(h){an(a,a.return,h)}}t&&i&64&&Ku(l),or(l,l.return);break;case 27:Wu(l);case 26:case 5:Je(r,l,t),t&&a===null&&i&4&&Fu(l),or(l,l.return);break;case 12:Je(r,l,t);break;case 31:Je(r,l,t),t&&i&4&&td(r,l);break;case 13:Je(r,l,t),t&&i&4&&ad(r,l);break;case 22:l.memoizedState===null&&Je(r,l,t),or(l,l.return);break;case 30:break;default:Je(r,l,t)}e=e.sibling}}function Ao(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&Ka(t))}function Eo(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ka(n))}function ke(n,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(n,e,t,a),e=e.sibling}function id(n,e,t,a){var r=e.flags;switch(e.tag){case 0:case 11:case 15:ke(n,e,t,a),r&2048&&ir(9,e);break;case 1:ke(n,e,t,a);break;case 3:ke(n,e,t,a),r&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Ka(n)));break;case 12:if(r&2048){ke(n,e,t,a),n=e.stateNode;try{var l=e.memoizedProps,i=l.id,o=l.onPostCommit;typeof o=="function"&&o(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(c){an(e,e.return,c)}}else ke(n,e,t,a);break;case 31:ke(n,e,t,a);break;case 13:ke(n,e,t,a);break;case 23:break;case 22:l=e.stateNode,i=e.alternate,e.memoizedState!==null?l._visibility&2?ke(n,e,t,a):cr(n,e):l._visibility&2?ke(n,e,t,a):(l._visibility|=2,va(n,e,t,a,(e.subtreeFlags&10256)!==0||!1)),r&2048&&Ao(i,e);break;case 24:ke(n,e,t,a),r&2048&&Eo(e.alternate,e);break;default:ke(n,e,t,a)}}function va(n,e,t,a,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,i=e,o=t,c=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:va(l,i,o,c,r),ir(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?va(l,i,o,c,r):cr(l,i):(b._visibility|=2,va(l,i,o,c,r)),r&&h&2048&&Ao(i.alternate,i);break;case 24:va(l,i,o,c,r),r&&h&2048&&Eo(i.alternate,i);break;default:va(l,i,o,c,r)}e=e.sibling}}function cr(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,r=a.flags;switch(a.tag){case 22:cr(t,a),r&2048&&Ao(a.alternate,a);break;case 24:cr(t,a),r&2048&&Eo(a.alternate,a);break;default:cr(t,a)}e=e.sibling}}var sr=8192;function ba(n,e,t){if(n.subtreeFlags&sr)for(n=n.child;n!==null;)od(n,e,t),n=n.sibling}function od(n,e,t){switch(n.tag){case 26:ba(n,e,t),n.flags&sr&&n.memoizedState!==null&&K0(t,Se,n.memoizedState,n.memoizedProps);break;case 5:ba(n,e,t);break;case 3:case 4:var a=Se;Se=jl(n.stateNode.containerInfo),ba(n,e,t),Se=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=sr,sr=16777216,ba(n,e,t),sr=a):ba(n,e,t));break;default:ba(n,e,t)}}function cd(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ur(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];Tn=a,ud(a,n)}cd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sd(n),n=n.sibling}function sd(n){switch(n.tag){case 0:case 11:case 15:ur(n),n.flags&2048&&dt(9,n,n.return);break;case 3:ur(n);break;case 12:ur(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,vl(n)):ur(n);break;default:ur(n)}}function vl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];Tn=a,ud(a,n)}cd(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:dt(8,e,e.return),vl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,vl(e));break;default:vl(e)}n=n.sibling}}function ud(n,e){for(;Tn!==null;){var t=Tn;switch(t.tag){case 0:case 11:case 15:dt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ka(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Tn=a;else n:for(t=n;Tn!==null;){a=Tn;var r=a.sibling,l=a.return;if(nd(a),a===t){Tn=null;break n}if(r!==null){r.return=l,Tn=r;break n}Tn=l}}}var c0={getCacheForType:function(n){var e=jn(wn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return jn(wn).controller.signal}},s0=typeof WeakMap=="function"?WeakMap:Map,P=0,un=null,X=null,K=0,tn=0,le=null,ft=!1,xa=!1,To=!1,Fe=0,vn=0,pt=0,Gt=0,Mo=0,ie=0,ya=0,dr=null,Kn=null,Co=!1,bl=0,dd=0,xl=1/0,yl=null,ht=null,An=0,gt=null,wa=null,$e=0,jo=0,Do=null,fd=null,fr=0,Oo=null;function oe(){return(P&2)!==0&&K!==0?K&-K:x.T!==null?Ho():Mc()}function pd(){if(ie===0)if((K&536870912)===0||$){var n=Mr;Mr<<=1,(Mr&3932160)===0&&(Mr=262144),ie=n}else ie=536870912;return n=ae.current,n!==null&&(n.flags|=32),ie}function Jn(n,e,t){(n===un&&(tn===2||tn===9)||n.cancelPendingCommit!==null)&&(Sa(n,0),mt(n,K,ie,!1)),La(n,t),((P&2)===0||n!==un)&&(n===un&&((P&2)===0&&(Gt|=t),vn===4&&mt(n,K,ie,!1)),je(n))}function hd(n,e,t){if((P&6)!==0)throw Error(d(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Oa(n,e),r=a?f0(n,e):Bo(n,e,!0),l=a;do{if(r===0){xa&&!a&&mt(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!u0(t)){r=Bo(n,e,!1),l=!1;continue}if(r===2){if(l=e,n.errorRecoveryDisabledLanes&l)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var o=n;r=dr;var c=o.current.memoizedState.isDehydrated;if(c&&(Sa(o,i).flags|=256),i=Bo(o,i,!1),i!==2){if(To&&!c){o.errorRecoveryDisabledLanes|=l,Gt|=l,r=4;break n}l=Kn,Kn=r,l!==null&&(Kn===null?Kn=l:Kn.push.apply(Kn,l))}r=i}if(l=!1,r!==2)continue}}if(r===1){Sa(n,0),mt(n,e,0,!0);break}n:{switch(a=n,l=r,l){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:mt(a,e,ie,!ft);break n;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(r=bl+300-In(),10<r)){if(mt(a,e,ie,!ft),jr(a,0,!0)!==0)break n;$e=e,a.timeoutHandle=Xd(gd.bind(null,a,t,Kn,yl,Co,e,ie,Gt,ya,ft,l,"Throttled",-0,0),r);break n}gd(a,t,Kn,yl,Co,e,ie,Gt,ya,ft,l,null,-0,0)}}break}while(!0);je(n)}function gd(n,e,t,a,r,l,i,o,c,h,b,w,g,m){if(n.timeoutHandle=-1,w=e.subtreeFlags,w&8192||(w&16785408)===16785408){w={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_e},od(e,l,w);var C=(l&62914560)===l?bl-In():(l&4194048)===l?dd-In():0;if(C=J0(w,C),C!==null){$e=l,n.cancelPendingCommit=C(kd.bind(null,n,e,l,t,a,r,i,o,c,b,w,null,g,m)),mt(n,l,i,!h);return}}kd(n,e,l,t,a,r,i,o,c)}function u0(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var r=t[a],l=r.getSnapshot;r=r.value;try{if(!ee(l(),r))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mt(n,e,t,a){e&=~Mo,e&=~Gt,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var r=e;0<r;){var l=31-ne(r),i=1<<l;a[l]=-1,r&=~i}t!==0&&Ac(n,t,e)}function wl(){return(P&6)===0?(pr(0),!1):!0}function Lo(){if(X!==null){if(tn===0)var n=X.return;else n=X,Re=Bt=null,Ji(n),fa=null,Fa=0,n=X;for(;n!==null;)Vu(n.alternate,n),n=n.return;X=null}}function Sa(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,j0(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),$e=0,Lo(),un=n,X=t=Ue(n.current,null),K=e,tn=0,le=null,ft=!1,xa=Oa(n,e),To=!1,ya=ie=Mo=Gt=pt=vn=0,Kn=dr=null,Co=!1,(e&8)!==0&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var r=31-ne(a),l=1<<r;e|=n[r],a&=~l}return Fe=e,Qr(),t}function md(n,e){q=null,x.H=ar,e===da||e===$r?(e=Os(),tn=3):e===Ni?(e=Os(),tn=4):tn=e===uo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,le=e,X===null&&(vn=1,ul(n,fe(e,n.current)))}function vd(){var n=ae.current;return n===null?!0:(K&4194048)===K?me===null:(K&62914560)===K||(K&536870912)!==0?n===me:!1}function bd(){var n=x.H;return x.H=ar,n===null?ar:n}function xd(){var n=x.A;return x.A=c0,n}function Sl(){vn=4,ft||(K&4194048)!==K&&ae.current!==null||(xa=!0),(pt&134217727)===0&&(Gt&134217727)===0||un===null||mt(un,K,ie,!1)}function Bo(n,e,t){var a=P;P|=2;var r=bd(),l=xd();(un!==n||K!==e)&&(yl=null,Sa(n,e)),e=!1;var i=vn;n:do try{if(tn!==0&&X!==null){var o=X,c=le;switch(tn){case 8:Lo(),i=6;break n;case 3:case 2:case 9:case 6:ae.current===null&&(e=!0);var h=tn;if(tn=0,le=null,ka(n,o,c,h),t&&xa){i=0;break n}break;default:h=tn,tn=0,le=null,ka(n,o,c,h)}}d0(),i=vn;break}catch(b){md(n,b)}while(!0);return e&&n.shellSuspendCounter++,Re=Bt=null,P=a,x.H=r,x.A=l,X===null&&(un=null,K=0,Qr()),i}function d0(){for(;X!==null;)yd(X)}function f0(n,e){var t=P;P|=2;var a=bd(),r=xd();un!==n||K!==e?(yl=null,xl=In()+500,Sa(n,e)):xa=Oa(n,e);n:do try{if(tn!==0&&X!==null){e=X;var l=le;e:switch(tn){case 1:tn=0,le=null,ka(n,e,l,1);break;case 2:case 9:if(js(l)){tn=0,le=null,wd(e);break}e=function(){tn!==2&&tn!==9||un!==n||(tn=7),je(n)},l.then(e,e);break n;case 3:tn=7;break n;case 4:tn=5;break n;case 7:js(l)?(tn=0,le=null,wd(e)):(tn=0,le=null,ka(n,e,l,7));break;case 5:var i=null;switch(X.tag){case 26:i=X.memoizedState;case 5:case 27:var o=X;if(i?of(i):o.stateNode.complete){tn=0,le=null;var c=o.sibling;if(c!==null)X=c;else{var h=o.return;h!==null?(X=h,kl(h)):X=null}break e}}tn=0,le=null,ka(n,e,l,5);break;case 6:tn=0,le=null,ka(n,e,l,6);break;case 8:Lo(),vn=6;break n;default:throw Error(d(462))}}p0();break}catch(b){md(n,b)}while(!0);return Re=Bt=null,x.H=a,x.A=r,P=t,X!==null?0:(un=null,K=0,Qr(),vn)}function p0(){for(;X!==null&&!Nf();)yd(X)}function yd(n){var e=Zu(n.alternate,n,Fe);n.memoizedProps=n.pendingProps,e===null?kl(n):X=e}function wd(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Hu(t,e,e.pendingProps,e.type,void 0,K);break;case 11:e=Hu(t,e,e.pendingProps,e.type.render,e.ref,K);break;case 5:Ji(e);default:Vu(t,e),e=X=xs(e,Fe),e=Zu(t,e,Fe)}n.memoizedProps=n.pendingProps,e===null?kl(n):X=e}function ka(n,e,t,a){Re=Bt=null,Ji(e),fa=null,Fa=0;var r=e.return;try{if(e0(n,r,e,t,K)){vn=1,ul(n,fe(t,n.current)),X=null;return}}catch(l){if(r!==null)throw X=r,l;vn=1,ul(n,fe(t,n.current)),X=null;return}e.flags&32768?($||a===1?n=!0:xa||(K&536870912)!==0?n=!1:(ft=n=!0,(a===2||a===9||a===3||a===6)&&(a=ae.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sd(e,n)):kl(e)}function kl(n){var e=n;do{if((e.flags&32768)!==0){Sd(e,ft);return}n=e.return;var t=r0(e.alternate,e,Fe);if(t!==null){X=t;return}if(e=e.sibling,e!==null){X=e;return}X=e=n}while(e!==null);vn===0&&(vn=5)}function Sd(n,e){do{var t=l0(n.alternate,n);if(t!==null){t.flags&=32767,X=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){X=n;return}X=n=t}while(n!==null);vn=6,X=null}function kd(n,e,t,a,r,l,i,o,c){n.cancelPendingCommit=null;do zl();while(An!==0);if((P&6)!==0)throw Error(d(327));if(e!==null){if(e===n.current)throw Error(d(177));if(l=e.lanes|e.childLanes,l|=wi,Vf(n,t,l,i,o,c),n===un&&(X=un=null,K=0),wa=e,gt=n,$e=t,jo=l,Do=r,fd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,v0(Er,function(){return Md(),null})):(n.callbackNode=null,n.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,r=E.p,E.p=2,i=P,P|=4;try{i0(n,e,t)}finally{P=i,E.p=r,x.T=a}}An=1,zd(),Ad(),Ed()}}function zd(){if(An===1){An=0;var n=gt,e=wa,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=x.T,x.T=null;var a=E.p;E.p=2;var r=P;P|=4;try{rd(e,n);var l=Vo,i=us(n.containerInfo),o=l.focusedElem,c=l.selectionRange;if(i!==o&&o&&o.ownerDocument&&ss(o.ownerDocument.documentElement,o)){if(c!==null&&mi(o)){var h=c.start,b=c.end;if(b===void 0&&(b=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(b,o.value.length);else{var w=o.ownerDocument||document,g=w&&w.defaultView||window;if(g.getSelection){var m=g.getSelection(),C=o.textContent.length,_=Math.min(c.start,C),cn=c.end===void 0?_:Math.min(c.end,C);!m.extend&&_>cn&&(i=cn,cn=_,_=i);var f=cs(o,_),s=cs(o,cn);if(f&&s&&(m.rangeCount!==1||m.anchorNode!==f.node||m.anchorOffset!==f.offset||m.focusNode!==s.node||m.focusOffset!==s.offset)){var p=w.createRange();p.setStart(f.node,f.offset),m.removeAllRanges(),_>cn?(m.addRange(p),m.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),m.addRange(p))}}}}for(w=[],m=o;m=m.parentNode;)m.nodeType===1&&w.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<w.length;o++){var y=w[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Nl=!!Xo,Vo=Xo=null}finally{P=r,E.p=a,x.T=t}}n.current=e,An=2}}function Ad(){if(An===2){An=0;var n=gt,e=wa,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=x.T,x.T=null;var a=E.p;E.p=2;var r=P;P|=4;try{Pu(n,e.alternate,e)}finally{P=r,E.p=a,x.T=t}}An=3}}function Ed(){if(An===4||An===3){An=0,Uf();var n=gt,e=wa,t=$e,a=fd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?An=5:(An=0,wa=gt=null,Td(n,n.pendingLanes));var r=n.pendingLanes;if(r===0&&(ht=null),Wl(t),e=e.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Da,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=x.T,r=E.p,E.p=2,x.T=null;try{for(var l=n.onRecoverableError,i=0;i<a.length;i++){var o=a[i];l(o.value,{componentStack:o.stack})}}finally{x.T=e,E.p=r}}($e&3)!==0&&zl(),je(n),r=n.pendingLanes,(t&261930)!==0&&(r&42)!==0?n===Oo?fr++:(fr=0,Oo=n):fr=0,pr(0)}}function Td(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Ka(e)))}function zl(){return zd(),Ad(),Ed(),Md()}function Md(){if(An!==5)return!1;var n=gt,e=jo;jo=0;var t=Wl($e),a=x.T,r=E.p;try{E.p=32>t?32:t,x.T=null,t=Do,Do=null;var l=gt,i=$e;if(An=0,wa=gt=null,$e=0,(P&6)!==0)throw Error(d(331));var o=P;if(P|=4,sd(l.current),id(l,l.current,i,t),P=o,pr(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Da,l)}catch{}return!0}finally{E.p=r,x.T=a,Td(n,e)}}function Cd(n,e,t){e=fe(t,e),e=so(n.stateNode,e,2),n=ct(n,e,2),n!==null&&(La(n,2),je(n))}function an(n,e,t){if(n.tag===3)Cd(n,n,t);else for(;e!==null;){if(e.tag===3){Cd(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ht===null||!ht.has(a))){n=fe(t,n),t=ju(2),a=ct(e,t,2),a!==null&&(Du(t,a,e,n),La(a,2),je(a));break}}e=e.return}}function _o(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new s0;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(t)||(To=!0,r.add(t),n=h0.bind(null,n,e,t),e.then(n,n))}function h0(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,un===n&&(K&t)===t&&(vn===4||vn===3&&(K&62914560)===K&&300>In()-bl?(P&2)===0&&Sa(n,0):Mo|=t,ya===K&&(ya=0)),je(n)}function jd(n,e){e===0&&(e=zc()),n=Dt(n,e),n!==null&&(La(n,e),je(n))}function g0(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),jd(n,t)}function m0(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),jd(n,t)}function v0(n,e){return Kl(n,e)}var Al=null,za=null,No=!1,El=!1,Uo=!1,vt=0;function je(n){n!==za&&n.next===null&&(za===null?Al=za=n:za=za.next=n),El=!0,No||(No=!0,x0())}function pr(n,e){if(!Uo&&El){Uo=!0;do for(var t=!1,a=Al;a!==null;){if(n!==0){var r=a.pendingLanes;if(r===0)var l=0;else{var i=a.suspendedLanes,o=a.pingedLanes;l=(1<<31-ne(42|n)+1)-1,l&=r&~(i&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Bd(a,l))}else l=K,l=jr(a,a===un?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Oa(a,l)||(t=!0,Bd(a,l));a=a.next}while(t);Uo=!1}}function b0(){Dd()}function Dd(){El=No=!1;var n=0;vt!==0&&C0()&&(n=vt);for(var e=In(),t=null,a=Al;a!==null;){var r=a.next,l=Od(a,e);l===0?(a.next=null,t===null?Al=r:t.next=r,r===null&&(za=t)):(t=a,(n!==0||(l&3)!==0)&&(El=!0)),a=r}An!==0&&An!==5||pr(n),vt!==0&&(vt=0)}function Od(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,r=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var i=31-ne(l),o=1<<i,c=r[i];c===-1?((o&t)===0||(o&a)!==0)&&(r[i]=Xf(o,e)):c<=e&&(n.expiredLanes|=o),l&=~o}if(e=un,t=K,t=jr(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(tn===2||tn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&Jl(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Oa(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&Jl(a),Wl(t)){case 2:case 8:t=Sc;break;case 32:t=Er;break;case 268435456:t=kc;break;default:t=Er}return a=Ld.bind(null,n),t=Kl(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&Jl(a),n.callbackPriority=2,n.callbackNode=null,2}function Ld(n,e){if(An!==0&&An!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(zl()&&n.callbackNode!==t)return null;var a=K;return a=jr(n,n===un?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(hd(n,a,e),Od(n,In()),n.callbackNode!=null&&n.callbackNode===t?Ld.bind(null,n):null)}function Bd(n,e){if(zl())return null;hd(n,e,!0)}function x0(){D0(function(){(P&6)!==0?Kl(wc,b0):Dd()})}function Ho(){if(vt===0){var n=sa;n===0&&(n=Tr,Tr<<=1,(Tr&261888)===0&&(Tr=256)),vt=n}return vt}function _d(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Br(""+n)}function Nd(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function y0(n,e,t,a,r){if(e==="submit"&&t&&t.stateNode===r){var l=_d((r[Qn]||null).action),i=a.submitter;i&&(e=(e=i[Qn]||null)?_d(e.formAction):i.getAttribute("formAction"),e!==null&&(l=e,i=null));var o=new Hr("action","action",null,a,r);n.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vt!==0){var c=i?Nd(r,i):new FormData(r);ao(t,{pending:!0,data:c,method:r.method,action:l},null,c)}}else typeof l=="function"&&(o.preventDefault(),c=i?Nd(r,i):new FormData(r),ao(t,{pending:!0,data:c,method:r.method,action:l},l,c))},currentTarget:r}]})}}for(var Ro=0;Ro<yi.length;Ro++){var Yo=yi[Ro],w0=Yo.toLowerCase(),S0=Yo[0].toUpperCase()+Yo.slice(1);we(w0,"on"+S0)}we(ps,"onAnimationEnd"),we(hs,"onAnimationIteration"),we(gs,"onAnimationStart"),we("dblclick","onDoubleClick"),we("focusin","onFocus"),we("focusout","onBlur"),we(Hp,"onTransitionRun"),we(Rp,"onTransitionStart"),we(Yp,"onTransitionCancel"),we(ms,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hr));function Ud(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],r=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var i=a.length-1;0<=i;i--){var o=a[i],c=o.instance,h=o.currentTarget;if(o=o.listener,c!==l&&r.isPropagationStopped())break n;l=o,r.currentTarget=h;try{l(r)}catch(b){qr(b)}r.currentTarget=null,l=c}else for(i=0;i<a.length;i++){if(o=a[i],c=o.instance,h=o.currentTarget,o=o.listener,c!==l&&r.isPropagationStopped())break n;l=o,r.currentTarget=h;try{l(r)}catch(b){qr(b)}r.currentTarget=null,l=c}}}}function V(n,e){var t=e[Il];t===void 0&&(t=e[Il]=new Set);var a=n+"__bubble";t.has(a)||(Hd(e,n,2,!1),t.add(a))}function qo(n,e,t){var a=0;e&&(a|=4),Hd(t,n,a,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[Tl]){n[Tl]=!0,Dc.forEach(function(t){t!=="selectionchange"&&(k0.has(t)||qo(t,!1,n),qo(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,qo("selectionchange",!1,e))}}function Hd(n,e,t,a){switch(hf(e)){case 2:var r=W0;break;case 8:r=I0;break;default:r=ac}t=r.bind(null,e,t,n),r=void 0,!oi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Go(n,e,t,a,r){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var o=a.stateNode.containerInfo;if(o===r)break;if(i===4)for(i=a.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===r)return;i=i.return}for(;o!==null;){if(i=Vt(o),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){a=l=i;continue n}o=o.parentNode}}a=a.return}Gc(function(){var h=l,b=li(t),w=[];n:{var g=vs.get(n);if(g!==void 0){var m=Hr,C=n;switch(n){case"keypress":if(Nr(t)===0)break n;case"keydown":case"keyup":m=mp;break;case"focusin":C="focus",m=di;break;case"focusout":C="blur",m=di;break;case"beforeblur":case"afterblur":m=di;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xp;break;case ps:case hs:case gs:m=op;break;case ms:m=wp;break;case"scroll":case"scrollend":m=tp;break;case"wheel":m=kp;break;case"copy":case"cut":case"paste":m=sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jc;break;case"toggle":case"beforetoggle":m=Ap}var _=(e&4)!==0,cn=!_&&(n==="scroll"||n==="scrollend"),f=_?g!==null?g+"Capture":null:g;_=[];for(var s=h,p;s!==null;){var y=s;if(p=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||p===null||f===null||(y=Na(s,f),y!=null&&_.push(gr(s,y,p))),cn)break;s=s.return}0<_.length&&(g=new m(g,C,null,t,b),w.push({event:g,listeners:_}))}}if((e&7)===0){n:{if(g=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",g&&t!==ri&&(C=t.relatedTarget||t.fromElement)&&(Vt(C)||C[Xt]))break n;if((m||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,m?(C=t.relatedTarget||t.toElement,m=h,C=C?Vt(C):null,C!==null&&(cn=H(C),_=C.tag,C!==cn||_!==5&&_!==27&&_!==6)&&(C=null)):(m=null,C=h),m!==C)){if(_=Vc,y="onMouseLeave",f="onMouseEnter",s="mouse",(n==="pointerout"||n==="pointerover")&&(_=Jc,y="onPointerLeave",f="onPointerEnter",s="pointer"),cn=m==null?g:_a(m),p=C==null?g:_a(C),g=new _(y,s+"leave",m,t,b),g.target=cn,g.relatedTarget=p,y=null,Vt(b)===h&&(_=new _(f,s+"enter",C,t,b),_.target=p,_.relatedTarget=cn,y=_),cn=y,m&&C)e:{for(_=z0,f=m,s=C,p=0,y=f;y;y=_(y))p++;y=0;for(var B=s;B;B=_(B))y++;for(;0<p-y;)f=_(f),p--;for(;0<y-p;)s=_(s),y--;for(;p--;){if(f===s||s!==null&&f===s.alternate){_=f;break e}f=_(f),s=_(s)}_=null}else _=null;m!==null&&Rd(w,g,m,_,!1),C!==null&&cn!==null&&Rd(w,cn,C,_,!0)}}n:{if(g=h?_a(h):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var W=ts;else if(ns(g))if(as)W=_p;else{W=Lp;var O=Op}else m=g.nodeName,!m||m.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&ai(h.elementType)&&(W=ts):W=Bp;if(W&&(W=W(n,h))){es(w,W,t,b);break n}O&&O(n,g,h),n==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&ti(g,"number",g.value)}switch(O=h?_a(h):window,n){case"focusin":(ns(O)||O.contentEditable==="true")&&(ea=O,vi=h,Za=null);break;case"focusout":Za=vi=ea=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,ds(w,t,b);break;case"selectionchange":if(Up)break;case"keydown":case"keyup":ds(w,t,b)}var Q;if(pi)n:{switch(n){case"compositionstart":var J="onCompositionStart";break n;case"compositionend":J="onCompositionEnd";break n;case"compositionupdate":J="onCompositionUpdate";break n}J=void 0}else na?Ic(n,t)&&(J="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(J="onCompositionStart");J&&(Fc&&t.locale!=="ko"&&(na||J!=="onCompositionStart"?J==="onCompositionEnd"&&na&&(Q=Zc()):(et=b,ci="value"in et?et.value:et.textContent,na=!0)),O=Ml(h,J),0<O.length&&(J=new Kc(J,n,null,t,b),w.push({event:J,listeners:O}),Q?J.data=Q:(Q=Pc(t),Q!==null&&(J.data=Q)))),(Q=Tp?Mp(n,t):Cp(n,t))&&(J=Ml(h,"onBeforeInput"),0<J.length&&(O=new Kc("onBeforeInput","beforeinput",null,t,b),w.push({event:O,listeners:J}),O.data=Q)),y0(w,n,h,t,b)}Ud(w,e)})}function gr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ml(n,e){for(var t=e+"Capture",a=[];n!==null;){var r=n,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=Na(n,t),r!=null&&a.unshift(gr(n,r,l)),r=Na(n,e),r!=null&&a.push(gr(n,r,l))),n.tag===3)return a;n=n.return}return[]}function z0(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Rd(n,e,t,a,r){for(var l=e._reactName,i=[];t!==null&&t!==a;){var o=t,c=o.alternate,h=o.stateNode;if(o=o.tag,c!==null&&c===a)break;o!==5&&o!==26&&o!==27||h===null||(c=h,r?(h=Na(t,l),h!=null&&i.unshift(gr(t,h,c))):r||(h=Na(t,l),h!=null&&i.push(gr(t,h,c)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var A0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function Yd(n){return(typeof n=="string"?n:""+n).replace(A0,`
`).replace(E0,"")}function qd(n,e){return e=Yd(e),Yd(n)===e}function on(n,e,t,a,r,l){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Wt(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Wt(n,""+a);break;case"className":Or(n,"class",a);break;case"tabIndex":Or(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(n,t,a);break;case"style":qc(n,a,l);break;case"data":if(e!=="object"){Or(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Br(""+a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&on(n,e,"name",r.name,r,null),on(n,e,"formEncType",r.formEncType,r,null),on(n,e,"formMethod",r.formMethod,r,null),on(n,e,"formTarget",r.formTarget,r,null)):(on(n,e,"encType",r.encType,r,null),on(n,e,"method",r.method,r,null),on(n,e,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=Br(""+a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=_e);break;case"onScroll":a!=null&&V("scroll",n);break;case"onScrollEnd":a!=null&&V("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(d(60));n.innerHTML=t}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=Br(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""+a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":V("beforetoggle",n),V("toggle",n),Dr(n,"popover",a);break;case"xlinkActuate":Be(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Be(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Be(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Be(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Be(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Be(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Be(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Be(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Be(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dr(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=np.get(t)||t,Dr(n,t,a))}}function Zo(n,e,t,a,r,l){switch(t){case"style":qc(n,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(t=a.__html,t!=null){if(r.children!=null)throw Error(d(60));n.innerHTML=t}}break;case"children":typeof a=="string"?Wt(n,a):(typeof a=="number"||typeof a=="bigint")&&Wt(n,""+a);break;case"onScroll":a!=null&&V("scroll",n);break;case"onScrollEnd":a!=null&&V("scrollend",n);break;case"onClick":a!=null&&(n.onclick=_e);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oc.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),e=t.slice(2,r?t.length-7:void 0),l=n[Qn]||null,l=l!=null?l[t]:null,typeof l=="function"&&n.removeEventListener(e,l,r),typeof a=="function")){typeof l!="function"&&l!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,a,r);break n}t in n?n[t]=a:a===!0?n.setAttribute(t,""):Dr(n,t,a)}}}function On(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",n),V("load",n);var a=!1,r=!1,l;for(l in t)if(t.hasOwnProperty(l)){var i=t[l];if(i!=null)switch(l){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:on(n,e,l,i,t,null)}}r&&on(n,e,"srcSet",t.srcSet,t,null),a&&on(n,e,"src",t.src,t,null);return;case"input":V("invalid",n);var o=l=i=r=null,c=null,h=null;for(a in t)if(t.hasOwnProperty(a)){var b=t[a];if(b!=null)switch(a){case"name":r=b;break;case"type":i=b;break;case"checked":c=b;break;case"defaultChecked":h=b;break;case"value":l=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:on(n,e,a,b,t,null)}}Uc(n,l,o,c,h,i,r,!1);return;case"select":V("invalid",n),a=i=l=null;for(r in t)if(t.hasOwnProperty(r)&&(o=t[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":i=o;break;case"multiple":a=o;default:on(n,e,r,o,t,null)}e=l,t=i,n.multiple=!!a,e!=null?$t(n,!!a,e,!1):t!=null&&$t(n,!!a,t,!0);return;case"textarea":V("invalid",n),l=r=a=null;for(i in t)if(t.hasOwnProperty(i)&&(o=t[i],o!=null))switch(i){case"value":a=o;break;case"defaultValue":r=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:on(n,e,i,o,t,null)}Rc(n,a,r,l);return;case"option":for(c in t)if(t.hasOwnProperty(c)&&(a=t[c],a!=null))switch(c){case"selected":n.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:on(n,e,c,a,t,null)}return;case"dialog":V("beforetoggle",n),V("toggle",n),V("cancel",n),V("close",n);break;case"iframe":case"object":V("load",n);break;case"video":case"audio":for(a=0;a<hr.length;a++)V(hr[a],n);break;case"image":V("error",n),V("load",n);break;case"details":V("toggle",n);break;case"embed":case"source":case"link":V("error",n),V("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in t)if(t.hasOwnProperty(h)&&(a=t[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:on(n,e,h,a,t,null)}return;default:if(ai(e)){for(b in t)t.hasOwnProperty(b)&&(a=t[b],a!==void 0&&Zo(n,e,b,a,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(a=t[o],a!=null&&on(n,e,o,a,t,null))}function T0(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,i=null,o=null,c=null,h=null,b=null;for(m in t){var w=t[m];if(t.hasOwnProperty(m)&&w!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":c=w;default:a.hasOwnProperty(m)||on(n,e,m,null,a,w)}}for(var g in a){var m=a[g];if(w=t[g],a.hasOwnProperty(g)&&(m!=null||w!=null))switch(g){case"type":l=m;break;case"name":r=m;break;case"checked":h=m;break;case"defaultChecked":b=m;break;case"value":i=m;break;case"defaultValue":o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(d(137,e));break;default:m!==w&&on(n,e,g,m,a,w)}}ei(n,i,o,c,h,b,l,r);return;case"select":m=i=o=g=null;for(l in t)if(c=t[l],t.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":m=c;default:a.hasOwnProperty(l)||on(n,e,l,null,a,c)}for(r in a)if(l=a[r],c=t[r],a.hasOwnProperty(r)&&(l!=null||c!=null))switch(r){case"value":g=l;break;case"defaultValue":o=l;break;case"multiple":i=l;default:l!==c&&on(n,e,r,l,a,c)}e=o,t=i,a=m,g!=null?$t(n,!!t,g,!1):!!a!=!!t&&(e!=null?$t(n,!!t,e,!0):$t(n,!!t,t?[]:"",!1));return;case"textarea":m=g=null;for(o in t)if(r=t[o],t.hasOwnProperty(o)&&r!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:on(n,e,o,null,a,r)}for(i in a)if(r=a[i],l=t[i],a.hasOwnProperty(i)&&(r!=null||l!=null))switch(i){case"value":g=r;break;case"defaultValue":m=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==l&&on(n,e,i,r,a,l)}Hc(n,g,m);return;case"option":for(var C in t)if(g=t[C],t.hasOwnProperty(C)&&g!=null&&!a.hasOwnProperty(C))switch(C){case"selected":n.selected=!1;break;default:on(n,e,C,null,a,g)}for(c in a)if(g=a[c],m=t[c],a.hasOwnProperty(c)&&g!==m&&(g!=null||m!=null))switch(c){case"selected":n.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:on(n,e,c,g,a,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in t)g=t[_],t.hasOwnProperty(_)&&g!=null&&!a.hasOwnProperty(_)&&on(n,e,_,null,a,g);for(h in a)if(g=a[h],m=t[h],a.hasOwnProperty(h)&&g!==m&&(g!=null||m!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,e));break;default:on(n,e,h,g,a,m)}return;default:if(ai(e)){for(var cn in t)g=t[cn],t.hasOwnProperty(cn)&&g!==void 0&&!a.hasOwnProperty(cn)&&Zo(n,e,cn,void 0,a,g);for(b in a)g=a[b],m=t[b],!a.hasOwnProperty(b)||g===m||g===void 0&&m===void 0||Zo(n,e,b,g,a,m);return}}for(var f in t)g=t[f],t.hasOwnProperty(f)&&g!=null&&!a.hasOwnProperty(f)&&on(n,e,f,null,a,g);for(w in a)g=a[w],m=t[w],!a.hasOwnProperty(w)||g===m||g==null&&m==null||on(n,e,w,g,a,m)}function Qd(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M0(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var r=t[a],l=r.transferSize,i=r.initiatorType,o=r.duration;if(l&&o&&Qd(i)){for(i=0,o=r.responseEnd,a+=1;a<t.length;a++){var c=t[a],h=c.startTime;if(h>o)break;var b=c.transferSize,w=c.initiatorType;b&&Qd(w)&&(c=c.responseEnd,i+=b*(c<o?1:(o-h)/(c-h)))}if(--a,e+=8*(l+i)/(r.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Xo=null,Vo=null;function Cl(n){return n.nodeType===9?n:n.ownerDocument}function Gd(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zd(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Ko(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jo=null;function C0(){var n=window.event;return n&&n.type==="popstate"?n===Jo?!1:(Jo=n,!0):(Jo=null,!1)}var Xd=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(n){return Vd.resolve(null).then(n).catch(O0)}:Xd;function O0(n){setTimeout(function(){throw n})}function bt(n){return n==="head"}function Kd(n,e){var t=e,a=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(r),Ma(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")mr(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,mr(t);for(var l=t.firstChild;l;){var i=l.nextSibling,o=l.nodeName;l[Ba]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=i}}else t==="body"&&mr(n.ownerDocument.body);t=r}while(t);Ma(e)}function Jd(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function Fo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Fo(t),Pl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function L0(n,e,t,a){for(;n.nodeType===1;){var r=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[Ba])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==r.rel||n.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||n.getAttribute("title")!==(r.title==null?null:r.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(r.src==null?null:r.src)||n.getAttribute("type")!==(r.type==null?null:r.type)||n.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=ve(n.nextSibling),n===null)break}return null}function B0(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=ve(n.nextSibling),n===null))return null;return n}function Fd(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ve(n.nextSibling),n===null))return null;return n}function $o(n){return n.data==="$?"||n.data==="$~"}function Wo(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function _0(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function ve(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Io=null;function $d(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return ve(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function Wd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function Id(n,e,t){switch(e=Cl(t),n){case"html":if(n=e.documentElement,!n)throw Error(d(452));return n;case"head":if(n=e.head,!n)throw Error(d(453));return n;case"body":if(n=e.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function mr(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Pl(n)}var be=new Map,Pd=new Set;function jl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var We=E.d;E.d={f:N0,r:U0,D:H0,C:R0,L:Y0,m:q0,X:G0,S:Q0,M:Z0};function N0(){var n=We.f(),e=wl();return n||e}function U0(n){var e=Kt(n);e!==null&&e.tag===5&&e.type==="form"?mu(e):We.r(n)}var Aa=typeof document>"u"?null:document;function nf(n,e,t){var a=Aa;if(a&&typeof e=="string"&&e){var r=ue(e);r='link[rel="'+n+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Pd.has(r)||(Pd.add(r),n={rel:n,crossOrigin:t,href:e},a.querySelector(r)===null&&(e=a.createElement("link"),On(e,"link",n),En(e),a.head.appendChild(e)))}}function H0(n){We.D(n),nf("dns-prefetch",n,null)}function R0(n,e){We.C(n,e),nf("preconnect",n,e)}function Y0(n,e,t){We.L(n,e,t);var a=Aa;if(a&&n&&e){var r='link[rel="preload"][as="'+ue(e)+'"]';e==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+ue(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+ue(t.imageSizes)+'"]')):r+='[href="'+ue(n)+'"]';var l=r;switch(e){case"style":l=Ea(n);break;case"script":l=Ta(n)}be.has(l)||(n=N({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),be.set(l,n),a.querySelector(r)!==null||e==="style"&&a.querySelector(vr(l))||e==="script"&&a.querySelector(br(l))||(e=a.createElement("link"),On(e,"link",n),En(e),a.head.appendChild(e)))}}function q0(n,e){We.m(n,e);var t=Aa;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+ue(a)+'"][href="'+ue(n)+'"]',l=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ta(n)}if(!be.has(l)&&(n=N({rel:"modulepreload",href:n},e),be.set(l,n),t.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(br(l)))return}a=t.createElement("link"),On(a,"link",n),En(a),t.head.appendChild(a)}}}function Q0(n,e,t){We.S(n,e,t);var a=Aa;if(a&&n){var r=Jt(a).hoistableStyles,l=Ea(n);e=e||"default";var i=r.get(l);if(!i){var o={loading:0,preload:null};if(i=a.querySelector(vr(l)))o.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":e},t),(t=be.get(l))&&Po(n,t);var c=i=a.createElement("link");En(c),On(c,"link",n),c._p=new Promise(function(h,b){c.onload=h,c.onerror=b}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Dl(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:o},r.set(l,i)}}}function G0(n,e){We.X(n,e);var t=Aa;if(t&&n){var a=Jt(t).hoistableScripts,r=Ta(n),l=a.get(r);l||(l=t.querySelector(br(r)),l||(n=N({src:n,async:!0},e),(e=be.get(r))&&nc(n,e),l=t.createElement("script"),En(l),On(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function Z0(n,e){We.M(n,e);var t=Aa;if(t&&n){var a=Jt(t).hoistableScripts,r=Ta(n),l=a.get(r);l||(l=t.querySelector(br(r)),l||(n=N({src:n,async:!0,type:"module"},e),(e=be.get(r))&&nc(n,e),l=t.createElement("script"),En(l),On(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(r,l))}}function ef(n,e,t,a){var r=(r=Z.current)?jl(r):null;if(!r)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ea(t.href),t=Jt(r).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Ea(t.href);var l=Jt(r).hoistableStyles,i=l.get(n);if(i||(r=r.ownerDocument||r,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,i),(l=r.querySelector(vr(n)))&&!l._p&&(i.instance=l,i.state.loading=5),be.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},be.set(n,t),l||X0(r,n,t,i.state))),e&&a===null)throw Error(d(528,""));return i}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ta(t),t=Jt(r).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function Ea(n){return'href="'+ue(n)+'"'}function vr(n){return'link[rel="stylesheet"]['+n+"]"}function tf(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function X0(n,e,t,a){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),On(e,"link",t),En(e),n.head.appendChild(e))}function Ta(n){return'[src="'+ue(n)+'"]'}function br(n){return"script[async]"+n}function af(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+ue(t.href)+'"]');if(a)return e.instance=a,En(a),a;var r=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),En(a),On(a,"style",r),Dl(a,t.precedence,n),e.instance=a;case"stylesheet":r=Ea(t.href);var l=n.querySelector(vr(r));if(l)return e.state.loading|=4,e.instance=l,En(l),l;a=tf(t),(r=be.get(r))&&Po(a,r),l=(n.ownerDocument||n).createElement("link"),En(l);var i=l;return i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),On(l,"link",a),e.state.loading|=4,Dl(l,t.precedence,n),e.instance=l;case"script":return l=Ta(t.src),(r=n.querySelector(br(l)))?(e.instance=r,En(r),r):(a=t,(r=be.get(l))&&(a=N({},t),nc(a,r)),n=n.ownerDocument||n,r=n.createElement("script"),En(r),On(r,"link",a),n.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Dl(a,t.precedence,n));return e.instance}function Dl(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,l=r,i=0;i<a.length;i++){var o=a[i];if(o.dataset.precedence===e)l=o;else if(l!==r)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function Po(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function nc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Ol=null;function rf(n,e,t){if(Ol===null){var a=new Map,r=Ol=new Map;r.set(t,a)}else r=Ol,a=r.get(t),a||(a=new Map,r.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),r=0;r<t.length;r++){var l=t[r];if(!(l[Ba]||l[Mn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(e)||"";i=n+i;var o=a.get(i);o?o.push(l):a.set(i,[l])}}return a}function lf(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function V0(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function of(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function K0(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Ea(a.href),l=e.querySelector(vr(r));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ll.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,En(l);return}l=e.ownerDocument||e,a=tf(a),(r=be.get(r))&&Po(a,r),l=l.createElement("link"),En(l);var i=l;i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),On(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ll.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var ec=0;function J0(n,e){return n.stylesheets&&n.count===0&&_l(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&_l(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&ec===0&&(ec=62500*M0());var r=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&_l(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>ec?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Ll(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_l(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Bl=null;function _l(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Bl=new Map,e.forEach(F0,n),Bl=null,Ll.call(n))}function F0(n,e){if(!(e.state.loading&4)){var t=Bl.get(n);if(t)var a=t.get(null);else{t=new Map,Bl.set(n,t);for(var r=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var i=r[l];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),a=i)}a&&t.set(null,a)}r=e.instance,i=r.getAttribute("data-precedence"),l=t.get(i)||a,l===a&&t.set(null,r),t.set(i,r),this.count++,a=Ll.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),l?l.parentNode.insertBefore(r,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(r,n.firstChild)),e.state.loading|=4}}var xr={$$typeof:Ln,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function $0(n,e,t,a,r,l,i,o,c){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.hiddenUpdates=Fl(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function cf(n,e,t,a,r,l,i,o,c,h,b,w){return n=new $0(n,e,t,i,c,h,b,w,o),e=1,l===!0&&(e|=24),l=te(3,null,null,e),n.current=l,l.stateNode=n,e=Li(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},Ui(l),n}function sf(n){return n?(n=ra,n):ra}function uf(n,e,t,a,r,l){r=sf(r),a.context===null?a.context=r:a.pendingContext=r,a=ot(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=ct(n,a,e),t!==null&&(Jn(t,n,e),Wa(t,n,e))}function df(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function tc(n,e){df(n,e),(n=n.alternate)&&df(n,e)}function ff(n){if(n.tag===13||n.tag===31){var e=Dt(n,67108864);e!==null&&Jn(e,n,67108864),tc(n,67108864)}}function pf(n){if(n.tag===13||n.tag===31){var e=oe();e=$l(e);var t=Dt(n,e);t!==null&&Jn(t,n,e),tc(n,e)}}var Nl=!0;function W0(n,e,t,a){var r=x.T;x.T=null;var l=E.p;try{E.p=2,ac(n,e,t,a)}finally{E.p=l,x.T=r}}function I0(n,e,t,a){var r=x.T;x.T=null;var l=E.p;try{E.p=8,ac(n,e,t,a)}finally{E.p=l,x.T=r}}function ac(n,e,t,a){if(Nl){var r=rc(a);if(r===null)Go(n,e,a,Ul,t),gf(n,a);else if(nh(r,n,e,t,a))a.stopPropagation();else if(gf(n,a),e&4&&-1<P0.indexOf(n)){for(;r!==null;){var l=Kt(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=Et(l.pendingLanes);if(i!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var c=1<<31-ne(i);o.entanglements[1]|=c,i&=~c}je(l),(P&6)===0&&(xl=In()+500,pr(0))}}break;case 31:case 13:o=Dt(l,2),o!==null&&Jn(o,l,2),wl(),tc(l,2)}if(l=rc(a),l===null&&Go(n,e,a,Ul,t),l===r)break;r=l}r!==null&&a.stopPropagation()}else Go(n,e,a,null,t)}}function rc(n){return n=li(n),lc(n)}var Ul=null;function lc(n){if(Ul=null,n=Vt(n),n!==null){var e=H(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=G(e),n!==null)return n;n=null}else if(t===31){if(n=gn(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Ul=n,null}function hf(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hf()){case wc:return 2;case Sc:return 8;case Er:case Rf:return 32;case kc:return 268435456;default:return 32}default:return 32}}var ic=!1,xt=null,yt=null,wt=null,yr=new Map,wr=new Map,St=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gf(n,e){switch(n){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":yr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(e.pointerId)}}function Sr(n,e,t,a,r,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[r]},e!==null&&(e=Kt(e),e!==null&&ff(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function nh(n,e,t,a,r){switch(e){case"focusin":return xt=Sr(xt,n,e,t,a,r),!0;case"dragenter":return yt=Sr(yt,n,e,t,a,r),!0;case"mouseover":return wt=Sr(wt,n,e,t,a,r),!0;case"pointerover":var l=r.pointerId;return yr.set(l,Sr(yr.get(l)||null,n,e,t,a,r)),!0;case"gotpointercapture":return l=r.pointerId,wr.set(l,Sr(wr.get(l)||null,n,e,t,a,r)),!0}return!1}function mf(n){var e=Vt(n.target);if(e!==null){var t=H(e);if(t!==null){if(e=t.tag,e===13){if(e=G(t),e!==null){n.blockedOn=e,Cc(n.priority,function(){pf(t)});return}}else if(e===31){if(e=gn(t),e!==null){n.blockedOn=e,Cc(n.priority,function(){pf(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Hl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=rc(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);ri=a,t.target.dispatchEvent(a),ri=null}else return e=Kt(t),e!==null&&ff(e),n.blockedOn=t,!1;e.shift()}return!0}function vf(n,e,t){Hl(n)&&t.delete(e)}function eh(){ic=!1,xt!==null&&Hl(xt)&&(xt=null),yt!==null&&Hl(yt)&&(yt=null),wt!==null&&Hl(wt)&&(wt=null),yr.forEach(vf),wr.forEach(vf)}function Rl(n,e){n.blockedOn===e&&(n.blockedOn=null,ic||(ic=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,eh)))}var Yl=null;function bf(n){Yl!==n&&(Yl=n,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Yl===n&&(Yl=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],r=n[e+2];if(typeof a!="function"){if(lc(a||t)===null)continue;break}var l=Kt(t);l!==null&&(n.splice(e,3),e-=3,ao(l,{pending:!0,data:r,method:t.method,action:a},a,r))}}))}function Ma(n){function e(c){return Rl(c,n)}xt!==null&&Rl(xt,n),yt!==null&&Rl(yt,n),wt!==null&&Rl(wt,n),yr.forEach(e),wr.forEach(e);for(var t=0;t<St.length;t++){var a=St[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<St.length&&(t=St[0],t.blockedOn===null);)mf(t),t.blockedOn===null&&St.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var r=t[a],l=t[a+1],i=r[Qn]||null;if(typeof l=="function")i||bf(t);else if(i){var o=null;if(l&&l.hasAttribute("formAction")){if(r=l,i=l[Qn]||null)o=i.formAction;else if(lc(r)!==null)continue}else o=i.action;typeof o=="function"?t[a+1]=o:(t.splice(a,3),a-=3),bf(t)}}}function xf(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(i){return r=i})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function oc(n){this._internalRoot=n}ql.prototype.render=oc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(d(409));var t=e.current,a=oe();uf(t,a,n,e,null,null)},ql.prototype.unmount=oc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;uf(n.current,2,null,n,null,null),wl(),e[Xt]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mc();n={blockedOn:null,target:n,priority:e};for(var t=0;t<St.length&&e!==0&&e<St[t].priority;t++);St.splice(t,0,n),t===0&&mf(n)}};var yf=A.version;if(yf!=="19.2.8")throw Error(d(527,yf,"19.2.8"));E.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=z(e),n=n!==null?nn(n):null,n=n===null?null:n.stateNode,n};var th={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Da=Ql.inject(th),Pn=Ql}catch{}}return zr.createRoot=function(n,e){if(!j(n))throw Error(d(299));var t=!1,a="",r=Eu,l=Tu,i=Mu;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cf(n,1,!1,null,null,t,a,null,r,l,i,xf),n[Xt]=e.current,Qo(n),new oc(e)},zr.hydrateRoot=function(n,e,t){if(!j(n))throw Error(d(299));var a=!1,r="",l=Eu,i=Tu,o=Mu,c=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(c=t.formState)),e=cf(n,1,!0,e,t??null,a,r,c,l,i,o,xf),e.context=sf(null),t=e.current,a=oe(),a=$l(a),r=ot(a),r.callback=null,ct(t,r,a),t=a,e.current.lanes=t,La(e,t),je(e),n[Xt]=e.current,Qo(n),new ql(e)},zr.version="19.2.8",zr}var jf;function fh(){if(jf)return sc.exports;jf=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(A){console.error(A)}}return v(),sc.exports=dh(),sc.exports}var ph=fh();const hh="https://sakinzo.onrender.com/api";window.API_BASE=hh;var De=vc();const gh=`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Sakinzo - Developing Solutions That Transform Business</title>\r
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"\r
        rel="stylesheet">\r
    <style>\r
        *,\r
        *::before,\r
        *::after {\r
            box-sizing: border-box;\r
            margin: 0;\r
            padding: 0\r
        }\r
\r
        html {\r
            scroll-behavior: smooth;\r
            overflow-x: hidden;\r
            scrollbar-width: thin;\r
            scrollbar-color: rgba(5, 73, 175, 0.3);\r
        }\r
\r
        body {\r
            font-family: 'Inter', sans-serif;\r
            color: #0d1b2e;\r
            background: #fff;\r
            overflow-x: hidden;\r
            scrollbar-width: thin;\r
            scrollbar-color: rgba(5, 73, 175, 0.3)\r
        }\r
\r
        /* HEADER */\r
        .hdr {\r
            position: fixed;\r
            top: 0;\r
            left: 0;\r
            right: 0;\r
            z-index: 1000;\r
            background: rgba(10, 18, 40, 0.97);\r
            backdrop-filter: blur(14px);\r
            -webkit-backdrop-filter: blur(14px)\r
        }\r
\r
        .hdr-inner {\r
            max-width: 1360px;\r
            margin: 0 auto;\r
            padding: 0 40px;\r
            height: 68px;\r
            display: flex;\r
            align-items: center;\r
            gap: 8px\r
        }\r
\r
        .logo {\r
            display: flex;\r
            align-items: center;\r
            gap: 10px;\r
            text-decoration: none;\r
            margin-right: 24px;\r
            flex-shrink: 0\r
        }\r
\r
        .logo-txt {\r
            font-size: 21px;\r
            font-weight: 700;\r
            color: #fff;\r
            letter-spacing: -0.2px\r
        }\r
\r
        .logo-txt span {\r
            color: #1673FF;\r
            font-weight: 800\r
        }\r
\r
        nav {\r
            display: flex;\r
            align-items: center;\r
            flex: 1\r
        }\r
\r
        .ndrop {\r
            position: relative\r
        }\r
\r
        .nbtn {\r
            background: none;\r
            border: none;\r
            font-family: inherit;\r
            font-size: 14px;\r
            font-weight: 500;\r
            color: rgba(255, 255, 255, 0.85);\r
            padding: 8px 14px;\r
            border-radius: 8px;\r
            cursor: pointer;\r
            display: flex;\r
            align-items: center;\r
            gap: 5px;\r
            transition: all .15s;\r
            white-space: nowrap\r
        }\r
\r
        .nbtn:hover,\r
        .nbtn:focus {\r
            color: #fff;\r
            background: rgba(255, 255, 255, 0.09);\r
            outline: none\r
        }\r
\r
        .nbtn svg {\r
            width: 10px;\r
            height: 6px;\r
            transition: transform .2s\r
        }\r
\r
        .ndrop:hover .nbtn svg,\r
        .ndrop:focus-within .nbtn svg {\r
            transform: rotate(180deg)\r
        }\r
\r
        .drop {\r
            display: none;\r
            position: absolute;\r
            top: calc(100% + 8px);\r
            left: 0;\r
            background: #fff;\r
            border-radius: 14px;\r
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\r
            min-width: 260px;\r
            padding: 8px;\r
            z-index: 200;\r
            border: 1px solid rgba(0, 0, 0, 0.05)\r
        }\r
\r
        .ndrop:hover .drop,\r
        .ndrop:focus-within .drop {\r
            display: block\r
        }\r
\r
        .drop a {\r
            display: block;\r
            padding: 9px 14px;\r
            font-size: 13.5px;\r
            color: #1a2540;\r
            text-decoration: none;\r
            border-radius: 8px;\r
            transition: .12s;\r
            line-height: 1.4;\r
            font-weight: 450\r
        }\r
\r
        .drop a:hover {\r
            background: #f0f5ff;\r
            color: #1673FF\r
        }\r
\r
        .hdr-right {\r
            margin-left: auto;\r
            display: flex;\r
            align-items: center;\r
            gap: 20px;\r
            flex-shrink: 0\r
        }\r
\r
        .lang {\r
            color: rgba(255, 255, 255, 0.75);\r
            font-size: 13.5px;\r
            font-weight: 600;\r
            cursor: pointer;\r
            display: flex;\r
            align-items: center;\r
            gap: 4px;\r
            user-select: none\r
        }\r
\r
        .lang svg {\r
            width: 10px;\r
            height: 6px\r
        }\r
\r
        .btn-git {\r
            background: #1673FF;\r
            color: #fff;\r
            border: none;\r
            border-radius: 100px;\r
            padding: 11px 26px;\r
            font-size: 14px;\r
            font-weight: 600;\r
            cursor: pointer;\r
            font-family: inherit;\r
            text-decoration: none;\r
            transition: .2s;\r
            display: inline-block\r
        }\r
\r
        .btn-git:hover {\r
            background: #0f5fe0;\r
            transform: translateY(-1px)\r
        }\r
\r
        .hamburger {\r
            display: none;\r
            flex-direction: column;\r
            justify-content: center;\r
            align-items: center;\r
            gap: 5px;\r
            width: 40px;\r
            height: 40px;\r
            cursor: pointer;\r
            margin-left: auto;\r
            flex-shrink: 0;\r
            background: none;\r
            border: none;\r
            padding: 0\r
        }\r
\r
        .hamburger span {\r
            display: block;\r
            width: 24px;\r
            height: 2px;\r
            background: #fff;\r
            border-radius: 2px;\r
            transition: all .3s\r
        }\r
\r
        .hamburger.open span:nth-child(1) {\r
            transform: translateY(7px) rotate(45deg)\r
        }\r
\r
        .hamburger.open span:nth-child(2) {\r
            opacity: 0;\r
            transform: scaleX(0)\r
        }\r
\r
        .hamburger.open span:nth-child(3) {\r
            transform: translateY(-7px) rotate(-45deg)\r
        }\r
\r
        .mobile-menu {\r
            display: none;\r
            position: fixed;\r
            top: 68px;\r
            left: 0;\r
            right: 0;\r
            bottom: 0;\r
            background: rgba(4, 12, 28, 0.98);\r
            z-index: 999;\r
            overflow-y: auto;\r
            padding: 16px 0 40px;\r
            flex-direction: column\r
        }\r
\r
        .mobile-menu.open {\r
            display: flex\r
        }\r
\r
        .mob-item {\r
            border-bottom: 1px solid rgba(255, 255, 255, 0.07)\r
        }\r
\r
        .mob-link {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            padding: 16px 24px;\r
            font-size: 16px;\r
            font-weight: 500;\r
            color: rgba(255, 255, 255, 0.88);\r
            cursor: pointer;\r
            text-decoration: none\r
        }\r
\r
        .mob-link svg {\r
            width: 10px;\r
            height: 6px;\r
            transition: transform .25s;\r
            flex-shrink: 0\r
        }\r
\r
        .mob-link.active svg {\r
            transform: rotate(180deg)\r
        }\r
\r
        .mob-sub {\r
            display: none;\r
            background: rgba(255, 255, 255, 0.04);\r
            padding: 4px 0\r
        }\r
\r
        .mob-sub.open {\r
            display: block\r
        }\r
\r
        .mob-sub a {\r
            display: block;\r
            padding: 12px 40px;\r
            font-size: 14px;\r
            color: rgba(255, 255, 255, 0.6);\r
            text-decoration: none;\r
            transition: .15s\r
        }\r
\r
        .mob-sub a:hover {\r
            color: #fff\r
        }\r
\r
        .mob-cta {\r
            margin: 24px 24px 0;\r
            display: block;\r
            background: #1673FF;\r
            color: #fff;\r
            text-align: center;\r
            padding: 16px;\r
            border-radius: 100px;\r
            font-size: 16px;\r
            font-weight: 600;\r
            text-decoration: none\r
        }\r
\r
        /* HERO */\r
        .hero {\r
            min-height: 100vh;\r
            background: #040c1c;\r
            position: relative;\r
            overflow: hidden;\r
            display: flex;\r
            flex-direction: column;\r
            align-items: center;\r
            justify-content: center;\r
            padding-top: 68px\r
        }\r
\r
        .hero-bg-canvas {\r
            position: absolute;\r
            inset: 0;\r
            width: 100%;\r
            height: 100%;\r
            overflow: hidden\r
        }\r
\r
        .hero-glow {\r
            position: absolute;\r
            width: 700px;\r
            height: 700px;\r
            left: 50%;\r
            top: 50%;\r
            transform: translate(-50%, -58%);\r
            background: radial-gradient(circle, rgba(22, 115, 255, 0.22) 0%, transparent 70%);\r
            border-radius: 50%;\r
            pointer-events: none\r
        }\r
\r
        .hero-content {\r
            position: relative;\r
            z-index: 2;\r
            text-align: center;\r
            padding: 60px 40px 160px;\r
            width: 100%\r
        }\r
\r
        .hero h1 {\r
            font-size: clamp(32px, 5.5vw, 72px);\r
            font-weight: 900;\r
            color: #fff;\r
            line-height: 1.08;\r
            letter-spacing: -0.02em;\r
            text-transform: uppercase;\r
            max-width: 1020px;\r
            margin: 0 auto 48px;\r
            animation: fadeUp .8s cubic-bezier(.16, 1, .3, 1) both\r
        }\r
\r
        .hero-cta {\r
            display: inline-block;\r
            background: #1673FF;\r
            color: #fff;\r
            text-decoration: none;\r
            border-radius: 100px;\r
            padding: 18px 58px;\r
            font-size: 18px;\r
            font-weight: 600;\r
            box-shadow: 0 6px 30px rgba(22, 115, 255, 0.4);\r
            animation: fadeUp .8s .12s cubic-bezier(.16, 1, .3, 1) both;\r
            transition: .2s\r
        }\r
\r
        .hero-cta:hover {\r
            transform: translateY(-3px);\r
            box-shadow: 0 14px 40px rgba(22, 115, 255, 0.55)\r
        }\r
\r
        .hero-wave-wrap {\r
            position: absolute;\r
            bottom: 0;\r
            left: 0;\r
            right: 0;\r
            pointer-events: none\r
        }\r
\r
        @keyframes fadeUp {\r
            from {\r
                opacity: 0;\r
                transform: translateY(36px)\r
            }\r
\r
            to {\r
                opacity: 1;\r
                transform: translateY(0)\r
            }\r
        }\r
\r
        @keyframes floatY {\r
\r
            0%,\r
            100% {\r
                transform: translateY(0)\r
            }\r
\r
            50% {\r
                transform: translateY(-10px)\r
            }\r
        }\r
\r
        @keyframes floatY2 {\r
\r
            0%,\r
            100% {\r
                transform: translateY(0)\r
            }\r
\r
            50% {\r
                transform: translateY(-14px)\r
            }\r
        }\r
\r
        /* COMMON LAYOUT */\r
        .wrap {\r
            max-width: 1360px;\r
            margin: 0 auto;\r
            padding: 0 40px;\r
            width: 100%\r
        }\r
\r
        /* Each section: 88px top+bottom on desktop */\r
        .sec {\r
            padding: 88px 0\r
        }\r
\r
        /* Section heading row */\r
        .sec-hd {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            margin-bottom: 44px;\r
            gap: 16px;\r
            flex-wrap: wrap\r
        }\r
\r
        .sec-title {\r
            font-size: clamp(24px, 3vw, 38px);\r
            font-weight: 800;\r
            color: #0d1b2e;\r
            letter-spacing: -0.025em;\r
            line-height: 1.15\r
        }\r
\r
        /* Bottom button row (Browse More / About us) */\r
        .sec-btn-row {\r
            text-align: center;\r
            margin-top: 44px;\r
            margin-bottom: 0\r
        }\r
\r
        .btn-blue {\r
            display: inline-block;\r
            background: #1673FF;\r
            color: #fff;\r
            border: none;\r
            border-radius: 100px;\r
            padding: 12px 28px;\r
            font-size: 14px;\r
            font-weight: 600;\r
            cursor: pointer;\r
            text-decoration: none;\r
            transition: .18s;\r
            white-space: nowrap\r
        }\r
\r
        .btn-blue:hover {\r
            background: #0f5fe0\r
        }\r
\r
        /* WHY */\r
        .why-sec { position: relative; overflow: hidden; background: linear-gradient(180deg,#f8fbff 0%,#eef5ff 100%) }\r
        .why-sec::before,.why-sec::after { content:""; position:absolute; border-radius:50%; pointer-events:none; filter:blur(2px) }\r
        .why-sec::before { width:420px; height:420px; right:-180px; top:-190px; background:radial-gradient(circle,rgba(22,115,255,.16),transparent 68%) }\r
        .why-sec::after { width:320px; height:320px; left:-170px; bottom:-170px; background:radial-gradient(circle,rgba(0,207,255,.12),transparent 68%) }\r
        .why-panel { position:relative; z-index:1; border:1px solid rgba(22,115,255,.12); border-radius:32px; padding:clamp(28px,4vw,56px); background:rgba(255,255,255,.76); box-shadow:0 24px 80px rgba(23,63,120,.09); backdrop-filter:blur(14px) }\r
        .why-heading { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:end; gap:28px; margin-bottom:34px }\r
        .why-eyebrow { display:inline-flex; align-items:center; gap:9px; margin-bottom:14px; color:#1673ff; font-size:11px; font-weight:800; letter-spacing:.16em; text-transform:uppercase }\r
        .why-eyebrow::before { content:""; width:28px; height:2px; border-radius:2px; background:#1673ff }\r
        .why-heading h2 { max-width:720px; margin:0; font-size:clamp(30px,4.5vw,54px); line-height:1.06; letter-spacing:-.045em; color:#071a33 }\r
        .why-heading h2 span { color:#1673ff }\r
        .why-link { display:inline-flex; align-items:center; justify-content:center; min-height:46px; padding:0 22px; border-radius:999px; color:#fff; background:#1673ff; font-size:13px; font-weight:750; box-shadow:0 10px 28px rgba(22,115,255,.25); transition:.22s }\r
        .why-link:hover { background:#0d5ed8; transform:translateY(-2px); box-shadow:0 14px 34px rgba(22,115,255,.3) }\r
        .why-body { display:grid; grid-template-columns:1.15fr 1fr 1fr; gap:14px; max-width:none; margin:0 0 30px }\r
        .why-card { position:relative; min-height:245px; padding:26px; overflow:hidden; border:1px solid #e2eaf5; border-radius:22px; background:#fff; transition:transform .25s,box-shadow .25s,border-color .25s }\r
        .why-card:hover { transform:translateY(-5px); border-color:rgba(22,115,255,.32); box-shadow:0 18px 46px rgba(23,63,120,.12) }\r
        .why-card:first-child { color:#fff; border-color:transparent; background:linear-gradient(145deg,#071a33 0%,#0b2a52 68%,#0e4281 100%); box-shadow:0 18px 46px rgba(7,26,51,.18) }\r
        .why-card:first-child::after { content:""; position:absolute; width:180px; height:180px; right:-70px; bottom:-90px; border-radius:50%; border:34px solid rgba(22,115,255,.2) }\r
        .why-card-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:42px }\r
        .why-icon { width:46px; height:46px; display:grid; place-items:center; border-radius:14px; background:#eaf2ff; color:#1673ff }\r
        .why-card:first-child .why-icon { background:rgba(255,255,255,.1); color:#65a7ff }\r
        .why-icon svg { width:23px; height:23px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round }\r
        .why-number { color:#9aa9bc; font-size:11px; font-weight:800; letter-spacing:.12em }\r
        .why-card:first-child .why-number { color:rgba(255,255,255,.5) }\r
        .why-card h3 { position:relative; z-index:1; margin:0 0 12px; font-size:20px; letter-spacing:-.02em; color:#0d1b2e }\r
        .why-card:first-child h3 { color:#fff }\r
        .why-card p { position:relative; z-index:1; margin:0; font-size:14px; line-height:1.72; color:#65758b }\r
        .why-card:first-child p { color:rgba(255,255,255,.7) }\r
\r
        .cert-row {\r
            display: flex;\r
            gap: 12px;\r
            margin-bottom: 52px;\r
            flex-wrap: wrap;\r
            width: 100%\r
        }\r
\r
        .cert-card {\r
            display: flex;\r
            align-items: center;\r
            gap: 14px;\r
            border: 1.5px solid #e2eaf4;\r
            border-radius: 12px;\r
            padding: 14px 22px;\r
            cursor: pointer;\r
            transition: .2s\r
        }\r
\r
        .cert-card:hover {\r
            border-color: #1673FF;\r
            box-shadow: 0 4px 18px rgba(22, 115, 255, 0.1)\r
        }\r
\r
        .cert-txt {\r
            font-size: 14px;\r
            font-weight: 700;\r
            color: #0d1b2e\r
        }\r
\r
        .cert-sub {\r
            font-size: 11px;\r
            color: #8a9db5;\r
            margin-top: 2px\r
        }\r
\r
        .stars {\r
            color: #e02020;\r
            font-size: 14px;\r
            letter-spacing: 1px\r
        }\r
\r
        .why-sec .stats-grid {\r
            display: grid;\r
            grid-template-columns: repeat(4, 1fr);\r
            gap: 10px;\r
            width: 100%;\r
            padding:10px;\r
            border-radius:22px;\r
            background:#edf4fe\r
        }\r
\r
        .why-sec .stat {\r
            min-width:0;\r
            padding:20px 18px !important;\r
            border:0 !important;\r
            border-radius:16px;\r
            background:#fff\r
        }\r
\r
        .why-sec .stat-num {\r
            font-size: clamp(44px, 5.5vw, 60px);\r
            font-weight: 900;\r
            color: #1673FF;\r
            line-height: 1;\r
            letter-spacing: -0.04em\r
        }\r
\r
        .why-sec .stat-lbl {\r
            font-size: 14px;\r
            color: #5f7089;\r
            margin-top: 6px;\r
            line-height: 1.45\r
        }\r
\r
        /* CLIENTS */\r
\r
        .clients-sec { background: linear-gradient(180deg,#edf3fc 0%,#f6f9ff 100%) }\r
        .clients-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 12px; width: 100% }\r
        .cl-card { background: #fff; border: 1.5px solid rgba(22,115,255,0.09); border-radius: 16px; display: flex; align-items: center; justify-content: center; padding: 28px 16px; min-height: 90px; transition: .22s; cursor: pointer; overflow: hidden }\r
        .cl-card:hover { border-color: rgba(22,115,255,0.3); box-shadow: 0 6px 24px rgba(22,115,255,0.1); transform: translateY(-2px) }\r
        .cl-card svg { max-width: 130px; max-height: 46px; width: 100%; height: auto }\r
\r
        /* WHAT WE DO */\r
        .wwd-grid {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            grid-auto-flow: dense;\r
            gap: 14px\r
        }\r
\r
        .wwd-card {\r
            border-radius: 20px;\r
            overflow: hidden;\r
            position: relative;\r
            text-decoration: none;\r
            display: block;\r
            cursor: pointer;\r
            transition: .22s\r
        }\r
\r
        .wwd-card:hover {\r
            transform: translateY(-4px)\r
        }\r
\r
        .wwd-card.full,\r
        .wwd-card.wwd-auto-full {\r
            grid-column: 1/-1\r
        }\r
\r
        .wwd-inner {\r
            position: relative;\r
            overflow: hidden;\r
            min-height: 220px;\r
            display: flex;\r
            flex-direction: column;\r
            justify-content: flex-end;\r
            padding: 32px 36px 30px\r
        }\r
\r
        .wwd-card.full .wwd-inner,\r
        .wwd-card.wwd-auto-full .wwd-inner {\r
            min-height: 280px\r
        }\r
\r
        .wwd-ttl {\r
            font-size: clamp(18px, 2vw, 26px);\r
            font-weight: 700;\r
            color: #fff;\r
            margin-bottom: 22px;\r
            line-height: 1.25;\r
            position: relative;\r
            z-index: 2;\r
            max-width: 380px\r
        }\r
\r
        .lm-btn {\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 10px;\r
            position: relative;\r
            z-index: 2\r
        }\r
\r
        .lm-btn span {\r
            font-size: 14px;\r
            font-weight: 500;\r
            color: rgba(255, 255, 255, 0.92)\r
        }\r
\r
        .lm-circle {\r
            width: 34px;\r
            height: 34px;\r
            border-radius: 50%;\r
            border: 1.5px solid rgba(255, 255, 255, 0.55);\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            flex-shrink: 0\r
        }\r
\r
        .lm-circle svg {\r
            width: 12px;\r
            height: 12px\r
        }\r
\r
        .iot-bg {\r
            background: linear-gradient(120deg, #3da6d8 0%, #6bc7ea 100%)\r
        }\r
\r
        .full-bg {\r
            background: linear-gradient(120deg, #3db8b8 0%, #5acccc 100%)\r
        }\r
\r
        .ecom-bg {\r
            background: linear-gradient(120deg, #c8a26a 0%, #d9b878 100%)\r
        }\r
\r
        .bc-bg {\r
            background: linear-gradient(120deg, #3c4e82 0%, #5470ac 100%)\r
        }\r
\r
        .ai-bg {\r
            background: linear-gradient(120deg, #2dba8e 0%, #4dd4a6 100%)\r
        }\r
\r
        .fintech-bg {\r
            background: linear-gradient(120deg, #3eacba 0%, #5dc8d4 100%)\r
        }\r
\r
        .wwd-illustration {\r
            position: absolute;\r
            right: 0;\r
            bottom: 0;\r
            top: 0;\r
            display: flex;\r
            align-items: center;\r
            justify-content: flex-end;\r
            pointer-events: none;\r
            z-index: 1;\r
            overflow: hidden;\r
            max-width: 60%\r
        }\r
\r
        .wwd-illustration svg {\r
            height: 100%;\r
            width: auto;\r
            max-width: 100%;\r
            display: block\r
        }\r
\r
        /* SERVICES */\r
        .svc-sec {\r
            background: #f7f9fc\r
        }\r
\r
        .svc-layout {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            gap: 48px;\r
            align-items: start\r
        }\r
\r
        .svc-img {\r
            border-radius: 20px;\r
            overflow: hidden;\r
            background: #dce8f5;\r
            position: sticky;\r
            top: 80px;\r
            min-height: 440px;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center\r
        }\r
\r
        .svc-list {\r
            display: flex;\r
            flex-direction: column;\r
            gap: 6px\r
        }\r
\r
        .svc-item {\r
            background: #fff;\r
            border-radius: 14px;\r
            border: 1.5px solid #edf2f7;\r
            overflow: hidden;\r
            cursor: pointer;\r
            transition: .18s\r
        }\r
\r
        .svc-item.open {\r
            border-color: #1673FF;\r
            background: #eef5ff\r
        }\r
\r
        .svc-head {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            padding: 16px 20px;\r
            gap: 12px\r
        }\r
\r
        .svc-left {\r
            display: flex;\r
            align-items: center;\r
            gap: 12px\r
        }\r
\r
        .svc-ico {\r
            width: 36px;\r
            height: 36px;\r
            border-radius: 9px;\r
            background: #eef5ff;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            flex-shrink: 0\r
        }\r
\r
        .svc-item.open .svc-ico {\r
            background: #d5e7ff\r
        }\r
\r
        .svc-name {\r
            font-size: 14.5px;\r
            font-weight: 600;\r
            color: #0d1b2e\r
        }\r
\r
        .svc-tog {\r
            width: 24px;\r
            height: 24px;\r
            border-radius: 50%;\r
            background: #edf2f7;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            flex-shrink: 0;\r
            font-size: 18px;\r
            line-height: 1;\r
            color: #6b7e98;\r
            font-weight: 300;\r
            transition: .15s\r
        }\r
\r
        .svc-item.open .svc-tog {\r
            background: #1673FF;\r
            color: #fff\r
        }\r
\r
        .svc-body {\r
            display: none;\r
            padding: 0 20px 18px 68px;\r
            font-size: 13.5px;\r
            color: #4b5e78;\r
            line-height: 1.75\r
        }\r
\r
        .svc-item.open .svc-body {\r
            display: block\r
        }\r
\r
        .svc-body ul {\r
            padding-left: 16px;\r
            margin: 8px 0 12px\r
        }\r
\r
        .svc-body li {\r
            margin-bottom: 3px\r
        }\r
\r
        .svc-link {\r
            color: #1673FF;\r
            font-size: 13px;\r
            font-weight: 600;\r
            text-decoration: none;\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 6px;\r
            margin-top: 6px\r
        }\r
\r
        .svc-link:hover {\r
            text-decoration: underline\r
        }\r
\r
        .arr-sm {\r
            width: 6px;\r
            height: 6px;\r
            border-right: 2px solid currentColor;\r
            border-bottom: 2px solid currentColor;\r
            transform: rotate(-45deg);\r
            display: inline-block\r
        }\r
\r
        /* CASES */\r
        .cases-grid {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            gap: 24px\r
        }\r
\r
        .case-card {\r
            border: 1.5px solid #e4eaf3;\r
            border-radius: 18px;\r
            overflow: hidden;\r
            text-decoration: none;\r
            display: block;\r
            transition: .22s\r
        }\r
\r
        .case-card:hover {\r
            transform: translateY(-4px);\r
            box-shadow: 0 16px 50px rgba(0, 0, 0, 0.09)\r
        }\r
\r
        .case-img {\r
            height: 300px;\r
            overflow: hidden;\r
            background: #12203a;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center\r
        }\r
\r
        .case-body {\r
            padding: 28px 28px 24px\r
        }\r
\r
        .case-ttl {\r
            font-size: 17.5px;\r
            font-weight: 700;\r
            color: #0d1b2e;\r
            margin-bottom: 10px;\r
            line-height: 1.35\r
        }\r
\r
        .case-desc {\r
            font-size: 13.5px;\r
            color: #5f7089;\r
            line-height: 1.65;\r
            margin-bottom: 18px\r
        }\r
\r
        .case-link {\r
            color: #1673FF;\r
            font-size: 13px;\r
            font-weight: 600;\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 6px\r
        }\r
\r
        /* CTA */\r
        .cta-sec {\r
            background: linear-gradient(100deg, #1673FF 0%, #0046c4 100%);\r
            position: relative;\r
            overflow: hidden\r
        }\r
\r
        .cta-inner {\r
            max-width: 1360px;\r
            margin: 0 auto;\r
            padding: 68px 40px;\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            gap: 32px;\r
            flex-wrap: wrap;\r
            position: relative;\r
            z-index: 1\r
        }\r
\r
        .cta-txt {\r
            font-size: clamp(20px, 2.8vw, 33px);\r
            font-weight: 700;\r
            color: #fff;\r
            max-width: 680px;\r
            line-height: 1.32\r
        }\r
\r
        .btn-outline-w {\r
            border: 2px solid rgba(255, 255, 255, 0.65);\r
            color: #fff;\r
            background: transparent;\r
            border-radius: 100px;\r
            padding: 14px 38px;\r
            font-size: 15px;\r
            font-weight: 600;\r
            cursor: pointer;\r
            text-decoration: none;\r
            transition: .2s;\r
            display: inline-block;\r
            white-space: nowrap\r
        }\r
\r
        .btn-outline-w:hover {\r
            background: #fff;\r
            color: #1673FF;\r
            border-color: #fff\r
        }\r
\r
        /* MAP */\r
        .map-sec {\r
            background: #fff\r
        }\r
\r
        .marks__geo {\r
            position: relative;\r
            width: 100%;\r
            margin: 24px 0 0;\r
            overflow: hidden\r
        }\r
\r
        .marks__geo>img {\r
            width: 100%;\r
            height: auto;\r
            display: block;\r
            border-radius: 16px\r
        }\r
\r
        .geo-dot {\r
            position: absolute;\r
            transform: translate(-50%, -50%);\r
            cursor: pointer\r
        }\r
\r
        .geo-dot::before {\r
            content: '';\r
            display: block;\r
            width: 9px;\r
            height: 9px;\r
            border-radius: 50%;\r
            background: #1673FF;\r
            box-shadow: 0 0 0 3px rgba(22, 115, 255, 0.22);\r
            transition: box-shadow .2s\r
        }\r
\r
        .geo-dot:hover::before {\r
            box-shadow: 0 0 0 6px rgba(22, 115, 255, 0.3)\r
        }\r
\r
        .geo-dot.main-dot::before {\r
            background: #e53e3e;\r
            box-shadow: 0 0 0 4px rgba(229, 62, 62, 0.25)\r
        }\r
\r
        .geo-label {\r
            position: absolute;\r
            font-size: 10.5px;\r
            font-weight: 600;\r
            color: #022542;\r
            white-space: nowrap;\r
            font-family: 'Inter', sans-serif;\r
            background: rgba(255, 255, 255, 0.95);\r
            padding: 3px 7px;\r
            border-radius: 4px;\r
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\r
            pointer-events: none;\r
            line-height: 1.4\r
        }\r
\r
        .geo-dot.lb .geo-label {\r
            top: 14px;\r
            left: 50%;\r
            transform: translateX(-50%)\r
        }\r
\r
        .geo-dot.lt .geo-label {\r
            bottom: 14px;\r
            left: 50%;\r
            transform: translateX(-50%)\r
        }\r
\r
        .geo-dot.ll .geo-label {\r
            right: 14px;\r
            top: 50%;\r
            transform: translateY(-50%)\r
        }\r
\r
        .geo-dot.lr .geo-label {\r
            left: 14px;\r
            top: 50%;\r
            transform: translateY(-50%)\r
        }\r
\r
        /* FEEDBACK - desktop: centered */\r
        .fb-sec {\r
            background: linear-gradient(180deg, #eaf0fb 0%, #f4f8ff 100%)\r
        }\r
\r
        .fb-wrap {\r
            max-width: 820px;\r
            margin-left: auto;\r
            margin-right: auto;\r
            width: 100%\r
        }\r
\r
        .fb-card {\r
            background: #fff;\r
            border-radius: 22px;\r
            padding: 40px 44px;\r
            box-shadow: 0 4px 28px rgba(22, 115, 255, 0.08);\r
            border: 1.5px solid rgba(22, 115, 255, 0.07)\r
        }\r
\r
        .fb-hd {\r
            display: flex;\r
            align-items: center;\r
            gap: 18px;\r
            margin-bottom: 20px\r
        }\r
\r
        .fb-init {\r
            width: 58px;\r
            height: 58px;\r
            border-radius: 50%;\r
            background: #1673FF;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            color: #fff;\r
            font-weight: 700;\r
            font-size: 18px;\r
            flex-shrink: 0\r
        }\r
\r
        .fb-name {\r
            font-size: 16px;\r
            font-weight: 700;\r
            color: #0d1b2e\r
        }\r
\r
        .fb-role {\r
            font-size: 13px;\r
            color: #7a8fa8;\r
            margin-top: 3px\r
        }\r
\r
        .fb-txt {\r
            font-size: 15.5px;\r
            line-height: 1.8;\r
            color: #2e4060;\r
            margin-bottom: 20px\r
        }\r
\r
        .fb-cl-link {\r
            color: #1673FF;\r
            font-size: 13.5px;\r
            font-weight: 600;\r
            text-decoration: none;\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 7px\r
        }\r
\r
        .fb-controls {\r
            display: flex;\r
            align-items: center;\r
            gap: 14px;\r
            margin-top: 26px\r
        }\r
\r
        .fb-arrow {\r
            width: 46px;\r
            height: 46px;\r
            border-radius: 50%;\r
            border: 1.5px solid #d4dfe9;\r
            background: #fff;\r
            cursor: pointer;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            color: #3a4f6a;\r
            font-size: 16px;\r
            transition: .18s;\r
            flex-shrink: 0\r
        }\r
\r
        .fb-arrow:hover {\r
            background: #1673FF;\r
            color: #fff;\r
            border-color: #1673FF\r
        }\r
\r
        .fb-dots {\r
            display: flex;\r
            gap: 7px;\r
            flex: 1;\r
            justify-content: center\r
        }\r
\r
        .fb-dot {\r
            width: 8px;\r
            height: 8px;\r
            border-radius: 50%;\r
            background: #ccd7e8;\r
            cursor: pointer;\r
            transition: .2s\r
        }\r
\r
        .fb-dot.on {\r
            background: #1673FF;\r
            width: 24px;\r
            border-radius: 4px\r
        }\r
\r
        .fb-prog {\r
            flex: 1;\r
            height: 2px;\r
            background: #dce8f5;\r
            border-radius: 2px;\r
            overflow: hidden\r
        }\r
\r
        .fb-prog-fill {\r
            height: 100%;\r
            background: #1673FF;\r
            border-radius: 2px;\r
            transition: width .45s ease\r
        }\r
\r
        /* INSIGHTS */\r
        .ins-grid {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            gap: 22px\r
        }\r
\r
        .ins-card {\r
            border: 1.5px solid #e2eaf4;\r
            border-radius: 18px;\r
            padding: 32px;\r
            transition: .2s;\r
            cursor: pointer\r
        }\r
\r
        .ins-card:hover {\r
            box-shadow: 0 8px 36px rgba(0, 0, 0, 0.07);\r
            border-color: rgba(22, 115, 255, 0.2)\r
        }\r
\r
        .ins-img{width:calc(100% + 64px);height:220px;object-fit:cover;display:block;margin:-32px -32px 26px;border-radius:16px 16px 0 0}.ins-meta{font-size:12px;font-weight:700;color:#1673ff;margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em}.ins-author{font-size:12px;color:#7c8da5;margin-top:-12px;margin-bottom:18px}\r
\r
        .ins-ttl {\r
            font-size: 17px;\r
            font-weight: 700;\r
            color: #0d1b2e;\r
            line-height: 1.4;\r
            margin-bottom: 12px\r
        }\r
\r
        .ins-desc {\r
            font-size: 14px;\r
            color: #5f7089;\r
            line-height: 1.65;\r
            margin-bottom: 22px\r
        }\r
\r
        .ins-ft {\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            flex-wrap: wrap;\r
            gap: 8px\r
        }\r
\r
        .ins-date {\r
            font-size: 13px;\r
            color: #9aacc0\r
        }\r
\r
        .ins-rating {\r
            display: flex;\r
            align-items: center;\r
            gap: 5px;\r
            font-size: 12.5px;\r
            color: #9aacc0\r
        }\r
\r
        .star-ic {\r
            color: #f59e0b;\r
            font-size: 13px\r
        }\r
\r
        .ins-lnk {\r
            color: #1673FF;\r
            font-size: 13px;\r
            font-weight: 600;\r
            text-decoration: none;\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 5px;\r
            margin-top: 14px\r
        }\r
\r
        /* FOOTER */\r
        footer {\r
            background: #06101f;\r
            color: #fff;\r
            overflow: hidden\r
        }\r
\r
        .ft-top {\r
            max-width: 1360px;\r
            margin: 0 auto;\r
            padding: 80px 40px 60px;\r
            display: grid;\r
            grid-template-columns: 1.15fr 1fr;\r
            gap: 64px\r
        }\r
\r
        .contact-box {\r
            background: linear-gradient(130deg, #1673FF, #0044c0);\r
            border-radius: 22px;\r
            padding: 44px 40px\r
        }\r
\r
        .contact-box h3 {\r
            font-size: 27px;\r
            font-weight: 800;\r
            color: #fff;\r
            margin-bottom: 34px\r
        }\r
\r
        .f-row {\r
            display: grid;\r
            grid-template-columns: 1fr 1fr;\r
            gap: 22px;\r
            margin-bottom: 2px\r
        }\r
\r
        .f-inp {\r
            width: 100%;\r
            background: transparent;\r
            border: none;\r
            border-bottom: 1px solid rgba(255, 255, 255, 0.32);\r
            color: #fff;\r
            font-size: 14px;\r
            padding: 11px 0;\r
            outline: none;\r
            font-family: inherit;\r
            transition: .2s;\r
            display: block;\r
            margin-bottom: 6px\r
        }\r
\r
        .f-inp::placeholder {\r
            color: rgba(255, 255, 255, 0.5)\r
        }\r
\r
        .f-inp:focus {\r
            border-bottom-color: rgba(255, 255, 255, 0.65)\r
        }\r
\r
        .f-attach {\r
            display: flex;\r
            align-items: center;\r
            gap: 9px;\r
            color: rgba(255, 255, 255, 0.6);\r
            font-size: 13px;\r
            cursor: pointer;\r
            margin: 18px 0 6px\r
        }\r
\r
        .f-chk {\r
            display: flex;\r
            align-items: flex-start;\r
            gap: 10px;\r
            font-size: 12px;\r
            color: rgba(255, 255, 255, 0.55);\r
            line-height: 1.5;\r
            margin: 14px 0 22px\r
        }\r
\r
        .f-chk input {\r
            margin-top: 2px;\r
            flex-shrink: 0;\r
            accent-color: #fff\r
        }\r
\r
        .f-chk a {\r
            color: rgba(255, 255, 255, 0.78);\r
            text-decoration: underline\r
        }\r
\r
        .f-sub {\r
            width: 100%;\r
            background: #fff;\r
            color: #1673FF;\r
            border: none;\r
            border-radius: 100px;\r
            padding: 16px;\r
            font-size: 15px;\r
            font-weight: 700;\r
            cursor: pointer;\r
            font-family: inherit;\r
            transition: .18s\r
        }\r
\r
        .f-sub:hover {\r
            background: #e8f0ff\r
        }\r
\r
        .ft-info {\r
            padding-top: 4px\r
        }\r
\r
        .ft-logo {\r
            display: flex;\r
            align-items: center;\r
            gap: 10px;\r
            margin-bottom: 38px\r
        }\r
\r
        .ft-logo-txt {\r
            font-size: 22px;\r
            font-weight: 700;\r
            color: #fff\r
        }\r
\r
        .ft-logo-txt span {\r
            color: #1673FF;\r
            font-weight: 800\r
        }\r
\r
        .ft-lbl {\r
            font-size: 10.5px;\r
            font-weight: 700;\r
            color: rgba(255, 255, 255, 0.35);\r
            text-transform: uppercase;\r
            letter-spacing: .12em;\r
            margin-bottom: 10px\r
        }\r
\r
        .ft-addr {\r
            font-size: 14px;\r
            color: rgba(255, 255, 255, 0.6);\r
            line-height: 1.9;\r
            font-style: normal\r
        }\r
\r
        .ft-addr b {\r
            display: block;\r
            margin-top: 16px\r
        }\r
\r
        .ft-iso {\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 10px;\r
            border: 1px solid rgba(255, 255, 255, 0.12);\r
            border-radius: 10px;\r
            padding: 10px 18px;\r
            color: #fff;\r
            font-size: 13px;\r
            font-weight: 700;\r
            margin-top: 28px\r
        }\r
\r
        .ft-hr {\r
            border: none;\r
            border-top: 1px solid rgba(255, 255, 255, 0.07);\r
            margin: 28px 0\r
        }\r
\r
        .ft-socials {\r
            display: flex;\r
            gap: 10px\r
        }\r
\r
        .s-ic {\r
            width: 36px;\r
            height: 36px;\r
            border-radius: 50%;\r
            border: 1px solid rgba(255, 255, 255, 0.16);\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            color: rgba(255, 255, 255, 0.5);\r
            transition: .18s;\r
            text-decoration: none;\r
            font-size: 10px;\r
            font-weight: 700\r
        }\r
\r
        .s-ic:hover {\r
            border-color: #1673FF;\r
            color: #1673FF\r
        }\r
\r
        .ft-nav {\r
            /* border-top: 2px solid rgba(255,255,255,0.06); */\r
            margin: 10px;\r
            gap: 10px;\r
            justify-content: center;\r
            align-items: start;\r
            display: flex\r
        }\r
\r
        .ft-nav-inner {\r
            max-width: 1360px;\r
            width: 100%;\r
            margin: auto;\r
            padding: 52px 40px;\r
            display: grid;\r
            grid-template-columns: repeat(4, 1fr);\r
            gap: 28px;\r
            margin: 5px 5px 0px 5px;\r
            border-radius: 15px;\r
            background-color: rgba(255, 255, 255, 0.05);\r
        }\r
\r
        .ft-col-ttl {\r
            font-size: 10.5px;\r
            font-weight: 700;\r
            color: rgba(255, 255, 255, 0.32);\r
            text-transform: uppercase;\r
            letter-spacing: .12em;\r
            margin-bottom: 14px;\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            cursor: default;\r
            user-select: none\r
        }\r
\r
        .ft-col-ttl svg {\r
            display: none;\r
            width: 10px;\r
            height: 6px;\r
            transition: transform .25s;\r
            flex-shrink: 0\r
        }\r
\r
        .ft-col-ttl.ft-open svg {\r
            transform: rotate(180deg)\r
        }\r
\r
        .ft-col-links {\r
            display: block\r
        }\r
\r
        .ft-col-links a {\r
            display: block;\r
            color: rgba(255, 255, 255, 0.58);\r
            font-size: 13px;\r
            text-decoration: none;\r
            padding: 3px 0;\r
            line-height: 1.65;\r
            transition: .13s\r
        }\r
\r
        .ft-col-links a:hover {\r
            color: #fff\r
        }\r
\r
        /* .ft-bar { border-top: 1px solid rgba(255,255,255,0.06) } */\r
        .ft-bar-inner {\r
            max-width: 1360px;\r
            margin: 0 auto;\r
            padding: 20px 40px;\r
            display: flex;\r
            align-items: center;\r
            justify-content: space-between;\r
            flex-wrap: wrap;\r
            gap: 12px\r
        }\r
\r
        .ft-copy {\r
            font-size: 12.5px;\r
            color: rgba(255, 255, 255, 0.3)\r
        }\r
\r
        .ft-links {\r
            display: flex;\r
            gap: 20px;\r
            flex-wrap: wrap\r
        }\r
\r
        .ft-links a {\r
            font-size: 12px;\r
            color: rgba(255, 255, 255, 0.35);\r
            text-decoration: none;\r
            transition: .13s\r
        }\r
\r
        .ft-links a:hover {\r
            color: rgba(255, 255, 255, 0.7)\r
        }\r
\r
        .reveal {\r
            opacity: 0;\r
            transform: translateY(24px);\r
            transition: opacity .55s ease, transform .55s ease\r
        }\r
\r
        .reveal.vis {\r
            opacity: 1;\r
            transform: translateY(0)\r
        }\r
\r
        /* ================================================\r
            TABLET <= 900px\r
        ================================================ */\r
        @media (max-width: 900px) {\r
            nav {\r
                display: none\r
            }\r
\r
            .hdr-right .lang,\r
            .hdr-right .btn-git {\r
                display: none\r
            }\r
\r
            .hamburger {\r
                display: flex\r
            }\r
\r
            .hdr-inner {\r
                padding: 0 24px\r
            }\r
\r
            .wrap {\r
                padding: 0 24px\r
            }\r
\r
            .sec {\r
                padding: 72px 0\r
            }\r
\r
            .wwd-grid {\r
                grid-template-columns: 1fr 1fr\r
            }\r
\r
            .wwd-card.full {\r
                grid-column: 1/-1\r
            }\r
\r
            .cases-grid,\r
            .ins-grid {\r
                grid-template-columns: 1fr 1fr\r
            }\r
\r
            .svc-layout {\r
                grid-template-columns: 1fr\r
            }\r
\r
            .svc-img {\r
                display: none\r
            }\r
\r
            .stats-grid {\r
                grid-template-columns: repeat(2, 1fr)\r
            }\r
\r
            .clients-grid {\r
                grid-template-columns: repeat(3, 1fr)\r
            }\r
\r
            .ft-top {\r
                grid-template-columns: 1fr;\r
                padding: 52px 24px 40px;\r
                gap: 40px\r
            }\r
\r
            .f-row {\r
                grid-template-columns: 1fr 1fr\r
            }\r
\r
            .ft-nav-inner {\r
                grid-template-columns: 1fr 1fr;\r
                padding: 40px 24px;\r
                gap: 20px\r
            }\r
\r
            .ft-bar-inner {\r
                padding: 16px 24px;\r
                flex-direction: column;\r
                align-items: flex-start;\r
                gap: 10px\r
            }\r
\r
            .cta-inner {\r
                padding: 52px 24px;\r
                flex-direction: column;\r
                text-align: center;\r
                gap: 24px\r
            }\r
\r
            .hero-wave-wrap svg {\r
                height: 200px\r
            }\r
        }\r
\r
        /* ================================================\r
           MOBILE <= 600px\r
           Rule: 20px padding ALL sides — nothing touches edge\r
           Sections: 64px top+bottom — headings never chipke\r
           Buttons: proper gap from next section\r
        ================================================ */\r
        @media (max-width: 600px) {\r
\r
            html,\r
            body {\r
                overflow-x: hidden\r
            }\r
\r
            /* ---- Safe zone: 20px from every screen edge ---- */\r
            .wrap {\r
                padding-left: 20px !important;\r
                padding-right: 20px !important\r
            }\r
\r
            .hdr-inner {\r
                padding: 0 20px\r
            }\r
\r
            .cta-inner {\r
                padding: 48px 20px !important;\r
                flex-direction: column;\r
                text-align: center;\r
                gap: 20px\r
            }\r
\r
            .ft-top {\r
                padding: 44px 20px 36px !important\r
            }\r
\r
            .ft-bar-inner {\r
                padding: 16px 20px !important;\r
                flex-direction: column;\r
                align-items: flex-start;\r
                gap: 10px\r
            }\r
\r
            /* ---- Section spacing: 64px top & bottom ----\r
               This is what stops headings from chipking\r
               to the previous section's content           */\r
            .sec {\r
                padding: 64px 0\r
            }\r
\r
            /* ---- Section heading: 28px gap below title ---- */\r
            .sec-hd {\r
                margin-bottom: 28px;\r
                gap: 10px\r
            }\r
\r
            .sec-title {\r
                font-size: clamp(20px, 5.8vw, 28px);\r
                line-height: 1.2\r
            }\r
\r
            /* ---- Buttons: 36px above, 8px below so they\r
               breathe from the section that comes after   ---- */\r
            .sec-btn-row {\r
                margin-top: 36px;\r
                margin-bottom: 8px\r
            }\r
\r
            .btn-blue {\r
                padding: 12px 26px;\r
                font-size: 14px\r
            }\r
\r
            .sec-hd .btn-blue {\r
                padding: 10px 20px;\r
                font-size: 13px\r
            }\r
\r
            /* ---- HERO ----\r
               Use dvh so mobile browser chrome (address bar)\r
               doesn't leave a blank gap or force extra scroll.\r
               Wave graphic + glow are scaled down so they never\r
               crowd the heading/button on narrow screens.      */\r
            .hero {\r
                min-height: 100vh;\r
                min-height: 100dvh\r
            }\r
\r
            .hero-glow {\r
                width: 420px;\r
                height: 420px;\r
                transform: translate(-50%, -62%)\r
            }\r
\r
            .hero-content {\r
                padding: 48px 20px 120px\r
            }\r
\r
            .hero h1 {\r
                font-size: clamp(22px, 6.8vw, 34px);\r
                line-height: 1.15;\r
                margin-bottom: 32px;\r
            }\r
\r
            .hero-cta {\r
                padding: 14px 36px;\r
                font-size: 15px\r
            }\r
\r
            .hero-wave-wrap svg {\r
                height: 150px !important\r
            }\r
\r
            /* ---- Why ---- */\r
            .why-body p {\r
                font-size: 14px\r
            }\r
\r
            .cert-row {\r
                gap: 10px\r
            }\r
\r
            .cert-card {\r
                padding: 12px 14px;\r
                gap: 10px\r
            }\r
\r
            .stats-grid {\r
                grid-template-columns: 1fr 1fr;\r
                row-gap: 32px\r
            }\r
\r
            .stat:nth-child(odd) {\r
                border-left: none;\r
                padding-left: 0\r
            }\r
\r
            .stat:nth-child(even) {\r
                border-left: 2px solid #e2eaf4;\r
                padding-left: 20px\r
            }\r
\r
            .stat-num {\r
                font-size: clamp(32px, 9vw, 48px)\r
            }\r
\r
            .stat-lbl {\r
                font-size: 13px\r
            }\r
\r
            /* ---- Clients ---- */\r
            .clients-grid {\r
                grid-template-columns: repeat(2, 1fr);\r
                gap: 10px\r
            }\r
\r
            .cl-card {\r
                padding: 16px 12px;\r
                min-height: 70px\r
            }\r
\r
            /* ---- What we do ---- */\r
            .wwd-grid {\r
                grid-template-columns: 1fr\r
            }\r
\r
            .wwd-card.full,\r
            .wwd-card.wwd-auto-full {\r
                grid-column: auto\r
            }\r
\r
            .wwd-inner {\r
                min-height: 175px;\r
                padding: 20px 18px 18px\r
            }\r
\r
            .wwd-card.full .wwd-inner,\r
            .wwd-card.wwd-auto-full .wwd-inner {\r
                min-height: 200px\r
            }\r
\r
            .wwd-ttl {\r
                font-size: clamp(14px, 4.2vw, 19px);\r
                max-width: 58%;\r
                margin-bottom: 14px\r
            }\r
\r
            .wwd-illustration {\r
                max-width: 48%;\r
                opacity: 0.88\r
            }\r
\r
            .lm-btn span {\r
                font-size: 12px\r
            }\r
\r
            .lm-circle {\r
                width: 28px;\r
                height: 28px\r
            }\r
\r
            /* ---- Services ---- */\r
            .svc-body {\r
                padding: 0 16px 16px\r
            }\r
\r
            .svc-name {\r
                font-size: 13.5px\r
            }\r
\r
            /* ---- Cases ---- */\r
            .cases-grid {\r
                grid-template-columns: 1fr\r
            }\r
\r
            .case-img {\r
                height: 200px\r
            }\r
\r
            .case-body {\r
                padding: 18px 16px\r
            }\r
\r
            .case-ttl {\r
                font-size: 15px\r
            }\r
\r
            .case-desc {\r
                font-size: 13px\r
            }\r
\r
            /* ---- CTA ---- */\r
            .cta-txt {\r
                font-size: clamp(17px, 5vw, 24px)\r
            }\r
\r
            .btn-outline-w {\r
                padding: 12px 28px;\r
                font-size: 14px\r
            }\r
\r
            /* ---- Feedback ---- */\r
            .fb-wrap {\r
                max-width: 100%\r
            }\r
\r
            .fb-card {\r
                padding: 22px 18px\r
            }\r
\r
            .fb-txt {\r
                font-size: 14px;\r
                line-height: 1.7\r
            }\r
\r
            .fb-init {\r
                width: 46px;\r
                height: 46px;\r
                font-size: 15px\r
            }\r
\r
            .fb-name {\r
                font-size: 14px\r
            }\r
\r
            .fb-role {\r
                font-size: 12px\r
            }\r
\r
            .fb-dots {\r
                display: none\r
            }\r
\r
            .fb-arrow {\r
                width: 40px;\r
                height: 40px;\r
                font-size: 14px\r
            }\r
\r
            /* ---- Insights ---- */\r
            .ins-grid {\r
                grid-template-columns: 1fr\r
            }\r
\r
            .ins-card {\r
                padding: 20px 16px\r
            }\r
\r
            .ins-ttl {\r
                font-size: 15px\r
            }\r
\r
            .ins-desc {\r
                font-size: 13px\r
            }\r
\r
            /* ---- Map ---- */\r
            .geo-label {\r
                display: none\r
            }\r
\r
            .geo-dot::before {\r
                width: 6px;\r
                height: 6px;\r
                box-shadow: 0 0 0 2px rgba(22, 115, 255, 0.25)\r
            }\r
\r
            /* ---- Footer ---- */\r
            .contact-box {\r
                padding: 24px 18px\r
            }\r
\r
            .contact-box h3 {\r
                font-size: 20px;\r
                margin-bottom: 22px\r
            }\r
\r
            .f-row {\r
                grid-template-columns: 1fr\r
            }\r
\r
            .ft-addr {\r
                font-size: 13px\r
            }\r
\r
            .ft-links {\r
                gap: 10px\r
            }\r
\r
            .ft-links a {\r
                font-size: 11px\r
            }\r
\r
            /* Footer nav accordion */\r
            .ft-nav-inner {\r
                grid-template-columns: 1fr;\r
                padding: 0 !important;\r
                gap: 0\r
            }\r
\r
            .ft-col {\r
                border-bottom: 1px solid rgba(255, 255, 255, 0.07)\r
            }\r
\r
            .ft-col-ttl {\r
                cursor: pointer;\r
                padding: 15px 20px;\r
                margin-bottom: 0;\r
                font-size: 11px;\r
                letter-spacing: .1em\r
            }\r
\r
            .ft-col-ttl svg {\r
                display: block\r
            }\r
\r
            .ft-col-links {\r
                display: none;\r
                padding: 4px 20px 14px\r
            }\r
\r
            .ft-col-links.ft-open {\r
                display: block\r
            }\r
\r
            .ft-col-links a {\r
                font-size: 13px;\r
                padding: 8px 0;\r
                border-bottom: 1px solid rgba(255, 255, 255, 0.04)\r
            }\r
\r
            .ft-col-links a:last-child {\r
                border-bottom: none\r
            }\r
        }\r
\r
        /* project section */\r
        /* PROJECTS SECTION */\r
        .projects-sec {\r
            background: #fff;\r
            position: relative;\r
        }\r
\r
        .projects-grid {\r
            display: grid;\r
            grid-template-columns: repeat(3, 1fr);\r
            gap: 24px;\r
            width: 100%;\r
        }\r
\r
        /* Card = full-bleed image with a bottom gradient + text overlay.\r
           No cropping tricks — the whole image is always visible. */\r
        .project-card {\r
            position: relative;\r
            display: flex;\r
            flex-direction: column;\r
            width: 100%;\r
            border-radius: 20px;\r
            overflow: hidden;\r
            background: #0b1830;\r
            text-decoration: none;\r
            cursor: pointer;\r
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\r
            transition: transform .3s ease, box-shadow .3s ease;\r
        }\r
\r
        .project-card:hover {\r
            transform: translateY(-8px);\r
            box-shadow: 0 16px 44px rgba(0, 0, 0, 0.18);\r
        }\r
\r
        /* Fixed-ratio image window (not the whole card) so the card\r
           height hugs the content instead of leaving empty space. */\r
        .project-media {\r
            position: relative;\r
            width: 100%;\r
            aspect-ratio: 16 / 10;\r
            overflow: hidden;\r
            background: #0b1830;\r
            flex-shrink: 0;\r
        }\r
\r
        .project-img {\r
            position: absolute;\r
            inset: 0;\r
            width: 100%;\r
            height: 100%;\r
            object-fit: contain;\r
            object-position: center top;\r
            display: block;\r
            transition: transform .5s ease;\r
        }\r
\r
        .project-card:hover .project-img {\r
            transform: scale(1.03);\r
        }\r
\r
        .project-img-fallback {\r
            position: absolute;\r
            inset: 0;\r
            display: flex;\r
            align-items: center;\r
            justify-content: center;\r
            background: linear-gradient(135deg, #16233f 0%, #0b1830 100%);\r
        }\r
\r
        /* Text block now sits BELOW the image in normal flow, solid dark\r
           panel — card height = image height + text height, no dead space. */\r
        .project-overlay {\r
            position: relative;\r
            display: flex;\r
            flex-direction: column;\r
            padding: 22px 26px 26px;\r
            background: #0b1830;\r
        }\r
\r
        .project-category {\r
            display: inline-block;\r
            background: rgba(22, 115, 255, 0.22);\r
            border: 1px solid rgba(125, 184, 255, 0.5);\r
            color: #bcdcff;\r
            font-size: 11px;\r
            font-weight: 700;\r
            text-transform: uppercase;\r
            letter-spacing: 0.08em;\r
            padding: 4px 12px;\r
            border-radius: 100px;\r
            margin-bottom: 12px;\r
            width: fit-content;\r
            backdrop-filter: blur(4px);\r
        }\r
\r
        .project-title {\r
            font-size: 20px;\r
            font-weight: 800;\r
            color: #fff;\r
            line-height: 1.3;\r
            margin-bottom: 8px;\r
            letter-spacing: -0.02em;\r
            display: -webkit-box;\r
            -webkit-line-clamp: 2;\r
            -webkit-box-orient: vertical;\r
            overflow: hidden;\r
            text-shadow: 0 2px 12px rgba(0, 0, 0, .35);\r
        }\r
\r
        .project-desc {\r
            font-size: 13.5px;\r
            color: rgba(255, 255, 255, 0.82);\r
            line-height: 1.6;\r
            margin-bottom: 16px;\r
            display: -webkit-box;\r
            -webkit-line-clamp: 2;\r
            -webkit-box-orient: vertical;\r
            overflow: hidden;\r
        }\r
\r
        .project-tech {\r
            display: flex;\r
            gap: 8px;\r
            flex-wrap: wrap;\r
            margin-bottom: 14px;\r
        }\r
\r
        .tech-tag {\r
            background: rgba(255, 255, 255, 0.14);\r
            border: 1px solid rgba(255, 255, 255, 0.22);\r
            color: rgba(255, 255, 255, 0.9);\r
            font-size: 11px;\r
            font-weight: 600;\r
            padding: 4px 10px;\r
            border-radius: 6px;\r
            backdrop-filter: blur(4px);\r
        }\r
\r
        .project-link {\r
            display: inline-flex;\r
            align-items: center;\r
            gap: 8px;\r
            color: #fff;\r
            font-size: 13px;\r
            font-weight: 700;\r
            transition: gap .2s ease;\r
        }\r
\r
        .project-card:hover .project-link {\r
            gap: 12px;\r
        }\r
\r
        .project-link svg {\r
            width: 16px;\r
            height: 16px;\r
        }\r
\r
        /* RESPONSIVE */\r
        @media (max-width: 1000px) {\r
            .projects-grid {\r
                grid-template-columns: repeat(2, 1fr);\r
                gap: 18px;\r
            }\r
        }\r
\r
        @media (max-width: 600px) {\r
            .wrap {\r
                padding: 0 20px;\r
            }\r
\r
            .sec {\r
                padding: 64px 0;\r
            }\r
\r
            .projects-grid {\r
                grid-template-columns: 1fr;\r
                gap: 18px;\r
            }\r
\r
            .project-media {\r
                aspect-ratio: 4 / 3;\r
            }\r
\r
            .project-overlay {\r
                padding: 20px;\r
            }\r
\r
            .project-title {\r
                font-size: 18px;\r
            }\r
\r
            .project-desc {\r
                font-size: 13px;\r
                -webkit-line-clamp: 2;\r
            }\r
        }\r
\r
\r
\r
\r
        /* ================================================\r
            VERY SMALL <= 380px\r
        ================================================ */\r
        @media (max-width: 380px) {\r
            .wrap {\r
                padding-left: 16px !important;\r
                padding-right: 16px !important\r
            }\r
\r
            .hdr-inner {\r
                padding: 0 16px\r
            }\r
\r
            .hero-content {\r
                padding: 40px 16px 100px\r
            }\r
\r
            .hero h1 {\r
                font-size: 20px\r
            }\r
\r
            .hero-cta {\r
                padding: 12px 28px;\r
                font-size: 14px\r
            }\r
\r
            .hero-glow {\r
                width: 320px;\r
                height: 320px\r
            }\r
\r
            .hero-wave-wrap svg {\r
                height: 110px !important\r
            }\r
\r
            .sec {\r
                padding: 52px 0\r
            }\r
\r
            .ft-top {\r
                padding: 36px 16px 28px !important\r
            }\r
\r
            .contact-box {\r
                padding: 20px 14px\r
            }\r
\r
            .ft-bar-inner {\r
                padding: 14px 16px !important\r
            }\r
\r
            .cta-inner {\r
                padding: 40px 16px !important\r
            }\r
        }\r
        @media (max-width: 900px) {\r
            .why-heading { grid-template-columns:1fr; align-items:start }\r
            .why-link { width:max-content }\r
            .why-body { grid-template-columns:1fr 1fr }\r
            .why-card:first-child { grid-column:1/-1; min-height:220px }\r
        }\r
        @media (max-width: 600px) {\r
            .why-panel { border-radius:22px; padding:22px 16px }\r
            .why-heading { margin-bottom:24px; gap:20px }\r
            .why-heading h2 { font-size:clamp(29px,10vw,39px) }\r
            .why-body { grid-template-columns:1fr; gap:11px; margin-bottom:20px }\r
            .why-card,.why-card:first-child { grid-column:auto; min-height:0; padding:20px; border-radius:17px }\r
            .why-card-top { margin-bottom:30px }\r
            .why-sec .stats-grid { grid-template-columns:1fr 1fr; gap:7px; padding:7px; border-radius:18px }\r
            .why-sec .stat { padding:16px 13px !important; border-radius:13px }\r
            .why-sec .stat-num { font-size:clamp(32px,10vw,45px) }\r
            .why-sec .stat-lbl { font-size:12px }\r
        }\r
    </style>\r
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />\r
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""><\/script>\r
    <link rel="icon" href="favicon.svg" type="image/svg+xml">\r
    <link rel="apple-touch-icon" href="favicon.svg">\r
    <link rel="manifest" href="site.webmanifest">\r
    <meta name="theme-color" content="#061326">\r
    <script src="seo.js" defer><\/script></head>\r
\r
<body>\r
\r
    <!-- HEADER -->\r
    <header class="hdr">\r
        <div class="hdr-inner">\r
            <a href="#" class="logo">\r
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                    <path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF" />\r
                    <path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85" />\r
                    <path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,0.35)" />\r
                </svg>\r
                <span class="logo-txt">Sakin<span>.zo</span></span>\r
            </a>\r
            <nav>\r
                <div class="ndrop"><button class="nbtn">About Us<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                        </svg></button>\r
                    <div class="drop"><a href="who-we-are.html">Who We Are</a><a href="careers.html">Careers</a><a href="contactus.html">Contacts</a><a\r
                            href="leadership.html">Leadership</a></div>\r
                </div>\r
                <div class="ndrop"><button class="nbtn">Success Stories<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                        </svg></button>\r
                    <div class="drop"><a href="ev-charging.html">Cloud ecosystem for EV charging</a><a href="market-access.html">AI-Based Market Access\r
                            Planning Tool</a><a href="multi-currency-wallet.html">Multi-currency Wallet</a><a href="iot-cloud-platform.html">IoT Cloud Platform</a><a\r
                            href="smart-hvac.html">Smart HVAC Monitoring with AI</a></div>\r
                </div>\r
                <div class="ndrop"><button class="nbtn">Services<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                        </svg></button>\r
                    <div class="drop"><a href="iot-development.html">IoT Development Services</a><a href="ai-development.html">AI Development</a><a\r
                            href="ai-agent-development.html">AI Agent Development</a><a href="ecommerce-development.html">eCommerce Platform Development</a><a\r
                            href="fintech-development.html">Fintech Software Development</a><a href="blockchain-development.html">Blockchain Development</a><a\r
                            href="full-cycle-development.html">Full-cycle Development</a></div>\r
                </div>\r
                <div class="ndrop"><button class="nbtn">Insights<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                        </svg></button>\r
                    <div class="drop"><a href="news.html">News</a><a href="opensource.html">Opensource</a><a href="blog.html">Blog</a></div>\r
                </div>\r
            </nav>\r
            <div class="hdr-right">\r
                <span class="lang">EN<svg viewBox="0 0 10 6" fill="none">\r
                        <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                    </svg></span>\r
                <a href="contactus.html#form-section" class="btn-git">Get in touch</a>\r
            </div>\r
            <button class="hamburger" id="hamburger" aria-label="Menu">\r
                <span></span><span></span><span></span>\r
            </button>\r
        </div>\r
    </header>\r
\r
    <!-- Mobile Menu -->\r
    <div class="mobile-menu" id="mobileMenu">\r
        <div class="mob-item">\r
            <div class="mob-link" onclick="toggleMobSub(this)">About Us<svg viewBox="0 0 10 6" fill="none">\r
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                </svg></div>\r
            <div class="mob-sub"><a href="who-we-are.html">Who We Are</a><a href="careers.html">Careers</a><a href="contactus.html">Contacts</a><a\r
                    href="leadership.html">Leadership</a></div>\r
        </div>\r
        <div class="mob-item">\r
            <div class="mob-link" onclick="toggleMobSub(this)">Success Stories<svg viewBox="0 0 10 6" fill="none">\r
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                </svg></div>\r
            <div class="mob-sub"><a href="ev-charging.html">Cloud ecosystem for EV charging</a><a href="market-access.html">AI-Based Market Access\r
                    Planning Tool</a><a href="multi-currency-wallet.html">Multi-currency Wallet</a><a href="iot-cloud-platform.html">IoT Cloud Platform</a><a href="smart-hvac.html">Smart HVAC Monitoring with AI</a></div>\r
        </div>\r
        <div class="mob-item">\r
            <div class="mob-link" onclick="toggleMobSub(this)">Services<svg viewBox="0 0 10 6" fill="none">\r
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                </svg></div>\r
            <div class="mob-sub"><a href="iot-development.html">IoT Development Services</a><a href="ai-development.html">AI Development</a><a href="ai-agent-development.html">AI Agent Development</a><a\r
                    href="ecommerce-development.html">eCommerce Platform Development</a><a href="fintech-development.html">Fintech Software Development</a><a\r
                    href="blockchain-development.html">Blockchain Development</a><a href="full-cycle-development.html">Full-cycle Development</a></div>\r
        </div>\r
        <div class="mob-item">\r
            <div class="mob-link" onclick="toggleMobSub(this)">Insights<svg viewBox="0 0 10 6" fill="none">\r
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />\r
                </svg></div>\r
            <div class="mob-sub"><a href="news.html">News</a><a href="opensource.html">Opensource</a><a href="blog.html">Blog</a></div>\r
        </div>\r
        <a href="contactus.html#form-section" class="mob-cta" onclick="closeMenu()">Get in touch</a>\r
    </div>\r
\r
    <!-- HERO -->\r
    <section class="hero" id="home">\r
        <div class="hero-bg-canvas">\r
            <svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 1440 900"\r
                xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">\r
                <rect width="1440" height="900" fill="#040c1c" />\r
                <g stroke="#1a5acc" stroke-width=".8" fill="none">\r
                    <line x1="180" y1="580" x2="360" y2="500">\r
                        <animate attributeName="stroke-opacity" values=".4;.08;.4" dur="4s" repeatCount="indefinite" />\r
                    </line>\r
                    <line x1="360" y1="500" x2="520" y2="600">\r
                        <animate attributeName="stroke-opacity" values=".08;.4;.08" dur="3.5s"\r
                            repeatCount="indefinite" />\r
                    </line>\r
                    <line x1="520" y1="600" x2="700" y2="520">\r
                        <animate attributeName="stroke-opacity" values=".4;.12;.4" dur="5s" repeatCount="indefinite" />\r
                    </line>\r
                    <line x1="700" y1="520" x2="920" y2="570">\r
                        <animate attributeName="stroke-opacity" values=".12;.4;.12" dur="4.2s"\r
                            repeatCount="indefinite" />\r
                    </line>\r
                    <line x1="920" y1="570" x2="1100" y2="490">\r
                        <animate attributeName="stroke-opacity" values=".4;.1;.4" dur="3.8s" repeatCount="indefinite" />\r
                    </line>\r
                    <line x1="1100" y1="490" x2="1280" y2="530">\r
                        <animate attributeName="stroke-opacity" values=".1;.35;.1" dur="4.5s"\r
                            repeatCount="indefinite" />\r
                    </line>\r
                    <line x1="280" y1="660" x2="450" y2="590" stroke-opacity=".2" />\r
                    <line x1="450" y1="590" x2="620" y2="670" stroke-opacity=".2" />\r
                    <line x1="620" y1="670" x2="820" y2="620" stroke-opacity=".2" />\r
                    <line x1="820" y1="620" x2="1020" y2="650" stroke-opacity=".15" />\r
                    <line x1="360" y1="500" x2="280" y2="660" stroke-opacity=".15" />\r
                    <line x1="520" y1="600" x2="450" y2="590" stroke-opacity=".15" />\r
                    <line x1="700" y1="520" x2="620" y2="670" stroke-opacity=".15" />\r
                    <line x1="920" y1="570" x2="820" y2="620" stroke-opacity=".15" />\r
                </g>\r
                <g fill="#1a6fff">\r
                    <circle cx="180" cy="580" r="3.5" opacity=".5">\r
                        <animate attributeName="opacity" values=".5;1;.5" dur="2.2s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="360" cy="500" r="5" opacity=".6">\r
                        <animate attributeName="opacity" values=".6;.2;.6" dur="2.7s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="520" cy="600" r="3.5" opacity=".4">\r
                        <animate attributeName="opacity" values=".4;.9;.4" dur="3.1s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="700" cy="520" r="6" opacity=".55">\r
                        <animate attributeName="opacity" values=".55;.2;.55" dur="2.4s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="920" cy="570" r="4" opacity=".5">\r
                        <animate attributeName="opacity" values=".5;1;.5" dur="1.9s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="1100" cy="490" r="3.5" opacity=".4">\r
                        <animate attributeName="opacity" values=".4;.85;.4" dur="2.9s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="1280" cy="530" r="3" opacity=".35">\r
                        <animate attributeName="opacity" values=".35;.8;.35" dur="3.3s" repeatCount="indefinite" />\r
                    </circle>\r
                    <circle cx="280" cy="660" r="2.5" opacity=".3" />\r
                    <circle cx="620" cy="670" r="3" opacity=".35" />\r
                    <circle cx="820" cy="620" r="3.5" opacity=".3" />\r
                </g>\r
            </svg>\r
            <div class="hero-glow"></div>\r
        </div>\r
\r
        <div class="hero-content">\r
            <h1>Developing Solutions<br>That Transform Business</h1>\r
            <a href="contactus.html#form-section" class="hero-cta">Get in touch</a>\r
        </div>\r
\r
        <div class="hero-wave-wrap">\r
            <svg viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"\r
                style="display:block;width:100%;height:260px">\r
                <defs>\r
                    <filter id="glow">\r
                        <feGaussianBlur stdDeviation="8" result="blur" />\r
                        <feMerge>\r
                            <feMergeNode in="blur" />\r
                            <feMergeNode in="SourceGraphic" />\r
                        </feMerge>\r
                    </filter>\r
                    <linearGradient id="wg1" x1="0" y1="0" x2="1" y2="0">\r
                        <stop offset="0%" stop-color="#00aaff" stop-opacity=".0" />\r
                        <stop offset="25%" stop-color="#00cfff" stop-opacity=".7" />\r
                        <stop offset="50%" stop-color="#0088ff" stop-opacity=".9" />\r
                        <stop offset="75%" stop-color="#00cfff" stop-opacity=".7" />\r
                        <stop offset="100%" stop-color="#00aaff" stop-opacity=".0" />\r
                    </linearGradient>\r
                    <linearGradient id="wg2" x1="0" y1="0" x2="1" y2="0">\r
                        <stop offset="0%" stop-color="#1673FF" stop-opacity=".0" />\r
                        <stop offset="30%" stop-color="#1673FF" stop-opacity=".5" />\r
                        <stop offset="70%" stop-color="#1673FF" stop-opacity=".5" />\r
                        <stop offset="100%" stop-color="#1673FF" stop-opacity=".0" />\r
                    </linearGradient>\r
                </defs>\r
                <rect y="160" width="1440" height="100" fill="#040c1c" />\r
                <path\r
                    d="M0,180 C180,120 360,200 540,155 C720,110 900,185 1080,145 C1260,105 1360,160 1440,150 L1440,260 L0,260Z"\r
                    fill="#040c1c" />\r
                <path d="M0,178 C180,118 360,198 540,153 C720,108 900,183 1080,143 C1260,103 1360,158 1440,148"\r
                    fill="none" stroke="url(#wg1)" stroke-width="2.5" filter="url(#glow)" opacity=".9">\r
                    <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,178 C180,118 360,198 540,153 C720,108 900,183 1080,143 C1260,103 1360,158 1440,148;\r
                  M0,165 C180,198 360,130 540,168 C720,198 900,130 1080,165 C1260,195 1360,138 1440,160;\r
                  M0,178 C180,118 360,198 540,153 C720,108 900,183 1080,143 C1260,103 1360,158 1440,148" />\r
                </path>\r
                <path d="M0,195 C200,155 400,215 600,180 C800,145 1000,205 1200,170 C1320,152 1400,185 1440,178"\r
                    fill="none" stroke="url(#wg2)" stroke-width="1.5" filter="url(#glow)" opacity=".5">\r
                    <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,195 C200,155 400,215 600,180 C800,145 1000,205 1200,170 C1320,152 1400,185 1440,178;\r
                  M0,210 C200,185 400,155 600,198 C800,218 1000,165 1200,195 C1320,210 1400,172 1440,190;\r
                  M0,195 C200,155 400,215 600,180 C800,145 1000,205 1200,170 C1320,152 1400,185 1440,178" />\r
                </path>\r
                <path d="M0,210 C300,175 600,225 900,190 C1100,170 1280,205 1440,195" fill="none" stroke="url(#wg1)"\r
                    stroke-width="1" opacity=".3">\r
                    <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,210 C300,175 600,225 900,190 C1100,170 1280,205 1440,195;\r
                  M0,225 C300,200 600,178 900,210 C1100,225 1280,185 1440,205;\r
                  M0,210 C300,175 600,225 900,190 C1100,170 1280,205 1440,195" />\r
                </path>\r
                <circle r="3" fill="#00ddff" opacity=".8" filter="url(#glow)">\r
                    <animateMotion dur="8s" repeatCount="indefinite"\r
                        path="M0,178 C180,118 360,198 540,153 C720,108 900,183 1080,143 C1260,103 1360,158 1440,148" />\r
                </circle>\r
                <circle r="2.5" fill="#4db8ff" opacity=".7" filter="url(#glow)">\r
                    <animateMotion dur="10s" repeatCount="indefinite" begin="-3s"\r
                        path="M1440,148 C1360,158 1260,103 1080,143 C900,183 720,108 540,153 C360,198 180,118 0,178" />\r
                </circle>\r
                <circle r="2" fill="#99e8ff" opacity=".6" filter="url(#glow)">\r
                    <animateMotion dur="7s" repeatCount="indefinite" begin="-1.5s"\r
                        path="M0,195 C200,155 400,215 600,180 C800,145 1000,205 1200,170 C1320,152 1400,185 1440,178" />\r
                </circle>\r
            </svg>\r
        </div>\r
    </section>\r
\r
    <!-- WHY CHOOSE US -->\r
    <section class="why-sec" id="sec-why">\r
        <div class="wrap sec reveal">\r
            <div class="why-panel">\r
                <div class="why-heading">\r
                    <div><span class="why-eyebrow">Why Sakin.zo</span><h2>Built for impact.<br><span>Chosen for partnership.</span></h2></div>\r
                    <a href="who-we-are.html" class="why-link">Discover our story&nbsp; →</a>\r
                </div>\r
                <div class="why-body">\r
                    <article class="why-card">\r
                        <div class="why-card-top"><span class="why-icon"><svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg></span><span class="why-number">01</span></div>\r
                        <h3>Proven since 2011</h3>\r
                        <p>We combine modern technology with efficient delivery processes to build dependable, client-driven solutions.</p>\r
                    </article>\r
                    <article class="why-card">\r
                        <div class="why-card-top"><span class="why-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg></span><span class="why-number">02</span></div>\r
                        <h3>Cross-domain expertise</h3>\r
                        <p>Deep experience across AI, IoT, Blockchain, eCommerce and FinTech—including work with Fortune 500 companies.</p>\r
                    </article>\r
                    <article class="why-card">\r
                        <div class="why-card-top"><span class="why-icon"><svg viewBox="0 0 24 24"><path d="M4 18l5-5 4 3 7-9"/><path d="M15 7h5v5"/></svg></span><span class="why-number">03</span></div>\r
                        <h3>Outcomes over output</h3>\r
                        <p>Your results are our win. We focus beyond initial requirements to create lasting value for your business and customers.</p>\r
                    </article>\r
                </div>\r
                <div class="stats-grid" id="main-stats-grid"><!-- Dynamically rendered from admin panel --></div>\r
            </div>\r
        </div>\r
    </section>\r
\r
\r
\r
\r
    <!-- OUR CLIENTS -->\r
  <section class="clients-sec" id="sec-clients" >\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">Our clients</h2>\r
            </div>\r
            <div class="clients-grid">\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 200 56" xmlns="http://www.w3.org/2000/svg">\r
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <circle cx="28" cy="28" r="18" fill="none" stroke="#0d1b2e" stroke-width=".8" opacity=".4" />\r
                        <line x1="28" y1="6" x2="28" y2="28" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <line x1="28" y1="28" x2="9" y2="39" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <line x1="28" y1="28" x2="47" y2="39" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <circle cx="28" cy="28" r="2.5" fill="#0d1b2e" />\r
                        <text x="60" y="32" font-size="15" font-weight="500" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.3">Mercedes-Benz</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg">\r
                        <rect x="6" y="6" width="108" height="44" rx="22" fill="#0093c8" />\r
                        <text x="60" y="35" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" font-family="Georgia,Times,serif" letter-spacing="-.5">Pfizer</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 180 56" xmlns="http://www.w3.org/2000/svg">\r
                        <rect x="4" y="4" width="48" height="48" rx="6" fill="#d62028" />\r
                        <polygon points="28,10 34,20 22,20" fill="#fff" />\r
                        <rect x="25" y="20" width="6" height="8" fill="#fff" />\r
                        <polygon points="28,46 34,36 22,36" fill="#fff" />\r
                        <rect x="25" y="28" width="6" height="8" fill="#fff" />\r
                        <polygon points="10,28 20,22 20,34" fill="#fff" />\r
                        <rect x="20" y="25" width="8" height="6" fill="#fff" />\r
                        <polygon points="46,28 36,22 36,34" fill="#fff" />\r
                        <rect x="28" y="25" width="8" height="6" fill="#fff" />\r
                        <text x="62" y="24" font-size="13" font-weight="700" fill="#0d1b2e" font-family="Inter,sans-serif">НОВА</text>\r
                        <text x="62" y="40" font-size="13" font-weight="700" fill="#d62028" font-family="Inter,sans-serif">ПОШТА</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M6 20 L12 28 L22 10" stroke="#0d1b2e" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />\r
                        <text x="32" y="27" font-size="17" font-weight="900" fill="#0d1b2e" font-family="'Arial Black','Arial',sans-serif" letter-spacing="-.3">INTERSPORT</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 190 56" xmlns="http://www.w3.org/2000/svg">\r
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <circle cx="28" cy="28" r="14" fill="none" stroke="#0d1b2e" stroke-width="1.2" />\r
                        <circle cx="28" cy="28" r="6" fill="#0d1b2e" />\r
                        <text x="60" y="22" font-size="13" font-weight="700" fill="#0d1b2e" font-family="Inter,sans-serif">deep dive</text>\r
                        <text x="60" y="38" font-size="12" font-weight="400" fill="#5f7089" font-family="Inter,sans-serif">technology</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 100 44" xmlns="http://www.w3.org/2000/svg">\r
                        <text x="50" y="32" text-anchor="middle" font-size="32" font-weight="900" fill="#0d1b2e" font-family="'Arial Black','Arial',sans-serif" letter-spacing="-1.5">Uber</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 150 44" xmlns="http://www.w3.org/2000/svg">\r
                        <rect x="4" y="4" width="14" height="14" rx="2.5" fill="#0d1b2e" />\r
                        <rect x="4" y="22" width="14" height="14" rx="2.5" fill="#0d1b2e" opacity=".45" />\r
                        <rect x="22" y="4" width="14" height="14" rx="2.5" fill="#0d1b2e" opacity=".45" />\r
                        <rect x="22" y="22" width="14" height="14" rx="2.5" fill="#0d1b2e" />\r
                        <text x="46" y="29" font-size="16" font-weight="700" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.4">groupby</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 150 44" xmlns="http://www.w3.org/2000/svg">\r
                        <circle cx="22" cy="22" r="18" fill="#1673FF" />\r
                        <text x="22" y="27" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" font-family="Inter,sans-serif">M</text>\r
                        <text x="50" y="27" font-size="15" font-weight="600" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.3">Medallia</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg">\r
                        <circle cx="22" cy="22" r="6" fill="#0d1b2e" />\r
                        <path d="M22 16 L18 6 L26 8 Z" fill="#0d1b2e" />\r
                        <path d="M22 28 L18 38 L26 36 Z" fill="#0d1b2e" />\r
                        <path d="M16 22 L6 18 L8 26 Z" fill="#0d1b2e" />\r
                        <path d="M28 22 L38 18 L36 26 Z" fill="#0d1b2e" />\r
                        <text x="50" y="28" font-size="18" font-weight="800" fill="#0d1b2e" font-family="'Arial Black','Arial',sans-serif" letter-spacing="-.5">MHP</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 170 56" xmlns="http://www.w3.org/2000/svg">\r
                        <circle cx="22" cy="28" r="18" fill="none" stroke="#0d1b2e" stroke-width="1.6" />\r
                        <ellipse cx="22" cy="28" rx="7" ry="18" fill="none" stroke="#0d1b2e" stroke-width="1.1" />\r
                        <line x1="4" y1="28" x2="40" y2="28" stroke="#0d1b2e" stroke-width="1" />\r
                        <line x1="6" y1="18" x2="38" y2="18" stroke="#0d1b2e" stroke-width=".8" />\r
                        <line x1="6" y1="38" x2="38" y2="38" stroke="#0d1b2e" stroke-width=".8" />\r
                        <text x="50" y="24" font-size="12" font-weight="700" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.2">world<tspan font-weight="400">ticket</tspan></text>\r
                        <text x="50" y="38" font-size="10" font-weight="400" fill="#5f7089" font-family="Inter,sans-serif">solutions</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 130 56" xmlns="http://www.w3.org/2000/svg">\r
                        <circle cx="28" cy="24" r="20" fill="none" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <path d="M18 38 Q28 46 38 38" stroke="#0d1b2e" stroke-width="1.6" fill="none" />\r
                        <circle cx="28" cy="24" r="4" fill="#0d1b2e" />\r
                        <circle cx="18" cy="24" r="3" fill="#0d1b2e" opacity=".5" />\r
                        <circle cx="38" cy="24" r="3" fill="#0d1b2e" opacity=".5" />\r
                        <text x="58" y="30" font-size="16" font-weight="700" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.3">Elafris</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 190 56" xmlns="http://www.w3.org/2000/svg">\r
                        <polygon points="22,4 38,4 44,14 38,24 44,34 38,44 22,44 16,34 10,24 16,14" fill="none" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <polygon points="22,10 34,10 38,17 34,24 38,31 34,38 22,38 18,31 14,24 18,17" fill="#0d1b2e" opacity=".15" />\r
                        <text x="56" y="22" font-size="11" font-weight="700" fill="#0d1b2e" font-family="Inter,sans-serif">Digital Health</text>\r
                        <text x="56" y="36" font-size="11" font-weight="400" fill="#5f7089" font-family="Inter,sans-serif">Outcomes</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg">\r
                        <rect x="4" y="8" width="10" height="10" rx="2" fill="#0d1b2e" />\r
                        <rect x="17" y="8" width="10" height="10" rx="2" fill="#0d1b2e" opacity=".6" />\r
                        <rect x="4" y="21" width="10" height="10" rx="2" fill="#0d1b2e" opacity=".6" />\r
                        <rect x="17" y="21" width="10" height="10" rx="2" fill="#0d1b2e" />\r
                        <text x="36" y="29" font-size="16" font-weight="600" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.3">modelate</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 130 44" xmlns="http://www.w3.org/2000/svg">\r
                        <rect x="4" y="8" width="32" height="24" rx="3" fill="none" stroke="#0d1b2e" stroke-width="1.8" />\r
                        <path d="M4 10 L20 20 L36 10" stroke="#0d1b2e" stroke-width="1.5" fill="none" />\r
                        <text x="46" y="27" font-size="17" font-weight="800" fill="#0d1b2e" font-family="'Arial Black','Arial',sans-serif" letter-spacing=".5">SMTP</text>\r
                    </svg>\r
                </div>\r
                <div class="cl-card">\r
                    <svg viewBox="0 0 170 56" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M10,36 Q10,26 20,26 Q21,18 30,20 Q34,12 42,16 Q50,10 56,18 Q66,18 66,26 Q66,34 56,34Z" fill="#1a8fcc" opacity=".85" />\r
                        <path d="M14,44 Q14,38 20,38 Q22,34 26,36 Q28,30 32,34 Q36,28 42,32 Q46,32 46,38 Q46,44 40,44Z" fill="#5bbcd8" opacity=".7" />\r
                        <text x="56" y="34" font-size="14" font-weight="600" fill="#0d1b2e" font-family="Inter,sans-serif" letter-spacing="-.3">cloudbeds</text>\r
                    </svg>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <section class="projects-sec" id="sec-projects">\r
        <div class="wrap sec">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">Our Projects</h2>\r
                <a href="#" class="btn-blue projects-view-all" onclick="handleProjectsViewAll(event)">View All Projects</a>\r
            </div>\r
            <div class="projects-grid" id="main-projects-grid">\r
                <!-- Dynamically rendered from admin panel -->\r
            </div>\r
            <div class="sec-btn-row">\r
                <a href="#" class="btn-blue projects-view-all" onclick="handleProjectsViewAll(event)">View All Projects</a>\r
            </div>\r
        </div>\r
    </section>\r
\r
\r
    <!-- WHAT WE DO -->\r
    <section class="wwd-sec" id="sec-whatwedo">\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">What we do</h2>\r
            </div>\r
            <div class="wwd-grid">\r
\r
                <!-- IoT - full width -->\r
                <a href="#" class="wwd-card full iot-bg" data-service-key="iot">\r
                    <div class="wwd-inner">\r
                        <div class="wwd-ttl">IoT development services</div>\r
                        <div class="lm-btn"><span>Learn more</span>\r
                            <div class="lm-circle"><svg viewBox="0 0 12 12" fill="none">\r
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"\r
                                        stroke-linejoin="round" />\r
                                </svg></div>\r
                        </div>\r
                        <div class="wwd-illustration">\r
                            <svg viewBox="0 0 660 280" fill="none" xmlns="http://www.w3.org/2000/svg"\r
                                preserveAspectRatio="xMaxYMid meet">\r
                                <g style="animation:floatY 3.2s ease-in-out infinite">\r
                                    <rect x="100" y="70" width="56" height="150" rx="10" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.5)" stroke-width="1.5" />\r
                                    <rect x="110" y="96" width="36" height="56" rx="6" fill="rgba(255,255,255,0.3)" />\r
                                    <circle cx="128" cy="124" r="7" fill="rgba(255,255,255,0.7)" />\r
                                    <circle cx="128" cy="124" r="3.5" fill="rgba(255,255,255,0.95)" />\r
                                    <circle cx="118" cy="142" r="2.5" fill="rgba(255,255,255,0.5)" />\r
                                    <circle cx="128" cy="142" r="2.5" fill="rgba(255,255,255,0.5)" />\r
                                    <circle cx="138" cy="142" r="2.5" fill="rgba(255,255,255,0.5)" />\r
                                    <circle cx="118" cy="152" r="2.5" fill="rgba(255,255,255,0.5)" />\r
                                    <circle cx="128" cy="152" r="2.5" fill="rgba(255,255,255,0.5)" />\r
                                    <circle cx="138" cy="152" r="2.5" fill="rgba(255,255,255,0.5)" />\r
                                    <path d="M112 96 Q112 80 128 80 Q144 80 144 96" stroke="rgba(255,255,255,0.6)"\r
                                        stroke-width="2" fill="none" />\r
                                </g>\r
                                <g style="animation:floatY2 3.8s ease-in-out infinite">\r
                                    <rect x="248" y="20" width="118" height="240" rx="20" fill="rgba(255,255,255,0.28)"\r
                                        stroke="rgba(255,255,255,0.6)" stroke-width="2" />\r
                                    <rect x="284" y="32" width="46" height="14" rx="7" fill="rgba(0,0,0,0.4)" />\r
                                    <rect x="258" y="54" width="98" height="168" rx="4" fill="rgba(255,255,255,0.35)" />\r
                                    <path d="M295 120 Q307 108 319 120" stroke="rgba(255,255,255,0.95)" stroke-width="3"\r
                                        fill="none" stroke-linecap="round" />\r
                                    <path d="M289 113 Q307 98 325 113" stroke="rgba(255,255,255,0.75)"\r
                                        stroke-width="2.5" fill="none" stroke-linecap="round" />\r
                                    <path d="M283 106 Q307 88 331 106" stroke="rgba(255,255,255,0.5)" stroke-width="2"\r
                                        fill="none" stroke-linecap="round" />\r
                                    <circle cx="307" cy="130" r="5" fill="rgba(255,255,255,0.95)" />\r
                                    <rect x="285" y="232" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.5)" />\r
                                </g>\r
                                <g style="animation:floatY 4s ease-in-out infinite;animation-delay:0.5s">\r
                                    <ellipse cx="220" cy="218" rx="55" ry="38" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <ellipse cx="220" cy="210" rx="30" ry="20" fill="rgba(255,255,255,0.3)" />\r
                                    <circle cx="220" cy="208" r="10" fill="rgba(255,255,255,0.6)" />\r
                                    <circle cx="220" cy="208" r="5" fill="rgba(255,255,255,0.9)" />\r
                                    <circle cx="196" cy="214" r="4" fill="rgba(255,255,255,0.35)" />\r
                                    <circle cx="244" cy="214" r="4" fill="rgba(255,255,255,0.35)" />\r
                                </g>\r
                                <g style="animation:floatY2 3.5s ease-in-out infinite;animation-delay:1s">\r
                                    <rect x="420" y="48" width="90" height="60" rx="10" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <line x1="438" y1="48" x2="432" y2="26" stroke="rgba(255,255,255,0.55)"\r
                                        stroke-width="2.5" stroke-linecap="round" />\r
                                    <line x1="456" y1="48" x2="456" y2="22" stroke="rgba(255,255,255,0.55)"\r
                                        stroke-width="2.5" stroke-linecap="round" />\r
                                    <line x1="474" y1="48" x2="474" y2="24" stroke="rgba(255,255,255,0.55)"\r
                                        stroke-width="2.5" stroke-linecap="round" />\r
                                    <line x1="492" y1="48" x2="498" y2="28" stroke="rgba(255,255,255,0.55)"\r
                                        stroke-width="2.5" stroke-linecap="round" />\r
                                    <circle cx="436" cy="72" r="4" fill="rgba(255,255,255,0.8)">\r
                                        <animate attributeName="fill-opacity" values="1;.2;1" dur="1.2s"\r
                                            repeatCount="indefinite" />\r
                                    </circle>\r
                                    <circle cx="450" cy="72" r="4" fill="rgba(255,255,255,0.8)">\r
                                        <animate attributeName="fill-opacity" values=".2;1;.2" dur="1.2s"\r
                                            repeatCount="indefinite" />\r
                                    </circle>\r
                                    <circle cx="464" cy="72" r="4" fill="rgba(255,255,255,0.8)">\r
                                        <animate attributeName="fill-opacity" values="1;.2;1" dur="1.2s"\r
                                            repeatCount="indefinite" begin=".4s" />\r
                                    </circle>\r
                                    <circle cx="478" cy="72" r="4" fill="rgba(255,255,255,0.8)">\r
                                        <animate attributeName="fill-opacity" values=".3;1;.3" dur="1.5s"\r
                                            repeatCount="indefinite" begin=".6s" />\r
                                    </circle>\r
                                </g>\r
                                <g style="animation:floatY 3s ease-in-out infinite;animation-delay:0.3s">\r
                                    <rect x="500" y="130" width="80" height="80" rx="14" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <text x="540" y="162" text-anchor="middle" font-size="22" font-weight="700"\r
                                        fill="rgba(255,255,255,0.95)" font-family="Inter,sans-serif">20°</text>\r
                                    <text x="540" y="182" text-anchor="middle" font-size="11"\r
                                        fill="rgba(255,255,255,0.65)" font-family="Inter,sans-serif">C</text>\r
                                    <path d="M516 196 Q516 210 540 212 Q564 210 564 196" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1.5" fill="none" />\r
                                </g>\r
                                <g style="animation:floatY2 3.8s ease-in-out infinite;animation-delay:0.8s">\r
                                    <rect x="500" y="218" width="90" height="56" rx="10" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <circle cx="530" cy="246" r="18" fill="rgba(255,255,255,0.25)"\r
                                        stroke="rgba(255,255,255,0.5)" stroke-width="1.5" />\r
                                    <circle cx="530" cy="246" r="10" fill="rgba(255,255,255,0.55)" />\r
                                    <circle cx="530" cy="246" r="5" fill="rgba(255,255,255,0.8)" />\r
                                    <circle cx="572" cy="230" r="5" fill="rgba(255,220,50,0.9)">\r
                                        <animate attributeName="fill-opacity" values="1;.3;1" dur="2s"\r
                                            repeatCount="indefinite" />\r
                                    </circle>\r
                                    <rect x="548" y="225" width="10" height="26" rx="3" fill="rgba(255,255,255,0.3)" />\r
                                </g>\r
                                <g stroke="rgba(255,255,255,0.22)" stroke-width="1.2" stroke-dasharray="5 5">\r
                                    <line x1="307" y1="140" x2="165" y2="145">\r
                                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s"\r
                                            repeatCount="indefinite" />\r
                                    </line>\r
                                    <line x1="307" y1="120" x2="420" y2="78">\r
                                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s"\r
                                            repeatCount="indefinite" />\r
                                    </line>\r
                                    <line x1="307" y1="150" x2="500" y2="170">\r
                                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.1s"\r
                                            repeatCount="indefinite" />\r
                                    </line>\r
                                    <line x1="307" y1="185" x2="490" y2="246">\r
                                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.6s"\r
                                            repeatCount="indefinite" />\r
                                    </line>\r
                                    <line x1="280" y1="195" x2="240" y2="210">\r
                                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.3s"\r
                                            repeatCount="indefinite" />\r
                                    </line>\r
                                </g>\r
                            </svg>\r
                        </div>\r
                    </div>\r
                </a>\r
\r
                <!-- Full-cycle development -->\r
                <a href="#" class="wwd-card full-bg" data-service-key="full-cycle">\r
                    <div class="wwd-inner">\r
                        <div class="wwd-ttl">Full-cycle development</div>\r
                        <div class="lm-btn"><span>Learn more</span>\r
                            <div class="lm-circle"><svg viewBox="0 0 12 12" fill="none">\r
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"\r
                                        stroke-linejoin="round" />\r
                                </svg></div>\r
                        </div>\r
                        <div class="wwd-illustration">\r
                            <svg viewBox="0 0 340 220" fill="none" preserveAspectRatio="xMaxYMid meet">\r
                                <g style="animation:floatY 3.2s ease-in-out infinite">\r
                                    <rect x="20" y="18" width="240" height="155" rx="10" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <rect x="30" y="28" width="220" height="125" rx="5" fill="rgba(255,255,255,0.2)" />\r
                                    <rect x="42" y="44" width="80" height="7" rx="3" fill="rgba(255,255,255,0.55)" />\r
                                    <rect x="42" y="58" width="55" height="6" rx="3" fill="rgba(255,255,255,0.38)" />\r
                                    <rect x="42" y="71" width="95" height="6" rx="3" fill="rgba(255,255,255,0.38)" />\r
                                    <rect x="42" y="84" width="65" height="6" rx="3" fill="rgba(255,255,255,0.28)" />\r
                                    <rect x="42" y="97" width="110" height="6" rx="3" fill="rgba(255,255,255,0.28)" />\r
                                    <rect x="160" y="44" width="78" height="98" rx="4" fill="rgba(255,255,255,0.15)" />\r
                                    <polyline points="165,126 180,105 195,114 210,92 225,99 235,80"\r
                                        stroke="rgba(255,255,255,0.7)" stroke-width="2" fill="none" />\r
                                    <path d="M0 173 L280 173 L300 185 L-20 185 Z" fill="rgba(255,255,255,0.15)"\r
                                        stroke="rgba(255,255,255,0.3)" stroke-width="1" />\r
                                </g>\r
                                <g style="animation:floatY2 3.7s ease-in-out infinite">\r
                                    <rect x="240" y="40" width="70" height="130" rx="12" fill="rgba(255,255,255,0.25)"\r
                                        stroke="rgba(255,255,255,0.5)" stroke-width="1.5" />\r
                                    <rect x="249" y="55" width="52" height="84" rx="4" fill="rgba(255,255,255,0.25)" />\r
                                    <rect x="255" y="63" width="40" height="5" rx="2" fill="rgba(255,255,255,0.5)" />\r
                                    <rect x="255" y="73" width="28" height="5" rx="2" fill="rgba(255,255,255,0.35)" />\r
                                    <circle cx="275" cy="155" r="5" fill="rgba(255,255,255,0.45)" />\r
                                </g>\r
                            </svg>\r
                        </div>\r
                    </div>\r
                </a>\r
\r
                <!-- eCommerce -->\r
                <a href="#" class="wwd-card ecom-bg" data-service-key="ecommerce">\r
                    <div class="wwd-inner">\r
                        <div class="wwd-ttl">eCommerce platform development</div>\r
                        <div class="lm-btn"><span>Learn more</span>\r
                            <div class="lm-circle"><svg viewBox="0 0 12 12" fill="none">\r
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"\r
                                        stroke-linejoin="round" />\r
                                </svg></div>\r
                        </div>\r
                        <div class="wwd-illustration">\r
                            <svg viewBox="0 0 340 220" fill="none" preserveAspectRatio="xMaxYMid meet">\r
                                <g style="animation:floatY 3.4s ease-in-out infinite">\r
                                    <rect x="50" y="20" width="200" height="140" rx="10" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <rect x="60" y="30" width="180" height="110" rx="4" fill="rgba(255,255,255,0.18)" />\r
                                    <rect x="90" y="88" width="58" height="22" rx="11" fill="rgba(255,255,255,0.75)" />\r
                                    <text x="119" y="103" text-anchor="middle" font-size="9" font-weight="700"\r
                                        fill="#c8a26a" font-family="Inter,sans-serif">BUY</text>\r
                                    <rect x="66" y="38" width="52" height="40" rx="4" fill="rgba(255,255,255,0.15)" />\r
                                    <rect x="124" y="38" width="52" height="40" rx="4" fill="rgba(255,255,255,0.15)" />\r
                                    <rect x="182" y="38" width="52" height="40" rx="4" fill="rgba(255,255,255,0.15)" />\r
                                    <rect x="66" y="84" width="16" height="3" rx="1" fill="rgba(255,255,255,0.35)" />\r
                                    <rect x="66" y="90" width="22" height="3" rx="1" fill="rgba(255,255,255,0.25)" />\r
                                    <rect x="135" y="160" width="30" height="16" rx="3" fill="rgba(255,255,255,0.2)" />\r
                                    <rect x="118" y="175" width="64" height="8" rx="4" fill="rgba(255,255,255,0.2)" />\r
                                    <g style="animation:floatY2 2.5s ease-in-out infinite">\r
                                        <path d="M148 82 L155 96 L152 93 L150 100 L147 97 L149 90 L144 93 Z"\r
                                            fill="rgba(255,255,255,0.9)" />\r
                                    </g>\r
                                </g>\r
                                <g style="animation:floatY2 3.8s ease-in-out infinite">\r
                                    <path d="M220 90 L240 90 L250 150 L210 150 Z" fill="rgba(255,255,255,0.28)"\r
                                        stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />\r
                                    <path d="M215 86 L220 90" stroke="rgba(255,255,255,0.55)" stroke-width="2"\r
                                        stroke-linecap="round" />\r
                                    <line x1="212" y1="112" x2="248" y2="112" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <line x1="214" y1="128" x2="247" y2="128" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <circle cx="216" cy="156" r="6" fill="rgba(255,255,255,0.55)"\r
                                        stroke="rgba(255,255,255,0.8)" stroke-width="1.5" />\r
                                    <circle cx="244" cy="156" r="6" fill="rgba(255,255,255,0.55)"\r
                                        stroke="rgba(255,255,255,0.8)" stroke-width="1.5" />\r
                                </g>\r
                            </svg>\r
                        </div>\r
                    </div>\r
                </a>\r
\r
                <!-- Blockchain -->\r
                <a href="#" class="wwd-card bc-bg" data-service-key="blockchain">\r
                    <div class="wwd-inner">\r
                        <div class="wwd-ttl">Blockchain development</div>\r
                        <div class="lm-btn"><span>Learn more</span>\r
                            <div class="lm-circle"><svg viewBox="0 0 12 12" fill="none">\r
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"\r
                                        stroke-linejoin="round" />\r
                                </svg></div>\r
                        </div>\r
                        <div class="wwd-illustration">\r
                            <svg viewBox="0 0 340 220" fill="none" preserveAspectRatio="xMaxYMid meet">\r
                                <path\r
                                    d="M0,160 C40,140 80,170 120,150 C160,130 200,160 240,145 C280,130 320,155 340,150 L340,220 L0,220Z"\r
                                    fill="rgba(255,255,255,0.06)" />\r
                                <g style="animation:floatY2 3.5s ease-in-out infinite">\r
                                    <rect x="140" y="15" width="100" height="195" rx="18" fill="rgba(255,255,255,0.2)"\r
                                        stroke="rgba(255,255,255,0.5)" stroke-width="1.8" />\r
                                    <rect x="170" y="27" width="40" height="12" rx="6" fill="rgba(0,0,0,0.35)" />\r
                                    <rect x="150" y="46" width="80" height="128" rx="4" fill="rgba(255,255,255,0.2)" />\r
                                    <polyline points="156,148 166,128 176,138 186,110 196,118 206,98 216,108 222,96"\r
                                        stroke="rgba(255,255,255,0.85)" stroke-width="2" fill="none" />\r
                                    <polyline\r
                                        points="156,148 166,128 176,138 186,110 196,118 206,98 216,108 222,96 222,160 156,160"\r
                                        fill="rgba(255,255,255,0.08)" />\r
                                    <line x1="156" y1="90" x2="156" y2="162" stroke="rgba(255,255,255,0.25)"\r
                                        stroke-width="1" />\r
                                    <line x1="156" y1="162" x2="224" y2="162" stroke="rgba(255,255,255,0.25)"\r
                                        stroke-width="1" />\r
                                    <rect x="168" y="195" width="44" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />\r
                                </g>\r
                            </svg>\r
                        </div>\r
                    </div>\r
                </a>\r
\r
                <!-- AI Development -->\r
                <a href="#" class="wwd-card ai-bg" data-service-key="ai">\r
                    <div class="wwd-inner">\r
                        <div class="wwd-ttl">Ai Development Services</div>\r
                        <div class="lm-btn"><span>Learn more</span>\r
                            <div class="lm-circle"><svg viewBox="0 0 12 12" fill="none">\r
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"\r
                                        stroke-linejoin="round" />\r
                                </svg></div>\r
                        </div>\r
                        <div class="wwd-illustration">\r
                            <svg viewBox="0 0 340 220" fill="none" preserveAspectRatio="xMaxYMid meet">\r
                                <g style="animation:floatY 3.3s ease-in-out infinite">\r
                                    <rect x="60" y="20" width="240" height="165" rx="14" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.5)" stroke-width="1.8" />\r
                                    <rect x="74" y="32" width="212" height="130" rx="5" fill="rgba(255,255,255,0.2)" />\r
                                    <path\r
                                        d="M78 80 Q100 65 122 80 Q144 95 166 80 Q188 65 210 80 Q232 95 254 80 Q270 72 282 78"\r
                                        stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none" />\r
                                    <path\r
                                        d="M78 100 Q100 85 122 100 Q144 115 166 100 Q188 85 210 100 Q232 115 254 100 Q270 92 282 98"\r
                                        stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none" />\r
                                    <path\r
                                        d="M78 120 Q100 105 122 120 Q144 135 166 120 Q188 105 210 120 Q232 135 254 120 Q270 112 282 118"\r
                                        stroke="rgba(255,255,255,0.4)" stroke-width="1" fill="none" />\r
                                    <path\r
                                        d="M78 140 Q100 125 122 140 Q144 155 166 140 Q188 125 210 140 Q232 155 254 140 Q270 132 282 138"\r
                                        stroke="rgba(255,255,255,0.35)" stroke-width="1" fill="none" />\r
                                    <path d="M104 65 Q100 85 104 100 Q108 115 104 135 Q100 150 104 158"\r
                                        stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none" />\r
                                    <path d="M146 65 Q142 85 146 100 Q150 115 146 135 Q142 150 146 158"\r
                                        stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none" />\r
                                    <path d="M188 65 Q184 85 188 100 Q192 115 188 135 Q184 150 188 158"\r
                                        stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none" />\r
                                    <path d="M230 65 Q226 85 230 100 Q234 115 230 135 Q226 150 230 158"\r
                                        stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none" />\r
                                    <polyline points="78,134 104,102 130,120 156,88 182,100 208,74 234,90 260,72 282,80"\r
                                        stroke="rgba(255,255,255,0.9)" stroke-width="2.5" fill="none" />\r
                                    <circle cx="156" cy="88" r="5" fill="rgba(255,255,255,0.9)">\r
                                        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />\r
                                    </circle>\r
                                    <circle cx="208" cy="74" r="5" fill="rgba(255,255,255,0.9)">\r
                                        <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />\r
                                    </circle>\r
                                </g>\r
                            </svg>\r
                        </div>\r
                    </div>\r
                </a>\r
\r
                <!-- Fintech - full width -->\r
                <a href="#" class="wwd-card full fintech-bg" data-service-key="fintech">\r
                    <div class="wwd-inner">\r
                        <div class="wwd-ttl">Fintech Software Development Services</div>\r
                        <div class="lm-btn"><span>Learn more</span>\r
                            <div class="lm-circle"><svg viewBox="0 0 12 12" fill="none">\r
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"\r
                                        stroke-linejoin="round" />\r
                                </svg></div>\r
                        </div>\r
                        <div class="wwd-illustration">\r
                            <svg viewBox="0 0 700 280" fill="none" preserveAspectRatio="xMaxYMid meet">\r
                                <rect x="380" y="90" width="38" height="150" rx="5" fill="rgba(255,255,255,0.15)" />\r
                                <rect x="428" y="60" width="38" height="180" rx="5" fill="rgba(255,255,255,0.18)" />\r
                                <rect x="476" y="40" width="38" height="200" rx="5" fill="rgba(255,255,255,0.22)" />\r
                                <rect x="524" y="75" width="38" height="165" rx="5" fill="rgba(255,255,255,0.18)" />\r
                                <rect x="572" y="30" width="38" height="210" rx="5" fill="rgba(255,255,255,0.26)" />\r
                                <rect x="620" y="55" width="38" height="185" rx="5" fill="rgba(255,255,255,0.2)" />\r
                                <g style="animation:floatY2 3.4s ease-in-out infinite">\r
                                    <path d="M170 60 L310 60 L310 175 L170 175 Z" fill="rgba(255,255,255,0.22)"\r
                                        stroke="rgba(255,255,255,0.45)" stroke-width="1.5" />\r
                                    <path d="M178 70 L302 70 L302 165 L178 165 Z" fill="rgba(255,255,255,0.2)" />\r
                                    <rect x="184" y="78" width="110" height="8" rx="3" fill="rgba(255,255,255,0.5)" />\r
                                    <rect x="184" y="92" width="76" height="6" rx="3" fill="rgba(255,255,255,0.3)" />\r
                                    <polyline points="184,148 200,132 216,140 232,120 248,128 264,110 280,118 296,108"\r
                                        stroke="rgba(255,255,255,0.7)" stroke-width="1.8" fill="none" />\r
                                    <polyline\r
                                        points="184,148 200,132 216,140 232,120 248,128 264,110 280,118 296,108 296,160 184,160"\r
                                        fill="rgba(255,255,255,0.08)" />\r
                                    <path d="M130 175 L350 175 L370 190 L110 190 Z" fill="rgba(255,255,255,0.2)"\r
                                        stroke="rgba(255,255,255,0.35)" stroke-width="1" />\r
                                </g>\r
                                <g style="animation:floatY 3.8s ease-in-out infinite">\r
                                    <rect x="190" y="192" width="160" height="100" rx="14" fill="rgba(255,255,255,0.28)"\r
                                        stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />\r
                                    <rect x="210" y="212" width="32" height="24" rx="4" fill="rgba(255,255,255,0.5)" />\r
                                    <line x1="218" y1="212" x2="218" y2="236" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <line x1="226" y1="212" x2="226" y2="236" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <line x1="234" y1="212" x2="234" y2="236" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <line x1="210" y1="220" x2="242" y2="220" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <line x1="210" y1="228" x2="242" y2="228" stroke="rgba(255,255,255,0.3)"\r
                                        stroke-width="1" />\r
                                    <rect x="210" y="246" width="120" height="7" rx="3" fill="rgba(255,255,255,0.35)" />\r
                                    <rect x="210" y="258" width="80" height="6" rx="3" fill="rgba(255,255,255,0.25)" />\r
                                </g>\r
                                <g style="animation:floatY2 4s ease-in-out infinite">\r
                                    <rect x="96" y="70" width="84" height="170" rx="16" fill="rgba(255,255,255,0.25)"\r
                                        stroke="rgba(255,255,255,0.5)" stroke-width="1.8" />\r
                                    <rect x="105" y="86" width="66" height="128" rx="5" fill="rgba(255,255,255,0.22)" />\r
                                    <rect x="112" y="95" width="52" height="7" rx="3" fill="rgba(255,255,255,0.45)" />\r
                                    <rect x="112" y="108" width="36" height="6" rx="3" fill="rgba(255,255,255,0.3)" />\r
                                    <rect x="138" y="228" width="32" height="6" rx="3" fill="rgba(255,255,255,0.4)" />\r
                                </g>\r
                            </svg>\r
                        </div>\r
                    </div>\r
                </a>\r
\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- SERVICES -->\r
    <section class="svc-sec" id="sec-services">\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">Services</h2>\r
            </div>\r
            <div class="svc-layout">\r
                <div class="svc-img" id="svcImg">\r
                    <svg width="440" height="340" viewBox="0 0 440 340" fill="none" id="svcSvg">\r
                        <rect x="40" y="30" width="300" height="200" rx="14" fill="#c8daf0" />\r
                        <rect x="55" y="50" width="190" height="150" rx="7" fill="#9bbad8" />\r
                        <rect x="255" y="50" width="74" height="60" rx="7" fill="#9bbad8" />\r
                        <rect x="255" y="120" width="74" height="50" rx="7" fill="#afc8e2" />\r
                        <g style="animation:floatY 3s ease-in-out infinite">\r
                            <rect x="130" y="215" width="70" height="120" rx="12" fill="#b5ccdf" stroke="#9bbad8"\r
                                stroke-width="1.5" />\r
                            <rect x="140" y="230" width="50" height="80" rx="4" fill="#ccdff0" />\r
                            <circle cx="165" cy="320" r="5" fill="#9bbad8" />\r
                        </g>\r
                        <rect x="64" y="62" width="110" height="10" rx="4" fill="rgba(255,255,255,0.55)" />\r
                        <rect x="64" y="80" width="75" height="7" rx="3" fill="rgba(255,255,255,0.38)" />\r
                        <rect x="64" y="95" width="100" height="7" rx="3" fill="rgba(255,255,255,0.38)" />\r
                        <rect x="64" y="110" width="60" height="7" rx="3" fill="rgba(255,255,255,0.28)" />\r
                    </svg>\r
                </div>\r
                <div class="svc-list">\r
                    <div class="svc-item open" onclick="openSvc(this,0)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <rect x="1" y="2" width="16" height="13" rx="2.5" stroke="#1673FF"\r
                                            stroke-width="1.5" />\r
                                        <line x1="1" y1="7" x2="17" y2="7" stroke="#1673FF" stroke-width="1.2" />\r
                                        <circle cx="4" cy="4.5" r=".9" fill="#1673FF" />\r
                                        <circle cx="7" cy="4.5" r=".9" fill="#1673FF" />\r
                                    </svg></div><span class="svc-name">Web and Mobile Development</span>\r
                            </div><span class="svc-tog">−</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <p>Build a modern application tailored to your needs:</p>\r
                            <ul>\r
                                <li>Turnkey development with every aspect handled by our specialists.</li>\r
                                <li>Active collaboration working alongside your in-house team.</li>\r
                                <li>PoC and MVP creation to validate your ideas.</li>\r
                                <li>Development processes setup and deployment.</li>\r
                            </ul><a href="#" class="svc-link">Start building your app <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                    <div class="svc-item" onclick="openSvc(this,1)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <rect x="1" y="1" width="16" height="16" rx="3" stroke="#1673FF"\r
                                            stroke-width="1.5" />\r
                                        <path d="M4 9l3 3 6-6" stroke="#1673FF" stroke-width="1.5"\r
                                            stroke-linecap="round" stroke-linejoin="round" />\r
                                    </svg></div><span class="svc-name">DevOps Solutions</span>\r
                            </div><span class="svc-tog">+</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <ul>\r
                                <li>Cloud solutions: AWS, GCP, and Azure.</li>\r
                                <li>Comprehensive CI/CD pipeline setup.</li>\r
                                <li>Interactive dashboard configuration for monitoring.</li>\r
                            </ul><a href="#" class="svc-link">Optimize your processes <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                    <div class="svc-item" onclick="openSvc(this,2)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <polygon points="9,1.5 16.5,5.5 16.5,12.5 9,16.5 1.5,12.5 1.5,5.5"\r
                                            stroke="#1673FF" stroke-width="1.5" fill="none" />\r
                                        <circle cx="9" cy="9" r="3" stroke="#1673FF" stroke-width="1.2" />\r
                                    </svg></div><span class="svc-name">Architecture Design</span>\r
                            </div><span class="svc-tog">+</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <ul>\r
                                <li>Research of your business and product domain.</li>\r
                                <li>Consultations for technology selection.</li>\r
                                <li>Technical documentation and due diligence.</li>\r
                            </ul><a href="#" class="svc-link">Design your architecture <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                    <div class="svc-item" onclick="openSvc(this,3)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <circle cx="9" cy="9" r="7" stroke="#1673FF" stroke-width="1.5" />\r
                                        <path d="M9 5v4l3 2" stroke="#1673FF" stroke-width="1.5"\r
                                            stroke-linecap="round" />\r
                                    </svg></div><span class="svc-name">PoC, Prototype, MVP</span>\r
                            </div><span class="svc-tog">+</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <ul>\r
                                <li>PoC development to demonstrate feasibility.</li>\r
                                <li>Prototype development to test key features.</li>\r
                                <li>MVP development to gather real-world feedback.</li>\r
                            </ul><a href="#" class="svc-link">Validate your idea <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                    <div class="svc-item" onclick="openSvc(this,4)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <path d="M2 14l5-5 3 3 6-8" stroke="#1673FF" stroke-width="1.5"\r
                                            stroke-linecap="round" stroke-linejoin="round" />\r
                                    </svg></div><span class="svc-name">QA &amp; Testing</span>\r
                            </div><span class="svc-tog">+</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <ul>\r
                                <li>Manual and automated testing to identify defects early.</li>\r
                                <li>Performance evaluations for top-notch user experience.</li>\r
                                <li>Security audits for reliable releases.</li>\r
                            </ul><a href="#" class="svc-link">Refine your app <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                    <div class="svc-item" onclick="openSvc(this,5)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <rect x="2" y="2" width="14" height="14" rx="3" stroke="#1673FF"\r
                                            stroke-width="1.5" />\r
                                        <circle cx="9" cy="9" r="3" stroke="#1673FF" stroke-width="1.2" />\r
                                        <line x1="9" y1="2" x2="9" y2="5" stroke="#1673FF" stroke-width="1.2" />\r
                                        <line x1="9" y1="13" x2="9" y2="16" stroke="#1673FF" stroke-width="1.2" />\r
                                        <line x1="2" y1="9" x2="5" y2="9" stroke="#1673FF" stroke-width="1.2" />\r
                                        <line x1="13" y1="9" x2="16" y2="9" stroke="#1673FF" stroke-width="1.2" />\r
                                    </svg></div><span class="svc-name">UX/UI Design</span>\r
                            </div><span class="svc-tog">+</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <ul>\r
                                <li>User research, benchmarking, competitive analysis.</li>\r
                                <li>Data analytics, customer feedback collection.</li>\r
                                <li>Full cycle product design from discovery to testing.</li>\r
                            </ul><a href="#" class="svc-link">Create your design <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                    <div class="svc-item" onclick="openSvc(this,6)">\r
                        <div class="svc-head">\r
                            <div class="svc-left">\r
                                <div class="svc-ico"><svg viewBox="0 0 18 18" fill="none" width="18" height="18">\r
                                        <path d="M3 5h12M3 9h8M3 13h10" stroke="#1673FF" stroke-width="1.5"\r
                                            stroke-linecap="round" />\r
                                    </svg></div><span class="svc-name">BA</span>\r
                            </div><span class="svc-tog">+</span>\r
                        </div>\r
                        <div class="svc-body">\r
                            <ul>\r
                                <li>Create roadmaps for your strategies.</li>\r
                                <li>Identifying non-functional and functional requirements.</li>\r
                            </ul><a href="#" class="svc-link">Build your strategy <span class="arr-sm"></span></a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- CASE STUDIES -->\r
    <section id="sec-cases">\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">Case studies</h2><a href="#" class="btn-blue">Browse More</a>\r
            </div>\r
            <div class="cases-grid">\r
                <a href="#" class="case-card">\r
                    <div class="case-img">\r
                        <svg width="100%" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"\r
                            preserveAspectRatio="xMidYMid slice">\r
                            <defs>\r
                                <linearGradient id="csg1" x1="0" y1="0" x2="1" y2="1">\r
                                    <stop offset="0%" stop-color="#1c2952" />\r
                                    <stop offset="100%" stop-color="#2d4080" />\r
                                </linearGradient>\r
                            </defs>\r
                            <rect width="600" height="300" fill="url(#csg1)" />\r
                            <rect x="60" y="40" width="100" height="210" rx="14" fill="#233060" stroke="#3a5090"\r
                                stroke-width="1.2" />\r
                            <rect x="70" y="58" width="80" height="155" rx="5" fill="#1a2550" />\r
                            <rect x="200" y="20" width="110" height="235" rx="15" fill="#283468" stroke="#4060a0"\r
                                stroke-width="1.2" />\r
                            <rect x="212" y="38" width="86" height="178" rx="5" fill="#1e2d5a" />\r
                            <rect x="358" y="45" width="100" height="210" rx="14" fill="#233060" stroke="#3a5090"\r
                                stroke-width="1.2" />\r
                            <rect x="368" y="63" width="80" height="155" rx="5" fill="#1a2550" />\r
                            <rect x="76" y="66" width="68" height="8" rx="3" fill="#3a5090" opacity=".7" />\r
                            <rect x="76" y="80" width="48" height="40" rx="4" fill="#2e4070" opacity=".6" />\r
                            <rect x="130" y="80" width="20" height="40" rx="4" fill="#2e4070" opacity=".5" />\r
                            <rect x="218" y="50" width="74" height="8" rx="3" fill="#4060a8" opacity=".8" />\r
                            <rect x="218" y="64" width="50" height="8" rx="3" fill="#3550a0" opacity=".5" />\r
                            <path d="M228 130 L268 125 L275 135 L270 148 L228 148 L222 138 Z" fill="#4a70c0"\r
                                opacity=".6" />\r
                            <circle cx="232" cy="150" r="6" fill="#5080d0" opacity=".7" />\r
                            <circle cx="262" cy="150" r="6" fill="#5080d0" opacity=".7" />\r
                        </svg>\r
                    </div>\r
                    <div class="case-body">\r
                        <div class="case-ttl">Marketplace for AMG races</div>\r
                        <div class="case-desc">Race Scout case study - Online race car rental platform for Team\r
                            Managers, Drivers and Petrolheads</div>\r
                        <span class="case-link">Learn more... <span class="arr-sm"></span></span>\r
                    </div>\r
                </a>\r
                <a href="#" class="case-card">\r
                    <div class="case-img">\r
                        <svg width="100%" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg"\r
                            preserveAspectRatio="xMidYMid slice">\r
                            <defs>\r
                                <linearGradient id="csg2" x1="0" y1="0" x2="1" y2="1">\r
                                    <stop offset="0%" stop-color="#0c1d34" />\r
                                    <stop offset="100%" stop-color="#143a5c" />\r
                                </linearGradient>\r
                            </defs>\r
                            <rect width="600" height="300" fill="url(#csg2)" />\r
                            <rect x="30" y="25" width="540" height="250" rx="12" fill="#0d2338" stroke="#1a4060"\r
                                stroke-width="1" />\r
                            <rect x="30" y="25" width="540" height="36" rx="12" fill="#0a1c2e" />\r
                            <rect x="40" y="35" width="60" height="14" rx="3" fill="#1a5080" opacity=".8" />\r
                            <text x="42" y="46" font-size="8" font-weight="700" fill="#5ab0e0"\r
                                font-family="Inter,sans-serif">2SMART</text>\r
                            <rect x="36" y="68" width="90" height="10" rx="3" fill="#1a3a5a" opacity=".8" />\r
                            <rect x="36" y="84" width="70" height="8" rx="3" fill="#1a3a5a" opacity=".55" />\r
                            <rect x="36" y="98" width="80" height="8" rx="3" fill="#1a3a5a" opacity=".55" />\r
                            <rect x="36" y="112" width="60" height="8" rx="3" fill="#1a3a5a" opacity=".4" />\r
                            <rect x="140" y="65" width="180" height="68" rx="8" fill="#0e2c46" stroke="#1a4060"\r
                                stroke-width="1" />\r
                            <rect x="150" y="78" width="95" height="8" rx="3" fill="#2a6080" opacity=".7" />\r
                            <rect x="295" y="80" width="24" height="14" rx="7" fill="#1a4060" />\r
                            <rect x="308" y="83" width="8" height="8" rx="4" fill="#4ae8b8" />\r
                            <rect x="140" y="142" width="180" height="68" rx="8" fill="#0e2c46" stroke="#1a4060"\r
                                stroke-width="1" />\r
                            <rect x="150" y="155" width="110" height="8" rx="3" fill="#2a6080" opacity=".6" />\r
                            <rect x="295" y="156" width="24" height="14" rx="7" fill="#1a4060" />\r
                            <rect x="298" y="159" width="8" height="8" rx="4" fill="#2a5070" />\r
                            <rect x="336" y="65" width="224" height="68" rx="8" fill="#0e2c46" stroke="#1a4060"\r
                                stroke-width="1" />\r
                            <text x="440" y="105" text-anchor="middle" font-size="26" font-weight="800" fill="#4ae8b8"\r
                                font-family="Inter,sans-serif">24°C</text>\r
                            <rect x="336" y="142" width="224" height="68" rx="8" fill="#0e2c46" stroke="#1a4060"\r
                                stroke-width="1" />\r
                            <rect x="346" y="155" width="80" height="8" rx="3" fill="#2a6080" opacity=".6" />\r
                            <polyline\r
                                points="346,195 366,180 386,188 406,172 426,178 446,165 466,170 486,158 506,162 546,155"\r
                                stroke="#4ae8b8" stroke-width="1.5" fill="none" opacity=".7" />\r
                        </svg>\r
                    </div>\r
                    <div class="case-body">\r
                        <div class="case-ttl">2Smart Standalone – Developing an Intelligent IoT Building Automation\r
                            System</div>\r
                        <div class="case-desc">Architecture framework for building a business in various areas of IoT\r
                        </div>\r
                        <span class="case-link">Learn more... <span class="arr-sm"></span></span>\r
                    </div>\r
                </a>\r
            </div>\r
            <div class="sec-btn-row"><a href="#" class="btn-blue">Browse More</a></div>\r
        </div>\r
    </section>\r
\r
    <!-- CTA BANNER -->\r
    <div class="cta-sec">\r
        <div class="cta-inner">\r
            <div class="cta-txt">Launching a new project or improving an existing one?<br>We can bring your ideas to\r
                life!</div>\r
            <a href="contactus.html#form-section" class="btn-outline-w">Get in touch</a>\r
        </div>\r
    </div>\r
\r
    <!-- MAP -->\r
    <section class="map-sec" id="sec-map">\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd"><h2 class="sec-title">Our clients and partners on the map</h2></div>\r
            <div id="clientsMap" style="height:520px;width:100%;border-radius:16px;overflow:hidden;border:1px solid #e2eaf4;box-shadow:0 8px 32px rgba(22,115,255,.08)"></div>\r
            <p id="mapEmpty" style="display:none;color:#5f7089;text-align:center;margin-top:16px">No map locations added yet. Add real client locations from the admin panel.</p>\r
        </div>\r
    </section>\r
\r
    <!-- CLIENT FEEDBACK -->\r
    <section class="fb-sec" id="sec-feedback">\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">Client feedback</h2>\r
            </div>\r
            <div class="fb-wrap">\r
                <div class="fb-card">\r
                    <div class="fb-hd">\r
                        <div class="fb-init" id="fbInit">AM</div>\r
                        <div>\r
                            <div class="fb-name" id="fbName">Andrew Muir Wood</div>\r
                            <div class="fb-role" id="fbRole">Growth and Product Lead, Prix</div>\r
                        </div>\r
                    </div>\r
                    <div class="fb-txt" id="fbTxt">Sakinzo expedited the launch of the platform, which was ready for\r
                        customers in a matter of months. The team is adept at prioritizing tasks and turning ideas into\r
                        actionable steps. Clients can expect superior project management and communication skills from\r
                        Sakinzo.</div>\r
                    <a href="#" class="fb-cl-link">Read more at Clutch <span class="arr-sm"></span></a>\r
                </div>\r
                <div class="fb-controls">\r
                    <button class="fb-arrow" onclick="fbPrev()">←</button>\r
                    <div class="fb-dots" id="fbDots"></div>\r
                    <div class="fb-prog">\r
                        <div class="fb-prog-fill" id="fbFill" style="width:16.67%"></div>\r
                    </div>\r
                    <button class="fb-arrow" onclick="fbNext()">→</button>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
    <!-- INSIGHTS -->\r
    <section id="sec-insights">\r
        <div class="wrap sec reveal">\r
            <div class="sec-hd">\r
                <h2 class="sec-title">Insights from Sakinzo</h2><a href="blog.html" class="btn-blue">Browse More</a>\r
            </div>\r
            <div class="ins-grid" id="main-insights-grid">\r
                <div class="ins-card">\r
                    <div class="ins-ttl">Basic Security Testing for Web Applications: Tools, Techniques, and Best\r
                        Practices</div>\r
                    <div class="ins-desc">The guide covers the most common security vulnerabilities, testing tools, best\r
                        practices and offers solutions to protect applications from potential threats.</div>\r
                    <div class="ins-ft"><span class="ins-date">April 2, 2025</span><span class="ins-rating"><span\r
                                class="star-ic">★</span> Avg 4.6 / 5</span></div>\r
                    <a href="#" class="ins-lnk">Learn more <span class="arr-sm"></span></a>\r
                </div>\r
                <div class="ins-card">\r
                    <div class="ins-ttl">How to Manage a Project Step by Step</div>\r
                    <div class="ins-desc">Do you know that only 26% of IT projects are completed on time and budget, 46%\r
                        are late or over budget, and 28% fail? Our guide helps you beat the odds.</div>\r
                    <div class="ins-ft"><span class="ins-date">September 25, 2023</span><span class="ins-rating"><span\r
                                class="star-ic">★</span> Avg 4.2 / 5</span></div>\r
                    <a href="#" class="ins-lnk">Learn more <span class="arr-sm"></span></a>\r
                </div>\r
            </div>\r
            <div class="sec-btn-row"><a href="blog.html" class="btn-blue">Browse More</a></div>\r
        </div>\r
    </section>\r
\r
    <!-- FOOTER -->\r
    <footer id="contact">\r
        <div class="ft-top">\r
            <form class="contact-box" id="indexContactForm">\r
                <h3>Contact Us</h3>\r
                <div class="f-row">\r
                    <input class="f-inp" type="text" name="name" placeholder="Full Name*" required>\r
                    <input class="f-inp" type="email" name="email" placeholder="Email Address*" required>\r
                    <input class="f-inp" type="tel" name="phone" placeholder="Phone Number">\r
                    <input class="f-inp" type="text" name="company" placeholder="Company">\r
                </div>\r
                <input class="f-inp" type="text" name="desc" placeholder="Project Description*" style="margin-top:10px" required>\r
                <label class="f-attach" for="indexAttachment">\r
                    <input id="indexAttachment" type="file" accept=".png,.jpg,.jpeg,.xlsx,.doc,.docx,.pdf" style="display:none">\r
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">\r
                        <path\r
                            d="M13 7.5L7.5 13C6 14.5 3.5 14.5 2 13C.5 11.5 .5 9 2 7.5L8.5 1C9.5 0 11 0 12 1C13 2 13 3.5 12 4.5L5.5 11C5 11.5 4.5 11.5 4 11C3.5 10.5 3.5 10 4 9.5L10 3.5"\r
                            stroke="rgba(255,255,255,0.65)" stroke-width="1.5" stroke-linecap="round" />\r
                    </svg>\r
                    <span id="indexAttachLabel">Add an attachment</span>\r
                </label>\r
                <div class="f-chk"><input type="checkbox" name="consent" required><span>I consent to the processing of my data and receiving\r
                        marketing communications under the <a href="#">Sakinzo Privacy Policy</a>.</span></div>\r
                <button class="f-sub" type="submit">Send Request</button>\r
            </form>\r
            <div class="ft-info">\r
                <div class="ft-logo">\r
                    <svg width="34" height="34" viewBox="0 0 36 36" fill="none">\r
                        <path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF" />\r
                        <path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85" />\r
                        <path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,0.3)" />\r
                    </svg>\r
                    <span class="ft-logo-txt">Sakin<span>.zo</span></span>\r
                </div>\r
                <div class="ft-lbl">Our Offices</div>\r
                <address class="ft-addr">\r
                    India | Mharashtra | Pune<br>\r
\r
                </address>\r
                <hr class="ft-hr">\r
                <div class="ft-socials">\r
                    <a href="#" class="s-ic"><svg width="13" height="13" viewBox="0 0 13 13" fill="none">\r
                            <path\r
                                d="M6.5 1a5.5 5.5 0 100 11A5.5 5.5 0 006.5 1zM4.5 6.5V11M7 4.5H5A1 1 0 005 6.5h1.5a1 1 0 010 2H4"\r
                                stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />\r
                        </svg></a>\r
                    <a href="#" class="s-ic"><svg width="13" height="13" viewBox="0 0 13 13" fill="none">\r
                            <rect x="2" y="2" width="9" height="9" rx="2.5" stroke="currentColor" stroke-width="1.2" />\r
                            <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" stroke-width="1.2" />\r
                            <circle cx="9.5" cy="3.5" r=".7" fill="currentColor" />\r
                        </svg></a>\r
                    <a href="#" class="s-ic"><svg width="13" height="13" viewBox="0 0 13 13" fill="none">\r
                            <rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.2" />\r
                            <path d="M4 9V5.5M4 3.5v.5M7 9V7A1.5 1.5 0 0110 8.5V9M7 7V5.5" stroke="currentColor"\r
                                stroke-width="1.2" stroke-linecap="round" />\r
                        </svg></a>\r
                    <a href="#" class="s-ic" style="font-size:9px;font-weight:800;letter-spacing:-.5px">dou</a>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="ft-nav">\r
            <div class="ft-nav-inner">\r
                <div class="ft-col">\r
                    <div class="ft-col-ttl" onclick="ftToggle(this)">Services<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.5)" stroke-width="1.8"\r
                                stroke-linecap="round" />\r
                        </svg></div>\r
                    <div class="ft-col-links"><a href="#">AI Development</a><a href="#">AI Agent Development</a><a\r
                            href="#">Fintech Software Development</a><a href="#">Blockchain Development</a><a\r
                            href="#">IoT Development Services</a><a href="#">IoT Smart Home Solutions</a><a\r
                            href="#">eCommerce Platform Development</a><a href="#">Full-cycle Development</a></div>\r
                </div>\r
                <div class="ft-col">\r
                    <div class="ft-col-ttl" onclick="ftToggle(this)">About Us<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.5)" stroke-width="1.8"\r
                                stroke-linecap="round" />\r
                        </svg></div>\r
                    <div class="ft-col-links"><a href="#">Who We Are</a><a href="#">Careers</a><a\r
                            href="#">Leadership</a><a href="#">News</a><a href="#">Opensource</a><a\r
                            href="#">Contacts</a></div>\r
                </div>\r
                <div class="ft-col">\r
                    <div class="ft-col-ttl" onclick="ftToggle(this)">Success Stories<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.5)" stroke-width="1.8"\r
                                stroke-linecap="round" />\r
                        </svg></div>\r
                    <div class="ft-col-links"><a href="#">Smart Automated A/C Drain Line Cleaner</a><a href="#">AI-Based\r
                            Market Access Planning Tool</a><a href="#">Cloud ecosystem for EV charging</a><a\r
                            href="#">IoT cloud platform</a><a href="#">KYC Onboarding Software</a><a\r
                            href="#">Multi-currency Wallet</a></div>\r
                </div>\r
                <div class="ft-col">\r
                    <div class="ft-col-ttl" onclick="ftToggle(this)">Blog<svg viewBox="0 0 10 6" fill="none">\r
                            <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.5)" stroke-width="1.8"\r
                                stroke-linecap="round" />\r
                        </svg></div>\r
                    <div class="ft-col-links"><a href="#">20 IoT Business Ideas &amp; Opportunities</a><a href="#">Smart\r
                            Home Automation Using IoT</a><a href="#">8 IoT Issues and Ways to Solve Them</a><a\r
                            href="#">IoT in Energy Management</a><a href="#">Raspberry Pi vs Arduino</a><a href="#">IoT\r
                            in Water Management</a></div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="ft-bar">\r
            <div class="ft-bar-inner">\r
                <span class="ft-copy">2026 SAKINZO LLC. All rights reserved.</span>\r
                <div class="ft-links"><a href="#">Privacy Policy</a><a href="#">Terms and conditions</a><a href="#">Web\r
                        Content Accessibility Policy</a><a href="#">Cookie Policy</a><a href="#">Sitemap</a></div>\r
            </div>\r
        </div>\r
    </footer>\r
\r
    <script>\r
        function ftToggle(el) {\r
            if (window.innerWidth > 600) return;\r
            const links = el.nextElementSibling;\r
            const isOpen = links.classList.toggle('ft-open');\r
            el.classList.toggle('ft-open', isOpen);\r
        }\r
\r
        const ham = document.getElementById('hamburger');\r
        const mobMenu = document.getElementById('mobileMenu');\r
        function closeMenu() {\r
            ham.classList.remove('open');\r
            mobMenu.classList.remove('open');\r
            document.body.style.overflow = '';\r
        }\r
        ham.addEventListener('click', () => {\r
            const isOpen = mobMenu.classList.toggle('open');\r
            ham.classList.toggle('open', isOpen);\r
            document.body.style.overflow = isOpen ? 'hidden' : '';\r
        });\r
        function toggleMobSub(el) {\r
            const sub = el.nextElementSibling;\r
            const isOpen = sub.classList.toggle('open');\r
            el.classList.toggle('active', isOpen);\r
        }\r
\r
        function openSvc(el, idx) {\r
            document.querySelectorAll('.svc-item').forEach(i => {\r
                i.classList.remove('open');\r
                i.querySelector('.svc-tog').textContent = '+';\r
            });\r
            el.classList.add('open');\r
            el.querySelector('.svc-tog').textContent = '−';\r
        }\r
\r
        // ── ADMIN DATA DEFAULTS (same as admin.html) ──────────────────\r
        const API_BASE = window.API_BASE || 'https://sakinzo.onrender.com/api';\r
        let WLDATA = { projects: [], insights: [], clients: [], team: [], testimonials: [], stats: [], sections: {}, mapLocations: [], whatWeDoServices: {} };\r
        const SITE_DATA_CACHE_KEY = 'sakinzo-site-data-v3';\r
        let feedbacks = [];\r
        let feedbackTimer;\r
        let clientsMapInstance;\r
        let fi = 0;\r
        const escapeHtml = (value = '') => String(value).replace(/[&<>"]/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s]));\r
        const fullUrl = (url = '') => url && url.startsWith('/uploads/') ? API_BASE.replace('/api','') + url : url;\r
        const safeHttpUrl = value => { try { const url=new URL(value); return ['http:','https:'].includes(url.protocol)?url.href:''; } catch { return ''; } };\r
\r
        // ── PROJECTS: render + "View All Projects" load-more ──────────\r
        let ALL_PROJECTS = [];\r
        let projectsShown = 6;\r
        const PROJECTS_PAGE_SIZE = 6;\r
\r
        window.projectImgError = function (img) {\r
            img.outerHTML = '<div class="project-img-fallback"><span style="color:rgba(255,255,255,.35);font-size:12px;font-weight:600;letter-spacing:.05em">NO IMAGE</span></div>';\r
        };\r
        function projectCardHtml(p) {\r
            const fallbackMarkup = \`<div class="project-img-fallback"><span style="color:rgba(255,255,255,.35);font-size:12px;font-weight:600;letter-spacing:.05em">NO IMAGE</span></div>\`;\r
            const imgTag = p.img\r
                ? \`<img src="\${fullUrl(p.img)}" alt="\${escapeHtml(p.title)}" class="project-img" loading="lazy" onerror="projectImgError(this)">\`\r
                : fallbackMarkup;\r
            return \`<a href="project.html?id=\${encodeURIComponent(p._id)}" class="project-card"><div class="project-media">\${imgTag}</div><div class="project-overlay"><span class="project-category">\${escapeHtml(p.category || '')}</span><h3 class="project-title">\${escapeHtml(p.title || '')}</h3><p class="project-desc">\${escapeHtml(p.desc || '')}</p><div class="project-tech">\${(p.tags || []).map(t => \`<span class="tech-tag">\${escapeHtml(t)}</span>\`).join('')}</div><span class="project-link">View project</span></div></a>\`;\r
        }\r
\r
        function renderProjects() {\r
            const grid = document.getElementById('main-projects-grid'); if (!grid) return;\r
            ALL_PROJECTS = (WLDATA.projects || []).filter(p => p.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0));\r
            if (!ALL_PROJECTS.length) { grid.innerHTML = '<p style="color:#999;text-align:center;padding:40px 0;grid-column:1/-1">No projects added yet.</p>'; toggleProjectsButtons(false); return; }\r
            projectsShown = Math.min(PROJECTS_PAGE_SIZE, ALL_PROJECTS.length);\r
            paintProjects();\r
        }\r
\r
        function paintProjects() {\r
            const grid = document.getElementById('main-projects-grid'); if (!grid) return;\r
            grid.innerHTML = ALL_PROJECTS.slice(0, projectsShown).map(projectCardHtml).join('');\r
            toggleProjectsButtons(ALL_PROJECTS.length > PROJECTS_PAGE_SIZE);\r
        }\r
\r
        function toggleProjectsButtons(hasMore) {\r
            document.querySelectorAll('.projects-view-all').forEach(btn => {\r
                if (!hasMore) { btn.style.display = 'none'; return; }\r
                btn.style.display = '';\r
                btn.textContent = projectsShown < ALL_PROJECTS.length ? 'View All Projects' : 'Show Less';\r
            });\r
        }\r
\r
        function handleProjectsViewAll(e) {\r
            e.preventDefault();\r
            if (projectsShown < ALL_PROJECTS.length) {\r
                projectsShown = ALL_PROJECTS.length;\r
            } else {\r
                projectsShown = Math.min(PROJECTS_PAGE_SIZE, ALL_PROJECTS.length);\r
                document.getElementById('sec-projects')?.scrollIntoView({ behavior: 'smooth' });\r
            }\r
            paintProjects();\r
        }\r
        window.handleProjectsViewAll = handleProjectsViewAll;\r
\r
        function renderStats() { const grid = document.getElementById('main-stats-grid'); if (!grid) return; const stats = (WLDATA.stats || []).filter(s => s.visible !== false).sort((a,b)=>(a.order||0)-(b.order||0)); if (!stats.length) return; grid.innerHTML = stats.map((s, i) => \`<div class="stat" \${i > 0 ? 'style="border-left:2px solid #e2eaf4;padding-left:32px"' : ''}><div class="stat-num">\${escapeHtml(s.value)}</div><div class="stat-lbl">\${escapeHtml(s.label)}</div></div>\`).join(''); }\r
        function renderClients() { const grid = document.getElementById('main-clients-grid') || document.querySelector('.clients-grid'); if (!grid) return; const clients = (WLDATA.clients || []).filter(c => c.visible !== false).sort((a,b)=>(a.order||0)-(b.order||0)); if (!clients.length) { return; } grid.innerHTML = clients.map(c => \`<div class="cl-card">\${c.logo ? \`<img src="\${fullUrl(c.logo)}" alt="\${escapeHtml(c.name)}" style="max-width:130px;max-height:46px;object-fit:contain">\` : \`<span style="font-size:15px;font-weight:700;color:#0d1b2e">\${escapeHtml(c.name)}</span>\`}</div>\`).join(''); }\r
        function renderInsights() { const grid=document.getElementById('main-insights-grid'); if(!grid)return; const rows=(WLDATA.insights||[]).filter(x=>x.visible!==false).sort((a,b)=>(a.order||0)-(b.order||0)); if(!rows.length){grid.innerHTML='<p style="color:#7c8da5;grid-column:1/-1">No insights published yet.</p>';return;} grid.innerHTML=rows.map(item=>{const link=safeHttpUrl(item.articleUrl||''),date=item.publishedAt?new Intl.DateTimeFormat('en',{year:'numeric',month:'long',day:'numeric'}).format(new Date(item.publishedAt)):'';return \`<article class="ins-card">\${item.image?\`<img class="ins-img" src="\${escapeHtml(fullUrl(item.image))}" alt="\${escapeHtml(item.title)}" loading="lazy">\`:''}\${item.category?\`<div class="ins-meta">\${escapeHtml(item.category)}</div>\`:''}<div class="ins-ttl">\${escapeHtml(item.title)}</div><div class="ins-desc">\${escapeHtml(item.desc)}</div>\${item.author?\`<div class="ins-author">By \${escapeHtml(item.author)} · \${Number(item.readTime||5)} min read</div>\`:''}<div class="ins-ft"><span class="ins-date">\${escapeHtml(date)}</span>\${Number(item.rating)>0?\`<span class="ins-rating"><span class="star-ic">★</span> Avg \${Number(item.rating).toFixed(1)} / 5</span>\`:''}</div>\${link?\`<a href="\${escapeHtml(link)}" target="_blank" rel="noopener noreferrer" class="ins-lnk">Learn more <span class="arr-sm"></span></a>\`:''}</article>\`}).join(''); }\r
        function applySectionVisibility() { const secs = WLDATA.sections || {}; const secMap = { why:'sec-why', clients:'sec-clients', whatwedo:'sec-whatwedo', projects:'sec-projects', services:'sec-services', cases:'sec-cases', map:'sec-map', feedback:'sec-feedback', insights:'sec-insights' }; Object.entries(secMap).forEach(([key, elId]) => { const el = document.getElementById(elId); if (el) el.style.display = (secs[key] !== false) ? '' : 'none'; }); }\r
        function applyWhatWeDoVisibility() {\r
            const states = WLDATA.whatWeDoServices || {};\r
            const grid = document.querySelector('#sec-whatwedo .wwd-grid');\r
            if (!grid) return;\r
            const cards = [...grid.querySelectorAll('[data-service-key]')];\r
            cards.forEach(card => {\r
                card.classList.remove('wwd-auto-full');\r
                card.style.display = states[card.dataset.serviceKey] !== false ? '' : 'none';\r
            });\r
\r
            let halfWidthRun = [];\r
            const fillIncompleteRow = () => {\r
                if (halfWidthRun.length % 2 === 1) halfWidthRun[halfWidthRun.length - 1].classList.add('wwd-auto-full');\r
                halfWidthRun = [];\r
            };\r
            cards.filter(card => card.style.display !== 'none').forEach(card => {\r
                if (card.classList.contains('full')) fillIncompleteRow();\r
                else halfWidthRun.push(card);\r
            });\r
            fillIncompleteRow();\r
        }\r
        function setupFeedback() { clearInterval(feedbackTimer); feedbacks = (WLDATA.testimonials || []).filter(t => t.visible !== false).sort((a,b)=>(a.order||0)-(b.order||0)).map(t => ({ init: t.initials || (t.name || '').substring(0,2).toUpperCase(), name: t.name || '', role: t.role || '', txt: t.text || '' })); if (!feedbacks.length) { const sec = document.getElementById('sec-feedback'); if (sec) sec.style.display = 'none'; return; } renderFb(); feedbackTimer=setInterval(fbNext, 5000); }\r
        function buildDots() { const d = document.getElementById('fbDots'); if (!d) return; d.innerHTML = ''; feedbacks.forEach((_, i) => { const dot = document.createElement('div'); dot.className = 'fb-dot' + (i === fi ? ' on' : ''); dot.onclick = () => { fi = i; renderFb(); }; d.appendChild(dot); }); }\r
        function renderFb() { if (!feedbacks.length) return; const f = feedbacks[fi]; ['fbInit','fbName','fbRole','fbTxt'].forEach((id,idx)=>{ const el=document.getElementById(id); if(el) el.textContent=[f.init,f.name,f.role,f.txt][idx]; }); const fill=document.getElementById('fbFill'); if(fill) fill.style.width=((fi+1)/feedbacks.length*100)+'%'; buildDots(); }\r
        function fbNext() { if (!feedbacks.length) return; fi = (fi + 1) % feedbacks.length; renderFb(); }\r
        function fbPrev() { if (!feedbacks.length) return; fi = (fi - 1 + feedbacks.length) % feedbacks.length; renderFb(); }\r
        window.fbNext = fbNext; window.fbPrev = fbPrev;\r
        function renderClientsMap() { const el = document.getElementById('clientsMap'); const empty = document.getElementById('mapEmpty'); if (!el || typeof L === 'undefined') return; if(clientsMapInstance){clientsMapInstance.remove();clientsMapInstance=null;} const points = (WLDATA.mapLocations || []).filter(m => m.visible !== false && Number.isFinite(Number(m.lat)) && Number.isFinite(Number(m.lng))); if (!points.length) { if (empty) empty.style.display = 'block'; return; } if (empty) empty.style.display = 'none'; clientsMapInstance = L.map('clientsMap', { scrollWheelZoom:false }).setView([20,0],2); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution:'&copy; OpenStreetMap contributors' }).addTo(clientsMapInstance); const bounds=[]; points.forEach(p=>{ const marker=L.marker([Number(p.lat),Number(p.lng)]).addTo(clientsMapInstance); marker.bindPopup(\`<strong>\${escapeHtml(p.name)}</strong><br>\${escapeHtml([p.city,p.country].filter(Boolean).join(', '))}<br>\${Number(p.clientsCount || 1)} client(s)\`); bounds.push([Number(p.lat), Number(p.lng)]); }); if(bounds.length>1) clientsMapInstance.fitBounds(bounds,{padding:[40,40]}); else clientsMapInstance.setView(bounds[0],5); }\r
        function setupIndexContactForm() {\r
            const form = document.getElementById('indexContactForm');\r
            if (!form || form.dataset.ready) return;\r
            form.dataset.ready = '1';\r
            const fileInput = document.getElementById('indexAttachment');\r
            const fileLabel = document.getElementById('indexAttachLabel');\r
            fileInput?.addEventListener('change', () => {\r
                fileLabel.textContent = fileInput.files?.[0]?.name || 'Add an attachment';\r
            });\r
            form.addEventListener('submit', async e => {\r
                e.preventDefault();\r
                const btn = form.querySelector('.f-sub');\r
                btn.disabled = true;\r
                btn.textContent = 'Sending...';\r
                try {\r
                    const fields = form.elements;\r
                    const fd = new FormData();\r
                    fd.append('name', fields.name.value.trim());\r
                    fd.append('email', fields.email.value.trim());\r
                    fd.append('phone', fields.phone.value.trim());\r
                    fd.append('company', fields.company.value.trim());\r
                    fd.append('desc', fields.desc.value.trim());\r
                    fd.append('source', 'Index footer');\r
                    const file = fileInput?.files?.[0];\r
                    if (file) fd.append('attachment', file);\r
                    const res = await fetch(\`\${API_BASE}/submissions\`, { method: 'POST', body: fd });\r
                    if (!res.ok) {\r
                        const data = await res.json().catch(() => ({}));\r
                        throw new Error(data.message || 'Unable to send request');\r
                    }\r
                    form.reset();\r
                    if (fileLabel) fileLabel.textContent = 'Add an attachment';\r
                    alert('Request sent successfully.');\r
                } catch (err) {\r
                    alert(err.message || 'Something went wrong. Please try again.');\r
                } finally {\r
                    btn.disabled = false;\r
                    btn.textContent = 'Send Request';\r
                }\r
            });\r
        }\r
        function renderSiteData() { renderProjects(); renderInsights(); renderStats(); renderClients(); applySectionVisibility(); applyWhatWeDoVisibility(); setupFeedback(); renderClientsMap(); }\r
        async function loadSiteData() {\r
            try { const cached=JSON.parse(localStorage.getItem(SITE_DATA_CACHE_KEY)||'null'); if(cached?.data){WLDATA=cached.data;renderSiteData();} } catch { try { localStorage.removeItem(SITE_DATA_CACHE_KEY); } catch {} }\r
            setupPageInteractions();\r
            try { const res = await fetch(\`\${API_BASE}/public/site-data\`); if (!res.ok) throw new Error('API unavailable'); WLDATA = await res.json(); try { localStorage.setItem(SITE_DATA_CACHE_KEY,JSON.stringify({data:WLDATA,savedAt:Date.now()})); } catch {} renderSiteData(); }\r
            catch (error) { console.warn('Unable to load API data:', error.message); }\r
        }\r
        function setupPageInteractions() { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }); }, { threshold:.08 }); document.querySelectorAll('.reveal').forEach(el => obs.observe(el)); document.querySelectorAll('a[href="#contact"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior:'smooth' }); }); }); setupIndexContactForm(); }\r
        document.addEventListener('DOMContentLoaded', loadSiteData);\r
    <\/script>\r
</body>\r
\r
</html>`,mh=new Set(["who-we-are","careers","contactus","leadership","ev-charging","market-access","multi-currency-wallet","iot-cloud-platform","smart-hvac","iot-development","ai-development","ai-agent-development","ecommerce-development","fintech-development","blockchain-development","full-cycle-development","news","opensource","blog","project"]);function Lf(){const v="/Sakin.zo/";return v.startsWith("/")?v:`/${v}`}function mc(v=""){const A=Lf(),M=A.endsWith("/")?A.slice(0,-1):A,d=v.startsWith("/")?v:`/${v}`;return M?d==="/"?`${M}/`:`${M}${d}`:d}function bc(v=""){if(!v||v.startsWith("#")||/^(https?:|mailto:|tel:|javascript:)/i.test(v))return v;const A=new URL(v,window.location.origin);let M=A.pathname.replace(/^\/+/,"").replace(/\/$/,"");return(!M||M==="index.html")&&(M=""),M.endsWith(".html")&&(M=M.slice(0,-5)),M?mh.has(M)?`${mc(M)}${A.search}${A.hash}`:v:`${mc("/")}${A.search}${A.hash}`}function Ca(v=document){var A;(A=v.querySelectorAll)==null||A.call(v,"a[href]").forEach(M=>{const d=bc(M.getAttribute("href"));d&&M.setAttribute("href",d)})}function hc(){let v=window.location.pathname.replace(/^\/+/,"").replace(/\/$/,""),A=Lf().replace(/^\/+/,"").replace(/\/$/,"");return A&&v===A&&(v=""),A&&v.startsWith(`${A}/`)&&(v=v.slice(A.length+1)),v==="index.html"&&(v=""),v.endsWith(".html")&&(v=v.slice(0,-5)),v}function xe(v=""){return mc(v)}let gc;function Bf(){return gc||(gc=new DOMParser().parseFromString(gh,"text/html")),gc}function vh(){var A,M;const v=Bf();return{css:((A=v.querySelector("style"))==null?void 0:A.textContent)??"",script:((M=[...v.querySelectorAll("body > script")].at(-1))==null?void 0:M.textContent)??""}}function bh(v){return v.replace(/href=(["'])([^"']+)\1/g,(A,M,d)=>`href=${M}${bc(d)}${M}`)}function Fn({selector:v}){const A=Bf().querySelector(v);return A?S.jsx("div",{className:"react-section-root",dangerouslySetInnerHTML:{__html:bh(A.outerHTML)}}):null}function xh(){return S.jsxs(S.Fragment,{children:[S.jsx(Fn,{selector:"header.hdr"}),S.jsx(Fn,{selector:"#mobileMenu"})]})}function yh(){return S.jsx(Fn,{selector:"#home"})}function wh(){return S.jsx(Fn,{selector:"#sec-why"})}function Sh(){return S.jsx(Fn,{selector:"#sec-clients"})}function kh(){return S.jsx(Fn,{selector:"#sec-projects"})}function zh(){return S.jsx(Fn,{selector:"#sec-whatwedo"})}function Ah(){return S.jsx(Fn,{selector:"#sec-services"})}function Eh(){return S.jsx(Fn,{selector:"#sec-cases"})}function Th(){return S.jsx(Fn,{selector:".cta-sec"})}function Mh(){return S.jsx(Fn,{selector:"#sec-map"})}function Ch(){return S.jsx(Fn,{selector:"#sec-feedback"})}function jh(){return S.jsx(Fn,{selector:"#sec-insights"})}function Dh(){return S.jsx(Fn,{selector:"footer#contact"})}const Oh=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Sakinzo</title>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <style>
        /* ── RESET ── */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
            overflow-x: hidden;
        }

        :root {
            --navy: #022542;
            --blue: #1673FF;
            --bg: #f0f4fb;
            --white: #ffffff;
            --text: #1a2d3d;
            --muted: #6b7e8f;
            --border: #d0d8e2;
            --dark: #06172b;
            --dark2: #0b2240;
            --radius: 14px;
            --shadow: 0 4px 24px rgba(2, 37, 66, .10);
            --shadow-lg: 0 12px 48px rgba(2, 37, 66, .14);
        }

        body {
            font-family: 'Manrope', sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.5;
            overflow-x: hidden;
            padding-top: 68px;
        }

        /* ══════════════════════════════
   HEADER
══════════════════════════════ */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 500;
            background: rgba(255, 255, 255, .96);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0, 0, 0, .07);
        }

        .header-wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 32px;
            height: 68px;
            display: flex;
            align-items: center;
            gap: 0;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            flex-shrink: 0;
            margin-right: 40px;
        }

        .logo svg {
            display: block;
        }

        .logo-name {
            font-size: 21px;
            font-weight: 800;
            color: var(--navy);
            letter-spacing: -.3px;
        }

        .logo-name b {
            color: var(--blue);
            font-weight: 800;
        }

        nav {
            display: flex;
            align-items: center;
            gap: 4px;
            flex: 1;
        }

        .nav-group {
            position: relative;
        }

        .nav-btn {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 8px 14px;
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            color: var(--navy);
            background: none;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            white-space: nowrap;
            transition: background .15s, color .15s;
            text-decoration: none;
        }

        .nav-btn:hover,
        .nav-group:hover .nav-btn {
            background: #eef3fc;
            color: var(--blue);
        }

        .nav-btn svg {
            width: 14px;
            height: 14px;
            transition: transform .2s;
            flex-shrink: 0;
            opacity: .5;
        }

        .nav-group:hover .nav-btn svg {
            transform: rotate(180deg);
            opacity: 1;
        }

        .dropdown {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            min-width: 220px;
            background: #fff;
            border: 1px solid var(--border);
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            padding: 8px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-6px);
            transition: opacity .18s, transform .18s;
            z-index: 600;
        }

        .nav-group:hover .dropdown {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
        }

        .dropdown a {
            display: block;
            padding: 9px 14px;
            font-size: 13.5px;
            font-weight: 500;
            color: var(--text);
            text-decoration: none;
            border-radius: 8px;
            transition: background .12s, color .12s;
            line-height: 1.4;
        }

        .dropdown a:hover {
            background: #eef3fc;
            color: var(--blue);
        }

        .dropdown .section-divider {
            height: 1px;
            background: var(--border);
            margin: 6px 8px;
        }

        .dropdown .sub-label {
            padding: 8px 14px 4px;
            font-size: 11px;
            font-weight: 700;
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: .07em;
        }

        .dropdown-wide {
            min-width: 280px;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-left: auto;
            flex-shrink: 0;
        }

        .lang-btn {
            display: flex;
            align-items: center;
            gap: 4px;
            font-family: inherit;
            font-size: 13px;
            font-weight: 700;
            color: var(--navy);
            background: none;
            border: 1.5px solid var(--border);
            border-radius: 8px;
            padding: 6px 11px;
            cursor: pointer;
            transition: border-color .15s, color .15s;
        }

        .lang-btn:hover {
            border-color: var(--blue);
            color: var(--blue);
        }

        .lang-btn svg {
            width: 13px;
            height: 13px;
            opacity: .5;
        }

        .btn-cta {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: var(--blue);
            color: #fff;
            font-family: inherit;
            font-size: 14px;
            font-weight: 700;
            padding: 11px 24px;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 0 3px 14px rgba(22, 115, 255, .28);
            transition: background .18s, transform .15s, box-shadow .18s;
            white-space: nowrap;
        }

        .btn-cta:hover {
            background: #0558d4;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(22, 115, 255, .36);
        }

        .btn-home {
            background: #fff;
            color: var(--navy);
            border: 1px solid var(--border);
            box-shadow: none;
        }

        .btn-home:hover {
            background: var(--bg);
            box-shadow: none;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 6px;
            margin-left: auto;
            background: none;
            border: none;
        }

        .hamburger span {
            display: block;
            width: 22px;
            height: 2px;
            background: var(--navy);
            border-radius: 2px;
            transition: all .25s;
        }

        .hamburger.open span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-nav {
            display: none;
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            bottom: 0;
            height: calc(100vh - 68px);
            height: calc(100dvh - 68px);
            background: #fff;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            z-index: 400;
            padding: 16px 20px 40px;
            border-top: 1px solid var(--border);
        }

        .mobile-nav.open {
            display: block;
        }

        .mobile-nav-group {
            margin-bottom: 4px;
            border-bottom: 1px solid var(--border);
        }

        .mobile-nav-group:last-of-type {
            border-bottom: none;
        }

        .mobile-nav-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 13px 14px;
            font-family: inherit;
            font-size: 15px;
            font-weight: 600;
            color: var(--navy);
            background: none;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            text-align: left;
            transition: background .15s;
        }

        .mobile-nav-toggle:hover {
            background: var(--bg);
        }

        .mobile-nav-toggle svg {
            width: 16px;
            height: 16px;
            transition: transform .2s;
            opacity: .4;
        }

        .mobile-nav-toggle.active svg {
            transform: rotate(180deg);
            opacity: .8;
        }

        .mobile-nav-items {
            display: none;
            padding: 4px 0 8px 14px;
        }

        .mobile-nav-items.open {
            display: block;
        }

        .mobile-nav-items a {
            display: block;
            padding: 9px 14px;
            font-size: 14px;
            color: var(--text);
            text-decoration: none;
            border-radius: 8px;
            transition: background .12s;
        }

        .mobile-nav-items a:hover {
            background: var(--bg);
            color: var(--blue);
        }

        .mobile-nav-items .sub-label {
            padding: 10px 14px 4px;
            font-size: 10.5px;
            font-weight: 800;
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: .08em;
        }

        /* ══════════════════════════════
   HERO BAND
══════════════════════════════ */
        .hero-band {
            background: linear-gradient(140deg, var(--navy) 0%, #083358 55%, #0d3a6b 100%);
            padding: 52px 32px 60px;
            position: relative;
            overflow: hidden;
        }

        .hero-band::before {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                repeating-linear-gradient(135deg,
                    rgba(255, 255, 255, .022) 0px,
                    rgba(255, 255, 255, .022) 1px,
                    transparent 1px,
                    transparent 44px);
        }

        .hero-band::after {
            content: '';
            position: absolute;
            top: -140px;
            right: -80px;
            width: 560px;
            height: 560px;
            background: radial-gradient(circle, rgba(22, 115, 255, .20) 0%, transparent 65%);
            pointer-events: none;
        }

        .hero-inner {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
        }

        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, .45);
            margin-bottom: 28px;
        }

        .breadcrumb a {
            color: rgba(255, 255, 255, .65);
            text-decoration: none;
        }

        .breadcrumb a:hover {
            color: #fff;
        }

        .hero-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(22, 115, 255, .18);
            border: 1px solid rgba(22, 115, 255, .35);
            border-radius: 100px;
            padding: 5px 14px;
            font-size: 12px;
            font-weight: 700;
            color: #7db8ff;
            letter-spacing: .06em;
            text-transform: uppercase;
            margin-bottom: 18px;
        }

        .tag-pulse {
            width: 6px;
            height: 6px;
            background: #7db8ff;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {

            0%,
            100% {
                opacity: 1;
                transform: scale(1);
            }

            50% {
                opacity: .5;
                transform: scale(.7);
            }
        }

        .hero-inner h1 {
            font-size: clamp(30px, 4.5vw, 52px);
            font-weight: 800;
            color: #fff;
            line-height: 1.12;
            letter-spacing: -.03em;
            max-width: 620px;
            margin-bottom: 18px;
        }

        .hero-inner h1 em {
            color: #7db8ff;
            font-style: normal;
        }

        .hero-desc {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, .60);
            max-width: 520px;
            margin-bottom: 36px;
            line-height: 1.7;
        }

        /* ══════════════════════════════
   PROCESS STEPS
══════════════════════════════ */
        .process-wrap {
            background: #fff;
            padding: 64px 32px;
            border-bottom: 1px solid var(--border);
        }

        .section-label {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 11px;
            font-weight: 700;
            color: var(--blue);
            text-transform: uppercase;
            letter-spacing: .1em;
            margin-bottom: 12px;
        }

        .section-label::before {
            content: '';
            width: 24px;
            height: 2px;
            background: var(--blue);
            border-radius: 2px;
        }

        .process-wrap h2 {
            font-size: clamp(22px, 2.8vw, 34px);
            font-weight: 800;
            color: var(--navy);
            letter-spacing: -.02em;
            margin-bottom: 44px;
            max-width: 420px;
            line-height: 1.2;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 3px;
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            max-width: 1200px;
            margin: 0 auto;
        }

        .step {
            background: var(--bg);
            padding: 32px 26px;
            transition: background .22s, transform .22s;
            cursor: default;
            position: relative;
        }

        .step:hover {
            background: var(--navy);
            transform: translateY(-4px);
            z-index: 2;
            box-shadow: var(--shadow-lg);
        }

        .step:hover .step-icon {
            background: rgba(22, 115, 255, .18);
        }

        .step:hover .step-n {
            color: #7db8ff;
        }

        .step:hover .step-title {
            color: #fff;
        }

        .step:hover .step-body {
            color: rgba(255, 255, 255, .52);
        }

        .step-icon {
            width: 46px;
            height: 46px;
            border-radius: 12px;
            background: #e8f0fe;
            display: grid;
            place-items: center;
            font-size: 20px;
            margin-bottom: 18px;
            transition: background .22s;
        }

        .step-n {
            font-size: 12px;
            font-weight: 800;
            color: var(--blue);
            letter-spacing: .06em;
            margin-bottom: 8px;
            transition: color .22s;
        }

        .step-title {
            font-size: 16px;
            font-weight: 700;
            color: var(--navy);
            margin-bottom: 8px;
            transition: color .22s;
            line-height: 1.3;
        }

        .step-body {
            font-size: 13px;
            color: var(--muted);
            line-height: 1.65;
            transition: color .22s;
        }

        /* ══════════════════════════════
   MAIN CONTENT AREA
══════════════════════════════ */
        .content-wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 48px 32px 80px;
            display: grid;
            grid-template-columns: 1fr 380px;
            gap: 52px;
            align-items: start;
        }

        /* ── FORM CARD ── */
        .form-card {
            background: #fff;
            border-radius: 20px;
            box-shadow: var(--shadow);
            padding: 48px 44px;
            position: relative;
            overflow: hidden;
        }

        .form-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--blue) 0%, #7db8ff 50%, var(--blue) 100%);
            background-size: 200% 100%;
            animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
            0% {
                background-position: -200% 0;
            }

            100% {
                background-position: 200% 0;
            }
        }

        .form-card h2 {
            font-size: 26px;
            font-weight: 800;
            color: var(--navy);
            letter-spacing: -.02em;
            margin-bottom: 6px;
        }

        .form-sub {
            font-size: 14px;
            color: var(--muted);
            margin-bottom: 38px;
            line-height: 1.6;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 28px;
        }

        .field {
            margin-bottom: 26px;
        }

        .field.full {
            grid-column: 1 / -1;
        }

        .field label {
            display: block;
            font-size: 11.5px;
            font-weight: 700;
            color: var(--muted);
            letter-spacing: .07em;
            text-transform: uppercase;
            margin-bottom: 9px;
        }

        .field .req {
            color: var(--blue);
            margin-left: 2px;
        }

        .input-wrap {
            position: relative;
        }

        .input-icon {
            position: absolute;
            left: 1px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 15px;
            pointer-events: none;
            opacity: .35;
            transition: opacity .2s;
            line-height: 1;
        }

        .field input,
        .field textarea {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1.5px solid var(--border);
            padding: 10px 2px 10px 24px;
            font-size: 15px;
            font-family: 'Manrope', sans-serif;
            color: var(--navy);
            outline: none;
            transition: border-color .2s;
            line-height: 1.5;
        }

        .field textarea {
            padding-left: 2px;
            resize: none;
            height: 58px;
        }

        .field input::placeholder,
        .field textarea::placeholder {
            color: #c0cad4;
            font-weight: 400;
        }

        .field input:focus,
        .field textarea:focus {
            border-color: var(--blue);
        }

        .field input:focus~.input-icon,
        .field:focus-within .input-icon {
            opacity: .8;
        }

        .field-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1.5px;
            background: var(--blue);
            border-radius: 2px;
            transition: width .3s ease;
        }

        .field input:focus~.field-line,
        .field textarea:focus~.field-line {
            width: 100%;
        }

        .attach-zone {
            display: flex;
            align-items: center;
            gap: 14px;
            border: 1.5px dashed var(--border);
            border-radius: 12px;
            padding: 16px 20px;
            cursor: pointer;
            transition: border-color .2s, background .2s;
            margin-bottom: 26px;
        }

        .attach-zone:hover {
            border-color: var(--blue);
            background: #f0f6ff;
        }

        .attach-zone input {
            display: none;
        }

        .attach-ico {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: #e8f0fe;
            display: grid;
            place-items: center;
            font-size: 17px;
            flex-shrink: 0;
            transition: background .2s;
        }

        .attach-zone:hover .attach-ico {
            background: rgba(22, 115, 255, .15);
        }

        .attach-text b {
            display: block;
            font-size: 13.5px;
            font-weight: 700;
            color: var(--navy);
            margin-bottom: 2px;
        }

        .attach-text span {
            font-size: 12px;
            color: var(--muted);
        }

        .consent-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 34px;
            padding: 16px;
            background: var(--bg);
            border-radius: 10px;
        }

        .chk-box {
            width: 20px;
            height: 20px;
            border: 2px solid var(--border);
            border-radius: 5px;
            flex-shrink: 0;
            margin-top: 1px;
            cursor: pointer;
            display: grid;
            place-items: center;
            transition: all .18s;
            background: #fff;
        }

        .chk-box.on {
            background: var(--blue);
            border-color: var(--blue);
        }

        .chk-box.on::after {
            content: '✓';
            color: #fff;
            font-size: 12px;
            font-weight: 800;
        }

        .consent-txt {
            font-size: 13px;
            color: var(--muted);
            line-height: 1.65;
        }

        .consent-txt a {
            color: var(--blue);
            text-decoration: none;
            font-weight: 600;
        }

        .consent-txt a:hover {
            text-decoration: underline;
        }

        .submit-row {
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
        }

        .btn-submit {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--blue);
            color: #fff;
            font-family: 'Manrope', sans-serif;
            font-size: 15px;
            font-weight: 700;
            padding: 15px 38px;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            box-shadow: 0 4px 22px rgba(22, 115, 255, .32);
            transition: background .18s, transform .15s, box-shadow .18s;
        }

        .btn-submit:hover {
            background: #0558d4;
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(22, 115, 255, .42);
        }

        .btn-submit:active {
            transform: translateY(0);
        }

        .btn-submit.loading {
            pointer-events: none;
            opacity: .8;
        }

        .spin {
            display: none;
            width: 17px;
            height: 17px;
            border: 2px solid rgba(255, 255, 255, .3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin .7s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .btn-submit.loading .spin {
            display: block;
        }

        .btn-submit.loading .arrow-ico {
            display: none;
        }

        .arrow-ico {
            font-size: 17px;
            transition: transform .2s;
        }

        .btn-submit:hover .arrow-ico {
            transform: translateX(4px);
        }

        .form-note {
            font-size: 12px;
            color: var(--muted);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .success-state {
            display: none;
            text-align: center;
            padding: 52px 28px;
            animation: pop .45s cubic-bezier(.34, 1.56, .64, 1) both;
        }

        @keyframes pop {
            from {
                opacity: 0;
                transform: scale(.92);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .success-circle {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0aab5c, #00d97e);
            display: grid;
            place-items: center;
            margin: 0 auto 22px;
            font-size: 30px;
            box-shadow: 0 6px 22px rgba(10, 171, 92, .28);
        }

        .success-state h3 {
            font-size: 24px;
            font-weight: 800;
            color: var(--navy);
            margin-bottom: 10px;
        }

        .success-state p {
            font-size: 14.5px;
            color: var(--muted);
            line-height: 1.6;
            margin-bottom: 28px;
        }

        .btn-reset {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: none;
            color: var(--navy);
            font-family: inherit;
            font-size: 14px;
            font-weight: 700;
            border: 2px solid var(--border);
            border-radius: 100px;
            padding: 10px 24px;
            cursor: pointer;
            transition: border-color .18s, color .18s;
        }

        .btn-reset:hover {
            border-color: var(--blue);
            color: var(--blue);
        }

        /* ══════════════════════════════
   SIDEBAR
══════════════════════════════ */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 18px;
            height: auto;
            align-self: start;
            position: sticky;
            top: 86px;
            z-index: 10;
        }

        /* ── TEAM CARD (dynamic) ── */
        .card-team {
            background: var(--navy);
            border-radius: 20px;
            padding: 28px;
            position: relative;
        }

        .card-team-bg {
            position: absolute;
            inset: 0;
            border-radius: 20px;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
        }

        .card-team-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: repeating-linear-gradient(135deg,
                    rgba(255, 255, 255, .02) 0, rgba(255, 255, 255, .02) 1px,
                    transparent 1px, transparent 36px);
        }

        .card-team-bg::after {
            content: '';
            position: absolute;
            top: -60px;
            right: -60px;
            width: 220px;
            height: 220px;
            background: radial-gradient(circle, rgba(22, 115, 255, .18) 0%, transparent 65%);
        }

        .card-team h3 {
            font-size: 17px;
            font-weight: 800;
            color: #fff;
            margin-bottom: 4px;
            position: relative;
            z-index: 1;
        }

        .card-team>p {
            font-size: 13px;
            color: rgba(255, 255, 255, .48);
            margin-bottom: 22px;
            position: relative;
            z-index: 1;
        }

        .avatars {
            display: flex;
            position: relative;
            z-index: 1;
            margin-bottom: 16px;
        }

        .av {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2.5px solid var(--navy);
            display: grid;
            place-items: center;
            font-size: 14px;
            font-weight: 800;
            color: #fff;
            margin-left: -10px;
            flex-shrink: 0;
            cursor: pointer;
            transition: transform .2s;
            position: relative;
        }

        .av:first-child {
            margin-left: 0;
        }

        .av:hover {
            transform: translateY(-5px);
            z-index: 5;
        }

        /* Tooltip on hover */
        .av[data-tip]:hover::after {
            content: attr(data-tip);
            position: absolute;
            bottom: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, .85);
            color: #fff;
            font-size: 11px;
            font-weight: 600;
            padding: 4px 9px;
            border-radius: 6px;
            white-space: nowrap;
            pointer-events: none;
            z-index: 20;
        }

        .av[data-tip]:hover::before {
            content: '';
            position: absolute;
            bottom: calc(100% + 2px);
            left: 50%;
            transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: rgba(0, 0, 0, .85);
            pointer-events: none;
            z-index: 20;
        }

        /* Member links popup — positioned via JS (position:fixed) so it can
           never get clipped by a parent's overflow and never runs off-screen */
        .av-links {
            position: fixed;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, .22);
            padding: 14px 16px;
            min-width: 180px;
            max-width: min(240px, calc(100vw - 24px));
            z-index: 9999;
            display: none;
            flex-direction: column;
            gap: 8px;
        }

        .av-links.open {
            display: flex;
        }

        .av-links-name {
            font-size: 13px;
            font-weight: 800;
            color: var(--navy);
            margin-bottom: 2px;
        }

        .av-links-role {
            font-size: 11px;
            color: var(--muted);
            margin-bottom: 6px;
        }

        .av-link-btn {
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 7px 10px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
            transition: background .15s;
        }

        .av-link-btn.portfolio {
            background: #eef3fc;
            color: var(--blue);
        }

        .av-link-btn.portfolio:hover {
            background: #d8e8ff;
        }

        .av-link-btn.github {
            background: #f0f0f0;
            color: #1a2d3d;
        }

        .av-link-btn.github:hover {
            background: #e0e0e0;
        }

        .av-more {
            background: rgba(255, 255, 255, .12);
            font-size: 12px;
            color: rgba(255, 255, 255, .65);
        }

        .online-row {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: rgba(255, 255, 255, .5);
            position: relative;
            z-index: 1;
            flex-wrap: wrap;
            row-gap: 4px;
        }

        .online-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #0aab5c;
            flex-shrink: 0;
            box-shadow: 0 0 0 0 rgba(10, 171, 92, .4);
            animation: ping 2s infinite;
        }

        @keyframes ping {
            0% {
                box-shadow: 0 0 0 0 rgba(10, 171, 92, .4);
            }

            70% {
                box-shadow: 0 0 0 8px rgba(10, 171, 92, 0);
            }

            100% {
                box-shadow: 0 0 0 0 rgba(10, 171, 92, 0);
            }
        }

        .online-row strong {
            color: rgba(255, 255, 255, .82);
        }

        /* Offices card */
        .card-offices {
            background: #fff;
            border-radius: 20px;
            padding: 28px;
            box-shadow: var(--shadow);
        }

        .card-offices h3 {
            font-size: 12px;
            font-weight: 800;
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: .08em;
            margin-bottom: 22px;
        }

        .office-item {
            margin-bottom: 20px;
        }

        .office-item:last-child {
            margin-bottom: 0;
        }

        .office-country {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11.5px;
            font-weight: 800;
            color: var(--blue);
            text-transform: uppercase;
            letter-spacing: .07em;
            margin-bottom: 7px;
        }

        .office-item address {
            font-style: normal;
            font-size: 14.5px;
            color: var(--navy);
            font-weight: 500;
            line-height: 1.65;
            margin-bottom: 8px;
        }

        .map-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 12.5px;
            font-weight: 700;
            color: var(--blue);
            text-decoration: none;
            transition: gap .18s;
        }

        .map-link:hover {
            gap: 9px;
        }

        .map-link::after {
            content: '→';
        }

        .office-hr {
            border: none;
            border-top: 1px solid var(--border);
            margin: 18px 0;
        }

        /* Contact methods */
        .card-methods {
            background: var(--bg);
            border-radius: 20px;
            padding: 26px;
            border: 1.5px solid var(--border);
        }

        .sidebar-label {
            display: none;
        }

        .card-methods h3 {
            font-size: 12px;
            font-weight: 800;
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: .08em;
            margin-bottom: 16px;
        }

        .method {
            display: flex;
            align-items: center;
            gap: 13px;
            padding: 11px 4px;
            margin: 0 -4px;
            border-bottom: 1px solid var(--border);
            text-decoration: none;
            color: inherit;
            border-radius: 8px;
            transition: background .15s;
        }

        .method:hover {
            background: rgba(22, 115, 255, .06);
        }

        .method:last-child {
            border-bottom: none;
        }

        .method-ico {
            width: 36px;
            height: 36px;
            border-radius: 9px;
            display: grid;
            place-items: center;
            font-size: 16px;
            flex-shrink: 0;
        }

        .method-ico.email {
            background: rgba(22, 115, 255, .10);
        }

        .method-ico.social {
            background: rgba(0, 119, 181, .10);
            font-weight: 800;
            font-size: 12px;
            color: #0077b5;
        }

        .method {
            min-width: 0;
        }

        .method>div {
            min-width: 0;
            flex: 1;
        }

        .method strong {
            display: block;
            font-size: 13px;
            font-weight: 700;
            color: var(--navy);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .method span {
            font-size: 12px;
            color: var(--muted);
        }

        /* ══════════════════════════════
   TRUST STRIP
══════════════════════════════ */
        .trust-strip {
            background: #fff;
            padding: 52px 32px;
            border-top: 1px solid var(--border);
            text-align: center;
        }

        .trust-strip p {
            font-size: 11.5px;
            font-weight: 700;
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: .1em;
            margin-bottom: 28px;
        }

        .client-pills {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
        }

        .pill {
            padding: 10px 22px;
            background: var(--bg);
            border-radius: 100px;
            border: 1.5px solid var(--border);
            font-size: 14px;
            font-weight: 800;
            color: var(--muted);
            transition: all .18s;
            cursor: default;
        }

        .pill:hover {
            border-color: var(--blue);
            color: var(--blue);
            background: #eef3fc;
            transform: translateY(-2px);
        }

        /* ══════════════════════════════
   FOOTER
══════════════════════════════ */
        footer {
            background: var(--dark);
            color: #fff;
            padding: 68px 0 0;
            position: relative;
            overflow: hidden;
        }

        footer::before {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: repeating-linear-gradient(135deg,
                    rgba(255, 255, 255, .017) 0, rgba(255, 255, 255, .017) 1px,
                    transparent 1px, transparent 46px);
        }

        footer::after {
            content: '';
            position: absolute;
            top: -180px;
            right: -80px;
            width: 640px;
            height: 640px;
            background: radial-gradient(circle, rgba(22, 115, 255, .07) 0%, transparent 60%);
            pointer-events: none;
        }

        .footer-wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
        }

        .footer-top {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 52px;
            padding-bottom: 52px;
            border-bottom: 1px solid rgba(255, 255, 255, .07);
        }

        .fbrand .logo-name {
            color: #fff;
        }

        .fbrand .logo-name b {
            color: var(--blue);
        }

        .fbrand-desc {
            font-size: 13.5px;
            color: rgba(255, 255, 255, .38);
            line-height: 1.7;
            margin: 18px 0 22px;
        }

        .fsocials {
            display: flex;
            gap: 9px;
            margin-bottom: 22px;
        }

        .fsoc {
            width: 36px;
            height: 36px;
            border-radius: 9px;
            background: rgba(255, 255, 255, .06);
            border: 1px solid rgba(255, 255, 255, .07);
            display: grid;
            place-items: center;
            color: rgba(255, 255, 255, .52);
            text-decoration: none;
            font-weight: 800;
            font-size: 12px;
            transition: all .18s;
        }

        .fsoc:hover {
            background: var(--blue);
            color: #fff;
            border-color: var(--blue);
        }

        .fnav {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
        }

        .fnav-col h4 {
            font-size: 10px;
            font-weight: 700;
            color: rgba(255, 255, 255, .28);
            text-transform: uppercase;
            letter-spacing: .12em;
            margin-bottom: 16px;
        }

        .fnav-col a {
            display: block;
            font-size: 13.5px;
            color: rgba(255, 255, 255, .58);
            text-decoration: none;
            margin-bottom: 10px;
            transition: color .15s, padding-left .15s;
        }

        .fnav-col a:hover {
            color: #fff;
            padding-left: 4px;
        }

        .footer-bottom {
            display: flex;
            align-items: flex-start;
            gap: 56px;
            padding: 40px 0;
        }

        .fcta h3 {
            font-size: 20px;
            font-weight: 800;
            color: #fff;
            margin-bottom: 7px;
        }

        .fcta p {
            font-size: 13px;
            color: rgba(255, 255, 255, .42);
            margin-bottom: 18px;
        }

        .foffices h4 {
            font-size: 10px;
            font-weight: 700;
            color: rgba(255, 255, 255, .32);
            text-transform: uppercase;
            letter-spacing: .12em;
            margin-bottom: 14px;
        }

        .foffices-cols {
            display: flex;
            gap: 44px;
        }

        .foffices-cols address {
            font-style: normal;
            font-size: 13.5px;
            color: rgba(255, 255, 255, .52);
            line-height: 1.7;
        }

        .copyright {
            padding: 18px 32px;
            background: rgba(0, 0, 0, .22);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
        }

        .copyright span {
            font-size: 12.5px;
            color: rgba(255, 255, 255, .3);
        }

        .copy-links {
            display: flex;
            gap: 22px;
            flex-wrap: wrap;
        }

        .copy-links a {
            font-size: 12px;
            color: rgba(255, 255, 255, .3);
            text-decoration: none;
            transition: color .18s;
        }

        .copy-links a:hover {
            color: rgba(255, 255, 255, .7);
        }

        /* ══════════════════════════════
   RESPONSIVE
══════════════════════════════ */
        @media (max-width: 1000px) {
            .content-wrap {
                grid-template-columns: 1fr;
            }

            .sidebar {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
                position: relative;
                top: auto;
                z-index: 1;
                width: 100%;
            }

            .card-team {
                grid-column: 1 / -1;
            }

            .card-team,
            .card-offices,
            .card-methods {
                padding: 24px;
            }
        }

        @media (max-width: 820px) {
            .steps {
                grid-template-columns: 1fr 1fr;
            }

            .footer-top {
                grid-template-columns: 1fr;
            }

            .fnav {
                grid-template-columns: 1fr 1fr;
            }

            .footer-bottom {
                flex-direction: column;
                gap: 28px;
            }

            .foffices-cols {
                flex-direction: column;
                gap: 16px;
            }
        }

        @media (max-width: 640px) {

            nav,
            .header-right {
                display: none;
            }

            .header-wrap {
                height: 62px;
                padding: 0 18px;
            }

            body {
                padding-top: 62px;
            }

            .logo-name {
                font-size: 19px;
            }

            .hamburger {
                display: flex;
            }

            .mobile-nav {
                top: 62px;
                height: calc(100vh - 62px);
                height: calc(100dvh - 62px);
                overflow-y: auto;
            }

            .hero-band {
                padding: 36px 18px 46px;
            }

            .hero-inner h1 {
                font-size: 30px;
                line-height: 1.18;
            }

            .hero-desc {
                font-size: 14px;
            }

            .breadcrumb {
                font-size: 12px;
                margin-bottom: 20px;
                flex-wrap: wrap;
            }

            .steps {
                grid-template-columns: 1fr;
            }

            .form-grid {
                grid-template-columns: 1fr;
                row-gap: 2px;
            }

            .form-card {
                padding: 26px 18px;
                border-radius: 14px;
            }

            .form-card h2 {
                font-size: 22px;
            }

            .input-wrap input,
            .input-wrap textarea {
                font-size: 15px;
            }

            .attach-zone {
                padding: 16px 14px;
                align-items: flex-start;
            }

            .attach-text span {
                display: block;
            }

            .consent-row {
                padding: 14px;
            }

            .submit-row {
                align-items: stretch;
                flex-direction: column;
            }

            .btn-submit {
                width: 100%;
                justify-content: center;
            }

            .form-note {
                justify-content: center;
            }

            .content-wrap {
                padding: 26px 16px 52px;
                gap: 28px;
            }

            .sidebar-label {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 11px;
                font-weight: 700;
                color: var(--blue);
                text-transform: uppercase;
                letter-spacing: .1em;
                margin-bottom: 14px;
            }

            .sidebar-label::before {
                content: '';
                width: 20px;
                height: 2px;
                background: var(--blue);
                border-radius: 2px;
            }

            /* One seamless panel instead of three floating cards */
            .sidebar {
                grid-template-columns: 1fr;
                gap: 0;
                border-radius: 18px;
                overflow: hidden;
                box-shadow: var(--shadow);
            }

            .card-team,
            .card-offices,
            .card-methods {
                border-radius: 0;
                box-shadow: none;
            }

            .card-team {
                padding: 24px 22px;
            }

            .card-offices {
                padding: 24px 22px;
                border-top: 1px solid rgba(2, 37, 66, .06);
            }

            .card-methods {
                padding: 6px 22px 10px;
                background: #fff;
                border: none;
                border-top: 1px solid var(--border);
            }

            .card-methods h3 {
                margin: 16px 0 4px;
            }

            .av {
                width: 40px;
                height: 40px;
                font-size: 13px;
            }

            .online-row span {
                font-size: 12.5px;
            }

            .fnav {
                grid-template-columns: 1fr 1fr;
                gap: 22px;
            }

            .footer-wrap {
                padding: 0 18px;
            }

            .footer-top {
                padding-bottom: 36px;
            }

            .copyright {
                padding: 16px 18px;
                flex-direction: column;
                align-items: flex-start;
            }

            .process-wrap {
                padding: 44px 18px;
            }

            .process-wrap h2 {
                font-size: 22px;
                margin-bottom: 30px;
            }

            .trust-strip {
                padding: 40px 18px;
            }
        }

        @media (max-width: 380px) {
            .header-wrap {
                padding: 0 14px;
            }

            .hero-band {
                padding: 30px 14px 38px;
            }

            .hero-inner h1 {
                font-size: 25px;
            }

            .content-wrap {
                padding: 22px 12px 44px;
            }

            .form-card {
                padding: 20px 14px;
            }
        }
    </style>
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="favicon.svg">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#061326">
    <script src="seo.js" defer><\/script></head>

<body>

    <!-- ════════════ HEADER ════════════ -->
    <header>
        <div class="header-wrap">
            <a href="index.html" class="logo" aria-label="Back to Sakinzo home">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF" />
                    <path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85" />
                    <path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,0.35)" />
                </svg>
                <span class="logo-name">Sakin<b>.zo</b></span>
            </a>

            <nav>
                <div class="nav-group">
                    <button class="nav-btn">
                        About Us
                        <svg viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="dropdown">
                        <a href="who-we-are.html">Who We Are</a>
                        <a href="careers.html">Careers</a>
                        <a href="contactus.html">Contacts</a>
                        <a href="leadership.html">Leadership</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="nav-btn">
                        Success Stories
                        <svg viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="dropdown">
                        <a href="ev-charging.html">Cloud ecosystem for EV charging</a>
                        <a href="market-access.html">AI-Based Market Access Tool</a>
                        <a href="multi-currency-wallet.html">Multi-currency Wallet</a>
                        <a href="iot-cloud-platform.html">IoT Cloud Platform</a>
                        <a href="smart-hvac.html">Smart HVAC Monitoring with AI</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="nav-btn">
                        Services
                        <svg viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="dropdown dropdown-wide">
                        <div class="sub-label">IoT</div>
                        <a href="iot-development.html">IoT Development Services</a>
                        <div class="section-divider"></div>
                        <div class="sub-label">Other</div>
                        <a href="ai-development.html">AI Development</a>
                        <a href="ai-agent-development.html">AI Agent Development</a>
                        <a href="ecommerce-development.html">eCommerce Platform Development</a>
                        <a href="fintech-development.html">Fintech Software Development</a>
                        <a href="blockchain-development.html">Blockchain Development</a>
                        <a href="full-cycle-development.html">Full-cycle Development</a>
                    </div>
                </div>

                <div class="nav-group">
                    <button class="nav-btn">
                        Insights
                        <svg viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="dropdown">
                        <a href="news.html">News</a>
                        <a href="opensource.html">Opensource</a>
                        <a href="blog.html">Blog</a>
                    </div>
                </div>
            </nav>

            <div class="header-right">
                <button class="lang-btn">
                    EN
                    <svg viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <a href="index.html" class="btn-cta btn-home">Home</a>
                <a href="#form-section" class="btn-cta">Get in touch</a>
            </div>

            <button class="hamburger" id="hambtn" onclick="toggleMobile()" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </div>

        <div class="mobile-nav" id="mobileNav">
            <div class="mobile-nav-group">
                <button class="mobile-nav-toggle" onclick="toggleSection(this)">
                    About Us
                    <svg viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="mobile-nav-items">
                    <a href="who-we-are.html">Who We Are</a><a href="careers.html">Careers</a><a href="contactus.html">Contacts</a><a href="leadership.html">Leadership</a>
                </div>
            </div>
            <div class="mobile-nav-group">
                <button class="mobile-nav-toggle" onclick="toggleSection(this)">
                    Success Stories
                    <svg viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="mobile-nav-items">
                    <a href="ev-charging.html">Cloud ecosystem for EV charging</a>
                    <a href="market-access.html">AI-Based Market Access Tool</a>
                    <a href="multi-currency-wallet.html">Multi-currency Wallet</a>
                    <a href="iot-cloud-platform.html">IoT Cloud Platform</a>
                    <a href="smart-hvac.html">Smart HVAC Monitoring with AI</a>
                </div>
            </div>
            <div class="mobile-nav-group">
                <button class="mobile-nav-toggle" onclick="toggleSection(this)">
                    Services
                    <svg viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="mobile-nav-items">
                    <div class="sub-label">IoT</div>
                    <a href="iot-development.html">IoT Development Services</a>
                    <div class="sub-label">Other</div>
                    <a href="ai-development.html">AI Development</a>
                    <a href="ai-agent-development.html">AI Agent Development</a>
                    <a href="ecommerce-development.html">eCommerce Platform Development</a>
                    <a href="fintech-development.html">Fintech Software Development</a>
                    <a href="blockchain-development.html">Blockchain Development</a>
                    <a href="full-cycle-development.html">Full-cycle Development</a>
                </div>
            </div>
            <div class="mobile-nav-group">
                <button class="mobile-nav-toggle" onclick="toggleSection(this)">
                    Insights
                    <svg viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="mobile-nav-items">
                    <a href="news.html">News</a>
                    <a href="opensource.html">Opensource</a>
                    <a href="blog.html">Blog</a>
                </div>
            </div>
            <div style="padding: 16px 14px 0;">
                <a href="index.html" class="btn-cta btn-home" style="width:100%;justify-content:center;margin-bottom:10px;"
                    onclick="toggleMobile()">Back to home</a>
                <a href="#form-section" class="btn-cta" style="width:100%;justify-content:center;"
                    onclick="toggleMobile()">Get in touch</a>
            </div>
        </div>
    </header>

    <!-- ════════════ HERO ════════════ -->
    <section class="hero-band">
        <div class="hero-inner">
            <div class="breadcrumb">
                <a href="index.html">Sakinzo</a>
                <span>›</span>
                <span>Contact Us</span>
            </div>
            <div class="hero-tag">
                <span class="tag-pulse"></span>
                Let's build together
            </div>
            <h1>Contact <em>Sakinzo</em> and start building your digital solution</h1>
            <p class="hero-desc">We can discuss a new project with you or talk about our future partnership. Our expert
                team responds within 24 hours.</p>
        </div>
    </section>

    <!-- ════════════ FORM + SIDEBAR ════════════ -->
    <div class="content-wrap" id="form-section">

        <!-- FORM -->
        <div class="form-card">
            <div id="formBody">
                <h2>Tell us about your project</h2>
                <p class="form-sub">Fill in the details below and our team will get back to you within one business day.
                </p>

                <form id="cForm" novalidate>
                    <div class="form-grid">

                        <div class="field">
                            <label>Full Name <span class="req">*</span></label>
                            <div class="input-wrap">
                                <span class="input-icon">👤</span>
                                <input type="text" name="name" placeholder="John Smith" required>
                                <div class="field-line"></div>
                            </div>
                        </div>

                        <div class="field">
                            <label>Email Address <span class="req">*</span></label>
                            <div class="input-wrap">
                                <span class="input-icon">✉️</span>
                                <input type="email" name="email" placeholder="john@company.com" required>
                                <div class="field-line"></div>
                            </div>
                        </div>

                        <div class="field">
                            <label>Phone Number</label>
                            <div class="input-wrap">
                                <span class="input-icon">📱</span>
                                <input type="tel" name="phone" placeholder="+1 (555) 000-0000">
                                <div class="field-line"></div>
                            </div>
                        </div>

                        <div class="field">
                            <label>Company</label>
                            <div class="input-wrap">
                                <span class="input-icon">🏢</span>
                                <input type="text" name="company" placeholder="Your company name">
                                <div class="field-line"></div>
                            </div>
                        </div>

                        <div class="field full">
                            <label>Project Description <span class="req">*</span></label>
                            <div class="input-wrap">
                                <textarea name="desc"
                                    placeholder="Describe your project, goals, timeline, and any specific requirements…"
                                    required></textarea>
                                <div class="field-line"></div>
                            </div>
                        </div>

                    </div>

                    <label class="attach-zone" id="attachZone">
                        <input type="file" id="fileIn" accept=".png,.jpg,.jpeg,.xlsx,.doc,.docx,.pdf" multiple>
                        <div class="attach-ico">📎</div>
                        <div class="attach-text">
                            <b id="attachLbl">Add an attachment</b>
                            <span>PNG, JPG, PDF, DOC, XLSX — max 10 MB</span>
                        </div>
                    </label>

                    <div class="consent-row">
                        <div class="chk-box" id="chkBox" onclick="toggleChk()"></div>
                        <p class="consent-txt">
                            I give consent to the processing of my personal data given in the contact form above as well
                            as receiving commercial and marketing communications under the
                            <a href="#">terms and conditions</a> of <a href="#">Sakinzo Privacy Policy</a>.
                        </p>
                    </div>

                    <div class="submit-row">
                        <button type="submit" class="btn-submit" id="subBtn">
                            <span id="subTxt">Send Request</span>
                            <span class="arrow-ico">→</span>
                            <span class="spin"></span>
                        </button>
                        <span class="form-note">🔒 Replies within 24 hours</span>
                    </div>
                </form>
            </div>

            <div class="success-state" id="successBox">
                <div class="success-circle">✓</div>
                <h3>Request Sent!</h3>
                <p>Thank you for reaching out. Our team will review your message and get back to you within one business
                    day.</p>
                <button class="btn-reset" onclick="resetForm()">← Send Another Request</button>
            </div>
        </div>

        <!-- SIDEBAR -->
        <div class="sidebar-label">Contact details</div>
        <div class="sidebar">

            <!-- Team Card — rendered dynamically from admin data -->
            <div class="card-team" id="teamCard">
                <div class="card-team-bg"></div>
                <h3>Meet the team</h3>
                <p>Ready to discuss your project</p>
                <div class="avatars" id="teamAvatars">
                    <!-- rendered by JS -->
                </div>
                <div class="online-row">
                    <div class="online-dot"></div>
                    <span>Team is <strong>online</strong> · Responds in &lt; 24 h</span>
                </div>
            </div>

            <!-- Offices — rendered dynamically from admin map-locations data -->
            <div class="card-offices" id="offices">
                <h3>Our Offices</h3>
                <div id="officesList">
                    <div class="office-item">
                        <div class="office-country">India</div>
                        <address>Maharashtra,<br>Mumbai</address>
                        <a href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C+Maharashtra%2C+India"
                            target="_blank" rel="noopener" class="map-link">Find on the map</a>
                    </div>
                </div>
            </div>

            <!-- Contact methods -->
            <div class="card-methods">
                <h3>Other Ways to Reach Us</h3>
                <a class="method" href="mailto:hello@sakinzo.com">
                    <div class="method-ico email">✉️</div>
                    <div>
                        <strong>hello@sakinzo.com</strong>
                        <span>Email us directly</span>
                    </div>
                </a>
                <a class="method" href="https://www.linkedin.com/company/sakinzo" target="_blank" rel="noopener">
                    <div class="method-ico social">in</div>
                    <div>
                        <strong>linkedin.com/company/sakinzo</strong>
                        <span>Connect on LinkedIn</span>
                    </div>
                </a>
            </div>

        </div>
    </div>

    <!-- ════════════ PROCESS ════════════ -->
    <section class="process-wrap">
        <div style="max-width:1200px;margin:0 auto;">
            <div class="section-label">How it works</div>
            <h2>From first contact to delivered product</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-icon">💬</div>
                    <div class="step-n">STEP 01</div>
                    <div class="step-title">Submit Your Request</div>
                    <div class="step-body">Fill out the form with your project idea, goals, and any relevant documents.
                    </div>
                </div>
                <div class="step">
                    <div class="step-icon">🎯</div>
                    <div class="step-n">STEP 02</div>
                    <div class="step-title">Discovery Call</div>
                    <div class="step-body">We schedule a call to deeply understand your vision and requirements.</div>
                </div>
                <div class="step">
                    <div class="step-icon">📋</div>
                    <div class="step-n">STEP 03</div>
                    <div class="step-title">Proposal & Scope</div>
                    <div class="step-body">We deliver a tailored proposal with timeline, tech stack and transparent
                        pricing.</div>
                </div>
                <div class="step">
                    <div class="step-icon">🚀</div>
                    <div class="step-n">STEP 04</div>
                    <div class="step-title">Kickoff & Build</div>
                    <div class="step-body">Your dedicated team begins development with agile sprints and regular
                        updates.</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ════════════ TRUST STRIP ════════════ -->
    <section class="trust-strip">
        <p>Trusted by innovative companies worldwide</p>
        <div class="client-pills">
            <div class="pill">TechCorp</div>
            <div class="pill">FinStart</div>
            <div class="pill">MedAI</div>
            <div class="pill">GreenEV</div>
            <div class="pill">SmartHome</div>
            <div class="pill">BlockX</div>
        </div>
    </section>

    <!-- ════════════ FOOTER ════════════ -->
    <footer>
        <div class="footer-wrap">
            <div class="footer-top">
                <div class="fbrand">
                    <a href="index.html" class="logo" aria-label="Back to Sakinzo home">
                        <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF" />
                            <path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85" />
                            <path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,0.35)" />
                        </svg>
                        <span class="logo-name">Sakin<b>.zo</b></span>
                    </a>
                    <p class="fbrand-desc">Expert software studio specializing in IoT, AI, FinTech and full-cycle
                        digital products.</p>
                    <div class="fsocials">
                        <a href="#" class="fsoc">f</a>
                        <a href="#" class="fsoc">ig</a>
                        <a href="#" class="fsoc">in</a>
                    </div>
                </div>

                <div class="fnav">
                    <div class="fnav-col">
                        <h4>About Us</h4>
                        <a href="#">Who We Are</a>
                        <a href="#">Careers</a>
                        <a href="#">Contacts</a>
                        <a href="#">Leadership</a>
                    </div>
                    <div class="fnav-col">
                        <h4>Success Stories</h4>
                        <a href="#">EV Charging Cloud</a>
                        <a href="#">AI Market Access</a>
                        <a href="#">Multi-currency Wallet</a>
                        <a href="#">IoT Cloud Platform</a>
                    </div>
                    <div class="fnav-col">
                        <h4>Services</h4>
                        <a href="#">IoT Development</a>
                        <a href="#">AI Development</a>
                        <a href="#">eCommerce</a>
                        <a href="#">Full-cycle Dev</a>
                    </div>
                    <div class="fnav-col">
                        <h4>Insights</h4>
                        <a href="#">News</a>
                        <a href="#">Opensource</a>
                        <a href="#">Blog</a>
                        <h4 style="margin-top:18px">Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="fcta">
                    <h3>Ready to start your project?</h3>
                    <p>Get a free consultation from our experts.</p>
                    <a href="#form-section" class="btn-cta">Get in touch →</a>
                </div>
                <div class="foffices">
                    <h4>Our Offices</h4>
                    <div class="foffices-cols">
                        <address>Maharashtra,<br>Mumbai, India</address>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <span>2026 SAKINZO LLC. All rights reserved.</span>
            <div class="copy-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and conditions</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Sitemap</a>
            </div>
        </div>
    </footer>

    <!-- ════════════ JS ════════════ -->
    <script>
        const API_BASE = window.API_BASE || 'https://sakinzo.onrender.com/api';
        const fullUrl = (url = '') => url && url.startsWith('/uploads/') ? API_BASE.replace('/api','') + url : url;
        const escapeHtml = (value = '') => String(value).replace(/[&<>"]/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s]));

        // ── Team avatar popup: positioned via JS with position:fixed so it
        // is never clipped by a parent's overflow and never runs off-screen ──
        function closeAllAvPopups() {
            document.querySelectorAll('.av-links.open').forEach(p => p.classList.remove('open'));
        }

        function positionAvPopup(avEl, popupEl) {
            const rect = avEl.getBoundingClientRect();
            const margin = 12;
            // Make it visible off-screen first so we can measure its real size
            popupEl.style.left = '-9999px';
            popupEl.style.top = '-9999px';
            popupEl.classList.add('open');
            const pw = popupEl.offsetWidth;
            const ph = popupEl.offsetHeight;

            let left = rect.left + rect.width / 2 - pw / 2;
            left = Math.max(margin, Math.min(left, window.innerWidth - pw - margin));

            let top = rect.top - ph - 12;
            if (top < margin) top = rect.bottom + 12; // not enough room above -> show below

            popupEl.style.left = left + 'px';
            popupEl.style.top = top + 'px';
        }

        // ── Site data cache: fetched once, used by both Team and Offices ──
        let SITE_DATA = null;
        async function getSiteData() {
            if (SITE_DATA) return SITE_DATA;
            const res = await fetch(\`\${API_BASE}/public/site-data\`);
            if (!res.ok) throw new Error('API unavailable');
            SITE_DATA = await res.json();
            return SITE_DATA;
        }

        async function renderTeam() {
            const container = document.getElementById('teamAvatars');
            if (!container) return;
            try {
                const data = await getSiteData();
                const members = ((data.team) || []).filter(m => m.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
                container.innerHTML = '';
                if (!members.length) { container.innerHTML = '<span style="color:rgba(255,255,255,.65);font-size:13px">Team will be added soon.</span>'; return; }
                const shown = members.slice(0, 5);
                const extra = members.length - shown.length;
                shown.forEach(m => {
                    const av = document.createElement('div');
                    av.className = 'av';
                    av.style.background = m.color || '#3b82f6';
                    av.textContent = m.initials || (m.name || '').substring(0, 2).toUpperCase();
                    av.setAttribute('data-tip', m.name || 'Team member');
                    const hasLinks = m.portfolio || m.github;
                    if (hasLinks) {
                        const popup = document.createElement('div');
                        popup.className = 'av-links';
                        popup.innerHTML = \`<div class="av-links-name">\${escapeHtml(m.name)}</div><div class="av-links-role">\${escapeHtml(m.role || '')}</div>\${m.portfolio ? \`<a href="\${escapeHtml(m.portfolio)}" target="_blank" rel="noopener" class="av-link-btn portfolio">🌐 Portfolio</a>\` : ''}\${m.github ? \`<a href="\${escapeHtml(m.github)}" target="_blank" rel="noopener" class="av-link-btn github">GitHub</a>\` : ''}\`;
                        // Append to body (not the avatar) so position:fixed math is simple
                        // and nothing clips it.
                        document.body.appendChild(popup);
                        av.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const isOpen = popup.classList.contains('open');
                            closeAllAvPopups();
                            if (!isOpen) positionAvPopup(av, popup);
                            else popup.classList.remove('open');
                        });
                    }
                    container.appendChild(av);
                });
                if (extra > 0) { const more = document.createElement('div'); more.className = 'av av-more'; more.style.background = 'rgba(255,255,255,.12)'; more.style.fontSize = '12px'; more.style.color = 'rgba(255,255,255,.65)'; more.textContent = '+' + extra; container.appendChild(more); }
                document.addEventListener('click', closeAllAvPopups);
                window.addEventListener('scroll', closeAllAvPopups, { passive: true });
                window.addEventListener('resize', closeAllAvPopups);
            } catch (err) { container.innerHTML = '<span style="color:rgba(255,255,255,.65);font-size:13px">Team data unavailable.</span>'; }
        }

        // ── Offices: previously hardcoded to a single Mumbai address.
        // Now pulls every visible location from the admin panel's
        // "Map Locations" collection, sorted the same way Team is. ──
        function officeMapUrl(o) {
            if (Number.isFinite(Number(o.lat)) && Number.isFinite(Number(o.lng))) {
                return \`https://www.google.com/maps/search/?api=1&query=\${o.lat},\${o.lng}\`;
            }
            const q = encodeURIComponent([o.city, o.country].filter(Boolean).join(', ') || o.name || '');
            return \`https://www.google.com/maps/search/?api=1&query=\${q}\`;
        }

        async function renderOffices() {
            const container = document.getElementById('officesList');
            if (!container) return;
            try {
                const data = await getSiteData();
                const offices = ((data.mapLocations) || []).filter(o => o.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0));
                if (!offices.length) return; // keep the static fallback markup already in the HTML

                container.innerHTML = offices.map(o => {
                    const addrLines = [o.city, o.name].filter(Boolean);
                    const addrHtml = addrLines.length ? escapeHtml(addrLines.join(', ')) : escapeHtml(o.name || '');
                    return \`<div class="office-item">
                        <div class="office-country">\${escapeHtml(o.country || '')}</div>
                        <address>\${addrHtml}</address>
                        <a href="\${officeMapUrl(o)}" target="_blank" rel="noopener" class="map-link">Find on the map</a>
                    </div>\`;
                }).join('<hr class="office-hr">');
            } catch (err) {
                // keep the static fallback markup already in the HTML
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderTeam();
            renderOffices();
        });

        let lockedScrollY = 0;
        function toggleMobile() {
            const nav = document.getElementById('mobileNav');
            const btn = document.getElementById('hambtn');
            const isOpen = nav.classList.toggle('open');
            btn.classList.toggle('open', isOpen);
            if (isOpen) {
                lockedScrollY = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.top = \`-\${lockedScrollY}px\`;
                document.body.style.left = '0';
                document.body.style.right = '0';
                document.body.style.width = '100%';
            } else {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.width = '';
                window.scrollTo(0, lockedScrollY);
            }
        }
        function toggleSection(btn) { btn.classList.toggle('active'); btn.nextElementSibling.classList.toggle('open'); }

        let consented = false;
        function toggleChk() { consented = !consented; document.getElementById('chkBox').classList.toggle('on', consented); }
        window.toggleMobile = toggleMobile; window.toggleSection = toggleSection; window.toggleChk = toggleChk;

        document.getElementById('fileIn').addEventListener('change', function () {
            const lbl = document.getElementById('attachLbl');
            if (this.files.length) { const txt = Array.from(this.files).map(f => f.name).join(', '); lbl.textContent = txt.length > 42 ? txt.slice(0, 40) + '…' : txt; }
            else { lbl.textContent = 'Add an attachment'; }
        });
        const az = document.getElementById('attachZone');
        az.addEventListener('dragover', e => { e.preventDefault(); az.style.borderColor = '#1673FF'; az.style.background = '#f0f6ff'; });
        az.addEventListener('dragleave', () => { az.style.borderColor = ''; az.style.background = ''; });
        az.addEventListener('drop', e => { e.preventDefault(); az.style.borderColor = ''; az.style.background = ''; if (e.dataTransfer.files[0]) { document.getElementById('fileIn').files = e.dataTransfer.files; document.getElementById('attachLbl').textContent = e.dataTransfer.files[0].name; } });

        document.getElementById('cForm').addEventListener('submit', async function (e) {
            e.preventDefault();
            const fields = this.elements;
            const name = fields.name.value.trim(); const email = fields.email.value.trim(); const desc = fields.desc.value.trim();
            let ok = true;
            [['name', name], ['email', email], ['desc', desc]].forEach(([k, v]) => { const el = fields[k]; if (!v) { el.style.borderBottomColor = '#ef4444'; setTimeout(() => el.style.borderBottomColor = '', 2500); ok = false; } });
            if (!consented) { const c = document.getElementById('chkBox'); c.style.borderColor = '#ef4444'; setTimeout(() => c.style.borderColor = '', 2500); ok = false; }
            if (!ok) return;
            const btn = document.getElementById('subBtn'); btn.classList.add('loading'); document.getElementById('subTxt').textContent = 'Sending…';
            try {
                const fd = new FormData();
                fd.append('name', fields.name.value.trim()); fd.append('email', fields.email.value.trim()); fd.append('phone', fields.phone.value.trim()); fd.append('company', fields.company.value.trim()); fd.append('desc', fields.desc.value.trim()); fd.append('source', 'Contact page');
                const file = document.getElementById('fileIn').files[0]; if (file) fd.append('attachment', file);
                const res = await fetch(\`\${API_BASE}/submissions\`, { method: 'POST', body: fd });
                if (!res.ok) { const data = await res.json().catch(() => ({})); throw new Error(data.message || 'Unable to send request'); }
                document.getElementById('formBody').style.display = 'none'; document.getElementById('successBox').style.display = 'block';
            } catch (err) { alert(err.message || 'Something went wrong. Please try again.'); }
            finally { btn.classList.remove('loading'); document.getElementById('subTxt').textContent = 'Send Request'; }
        });

        function resetForm() { document.getElementById('formBody').style.display = 'block'; document.getElementById('successBox').style.display = 'none'; document.getElementById('cForm').reset(); document.getElementById('attachLbl').textContent = 'Add an attachment'; consented = false; document.getElementById('chkBox').classList.remove('on'); const btn = document.getElementById('subBtn'); btn.classList.remove('loading'); document.getElementById('subTxt').textContent = 'Send Request'; }
        window.resetForm = resetForm;

        document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); if (document.getElementById('mobileNav').classList.contains('open')) toggleMobile(); } }); });
        const io = new IntersectionObserver(entries => { entries.forEach(en => { if (en.isIntersecting) { en.target.style.opacity = '1'; en.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.08 });
        document.querySelectorAll('.step, .badge, .pill, .method').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(18px)'; el.style.transition = 'opacity .5s ease, transform .5s ease'; io.observe(el); });
    <\/script>
</body>

</html>
`,Lh=`<!doctype html>\r
<html lang="en">\r
<head>\r
  <meta charset="utf-8">\r
  <meta name="viewport" content="width=device-width,initial-scale=1">\r
  <title>Project | Sakin.zo</title>\r
  <meta name="description" content="Explore a Sakin.zo project, its story, images and technology.">\r
  <style>\r
    *{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:#f6f8fc;color:#0d1b2e}a{text-decoration:none;color:inherit}.hdr{height:72px;background:#061326;color:#fff;display:flex;align-items:center}.wrap{width:min(1180px,calc(100% - 40px));margin:auto}.nav{display:flex;align-items:center;justify-content:space-between}.logo{display:flex;align-items:center;gap:10px;font-size:22px;font-weight:750}.logo span span{color:#1673ff}.back{font-size:14px;color:#cbd5e1}.hero{padding:72px 0 36px}.category{color:#1673ff;text-transform:uppercase;letter-spacing:.12em;font-size:12px;font-weight:800}.hero h1{font-size:clamp(38px,7vw,76px);line-height:1.03;letter-spacing:-.045em;margin:14px 0 22px}.lead{max-width:820px;font-size:clamp(18px,2vw,23px);line-height:1.65;color:#526078;white-space:pre-line}.creator{display:flex;align-items:center;gap:14px;width:max-content;max-width:100%;margin-top:26px;padding:12px 16px;border:1px solid #d9e3f2;border-radius:14px;background:#fff}.creator-mark{display:grid;place-items:center;width:40px;height:40px;flex:none;border-radius:50%;background:#e7efff;color:#165fce;font-size:16px;font-weight:800}.creator small{display:block;margin-bottom:3px;color:#7a8799;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}.creator-name{font-size:15px;font-weight:800}.creator a{color:#1673ff}.creator a:hover{text-decoration:underline}.tags{display:flex;gap:9px;flex-wrap:wrap;margin-top:26px}.tag{padding:8px 13px;border-radius:999px;background:#e7efff;color:#165fce;font-size:13px;font-weight:700}.cover{width:100%;max-height:680px;object-fit:cover;border-radius:24px;display:block;background:#dce5f2;box-shadow:0 24px 70px rgba(13,27,46,.14)}.content{padding:64px 0 90px}.content h2{font-size:30px;margin:0 0 20px}.description{font-size:17px;line-height:1.85;color:#4c5b70;white-space:pre-line}.gallery{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:52px}.gallery img{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:18px;background:#dce5f2}.live-preview{padding:0 0 90px}.live-preview h2{font-size:30px;margin:0 0 10px}.live-preview p{color:#68758a;margin:0 0 24px}.preview-frame{width:100%;height:min(78vh,820px);min-height:520px;border:1px solid #d9e1ec;border-radius:22px;background:#fff;box-shadow:0 20px 60px rgba(13,27,46,.12)}.state{padding:120px 20px;text-align:center;color:#68758a}.state h1{color:#0d1b2e}.footer{padding:28px 0;background:#061326;color:#9babc0;font-size:13px}@media(max-width:760px){.gallery{grid-template-columns:1fr}.preview-frame{min-height:440px;height:70vh;border-radius:14px}.hero{padding-top:48px}.wrap{width:min(100% - 28px,1180px)}}
  </style>
  <style>
    .iot-showcase{padding:0 0 90px}.iot-showcase h2{font-size:30px;margin:0 0 10px}.iot-showcase p{color:#68758a;margin:0 0 24px}.iot-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:24px;align-items:stretch}.model-photo,.project-video{width:100%;height:100%;min-height:360px;border-radius:22px;background:#071426;box-shadow:0 20px 60px rgba(13,27,46,.12)}.model-photo{object-fit:cover}.project-video{display:block;border:0;object-fit:contain}@media(max-width:760px){.iot-grid{grid-template-columns:1fr}.model-photo,.project-video{min-height:240px;aspect-ratio:16/10}}
  </style>
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="favicon.svg">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#061326">
    <script src="seo.js" defer><\/script></head>\r
<body>\r
  <header class="hdr"><div class="wrap nav"><a class="logo" href="index.html"><svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF"/><path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85"/><path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,.35)"/></svg><span>Sakin<span>.zo</span></span></a><a class="back" href="index.html#sec-projects">← All projects</a></div></header>\r
  <main id="app"><div class="state">Loading project…</div></main>\r
  <footer class="footer"><div class="wrap">© 2026 SAKIN.ZO LLC. All rights reserved.</div></footer>\r
  <script>\r
    const API_BASE=window.API_BASE||'https://sakinzo.onrender.com/api';\r
    const esc=(v='')=>String(v).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
    const fullUrl=(url='')=>url.startsWith('/uploads/')?API_BASE.replace('/api','')+url:url;
    const safeUrl=url=>{try{const u=new URL(url,location.href);return ['http:','https:'].includes(u.protocol)?u.href:''}catch{return ''}};
    function videoPlayer(url,title){const safe=safeUrl(url);if(!safe)return '';const u=new URL(safe);let embed='';if(u.hostname.includes('youtube.com')){const id=u.searchParams.get('v')||u.pathname.split('/').filter(Boolean).pop();if(id)embed=\`https://www.youtube-nocookie.com/embed/\${encodeURIComponent(id)}\`;}else if(u.hostname==='youtu.be'){const id=u.pathname.split('/').filter(Boolean)[0];if(id)embed=\`https://www.youtube-nocookie.com/embed/\${encodeURIComponent(id)}\`;}else if(u.hostname.includes('vimeo.com')){const id=u.pathname.split('/').filter(Boolean).pop();if(/^\\d+$/.test(id||''))embed=\`https://player.vimeo.com/video/\${id}\`;}return embed?\`<iframe class="project-video" src="\${esc(embed)}" title="\${esc(title)} video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\`:\`<video class="project-video" controls playsinline preload="metadata"><source src="\${esc(safe)}">Your browser cannot play this video. <a href="\${esc(safe)}" target="_blank" rel="noopener">Open video</a></video>\`;}
    async function loadProject(){\r
      const id=new URLSearchParams(location.search).get('id');\r
      if(!id)return showError('Project not found','No project was selected.');\r
      try{\r
        const res=await fetch(\`\${API_BASE}/projects/\${encodeURIComponent(id)}\`,{cache:'no-store'});if(res.status===404)return showError('Project not found','This project may have been removed or hidden.');if(!res.ok)throw new Error('Unable to load project');
        const p=await res.json();
        document.title=\`\${p.title||'Project'} Case Study | Sakin.zo\`;
        const projectDescription=\`Explore \${p.title||'this Sakin.zo project'}: \${p.desc||'a custom software solution designed for measurable business impact.'}\`.slice(0,160);
        document.querySelector('meta[name="description"]')?.setAttribute('content',projectDescription);
        document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);
        document.querySelector('meta[property="og:description"]')?.setAttribute('content',projectDescription);
        const caseStudy=document.createElement('script');caseStudy.type='application/ld+json';caseStudy.textContent=JSON.stringify({'@context':'https://schema.org','@type':'CreativeWork',name:p.title||'Sakin.zo Project',description:projectDescription,url:location.href,image:p.img?fullUrl(p.img):undefined,creator:p.creatorName?{'@type':'Person',name:p.creatorName,url:safeUrl(p.creatorPortfolio||'')||undefined}:{'@type':'Organization',name:'Sakin.zo'}});document.head.appendChild(caseStudy);
        const images=[p.img,...(Array.isArray(p.images)?p.images:[])].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i);\r
        const cover=images[0]?\`<div class="wrap"><img class="cover" src="\${esc(fullUrl(images[0]))}" alt="\${esc(p.title)}"></div>\`:'';
        const gallery=images.slice(1).length?\`<div class="gallery">\${images.slice(1).map((img,i)=>\`<img src="\${esc(fullUrl(img))}" alt="\${esc(p.title)} image \${i+2}" loading="lazy">\`).join('')}</div>\`:'';
        const demo=safeUrl(p.demoUrl||'');
        const portfolio=safeUrl(p.creatorPortfolio||'');
        const creator=p.creatorName?\`<div class="creator"><span class="creator-mark">\${esc(p.creatorName.trim().charAt(0).toUpperCase()||'?')}</span><div><small>Created by</small><div class="creator-name">\${portfolio?\`<a href="\${esc(portfolio)}" target="_blank" rel="noopener noreferrer" title="View \${esc(p.creatorName)}'s portfolio">\${esc(p.creatorName)} ↗</a>\`:esc(p.creatorName)}</div></div></div>\`:'';
        const isIot=p.category==='IoT',modelImage=safeUrl(fullUrl(p.modelImage||'')),player=isIot?videoPlayer(p.videoUrl||'',p.title||'IoT project'):'';
        const iotShowcase=isIot&&(modelImage||player)?\`<section class="iot-showcase"><div class="wrap"><h2>Real IoT model & demo</h2><p>See the physical model and watch the project working in the real world.</p><div class="iot-grid">\${modelImage?\`<img class="model-photo" src="\${esc(modelImage)}" alt="\${esc(p.title||'IoT project')} model" loading="lazy">\`:''}\${player}</div></div></section>\`:'';
        const preview=demo?\`<section class="live-preview"><div class="wrap"><h2>Live project preview</h2><p>Explore the working project directly on this page.</p><iframe class="preview-frame" src="\${esc(demo)}" title="\${esc(p.title||'Project')} live preview" loading="lazy" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" referrerpolicy="strict-origin-when-cross-origin"></iframe></div></section>\`:'';
        document.getElementById('app').innerHTML=\`<section class="hero"><div class="wrap"><div class="category">\${esc(p.category||'Project')}</div><h1>\${esc(p.title||'Untitled project')}</h1><p class="lead">\${esc(p.desc||'Project details coming soon.')}</p>\${creator}<div class="tags">\${(p.tags||[]).map(t=>\`<span class="tag">\${esc(t)}</span>\`).join('')}</div></div></section>\${cover}<section class="content"><div class="wrap"><div style="max-width:860px"><h2>About the project</h2><div class="description">\${esc(p.desc||'Project details coming soon.')}</div>\${gallery}</div></div></section>\${iotShowcase}\${preview}\`;
      }catch(err){showError('Could not load project',err.message)}\r
    }
    function showError(title,message){document.getElementById('app').innerHTML=\`<div class="state"><h1>\${esc(title)}</h1><p>\${esc(message)}</p><p><a href="index.html#sec-projects" style="color:#1673ff">Back to projects</a></p></div>\`}
    loadProject();\r
  <\/script>\r
</body>\r
</html>\r
`,Bh={contactus:Oh,project:Lh};function _h(v){const A=new DOMParser().parseFromString(Bh[v],"text/html"),M=[...A.querySelectorAll("style")].map(j=>j.textContent).join(`
`),d=[...A.body.querySelectorAll("script")].map(j=>j.textContent);return A.body.querySelectorAll("script").forEach(j=>j.remove()),{styles:M,scripts:d,body:A.body.innerHTML}}function Nh({slug:v}){const A=De.useMemo(()=>_h(v),[v]);return De.useEffect(()=>{const M=document.createElement("style");M.dataset.reactManaged=v,M.textContent=A.styles,document.head.appendChild(M);const d=A.scripts.map(H=>{const G=document.createElement("script");return G.dataset.reactManaged=v,G.textContent=H,document.body.appendChild(G),G}),j=new MutationObserver(()=>Ca(document));return j.observe(document.body,{childList:!0,subtree:!0}),Ca(document),()=>{j.disconnect(),M.remove(),d.forEach(H=>H.remove())}},[A,v]),S.jsx("div",{dangerouslySetInnerHTML:{__html:A.body}})}const Uh=`const pages={
'who-we-are':{cat:'About Us',title:'We build technology that moves businesses forward',intro:'Sakinzo is a product engineering partner helping ambitious companies turn complex ideas into reliable digital products.',heading:'Technology expertise with a business-first mindset',body:'We combine strategy, design, engineering and long-term support in one accountable team. Our work is grounded in clarity, measurable outcomes and products people genuinely enjoy using.',cards:[['Product thinking','We challenge assumptions and shape the right product before writing code.'],['Engineering excellence','Scalable architecture, clean delivery practices and quality built into every release.'],['True partnership','Transparent communication and a team that stays invested beyond launch.']]},
'careers':{cat:'About Us',title:'Do meaningful work with people who care',intro:'Join a curious, collaborative team building products for real-world challenges.',heading:'Build your next chapter at Sakinzo',body:'We value ownership, thoughtful craft and continuous learning. You will work closely with clients and teammates, contribute to important decisions and see the impact of what you build.',cards:[['Flexible culture','A supportive environment built around trust, focus and sustainable pace.'],['Growth by doing','Mentorship, challenging projects and room to explore new technologies.'],['Open roles','We welcome engineers, designers, analysts and product thinkers who want to grow.']]},
'leadership':{cat:'About Us',title:'Leadership grounded in delivery',intro:'Our leaders bring together product vision, technical depth and a commitment to lasting client relationships.',heading:'The people guiding our mission',body:'Sakinzo leadership stays close to projects, customers and teams. That hands-on perspective helps us make better decisions and maintain the high standards our partners expect.',cards:[['Client success','Keeping business outcomes at the center of every engagement.'],['Technical direction','Building strong engineering foundations for secure, scalable products.'],['People and culture','Creating an environment where talented teams can do their best work.']]},
'ev-charging':{cat:'Success Story',title:'A connected cloud ecosystem for EV charging',intro:'A scalable platform bringing chargers, drivers, operators and payments into one reliable experience.',heading:'Powering a smarter charging network',body:'We designed an IoT-enabled cloud ecosystem that gives operators real-time visibility while making charging simple for drivers. The platform supports device communication, session management, billing and operational analytics.',cards:[['Challenge','Unify fragmented charging infrastructure and operational workflows.'],['Solution','Cloud services, real-time device data and intuitive operator tools.'],['Impact','Faster operations, better reliability and a foundation ready to scale.']],stats:[['24/7','Platform visibility'],['Real-time','Device telemetry'],['Scalable','Cloud architecture']]},
'market-access':{cat:'Success Story',title:'AI-based market access planning',intro:'Turning complex market signals into clear, evidence-based expansion decisions.',heading:'From scattered data to confident planning',body:'The solution brings market, competitor and internal data together, then applies AI-assisted analysis to surface opportunities and risks. Teams can compare scenarios and build stronger go-to-market plans.',cards:[['Challenge','Manual research made planning slow and inconsistent.'],['Solution','A unified analytics workspace with AI-supported recommendations.'],['Impact','Shorter research cycles and clearer market prioritization.']]},
'multi-currency-wallet':{cat:'Success Story',title:'A secure multi-currency wallet experience',intro:'One platform for holding, exchanging and transferring funds across currencies.',heading:'Making global money movement feel simple',body:'We engineered a secure fintech experience around complex ledger, compliance and exchange workflows. Customers get a clear interface while operations teams retain control and visibility.',cards:[['Challenge','Deliver speed without compromising financial controls.'],['Solution','Secure wallet architecture, transaction workflows and auditability.'],['Impact','A smoother customer journey ready for regional growth.']]},
'iot-cloud-platform':{cat:'Success Story',title:'An IoT cloud platform built to scale',intro:'Connecting distributed devices with dependable monitoring, control and analytics.',heading:'A single operational view of every device',body:'The platform securely ingests device data, manages fleets and makes critical events visible to operations teams. Its modular cloud architecture supports new device types and use cases.',cards:[['Challenge','Manage growing fleets across disconnected systems.'],['Solution','Secure ingestion, device management and real-time dashboards.'],['Impact','Improved visibility, response time and platform extensibility.']]},
'smart-hvac':{cat:'Success Story',title:'Smart HVAC monitoring powered by AI',intro:'Predictive insights that help teams reduce downtime and operate buildings more efficiently.',heading:'Moving maintenance from reactive to proactive',body:'Sensor data and machine learning identify unusual behavior before it becomes a costly failure. Teams receive actionable alerts and a clear view of equipment health.',cards:[['Challenge','Failures were difficult to predict and expensive to resolve.'],['Solution','IoT telemetry, anomaly detection and prioritized alerts.'],['Impact','Earlier intervention, better uptime and smarter energy use.']]},
'iot-development':{cat:'Services',title:'IoT development services for connected products',intro:'From device integration to cloud platforms, we build secure IoT systems that work in the real world.',heading:'End-to-end connected product engineering',body:'Our team connects hardware, firmware, cloud services and user-facing applications into one dependable ecosystem. We design for security, observability and growth from day one.',cards:[['IoT architecture','Protocols, device models and scalable cloud foundations.'],['Device and cloud integration','Reliable data ingestion, commands and fleet management.'],['Monitoring and analytics','Dashboards, alerts and insights for better operations.']]},
'ai-development':{cat:'Services',title:'AI development focused on practical outcomes',intro:'Custom AI solutions that automate work, improve decisions and create better user experiences.',heading:'Put intelligence where it creates value',body:'We move from opportunity discovery and data readiness through model integration, product engineering and monitoring. Every solution is designed around a measurable business use case.',cards:[['AI strategy','Prioritize valuable, feasible use cases and define the roadmap.'],['Custom solutions','Integrate models, data and workflows into usable products.'],['Responsible operations','Evaluation, safeguards and ongoing performance monitoring.']]},
'ai-agent-development':{cat:'Services',title:'AI agents that work across your business',intro:'Secure, goal-driven assistants that connect knowledge, tools and human oversight.',heading:'Automate multi-step work with confidence',body:'We build agents that understand context, use approved tools and escalate when human judgment is needed. Clear evaluation and observability keep behavior dependable.',cards:[['Workflow design','Map goals, tools, permissions and handoff points.'],['Agent engineering','Build orchestration, memory and system integrations.'],['Evaluation and control','Test quality, safety, latency and cost before scale.']]},
'ecommerce-development':{cat:'Services',title:'eCommerce platforms designed to convert',intro:'Fast, scalable shopping experiences connected to the systems that run your business.',heading:'Commerce technology without the friction',body:'We create storefronts and commerce platforms that balance brand experience, operational flexibility and performance across devices.',cards:[['Customer experience','Responsive discovery, checkout and account journeys.'],['Commerce integrations','Payments, inventory, fulfillment, CRM and analytics.'],['Growth foundations','Performance, experimentation and scalable architecture.']]},
'fintech-development':{cat:'Services',title:'Secure fintech software development',intro:'Digital finance products engineered for trust, usability and operational control.',heading:'Build financial experiences customers trust',body:'Our engineers translate complex transaction, compliance and data requirements into clear products. Security and traceability are designed into every layer.',cards:[['Wallets and payments','Reliable transaction experiences and integrations.'],['Financial operations','Ledgers, reconciliation, reporting and admin workflows.'],['Security by design','Access control, auditability and resilient architecture.']]},
'blockchain-development':{cat:'Services',title:'Blockchain solutions with real utility',intro:'Secure decentralized products built around a clear business case—not hype.',heading:'Turn blockchain concepts into dependable products',body:'We help teams validate architecture, build smart-contract systems and deliver usable web experiences with security and maintainability in mind.',cards:[['Solution architecture','Choose the right network, data model and trust boundaries.'],['Smart contracts','Development, testing and integration for core workflows.'],['Web3 applications','Accessible interfaces and dependable backend services.']]},
'full-cycle-development':{cat:'Services',title:'Full-cycle product development',intro:'One experienced team from discovery and design through engineering, launch and growth.',heading:'A complete path from idea to impact',body:'We reduce handoffs and keep product, design and engineering aligned around the same outcome. Delivery stays transparent, iterative and adaptable.',cards:[['Discover and define','Research, scope, architecture and delivery planning.'],['Design and build','User experience, engineering, QA and release.'],['Operate and evolve','Monitoring, support and continuous product improvement.']]},
'news':{cat:'Insights',title:'Sakinzo news and company updates',intro:'New partnerships, team milestones and important updates from our work.',heading:'What is happening at Sakinzo',body:'Follow our latest announcements and the progress we are making with clients, technology communities and our growing team.',cards:[['Company updates','Milestones, initiatives and important announcements.'],['Partnerships','New collaborations built around meaningful outcomes.'],['Events','Where to meet our team and exchange ideas.']]},
'opensource':{cat:'Insights',title:'Open source from the Sakinzo team',intro:'Tools, experiments and engineering knowledge we share with the developer community.',heading:'Building in the open',body:'Open source helps us learn together and make useful technology more accessible. Explore the ideas and reusable building blocks emerging from our engineering work.',cards:[['Libraries','Focused tools designed to solve recurring engineering problems.'],['Reference projects','Practical examples for modern product development.'],['Community','Contributions, discussions and shared learning.']]},
'blog':{cat:'Insights',title:'Ideas for building better digital products',intro:'Practical perspectives on product strategy, engineering, AI, IoT and business transformation.',heading:'Insights from people who build',body:'Our team shares lessons from real delivery work—clear thinking you can apply to technology decisions, product roadmaps and engineering practice.',cards:[['Engineering','Architecture, quality and scalable delivery practices.'],['AI and IoT','Applied intelligence and connected product insights.'],['Product strategy','Better discovery, prioritization and customer outcomes.']]}
};
const slug=document.body.dataset.page,p=pages[slug]||pages['who-we-are'];
const links={about:[['Who We Are','who-we-are.html'],['Careers','careers.html'],['Contacts','contactus.html'],['Leadership','leadership.html']],stories:[['Cloud ecosystem for EV charging','ev-charging.html'],['AI-Based Market Access Tool','market-access.html'],['Multi-currency Wallet','multi-currency-wallet.html'],['IoT Cloud Platform','iot-cloud-platform.html'],['Smart HVAC Monitoring with AI','smart-hvac.html']],services:[['IoT Development Services','iot-development.html'],['AI Development','ai-development.html'],['AI Agent Development','ai-agent-development.html'],['eCommerce Platform Development','ecommerce-development.html'],['Fintech Software Development','fintech-development.html'],['Blockchain Development','blockchain-development.html'],['Full-cycle Development','full-cycle-development.html']],insights:[['News','news.html'],['Opensource','opensource.html'],['Blog','blog.html']]};
const drop=a=>\`<div class="drop">\${a.map(x=>\`<a href="\${x[1]}">\${x[0]}</a>\`).join('')}</div>\`;
document.body.innerHTML=\`<header class="site-header"><div class="header-inner"><a class="brand" href="index.html">Sakin<span>.zo</span></a><nav class="nav" id="nav"><div class="nav-group"><button>About Us⌄</button>\${drop(links.about)}</div><div class="nav-group"><button>Success Stories⌄</button>\${drop(links.stories)}</div><div class="nav-group"><button>Services⌄</button>\${drop(links.services)}</div><div class="nav-group"><button>Insights⌄</button>\${drop(links.insights)}</div></nav><a class="head-cta" href="contactus.html#form-section">Get in touch</a><button class="menu-btn" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button></div></header><main><section class="hero"><div class="hero-inner"><div class="crumb"><a href="index.html">Home</a> / \${p.cat}</div><div class="eyebrow">\${p.cat}</div><h1>\${p.title}</h1><p class="hero-copy">\${p.intro}</p><div class="hero-actions"><a class="btn btn-blue" href="contactus.html#form-section">Start a conversation →</a><a class="btn btn-ghost" href="#overview">Explore more</a></div></div></section><section class="section" id="overview"><div class="wrap intro-grid"><div><span class="kicker">What we do</span><h2>\${p.heading}</h2></div><div><p class="lead">\${p.intro}</p><p class="body-copy">\${p.body}</p></div></div></section><section class="section alt"><div class="wrap"><span class="kicker">Our approach</span><h2>Built around outcomes</h2><div class="cards">\${p.cards.map((c,i)=>\`<article class="card"><div class="card-num">0\${i+1}</div><h3>\${c[0]}</h3><p>\${c[1]}</p></article>\`).join('')}</div>\${p.stats?\`<div class="stats">\${p.stats.map(s=>\`<div class="stat"><strong>\${s[0]}</strong><span>\${s[1]}</span></div>\`).join('')}</div>\`:''}</div></section><section class="cta"><div class="cta-inner"><h2>Have a challenge worth solving?</h2><a class="btn btn-blue" href="contactus.html#form-section">Tell us about your project →</a></div></section></main><footer class="site-footer"><div class="footer-inner"><a class="brand" href="index.html">Sakin<span>.zo</span></a><div class="footer-links"><a href="who-we-are.html">About</a><a href="careers.html">Careers</a><a href="blog.html">Insights</a><a href="contactus.html">Contact</a></div><span>© \${new Date().getFullYear()} Sakinzo</span></div></footer>\`;

const arrow='<svg viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
const homeDrop=a=>\`<div class="drop">\${a.map(x=>\`<a href="\${x[1]}">\${x[0]}</a>\`).join('')}</div>\`;
const navGroups=\`<div class="ndrop"><button class="nbtn">About Us\${arrow}</button>\${homeDrop(links.about)}</div><div class="ndrop"><button class="nbtn">Success Stories\${arrow}</button>\${homeDrop(links.stories)}</div><div class="ndrop"><button class="nbtn">Services\${arrow}</button>\${homeDrop(links.services)}</div><div class="ndrop"><button class="nbtn">Insights\${arrow}</button>\${homeDrop(links.insights)}</div>\`;
const mobileGroup=(name,items)=>\`<div class="mob-item"><div class="mob-link" onclick="toggleMobSub(this)">\${name}\${arrow}</div><div class="mob-sub">\${items.map(x=>\`<a href="\${x[1]}">\${x[0]}</a>\`).join('')}</div></div>\`;
document.querySelector('.site-header').outerHTML=\`<header class="hdr"><div class="hdr-inner"><a href="index.html" class="logo"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z" fill="#1673FF"/><path d="M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z" fill="#1673FF" opacity=".85"/><path d="M10 14 L18 11 L26 14 L18 28 Z" fill="rgba(255,255,255,0.35)"/></svg><span class="logo-txt">Sakin<span>.zo</span></span></a><nav>\${navGroups}</nav><div class="hdr-right"><span class="lang">EN\${arrow}</span><a href="contactus.html#form-section" class="btn-git">Get in touch</a></div><button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button></div></header><div class="mobile-menu" id="mobileMenu">\${mobileGroup('About Us',links.about)}\${mobileGroup('Success Stories',links.stories)}\${mobileGroup('Services',links.services)}\${mobileGroup('Insights',links.insights)}<a href="contactus.html#form-section" class="mob-cta" onclick="closeMenu()">Get in touch</a></div>\`;
const ham=document.getElementById('hamburger'),mobMenu=document.getElementById('mobileMenu');
ham.addEventListener('click',()=>{ham.classList.toggle('open');mobMenu.classList.toggle('open');document.body.style.overflow=mobMenu.classList.contains('open')?'hidden':''});
document.querySelectorAll('.nbtn').forEach(btn=>btn.addEventListener('click',event=>{
    event.stopPropagation();
    const group=btn.closest('.ndrop');
    document.querySelectorAll('.ndrop.open').forEach(item=>{if(item!==group)item.classList.remove('open')});
    group.classList.toggle('open');
}));
document.addEventListener('click',()=>document.querySelectorAll('.ndrop.open').forEach(item=>item.classList.remove('open')));
function toggleMobSub(el){el.classList.toggle('active');el.nextElementSibling.classList.toggle('open')}
function closeMenu(){ham.classList.remove('open');mobMenu.classList.remove('open');document.body.style.overflow=''}
`,Hh=`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
:root{--navy:#071426;--navy2:#0b1d38;--blue:#1673ff;--light:#f4f7fb;--text:#13233f;--muted:#66758b;--line:#dfe7f1}
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:Manrope,sans-serif;color:var(--text);background:#fff;line-height:1.65}a{text-decoration:none;color:inherit}
.site-header{height:72px;background:#081227;color:#fff;position:sticky;top:0;z-index:1000;border-bottom:1px solid rgba(255,255,255,.08)}.header-inner{max-width:1200px;height:100%;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:28px}.brand{font-size:25px;font-weight:800;letter-spacing:-1px}.brand span{color:var(--blue)}.nav{display:flex;align-items:center;gap:8px}.nav>a,.nav-group>button{font:600 14px Manrope;color:rgba(255,255,255,.78);background:none;border:0;padding:11px 13px;border-radius:8px;cursor:pointer}.nav>a:hover,.nav-group:hover>button{background:rgba(255,255,255,.1);color:#fff}.nav-group{position:relative}.drop{display:none;position:absolute;top:100%;left:0;background:#fff;color:var(--text);min-width:250px;padding:10px;border-radius:14px;box-shadow:0 18px 55px rgba(0,0,0,.25)}.drop a{display:block;padding:10px 13px;border-radius:8px;font-size:13px}.drop a:hover{background:#edf4ff;color:var(--blue)}.nav-group:hover .drop{display:block}.head-cta{background:var(--blue);padding:10px 17px;border-radius:9px;font-weight:700;font-size:13px}.menu-btn{display:none;background:none;border:0;color:#fff;font-size:26px}
.hero{background:radial-gradient(circle at 85% 20%,rgba(22,115,255,.3),transparent 28%),linear-gradient(135deg,#061124,#0a2142);color:#fff;padding:92px 28px 105px;overflow:hidden}.hero-inner{max-width:1200px;margin:auto}.crumb{font-size:13px;color:rgba(255,255,255,.5);margin-bottom:28px}.crumb a{color:#84b8ff}.eyebrow{display:inline-flex;align-items:center;gap:9px;color:#85b9ff;text-transform:uppercase;letter-spacing:.15em;font-size:12px;font-weight:800;margin-bottom:17px}.eyebrow:before{content:'';width:28px;height:2px;background:var(--blue)}h1{max-width:850px;font-size:clamp(38px,6vw,74px);line-height:1.04;letter-spacing:-.045em;margin-bottom:24px}.hero-copy{max-width:720px;color:rgba(255,255,255,.66);font-size:18px}.hero-actions{display:flex;gap:12px;margin-top:34px}.btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 20px;border-radius:9px;font-weight:700;font-size:14px}.btn-blue{background:var(--blue);color:#fff}.btn-ghost{border:1px solid rgba(255,255,255,.24);color:#fff}
.section{padding:88px 28px}.section.alt{background:var(--light)}.wrap{max-width:1200px;margin:auto}.intro-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:80px}.kicker{color:var(--blue);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.15em}.section h2{font-size:clamp(28px,4vw,46px);line-height:1.16;letter-spacing:-.035em;margin-top:12px}.lead{font-size:18px;color:var(--muted)}.body-copy{color:var(--muted);margin-top:18px}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:42px}.card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px;transition:.25s}.card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(16,44,84,.1);border-color:#b9d4ff}.card-num{width:38px;height:38px;border-radius:10px;display:grid;place-items:center;background:#eaf2ff;color:var(--blue);font-weight:800;margin-bottom:22px}.card h3{font-size:19px;margin-bottom:9px}.card p{color:var(--muted);font-size:14px}.stats{display:grid;grid-template-columns:repeat(3,1fr);background:var(--navy);border-radius:18px;margin-top:48px;overflow:hidden}.stat{padding:32px;text-align:center;color:#fff;border-right:1px solid rgba(255,255,255,.1)}.stat:last-child{border:0}.stat strong{display:block;font-size:36px;color:#62a1ff}.stat span{font-size:13px;color:rgba(255,255,255,.55)}
.cta{padding:80px 28px;background:#0b1d38;color:#fff}.cta-inner{max-width:1200px;margin:auto;display:flex;justify-content:space-between;align-items:center;gap:30px}.cta h2{font-size:clamp(28px,4vw,46px);line-height:1.15;max-width:700px}.site-footer{background:#050d19;color:rgba(255,255,255,.5);padding:32px 28px}.footer-inner{max-width:1200px;margin:auto;display:flex;justify-content:space-between;gap:20px;font-size:13px}.footer-links{display:flex;gap:22px}.footer-links a:hover{color:#fff}
@media(max-width:900px){.nav,.head-cta{display:none}.menu-btn{display:block}.nav.open{display:flex;position:fixed;inset:72px 0 0;background:#081227;flex-direction:column;align-items:stretch;padding:20px;overflow:auto}.nav.open>a,.nav.open .nav-group>button{text-align:left;width:100%}.nav.open .drop{display:block;position:static;background:rgba(255,255,255,.06);color:#fff;box-shadow:none;margin:4px 0 12px}.intro-grid{grid-template-columns:1fr;gap:30px}.cards{grid-template-columns:1fr 1fr}.hero{padding-top:70px}.cta-inner{align-items:flex-start;flex-direction:column}}
@media(max-width:600px){.header-inner{padding:0 18px}.hero,.section,.cta{padding-left:18px;padding-right:18px}.hero{padding-top:56px;padding-bottom:70px}.cards,.stats{grid-template-columns:1fr}.stat{border-right:0;border-bottom:1px solid rgba(255,255,255,.1)}.footer-inner{flex-direction:column}.footer-links{flex-wrap:wrap}}

/* Homepage header shared by every subpage */
.hdr{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(10,18,40,.97);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.hdr-inner{max-width:1360px;margin:0 auto;padding:0 40px;height:68px;display:flex;align-items:center;gap:8px}.logo{display:flex;align-items:center;gap:10px;margin-right:24px;flex-shrink:0}.logo-txt{font-size:21px;font-weight:700;color:#fff;letter-spacing:-.2px}.logo-txt span{color:#1673ff;font-weight:800}.hdr nav{display:flex;align-items:center;flex:1}.ndrop{position:relative}.nbtn{background:none;border:0;font-family:inherit;font-size:14px;font-weight:500;color:rgba(255,255,255,.85);padding:8px 14px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:5px;white-space:nowrap}.nbtn:hover,.nbtn:focus{color:#fff;background:rgba(255,255,255,.09);outline:0}.nbtn svg,.lang svg,.mob-link svg{width:10px;height:6px;transition:transform .2s}.ndrop:hover .nbtn svg,.ndrop:focus-within .nbtn svg,.ndrop.open .nbtn svg{transform:rotate(180deg)}.ndrop:hover .drop,.ndrop:focus-within .drop,.ndrop.open .drop{display:block}.hdr .drop{top:100%;min-width:260px;padding:8px;border:1px solid rgba(0,0,0,.05);box-shadow:0 20px 60px rgba(0,0,0,.15);pointer-events:auto}.hdr .drop a{padding:9px 14px;font-size:13.5px;line-height:1.4;cursor:pointer}.hdr-right{margin-left:auto;display:flex;align-items:center;gap:20px;flex-shrink:0}.lang{color:rgba(255,255,255,.75);font-size:13.5px;font-weight:600;display:flex;align-items:center;gap:4px}.btn-git{background:#1673ff;color:#fff;border-radius:100px;padding:11px 26px;font-size:14px;font-weight:600}.hamburger{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:40px;height:40px;margin-left:auto;background:none;border:0}.hamburger span{display:block;width:24px;height:2px;background:#fff;border-radius:2px;transition:.3s}.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}.hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}.mobile-menu{display:none;position:fixed;top:68px;left:0;right:0;bottom:0;background:rgba(4,12,28,.98);z-index:999;overflow-y:auto;padding:16px 0 40px;flex-direction:column}.mobile-menu.open{display:flex}.mob-item{border-bottom:1px solid rgba(255,255,255,.07)}.mob-link{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;font-size:16px;font-weight:500;color:rgba(255,255,255,.88);cursor:pointer}.mob-link.active svg{transform:rotate(180deg)}.mob-sub{display:none;background:rgba(255,255,255,.04);padding:4px 0}.mob-sub.open{display:block}.mob-sub a{display:block;padding:12px 40px;font-size:14px;color:rgba(255,255,255,.6)}.mob-sub a:hover{color:#fff}.mob-cta{margin:24px 24px 0;display:block;background:#1673ff;color:#fff;text-align:center;padding:16px;border-radius:100px;font-size:16px;font-weight:600}.hero{padding-top:160px}
@media(max-width:1024px){.hdr nav,.hdr-right{display:none}.hamburger{display:flex}.hdr-inner{padding:0 24px}}
@media(max-width:600px){.hdr-inner{padding:0 20px}.hero{padding-top:124px}}
`;function Rh(){const v=Uh.match(/const pages=(\{[\s\S]*?\});\s*const slug=/);return v?Function(`"use strict"; return (${v[1]});`)():{}}const Df=Rh(),Yh=[["About Us",[["Who We Are","who-we-are"],["Careers","careers"],["Contacts","contactus"],["Leadership","leadership"]]],["Success Stories",[["Cloud ecosystem for EV charging","ev-charging"],["AI-Based Market Access Tool","market-access"],["Multi-currency Wallet","multi-currency-wallet"],["IoT Cloud Platform","iot-cloud-platform"],["Smart HVAC Monitoring with AI","smart-hvac"]]],["Services",[["IoT Development Services","iot-development"],["AI Development","ai-development"],["AI Agent Development","ai-agent-development"],["eCommerce Platform Development","ecommerce-development"],["Fintech Software Development","fintech-development"],["Blockchain Development","blockchain-development"],["Full-cycle Development","full-cycle-development"]]],["Insights",[["News","news"],["Opensource","opensource"],["Blog","blog"]]]];function qh(){return S.jsx(S.Fragment,{children:S.jsx("header",{className:"hdr",children:S.jsxs("div",{className:"hdr-inner",children:[S.jsxs("a",{href:xe("/"),className:"logo",children:[S.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("path",{d:"M6 8 L18 2 L30 8 L26 14 L18 11 L10 14 Z",fill:"#1673FF"}),S.jsx("path",{d:"M6 8 L10 14 L6 20 L18 34 L30 20 L26 14 L18 11 L10 14 Z",fill:"#1673FF",opacity:".85"}),S.jsx("path",{d:"M10 14 L18 11 L26 14 L18 28 Z",fill:"rgba(255,255,255,0.35)"})]}),S.jsxs("span",{className:"logo-txt",children:["Sakin",S.jsx("span",{children:".zo"})]})]}),S.jsx("nav",{children:Yh.map(([v,A])=>S.jsxs("div",{className:"ndrop",children:[S.jsxs("button",{className:"nbtn",children:[v,S.jsx("svg",{viewBox:"0 0 10 6",fill:"none",children:S.jsx("path",{d:"M1 1L5 5L9 1",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})]}),S.jsx("div",{className:"drop",children:A.map(([M,d])=>S.jsx("a",{href:xe(d),children:M},d))})]},v))}),S.jsxs("div",{className:"hdr-right",children:[S.jsx("span",{className:"lang",children:"EN"}),S.jsx("a",{href:`${xe("contactus")}#form-section`,className:"btn-git",children:"Get in touch"})]})]})})})}function Qh({slug:v}){const A=Df[v]||Df["who-we-are"],M=De.useMemo(()=>A.cards||[],[A]);return De.useEffect(()=>{const d=document.createElement("style");return d.dataset.reactManaged="subpage",d.textContent=Hh,document.head.appendChild(d),Ca(document),()=>d.remove()},[]),S.jsxs(S.Fragment,{children:[S.jsx(qh,{}),S.jsxs("main",{children:[S.jsx("section",{className:"hero",children:S.jsxs("div",{className:"hero-inner",children:[S.jsxs("div",{className:"crumb",children:[S.jsx("a",{href:xe("/"),children:"Home"})," / ",A.cat]}),S.jsx("div",{className:"eyebrow",children:A.cat}),S.jsx("h1",{children:A.title}),S.jsx("p",{className:"hero-copy",children:A.intro}),S.jsxs("div",{className:"hero-actions",children:[S.jsx("a",{className:"btn btn-blue",href:`${xe("contactus")}#form-section`,children:"Start a conversation >"}),S.jsx("a",{className:"btn btn-ghost",href:"#overview",children:"Explore more"})]})]})}),S.jsx("section",{className:"section",id:"overview",children:S.jsxs("div",{className:"wrap intro-grid",children:[S.jsxs("div",{children:[S.jsx("span",{className:"kicker",children:"What we do"}),S.jsx("h2",{children:A.heading})]}),S.jsxs("div",{children:[S.jsx("p",{className:"lead",children:A.intro}),S.jsx("p",{className:"body-copy",children:A.body})]})]})}),S.jsx("section",{className:"section alt",children:S.jsxs("div",{className:"wrap",children:[S.jsx("span",{className:"kicker",children:"Our approach"}),S.jsx("h2",{children:"Built around outcomes"}),S.jsx("div",{className:"cards",children:M.map((d,j)=>S.jsxs("article",{className:"card",children:[S.jsxs("div",{className:"card-num",children:["0",j+1]}),S.jsx("h3",{children:d[0]}),S.jsx("p",{children:d[1]})]},d[0]))}),A.stats&&S.jsx("div",{className:"stats",children:A.stats.map(d=>S.jsxs("div",{className:"stat",children:[S.jsx("strong",{children:d[0]}),S.jsx("span",{children:d[1]})]},d[1]))})]})}),S.jsx("section",{className:"cta",children:S.jsxs("div",{className:"cta-inner",children:[S.jsx("h2",{children:"Have a challenge worth solving?"}),S.jsx("a",{className:"btn btn-blue",href:`${xe("contactus")}#form-section`,children:"Tell us about your project >"})]})})]}),S.jsx("footer",{className:"site-footer",children:S.jsxs("div",{className:"footer-inner",children:[S.jsxs("a",{className:"brand",href:xe("/"),children:["Sakin",S.jsx("span",{children:".zo"})]}),S.jsxs("div",{className:"footer-links",children:[S.jsx("a",{href:xe("who-we-are"),children:"About"}),S.jsx("a",{href:xe("careers"),children:"Careers"}),S.jsx("a",{href:xe("blog"),children:"Insights"}),S.jsx("a",{href:xe("contactus"),children:"Contact"})]}),S.jsxs("span",{children:["© ",new Date().getFullYear()," Sakinzo"]})]})})]})}function Gh(v){return new Promise((A,M)=>{const d=document.querySelector(`script[src="${v}"]`);if(d){d.dataset.loaded==="true"?A():d.addEventListener("load",A,{once:!0});return}const j=document.createElement("script");j.src=v,j.dataset.reactManaged="true",j.addEventListener("load",()=>{j.dataset.loaded="true",A()},{once:!0}),j.addEventListener("error",M,{once:!0}),document.head.appendChild(j)})}const Zh=new Set(["who-we-are","careers","leadership","ev-charging","market-access","multi-currency-wallet","iot-cloud-platform","smart-hvac","iot-development","ai-development","ai-agent-development","ecommerce-development","fintech-development","blockchain-development","full-cycle-development","news","opensource","blog"]);function Of(){const v=De.useRef(!1),[A,M]=De.useState(""),d=vh();return De.useEffect(()=>{if(v.current)return;v.current=!0;const j=document.createElement("style");j.dataset.reactManaged="homepage",j.textContent=d.css,document.head.appendChild(j);const H=document.createElement("link");H.rel="stylesheet",H.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",H.dataset.reactManaged="true",document.head.appendChild(H);let G;const gn=new MutationObserver(()=>Ca(document));return gn.observe(document.body,{childList:!0,subtree:!0}),Gh("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js").catch(()=>{}).finally(()=>{G=document.createElement("script"),G.dataset.reactManaged="homepage",G.textContent=d.script.replace(/project\.html\?id=/g,`${xe("project")}?id=`),document.body.appendChild(G),document.dispatchEvent(new Event("DOMContentLoaded")),Ca(document)}).catch(L=>M((L==null?void 0:L.message)||"The page could not be initialized.")),()=>{j.remove(),H.remove(),G==null||G.remove(),gn.disconnect()}},[d]),d.css?S.jsxs(S.Fragment,{children:[A&&S.jsx("div",{className:"react-notice",role:"status",children:A}),S.jsx(xh,{}),S.jsxs("main",{children:[S.jsx(yh,{}),S.jsx(wh,{}),S.jsx(Sh,{}),S.jsx(kh,{}),S.jsx(zh,{}),S.jsx(Ah,{}),S.jsx(Eh,{}),S.jsx(Th,{}),S.jsx(Mh,{}),S.jsx(Ch,{}),S.jsx(jh,{})]}),S.jsx(Dh,{})]}):S.jsxs("main",{className:"react-error",children:[S.jsx("h1",{children:"Unable to load the website"}),S.jsx("p",{children:"The source homepage could not be parsed."})]})}function Xh(){const[v,A]=De.useState(hc());return De.useEffect(()=>{const M=()=>A(hc()),d=j=>{var L,z;const H=(z=(L=j.target).closest)==null?void 0:z.call(L,"a[href]");if(!H||H.target||j.defaultPrevented)return;const G=bc(H.getAttribute("href"));if(!G||G.startsWith("#"))return;const gn=new URL(G,window.location.origin);gn.origin===window.location.origin&&(j.preventDefault(),window.history.pushState({},"",`${gn.pathname}${gn.search}${gn.hash}`),A(hc()))};return window.addEventListener("popstate",M),document.addEventListener("click",d),()=>{window.removeEventListener("popstate",M),document.removeEventListener("click",d)}},[]),De.useEffect(()=>{Ca(document),window.location.hash?setTimeout(()=>{var M;return(M=document.querySelector(window.location.hash))==null?void 0:M.scrollIntoView({behavior:"smooth"})},50):window.scrollTo({top:0,behavior:"instant"})},[v]),v?v==="contactus"||v==="project"?S.jsx(Nh,{slug:v}):Zh.has(v)?S.jsx(Qh,{slug:v}):S.jsx(Of,{}):S.jsx(Of,{})}ph.createRoot(document.getElementById("root")).render(S.jsx(Xh,{}));
