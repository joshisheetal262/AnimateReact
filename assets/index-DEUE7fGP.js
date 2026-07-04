(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Lh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ah={exports:{}},Js={},Mh={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),Zg=Symbol.for("react.portal"),Jg=Symbol.for("react.fragment"),ev=Symbol.for("react.strict_mode"),tv=Symbol.for("react.profiler"),nv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),iv=Symbol.for("react.forward_ref"),sv=Symbol.for("react.suspense"),ov=Symbol.for("react.memo"),av=Symbol.for("react.lazy"),pu=Symbol.iterator;function lv(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var _h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ih=Object.assign,Fh={};function or(e,t,n){this.props=e,this.context=t,this.refs=Fh,this.updater=n||_h}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vh(){}Vh.prototype=or.prototype;function Ll(e,t,n){this.props=e,this.context=t,this.refs=Fh,this.updater=n||_h}var Al=Ll.prototype=new Vh;Al.constructor=Ll;Ih(Al,or.prototype);Al.isPureReactComponent=!0;var mu=Array.isArray,Dh=Object.prototype.hasOwnProperty,Ml={current:null},Oh={key:!0,ref:!0,__self:!0,__source:!0};function Bh(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Dh.call(t,r)&&!Oh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ui,type:e,key:s,ref:o,props:i,_owner:Ml.current}}function cv(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _l(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function uv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gu=/\/+/g;function Po(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uv(""+e.key):t.toString(36)}function Qi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ui:case Zg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Po(o,0):r,mu(i)?(n="",e!=null&&(n=e.replace(gu,"$&/")+"/"),Qi(i,t,n,"",function(u){return u})):i!=null&&(_l(i)&&(i=cv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",mu(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Po(s,l);o+=Qi(s,t,n,c,i)}else if(c=lv(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Po(s,l++),o+=Qi(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ji(e,t,n){if(e==null)return e;var r=[],i=0;return Qi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function dv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},qi={transition:null},fv={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:qi,ReactCurrentOwner:Ml};function zh(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!_l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=or;I.Fragment=Jg;I.Profiler=tv;I.PureComponent=Ll;I.StrictMode=ev;I.Suspense=sv;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;I.act=zh;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ih({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ml.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Dh.call(t,c)&&!Oh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ui,type:e.type,key:i,ref:s,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:rv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nv,_context:e},e.Consumer=e};I.createElement=Bh;I.createFactory=function(e){var t=Bh.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:iv,render:e}};I.isValidElement=_l;I.lazy=function(e){return{$$typeof:av,_payload:{_status:-1,_result:e},_init:dv}};I.memo=function(e,t){return{$$typeof:ov,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=qi.transition;qi.transition={};try{e()}finally{qi.transition=t}};I.unstable_act=zh;I.useCallback=function(e,t){return Ne.current.useCallback(e,t)};I.useContext=function(e){return Ne.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ne.current.useEffect(e,t)};I.useId=function(){return Ne.current.useId()};I.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ne.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};I.useRef=function(e){return Ne.current.useRef(e)};I.useState=function(e){return Ne.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ne.current.useTransition()};I.version="18.3.1";Mh.exports=I;var y=Mh.exports;const Le=Lh(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv=y,pv=Symbol.for("react.element"),mv=Symbol.for("react.fragment"),gv=Object.prototype.hasOwnProperty,vv=hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function Hh(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)gv.call(t,r)&&!xv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pv,type:e,key:s,ref:o,props:i,_owner:vv.current}}Js.Fragment=mv;Js.jsx=Hh;Js.jsxs=Hh;Ah.exports=Js;var a=Ah.exports,Uh={exports:{}},Ie={},$h={exports:{}},Wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var _=T.length;T.push(M);e:for(;0<_;){var q=_-1>>>1,se=T[q];if(0<i(se,M))T[q]=M,T[_]=se,_=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],_=T.pop();if(_!==M){T[0]=_;e:for(var q=0,se=T.length,bi=se>>>1;q<bi;){var Jt=2*(q+1)-1,To=T[Jt],en=Jt+1,Ni=T[en];if(0>i(To,_))en<se&&0>i(Ni,To)?(T[q]=Ni,T[en]=_,q=en):(T[q]=To,T[Jt]=_,q=Jt);else if(en<se&&0>i(Ni,_))T[q]=Ni,T[en]=_,q=en;else break e}}return M}function i(T,M){var _=T.sortIndex-M.sortIndex;return _!==0?_:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,f=null,h=3,v=!1,x=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function b(T){if(w=!1,g(T),!x)if(n(c)!==null)x=!0,wi(j);else{var M=n(u);M!==null&&te(b,M.startTime-T)}}function j(T,M){x=!1,w&&(w=!1,m(S),S=-1),v=!0;var _=h;try{for(g(M),f=n(c);f!==null&&(!(f.expirationTime>M)||T&&!ie());){var q=f.callback;if(typeof q=="function"){f.callback=null,h=f.priorityLevel;var se=q(f.expirationTime<=M);M=e.unstable_now(),typeof se=="function"?f.callback=se:f===n(c)&&r(c),g(M)}else r(c);f=n(c)}if(f!==null)var bi=!0;else{var Jt=n(u);Jt!==null&&te(b,Jt.startTime-M),bi=!1}return bi}finally{f=null,h=_,v=!1}}var k=!1,P=null,S=-1,V=5,A=-1;function ie(){return!(e.unstable_now()-A<V)}function Ct(){if(P!==null){var T=e.unstable_now();A=T;var M=!0;try{M=P(!0,T)}finally{M?Zt():(k=!1,P=null)}}else k=!1}var Zt;if(typeof p=="function")Zt=function(){p(Ct)};else if(typeof MessageChannel<"u"){var dr=new MessageChannel,hu=dr.port2;dr.port1.onmessage=Ct,Zt=function(){hu.postMessage(null)}}else Zt=function(){N(Ct,0)};function wi(T){P=T,k||(k=!0,Zt())}function te(T,M){S=N(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,wi(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var _=h;h=M;try{return T()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var _=h;h=T;try{return M()}finally{h=_}},e.unstable_scheduleCallback=function(T,M,_){var q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?q+_:q):_=q,T){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=_+se,T={id:d++,callback:M,priorityLevel:T,startTime:_,expirationTime:se,sortIndex:-1},_>q?(T.sortIndex=_,t(u,T),n(c)===null&&T===n(u)&&(w?(m(S),S=-1):w=!0,te(b,_-q))):(T.sortIndex=se,t(c,T),x||v||(x=!0,wi(j))),T},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(T){var M=h;return function(){var _=h;h=M;try{return T.apply(this,arguments)}finally{h=_}}}})(Wh);$h.exports=Wh;var yv=$h.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=y,Me=yv;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gh=new Set,Ur={};function wn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)Gh.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vu={},xu={};function Nv(e){return ga.call(xu,e)?!0:ga.call(vu,e)?!1:bv.test(e)?xu[e]=!0:(vu[e]=!0,!1)}function jv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cv(e,t,n,r){if(t===null||typeof t>"u"||jv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Il=/[\-:]([a-z])/g;function Fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Il,Fl);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Il,Fl);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Il,Fl);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cv(t,n,i,r)&&(n=null),r||i===null?Nv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ci=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),Kh=Symbol.for("react.provider"),Yh=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),ya=Symbol.for("react.suspense_list"),Bl=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Xh=Symbol.for("react.offscreen"),yu=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Eo;function Nr(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var Ro=!1;function Lo(e,t){if(!e||Ro)return"";Ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ro=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Sv(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=Lo(e.type,!1),e;case 11:return e=Lo(e.type.render,!1),e;case 1:return e=Lo(e.type,!0),e;default:return""}}function wa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case Tn:return"Portal";case va:return"Profiler";case Dl:return"StrictMode";case xa:return"Suspense";case ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yh:return(e.displayName||"Context")+".Consumer";case Kh:return(e._context.displayName||"Context")+".Provider";case Ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bl:return t=e.displayName||null,t!==null?t:wa(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return wa(e(t))}catch{}}return null}function kv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wa(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tv(e){var t=Qh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Si(e){e._valueTracker||(e._valueTracker=Tv(e))}function qh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ba(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zh(e,t){t=t.checked,t!=null&&Vl(e,"checked",t,!1)}function Na(e,t){Zh(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ja(e,t.type,n):t.hasOwnProperty("defaultValue")&&ja(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ja(e,t,n){(t!=="number"||gs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(jr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Jh(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,tp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pv=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){Pv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Er[t]=Er[e]})});function np(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Er.hasOwnProperty(e)&&Er[e]?(""+t).trim():t+"px"}function rp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=np(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ev=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,t){if(t){if(Ev[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ea=null,Wn=null,Gn=null;function Cu(e){if(e=hi(e)){if(typeof Ea!="function")throw Error(C(280));var t=e.stateNode;t&&(t=io(t),Ea(e.stateNode,e.type,t))}}function ip(e){Wn?Gn?Gn.push(e):Gn=[e]:Wn=e}function sp(){if(Wn){var e=Wn,t=Gn;if(Gn=Wn=null,Cu(e),t)for(e=0;e<t.length;e++)Cu(t[e])}}function op(e,t){return e(t)}function ap(){}var Ao=!1;function lp(e,t,n){if(Ao)return e(t,n);Ao=!0;try{return op(e,t,n)}finally{Ao=!1,(Wn!==null||Gn!==null)&&(ap(),sp())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ra=!1;if(yt)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Ra=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Ra=!1}function Rv(e,t,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Rr=!1,vs=null,xs=!1,La=null,Lv={onError:function(e){Rr=!0,vs=e}};function Av(e,t,n,r,i,s,o,l,c){Rr=!1,vs=null,Rv.apply(Lv,arguments)}function Mv(e,t,n,r,i,s,o,l,c){if(Av.apply(this,arguments),Rr){if(Rr){var u=vs;Rr=!1,vs=null}else throw Error(C(198));xs||(xs=!0,La=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Su(e){if(bn(e)!==e)throw Error(C(188))}function _v(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Su(i),e;if(s===r)return Su(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function up(e){return e=_v(e),e!==null?dp(e):null}function dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dp(e);if(t!==null)return t;e=e.sibling}return null}var fp=Me.unstable_scheduleCallback,ku=Me.unstable_cancelCallback,Iv=Me.unstable_shouldYield,Fv=Me.unstable_requestPaint,J=Me.unstable_now,Vv=Me.unstable_getCurrentPriorityLevel,Hl=Me.unstable_ImmediatePriority,hp=Me.unstable_UserBlockingPriority,ys=Me.unstable_NormalPriority,Dv=Me.unstable_LowPriority,pp=Me.unstable_IdlePriority,eo=null,it=null;function Ov(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Hv,Bv=Math.log,zv=Math.LN2;function Hv(e){return e>>>=0,e===0?32:31-(Bv(e)/zv|0)|0}var Ti=64,Pi=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Cr(l):(s&=o,s!==0&&(r=Cr(s)))}else o=n&~i,o!==0?r=Cr(o):s!==0&&(r=Cr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Uv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $v(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Qe(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Uv(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mp(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function Mo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Wv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ul(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function gp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vp,$l,xp,yp,wp,Ma=!1,Ei=[],_t=null,It=null,Ft=null,Gr=new Map,Kr=new Map,Rt=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function pr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=hi(t),t!==null&&$l(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kv(e,t,n,r,i){switch(t){case"focusin":return _t=pr(_t,e,t,n,r,i),!0;case"dragenter":return It=pr(It,e,t,n,r,i),!0;case"mouseover":return Ft=pr(Ft,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gr.set(s,pr(Gr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Kr.set(s,pr(Kr.get(s)||null,e,t,n,r,i)),!0}return!1}function bp(e){var t=an(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=cp(n),t!==null){e.blockedOn=t,wp(e.priority,function(){xp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pa=r,n.target.dispatchEvent(r),Pa=null}else return t=hi(n),t!==null&&$l(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){Zi(e)&&n.delete(t)}function Yv(){Ma=!1,_t!==null&&Zi(_t)&&(_t=null),It!==null&&Zi(It)&&(It=null),Ft!==null&&Zi(Ft)&&(Ft=null),Gr.forEach(Pu),Kr.forEach(Pu)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Yv)))}function Yr(e){function t(i){return mr(i,e)}if(0<Ei.length){mr(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&mr(_t,e),It!==null&&mr(It,e),Ft!==null&&mr(Ft,e),Gr.forEach(t),Kr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&Rt.shift()}var Kn=jt.ReactCurrentBatchConfig,bs=!0;function Xv(e,t,n,r){var i=z,s=Kn.transition;Kn.transition=null;try{z=1,Wl(e,t,n,r)}finally{z=i,Kn.transition=s}}function Qv(e,t,n,r){var i=z,s=Kn.transition;Kn.transition=null;try{z=4,Wl(e,t,n,r)}finally{z=i,Kn.transition=s}}function Wl(e,t,n,r){if(bs){var i=_a(e,t,n,r);if(i===null)Uo(e,t,r,Ns,n),Tu(e,r);else if(Kv(i,e,t,n,r))r.stopPropagation();else if(Tu(e,r),t&4&&-1<Gv.indexOf(e)){for(;i!==null;){var s=hi(i);if(s!==null&&vp(s),s=_a(e,t,n,r),s===null&&Uo(e,t,r,Ns,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uo(e,t,r,null,n)}}var Ns=null;function _a(e,t,n,r){if(Ns=null,e=zl(r),e=an(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ns=e,null}function Np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vv()){case Hl:return 1;case hp:return 4;case ys:case Dv:return 16;case pp:return 536870912;default:return 16}default:return 16}}var At=null,Gl=null,Ji=null;function jp(){if(Ji)return Ji;var e,t=Gl,n=t.length,r,i="value"in At?At.value:At.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ji=i.slice(e,1<r?1-r:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function Eu(){return!1}function Fe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ri:Eu,this.isPropagationStopped=Eu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Fe(ar),fi=X({},ar,{view:0,detail:0}),qv=Fe(fi),_o,Io,gr,to=X({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(_o=e.screenX-gr.screenX,Io=e.screenY-gr.screenY):Io=_o=0,gr=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),Ru=Fe(to),Zv=X({},to,{dataTransfer:0}),Jv=Fe(Zv),ex=X({},fi,{relatedTarget:0}),Fo=Fe(ex),tx=X({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=Fe(tx),rx=X({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=Fe(rx),sx=X({},ar,{data:0}),Lu=Fe(sx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lx[e])?!!t[e]:!1}function Yl(){return cx}var ux=X({},fi,{key:function(e){if(e.key){var t=ox[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dx=Fe(ux),fx=X({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=Fe(fx),hx=X({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),px=Fe(hx),mx=X({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=Fe(mx),vx=X({},to,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Fe(vx),yx=[9,13,27,32],Xl=yt&&"CompositionEvent"in window,Lr=null;yt&&"documentMode"in document&&(Lr=document.documentMode);var wx=yt&&"TextEvent"in window&&!Lr,Cp=yt&&(!Xl||Lr&&8<Lr&&11>=Lr),Mu=" ",_u=!1;function Sp(e,t){switch(e){case"keyup":return yx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function bx(e,t){switch(e){case"compositionend":return kp(t);case"keypress":return t.which!==32?null:(_u=!0,Mu);case"textInput":return e=t.data,e===Mu&&_u?null:e;default:return null}}function Nx(e,t){if(En)return e==="compositionend"||!Xl&&Sp(e,t)?(e=jp(),Ji=Gl=At=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cp&&t.locale!=="ko"?null:t.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jx[e.type]:t==="textarea"}function Tp(e,t,n,r){ip(r),t=js(t,"onChange"),0<t.length&&(n=new Kl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Xr=null;function Cx(e){Dp(e,0)}function no(e){var t=An(e);if(qh(t))return e}function Sx(e,t){if(e==="change")return t}var Pp=!1;if(yt){var Vo;if(yt){var Do="oninput"in document;if(!Do){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),Do=typeof Fu.oninput=="function"}Vo=Do}else Vo=!1;Pp=Vo&&(!document.documentMode||9<document.documentMode)}function Vu(){Ar&&(Ar.detachEvent("onpropertychange",Ep),Xr=Ar=null)}function Ep(e){if(e.propertyName==="value"&&no(Xr)){var t=[];Tp(t,Xr,e,zl(e)),lp(Cx,t)}}function kx(e,t,n){e==="focusin"?(Vu(),Ar=t,Xr=n,Ar.attachEvent("onpropertychange",Ep)):e==="focusout"&&Vu()}function Tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Xr)}function Px(e,t){if(e==="click")return no(t)}function Ex(e,t){if(e==="input"||e==="change")return no(t)}function Rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Rx;function Qr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ga.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function Rp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lp(){for(var e=window,t=gs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gs(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lx(e){var t=Lp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rp(n.ownerDocument.documentElement,n)){if(r!==null&&Ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ou(n,s);var o=Ou(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ax=yt&&"documentMode"in document&&11>=document.documentMode,Rn=null,Ia=null,Mr=null,Fa=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fa||Rn==null||Rn!==gs(r)||(r=Rn,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Qr(Mr,r)||(Mr=r,r=js(Ia,"onSelect"),0<r.length&&(t=new Kl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function Li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},Oo={},Ap={};yt&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function ro(e){if(Oo[e])return Oo[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ap)return Oo[e]=t[n];return e}var Mp=ro("animationend"),_p=ro("animationiteration"),Ip=ro("animationstart"),Fp=ro("transitionend"),Vp=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Vp.set(e,t),wn(t,[e])}for(var Bo=0;Bo<zu.length;Bo++){var zo=zu[Bo],Mx=zo.toLowerCase(),_x=zo[0].toUpperCase()+zo.slice(1);Kt(Mx,"on"+_x)}Kt(Mp,"onAnimationEnd");Kt(_p,"onAnimationIteration");Kt(Ip,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Fp,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function Hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mv(r,t,void 0,e),e.currentTarget=null}function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Hu(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Hu(i,l,u),s=c}}}if(xs)throw e=La,xs=!1,La=null,e}function U(e,t){var n=t[za];n===void 0&&(n=t[za]=new Set);var r=e+"__bubble";n.has(r)||(Op(t,e,2,!1),n.add(r))}function Ho(e,t,n){var r=0;t&&(r|=4),Op(n,e,r,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Ai]){e[Ai]=!0,Gh.forEach(function(n){n!=="selectionchange"&&(Ix.has(n)||Ho(n,!1,e),Ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Ho("selectionchange",!1,t))}}function Op(e,t,n,r){switch(Np(t)){case 1:var i=Xv;break;case 4:i=Qv;break;default:i=Wl}n=i.bind(null,t,n,e),i=void 0,!Ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Uo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=an(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lp(function(){var u=s,d=zl(n),f=[];e:{var h=Vp.get(e);if(h!==void 0){var v=Kl,x=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":v=dx;break;case"focusin":x="focus",v=Fo;break;case"focusout":x="blur",v=Fo;break;case"beforeblur":case"afterblur":v=Fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=px;break;case Mp:case _p:case Ip:v=nx;break;case Fp:v=gx;break;case"scroll":v=qv;break;case"wheel":v=xx;break;case"copy":case"cut":case"paste":v=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Au}var w=(t&4)!==0,N=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,g;p!==null;){g=p;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Wr(p,m),b!=null&&w.push(Zr(p,b,g)))),N)break;p=p.return}0<w.length&&(h=new v(h,x,null,n,d),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Pa&&(x=n.relatedTarget||n.fromElement)&&(an(x)||x[wt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?an(x):null,x!==null&&(N=bn(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=Ru,b="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Au,b="onPointerLeave",m="onPointerEnter",p="pointer"),N=v==null?h:An(v),g=x==null?h:An(x),h=new w(b,p+"leave",v,n,d),h.target=N,h.relatedTarget=g,b=null,an(d)===u&&(w=new w(m,p+"enter",x,n,d),w.target=g,w.relatedTarget=N,b=w),N=b,v&&x)t:{for(w=v,m=x,p=0,g=w;g;g=Sn(g))p++;for(g=0,b=m;b;b=Sn(b))g++;for(;0<p-g;)w=Sn(w),p--;for(;0<g-p;)m=Sn(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Sn(w),m=Sn(m)}w=null}else w=null;v!==null&&Uu(f,h,v,w,!1),x!==null&&N!==null&&Uu(f,N,x,w,!0)}}e:{if(h=u?An(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=Sx;else if(Iu(h))if(Pp)j=Ex;else{j=Tx;var k=kx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Px);if(j&&(j=j(e,u))){Tp(f,j,n,d);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&ja(h,"number",h.value)}switch(k=u?An(u):window,e){case"focusin":(Iu(k)||k.contentEditable==="true")&&(Rn=k,Ia=u,Mr=null);break;case"focusout":Mr=Ia=Rn=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Bu(f,n,d);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Bu(f,n,d)}var P;if(Xl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else En?Sp(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Cp&&n.locale!=="ko"&&(En||S!=="onCompositionStart"?S==="onCompositionEnd"&&En&&(P=jp()):(At=d,Gl="value"in At?At.value:At.textContent,En=!0)),k=js(u,S),0<k.length&&(S=new Lu(S,e,null,n,d),f.push({event:S,listeners:k}),P?S.data=P:(P=kp(n),P!==null&&(S.data=P)))),(P=wx?bx(e,n):Nx(e,n))&&(u=js(u,"onBeforeInput"),0<u.length&&(d=new Lu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=P))}Dp(f,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wr(e,n),s!=null&&r.unshift(Zr(e,s,i)),s=Wr(e,t),s!=null&&r.push(Zr(e,s,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Wr(n,s),c!=null&&o.unshift(Zr(n,c,l))):i||(c=Wr(n,s),c!=null&&o.push(Zr(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Fx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function $u(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Vx,"")}function Mi(e,t,n){if(t=$u(t),$u(e)!==t&&n)throw Error(C(425))}function Cs(){}var Va=null,Da=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(Bx)}:Ba;function Bx(e){setTimeout(function(){throw e})}function $o(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),nt="__reactFiber$"+lr,Jr="__reactProps$"+lr,wt="__reactContainer$"+lr,za="__reactEvents$"+lr,zx="__reactListeners$"+lr,Hx="__reactHandles$"+lr;function an(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[nt])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[nt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function io(e){return e[Jr]||null}var Ha=[],Mn=-1;function Yt(e){return{current:e}}function $(e){0>Mn||(e.current=Ha[Mn],Ha[Mn]=null,Mn--)}function H(e,t){Mn++,Ha[Mn]=e.current,e.current=t}var $t={},ye=Yt($t),ke=Yt(!1),pn=$t;function Zn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Ss(){$(ke),$(ye)}function Ku(e,t,n){if(ye.current!==$t)throw Error(C(168));H(ye,t),H(ke,n)}function Bp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,kv(e)||"Unknown",i));return X({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,pn=ye.current,H(ye,e),H(ke,ke.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Bp(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,$(ke),$(ye),H(ye,e)):$(ke),H(ke,n)}var ut=null,so=!1,Wo=!1;function zp(e){ut===null?ut=[e]:ut.push(e)}function Ux(e){so=!0,zp(e)}function Xt(){if(!Wo&&ut!==null){Wo=!0;var e=0,t=z;try{var n=ut;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,so=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),fp(Hl,Xt),i}finally{z=t,Wo=!1}}return null}var _n=[],In=0,Ts=null,Ps=0,Oe=[],Be=0,mn=null,dt=1,ft="";function nn(e,t){_n[In++]=Ps,_n[In++]=Ts,Ts=e,Ps=t}function Hp(e,t,n){Oe[Be++]=dt,Oe[Be++]=ft,Oe[Be++]=mn,mn=e;var r=dt;e=ft;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var s=32-Qe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Qe(t)+i|n<<i|r,ft=s+e}else dt=1<<s|n<<i|r,ft=e}function ql(e){e.return!==null&&(nn(e,1),Hp(e,1,0))}function Zl(e){for(;e===Ts;)Ts=_n[--In],_n[In]=null,Ps=_n[--In],_n[In]=null;for(;e===mn;)mn=Oe[--Be],Oe[Be]=null,ft=Oe[--Be],Oe[Be]=null,dt=Oe[--Be],Oe[Be]=null}var Ae=null,Re=null,W=!1,Xe=null;function Up(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Re=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Re=null,!0):!1;default:return!1}}function Ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $a(e){if(W){var t=Re;if(t){var n=t;if(!Xu(e,t)){if(Ua(e))throw Error(C(418));t=Vt(n.nextSibling);var r=Ae;t&&Xu(e,t)?Up(r,n):(e.flags=e.flags&-4097|2,W=!1,Ae=e)}}else{if(Ua(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,Ae=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function _i(e){if(e!==Ae)return!1;if(!W)return Qu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=Re)){if(Ua(e))throw $p(),Error(C(418));for(;t;)Up(e,t),t=Vt(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ae?Vt(e.stateNode.nextSibling):null;return!0}function $p(){for(var e=Re;e;)e=Vt(e.nextSibling)}function Jn(){Re=Ae=null,W=!1}function Jl(e){Xe===null?Xe=[e]:Xe.push(e)}var $x=jt.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function Wp(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=zt(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,b){return p===null||p.tag!==6?(p=Zo(g,m.mode,b),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g,b){var j=g.type;return j===Pn?d(m,p,g.props.children,b,g.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pt&&qu(j)===p.type)?(b=i(p,g.props),b.ref=vr(m,p,g),b.return=m,b):(b=as(g.type,g.key,g.props,null,m.mode,b),b.ref=vr(m,p,g),b.return=m,b)}function u(m,p,g,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Jo(g,m.mode,b),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,b,j){return p===null||p.tag!==7?(p=fn(g,m.mode,b,j),p.return=m,p):(p=i(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Zo(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ci:return g=as(p.type,p.key,p.props,null,m.mode,g),g.ref=vr(m,null,p),g.return=m,g;case Tn:return p=Jo(p,m.mode,g),p.return=m,p;case Pt:var b=p._init;return f(m,b(p._payload),g)}if(jr(p)||fr(p))return p=fn(p,m.mode,g,null),p.return=m,p;Ii(m,p)}return null}function h(m,p,g,b){var j=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:l(m,p,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ci:return g.key===j?c(m,p,g,b):null;case Tn:return g.key===j?u(m,p,g,b):null;case Pt:return j=g._init,h(m,p,j(g._payload),b)}if(jr(g)||fr(g))return j!==null?null:d(m,p,g,b,null);Ii(m,g)}return null}function v(m,p,g,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,l(p,m,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ci:return m=m.get(b.key===null?g:b.key)||null,c(p,m,b,j);case Tn:return m=m.get(b.key===null?g:b.key)||null,u(p,m,b,j);case Pt:var k=b._init;return v(m,p,g,k(b._payload),j)}if(jr(b)||fr(b))return m=m.get(g)||null,d(p,m,b,j,null);Ii(p,b)}return null}function x(m,p,g,b){for(var j=null,k=null,P=p,S=p=0,V=null;P!==null&&S<g.length;S++){P.index>S?(V=P,P=null):V=P.sibling;var A=h(m,P,g[S],b);if(A===null){P===null&&(P=V);break}e&&P&&A.alternate===null&&t(m,P),p=s(A,p,S),k===null?j=A:k.sibling=A,k=A,P=V}if(S===g.length)return n(m,P),W&&nn(m,S),j;if(P===null){for(;S<g.length;S++)P=f(m,g[S],b),P!==null&&(p=s(P,p,S),k===null?j=P:k.sibling=P,k=P);return W&&nn(m,S),j}for(P=r(m,P);S<g.length;S++)V=v(P,m,S,g[S],b),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?S:V.key),p=s(V,p,S),k===null?j=V:k.sibling=V,k=V);return e&&P.forEach(function(ie){return t(m,ie)}),W&&nn(m,S),j}function w(m,p,g,b){var j=fr(g);if(typeof j!="function")throw Error(C(150));if(g=j.call(g),g==null)throw Error(C(151));for(var k=j=null,P=p,S=p=0,V=null,A=g.next();P!==null&&!A.done;S++,A=g.next()){P.index>S?(V=P,P=null):V=P.sibling;var ie=h(m,P,A.value,b);if(ie===null){P===null&&(P=V);break}e&&P&&ie.alternate===null&&t(m,P),p=s(ie,p,S),k===null?j=ie:k.sibling=ie,k=ie,P=V}if(A.done)return n(m,P),W&&nn(m,S),j;if(P===null){for(;!A.done;S++,A=g.next())A=f(m,A.value,b),A!==null&&(p=s(A,p,S),k===null?j=A:k.sibling=A,k=A);return W&&nn(m,S),j}for(P=r(m,P);!A.done;S++,A=g.next())A=v(P,m,S,A.value,b),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?S:A.key),p=s(A,p,S),k===null?j=A:k.sibling=A,k=A);return e&&P.forEach(function(Ct){return t(m,Ct)}),W&&nn(m,S),j}function N(m,p,g,b){if(typeof g=="object"&&g!==null&&g.type===Pn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ci:e:{for(var j=g.key,k=p;k!==null;){if(k.key===j){if(j=g.type,j===Pn){if(k.tag===7){n(m,k.sibling),p=i(k,g.props.children),p.return=m,m=p;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Pt&&qu(j)===k.type){n(m,k.sibling),p=i(k,g.props),p.ref=vr(m,k,g),p.return=m,m=p;break e}n(m,k);break}else t(m,k);k=k.sibling}g.type===Pn?(p=fn(g.props.children,m.mode,b,g.key),p.return=m,m=p):(b=as(g.type,g.key,g.props,null,m.mode,b),b.ref=vr(m,p,g),b.return=m,m=b)}return o(m);case Tn:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Jo(g,m.mode,b),p.return=m,m=p}return o(m);case Pt:return k=g._init,N(m,p,k(g._payload),b)}if(jr(g))return x(m,p,g,b);if(fr(g))return w(m,p,g,b);Ii(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Zo(g,m.mode,b),p.return=m,m=p),o(m)):n(m,p)}return N}var er=Wp(!0),Gp=Wp(!1),Es=Yt(null),Rs=null,Fn=null,ec=null;function tc(){ec=Fn=Rs=null}function nc(e){var t=Es.current;$(Es),e._currentValue=t}function Wa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){Rs=e,ec=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(ec!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Rs===null)throw Error(C(308));Fn=e,Rs.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var ln=null;function rc(e){ln===null?ln=[e]:ln.push(e)}function Kp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,rc(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,rc(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ul(e,n)}}function Zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,r){var i=e.updateQueue;Et=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(h=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(v,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(v,f,h):x,h==null)break e;f=X({},f,h);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=f):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);vn|=o,e.lanes=o,e.memoizedState=f}}function Ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var pi={},st=Yt(pi),ei=Yt(pi),ti=Yt(pi);function cn(e){if(e===pi)throw Error(C(174));return e}function sc(e,t){switch(H(ti,t),H(ei,e),H(st,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sa(t,e)}$(st),H(st,t)}function tr(){$(st),$(ei),$(ti)}function Xp(e){cn(ti.current);var t=cn(st.current),n=Sa(t,e.type);t!==n&&(H(ei,e),H(st,n))}function oc(e){ei.current===e&&($(st),$(ei))}var G=Yt(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function ac(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var ns=jt.ReactCurrentDispatcher,Ko=jt.ReactCurrentBatchConfig,gn=0,Y=null,ne=null,ae=null,Ms=!1,_r=!1,ni=0,Wx=0;function pe(){throw Error(C(321))}function lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function cc(e,t,n,r,i,s){if(gn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ns.current=e===null||e.memoizedState===null?Xx:Qx,e=n(r,i),_r){s=0;do{if(_r=!1,ni=0,25<=s)throw Error(C(301));s+=1,ae=ne=null,t.updateQueue=null,ns.current=qx,e=n(r,i)}while(_r)}if(ns.current=_s,t=ne!==null&&ne.next!==null,gn=0,ae=ne=Y=null,Ms=!1,t)throw Error(C(300));return e}function uc(){var e=ni!==0;return ni=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Y.memoizedState=ae=e:ae=ae.next=e,ae}function $e(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ae===null?Y.memoizedState:ae.next;if(t!==null)ae=t,ne=e;else{if(e===null)throw Error(C(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?Y.memoizedState=ae=e:ae=ae.next=e}return ae}function ri(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=$e(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((gn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,Y.lanes|=d,vn|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,vn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=$e(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ze(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qp(){}function qp(e,t){var n=Y,r=$e(),i=t(),s=!Ze(r.memoizedState,i);if(s&&(r.memoizedState=i,Se=!0),r=r.queue,dc(em.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,ii(9,Jp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(C(349));gn&30||Zp(n,t,i)}return i}function Zp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jp(e,t,n,r){t.value=n,t.getSnapshot=r,tm(t)&&nm(e)}function em(e,t,n){return n(function(){tm(t)&&nm(e)})}function tm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function nm(e){var t=bt(e,1);t!==null&&qe(t,e,1,-1)}function ed(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},t.queue=e,e=e.dispatch=Yx.bind(null,Y,e),[t.memoizedState,e]}function ii(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rm(){return $e().memoizedState}function rs(e,t,n,r){var i=tt();Y.flags|=e,i.memoizedState=ii(1|t,n,void 0,r===void 0?null:r)}function oo(e,t,n,r){var i=$e();r=r===void 0?null:r;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,r!==null&&lc(r,o.deps)){i.memoizedState=ii(t,n,s,r);return}}Y.flags|=e,i.memoizedState=ii(1|t,n,s,r)}function td(e,t){return rs(8390656,8,e,t)}function dc(e,t){return oo(2048,8,e,t)}function im(e,t){return oo(4,2,e,t)}function sm(e,t){return oo(4,4,e,t)}function om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function am(e,t,n){return n=n!=null?n.concat([e]):null,oo(4,4,om.bind(null,t,e),n)}function fc(){}function lm(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cm(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function um(e,t,n){return gn&21?(Ze(n,t)||(n=mp(),Y.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Gx(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Ko.transition;Ko.transition={};try{e(!1),t()}finally{z=n,Ko.transition=r}}function dm(){return $e().memoizedState}function Kx(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fm(e))hm(t,n);else if(n=Kp(e,t,n,r),n!==null){var i=be();qe(n,e,r,i),pm(n,t,r)}}function Yx(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fm(e))hm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,o)){var c=t.interleaved;c===null?(i.next=i,rc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Kp(e,t,i,r),n!==null&&(i=be(),qe(n,e,r,i),pm(n,t,r))}}function fm(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function hm(e,t){_r=Ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ul(e,n)}}var _s={readContext:Ue,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Xx={readContext:Ue,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rs(4194308,4,om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kx.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:fc,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Gx.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=tt();if(W){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),le===null)throw Error(C(349));gn&30||Zp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,td(em.bind(null,r,s,e),[e]),r.flags|=2048,ii(9,Jp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=tt(),t=le.identifierPrefix;if(W){var n=ft,r=dt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qx={readContext:Ue,useCallback:lm,useContext:Ue,useEffect:dc,useImperativeHandle:am,useInsertionEffect:im,useLayoutEffect:sm,useMemo:cm,useReducer:Yo,useRef:rm,useState:function(){return Yo(ri)},useDebugValue:fc,useDeferredValue:function(e){var t=$e();return um(t,ne.memoizedState,e)},useTransition:function(){var e=Yo(ri)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Qp,useSyncExternalStore:qp,useId:dm,unstable_isNewReconciler:!1},qx={readContext:Ue,useCallback:lm,useContext:Ue,useEffect:dc,useImperativeHandle:am,useInsertionEffect:im,useLayoutEffect:sm,useMemo:cm,useReducer:Xo,useRef:rm,useState:function(){return Xo(ri)},useDebugValue:fc,useDeferredValue:function(e){var t=$e();return ne===null?t.memoizedState=e:um(t,ne.memoizedState,e)},useTransition:function(){var e=Xo(ri)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Qp,useSyncExternalStore:qp,useId:dm,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ga(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ao={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Bt(e),s=pt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,i),t!==null&&(qe(t,e,i,r),ts(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Bt(e),s=pt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,i),t!==null&&(qe(t,e,i,r),ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Bt(e),i=pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(qe(t,e,r,n),ts(t,e,r))}};function nd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(i,s):!0}function mm(e,t,n){var r=!1,i=$t,s=t.contextType;return typeof s=="object"&&s!==null?s=Ue(s):(i=Te(t)?pn:ye.current,r=t.contextTypes,s=(r=r!=null)?Zn(e,i):$t),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function rd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function Ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ic(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ue(s):(s=Te(t)?pn:ye.current,i.context=Zn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ga(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ao.enqueueReplaceState(i,i.state,null),Ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=Sv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zx=typeof WeakMap=="function"?WeakMap:Map;function gm(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fs||(Fs=!0,il=r),Ya(e,t)},n}function vm(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ya(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ya(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fy.bind(null,e,t,n),t.then(e,e))}function sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function od(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Jx=jt.ReactCurrentOwner,Se=!1;function we(e,t,n,r){t.child=e===null?Gp(t,null,n,r):er(t,e.child,n,r)}function ad(e,t,n,r,i){n=n.render;var s=t.ref;return Yn(t,i),r=cc(e,t,n,r,s,i),n=uc(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(W&&n&&ql(t),t.flags|=1,we(e,t,r,i),t.child)}function ld(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!wc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,xm(e,t,s,r,i)):(e=as(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(o,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=zt(s,r),e.ref=t.ref,e.return=t,t.child=e}function xm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Qr(s,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Xa(e,t,n,r,i)}function ym(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Dn,Ee),Ee|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Dn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(Dn,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(Dn,Ee),Ee|=r;return we(e,t,i,n),t.child}function wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xa(e,t,n,r,i){var s=Te(n)?pn:ye.current;return s=Zn(t,s),Yn(t,i),n=cc(e,t,n,r,s,i),r=uc(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(W&&r&&ql(t),t.flags|=1,we(e,t,n,i),t.child)}function cd(e,t,n,r,i){if(Te(n)){var s=!0;ks(t)}else s=!1;if(Yn(t,i),t.stateNode===null)is(e,t),mm(t,n,r),Ka(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Te(n)?pn:ye.current,u=Zn(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&rd(t,o,r,u),Et=!1;var h=t.memoizedState;o.state=h,Ls(t,r,o,i),c=t.memoizedState,l!==r||h!==c||ke.current||Et?(typeof d=="function"&&(Ga(t,n,d,r),c=t.memoizedState),(l=Et||nd(t,n,l,r,h,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Yp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ke(t.type,l),o.props=u,f=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ue(c):(c=Te(n)?pn:ye.current,c=Zn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||h!==c)&&rd(t,o,r,c),Et=!1,h=t.memoizedState,o.state=h,Ls(t,r,o,i);var x=t.memoizedState;l!==f||h!==x||ke.current||Et?(typeof v=="function"&&(Ga(t,n,v,r),x=t.memoizedState),(u=Et||nd(t,n,u,r,h,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Qa(e,t,n,r,s,i)}function Qa(e,t,n,r,i,s){wm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Yu(t,n,!1),Nt(e,t,s);r=t.stateNode,Jx.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=er(t,e.child,null,s),t.child=er(t,null,l,s)):we(e,t,l,s),t.memoizedState=r.state,i&&Yu(t,n,!0),t.child}function bm(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),sc(e,t.containerInfo)}function ud(e,t,n,r,i){return Jn(),Jl(i),t.flags|=256,we(e,t,n,r),t.child}var qa={dehydrated:null,treeContext:null,retryLane:0};function Za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nm(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(G,i&1),e===null)return $a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uo(o,r,0,null),e=fn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Za(n),t.memoizedState=qa,e):hc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ey(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=zt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zt(l,s):(s=fn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Za(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=qa,r}return s=e.child,e=s.sibling,r=zt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hc(e,t){return t=uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&Jl(r),er(t,e.child,null,n),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ey(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Qo(Error(C(422))),Fi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=uo({mode:"visible",children:r.children},i,0,null),s=fn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&er(t,e.child,null,o),t.child.memoizedState=Za(o),t.memoizedState=qa,s);if(!(t.mode&1))return Fi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Qo(s,r,void 0),Fi(e,t,o,r)}if(l=(o&e.childLanes)!==0,Se||l){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bt(e,i),qe(r,e,i,-1))}return yc(),r=Qo(Error(C(421))),Fi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hy.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Re=Vt(i.nextSibling),Ae=t,W=!0,Xe=null,e!==null&&(Oe[Be++]=dt,Oe[Be++]=ft,Oe[Be++]=mn,dt=e.id,ft=e.overflow,mn=t),t=hc(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wa(e.return,t,n)}function qo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(we(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&As(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&As(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qo(t,!0,n,null,s);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function is(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ty(e,t,n){switch(t.tag){case 3:bm(t),Jn();break;case 5:Xp(t);break;case 1:Te(t.type)&&ks(t);break;case 4:sc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Nm(e,t,n):(H(G,G.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);H(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,ym(e,t,n)}return Nt(e,t,n)}var Cm,Ja,Sm,km;Cm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ja=function(){};Sm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cn(st.current);var s=null;switch(n){case"input":i=ba(e,i),r=ba(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Ca(e,i),r=Ca(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cs)}ka(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};km=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ny(e,t,n){var r=t.pendingProps;switch(Zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Te(t.type)&&Ss(),me(t),null;case 3:return r=t.stateNode,tr(),$(ke),$(ye),ac(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(al(Xe),Xe=null))),Ja(e,t),me(t),null;case 5:oc(t);var i=cn(ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Sm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return me(t),null}if(e=cn(st.current),_i(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[nt]=t,r[Jr]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Sr.length;i++)U(Sr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":wu(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":Nu(r,s),U("invalid",r)}ka(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",""+l]):Ur.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":Si(r),bu(r,s,!0);break;case"textarea":Si(r),ju(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[Jr]=r,Cm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ta(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sr.length;i++)U(Sr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":wu(e,r),i=ba(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),U("invalid",e);break;case"textarea":Nu(e,r),i=Ca(e,r),U("invalid",e);break;default:i=r}ka(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?rp(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&tp(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$r(e,c):typeof c=="number"&&$r(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ur.hasOwnProperty(s)?c!=null&&s==="onScroll"&&U("scroll",e):c!=null&&Vl(e,s,c,o))}switch(n){case"input":Si(e),bu(e,r,!1);break;case"textarea":Si(e),ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?$n(e,!!r.multiple,s,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)km(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=cn(ti.current),cn(st.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(s=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return me(t),null;case 13:if($(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Re!==null&&t.mode&1&&!(t.flags&128))$p(),Jn(),t.flags|=98560,s=!1;else if(s=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[nt]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else Xe!==null&&(al(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):yc())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return tr(),Ja(e,t),e===null&&qr(t.stateNode.containerInfo),me(t),null;case 10:return nc(t.type._context),me(t),null;case 17:return Te(t.type)&&Ss(),me(t),null;case 19:if($(G),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)xr(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=As(e),o!==null){for(t.flags|=128,xr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>rr&&(t.flags|=128,r=!0,xr(s,!1),t.lanes=4194304)}else{if(!r)if(e=As(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return me(t),null}else 2*J()-s.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,xr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=G.current,H(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function ry(e,t){switch(Zl(t),t.tag){case 1:return Te(t.type)&&Ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),$(ke),$(ye),ac(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oc(t),null;case 13:if($(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(G),null;case 4:return tr(),null;case 10:return nc(t.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Vi=!1,ve=!1,iy=typeof WeakSet=="function"?WeakSet:Set,E=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Q(e,t,r)}}var fd=!1;function sy(e,t){if(Va=bs,e=Lp(),Ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(c=o),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:e,selectionRange:n},bs=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,N=x.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ke(t.type,w),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(b){Q(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=fd,fd=!1,x}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&el(t,n,s)}i=i.next}while(i!==r)}}function lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tm(e){var t=e.alternate;t!==null&&(e.alternate=null,Tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Jr],delete t[za],delete t[zx],delete t[Hx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pm(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cs));else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}var ue=null,Ye=!1;function St(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(eo,n)}catch{}switch(n.tag){case 5:ve||Vn(n,t);case 6:var r=ue,i=Ye;ue=null,St(e,t,n),ue=r,Ye=i,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?$o(e.parentNode,n):e.nodeType===1&&$o(e,n),Yr(e)):$o(ue,n.stateNode));break;case 4:r=ue,i=Ye,ue=n.stateNode.containerInfo,Ye=!0,St(e,t,n),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&el(n,t,o),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ve&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,St(e,t,n),ve=r):St(e,t,n);break;default:St(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iy),t.forEach(function(r){var i=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ye=!1;break e;case 3:ue=l.stateNode.containerInfo,Ye=!0;break e;case 4:ue=l.stateNode.containerInfo,Ye=!0;break e}l=l.return}if(ue===null)throw Error(C(160));Em(s,o,i),ue=null,Ye=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rm(t,e),t=t.sibling}function Rm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),r&4){try{Ir(3,e,e.return),lo(3,e)}catch(w){Q(e,e.return,w)}try{Ir(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:We(t,e),et(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(We(t,e),et(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zh(i,s),Ta(l,o);var u=Ta(l,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?rp(i,f):d==="dangerouslySetInnerHTML"?tp(i,f):d==="children"?$r(i,f):Vl(i,d,f,u)}switch(l){case"input":Na(i,s);break;case"textarea":Jh(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?$n(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?$n(i,!!s.multiple,s.defaultValue,!0):$n(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jr]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(We(t,e),et(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(We(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gc=J())),r&4&&pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||d,We(t,e),ve=u):We(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(h=E,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ir(4,h,h.return);break;case 1:Vn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:Vn(h,h.return);break;case 22:if(h.memoizedState!==null){gd(f);continue}}v!==null?(v.return=h,E=v):gd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=np("display",o))}catch(w){Q(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(t,e),et(e),r&4&&pd(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pm(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var s=hd(e);rl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hd(e);nl(e,l,o);break;default:throw Error(C(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oy(e,t,n){E=e,Lm(e)}function Lm(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vi;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ve;l=Vi;var u=ve;if(Vi=o,(ve=c)&&!u)for(E=i;E!==null;)o=E,c=o.child,o.tag===22&&o.memoizedState!==null?vd(i):c!==null?(c.return=o,E=c):vd(i);for(;s!==null;)E=s,Lm(s),s=s.sibling;E=i,Vi=l,ve=u}md(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):md(e)}}function md(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ju(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ju(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||t.flags&512&&tl(t)}catch(h){Q(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function gd(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function vd(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{lo(4,t)}catch(c){Q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Q(t,i,c)}}var s=t.return;try{tl(t)}catch(c){Q(t,s,c)}break;case 5:var o=t.return;try{tl(t)}catch(c){Q(t,o,c)}}}catch(c){Q(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var ay=Math.ceil,Is=jt.ReactCurrentDispatcher,pc=jt.ReactCurrentOwner,He=jt.ReactCurrentBatchConfig,O=0,le=null,ee=null,de=0,Ee=0,Dn=Yt(0),re=0,si=null,vn=0,co=0,mc=0,Fr=null,Ce=null,gc=0,rr=1/0,ct=null,Fs=!1,il=null,Ot=null,Di=!1,Mt=null,Vs=0,Vr=0,sl=null,ss=-1,os=0;function be(){return O&6?J():ss!==-1?ss:ss=J()}function Bt(e){return e.mode&1?O&2&&de!==0?de&-de:$x.transition!==null?(os===0&&(os=mp()),os):(e=z,e!==0||(e=window.event,e=e===void 0?16:Np(e.type)),e):1}function qe(e,t,n,r){if(50<Vr)throw Vr=0,sl=null,Error(C(185));di(e,n,r),(!(O&2)||e!==le)&&(e===le&&(!(O&2)&&(co|=n),re===4&&Lt(e,de)),Pe(e,r),n===1&&O===0&&!(t.mode&1)&&(rr=J()+500,so&&Xt()))}function Pe(e,t){var n=e.callbackNode;$v(e,t);var r=ws(e,e===le?de:0);if(r===0)n!==null&&ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ku(n),t===1)e.tag===0?Ux(xd.bind(null,e)):zp(xd.bind(null,e)),Ox(function(){!(O&6)&&Xt()}),n=null;else{switch(gp(r)){case 1:n=Hl;break;case 4:n=hp;break;case 16:n=ys;break;case 536870912:n=pp;break;default:n=ys}n=Om(n,Am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Am(e,t){if(ss=-1,os=0,O&6)throw Error(C(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=ws(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ds(e,r);else{t=r;var i=O;O|=2;var s=_m();(le!==e||de!==t)&&(ct=null,rr=J()+500,dn(e,t));do try{uy();break}catch(l){Mm(e,l)}while(!0);tc(),Is.current=s,O=i,ee!==null?t=0:(le=null,de=0,t=re)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=ol(e,i))),t===1)throw n=si,dn(e,0),Lt(e,r),Pe(e,J()),n;if(t===6)Lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ly(i)&&(t=Ds(e,r),t===2&&(s=Aa(e),s!==0&&(r=s,t=ol(e,s))),t===1))throw n=si,dn(e,0),Lt(e,r),Pe(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:rn(e,Ce,ct);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=gc+500-J(),10<t)){if(ws(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ba(rn.bind(null,e,Ce,ct),t);break}rn(e,Ce,ct);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Qe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ay(r/1960))-r,10<r){e.timeoutHandle=Ba(rn.bind(null,e,Ce,ct),r);break}rn(e,Ce,ct);break;case 5:rn(e,Ce,ct);break;default:throw Error(C(329))}}}return Pe(e,J()),e.callbackNode===n?Am.bind(null,e):null}function ol(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&al(t)),e}function al(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~mc,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function xd(e){if(O&6)throw Error(C(327));Xn();var t=ws(e,0);if(!(t&1))return Pe(e,J()),null;var n=Ds(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=ol(e,r))}if(n===1)throw n=si,dn(e,0),Lt(e,t),Pe(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ce,ct),Pe(e,J()),null}function vc(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(rr=J()+500,so&&Xt())}}function xn(e){Mt!==null&&Mt.tag===0&&!(O&6)&&Xn();var t=O;O|=1;var n=He.transition,r=z;try{if(He.transition=null,z=1,e)return e()}finally{z=r,He.transition=n,O=t,!(O&6)&&Xt()}}function xc(){Ee=Dn.current,$(Dn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dx(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ss();break;case 3:tr(),$(ke),$(ye),ac();break;case 5:oc(r);break;case 4:tr();break;case 13:$(G);break;case 19:$(G);break;case 10:nc(r.type._context);break;case 22:case 23:xc()}n=n.return}if(le=e,ee=e=zt(e.current,null),de=Ee=t,re=0,si=null,mc=co=vn=0,Ce=Fr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ln=null}return e}function Mm(e,t){do{var n=ee;try{if(tc(),ns.current=_s,Ms){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ms=!1}if(gn=0,ae=ne=Y=null,_r=!1,ni=0,pc.current=null,n===null||n.return===null){re=1,si=t,ee=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=de,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=sd(o);if(v!==null){v.flags&=-257,od(v,o,l,s,t),v.mode&1&&id(s,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){id(s,u,t),yc();break e}c=Error(C(426))}}else if(W&&l.mode&1){var N=sd(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),od(N,o,l,s,t),Jl(nr(c,l));break e}}s=c=nr(c,l),re!==4&&(re=2),Fr===null?Fr=[s]:Fr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=gm(s,c,t);Zu(s,m);break e;case 1:l=c;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ot===null||!Ot.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=vm(s,l,t);Zu(s,b);break e}}s=s.return}while(s!==null)}Fm(n)}catch(j){t=j,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function _m(){var e=Is.current;return Is.current=_s,e===null?_s:e}function yc(){(re===0||re===3||re===2)&&(re=4),le===null||!(vn&268435455)&&!(co&268435455)||Lt(le,de)}function Ds(e,t){var n=O;O|=2;var r=_m();(le!==e||de!==t)&&(ct=null,dn(e,t));do try{cy();break}catch(i){Mm(e,i)}while(!0);if(tc(),O=n,Is.current=r,ee!==null)throw Error(C(261));return le=null,de=0,re}function cy(){for(;ee!==null;)Im(ee)}function uy(){for(;ee!==null&&!Iv();)Im(ee)}function Im(e){var t=Dm(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Fm(e):ee=t,pc.current=null}function Fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ry(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=ny(n,t,Ee),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function rn(e,t,n){var r=z,i=He.transition;try{He.transition=null,z=1,dy(e,t,n,r)}finally{He.transition=i,z=r}return null}function dy(e,t,n,r){do Xn();while(Mt!==null);if(O&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wv(e,s),e===le&&(ee=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Di||(Di=!0,Om(ys,function(){return Xn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var o=z;z=1;var l=O;O|=4,pc.current=null,sy(e,n),Rm(n,e),Lx(Da),bs=!!Va,Da=Va=null,e.current=n,oy(n),Fv(),O=l,z=o,He.transition=s}else e.current=n;if(Di&&(Di=!1,Mt=e,Vs=i),s=e.pendingLanes,s===0&&(Ot=null),Ov(n.stateNode),Pe(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fs)throw Fs=!1,e=il,il=null,e;return Vs&1&&e.tag!==0&&Xn(),s=e.pendingLanes,s&1?e===sl?Vr++:(Vr=0,sl=e):Vr=0,Xt(),null}function Xn(){if(Mt!==null){var e=gp(Vs),t=He.transition,n=z;try{if(He.transition=null,z=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Vs=0,O&6)throw Error(C(331));var i=O;for(O|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Ir(8,d,s)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var h=d.sibling,v=d.return;if(Tm(d),d===u){E=null;break}if(h!==null){h.return=v,E=h;break}E=v}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ir(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,E=m;break e}E=s.return}}var p=e.current;for(E=p;E!==null;){o=E;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,E=g;else e:for(o=p;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:lo(9,l)}}catch(j){Q(l,l.return,j)}if(l===o){E=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,E=b;break e}E=l.return}}if(O=i,Xt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{z=n,He.transition=t}}return!1}function yd(e,t,n){t=nr(n,t),t=gm(e,t,1),e=Dt(e,t,1),t=be(),e!==null&&(di(e,1,t),Pe(e,t))}function Q(e,t,n){if(e.tag===3)yd(e,e,n);else for(;t!==null;){if(t.tag===3){yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=nr(n,e),e=vm(t,e,1),t=Dt(t,e,1),e=be(),t!==null&&(di(t,1,e),Pe(t,e));break}}t=t.return}}function fy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(re===4||re===3&&(de&130023424)===de&&500>J()-gc?dn(e,0):mc|=n),Pe(e,t)}function Vm(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(di(e,t,n),Pe(e,n))}function hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vm(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Vm(e,n)}var Dm;Dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,ty(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Hp(t,Ps,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;is(e,t),e=t.pendingProps;var i=Zn(t,ye.current);Yn(t,n),i=cc(null,t,r,e,i,n);var s=uc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(s=!0,ks(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ic(t),i.updater=ao,t.stateNode=i,i._reactInternals=t,Ka(t,r,e,n),t=Qa(null,t,r,!0,s,n)):(t.tag=0,W&&s&&ql(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(is(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gy(r),e=Ke(r,e),i){case 0:t=Xa(null,t,r,e,n);break e;case 1:t=cd(null,t,r,e,n);break e;case 11:t=ad(null,t,r,e,n);break e;case 14:t=ld(null,t,r,Ke(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Xa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),cd(e,t,r,i,n);case 3:e:{if(bm(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Yp(e,t),Ls(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=nr(Error(C(423)),t),t=ud(e,t,r,n,i);break e}else if(r!==i){i=nr(Error(C(424)),t),t=ud(e,t,r,n,i);break e}else for(Re=Vt(t.stateNode.containerInfo.firstChild),Ae=t,W=!0,Xe=null,n=Gp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===i){t=Nt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Xp(t),e===null&&$a(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(t.flags|=32),wm(e,t),we(e,t,o,n),t.child;case 6:return e===null&&$a(t),null;case 13:return Nm(e,t,n);case 4:return sc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),ad(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Es,r._currentValue),r._currentValue=o,s!==null)if(Ze(s.value,o)){if(s.children===i.children&&!ke.current){t=Nt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=pt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Wa(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=Ue(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),ld(e,t,r,i,n);case 15:return xm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),is(e,t),t.tag=1,Te(r)?(e=!0,ks(t)):e=!1,Yn(t,n),mm(t,r,i),Ka(t,r,i,n),Qa(null,t,r,!0,e,n);case 19:return jm(e,t,n);case 22:return ym(e,t,n)}throw Error(C(156,t.tag))};function Om(e,t){return fp(e,t)}function my(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new my(e,t,n,r)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return wc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ol)return 11;if(e===Bl)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function as(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")wc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pn:return fn(n.children,i,s,t);case Dl:o=8,i|=8;break;case va:return e=ze(12,n,t,i|2),e.elementType=va,e.lanes=s,e;case xa:return e=ze(13,n,t,i),e.elementType=xa,e.lanes=s,e;case ya:return e=ze(19,n,t,i),e.elementType=ya,e.lanes=s,e;case Xh:return uo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kh:o=10;break e;case Yh:o=9;break e;case Ol:o=11;break e;case Bl:o=14;break e;case Pt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=ze(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function fn(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function uo(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Xh,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function Jo(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mo(0),this.expirationTimes=Mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bc(e,t,n,r,i,s,o,l,c){return e=new vy(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(s),e}function xy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bm(e){if(!e)return $t;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Te(n))return Bp(e,n,t)}return t}function zm(e,t,n,r,i,s,o,l,c){return e=bc(n,r,!0,e,i,s,o,l,c),e.context=Bm(null),n=e.current,r=be(),i=Bt(n),s=pt(r,i),s.callback=t??null,Dt(n,s,i),e.current.lanes=i,di(e,i,r),Pe(e,r),e}function fo(e,t,n,r){var i=t.current,s=be(),o=Bt(i);return n=Bm(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,o),e!==null&&(qe(e,i,o,s),ts(e,i,o)),o}function Os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nc(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function yy(){return null}var Hm=typeof reportError=="function"?reportError:function(e){console.error(e)};function jc(e){this._internalRoot=e}ho.prototype.render=jc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));fo(e,t,null,null)};ho.prototype.unmount=jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){fo(null,e,null,null)}),t[wt]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&bp(e)}};function Cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bd(){}function wy(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Os(o);s.call(u)}}var o=zm(t,r,e,0,null,!1,!1,"",bd);return e._reactRootContainer=o,e[wt]=o.current,qr(e.nodeType===8?e.parentNode:e),xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Os(c);l.call(u)}}var c=bc(e,0,!1,null,null,!1,!1,"",bd);return e._reactRootContainer=c,e[wt]=c.current,qr(e.nodeType===8?e.parentNode:e),xn(function(){fo(t,c,n,r)}),c}function mo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=Os(o);l.call(c)}}fo(t,o,e,i)}else o=wy(n,t,e,i,r);return Os(o)}vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(Ul(t,n|1),Pe(t,J()),!(O&6)&&(rr=J()+500,Xt()))}break;case 13:xn(function(){var r=bt(e,1);if(r!==null){var i=be();qe(r,e,1,i)}}),Nc(e,1)}};$l=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();qe(t,e,134217728,n)}Nc(e,134217728)}};xp=function(e){if(e.tag===13){var t=Bt(e),n=bt(e,t);if(n!==null){var r=be();qe(n,e,t,r)}Nc(e,t)}};yp=function(){return z};wp=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Ea=function(e,t,n){switch(t){case"input":if(Na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=io(r);if(!i)throw Error(C(90));qh(r),Na(r,i)}}}break;case"textarea":Jh(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};op=vc;ap=xn;var by={usingClientEntryPoint:!1,Events:[hi,An,io,ip,sp,vc]},yr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{eo=Oi.inject(Ny),it=Oi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(t))throw Error(C(200));return xy(e,t,null,n)};Ie.createRoot=function(e,t){if(!Cc(e))throw Error(C(299));var n=!1,r="",i=Hm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,qr(e.nodeType===8?e.parentNode:e),new jc(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return xn(e)};Ie.hydrate=function(e,t,n){if(!po(t))throw Error(C(200));return mo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Cc(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Hm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=zm(t,null,e,1,n??null,i,!1,s,o),e[wt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ho(t)};Ie.render=function(e,t,n){if(!po(t))throw Error(C(200));return mo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!po(e))throw Error(C(40));return e._reactRootContainer?(xn(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ie.unstable_batchedUpdates=vc;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!po(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return mo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Um)}catch(e){console.error(e)}}Um(),Uh.exports=Ie;var jy=Uh.exports,$m,Nd=jy;$m=Nd.createRoot,Nd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(null,arguments)}var cl;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cl||(cl={}));function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function go(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cd||(Cd={}));function Cy(e,t,n){return n===void 0&&(n="/"),Sy(e,t,n,!1)}function Sy(e,t,n,r){let i=typeof t=="string"?go(t):t,s=Km(i.pathname||"/",n);if(s==null)return null;let o=Wm(e);ky(o);let l=null,c=Vy(s);for(let u=0;l==null&&u<o.length;++u)l=Iy(o[u],c,r);return l}function Wm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ce(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ht([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wm(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:My(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of Gm(s.path))i(s,o,c)}),t}function Gm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Gm(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function ky(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_y(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ty=/^:[\w-]+$/,Py=3,Ey=2,Ry=1,Ly=10,Ay=-2,Sd=e=>e==="*";function My(e,t){let n=e.split("/"),r=n.length;return n.some(Sd)&&(r+=Ay),t&&(r+=Ey),n.filter(i=>!Sd(i)).reduce((i,s)=>i+(Ty.test(s)?Py:s===""?Ry:Ly),r)}function _y(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Iy(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=kd({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=kd({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ht([s,f.pathname]),pathnameBase:Hy(Ht([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ht([s,f.pathnameBase]))}return o}function kd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let w=l[f]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[f];return v&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Fy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Sc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Vy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Sc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Km(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oy=e=>Dy.test(e);function By(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?go(e):e,s;if(n)if(Oy(n))s=n;else{if(n.includes("//")){let o=n;n=Qm(n),Sc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Td(n.substring(1),"/"):s=Td(n,t)}else s=t;return{pathname:s,search:Uy(r),hash:$y(i)}}function Td(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ea(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ym(e,t){let n=zy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=go(e):(i=ll({},e),ce(!i.pathname||!i.pathname.includes("?"),ea("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),ea("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),ea("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let c=By(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Qm=e=>e.replace(/\/\/+/g,"/"),Ht=e=>Qm(e.join("/")),Hy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$y=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qm=["post","put","patch","delete"];new Set(qm);const Gy=["get",...qm];new Set(Gy);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bs(){return Bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bs.apply(null,arguments)}const kc=y.createContext(null),Ky=y.createContext(null),cr=y.createContext(null),Tc=y.createContext(null),Nn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Zm=y.createContext(null);function Yy(e,t){let{relative:n}=t===void 0?{}:t;vo()||ce(!1);let{basename:r,navigator:i}=y.useContext(cr),{hash:s,pathname:o,search:l}=e0(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Ht([r,o])),i.createHref({pathname:c,search:l,hash:s})}function vo(){return y.useContext(Tc)!=null}function mi(){return vo()||ce(!1),y.useContext(Tc).location}function Jm(e){y.useContext(cr).static||y.useLayoutEffect(e)}function Xy(){let{isDataRoute:e}=y.useContext(Nn);return e?l1():Qy()}function Qy(){vo()||ce(!1);let e=y.useContext(kc),{basename:t,future:n,navigator:r}=y.useContext(cr),{matches:i}=y.useContext(Nn),{pathname:s}=mi(),o=JSON.stringify(Ym(i,n.v7_relativeSplatPath)),l=y.useRef(!1);return Jm(()=>{l.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Xm(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ht([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,o,s,e])}function e0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(cr),{matches:i}=y.useContext(Nn),{pathname:s}=mi(),o=JSON.stringify(Ym(i,r.v7_relativeSplatPath));return y.useMemo(()=>Xm(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function qy(e,t){return Zy(e,t)}function Zy(e,t,n,r){vo()||ce(!1);let{navigator:i}=y.useContext(cr),{matches:s}=y.useContext(Nn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=mi(),d;if(t){var f;let N=typeof t=="string"?go(t):t;c==="/"||(f=N.pathname)!=null&&f.startsWith(c)||ce(!1),d=N}else d=u;let h=d.pathname||"/",v=h;if(c!=="/"){let N=c.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=Cy(e,{pathname:v}),w=r1(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Ht([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:Ht([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return t&&w?y.createElement(Tc.Provider,{value:{location:Bs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:cl.Pop}},w):w}function Jy(){let e=a1(),t=Wy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const e1=y.createElement(Jy,null);class t1 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Nn.Provider,{value:this.props.routeContext},y.createElement(Zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function n1(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(kc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Nn.Provider,{value:t},r)}function r1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||ce(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:v}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let v,x=!1,w=null,N=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||e1,c&&(u<0&&h===0?(x=!0,N=null):u===h&&(x=!0,N=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,h+1)),p=()=>{let g;return v?g=w:x?g=N:f.route.Component?g=y.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,y.createElement(n1,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(t1,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var t0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(t0||{}),zs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zs||{});function i1(e){let t=y.useContext(kc);return t||ce(!1),t}function s1(e){let t=y.useContext(Ky);return t||ce(!1),t}function o1(e){let t=y.useContext(Nn);return t||ce(!1),t}function n0(e){let t=o1(),n=t.matches[t.matches.length-1];return n.route.id||ce(!1),n.route.id}function a1(){var e;let t=y.useContext(Zm),n=s1(zs.UseRouteError),r=n0(zs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function l1(){let{router:e}=i1(t0.UseNavigateStable),t=n0(zs.UseNavigateStable),n=y.useRef(!1);return Jm(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bs({fromRouteId:t},s)))},[e,t])}function Ge(e){ce(!1)}function c1(e){let{children:t,location:n}=e;return qy(ul(t),n)}new Promise(()=>{});function ul(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,i)=>{if(!y.isValidElement(r))return;let s=[...t,i];if(r.type===y.Fragment){n.push.apply(n,ul(r.props.children,s));return}r.type!==Ge&&ce(!1),!r.props.index||!r.props.children||ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ul(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dl.apply(null,arguments)}function u1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function d1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function f1(e,t){return e.button===0&&(!t||t==="_self")&&!d1(e)}const h1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],p1="6";try{window.__reactRouterVersion=p1}catch{}const m1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qn=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,h=u1(t,h1),{basename:v}=y.useContext(cr),x,w=!1;if(typeof u=="string"&&g1.test(u)&&(x=u,m1))try{let g=new URL(window.location.href),b=u.startsWith("//")?new URL(g.protocol+u):new URL(u),j=Km(b.pathname,v);b.origin===g.origin&&j!=null?u=j+b.search+b.hash:w=!0}catch{}let N=Yy(u,{relative:i}),m=v1(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||m(g)}return y.createElement("a",dl({},h,{href:x||N,onClick:w||s?r:p,ref:n,target:c}))});var Pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pd||(Pd={}));var Ed;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ed||(Ed={}));function v1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,c=Xy(),u=mi(),d=e0(e,{relative:o});return y.useCallback(f=>{if(f1(f,n)){f.preventDefault();let h=r!==void 0?r:jd(u)===jd(d);c(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,d,r,i,n,e,s,o,l])}function x1(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function oi(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const fl=e=>Array.isArray(e);function r0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ai(e){return typeof e=="string"||Array.isArray(e)}function Rd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Pc(e,t,n,r){if(typeof t=="function"){const[i,s]=Rd(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Rd(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function xo(e,t,n){const r=e.getProps();return Pc(r,t,n!==void 0?n:r.custom,e)}const Ec=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rc=["initial",...Ec],gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qt=new Set(gi),mt=e=>e*1e3,gt=e=>e/1e3,y1={type:"spring",stiffness:500,damping:25,restSpeed:10},w1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),b1={type:"keyframes",duration:.8},N1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},j1=(e,{keyframes:t})=>t.length>2?b1:Qt.has(e)?e.startsWith("scale")?w1(t[1]):y1:N1;function Lc(e,t){return e[t]||e.default||e}const C1={skipAnimations:!1,useManualTiming:!1},S1=e=>e!==null;function yo(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(S1),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const fe=e=>e;function k1(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){s.has(u)&&(c.schedule(u),e()),u(o)}const c={schedule:(u,d=!1,f=!1)=>{const v=f&&r?t:n;return d&&s.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(l),r=!1,i&&(i=!1,c.process(u))}};return c}const Bi=["read","resolveKeyframes","update","preRender","render","postRender"],T1=40;function i0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Bi.reduce((m,p)=>(m[p]=k1(s),m),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:f,postRender:h}=o,v=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,T1),1),i.timestamp=m,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),f.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Bi.reduce((m,p)=>{const g=o[p];return m[p]=(b,j=!1,k=!1)=>(n||x(),g.schedule(b,j,k)),m},{}),cancel:m=>{for(let p=0;p<Bi.length;p++)o[Bi[p]].cancel(m)},state:i,steps:o}}const{schedule:D,cancel:Je,state:oe,steps:ta}=i0(typeof requestAnimationFrame<"u"?requestAnimationFrame:fe,!0),s0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,P1=1e-7,E1=12;function R1(e,t,n,r,i){let s,o,l=0;do o=t+(n-t)/2,s=s0(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>P1&&++l<E1);return o}function vi(e,t,n,r){if(e===t&&n===r)return fe;const i=s=>R1(s,0,1,e,n);return s=>s===0||s===1?s:s0(i(s),t,r)}const o0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,a0=e=>t=>1-e(1-t),l0=vi(.33,1.53,.69,.99),Ac=a0(l0),c0=o0(Ac),u0=e=>(e*=2)<1?.5*Ac(e):.5*(2-Math.pow(2,-10*(e-1))),Mc=e=>1-Math.sin(Math.acos(e)),d0=a0(Mc),f0=o0(Mc),h0=e=>/^0[^.\s]+$/u.test(e);function L1(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||h0(e):!0}let A1=fe,hl=fe;const p0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),m0=e=>t=>typeof t=="string"&&t.startsWith(e),g0=m0("--"),M1=m0("var(--"),_c=e=>M1(e)?_1.test(e.split("/*")[0].trim()):!1,_1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,I1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F1(e){const t=I1.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function v0(e,t,n=1){const[r,i]=F1(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return p0(o)?parseFloat(o):o}return _c(i)?v0(i,t,n+1):i}const Wt=(e,t,n)=>n>t?t:n<e?e:n,ur={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},li={...ur,transform:e=>Wt(0,1,e)},zi={...ur,default:1},xi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),kt=xi("deg"),ot=xi("%"),L=xi("px"),V1=xi("vh"),D1=xi("vw"),Ld={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},O1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ad=e=>e===ur||e===L,Md=(e,t)=>parseFloat(e.split(", ")[t]),_d=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Md(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Md(s[1],e):0}},B1=new Set(["x","y","z"]),z1=gi.filter(e=>!B1.has(e));function H1(e){const t=[];return z1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ir={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:_d(4,13),y:_d(5,14)};ir.translateX=ir.x;ir.translateY=ir.y;const x0=e=>t=>t.test(e),U1={test:e=>e==="auto",parse:e=>e},y0=[ur,L,ot,kt,D1,V1,U1],Id=e=>y0.find(x0(e)),hn=new Set;let pl=!1,ml=!1;function w0(){if(ml){const e=Array.from(hn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=H1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var l;(l=r.getValue(s))===null||l===void 0||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ml=!1,pl=!1,hn.forEach(e=>e.complete()),hn.clear()}function b0(){hn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ml=!0)})}function $1(){b0(),w0()}class Ic{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(hn.add(this),pl||(pl=!0,D.read(b0),D.resolveKeyframes(w0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),l=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),hn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,hn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Dr=e=>Math.round(e*1e5)/1e5,Fc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function W1(e){return e==null}const G1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Vc=(e,t)=>n=>!!(typeof n=="string"&&G1.test(n)&&n.startsWith(e)||t&&!W1(n)&&Object.prototype.hasOwnProperty.call(n,t)),N0=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,l]=r.match(Fc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},K1=e=>Wt(0,255,e),na={...ur,transform:e=>Math.round(K1(e))},un={test:Vc("rgb","red"),parse:N0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+na.transform(e)+", "+na.transform(t)+", "+na.transform(n)+", "+Dr(li.transform(r))+")"};function Y1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const gl={test:Vc("#"),parse:Y1,transform:un.transform},On={test:Vc("hsl","hue"),parse:N0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ot.transform(Dr(t))+", "+ot.transform(Dr(n))+", "+Dr(li.transform(r))+")"},ge={test:e=>un.test(e)||gl.test(e)||On.test(e),parse:e=>un.test(e)?un.parse(e):On.test(e)?On.parse(e):gl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?un.transform(e):On.transform(e)},X1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Q1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Fc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(X1))===null||n===void 0?void 0:n.length)||0)>0}const j0="number",C0="color",q1="var",Z1="var(",Fd="${}",J1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ci(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(J1,c=>(ge.test(c)?(r.color.push(s),i.push(C0),n.push(ge.parse(c))):c.startsWith(Z1)?(r.var.push(s),i.push(q1),n.push(c)):(r.number.push(s),i.push(j0),n.push(parseFloat(c))),++s,Fd)).split(Fd);return{values:n,split:l,indexes:r,types:i}}function S0(e){return ci(e).values}function k0(e){const{split:t,types:n}=ci(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const l=n[o];l===j0?s+=Dr(i[o]):l===C0?s+=ge.transform(i[o]):s+=i[o]}return s}}const e2=e=>typeof e=="number"?0:e;function t2(e){const t=S0(e);return k0(e)(t.map(e2))}const Gt={test:Q1,parse:S0,createTransformer:k0,getAnimatableNone:t2},n2=new Set(["brightness","contrast","saturate","opacity"]);function r2(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Fc)||[];if(!r)return e;const i=n.replace(r,"");let s=n2.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const i2=/\b([a-z-]*)\(.*?\)/gu,vl={...Gt,getAnimatableNone:e=>{const t=e.match(i2);return t?t.map(r2).join(" "):e}},s2={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L},o2={rotate:kt,rotateX:kt,rotateY:kt,rotateZ:kt,scale:zi,scaleX:zi,scaleY:zi,scaleZ:zi,skew:kt,skewX:kt,skewY:kt,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:li,originX:Ld,originY:Ld,originZ:L},Vd={...ur,transform:Math.round},Dc={...s2,...o2,zIndex:Vd,size:L,fillOpacity:li,strokeOpacity:li,numOctaves:Vd},a2={...Dc,color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:vl,WebkitFilter:vl},Oc=e=>a2[e];function T0(e,t){let n=Oc(e);return n!==vl&&(n=Gt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const l2=new Set(["auto","none","0"]);function c2(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!l2.has(s)&&ci(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=T0(n,i)}class P0 extends Ic{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),_c(u))){const d=v0(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!O1.has(r)||t.length!==2)return;const[i,s]=t,o=Id(i),l=Id(s);if(o!==l)if(Ad(o)&&Ad(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)L1(t[i])&&r.push(i);r.length&&c2(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,l=i[o];i[o]=ir[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function Bc(e){return typeof e=="function"}let ls;function u2(){ls=void 0}const at={now:()=>(ls===void 0&&at.set(oe.isProcessing||C1.useManualTiming?oe.timestamp:performance.now()),ls),set:e=>{ls=e,queueMicrotask(u2)}},Dd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gt.test(e)||e==="0")&&!e.startsWith("url("));function d2(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function f2(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Dd(i,t),l=Dd(s,t);return!o||!l?!1:d2(e)||(n==="spring"||Bc(n))&&r}const h2=40;class E0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=at.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>h2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&$1(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=at.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!f2(t,r,i,s))if(o)this.options.duration=0;else{c==null||c(yo(t,this.options,n)),l==null||l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function zc(e,t){return t?e*(1e3/t):0}const p2=5;function R0(e,t,n){const r=Math.max(t-p2,0);return zc(n-e(r),t-r)}const ra=.001,m2=.01,g2=10,v2=.05,x2=1;function y2({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s,o=1-t;o=Wt(v2,x2,o),e=Wt(m2,g2,gt(e)),o<1?(i=u=>{const d=u*o,f=d*e,h=d-n,v=xl(u,o),x=Math.exp(-f);return ra-h/v*x},s=u=>{const f=u*o*e,h=f*n+n,v=Math.pow(o,2)*Math.pow(u,2)*e,x=Math.exp(-f),w=xl(Math.pow(u,2),o);return(-i(u)+ra>0?-1:1)*((h-v)*x)/w}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-ra+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=b2(i,s,l);if(e=mt(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const w2=12;function b2(e,t,n){let r=n;for(let i=1;i<w2;i++)r=r-e(r)/t(r);return r}function xl(e,t){return e*Math.sqrt(1-t*t)}const N2=["duration","bounce"],j2=["stiffness","damping","mass"];function Od(e,t){return t.some(n=>e[n]!==void 0)}function C2(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Od(e,j2)&&Od(e,N2)){const n=y2(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Hc({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=C2({...r,velocity:-gt(r.velocity||0)}),v=f||0,x=c/(2*Math.sqrt(l*u)),w=s-i,N=gt(Math.sqrt(l/u)),m=Math.abs(w)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let p;if(x<1){const g=xl(N,x);p=b=>{const j=Math.exp(-x*N*b);return s-j*((v+x*N*w)/g*Math.sin(g*b)+w*Math.cos(g*b))}}else if(x===1)p=g=>s-Math.exp(-N*g)*(w+(v+N*w)*g);else{const g=N*Math.sqrt(x*x-1);p=b=>{const j=Math.exp(-x*N*b),k=Math.min(g*b,300);return s-j*((v+x*N*w)*Math.sinh(k)+g*w*Math.cosh(k))/g}}return{calculatedDuration:h&&d||null,next:g=>{const b=p(g);if(h)o.done=g>=d;else{let j=0;x<1&&(j=g===0?mt(v):R0(p,g,b));const k=Math.abs(j)<=n,P=Math.abs(s-b)<=t;o.done=k&&P}return o.value=o.done?s:b,o}}}function Bd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:c,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},v=S=>l!==void 0&&S<l||c!==void 0&&S>c,x=S=>l===void 0?c:c===void 0||Math.abs(l-S)<Math.abs(c-S)?l:c;let w=n*t;const N=f+w,m=o===void 0?N:o(N);m!==N&&(w=m-f);const p=S=>-w*Math.exp(-S/r),g=S=>m+p(S),b=S=>{const V=p(S),A=g(S);h.done=Math.abs(V)<=u,h.value=h.done?m:A};let j,k;const P=S=>{v(h.value)&&(j=S,k=Hc({keyframes:[h.value,x(h.value)],velocity:R0(g,S,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:S=>{let V=!1;return!k&&j===void 0&&(V=!0,b(S),P(S)),j!==void 0&&S>=j?k.next(S-j):(!V&&b(S),h)}}}const S2=vi(.42,0,1,1),k2=vi(0,0,.58,1),L0=vi(.42,0,.58,1),T2=e=>Array.isArray(e)&&typeof e[0]!="number",zd={linear:fe,easeIn:S2,easeInOut:L0,easeOut:k2,circIn:Mc,circInOut:f0,circOut:d0,backIn:Ac,backInOut:c0,backOut:l0,anticipate:u0},Hd=e=>{if(Array.isArray(e)){hl(e.length===4);const[t,n,r,i]=e;return vi(t,n,r,i)}else if(typeof e=="string")return hl(zd[e]!==void 0),zd[e];return e},P2=(e,t)=>n=>t(e(n)),vt=(...e)=>e.reduce(P2),yn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},K=(e,t,n)=>e+(t-e)*n;function ia(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function E2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=ia(c,l,e+1/3),s=ia(c,l,e),o=ia(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Hs(e,t){return n=>n>0?t:e}const sa=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},R2=[gl,un,On],L2=e=>R2.find(t=>t.test(e));function Ud(e){const t=L2(e);if(!t)return!1;let n=t.parse(e);return t===On&&(n=E2(n)),n}const $d=(e,t)=>{const n=Ud(e),r=Ud(t);if(!n||!r)return Hs(e,t);const i={...n};return s=>(i.red=sa(n.red,r.red,s),i.green=sa(n.green,r.green,s),i.blue=sa(n.blue,r.blue,s),i.alpha=K(n.alpha,r.alpha,s),un.transform(i))},yl=new Set(["none","hidden"]);function A2(e,t){return yl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function M2(e,t){return n=>K(e,t,n)}function Uc(e){return typeof e=="number"?M2:typeof e=="string"?_c(e)?Hs:ge.test(e)?$d:F2:Array.isArray(e)?A0:typeof e=="object"?ge.test(e)?$d:_2:Hs}function A0(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Uc(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function _2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Uc(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function I2(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],l=e.indexes[o][i[o]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[s]=c,i[o]++}return r}const F2=(e,t)=>{const n=Gt.createTransformer(t),r=ci(e),i=ci(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yl.has(e)&&!i.values.length||yl.has(t)&&!r.values.length?A2(e,t):vt(A0(I2(r,i),i.values),n):Hs(e,t)};function M0(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?K(e,t,n):Uc(e)(e,t)}function V2(e,t,n){const r=[],i=n||M0,s=e.length-1;for(let o=0;o<s;o++){let l=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||fe:t;l=vt(c,l)}r.push(l)}return r}function $c(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(hl(s===t.length),s===1)return()=>t[0];if(s===2&&e[0]===e[1])return()=>t[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=V2(t,r,i),l=o.length,c=u=>{let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=yn(e[d],e[d+1],u);return o[d](f)};return n?u=>c(Wt(e[0],e[s-1],u)):c}function D2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=yn(0,t,r);e.push(K(n,1,i))}}function _0(e){const t=[0];return D2(t,e.length-1),t}function O2(e,t){return e.map(n=>n*t)}function B2(e,t){return e.map(()=>t||L0).splice(0,e.length-1)}function Us({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=T2(r)?r.map(Hd):Hd(r),s={done:!1,value:t[0]},o=O2(n&&n.length===t.length?n:_0(t),e),l=$c(o,t,{ease:Array.isArray(i)?i:B2(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}const Wd=2e4;function z2(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Wd;)t+=n,r=e.next(t);return t>=Wd?1/0:t}const H2=e=>{const t=({timestamp:n})=>e(n);return{start:()=>D.update(t,!0),stop:()=>Je(t),now:()=>oe.isProcessing?oe.timestamp:at.now()}},U2={decay:Bd,inertia:Bd,tween:Us,keyframes:Us,spring:Hc},$2=e=>e/100;class Wc extends E0{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Ic,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new o(s,l,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,l=Bc(n)?n:U2[n]||Us;let c,u;l!==Us&&typeof t[0]!="number"&&(c=vt($2,M0(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});s==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=z2(d));const{calculatedDuration:f}=d,h=f+i,v=h*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:f,resolvedDuration:h,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:S}=this.options;return{done:!0,value:S[S.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:h,repeat:v,repeatType:x,repeatDelay:w,onUpdate:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-h*(this.speed>=0?1:-1),p=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,b=s;if(v){const S=Math.min(this.currentTime,d)/f;let V=Math.floor(S),A=S%1;!A&&S>=1&&(A=1),A===1&&V--,V=Math.min(V,v+1),!!(V%2)&&(x==="reverse"?(A=1-A,w&&(A-=w/f)):x==="mirror"&&(b=o)),g=Wt(0,1,A)*f}const j=p?{done:!1,value:c[0]}:b.next(g);l&&(j.value=l(j.value));let{done:k}=j;!p&&u!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return P&&i!==void 0&&(j.value=yo(c,this.options,i)),N&&N(j.value),P&&this.finish(),j}get duration(){const{resolved:t}=this;return t?gt(t.calculatedDuration):0}get time(){return gt(this.currentTime)}set time(t){t=mt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=gt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=H2,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const I0=new Set(["opacity","clipPath","filter","transform"]),F0=e=>Array.isArray(e)&&typeof e[0]=="number",W2=10,G2=(e,t)=>{let n="";const r=Math.max(Math.round(t/W2),2);for(let i=0;i<r;i++)n+=e(yn(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Gc(e){let t;return()=>(t===void 0&&(t=e()),t)}const K2={linearEasing:void 0};function Y2(e,t){const n=Gc(e);return()=>{var r;return(r=K2[t])!==null&&r!==void 0?r:n()}}const $s=Y2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function V0(e){return!!(typeof e=="function"&&$s()||!e||typeof e=="string"&&(e in wl||$s())||F0(e)||Array.isArray(e)&&e.every(V0))}const kr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,wl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:kr([0,.65,.55,1]),circOut:kr([.55,0,1,.45]),backIn:kr([.31,.01,.66,-.59]),backOut:kr([.33,1.53,.69,.99])};function D0(e,t){if(e)return typeof e=="function"&&$s()?G2(e,t):F0(e)?kr(e):Array.isArray(e)?e.map(n=>D0(n,t)||wl.easeOut):wl[e]}function X2(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:l,times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=D0(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function Gd(e,t){e.timeline=t,e.onfinish=null}const Q2=Gc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ws=10,q2=2e4;function Z2(e){return Bc(e.type)||e.type==="spring"||!V0(e.ease)}function J2(e,t){const n=new Wc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<q2;)r=n.sample(s),i.push(r.value),s+=Ws;return{times:void 0,keyframes:i,duration:s-Ws,ease:"linear"}}const O0={anticipate:u0,backInOut:c0,circInOut:f0};function ew(e){return e in O0}class Kd extends E0{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new P0(s,(o,l)=>this.onKeyframesResolved(o,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:s,ease:o,type:l,motionValue:c,name:u,startTime:d}=this.options;if(!(!((r=c.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&$s()&&ew(o)&&(o=O0[o]),Z2(this.options)){const{onComplete:h,onUpdate:v,motionValue:x,element:w,...N}=this.options,m=J2(t,N);t=m.keyframes,t.length===1&&(t[1]=t[0]),i=m.duration,s=m.times,o=m.ease,l="keyframes"}const f=X2(c.owner.current,u,t,{...this.options,duration:i,times:s,ease:o});return f.startTime=d??this.calcStartTime(),this.pendingTimeline?(Gd(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:h}=this.options;c.set(yo(t,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:s,type:l,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return gt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return gt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=mt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return fe;const{animation:r}=n;Gd(r,t)}return fe}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:h,...v}=this.options,x=new Wc({...v,keyframes:r,duration:i,type:s,ease:o,times:l,isGenerator:!0}),w=mt(this.time);u.setWithVelocity(x.sample(w-Ws).value,x.sample(w).value,Ws)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:l}=t;return Q2()&&r&&I0.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&s!=="mirror"&&o!==0&&l!=="inertia"}}const B0=Gc(()=>window.ScrollTimeline!==void 0);class tw{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>B0()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function nw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Kc=(e,t,n,r={},i,s)=>o=>{const l=Lc(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-mt(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:h=>{t.set(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};nw(l)||(d={...d,...j1(e,d)}),d.duration&&(d.duration=mt(d.duration)),d.repeatDelay&&(d.repeatDelay=mt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const h=yo(d.keyframes,l);if(h!==void 0)return D.update(()=>{d.onUpdate(h),d.onComplete()}),new tw([])}return!s&&Kd.supports(d)?new Kd(d):new Wc(d)},rw=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),iw=e=>fl(e)?e[e.length-1]||0:e;function Yc(e,t){e.indexOf(t)===-1&&e.push(t)}function Xc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Qc{constructor(){this.subscriptions=[]}add(t){return Yc(this.subscriptions,t),()=>Xc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yd=30,sw=e=>!isNaN(parseFloat(e)),Or={current:void 0};class ow{constructor(t,n={}){this.version="11.11.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=at.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=at.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=sw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Qc);const r=this.events[t].add(n);return t==="change"?()=>{r(),D.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Or.current&&Or.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=at.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Yd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Yd);return zc(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rt(e,t){return new ow(e,t)}function aw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,rt(n))}function qc(e,t){const n=xo(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const l=iw(s[o]);aw(e,o,l)}}const wo=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),lw="framerAppearId",z0="data-"+wo(lw);function H0(e){return e.props[z0]}const xe=e=>!!(e&&e.getVelocity);function cw(e){return!!(xe(e)&&e.add)}function U0(e){if(Qt.has(e))return"transform";if(I0.has(e))return wo(e)}function bl(e,t){var n;if(!e.applyWillChange)return;const r=e.getValue("willChange");if(cw(r))return r.add(t);!(!((n=e.props.style)===null||n===void 0)&&n.willChange)&&U0(t)&&e.setStaticValue("willChange","transform")}function uw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function $0(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const h=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),v=c[f];if(v===void 0||d&&uw(d,f))continue;const x={delay:n,...Lc(o||{},f)};let w=!1;if(window.MotionHandoffAnimation){const m=H0(e);if(m){const p=window.MotionHandoffAnimation(m,f,D);p!==null&&(x.startTime=p,w=!0)}}bl(e,f),h.start(Kc(f,h,v,e.shouldReduceMotion&&Qt.has(f)?{type:!1}:x,e,w));const N=h.animation;N&&u.push(N)}return l&&Promise.all(u).then(()=>{D.update(()=>{l&&qc(e,l)})}),u}function Nl(e,t,n={}){var r;const i=xo(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all($0(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=s;return dw(e,t,d+u,f,h,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[u,d]=c==="beforeChildren"?[o,l]:[l,o];return u().then(()=>d())}else return Promise.all([o(),l(n.delay)])}function dw(e,t,n=0,r=0,i=1,s){const o=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(fw).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(Nl(u,t,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function fw(e,t){return e.sortNodePosition(t)}function W0(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Nl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Nl(e,t,n);else{const i=typeof t=="function"?xo(e,t,n.custom):t;r=Promise.all($0(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const hw=Rc.length;function G0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?G0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<hw;n++){const r=Rc[n],i=e.props[r];(ai(i)||i===!1)&&(t[r]=i)}return t}const pw=[...Ec].reverse(),mw=Ec.length;function gw(e){return t=>Promise.all(t.map(({animation:n,options:r})=>W0(e,n,r)))}function vw(e){let t=gw(e),n=Xd(),r=!0;const i=c=>(u,d)=>{var f;const h=xo(e,d,c==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:v,transitionEnd:x,...w}=h;u={...u,...w,...x}}return u};function s(c){t=c(e)}function o(c){const{props:u}=e,d=G0(e.parent)||{},f=[],h=new Set;let v={},x=1/0;for(let N=0;N<mw;N++){const m=pw[N],p=n[m],g=u[m]!==void 0?u[m]:d[m],b=ai(g),j=m===c?p.isActive:null;j===!1&&(x=N);let k=g===d[m]&&g!==u[m]&&b;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),p.protectedKeys={...v},!p.isActive&&j===null||!g&&!p.prevProp||oi(g)||typeof g=="boolean")continue;const P=xw(p.prevProp,g);let S=P||m===c&&p.isActive&&!k&&b||N>x&&b,V=!1;const A=Array.isArray(g)?g:[g];let ie=A.reduce(i(m),{});j===!1&&(ie={});const{prevResolvedValues:Ct={}}=p,Zt={...Ct,...ie},dr=te=>{S=!0,h.has(te)&&(V=!0,h.delete(te)),p.needsAnimating[te]=!0;const T=e.getValue(te);T&&(T.liveStyle=!1)};for(const te in Zt){const T=ie[te],M=Ct[te];if(v.hasOwnProperty(te))continue;let _=!1;fl(T)&&fl(M)?_=!r0(T,M):_=T!==M,_?T!=null?dr(te):h.add(te):T!==void 0&&h.has(te)?dr(te):p.protectedKeys[te]=!0}p.prevProp=g,p.prevResolvedValues=ie,p.isActive&&(v={...v,...ie}),r&&e.blockInitialAnimation&&(S=!1),S&&(!(k&&P)||V)&&f.push(...A.map(te=>({animation:te,options:{type:m}})))}if(h.size){const N={};h.forEach(m=>{const p=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),N[m]=p??null}),f.push({animation:N})}let w=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(h=>{var v;return(v=h.animationState)===null||v===void 0?void 0:v.setActive(c,u)}),n[c].isActive=u;const f=o(c);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Xd(),r=!0}}}function xw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!r0(t,e):!1}function tn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xd(){return{animate:tn(!0),whileInView:tn(),whileHover:tn(),whileTap:tn(),whileDrag:tn(),whileFocus:tn(),exit:tn()}}class qt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class yw extends qt{constructor(t){super(t),t.animationState||(t.animationState=vw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();oi(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let ww=0;class bw extends qt{constructor(){super(...arguments),this.id=ww++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Nw={animation:{Feature:yw},exit:{Feature:bw}},K0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function bo(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const jw=e=>t=>K0(t)&&e(t,bo(t));function ht(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function xt(e,t,n,r){return ht(e,t,jw(n),r)}const Qd=(e,t)=>Math.abs(e-t);function Cw(e,t){const n=Qd(e.x,t.x),r=Qd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Y0{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=aa(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,v=Cw(f.offset,{x:0,y:0})>=3;if(!h&&!v)return;const{point:x}=f,{timestamp:w}=oe;this.history.push({...x,timestamp:w});const{onStart:N,onMove:m}=this.handlers;h||(N&&N(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=oa(h,this.transformPagePoint),D.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=aa(f.type==="pointercancel"?this.lastMoveEventInfo:oa(h,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,N),x&&x(f,N)},!K0(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=bo(t),l=oa(o,this.transformPagePoint),{point:c}=l,{timestamp:u}=oe;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,aa(l,this.history)),this.removeListeners=vt(xt(this.contextWindow,"pointermove",this.handlePointerMove),xt(this.contextWindow,"pointerup",this.handlePointerUp),xt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Je(this.updatePoint)}}function oa(e,t){return t?{point:t(e.point)}:e}function qd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function aa({point:e},t){return{point:e,delta:qd(e,X0(t)),offset:qd(e,Sw(t)),velocity:kw(t,.1)}}function Sw(e){return e[0]}function X0(e){return e[e.length-1]}function kw(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=X0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>mt(t)));)n--;if(!r)return{x:0,y:0};const s=gt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Q0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Zd=Q0("dragHorizontal"),Jd=Q0("dragVertical");function q0(e){let t=!1;if(e==="y")t=Jd();else if(e==="x")t=Zd();else{const n=Zd(),r=Jd();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Z0(){const e=q0(!0);return e?(e(),!1):!0}function Bn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const J0=1e-4,Tw=1-J0,Pw=1+J0,eg=.01,Ew=0-eg,Rw=0+eg;function _e(e){return e.max-e.min}function Lw(e,t,n){return Math.abs(e-t)<=n}function ef(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=_e(n)/_e(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Tw&&e.scale<=Pw||isNaN(e.scale))&&(e.scale=1),(e.translate>=Ew&&e.translate<=Rw||isNaN(e.translate))&&(e.translate=0)}function Br(e,t,n,r){ef(e.x,t.x,n.x,r?r.originX:void 0),ef(e.y,t.y,n.y,r?r.originY:void 0)}function tf(e,t,n){e.min=n.min+t.min,e.max=e.min+_e(t)}function Aw(e,t,n){tf(e.x,t.x,n.x),tf(e.y,t.y,n.y)}function nf(e,t,n){e.min=t.min-n.min,e.max=e.min+_e(t)}function zr(e,t,n){nf(e.x,t.x,n.x),nf(e.y,t.y,n.y)}function Mw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function rf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function _w(e,{top:t,left:n,bottom:r,right:i}){return{x:rf(e.x,n,i),y:rf(e.y,t,r)}}function sf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Iw(e,t){return{x:sf(e.x,t.x),y:sf(e.y,t.y)}}function Fw(e,t){let n=.5;const r=_e(e),i=_e(t);return i>r?n=yn(t.min,t.max-r,e.min):r>i&&(n=yn(e.min,e.max-i,t.min)),Wt(0,1,n)}function Vw(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const jl=.35;function Dw(e=jl){return e===!1?e=0:e===!0&&(e=jl),{x:of(e,"left","right"),y:of(e,"top","bottom")}}function of(e,t,n){return{min:af(e,t),max:af(e,n)}}function af(e,t){return typeof e=="number"?e:e[t]||0}const lf=()=>({translate:0,scale:1,origin:0,originPoint:0}),zn=()=>({x:lf(),y:lf()}),cf=()=>({min:0,max:0}),Z=()=>({x:cf(),y:cf()});function De(e){return[e("x"),e("y")]}function tg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ow({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Bw(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function la(e){return e===void 0||e===1}function Cl({scale:e,scaleX:t,scaleY:n}){return!la(e)||!la(t)||!la(n)}function sn(e){return Cl(e)||ng(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ng(e){return uf(e.x)||uf(e.y)}function uf(e){return e&&e!=="0%"}function Gs(e,t,n){const r=e-n,i=t*r;return n+i}function df(e,t,n,r,i){return i!==void 0&&(e=Gs(e,i,r)),Gs(e,n,r)+t}function Sl(e,t=0,n=1,r,i){e.min=df(e.min,t,n,r,i),e.max=df(e.max,t,n,r,i)}function rg(e,{x:t,y:n}){Sl(e.x,t.translate,t.scale,t.originPoint),Sl(e.y,n.translate,n.scale,n.originPoint)}const ff=.999999999999,hf=1.0000000000001;function zw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let l=0;l<i;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Un(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,rg(e,o)),r&&sn(s.latestValues)&&Un(e,s.latestValues))}t.x<hf&&t.x>ff&&(t.x=1),t.y<hf&&t.y>ff&&(t.y=1)}function Hn(e,t){e.min=e.min+t,e.max=e.max+t}function pf(e,t,n,r,i=.5){const s=K(e.min,e.max,i);Sl(e,t,n,s,r)}function Un(e,t){pf(e.x,t.x,t.scaleX,t.scale,t.originX),pf(e.y,t.y,t.scaleY,t.scale,t.originY)}function ig(e,t){return tg(Bw(e.getBoundingClientRect(),t))}function Hw(e,t,n){const r=ig(e,n),{scroll:i}=t;return i&&(Hn(r.x,i.offset.x),Hn(r.y,i.offset.y)),r}const sg=({current:e})=>e?e.ownerDocument.defaultView:null,Uw=new WeakMap;class $w{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Z(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(bo(d,"page").point)},s=(d,f)=>{const{drag:h,dragPropagation:v,onDragStart:x}=this.getProps();if(h&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=q0(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),De(N=>{let m=this.getAxisMotionValue(N).get()||0;if(ot.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const g=p.layout.layoutBox[N];g&&(m=_e(g)*(parseFloat(m)/100))}}this.originPoint[N]=m}),x&&D.postRender(()=>x(d,f)),bl(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:h,dragDirectionLock:v,onDirectionLock:x,onDrag:w}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:N}=f;if(v&&this.currentDirection===null){this.currentDirection=Ww(N),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,N),this.updateAxis("y",f.point,N),this.visualElement.render(),w&&w(d,f)},l=(d,f)=>this.stop(d,f),c=()=>De(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Y0(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:sg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&D.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Hi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=Mw(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Bn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=_w(i.layoutBox,n):this.constraints=!1,this.elastic=Dw(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&De(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Vw(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Bn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Hw(r,i.root,this.visualElement.getTransformPagePoint());let o=Iw(i.layout.layoutBox,s);if(n){const l=n(Ow(o));this.hasMutatedConstraints=!!l,l&&(o=tg(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=De(d=>{if(!Hi(d,n,this.currentDirection))return;let f=c&&c[d]||{};o&&(f={min:0,max:0});const h=i?200:1e6,v=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return bl(this.visualElement,t),r.start(Kc(t,r,0,n,this.visualElement,!1))}stopAnimation(){De(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){De(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){De(n=>{const{drag:r}=this.getProps();if(!Hi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n];s.set(t[n]-K(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Bn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};De(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();i[o]=Fw({min:c,max:c},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),De(o=>{if(!Hi(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:u}=this.constraints[o];l.set(K(c,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;Uw.set(this.visualElement,this);const t=this.visualElement.current,n=xt(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Bn(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),D.read(r);const o=ht(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(De(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=jl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function Hi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Ww(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Gw extends qt{constructor(t){super(t),this.removeGroupControls=fe,this.removeListeners=fe,this.controls=new $w(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fe}unmount(){this.removeGroupControls(),this.removeListeners()}}const mf=e=>(t,n)=>{e&&D.postRender(()=>e(t,n))};class Kw extends qt{constructor(){super(...arguments),this.removePointerDownListener=fe}onPointerDown(t){this.session=new Y0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:mf(t),onStart:mf(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&D.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=xt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const No=y.createContext(null);function Yw(){const e=y.useContext(No);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=y.useId();y.useEffect(()=>r(i),[]);const s=y.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,s]:[!0]}const Zc=y.createContext({}),og=y.createContext({}),cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function gf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=gf(e,t.target.x),r=gf(e,t.target.y);return`${n}% ${r}%`}},Xw={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gt.parse(e);if(i.length>5)return r;const s=Gt.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=c;const u=K(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}},Ks={};function Qw(e){Object.assign(Ks,e)}const{schedule:Jc,cancel:SC}=i0(queueMicrotask,!1);class qw extends y.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;Qw(Zw),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||D.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Jc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ag(e){const[t,n]=Yw(),r=y.useContext(Zc);return a.jsx(qw,{...e,layoutGroup:r,switchLayoutGroup:y.useContext(og),isPresent:t,safeToRemove:n})}const Zw={borderRadius:{...wr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wr,borderTopRightRadius:wr,borderBottomLeftRadius:wr,borderBottomRightRadius:wr,boxShadow:Xw},lg=["TopLeft","TopRight","BottomLeft","BottomRight"],Jw=lg.length,vf=e=>typeof e=="string"?parseFloat(e):e,xf=e=>typeof e=="number"||L.test(e);function eb(e,t,n,r,i,s){i?(e.opacity=K(0,n.opacity!==void 0?n.opacity:1,tb(r)),e.opacityExit=K(t.opacity!==void 0?t.opacity:1,0,nb(r))):s&&(e.opacity=K(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<Jw;o++){const l=`border${lg[o]}Radius`;let c=yf(t,l),u=yf(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||xf(c)===xf(u)?(e[l]=Math.max(K(vf(c),vf(u),r),0),(ot.test(u)||ot.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function yf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const tb=cg(0,.5,d0),nb=cg(.5,.95,fe);function cg(e,t,n){return r=>r<e?0:r>t?1:n(yn(e,t,r))}function wf(e,t){e.min=t.min,e.max=t.max}function Ve(e,t){wf(e.x,t.x),wf(e.y,t.y)}function bf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Nf(e,t,n,r,i){return e-=t,e=Gs(e,1/n,r),i!==void 0&&(e=Gs(e,1/i,r)),e}function rb(e,t=0,n=1,r=.5,i,s=e,o=e){if(ot.test(t)&&(t=parseFloat(t),t=K(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=K(s.min,s.max,r);e===s&&(l-=t),e.min=Nf(e.min,t,n,l,i),e.max=Nf(e.max,t,n,l,i)}function jf(e,t,[n,r,i],s,o){rb(e,t[n],t[r],t[i],t.scale,s,o)}const ib=["x","scaleX","originX"],sb=["y","scaleY","originY"];function Cf(e,t,n,r){jf(e.x,t,ib,n?n.x:void 0,r?r.x:void 0),jf(e.y,t,sb,n?n.y:void 0,r?r.y:void 0)}function Sf(e){return e.translate===0&&e.scale===1}function ug(e){return Sf(e.x)&&Sf(e.y)}function kf(e,t){return e.min===t.min&&e.max===t.max}function ob(e,t){return kf(e.x,t.x)&&kf(e.y,t.y)}function Tf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function dg(e,t){return Tf(e.x,t.x)&&Tf(e.y,t.y)}function Pf(e){return _e(e.x)/_e(e.y)}function Ef(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class ab{constructor(){this.members=[]}add(t){Yc(this.members,t),t.scheduleRender()}remove(t){if(Xc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lb(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:h,skewX:v,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),v&&(r+=`skewX(${v}deg) `),x&&(r+=`skewY(${x}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const cb=(e,t)=>e.depth-t.depth;class ub{constructor(){this.children=[],this.isDirty=!1}add(t){Yc(this.children,t),this.isDirty=!0}remove(t){Xc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(cb),this.isDirty=!1,this.children.forEach(t)}}function us(e){const t=xe(e)?e.get():e;return rw(t)?t.toValue():t}function db(e,t){const n=at.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Je(r),e(s-t))};return D.read(r,!0),()=>Je(r)}function fb(e){return e instanceof SVGElement&&e.tagName!=="svg"}function hb(e,t,n){const r=xe(e)?e:rt(e);return r.start(Kc("",r,t,n)),r.animation}const on={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Tr=typeof window<"u"&&window.MotionDebug!==void 0,ca=["","X","Y","Z"],pb={visibility:"hidden"},Rf=1e3;let mb=0;function ua(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function fg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=H0(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",D,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&fg(r)}function hg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=mb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Tr&&(on.totalNodes=on.resolvedTargetDeltas=on.recalculatedProjection=0),this.nodes.forEach(xb),this.nodes.forEach(jb),this.nodes.forEach(Cb),this.nodes.forEach(yb),Tr&&window.MotionDebug.record(on)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new ub)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Qc),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=fb(o),this.instance=o;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=db(h,250),cs.hasAnimatedSinceResize&&(cs.hasAnimatedSinceResize=!1,this.nodes.forEach(Af))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||Eb,{onLayoutAnimationStart:N,onLayoutAnimationComplete:m}=d.getProps(),p=!this.targetLayout||!dg(this.targetLayout,x)||v,g=!h&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||h&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const b={...Lc(w,"layout"),onPlay:N,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else h||Af(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Je(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Sb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&fg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lf);return}this.isUpdating||this.nodes.forEach(bb),this.isUpdating=!1,this.nodes.forEach(Nb),this.nodes.forEach(gb),this.nodes.forEach(vb),this.clearAllSnapshots();const l=at.now();oe.delta=Wt(0,1e3/60,l-oe.timestamp),oe.timestamp=l,oe.isProcessing=!0,ta.update.process(oe),ta.preRender.process(oe),ta.render.process(oe),oe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(wb),this.sharedNodes.forEach(kb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,D.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){D.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Z(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!ug(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(l||sn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),Rb(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:l}=this.options;if(!l)return Z();const c=l.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Lb))){const{scroll:d}=this.root;d&&(Hn(c.x,d.offset.x),Hn(c.y,d.offset.y))}return c}removeElementScroll(o){var l;const c=Z();if(Ve(c,o),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Ve(c,o),Hn(c.x,f.offset.x),Hn(c.y,f.offset.y))}return c}applyTransform(o,l=!1){const c=Z();Ve(c,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Un(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),sn(d.latestValues)&&Un(c,d.latestValues)}return sn(this.latestValues)&&Un(c,this.latestValues),c}removeTransform(o){const l=Z();Ve(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!sn(u.latestValues))continue;Cl(u.latestValues)&&u.updateSnapshot();const d=Z(),f=u.measurePageBox();Ve(d,f),Cf(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return sn(this.latestValues)&&Cf(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==oe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=oe.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),zr(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Z(),this.targetWithTransforms=Z()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Aw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),rg(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Z(),this.relativeTargetOrigin=Z(),zr(this.relativeTargetOrigin,this.target,v.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Tr&&on.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Cl(this.parent.latestValues)||ng(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===oe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ve(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,v=this.treeScale.y;zw(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Z());const{target:x}=l;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(bf(this.prevProjectionDelta.x,this.projectionDelta.x),bf(this.prevProjectionDelta.y,this.projectionDelta.y)),Br(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==v||!Ef(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ef(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Tr&&on.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zn(),this.projectionDelta=zn(),this.projectionDeltaWithTransform=zn()}setAnimationOrigin(o,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=zn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const h=Z(),v=c?c.source:void 0,x=this.layout?this.layout.source:void 0,w=v!==x,N=this.getStack(),m=!N||N.members.length<=1,p=!!(w&&!m&&this.options.crossfade===!0&&!this.path.some(Pb));this.animationProgress=0;let g;this.mixTargetDelta=b=>{const j=b/1e3;Mf(f.x,o.x,j),Mf(f.y,o.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zr(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Tb(this.relativeTarget,this.relativeTargetOrigin,h,j),g&&ob(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=Z()),Ve(g,this.relativeTarget)),w&&(this.animationValues=d,eb(d,u,this.latestValues,j,p,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Je(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=D.update(()=>{cs.hasAnimatedSinceResize=!0,this.currentAnimation=hb(0,Rf,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Rf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=o;if(!(!l||!c||!u)){if(this!==o&&this.layout&&u&&pg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Z();const f=_e(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+f;const h=_e(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+h}Ve(l,c),Un(l,d),Br(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ab),this.sharedNodes.get(o).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&ua("z",o,u,this.animationValues);for(let d=0;d<ca.length;d++)ua(`rotate${ca[d]}`,o,u,this.animationValues),ua(`skew${ca[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}getProjectionStyles(o){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return pb;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=us(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=us(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!sn(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=lb(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(c=(l=h.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in Ks){if(h[w]===void 0)continue;const{correct:N,applyTo:m}=Ks[w],p=u.transform==="none"?h[w]:N(h[w],f);if(m){const g=m.length;for(let b=0;b<g;b++)u[m[b]]=p}else u[w]=p}return this.options.layoutId&&(u.pointerEvents=f===this?us(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Lf),this.root.sharedNodes.clear()}}}function gb(e){e.updateLayout()}function vb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?De(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],v=_e(h);h.min=r[f].min,h.max=h.min+v}):pg(s,n.layoutBox,r)&&De(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],v=_e(r[f]);h.max=h.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const l=zn();Br(l,r,n.layoutBox);const c=zn();o?Br(c,e.applyTransform(i,!0),n.measuredBox):Br(c,r,n.layoutBox);const u=!ug(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:v}=f;if(h&&v){const x=Z();zr(x,n.layoutBox,h.layoutBox);const w=Z();zr(w,r,v.layoutBox),dg(x,w)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function xb(e){Tr&&on.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function yb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function wb(e){e.clearSnapshot()}function Lf(e){e.clearMeasurements()}function bb(e){e.isLayoutDirty=!1}function Nb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Af(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function jb(e){e.resolveTargetDelta()}function Cb(e){e.calcProjection()}function Sb(e){e.resetSkewAndRotation()}function kb(e){e.removeLeadSnapshot()}function Mf(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function _f(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function Tb(e,t,n,r){_f(e.x,t.x,n.x,r),_f(e.y,t.y,n.y,r)}function Pb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Eb={duration:.45,ease:[.4,0,.1,1]},If=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ff=If("applewebkit/")&&!If("chrome/")?Math.round:fe;function Vf(e){e.min=Ff(e.min),e.max=Ff(e.max)}function Rb(e){Vf(e.x),Vf(e.y)}function pg(e,t,n){return e==="position"||e==="preserve-aspect"&&!Lw(Pf(t),Pf(n),.2)}function Lb(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Ab=hg({attachResizeListener:(e,t)=>ht(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),da={current:void 0},mg=hg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!da.current){const e=new Ab({});e.mount(window),e.setOptions({layoutScroll:!0}),da.current=e}return da.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Mb={pan:{Feature:Kw},drag:{Feature:Gw,ProjectionNode:mg,MeasureLayout:ag}};function Df(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(s,o)=>{if(s.pointerType==="touch"||Z0())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t);const c=l[r];c&&D.postRender(()=>c(s,o))};return xt(e.current,n,i,{passive:!e.getProps()[r]})}class _b extends qt{mount(){this.unmount=vt(Df(this.node,!0),Df(this.node,!1))}unmount(){}}class Ib extends qt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vt(ht(this.node.current,"focus",()=>this.onFocus()),ht(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gg=(e,t)=>t?e===t?!0:gg(e,t.parentElement):!1;function fa(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,bo(n))}class Fb extends qt{constructor(){super(...arguments),this.removeStartListeners=fe,this.removeEndListeners=fe,this.removeAccessibleListeners=fe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=xt(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps(),h=!f&&!gg(this.node.current,l.target)?d:u;h&&D.update(()=>h(l,c))},{passive:!(r.onTap||r.onPointerUp)}),o=xt(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=vt(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=l=>{l.key!=="Enter"||!this.checkPressEnd()||fa("up",(c,u)=>{const{onTap:d}=this.node.getProps();d&&D.postRender(()=>d(c,u))})};this.removeEndListeners(),this.removeEndListeners=ht(this.node.current,"keyup",o),fa("down",(l,c)=>{this.startPress(l,c)})},n=ht(this.node.current,"keydown",t),r=()=>{this.isPressing&&fa("cancel",(s,o)=>this.cancelPress(s,o))},i=ht(this.node.current,"blur",r);this.removeAccessibleListeners=vt(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&D.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Z0()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&D.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=xt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=ht(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vt(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const kl=new WeakMap,ha=new WeakMap,Vb=e=>{const t=kl.get(e.target);t&&t(e)},Db=e=>{e.forEach(Vb)};function Ob({root:e,...t}){const n=e||document;ha.has(n)||ha.set(n,{});const r=ha.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Db,{root:e,...t})),r[i]}function Bb(e,t,n){const r=Ob(t);return kl.set(e,n),r.observe(e),()=>{kl.delete(e),r.unobserve(e)}}const zb={some:0,all:1};class Hb extends qt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:zb[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(c)};return Bb(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Ub(t,n))&&this.startObserver()}unmount(){}}function Ub({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const $b={inView:{Feature:Hb},tap:{Feature:Fb},focus:{Feature:Ib},hover:{Feature:_b}},Wb={layout:{ProjectionNode:mg,MeasureLayout:ag}},jo=y.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Co=y.createContext({}),eu=typeof window<"u",yi=eu?y.useLayoutEffect:y.useEffect,vg=y.createContext({strict:!1});let Of=!1;function Gb(e,t,n,r,i){var s;const{visualElement:o}=y.useContext(Co),l=y.useContext(vg),c=y.useContext(No),u=y.useContext(jo).reducedMotion,d=y.useRef();r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,h=y.useContext(og);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&Yb(d.current,n,i,h),y.useInsertionEffect(()=>{f&&f.update(n,c)});const v=n[z0],x=y.useRef(!!v&&!window.MotionHandoffIsComplete&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,v)));return yi(()=>{f&&(f.updateFeatures(),Jc.render(f.render),x.current&&f.animationState&&f.animationState.animateChanges())}),y.useEffect(()=>{f&&(!x.current&&f.animationState&&f.animationState.animateChanges(),x.current=!1,Of||(Of=!0,queueMicrotask(Kb)))}),f}function Kb(){window.MotionHandoffIsComplete=!0}function Yb(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:xg(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||l&&Bn(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function xg(e){if(e)return e.options.allowProjection!==!1?e.projection:xg(e.parent)}function Xb(e,t,n){return y.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Bn(n)&&(n.current=r))},[t])}function So(e){return oi(e.animate)||Rc.some(t=>ai(e[t]))}function yg(e){return!!(So(e)||e.variants)}function Qb(e,t){if(So(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ai(n)?n:void 0,animate:ai(r)?r:void 0}}return e.inherit!==!1?t:{}}function qb(e){const{initial:t,animate:n}=Qb(e,y.useContext(Co));return y.useMemo(()=>({initial:t,animate:n}),[Bf(t),Bf(n)])}function Bf(e){return Array.isArray(e)?e.join(" "):e}const zf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sr={};for(const e in zf)sr[e]={isEnabled:t=>zf[e].some(n=>!!t[n])};function Zb(e){for(const t in e)sr[t]={...sr[t],...e[t]}}const Jb=Symbol.for("motionComponentSymbol");function eN({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Zb(e);function s(l,c){let u;const d={...y.useContext(jo),...l,layoutId:tN(l)},{isStatic:f}=d,h=qb(l),v=r(l,f);if(!f&&eu){nN();const x=rN(d);u=x.MeasureLayout,h.visualElement=Gb(i,v,d,t,x.ProjectionNode)}return a.jsxs(Co.Provider,{value:h,children:[u&&h.visualElement?a.jsx(u,{visualElement:h.visualElement,...d}):null,n(i,l,Xb(v,h.visualElement,c),v,f,h.visualElement)]})}const o=y.forwardRef(s);return o[Jb]=i,o}function tN({layoutId:e}){const t=y.useContext(Zc).id;return t&&e!==void 0?t+"-"+e:e}function nN(e,t){y.useContext(vg).strict}function rN(e){const{drag:t,layout:n}=sr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const iN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tu(e){return typeof e!="string"||e.includes("-")?!1:!!(iN.indexOf(e)>-1||/[A-Z]/u.test(e))}function wg(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const bg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ng(e,t,n,r){wg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(bg.has(i)?i:wo(i),t.attrs[i])}function jg(e,{layout:t,layoutId:n}){return Qt.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ks[e]||e==="opacity")}function nu(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(xe(i[o])||t.style&&xe(t.style[o])||jg(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return n&&i&&typeof i.willChange=="string"&&(n.applyWillChange=!1),s}function Cg(e,t,n){const r=nu(e,t,n);for(const i in e)if(xe(e[i])||xe(t[i])){const s=gi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function jn(e){const t=y.useRef(null);return t.current===null&&(t.current=e()),t.current}function sN({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,s,o,l){const c={latestValues:oN(i,s,o,l?!1:e,t),renderState:n()};return r&&(c.mount=u=>r(i,u,c)),c}const Sg=e=>(t,n)=>{const r=y.useContext(Co),i=y.useContext(No),s=()=>sN(e,t,r,i,n);return n?s():jn(s)};function Hf(e,t,n){const r=Array.isArray(t)?t:[t];for(let i=0;i<r.length;i++){const s=Pc(e,r[i]);if(s){const{transitionEnd:o,transition:l,...c}=s;n(c,o)}}}function oN(e,t,n,r,i){var s;const o={};let l=r&&((s=e.style)===null||s===void 0?void 0:s.willChange)===void 0;const c=i(e,{});for(const w in c)o[w]=us(c[w]);let{initial:u,animate:d}=e;const f=So(e),h=yg(e);t&&h&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let v=n?n.initial===!1:!1;v=v||u===!1;const x=v?d:u;return x&&typeof x!="boolean"&&!oi(x)&&Hf(e,x,(w,N)=>{for(const m in w){let p=w[m];if(Array.isArray(p)){const g=v?p.length-1:0;p=p[g]}p!==null&&(o[m]=p)}for(const m in N)o[m]=N[m]}),l&&d&&u!==!1&&!oi(d)&&Hf(e,d,w=>{for(const N in w)if(U0(N)){o.willChange="transform";return}}),o}const ru=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),kg=()=>({...ru(),attrs:{}}),Tg=(e,t)=>t&&typeof e=="number"?t.transform(e):e,aN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lN=gi.length;function cN(e,t,n){let r="",i=!0;for(let s=0;s<lN;s++){const o=gi[s],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(o.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=Tg(l,Dc[o]);if(!c){i=!1;const d=aN[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function iu(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,l=!1;for(const c in t){const u=t[c];if(Qt.has(c)){o=!0;continue}else if(g0(c)){i[c]=u;continue}else{const d=Tg(u,Dc[c]);c.startsWith("origin")?(l=!0,s[c]=d):r[c]=d}}if(t.transform||(o||n?r.transform=cN(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${c} ${u} ${d}`}}function Uf(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function uN(e,t,n){const r=Uf(t,e.x,e.width),i=Uf(n,e.y,e.height);return`${r} ${i}`}const dN={offset:"stroke-dashoffset",array:"stroke-dasharray"},fN={offset:"strokeDashoffset",array:"strokeDasharray"};function hN(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?dN:fN;e[s.offset]=L.transform(-r);const o=L.transform(t),l=L.transform(n);e[s.array]=`${o} ${l}`}function su(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...u},d,f){if(iu(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:v,dimensions:x}=e;h.transform&&(x&&(v.transform=h.transform),delete h.transform),x&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=uN(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),o!==void 0&&hN(h,o,l,c,!1)}const ou=e=>typeof e=="string"&&e.toLowerCase()==="svg",pN={useVisualState:Sg({scrapeMotionValuesFromProps:Cg,createRenderState:kg,onMount:(e,t,{renderState:n,latestValues:r})=>{D.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),D.render(()=>{su(n,r,ou(t.tagName),e.transformTemplate),Ng(t,n)})}})},mN={useVisualState:Sg({applyWillChange:!0,scrapeMotionValuesFromProps:nu,createRenderState:ru})};function Pg(e,t,n){for(const r in t)!xe(t[r])&&!jg(r,n)&&(e[r]=t[r])}function gN({transformTemplate:e},t){return y.useMemo(()=>{const n=ru();return iu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function vN(e,t){const n=e.style||{},r={};return Pg(r,n,e),Object.assign(r,gN(e,t)),r}function xN(e,t){const n={},r=vN(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const yN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ys(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yN.has(e)}let Eg=e=>!Ys(e);function wN(e){e&&(Eg=t=>t.startsWith("on")?!Ys(t):e(t))}try{wN(require("@emotion/is-prop-valid").default)}catch{}function bN(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Eg(i)||n===!0&&Ys(i)||!t&&!Ys(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function NN(e,t,n,r){const i=y.useMemo(()=>{const s=kg();return su(s,t,ou(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Pg(s,e.style,e),i.style={...s,...i.style}}return i}function jN(e=!1){return(n,r,i,{latestValues:s},o)=>{const c=(tu(n)?NN:xN)(r,s,o,n),u=bN(r,typeof n=="string",e),d=n!==y.Fragment?{...u,...c,ref:i}:{},{children:f}=r,h=y.useMemo(()=>xe(f)?f.get():f,[f]);return y.createElement(n,{...d,children:h})}}function CN(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...tu(r)?pN:mN,preloadedFeatures:e,useRender:jN(i),createVisualElement:t,Component:r};return eN(o)}}const Tl={current:null},Rg={current:!1};function SN(){if(Rg.current=!0,!!eu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Tl.current=e.matches;e.addListener(t),t()}else Tl.current=!1}function kN(e,t,n){for(const r in t){const i=t[r],s=n[r];if(xe(i))e.addValue(r,i);else if(xe(s))e.addValue(r,rt(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,rt(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const $f=new WeakMap,TN=[...y0,ge,Gt],PN=e=>TN.find(x0(e)),Wf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class EN{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},l={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ic,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=at.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,D.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=So(n),this.isVariantNode=yg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const v=f[h];c[h]!==void 0&&xe(v)&&v.set(c[h],!1)}}mount(t){this.current=t,$f.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Rg.current||SN(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Tl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){$f.delete(this.current),this.projection&&this.projection.unmount(),Je(this.notifyUpdate),Je(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Qt.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&D.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in sr){const n=sr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Z()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Wf.length;r++){const i=Wf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=kN(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=rt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(p0(i)||h0(i))?i=parseFloat(i):!PN(i)&&Gt.test(n)&&(i=T0(t,n)),this.setBaseTarget(t,xe(i)?i.get():i)),xe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Pc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!xe(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Qc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Lg extends EN{constructor(){super(...arguments),this.KeyframeResolver=P0}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function RN(e){return window.getComputedStyle(e)}class LN extends Lg{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=wg}readValueFromInstance(t,n){if(Qt.has(n)){const r=Oc(n);return r&&r.default||0}else{const r=RN(t),i=(g0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return ig(t,n)}build(t,n,r){iu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return nu(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class AN extends Lg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Z}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Qt.has(n)){const r=Oc(n);return r&&r.default||0}return n=bg.has(n)?n:wo(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Cg(t,n,r)}build(t,n,r){su(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Ng(t,n,r,i)}mount(t){this.isSVGTag=ou(t.tagName),super.mount(t)}}const MN=(e,t)=>tu(e)?new AN(t):new LN(t,{allowProjection:e!==y.Fragment}),_N=CN({...Nw,...$b,...Mb,...Wb},MN),R=x1(_N);class IN extends y.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function FN({children:e,isPresent:t}){const n=y.useId(),r=y.useRef(null),i=y.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=y.useContext(jo);return y.useInsertionEffect(()=>{const{width:o,height:l,top:c,left:u}=i.current;if(t||!r.current||!o||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),a.jsx(IN,{isPresent:t,childRef:r,sizeRef:i,children:y.cloneElement(e,{ref:r})})}const VN=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=jn(DN),c=y.useId(),u=y.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:d=>{l.set(d,!0);for(const f of l.values())if(!f)return;r&&r()},register:d=>(l.set(d,!1),()=>l.delete(d))}),s?[Math.random()]:[n]);return y.useMemo(()=>{l.forEach((d,f)=>l.set(f,!1))},[n]),y.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(e=a.jsx(FN,{isPresent:n,children:e})),a.jsx(No.Provider,{value:u,children:e})};function DN(){return new Map}const Ui=e=>e.key||"";function Gf(e){const t=[];return y.Children.forEach(e,n=>{y.isValidElement(n)&&t.push(n)}),t}const Ag=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=y.useMemo(()=>Gf(e),[e]),c=l.map(Ui),u=y.useRef(!0),d=y.useRef(l),f=jn(()=>new Map),[h,v]=y.useState(l),[x,w]=y.useState(l);yi(()=>{u.current=!1,d.current=l;for(let p=0;p<x.length;p++){const g=Ui(x[p]);c.includes(g)?f.delete(g):f.get(g)!==!0&&f.set(g,!1)}},[x,c.length,c.join("-")]);const N=[];if(l!==h){let p=[...l];for(let g=0;g<x.length;g++){const b=x[g],j=Ui(b);c.includes(j)||(p.splice(g,0,b),N.push(b))}o==="wait"&&N.length&&(p=N),w(Gf(p)),v(l);return}const{forceRender:m}=y.useContext(Zc);return a.jsx(a.Fragment,{children:x.map(p=>{const g=Ui(p),b=l===x||c.includes(g),j=()=>{if(f.has(g))f.set(g,!0);else return;let k=!0;f.forEach(P=>{P||(k=!1)}),k&&(m==null||m(),w(d.current),i&&i())};return a.jsx(VN,{isPresent:b,initial:!u.current||r?void 0:!1,custom:b?void 0:n,presenceAffectsLayout:s,mode:o,onExitComplete:b?void 0:j,children:p},g)})})};function Mg(e){const t=jn(()=>rt(e)),{isStatic:n}=y.useContext(jo);if(n){const[,r]=y.useState(e);y.useEffect(()=>t.on("change",r),[])}return t}function _g(e,t){const n=Mg(t()),r=()=>n.set(t());return r(),yi(()=>{const i=()=>D.preRender(r,!1,!0),s=e.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),Je(r)}}),n}const ON=e=>e&&typeof e=="object"&&e.mix,BN=e=>ON(e)?e.mix:void 0;function zN(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],o=e[3+n],l=$c(i,s,{mixer:BN(s[0]),...o});return t?l(r):l}function HN(e){Or.current=[],e();const t=_g(Or.current,e);return Or.current=void 0,t}function UN(e,t,n,r){if(typeof e=="function")return HN(e);const i=typeof t=="function"?t:zN(t,n,r);return Array.isArray(e)?Kf(e,i):Kf([e],([s])=>i(s))}function Kf(e,t){const n=jn(()=>[]);return _g(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Ig(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const ds=new WeakMap;let Tt;function $N(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function WN({target:e,contentRect:t,borderBoxSize:n}){var r;(r=ds.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return $N(e,n)}})})}function GN(e){e.forEach(WN)}function KN(){typeof ResizeObserver>"u"||(Tt=new ResizeObserver(GN))}function YN(e,t){Tt||KN();const n=Ig(e);return n.forEach(r=>{let i=ds.get(r);i||(i=new Set,ds.set(r,i)),i.add(t),Tt==null||Tt.observe(r)}),()=>{n.forEach(r=>{const i=ds.get(r);i==null||i.delete(t),i!=null&&i.size||Tt==null||Tt.unobserve(r)})}}const fs=new Set;let Hr;function XN(){Hr=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};fs.forEach(n=>n(t))},window.addEventListener("resize",Hr)}function QN(e){return fs.add(e),Hr||XN(),()=>{fs.delete(e),!fs.size&&Hr&&(Hr=void 0)}}function qN(e,t){return typeof e=="function"?QN(e):YN(e,t)}const ZN=50,Yf=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),JN=()=>({time:0,x:Yf(),y:Yf()}),ej={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Xf(e,t,n,r){const i=n[t],{length:s,position:o}=ej[t],l=i.current,c=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${s}`]-e[`client${s}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=yn(0,i.scrollLength,i.current);const u=r-c;i.velocity=u>ZN?0:zc(i.current-l,u)}function tj(e,t,n){Xf(e,"x",t,n),Xf(e,"y",t,n),t.time=n}function nj(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const s=r.getBoundingClientRect();n.x+=i.left-s.left,n.y+=i.top-s.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:s}=r.getBBox();n.x+=i,n.y+=s;let o=null,l=r.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=r.parentNode;r=o}else break;return n}const rj={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Pl={start:0,center:.5,end:1};function Qf(e,t,n=0){let r=0;if(e in Pl&&(e=Pl[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const ij=[0,0];function sj(e,t,n,r){let i=Array.isArray(e)?e:ij,s=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Pl[e]?e:"0"]),s=Qf(i[0],n,r),o=Qf(i[1],t),s-o}const oj={x:0,y:0};function aj(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function lj(e,t,n){const{offset:r=rj.All}=n,{target:i=e,axis:s="y"}=n,o=s==="y"?"height":"width",l=i!==e?nj(i,e):oj,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:aj(i),u={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let d=!t[s].interpolate;const f=r.length;for(let h=0;h<f;h++){const v=sj(r[h],u[o],c[o],l[s]);!d&&v!==t[s].interpolatorOffsets[h]&&(d=!0),t[s].offset[h]=v}d&&(t[s].interpolate=$c(t[s].offset,_0(r)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}function cj(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function uj(e,t,n,r={}){return{measure:()=>cj(e,r.target,n),update:i=>{tj(e,n,i),(r.offset||r.target)&&lj(e,n,r)},notify:()=>t(n)}}const br=new WeakMap,qf=new WeakMap,pa=new WeakMap,Zf=e=>e===document.documentElement?window:e;function au(e,{container:t=document.documentElement,...n}={}){let r=pa.get(t);r||(r=new Set,pa.set(t,r));const i=JN(),s=uj(t,e,i,n);if(r.add(s),!br.has(t)){const l=()=>{for(const h of r)h.measure()},c=()=>{for(const h of r)h.update(oe.timestamp)},u=()=>{for(const h of r)h.notify()},d=()=>{D.read(l,!1,!0),D.read(c,!1,!0),D.update(u,!1,!0)};br.set(t,d);const f=Zf(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&qf.set(t,qN(t,d)),f.addEventListener("scroll",d,{passive:!0})}const o=br.get(t);return D.read(o,!1,!0),()=>{var l;Je(o);const c=pa.get(t);if(!c||(c.delete(s),c.size))return;const u=br.get(t);br.delete(t),u&&(Zf(t).removeEventListener("scroll",u),(l=qf.get(t))===null||l===void 0||l(),window.removeEventListener("resize",u))}}function Fg(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return D.update(r,!0),()=>Je(r)}function dj({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=au(s=>{r.value=s[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const ma=new Map;function Vg({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),ma.has(t)||ma.set(t,{});const r=ma.get(t);return r[n]||(r[n]=B0()?new ScrollTimeline({source:t,axis:n}):dj({source:t,axis:n})),r[n]}function fj(e){return e.length===2}function Dg(e){return e&&(e.target||e.offset)}function hj(e,t){return fj(e)||Dg(t)?au(n=>{e(n[t.axis].progress,n)},t):Fg(e,Vg(t))}function pj(e,t){if(Dg(t))return e.pause(),au(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Vg(t);return e.attachTimeline(n,r=>(r.pause(),Fg(i=>{r.time=r.duration*i},n)))}}function mj(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?hj(e,r):pj(e,r)}function Jf(e,t){A1(!!(!t||t.current))}const gj=()=>({scrollX:rt(0),scrollY:rt(0),scrollXProgress:rt(0),scrollYProgress:rt(0)});function vj({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=jn(gj);return(n?yi:y.useEffect)(()=>(Jf("target",t),Jf("container",e),mj((o,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function xj(e){e.values.forEach(t=>t.stop())}function El(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&qc(e,i),e.variantChildren&&e.variantChildren.forEach(s=>{El(s,t)})})}function yj(e,t){if(Array.isArray(t))return El(e,t);if(typeof t=="string")return El(e,[t]);qc(e,t)}function wj(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(s=>{i.push(W0(s,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{yj(r,n)})},stop(){e.forEach(n=>{xj(n)})},mount(){return()=>{t.stop()}}};return t}function bj(){const e=jn(wj);return yi(e.mount,[]),e}const Rl=bj,Nj={some:0,all:1};function jj(e,t,{root:n,margin:r,amount:i="some"}={}){const s=Ig(e),o=new WeakMap,l=u=>{u.forEach(d=>{const f=o.get(d.target);if(d.isIntersecting!==!!f)if(d.isIntersecting){const h=t(d);typeof h=="function"?o.set(d.target,h):c.unobserve(d.target)}else f&&(f(d),o.delete(d.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:Nj[i]});return s.forEach(u=>c.observe(u)),()=>c.disconnect()}function Cj(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[s,o]=y.useState(!1);return y.useEffect(()=>{if(!e.current||i&&s)return;const l=()=>(o(!0),i?void 0:()=>o(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return jj(e.current,l,c)},[t,e,n,i,r]),s}const Cn="/AnimateReact/assets/logo-C9avz92a.png",Sj=()=>a.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-[#1E1E1E] text-center px-4",children:[a.jsxs(R.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:"visible",transition:{duration:.5,delay:.35},children:[a.jsx("div",{className:"grid place-items-center",children:a.jsx(R.img,{className:"h-20 w-auto md:h-28 lg:h-36",src:Cn,alt:"logo",animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:3,ease:"linear"}})}),a.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl text-[#E0E0E0] font-serif mt-4",children:"AnimateReact"}),a.jsxs("p",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-[#EAD196] font-roboto",children:["Animated UI Components for",a.jsx("span",{className:"text-purple-300 block md:inline my-1 px-2",children:"React & Tailwind"})]}),a.jsx("p",{className:"text-white text-base md:text-lg lg:text-xl w-[18rem] md:w-[25rem] lg:w-[30rem] mx-auto my-4",children:"Addicting, interactive, animated UI components for React, Tailwind CSS, Framer motion. Copy & paste into your code with 2 clicks."})]}),a.jsx(R.button,{className:"bg-[#E91E63] text-white px-6 md:px-8 py-2 rounded-full text-base md:text-lg font-medium hover:bg-[#03DAC6] transition-all hover:shadow-black hover:shadow-md mt-6",whileHover:{scale:1.09},transition:{ease:"easeInOut",duration:.125},children:a.jsx(Qn,{to:"/app",target:"_blank",children:"Get Started"})})]}),kj=()=>{const[e,t]=y.useState(""),n=[{name:"Navbar",link:"/Navbar"},{name:"Footer",link:"/Footer"},{name:"Button",link:"/Buttons"},{name:"Card",link:"/Cards"},{name:"Carousel",link:"/Carousel"},{name:"Text",link:"/Texts"},{name:"Toggle",link:"/Toggle"}],r=s=>{t(s.target.value)},i=n.filter(s=>s.name.toLowerCase().includes(e.toLowerCase()));return a.jsx("nav",{className:"bg-[#1E1E1E] ",children:a.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row md:space-x-2 justify-between items-center p-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("img",{className:"h-12 w-auto md:h-16",src:Cn,alt:"logo"}),a.jsx("div",{className:"text-[#FFFFFF] text-xl md:text-2xl font-serif font-bold ml-2",children:"AnimateReact"})]}),a.jsxs("div",{className:"w-full max-w-md mt-4 md:mt-0 md:w-[22rem] sm:w-full md:space-x-4",children:[a.jsx("input",{type:"text",value:e,onChange:r,className:"w-full p-2 rounded bg-[#FFFFFF] text-black text-md h-8 placeholder-black",placeholder:"Search components..."}),e&&a.jsx("div",{className:"absolute bg-white shadow-lg rounded mt-2 z-10",children:i.length>0?i.map((s,o)=>a.jsx(Qn,{to:s.link,className:"block p-2 text-black hover:bg-gray-200",children:s.name},o)):a.jsx("div",{className:"p-2 text-black",children:"No results found"})})]})]})})};var Og={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},eh=Le.createContext&&Le.createContext(Og),Tj=["attr","size","title"];function Pj(e,t){if(e==null)return{};var n=Ej(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ej(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}function th(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?th(Object(n),!0).forEach(function(r){Rj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):th(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rj(e,t,n){return t=Lj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lj(e){var t=Aj(e,"string");return typeof t=="symbol"?t:t+""}function Aj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bg(e){return e&&e.map((t,n)=>Le.createElement(t.tag,Qs({key:n},t.attr),Bg(t.child)))}function B(e){return t=>Le.createElement(Mj,Xs({attr:Qs({},e.attr)},t),Bg(e.child))}function Mj(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=Pj(e,Tj),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Le.createElement("svg",Xs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:Qs(Qs({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Le.createElement("title",null,s),e.children)};return eh!==void 0?Le.createElement(eh.Consumer,null,n=>t(n)):t(Og)}function _j(e){return B({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function lu(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Ij(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function cu(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function uu(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Fj(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function nh(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"},child:[]}]})(e)}const Vj="/AnimateReact/assets/react-DF0Kc7gD.png",zg="/AnimateReact/assets/framerMotion-h55gUaEX.png",Dj="/AnimateReact/assets/tailwind-BR9rzo2S.png",Oj=()=>a.jsx("footer",{className:"bg-[#1E1E1E] text-[#E0E0E0] p-4",children:a.jsxs("div",{className:"container mx-auto flex flex-col md:flex-row md:w-screen md:space-x-4 justify-around items-center space-y-4 md:space-y-0",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("img",{className:"h-12 w-auto md:h-16 m-2",src:Cn,alt:"logo"}),a.jsxs("div",{className:"text-base text-gray-400",children:[a.jsx("p",{className:"text-white",children:"Designed by Sheetal Joshi"}),a.jsx("p",{children:"© 2024 Sheetal Joshi. All rights reserved."})]})]}),a.jsxs("div",{className:"flex flex-col items-center md:items-start text-sm",children:[a.jsx("h1",{className:"text-base font-bold",children:"Socials"}),a.jsxs("a",{href:"mailto:sheetaljoshi262@gmail.com",className:"flex items-center mt-2",children:[a.jsx(Fj,{className:"mx-2 text-white hover:text-[#03DAC6]",size:18}),a.jsx("span",{className:"text-white hover:text-[#03DAC6]",children:"Email"})]}),a.jsxs("a",{href:"https://linkedin.com",className:"flex items-center mt-2",children:[a.jsx(Ij,{className:"mx-2 text-white hover:text-[#03DAC6]",size:18}),a.jsx("span",{className:"text-white hover:text-[#03DAC6]",children:"LinkedIn"})]}),a.jsxs("a",{href:"https://github.com",className:"flex items-center mt-2",children:[a.jsx(_j,{className:"mx-2 text-white hover:text-[#03DAC6]",size:18}),a.jsx("span",{className:"text-white hover:text-[#03DAC6]",children:"GitHub"})]})]}),a.jsxs("div",{className:"text-sm text-center md:text-left",children:[a.jsx("h1",{className:"text-base font-bold",children:"Sites"}),a.jsx(Qn,{to:"/",className:"text-white hover:text-[#03DAC6] mt-2 block",children:"Home"}),a.jsx(Qn,{to:"/App",className:"text-white hover:text-[#03DAC6] mt-2 block",children:"Components"}),a.jsx(Qn,{to:"/AboutMe",className:"text-white hover:text-[#03DAC6] mt-2 block",children:"About Me"})]}),a.jsx("div",{className:"w-[18rem] md:w-[30rem] text-sm text-center md:text-left",children:a.jsxs("p",{children:["This project is a"," ",a.jsx("img",{className:"inline h-5 mx-1",src:Vj,alt:"React"}),"React styling library using"," ",a.jsx("img",{className:"inline h-4 mx-1",src:zg,alt:"Framer Motion"}),"Tailwind CSS and"," ",a.jsx("img",{className:"inline h-3 mx-1",src:Dj,alt:"Tailwind"}),"Framer Motion for responsive, animated UIs."]})})]})});function rh(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}function Bj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(e)}function zj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"10"},child:[]},{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"16"},child:[]}]})(e)}function Hg(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function Hj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"13 17 18 12 13 7"},child:[]},{tag:"polyline",attr:{points:"6 17 11 12 6 7"},child:[]}]})(e)}function Uj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"},child:[]}]})(e)}function $j(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(e)}function Ug(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(e)}function Wj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(e)}function Gj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function Kj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(e)}function Yj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"},child:[]}]})(e)}function Xj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(e)}function Qj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},child:[]},{tag:"path",attr:{d:"M22 12A10 10 0 0 0 12 2v10z"},child:[]}]})(e)}function qj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(e)}function Zj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)}function Jj(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(e)}function e4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(e)}function t4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function $g(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function n4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}const lt=()=>{const[e,t]=y.useState(!1);return a.jsxs("div",{children:[a.jsx("div",{className:"lg:hidden md:hidden p-4",children:a.jsx("button",{onClick:()=>t(n=>!n),className:"text-3xl focus:outline-none",children:e?a.jsx(n4,{}):a.jsx(Kj,{})})}),a.jsx("div",{className:`sticky top-0 h-screen  bg-white text-[#272727] w-[12rem] md:w-[14rem] lg:w-[15rem] border-r-2 border-black p-6 pt-8 no-scrollbar overflow-y-auto transition-transform transform ${e?"translate-x-0":"-translate-x-full"} md:translate-x-0`,children:a.jsxs("div",{className:"flex flex-col space-y-8",children:[a.jsx("span",{className:"text-2xl md:text-3xl font-bold",children:"Components"}),["Navbar","Cards","Buttons","Text","Footer","Carousels","Toggles"].map((n,r)=>a.jsx(Qn,{to:`/${n.toLowerCase()}`,className:"hover:bg-[#03DAC6] border-2 border-transparent hover:border-black text-lg md:text-xl font-semibold p-1 rounded-md",children:n},r))]})}),e&&a.jsx("div",{onClick:()=>t(!1),className:"fixed inset-0 bg-black bg-opacity-50 md:hidden lg:hidden"})]})},r4={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:.05}}},$i={hidden:{opacity:0},visible:{opacity:1}},i4=()=>a.jsx("div",{className:"bg-gradient-to-r from-teal-300 to-blue-500 font-sans w-full h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8",children:a.jsxs(R.div,{className:"text-black text-center",initial:"hidden",animate:"visible",variants:r4,transition:{repeat:1/0,repeatType:"loop",delayChildren:3,ease:"linear"},children:[a.jsx(R.h1,{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2",children:Array.from("AnimateReact").map((i,s)=>a.jsx(R.span,{variants:$i,children:i===" "?" ":i},s))}),a.jsx(R.h1,{className:"text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2",children:Array.from("Addictive, Interactive UI Components").map((i,s)=>a.jsx(R.span,{variants:$i,children:i===" "?" ":i},s))}),a.jsx(R.h2,{className:"text-xs sm:text-sm md:text-lg lg:text-xl text-black mb-2",children:Array.from("Instantly Integrate Animated, Responsive UI Elements with React, ").map((i,s)=>a.jsx(R.span,{variants:$i,children:i===" "?" ":i},s))}),a.jsx(R.h2,{className:"text-xs sm:text-sm md:text-lg lg:text-xl text-black",children:Array.from(" Tailwind CSS, and Framer Motion—Just Copy & Paste in Two Clicks").map((i,s)=>a.jsx(R.span,{variants:$i,children:i===" "?" ":i},s))})]})}),Wi="Encrypt data",ih=2,s4=50,sh="!@#$%^&*():{};|,.<>/?",o4=()=>{const e=y.useRef(null),[t,n]=y.useState(Wi),[r,i]=y.useState(!1),s=()=>{let u=0;e.current=setInterval(()=>{const d=Wi.split("").map((f,h)=>{if(u/ih>h)return f;const v=Math.floor(Math.random()*sh.length);return sh[v]}).join("");n(d),u++,u>=Wi.length*ih&&o()},s4)},o=()=>{clearInterval(e.current||void 0),n(Wi)},l=`
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
`,c=()=>{navigator.clipboard.writeText(l.trim()),i(!0),setTimeout(()=>i(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mb-6 mt-5",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Ecrypted Data Button"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsxs(R.button,{whileHover:{scale:1.025},whileTap:{scale:.975},onMouseEnter:s,onMouseLeave:o,className:"group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-green-500 transition-colors hover:text-green-500",children:[a.jsxs("div",{className:"relative z-10 flex items-center gap-2",children:[a.jsx(Wj,{}),a.jsx("span",{children:t})]}),a.jsx(R.span,{initial:{y:"100%"},animate:{y:"-100%"},transition:{repeat:1/0,repeatType:"mirror",duration:1,ease:"linear"},className:"duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-green-600/0 from-40% via-green-600/100 to-green-600/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:l.trim()})}),a.jsx("button",{onClick:c,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:r?"Copied!":"Copy"})]})]})},a4=()=>{const e=y.useRef(null),t=y.useRef(null),[n,r]=y.useState(!1);y.useEffect(()=>{const o=c=>{const{width:u}=c.target.getBoundingClientRect(),f=`${c.offsetX/u*100}%`;t.current.animate({left:f},{duration:250,fill:"forwards"})},l=()=>{t.current.animate({left:"50%"},{duration:100,fill:"forwards"})};return e.current.addEventListener("mousemove",o),e.current.addEventListener("mouseleave",l),()=>{e.current.removeEventListener("mousemove",o),e.current.removeEventListener("mouseleave",l)}},[]);const i=`
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

  `,s=()=>{navigator.clipboard.writeText(i.trim()),r(!0),setTimeout(()=>r(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"SpotLight"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] shadow-sm shadow-black p-6",children:a.jsxs(R.button,{whileTap:{scale:.985},ref:e,className:"relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white",children:[a.jsx("span",{className:"pointer-events-none relative z-10 mix-blend-difference",children:"Hover me"}),a.jsx("span",{ref:t,className:"pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:i.trim()})}),a.jsx("button",{onClick:s,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:n?"Copied!":"Copy"})]})]})},oh=`
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
`,l4=({children:e,...t})=>a.jsxs("button",{...t,className:"group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-black",children:[a.jsx("span",{children:e}),a.jsx("span",{className:"absolute left-0 top-0 h-[2px] w-0 bg-pink-600 transition-all duration-100 group-hover:w-full"}),a.jsx("span",{className:"absolute right-0 top-0 h-0 w-[2px] bg-black transition-all delay-100 duration-100 group-hover:h-full"}),a.jsx("span",{className:"absolute bottom-0 right-0 h-[2px] w-0 bg-pink-600 transition-all delay-200 duration-100 group-hover:w-full"}),a.jsx("span",{className:"absolute bottom-0 left-0 h-0 w-[2px] bg-black transition-all delay-300 duration-100 group-hover:h-full"})]}),c4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(oh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:" p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Outline"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsx(l4,{children:"Hover me"})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:oh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},ah=`
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
`,u4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(ah.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Click"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsx("div",{className:" flex items-center justify-center",children:a.jsx("button",{className:"px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",children:"Hover me"})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:ah.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},d4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(r.trim()),t(!0),setTimeout(()=>t(!1),2e3)},r=`
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

export default ToggleButton;`;return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Options Button"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[14rem] shadow-sm shadow-black p-6",children:a.jsxs("div",{className:"flex gap-2 w-[380px] justify-center",children:[a.jsx(R.button,{className:"flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2",initial:{flex:.75},whileHover:{flex:2},whileTap:{scale:.95,backgroundColor:"#FF003C",color:"#fff"},transition:{duration:.4},style:{"--_c":"#88C100","--b":"5px","--h":"1.8em",flex:"calc(1.25 + var(--_s,0))",height:"var(--h)",color:"var(--_c)",border:"var(--b) solid var(--_c)",background:"conic-gradient(at calc(100% - 1.3 * var(--b)) 0, var(--_c) 209deg, #0000 211deg) border-box",clipPath:"polygon(0 0, 100% 0, calc(100% - 0.577 * var(--h)) 100%, 0 100%)",padding:"0 calc(0.288 * var(--h)) 0 0",margin:"0 calc(-0.288 * var(--h)) 0 0",boxSizing:"border-box"},children:"A"}),a.jsx(R.button,{className:"flex-75 font-bold text-5xl border-4 border-[#FF003C] text-[#FF003C] relative p-2",initial:{flex:.75},whileHover:{flex:2},whileTap:{scale:.95,backgroundColor:"#FF003C",color:"#fff"},transition:{duration:.4},style:{"--_c":"#FF003C","--b":"5px","--h":"1.8em",flex:"calc(.75 + var(--_s,0))",height:"var(--h)",color:"var(--_c)",border:"var(--b) solid var(--_c)",background:"conic-gradient(from -90deg at calc(1.3 * var(--b)) 100%, var(--_c) 119deg, #0000 121deg) border-box",clipPath:"polygon(calc(0.577 * var(--h)) 0, 100% 0, 100% 100%, 0 100%)",margin:"0 0 0 calc(-0.288 * var(--h))",padding:"0 0 0 calc(0.288 * var(--h))"},children:"B"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:r.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},lh=`
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

`,f4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(lh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Clip Hover Button"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center py-20 w-full",children:a.jsxs(R.button,{className:"relative flex items-center justify-center text-white bg-black border rounded-3xl overflow-hidden md:py-10 md:px-20 lg:py-12 lg:px-24 text-3xl md:text-5xl lg:text-6xl",whileHover:"hover",initial:{backgroundColor:"black"},variants:{hover:{backgroundColor:"transparent",transition:{duration:.3,ease:"easeOut"}}},children:[a.jsx(R.span,{className:"relative z-10",initial:{opacity:1,translateY:0},variants:{hover:{opacity:0,translateY:-50,transition:{duration:.4,ease:"easeOut"}}},children:"Welcome To The..."}),a.jsx(R.div,{className:"absolute inset-0 z-0",initial:{clipPath:"circle(0.0% at 50% 100%)"},variants:{hover:{clipPath:"circle(100.0% at 50% 100%)",transition:{duration:.5,ease:"easeOut"}}},style:{backgroundColor:"black",position:"absolute",width:"100%",height:"100%"}}),a.jsx(R.div,{className:"absolute w-full bottom-0 h-full z-10",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.3,ease:"easeOut"}}},children:a.jsx("img",{src:"https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094601_e9Z3yUFuSGRGGMrjslnWJJkvw6M7oMpE.jpg",alt:"Logo",className:"object-fill opacity-60 h-full w-full"})}),a.jsx(R.div,{className:"absolute z-10 text-6xl text-white",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.3,ease:"easeOut"}}},children:"Tournament Of Power"})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:lh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},ch=`
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

`,h4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(ch.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Button Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Morphism Button"}),a.jsx("div",{className:"bg-gray-900 flex items-center justify-center w-[68rem] h-[16rem] shadow-sm shadow-black p-6",children:a.jsxs("button",{className:`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-200
        shadow-[-5px_-5px_6px_rgba(255,_255,_255,_0.8),_5px_5px_6px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `,children:[a.jsx(qj,{}),a.jsx("span",{children:"Hover Me"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:ch.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},p4=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(o4,{}),a.jsx(a4,{}),a.jsx(c4,{}),a.jsx(u4,{}),a.jsx(d4,{}),a.jsx(f4,{}),a.jsx(h4,{})]}),uh=`
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
`,m4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(uh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-6 flex flex-col space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-3",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Reveal Text"}),a.jsx("div",{className:"bg-gray-200 rounded-lg shadow-sm w-[66rem] shadow-black p-6",children:a.jsx("div",{className:"w-full p-8 bg-white px-6 md:px-12 relative",children:a.jsx("div",{className:"h-full flex items-center justify-center flex-col md:flex-row text-center md:text-left relative z-10",children:a.jsxs("div",{className:"text-black",children:[a.jsx(Gi,{children:a.jsx("h1",{className:"text-xl sm:text-2xl md:text-5xl text-black mb-4",children:"Welcome to AnimateReact"})}),a.jsx(Gi,{children:a.jsx("p",{className:"text-sm sm:text-md md:text-lg text-left text-black mb-4",children:"A modern and accessible React UI framework."})}),a.jsx(Gi,{children:a.jsx("p",{className:"text-xs sm:text-sm md:text-md text-left w-[280px] md:w-[400px] text-black mb-2",children:"I ve spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (in case you've got an empty canvas laying around 🎨). Let's connect!"})}),a.jsx(Gi,{children:a.jsx("button",{className:"my-5 bg-blue-500 text-white py-2 px-4 rounded text-xs sm:text-sm md:text-md hover:bg-blue-600",children:"Contact me"})})]})})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:uh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})};function Gi({children:e,width:t="fit-content"}){const n=y.useRef(null),r=Cj(n,{once:!0}),i=Rl(),s=Rl();return y.useEffect(()=>{r&&(i.start("visible"),s.start("visible"))},[r,i,s]),a.jsxs("div",{ref:n,className:"relative overflow-hidden",style:{width:t},children:[a.jsx(R.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:i,transition:{duration:.8,delay:.25},children:e}),a.jsx(R.div,{variants:{hidden:{left:"0%"},visible:{left:"100%"}},initial:"hidden",animate:s,transition:{duration:.5,ease:"easeIn"},style:{position:"absolute",top:"4px",bottom:"4px",left:"0",right:"0",background:"#90cdf4",zIndex:20}})]})}const dh=`
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
`,g4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(dh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold ",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Bubble Text"}),a.jsx("div",{className:"bg-black flex flex-col items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center items-center h-[16rem] text-white",children:"Bubbbbbbbbbble".split("").map((r,i)=>a.jsx("span",{className:`text-6xl font-light transition-all duration-350 cursor-pointer
              hover:font-bold hover:text-blue-500 hover:scale-125`,children:r},i))})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:dh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},fh=`
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
`,hh=25,Ki=({children:e,href:t})=>{const[n,r]=y.useState(!1);return a.jsxs("a",{href:t,className:"relative block overflow-hidden whitespace-nowrap font-black uppercase lg:text-8xl md:text-7xl text-6xl",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{lineHeight:.85,textDecoration:"none"},children:[a.jsx("div",{children:e.split("").map((i,s)=>a.jsx("span",{className:"inline-block transition-transform duration-200 ease-in-out",style:{transform:`translateY(${n?"-100%":"0%"})`,transitionDelay:`${hh*s}ms`},children:i},s))}),a.jsx("div",{className:"absolute inset-0",children:e.split("").map((i,s)=>a.jsx("span",{className:"inline-block transition-transform duration-200 ease-in-out",style:{transform:`translateY(${n?"0%":"100%"})`,transitionDelay:`${hh*s}ms`},children:i},s))})]})},v4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(fh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Mirror Text"}),a.jsx("div",{className:" flex items-center justify-center w-full shadow-sm shadow-black",children:a.jsxs("div",{className:"grid h-[35vh] md:h-[25rem] w-full place-content-center gap-2 bg-green-300 text-black",children:[a.jsx(Ki,{href:"#",children:"Twitter"}),a.jsx(Ki,{href:"#",children:"LinkedIn"}),a.jsx(Ki,{href:"#",children:"Facebook"}),a.jsx(Ki,{href:"#",children:"Instagram"})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:fh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})})},x4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},ph=`
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



`,y4="Get Staggered!",w4=()=>{const e=[y4],t=Rl(),n=y.useRef(null),[r,i]=y.useState(!1),[s,o]=y.useState(!1),l=()=>{navigator.clipboard.writeText(ph.trim()),o(!0),setTimeout(()=>o(!1),2e3)},c=()=>{if(n.current){const{top:u}=n.current.getBoundingClientRect();u<window.innerHeight&&u>0&&i(!0)}};return y.useEffect(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[]),y.useEffect(()=>{r&&t.start("visible")},[r,t]),a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Staggered Text"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center p-20 w-full",children:a.jsx(R.div,{ref:n,initial:"hidden",animate:t,variants:{visible:{transition:{staggerChildren:.1}}},children:e.map((u,d)=>a.jsx("div",{className:"block",children:u.split(" ").map((f,h)=>a.jsxs("span",{className:"inline-block font-bold text-6xl",children:[f.split("").map((v,x)=>a.jsx(R.span,{variants:x4,className:"inline-block",children:v},x)),a.jsx("span",{className:"inline-block",children:"  "})]},h))},d))})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:ph.trim()})}),a.jsx("button",{onClick:l,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:s?"Copied!":"Copy"})]})]})},mh=`
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
`,b4=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(!0),[i,s]=y.useState(!1),o=()=>{navigator.clipboard.writeText(mh.trim()),s(!0),setTimeout(()=>s(!1),2e3)},l=y.useMemo(()=>["Hello","And","Welcome","To","My","Project","Which","Is","AnimateReact","Website"],[]);return y.useEffect(()=>{let c=200,u=0,d=0,f=!1;const h=setInterval(()=>{let x=` ${l[u]} `;d===x.length?f=!0:d===0&&(f=!1),f?(d--,d===0&&(u++,u===l.length&&(u=0))):d++,t(x.slice(0,d).trim())},c),v=setInterval(()=>{r(x=>!x)},c);return()=>{clearInterval(h),clearInterval(v)}},[l]),a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Text Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Typewritter Text"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex h-screen items-center justify-center",children:a.jsxs("h1",{className:"text-6xl font-bold",children:[e,a.jsx("span",{className:`${n?"opacity-50":"opacity-0"} transition-opacity duration-300`,children:"_"})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:mh.trim()})}),a.jsx("button",{onClick:o,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:i?"Copied!":"Copy"})]})]})},N4=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(m4,{}),a.jsx(g4,{}),a.jsx(v4,{}),a.jsx(w4,{}),a.jsx(b4,{})]}),j4=()=>{const[e,t]=y.useState(!1),n=`
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
  `,r=()=>{navigator.clipboard.writeText(n.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Socials"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] shadow-sm shadow-black p-6",children:a.jsxs("div",{className:"grid gap-4 grid-cols-2 lg:grid-cols-4",children:[a.jsx(Yi,{title:"Account",subtitle:"Manage profile",href:"#",Icon:t4}),a.jsx(Yi,{title:"Email",subtitle:"Manage email",href:"#",Icon:Gj}),a.jsx(Yi,{title:"Team",subtitle:"Manage team",href:"#",Icon:$g}),a.jsx(Yi,{title:"Billing",subtitle:"Manage cards",href:"#",Icon:Uj})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:n.trim()})}),a.jsx("button",{onClick:r,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},Yi=({title:e,subtitle:t,Icon:n,href:r})=>a.jsxs("a",{href:r,className:"w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white",children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"}),a.jsx(n,{className:"absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300"}),a.jsx(n,{className:"mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300"}),a.jsx("h3",{className:"font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300",children:e}),a.jsx("p",{className:"text-slate-400 group-hover:text-violet-200 relative z-10 duration-300",children:t})]}),C4="/AnimateReact/assets/cosmetic-BwIaOHG6.png",S4="/AnimateReact/assets/cosmeticBg-DFyHgxoi.jpg",k4=()=>{const[e,t]=y.useState(!1),n=[{title:"Contains all the nutrition",link:"#",coverImage:S4,characterImage:C4},{title:"Long lasting and smooth",link:"#",coverImage:"https://as2.ftcdn.net/v2/jpg/01/37/50/39/1000_F_137503986_MplaPP9hN4DDL2COEXVyGXmv3WDe2JmF.jpg",characterImage:"https://as2.ftcdn.net/v2/jpg/08/67/83/77/1000_F_867837775_2Jp4EvQbukIj2KJYDbHIfLDkh5bx6zVY.webp"}],r=`
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

  `,i=()=>{navigator.clipboard.writeText(r.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"PopUp Cards"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6",children:n.map((s,o)=>a.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",children:a.jsxs(R.div,{className:"relative flex justify-center items-end w-[calc(300px/1.5)] h-[300px] mx-10",whileHover:{rotateX:40,translateY:"-5%",boxShadow:"2px 35px 32px -8px rgba(0, 0, 0, 0.75)"},children:[a.jsxs("div",{className:"absolute w-full h-full transition-all",children:[a.jsx("img",{src:s.coverImage,className:"w-full h-full object-cover",alt:"Cover"}),a.jsx("div",{className:"absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent to-[rgba(12,13,19,0.5)]"}),a.jsx("div",{className:"absolute bottom-0 w-full h-20 opacity-1 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[rgba(12,13,19,0.5)]"})]}),a.jsx(R.div,{className:"w-full text-center text-white font-bold text-lg transition-transform duration-500",initial:{translateY:"0%",translateZ:"100px"},whileHover:{translateY:"-50px",translateZ:"100px"},children:s.title}),a.jsx(R.img,{src:s.characterImage,className:"absolute w-full h-full opacity-0 transition-opacity duration-500",alt:"Character",initial:{opacity:0,translateY:"0%"},whileHover:{opacity:1,translateY:"-20%"}})]})},o))}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:r.trim()})}),a.jsx("button",{onClick:i,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})};function T4(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"},child:[]}]})(e)}const gh=`
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
`,P4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(gh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"SlideIn Text Card"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[35rem] shadow-sm shadow-black p-6",children:a.jsx("main",{className:"flex flex-col justify-center items-center py-12 font-roboto",children:a.jsxs(R.div,{className:"relative w-[20rem] h-[30rem] rounded-lg overflow-hidden cursor-pointer shadow-lg text-gray-100",whileHover:"hover",children:[a.jsx(R.img,{src:"https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",alt:"Card",className:"absolute object-cover w-full h-full top-0 left-0 opacity-90",variants:{hover:{opacity:1,transition:{duration:.3}}}}),a.jsx(R.h2,{className:"absolute bottom-8 left-8 uppercase text-2xl font-roboto-condensed",initial:{y:0},variants:{hover:{y:"-40vh",transition:{duration:.4}}},children:"Card Heading"}),a.jsx(R.span,{className:"absolute bottom-20 left-8 max-w-[80%] opacity-0",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.4,delay:.4}}},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic."}),a.jsxs(R.a,{href:"#",className:"absolute bottom-10 left-8 flex items-center gap-2 text-inherit no-underline opacity-0",initial:{opacity:0},variants:{hover:{opacity:1,transition:{duration:.4,delay:.6}}},children:["Find out more",a.jsx(T4,{size:24,className:"inline-block"})]})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:gh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},E4=()=>{const e={initial:{scale:1},hover:{scale:1.05}},t={initial:{y:"62%",opacity:0},hover:{y:"0%",opacity:1,transition:{duration:.3,delay:.3}}},n={initial:{opacity:0,scaleX:0},hover:{opacity:1,scaleX:1,transition:{duration:.3,delay:.3}}},r={initial:{opacity:0},hover:{opacity:1,transition:{duration:.3,delay:.6}}},i=`
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
;`,s=()=>{const[o,l]=y.useState(!1),c=()=>{navigator.clipboard.writeText(i.trim()),l(!0),setTimeout(()=>l(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4 cursor-pointer",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Slide Card"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6",children:a.jsxs(R.article,{className:"relative max-w-xs h-[25rem] overflow-hidden rounded-lg shadow-lg bg-white",variants:e,initial:"initial",whileHover:"hover",children:[a.jsx(R.img,{className:"object-cover w-full h-[30rem]",src:"https://as1.ftcdn.net/v2/jpg/05/22/27/22/1000_F_522272281_XBqWaPMejrG9XS0p4SJHS146GOq0gecC.jpg",alt:"Photo of Cartagena's cathedral at the background and some colonial style houses"}),a.jsxs(R.div,{className:"absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black to-transparent",variants:t,children:[a.jsxs(R.div,{className:"space-y-2",children:[a.jsx(R.h2,{className:"text-2xl font-bold",variants:n,children:"Colombia"}),a.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam."})]}),a.jsx(R.button,{className:"px-4 py-2 mt-4 text-black bg-yellow-500 rounded",variants:r,children:"Read more"})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:i.trim()})}),a.jsx("button",{onClick:c,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:o?"Copied!":"Copy"})]})]})};return a.jsx(s,{})},R4=()=>{const[e,t]=y.useState(!1),n=o=>{navigator.clipboard.writeText(o.trim()),t(!0),setTimeout(()=>t(!1),2e3)},r={initial:{rotate:0},hover:{rotate:5}},i={initial:{translateY:0,rotate:0},hover:{translateY:"-5rem",rotate:-50,type:Hc,stiffness:10}},s=`
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

`;return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Card Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"LiftUp Card"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[30rem] shadow-sm shadow-black p-6",children:a.jsxs("main",{className:"container flex justify-around mb-10",children:[a.jsxs(R.section,{className:"relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-red-700 text-white cursor-pointer",variants:r,initial:"initial",whileHover:"hover",children:[a.jsx(R.div,{className:"product-image",variants:i,initial:"initial",whileHover:"hover",children:a.jsx("img",{src:"https://i.ibb.co/cNWqxGx/red.png",alt:"OFF-white Red Edition",draggable:"false",className:"h-56 w-full object-cover"})}),a.jsxs("div",{className:"product-info text-center",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"Nike X OFF-white"}),a.jsx("p",{className:"my-2 text-sm",children:"The 10: Air Jordan 1 off-white - Chicago"}),a.jsx("div",{className:"price text-xl",children:"$999"})]}),a.jsxs("div",{className:"btn flex justify-between mt-4",children:[a.jsx("button",{className:"buy-btn bg-black text-white py-2 px-4 rounded",children:"Buy Now"}),a.jsx("button",{className:"fav flex items-center justify-center bg-white border border-black rounded p-1",children:a.jsx("svg",{className:"svg h-6 w-6 fill-current text-black",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"})})})]})]}),a.jsxs(R.section,{className:"relative p-4 w-80 h-[400px] shadow-lg rounded-lg bg-blue-600 text-white cursor-pointer",variants:r,initial:"initial",whileHover:"hover",children:[a.jsx(R.div,{className:"product-image",variants:i,initial:"initial",whileHover:"hover",children:a.jsx("img",{src:"https://i.ibb.co/0JKpmgd/blue.png",alt:"OFF-white Blue Edition",draggable:"false",className:"h-56 w-full object-cover"})}),a.jsxs("div",{className:"product-info text-center",children:[a.jsx("h2",{className:"text-lg font-semibold",children:"Nike X OFF-white"}),a.jsx("p",{className:"my-2 text-sm",children:'Air Jordan 1 High "Off-White - UNC" sneakers'}),a.jsx("div",{className:"price text-xl",children:"$1599"})]}),a.jsxs("div",{className:"btn flex justify-between mt-4",children:[a.jsx("button",{className:"buy-btn bg-black text-white py-2 px-4 rounded",children:"Buy Now"}),a.jsx("button",{className:"fav flex items-center justify-center bg-white border border-black rounded p-1",children:a.jsx("svg",{className:"svg h-6 w-6 fill-current text-black",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"})})})]})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:s.trim()})}),a.jsx("button",{onClick:()=>n(s),className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},L4=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(j4,{}),a.jsx(k4,{}),a.jsx(P4,{}),a.jsx(R4,{}),a.jsx(E4,{})]});var Wg={exports:{}},A4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",M4=A4,_4=M4;function Gg(){}function Kg(){}Kg.resetWarningCache=Gg;var I4=function(){function e(r,i,s,o,l,c){if(c!==_4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kg,resetWarningCache:Gg};return n.PropTypes=n,n};Wg.exports=I4();var F4=Wg.exports;const F=Lh(F4),qs=e=>{const{color:t,size:n,...r}=e;return Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},Le.createElement("path",{d:"M12,2a10,10,0,1,0,5,18.66,1,1,0,1,0-1-1.73A8,8,0,1,1,20,12v.75a1.75,1.75,0,0,1-3.5,0V8.5a1,1,0,0,0-1-1,1,1,0,0,0-1,.79A4.45,4.45,0,0,0,12,7.5,4.5,4.5,0,1,0,15.3,15,3.74,3.74,0,0,0,22,12.75V12A10,10,0,0,0,12,2Zm0,12.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Z"}))};qs.propTypes={color:F.string,size:F.oneOfType([F.string,F.number])};qs.defaultProps={color:"currentColor",size:"24"};const Zs=e=>{const{color:t,size:n,...r}=e;return Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},Le.createElement("path",{d:"M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"}))};Zs.propTypes={color:F.string,size:F.oneOfType([F.string,F.number])};Zs.defaultProps={color:"currentColor",size:"24"};const du=e=>{const{color:t,size:n,...r}=e;return Le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:t,...r},Le.createElement("path",{d:"M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"}))};du.propTypes={color:F.string,size:F.oneOfType([F.string,F.number])};du.defaultProps={color:"currentColor",size:"24"};const V4=()=>a.jsx("div",{className:"mt-8 w-full flex items-center justify-center bg-gray-900",children:a.jsx("div",{className:"relative w-full h-full",children:a.jsx(R.div,{className:"relative",children:a.jsxs("div",{className:"bg-gray-800 p-10 rounded-lg shadow-lg",children:[a.jsxs("h6",{className:"text-white text-lg font-bold mb-4",children:[a.jsx("span",{className:"cursor-pointer",children:"Log In"})," |"," ",a.jsx("span",{className:"cursor-pointer",children:"Sign Up"})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-yellow-400 text-xl font-semibold mb-4",children:"Log In"}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"email",name:"logemail",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Email"}),a.jsx(qs,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"password",name:"logpass",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Password"}),a.jsx(Zs,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsx("button",{className:"btn w-full mt-4 bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400 p-3 rounded-lg",children:"Submit"}),a.jsx("p",{className:"text-sm mt-4 text-center text-gray-400",children:a.jsx("a",{href:"#0",className:"hover:text-yellow-400",children:"Forgot your password?"})})]}),a.jsxs("div",{className:"hidden",children:[a.jsx("h4",{className:"text-yellow-400 text-xl font-semibold mb-4",children:"Sign Up"}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"text",name:"logname",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Full Name"}),a.jsx(du,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"email",name:"logemail",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Email"}),a.jsx(qs,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsxs("div",{className:"relative mb-4",children:[a.jsx("input",{type:"password",name:"logpass",className:" pl-12 w-full text-gray-300 bg-gray-700 rounded-md focus:outline-none",placeholder:"Your Password"}),a.jsx(Zs,{className:"absolute top-0 left-3 text-yellow-400 h-8 w-8"})]}),a.jsx("button",{className:"btn w-full mt-4 bg-yellow-400 text-blue-900 hover:bg-blue-900 hover:text-yellow-400 p-3 rounded-lg",children:"Submit"})]})]})})})}),D4=()=>a.jsx("div",{className:"flex flex-col",children:a.jsx(V4,{})}),vh=`
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
`,O4=()=>{const[e,t]=y.useState(!0),[n,r]=y.useState("Dashboard"),[i,s]=y.useState(!1),o=()=>{navigator.clipboard.writeText(vh.trim()),s(!0),setTimeout(()=>s(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4 lg:w-full md:w-fit sm:w-fit",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Side Navbar"}),a.jsx("div",{className:"bg-slate-300 shadow-sm shadow-black p-6",children:a.jsxs(R.nav,{layout:!0,className:"sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2",style:{width:e?"225px":"fit-content"},children:[a.jsx("div",{className:"mb-3 border-b border-slate-300 pb-3",children:a.jsxs("div",{className:"flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(R.div,{layout:!0,className:"grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600",children:a.jsxs("svg",{width:"24",height:"auto",viewBox:"0 0 50 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-slate-50",children:[a.jsx("path",{d:"M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z",stopColor:"#000000"}),a.jsx("path",{d:"M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z",stopColor:"#000000"})]})}),e&&a.jsxs(R.div,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.125},children:[a.jsx("span",{className:"block text-xs font-semibold",children:"Navbar"}),a.jsx("span",{className:"block text-xs text-slate-500",children:"Elements"})]})]}),e&&a.jsx(Hg,{className:"mr-2"})]})}),a.jsx("div",{className:"space-y-1 mb-1",children:[{Icon:Ug,title:"Dashboard",notifs:0},{Icon:$j,title:"Sales",notifs:3},{Icon:Yj,title:"View Site",notifs:0},{Icon:Zj,title:"Products",notifs:0},{Icon:e4,title:"Tags",notifs:0},{Icon:zj,title:"Analytics",notifs:0},{Icon:$g,title:"Members",notifs:0}].map(({Icon:l,title:c,notifs:u})=>a.jsxs(R.button,{layout:!0,onClick:()=>r(c),className:`relative flex h-10 w-full items-center rounded-md transition-colors ${n===c?"bg-indigo-100 text-indigo-800":"text-slate-500 hover:bg-slate-100"}`,children:[a.jsx(R.div,{layout:!0,className:"grid h-full w-10 place-content-center text-lg",children:a.jsx(l,{})}),e&&a.jsx(R.span,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.125},className:"text-xs font-medium",children:c}),u>0&&e&&a.jsx(R.span,{initial:{scale:0,opacity:0},animate:{opacity:1,scale:1},style:{y:"-50%"},transition:{delay:.5},className:"absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white",children:u})]},c))}),a.jsx(R.button,{layout:!0,onClick:()=>t(l=>!l),className:"absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100","aria-expanded":e,children:a.jsxs("div",{className:"flex items-center p-1",children:[a.jsx(R.div,{layout:!0,className:"grid  size-10 place-content-center text-lg",children:a.jsx(Hj,{className:`transition-transform ${e&&"rotate-180"}`})}),e&&a.jsx(R.span,{layout:!0,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.125},className:"text-xs font-medium",children:"Hide"})]})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:vh.trim()})}),a.jsx("button",{onClick:o,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:i?"Copied!":"Copy"})]})]})},xh=`
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
`,B4=()=>{const[e,t]=y.useState(null),[n,r]=y.useState(null),[i,s]=y.useState(!1),o=()=>{navigator.clipboard.writeText(xh.trim()),s(!0),setTimeout(()=>s(!1),2e3)},l=f=>{typeof e=="number"&&typeof f=="number"?r(e>f?"r":"l"):f===null&&r(null),t(f)},c=[{title:"Products",Component:()=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex gap-4",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm text-white font-medium",children:"Startup"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"Bookkeeping"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"Invoicing"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm text-white font-medium",children:"Scaleup"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"Live Coaching"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"Reviews"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"Tax/VAT"})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"mb-2 text-sm text-white font-medium",children:"Enterprise"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"White glove"}),a.jsx("a",{href:"#",className:"mb-1 block text-sm text-neutral-400",children:"SOX Compliance"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"Staffing"}),a.jsx("a",{href:"#",className:"block text-sm text-neutral-400",children:"More"})]})]}),a.jsxs("button",{className:"ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300",children:[a.jsx("span",{children:"View more"}),a.jsx(rh,{})]})]})},{title:"Pricing",Component:()=>a.jsxs("div",{className:"grid grid-cols-3 gap-4 divide-x divide-neutral-700",children:[a.jsxs("a",{href:"#",className:"flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50",children:[a.jsx(Ug,{className:"mb-2 text-xl text-indigo-300"}),a.jsx("span",{className:"text-xs",children:"Startup"})]}),a.jsxs("a",{href:"#",className:"flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50",children:[a.jsx(Bj,{className:"mb-2 text-xl text-indigo-300"}),a.jsx("span",{className:"text-xs",children:"Scaleup"})]}),a.jsxs("a",{href:"#",className:"flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50",children:[a.jsx(Qj,{className:"mb-2 text-xl text-indigo-300"}),a.jsx("span",{className:"text-xs",children:"Enterprise"})]})]})},{title:"Blog",Component:()=>a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("a",{href:"#",children:[a.jsx("img",{className:"mb-2 h-14 w-fit rounded object-fit",src:Cn,alt:"Placeholder image"}),a.jsx("h4",{className:"mb-0.5 text-sm text-white font-medium",children:"Lorem ipsum dolor"}),a.jsx("p",{className:"text-sm text-neutral-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo quidem eos."})]}),a.jsxs("a",{href:"#",children:[a.jsx("img",{className:"mb-2 h-14 w-fit rounded object-fit",src:zg,alt:"Placeholder image"}),a.jsx("h4",{className:"mb-0.5 text-sm text-white font-medium",children:"Lorem ipsum dolor"}),a.jsx("p",{className:"text-sm text-neutral-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo quidem eos."})]})]}),a.jsxs("button",{className:"ml-auto mt-4 flex items-center justify-center gap-1 text-sm text-indigo-300",children:[a.jsx("span",{children:"View more"}),a.jsx(rh,{})]})]})}].map((f,h)=>({...f,id:h+1})),u=({selected:f,dir:h})=>a.jsxs(R.div,{id:"overlay-content",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:8},className:"absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4",children:[a.jsx("div",{className:"absolute -top-[24px] left-0 right-0 h-[24px]"}),a.jsx(R.span,{style:{clipPath:"polygon(0 0, 100% 0, 50% 50%, 0% 100%)"},animate:{left:"50%"},transition:{duration:.25,ease:"easeInOut"},className:"absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"}),c.map(v=>a.jsx("div",{className:"overflow-hidden",children:f===v.id&&a.jsx(R.div,{initial:{opacity:0,x:h==="l"?100:h==="r"?-100:0},animate:{opacity:1,x:0},transition:{duration:.25,ease:"easeInOut"},children:a.jsx(v.Component,{})})},v.id))]}),d=({children:f,tab:h,handleSetSelected:v,selected:x})=>a.jsxs("button",{id:`shift-tab-${h}`,onMouseEnter:()=>v(h),onClick:()=>v(h),className:`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${x===h?" bg-neutral-800 text-neutral-100":"text-neutral-400"}`,children:[a.jsx("span",{children:f}),a.jsx(Hg,{className:`transition-transform ${x===h?"rotate-180":""}`})]});return a.jsxs("div",{className:"p-4 space-y-4 lg:w-full md:w-fit sm:w-fit",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Tab Shifting"}),a.jsx("div",{className:"bg-black flex justify-center w-[68rem] h-[30rem] shadow-sm shadow-black p-6",children:a.jsxs("div",{onMouseLeave:()=>l(null),className:"relative flex h-fit gap-2",children:[c.map(f=>a.jsx(d,{selected:e,handleSetSelected:l,tab:f.id,children:f.title},f.id)),a.jsx(Ag,{children:e&&a.jsx(u,{dir:n,selected:e})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:xh.trim()})}),a.jsx("button",{onClick:o,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:i?"Copied!":"Copy"})]})]})},yh=`
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
`,z4=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState({left:0,width:0}),i=()=>{navigator.clipboard.writeText(yh.trim()),t(!0),setTimeout(()=>t(!1),2e3)},[s,o]=y.useState(!1);return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Hover Slide Tab"}),a.jsx("div",{className:"bg-gray-200 flex justify-center w-[68rem] h-[16rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center p-20",children:a.jsxs("ul",{className:"relative flex border-2 border-black rounded-full bg-white p-1",onMouseLeave:()=>{o(!1)},children:[a.jsx(kn,{setPosition:r,setIsHovered:o,children:"Home"}),a.jsx(kn,{setPosition:r,setIsHovered:o,children:"Pricing"}),a.jsx(kn,{setPosition:r,setIsHovered:o,children:"Features"}),a.jsx(kn,{setPosition:r,setIsHovered:o,children:"Docs"}),a.jsx(kn,{setPosition:r,setIsHovered:o,children:"Blog"}),a.jsx(Yg,{position:n,isHovered:s})]})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:yh.trim()})}),a.jsx("button",{onClick:i,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},kn=({children:e,setPosition:t,setIsHovered:n})=>{const r=y.useRef(null);return a.jsx("li",{ref:r,onMouseEnter:()=>{if(!r.current)return;const{offsetLeft:i,offsetWidth:s}=r.current;t({left:i,width:s}),n(!0)},className:"relative z-10 py-3 px-5 text-xs uppercase text-white cursor-pointer mix-blend-difference transition-colors duration-200 ease-in-out hover:bg-black",children:e})};kn.propTypes={children:F.node.isRequired,setPosition:F.func.isRequired,setIsHovered:F.func.isRequired};const Yg=({position:e,isHovered:t})=>a.jsx(R.li,{className:"absolute rounded-full bg-black",initial:{opacity:0,width:0},animate:{left:e.left,width:e.width,opacity:t?1:0,transition:{duration:.3,ease:"easeInOut"}},style:{height:"36px"}});Yg.propTypes={position:F.shape({left:F.number.isRequired,width:F.number.isRequired}).isRequired,isHovered:F.bool.isRequired};const H4=({children:e,href:t,FlyoutContent:n})=>{const[r,i]=y.useState(!1),s=n&&r;return a.jsxs("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"relative w-fit h-fit",children:[a.jsxs("a",{href:t,className:"relative text-white",children:[e,a.jsx("span",{style:{transform:s?"scaleX(1)":"scaleX(0)"},className:"absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"})]}),a.jsx(Ag,{children:s&&a.jsxs(R.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:15},style:{translateX:"-50%"},transition:{duration:.3,ease:"easeOut"},className:"absolute left-1/2 top-12 bg-white text-black shadow-xl p-4 rounded-lg",children:[a.jsx("div",{className:"absolute -top-6 left-0 right-0 h-6 bg-transparent"}),a.jsx("div",{className:"absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"}),a.jsx(n,{})]})})]})},U4=()=>a.jsxs("div",{className:"w-64 bg-white p-6 shadow-xl",children:[a.jsxs("div",{className:"mb-3 space-y-3",children:[a.jsx("h3",{className:"font-semibold",children:"For Individuals"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Introduction"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Pay as you go"})]}),a.jsxs("div",{className:"mb-6 space-y-3",children:[a.jsx("h3",{className:"font-semibold",children:"For Companies"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Startups"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"SMBs"}),a.jsx("a",{href:"#",className:"block text-sm hover:underline",children:"Enterprise"})]}),a.jsx("button",{className:"w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white",children:"Contact sales"})]}),wh=`
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
`,$4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(wh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Single Tab Navbar"}),a.jsx("div",{className:"bg-neutral-900 flex justify-center w-[68rem] h-[30rem] shadow-sm shadow-black p-6",children:a.jsx("div",{className:"flex justify-center w-full px-3 py-2",children:a.jsx(H4,{href:"#",FlyoutContent:U4,children:"Pricing"})})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:wh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},bh=["Home","Search","About","FAQ"],Nh=`
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
`,W4=()=>{const[e,t]=y.useState(bh[0]),[n,r]=y.useState(!1),i=()=>{navigator.clipboard.writeText(Nh.trim()),r(!0),setTimeout(()=>r(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold ",children:"Navbar Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Chip Navbar"}),a.jsx("div",{className:" flex items-center justify-center h-[16rem] w-[68rem]  ",children:a.jsx("div",{className:"px-2 h-full w-full bg-slate-900 flex items-center justify-center flex-wrap gap-2",children:bh.map(s=>a.jsx(G4,{text:s,selected:e===s,setSelected:t},s))})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Nh.trim()})}),a.jsx("button",{onClick:i,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:n?"Copied!":"Copy"})]})]})},G4=({text:e,selected:t,setSelected:n})=>a.jsxs("button",{onClick:()=>n(e),className:`${t?"text-white":"text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`,children:[a.jsx("span",{className:"relative z-10",children:e}),t&&a.jsx(R.span,{layoutId:"pill-tab",transition:{type:"spring",duration:.5},className:"absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"})]}),K4=()=>a.jsxs("div",{className:"flex flex-col md:w-full",children:[a.jsx(O4,{}),a.jsx(B4,{}),a.jsx(z4,{}),a.jsx($4,{}),a.jsx(W4,{})]}),jh=`
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
`,Xi=["https://img.freepik.com/free-photo/anime-style-mythical-dragon-creature_23-2151112867.jpg?t=st=1728918526~exp=1728922126~hmac=9234883d72b480a3cf7f0f04432fd2276dac6d858cc1c9778bab2cd9e0d277f2&w=826","https://as2.ftcdn.net/v2/jpg/09/00/09/47/1000_F_900094770_SCnMwAEDXrKpo6rnVLvJ8O38nkpWTBvw.jpg","https://as2.ftcdn.net/v2/jpg/09/00/08/03/1000_F_900080386_wHrO6OYSq4Hh4aYHaheBYyzwl36GNWn9.jpg","https://as1.ftcdn.net/v2/jpg/09/00/09/46/1000_F_900094627_N2GRUszK9SvR8lokKwjOi7mHU26BehPL.jpg","https://as2.ftcdn.net/v2/jpg/10/21/46/85/1000_F_1021468540_kRF74ztX8zgVKgZXjvUTnSJEBi0IzV5G.jpg","https://img.freepik.com/free-photo/portrait-young-child-with-surreal-pet-dragon_23-2151668564.jpg?w=740&t=st=1728915384~exp=1728915984~hmac=dc753d6ecdc4df23f16c09958b7564cc2d164f675891a36138ac1e9fadc77243","https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112792.jpg?t=st=1728915475~exp=1728919075~hmac=331e7a1935db9b082c00841be12eed9c68d3e14c727790c8625cdd8f5887dce9&w=826"],Y4=4e3,Ch=50,Sh={type:"spring",mass:3,stiffness:400,damping:50},X4=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(jh.trim()),t(!0),setTimeout(()=>t(!1),2e3)},[r,i]=y.useState(0),s=Mg(0);y.useEffect(()=>{const l=setInterval(()=>{s.get()===0&&i(u=>u===Xi.length-1?0:u+1)},Y4);return()=>clearInterval(l)},[]);const o=()=>{const l=s.get();l<=-Ch&&r<Xi.length-1?i(c=>c+1):l>=Ch&&r>0&&i(c=>c-1)};return a.jsxs("div",{className:"pl-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-9",children:"Carousel Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Swipe Carousel"}),a.jsx("div",{className:"relative flex items-center justify-center h-[30rem] w-[68rem] overflow-hidden pb-6 bg-neutral-950",children:a.jsxs("div",{className:"w-[69rem]",children:[a.jsx(R.div,{drag:"x",dragConstraints:{left:0,right:0},style:{x:s},animate:{translateX:`-${r*100}%`},transition:Sh,onDragEnd:o,className:"flex cursor-grab items-center active:cursor-grabbing",children:Xi.map((l,c)=>a.jsx(R.div,{style:{backgroundImage:`url(${l})`,backgroundSize:"cover",backgroundPosition:"center"},animate:{scale:r===c?.95:.85},transition:Sh,className:"aspect-video flex justify-center w-full h-[30rem]  shrink-0 object-cover"},c))}),a.jsx("div",{className:"flex justify-center gap-2",children:Xi.map((l,c)=>a.jsx("button",{onClick:()=>i(c),className:`h-3 w-3 rounded-full transition-colors ${c===r?"bg-neutral-50":"bg-neutral-500"}`},c))})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:jh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},Q4="/AnimateReact/assets/barista-DDBkiom6.png",q4="/AnimateReact/assets/cat-ZrRKyjlm.png",Z4="/AnimateReact/assets/newton-r-AFrWXe.png",J4="/AnimateReact/assets/womenReading-BCOZEJdG.png",eC="/AnimateReact/assets/music-D0l9HBiO.png",tC="/AnimateReact/assets/podcast-B6wOTXRQ.png",kh=`
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

`,nC=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(kh.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"sticky p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Carousel Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Scroll Carousel"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full shadow-sm shadow-black p-6",children:a.jsxs("div",{className:"bg-neutral-600",children:[a.jsx("div",{className:"flex h-20 items-center justify-center",children:a.jsx("span",{className:"font-semibold uppercase text-neutral-400",children:"Scroll down"})}),a.jsx(rC,{}),a.jsx("div",{className:"flex h-20 items-center justify-center",children:a.jsx("span",{className:"font-semibold uppercase text-neutral-400",children:"Scroll up"})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:kh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},rC=()=>{const e=y.useRef(null),{scrollYProgress:t}=vj({target:e}),n=UN(t,[0,1],["1%","-70%"]);return a.jsx("section",{ref:e,className:"relative h-[180vh] w-[65rem] bg-neutral-900",children:a.jsx("div",{className:"sticky top-0 flex h-screen items-center overflow-hidden",children:a.jsx(R.div,{style:{x:n},className:"flex gap-4",children:iC.map(r=>a.jsx(Xg,{card:r},r.id))})})})},Xg=({card:e})=>a.jsxs("div",{className:"group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200",children:[a.jsx("div",{style:{backgroundImage:`url(${e.url})`,backgroundSize:"cover",backgroundPosition:"center"},className:"absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"}),a.jsx("div",{className:"absolute inset-0 z-10 grid place-content-end justify-center mb-2",children:a.jsx("p",{className:"bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-gray-600 backdrop-blur-lg",children:e.title})})]},e.id);Xg.propTypes={card:F.shape({url:F.string.isRequired,title:F.string.isRequired,id:F.number.isRequired}).isRequired};const iC=[{url:Q4,title:"Barista",id:1},{url:q4,title:"Cat",id:2},{url:J4,title:" Reading",id:4},{url:Z4,title:"Newton",id:3},{url:eC,title:"Music",id:5},{url:tC,title:"Podcast",id:6},{url:"https://as1.ftcdn.net/v2/jpg/03/45/65/20/1000_F_345652045_gfVh48pEcQC7w9Y91IJO7LXK3jfydb3A.jpg",title:"Yoga",id:7}],sC=()=>a.jsxs("div",{children:[a.jsx(X4,{}),a.jsx(nC,{})]});function oC(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"},child:[]},{tag:"path",attr:{d:"M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"},child:[]}]})(e)}function aC(e){return B({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M184,96v64l-56,32L72,160V96l56-32Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM188,167l-56,32a8,8,0,0,1-7.94,0L68,167A8,8,0,0,1,64,160V96a8,8,0,0,1,4-7l56-32a8,8,0,0,1,7.94,0l56,32a8,8,0,0,1,4,7v64A8,8,0,0,1,188,167ZM88.12,96,128,118.79,167.88,96,128,73.21ZM80,155.36l40,22.85V132.64L80,109.79Zm96,0V109.79l-40,22.85v45.57Z"},child:[]}]})(e)}function lC(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 17.6l-2 -1.1v-2.5"},child:[]},{tag:"path",attr:{d:"M4 10v-2.5l2 -1.1"},child:[]},{tag:"path",attr:{d:"M10 4.1l2 -1.1l2 1.1"},child:[]},{tag:"path",attr:{d:"M18 6.4l2 1.1v2.5"},child:[]},{tag:"path",attr:{d:"M20 14v2.5l-2 1.12"},child:[]},{tag:"path",attr:{d:"M14 19.9l-2 1.1l-2 -1.1"},child:[]},{tag:"path",attr:{d:"M12 12l2 -1.1"},child:[]},{tag:"path",attr:{d:"M18 8.6l2 -1.1"},child:[]},{tag:"path",attr:{d:"M12 12l0 2.5"},child:[]},{tag:"path",attr:{d:"M12 18.5l0 2.5"},child:[]},{tag:"path",attr:{d:"M12 12l-2 -1.12"},child:[]},{tag:"path",attr:{d:"M6 8.6l-2 -1.1"},child:[]}]})(e)}const Th=`
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
`,cC=()=>{const[e,t]=y.useState(!1),n=[{label:"Life Cycle Analysis",description:"Live and on-demand",icon:a.jsx(nh,{})},{label:"Corporate Inventory",description:"Whitepapers and more",icon:a.jsx(aC,{})},{label:"Scope 3 Decarbonization",description:"Our Customers in action",icon:a.jsx(lC,{})}],r=[{label:"Success Stories",description:"Our Customers in action"},{label:"Guides",description:"Whitepapers and more"},{label:"Webinars",description:"Live and on-demand"}],i=()=>{navigator.clipboard.writeText(Th.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Apps Link"}),a.jsx("div",{className:" w-[68rem] h-[27rem] m-0 p-0",children:a.jsxs("div",{className:"w-full bg-gray-200 px-8 py-10",children:[a.jsxs("div",{className:"flex flex-col md:w-full sm:flex-row justify-between items-center gap-5 mb-8",children:[a.jsx("h2",{className:"text-lg w-full sm:w-auto",children:"Sign up for our newsletter"}),a.jsxs("div",{className:"flex items-center w-full sm:w-auto",children:[a.jsx("input",{type:"email",placeholder:"Your email address",className:"w-full sm:w-auto bg-blackAlpha-100 border-0 focus:bg-whiteAlpha-300 p-2"}),a.jsx("button",{className:"bg-green-400 text-white hover:bg-green-600 p-2 ml-2","aria-label":"Subscribe",children:a.jsx(oC,{size:24})})]})]}),a.jsx("div",{className:"border-b border-gray-400 mb-8 w-full"}),a.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-5 mb-12 w-full",children:[a.jsxs("div",{className:"w-full sm:w-auto",children:[a.jsxs("h2",{className:"text-xl",children:["THE TIME IS ",a.jsx("span",{className:"text-blue-400",children:"NOW"})]}),a.jsx("h2",{className:"text-xl",children:"THE PATH IS FORWARD."})]}),a.jsxs("div",{className:"flex items-center cursor-pointer w-full sm:w-auto",children:[a.jsx("img",{className:"h-16 md:h-9",src:Cn,alt:"Logo"}),a.jsx("span",{className:"font-bold text-xl ml-2",children:"Animate React"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full",children:[a.jsxs("div",{className:"text-left w-full",children:[a.jsx("h3",{className:"text-xs text-gray-500",children:"GET IN TOUCH"}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(nh,{className:"mr-2"}),a.jsx("span",{children:"joshisheetal262@gmail.com"})]}),a.jsx("h3",{className:"text-xs text-gray-500 mt-4",children:"FOLLOW US"}),a.jsxs("div",{className:"flex space-x-6",children:[a.jsx(hs,{label:"Twitter",href:"#",children:a.jsx(cu,{})}),a.jsx(hs,{label:"YouTube",href:"#",children:a.jsx(uu,{})}),a.jsx(hs,{label:"Instagram",href:"#",children:a.jsx(lu,{})})]})]}),a.jsxs("div",{className:"text-left w-full ",children:[a.jsx("h3",{className:"text-xs text-gray-500 p-2",children:"SOLUTIONS"}),n.map((s,o)=>a.jsxs("div",{className:"flex items-start gap-2",children:[s.icon,a.jsxs("div",{children:[a.jsx("p",{children:s.label}),a.jsx("p",{className:"text-xs text-gray-500",children:s.description})]})]},o))]}),a.jsxs("div",{className:"text-left w-full",children:[a.jsx("h3",{className:"text-xs text-gray-500",children:"RESOURCES"}),r.map((s,o)=>a.jsxs("div",{children:[a.jsx("p",{children:s.label}),a.jsx("p",{className:"text-xs text-gray-500",children:s.description})]},o))]})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsx("div",{className:" h-[20rem] overflow-scroll",children:a.jsxs("div",{className:"relative bg-black text-white p-4 rounded-lg overflow-x-auto",children:[a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Th.trim()}),a.jsx("button",{onClick:i,className:"absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md text-sm",children:e?"Copied!":"Copy"})]})})]})},hs=({children:e,label:t,href:n})=>a.jsx("a",{href:n,className:"bg-blackAlpha-100 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-blackAlpha-200 hover:text-blue-400","aria-label":t,children:e});hs.propTypes={children:F.node.isRequired,label:F.string.isRequired,href:F.string.isRequired};const ps=({children:e,label:t,href:n})=>a.jsx("a",{href:n,className:" rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:bg-gray-300","aria-label":t,children:e});ps.propTypes={children:F.node.isRequired,label:F.string.isRequired,href:F.string.isRequired};const Ph=`
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

`,uC=()=>{const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(Ph.trim()),t(!0),setTimeout(()=>t(!1),2e3)};return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Center Element Footer"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full h-[16rem] p-6",children:a.jsxs("div",{className:"w-full bg-gray-200 p-5 text-gray-700",children:[a.jsxs("div",{className:"max-w-6xl mx-auto py-4 flex flex-col items-center space-y-4",children:[a.jsxs("a",{href:"#",className:"flex items-center cursor-pointer hover:text-blue-700",children:[a.jsx("img",{className:"h-8 object-contain",src:Cn,alt:"Logo"}),a.jsx("span",{className:"whitespace-nowrap font-bold text-xl",children:"Animate React"})]}),a.jsx("div",{className:"flex space-x-6",children:dC.map((r,i)=>a.jsx("a",{href:r.href,className:"text-gray-700 hover:text-blue-400",children:r.label},i))})]}),a.jsx("div",{className:"",children:a.jsxs("div",{className:"max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center",children:[a.jsx("span",{children:"© 2024 Sheetal Joshi. All rights reserved"}),a.jsxs("div",{className:"flex space-x-6",children:[a.jsx(ps,{label:"Twitter",href:"#",children:a.jsx(cu,{})}),a.jsx(ps,{label:"YouTube",href:"#",children:a.jsx(uu,{})}),a.jsx(ps,{label:"Instagram",href:"#",children:a.jsx(lu,{})})]})]})})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsx("div",{className:" h-[20rem] overflow-scroll",children:a.jsxs("div",{className:"relative bg-black text-white p-4 rounded-lg overflow-x-auto",children:[a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Ph.trim()}),a.jsx("button",{onClick:n,className:"absolute top-2 right-2 bg-blue-500 text-white py-1 px-3 rounded-md text-sm",children:e?"Copied!":"Copy"})]})})]})},dC=[{label:"Home",href:"#"},{label:"About",href:"#"},{label:"Blog",href:"#"},{label:"Contact",href:"#"}],Eh=`
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
`;function fC(){const[e,t]=y.useState(!1),n=()=>{navigator.clipboard.writeText(Eh.trim()),t(!0),setTimeout(()=>t(!1),2e3)},[r,i]=y.useState(!1),s=()=>i(!r);return a.jsxs("div",{className:"pl-4 space-y-4 ",children:[a.jsx("h1",{className:"text-3xl font-bold mt-9",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Flip Link Footer"}),a.jsx("div",{className:"relative flex justify-center w-[68rem]  py-10 px-4 bg-gray-200 ",children:a.jsxs("div",{className:"bg-white border-b w-full border-gray-200 py-4",children:[a.jsxs("div",{className:"container mx-auto flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center justify-between w-full md:w-auto",children:[a.jsx("img",{src:Cn,alt:"logo",className:"h-12 ml-4"}),a.jsx("div",{className:"hidden md:flex ml-10",children:a.jsx(hC,{})})]}),a.jsx(ko,{className:"hidden md:flex"}),a.jsx("button",{className:"block md:hidden text-gray-700",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})]}),r&&a.jsxs("div",{className:"fixed inset-0 z-50 bg-white p-4 md:hidden",children:[a.jsx("button",{className:"absolute top-4 right-4",onClick:s,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),a.jsx("div",{className:"h-full flex flex-col mt-14",children:a.jsx(pC,{})})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:Eh.trim()})}),a.jsx("button",{onClick:n,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})}const hC=()=>a.jsx("div",{className:"flex space-x-6",children:Qg.map(e=>a.jsx("div",{children:a.jsx(fu,{href:e.href,children:e.label})},e.label))}),pC=()=>a.jsxs("div",{className:"bg-white p-4 h-full flex flex-col space-y-6",children:[Qg.map(e=>a.jsx(fu,{href:e.href,children:e.label},e.label)),a.jsx(ko,{className:"mt-auto mb-4 w-full"})]}),ko=({className:e})=>a.jsxs("div",{className:`flex space-x-4 mx-2 ${e}`,children:[a.jsx("button",{className:"bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4",children:"Sign In"}),a.jsx("button",{className:"bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 ",children:"Sign Up"})]});ko.propTypes={className:F.string};ko.defaultProps={className:""};const fu=({href:e,children:t})=>{const[n,r]=y.useState(!1);return a.jsx("a",{href:e,className:"relative block font-bold uppercase text-gray-700 hover:text-black transition-all duration-200 overflow-hidden whitespace-nowrap",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:a.jsxs("span",{className:"block relative overflow-hidden",children:[a.jsx("span",{className:`block transform transition-transform duration-300 ${n?"-translate-y-full":"translate-y-0"}`,children:t}),a.jsx("span",{className:`absolute inset-0 block transform transition-transform duration-300 ${n?"translate-y-0":"translate-y-full"}`,children:t})]})})};fu.propTypes={href:F.string.isRequired,children:F.node.isRequired};const Qg=[{label:"Products",href:"#"},{label:"Resources",href:"#"},{label:"Insights",href:"#"},{label:"Contact",href:"#"}],mC=()=>{navigator.clipboard.writeText(qg.trim()),setIsCopied(!0),setTimeout(()=>setIsCopied(!1),2e3)},qg=`
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
`,Pr=({children:e})=>a.jsx("h3",{className:"text-lg font-medium mb-2",children:e});Pr.propTypes={children:F.node.isRequired};const ms=({children:e,label:t,href:n})=>a.jsxs("a",{href:n,className:"inline-flex items-center justify-center bg-gray-400 rounded-full p-2 hover:bg-gray-200 transition duration-300",children:[a.jsx("span",{className:"sr-only",children:t}),e]});ms.propTypes={children:F.node.isRequired,label:F.string.isRequired,href:F.string.isRequired};const gC=()=>{const[e,t]=y.useState(!1);return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold mt-5",children:"Footer Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"App Platform"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-full  shadow-sm shadow-black p-6",children:a.jsxs("footer",{className:"bg-gray-200 py-10",children:[a.jsx("div",{className:"container mx-auto px-4",children:a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",children:[a.jsxs("div",{children:[a.jsx(Pr,{children:"Company"}),a.jsx("ul",{className:"list-none space-y-2",children:vC.map((n,r)=>a.jsx("li",{children:a.jsx("a",{href:n.href,className:"text-gray-600 hover:text-gray-800",children:n.label})},r))})]}),a.jsxs("div",{children:[a.jsx(Pr,{children:"Support"}),a.jsx("ul",{className:"list-none space-y-2",children:xC.map((n,r)=>a.jsx("li",{children:a.jsx("a",{href:n.href,className:"text-gray-600 hover:text-gray-800",children:n.label})},r))})]}),a.jsxs("div",{children:[a.jsx(Pr,{children:"Legal"}),a.jsx("ul",{className:"list-none space-y-2",children:yC.map((n,r)=>a.jsx("li",{children:a.jsx("a",{href:n.href,className:"text-gray-600 hover:text-gray-800",children:n.label})},r))})]}),a.jsxs("div",{children:[a.jsx(Pr,{children:"Install App"}),a.jsxs("div",{className:"flex flex-col space-y-2",children:[a.jsx("a",{href:"#",children:a.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU",alt:"App Store",className:"w-full rounded"})}),a.jsx("a",{href:"#",children:a.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmXn5Sab2M4hdgO5fFnxsWtA51d0tO-vRf8vMNUnEIWRbzDOBz_uumhz84puqOlszhw&usqp=CAU",alt:"Play Store",className:"w-full rounded"})})]})]})]})}),a.jsx("hr",{className:"border-t border-gray-300 mt-8"}),a.jsxs("div",{className:"container mx-auto px-4 flex items-center py-4 justify-between md:flex-row md:space-x-4",children:[a.jsx("p",{className:"text-gray-600 text-sm",children:"© 2024 Sheetal Joshi.All rights reserved"}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(ms,{label:"Twitter",href:"#",children:a.jsx(cu,{className:"text-xl"})}),a.jsx(ms,{label:"YouTube",href:"#",children:a.jsx(uu,{className:"text-xl"})}),a.jsx(ms,{label:"Instagram",href:"#",children:a.jsx(lu,{className:"text-xl"})})]})]})]})}),a.jsx("h2",{className:"text-2xl font-bold static mb-4",children:"Code"}),a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"h-[20rem] overflow-scroll bg-black text-white p-4 rounded-lg",children:a.jsx("pre",{className:"text-sm whitespace-pre-wrap",children:qg.trim()})}),a.jsx("button",{onClick:mC,className:"absolute top-3 right-4 bg-blue-500 text-white py-1 px-5 rounded-md text-sm mr-2",children:e?"Copied!":"Copy"})]})]})},vC=[{label:"About Us",href:"#"},{label:"Blog",href:"#"},{label:"Careers",href:"#"},{label:"Contact Us",href:"#"}],xC=[{label:"Help Center",href:"#"},{label:"Safety Center",href:"#"},{label:"Community Guidelines",href:"#"}],yC=[{label:"Cookies Policy",href:"#"},{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"},{label:"Law Enforcement",href:"#"}],wC=()=>a.jsxs("div",{className:"flex flex-col",children:[a.jsx(cC,{}),a.jsx(uC,{}),a.jsx(fC,{}),a.jsx(gC,{})]}),Rh="text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10",bC=()=>{const[e,t]=y.useState("light");return a.jsxs("div",{className:"p-4 space-y-4",children:[a.jsx("h1",{className:"text-3xl font-bold ",children:"Toggle Preview"}),a.jsx("p",{className:"text-xl font-semibold py-2 px-12 bg-red-500 w-fit",children:"Light / Dark"}),a.jsx("div",{className:"bg-gray-200 flex items-center justify-center w-[68rem] rounded-lg shadow-sm shadow-black p-6",children:a.jsx("div",{className:`grid h-[400px] w-full place-content-center px-4 transition-colors ${e==="light"?"bg-white":"bg-slate-900"}`,children:a.jsxs("div",{className:"relative flex w-fit items-center rounded-full",children:[a.jsxs("button",{className:`${Rh} ${e==="light"?"text-white":"text-slate-300"}`,onClick:()=>{t("light")},children:[a.jsx(Xj,{className:"relative z-10 text-lg md:text-sm"}),a.jsx("span",{className:"relative z-10",children:"Light"})]}),a.jsxs("button",{className:`${Rh} ${e==="dark"?"text-white":"text-slate-800"}`,onClick:()=>{t("dark")},children:[a.jsx(Jj,{className:"relative z-10 text-lg md:text-sm"}),a.jsx("span",{className:"relative z-10",children:"Dark"})]}),a.jsx("div",{className:`absolute inset-0 z-0 flex ${e==="dark"?"justify-end":"justify-start"}`,children:a.jsx(R.span,{layout:!0,transition:{type:"spring",damping:15,stiffness:250},className:"h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"})})]})})})]})},NC=()=>a.jsx("div",{children:a.jsx(bC,{})});function jC({children:e}){const n=mi().pathname==="/";return a.jsxs("div",{className:"flex flex-col min-h-screen",children:[!n&&a.jsx(kj,{}),a.jsx("div",{className:"flex-1",children:e}),!n&&a.jsx(Oj,{})]})}function CC(){return a.jsx(HashRouter,{children:a.jsx(jC,{children:a.jsxs(c1,{children:[a.jsx(Ge,{path:"/",element:a.jsx(Sj,{})}),a.jsx(Ge,{path:"/app",element:a.jsxs("div",{className:"flex md:flex-row sm:flex-col",children:[a.jsx(lt,{}),a.jsx(i4,{})]})}),a.jsx(Ge,{path:"/cards",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(L4,{})]})}),a.jsx(Ge,{path:"/buttons",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(p4,{})]})}),a.jsx(Ge,{path:"/text",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(N4,{})]})}),a.jsx(Ge,{path:"/forms",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(D4,{})]})}),a.jsx(Ge,{path:"/navbar",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(K4,{})]})}),a.jsx(Ge,{path:"/carousels",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(sC,{})]})}),a.jsx(Ge,{path:"/footer",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(wC,{})]})}),a.jsx(Ge,{path:"/toggles",element:a.jsxs("div",{className:"flex flex-col md:flex-row",children:[a.jsx(lt,{}),a.jsx(NC,{})]})})]})})})}$m(document.getElementById("root")).render(a.jsx(y.StrictMode,{children:a.jsx(CC,{})}));
