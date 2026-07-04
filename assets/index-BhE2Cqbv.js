function ev(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ih={exports:{}},io={},Fh={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pi=Symbol.for("react.element"),tv=Symbol.for("react.portal"),nv=Symbol.for("react.fragment"),rv=Symbol.for("react.strict_mode"),iv=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),ov=Symbol.for("react.context"),av=Symbol.for("react.forward_ref"),lv=Symbol.for("react.suspense"),cv=Symbol.for("react.memo"),uv=Symbol.for("react.lazy"),gu=Symbol.iterator;function dv(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var Vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dh=Object.assign,Oh={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Oh,this.updater=n||Vh}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bh(){}Bh.prototype=lr.prototype;function _l(e,t,n){this.props=e,this.context=t,this.refs=Oh,this.updater=n||Vh}var Il=_l.prototype=new Bh;Il.constructor=_l;Dh(Il,lr.prototype);Il.isPureReactComponent=!0;var vu=Array.isArray,zh=Object.prototype.hasOwnProperty,Fl={current:null},Hh={key:!0,ref:!0,__self:!0,__source:!0};function Uh(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)zh.call(t,r)&&!Hh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:pi,type:e,key:s,ref:o,props:i,_owner:Fl.current}}function fv(e,t){return{$$typeof:pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===pi}function hv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xu=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hv(""+e.key):t.toString(36)}function ts(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pi:case tv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ao(o,0):r,vu(i)?(n="",e!=null&&(n=e.replace(xu,"$&/")+"/"),ts(i,t,n,"",function(u){return u})):i!=null&&(Vl(i)&&(i=fv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",vu(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Ao(s,l);o+=ts(s,t,n,c,i)}else if(c=dv(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Ao(s,l++),o+=ts(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Pi(e,t,n){if(e==null)return e;var r=[],i=0;return ts(e,r,"","",function(s){return t.call(n,s,i++)}),r}function pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},ns={transition:null},mv={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:ns,ReactCurrentOwner:Fl};function $h(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Pi,forEach:function(e,t,n){Pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pi(e,function(){t++}),t},toArray:function(e){return Pi(e,function(t){return t})||[]},only:function(e){if(!Vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=lr;I.Fragment=nv;I.Profiler=iv;I.PureComponent=_l;I.StrictMode=rv;I.Suspense=lv;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mv;I.act=$h;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dh({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Fl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)zh.call(t,c)&&!Hh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:pi,type:e.type,key:i,ref:s,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:ov,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sv,_context:e},e.Consumer=e};I.createElement=Uh;I.createFactory=function(e){var t=Uh.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:av,render:e}};I.isValidElement=Vl;I.lazy=function(e){return{$$typeof:uv,_payload:{_status:-1,_result:e},_init:pv}};I.memo=function(e,t){return{$$typeof:cv,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=ns.transition;ns.transition={};try{e()}finally{ns.transition=t}};I.unstable_act=$h;I.useCallback=function(e,t){return Ne.current.useCallback(e,t)};I.useContext=function(e){return Ne.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ne.current.useEffect(e,t)};I.useId=function(){return Ne.current.useId()};I.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ne.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};I.useRef=function(e){return Ne.current.useRef(e)};I.useState=function(e){return Ne.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ne.current.useTransition()};I.version="18.3.1";Fh.exports=I;var y=Fh.exports;const ke=_h(y),gv=ev({__proto__:null,default:ke},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=y,xv=Symbol.for("react.element"),yv=Symbol.for("react.fragment"),wv=Object.prototype.hasOwnProperty,bv=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nv={key:!0,ref:!0,__self:!0,__source:!0};function Wh(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)wv.call(t,r)&&!Nv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xv,type:e,key:s,ref:o,props:i,_owner:bv.current}}io.Fragment=yv;io.jsx=Wh;io.jsxs=Wh;Ih.exports=io;var a=Ih.exports,Gh={exports:{}},Ie={},Kh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var _=T.length;T.push(M);e:for(;0<_;){var q=_-1>>>1,oe=T[q];if(0<i(oe,M))T[q]=M,T[_]=oe,_=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],_=T.pop();if(_!==M){T[0]=_;e:for(var q=0,oe=T.length,ki=oe>>>1;q<ki;){var en=2*(q+1)-1,Lo=T[en],tn=en+1,Ti=T[tn];if(0>i(Lo,_))tn<oe&&0>i(Ti,Lo)?(T[q]=Ti,T[tn]=_,q=tn):(T[q]=Lo,T[en]=_,q=en);else if(tn<oe&&0>i(Ti,_))T[q]=Ti,T[tn]=_,q=tn;else break e}}return M}function i(T,M){var _=T.sortIndex-M.sortIndex;return _!==0?_:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,f=null,h=3,v=!1,x=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function b(T){if(w=!1,g(T),!x)if(n(c)!==null)x=!0,Si(j);else{var M=n(u);M!==null&&ne(b,M.startTime-T)}}function j(T,M){x=!1,w&&(w=!1,m(S),S=-1),v=!0;var _=h;try{for(g(M),f=n(c);f!==null&&(!(f.expirationTime>M)||T&&!se());){var q=f.callback;if(typeof q=="function"){f.callback=null,h=f.priorityLevel;var oe=q(f.expirationTime<=M);M=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(c)&&r(c),g(M)}else r(c);f=n(c)}if(f!==null)var ki=!0;else{var en=n(u);en!==null&&ne(b,en.startTime-M),ki=!1}return ki}finally{f=null,h=_,v=!1}}var k=!1,P=null,S=-1,V=5,A=-1;function se(){return!(e.unstable_now()-A<V)}function Ct(){if(P!==null){var T=e.unstable_now();A=T;var M=!0;try{M=P(!0,T)}finally{M?Jt():(k=!1,P=null)}}else k=!1}var Jt;if(typeof p=="function")Jt=function(){p(Ct)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,mu=hr.port2;hr.port1.onmessage=Ct,Jt=function(){mu.postMessage(null)}}else Jt=function(){N(Ct,0)};function Si(T){P=T,k||(k=!0,Jt())}function ne(T,M){S=N(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Si(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var _=h;h=M;try{return T()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var _=h;h=T;try{return M()}finally{h=_}},e.unstable_scheduleCallback=function(T,M,_){var q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?q+_:q):_=q,T){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=_+oe,T={id:d++,callback:M,priorityLevel:T,startTime:_,expirationTime:oe,sortIndex:-1},_>q?(T.sortIndex=_,t(u,T),n(c)===null&&T===n(u)&&(w?(m(S),S=-1):w=!0,ne(b,_-q))):(T.sortIndex=oe,t(c,T),x||v||(x=!0,Si(j))),T},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(T){var M=h;return function(){var _=h;h=M;try{return T.apply(this,arguments)}finally{h=_}}}})(Yh);Kh.exports=Yh;var jv=Kh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv=y,Me=jv;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xh=new Set,Wr={};function bn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Wr[e]=t,e=0;e<t.length;e++)Xh.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,Sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yu={},wu={};function kv(e){return wa.call(wu,e)?!0:wa.call(yu,e)?!1:Sv.test(e)?wu[e]=!0:(yu[e]=!0,!1)}function Tv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pv(e,t,n,r){if(t===null||typeof t>"u"||Tv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dl=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dl,Ol);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dl,Ol);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dl,Ol);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pv(t,n,i,r)&&(n=null),r||i===null?kv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),En=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Qh=Symbol.for("react.provider"),qh=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),ja=Symbol.for("react.suspense_list"),Ul=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Zh=Symbol.for("react.offscreen"),bu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Mo;function Cr(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var _o=!1;function Io(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Ev(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=Io(e.type,!1),e;case 11:return e=Io(e.type.render,!1),e;case 1:return e=Io(e.type,!0),e;default:return""}}function Ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case En:return"Portal";case ba:return"Profiler";case zl:return"StrictMode";case Na:return"Suspense";case ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qh:return(e.displayName||"Context")+".Consumer";case Qh:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ul:return t=e.displayName||null,t!==null?t:Ca(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Ca(e(t))}catch{}}return null}function Rv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(t);case 8:return t===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lv(e){var t=Jh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ri(e){e._valueTracker||(e._valueTracker=Lv(e))}function ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sa(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tp(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function ka(e,t){tp(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ta(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ta(e,t,n){(t!=="number"||bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Sr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function np(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,ip=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Av=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){Av.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function sp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function op(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Mv=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(e,t){if(t){if(Mv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function La(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Kn=null,Yn=null;function ku(e){if(e=vi(e)){if(typeof Ma!="function")throw Error(C(280));var t=e.stateNode;t&&(t=co(t),Ma(e.stateNode,e.type,t))}}function ap(e){Kn?Yn?Yn.push(e):Yn=[e]:Kn=e}function lp(){if(Kn){var e=Kn,t=Yn;if(Yn=Kn=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function cp(e,t){return e(t)}function up(){}var Fo=!1;function dp(e,t,n){if(Fo)return e(t,n);Fo=!0;try{return cp(e,t,n)}finally{Fo=!1,(Kn!==null||Yn!==null)&&(up(),lp())}}function Kr(e,t){var n=e.stateNode;if(n===null)return null;var r=co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var _a=!1;if(yt)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){_a=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{_a=!1}function _v(e,t,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ar=!1,Ns=null,js=!1,Ia=null,Iv={onError:function(e){Ar=!0,Ns=e}};function Fv(e,t,n,r,i,s,o,l,c){Ar=!1,Ns=null,_v.apply(Iv,arguments)}function Vv(e,t,n,r,i,s,o,l,c){if(Fv.apply(this,arguments),Ar){if(Ar){var u=Ns;Ar=!1,Ns=null}else throw Error(C(198));js||(js=!0,Ia=u)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(Nn(e)!==e)throw Error(C(188))}function Dv(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Tu(i),e;if(s===r)return Tu(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function hp(e){return e=Dv(e),e!==null?pp(e):null}function pp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pp(e);if(t!==null)return t;e=e.sibling}return null}var mp=Me.unstable_scheduleCallback,Pu=Me.unstable_cancelCallback,Ov=Me.unstable_shouldYield,Bv=Me.unstable_requestPaint,J=Me.unstable_now,zv=Me.unstable_getCurrentPriorityLevel,Wl=Me.unstable_ImmediatePriority,gp=Me.unstable_UserBlockingPriority,Cs=Me.unstable_NormalPriority,Hv=Me.unstable_LowPriority,vp=Me.unstable_IdlePriority,so=null,it=null;function Uv(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Gv,$v=Math.log,Wv=Math.LN2;function Gv(e){return e>>>=0,e===0?32:31-($v(e)/Wv|0)|0}var Ai=64,Mi=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ss(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=kr(l):(s&=o,s!==0&&(r=kr(s)))}else o=n&~i,o!==0?r=kr(o):s!==0&&(r=kr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Kv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Qe(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Kv(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xp(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Xv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wp,Kl,bp,Np,jp,Va=!1,_i=[],It=null,Ft=null,Vt=null,Yr=new Map,Xr=new Map,Rt=[],Qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function gr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=vi(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qv(e,t,n,r,i){switch(t){case"focusin":return It=gr(It,e,t,n,r,i),!0;case"dragenter":return Ft=gr(Ft,e,t,n,r,i),!0;case"mouseover":return Vt=gr(Vt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yr.set(s,gr(Yr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xr.set(s,gr(Xr.get(s)||null,e,t,n,r,i)),!0}return!1}function Cp(e){var t=ln(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=fp(n),t!==null){e.blockedOn=t,jp(e.priority,function(){bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Aa=r,n.target.dispatchEvent(r),Aa=null}else return t=vi(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){rs(e)&&n.delete(t)}function Zv(){Va=!1,It!==null&&rs(It)&&(It=null),Ft!==null&&rs(Ft)&&(Ft=null),Vt!==null&&rs(Vt)&&(Vt=null),Yr.forEach(Ru),Xr.forEach(Ru)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Va||(Va=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Zv)))}function Qr(e){function t(i){return vr(i,e)}if(0<_i.length){vr(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&vr(It,e),Ft!==null&&vr(Ft,e),Vt!==null&&vr(Vt,e),Yr.forEach(t),Xr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&Rt.shift()}var Xn=jt.ReactCurrentBatchConfig,ks=!0;function Jv(e,t,n,r){var i=z,s=Xn.transition;Xn.transition=null;try{z=1,Yl(e,t,n,r)}finally{z=i,Xn.transition=s}}function ex(e,t,n,r){var i=z,s=Xn.transition;Xn.transition=null;try{z=4,Yl(e,t,n,r)}finally{z=i,Xn.transition=s}}function Yl(e,t,n,r){if(ks){var i=Da(e,t,n,r);if(i===null)Ko(e,t,r,Ts,n),Eu(e,r);else if(qv(i,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<Qv.indexOf(e)){for(;i!==null;){var s=vi(i);if(s!==null&&wp(s),s=Da(e,t,n,r),s===null&&Ko(e,t,r,Ts,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ko(e,t,r,null,n)}}var Ts=null;function Da(e,t,n,r){if(Ts=null,e=$l(r),e=ln(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ts=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zv()){case Wl:return 1;case gp:return 4;case Cs:case Hv:return 16;case vp:return 536870912;default:return 16}default:return 16}}var At=null,Xl=null,is=null;function kp(){if(is)return is;var e,t=Xl,n=t.length,r,i="value"in At?At.value:At.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return is=i.slice(e,1<r?1-r:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Lu(){return!1}function Fe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ii:Lu,this.isPropagationStopped=Lu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Fe(cr),gi=X({},cr,{view:0,detail:0}),tx=Fe(gi),Do,Oo,xr,oo=X({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Do=e.screenX-xr.screenX,Oo=e.screenY-xr.screenY):Oo=Do=0,xr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Au=Fe(oo),nx=X({},oo,{dataTransfer:0}),rx=Fe(nx),ix=X({},gi,{relatedTarget:0}),Bo=Fe(ix),sx=X({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Fe(sx),ax=X({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lx=Fe(ax),cx=X({},cr,{data:0}),Mu=Fe(cx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fx[e])?!!t[e]:!1}function ql(){return hx}var px=X({},gi,{key:function(e){if(e.key){var t=ux[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mx=Fe(px),gx=X({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Fe(gx),vx=X({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),xx=Fe(vx),yx=X({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=Fe(yx),bx=X({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=Fe(bx),jx=[9,13,27,32],Zl=yt&&"CompositionEvent"in window,Mr=null;yt&&"documentMode"in document&&(Mr=document.documentMode);var Cx=yt&&"TextEvent"in window&&!Mr,Tp=yt&&(!Zl||Mr&&8<Mr&&11>=Mr),Iu=" ",Fu=!1;function Pp(e,t){switch(e){case"keyup":return jx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Sx(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(Fu=!0,Iu);case"textInput":return e=t.data,e===Iu&&Fu?null:e;default:return null}}function kx(e,t){if(Ln)return e==="compositionend"||!Zl&&Pp(e,t)?(e=kp(),is=Xl=At=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tp&&t.locale!=="ko"?null:t.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tx[e.type]:t==="textarea"}function Rp(e,t,n,r){ap(r),t=Ps(t,"onChange"),0<t.length&&(n=new Ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,qr=null;function Px(e){zp(e,0)}function ao(e){var t=_n(e);if(ep(t))return e}function Ex(e,t){if(e==="change")return t}var Lp=!1;if(yt){var zo;if(yt){var Ho="oninput"in document;if(!Ho){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),Ho=typeof Du.oninput=="function"}zo=Ho}else zo=!1;Lp=zo&&(!document.documentMode||9<document.documentMode)}function Ou(){_r&&(_r.detachEvent("onpropertychange",Ap),qr=_r=null)}function Ap(e){if(e.propertyName==="value"&&ao(qr)){var t=[];Rp(t,qr,e,$l(e)),dp(Px,t)}}function Rx(e,t,n){e==="focusin"?(Ou(),_r=t,qr=n,_r.attachEvent("onpropertychange",Ap)):e==="focusout"&&Ou()}function Lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(qr)}function Ax(e,t){if(e==="click")return ao(t)}function Mx(e,t){if(e==="input"||e==="change")return ao(t)}function _x(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:_x;function Zr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wa.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var n=Bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function Mp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _p(){for(var e=window,t=bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function Jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ix(e){var t=_p(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mp(n.ownerDocument.documentElement,n)){if(r!==null&&Jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=zu(n,s);var o=zu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fx=yt&&"documentMode"in document&&11>=document.documentMode,An=null,Oa=null,Ir=null,Ba=!1;function Hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ba||An==null||An!==bs(r)||(r=An,"selectionStart"in r&&Jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Zr(Ir,r)||(Ir=r,r=Ps(Oa,"onSelect"),0<r.length&&(t=new Ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function Fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Fi("Animation","AnimationEnd"),animationiteration:Fi("Animation","AnimationIteration"),animationstart:Fi("Animation","AnimationStart"),transitionend:Fi("Transition","TransitionEnd")},Uo={},Ip={};yt&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function lo(e){if(Uo[e])return Uo[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ip)return Uo[e]=t[n];return e}var Fp=lo("animationend"),Vp=lo("animationiteration"),Dp=lo("animationstart"),Op=lo("transitionend"),Bp=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Bp.set(e,t),bn(t,[e])}for(var $o=0;$o<Uu.length;$o++){var Wo=Uu[$o],Vx=Wo.toLowerCase(),Dx=Wo[0].toUpperCase()+Wo.slice(1);Yt(Vx,"on"+Dx)}Yt(Fp,"onAnimationEnd");Yt(Vp,"onAnimationIteration");Yt(Dp,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Op,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vv(r,t,void 0,e),e.currentTarget=null}function zp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;$u(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;$u(i,l,u),s=c}}}if(js)throw e=Ia,js=!1,Ia=null,e}function U(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(Hp(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),Hp(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Vi]){e[Vi]=!0,Xh.forEach(function(n){n!=="selectionchange"&&(Ox.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Go("selectionchange",!1,t))}}function Hp(e,t,n,r){switch(Sp(t)){case 1:var i=Jv;break;case 4:i=ex;break;default:i=Yl}n=i.bind(null,t,n,e),i=void 0,!_a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ko(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ln(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}dp(function(){var u=s,d=$l(n),f=[];e:{var h=Bp.get(e);if(h!==void 0){var v=Ql,x=e;switch(e){case"keypress":if(ss(n)===0)break e;case"keydown":case"keyup":v=mx;break;case"focusin":x="focus",v=Bo;break;case"focusout":x="blur",v=Bo;break;case"beforeblur":case"afterblur":v=Bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xx;break;case Fp:case Vp:case Dp:v=ox;break;case Op:v=wx;break;case"scroll":v=tx;break;case"wheel":v=Nx;break;case"copy":case"cut":case"paste":v=lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=_u}var w=(t&4)!==0,N=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,g;p!==null;){g=p;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Kr(p,m),b!=null&&w.push(ei(p,b,g)))),N)break;p=p.return}0<w.length&&(h=new v(h,x,null,n,d),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Aa&&(x=n.relatedTarget||n.fromElement)&&(ln(x)||x[wt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?ln(x):null,x!==null&&(N=Nn(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=Au,b="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=_u,b="onPointerLeave",m="onPointerEnter",p="pointer"),N=v==null?h:_n(v),g=x==null?h:_n(x),h=new w(b,p+"leave",v,n,d),h.target=N,h.relatedTarget=g,b=null,ln(d)===u&&(w=new w(m,p+"enter",x,n,d),w.target=g,w.relatedTarget=N,b=w),N=b,v&&x)t:{for(w=v,m=x,p=0,g=w;g;g=Tn(g))p++;for(g=0,b=m;b;b=Tn(b))g++;for(;0<p-g;)w=Tn(w),p--;for(;0<g-p;)m=Tn(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Tn(w),m=Tn(m)}w=null}else w=null;v!==null&&Wu(f,h,v,w,!1),x!==null&&N!==null&&Wu(f,N,x,w,!0)}}e:{if(h=u?_n(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=Ex;else if(Vu(h))if(Lp)j=Mx;else{j=Lx;var k=Rx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Ax);if(j&&(j=j(e,u))){Rp(f,j,n,d);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Ta(h,"number",h.value)}switch(k=u?_n(u):window,e){case"focusin":(Vu(k)||k.contentEditable==="true")&&(An=k,Oa=u,Ir=null);break;case"focusout":Ir=Oa=An=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Hu(f,n,d);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Hu(f,n,d)}var P;if(Zl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ln?Pp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Tp&&n.locale!=="ko"&&(Ln||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ln&&(P=kp()):(At=d,Xl="value"in At?At.value:At.textContent,Ln=!0)),k=Ps(u,S),0<k.length&&(S=new Mu(S,e,null,n,d),f.push({event:S,listeners:k}),P?S.data=P:(P=Ep(n),P!==null&&(S.data=P)))),(P=Cx?Sx(e,n):kx(e,n))&&(u=Ps(u,"onBeforeInput"),0<u.length&&(d=new Mu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}zp(f,t)})}function ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Kr(e,n),s!=null&&r.unshift(ei(e,s,i)),s=Kr(e,t),s!=null&&r.push(ei(e,s,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Kr(n,s),c!=null&&o.unshift(ei(n,c,l))):i||(c=Kr(n,s),c!=null&&o.push(ei(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Bx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(zx,"")}function Di(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(C(425))}function Es(){}var za=null,Ha=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch($x)}:$a;function $x(e){setTimeout(function(){throw e})}function Yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),nt="__reactFiber$"+ur,ti="__reactProps$"+ur,wt="__reactContainer$"+ur,Wa="__reactEvents$"+ur,Wx="__reactListeners$"+ur,Gx="__reactHandles$"+ur;function ln(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yu(e);e!==null;){if(n=e[nt])return n;e=Yu(e)}return t}e=n,n=e.parentNode}return null}function vi(e){return e=e[nt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function co(e){return e[ti]||null}var Ga=[],In=-1;function Xt(e){return{current:e}}function $(e){0>In||(e.current=Ga[In],Ga[In]=null,In--)}function H(e,t){In++,Ga[In]=e.current,e.current=t}var Wt={},ye=Xt(Wt),Te=Xt(!1),mn=Wt;function er(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Rs(){$(Te),$(ye)}function Xu(e,t,n){if(ye.current!==Wt)throw Error(C(168));H(ye,t),H(Te,n)}function Up(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Rv(e)||"Unknown",i));return X({},n,r)}function Ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,mn=ye.current,H(ye,e),H(Te,Te.current),!0}function Qu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Up(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,$(Te),$(ye),H(ye,e)):$(Te),H(Te,n)}var ut=null,uo=!1,Xo=!1;function $p(e){ut===null?ut=[e]:ut.push(e)}function Kx(e){uo=!0,$p(e)}function Qt(){if(!Xo&&ut!==null){Xo=!0;var e=0,t=z;try{var n=ut;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,uo=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),mp(Wl,Qt),i}finally{z=t,Xo=!1}}return null}var Fn=[],Vn=0,As=null,Ms=0,Oe=[],Be=0,gn=null,dt=1,ft="";function rn(e,t){Fn[Vn++]=Ms,Fn[Vn++]=As,As=e,Ms=t}function Wp(e,t,n){Oe[Be++]=dt,Oe[Be++]=ft,Oe[Be++]=gn,gn=e;var r=dt;e=ft;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var s=32-Qe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Qe(t)+i|n<<i|r,ft=s+e}else dt=1<<s|n<<i|r,ft=e}function ec(e){e.return!==null&&(rn(e,1),Wp(e,1,0))}function tc(e){for(;e===As;)As=Fn[--Vn],Fn[Vn]=null,Ms=Fn[--Vn],Fn[Vn]=null;for(;e===gn;)gn=Oe[--Be],Oe[Be]=null,ft=Oe[--Be],Oe[Be]=null,dt=Oe[--Be],Oe[Be]=null}var Ae=null,Le=null,W=!1,Xe=null;function Gp(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Le=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Le=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ya(e){if(W){var t=Le;if(t){var n=t;if(!qu(e,t)){if(Ka(e))throw Error(C(418));t=Dt(n.nextSibling);var r=Ae;t&&qu(e,t)?Gp(r,n):(e.flags=e.flags&-4097|2,W=!1,Ae=e)}}else{if(Ka(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,Ae=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Oi(e){if(e!==Ae)return!1;if(!W)return Zu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=Le)){if(Ka(e))throw Kp(),Error(C(418));for(;t;)Gp(e,t),t=Dt(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ae?Dt(e.stateNode.nextSibling):null;return!0}function Kp(){for(var e=Le;e;)e=Dt(e.nextSibling)}function tr(){Le=Ae=null,W=!1}function nc(e){Xe===null?Xe=[e]:Xe.push(e)}var Yx=jt.ReactCurrentBatchConfig;function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ju(e){var t=e._init;return t(e._payload)}function Yp(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ht(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,b){return p===null||p.tag!==6?(p=na(g,m.mode,b),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g,b){var j=g.type;return j===Rn?d(m,p,g.props.children,b,g.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pt&&Ju(j)===p.type)?(b=i(p,g.props),b.ref=yr(m,p,g),b.return=m,b):(b=fs(g.type,g.key,g.props,null,m.mode,b),b.ref=yr(m,p,g),b.return=m,b)}function u(m,p,g,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ra(g,m.mode,b),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,b,j){return p===null||p.tag!==7?(p=hn(g,m.mode,b,j),p.return=m,p):(p=i(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=na(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ei:return g=fs(p.type,p.key,p.props,null,m.mode,g),g.ref=yr(m,null,p),g.return=m,g;case En:return p=ra(p,m.mode,g),p.return=m,p;case Pt:var b=p._init;return f(m,b(p._payload),g)}if(Sr(p)||pr(p))return p=hn(p,m.mode,g,null),p.return=m,p;Bi(m,p)}return null}function h(m,p,g,b){var j=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:l(m,p,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:return g.key===j?c(m,p,g,b):null;case En:return g.key===j?u(m,p,g,b):null;case Pt:return j=g._init,h(m,p,j(g._payload),b)}if(Sr(g)||pr(g))return j!==null?null:d(m,p,g,b,null);Bi(m,g)}return null}function v(m,p,g,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,l(p,m,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ei:return m=m.get(b.key===null?g:b.key)||null,c(p,m,b,j);case En:return m=m.get(b.key===null?g:b.key)||null,u(p,m,b,j);case Pt:var k=b._init;return v(m,p,g,k(b._payload),j)}if(Sr(b)||pr(b))return m=m.get(g)||null,d(p,m,b,j,null);Bi(p,b)}return null}function x(m,p,g,b){for(var j=null,k=null,P=p,S=p=0,V=null;P!==null&&S<g.length;S++){P.index>S?(V=P,P=null):V=P.sibling;var A=h(m,P,g[S],b);if(A===null){P===null&&(P=V);break}e&&P&&A.alternate===null&&t(m,P),p=s(A,p,S),k===null?j=A:k.sibling=A,k=A,P=V}if(S===g.length)return n(m,P),W&&rn(m,S),j;if(P===null){for(;S<g.length;S++)P=f(m,g[S],b),P!==null&&(p=s(P,p,S),k===null?j=P:k.sibling=P,k=P);return W&&rn(m,S),j}for(P=r(m,P);S<g.length;S++)V=v(P,m,S,g[S],b),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?S:V.key),p=s(V,p,S),k===null?j=V:k.sibling=V,k=V);return e&&P.forEach(function(se){return t(m,se)}),W&&rn(m,S),j}function w(m,p,g,b){var j=pr(g);if(typeof j!="function")throw Error(C(150));if(g=j.call(g),g==null)throw Error(C(151));for(var k=j=null,P=p,S=p=0,V=null,A=g.next();P!==null&&!A.done;S++,A=g.next()){P.index>S?(V=P,P=null):V=P.sibling;var se=h(m,P,A.value,b);if(se===null){P===null&&(P=V);break}e&&P&&se.alternate===null&&t(m,P),p=s(se,p,S),k===null?j=se:k.sibling=se,k=se,P=V}if(A.done)return n(m,P),W&&rn(m,S),j;if(P===null){for(;!A.done;S++,A=g.next())A=f(m,A.value,b),A!==null&&(p=s(A,p,S),k===null?j=A:k.sibling=A,k=A);return W&&rn(m,S),j}for(P=r(m,P);!A.done;S++,A=g.next())A=v(P,m,S,A.value,b),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?S:A.key),p=s(A,p,S),k===null?j=A:k.sibling=A,k=A);return e&&P.forEach(function(Ct){return t(m,Ct)}),W&&rn(m,S),j}function N(m,p,g,b){if(typeof g=="object"&&g!==null&&g.type===Rn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:e:{for(var j=g.key,k=p;k!==null;){if(k.key===j){if(j=g.type,j===Rn){if(k.tag===7){n(m,k.sibling),p=i(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pt&&Ju(j)===k.type){n(m,k.sibling),p=i(k,g.props),p.ref=yr(m,k,g),p.return=m,m=p;break e}n(m,k);break}else t(m,k);k=k.sibling}g.type===Rn?(p=hn(g.props.children,m.mode,b,g.key),p.return=m,m=p):(b=fs(g.type,g.key,g.props,null,m.mode,b),b.ref=yr(m,p,g),b.return=m,m=b)}return o(m);case En:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ra(g,m.mode,b),p.return=m,m=p}return o(m);case Pt:return k=g._init,N(m,p,k(g._payload),b)}if(Sr(g))return x(m,p,g,b);if(pr(g))return w(m,p,g,b);Bi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=na(g,m.mode,b),p.return=m,m=p),o(m)):n(m,p)}return N}var nr=Yp(!0),Xp=Yp(!1),_s=Xt(null),Is=null,Dn=null,rc=null;function ic(){rc=Dn=Is=null}function sc(e){var t=_s.current;$(_s),e._currentValue=t}function Xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qn(e,t){Is=e,rc=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(Is===null)throw Error(C(308));Dn=e,Is.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var cn=null;function oc(e){cn===null?cn=[e]:cn.push(e)}function Qp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oc(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,oc(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gl(e,n)}}function ed(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fs(e,t,n,r){var i=e.updateQueue;Et=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(h=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(v,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(v,f,h):x,h==null)break e;f=X({},f,h);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=f):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);xn|=o,e.lanes=o,e.memoizedState=f}}function td(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var xi={},st=Xt(xi),ni=Xt(xi),ri=Xt(xi);function un(e){if(e===xi)throw Error(C(174));return e}function lc(e,t){switch(H(ri,t),H(ni,e),H(st,xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ea(t,e)}$(st),H(st,t)}function rr(){$(st),$(ni),$(ri)}function Zp(e){un(ri.current);var t=un(st.current),n=Ea(t,e.type);t!==n&&(H(ni,e),H(st,n))}function cc(e){ni.current===e&&($(st),$(ni))}var G=Xt(0);function Vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function uc(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var as=jt.ReactCurrentDispatcher,qo=jt.ReactCurrentBatchConfig,vn=0,Y=null,re=null,le=null,Ds=!1,Fr=!1,ii=0,Xx=0;function pe(){throw Error(C(321))}function dc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function fc(e,t,n,r,i,s){if(vn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?Jx:ey,e=n(r,i),Fr){s=0;do{if(Fr=!1,ii=0,25<=s)throw Error(C(301));s+=1,le=re=null,t.updateQueue=null,as.current=ty,e=n(r,i)}while(Fr)}if(as.current=Os,t=re!==null&&re.next!==null,vn=0,le=re=Y=null,Ds=!1,t)throw Error(C(300));return e}function hc(){var e=ii!==0;return ii=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function $e(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(C(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function si(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=$e(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((vn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,Y.lanes|=d,xn|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,xn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=$e(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ze(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Jp(){}function em(e,t){var n=Y,r=$e(),i=t(),s=!Ze(r.memoizedState,i);if(s&&(r.memoizedState=i,Se=!0),r=r.queue,pc(rm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,oi(9,nm.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(C(349));vn&30||tm(n,t,i)}return i}function tm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nm(e,t,n,r){t.value=n,t.getSnapshot=r,im(t)&&sm(e)}function rm(e,t,n){return n(function(){im(t)&&sm(e)})}function im(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function sm(e){var t=bt(e,1);t!==null&&qe(t,e,1,-1)}function nd(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Zx.bind(null,Y,e),[t.memoizedState,e]}function oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function om(){return $e().memoizedState}function ls(e,t,n,r){var i=tt();Y.flags|=e,i.memoizedState=oi(1|t,n,void 0,r===void 0?null:r)}function fo(e,t,n,r){var i=$e();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&dc(r,o.deps)){i.memoizedState=oi(t,n,s,r);return}}Y.flags|=e,i.memoizedState=oi(1|t,n,s,r)}function rd(e,t){return ls(8390656,8,e,t)}function pc(e,t){return fo(2048,8,e,t)}function am(e,t){return fo(4,2,e,t)}function lm(e,t){return fo(4,4,e,t)}function cm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function um(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,cm.bind(null,t,e),n)}function mc(){}function dm(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fm(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hm(e,t,n){return vn&21?(Ze(n,t)||(n=xp(),Y.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Qx(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=qo.transition;qo.transition={};try{e(!1),t()}finally{z=n,qo.transition=r}}function pm(){return $e().memoizedState}function qx(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mm(e))gm(t,n);else if(n=Qp(e,t,n,r),n!==null){var i=be();qe(n,e,r,i),vm(n,t,r)}}function Zx(e,t,n){var r=zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mm(e))gm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,o)){var c=t.interleaved;c===null?(i.next=i,oc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Qp(e,t,i,r),n!==null&&(i=be(),qe(n,e,r,i),vm(n,t,r))}}function mm(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function gm(e,t){Fr=Ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gl(e,n)}}var Os={readContext:Ue,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Jx={readContext:Ue,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ls(4194308,4,cm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qx.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:mc,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=Qx.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=tt();if(W){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));vn&30||tm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,rd(rm.bind(null,r,s,e),[e]),r.flags|=2048,oi(9,nm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=tt(),t=ce.identifierPrefix;if(W){var n=ft,r=dt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ey={readContext:Ue,useCallback:dm,useContext:Ue,useEffect:pc,useImperativeHandle:um,useInsertionEffect:am,useLayoutEffect:lm,useMemo:fm,useReducer:Zo,useRef:om,useState:function(){return Zo(si)},useDebugValue:mc,useDeferredValue:function(e){var t=$e();return hm(t,re.memoizedState,e)},useTransition:function(){var e=Zo(si)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Jp,useSyncExternalStore:em,useId:pm,unstable_isNewReconciler:!1},ty={readContext:Ue,useCallback:dm,useContext:Ue,useEffect:pc,useImperativeHandle:um,useInsertionEffect:am,useLayoutEffect:lm,useMemo:fm,useReducer:Jo,useRef:om,useState:function(){return Jo(si)},useDebugValue:mc,useDeferredValue:function(e){var t=$e();return re===null?t.memoizedState=e:hm(t,re.memoizedState,e)},useTransition:function(){var e=Jo(si)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Jp,useSyncExternalStore:em,useId:pm,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=zt(e),s=pt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ot(e,s,i),t!==null&&(qe(t,e,i,r),os(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=zt(e),s=pt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ot(e,s,i),t!==null&&(qe(t,e,i,r),os(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=zt(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(qe(t,e,r,n),os(t,e,r))}};function id(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(i,s):!0}function xm(e,t,n){var r=!1,i=Wt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ue(s):(i=Pe(t)?mn:ye.current,r=t.contextTypes,s=(r=r!=null)?er(e,i):Wt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function qa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ac(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ue(s):(s=Pe(t)?mn:ye.current,i.context=er(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Qa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ho.enqueueReplaceState(i,i.state,null),Fs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=Ev(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function ym(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zs||(zs=!0,ll=r),Za(e,t)},n}function wm(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Za(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Za(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function od(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ny;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gy.bind(null,e,t,n),t.then(e,e))}function ad(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var ry=jt.ReactCurrentOwner,Se=!1;function we(e,t,n,r){t.child=e===null?Xp(t,null,n,r):nr(t,e.child,n,r)}function cd(e,t,n,r,i){n=n.render;var s=t.ref;return Qn(t,i),r=fc(e,t,n,r,s,i),n=hc(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(W&&n&&ec(t),t.flags|=1,we(e,t,r,i),t.child)}function ud(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!jc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,bm(e,t,s,r,i)):(e=fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(o,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Ht(s,r),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Zr(s,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Ja(e,t,n,r,i)}function Nm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Bn,Re),Re|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Bn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(Bn,Re),Re|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(Bn,Re),Re|=r;return we(e,t,i,n),t.child}function jm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ja(e,t,n,r,i){var s=Pe(n)?mn:ye.current;return s=er(t,s),Qn(t,i),n=fc(e,t,n,r,s,i),r=hc(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(W&&r&&ec(t),t.flags|=1,we(e,t,n,i),t.child)}function dd(e,t,n,r,i){if(Pe(n)){var s=!0;Ls(t)}else s=!1;if(Qn(t,i),t.stateNode===null)cs(e,t),xm(t,n,r),qa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Pe(n)?mn:ye.current,u=er(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&sd(t,o,r,u),Et=!1;var h=t.memoizedState;o.state=h,Fs(t,r,o,i),c=t.memoizedState,l!==r||h!==c||Te.current||Et?(typeof d=="function"&&(Qa(t,n,d,r),c=t.memoizedState),(l=Et||id(t,n,l,r,h,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,qp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ke(t.type,l),o.props=u,f=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ue(c):(c=Pe(n)?mn:ye.current,c=er(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||h!==c)&&sd(t,o,r,c),Et=!1,h=t.memoizedState,o.state=h,Fs(t,r,o,i);var x=t.memoizedState;l!==f||h!==x||Te.current||Et?(typeof v=="function"&&(Qa(t,n,v,r),x=t.memoizedState),(u=Et||id(t,n,u,r,h,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return el(e,t,n,r,s,i)}function el(e,t,n,r,i,s){jm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Qu(t,n,!1),Nt(e,t,s);r=t.stateNode,ry.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=nr(t,e.child,null,s),t.child=nr(t,null,l,s)):we(e,t,l,s),t.memoizedState=r.state,i&&Qu(t,n,!0),t.child}function Cm(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),lc(e,t.containerInfo)}function fd(e,t,n,r,i){return tr(),nc(i),t.flags|=256,we(e,t,n,r),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sm(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(G,i&1),e===null)return Ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=go(o,r,0,null),e=hn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=nl(n),t.memoizedState=tl,e):gc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return iy(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ht(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ht(l,s):(s=hn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?nl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=tl,r}return s=e.child,e=s.sibling,r=Ht(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gc(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zi(e,t,n,r){return r!==null&&nc(r),nr(t,e.child,null,n),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ea(Error(C(422))),zi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i,0,null),s=hn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&nr(t,e.child,null,o),t.child.memoizedState=nl(o),t.memoizedState=tl,s);if(!(t.mode&1))return zi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=ea(s,r,void 0),zi(e,t,o,r)}if(l=(o&e.childLanes)!==0,Se||l){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(e,i),qe(r,e,i,-1))}return Nc(),r=ea(Error(C(421))),zi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vy.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=Dt(i.nextSibling),Ae=t,W=!0,Xe=null,e!==null&&(Oe[Be++]=dt,Oe[Be++]=ft,Oe[Be++]=gn,dt=e.id,ft=e.overflow,gn=t),t=gc(t,r.children),t.flags|=4096,t)}function hd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xa(e.return,t,n)}function ta(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function km(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(we(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,n,t);else if(e.tag===19)hd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ta(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ta(t,!0,n,null,s);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sy(e,t,n){switch(t.tag){case 3:Cm(t),tr();break;case 5:Zp(t);break;case 1:Pe(t.type)&&Ls(t);break;case 4:lc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(_s,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Sm(e,t,n):(H(G,G.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);H(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return km(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Nm(e,t,n)}return Nt(e,t,n)}var Tm,rl,Pm,Em;Tm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rl=function(){};Pm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(st.current);var s=null;switch(n){case"input":i=Sa(e,i),r=Sa(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Pa(e,i),r=Pa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Es)}Ra(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Em=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function oy(e,t,n){var r=t.pendingProps;switch(tc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Pe(t.type)&&Rs(),me(t),null;case 3:return r=t.stateNode,rr(),$(Te),$(ye),uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(dl(Xe),Xe=null))),rl(e,t),me(t),null;case 5:cc(t);var i=un(ri.current);if(n=t.type,e!==null&&t.stateNode!=null)Pm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return me(t),null}if(e=un(st.current),Oi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[nt]=t,r[ti]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)U(Tr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Nu(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":Cu(r,s),U("invalid",r)}Ra(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Di(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Di(r.textContent,l,e),i=["children",""+l]):Wr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":Ri(r),ju(r,s,!0);break;case"textarea":Ri(r),Su(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Es)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[ti]=r,Tm(e,t,!1,!1),t.stateNode=e;e:{switch(o=La(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)U(Tr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Nu(e,r),i=Sa(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),U("invalid",e);break;case"textarea":Cu(e,r),i=Pa(e,r),U("invalid",e);break;default:i=r}Ra(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?op(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ip(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gr(e,c):typeof c=="number"&&Gr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wr.hasOwnProperty(s)?c!=null&&s==="onScroll"&&U("scroll",e):c!=null&&Bl(e,s,c,o))}switch(n){case"input":Ri(e),ju(e,r,!1);break;case"textarea":Ri(e),Su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Gn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Em(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=un(ri.current),un(st.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(s=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return me(t),null;case 13:if($(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Le!==null&&t.mode&1&&!(t.flags&128))Kp(),tr(),t.flags|=98560,s=!1;else if(s=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[nt]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else Xe!==null&&(dl(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):Nc())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return rr(),rl(e,t),e===null&&Jr(t.stateNode.containerInfo),me(t),null;case 10:return sc(t.type._context),me(t),null;case 17:return Pe(t.type)&&Rs(),me(t),null;case 19:if($(G),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)wr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vs(e),o!==null){for(t.flags|=128,wr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>sr&&(t.flags|=128,r=!0,wr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Vs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return me(t),null}else 2*J()-s.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,wr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=G.current,H(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return bc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function ay(e,t){switch(tc(t),t.tag){case 1:return Pe(t.type)&&Rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),$(Te),$(ye),uc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cc(t),null;case 13:if($(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(G),null;case 4:return rr(),null;case 10:return sc(t.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var Hi=!1,ve=!1,ly=typeof WeakSet=="function"?WeakSet:Set,E=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function il(e,t,n){try{n()}catch(r){Q(e,t,r)}}var pd=!1;function cy(e,t){if(za=ks,e=_p(),Jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(c=o),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ha={focusedElem:e,selectionRange:n},ks=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,N=x.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ke(t.type,w),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(b){Q(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=pd,pd=!1,x}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&il(t,n,s)}i=i.next}while(i!==r)}}function po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rm(e){var t=e.alternate;t!==null&&(e.alternate=null,Rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[ti],delete t[Wa],delete t[Wx],delete t[Gx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lm(e){return e.tag===5||e.tag===3||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Es));else if(r!==4&&(e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}var ue=null,Ye=!1;function St(e,t,n){for(n=n.child;n!==null;)Am(e,t,n),n=n.sibling}function Am(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:ve||On(n,t);case 6:var r=ue,i=Ye;ue=null,St(e,t,n),ue=r,Ye=i,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?Yo(e.parentNode,n):e.nodeType===1&&Yo(e,n),Qr(e)):Yo(ue,n.stateNode));break;case 4:r=ue,i=Ye,ue=n.stateNode.containerInfo,Ye=!0,St(e,t,n),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&il(n,t,o),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ve&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,St(e,t,n),ve=r):St(e,t,n);break;default:St(e,t,n)}}function gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ly),t.forEach(function(r){var i=xy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ye=!1;break e;case 3:ue=l.stateNode.containerInfo,Ye=!0;break e;case 4:ue=l.stateNode.containerInfo,Ye=!0;break e}l=l.return}if(ue===null)throw Error(C(160));Am(s,o,i),ue=null,Ye=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mm(t,e),t=t.sibling}function Mm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{Vr(3,e,e.return),po(3,e)}catch(w){Q(e,e.return,w)}try{Vr(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Gr(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&tp(i,s),La(l,o);var u=La(l,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?op(i,f):d==="dangerouslySetInnerHTML"?ip(i,f):d==="children"?Gr(i,f):Bl(i,d,f,u)}switch(l){case"input":ka(i,s);break;case"textarea":np(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Gn(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Gn(i,!!s.multiple,s.defaultValue,!0):Gn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ti]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yc=J())),r&4&&gd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||d,We(t,e),ve=u):We(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(h=E,v=h.child,h.tag){case 0:case 11:case 14:case 15:Vr(4,h,h.return);break;case 1:On(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:On(h,h.return);break;case 22:if(h.memoizedState!==null){xd(f);continue}}v!==null?(v.return=h,E=v):xd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=sp("display",o))}catch(w){Q(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(t,e),et(e),r&4&&gd(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lm(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gr(i,""),r.flags&=-33);var s=md(e);al(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=md(e);ol(e,l,o);break;default:throw Error(C(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uy(e,t,n){E=e,_m(e)}function _m(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hi;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ve;l=Hi;var u=ve;if(Hi=o,(ve=c)&&!u)for(E=i;E!==null;)o=E,c=o.child,o.tag===22&&o.memoizedState!==null?yd(i):c!==null?(c.return=o,E=c):yd(i);for(;s!==null;)E=s,_m(s),s=s.sibling;E=i,Hi=l,ve=u}vd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):vd(e)}}function vd(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&td(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}td(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||t.flags&512&&sl(t)}catch(h){Q(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function xd(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function yd(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{po(4,t)}catch(c){Q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Q(t,i,c)}}var s=t.return;try{sl(t)}catch(c){Q(t,s,c)}break;case 5:var o=t.return;try{sl(t)}catch(c){Q(t,o,c)}}}catch(c){Q(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var dy=Math.ceil,Bs=jt.ReactCurrentDispatcher,vc=jt.ReactCurrentOwner,He=jt.ReactCurrentBatchConfig,O=0,ce=null,ee=null,de=0,Re=0,Bn=Xt(0),ie=0,ai=null,xn=0,mo=0,xc=0,Dr=null,Ce=null,yc=0,sr=1/0,ct=null,zs=!1,ll=null,Bt=null,Ui=!1,Mt=null,Hs=0,Or=0,cl=null,us=-1,ds=0;function be(){return O&6?J():us!==-1?us:us=J()}function zt(e){return e.mode&1?O&2&&de!==0?de&-de:Yx.transition!==null?(ds===0&&(ds=xp()),ds):(e=z,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e):1}function qe(e,t,n,r){if(50<Or)throw Or=0,cl=null,Error(C(185));mi(e,n,r),(!(O&2)||e!==ce)&&(e===ce&&(!(O&2)&&(mo|=n),ie===4&&Lt(e,de)),Ee(e,r),n===1&&O===0&&!(t.mode&1)&&(sr=J()+500,uo&&Qt()))}function Ee(e,t){var n=e.callbackNode;Yv(e,t);var r=Ss(e,e===ce?de:0);if(r===0)n!==null&&Pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pu(n),t===1)e.tag===0?Kx(wd.bind(null,e)):$p(wd.bind(null,e)),Ux(function(){!(O&6)&&Qt()}),n=null;else{switch(yp(r)){case 1:n=Wl;break;case 4:n=gp;break;case 16:n=Cs;break;case 536870912:n=vp;break;default:n=Cs}n=Hm(n,Im.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Im(e,t){if(us=-1,ds=0,O&6)throw Error(C(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=Ss(e,e===ce?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=O;O|=2;var s=Vm();(ce!==e||de!==t)&&(ct=null,sr=J()+500,fn(e,t));do try{py();break}catch(l){Fm(e,l)}while(!0);ic(),Bs.current=s,O=i,ee!==null?t=0:(ce=null,de=0,t=ie)}if(t!==0){if(t===2&&(i=Fa(e),i!==0&&(r=i,t=ul(e,i))),t===1)throw n=ai,fn(e,0),Lt(e,r),Ee(e,J()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fy(i)&&(t=Us(e,r),t===2&&(s=Fa(e),s!==0&&(r=s,t=ul(e,s))),t===1))throw n=ai,fn(e,0),Lt(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:sn(e,Ce,ct);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=yc+500-J(),10<t)){if(Ss(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$a(sn.bind(null,e,Ce,ct),t);break}sn(e,Ce,ct);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Qe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dy(r/1960))-r,10<r){e.timeoutHandle=$a(sn.bind(null,e,Ce,ct),r);break}sn(e,Ce,ct);break;case 5:sn(e,Ce,ct);break;default:throw Error(C(329))}}}return Ee(e,J()),e.callbackNode===n?Im.bind(null,e):null}function ul(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Us(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&dl(t)),e}function dl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function fy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~xc,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function wd(e){if(O&6)throw Error(C(327));qn();var t=Ss(e,0);if(!(t&1))return Ee(e,J()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=Fa(e);r!==0&&(t=r,n=ul(e,r))}if(n===1)throw n=ai,fn(e,0),Lt(e,t),Ee(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ce,ct),Ee(e,J()),null}function wc(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(sr=J()+500,uo&&Qt())}}function yn(e){Mt!==null&&Mt.tag===0&&!(O&6)&&qn();var t=O;O|=1;var n=He.transition,r=z;try{if(He.transition=null,z=1,e)return e()}finally{z=r,He.transition=n,O=t,!(O&6)&&Qt()}}function bc(){Re=Bn.current,$(Bn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hx(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rs();break;case 3:rr(),$(Te),$(ye),uc();break;case 5:cc(r);break;case 4:rr();break;case 13:$(G);break;case 19:$(G);break;case 10:sc(r.type._context);break;case 22:case 23:bc()}n=n.return}if(ce=e,ee=e=Ht(e.current,null),de=Re=t,ie=0,ai=null,xc=mo=xn=0,Ce=Dr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cn=null}return e}function Fm(e,t){do{var n=ee;try{if(ic(),as.current=Os,Ds){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ds=!1}if(vn=0,le=re=Y=null,Fr=!1,ii=0,vc.current=null,n===null||n.return===null){ie=1,ai=t,ee=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=de,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ad(o);if(v!==null){v.flags&=-257,ld(v,o,l,s,t),v.mode&1&&od(s,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){od(s,u,t),Nc();break e}c=Error(C(426))}}else if(W&&l.mode&1){var N=ad(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ld(N,o,l,s,t),nc(ir(c,l));break e}}s=c=ir(c,l),ie!==4&&(ie=2),Dr===null?Dr=[s]:Dr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=ym(s,c,t);ed(s,m);break e;case 1:l=c;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bt===null||!Bt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=wm(s,l,t);ed(s,b);break e}}s=s.return}while(s!==null)}Om(n)}catch(j){t=j,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Vm(){var e=Bs.current;return Bs.current=Os,e===null?Os:e}function Nc(){(ie===0||ie===3||ie===2)&&(ie=4),ce===null||!(xn&268435455)&&!(mo&268435455)||Lt(ce,de)}function Us(e,t){var n=O;O|=2;var r=Vm();(ce!==e||de!==t)&&(ct=null,fn(e,t));do try{hy();break}catch(i){Fm(e,i)}while(!0);if(ic(),O=n,Bs.current=r,ee!==null)throw Error(C(261));return ce=null,de=0,ie}function hy(){for(;ee!==null;)Dm(ee)}function py(){for(;ee!==null&&!Ov();)Dm(ee)}function Dm(e){var t=zm(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?Om(e):ee=t,vc.current=null}function Om(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ay(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ee=null;return}}else if(n=oy(n,t,Re),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ie===0&&(ie=5)}function sn(e,t,n){var r=z,i=He.transition;try{He.transition=null,z=1,my(e,t,n,r)}finally{He.transition=i,z=r}return null}function my(e,t,n,r){do qn();while(Mt!==null);if(O&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xv(e,s),e===ce&&(ee=ce=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,Hm(Cs,function(){return qn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var o=z;z=1;var l=O;O|=4,vc.current=null,cy(e,n),Mm(n,e),Ix(Ha),ks=!!za,Ha=za=null,e.current=n,uy(n),Bv(),O=l,z=o,He.transition=s}else e.current=n;if(Ui&&(Ui=!1,Mt=e,Hs=i),s=e.pendingLanes,s===0&&(Bt=null),Uv(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zs)throw zs=!1,e=ll,ll=null,e;return Hs&1&&e.tag!==0&&qn(),s=e.pendingLanes,s&1?e===cl?Or++:(Or=0,cl=e):Or=0,Qt(),null}function qn(){if(Mt!==null){var e=yp(Hs),t=He.transition,n=z;try{if(He.transition=null,z=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Hs=0,O&6)throw Error(C(331));var i=O;for(O|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Vr(8,d,s)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var h=d.sibling,v=d.return;if(Rm(d),d===u){E=null;break}if(h!==null){h.return=v,E=h;break}E=v}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,E=m;break e}E=s.return}}var p=e.current;for(E=p;E!==null;){o=E;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,E=g;else e:for(o=p;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:po(9,l)}}catch(j){Q(l,l.return,j)}if(l===o){E=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,E=b;break e}E=l.return}}if(O=i,Qt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{z=n,He.transition=t}}return!1}function bd(e,t,n){t=ir(n,t),t=ym(e,t,1),e=Ot(e,t,1),t=be(),e!==null&&(mi(e,1,t),Ee(e,t))}function Q(e,t,n){if(e.tag===3)bd(e,e,n);else for(;t!==null;){if(t.tag===3){bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=ir(n,e),e=wm(t,e,1),t=Ot(t,e,1),e=be(),t!==null&&(mi(t,1,e),Ee(t,e));break}}t=t.return}}function gy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(de&n)===n&&(ie===4||ie===3&&(de&130023424)===de&&500>J()-yc?fn(e,0):xc|=n),Ee(e,t)}function Bm(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(mi(e,t,n),Ee(e,n))}function vy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bm(e,n)}function xy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Bm(e,n)}var zm;zm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,sy(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Wp(t,Ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cs(e,t),e=t.pendingProps;var i=er(t,ye.current);Qn(t,n),i=fc(null,t,r,e,i,n);var s=hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(s=!0,Ls(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ac(t),i.updater=ho,t.stateNode=i,i._reactInternals=t,qa(t,r,e,n),t=el(null,t,r,!0,s,n)):(t.tag=0,W&&s&&ec(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=wy(r),e=Ke(r,e),i){case 0:t=Ja(null,t,r,e,n);break e;case 1:t=dd(null,t,r,e,n);break e;case 11:t=cd(null,t,r,e,n);break e;case 14:t=ud(null,t,r,Ke(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Ja(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),dd(e,t,r,i,n);case 3:e:{if(Cm(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,qp(e,t),Fs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ir(Error(C(423)),t),t=fd(e,t,r,n,i);break e}else if(r!==i){i=ir(Error(C(424)),t),t=fd(e,t,r,n,i);break e}else for(Le=Dt(t.stateNode.containerInfo.firstChild),Ae=t,W=!0,Xe=null,n=Xp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===i){t=Nt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Zp(t),e===null&&Ya(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ua(r,i)?o=null:s!==null&&Ua(r,s)&&(t.flags|=32),jm(e,t),we(e,t,o,n),t.child;case 6:return e===null&&Ya(t),null;case 13:return Sm(e,t,n);case 4:return lc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),cd(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(_s,r._currentValue),r._currentValue=o,s!==null)if(Ze(s.value,o)){if(s.children===i.children&&!Te.current){t=Nt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=pt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Xa(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qn(t,n),i=Ue(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),ud(e,t,r,i,n);case 15:return bm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),cs(e,t),t.tag=1,Pe(r)?(e=!0,Ls(t)):e=!1,Qn(t,n),xm(t,r,i),qa(t,r,i,n),el(null,t,r,!0,e,n);case 19:return km(e,t,n);case 22:return Nm(e,t,n)}throw Error(C(156,t.tag))};function Hm(e,t){return mp(e,t)}function yy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new yy(e,t,n,r)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wy(e){if(typeof e=="function")return jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Ul)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")jc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Rn:return hn(n.children,i,s,t);case zl:o=8,i|=8;break;case ba:return e=ze(12,n,t,i|2),e.elementType=ba,e.lanes=s,e;case Na:return e=ze(13,n,t,i),e.elementType=Na,e.lanes=s,e;case ja:return e=ze(19,n,t,i),e.elementType=ja,e.lanes=s,e;case Zh:return go(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qh:o=10;break e;case qh:o=9;break e;case Hl:o=11;break e;case Ul:o=14;break e;case Pt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=ze(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function hn(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Zh,e.lanes=n,e.stateNode={isHidden:!1},e}function na(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function ra(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function by(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cc(e,t,n,r,i,s,o,l,c){return e=new by(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(s),e}function Ny(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Um(e){if(!e)return Wt;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Up(e,n,t)}return t}function $m(e,t,n,r,i,s,o,l,c){return e=Cc(n,r,!0,e,i,s,o,l,c),e.context=Um(null),n=e.current,r=be(),i=zt(n),s=pt(r,i),s.callback=t??null,Ot(n,s,i),e.current.lanes=i,mi(e,i,r),Ee(e,r),e}function vo(e,t,n,r){var i=t.current,s=be(),o=zt(i);return n=Um(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,o),e!==null&&(qe(e,i,o,s),os(e,i,o)),o}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sc(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function jy(){return null}var Wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function kc(e){this._internalRoot=e}xo.prototype.render=kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));vo(e,t,null,null)};xo.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){vo(null,e,null,null)}),t[wt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Np();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&Cp(e)}};function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jd(){}function Cy(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$s(o);s.call(u)}}var o=$m(t,r,e,0,null,!1,!1,"",jd);return e._reactRootContainer=o,e[wt]=o.current,Jr(e.nodeType===8?e.parentNode:e),yn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$s(c);l.call(u)}}var c=Cc(e,0,!1,null,null,!1,!1,"",jd);return e._reactRootContainer=c,e[wt]=c.current,Jr(e.nodeType===8?e.parentNode:e),yn(function(){vo(t,c,n,r)}),c}function wo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=$s(o);l.call(c)}}vo(t,o,e,i)}else o=Cy(n,t,e,i,r);return $s(o)}wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kr(t.pendingLanes);n!==0&&(Gl(t,n|1),Ee(t,J()),!(O&6)&&(sr=J()+500,Qt()))}break;case 13:yn(function(){var r=bt(e,1);if(r!==null){var i=be();qe(r,e,1,i)}}),Sc(e,1)}};Kl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();qe(t,e,134217728,n)}Sc(e,134217728)}};bp=function(e){if(e.tag===13){var t=zt(e),n=bt(e,t);if(n!==null){var r=be();qe(n,e,t,r)}Sc(e,t)}};Np=function(){return z};jp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Ma=function(e,t,n){switch(t){case"input":if(ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=co(r);if(!i)throw Error(C(90));ep(r),ka(r,i)}}}break;case"textarea":np(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};cp=wc;up=yn;var Sy={usingClientEntryPoint:!1,Events:[vi,_n,co,ap,lp,wc]},br={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{so=$i.inject(ky),it=$i}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(t))throw Error(C(200));return Ny(e,t,null,n)};Ie.createRoot=function(e,t){if(!Tc(e))throw Error(C(299));var n=!1,r="",i=Wm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Jr(e.nodeType===8?e.parentNode:e),new kc(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return yn(e)};Ie.hydrate=function(e,t,n){if(!yo(t))throw Error(C(200));return wo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Tc(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=$m(t,null,e,1,n??null,i,!1,s,o),e[wt]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xo(t)};Ie.render=function(e,t,n){if(!yo(t))throw Error(C(200));return wo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!yo(e))throw Error(C(40));return e._reactRootContainer?(yn(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ie.unstable_batchedUpdates=wc;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return wo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Gm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm)}catch(e){console.error(e)}}Gm(),Gh.exports=Ie;var Ty=Gh.exports,Km,Cd=Ty;Km=Cd.createRoot,Cd.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const Sd="popstate";function Py(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return fl("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ws(i)}return Ry(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ym(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ey(){return Math.random().toString(36).substr(2,8)}function kd(e,t){return{usr:e.state,key:e.key,idx:t}}function fl(e,t,n,r){return n===void 0&&(n=null),li({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:n,key:t&&t.key||r||Ey()})}function Ws(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ry(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=_t.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(li({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=_t.Pop;let N=d(),m=N==null?null:N-u;u=N,c&&c({action:l,location:w.location,delta:m})}function h(N,m){l=_t.Push;let p=fl(w.location,N,m);u=d()+1;let g=kd(p,u),b=w.createHref(p);try{o.pushState(g,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(b)}s&&c&&c({action:l,location:w.location,delta:1})}function v(N,m){l=_t.Replace;let p=fl(w.location,N,m);u=d();let g=kd(p,u),b=w.createHref(p);o.replaceState(g,"",b),s&&c&&c({action:l,location:w.location,delta:0})}function x(N){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof N=="string"?N:Ws(N);return p=p.replace(/ $/,"%20"),te(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return l},get location(){return e(i,o)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sd,f),c=N,()=>{i.removeEventListener(Sd,f),c=null}},createHref(N){return t(i,N)},createURL:x,encodeLocation(N){let m=x(N);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(N){return o.go(N)}};return w}var Td;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Td||(Td={}));function Ly(e,t,n){return n===void 0&&(n="/"),Ay(e,t,n,!1)}function Ay(e,t,n,r){let i=typeof t=="string"?dr(t):t,s=Pc(i.pathname||"/",n);if(s==null)return null;let o=Xm(e);My(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=$y(s);l=Hy(o[c],u,r)}return l}function Xm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ut([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xm(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:By(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of Qm(s.path))i(s,o,c)}),t}function Qm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qm(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function My(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _y=/^:[\w-]+$/,Iy=3,Fy=2,Vy=1,Dy=10,Oy=-2,Pd=e=>e==="*";function By(e,t){let n=e.split("/"),r=n.length;return n.some(Pd)&&(r+=Oy),t&&(r+=Fy),n.filter(i=>!Pd(i)).reduce((i,s)=>i+(_y.test(s)?Iy:s===""?Vy:Dy),r)}function zy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hy(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=Ed({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Ed({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ut([s,f.pathname]),pathnameBase:Yy(Ut([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ut([s,f.pathnameBase]))}return o}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let w=l[f]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[f];return v&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Uy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ym(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $y(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ym(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Wy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dr(e):e;return{pathname:n?n.startsWith("/")?n:Gy(n,t):t,search:Xy(r),hash:Qy(i)}}function Gy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ia(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ky(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qm(e,t){let n=Ky(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dr(e):(i=li({},e),te(!i.pathname||!i.pathname.includes("?"),ia("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),ia("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),ia("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let c=Wy(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),Yy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jm=["post","put","patch","delete"];new Set(Jm);const Zy=["get",...Jm];new Set(Zy);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(this,arguments)}const Ec=y.createContext(null),Jy=y.createContext(null),jn=y.createContext(null),bo=y.createContext(null),Cn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),e0=y.createContext(null);function e1(e,t){let{relative:n}=t===void 0?{}:t;yi()||te(!1);let{basename:r,navigator:i}=y.useContext(jn),{hash:s,pathname:o,search:l}=n0(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Ut([r,o])),i.createHref({pathname:c,search:l,hash:s})}function yi(){return y.useContext(bo)!=null}function wi(){return yi()||te(!1),y.useContext(bo).location}function t0(e){y.useContext(jn).static||y.useLayoutEffect(e)}function t1(){let{isDataRoute:e}=y.useContext(Cn);return e?p1():n1()}function n1(){yi()||te(!1);let e=y.useContext(Ec),{basename:t,future:n,navigator:r}=y.useContext(jn),{matches:i}=y.useContext(Cn),{pathname:s}=wi(),o=JSON.stringify(qm(i,n.v7_relativeSplatPath)),l=y.useRef(!1);return t0(()=>{l.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Zm(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ut([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function n0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(jn),{matches:i}=y.useContext(Cn),{pathname:s}=wi(),o=JSON.stringify(qm(i,r.v7_relativeSplatPath));return y.useMemo(()=>Zm(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function r1(e,t){return i1(e,t)}function i1(e,t,n,r){yi()||te(!1);let{navigator:i}=y.useContext(jn),{matches:s}=y.useContext(Cn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=wi(),d;if(t){var f;let N=typeof t=="string"?dr(t):t;c==="/"||(f=N.pathname)!=null&&f.startsWith(c)||te(!1),d=N}else d=u;let h=d.pathname||"/",v=h;if(c!=="/"){let N=c.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=Ly(e,{pathname:v}),w=c1(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Ut([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:Ut([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return t&&w?y.createElement(bo.Provider,{value:{location:ci({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_t.Pop}},w):w}function s1(){let e=h1(),t=qy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const o1=y.createElement(s1,null);class a1 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Cn.Provider,{value:this.props.routeContext},y.createElement(e0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l1(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(Ec);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Cn.Provider,{value:t},r)}function c1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||te(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:v}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let v,x=!1,w=null,N=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||o1,c&&(u<0&&h===0?(x=!0,N=null):u===h&&(x=!0,N=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,h+1)),p=()=>{let g;return v?g=w:x?g=N:f.route.Component?g=y.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,y.createElement(l1,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(a1,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var r0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(r0||{}),Gs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gs||{});function u1(e){let t=y.useContext(Ec);return t||te(!1),t}function d1(e){let t=y.useContext(Jy);return t||te(!1),t}function f1(e){let t=y.useContext(Cn);return t||te(!1),t}function i0(e){let t=f1(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function h1(){var e;let t=y.useContext(e0),n=d1(Gs.UseRouteError),r=i0(Gs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function p1(){let{router:e}=u1(r0.UseNavigateStable),t=i0(Gs.UseNavigateStable),n=y.useRef(!1);return t0(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ci({fromRouteId:t},s)))},[e,t])}function Ge(e){te(!1)}function m1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_t.Pop,navigator:s,static:o=!1,future:l}=e;yi()&&te(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:s,static:o,future:ci({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=dr(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:x="default"}=r,w=y.useMemo(()=>{let N=Pc(d,c);return N==null?null:{location:{pathname:N,search:f,hash:h,state:v,key:x},navigationType:i}},[c,d,f,h,v,x,i]);return w==null?null:y.createElement(jn.Provider,{value:u},y.createElement(bo.Provider,{children:n,value:w}))}function g1(e){let{children:t,location:n}=e;return r1(hl(t),n)}new Promise(()=>{});function hl(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let s=[...t,i];if(r.type===y.Fragment){n.push.apply(n,hl(r.props.children,s));return}r.type!==Ge&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}function v1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function x1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function y1(e,t){return e.button===0&&(!t||t==="_self")&&!x1(e)}const w1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],b1="6";try{window.__reactRouterVersion=b1}catch{}const N1="startTransition",Rd=gv[N1];function j1(e){let{basename:t,children:n,future:r,window:i}=e,s=y.useRef();s.current==null&&(s.current=Py({window:i,v5Compat:!0}));let o=s.current,[l,c]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=y.useCallback(f=>{u&&Rd?Rd(()=>c(f)):c(f)},[c,u]);return y.useLayoutEffect(()=>o.listen(d),[o,d]),y.createElement(m1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const C1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zn=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,h=v1(t,w1),{basename:v}=y.useContext(jn),x,w=!1;if(typeof u=="string"&&S1.test(u)&&(x=u,C1))try{let g=new URL(window.location.href),b=u.startsWith("//")?new URL(g.protocol+u):new URL(u),j=Pc(b.pathname,v);b.origin===g.origin&&j!=null?u=j+b.search+b.hash:w=!0}catch{}let N=e1(u,{relative:i}),m=k1(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,unstable_viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",pl({},h,{href:x||N,onClick:w||s?r:p,ref:n,target:c}))});var Ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ld||(Ld={}));var Ad;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ad||(Ad={}));function k1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,c=t1(),u=wi(),d=n0(e,{relative:o});return y.useCallback(f=>{if(y1(f,n)){f.preventDefault();let h=r!==void 0?r:Ws(u)===Ws(d);c(e,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,c,d,r,i,n,e,s,o,l])}function T1(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function ui(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ml=e=>Array.isArray(e);function s0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function di(e){return typeof e=="string"||Array.isArray(e)}function Md(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Rc(e,t,n,r){if(typeof t=="function"){const[i,s]=Md(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Md(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function No(e,t,n){const r=e.getProps();return Rc(r,t,n!==void 0?n:r.custom,e)}const Lc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ac=["initial",...Lc],bi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qt=new Set(bi),mt=e=>e*1e3,gt=e=>e/1e3,P1={type:"spring",stiffness:500,damping:25,restSpeed:10},E1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),R1={type:"keyframes",duration:.8},L1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},A1=(e,{keyframes:t})=>t.length>2?R1:qt.has(e)?e.startsWith("scale")?E1(t[1]):P1:L1;function Mc(e,t){return e[t]||e.default||e}const M1={skipAnimations:!1,useManualTiming:!1},_1=e=>e!==null;function jo(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(_1),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const fe=e=>e;function I1(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){s.has(u)&&(c.schedule(u),e()),u(o)}const c={schedule:(u,d=!1,f=!1)=>{const v=f&&r?t:n;return d&&s.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(l),r=!1,i&&(i=!1,c.process(u))}};return c}const Wi=["read","resolveKeyframes","update","preRender","render","postRender"],F1=40;function o0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Wi.reduce((m,p)=>(m[p]=I1(s),m),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:h}=o,v=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,F1),1),i.timestamp=m,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Wi.reduce((m,p)=>{const g=o[p];return m[p]=(b,j=!1,k=!1)=>(n||x(),g.schedule(b,j,k)),m},{}),cancel:m=>{for(let p=0;p<Wi.length;p++)o[Wi[p]].cancel(m)},state:i,steps:o}}const{schedule:D,cancel:Je,state:ae,steps:sa}=o0(typeof requestAnimationFrame<"u"?requestAnimationFrame:fe,!0),a0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,V1=1e-7,D1=12;function O1(e,t,n,r,i){let s,o,l=0;do o=t+(n-t)/2,s=a0(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>V1&&++l<D1);return o}function Ni(e,t,n,r){if(e===t&&n===r)return fe;const i=s=>O1(s,0,1,e,n);return s=>s===0||s===1?s:a0(i(s),t,r)}const l0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,c0=e=>t=>1-e(1-t),u0=Ni(.33,1.53,.69,.99),_c=c0(u0),d0=l0(_c),f0=e=>(e*=2)<1?.5*_c(e):.5*(2-Math.pow(2,-10*(e-1))),Ic=e=>1-Math.sin(Math.acos(e)),h0=c0(Ic),p0=l0(Ic),m0=e=>/^0[^.\s]+$/u.test(e);function B1(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||m0(e):!0}let z1=fe,gl=fe;const g0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),v0=e=>t=>typeof t=="string"&&t.startsWith(e),x0=v0("--"),H1=v0("var(--"),Fc=e=>H1(e)?U1.test(e.split("/*")[0].trim()):!1,U1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function W1(e){const t=$1.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function y0(e,t,n=1){const[r,i]=W1(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return g0(o)?parseFloat(o):o}return Fc(i)?y0(i,t,n+1):i}const Gt=(e,t,n)=>n>t?t:n<e?e:n,fr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},fi={...fr,transform:e=>Gt(0,1,e)},Gi={...fr,default:1},ji=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),kt=ji("deg"),ot=ji("%"),L=ji("px"),G1=ji("vh"),K1=ji("vw"),_d={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},Y1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Id=e=>e===fr||e===L,Fd=(e,t)=>parseFloat(e.split(", ")[t]),Vd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Fd(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Fd(s[1],e):0}},X1=new Set(["x","y","z"]),Q1=bi.filter(e=>!X1.has(e));function q1(e){const t=[];return Q1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const or={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Vd(4,13),y:Vd(5,14)};or.translateX=or.x;or.translateY=or.y;const w0=e=>t=>t.test(e),Z1={test:e=>e==="auto",parse:e=>e},b0=[fr,L,ot,kt,K1,G1,Z1],Dd=e=>b0.find(w0(e)),pn=new Set;let vl=!1,xl=!1;function N0(){if(xl){const e=Array.from(pn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=q1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var l;(l=r.getValue(s))===null||l===void 0||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}xl=!1,vl=!1,pn.forEach(e=>e.complete()),pn.clear()}function j0(){pn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(xl=!0)})}function J1(){j0(),N0()}class Vc{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(pn.add(this),vl||(vl=!0,D.read(j0),D.resolveKeyframes(N0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),l=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),pn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,pn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Br=e=>Math.round(e*1e5)/1e5,Dc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e2(e){return e==null}const t2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Oc=(e,t)=>n=>!!(typeof n=="string"&&t2.test(n)&&n.startsWith(e)||t&&!e2(n)&&Object.prototype.hasOwnProperty.call(n,t)),C0=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,l]=r.match(Dc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},n2=e=>Gt(0,255,e),oa={...fr,transform:e=>Math.round(n2(e))},dn={test:Oc("rgb","red"),parse:C0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+oa.transform(e)+", "+oa.transform(t)+", "+oa.transform(n)+", "+Br(fi.transform(r))+")"};function r2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const yl={test:Oc("#"),parse:r2,transform:dn.transform},zn={test:Oc("hsl","hue"),parse:C0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ot.transform(Br(t))+", "+ot.transform(Br(n))+", "+Br(fi.transform(r))+")"},ge={test:e=>dn.test(e)||yl.test(e)||zn.test(e),parse:e=>dn.test(e)?dn.parse(e):zn.test(e)?zn.parse(e):yl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?dn.transform(e):zn.transform(e)},i2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s2(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Dc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(i2))===null||n===void 0?void 0:n.length)||0)>0}const S0="number",k0="color",o2="var",a2="var(",Od="${}",l2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hi(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(l2,c=>(ge.test(c)?(r.color.push(s),i.push(k0),n.push(ge.parse(c))):c.startsWith(a2)?(r.var.push(s),i.push(o2),n.push(c)):(r.number.push(s),i.push(S0),n.push(parseFloat(c))),++s,Od)).split(Od);return{values:n,split:l,indexes:r,types:i}}function T0(e){return hi(e).values}function P0(e){const{split:t,types:n}=hi(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const l=n[o];l===S0?s+=Br(i[o]):l===k0?s+=ge.transform(i[o]):s+=i[o]}return s}}const c2=e=>typeof e=="number"?0:e;function u2(e){const t=T0(e);return P0(e)(t.map(c2))}const Kt={test:s2,parse:T0,createTransformer:P0,getAnimatableNone:u2},d2=new Set(["brightness","contrast","saturate","opacity"]);function f2(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Dc)||[];if(!r)return e;const i=n.replace(r,"");let s=d2.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const h2=/\b([a-z-]*)\(.*?\)/gu,wl={...Kt,getAnimatableNone:e=>{const t=e.match(h2);return t?t.map(f2).join(" "):e}},p2={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L},m2={rotate:kt,rotateX:kt,rotateY:kt,rotateZ:kt,scale:Gi,scaleX:Gi,scaleY:Gi,scaleZ:Gi,skew:kt,skewX:kt,skewY:kt,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:fi,originX:_d,originY:_d,originZ:L},Bd={...fr,transform:Math.round},Bc={...p2,...m2,zIndex:Bd,size:L,fillOpacity:fi,strokeOpacity:fi,numOctaves:Bd},g2={...Bc,color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:wl,WebkitFilter:wl},zc=e=>g2[e];function E0(e,t){let n=zc(e);return n!==wl&&(n=Kt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const v2=new Set(["auto","none","0"]);function x2(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!v2.has(s)&&hi(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=E0(n,i)}class R0 extends Vc{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Fc(u))){const d=y0(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Y1.has(r)||t.length!==2)return;const[i,s]=t,o=Dd(i),l=Dd(s);if(o!==l)if(Id(o)&&Id(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)B1(t[i])&&r.push(i);r.length&&x2(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=or[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,l=i[o];i[o]=or[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function Hc(e){return typeof e=="function"}let hs;function y2(){hs=void 0}const at={now:()=>(hs===void 0&&at.set(ae.isProcessing||M1.useManualTiming?ae.timestamp:performance.now()),hs),set:e=>{hs=e,queueMicrotask(y2)}},zd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Kt.test(e)||e==="0")&&!e.startsWith("url("));function w2(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function b2(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=zd(i,t),l=zd(s,t);return!o||!l?!1:w2(e)||(n==="spring"||Hc(n))&&r}const N2=40;class L0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=at.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>N2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&J1(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=at.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!b2(t,r,i,s))if(o)this.options.duration=0;else{c==null||c(jo(t,this.options,n)),l==null||l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Uc(e,t){return t?e*(1e3/t):0}const j2=5;function A0(e,t,n){const r=Math.max(t-j2,0);return Uc(n-e(r),t-r)}const aa=.001,C2=.01,S2=10,k2=.05,T2=1;function P2({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s,o=1-t;o=Gt(k2,T2,o),e=Gt(C2,S2,gt(e)),o<1?(i=u=>{const d=u*o,f=d*e,h=d-n,v=bl(u,o),x=Math.exp(-f);return aa-h/v*x},s=u=>{const f=u*o*e,h=f*n+n,v=Math.pow(o,2)*Math.pow(u,2)*e,x=Math.exp(-f),w=bl(Math.pow(u,2),o);return(-i(u)+aa>0?-1:1)*((h-v)*x)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-aa+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=R2(i,s,l);if(e=mt(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const E2=12;function R2(e,t,n){let r=n;for(let i=1;i<E2;i++)r=r-e(r)/t(r);return r}function bl(e,t){return e*Math.sqrt(1-t*t)}const L2=["duration","bounce"],A2=["stiffness","damping","mass"];function Hd(e,t){return t.some(n=>e[n]!==void 0)}function M2(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Hd(e,A2)&&Hd(e,L2)){const n=P2(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function $c({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=M2({...r,velocity:-gt(r.velocity||0)}),v=f||0,x=c/(2*Math.sqrt(l*u)),w=s-i,N=gt(Math.sqrt(l/u)),m=Math.abs(w)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let p;if(x<1){const g=bl(N,x);p=b=>{const j=Math.exp(-x*N*b);return s-j*((v+x*N*w)/g*Math.sin(g*b)+w*Math.cos(g*b))}}else if(x===1)p=g=>s-Math.exp(-N*g)*(w+(v+N*w)*g);else{const g=N*Math.sqrt(x*x-1);p=b=>{const j=Math.exp(-x*N*b),k=Math.min(g*b,300);return s-j*((v+x*N*w)*Math.sinh(k)+g*w*Math.cosh(k))/g}}return{calculatedDuration:h&&d||null,next:g=>{const b=p(g);if(h)o.done=g>=d;else{let j=0;x<1&&(j=g===0?mt(v):A0(p,g,b));const k=Math.abs(j)<=n,P=Math.abs(s-b)<=t;o.done=k&&P}return o.value=o.done?s:b,o}}}function Ud({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},v=S=>l!==void 0&&S<l||c!==void 0&&S>c,x=S=>l===void 0?c:c===void 0||Math.abs(l-S)<Math.abs(c-S)?l:c;let w=n*t;const N=f+w,m=o===void 0?N:o(N);m!==N&&(w=m-f);const p=S=>-w*Math.exp(-S/r),g=S=>m+p(S),b=S=>{const V=p(S),A=g(S);h.done=Math.abs(V)<=u,h.value=h.done?m:A};let j,k;const P=S=>{v(h.value)&&(j=S,k=$c({keyframes:[h.value,x(h.value)],velocity:A0(g,S,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:S=>{let V=!1;return!k&&j===void 0&&(V=!0,b(S),P(S)),j!==void 0&&S>=j?k.next(S-j):(!V&&b(S),h)}}}const _2=Ni(.42,0,1,1),I2=Ni(0,0,.58,1),M0=Ni(.42,0,.58,1),F2=e=>Array.isArray(e)&&typeof e[0]!="number",$d={linear:fe,easeIn:_2,easeInOut:M0,easeOut:I2,circIn:Ic,circInOut:p0,circOut:h0,backIn:_c,backInOut:d0,backOut:u0,anticipate:f0},Wd=e=>{if(Array.isArray(e)){gl(e.length===4);const[t,n,r,i]=e;return Ni(t,n,r,i)}else if(typeof e=="string")return gl($d[e]!==void 0),$d[e];return e},V2=(e,t)=>n=>t(e(n)),vt=(...e)=>e.reduce(V2),wn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},K=(e,t,n)=>e+(t-e)*n;function la(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function D2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=la(c,l,e+1/3),s=la(c,l,e),o=la(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Ks(e,t){return n=>n>0?t:e}const ca=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},O2=[yl,dn,zn],B2=e=>O2.find(t=>t.test(e));function Gd(e){const t=B2(e);if(!t)return!1;let n=t.parse(e);return t===zn&&(n=D2(n)),n}const Kd=(e,t)=>{const n=Gd(e),r=Gd(t);if(!n||!r)return Ks(e,t);const i={...n};return s=>(i.red=ca(n.red,r.red,s),i.green=ca(n.green,r.green,s),i.blue=ca(n.blue,r.blue,s),i.alpha=K(n.alpha,r.alpha,s),dn.transform(i))},Nl=new Set(["none","hidden"]);function z2(e,t){return Nl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function H2(e,t){return n=>K(e,t,n)}function Wc(e){return typeof e=="number"?H2:typeof e=="string"?Fc(e)?Ks:ge.test(e)?Kd:W2:Array.isArray(e)?_0:typeof e=="object"?ge.test(e)?Kd:U2:Ks}function _0(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Wc(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function U2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Wc(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function $2(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],l=e.indexes[o][i[o]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[s]=c,i[o]++}return r}const W2=(e,t)=>{const n=Kt.createTransformer(t),r=hi(e),i=hi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nl.has(e)&&!i.values.length||Nl.has(t)&&!r.values.length?z2(e,t):vt(_0($2(r,i),i.values),n):Ks(e,t)};function I0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?K(e,t,n):Wc(e)(e,t)}function G2(e,t,n){const r=[],i=n||I0,s=e.length-1;for(let o=0;o<s;o++){let l=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||fe:t;l=vt(c,l)}r.push(l)}return r}function Gc(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(gl(s===t.length),s===1)return()=>t[0];if(s===2&&e[0]===e[1])return()=>t[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=G2(t,r,i),l=o.length,c=u=>{let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=wn(e[d],e[d+1],u);return o[d](f)};return n?u=>c(Gt(e[0],e[s-1],u)):c}function K2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=wn(0,t,r);e.push(K(n,1,i))}}function F0(e){const t=[0];return K2(t,e.length-1),t}function Y2(e,t){return e.map(n=>n*t)}function X2(e,t){return e.map(()=>t||M0).splice(0,e.length-1)}function Ys({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=F2(r)?r.map(Wd):Wd(r),s={done:!1,value:t[0]},o=Y2(n&&n.length===t.length?n:F0(t),e),l=Gc(o,t,{ease:Array.isArray(i)?i:X2(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}const Yd=2e4;function Q2(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Yd;)t+=n,r=e.next(t);return t>=Yd?1/0:t}const q2=e=>{const t=({timestamp:n})=>e(n);return{start:()=>D.update(t,!0),stop:()=>Je(t),now:()=>ae.isProcessing?ae.timestamp:at.now()}},Z2={decay:Ud,inertia:Ud,tween:Ys,keyframes:Ys,spring:$c},J2=e=>e/100;class Kc extends L0{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Vc,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new o(s,l,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,l=Hc(n)?n:Z2[n]||Ys;let c,u;l!==Ys&&typeof t[0]!="number"&&(c=vt(J2,I0(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});s==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Q2(d));const{calculatedDuration:f}=d,h=f+i,v=h*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:h,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:S}=this.options;return{done:!0,value:S[S.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:h,repeat:v,repeatType:x,repeatDelay:w,onUpdate:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-h*(this.speed>=0?1:-1),p=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,b=s;if(v){const S=Math.min(this.currentTime,d)/f;let V=Math.floor(S),A=S%1;!A&&S>=1&&(A=1),A===1&&V--,V=Math.min(V,v+1),!!(V%2)&&(x==="reverse"?(A=1-A,w&&(A-=w/f)):x==="mirror"&&(b=o)),g=Gt(0,1,A)*f}const j=p?{done:!1,value:c[0]}:b.next(g);l&&(j.value=l(j.value));let{done:k}=j;!p&&u!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return P&&i!==void 0&&(j.value=jo(c,this.options,i)),N&&N(j.value),P&&this.finish(),j}get duration(){const{resolved:t}=this;return t?gt(t.calculatedDuration):0}get time(){return gt(this.currentTime)}set time(t){t=mt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=gt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=q2,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const V0=new Set(["opacity","clipPath","filter","transform"]),D0=e=>Array.isArray(e)&&typeof e[0]=="number",ew=10,tw=(e,t)=>{let n="";const r=Math.max(Math.round(t/ew),2);for(let i=0;i<r;i++)n+=e(wn(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Yc(e){let t;return()=>(t===void 0&&(t=e()),t)}const nw={linearEasing:void 0};function rw(e,t){const n=Yc(e);return()=>{var r;return(r=nw[t])!==null&&r!==void 0?r:n()}}const Xs=rw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function O0(e){return!!(typeof e=="function"&&Xs()||!e||typeof e=="string"&&(e in jl||Xs())||D0(e)||Array.isArray(e)&&e.every(O0))}const Pr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,jl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pr([0,.65,.55,1]),circOut:Pr([.55,0,1,.45]),backIn:Pr([.31,.01,.66,-.59]),backOut:Pr([.33,1.53,.69,.99])};function B0(e,t){if(e)return typeof e=="function"&&Xs()?tw(e,t):D0(e)?Pr(e):Array.isArray(e)?e.map(n=>B0(n,t)||jl.easeOut):jl[e]}function iw(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:l,times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=B0(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function Xd(e,t){e.timeline=t,e.onfinish=null}const sw=Yc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Qs=10,ow=2e4;function aw(e){return Hc(e.type)||e.type==="spring"||!O0(e.ease)}function lw(e,t){const n=new Kc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<ow;)r=n.sample(s),i.push(r.value),s+=Qs;return{times:void 0,keyframes:i,duration:s-Qs,ease:"linear"}}const z0={anticipate:f0,backInOut:d0,circInOut:p0};function cw(e){return e in z0}class Qd extends L0{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new R0(s,(o,l)=>this.onKeyframesResolved(o,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:s,ease:o,type:l,motionValue:c,name:u,startTime:d}=this.options;if(!(!((r=c.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&Xs()&&cw(o)&&(o=z0[o]),aw(this.options)){const{onComplete:h,onUpdate:v,motionValue:x,element:w,...N}=this.options,m=lw(t,N);t=m.keyframes,t.length===1&&(t[1]=t[0]),i=m.duration,s=m.times,o=m.ease,l="keyframes"}const f=iw(c.owner.current,u,t,{...this.options,duration:i,times:s,ease:o});return f.startTime=d??this.calcStartTime(),this.pendingTimeline?(Xd(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:h}=this.options;c.set(jo(t,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:s,type:l,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return gt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return gt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=mt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return fe;const{animation:r}=n;Xd(r,t)}return fe}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:h,...v}=this.options,x=new Kc({...v,keyframes:r,duration:i,type:s,ease:o,times:l,isGenerator:!0}),w=mt(this.time);u.setWithVelocity(x.sample(w-Qs).value,x.sample(w).value,Qs)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:l}=t;return sw()&&r&&V0.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&s!=="mirror"&&o!==0&&l!=="inertia"}}const H0=Yc(()=>window.ScrollTimeline!==void 0);class uw{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>H0()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function dw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Xc=(e,t,n,r={},i,s)=>o=>{const l=Mc(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-mt(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:h=>{t.set(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};dw(l)||(d={...d,...A1(e,d)}),d.duration&&(d.duration=mt(d.duration)),d.repeatDelay&&(d.repeatDelay=mt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const h=jo(d.keyframes,l);if(h!==void 0)return D.update(()=>{d.onUpdate(h),d.onComplete()}),new uw([])}return!s&&Qd.supports(d)?new Qd(d):new Kc(d)},fw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),hw=e=>ml(e)?e[e.length-1]||0:e;function Qc(e,t){e.indexOf(t)===-1&&e.push(t)}function qc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Zc{constructor(){this.subscriptions=[]}add(t){return Qc(this.subscriptions,t),()=>qc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const qd=30,pw=e=>!isNaN(parseFloat(e)),zr={current:void 0};class mw{constructor(t,n={}){this.version="11.11.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=at.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=at.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=pw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Zc);const r=this.events[t].add(n);return t==="change"?()=>{r(),D.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return zr.current&&zr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=at.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>qd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,qd);return Uc(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rt(e,t){return new mw(e,t)}function gw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,rt(n))}function Jc(e,t){const n=No(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const l=hw(s[o]);gw(e,o,l)}}const Co=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vw="framerAppearId",U0="data-"+Co(vw);function $0(e){return e.props[U0]}const xe=e=>!!(e&&e.getVelocity);function xw(e){return!!(xe(e)&&e.add)}function W0(e){if(qt.has(e))return"transform";if(V0.has(e))return Co(e)}function Cl(e,t){var n;if(!e.applyWillChange)return;const r=e.getValue("willChange");if(xw(r))return r.add(t);!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&W0(t)&&e.setStaticValue("willChange","transform")}function yw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function G0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const h=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),v=c[f];if(v===void 0||d&&yw(d,f))continue;const x={delay:n,...Mc(o||{},f)};let w=!1;if(window.MotionHandoffAnimation){const m=$0(e);if(m){const p=window.MotionHandoffAnimation(m,f,D);p!==null&&(x.startTime=p,w=!0)}}Cl(e,f),h.start(Xc(f,h,v,e.shouldReduceMotion&&qt.has(f)?{type:!1}:x,e,w));const N=h.animation;N&&u.push(N)}return l&&Promise.all(u).then(()=>{D.update(()=>{l&&Jc(e,l)})}),u}function Sl(e,t,n={}){var r;const i=No(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(G0(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=s;return ww(e,t,d+u,f,h,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[u,d]=c==="beforeChildren"?[o,l]:[l,o];return u().then(()=>d())}else return Promise.all([o(),l(n.delay)])}function ww(e,t,n=0,r=0,i=1,s){const o=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(bw).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(Sl(u,t,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function bw(e,t){return e.sortNodePosition(t)}function K0(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Sl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Sl(e,t,n);else{const i=typeof t=="function"?No(e,t,n.custom):t;r=Promise.all(G0(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Nw=Ac.length;function Y0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Y0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Nw;n++){const r=Ac[n],i=e.props[r];(di(i)||i===!1)&&(t[r]=i)}return t}const jw=[...Lc].reverse(),Cw=Lc.length;function Sw(e){return t=>Promise.all(t.map(({animation:n,options:r})=>K0(e,n,r)))}function kw(e){let t=Sw(e),n=Zd(),r=!0;const i=c=>(u,d)=>{var f;const h=No(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:v,transitionEnd:x,...w}=h;u={...u,...w,...x}}return u};function s(c){t=c(e)}function o(c){const{props:u}=e,d=Y0(e.parent)||{},f=[],h=new Set;let v={},x=1/0;for(let N=0;N<Cw;N++){const m=jw[N],p=n[m],g=u[m]!==void 0?u[m]:d[m],b=di(g),j=m===c?p.isActive:null;j===!1&&(x=N);let k=g===d[m]&&g!==u[m]&&b;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),p.protectedKeys={...v},!p.isActive&&j===null||!g&&!p.prevProp||ui(g)||typeof g=="boolean")continue;const P=Tw(p.prevProp,g);let S=P||m===c&&p.isActive&&!k&&b||N>x&&b,V=!1;const A=Array.isArray(g)?g:[g];let se=A.reduce(i(m),{});j===!1&&(se={});const{prevResolvedValues:Ct={}}=p,Jt={...Ct,...se},hr=ne=>{S=!0,h.has(ne)&&(V=!0,h.delete(ne)),p.needsAnimating[ne]=!0;const T=e.getValue(ne);T&&(T.liveStyle=!1)};for(const ne in Jt){const T=se[ne],M=Ct[ne];if(v.hasOwnProperty(ne))continue;let _=!1;ml(T)&&ml(M)?_=!s0(T,M):_=T!==M,_?T!=null?hr(ne):h.add(ne):T!==void 0&&h.has(ne)?hr(ne):p.protectedKeys[ne]=!0}p.prevProp=g,p.prevResolvedValues=se,p.isActive&&(v={...v,...se}),r&&e.blockInitialAnimation&&(S=!1),S&&(!(k&&P)||V)&&f.push(...A.map(ne=>({animation:ne,options:{type:m}})))}if(h.size){const N={};h.forEach(m=>{const p=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),N[m]=p??null}),f.push({animation:N})}let w=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(h=>{var v;return(v=h.animationState)===null||v===void 0?void 0:v.setActive(c,u)}),n[c].isActive=u;const f=o(c);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Zd(),r=!0}}}function Tw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!s0(t,e):!1}function nn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Zd(){return{animate:nn(!0),whileInView:nn(),whileHover:nn(),whileTap:nn(),whileDrag:nn(),whileFocus:nn(),exit:nn()}}class Zt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Pw extends Zt{constructor(t){super(t),t.animationState||(t.animationState=kw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ui(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Ew=0;class Rw extends Zt{constructor(){super(...arguments),this.id=Ew++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Lw={animation:{Feature:Pw},exit:{Feature:Rw}},X0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function So(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const Aw=e=>t=>X0(t)&&e(t,So(t));function ht(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function xt(e,t,n,r){return ht(e,t,Aw(n),r)}const Jd=(e,t)=>Math.abs(e-t);function Mw(e,t){const n=Jd(e.x,t.x),r=Jd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Q0{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=da(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,v=Mw(f.offset,{x:0,y:0})>=3;if(!h&&!v)return;const{point:x}=f,{timestamp:w}=ae;this.history.push({...x,timestamp:w});const{onStart:N,onMove:m}=this.handlers;h||(N&&N(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ua(h,this.transformPagePoint),D.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=da(f.type==="pointercancel"?this.lastMoveEventInfo:ua(h,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,N),x&&x(f,N)},!X0(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=So(t),l=ua(o,this.transformPagePoint),{point:c}=l,{timestamp:u}=ae;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,da(l,this.history)),this.removeListeners=vt(xt(this.contextWindow,"pointermove",this.handlePointerMove),xt(this.contextWindow,"pointerup",this.handlePointerUp),xt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Je(this.updatePoint)}}function ua(e,t){return t?{point:t(e.point)}:e}function ef(e,t){return{x:e.x-t.x,y:e.y-t.y}}function da({point:e},t){return{point:e,delta:ef(e,q0(t)),offset:ef(e,_w(t)),velocity:Iw(t,.1)}}function _w(e){return e[0]}function q0(e){return e[e.length-1]}function Iw(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=q0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>mt(t)));)n--;if(!r)return{x:0,y:0};const s=gt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Z0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const tf=Z0("dragHorizontal"),nf=Z0("dragVertical");function J0(e){let t=!1;if(e==="y")t=nf();else if(e==="x")t=tf();else{const n=tf(),r=nf();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function eg(){const e=J0(!0);return e?(e(),!1):!0}function Hn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const tg=1e-4,Fw=1-tg,Vw=1+tg,ng=.01,Dw=0-ng,Ow=0+ng;function _e(e){return e.max-e.min}function Bw(e,t,n){return Math.abs(e-t)<=n}function rf(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=_e(n)/_e(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Fw&&e.scale<=Vw||isNaN(e.scale))&&(e.scale=1),(e.translate>=Dw&&e.translate<=Ow||isNaN(e.translate))&&(e.translate=0)}function Hr(e,t,n,r){rf(e.x,t.x,n.x,r?r.originX:void 0),rf(e.y,t.y,n.y,r?r.originY:void 0)}function sf(e,t,n){e.min=n.min+t.min,e.max=e.min+_e(t)}function zw(e,t,n){sf(e.x,t.x,n.x),sf(e.y,t.y,n.y)}function of(e,t,n){e.min=t.min-n.min,e.max=e.min+_e(t)}function Ur(e,t,n){of(e.x,t.x,n.x),of(e.y,t.y,n.y)}function Hw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function af(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Uw(e,{top:t,left:n,bottom:r,right:i}){return{x:af(e.x,n,i),y:af(e.y,t,r)}}function lf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function $w(e,t){return{x:lf(e.x,t.x),y:lf(e.y,t.y)}}function Ww(e,t){let n=.5;const r=_e(e),i=_e(t);return i>r?n=wn(t.min,t.max-r,e.min):r>i&&(n=wn(e.min,e.max-i,t.min)),Gt(0,1,n)}function Gw(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const kl=.35;function Kw(e=kl){return e===!1?e=0:e===!0&&(e=kl),{x:cf(e,"left","right"),y:cf(e,"top","bottom")}}function cf(e,t,n){return{min:uf(e,t),max:uf(e,n)}}function uf(e,t){return typeof e=="number"?e:e[t]||0}const df=()=>({translate:0,scale:1,origin:0,originPoint:0}),Un=()=>({x:df(),y:df()}),ff=()=>({min:0,max:0}),Z=()=>({x:ff(),y:ff()});function De(e){return[e("x"),e("y")]}function rg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Yw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Xw(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function fa(e){return e===void 0||e===1}function Tl({scale:e,scaleX:t,scaleY:n}){return!fa(e)||!fa(t)||!fa(n)}function on(e){return Tl(e)||ig(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ig(e){return hf(e.x)||hf(e.y)}function hf(e){return e&&e!=="0%"}function qs(e,t,n){const r=e-n,i=t*r;return n+i}function pf(e,t,n,r,i){return i!==void 0&&(e=qs(e,i,r)),qs(e,n,r)+t}function Pl(e,t=0,n=1,r,i){e.min=pf(e.min,t,n,r,i),e.max=pf(e.max,t,n,r,i)}function sg(e,{x:t,y:n}){Pl(e.x,t.translate,t.scale,t.originPoint),Pl(e.y,n.translate,n.scale,n.originPoint)}const mf=.999999999999,gf=1.0000000000001;function Qw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Wn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,sg(e,o)),r&&on(s.latestValues)&&Wn(e,s.latestValues))}t.x<gf&&t.x>mf&&(t.x=1),t.y<gf&&t.y>mf&&(t.y=1)}function $n(e,t){e.min=e.min+t,e.max=e.max+t}function vf(e,t,n,r,i=.5){const s=K(e.min,e.max,i);Pl(e,t,n,s,r)}function Wn(e,t){vf(e.x,t.x,t.scaleX,t.scale,t.originX),vf(e.y,t.y,t.scaleY,t.scale,t.originY)}function og(e,t){return rg(Xw(e.getBoundingClientRect(),t))}function qw(e,t,n){const r=og(e,n),{scroll:i}=t;return i&&($n(r.x,i.offset.x),$n(r.y,i.offset.y)),r}const ag=({current:e})=>e?e.ownerDocument.defaultView:null,Zw=new WeakMap;class Jw{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Z(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(So(d,"page").point)},s=(d,f)=>{const{drag:h,dragPropagation:v,onDragStart:x}=this.getProps();if(h&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=J0(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),De(N=>{let m=this.getAxisMotionValue(N).get()||0;if(ot.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const g=p.layout.layoutBox[N];g&&(m=_e(g)*(parseFloat(m)/100))}}this.originPoint[N]=m}),x&&D.postRender(()=>x(d,f)),Cl(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:h,dragDirectionLock:v,onDirectionLock:x,onDrag:w}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:N}=f;if(v&&this.currentDirection===null){this.currentDirection=eb(N),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,N),this.updateAxis("y",f.point,N),this.visualElement.render(),w&&w(d,f)},l=(d,f)=>this.stop(d,f),c=()=>De(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Q0(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:ag(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&D.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ki(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=Hw(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Hn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Uw(i.layoutBox,n):this.constraints=!1,this.elastic=Kw(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&De(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Gw(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Hn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=qw(r,i.root,this.visualElement.getTransformPagePoint());let o=$w(i.layout.layoutBox,s);if(n){const l=n(Yw(o));this.hasMutatedConstraints=!!l,l&&(o=rg(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=De(d=>{if(!Ki(d,n,this.currentDirection))return;let f=c&&c[d]||{};o&&(f={min:0,max:0});const h=i?200:1e6,v=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Cl(this.visualElement,t),r.start(Xc(t,r,0,n,this.visualElement,!1))}stopAnimation(){De(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){De(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){De(n=>{const{drag:r}=this.getProps();if(!Ki(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n];s.set(t[n]-K(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Hn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};De(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();i[o]=Ww({min:c,max:c},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),De(o=>{if(!Ki(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:u}=this.constraints[o];l.set(K(c,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;Zw.set(this.visualElement,this);const t=this.visualElement.current,n=xt(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Hn(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),D.read(r);const o=ht(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(De(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=kl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function Ki(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function eb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class tb extends Zt{constructor(t){super(t),this.removeGroupControls=fe,this.removeListeners=fe,this.controls=new Jw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fe}unmount(){this.removeGroupControls(),this.removeListeners()}}const xf=e=>(t,n)=>{e&&D.postRender(()=>e(t,n))};class nb extends Zt{constructor(){super(...arguments),this.removePointerDownListener=fe}onPointerDown(t){this.session=new Q0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ag(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:xf(t),onStart:xf(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&D.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=xt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ko=y.createContext(null);function rb(){const e=y.useContext(ko);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=y.useId();y.useEffect(()=>r(i),[]);const s=y.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,s]:[!0]}const eu=y.createContext({}),lg=y.createContext({}),ps={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function yf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Nr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=yf(e,t.target.x),r=yf(e,t.target.y);return`${n}% ${r}%`}},ib={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Kt.parse(e);if(i.length>5)return r;const s=Kt.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=c;const u=K(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}},Zs={};function sb(e){Object.assign(Zs,e)}const{schedule:tu,cancel:_C}=o0(queueMicrotask,!1);class ob extends y.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;sb(ab),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ps.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||D.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),tu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function cg(e){const[t,n]=rb(),r=y.useContext(eu);return a.jsx(ob,{...e,layoutGroup:r,switchLayoutGroup:y.useContext(lg),isPresent:t,safeToRemove:n})}const ab={borderRadius:{...Nr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Nr,borderTopRightRadius:Nr,borderBottomLeftRadius:Nr,borderBottomRightRadius:Nr,boxShadow:ib},ug=["TopLeft","TopRight","BottomLeft","BottomRight"],lb=ug.length,wf=e=>typeof e=="string"?parseFloat(e):e,bf=e=>typeof e=="number"||L.test(e);function cb(e,t,n,r,i,s){i?(e.opacity=K(0,n.opacity!==void 0?n.opacity:1,ub(r)),e.opacityExit=K(t.opacity!==void 0?t.opacity:1,0,db(r))):s&&(e.opacity=K(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<lb;o++){const l=`border${ug[o]}Radius`;let c=Nf(t,l),u=Nf(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||bf(c)===bf(u)?(e[l]=Math.max(K(wf(c),wf(u),r),0),(ot.test(u)||ot.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function Nf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const ub=dg(0,.5,h0),db=dg(.5,.95,fe);function dg(e,t,n){return r=>r<e?0:r>t?1:n(wn(e,t,r))}function jf(e,t){e.min=t.min,e.max=t.max}function Ve(e,t){jf(e.x,t.x),jf(e.y,t.y)}function Cf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Sf(e,t,n,r,i){return e-=t,e=qs(e,1/n,r),i!==void 0&&(e=qs(e,1/i,r)),e}function fb(e,t=0,n=1,r=.5,i,s=e,o=e){if(ot.test(t)&&(t=parseFloat(t),t=K(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=K(s.min,s.max,r);e===s&&(l-=t),e.min=Sf(e.min,t,n,l,i),e.max=Sf(e.max,t,n,l,i)}function kf(e,t,[n,r,i],s,o){fb(e,t[n],t[r],t[i],t.scale,s,o)}const hb=["x","scaleX","originX"],pb=["y","scaleY","originY"];function Tf(e,t,n,r){kf(e.x,t,hb,n?n.x:void 0,r?r.x:void 0),kf(e.y,t,pb,n?n.y:void 0,r?r.y:void 0)}function Pf(e){return e.translate===0&&e.scale===1}function fg(e){return Pf(e.x)&&Pf(e.y)}function Ef(e,t){return e.min===t.min&&e.max===t.max}function mb(e,t){return Ef(e.x,t.x)&&Ef(e.y,t.y)}function Rf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function hg(e,t){return Rf(e.x,t.x)&&Rf(e.y,t.y)}function Lf(e){return _e(e.x)/_e(e.y)}function Af(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class gb{constructor(){this.members=[]}add(t){Qc(this.members,t),t.scheduleRender()}remove(t){if(qc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function vb(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:h,skewX:v,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),v&&(r+=`skewX(${v}deg) `),x&&(r+=`skewY(${x}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const xb=(e,t)=>e.depth-t.depth;class yb{constructor(){this.children=[],this.isDirty=!1}add(t){Qc(this.children,t),this.isDirty=!0}remove(t){qc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(xb),this.isDirty=!1,this.children.forEach(t)}}function ms(e){const t=xe(e)?e.get():e;return fw(t)?t.toValue():t}function wb(e,t){const n=at.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Je(r),e(s-t))};return D.read(r,!0),()=>Je(r)}function bb(e){return e instanceof SVGElement&&e.tagName!=="svg"}function Nb(e,t,n){const r=xe(e)?e:rt(e);return r.start(Xc("",r,t,n)),r.animation}const an={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Er=typeof window<"u"&&window.MotionDebug!==void 0,ha=["","X","Y","Z"],jb={visibility:"hidden"},Mf=1e3;let Cb=0;function pa(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function pg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=$0(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",D,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&pg(r)}function mg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=Cb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Er&&(an.totalNodes=an.resolvedTargetDeltas=an.recalculatedProjection=0),this.nodes.forEach(Tb),this.nodes.forEach(Ab),this.nodes.forEach(Mb),this.nodes.forEach(Pb),Er&&window.MotionDebug.record(an)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new yb)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Zc),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=bb(o),this.instance=o;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=wb(h,250),ps.hasAnimatedSinceResize&&(ps.hasAnimatedSinceResize=!1,this.nodes.forEach(If))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||Db,{onLayoutAnimationStart:N,onLayoutAnimationComplete:m}=d.getProps(),p=!this.targetLayout||!hg(this.targetLayout,x)||v,g=!h&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||h&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const b={...Mc(w,"layout"),onPlay:N,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else h||If(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Je(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(_b),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&pg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_f);return}this.isUpdating||this.nodes.forEach(Rb),this.isUpdating=!1,this.nodes.forEach(Lb),this.nodes.forEach(Sb),this.nodes.forEach(kb),this.clearAllSnapshots();const l=at.now();ae.delta=Gt(0,1e3/60,l-ae.timestamp),ae.timestamp=l,ae.isProcessing=!0,sa.update.process(ae),sa.preRender.process(ae),sa.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,tu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Eb),this.sharedNodes.forEach(Ib)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,D.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){D.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Z(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!fg(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(l||on(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),Ob(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:l}=this.options;if(!l)return Z();const c=l.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Bb))){const{scroll:d}=this.root;d&&($n(c.x,d.offset.x),$n(c.y,d.offset.y))}return c}removeElementScroll(o){var l;const c=Z();if(Ve(c,o),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Ve(c,o),$n(c.x,f.offset.x),$n(c.y,f.offset.y))}return c}applyTransform(o,l=!1){const c=Z();Ve(c,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Wn(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),on(d.latestValues)&&Wn(c,d.latestValues)}return on(this.latestValues)&&Wn(c,this.latestValues),c}removeTransform(o){const l=Z();Ve(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!on(u.latestValues))continue;Tl(u.latestValues)&&u.updateSnapshot();const d=Z(),f=u.measurePageBox();Ve(d,f),Tf(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return on(this.latestValues)&&Tf(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=ae.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),Ur(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Z(),this.targetWithTransforms=Z()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),sg(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),Ur(this.relativeTargetOrigin,this.target,v.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Er&&an.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Tl(this.parent.latestValues)||ig(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ve(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,v=this.treeScale.y;Qw(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Z());const{target:x}=l;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cf(this.prevProjectionDelta.x,this.projectionDelta.x),Cf(this.prevProjectionDelta.y,this.projectionDelta.y)),Hr(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==v||!Af(this.projectionDelta.x,this.prevProjectionDelta.x)||!Af(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Er&&an.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Un(),this.projectionDelta=Un(),this.projectionDeltaWithTransform=Un()}setAnimationOrigin(o,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=Un();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Z(),v=c?c.source:void 0,x=this.layout?this.layout.source:void 0,w=v!==x,N=this.getStack(),m=!N||N.members.length<=1,p=!!(w&&!m&&this.options.crossfade===!0&&!this.path.some(Vb));this.animationProgress=0;let g;this.mixTargetDelta=b=>{const j=b/1e3;Ff(f.x,o.x,j),Ff(f.y,o.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ur(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Fb(this.relativeTarget,this.relativeTargetOrigin,h,j),g&&mb(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=Z()),Ve(g,this.relativeTarget)),w&&(this.animationValues=d,cb(d,u,this.latestValues,j,p,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Je(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=D.update(()=>{ps.hasAnimatedSinceResize=!0,this.currentAnimation=Nb(0,Mf,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=o;if(!(!l||!c||!u)){if(this!==o&&this.layout&&u&&gg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Z();const f=_e(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+f;const h=_e(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+h}Ve(l,c),Wn(l,d),Hr(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new gb),this.sharedNodes.get(o).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&pa("z",o,u,this.animationValues);for(let d=0;d<ha.length;d++)pa(`rotate${ha[d]}`,o,u,this.animationValues),pa(`skew${ha[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}getProjectionStyles(o){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return jb;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ms(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=ms(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!on(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=vb(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=h.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in Zs){if(h[w]===void 0)continue;const{correct:N,applyTo:m}=Zs[w],p=u.transform==="none"?h[w]:N(h[w],f);if(m){const g=m.length;for(let b=0;b<g;b++)u[m[b]]=p}else u[w]=p}return this.options.layoutId&&(u.pointerEvents=f===this?ms(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(_f),this.root.sharedNodes.clear()}}}function Sb(e){e.updateLayout()}function kb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?De(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],v=_e(h);h.min=r[f].min,h.max=h.min+v}):gg(s,n.layoutBox,r)&&De(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],v=_e(r[f]);h.max=h.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const l=Un();Hr(l,r,n.layoutBox);const c=Un();o?Hr(c,e.applyTransform(i,!0),n.measuredBox):Hr(c,r,n.layoutBox);const u=!fg(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:v}=f;if(h&&v){const x=Z();Ur(x,n.layoutBox,h.layoutBox);const w=Z();Ur(w,r,v.layoutBox),hg(x,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Tb(e){Er&&an.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Pb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Eb(e){e.clearSnapshot()}function _f(e){e.clearMeasurements()}function Rb(e){e.isLayoutDirty=!1}function Lb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function If(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ab(e){e.resolveTargetDelta()}function Mb(e){e.calcProjection()}function _b(e){e.resetSkewAndRotation()}function Ib(e){e.removeLeadSnapshot()}function Ff(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Vf(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function Fb(e,t,n,r){Vf(e.x,t.x,n.x,r),Vf(e.y,t.y,n.y,r)}function Vb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Db={duration:.45,ease:[.4,0,.1,1]},Df=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Of=Df("applewebkit/")&&!Df("chrome/")?Math.round:fe;function Bf(e){e.min=Of(e.min),e.max=Of(e.max)}function Ob(e){Bf(e.x),Bf(e.y)}function gg(e,t,n){return e==="position"||e==="preserve-aspect"&&!Bw(Lf(t),Lf(n),.2)}function Bb(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const zb=mg({attachResizeListener:(e,t)=>ht(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ma={current:void 0},vg=mg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ma.current){const e=new zb({});e.mount(window),e.setOptions({layoutScroll:!0}),ma.current=e}return ma.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Hb={pan:{Feature:nb},drag:{Feature:tb,ProjectionNode:vg,MeasureLayout:cg}};function zf(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(s,o)=>{if(s.pointerType==="touch"||eg())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t);const c=l[r];c&&D.postRender(()=>c(s,o))};return xt(e.current,n,i,{passive:!e.getProps()[r]})}class Ub extends Zt{mount(){this.unmount=vt(zf(this.node,!0),zf(this.node,!1))}unmount(){}}class $b extends Zt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vt(ht(this.node.current,"focus",()=>this.onFocus()),ht(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const xg=(e,t)=>t?e===t?!0:xg(e,t.parentElement):!1;function ga(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,So(n))}class Wb extends Zt{constructor(){super(...arguments),this.removeStartListeners=fe,this.removeEndListeners=fe,this.removeAccessibleListeners=fe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=xt(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps(),h=!f&&!xg(this.node.current,l.target)?d:u;h&&D.update(()=>h(l,c))},{passive:!(r.onTap||r.onPointerUp)}),o=xt(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=vt(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=l=>{l.key!=="Enter"||!this.checkPressEnd()||ga("up",(c,u)=>{const{onTap:d}=this.node.getProps();d&&D.postRender(()=>d(c,u))})};this.removeEndListeners(),this.removeEndListeners=ht(this.node.current,"keyup",o),ga("down",(l,c)=>{this.startPress(l,c)})},n=ht(this.node.current,"keydown",t),r=()=>{this.isPressing&&ga("cancel",(s,o)=>this.cancelPress(s,o))},i=ht(this.node.current,"blur",r);this.removeAccessibleListeners=vt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&D.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!eg()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&D.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=xt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=ht(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const El=new WeakMap,va=new WeakMap,Gb=e=>{const t=El.get(e.target);t&&t(e)},Kb=e=>{e.forEach(Gb)};function Yb({root:e,...t}){const n=e||document;va.has(n)||va.set(n,{});const r=va.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Kb,{root:e,...t})),r[i]}function Xb(e,t,n){const r=Yb(t);return El.set(e,n),r.observe(e),()=>{El.delete(e),r.unobserve(e)}}const Qb={some:0,all:1};class qb extends Zt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Qb[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(c)};return Xb(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Zb(t,n))&&this.startObserver()}unmount(){}}function Zb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Jb={inView:{Feature:qb},tap:{Feature:Wb},focus:{Feature:$b},hover:{Feature:Ub}},eN={layout:{ProjectionNode:vg,MeasureLayout:cg}},To=y.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Po=y.createContext({}),nu=typeof window<"u",Ci=nu?y.useLayoutEffect:y.useEffect,yg=y.createContext({strict:!1});let Hf=!1;function tN(e,t,n,r,i){var s;const{visualElement:o}=y.useContext(Po),l=y.useContext(yg),c=y.useContext(ko),u=y.useContext(To).reducedMotion,d=y.useRef();r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,h=y.useContext(lg);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&rN(d.current,n,i,h),y.useInsertionEffect(()=>{f&&f.update(n,c)});const v=n[U0],x=y.useRef(!!v&&!window.MotionHandoffIsComplete&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,v)));return Ci(()=>{f&&(f.updateFeatures(),tu.render(f.render),x.current&&f.animationState&&f.animationState.animateChanges())}),y.useEffect(()=>{f&&(!x.current&&f.animationState&&f.animationState.animateChanges(),x.current=!1,Hf||(Hf=!0,queueMicrotask(nN)))}),f}function nN(){window.MotionHandoffIsComplete=!0}function rN(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:wg(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||l&&Hn(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function wg(e){if(e)return e.options.allowProjection!==!1?e.projection:wg(e.parent)}function iN(e,t,n){return y.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Hn(n)&&(n.current=r))},[t])}function Eo(e){return ui(e.animate)||Ac.some(t=>di(e[t]))}function bg(e){return!!(Eo(e)||e.variants)}function sN(e,t){if(Eo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||di(n)?n:void 0,animate:di(r)?r:void 0}}return e.inherit!==!1?t:{}}function oN(e){const{initial:t,animate:n}=sN(e,y.useContext(Po));return y.useMemo(()=>({initial:t,animate:n}),[Uf(t),Uf(n)])}function Uf(e){return Array.isArray(e)?e.join(" "):e}const $f={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ar={};for(const e in $f)ar[e]={isEnabled:t=>$f[e].some(n=>!!t[n])};function aN(e){for(const t in e)ar[t]={...ar[t],...e[t]}}const lN=Symbol.for("motionComponentSymbol");function cN({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&aN(e);function s(l,c){let u;const d={...y.useContext(To),...l,layoutId:uN(l)},{isStatic:f}=d,h=oN(l),v=r(l,f);if(!f&&nu){dN();const x=fN(d);u=x.MeasureLayout,h.visualElement=tN(i,v,d,t,x.ProjectionNode)}return a.jsxs(Po.Provider,{value:h,children:[u&&h.visualElement?a.jsx(u,{visualElement:h.visualElement,...d}):null,n(i,l,iN(v,h.visualElement,c),v,f,h.visualElement)]})}const o=y.forwardRef(s);return o[lN]=i,o}function uN({layoutId:e}){const t=y.useContext(eu).id;return t&&e!==void 0?t+"-"+e:e}function dN(e,t){y.useContext(yg).strict}function fN(e){const{drag:t,layout:n}=ar;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const hN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ru(e){return typeof e!="string"||e.includes("-")?!1:!!(hN.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ng(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const jg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Cg(e,t,n,r){Ng(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(jg.has(i)?i:Co(i),t.attrs[i])}function Sg(e,{layout:t,layoutId:n}){return qt.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Zs[e]||e==="opacity")}function iu(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(xe(i[o])||t.style&&xe(t.style[o])||Sg(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),s}function kg(e,t,n){const r=iu(e,t,n);for(const i in e)if(xe(e[i])||xe(t[i])){const s=bi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function Sn(e){const t=y.useRef(null);return t.current===null&&(t.current=e()),t.current}function pN({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,s,o,l){const c={latestValues:mN(i,s,o,l?!1:e,t),renderState:n()};return r&&(c.mount=u=>r(i,u,c)),c}const Tg=e=>(t,n)=>{const r=y.useContext(Po),i=y.useContext(ko),s=()=>pN(e,t,r,i,n);return n?s():Sn(s)};function Wf(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const s=Rc(e,r[i]);if(s){const{transitionEnd:o,transition:l,...c}=s;n(c,o)}}}function mN(e,t,n,r,i){var s;const o={};let l=r&&((s=e.style)===null||s===void 0?void 0:s.willChange)===void 0;const c=i(e,{});for(const w in c)o[w]=ms(c[w]);let{initial:u,animate:d}=e;const f=Eo(e),h=bg(e);t&&h&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let v=n?n.initial===!1:!1;v=v||u===!1;const x=v?d:u;return x&&typeof x!="boolean"&&!ui(x)&&Wf(e,x,(w,N)=>{for(const m in w){let p=w[m];if(Array.isArray(p)){const g=v?p.length-1:0;p=p[g]}p!==null&&(o[m]=p)}for(const m in N)o[m]=N[m]}),l&&d&&u!==!1&&!ui(d)&&Wf(e,d,w=>{for(const N in w)if(W0(N)){o.willChange="transform";return}}),o}const su=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Pg=()=>({...su(),attrs:{}}),Eg=(e,t)=>t&&typeof e=="number"?t.transform(e):e,gN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vN=bi.length;function xN(e,t,n){let r="",i=!0;for(let s=0;s<vN;s++){const o=bi[s],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(o.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=Eg(l,Bc[o]);if(!c){i=!1;const d=gN[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function ou(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,l=!1;for(const c in t){const u=t[c];if(qt.has(c)){o=!0;continue}else if(x0(c)){i[c]=u;continue}else{const d=Eg(u,Bc[c]);c.startsWith("origin")?(l=!0,s[c]=d):r[c]=d}}if(t.transform||(o||n?r.transform=xN(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${c} ${u} ${d}`}}function Gf(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function yN(e,t,n){const r=Gf(t,e.x,e.width),i=Gf(n,e.y,e.height);return`${r} ${i}`}const wN={offset:"stroke-dashoffset",array:"stroke-dasharray"},bN={offset:"strokeDashoffset",array:"strokeDasharray"};function NN(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?wN:bN;e[s.offset]=L.transform(-r);const o=L.transform(t),l=L.transform(n);e[s.array]=`${o} ${l}`}function au(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(ou(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:v,dimensions:x}=e;h.transform&&(x&&(v.transform=h.transform),delete h.transform),x&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=yN(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),o!==void 0&&NN(h,o,l,c,!1)}const lu=e=>typeof e=="string"&&e.toLowerCase()==="svg",jN={useVisualState:Tg({scrapeMotionValuesFromProps:kg,createRenderState:Pg,onMount:(e,t,{renderState:n,latestValues:r})=>{D.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),D.render(()=>{au(n,r,lu(t.tagName),e.transformTemplate),Cg(t,n)})}})},CN={useVisualState:Tg({applyWillChange:!0,scrapeMotionValuesFromProps:iu,createRenderState:su})};function Rg(e,t,n){for(const r in t)!xe(t[r])&&!Sg(r,n)&&(e[r]=t[r])}function SN({transformTemplate:e},t){return y.useMemo(()=>{const n=su();return ou(n,t,e),Object.assign({},n.vars,n.style)},[t])}function kN(e,t){const n=e.style||{},r={};return Rg(r,n,e),Object.assign(r,SN(e,t)),r}function TN(e,t){const n={},r=kN(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const PN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Js(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||PN.has(e)}let Lg=e=>!Js(e);function EN(e){e&&(Lg=t=>t.startsWith("on")?!Js(t):e(t))}try{EN(require("@emotion/is-prop-valid").default)}catch{}function RN(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Lg(i)||n===!0&&Js(i)||!t&&!Js(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function LN(e,t,n,r){const i=y.useMemo(()=>{const s=Pg();return au(s,t,lu(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Rg(s,e.style,e),i.style={...s,...i.style}}return i}function AN(e=!1){return(n,r,i,{latestValues:s},o)=>{const c=(ru(n)?LN:TN)(r,s,o,n),u=RN(r,typeof n=="string",e),d=n!==y.Fragment?{...u,...c,ref:i}:{},{children:f}=r,h=y.useMemo(()=>xe(f)?f.get():f,[f]);return y.createElement(n,{...d,children:h})}}function MN(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...ru(r)?jN:CN,preloadedFeatures:e,useRender:AN(i),createVisualElement:t,Component:r};return cN(o)}}const Rl={current:null},Ag={current:!1};function _N(){if(Ag.current=!0,!!nu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Rl.current=e.matches;e.addListener(t),t()}else Rl.current=!1}function IN(e,t,n){for(const r in t){const i=t[r],s=n[r];if(xe(i))e.addValue(r,i);else if(xe(s))e.addValue(r,rt(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,rt(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Kf=new WeakMap,FN=[...b0,ge,Kt],VN=e=>FN.find(w0(e)),Yf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class DN{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},l={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Vc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=at.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,D.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=Eo(n),this.isVariantNode=bg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const v=f[h];c[h]!==void 0&&xe(v)&&v.set(c[h],!1)}}mount(t){this.current=t,Kf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Ag.current||_N(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Rl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Kf.delete(this.current),this.projection&&this.projection.unmount(),Je(this.notifyUpdate),Je(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=qt.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&D.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ar){const n=ar[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Z()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Yf.length;r++){const i=Yf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=IN(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=rt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(g0(i)||m0(i))?i=parseFloat(i):!VN(i)&&Kt.test(n)&&(i=E0(t,n)),this.setBaseTarget(t,xe(i)?i.get():i)),xe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Rc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!xe(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Zc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Mg extends DN{constructor(){super(...arguments),this.KeyframeResolver=R0}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function ON(e){return window.getComputedStyle(e)}class BN extends Mg{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=Ng}readValueFromInstance(t,n){if(qt.has(n)){const r=zc(n);return r&&r.default||0}else{const r=ON(t),i=(x0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return og(t,n)}build(t,n,r){ou(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return iu(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class zN extends Mg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Z}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(qt.has(n)){const r=zc(n);return r&&r.default||0}return n=jg.has(n)?n:Co(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return kg(t,n,r)}build(t,n,r){au(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Cg(t,n,r,i)}mount(t){this.isSVGTag=lu(t.tagName),super.mount(t)}}const HN=(e,t)=>ru(e)?new zN(t):new BN(t,{allowProjection:e!==y.Fragment}),UN=MN({...Lw,...Jb,...Hb,...eN},HN),R=T1(UN);class $N extends y.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function WN({children:e,isPresent:t}){const n=y.useId(),r=y.useRef(null),i=y.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=y.useContext(To);return y.useInsertionEffect(()=>{const{width:o,height:l,top:c,left:u}=i.current;if(t||!r.current||!o||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),a.jsx($N,{isPresent:t,childRef:r,sizeRef:i,children:y.cloneElement(e,{ref:r})})}const GN=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=Sn(KN),c=y.useId(),u=y.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:d=>{l.set(d,!0);for(const f of l.values())if(!f)return;r&&r()},register:d=>(l.set(d,!1),()=>l.delete(d))}),s?[Math.random()]:[n]);return y.useMemo(()=>{l.forEach((d,f)=>l.set(f,!1))},[n]),y.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(e=a.jsx(WN,{isPresent:n,children:e})),a.jsx(ko.Provider,{value:u,children:e})};function KN(){return new Map}const Yi=e=>e.key||"";function Xf(e){const t=[];return y.Children.forEach(e,n=>{y.isValidElement(n)&&t.push(n)}),t}const _g=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=y.useMemo(()=>Xf(e),[e]),c=l.map(Yi),u=y.useRef(!0),d=y.useRef(l),f=Sn(()=>new Map),[h,v]=y.useState(l),[x,w]=y.useState(l);Ci(()=>{u.current=!1,d.current=l;for(let p=0;p<x.length;p++){const g=Yi(x[p]);c.includes(g)?f.delete(g):f.get(g)!==!0&&f.set(g,!1)}},[x,c.length,c.join("-")]);const N=[];if(l!==h){let p=[...l];for(let g=0;g<x.length;g++){const b=x[g],j=Yi(b);c.includes(j)||(p.splice(g,0,b),N.push(b))}o==="wait"&&N.length&&(p=N),w(Xf(p)),v(l);return}const{forceRender:m}=y.useContext(eu);return a.jsx(a.Fragment,{children:x.map(p=>{const g=Yi(p),b=l===x||c.includes(g),j=()=>{if(f.has(g))f.set(g,!0);else return;let k=!0;f.forEach(P=>{P||(k=!1)}),k&&(m==null||m(),w(d.current),i&&i())};return a.jsx(GN,{isPresent:b,initial:!u.current||r?void 0:!1,custom:b?void 0:n,presenceAffectsLayout:s,mode:o,onExitComplete:b?void 0:j,children:p},g)})})};function Ig(e){const t=Sn(()=>rt(e)),{isStatic:n}=y.useContext(To);if(n){const[,r]=y.useState(e);y.useEffect(()=>t.on("change",r),[])}return t}function Fg(e,t){const n=Ig(t()),r=()=>n.set(t());return r(),Ci(()=>{const i=()=>D.preRender(r,!1,!0),s=e.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),Je(r)}}),n}const YN=e=>e&&typeof e=="object"&&e.mix,XN=e=>YN(e)?e.mix:void 0;function QN(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],o=e[3+n],l=Gc(i,s,{mixer:XN(s[0]),...o});return t?l(r):l}function qN(e){zr.current=[],e();const t=Fg(zr.current,e);return zr.current=void 0,t}function ZN(e,t,n,r){if(typeof e=="function")return qN(e);const i=typeof t=="function"?t:QN(t,n,r);return Array.isArray(e)?Qf(e,i):Qf([e],([s])=>i(s))}function Qf(e,t){const n=Sn(()=>[]);return Fg(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Vg(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const gs=new WeakMap;let Tt;function JN(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function ej({target:e,contentRect:t,borderBoxSize:n}){var r;(r=gs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return JN(e,n)}})})}function tj(e){e.forEach(ej)}function nj(){typeof ResizeObserver>"u"||(Tt=new ResizeObserver(tj))}function rj(e,t){Tt||nj();const n=Vg(e);return n.forEach(r=>{let i=gs.get(r);i||(i=new Set,gs.set(r,i)),i.add(t),Tt==null||Tt.observe(r)}),()=>{n.forEach(r=>{const i=gs.get(r);i==null||i.delete(t),i!=null&&i.size||Tt==null||Tt.unobserve(r)})}}const vs=new Set;let $r;function ij(){$r=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};vs.forEach(n=>n(t))},window.addEventListener("resize",$r)}function sj(e){return vs.add(e),$r||ij(),()=>{vs.delete(e),!vs.size&&$r&&($r=void 0)}}function oj(e,t){return typeof e=="function"?sj(e):rj(e,t)}const aj=50,qf=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),lj=()=>({time:0,x:qf(),y:qf()}),cj={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Zf(e,t,n,r){const i=n[t],{length:s,position:o}=cj[t],l=i.current,c=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${s}`]-e[`client${s}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=wn(0,i.scrollLength,i.current);const u=r-c;i.velocity=u>aj?0:Uc(i.current-l,u)}function uj(e,t,n){Zf(e,"x",t,n),Zf(e,"y",t,n),t.time=n}function dj(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const s=r.getBoundingClientRect();n.x+=i.left-s.left,n.y+=i.top-s.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:s}=r.getBBox();n.x+=i,n.y+=s;let o=null,l=r.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=r.parentNode;r=o}else break;return n}const fj={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Ll={start:0,center:.5,end:1};function Jf(e,t,n=0){let r=0;if(e in Ll&&(e=Ll[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const hj=[0,0];function pj(e,t,n,r){let i=Array.isArray(e)?e:hj,s=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Ll[e]?e:"0"]),s=Jf(i[0],n,r),o=Jf(i[1],t),s-o}const mj={x:0,y:0};function gj(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function vj(e,t,n){const{offset:r=fj.All}=n,{target:i=e,axis:s="y"}=n,o=s==="y"?"height":"width",l=i!==e?dj(i,e):mj,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:gj(i),u={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let d=!t[s].interpolate;const f=r.length;for(let h=0;h<f;h++){const v=pj(r[h],u[o],c[o],l[s]);!d&&v!==t[s].interpolatorOffsets[h]&&(d=!0),t[s].offset[h]=v}d&&(t[s].interpolate=Gc(t[s].offset,F0(r)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}function xj(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function yj(e,t,n,r={}){return{measure:()=>xj(e,r.target,n),update:i=>{uj(e,n,i),(r.offset||r.target)&&vj(e,n,r)},notify:()=>t(n)}}const jr=new WeakMap,eh=new WeakMap,xa=new WeakMap,th=e=>e===document.documentElement?window:e;function cu(e,{container:t=document.documentElement,...n}={}){let r=xa.get(t);r||(r=new Set,xa.set(t,r));const i=lj(),s=yj(t,e,i,n);if(r.add(s),!jr.has(t)){const l=()=>{for(const h of r)h.measure()},c=()=>{for(const h of r)h.update(ae.timestamp)},u=()=>{for(const h of r)h.notify()},d=()=>{D.read(l,!1,!0),D.read(c,!1,!0),D.update(u,!1,!0)};jr.set(t,d);const f=th(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&eh.set(t,oj(t,d)),f.addEventListener("scroll",d,{passive:!0})}const o=jr.get(t);return D.read(o,!1,!0),()=>{var l;Je(o);const c=xa.get(t);if(!c||(c.delete(s),c.size))return;const u=jr.get(t);jr.delete(t),u&&(th(t).removeEventListener("scroll",u),(l=eh.get(t))===null||l===void 0||l(),window.removeEventListener("resize",u))}}function Dg(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return D.update(r,!0),()=>Je(r)}function wj({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=cu(s=>{r.value=s[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const ya=new Map;function Og({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),ya.has(t)||ya.set(t,{});const r=ya.get(t);return r[n]||(r[n]=H0()?new ScrollTimeline({source:t,axis:n}):wj({source:t,axis:n})),r[n]}function bj(e){return e.length===2}function Bg(e){return e&&(e.target||e.offset)}function Nj(e,t){return bj(e)||Bg(t)?cu(n=>{e(n[t.axis].progress,n)},t):Dg(e,Og(t))}function jj(e,t){if(Bg(t))return e.pause(),cu(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Og(t);return e.attachTimeline(n,r=>(r.pause(),Dg(i=>{r.time=r.duration*i},n)))}}function Cj(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?Nj(e,r):jj(e,r)}function nh(e,t){z1(!!(!t||t.current))}const Sj=()=>({scrollX:rt(0),scrollY:rt(0),scrollXProgress:rt(0),scrollYProgress:rt(0)});function kj({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Sn(Sj);return(n?Ci:y.useEffect)(()=>(nh("target",t),nh("container",e),Cj((o,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function Tj(e){e.values.forEach(t=>t.stop())}function Al(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&Jc(e,i),e.variantChildren&&e.variantChildren.forEach(s=>{Al(s,t)})})}function Pj(e,t){if(Array.isArray(t))return Al(e,t);if(typeof t=="string")return Al(e,[t]);Jc(e,t)}function Ej(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(s=>{i.push(K0(s,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{Pj(r,n)})},stop(){e.forEach(n=>{Tj(n)})},mount(){return()=>{t.stop()}}};return t}function Rj(){const e=Sn(Ej);return Ci(e.mount,[]),e}const Ml=Rj,Lj={some:0,all:1};function Aj(e,t,{root:n,margin:r,amount:i="some"}={}){const s=Vg(e),o=new WeakMap,l=u=>{u.forEach(d=>{const f=o.get(d.target);if(d.isIntersecting!==!!f)if(d.isIntersecting){const h=t(d);typeof h=="function"?o.set(d.target,h):c.unobserve(d.target)}else f&&(f(d),o.delete(d.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:Lj[i]});return s.forEach(u=>c.observe(u)),()=>c.disconnect()}function Mj(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[s,o]=y.useState(!1);return y.useEffect(()=>{if(!e.current||i&&s)return;const l=()=>(o(!0),i?void 0:()=>o(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return Aj(e.current,l,c)},[t,e,n,i,r]),s}const kn="/AnimateReact/assets/logo-C9avz92a.png",_j=()=>a.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-[#1E1E1E] text-center px-4",children:[a.jsxs(R.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:"visible",transition:{duration:.5,delay:.35},children:[a.jsx("div",{className:"grid place-items-center",children:a.jsx(R.img,{className:"h-20 w-auto md:h-28 lg:h-36",src:kn,alt:"logo",animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:3,ease:"linear"}})}),a.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl text-[#E0E0E0] font-serif mt-4",children:"AnimateReact"}),a.jsxs("p",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-[#EAD196] font-roboto",children:["Animated UI Components for",a.jsx("span",{className:"text-purple-300 block md:inline my-1 px-2",children:"React & Tailwind"})]}),a.jsx("p",{className:"text-white text-base md:text-lg lg:text-xl w-[18rem] md:w-[25rem] lg:w-[30rem] mx-auto my-4",children:"Addicting, interactive, animated UI components for React, Tailwind CSS, Framer motion. Copy & paste into your code with 2 clicks."})]}),a.jsx(R.button,{className:"bg-[#E91E63] text-white px-6 md:px-8 py-2 rounded-full text-base md:text-lg font-medium hover:bg-[#03DAC6] transition-all hover:shadow-black hover:shadow-md mt-6",whileHover:{scale:1.09},transition:{ease:"easeInOut",duration:.125},children:a.jsx(Zn,{to:"/app",target:"_blank",children:"Get Started"})})]}),Ij=()=>{const[e,t]=y.useState(""),n=[{name:"Navbar",link:"/Navbar"},{name:"Footer",link:"/Footer"},{name:"Button",link:"/Buttons"},{name:"Card",link:"/Cards"},{name:"Carousel",link:"/Carousel"},{name:"Text",link:"/Texts"},{name:"Toggle",link:"/Toggle"}],r=s=>{t(s.target.value)},i=n.filter(s=>s.name.toLowerCase().includes(e.toLowerCase()));return a.jsx("nav",{className:"bg-[#1E1E1E] ",children:a.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row md:space-x-2 justify-between items-center p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("img",{className:"h-12 w-auto md:h-16",src:kn,alt:"logo"}),a.jsx("div",{className:"text-[#FFFFFF] text-xl md:text-2xl font-serif font-bold ml-2",children:"AnimateReact"})]}),a.jsxs("div",{className:"w-full max-w-md mt-4 md:mt-0 md:w-[22rem] sm:w-full md:space-x-4",children:[a.jsx("input",{type:"text",value:e,onChange:r,className:"w-full p-2 rounded bg-[#FFFFFF] text-black text-md h-8 placeholder-black",placeholder:"Search components..."}),e&&a.jsx("div",{className:"absolute bg-white shadow-lg rounded mt-2 z-10",children:i.length>0?i.map((s,o)=>a.jsx(Zn,{to:s.link,className:"block p-2 text-black hover:bg-gray-200",children:s.name},o)):a.jsx("div",{className:"p-2 text-black",children:"No results found"})})]})]})})};var zg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rh=ke.createContext&&ke.createContext(zg),Fj=["attr","size","title"];function Vj(e,t){if(e==null)return{};var n=Dj(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Dj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eo.apply(this,arguments)}function ih(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function to(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ih(Object(n),!0).forEach(function(r){Oj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ih(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oj(e,t,n){return t=Bj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bj(e){var t=zj(e,"string");return typeof t=="symbol"?t:t+""}function zj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hg(e){return e&&e.map((t,n)=>ke.createElement(t.tag,to({key:n},t.attr),Hg(t.child)))}function B(e){return t=>ke.createElement(Hj,eo({attr:to({},e.attr)},t),Hg(e.child))}function Hj(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=Vj(e,Fj),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),ke.createElement("svg",eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:to(to({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&ke.createElement("title",null,s),e.children)};return rh!==void 0?ke.createElement(rh.Consumer,null,n=>t(n)):t(zg)}function Uj(e){return B({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function uu(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function $j(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function du(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function fu(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Wj(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function sh(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"},child:[]}]})(e)}const Gj="/AnimateReact/assets/react-DF0Kc7gD.png",Ug="/AnimateReact/assets/framerMotion-h55gUaEX.png",Kj="/AnimateReact/assets/tailwind-BR9rzo2S.png",Yj=()=>a.jsx("footer",{className:"bg-[#1E1E1E] text-[#E0E0E0] p-4",children:a.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row md:w-screen md:space-x-4 justify-around items-center space-y-4 md:space-y-0",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("img",{className:"h-12 w-auto md:h-16 m-2",src:kn,alt:"logo"}),a.jsxs("div",{className:"text-base text-gray-400",children:[a.jsx("p",{className:"text-white",children:"Designed by Sheetal Joshi"}),a.jsx("p",{children:"© 2024 Sheetal Joshi. All rights reserved."})]})]}),a.jsxs("div",{className:"flex flex-col items-center md:items-start text-sm",children:[a.jsx("h1",{className:"text-base font-bold",children:"Socials"}),a.jsxs("a",{href:"mailto:sheetaljoshi262@gmail.com",className:"flex items-center mt-2",children:[a.jsx(Wj,{className:"mx-2 text-white hover:text-[#03DAC6]",size:18}),a.jsx("span",{className:"text-white hover:text-[#03DAC6]",children:"Email"})]}),a.jsxs("a",{href:"https://linkedin.com",className:"flex items-center mt-2",children:[a.jsx($j,{className:"mx-2 text-white hover:text-[#03DAC6]",size:18}),a.jsx("span",{className:"text-white hover:text-[#03DAC6]",children:"LinkedIn"})]}),a.jsxs("a",{href:"https://github.com",className:"flex items-center mt-2",children:[a.jsx(Uj,{className:"mx-2 text-white hover:text-[#03DAC6]",size:18}),a.jsx("span",{className:"text-white hover:text-[#03DAC6]",children:"GitHub"})]})]}),a.jsxs("div",{className:"text-sm text-center md:text-left",children:[a.jsx("h1",{className:"text-base font-bold",children:"Sites"}),a.jsx(Zn,{to:"/",className:"text-white hover:text-[#03DAC6] mt-2 block",children:"Home"}),a.jsx(Zn,{to:"/App",className:"text-white hover:text-[#03DAC6] mt-2 block",children:"Components"}),a.jsx(Zn,{to:"/AboutMe",className:"text-white hover:text-[#03DAC6] mt-2 block",children:"About Me"})]}),a.jsx("div",{className:"w-[18rem] md:w-[30rem] text-sm text-center md:text-left",children:a.jsxs("p",{children:["This project is a"," ",a.jsx("img",{className:"inline h-5 mx-1",src:Gj,alt:"React"}),"React styling library using"," ",a.jsx("img",{className:"inline h-4 mx-1",src:Ug,alt:"Framer Motion"}),"Tailwind CSS and"," ",a.jsx("img",{className:"inline h-3 mx-1",src:Kj,alt:"Tailwind"}),"Framer Motion for responsive, animated UIs."]})})]})});function oh(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function Xj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(e)}function Qj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"10"},child:[]},{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"16"},child:[]}]})(e)}function $g(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function qj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"13 17 18 12 13 7"},child:[]},{tag:"polyline",attr:{points:"6 17 11 12 6 7"},child:[]}]})(e)}function Zj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"},child:[]}]})(e)}function Jj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(e)}function Wg(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function e4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}function t4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function n4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function r4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function i4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function s4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},child:[]},{tag:"path",attr:{d:"M22 12A10 10 0 0 0 12 2v10z"},child:[]}]})(e)}function o4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function a4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)}function l4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function c4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(e)}function u4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function Gg(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function d4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}const lt=()=>{const[e,t]=y.useState(!1);return a.jsxs("div",{children:[a.jsx("div",{className:"lg:hidden md:hidden p-4",children:a.jsx("button",{onClick:()=>t(n=>!n),className:"text-3xl focus:outline-none",children:e?a.jsx(d4,{}):a.jsx(n4,{})})}),a.jsx("div",{className:`sticky top-0 h-screen  bg-white text-[#272727] w-[12rem] md:w-[14rem] lg:w-[15rem] border-r-2 border-black p-6 pt-8 no-scrollbar overflow-y-auto transition-transform transform ${e?"translate-x-0":"-translate-x-full"} md:translate-x-0`,children:a.jsxs("div",{className:"flex flex-col space-y-8",children:[a.jsx("span",{className:"text-2xl md:text-3xl font-bold",children:"Components"}),["Navbar","Cards","Buttons","Text","Footer","Carousels","Toggles"].map((n,r)=>a.jsx(Zn,{to:`/${n.toLowerCase()}`,className:"hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-lg md:text-xl font-semibold p-1 rounded-md",children:n},r))]})}),e&&a.jsx("div",{onClick:()=>t(!1),className:"fixed inset-0 bg-black bg-opacity-50 md:hidden lg:hidden"})]})},f4={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:.05}}},Xi={hidden:{opacity:0},visible:{opacity:1}},h4=()=>a.jsx("div",{className:"bg-gradient-to-r from-teal-300 to-blue-500 font-sans w-full h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8",children:a.jsxs(R.div,{className:"text-black text-center",initial:"hidden",animate:"visible",variants:f4,transition:{repeat:1/0,repeatType:"loop",delayChildren:3,ease:"linear"},children:[a.jsx(R.h1,{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2",children:Array.from("AnimateReact").map((i,s)=>a.jsx(R.span,{variants:Xi,children:i===" "?" ":i},s))}),a.jsx(R.h1,{className:"text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2",children:Array.from("Addictive, Interactive UI Components").map((i,s)=>a.jsx(R.span,{variants:Xi,children:i===" "?" ":i},s))}),a.jsx(R.h2,{className:"text-xs sm:text-sm md:text-lg lg:text-xl text-black mb-2",children:Array.from("Instantly Integrate Animated, Responsive UI Elements with React, ").map((i,s)=>a.jsx(R.span,{variants:Xi,children:i===" "?" ":i},s))}),a.jsx(R.h2,{className:"text-xs sm:text-sm md:text-lg lg:text-xl text-black",children:Array.from(" Tailwind CSS, and Framer Motion—Just Copy & Paste in Two Clicks").map((i,s)=>a.jsx(R.span,{variants:Xi,children:i===" "?" ":i},s))})]})}),Qi="Encrypt data",ah=2,p4=50,lh="!@#$%^&*():{};|,.<>/?",m4=()=>{const e=y.useRef(null),[t,n]=y.useState(Qi),[r,i]=y.useState(!1),s=()=>{let u=0;e.current=setInterval(()=>{const d=Qi.split("").map((f,h)=>{if(u/ah>h)return f;const v=Math.floor(Math.random()*lh.length);return lh[v]}).join("");n(d),u++,u>=Qi.length*ah&&o()},p4)},o=()=>{clearInterval(e.current||void 0),n(Qi)},l=`
import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const Example = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
      <EncryptButton />
    </div>
  );
};

const TARGET_TEXT = "Encrypt data";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="roup relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-green-500 transition-colors hover:text-green-500"
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default Example;
`,c=()=>{navigator.clipboard.writeText(l.trim()),i(!0),setTimeout(()=>i(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mb-6 mt-5",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Ecrypted Data Button"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsxs(R.button,{whileHover:{scale:1.025},whileTap:{scale:.975},onMouseEnter:s,onMouseLeave:o,className:"group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-green-500 transition-colors hover:text-green-500",children:[a.jsxs("div",{className:"relative z-10 flex items-center gap-2",children:[a.jsx(e4,{}),a.jsx("span",{children:t})]}),a.jsx(R.span,{initial:{y:"100%"},animate:{y:"-100%"},transition:{repeat:1/0,repeatType:"mirror",duration:1,ease:"linear"},className:"duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-green-600/0 from-40% via-green-600/100 to-green-600/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:l.trim()})}),a.jsx("button",{onClick:c,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:r?"Copied!":"Copy"})]})]})},g4=()=>{const e=y.useRef(null),t=y.useRef(null),[n,r]=y.useState(!1);y.useEffect(()=>{const o=c=>{const{width:u}=c.target.getBoundingClientRect(),f=`${c.offsetX/u*100}%`;t.current.animate({left:f},{duration:250,fill:"forwards"})},l=()=>{t.current.animate({left:"50%"},{duration:100,fill:"forwards"})};return e.current.addEventListener("mousemove",o),e.current.addEventListener("mouseleave",l),()=>{e.current.removeEventListener("mousemove",o),e.current.removeEventListener("mouseleave",l)}},[]);const i=`
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = \`\${(offset / width) * 100}%\`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Hover me
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default ButtonWrapper;

  `,s=()=>{navigator.clipboard.writeText(i.trim()),r(!0),setTimeout(()=>r(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"SpotLight"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] shadow-sm shadow-black p-6",children:a.jsxs(R.button,{whileTap:{scale:.985},ref:e,className:"relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white",children:[a.jsx("span",{className:"pointer-events-none relative z-10 mix-blend-difference",children:"Hover me"}),a.jsx("span",{ref:t,className:"pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:i.trim()})}),a.jsx("button",{onClick:s,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:n?"Copied!":"Copy"})]})]})},ch=`
import React from "react";
const Example = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-slate-200 p-4">
      <DrawOutlineButton>Hover me</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-black"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-pink-600 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-pink-600 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;
`,v4=({children:e,...t})=>a.jsxs("button",{...t,className:"group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-black",children:[a.jsx("span",{children:e}),a.jsx("span",{className:"absolute left-0 top-0 h-[2px] w-0 bg-pink-600 transition-all duration-100 group-hover:w-full"}),a.jsx("span",{className:"absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full"}),a.jsx("span",{className:"absolute bottom-0 right-0 h-[2px] w-0 bg-pink-600 transition-all delay-200 duration-100 group-hover:w-full"}),a.jsx("span",{className:"absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full"})]}),x4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(ch.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:" p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Outline"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsx(v4,{children:"Hover me"})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:ch.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},uh=`
const NeuButton = () => {
  return (
    <div className="bg-white min-h-[200px] flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Hover me
      </button>
    </div>
  );
};

export default NeuButton;
`,y4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(uh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Click"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsx("div",{className:" flex items-center justify-center",children:a.jsx("button",{className:"px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",children:"Hover me"})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:uh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},w4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(r.trim()),t(!0),setTimeout(()=>t(!1),2e3)},r=`
import React from "react";
import { motion } from "framer-motion";

const ToggleButton = () => {
  return (
    <div className="flex gap-2 w-[380px] justify-center p-4">
      {/* Button A */}
      <motion.button
        className="flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2"
        initial={{ flex: 0.75 }}
        whileHover={{ flex: 2 }} // Increase size on hover
        whileTap={{
          scale: 0.95,
          backgroundColor: "#FF003C",
          color: "#fff",
        }}
        transition={{ duration: 0.4 }}
        style={{
          "--_c": "#88C100",
          "--b": "5px", // Border thickness
          "--h": "1.8em", // Height
          flex: "calc(1.25 + var(--_s,0))",
          height: "var(--h)",
          color: "var(--_c)",
          border: \`var(--b) solid var(--_c)\`,
          background: \`conic-gradient(at calc(100% - 1.3 * var(--b)) 0, var(--_c) 209deg, #0000 211deg) border-box\`,
          clipPath:
            "polygon(0 0, 100% 0, calc(100% - 0.577 * var(--h)) 100%, 0 100%)",
          padding: \`0 calc(0.288 * var(--h)) 0 0\`,
          margin: \`0 calc(-0.288 * var(--h)) 0 0\`,
          boxSizing: "border-box",
        }}
      >
        A
      </motion.button>

      {/* Button B */}
      <motion.button
        className="flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2"
        initial={{ flex: 0.75 }}
        whileHover={{ flex: 2 }} // Increase size on hover
        whileTap={{
          scale: 0.95,
          backgroundColor: "#FF003C",
          color: "#fff",
        }}
        transition={{ duration: 0.4 }}
        style={{
          "--_c": "#FF003C",
          "--b": "5px", // Border thickness
          "--h": "1.8em", // Height
          flex: "calc(.75 + var(--_s,0))",
          height: "var(--h)",
          color: "var(--_c)",
          border: \`var(--b) solid var(--_c)\`,
          background: \`conic-gradient(from -90deg at calc(1.3 * var(--b)) 100%, var(--_c) 119deg, #0000 121deg) border-box\`,
          clipPath:
            "polygon(calc(0.577 * var(--h)) 0, 100% 0, 100% 100%, 0 100%)",
          margin: \`0 0 0 calc(-0.288 * var(--h))\`,
          padding: \`0 0 0 calc(0.288 * var(--h))\`,
        }}
      >
        B
      </motion.button>
    </div>
  );
};

export default ToggleButton;`;return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Options Button"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] shadow-sm shadow-black p-6",children:a.jsxs("div",{className:"flex gap-2 w-[380px] justify-center",children:[a.jsx(R.button,{className:"flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2",initial:{flex:.75},whileHover:{flex:2},whileTap:{scale:.95,backgroundColor:"#FF003C",color:"#fff"},transition:{duration:.4},style:{"--_c":"#88C100","--b":"5px","--h":"1.8em",flex:"calc(1.25 + var(--_s,0))",height:"var(--h)",color:"var(--_c)",border:"var(--b) solid var(--_c)",background:"conic-gradient(at calc(100% - 1.3 * var(--b)) 0, var(--_c) 209deg, #0000 211deg) border-box",clipPath:"polygon(0 0, 100% 0, calc(100% - 0.577 * var(--h)) 100%, 0 100%)",padding:"0 calc(0.288 * var(--h)) 0 0",margin:"0 calc(-0.288 * var(--h)) 0 0",boxSizing:"border-box"},children:"A"}),a.jsx(R.button,{className:"flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2",initial:{flex:.75},whileHover:{flex:2},whileTap:{scale:.95,backgroundColor:"#FF003C",color:"#fff"},transition:{duration:.4},style:{"--_c":"#FF003C","--b":"5px","--h":"1.8em",flex:"calc(.75 + var(--_s,0))",height:"var(--h)",color:"var(--_c)",border:"var(--b) solid var(--_c)",background:"conic-gradient(from -90deg at calc(1.3 * var(--b)) 100%, var(--_c) 119deg, #0000 121deg) border-box",clipPath:"polygon(calc(0.577 * var(--h)) 0, 100% 0, 100% 100%, 0 100%)",margin:"0 0 0 calc(-0.288 * var(--h))",padding:"0 0 0 calc(0.288 * var(--h))"},children:"B"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:r.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},dh=`
import React from "react";
import { motion } from "framer-motion";

const ClipHoverButton = () => {
  return (
    <div className="flex justify-center py-20 w-full bg-slate-200">
      <motion.button
        className="relative flex items-center justify-center text-white bg-black border rounded-3xl overflow-hidden md:py-10 md:px-20 lg:py-12 lg:px-24 text-3xl md:text-5xl lg:text-6xl"
        whileHover="hover"
        initial={{ backgroundColor: "black" }}
        variants={{
          hover: {
            backgroundColor: "transparent",
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
      >
        {/* Text Span with Fade and Slide Transition */}
        <motion.span
          className="relative z-10"
          initial={{ opacity: 1, translateY: 0 }}
          variants={{
            hover: {
              opacity: 0,
              translateY: -50,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          Welcome To The...
        </motion.span>

        {/* ClipPath Animation for Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "circle(0.0% at 50% 100%)" }}
          variants={{
            hover: {
              clipPath: "circle(100.0% at 50% 100%)",
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          style={{
            backgroundColor: "black",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Image with Opacity and ClipPath Transition */}
        <motion.div
          className="absolute w-full bottom-0 h-full z-10"
          initial={{ opacity: 0 }}
          variants={{
            hover: {
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
        >
          <img
            src="https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094601_e9Z3yUFuSGRGGMrjslnWJJkvw6M7oMpE.jpg"
            alt="Logo"
            className="object-fill opacity-60 h-full w-full"
          />
        </motion.div>

        {/* Text on Hover ("Tournament of Power") */}
        <motion.div
          className="absolute z-10 text-6xl text-white"
          initial={{ opacity: 0 }}
          variants={{
            hover: {
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
        >
          Tournament Of Power
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ClipHoverButton;

`,b4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(dh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Clip Hover Button"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center py-20 w-full",children:a.jsxs(R.button,{className:"relative flex items-center justify-center text-white bg-black border rounded-3xl overflow-hidden md:py-10 md:px-20 lg:py-12 lg:px-24 text-3xl md:text-5xl lg:text-6xl",whileHover:"hover",initial:{backgroundColor:"black"},variants:{hover:{backgroundColor:"transparent",transition:{duration:.3,ease:"easeOut"}}},children:[a.jsx(R.span,{className:"relative z-10",initial:{opacity:1,translateY:0},variants:{hover:{opacity:0,translateY:-50,transition:{duration:.4,ease:"easeOut"}}},children:"Welcome To The..."}),a.jsx(R.div,{className:"absolute inset-0 z-0",initial:{clipPath:"circle(0.0% at 50% 100%)"},variants:{hover:{clipPath:"circle(100.0% at 50% 100%)",transition:{duration:.5,ease:"easeOut"}}},style:{backgroundColor:"black",position:"absolute",width:"100%",height:"100%"}}),a.jsx(R.div,{className:"absolute w-full bottom-0 h-full z-10",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.3,ease:"easeOut"}}},children:a.jsx("img",{src:"https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094601_e9Z3yUFuSGRGGMrjslnWJJkvw6M7oMpE.jpg",alt:"Logo",className:"object-fill opacity-60 h-full w-full"})}),a.jsx(R.div,{className:"absolute z-10 text-6xl text-white",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.3,ease:"easeOut"}}},children:"Tournament Of Power"})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:dh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},fh=`
import { FiSend } from "react-icons/fi";

const NeumorphismButton = () => {
  return (
    <div className="bg-slate-900 w-fit py-8 px-20">
      <button
        className={\`
    
      px-4 py-2 rounded-full 
      flex items-center gap-2 
      text-slate-200
      shadow-[-5px_-5px_6px_rgba(255,_255,_255,_0.8),_5px_5px_6px_rgba(0,_0,_0,_0.25)]
      
      transition-all

      hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),
      inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
      hover:text-violet-500
  \`}
      >
        <FiSend />
        <span>Hover Me</span>
      </button>
    </div>
  );
};

export default NeumorphismButton;

`,N4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(fh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Morphism Button"}),a.jsx("div",{className:"bg-gray-900 flex items-center justify-center w-[68rem] h-[16rem] shadow-sm shadow-black p-6",children:a.jsxs("button",{className:`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-200
        shadow-[-5px_-5px_6px_rgba(255,_255,_255,_0.8),_5px_5px_6px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `,children:[a.jsx(o4,{}),a.jsx("span",{children:"Hover Me"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:fh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},j4=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(m4,{}),a.jsx(g4,{}),a.jsx(x4,{}),a.jsx(y4,{}),a.jsx(w4,{}),a.jsx(b4,{}),a.jsx(N4,{})]}),hh=`
import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Direct import from Framer Motion

export default function RevealAnimation() {
  return (
    <div className="w-full h-screen bg-white px-6 md:px-12 relative">
      <div className="h-full flex items-center justify-center flex-col md:flex-row text-center md:text-left relative z-10">
        <div className="text-black">
          <HeroRevealAnimation>
            <h1 className="text-xl sm:text-2xl md:text-5xl text-black mb-4">
              Welcome to AnimateReact
            </h1>
          </HeroRevealAnimation>
          <HeroRevealAnimation>
            <p className="text-sm sm:text-md md:text-lg text-left text-black mb-4">
              A modern and accessible React UI framework.
            </p>
          </HeroRevealAnimation>
          <HeroRevealAnimation>
            <p className="text-xs sm:text-sm md:text-md text-left w-[280px] md:w-[400px] text-black mb-2">
              I&apos;ve spent the last 5 years building and scaling software for some pretty cool
              companies. I also teach people to paint online (in case you&apos;ve got an empty canvas
              layin&apos; around 🎨). Let&apos;s connect!
            </p>
          </HeroRevealAnimation>
          <HeroRevealAnimation>
            <button className="my-5 bg-blue-500 text-white py-2 px-4 rounded text-xs sm:text-sm md:text-md hover:bg-blue-600">
              Contact me
            </button>
          </HeroRevealAnimation>
        </div>
      </div>
    </div>
  );
}

function HeroRevealAnimation({ children, width = 'fit-content' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      sideControls.start('visible');
    }
  }, [isInView, mainControls, sideControls]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: '0%' },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={sideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: '4px',
          bottom: '4px',
          left: '0',
          right: '0',
          background: '#90cdf4',
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}
`,C4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(hh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-6 flex flex-col space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-3",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Reveal Text"}),a.jsx("div",{className:"bg-gray-200 rounded-lg shadow-sm w-[66rem] shadow-black p-6",children:a.jsx("div",{className:"w-full p-8 bg-white px-6 md:px-12 relative",children:a.jsx("div",{className:"h-full flex items-center justify-center flex-col md:flex-row text-center md:text-left relative z-10",children:a.jsxs("div",{className:"text-black",children:[a.jsx(qi,{children:a.jsx("h1",{className:"text-xl sm:text-2xl md:text-5xl text-black mb-4",children:"Welcome to AnimateReact"})}),a.jsx(qi,{children:a.jsx("p",{className:"text-sm sm:text-md md:text-lg text-left text-black mb-4",children:"A modern and accessible React UI framework."})}),a.jsx(qi,{children:a.jsx("p",{className:"text-xs sm:text-sm md:text-md text-left w-[280px] md:w-[400px] text-black mb-2",children:"I ve spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas laying around 🎨). Let's connect!"})}),a.jsx(qi,{children:a.jsx("button",{className:"my-5 bg-blue-500 text-white py-2 px-4 rounded text-xs sm:text-sm md:text-md hover:bg-blue-600",children:"Contact me"})})]})})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:hh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})};function qi({children:e,width:t="fit-content"}){const n=y.useRef(null),r=Mj(n,{once:!0}),i=Ml(),s=Ml();return y.useEffect(()=>{r&&(i.start("visible"),s.start("visible"))},[r,i,s]),a.jsxs("div",{ref:n,className:"relative overflow-hidden",style:{width:t},children:[a.jsx(R.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:i,transition:{duration:.8,delay:.25},children:e}),a.jsx(R.div,{variants:{hidden:{left:"0%"},visible:{left:"100%"}},initial:"hidden",animate:s,transition:{duration:.5,ease:"easeIn"},style:{position:"absolute",top:"4px",bottom:"4px",left:"0",right:"0",background:"#90cdf4",zIndex:20}})]})}const ph=`
import React from "react";

const BubbleText = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {'Bubbbbbbbbbble'.split('').map((letter, index) => (
        <span
          key={index}
          className="text-6xl font-light transition-all duration-350 hover:font-bold hover:text-blue-500 hover:scale-125"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default BubbleText;
`,S4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(ph.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold ",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Bubble Text"}),a.jsx("div",{className:"bg-black flex flex-col items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center items-center h-[16rem] text-white",children:"Bubbbbbbbbbble".split("").map((r,i)=>a.jsx("span",{className:`text-6xl font-light transition-all duration-350 cursor-pointer
              hover:font-bold hover:text-blue-500 hover:scale-125`,children:r},i))})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:ph.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},mh=`
import { useState } from "react";

const STAGGER = 25;

const FlipLink = ({ children, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase lg:text-8xl md:text-7xl text-6xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ lineHeight: 0.85, textDecoration: "none" }}
    >
      <div>
        {children.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 ease-in-out"
            style={{
              transform: \`translateY(\${hovered ? "-100%" : "0%"})\`,
              transitionDelay: \`\${STAGGER * i}ms\`,
            }}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-200 ease-in-out"
            style={{
              transform: \`translateY(\${hovered ? "0%" : "100%"})\`,
              transitionDelay: \`\${STAGGER * i}ms\`,
            }}
          >
            {l}
          </span>
        ))}
      </div>
    </a>
  );
};

const MirrorText = () => {
  return (
    <>
      <div className="grid h-[35vh] md:h-[25rem] w-full place-content-center gap-2 bg-green-300 text-black">
        <FlipLink href="#">Twitter</FlipLink>
        <FlipLink href="#">LinkedIn</FlipLink>
        <FlipLink href="#">Facebook</FlipLink>
        <FlipLink href="#">Instagram</FlipLink>
      </div>
    </>
  );
};

export default MirrorText;
`,gh=25,Zi=({children:e,href:t})=>{const[n,r]=y.useState(!1);return a.jsxs("a",{href:t,className:"relative block overflow-hidden whitespace-nowrap font-black uppercase lg:text-8xl md:text-7xl text-6xl",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{lineHeight:.85,textDecoration:"none"},children:[a.jsx("div",{children:e.split("").map((i,s)=>a.jsx("span",{className:"inline-block transition-transform duration-200 ease-in-out",style:{transform:`translateY(${n?"-100%":"0%"})`,transitionDelay:`${gh*s}ms`},children:i},s))}),a.jsx("div",{className:"absolute inset-0",children:e.split("").map((i,s)=>a.jsx("span",{className:"inline-block transition-transform duration-200 ease-in-out",style:{transform:`translateY(${n?"0%":"100%"})`,transitionDelay:`${gh*s}ms`},children:i},s))})]})},k4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(mh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Mirror Text"}),a.jsx("div",{className:" flex items-center justify-center w-full shadow-sm shadow-black",children:a.jsxs("div",{className:"grid h-[35vh] md:h-[25rem] w-full place-content-center gap-2 bg-green-300 text-black",children:[a.jsx(Zi,{href:"#",children:"Twitter"}),a.jsx(Zi,{href:"#",children:"LinkedIn"}),a.jsx(Zi,{href:"#",children:"Facebook"}),a.jsx(Zi,{href:"#",children:"Instagram"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:mh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})})},T4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},vh=`
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const text = "Get Staggered!";

const StaggeredText = () => {
  const textArray = [text];
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      if (top < window.innerHeight && top > 0) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="flex justify-center  p-20 w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {textArray.map((line, index) => (
          <div key={index} className="block">
            {line.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block font-bold text-6xl">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={defaultAnimation}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;&nbsp;</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default StaggeredText;



`,P4="Get Staggered!",E4=()=>{const e=[P4],t=Ml(),n=y.useRef(null),[r,i]=y.useState(!1),[s,o]=y.useState(!1),l=()=>{navigator.clipboard.writeText(vh.trim()),o(!0),setTimeout(()=>o(!1),2e3)},c=()=>{if(n.current){const{top:u}=n.current.getBoundingClientRect();u<window.innerHeight&&u>0&&i(!0)}};return y.useEffect(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[]),y.useEffect(()=>{r&&t.start("visible")},[r,t]),a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Staggered Text"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center p-20 w-full",children:a.jsx(R.div,{ref:n,initial:"hidden",animate:t,variants:{visible:{transition:{staggerChildren:.1}}},children:e.map((u,d)=>a.jsx("div",{className:"block",children:u.split(" ").map((f,h)=>a.jsxs("span",{className:"inline-block font-bold text-6xl",children:[f.split("").map((v,x)=>a.jsx(R.span,{variants:T4,className:"inline-block",children:v},x)),a.jsx("span",{className:"inline-block",children:"  "})]},h))},d))})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:vh.trim()})}),a.jsx("button",{onClick:l,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:s?"Copied!":"Copy"})]})]})},xh=`
import { useState, useEffect, useMemo } from 'react';

export default function TypewriterText() {
  const [activeText, setActiveText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const placeHolderTexts = useMemo(
    () => [
      "Hello",
      "And",
      "Welcome",
      "To",
      "My",
      "Project",
      "Which",
      "Is",
      "AnimateReact",
      "Website",
    ],
    []
  );

  useEffect(() => {
    let speed = 200;
    let placeholderTextIndex = 0;
    let textIndex = 0;
    let isBackward = false;

    const textInterval = setInterval(() => {
      let text = \` \${placeHolderTexts[placeholderTextIndex]} \`;

      if (textIndex === text.length) {
        isBackward = true;
      } else if (textIndex === 0) {
        isBackward = false;
      }

      if (isBackward) {
        textIndex--;
        if (textIndex === 0) {
          placeholderTextIndex++;
          if (placeholderTextIndex === placeHolderTexts.length) {
            placeholderTextIndex = 0;
          }
        }
      } else {
        textIndex++;
      }

      setActiveText(text.slice(0, textIndex).trim());
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((show) => !show);
    }, speed); // Blinking speed

    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    };
  }, [placeHolderTexts]);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-6xl font-bold">
        {activeText}
        <span className={\`\${showCursor ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300\`}>
          _
        </span>
      </h1>
    </div>
  );
}
`,R4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(!0),[i,s]=y.useState(!1),o=()=>{navigator.clipboard.writeText(xh.trim()),s(!0),setTimeout(()=>s(!1),2e3)},l=y.useMemo(()=>["Hello","And","Welcome","To","My","Project","Which","Is","AnimateReact","Website"],[]);return y.useEffect(()=>{let c=200,u=0,d=0,f=!1;const h=setInterval(()=>{let x=` ${l[u]} `;d===x.length?f=!0:d===0&&(f=!1),f?(d--,d===0&&(u++,u===l.length&&(u=0))):d++,t(x.slice(0,d).trim())},c),v=setInterval(()=>{r(x=>!x)},c);return()=>{clearInterval(h),clearInterval(v)}},[l]),a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Typewritter Text"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex h-screen items-center justify-center",children:a.jsxs("h1",{className:"text-6xl font-bold",children:[e,a.jsx("span",{className:`${n?"opacity-50":"opacity-0"} transition-opacity duration-300`,children:"_"})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:xh.trim()})}),a.jsx("button",{onClick:o,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:i?"Copied!":"Copy"})]})]})},L4=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(C4,{}),a.jsx(S4,{}),a.jsx(k4,{}),a.jsx(E4,{}),a.jsx(R4,{})]}),A4=()=>{const[e,t]=y.useState(!1),n=`
import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-2">Settings</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Account"
          subtitle="Manage profile"
          href="#"
          Icon={FiUser}
        />
        <Card title="Email" subtitle="Manage email" href="#" Icon={FiMail} />
        <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
        <Card
          title="Billing"
          subtitle="Manage cards"
          href="#"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
  `,r=()=>{navigator.clipboard.writeText(n.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Socials"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsxs("div",{className:"grid gap-4 grid-cols-2 lg:grid-cols-4",children:[a.jsx(Ji,{title:"Account",subtitle:"Manage profile",href:"#",Icon:u4}),a.jsx(Ji,{title:"Email",subtitle:"Manage email",href:"#",Icon:t4}),a.jsx(Ji,{title:"Team",subtitle:"Manage team",href:"#",Icon:Gg}),a.jsx(Ji,{title:"Billing",subtitle:"Manage cards",href:"#",Icon:Zj})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:n.trim()})}),a.jsx("button",{onClick:r,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},Ji=({title:e,subtitle:t,Icon:n,href:r})=>a.jsxs("a",{href:r,className:"w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"}),a.jsx(n,{className:"absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300"}),a.jsx(n,{className:"mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300"}),a.jsx("h3",{className:"font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300",children:e}),a.jsx("p",{className:"text-slate-400 group-hover:text-violet-200 relative z-10 duration-300",children:t})]}),M4="/AnimateReact/assets/cosmetic-BwIaOHG6.png",_4="/AnimateReact/assets/cosmeticBg-DFyHgxoi.jpg",I4=()=>{const[e,t]=y.useState(!1),n=[{title:"Contains all the nutrition",link:"#",coverImage:_4,characterImage:M4},{title:"Long lasting and smooth",link:"#",coverImage:"https://as2.ftcdn.net/v2/jpg/01/37/50/39/1000_F_137503986_MplaPP9hN4DDL2COEXVyGXmv3WDe2JmF.jpg",characterImage:"https://as2.ftcdn.net/v2/jpg/08/67/83/77/1000_F_867837775_2Jp4EvQbukIj2KJYDbHIfLDkh5bx6zVY.webp"}],r=`
import React from "react";
import { motion } from "framer-motion";

const PopupCard = ({ title, coverImage, characterImage, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative flex justify-center items-end w-[calc(300px/1.5)] h-[300px] mx-10 perspective-2500"
        whileHover={{
          rotateX: 25,
          translateY: "-5%",
          boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
        }}
      >
        <div className="absolute w-full h-full transition-all">
          <img
            src={coverImage}
            className="w-full h-full object-cover"
            alt="Cover"
          />
          {/* Top gradient overlay */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent to-[rgba(12,13,19,0.5)]"></div>
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 w-full h-20 opacity-1 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[rgba(12,13,19,0.5)]"></div>
        </div>
        <motion.div
          className="w-full text-center text-white font-bold text-lg transition-transform duration-500"
          initial={{ translateY: "0%", translateZ: "100px" }}
          whileHover={{ translateY: "-50px", translateZ: "100px" }}
        >
          {title}
        </motion.div>
        <motion.img
          src={characterImage}
          className="absolute w-full h-full opacity-0 transition-opacity duration-500"
          alt="Character"
          initial={{ opacity: 0, translateY: "0%" }}
          whileHover={{ opacity: 1, translateY: "-20%" }}
        />
      </motion.div>
    </a>
  );
};

const Cards = () => {
  return (
    <div className="flex justify-center items-center bg-[#191c2965] h-[30rem]">
      <PopupCard
        title="Contains all the nutrition"
        link="#"
        coverImage="https://img.freepik.com/free-photo/digital-art-flower-landscape-painting_23-2151596841.jpg?t=st=1729283352~exp=1729286952~hmac=204f77f1a20cc8498d7982b4e5a5dfa624dc68a2ebe0c7079df1194c8a0c4fb7&w=360"
        image
        characterImage="https://as1.ftcdn.net/v2/jpg/05/93/97/78/1000_F_593977871_SCCJWIfyzEv5QsACMRQJZmKJ83bPV0AT.webp"
      />
      <PopupCard
        title="Long lasting and smooth"
        link="#"
        coverImage="https://as2.ftcdn.net/v2/jpg/01/37/50/39/1000_F_137503986_MplaPP9hN4DDL2COEXVyGXmv3WDe2JmF.jpg" // Example online cover image
        characterImage="https://as2.ftcdn.net/v2/jpg/08/67/83/77/1000_F_867837775_2Jp4EvQbukIj2KJYDbHIfLDkh5bx6zVY.webp" // Example online character image
      />
    </div>
  );
};

export default Cards;

  `,i=()=>{navigator.clipboard.writeText(r.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"PopUp Cards"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6",children:n.map((s,o)=>a.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",children:a.jsxs(R.div,{className:"relative flex justify-center items-end w-[calc(300px/1.5)] h-[300px] mx-10",whileHover:{rotateX:40,translateY:"-5%",boxShadow:"2px 35px 32px -8px rgba(0, 0, 0, 0.75)"},children:[a.jsxs("div",{className:"absolute w-full h-full transition-all",children:[a.jsx("img",{src:s.coverImage,className:"w-full h-full object-cover",alt:"Cover"}),a.jsx("div",{className:"absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent to-[rgba(12,13,19,0.5)]"}),a.jsx("div",{className:"absolute bottom-0 w-full h-20 opacity-1 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[rgba(12,13,19,0.5)]"})]}),a.jsx(R.div,{className:"w-full text-center text-white font-bold text-lg transition-transform duration-500",initial:{translateY:"0%",translateZ:"100px"},whileHover:{translateY:"-50px",translateZ:"100px"},children:s.title}),a.jsx(R.img,{src:s.characterImage,className:"absolute w-full h-full opacity-0 transition-opacity duration-500",alt:"Character",initial:{opacity:0,translateY:"0%"},whileHover:{opacity:1,translateY:"-20%"}})]})},o))}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:r.trim()})}),a.jsx("button",{onClick:i,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})};function F4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"},child:[]}]})(e)}const yh=`
import React from "react";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

const Card = () => {
  return (
    <main className="flex flex-col justify-center items-center py-12 font-roboto">
      {/* Parent motion.div triggers all child animations */}
      <motion.div
        className="relative w-[20rem] h-[30rem] rounded-lg overflow-hidden cursor-pointer shadow-lg text-gray-100"
        whileHover="hover" // Trigger the hover state for all child animations
      >
        {/* Image Animation */}
        <motion.img
          src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
          alt="Card"
          className="absolute object-cover w-full h-full top-0 left-0 opacity-90"
          variants={{
            hover: {
              opacity: 1,
              transition: { duration: 0.3 },
            },
          }}
        />

        {/* Heading Animation */}
        <motion.h2
          className="absolute bottom-8 left-8 uppercase text-2xl font-roboto-condensed"
          initial={{ y: 0 }} // Default position
          variants={{
            hover: {
              y: "-40vh", // Move heading up
              transition: { duration: 0.4 },
            },
          }}
        >
          Card Heading
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.span
          className="absolute bottom-20 left-8 max-w-[80%] opacity-0"
          initial={{ opacity: 0 }} // Start invisible
          variants={{
            hover: {
              opacity: 1, // Fade in paragraph
              transition: { duration: 0.4, delay: 0.4 }, // Delay for the paragraph to appear after heading
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          exercitationem iste, voluptatum, quia explicabo laboriosam rem
          adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
          asperiores harum? Dicta odio aut hic.
        </motion.span>

        {/* Button Animation */}
        <motion.a
          href="#"
          className="absolute bottom-10 left-8 flex items-center gap-2 text-inherit no-underline opacity-0"
          initial={{ opacity: 0 }} // Start invisible
          variants={{
            hover: {
              opacity: 1, // Fade in the button
              transition: { duration: 0.4, delay: 0.6 }, // Delay button after paragraph
            },
          }}
        >
          Find out more
          {/* React Icon Arrow */}
          <MdArrowRightAlt size={24} className="inline-block" />
        </motion.a>
      </motion.div>
    </main>
  );
};

export default Card;
`,V4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(yh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"SlideIn Text Card"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[35rem] shadow-sm shadow-black p-6",children:a.jsx("main",{className:"flex flex-col justify-center items-center py-12 font-roboto",children:a.jsxs(R.div,{className:"relative w-[20rem] h-[30rem] rounded-lg overflow-hidden cursor-pointer shadow-lg text-gray-100",whileHover:"hover",children:[a.jsx(R.img,{src:"https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",alt:"Card",className:"absolute object-cover w-full h-full top-0 left-0 opacity-90",variants:{hover:{opacity:1,transition:{duration:.3}}}}),a.jsx(R.h2,{className:"absolute bottom-8 left-8 uppercase text-2xl font-roboto-condensed",initial:{y:0},variants:{hover:{y:"-40vh",transition:{duration:.4}}},children:"Card Heading"}),a.jsx(R.span,{className:"absolute bottom-20 left-8 max-w-[80%] opacity-0",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.4,delay:.4}}},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic."}),a.jsxs(R.a,{href:"#",className:"absolute bottom-10 left-8 flex items-center gap-2 text-inherit no-underline opacity-0",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.4,delay:.6}}},children:["Find out more",a.jsx(F4,{size:24,className:"inline-block"})]})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:yh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},D4=()=>{const e={initial:{scale:1},hover:{scale:1.05}},t={initial:{y:"62%",opacity:0},hover:{y:"0%",opacity:1,transition:{duration:.3,delay:.3}}},n={initial:{opacity:0,scaleX:0},hover:{opacity:1,scaleX:1,transition:{duration:.3,delay:.3}}},r={initial:{opacity:0},hover:{opacity:1,transition:{duration:.3,delay:.6}}},i=`
import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const contentVariants = {
    initial: { y: "62%", opacity: 0 },
    hover: { y: "0%", opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  };

  const titleVariants = {
    initial: { opacity: 0, scaleX: 0 },
    hover: { opacity: 1, scaleX: 1, transition: { duration: 0.3, delay: 0.3 } },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3, delay: 0.6 } },
  };

  return (
    <motion.article
      className="relative max-w-xs h-[25rem] overflow-hidden rounded-lg shadow-lg bg-white"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.img
        className="object-cover w-full h-[30rem]"
        src="https://as1.ftcdn.net/v2/jpg/05/22/27/22/1000_F_522272281_XBqWaPMejrG9XS0p4SJHS146GOq0gecC.jpg"
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      />
      <motion.div
        className="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black to-transparent"
        variants={contentVariants}
      >
        <motion.div className="space-y-2">
          <motion.h2 className="text-2xl font-bold" variants={titleVariants}>
            Colombia
          </motion.h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
            labore laudantium deserunt fugiat numquam.
          </p>
        </motion.div>
        <motion.button
          className="px-4 py-2 mt-4 text-black bg-yellow-500 rounded"
          variants={buttonVariants}
        >
          Read more
        </motion.button>
      </motion.div>
    </motion.article>
  );
};

export default AnimatedCard;
;`,s=()=>{const[o,l]=y.useState(!1),c=()=>{navigator.clipboard.writeText(i.trim()),l(!0),setTimeout(()=>l(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4 cursor-pointer",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Slide Card"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6",children:a.jsxs(R.article,{className:"relative max-w-xs h-[25rem] overflow-hidden rounded-lg shadow-lg bg-white",variants:e,initial:"initial",whileHover:"hover",children:[a.jsx(R.img,{className:"object-cover w-full h-[30rem]",src:"https://as1.ftcdn.net/v2/jpg/05/22/27/22/1000_F_522272281_XBqWaPMejrG9XS0p4SJHS146GOq0gecC.jpg",alt:"Photo of Cartagena's cathedral at the background and some colonial style houses"}),a.jsxs(R.div,{className:"absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black to-transparent",variants:t,children:[a.jsxs(R.div,{className:"space-y-2",children:[a.jsx(R.h2,{className:"text-2xl font-bold",variants:n,children:"Colombia"}),a.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."})]}),a.jsx(R.button,{className:"px-4 py-2 mt-4 text-black bg-yellow-500 rounded",variants:r,children:"Read more"})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:i.trim()})}),a.jsx("button",{onClick:c,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:o?"Copied!":"Copy"})]})]})};return a.jsx(s,{})},O4=()=>{const[e,t]=y.useState(!1),n=o=>{navigator.clipboard.writeText(o.trim()),t(!0),setTimeout(()=>t(!1),2e3)},r={initial:{rotate:0},hover:{rotate:5}},i={initial:{translateY:0,rotate:0},hover:{translateY:"-5rem",rotate:-50,type:$c,stiffness:10}},s=`
import { motion, spring } from "framer-motion";

const AnimatedCard = () => {
  const cardVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 5 },
  };

  const imgVariants = {
    initial: { translateY: 0, rotate: 0 }, // Initial position
    hover: { translateY: "-5rem", rotate: -50, type: spring, stiffness: 10 }, // Image animation on hover
  };

  return (
    <main className="container flex justify-around mb-10">
      {/* Card 1 */}
      <motion.section
        className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer"
        variants={cardVariants} // Apply card variants here
        initial="initial"
        whileHover="hover" // Triggers hover animation for the entire card
      >
        <motion.div
          className="product-image"
          variants={imgVariants} // Apply image variants here
          initial="initial"
          whileHover="hover" // Same hover trigger
        >
          <img
            src="https://i.ibb.co/cNWqxGx/red.png"
            alt="OFF-white Red Edition"
            draggable="false"
            className="h-56 w-full object-cover"
          />
        </motion.div>
        <div className="product-info text-center">
          <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
          <p className="my-2 text-sm">
            The 10: Air Jordan 1 off-white - Chicago
          </p>
          <div className="price text-xl">$999</div>
        </div>
        <div className="btn flex justify-between mt-4">
          <button className="buy-btn bg-black text-white py-2 px-4 rounded">
            Buy Now
          </button>
          <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
            <svg
              className="svg h-6 w-6 fill-current text-black"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </motion.section>

      {/* Card 2 */}
      <motion.section
        className="relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer"
        variants={cardVariants} // Apply same card variants here
        initial="initial"
        whileHover="hover" // Hover triggers animation
      >
        <motion.div
          className="product-image"
          variants={imgVariants} // Apply image variants here
          initial="initial"
          whileHover="hover"
        >
          <img
            src="https://i.ibb.co/0JKpmgd/blue.png"
            alt="OFF-white Blue Edition"
            draggable="false"
            className="h-56 w-full object-cover"
          />
        </motion.div>
        <div className="product-info text-center">
          <h2 className="text-lg font-semibold">Nike X OFF-white</h2>
          <p className="my-2 text-sm">
            Air Jordan 1 High "Off-White - UNC" sneakers
          </p>
          <div className="price text-xl">$1599</div>
        </div>
        <div className="btn flex justify-between mt-4">
          <button className="buy-btn bg-black text-white py-2 px-4 rounded">
            Buy Now
          </button>
          <button className="fav flex items-center justify-center bg-white border border-black rounded p-1">
            <svg
              className="svg h-6 w-6 fill-current text-black"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
            </svg>
          </button>
        </div>
      </motion.section>
    </main>
  );
};

export default AnimatedCard;

`;return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"LiftUp Card"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6",children:a.jsxs("main",{className:"container flex justify-around mb-10",children:[a.jsxs(R.section,{className:"relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer",variants:r,initial:"initial",whileHover:"hover",children:[a.jsx(R.div,{className:"product-image",variants:i,initial:"initial",whileHover:"hover",children:a.jsx("img",{src:"https://i.ibb.co/cNWqxGx/red.png",alt:"OFF-white Red Edition",draggable:"false",className:"h-56 w-full object-cover"})}),a.jsxs("div",{className:"product-info text-center",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"Nike X OFF-white"}),a.jsx("p",{className:"my-2 text-sm",children:"The 10: Air Jordan 1 off-white - Chicago"}),a.jsx("div",{className:"price text-xl",children:"$999"})]}),a.jsxs("div",{className:"btn flex justify-between mt-4",children:[a.jsx("button",{className:"buy-btn bg-black text-white py-2 px-4 rounded",children:"Buy Now"}),a.jsx("button",{className:"fav flex items-center justify-center bg-white border border-black rounded p-1",children:a.jsx("svg",{className:"svg h-6 w-6 fill-current text-black",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"})})})]})]}),a.jsxs(R.section,{className:"relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer",variants:r,initial:"initial",whileHover:"hover",children:[a.jsx(R.div,{className:"product-image",variants:i,initial:"initial",whileHover:"hover",children:a.jsx("img",{src:"https://i.ibb.co/0JKpmgd/blue.png",alt:"OFF-white Blue Edition",draggable:"false",className:"h-56 w-full object-cover"})}),a.jsxs("div",{className:"product-info text-center",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"Nike X OFF-white"}),a.jsx("p",{className:"my-2 text-sm",children:'Air Jordan 1 High "Off-White - UNC" sneakers'}),a.jsx("div",{className:"price text-xl",children:"$1599"})]}),a.jsxs("div",{className:"btn flex justify-between mt-4",children:[a.jsx("button",{className:"buy-btn bg-black text-white py-2 px-4 rounded",children:"Buy Now"}),a.jsx("button",{className:"fav flex items-center justify-center bg-white border border-black rounded p-1",children:a.jsx("svg",{className:"svg h-6 w-6 fill-current text-black",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"})})})]})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:s.trim()})}),a.jsx("button",{onClick:()=>n(s),className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},B4=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(A4,{}),a.jsx(I4,{}),a.jsx(V4,{}),a.jsx(O4,{}),a.jsx(D4,{})]});var Kg={exports:{}},z4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H4=z4,U4=H4;function Yg(){}function Xg(){}Xg.resetWarningCache=Yg;var $4=function(){function e(r,i,s,o,l,c){if(c!==U4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xg,resetWarningCache:Yg};return n.PropTypes=n,n};Kg.exports=$4();var W4=Kg.exports;const F=_h(W4),no=e=>{const{color:t,size:n,...r}=e;return ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},ke.createElement("path",{d:"M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z"}))};no.propTypes={color:F.string,size:F.oneOfType([F.string,F.number])};no.defaultProps={color:"currentColor",size:"24"};const ro=e=>{const{color:t,size:n,...r}=e;return ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},ke.createElement("path",{d:"M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"}))};ro.propTypes={color:F.string,size:F.oneOfType([F.string,F.number])};ro.defaultProps={color:"currentColor",size:"24"};const hu=e=>{const{color:t,size:n,...r}=e;return ke.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},ke.createElement("path",{d:"M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"}))};hu.propTypes={color:F.string,size:F.oneOfType([F.string,F.number])};hu.defaultProps={color:"currentColor",size:"24"};const G4=()=>a.jsx("div",{className:"mt-8 w-full flex items-center justify-center bg-gray-900",children:a.jsx("div",{className:"relative w-full h-full",children:a.jsx(R.div,{className:"relative",children:a.jsxs("div",{className:"bg-gray-800 p-10 rounded-lg shadow-lg",children:[a.jsxs("h6",{className:"text-white text-lg font-bold mb-4",children:[a.jsx("span",{className:"cursor-pointer",children:"Log In"})," |"," ",a.jsx("span",{className:"cursor-pointer",children:"Sign Up"})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-yellow-400 text-xl font-semibold mb-4",children:"Log In"}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"email",name:"logemail",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Email"}),a.jsx(no,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"password",name:"logpass",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Password"}),a.jsx(ro,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsx("button",{className:"btn w-full mt-4 bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400 p-3 rounded-lg",children:"Submit"}),a.jsx("p",{className:"text-sm mt-4 text-center text-gray-400",children:a.jsx("a",{href:"#0",className:"hover:text-yellow-400",children:"Forgot your password?"})})]}),a.jsxs("div",{className:"hidden",children:[a.jsx("h4",{className:"text-yellow-400 text-xl font-semibold mb-4",children:"Sign Up"}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"text",name:"logname",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Full Name"}),a.jsx(hu,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"email",name:"logemail",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Email"}),a.jsx(no,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"password",name:"logpass",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Password"}),a.jsx(ro,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsx("button",{className:"btn w-full mt-4 bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400 p-3 rounded-lg",children:"Submit"})]})]})})})}),K4=()=>a.jsx("div",{className:"flex flex-col",children:a.jsx(G4,{})}),wh=`
import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      {/* Title Section */}
      <div className="mb-3 border-b border-slate-300 pb-3">
        <div className="flex cursor-pointer items-center justify-between rounded-md 
        transition-colors hover:bg-slate-100">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <motion.div
              layout
              className="grid size-10  shrink-0 place-content-center rounded-md bg-indigo-600"
            >
              <svg
                width="24"
                height="auto"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50"
              >
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  stopColor="#000000"
                ></path>
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  stopColor="#000000"
                ></path>
              </svg>
            </motion.div>

            {open && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
              >
                <span className="block text-xs font-semibold">Navbar</span>
                <span className="block text-xs text-slate-500">
                  Elements
                </span>
              </motion.div>
            )}
          </div>
          {open && <FiChevronDown className="mr-2" />}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-1 ">
        {[
          { Icon: FiHome, title: "Dashboard", notifs: 0 },
          { Icon: FiDollarSign, title: "Sales", notifs: 3 },
          { Icon: FiMonitor, title: "View Site", notifs: 0 },
          { Icon: FiShoppingCart, title: "Products", notifs: 0 },
          { Icon: FiTag, title: "Tags", notifs: 0 },
          { Icon: FiBarChart, title: "Analytics", notifs: 0 },
          { Icon: FiUsers, title: "Members", notifs: 0 },
        ].map(({ Icon, title, notifs }) => (
          <motion.button
            layout
            key={title}
            onClick={() => setSelected(title)}
            className={\`relative flex h-10 w-full items-center rounded-md 
            transition-colors \${selected === title
              ? "bg-indigo-100 text-indigo-800"
              : "text-slate-500 hover:bg-slate-100"}\`}
          >
            <motion.div
              layout
              className="grid h-full w-10 place-content-center text-lg"
            >
              <Icon />
            </motion.div>
            {open && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                className="text-xs font-medium"
              >
                {title}
              </motion.span>
            )}
            {notifs > 0 && open && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ y: "-50%" }}
                transition={{ delay: 0.5 }}
                className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
              >
                {notifs}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Toggle Button */}
      <motion.button
        layout
        onClick={() => setOpen((pv) => !pv)}
        className="absolute bottom-0 left-0 right-0 border-t border-slate-300 
        transition-colors hover:bg-slate-100"
        aria-expanded={open}
      >
        <div className="flex items-center p-2">
          <motion.div
            layout
            className="grid  size-10 place-content-center text-lg"
          >
            <FiChevronsRight
              className={\`transition-transform \${open && "rotate-180"}\`}
            />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              Hide
            </motion.span>
          )}
        </div>
      </motion.button>
    </motion.nav>
  );
};

export default Sidebar;
`,Y4=()=>{const[e,t]=y.useState(!0),[n,r]=y.useState("Dashboard"),[i,s]=y.useState(!1),o=()=>{navigator.clipboard.writeText(wh.trim()),s(!0),setTimeout(()=>s(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4 lg:w-full md:w-fit sm:w-fit",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Side Navbar"}),a.jsx("div",{className:"bg-slate-300 shadow-sm shadow-black p-6",children:a.jsxs(R.nav,{layout:!0,className:"sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2",style:{width:e?"225px":"fit-content"},children:[a.jsx("div",{className:"mb-3 border-b border-slate-300 pb-3",children:a.jsxs("div",{className:"flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(R.div,{layout:!0,className:"grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600",children:a.jsxs("svg",{width:"24",height:"auto",viewBox:"0 0 50 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-slate-50",children:[a.jsx("path",{d:"M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z",stopColor:"#000000"}),a.jsx("path",{d:"M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z",stopColor:"#000000"})]})}),e&&a.jsxs(R.div,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.125},children:[a.jsx("span",{className:"block text-xs font-semibold",children:"Navbar"}),a.jsx("span",{className:"block text-xs text-slate-500",children:"Elements"})]})]}),e&&a.jsx($g,{className:"mr-2"})]})}),a.jsx("div",{className:"space-y-1 mb-1",children:[{Icon:Wg,title:"Dashboard",notifs:0},{Icon:Jj,title:"Sales",notifs:3},{Icon:r4,title:"View Site",notifs:0},{Icon:a4,title:"Products",notifs:0},{Icon:c4,title:"Tags",notifs:0},{Icon:Qj,title:"Analytics",notifs:0},{Icon:Gg,title:"Members",notifs:0}].map(({Icon:l,title:c,notifs:u})=>a.jsxs(R.button,{layout:!0,onClick:()=>r(c),className:`relative flex h-10 w-full items-center rounded-md transition-colors ${n===c?"bg-indigo-100 text-indigo-800":"text-slate-500 hover:bg-slate-100"}`,children:[a.jsx(R.div,{layout:!0,className:"grid h-full w-10 place-content-center text-lg",children:a.jsx(l,{})}),e&&a.jsx(R.span,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.125},className:"text-xs font-medium",children:c}),u>0&&e&&a.jsx(R.span,{initial:{scale:0,opacity:0},animate:{opacity:1,scale:1},style:{y:"-50%"},transition:{delay:.5},className:"absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white",children:u})]},c))}),a.jsx(R.button,{layout:!0,onClick:()=>t(l=>!l),className:"absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100","aria-expanded":e,children:a.jsxs("div",{className:"flex items-center p-1",children:[a.jsx(R.div,{layout:!0,className:"grid  size-10 place-content-center text-lg",children:a.jsx(qj,{className:`transition-transform ${e&&"rotate-180"}`})}),e&&a.jsx(R.span,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.125},className:"text-xs font-medium",children:"Hide"})]})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:wh.trim()})}),a.jsx("button",{onClick:o,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:i?"Copied!":"Copy"})]})]})},bh=`
import React, { useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import framerMotion from "../images/framerMotion.png";
import Logo from "../images/logo.png";

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  const TABS = [
    {
      title: "Products",
      Component: () => (
        <div>
          <div className="flex gap-4">
            <div>
              <h3 className="mb-2 text-sm text-white font-medium">Startup</h3>
              <a href="#" className="mb-1 block text-sm text-neutral-400">
                Bookkeeping
              </a>
              <a href="#" className="block text-sm text-neutral-400">
                Invoicing
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm text-white font-medium">Scaleup</h3>
              <a href="#" className="mb-1 block text-sm text-neutral-400">
                Live Coaching
              </a>
              <a href="#" className="mb-1 block text-sm text-neutral-400">
                Reviews
              </a>
              <a href="#" className="block text-sm text-neutral-400">
                Tax/VAT
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm text-white font-medium">
                Enterprise
              </h3>
              <a href="#" className="mb-1 block text-sm text-neutral-400">
                White glove
              </a>
              <a href="#" className="mb-1 block text-sm text-neutral-400">
                SOX Compliance
              </a>
              <a href="#" className="block text-sm text-neutral-400">
                Staffing
              </a>
              <a href="#" className="block text-sm text-neutral-400">
                More
              </a>
            </div>
          </div>
          <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
            <span>View more</span>
            <FiArrowRight />
          </button>
        </div>
      ),
    },
    {
      title: "Pricing",
      Component: () => (
        <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
          <a
            href="#"
            className="flex w-full flex-col items-center justify-center py-2
             text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <FiHome className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Startup</span>
          </a>
          <a
            href="#"
            className="flex w-full flex-col items-center justify-center py-2
             text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <FiBarChart2 className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Scaleup</span>
          </a>
          <a
            href="#"
            className="flex w-full flex-col items-center justify-center py-2
             text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <FiPieChart className="mb-2 text-xl text-indigo-300" />
            <span className="text-xs">Enterprise</span>
          </a>
        </div>
      ),
    },
    {
      title: "Blog",
      Component: () => (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <a href="#">
              <img
                className="mb-2 h-14 w-fit rounded object-fit"
                src={Logo}
                alt="Placeholder image"
              />
              <h4 className="mb-0.5 text-sm text-white font-medium">
                Lorem ipsum dolor
              </h4>
              <p className="text-sm text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                illo quidem eos.
              </p>
            </a>
            <a href="#">
              <img
                className="mb-2 h-14 w-fit rounded object-fit"
                src={framerMotion}
                alt="Placeholder image"
              />
              <h4 className="mb-0.5 text-sm text-white font-medium">
                Lorem ipsum dolor
              </h4>
              <p className="text-sm text-neutral-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                illo quidem eos.
              </p>
            </a>
          </div>
          <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
            <span>View more</span>
            <FiArrowRight />
          </button>
        </div>
      ),
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));

  const Content = ({ selected, dir }) => (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
      <motion.span
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
        animate={{ left: "50%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
      />
      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );

  const Tab = ({ children, tab, handleSetSelected, selected }) => (
    <button
      id={\`shift-tab-\${tab}\`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={\`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors \${selected === tab ? " bg-neutral-800 text-neutral-100" : "text-neutral-400"}\`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={\`transition-transform \${selected === tab ? "rotate-180" : ""}\`}
      />
    </button>
  );

  return (
        <div
          onMouseLeave={() => handleSetSelected(null)}
          className="relative flex h-fit gap-2"
        >
          {TABS.map((t) => (
            <Tab
              key={t.id}
              selected={selected}
              handleSetSelected={handleSetSelected}
              tab={t.id}
            >
              {t.title}
            </Tab>
          ))}

          <AnimatePresence>
            {selected && <Content dir={dir} selected={selected} />}
          </AnimatePresence>
        </div>
  );
};

export default Tabs;
`,X4=()=>{const[e,t]=y.useState(null),[n,r]=y.useState(null),[i,s]=y.useState(!1),o=()=>{navigator.clipboard.writeText(bh.trim()),s(!0),setTimeout(()=>s(!1),2e3)},l=f=>{typeof e=="number"&&typeof f=="number"?r(e>f?"r":"l"):f===null&&r(null),t(f)},c=[{title:"Products",Component:()=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex gap-4",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm text-white font-medium",children:"Startup"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"Bookkeeping"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"Invoicing"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm text-white font-medium",children:"Scaleup"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"Live Coaching"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"Reviews"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"Tax/VAT"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm text-white font-medium",children:"Enterprise"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"White glove"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"SOX Compliance"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"Staffing"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"More"})]})]}),a.jsxs("button",{className:"ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300",children:[a.jsx("span",{children:"View more"}),a.jsx(oh,{})]})]})},{title:"Pricing",Component:()=>a.jsxs("div",{className:"grid grid-cols-3 gap-4 divide-x divide-neutral-700",children:[a.jsxs("a",{href:"#",className:"flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50",children:[a.jsx(Wg,{className:"mb-2 text-xl text-indigo-300"}),a.jsx("span",{className:"text-xs",children:"Startup"})]}),a.jsxs("a",{href:"#",className:"flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50",children:[a.jsx(Xj,{className:"mb-2 text-xl text-indigo-300"}),a.jsx("span",{className:"text-xs",children:"Scaleup"})]}),a.jsxs("a",{href:"#",className:"flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50",children:[a.jsx(s4,{className:"mb-2 text-xl text-indigo-300"}),a.jsx("span",{className:"text-xs",children:"Enterprise"})]})]})},{title:"Blog",Component:()=>a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("a",{href:"#",children:[a.jsx("img",{className:"mb-2 h-14 w-fit rounded object-fit",src:kn,alt:"Placeholder image"}),a.jsx("h4",{className:"mb-0.5 text-sm text-white font-medium",children:"Lorem ipsum dolor"}),a.jsx("p",{className:"text-sm text-neutral-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo quidem eos."})]}),a.jsxs("a",{href:"#",children:[a.jsx("img",{className:"mb-2 h-14 w-fit rounded object-fit",src:Ug,alt:"Placeholder image"}),a.jsx("h4",{className:"mb-0.5 text-sm text-white font-medium",children:"Lorem ipsum dolor"}),a.jsx("p",{className:"text-sm text-neutral-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo quidem eos."})]})]}),a.jsxs("button",{className:"ml-auto mt-4 flex items-center justify-center gap-1 text-sm text-indigo-300",children:[a.jsx("span",{children:"View more"}),a.jsx(oh,{})]})]})}].map((f,h)=>({...f,id:h+1})),u=({selected:f,dir:h})=>a.jsxs(R.div,{id:"overlay-content",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:8},className:"absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4",children:[a.jsx("div",{className:"absolute -top-[24px] left-0 right-0 h-[24px]"}),a.jsx(R.span,{style:{clipPath:"polygon(0 0, 100% 0, 50% 50%, 0% 100%)"},animate:{left:"50%"},transition:{duration:.25,ease:"easeInOut"},className:"absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"}),c.map(v=>a.jsx("div",{className:"overflow-hidden",children:f===v.id&&a.jsx(R.div,{initial:{opacity:0,x:h==="l"?100:h==="r"?-100:0},animate:{opacity:1,x:0},transition:{duration:.25,ease:"easeInOut"},children:a.jsx(v.Component,{})})},v.id))]}),d=({children:f,tab:h,handleSetSelected:v,selected:x})=>a.jsxs("button",{id:`shift-tab-${h}`,onMouseEnter:()=>v(h),onClick:()=>v(h),className:`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${x===h?" bg-neutral-800 text-neutral-100":"text-neutral-400"}`,children:[a.jsx("span",{children:f}),a.jsx($g,{className:`transition-transform ${x===h?"rotate-180":""}`})]});return a.jsxs("div",{className:"p-4 space-y-4 lg:w-full md:w-fit sm:w-fit",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Tab Shifting"}),a.jsx("div",{className:"bg-black flex justify-center w-[68rem] h-[30rem] shadow-sm shadow-black p-6",children:a.jsxs("div",{onMouseLeave:()=>l(null),className:"relative flex h-fit gap-2",children:[c.map(f=>a.jsx(d,{selected:e,handleSetSelected:l,tab:f.id,children:f.title},f.id)),a.jsx(_g,{children:e&&a.jsx(u,{dir:n,selected:e})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:bh.trim()})}),a.jsx("button",{onClick:o,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:i?"Copied!":"Copy"})]})]})},Nh=`
import  { useRef, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { motion } from 'framer-motion';

export default function HoverSlideTab() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });

  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <div className="flex justify-center w-full p-20">
      <ul
        className="relative flex border-2 border-black rounded-full bg-white p-1"
        onMouseLeave={() => {
          setIsHovered(false); // Reset hover state
        }}
      >
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Home</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Pricing</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Features</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Docs</ChildTab>
        <ChildTab setPosition={setPosition} setIsHovered={setIsHovered}>Blog</ChildTab>
        <Cursor position={position} isHovered={isHovered} />
      </ul>
    </div>
  );
}

const ChildTab = ({ children, setPosition, setIsHovered }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { offsetLeft, offsetWidth } = ref.current;

        setPosition({
          left: offsetLeft,
          width: offsetWidth,
        });
        setIsHovered(true); // Set hover state to true
      }}
      className="relative z-10 py-3 px-5 text-xs uppercase text-white cursor-pointer mix-blend-difference transition-colors duration-200 ease-in-out hover:bg-black"
    >
      {children}
    </li>
  );
};

// Add prop types for ChildTab
ChildTab.propTypes = {
  children: PropTypes.node.isRequired,
  setPosition: PropTypes.func.isRequired,
  setIsHovered: PropTypes.func.isRequired, // Add prop types for setIsHovered
};

const Cursor = ({ position, isHovered }) => {
  return (
    <motion.li
      className="absolute rounded-full bg-black"
      initial={{ opacity: 0, width: 0 }}
      animate={{
        left: position.left,
        width: position.width,
        opacity: isHovered ? 1 : 0, // Change opacity based on hover state
        transition: {
          duration: 0.3, // Duration of the transition
          ease: 'easeInOut', // Easing function for smooth animation
        },
      }}
      style={{
        height: '36px', // Adjust height as needed
      }}
    />
  );
};

// Add prop types for Cursor
Cursor.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired, // Add prop type for isHovered
};
`,Q4=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState({left:0,width:0}),i=()=>{navigator.clipboard.writeText(Nh.trim()),t(!0),setTimeout(()=>t(!1),2e3)},[s,o]=y.useState(!1);return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Hover Slide Tab"}),a.jsx("div",{className:"bg-gray-200 flex justify-center w-[68rem] h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center p-20",children:a.jsxs("ul",{className:"relative flex border-2 border-black rounded-full bg-white p-1",onMouseLeave:()=>{o(!1)},children:[a.jsx(Pn,{setPosition:r,setIsHovered:o,children:"Home"}),a.jsx(Pn,{setPosition:r,setIsHovered:o,children:"Pricing"}),a.jsx(Pn,{setPosition:r,setIsHovered:o,children:"Features"}),a.jsx(Pn,{setPosition:r,setIsHovered:o,children:"Docs"}),a.jsx(Pn,{setPosition:r,setIsHovered:o,children:"Blog"}),a.jsx(Qg,{position:n,isHovered:s})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Nh.trim()})}),a.jsx("button",{onClick:i,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},Pn=({children:e,setPosition:t,setIsHovered:n})=>{const r=y.useRef(null);return a.jsx("li",{ref:r,onMouseEnter:()=>{if(!r.current)return;const{offsetLeft:i,offsetWidth:s}=r.current;t({left:i,width:s}),n(!0)},className:"relative z-10 py-3 px-5 text-xs uppercase text-white cursor-pointer mix-blend-difference transition-colors duration-200 ease-in-out hover:bg-black",children:e})};Pn.propTypes={children:F.node.isRequired,setPosition:F.func.isRequired,setIsHovered:F.func.isRequired};const Qg=({position:e,isHovered:t})=>a.jsx(R.li,{className:"absolute rounded-full bg-black",initial:{opacity:0,width:0},animate:{left:e.left,width:e.width,opacity:t?1:0,transition:{duration:.3,ease:"easeInOut"}},style:{height:"36px"}});Qg.propTypes={position:F.shape({left:F.number.isRequired,width:F.number.isRequired}).isRequired,isHovered:F.bool.isRequired};const q4=({children:e,href:t,FlyoutContent:n})=>{const[r,i]=y.useState(!1),s=n&&r;return a.jsxs("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"relative w-fit h-fit",children:[a.jsxs("a",{href:t,className:"relative text-white",children:[e,a.jsx("span",{style:{transform:s?"scaleX(1)":"scaleX(0)"},className:"absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"})]}),a.jsx(_g,{children:s&&a.jsxs(R.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},style:{translateX:"-50%"},transition:{duration:.3,ease:"easeOut"},className:"absolute left-1/2 top-12 bg-white text-black shadow-xl p-4 rounded-lg",children:[a.jsx("div",{className:"absolute -top-6 left-0 right-0 h-6 bg-transparent"}),a.jsx("div",{className:"absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"}),a.jsx(n,{})]})})]})},Z4=()=>a.jsxs("div",{className:"w-64 bg-white p-6 shadow-xl",children:[a.jsxs("div",{className:"mb-3 space-y-3",children:[a.jsx("h3",{className:"font-semibold",children:"For Individuals"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Introduction"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Pay as you go"})]}),a.jsxs("div",{className:"mb-6 space-y-3",children:[a.jsx("h3",{className:"font-semibold",children:"For Companies"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Startups"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"SMBs"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Enterprise"})]}),a.jsx("button",{className:"w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white",children:"Contact sales"})]}),jh=`
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SingleTab = () => {
  return (
    <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-12">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Pricing
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export default SingleTab;
`,J4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(jh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Single Tab Navbar"}),a.jsx("div",{className:"bg-neutral-900 flex justify-center w-[68rem] h-[30rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center w-full px-3 py-2",children:a.jsx(q4,{href:"#",FlyoutContent:Z4,children:"Pricing"})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:jh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},Ch=["Home","Search","About","FAQ"],Sh=`
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Home", "Search", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="px-4 py-14 bg-slate-900 flex items-center justify-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={\`
        \${selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"}
        text-sm transition-colors px-2.5 py-0.5 rounded-md relative
      \`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
`,eC=()=>{const[e,t]=y.useState(Ch[0]),[n,r]=y.useState(!1),i=()=>{navigator.clipboard.writeText(Sh.trim()),r(!0),setTimeout(()=>r(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold ",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Chip Navbar"}),a.jsx("div",{className:" flex items-center justify-center h-[16rem] w-[68rem]  ",children:a.jsx("div",{className:"px-2 h-full w-full bg-slate-900 flex items-center justify-center flex-wrap gap-2",children:Ch.map(s=>a.jsx(tC,{text:s,selected:e===s,setSelected:t},s))})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Sh.trim()})}),a.jsx("button",{onClick:i,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:n?"Copied!":"Copy"})]})]})},tC=({text:e,selected:t,setSelected:n})=>a.jsxs("button",{onClick:()=>n(e),className:`${t?"text-white":"text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`,children:[a.jsx("span",{className:"relative z-10",children:e}),t&&a.jsx(R.span,{layoutId:"pill-tab",transition:{type:"spring",duration:.5},className:"absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"})]}),nC=()=>a.jsxs("div",{className:"flex flex-col md:w-full",children:[a.jsx(Y4,{}),a.jsx(X4,{}),a.jsx(Q4,{}),a.jsx(J4,{}),a.jsx(eC,{})]}),kh=`
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "https://img.freepik.com/free-photo/anime-style-mythical-dragon-creature_23-2151112867.jpg?t=st=1728918526~exp=1728922126~hmac=9234883d72b480a3cf7f0f04432fd2276dac6d858cc1c9778bab2cd9e0d277f2&w=826",
  "https://as2.ftcdn.net/v2/jpg/09/00/09/47/1000_F_900094770_SCnMwAEDXrKpo6rnVLvJ8O38nkpWTBvw.jpg",
  "https://as2.ftcdn.net/v2/jpg/09/00/08/03/1000_F_900080386_wHrO6OYSq4Hh4aYHaheBYyzwl36GNWn9.jpg",
  "https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094627_N2GRUszK9SvR8lokKwjOi7mHU26BehPL.jpg",
  "https://as2.ftcdn.net/v2/jpg/10/21/46/85/1000_F_1021468540_kRF74ztX8zgVKgZXjvUTnSJEBi0IzV5G.jpg",
  "https://img.freepik.com/free-photo/portrait-young-child-with-surreal-pet-dragon_23-2151668564.jpg?w=740&t=st=1728915384~exp=1728915984~hmac=dc753d6ecdc4df23f16c09958b7564cc2d164f675891a36138ac1e9fadc77243",
  "https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112792.jpg?t=st=1728915475~exp=1728919075~hmac=331e7a1935db9b082c00841be12eed9c68d3e14c727790c8625cdd8f5887dce9&w=826",
];

const AUTO_DELAY = 4000;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-full  bg-neutral-950 pb-2 px-0 ">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: \`-\${imgIndex * 100}%\` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {imgs.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            style={{
              backgroundImage: \`url(\${imgSrc})\`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-[35rem] shrink-0 object-cover"
          />
        ))}
      </motion.div>

      <div className="flex justify-center gap-2">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={\`h-3 w-3 rounded-full transition-colors \${ idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500" }\`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeCarousel;


export default SwipeCarousel;
`,es=["https://img.freepik.com/free-photo/anime-style-mythical-dragon-creature_23-2151112867.jpg?t=st=1728918526~exp=1728922126~hmac=9234883d72b480a3cf7f0f04432fd2276dac6d858cc1c9778bab2cd9e0d277f2&w=826","https://as2.ftcdn.net/v2/jpg/09/00/09/47/1000_F_900094770_SCnMwAEDXrKpo6rnVLvJ8O38nkpWTBvw.jpg","https://as2.ftcdn.net/v2/jpg/09/00/08/03/1000_F_900080386_wHrO6OYSq4Hh4aYHaheBYyzwl36GNWn9.jpg","https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094627_N2GRUszK9SvR8lokKwjOi7mHU26BehPL.jpg","https://as2.ftcdn.net/v2/jpg/10/21/46/85/1000_F_1021468540_kRF74ztX8zgVKgZXjvUTnSJEBi0IzV5G.jpg","https://img.freepik.com/free-photo/portrait-young-child-with-surreal-pet-dragon_23-2151668564.jpg?w=740&t=st=1728915384~exp=1728915984~hmac=dc753d6ecdc4df23f16c09958b7564cc2d164f675891a36138ac1e9fadc77243","https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112792.jpg?t=st=1728915475~exp=1728919075~hmac=331e7a1935db9b082c00841be12eed9c68d3e14c727790c8625cdd8f5887dce9&w=826"],rC=4e3,Th=50,Ph={type:"spring",mass:3,stiffness:400,damping:50},iC=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(kh.trim()),t(!0),setTimeout(()=>t(!1),2e3)},[r,i]=y.useState(0),s=Ig(0);y.useEffect(()=>{const l=setInterval(()=>{s.get()===0&&i(u=>u===es.length-1?0:u+1)},rC);return()=>clearInterval(l)},[]);const o=()=>{const l=s.get();l<=-Th&&r<es.length-1?i(c=>c+1):l>=Th&&r>0&&i(c=>c-1)};return a.jsxs("div",{className:"pl-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-9",children:"Carousel Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Swipe Carousel"}),a.jsx("div",{className:"relative flex items-center justify-center h-[30rem] w-[68rem] overflow-hidden pb-6 bg-neutral-950",children:a.jsxs("div",{className:"w-[69rem]",children:[a.jsx(R.div,{drag:"x",dragConstraints:{left:0,right:0},style:{x:s},animate:{translateX:`-${r*100}%`},transition:Ph,onDragEnd:o,className:"flex cursor-grab items-center active:cursor-grabbing",children:es.map((l,c)=>a.jsx(R.div,{style:{backgroundImage:`url(${l})`,backgroundSize:"cover",backgroundPosition:"center"},animate:{scale:r===c?.95:.85},transition:Ph,className:"aspect-video flex justify-center w-full h-[30rem]  shrink-0 object-cover"},c))}),a.jsx("div",{className:"flex justify-center gap-2",children:es.map((l,c)=>a.jsx("button",{onClick:()=>i(c),className:`h-3 w-3 rounded-full transition-colors ${c===r?"bg-neutral-50":"bg-neutral-500"}`},c))})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:kh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},sC="/AnimateReact/assets/barista-DDBkiom6.png",oC="/AnimateReact/assets/cat-ZrRKyjlm.png",aC="/AnimateReact/assets/newton-r-AFrWXe.png",lC="/AnimateReact/assets/womenReading-BCOZEJdG.png",cC="/AnimateReact/assets/music-D0l9HBiO.png",uC="/AnimateReact/assets/podcast-B6wOTXRQ.png",Eh=`
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const HorizontalScroll = () => {
  return (
    <div className="bg-neutral-600">
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-400">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-400">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] w-full bg-neutral-900"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: \`url(\${card.url})\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end justify-center mb-2">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-gray-600 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const cards = [
  {
    url: "https://as2.ftcdn.net/v2/jpg/03/86/82/73/1000_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://as2.ftcdn.net/v2/jpg/04/81/19/95/1000_F_481199500_2aFq9E8phorjYeP4ASzj6W70FcSI2zNc.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://as2.ftcdn.net/v2/jpg/03/45/65/23/1000_F_345652330_QaUvB8Evc0CNM6XRND22gUmUhBuwUxik.jpg",
    title: "Title 3",
    id: 4,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/16/1000_F_345651649_FU7jR63BqRRI54sVSzxTGftUHd50uOvz.jpg",
    title: "Title 4",
    id: 3,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/16/1000_F_345651683_mB37gIQ6h3AgPKY2iLj86pO16qOW7ZWj.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/20/1000_F_345652045_gfVh48pEcQC7w9Y91IJO7LXK3jfydb3A.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://as1.ftcdn.net/v2/jpg/03/45/65/22/1000_F_345652202_MQaxCcjvhuSVW6yI5E6TdHUp9DKcRAHe.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default HorizontalScroll;

`,dC=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(Eh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"sticky p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Carousel Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Scroll Carousel"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full shadow-sm shadow-black p-6",children:a.jsxs("div",{className:"bg-neutral-600",children:[a.jsx("div",{className:"flex h-20 items-center justify-center",children:a.jsx("span",{className:"font-semibold uppercase text-neutral-400",children:"Scroll down"})}),a.jsx(fC,{}),a.jsx("div",{className:"flex h-20 items-center justify-center",children:a.jsx("span",{className:"font-semibold uppercase text-neutral-400",children:"Scroll up"})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Eh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},fC=()=>{const e=y.useRef(null),{scrollYProgress:t}=kj({target:e}),n=ZN(t,[0,1],["1%","-70%"]);return a.jsx("section",{ref:e,className:"relative h-[180vh] w-[65rem] bg-neutral-900",children:a.jsx("div",{className:"sticky top-0 flex h-screen items-center overflow-hidden",children:a.jsx(R.div,{style:{x:n},className:"flex gap-4",children:hC.map(r=>a.jsx(qg,{card:r},r.id))})})})},qg=({card:e})=>a.jsxs("div",{className:"group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200",children:[a.jsx("div",{style:{backgroundImage:`url(${e.url})`,backgroundSize:"cover",backgroundPosition:"center"},className:"absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 z-10 grid place-content-end justify-center mb-2",children:a.jsx("p",{className:"bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-gray-600 backdrop-blur-lg",children:e.title})})]},e.id);qg.propTypes={card:F.shape({url:F.string.isRequired,title:F.string.isRequired,id:F.number.isRequired}).isRequired};const hC=[{url:sC,title:"Barista",id:1},{url:oC,title:"Cat",id:2},{url:lC,title:" Reading",id:4},{url:aC,title:"Newton",id:3},{url:cC,title:"Music",id:5},{url:uC,title:"Podcast",id:6},{url:"https://as1.ftcdn.net/v2/jpg/03/45/65/20/1000_F_345652045_gfVh48pEcQC7w9Y91IJO7LXK3jfydb3A.jpg",title:"Yoga",id:7}],pC=()=>a.jsxs("div",{children:[a.jsx(iC,{}),a.jsx(dC,{})]});function mC(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"},child:[]},{tag:"path",attr:{d:"M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"},child:[]}]})(e)}function gC(e){return B({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M184,96v64l-56,32L72,160V96l56-32Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM188,167l-56,32a8,8,0,0,1-7.94,0L68,167A8,8,0,0,1,64,160V96a8,8,0,0,1,4-7l56-32a8,8,0,0,1,7.94,0l56,32a8,8,0,0,1,4,7v64A8,8,0,0,1,188,167ZM88.12,96,128,118.79,167.88,96,128,73.21ZM80,155.36l40,22.85V132.64L80,109.79Zm96,0V109.79l-40,22.85v45.57Z"},child:[]}]})(e)}function vC(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 17.6l-2 -1.1v-2.5"},child:[]},{tag:"path",attr:{d:"M4 10v-2.5l2 -1.1"},child:[]},{tag:"path",attr:{d:"M10 4.1l2 -1.1l2 1.1"},child:[]},{tag:"path",attr:{d:"M18 6.4l2 1.1v2.5"},child:[]},{tag:"path",attr:{d:"M20 14v2.5l-2 1.12"},child:[]},{tag:"path",attr:{d:"M14 19.9l-2 1.1l-2 -1.1"},child:[]},{tag:"path",attr:{d:"M12 12l2 -1.1"},child:[]},{tag:"path",attr:{d:"M18 8.6l2 -1.1"},child:[]},{tag:"path",attr:{d:"M12 12l0 2.5"},child:[]},{tag:"path",attr:{d:"M12 18.5l0 2.5"},child:[]},{tag:"path",attr:{d:"M12 12l-2 -1.12"},child:[]},{tag:"path",attr:{d:"M6 8.6l-2 -1.1"},child:[]}]})(e)}const Rh=`
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { FaInstagram, FaTwitter, FaYoutube, FaRegListAlt } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { PiCubeFocusDuotone } from 'react-icons/pi';
import { TbCube3dSphere } from 'react-icons/tb';

const DribbleFooter = () => {
  const solutions = [
    {
      label: 'Life Cycle Analysis',
      description: 'Fusce sed orci sit amet nisi',
      icon: <FaRegListAlt />,
    },
    {
      label: 'Corporate Inventory',
      description: 'Fusce sed orci sit amet nisi',
      icon: <PiCubeFocusDuotone />,
    },
    {
      label: 'Scope 3 Decarbonaization',
      description: 'Fusce sed orci sit amet nisi',
      icon: <TbCube3dSphere />,
    },
  ];

  const resources = [
    {
      label: 'Success Stories',
      description: 'Our Customers in action',
    },
    {
      label: 'Guides',
      description: 'Whitepapers and more',
    },
    {
      label: 'Webinars',
      description: 'Live and on-demand',
    },
  ];

  return (
    <div className="bg-gray-200 p-10">
      {/* Newsletter Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-5 mb-8">
        <h2 className="text-lg">Sign up for our newsletter</h2>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-blackAlpha-100 border-0 focus:bg-whiteAlpha-300 p-2"
          />
          <button
            className="bg-green-400 text-white hover:bg-green-600 p-2 "
            aria-label="Subscribe"
          >
            <BiMailSend  size={24}/>
          </button>
        </div>
      </div>
      <div className="border-b border-gray-400 mb-8" />
      
      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-12">
        <div>
          <h2 className="text-xl">
            THE TIME IS{' '}
            <span className="text-blue-400">NOW</span>
          </h2>
          <h2 className="text-xl">THE PATH IS FORWARD.</h2>
        </div>
        <div className="flex items-center cursor-pointer" href="#">
          <img
            className="h-8 md:h-9"
            src="/assets/site/logo.png"
            alt="Logo"
          />
          <span className="font-bold text-xl ml-2">Animate React</span>
        </div>
      </div>

      {/* Footer Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="text-left">
          <h3 className="text-xs text-gray-500">GET IN TOUCH</h3>
          <div className="flex items-center">
            <FaRegListAlt className="mr-2" />
            <span>joshisheetal262@gmail.com</span>
          </div>
          <h3 className="text-xs text-gray-500 mt-4">FOLLOW US</h3>
          <div className="flex space-x-6">
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="text-left">
          <h3 className="text-xs text-gray-500">SOLUTIONS</h3>
          {solutions.map((solution, index) => (
            <div className="flex items-start gap-2" key={index}>
              {solution.icon}
              <div>
                <p>{solution.label}</p>
                <p className="text-xs text-gray-500">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="text-left">
          <h3 className="text-xs text-gray-500">RESOURCES</h3>
          {resources.map((resource, index) => (
            <div key={index}>
              <p>{resource.label}</p>
              <p className="text-xs text-gray-500">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// SocialButton Component
const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="bg-blackAlpha-100 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-blackAlpha-200 hover:text-blue-400"
      aria-label={label}
    >
      {children}
    </a>
  );
};

// PropTypes validation for SocialButton
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  label: PropTypes.string.isRequired,   // Validate label prop
  href: PropTypes.string.isRequired,    // Validate href prop
};

export default DribbleFooter;
`,xC=()=>{const[e,t]=y.useState(!1),n=[{label:"Life Cycle Analysis",description:"Live and on-demand",icon:a.jsx(sh,{})},{label:"Corporate Inventory",description:"Whitepapers and more",icon:a.jsx(gC,{})},{label:"Scope 3 Decarbonization",description:"Our Customers in action",icon:a.jsx(vC,{})}],r=[{label:"Success Stories",description:"Our Customers in action"},{label:"Guides",description:"Whitepapers and more"},{label:"Webinars",description:"Live and on-demand"}],i=()=>{navigator.clipboard.writeText(Rh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Apps Link"}),a.jsx("div",{className:" w-[68rem] h-[27rem] m-0 p-0",children:a.jsxs("div",{className:"w-full bg-gray-200 px-8 py-10",children:[a.jsxs("div",{className:"flex flex-col md:w-full sm:flex-row justify-between items-center gap-5 mb-8",children:[a.jsx("h2",{className:"text-lg w-full sm:w-auto",children:"Sign up for our newsletter"}),a.jsxs("div",{className:"flex items-center w-full sm:w-auto",children:[a.jsx("input",{type:"email",placeholder:"Your email address",className:"w-full sm:w-auto bg-blackAlpha-100 border-0 focus:bg-whiteAlpha-300 p-2"}),a.jsx("button",{className:"bg-green-400 text-white hover:bg-green-600 p-2 ml-2","aria-label":"Subscribe",children:a.jsx(mC,{size:24})})]})]}),a.jsx("div",{className:"border-b border-gray-400 mb-8 w-full"}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-5 mb-12 w-full",children:[a.jsxs("div",{className:"w-full sm:w-auto",children:[a.jsxs("h2",{className:"text-xl",children:["THE TIME IS ",a.jsx("span",{className:"text-blue-400",children:"NOW"})]}),a.jsx("h2",{className:"text-xl",children:"THE PATH IS FORWARD."})]}),a.jsxs("div",{className:"flex items-center cursor-pointer w-full sm:w-auto",children:[a.jsx("img",{className:"h-16 md:h-9",src:kn,alt:"Logo"}),a.jsx("span",{className:"font-bold text-xl ml-2",children:"Animate React"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full",children:[a.jsxs("div",{className:"text-left w-full",children:[a.jsx("h3",{className:"text-xs text-gray-500",children:"GET IN TOUCH"}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(sh,{className:"mr-2"}),a.jsx("span",{children:"joshisheetal262@gmail.com"})]}),a.jsx("h3",{className:"text-xs text-gray-500 mt-4",children:"FOLLOW US"}),a.jsxs("div",{className:"flex space-x-6",children:[a.jsx(xs,{label:"Twitter",href:"#",children:a.jsx(du,{})}),a.jsx(xs,{label:"YouTube",href:"#",children:a.jsx(fu,{})}),a.jsx(xs,{label:"Instagram",href:"#",children:a.jsx(uu,{})})]})]}),a.jsxs("div",{className:"text-left w-full ",children:[a.jsx("h3",{className:"text-xs text-gray-500 p-2",children:"SOLUTIONS"}),n.map((s,o)=>a.jsxs("div",{className:"flex items-start gap-2",children:[s.icon,a.jsxs("div",{children:[a.jsx("p",{children:s.label}),a.jsx("p",{className:"text-xs text-gray-500",children:s.description})]})]},o))]}),a.jsxs("div",{className:"text-left w-full",children:[a.jsx("h3",{className:"text-xs text-gray-500",children:"RESOURCES"}),r.map((s,o)=>a.jsxs("div",{children:[a.jsx("p",{children:s.label}),a.jsx("p",{className:"text-xs text-gray-500",children:s.description})]},o))]})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsx("div",{className:" h-[20rem] overflow-scroll",children:a.jsxs("div",{className:"relative bg-black text-white p-4 rounded-lg overflow-x-auto",children:[a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Rh.trim()}),a.jsx("button",{onClick:i,className:"absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md text-sm",children:e?"Copied!":"Copy"})]})})]})},xs=({children:e,label:t,href:n})=>a.jsx("a",{href:n,className:"bg-blackAlpha-100 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-blackAlpha-200 hover:text-blue-400","aria-label":t,children:e});xs.propTypes={children:F.node.isRequired,label:F.string.isRequired,href:F.string.isRequired};const ys=({children:e,label:t,href:n})=>a.jsx("a",{href:n,className:" rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-gray-300","aria-label":t,children:e});ys.propTypes={children:F.node.isRequired,label:F.string.isRequired,href:F.string.isRequired};const Lh=`
import PropTypes from "prop-types"; // Import PropTypes
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../images/logo.png";

// SocialButton component
const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className=" rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-gray-300"
      aria-label={label}
    >
      {children}
    </a>
  );
};

// Add prop types validation
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Require children to be a node
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// Main Footer Component
const CenterLogoFooter = () => {
  return (
    <div className="w-full bg-gray-200 p-5 text-gray-700">
      <div className="max-w-6xl mx-auto py-4 flex flex-col items-center space-y-4">
        <a
          href="#"
          className="flex items-center cursor-pointer hover:text-blue-700"
        >
          <img className="h-8 object-contain" src={logo} alt="Logo" />
          <span className="whitespace-nowrap font-bold text-xl">
            Animate React
          </span>
        </a>
        <div className="flex space-x-6">
          {Categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="text-gray-700 hover:text-blue-400"
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>

      <div className="">
        <div className="max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
          <span>© 2024 Sheetal Joshi. All rights reserved</span>
          <div className="flex space-x-6">
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
export default CenterLogoFooter;

`,yC=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(Lh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Center Element Footer"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] p-6",children:a.jsxs("div",{className:"w-full bg-gray-200 p-5 text-gray-700",children:[a.jsxs("div",{className:"max-w-6xl mx-auto py-4 flex flex-col items-center space-y-4",children:[a.jsxs("a",{href:"#",className:"flex items-center cursor-pointer hover:text-blue-700",children:[a.jsx("img",{className:"h-8 object-contain",src:kn,alt:"Logo"}),a.jsx("span",{className:"whitespace-nowrap font-bold text-xl",children:"Animate React"})]}),a.jsx("div",{className:"flex space-x-6",children:wC.map((r,i)=>a.jsx("a",{href:r.href,className:"text-gray-700 hover:text-blue-400",children:r.label},i))})]}),a.jsx("div",{className:"",children:a.jsxs("div",{className:"max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center",children:[a.jsx("span",{children:"© 2024 Sheetal Joshi. All rights reserved"}),a.jsxs("div",{className:"flex space-x-6",children:[a.jsx(ys,{label:"Twitter",href:"#",children:a.jsx(du,{})}),a.jsx(ys,{label:"YouTube",href:"#",children:a.jsx(fu,{})}),a.jsx(ys,{label:"Instagram",href:"#",children:a.jsx(uu,{})})]})]})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsx("div",{className:" h-[20rem] overflow-scroll",children:a.jsxs("div",{className:"relative bg-black text-white p-4 rounded-lg overflow-x-auto",children:[a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Lh.trim()}),a.jsx("button",{onClick:n,className:"absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md text-sm",children:e?"Copied!":"Copy"})]})})]})},wC=[{label:"Home",href:"#"},{label:"About",href:"#"},{label:"Blog",href:"#"},{label:"Contact",href:"#"}],Ah=`
import { useState } from "react";
import PropTypes from "prop-types";
// import logo from "../images/logo.png";

export default function FlipLinkFooter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white border-b w-full border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="logo" className="h-12 ml-4" />
          <div className="hidden md:flex ml-10">
            <DesktopNav />
          </div>
        </div>
        <AuthButtons className="hidden md:flex" />
        <button
          className="block md:hidden text-gray-700"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <button className="absolute top-4 right-4" onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="h-full flex flex-col mt-14">
            <MobileNav />
          </div>
        </div>
      )}
    </div>
  );
}

const DesktopNav = () => {
  return (
    <div className="flex space-x-6">
      {NAV_ITEMS.map((navItem) => (
        <div key={navItem.label}>
          <HoverLinks href={navItem.href}>{navItem.label}</HoverLinks>
        </div>
      ))}
    </div>
  );
};

const MobileNav = () => {
  return (
    <div className="bg-white p-4 h-full flex flex-col space-y-6">
      {NAV_ITEMS.map((navItem) => (
        <HoverLinks key={navItem.label} href={navItem.href}>
          {navItem.label}
        </HoverLinks>
      ))}
      <AuthButtons className="mt-auto mb-4 w-full" />
    </div>
  );
};

const AuthButtons = ({ className }) => (
  <div className={\`flex space-x-4 mx-2 \${className}\`}>
    <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4">
      Sign In
    </button>
    <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 ">
      Sign Up
    </button>
  </div>
);

AuthButtons.propTypes = {
  className: PropTypes.string,
};

AuthButtons.defaultProps = {
  className: "",
};

const HoverLinks = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative block font-bold uppercase text-gray-700 hover:text-black transition-all duration-200 overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="block relative overflow-hidden">
        <span
          className={\`block transform transition-transform duration-300 \${isHovered ? "-translate-y-full" : "translate-y-0"}\`}
        >
          {children}
        </span>
        <span
          className={\`absolute inset-0 block transform transition-transform duration-300 \${isHovered ? "translate-y-0" : "translate-y-full"}\`}
        >
          {children}
        </span>
      </span>
    </a>
  );
};

HoverLinks.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const NAV_ITEMS = [
  { label: "Products", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Contact", href: "#" },
];
`;function bC(){const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(Ah.trim()),t(!0),setTimeout(()=>t(!1),2e3)},[r,i]=y.useState(!1),s=()=>i(!r);return a.jsxs("div",{className:"pl-4 space-y-4 ",children:[a.jsx("h1",{className:"text-3xl font-bold mt-9",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Flip Link Footer"}),a.jsx("div",{className:"relative flex justify-center w-[68rem]  py-10 px-4 bg-gray-200 ",children:a.jsxs("div",{className:"bg-white border-b w-full border-gray-200 py-4",children:[a.jsxs("div",{className:"container mx-auto flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center justify-between w-full md:w-auto",children:[a.jsx("img",{src:kn,alt:"logo",className:"h-12 ml-4"}),a.jsx("div",{className:"hidden md:flex ml-10",children:a.jsx(NC,{})})]}),a.jsx(Ro,{className:"hidden md:flex"}),a.jsx("button",{className:"block md:hidden text-gray-700",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})]}),r&&a.jsxs("div",{className:"fixed inset-0 z-50 bg-white p-4 md:hidden",children:[a.jsx("button",{className:"absolute top-4 right-4",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),a.jsx("div",{className:"h-full flex flex-col mt-14",children:a.jsx(jC,{})})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Ah.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})}const NC=()=>a.jsx("div",{className:"flex space-x-6",children:Zg.map(e=>a.jsx("div",{children:a.jsx(pu,{href:e.href,children:e.label})},e.label))}),jC=()=>a.jsxs("div",{className:"bg-white p-4 h-full flex flex-col space-y-6",children:[Zg.map(e=>a.jsx(pu,{href:e.href,children:e.label},e.label)),a.jsx(Ro,{className:"mt-auto mb-4 w-full"})]}),Ro=({className:e})=>a.jsxs("div",{className:`flex space-x-4 mx-2 ${e}`,children:[a.jsx("button",{className:"bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4",children:"Sign In"}),a.jsx("button",{className:"bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 ",children:"Sign Up"})]});Ro.propTypes={className:F.string};Ro.defaultProps={className:""};const pu=({href:e,children:t})=>{const[n,r]=y.useState(!1);return a.jsx("a",{href:e,className:"relative block font-bold uppercase text-gray-700 hover:text-black transition-all duration-200 overflow-hidden whitespace-nowrap",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:a.jsxs("span",{className:"block relative overflow-hidden",children:[a.jsx("span",{className:`block transform transition-transform duration-300 ${n?"-translate-y-full":"translate-y-0"}`,children:t}),a.jsx("span",{className:`absolute inset-0 block transform transition-transform duration-300 ${n?"translate-y-0":"translate-y-full"}`,children:t})]})})};pu.propTypes={href:F.string.isRequired,children:F.node.isRequired};const Zg=[{label:"Products",href:"#"},{label:"Resources",href:"#"},{label:"Insights",href:"#"},{label:"Contact",href:"#"}],CC=()=>{navigator.clipboard.writeText(Jg.trim()),setIsCopied(!0),setTimeout(()=>setIsCopied(!1),2e3)},Jg=`
import PropTypes from 'prop-types';
const ListHeader = ({ children }) => {
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


  return (
    <h3 className="text-lg font-medium mb-2">{children}</h3>
  );
};
ListHeader.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center bg-gray-400 rounded-full p-2 hover:bg-gray-200 transition duration-300"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
};
SocialButton.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
  label: PropTypes.string.isRequired, // Ensure label is a string
  href: PropTypes.string.isRequired, // Ensure href is a string
};
const AppPlatformFooter = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <ListHeader>Company</ListHeader>
            <ul className="list-none space-y-2">
              {Company.map((company, index) => (
                <li key={index}>
                  <a href={company.href} className="text-gray-600 hover:text-gray-800">
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ListHeader>Support</ListHeader>
            <ul className="list-none space-y-2">
              {Support.map((company, index) => (
                <li key={index}>
                  <a href={company.href} className="text-gray-600 hover:text-gray-800">
                    {company.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ListHeader>Legal</ListHeader>
            <ul className="list-none space-y-2">
              {Legal.map((Legal, index) => (
                <li key={index}>
                  <a href={Legal.href} className="text-gray-600 hover:text-gray-800">
                    {Legal.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ListHeader>Install App</ListHeader>
            <div className="flex flex-col space-y-2">
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU"
                  alt="App Store"
                  className="w-full rounded"
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU"
                  alt="Play Store"
                  className="w-full rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-8" />

      <<div className="container mx-auto px-4 flex items-center py-4 justify-between md:flex-row md:space-x-4">
            <p className="text-gray-600 text-sm">
              &copy; 2024 Sheetal Joshi.All rights reserved
            </p>
            <div className="flex space-x-4">
              <SocialButton label="Twitter" href="#">
                <FaTwitter className="text-xl" />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube className="text-xl" />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram className="text-xl" />
              </SocialButton>
            </div>
      </div>
    </footer>
  );
};

const Company = [
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Careers',
    href: '#',
  },
  {
    label: 'Contact Us',
    href: '#',
  },
]
const Support = [
  {
    label: 'Help Center',
    href: '#',
  },
  {
    label: 'Safety Center',
    href: '#',
  },
  {
    label: 'Community Guidelines',
    href: '#',
  },
]
const Legal = [
  {
    label: 'Cookies Policy',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
  {
    label: 'Terms of Service',
    href: '#',
  },
  {
    label: 'Law Enforcement',
    href: '#',
  },
]

export default AppPlatformFooter;
`,Rr=({children:e})=>a.jsx("h3",{className:"text-lg font-medium mb-2",children:e});Rr.propTypes={children:F.node.isRequired};const ws=({children:e,label:t,href:n})=>a.jsxs("a",{href:n,className:"inline-flex items-center justify-center bg-gray-400 rounded-full p-2 hover:bg-gray-200 transition duration-300",children:[a.jsx("span",{className:"sr-only",children:t}),e]});ws.propTypes={children:F.node.isRequired,label:F.string.isRequired,href:F.string.isRequired};const SC=()=>{const[e,t]=y.useState(!1);return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"App Platform"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full  shadow-sm shadow-black p-6",children:a.jsxs("footer",{className:"bg-gray-200 py-10",children:[a.jsx("div",{className:"container mx-auto px-4",children:a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",children:[a.jsxs("div",{children:[a.jsx(Rr,{children:"Company"}),a.jsx("ul",{className:"list-none space-y-2",children:kC.map((n,r)=>a.jsx("li",{children:a.jsx("a",{href:n.href,className:"text-gray-600 hover:text-gray-800",children:n.label})},r))})]}),a.jsxs("div",{children:[a.jsx(Rr,{children:"Support"}),a.jsx("ul",{className:"list-none space-y-2",children:TC.map((n,r)=>a.jsx("li",{children:a.jsx("a",{href:n.href,className:"text-gray-600 hover:text-gray-800",children:n.label})},r))})]}),a.jsxs("div",{children:[a.jsx(Rr,{children:"Legal"}),a.jsx("ul",{className:"list-none space-y-2",children:PC.map((n,r)=>a.jsx("li",{children:a.jsx("a",{href:n.href,className:"text-gray-600 hover:text-gray-800",children:n.label})},r))})]}),a.jsxs("div",{children:[a.jsx(Rr,{children:"Install App"}),a.jsxs("div",{className:"flex flex-col space-y-2",children:[a.jsx("a",{href:"#",children:a.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU",alt:"App Store",className:"w-full rounded"})}),a.jsx("a",{href:"#",children:a.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU",alt:"Play Store",className:"w-full rounded"})})]})]})]})}),a.jsx("hr",{className:"border-t border-gray-300 mt-8"}),a.jsxs("div",{className:"container mx-auto px-4 flex items-center py-4 justify-between md:flex-row md:space-x-4",children:[a.jsx("p",{className:"text-gray-600 text-sm",children:"© 2024 Sheetal Joshi.All rights reserved"}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(ws,{label:"Twitter",href:"#",children:a.jsx(du,{className:"text-xl"})}),a.jsx(ws,{label:"YouTube",href:"#",children:a.jsx(fu,{className:"text-xl"})}),a.jsx(ws,{label:"Instagram",href:"#",children:a.jsx(uu,{className:"text-xl"})})]})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Jg.trim()})}),a.jsx("button",{onClick:CC,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},kC=[{label:"About Us",href:"#"},{label:"Blog",href:"#"},{label:"Careers",href:"#"},{label:"Contact Us",href:"#"}],TC=[{label:"Help Center",href:"#"},{label:"Safety Center",href:"#"},{label:"Community Guidelines",href:"#"}],PC=[{label:"Cookies Policy",href:"#"},{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"},{label:"Law Enforcement",href:"#"}],EC=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(xC,{}),a.jsx(yC,{}),a.jsx(bC,{}),a.jsx(SC,{})]}),Mh="text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10",RC=()=>{const[e,t]=y.useState("light");return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold ",children:"Toggle Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Light / Dark"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-[68rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsx("div",{className:`grid h-[400px] w-full place-content-center px-4 transition-colors ${e==="light"?"bg-white":"bg-slate-900"}`,children:a.jsxs("div",{className:"relative flex w-fit items-center rounded-full",children:[a.jsxs("button",{className:`${Mh} ${e==="light"?"text-white":"text-slate-300"}`,onClick:()=>{t("light")},children:[a.jsx(i4,{className:"relative z-10 text-lg md:text-sm"}),a.jsx("span",{className:"relative z-10",children:"Light"})]}),a.jsxs("button",{className:`${Mh} ${e==="dark"?"text-white":"text-slate-800"}`,onClick:()=>{t("dark")},children:[a.jsx(l4,{className:"relative z-10 text-lg md:text-sm"}),a.jsx("span",{className:"relative z-10",children:"Dark"})]}),a.jsx("div",{className:`absolute inset-0 z-0 flex ${e==="dark"?"justify-end":"justify-start"}`,children:a.jsx(R.span,{layout:!0,transition:{type:"spring",damping:15,stiffness:250},className:"h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"})})]})})})]})},LC=()=>a.jsx("div",{children:a.jsx(RC,{})});function AC({children:e}){const n=wi().pathname==="/";return a.jsxs("div",{className:"flex flex-col min-h-screen",children:[!n&&a.jsx(Ij,{}),a.jsx("div",{className:"flex-1",children:e}),!n&&a.jsx(Yj,{})]})}function MC(){return a.jsx(j1,{children:a.jsx(AC,{children:a.jsxs(g1,{children:[a.jsx(Ge,{path:"/",element:a.jsx(_j,{})}),a.jsx(Ge,{path:"/app",element:a.jsxs("div",{className:"flex md:flex-row sm:flex-col",children:[a.jsx(lt,{}),a.jsx(h4,{})]})}),a.jsx(Ge,{path:"/cards",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(B4,{})]})}),a.jsx(Ge,{path:"/buttons",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(j4,{})]})}),a.jsx(Ge,{path:"/text",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(L4,{})]})}),a.jsx(Ge,{path:"/forms",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(K4,{})]})}),a.jsx(Ge,{path:"/navbar",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(nC,{})]})}),a.jsx(Ge,{path:"/carousels",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(pC,{})]})}),a.jsx(Ge,{path:"/footer",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(EC,{})]})}),a.jsx(Ge,{path:"/toggles",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(LC,{})]})})]})})})}Km(document.getElementById("root")).render(a.jsx(y.StrictMode,{children:a.jsx(MC,{})}));
