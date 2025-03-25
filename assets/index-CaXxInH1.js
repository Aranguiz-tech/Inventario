(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Mh={exports:{}},ya={},bh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function PE(){if(km)return Re;km=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),P=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=P&&D[P]||D["@@iterator"],typeof D=="function"?D:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,X={};function H(D,$,ae){this.props=D,this.context=$,this.refs=X,this.updater=ae||U}H.prototype.isReactComponent={},H.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _e(){}_e.prototype=H.prototype;function fe(D,$,ae){this.props=D,this.context=$,this.refs=X,this.updater=ae||U}var ye=fe.prototype=new _e;ye.constructor=fe,z(ye,H.prototype),ye.isPureReactComponent=!0;var we=Array.isArray,je=Object.prototype.hasOwnProperty,Te={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function T(D,$,ae){var Ie,Ae={},Ne=null,Le=null;if($!=null)for(Ie in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(Ne=""+$.key),$)je.call($,Ie)&&!R.hasOwnProperty(Ie)&&(Ae[Ie]=$[Ie]);var Me=arguments.length-2;if(Me===1)Ae.children=ae;else if(1<Me){for(var Be=Array(Me),mt=0;mt<Me;mt++)Be[mt]=arguments[mt+2];Ae.children=Be}if(D&&D.defaultProps)for(Ie in Me=D.defaultProps,Me)Ae[Ie]===void 0&&(Ae[Ie]=Me[Ie]);return{$$typeof:i,type:D,key:Ne,ref:Le,props:Ae,_owner:Te.current}}function S(D,$){return{$$typeof:i,type:D.type,key:$,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function x(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return $[ae]})}var V=/\/+/g;function A(D,$){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):$.toString(36)}function et(D,$,ae,Ie,Ae){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var Le=!1;if(D===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(D.$$typeof){case i:case e:Le=!0}}if(Le)return Le=D,Ae=Ae(Le),D=Ie===""?"."+A(Le,0):Ie,we(Ae)?(ae="",D!=null&&(ae=D.replace(V,"$&/")+"/"),et(Ae,$,ae,"",function(mt){return mt})):Ae!=null&&(k(Ae)&&(Ae=S(Ae,ae+(!Ae.key||Le&&Le.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+D)),$.push(Ae)),1;if(Le=0,Ie=Ie===""?".":Ie+":",we(D))for(var Me=0;Me<D.length;Me++){Ne=D[Me];var Be=Ie+A(Ne,Me);Le+=et(Ne,$,ae,Be,Ae)}else if(Be=L(D),typeof Be=="function")for(D=Be.call(D),Me=0;!(Ne=D.next()).done;)Ne=Ne.value,Be=Ie+A(Ne,Me++),Le+=et(Ne,$,ae,Be,Ae);else if(Ne==="object")throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function Pt(D,$,ae){if(D==null)return D;var Ie=[],Ae=0;return et(D,Ie,"","",function(Ne){return $.call(ae,Ne,Ae++)}),Ie}function Nt(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var Fe={current:null},Z={transition:null},ue={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function te(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Pt,forEach:function(D,$,ae){Pt(D,function(){$.apply(this,arguments)},ae)},count:function(D){var $=0;return Pt(D,function(){$++}),$},toArray:function(D){return Pt(D,function($){return $})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=H,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=fe,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Re.act=te,Re.cloneElement=function(D,$,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=z({},D.props),Ae=D.key,Ne=D.ref,Le=D._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,Le=Te.current),$.key!==void 0&&(Ae=""+$.key),D.type&&D.type.defaultProps)var Me=D.type.defaultProps;for(Be in $)je.call($,Be)&&!R.hasOwnProperty(Be)&&(Ie[Be]=$[Be]===void 0&&Me!==void 0?Me[Be]:$[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=ae;else if(1<Be){Me=Array(Be);for(var mt=0;mt<Be;mt++)Me[mt]=arguments[mt+2];Ie.children=Me}return{$$typeof:i,type:D.type,key:Ae,ref:Ne,props:Ie,_owner:Le}},Re.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Re.createElement=T,Re.createFactory=function(D){var $=T.bind(null,D);return $.type=D,$},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:m,render:D}},Re.isValidElement=k,Re.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Nt}},Re.memo=function(D,$){return{$$typeof:v,type:D,compare:$===void 0?null:$}},Re.startTransition=function(D){var $=Z.transition;Z.transition={};try{D()}finally{Z.transition=$}},Re.unstable_act=te,Re.useCallback=function(D,$){return Fe.current.useCallback(D,$)},Re.useContext=function(D){return Fe.current.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D){return Fe.current.useDeferredValue(D)},Re.useEffect=function(D,$){return Fe.current.useEffect(D,$)},Re.useId=function(){return Fe.current.useId()},Re.useImperativeHandle=function(D,$,ae){return Fe.current.useImperativeHandle(D,$,ae)},Re.useInsertionEffect=function(D,$){return Fe.current.useInsertionEffect(D,$)},Re.useLayoutEffect=function(D,$){return Fe.current.useLayoutEffect(D,$)},Re.useMemo=function(D,$){return Fe.current.useMemo(D,$)},Re.useReducer=function(D,$,ae){return Fe.current.useReducer(D,$,ae)},Re.useRef=function(D){return Fe.current.useRef(D)},Re.useState=function(D){return Fe.current.useState(D)},Re.useSyncExternalStore=function(D,$,ae){return Fe.current.useSyncExternalStore(D,$,ae)},Re.useTransition=function(){return Fe.current.useTransition()},Re.version="18.3.1",Re}var Pm;function kd(){return Pm||(Pm=1,bh.exports=PE()),bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function NE(){if(Nm)return ya;Nm=1;var i=kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,P={},L=null,U=null;v!==void 0&&(L=""+v),y.key!==void 0&&(L=""+y.key),y.ref!==void 0&&(U=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(P[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)P[w]===void 0&&(P[w]=y[w]);return{$$typeof:e,type:m,key:L,ref:U,props:P,_owner:o.current}}return ya.Fragment=t,ya.jsx=h,ya.jsxs=h,ya}var xm;function xE(){return xm||(xm=1,Mh.exports=NE()),Mh.exports}var Y=xE(),At=kd(),ou={},Uh={exports:{}},Yt={},Fh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function DE(){return Dm||(Dm=1,function(i){function e(Z,ue){var te=Z.length;Z.push(ue);e:for(;0<te;){var D=te-1>>>1,$=Z[D];if(0<o($,ue))Z[D]=ue,Z[te]=$,te=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],te=Z.pop();if(te!==ue){Z[0]=te;e:for(var D=0,$=Z.length,ae=$>>>1;D<ae;){var Ie=2*(D+1)-1,Ae=Z[Ie],Ne=Ie+1,Le=Z[Ne];if(0>o(Ae,te))Ne<$&&0>o(Le,Ae)?(Z[D]=Le,Z[Ne]=te,D=Ne):(Z[D]=Ae,Z[Ie]=te,D=Ie);else if(Ne<$&&0>o(Le,te))Z[D]=Le,Z[Ne]=te,D=Ne;else break e}}return ue}function o(Z,ue){var te=Z.sortIndex-ue.sortIndex;return te!==0?te:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,P=null,L=3,U=!1,z=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(Z){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=Z)s(v),ue.sortIndex=ue.expirationTime,e(y,ue);else break;ue=t(v)}}function we(Z){if(X=!1,ye(Z),!z)if(t(y)!==null)z=!0,Nt(je);else{var ue=t(v);ue!==null&&Fe(we,ue.startTime-Z)}}function je(Z,ue){z=!1,X&&(X=!1,_e(T),T=-1),U=!0;var te=L;try{for(ye(ue),P=t(y);P!==null&&(!(P.expirationTime>ue)||Z&&!x());){var D=P.callback;if(typeof D=="function"){P.callback=null,L=P.priorityLevel;var $=D(P.expirationTime<=ue);ue=i.unstable_now(),typeof $=="function"?P.callback=$:P===t(y)&&s(y),ye(ue)}else s(y);P=t(y)}if(P!==null)var ae=!0;else{var Ie=t(v);Ie!==null&&Fe(we,Ie.startTime-ue),ae=!1}return ae}finally{P=null,L=te,U=!1}}var Te=!1,R=null,T=-1,S=5,k=-1;function x(){return!(i.unstable_now()-k<S)}function V(){if(R!==null){var Z=i.unstable_now();k=Z;var ue=!0;try{ue=R(!0,Z)}finally{ue?A():(Te=!1,R=null)}}else Te=!1}var A;if(typeof fe=="function")A=function(){fe(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Pt=et.port2;et.port1.onmessage=V,A=function(){Pt.postMessage(null)}}else A=function(){H(V,0)};function Nt(Z){R=Z,Te||(Te=!0,A())}function Fe(Z,ue){T=H(function(){Z(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){z||U||(z=!0,Nt(je))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return L},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(L){case 1:case 2:case 3:var ue=3;break;default:ue=L}var te=L;L=ue;try{return Z()}finally{L=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=L;L=Z;try{return ue()}finally{L=te}},i.unstable_scheduleCallback=function(Z,ue,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:w++,callback:ue,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>D?(Z.sortIndex=te,e(v,Z),t(y)===null&&Z===t(v)&&(X?(_e(T),T=-1):X=!0,Fe(we,te-D))):(Z.sortIndex=$,e(y,Z),z||U||(z=!0,Nt(je))),Z},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(Z){var ue=L;return function(){var te=L;L=ue;try{return Z.apply(this,arguments)}finally{L=te}}}}(jh)),jh}var Vm;function VE(){return Vm||(Vm=1,Fh.exports=DE()),Fh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function OE(){if(Om)return Yt;Om=1;var i=kd(),e=VE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},P={};function L(n){return y.call(P,n)?!0:y.call(w,n)?!1:v.test(n)?P[n]=!0:(w[n]=!0,!1)}function U(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,r,a,c){if(r===null||typeof r>"u"||U(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_e,fe);H[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_e,fe);H[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_e,fe);H[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(z(r,a,d,c)&&(a=null),c||d===null?L(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Te=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function $(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var ae=!1;function Ie(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=I);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ae(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case Te:return"Portal";case S:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=mt(n))}function as(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Nr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ls(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Io(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function So(n,r){Io(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?us(n,r.type,a):r.hasOwnProperty("defaultValue")&&us(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Wa(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function us(n,r,a){(r!=="number"||Nr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ao(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function hs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ro(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,Co=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ti=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(n){Ti.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),wi[r]=wi[n]})});function ko(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||wi.hasOwnProperty(n)&&wi[n]?(""+r).trim():r+"px"}function Po(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ko(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(n,r){if(r){if(No[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Do(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fs=null,un=null,Un=null;function ps(n){if(n=na(n)){if(typeof fs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=wl(r),fs(n.stateNode,n.type,r))}}function Fn(n){un?Un?Un.push(n):Un=[n]:un=n}function Vo(){if(un){var n=un,r=Un;if(Un=un=null,ps(n),r)for(n=0;n<r.length;n++)ps(r[n])}}function Si(n,r){return n(r)}function Oo(){}var or=!1;function Lo(n,r,a){if(or)return n(r,a);or=!0;try{return Si(n,r,a)}finally{or=!1,(un!==null||Un!==null)&&(Oo(),Vo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=wl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ms=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){ms=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ms=!1}function Ai(n,r,a,c,d,p,_,I,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(q){this.onError(q)}}var Ri=!1,gs=null,wn=!1,Mo=null,cc={onError:function(n){Ri=!0,gs=n}};function ys(n,r,a,c,d,p,_,I,C){Ri=!1,gs=null,Ai.apply(cc,arguments)}function qa(n,r,a,c,d,p,_,I,C){if(ys.apply(this,arguments),Ri){if(Ri){var F=gs;Ri=!1,gs=null}else throw Error(t(198));wn||(wn=!0,Mo=F)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ci(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function Ka(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return In(d),n;if(p===c)return In(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function bo(n){return n=Ka(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=_s(n);if(r!==null)return r;n=n.sibling}return null}var vs=e.unstable_scheduleCallback,Uo=e.unstable_cancelCallback,Ga=e.unstable_shouldYield,hc=e.unstable_requestPaint,$e=e.unstable_now,Qa=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Dr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,Xa=e.unstable_IdlePriority,Pi=null,en=null;function Ya(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Pi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Za,jo=Math.log,Ja=Math.LN2;function Za(n){return n>>>=0,n===0?32:31-(jo(n)/Ja|0)|0}var Es=64,ws=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ni(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Vr(I):(p&=_,p!==0&&(c=Vr(p)))}else _=a&~d,_!==0?c=Vr(_):p!==0&&(c=Vr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ft(r),d=1<<a,c|=n[a],r&=~d;return c}function dc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ft(p),I=1<<_,C=d[_];C===-1?((I&a)===0||(I&c)!==0)&&(d[_]=dc(I,r)):C<=r&&(n.expiredLanes|=I),p&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=Es;return Es<<=1,(Es&4194240)===0&&(Es=64),n}function Or(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Lr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ft(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Mr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var el,Ts,tl,nl,rl,zo=!1,jn=[],wt=null,Sn=null,An=null,Ur=new Map,hn=new Map,zn=[],fc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function il(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Ur.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Ht(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=na(r),r!==null&&Ts(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function pc(n,r,a,c,d){switch(r){case"focusin":return wt=Ht(wt,n,r,a,c,d),!0;case"dragenter":return Sn=Ht(Sn,n,r,a,c,d),!0;case"mouseover":return An=Ht(An,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Ur.set(p,Ht(Ur.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Ht(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function sl(n){var r=Mi(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ci(a),r!==null){n.blockedOn=r,rl(n.priority,function(){tl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Is(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ii=c,a.target.dispatchEvent(c),Ii=null}else return r=na(a),r!==null&&Ts(r),n.blockedOn=a,!1;r.shift()}return!0}function Di(n,r,a){lr(n)&&a.delete(r)}function ol(){zo=!1,wt!==null&&lr(wt)&&(wt=null),Sn!==null&&lr(Sn)&&(Sn=null),An!==null&&lr(An)&&(An=null),Ur.forEach(Di),hn.forEach(Di)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,zo||(zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ol)))}function Cn(n){function r(d){return Rn(d,n)}if(0<jn.length){Rn(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Rn(wt,n),Sn!==null&&Rn(Sn,n),An!==null&&Rn(An,n),Ur.forEach(r),hn.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)sl(a),a.blockedOn===null&&zn.shift()}var ur=we.ReactCurrentBatchConfig,Fr=!0;function Ke(n,r,a,c){var d=Pe,p=ur.transition;ur.transition=null;try{Pe=1,Bo(n,r,a,c)}finally{Pe=d,ur.transition=p}}function mc(n,r,a,c){var d=Pe,p=ur.transition;ur.transition=null;try{Pe=4,Bo(n,r,a,c)}finally{Pe=d,ur.transition=p}}function Bo(n,r,a,c){if(Fr){var d=Is(n,r,a,c);if(d===null)Rc(n,r,c,Vi,a),il(n,c);else if(pc(d,n,r,a,c))c.stopPropagation();else if(il(n,c),r&4&&-1<fc.indexOf(n)){for(;d!==null;){var p=na(d);if(p!==null&&el(p),p=Is(n,r,a,c),p===null&&Rc(n,r,c,Vi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Rc(n,r,c,null,a)}}var Vi=null;function Is(n,r,a,c){if(Vi=null,n=ds(c),n=Mi(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ci(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Vi=n,null}function $o(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qa()){case ki:return 1;case Dr:return 4;case cn:case Fo:return 16;case Xa:return 536870912;default:return 16}default:return 16}}var nn=null,Ss=null,Wt=null;function Ho(){if(Wt)return Wt;var n,r=Ss,a=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function As(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Wo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Wo,this.isPropagationStopped=Wo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Tt(kn),$n=te({},kn,{view:0,detail:0}),gc=Tt($n),Cs,cr,jr,Oi=te({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jr&&(jr&&n.type==="mousemove"?(Cs=n.screenX-jr.screenX,cr=n.screenY-jr.screenY):cr=Cs=0,jr=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),ks=Tt(Oi),qo=te({},Oi,{dataTransfer:0}),al=Tt(qo),Ps=te({},$n,{relatedTarget:0}),Ns=Tt(Ps),ll=te({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=Tt(ll),ul=te({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cl=Tt(ul),hl=te({},kn,{data:0}),Ko=Tt(hl),xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=dl[n])?!!r[n]:!1}function Hn(){return fl}var l=te({},$n,{key:function(n){if(n.key){var r=xs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=As(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?As(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?As(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=te({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(g),O=te({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),j=Tt(O),J=te({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Tt(J),ut=te({},Oi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Tt(ut),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var rn=m&&"TextEvent"in window&&!dn,Li=m&&(!it||dn&&8<dn&&11>=dn),Ds=" ",Tf=!1;function If(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function Rv(n,r){switch(n){case"compositionend":return Sf(r);case"keypress":return r.which!==32?null:(Tf=!0,Ds);case"textInput":return n=r.data,n===Ds&&Tf?null:n;default:return null}}function Cv(n,r){if(Vs)return n==="compositionend"||!it&&If(n,r)?(n=Ho(),Wt=Ss=nn=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Li&&r.locale!=="ko"?null:r.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!kv[n.type]:r==="textarea"}function Rf(n,r,a,c){Fn(c),r=_l(r,"onChange"),0<r.length&&(a=new Rs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Go=null,Qo=null;function Pv(n){Hf(n,0)}function pl(n){var r=Us(n);if(as(r))return n}function Nv(n,r){if(n==="change")return r}var Cf=!1;if(m){var yc;if(m){var _c="oninput"in document;if(!_c){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),_c=typeof kf.oninput=="function"}yc=_c}else yc=!1;Cf=yc&&(!document.documentMode||9<document.documentMode)}function Pf(){Go&&(Go.detachEvent("onpropertychange",Nf),Qo=Go=null)}function Nf(n){if(n.propertyName==="value"&&pl(Qo)){var r=[];Rf(r,Qo,n,ds(n)),Lo(Pv,r)}}function xv(n,r,a){n==="focusin"?(Pf(),Go=r,Qo=a,Go.attachEvent("onpropertychange",Nf)):n==="focusout"&&Pf()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pl(Qo)}function Vv(n,r){if(n==="click")return pl(r)}function Ov(n,r){if(n==="input"||n==="change")return pl(r)}function Lv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:Lv;function Xo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,r){var a=xf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xf(a)}}function Vf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Of(){for(var n=window,r=Nr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Nr(n.document)}return r}function vc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Mv(n){var r=Of(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Vf(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Df(a,p);var _=Df(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bv=m&&"documentMode"in document&&11>=document.documentMode,Os=null,Ec=null,Yo=null,wc=!1;function Lf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Os==null||Os!==Nr(c)||(c=Os,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&Xo(Yo,c)||(Yo=c,c=_l(Ec,"onSelect"),0<c.length&&(r=new Rs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Os)))}function ml(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ls={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Tc={},Mf={};m&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function gl(n){if(Tc[n])return Tc[n];if(!Ls[n])return n;var r=Ls[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Mf)return Tc[n]=r[a];return n}var bf=gl("animationend"),Uf=gl("animationiteration"),Ff=gl("animationstart"),jf=gl("transitionend"),zf=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){zf.set(n,r),u(r,[n])}for(var Ic=0;Ic<Bf.length;Ic++){var Sc=Bf[Ic],Uv=Sc.toLowerCase(),Fv=Sc[0].toUpperCase()+Sc.slice(1);zr(Uv,"on"+Fv)}zr(bf,"onAnimationEnd"),zr(Uf,"onAnimationIteration"),zr(Ff,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(jf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function $f(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,qa(c,r,void 0,n),n.currentTarget=null}function Hf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],C=I.instance,F=I.currentTarget;if(I=I.listener,C!==p&&d.isPropagationStopped())break e;$f(d,I,F),p=C}else for(_=0;_<c.length;_++){if(I=c[_],C=I.instance,F=I.currentTarget,I=I.listener,C!==p&&d.isPropagationStopped())break e;$f(d,I,F),p=C}}}if(wn)throw n=Mo,wn=!1,Mo=null,n}function We(n,r){var a=r[Dc];a===void 0&&(a=r[Dc]=new Set);var c=n+"__bubble";a.has(c)||(Wf(r,n,2,!1),a.add(c))}function Ac(n,r,a){var c=0;r&&(c|=4),Wf(a,n,c,r)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[yl]){n[yl]=!0,s.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[yl]||(r[yl]=!0,Ac("selectionchange",!1,r))}}function Wf(n,r,a,c){switch($o(r)){case 1:var d=Ke;break;case 4:d=mc;break;default:d=Bo}a=d.bind(null,r,a,n),d=void 0,!ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Rc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Mi(I),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}I=I.parentNode}}c=c.return}Lo(function(){var F=p,q=ds(a),G=[];e:{var W=zf.get(n);if(W!==void 0){var ee=Rs,ie=n;switch(n){case"keypress":if(As(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Ns;break;case"focusout":ie="blur",ee=Ns;break;case"beforeblur":case"afterblur":ee=Ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=al;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=j;break;case bf:case Uf:case Ff:ee=hr;break;case jf:ee=Ue;break;case"scroll":ee=gc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=cl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var se=(r&4)!==0,nt=!se&&n==="scroll",M=se?W!==null?W+"Capture":null:W;se=[];for(var N=F,b;N!==null;){b=N;var Q=b.stateNode;if(b.tag===5&&Q!==null&&(b=Q,M!==null&&(Q=tt(N,M),Q!=null&&se.push(ea(N,Q,b)))),nt)break;N=N.return}0<se.length&&(W=new ee(W,ie,null,a,q),G.push({event:W,listeners:se}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",W&&a!==Ii&&(ie=a.relatedTarget||a.fromElement)&&(Mi(ie)||ie[dr]))break e;if((ee||W)&&(W=q.window===q?q:(W=q.ownerDocument)?W.defaultView||W.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?Mi(ie):null,ie!==null&&(nt=Tn(ie),ie!==nt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(se=ks,Q="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,Q="onPointerLeave",M="onPointerEnter",N="pointer"),nt=ee==null?W:Us(ee),b=ie==null?W:Us(ie),W=new se(Q,N+"leave",ee,a,q),W.target=nt,W.relatedTarget=b,Q=null,Mi(q)===F&&(se=new se(M,N+"enter",ie,a,q),se.target=b,se.relatedTarget=nt,Q=se),nt=Q,ee&&ie)t:{for(se=ee,M=ie,N=0,b=se;b;b=Ms(b))N++;for(b=0,Q=M;Q;Q=Ms(Q))b++;for(;0<N-b;)se=Ms(se),N--;for(;0<b-N;)M=Ms(M),b--;for(;N--;){if(se===M||M!==null&&se===M.alternate)break t;se=Ms(se),M=Ms(M)}se=null}else se=null;ee!==null&&qf(G,W,ee,se,!1),ie!==null&&nt!==null&&qf(G,nt,ie,se,!0)}}e:{if(W=F?Us(F):window,ee=W.nodeName&&W.nodeName.toLowerCase(),ee==="select"||ee==="input"&&W.type==="file")var oe=Nv;else if(Af(W))if(Cf)oe=Ov;else{oe=Dv;var ce=xv}else(ee=W.nodeName)&&ee.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(oe=Vv);if(oe&&(oe=oe(n,F))){Rf(G,oe,a,q);break e}ce&&ce(n,W,F),n==="focusout"&&(ce=W._wrapperState)&&ce.controlled&&W.type==="number"&&us(W,"number",W.value)}switch(ce=F?Us(F):window,n){case"focusin":(Af(ce)||ce.contentEditable==="true")&&(Os=ce,Ec=F,Yo=null);break;case"focusout":Yo=Ec=Os=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Lf(G,a,q);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":Lf(G,a,q)}var he;if(it)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Vs?If(n,a)&&(me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Li&&a.locale!=="ko"&&(Vs||me!=="onCompositionStart"?me==="onCompositionEnd"&&Vs&&(he=Ho()):(nn=q,Ss="value"in nn?nn.value:nn.textContent,Vs=!0)),ce=_l(F,me),0<ce.length&&(me=new Ko(me,n,null,a,q),G.push({event:me,listeners:ce}),he?me.data=he:(he=Sf(a),he!==null&&(me.data=he)))),(he=rn?Rv(n,a):Cv(n,a))&&(F=_l(F,"onBeforeInput"),0<F.length&&(q=new Ko("onBeforeInput","beforeinput",null,a,q),G.push({event:q,listeners:F}),q.data=he))}Hf(G,r)})}function ea(n,r,a){return{instance:n,listener:r,currentTarget:a}}function _l(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(ea(n,p,d)),p=tt(n,r),p!=null&&c.push(ea(n,p,d))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,C=I.alternate,F=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&F!==null&&(I=F,d?(C=tt(a,p),C!=null&&_.unshift(ea(a,C,I))):d||(C=tt(a,p),C!=null&&_.push(ea(a,C,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var zv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function Kf(n){return(typeof n=="string"?n:""+n).replace(zv,`
`).replace(Bv,"")}function vl(n,r,a){if(r=Kf(r),Kf(n)!==r&&a)throw Error(t(425))}function El(){}var Cc=null,kc=null;function Pc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(n){return Gf.resolve(null).then(n).catch(Wv)}:Nc;function Wv(n){setTimeout(function(){throw n})}function xc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Cn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Cn(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Qf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Wn="__reactFiber$"+bs,ta="__reactProps$"+bs,dr="__reactContainer$"+bs,Dc="__reactEvents$"+bs,qv="__reactListeners$"+bs,Kv="__reactHandles$"+bs;function Mi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Qf(n);n!==null;){if(a=n[Wn])return a;n=Qf(n)}return r}n=a,a=n.parentNode}return null}function na(n){return n=n[Wn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wl(n){return n[ta]||null}var Vc=[],Fs=-1;function $r(n){return{current:n}}function qe(n){0>Fs||(n.current=Vc[Fs],Vc[Fs]=null,Fs--)}function He(n,r){Fs++,Vc[Fs]=n.current,n.current=r}var Hr={},xt=$r(Hr),qt=$r(!1),bi=Hr;function js(n,r){var a=n.type.contextTypes;if(!a)return Hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Tl(){qe(qt),qe(xt)}function Xf(n,r,a){if(xt.current!==Hr)throw Error(t(168));He(xt,r),He(qt,a)}function Yf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return te({},a,c)}function Il(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,bi=xt.current,He(xt,n),He(qt,qt.current),!0}function Jf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Yf(n,r,bi),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(xt),He(xt,n)):qe(qt),He(qt,a)}var fr=null,Sl=!1,Oc=!1;function Zf(n){fr===null?fr=[n]:fr.push(n)}function Gv(n){Sl=!0,Zf(n)}function Wr(){if(!Oc&&fr!==null){Oc=!0;var n=0,r=Pe;try{var a=fr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Sl=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),vs(ki,Wr),d}finally{Pe=r,Oc=!1}}return null}var zs=[],Bs=0,Al=null,Rl=0,fn=[],pn=0,Ui=null,pr=1,mr="";function Fi(n,r){zs[Bs++]=Rl,zs[Bs++]=Al,Al=n,Rl=r}function ep(n,r,a){fn[pn++]=pr,fn[pn++]=mr,fn[pn++]=Ui,Ui=n;var c=pr;n=mr;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var p=32-Ft(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,pr=1<<32-Ft(r)+d|a<<d|c,mr=p+n}else pr=1<<p|a<<d|c,mr=n}function Lc(n){n.return!==null&&(Fi(n,1),ep(n,1,0))}function Mc(n){for(;n===Al;)Al=zs[--Bs],zs[Bs]=null,Rl=zs[--Bs],zs[Bs]=null;for(;n===Ui;)Ui=fn[--pn],fn[pn]=null,mr=fn[--pn],fn[pn]=null,pr=fn[--pn],fn[pn]=null}var sn=null,on=null,Ge=!1,Nn=null;function tp(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function np(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ui!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uc(n){if(Ge){var r=on;if(r){var a=r;if(!np(n,r)){if(bc(n))throw Error(t(418));r=Br(a.nextSibling);var c=sn;r&&np(n,r)?tp(c,a):(n.flags=n.flags&-4097|2,Ge=!1,sn=n)}}else{if(bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,sn=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Cl(n){if(n!==sn)return!1;if(!Ge)return rp(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Pc(n.type,n.memoizedProps)),r&&(r=on)){if(bc(n))throw ip(),Error(t(418));for(;r;)tp(n,r),r=Br(r.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Br(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Br(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=on;n;)n=Br(n.nextSibling)}function $s(){on=sn=null,Ge=!1}function Fc(n){Nn===null?Nn=[n]:Nn.push(n)}var Qv=we.ReactCurrentBatchConfig;function ra(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function kl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function sp(n){var r=n._init;return r(n._payload)}function op(n){function r(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=Zr(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,N,b,Q){return N===null||N.tag!==6?(N=Nh(b,M.mode,Q),N.return=M,N):(N=d(N,b),N.return=M,N)}function C(M,N,b,Q){var oe=b.type;return oe===R?q(M,N,b.props.children,Q,b.key):N!==null&&(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&sp(oe)===N.type)?(Q=d(N,b.props),Q.ref=ra(M,N,b),Q.return=M,Q):(Q=Jl(b.type,b.key,b.props,null,M.mode,Q),Q.ref=ra(M,N,b),Q.return=M,Q)}function F(M,N,b,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=xh(b,M.mode,Q),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function q(M,N,b,Q,oe){return N===null||N.tag!==7?(N=Ki(b,M.mode,Q,oe),N.return=M,N):(N=d(N,b),N.return=M,N)}function G(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Nh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return b=Jl(N.type,N.key,N.props,null,M.mode,b),b.ref=ra(M,null,N),b.return=M,b;case Te:return N=xh(N,M.mode,b),N.return=M,N;case Nt:var Q=N._init;return G(M,Q(N._payload),b)}if(rr(N)||ue(N))return N=Ki(N,M.mode,b,null),N.return=M,N;kl(M,N)}return null}function W(M,N,b,Q){var oe=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:I(M,N,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===oe?C(M,N,b,Q):null;case Te:return b.key===oe?F(M,N,b,Q):null;case Nt:return oe=b._init,W(M,N,oe(b._payload),Q)}if(rr(b)||ue(b))return oe!==null?null:q(M,N,b,Q,null);kl(M,b)}return null}function ee(M,N,b,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(b)||null,I(N,M,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case je:return M=M.get(Q.key===null?b:Q.key)||null,C(N,M,Q,oe);case Te:return M=M.get(Q.key===null?b:Q.key)||null,F(N,M,Q,oe);case Nt:var ce=Q._init;return ee(M,N,b,ce(Q._payload),oe)}if(rr(Q)||ue(Q))return M=M.get(b)||null,q(N,M,Q,oe,null);kl(N,Q)}return null}function ie(M,N,b,Q){for(var oe=null,ce=null,he=N,me=N=0,vt=null;he!==null&&me<b.length;me++){he.index>me?(vt=he,he=null):vt=he.sibling;var Oe=W(M,he,b[me],Q);if(Oe===null){he===null&&(he=vt);break}n&&he&&Oe.alternate===null&&r(M,he),N=p(Oe,N,me),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe,he=vt}if(me===b.length)return a(M,he),Ge&&Fi(M,me),oe;if(he===null){for(;me<b.length;me++)he=G(M,b[me],Q),he!==null&&(N=p(he,N,me),ce===null?oe=he:ce.sibling=he,ce=he);return Ge&&Fi(M,me),oe}for(he=c(M,he);me<b.length;me++)vt=ee(he,M,me,b[me],Q),vt!==null&&(n&&vt.alternate!==null&&he.delete(vt.key===null?me:vt.key),N=p(vt,N,me),ce===null?oe=vt:ce.sibling=vt,ce=vt);return n&&he.forEach(function(ei){return r(M,ei)}),Ge&&Fi(M,me),oe}function se(M,N,b,Q){var oe=ue(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var ce=oe=null,he=N,me=N=0,vt=null,Oe=b.next();he!==null&&!Oe.done;me++,Oe=b.next()){he.index>me?(vt=he,he=null):vt=he.sibling;var ei=W(M,he,Oe.value,Q);if(ei===null){he===null&&(he=vt);break}n&&he&&ei.alternate===null&&r(M,he),N=p(ei,N,me),ce===null?oe=ei:ce.sibling=ei,ce=ei,he=vt}if(Oe.done)return a(M,he),Ge&&Fi(M,me),oe;if(he===null){for(;!Oe.done;me++,Oe=b.next())Oe=G(M,Oe.value,Q),Oe!==null&&(N=p(Oe,N,me),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return Ge&&Fi(M,me),oe}for(he=c(M,he);!Oe.done;me++,Oe=b.next())Oe=ee(he,M,me,Oe.value,Q),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?me:Oe.key),N=p(Oe,N,me),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(kE){return r(M,kE)}),Ge&&Fi(M,me),oe}function nt(M,N,b,Q){if(typeof b=="object"&&b!==null&&b.type===R&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var oe=b.key,ce=N;ce!==null;){if(ce.key===oe){if(oe=b.type,oe===R){if(ce.tag===7){a(M,ce.sibling),N=d(ce,b.props.children),N.return=M,M=N;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&sp(oe)===ce.type){a(M,ce.sibling),N=d(ce,b.props),N.ref=ra(M,ce,b),N.return=M,M=N;break e}a(M,ce);break}else r(M,ce);ce=ce.sibling}b.type===R?(N=Ki(b.props.children,M.mode,Q,b.key),N.return=M,M=N):(Q=Jl(b.type,b.key,b.props,null,M.mode,Q),Q.ref=ra(M,N,b),Q.return=M,M=Q)}return _(M);case Te:e:{for(ce=b.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=xh(b,M.mode,Q),N.return=M,M=N}return _(M);case Nt:return ce=b._init,nt(M,N,ce(b._payload),Q)}if(rr(b))return ie(M,N,b,Q);if(ue(b))return se(M,N,b,Q);kl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Nh(b,M.mode,Q),N.return=M,M=N),_(M)):a(M,N)}return nt}var Hs=op(!0),ap=op(!1),Pl=$r(null),Nl=null,Ws=null,jc=null;function zc(){jc=Ws=Nl=null}function Bc(n){var r=Pl.current;qe(Pl),n._currentValue=r}function $c(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function qs(n,r){Nl=n,jc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:r,next:null},Ws===null){if(Nl===null)throw Error(t(308));Ws=n,Nl.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return r}var ji=null;function Hc(n){ji===null?ji=[n]:ji.push(n)}function lp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Hc(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function Wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,Hc(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function xl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Mr(n,a)}}function cp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Dl(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,F=C.next;C.next=null,_===null?p=F:_.next=F,_=C;var q=n.alternate;q!==null&&(q=q.updateQueue,I=q.lastBaseUpdate,I!==_&&(I===null?q.firstBaseUpdate=F:I.next=F,q.lastBaseUpdate=C))}if(p!==null){var G=d.baseState;_=0,q=F=C=null,I=p;do{var W=I.lane,ee=I.eventTime;if((c&W)===W){q!==null&&(q=q.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,se=I;switch(W=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(ee,G,W);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,W=typeof ie=="function"?ie.call(ee,G,W):ie,W==null)break e;G=te({},G,W);break e;case 2:qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else ee={eventTime:ee,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},q===null?(F=q=ee,C=G):q=q.next=ee,_|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(q===null&&(C=G),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);$i|=_,n.lanes=_,n.memoizedState=G}}function hp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ia={},qn=$r(ia),sa=$r(ia),oa=$r(ia);function zi(n){if(n===ia)throw Error(t(174));return n}function qc(n,r){switch(He(oa,r),He(sa,n),He(qn,ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}qe(qn),He(qn,r)}function Ks(){qe(qn),qe(sa),qe(oa)}function dp(n){zi(oa.current);var r=zi(qn.current),a=lt(r,n.type);r!==a&&(He(sa,n),He(qn,a))}function Kc(n){sa.current===n&&(qe(qn),qe(sa))}var Xe=$r(0);function Vl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gc=[];function Qc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var Ol=we.ReactCurrentDispatcher,Xc=we.ReactCurrentBatchConfig,Bi=0,Ye=null,ct=null,yt=null,Ll=!1,aa=!1,la=0,Xv=0;function Dt(){throw Error(t(321))}function Yc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Jc(n,r,a,c,d,p){if(Bi=p,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ol.current=n===null||n.memoizedState===null?eE:tE,n=a(c,d),aa){p=0;do{if(aa=!1,la=0,25<=p)throw Error(t(301));p+=1,yt=ct=null,r.updateQueue=null,Ol.current=nE,n=a(c,d)}while(aa)}if(Ol.current=Ul,r=ct!==null&&ct.next!==null,Bi=0,yt=ct=Ye=null,Ll=!1,r)throw Error(t(300));return n}function Zc(){var n=la!==0;return la=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=n:yt=yt.next=n,yt}function gn(){if(ct===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=yt===null?Ye.memoizedState:yt.next;if(r!==null)yt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Ye.memoizedState=yt=n:yt=yt.next=n}return yt}function ua(n,r){return typeof r=="function"?r(n):r}function eh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,C=null,F=p;do{var q=F.lane;if((Bi&q)===q)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(I=C=G,_=c):C=C.next=G,Ye.lanes|=q,$i|=q}F=F.next}while(F!==null&&F!==p);C===null?_=c:C.next=I,Pn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ye.lanes|=p,$i|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function th(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Gt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function fp(){}function pp(n,r){var a=Ye,c=gn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,nh(yp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ca(9,gp.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(Bi&30)!==0||mp(a,r,d)}return d}function mp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function gp(n,r,a,c){r.value=a,r.getSnapshot=c,_p(r)&&vp(n)}function yp(n,r,a){return a(function(){_p(r)&&vp(n)})}function _p(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function vp(n){var r=gr(n,1);r!==null&&On(r,n,1,-1)}function Ep(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},r.queue=n,n=n.dispatch=Zv.bind(null,Ye,n),[r.memoizedState,n]}function ca(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function wp(){return gn().memoizedState}function Ml(n,r,a,c){var d=Kn();Ye.flags|=n,d.memoizedState=ca(1|r,a,void 0,c===void 0?null:c)}function bl(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&Yc(c,_.deps)){d.memoizedState=ca(r,a,p,c);return}}Ye.flags|=n,d.memoizedState=ca(1|r,a,p,c)}function Tp(n,r){return Ml(8390656,8,n,r)}function nh(n,r){return bl(2048,8,n,r)}function Ip(n,r){return bl(4,2,n,r)}function Sp(n,r){return bl(4,4,n,r)}function Ap(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Rp(n,r,a){return a=a!=null?a.concat([n]):null,bl(4,4,Ap.bind(null,r,n),a)}function rh(){}function Cp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Yc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function kp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Yc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Pp(n,r,a){return(Bi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Pn(a,r)||(a=xi(),Ye.lanes|=a,$i|=a,n.baseState=!0),r)}function Yv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),r()}finally{Pe=a,Xc.transition=c}}function Np(){return gn().memoizedState}function Jv(n,r,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))Dp(r,a);else if(a=lp(n,r,a,c),a!==null){var d=Bt();On(a,n,c,d),Vp(a,r,c)}}function Zv(n,r,a){var c=Yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))Dp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,Pn(I,_)){var C=r.interleaved;C===null?(d.next=d,Hc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=lp(n,r,d,c),a!==null&&(d=Bt(),On(a,n,c,d),Vp(a,r,c))}}function xp(n){var r=n.alternate;return n===Ye||r!==null&&r===Ye}function Dp(n,r){aa=Ll=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Vp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Mr(n,a)}}var Ul={readContext:mn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},eE={readContext:mn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Tp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ml(4194308,4,Ap.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ml(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ml(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Jv.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:Ep,useDebugValue:rh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=Ep(!1),r=n[0];return n=Yv.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ye,d=Kn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(Bi&30)!==0||mp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Tp(yp.bind(null,c,p,n),[n]),c.flags|=2048,ca(9,gp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Kn(),r=_t.identifierPrefix;if(Ge){var a=mr,c=pr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=la++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Xv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},tE={readContext:mn,useCallback:Cp,useContext:mn,useEffect:nh,useImperativeHandle:Rp,useInsertionEffect:Ip,useLayoutEffect:Sp,useMemo:kp,useReducer:eh,useRef:wp,useState:function(){return eh(ua)},useDebugValue:rh,useDeferredValue:function(n){var r=gn();return Pp(r,ct.memoizedState,n)},useTransition:function(){var n=eh(ua)[0],r=gn().memoizedState;return[n,r]},useMutableSource:fp,useSyncExternalStore:pp,useId:Np,unstable_isNewReconciler:!1},nE={readContext:mn,useCallback:Cp,useContext:mn,useEffect:nh,useImperativeHandle:Rp,useInsertionEffect:Ip,useLayoutEffect:Sp,useMemo:kp,useReducer:th,useRef:wp,useState:function(){return th(ua)},useDebugValue:rh,useDeferredValue:function(n){var r=gn();return ct===null?r.memoizedState=n:Pp(r,ct.memoizedState,n)},useTransition:function(){var n=th(ua)[0],r=gn().memoizedState;return[n,r]},useMutableSource:fp,useSyncExternalStore:pp,useId:Np,unstable_isNewReconciler:!1};function xn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ih(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Fl={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Yr(n),p=yr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(On(r,n,d,c),xl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Yr(n),p=yr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(On(r,n,d,c),xl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Yr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Kr(n,d,c),r!==null&&(On(r,n,c,a),xl(r,n,c))}};function Op(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Xo(a,c)||!Xo(d,p):!0}function Lp(n,r,a){var c=!1,d=Hr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Kt(r)?bi:xt.current,c=r.contextTypes,p=(c=c!=null)?js(n,d):Hr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Mp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Fl.enqueueReplaceState(r,r.state,null)}function sh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Wc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Kt(r)?bi:xt.current,d.context=js(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(ih(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Fl.enqueueReplaceState(d,d.state,null),Dl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function oh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function ah(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var rE=typeof WeakMap=="function"?WeakMap:Map;function bp(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){ql||(ql=!0,Th=c),ah(n,r)},a}function Up(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){ah(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ah(n,r),typeof c!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Fp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new rE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=yE.bind(null,n,r,a),r.then(n,n))}function jp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function zp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,Kr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var iE=we.ReactCurrentOwner,Gt=!1;function zt(n,r,a,c){r.child=n===null?ap(r,null,a,c):Hs(r,n.child,a,c)}function Bp(n,r,a,c,d){a=a.render;var p=r.ref;return qs(r,d),c=Jc(n,r,a,c,p,d),a=Zc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ge&&a&&Lc(r),r.flags|=1,zt(n,r,c,d),r.child)}function $p(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Ph(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Hp(n,r,p,c,d)):(n=Jl(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(_,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Zr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Hp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Xo(p,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return lh(n,r,a,c,d)}function Wp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Xs,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Xs,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(Xs,an),an|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(Xs,an),an|=c;return zt(n,r,d,a),r.child}function qp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function lh(n,r,a,c,d){var p=Kt(a)?bi:xt.current;return p=js(r,p),qs(r,d),a=Jc(n,r,a,c,p,d),c=Zc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ge&&c&&Lc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Kp(n,r,a,c,d){if(Kt(a)){var p=!0;Il(r)}else p=!1;if(qs(r,d),r.stateNode===null)zl(n,r),Lp(r,a,c),sh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Kt(a)?bi:xt.current,F=js(r,F));var q=a.getDerivedStateFromProps,G=typeof q=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||C!==F)&&Mp(r,_,c,F),qr=!1;var W=r.memoizedState;_.state=W,Dl(r,c,_,d),C=r.memoizedState,I!==c||W!==C||qt.current||qr?(typeof q=="function"&&(ih(r,a,q,c),C=r.memoizedState),(I=qr||Op(r,a,I,c,W,C,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,up(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:xn(r.type,I),_.props=F,G=r.pendingProps,W=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=mn(C):(C=Kt(a)?bi:xt.current,C=js(r,C));var ee=a.getDerivedStateFromProps;(q=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==G||W!==C)&&Mp(r,_,c,C),qr=!1,W=r.memoizedState,_.state=W,Dl(r,c,_,d);var ie=r.memoizedState;I!==G||W!==ie||qt.current||qr?(typeof ee=="function"&&(ih(r,a,ee,c),ie=r.memoizedState),(F=qr||Op(r,a,F,c,W,ie,C)||!1)?(q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return uh(n,r,a,c,p,d)}function uh(n,r,a,c,d,p){qp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Jf(r,a,!1),_r(n,r,p);c=r.stateNode,iE.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Hs(r,n.child,null,p),r.child=Hs(r,null,I,p)):zt(n,r,I,p),r.memoizedState=c.state,d&&Jf(r,a,!0),r.child}function Gp(n){var r=n.stateNode;r.pendingContext?Xf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xf(n,r.context,!1),qc(n,r.containerInfo)}function Qp(n,r,a,c,d){return $s(),Fc(d),r.flags|=256,zt(n,r,a,c),r.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function hh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,a){var c=r.pendingProps,d=Xe.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return Uc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Zl(_,c,0,null),n=Ki(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=hh(a),r.memoizedState=ch,n):dh(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return sE(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Zr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Zr(I,p):(p=Ki(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?hh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=ch,c}return p=n.child,n=p.sibling,c=Zr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function dh(n,r){return r=Zl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function jl(n,r,a,c){return c!==null&&Fc(c),Hs(r,n.child,null,a),n=dh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function sE(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=oh(Error(t(422))),jl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Zl({mode:"visible",children:c.children},d,0,null),p=Ki(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Hs(r,n.child,null,_),r.child.memoizedState=hh(_),r.memoizedState=ch,p);if((r.mode&1)===0)return jl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=oh(p,c,void 0),jl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Gt||I){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,gr(n,d),On(c,n,d,-1))}return kh(),c=oh(Error(t(421))),jl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=_E.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=Br(d.nextSibling),sn=r,Ge=!0,Nn=null,n!==null&&(fn[pn++]=pr,fn[pn++]=mr,fn[pn++]=Ui,pr=n.id,mr=n.overflow,Ui=r),r=dh(r,c.children),r.flags|=4096,r)}function Yp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),$c(n.return,r,a)}function fh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Jp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,a,r);else if(n.tag===19)Yp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Vl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),fh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Vl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}fh(r,!0,a,null,p);break;case"together":fh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function zl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),$i|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Zr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Zr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function oE(n,r,a){switch(r.tag){case 3:Gp(r),$s();break;case 5:dp(r);break;case 1:Kt(r.type)&&Il(r);break;case 4:qc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Pl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Xp(n,r,a):(He(Xe,Xe.current&1),n=_r(n,r,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Jp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,Wp(n,r,a)}return _r(n,r,a)}var Zp,ph,em,tm;Zp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ph=function(){},em=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,zi(qn.current);var p=null;switch(a){case"input":d=Ei(n,d),c=Ei(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=El)}xo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==I&&(C!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&I[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&We("scroll",n),p||I===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},tm=function(n,r,a,c){a!==c&&(r.flags|=4)};function ha(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function aE(n,r,a){var c=r.pendingProps;switch(Mc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Kt(r.type)&&Tl(),Vt(r),null;case 3:return c=r.stateNode,Ks(),qe(qt),qe(xt),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Cl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nn!==null&&(Ah(Nn),Nn=null))),ph(n,r),Vt(r),null;case 5:Kc(r);var d=zi(oa.current);if(a=r.type,n!==null&&r.stateNode!=null)em(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=zi(qn.current),Cl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Wn]=r,c[ta]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ls(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":cs(c,p),We("invalid",c)}xo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&vl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&vl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":nr(c),Wa(c,p,!0);break;case"textarea":nr(c),Ro(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=El)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[ta]=c,Zp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Do(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ls(n,c),d=Ei(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":cs(n,c),d=Ao(n,c),We("invalid",n);break;default:d=c}xo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var C=I[p];p==="style"?Po(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Co(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&xr(n,C):typeof C=="number"&&xr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&We("scroll",n):C!=null&&ye(n,p,C,_))}switch(a){case"input":nr(n),Wa(n,c,!1);break;case"textarea":nr(n),Ro(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ir(n,!!c.multiple,p,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=El)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)tm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=zi(oa.current),zi(qn.current),Cl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:vl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Vt(r),null;case 13:if(qe(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ip(),$s(),r.flags|=98560,p=!1;else if(p=Cl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Wn]=r}else $s(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Nn!==null&&(Ah(Nn),Nn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?ht===0&&(ht=3):kh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Ks(),ph(n,r),n===null&&Zo(r.stateNode.containerInfo),Vt(r),null;case 10:return Bc(r.type._context),Vt(r),null;case 17:return Kt(r.type)&&Tl(),Vt(r),null;case 19:if(qe(Xe),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ha(p,!1);else{if(ht!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Vl(n),_!==null){for(r.flags|=128,ha(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Ys&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304)}else{if(!c)if(n=Vl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ha(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Vt(r),null}else 2*$e()-p.renderingStartTime>Ys&&a!==1073741824&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Ch(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function lE(n,r){switch(Mc(r),r.tag){case 1:return Kt(r.type)&&Tl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ks(),qe(qt),qe(xt),Qc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Kc(r),null;case 13:if(qe(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));$s()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Xe),null;case 4:return Ks(),null;case 10:return Bc(r.type._context),null;case 22:case 23:return Ch(),null;case 24:return null;default:return null}}var Bl=!1,Ot=!1,uE=typeof WeakSet=="function"?WeakSet:Set,re=null;function Qs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function mh(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var nm=!1;function cE(n,r){if(Cc=Fr,n=Of(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,C=-1,F=0,q=0,G=n,W=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(I=_+d),G!==p||c!==0&&G.nodeType!==3||(C=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)W=G,G=ee;for(;;){if(G===n)break t;if(W===a&&++F===d&&(I=_),W===p&&++q===c&&(C=_),(ee=G.nextSibling)!==null)break;G=W,W=G.parentNode}G=ee}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(kc={focusedElem:n,selectionRange:a},Fr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,nt=ie.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:xn(r.type,se),nt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){Ze(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=nm,nm=!1,ie}function da(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&mh(r,a,p)}d=d.next}while(d!==c)}}function $l(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function gh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function rm(n){var r=n.alternate;r!==null&&(n.alternate=null,rm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[ta],delete r[Dc],delete r[qv],delete r[Kv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=El));else if(c!==4&&(n=n.child,n!==null))for(yh(n,r,a),n=n.sibling;n!==null;)yh(n,r,a),n=n.sibling}function _h(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_h(n,r,a),n=n.sibling;n!==null;)_h(n,r,a),n=n.sibling}var It=null,Dn=!1;function Gr(n,r,a){for(a=a.child;a!==null;)om(n,r,a),a=a.sibling}function om(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Pi,a)}catch{}switch(a.tag){case 5:Ot||Qs(a,r);case 6:var c=It,d=Dn;It=null,Gr(n,r,a),It=c,Dn=d,It!==null&&(Dn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Dn?(n=It,a=a.stateNode,n.nodeType===8?xc(n.parentNode,a):n.nodeType===1&&xc(n,a),Cn(n)):xc(It,a.stateNode));break;case 4:c=It,d=Dn,It=a.stateNode.containerInfo,Dn=!0,Gr(n,r,a),It=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&mh(a,r,_),d=d.next}while(d!==c)}Gr(n,r,a);break;case 1:if(!Ot&&(Qs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,r,I)}Gr(n,r,a);break;case 21:Gr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Gr(n,r,a),Ot=c):Gr(n,r,a);break;default:Gr(n,r,a)}}function am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new uE),r.forEach(function(c){var d=vE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:It=I.stateNode,Dn=!1;break e;case 3:It=I.stateNode.containerInfo,Dn=!0;break e;case 4:It=I.stateNode.containerInfo,Dn=!0;break e}I=I.return}if(It===null)throw Error(t(160));om(p,_,d),It=null,Dn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)lm(r,n),r=r.sibling}function lm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Gn(n),c&4){try{da(3,n,n.return),$l(3,n)}catch(se){Ze(n,n.return,se)}try{da(5,n,n.return)}catch(se){Ze(n,n.return,se)}}break;case 1:Vn(r,n),Gn(n),c&512&&a!==null&&Qs(a,a.return);break;case 5:if(Vn(r,n),Gn(n),c&512&&a!==null&&Qs(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(se){Ze(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Io(d,p),Do(I,_);var F=Do(I,p);for(_=0;_<C.length;_+=2){var q=C[_],G=C[_+1];q==="style"?Po(d,G):q==="dangerouslySetInnerHTML"?Co(d,G):q==="children"?xr(d,G):ye(d,q,G,F)}switch(I){case"input":So(d,p);break;case"textarea":hs(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?ir(d,!!p.multiple,ee,!1):W!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[ta]=p}catch(se){Ze(n,n.return,se)}}break;case 6:if(Vn(r,n),Gn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Ze(n,n.return,se)}}break;case 3:if(Vn(r,n),Gn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(se){Ze(n,n.return,se)}break;case 4:Vn(r,n),Gn(n);break;case 13:Vn(r,n),Gn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(wh=$e())),c&4&&am(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||q,Vn(r,n),Ot=F):Vn(r,n),Gn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!q&&(n.mode&1)!==0)for(re=n,q=n.child;q!==null;){for(G=re=q;re!==null;){switch(W=re,ee=W.child,W.tag){case 0:case 11:case 14:case 15:da(4,W,W.return);break;case 1:Qs(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){Ze(c,a,se)}}break;case 5:Qs(W,W.return);break;case 22:if(W.memoizedState!==null){hm(G);continue}}ee!==null?(ee.return=W,re=ee):hm(G)}q=q.sibling}e:for(q=null,G=n;;){if(G.tag===5){if(q===null){q=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=G.stateNode,C=G.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=ko("display",_))}catch(se){Ze(n,n.return,se)}}}else if(G.tag===6){if(q===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(se){Ze(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;q===G&&(q=null),G=G.return}q===G&&(q=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Vn(r,n),Gn(n),c&4&&am(n);break;case 21:break;default:Vn(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var p=sm(n);_h(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=sm(n);yh(n,I,_);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function hE(n,r,a){re=n,um(n)}function um(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Bl;if(!_){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Ot;I=Bl;var F=Ot;if(Bl=_,(Ot=C)&&!F)for(re=d;re!==null;)_=re,C=_.child,_.tag===22&&_.memoizedState!==null?dm(d):C!==null?(C.return=_,re=C):dm(d);for(;p!==null;)re=p,um(p),p=p.sibling;re=d,Bl=I,Ot=F}cm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):cm(n)}}function cm(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||$l(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:xn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&hp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}hp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var G=q.dehydrated;G!==null&&Cn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&gh(r)}catch(W){Ze(r,r.return,W)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function hm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function dm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{$l(4,r)}catch(C){Ze(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Ze(r,d,C)}}var p=r.return;try{gh(r)}catch(C){Ze(r,p,C)}break;case 5:var _=r.return;try{gh(r)}catch(C){Ze(r,_,C)}}}catch(C){Ze(r,r.return,C)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var dE=Math.ceil,Hl=we.ReactCurrentDispatcher,vh=we.ReactCurrentOwner,yn=we.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,an=0,Xs=$r(0),ht=0,fa=null,$i=0,Wl=0,Eh=0,pa=null,Qt=null,wh=0,Ys=1/0,vr=null,ql=!1,Th=null,Qr=null,Kl=!1,Xr=null,Gl=0,ma=0,Ih=null,Ql=-1,Xl=0;function Bt(){return(Ve&6)!==0?$e():Ql!==-1?Ql:Ql=$e()}function Yr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&St!==0?St&-St:Qv.transition!==null?(Xl===0&&(Xl=xi()),Xl):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:$o(n.type)),n)}function On(n,r,a,c){if(50<ma)throw ma=0,Ih=null,Error(t(185));Lr(n,a,c),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(Wl|=a),ht===4&&Jr(n,St)),Xt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(Ys=$e()+500,Sl&&Wr()))}function Xt(n,r){var a=n.callbackNode;ar(n,r);var c=Ni(n,n===_t?St:0);if(c===0)a!==null&&Uo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Uo(a),r===1)n.tag===0?Gv(pm.bind(null,n)):Zf(pm.bind(null,n)),Hv(function(){(Ve&6)===0&&Wr()}),a=null;else{switch(br(c)){case 1:a=ki;break;case 4:a=Dr;break;case 16:a=cn;break;case 536870912:a=Xa;break;default:a=cn}a=Tm(a,fm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function fm(n,r){if(Ql=-1,Xl=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Ni(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Yl(n,c);else{r=c;var d=Ve;Ve|=2;var p=gm();(_t!==n||St!==r)&&(vr=null,Ys=$e()+500,Wi(n,r));do try{mE();break}catch(I){mm(n,I)}while(!0);zc(),Hl.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=ht)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=Sh(n,d))),r===1)throw a=fa,Wi(n,0),Jr(n,c),Xt(n,$e()),a;if(r===6)Jr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!fE(d)&&(r=Yl(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=Sh(n,p))),r===1))throw a=fa,Wi(n,0),Jr(n,c),Xt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:qi(n,Qt,vr);break;case 3:if(Jr(n,c),(c&130023424)===c&&(r=wh+500-$e(),10<r)){if(Ni(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Nc(qi.bind(null,n,Qt,vr),r);break}qi(n,Qt,vr);break;case 4:if(Jr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ft(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dE(c/1960))-c,10<c){n.timeoutHandle=Nc(qi.bind(null,n,Qt,vr),c);break}qi(n,Qt,vr);break;case 5:qi(n,Qt,vr);break;default:throw Error(t(329))}}}return Xt(n,$e()),n.callbackNode===a?fm.bind(null,n):null}function Sh(n,r){var a=pa;return n.current.memoizedState.isDehydrated&&(Wi(n,r).flags|=256),n=Yl(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Ah(r)),n}function Ah(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function fE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Jr(n,r){for(r&=~Eh,r&=~Wl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ft(r),c=1<<a;n[a]=-1,r&=~c}}function pm(n){if((Ve&6)!==0)throw Error(t(327));Js();var r=Ni(n,0);if((r&1)===0)return Xt(n,$e()),null;var a=Yl(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=Sh(n,c))}if(a===1)throw a=fa,Wi(n,0),Jr(n,r),Xt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,qi(n,Qt,vr),Xt(n,$e()),null}function Rh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Ys=$e()+500,Sl&&Wr())}}function Hi(n){Xr!==null&&Xr.tag===0&&(Ve&6)===0&&Js();var r=Ve;Ve|=1;var a=yn.transition,c=Pe;try{if(yn.transition=null,Pe=1,n)return n()}finally{Pe=c,yn.transition=a,Ve=r,(Ve&6)===0&&Wr()}}function Ch(){an=Xs.current,qe(Xs)}function Wi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$v(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Mc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Tl();break;case 3:Ks(),qe(qt),qe(xt),Qc();break;case 5:Kc(c);break;case 4:Ks();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:Bc(c.type._context);break;case 22:case 23:Ch()}a=a.return}if(_t=n,st=n=Zr(n.current,null),St=an=r,ht=0,fa=null,Eh=Wl=$i=0,Qt=pa=null,ji!==null){for(r=0;r<ji.length;r++)if(a=ji[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}ji=null}return n}function mm(n,r){do{var a=st;try{if(zc(),Ol.current=Ul,Ll){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ll=!1}if(Bi=0,yt=ct=Ye=null,aa=!1,la=0,vh.current=null,a===null||a.return===null){ht=1,fa=r,st=null;break}e:{var p=n,_=a.return,I=a,C=r;if(r=St,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,q=I,G=q.tag;if((q.mode&1)===0&&(G===0||G===11||G===15)){var W=q.alternate;W?(q.updateQueue=W.updateQueue,q.memoizedState=W.memoizedState,q.lanes=W.lanes):(q.updateQueue=null,q.memoizedState=null)}var ee=jp(_);if(ee!==null){ee.flags&=-257,zp(ee,_,I,p,r),ee.mode&1&&Fp(p,F,r),r=ee,C=F;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(C),r.updateQueue=se}else ie.add(C);break e}else{if((r&1)===0){Fp(p,F,r),kh();break e}C=Error(t(426))}}else if(Ge&&I.mode&1){var nt=jp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),zp(nt,_,I,p,r),Fc(Gs(C,I));break e}}p=C=Gs(C,I),ht!==4&&(ht=2),pa===null?pa=[p]:pa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=bp(p,C,r);cp(p,M);break e;case 1:I=C;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Qr===null||!Qr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=Up(p,I,r);cp(p,Q);break e}}p=p.return}while(p!==null)}_m(a)}catch(oe){r=oe,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function gm(){var n=Hl.current;return Hl.current=Ul,n===null?Ul:n}function kh(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||($i&268435455)===0&&(Wl&268435455)===0||Jr(_t,St)}function Yl(n,r){var a=Ve;Ve|=2;var c=gm();(_t!==n||St!==r)&&(vr=null,Wi(n,r));do try{pE();break}catch(d){mm(n,d)}while(!0);if(zc(),Ve=a,Hl.current=c,st!==null)throw Error(t(261));return _t=null,St=0,ht}function pE(){for(;st!==null;)ym(st)}function mE(){for(;st!==null&&!Ga();)ym(st)}function ym(n){var r=wm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?_m(n):st=r,vh.current=null}function _m(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=aE(a,r,an),a!==null){st=a;return}}else{if(a=lE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function qi(n,r,a){var c=Pe,d=yn.transition;try{yn.transition=null,Pe=1,gE(n,r,a,c)}finally{yn.transition=d,Pe=c}return null}function gE(n,r,a,c){do Js();while(Xr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,St=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Kl||(Kl=!0,Tm(cn,function(){return Js(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var _=Pe;Pe=1;var I=Ve;Ve|=4,vh.current=null,cE(n,a),lm(a,n),Mv(kc),Fr=!!Cc,kc=Cc=null,n.current=a,hE(a),hc(),Ve=I,Pe=_,yn.transition=p}else n.current=a;if(Kl&&(Kl=!1,Xr=n,Gl=d),p=n.pendingLanes,p===0&&(Qr=null),Ya(a.stateNode),Xt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ql)throw ql=!1,n=Th,Th=null,n;return(Gl&1)!==0&&n.tag!==0&&Js(),p=n.pendingLanes,(p&1)!==0?n===Ih?ma++:(ma=0,Ih=n):ma=0,Wr(),null}function Js(){if(Xr!==null){var n=br(Gl),r=yn.transition,a=Pe;try{if(yn.transition=null,Pe=16>n?16:n,Xr===null)var c=!1;else{if(n=Xr,Xr=null,Gl=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var p=re,_=p.child;if((re.flags&16)!==0){var I=p.deletions;if(I!==null){for(var C=0;C<I.length;C++){var F=I[C];for(re=F;re!==null;){var q=re;switch(q.tag){case 0:case 11:case 15:da(8,q,p)}var G=q.child;if(G!==null)G.return=q,re=G;else for(;re!==null;){q=re;var W=q.sibling,ee=q.return;if(rm(q),q===F){re=null;break}if(W!==null){W.return=ee,re=W;break}re=ee}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var nt=se.sibling;se.sibling=null,se=nt}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:da(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var N=n.current;for(re=N;re!==null;){_=re;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,re=b;else e:for(_=N;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:$l(9,I)}}catch(oe){Ze(I,I.return,oe)}if(I===_){re=null;break e}var Q=I.sibling;if(Q!==null){Q.return=I.return,re=Q;break e}re=I.return}}if(Ve=d,Wr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Pi,n)}catch{}c=!0}return c}finally{Pe=a,yn.transition=r}}return!1}function vm(n,r,a){r=Gs(a,r),r=bp(n,r,1),n=Kr(n,r,1),r=Bt(),n!==null&&(Lr(n,1,r),Xt(n,r))}function Ze(n,r,a){if(n.tag===3)vm(n,n,a);else for(;r!==null;){if(r.tag===3){vm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qr===null||!Qr.has(c))){n=Gs(a,n),n=Up(r,n,1),r=Kr(r,n,1),n=Bt(),r!==null&&(Lr(r,1,n),Xt(r,n));break}}r=r.return}}function yE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(ht===4||ht===3&&(St&130023424)===St&&500>$e()-wh?Wi(n,0):Eh|=a),Xt(n,r)}function Em(n,r){r===0&&((n.mode&1)===0?r=1:(r=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var a=Bt();n=gr(n,r),n!==null&&(Lr(n,r,a),Xt(n,a))}function _E(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Em(n,a)}function vE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Em(n,a)}var wm;wm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Gt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Gt=!1,oE(n,r,a);Gt=(n.flags&131072)!==0}else Gt=!1,Ge&&(r.flags&1048576)!==0&&ep(r,Rl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;zl(n,r),n=r.pendingProps;var d=js(r,xt.current);qs(r,a),d=Jc(null,r,c,n,d,a);var p=Zc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,Il(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wc(r),d.updater=Fl,r.stateNode=d,d._reactInternals=r,sh(r,c,n,a),r=uh(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&Lc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(zl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=wE(c),n=xn(c,n),d){case 0:r=lh(null,r,c,n,a);break e;case 1:r=Kp(null,r,c,n,a);break e;case 11:r=Bp(null,r,c,n,a);break e;case 14:r=$p(null,r,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),lh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),Kp(n,r,c,d,a);case 3:e:{if(Gp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,up(n,r),Dl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Gs(Error(t(423)),r),r=Qp(n,r,c,a,d);break e}else if(c!==d){d=Gs(Error(t(424)),r),r=Qp(n,r,c,a,d);break e}else for(on=Br(r.stateNode.containerInfo.firstChild),sn=r,Ge=!0,Nn=null,a=ap(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),c===d){r=_r(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return dp(r),n===null&&Uc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Pc(c,d)?_=null:p!==null&&Pc(c,p)&&(r.flags|=32),qp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Uc(r),null;case 13:return Xp(n,r,a);case 4:return qc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Hs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),Bp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,He(Pl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!qt.current){r=_r(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=yr(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?C.next=C:(C.next=q.next,q.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),$c(p.return,a,r),I.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),$c(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,qs(r,a),d=mn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=xn(c,r.pendingProps),d=xn(c.type,d),$p(n,r,c,d,a);case 15:return Hp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),zl(n,r),r.tag=1,Kt(c)?(n=!0,Il(r)):n=!1,qs(r,a),Lp(r,c,d),sh(r,c,d,a),uh(null,r,c,!0,n,a);case 19:return Jp(n,r,a);case 22:return Wp(n,r,a)}throw Error(t(156,r.tag))};function Tm(n,r){return vs(n,r)}function EE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new EE(n,r,a,c)}function Ph(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wE(n){if(typeof n=="function")return Ph(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===Pt)return 14}return 2}function Zr(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Jl(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Ph(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case R:return Ki(a.children,d,p,r);case T:_=8,d|=8;break;case S:return n=_n(12,a,r,d|2),n.elementType=S,n.lanes=p,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=p,n;case et:return n=_n(19,a,r,d),n.elementType=et,n.lanes=p,n;case Fe:return Zl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case x:_=9;break e;case V:_=11;break e;case Pt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ki(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function Zl(n,r,a,c){return n=_n(22,n,c,r),n.elementType=Fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Nh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function xh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function TE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Or(0),this.expirationTimes=Or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Dh(n,r,a,c,d,p,_,I,C){return n=new TE(n,r,a,I,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(p),n}function IE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Im(n){if(!n)return Hr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Yf(n,a,r)}return r}function Sm(n,r,a,c,d,p,_,I,C){return n=Dh(a,c,!0,n,d,p,_,I,C),n.context=Im(null),a=n.current,c=Bt(),d=Yr(a),p=yr(c,d),p.callback=r??null,Kr(a,p,d),n.current.lanes=d,Lr(n,d,c),Xt(n,c),n}function eu(n,r,a,c){var d=r.current,p=Bt(),_=Yr(d);return a=Im(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Kr(d,r,_),n!==null&&(On(n,d,_,p),xl(n,d,_)),_}function tu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Vh(n,r){Am(n,r),(n=n.alternate)&&Am(n,r)}function SE(){return null}var Rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Oh(n){this._internalRoot=n}nu.prototype.render=Oh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));eu(n,r,null,null)},nu.prototype.unmount=Oh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Hi(function(){eu(null,n,null,null)}),r[dr]=null}};function nu(n){this._internalRoot=n}nu.prototype.unstable_scheduleHydration=function(n){if(n){var r=nl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,n),a===0&&sl(n)}};function Lh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function AE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=tu(_);p.call(F)}}var _=Sm(r,c,n,0,null,!1,!1,"",Cm);return n._reactRootContainer=_,n[dr]=_.current,Zo(n.nodeType===8?n.parentNode:n),Hi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=tu(C);I.call(F)}}var C=Dh(n,0,!1,null,null,!1,!1,"",Cm);return n._reactRootContainer=C,n[dr]=C.current,Zo(n.nodeType===8?n.parentNode:n),Hi(function(){eu(r,C,a,c)}),C}function iu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var C=tu(_);I.call(C)}}eu(r,_,n,d)}else _=AE(a,r,n,d,c);return tu(_)}el=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vr(r.pendingLanes);a!==0&&(Mr(r,a|1),Xt(r,$e()),(Ve&6)===0&&(Ys=$e()+500,Wr()))}break;case 13:Hi(function(){var c=gr(n,1);if(c!==null){var d=Bt();On(c,n,1,d)}}),Vh(n,1)}},Ts=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=Bt();On(r,n,134217728,a)}Vh(n,134217728)}},tl=function(n){if(n.tag===13){var r=Yr(n),a=gr(n,r);if(a!==null){var c=Bt();On(a,n,r,c)}Vh(n,r)}},nl=function(){return Pe},rl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},fs=function(n,r,a){switch(r){case"input":if(So(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=wl(c);if(!d)throw Error(t(90));as(c),So(c,d)}}}break;case"textarea":hs(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Si=Rh,Oo=Hi;var RE={usingClientEntryPoint:!1,Events:[na,Us,wl,Fn,Vo,Rh]},ga={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bo(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||SE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Pi=su.inject(CE),en=su}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(r))throw Error(t(200));return IE(n,r,null,a)},Yt.createRoot=function(n,r){if(!Lh(n))throw Error(t(299));var a=!1,c="",d=Rm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Dh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,Zo(n.nodeType===8?n.parentNode:n),new Oh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=bo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Hi(n)},Yt.hydrate=function(n,r,a){if(!ru(r))throw Error(t(200));return iu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Lh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Rm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Sm(r,null,n,1,a??null,d,!1,p,_),n[dr]=r.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new nu(r)},Yt.render=function(n,r,a){if(!ru(r))throw Error(t(200));return iu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!ru(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){iu(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Rh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return iu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Lm;function LE(){if(Lm)return Uh.exports;Lm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Uh.exports=OE(),Uh.exports}var Mm;function ME(){if(Mm)return ou;Mm=1;var i=LE();return ou.createRoot=i.createRoot,ou.hydrateRoot=i.hydrateRoot,ou}var bE=ME();const UE=()=>{};var bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},FE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},uy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,P=(u&3)<<4|m>>4;let L=(m&15)<<2|v>>6,U=v&63;y||(U=64,h||(L=64)),s.push(t[w],t[P],t[L],t[U])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ly(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):FE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const P=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||P==null)throw new jE;const L=u<<2|m>>4;if(s.push(L),v!==64){const U=m<<4&240|v>>2;if(s.push(U),P!==64){const z=v<<6&192|P;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zE=function(i){const e=ly(i);return uy.encodeByteArray(e,!0)},Su=function(i){return zE(i).replace(/\./g,"")},cy=function(i){try{return uy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=()=>BE().__FIREBASE_DEFAULTS__,HE=()=>{if(typeof process>"u"||typeof bm>"u")return;const i=bm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},WE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cy(i[1]);return e&&JSON.parse(e)},$u=()=>{try{return UE()||$E()||HE()||WE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},hy=i=>{var e,t;return(t=(e=$u())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},qE=i=>{const e=hy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dy=()=>{var i;return(i=$u())===null||i===void 0?void 0:i.config},fy=i=>{var e;return(e=$u())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Su(JSON.stringify(t)),Su(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function XE(){var i;const e=(i=$u())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ZE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ew(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function tw(){return!XE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nw(){try{return typeof indexedDB=="object"}catch{return!1}}function rw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=iw,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?sw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Pr(o,m,s)}}function sw(i,e){return i.replace(ow,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ow=/\{\$([^}]+)}/g;function aw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Um(u)&&Um(h)){if(!Zi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Um(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function lw(i,e){const t=new uw(i,e);return t.subscribe.bind(t)}class uw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=zh),o.error===void 0&&(o.error=zh),o.complete===void 0&&(o.complete=zh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function zh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(i){return i&&i._delegate?i._delegate:i}class es{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new KE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fw(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dw(i){return i===Gi?void 0:i}function fw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const mw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},gw=Ce.INFO,yw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},_w=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=yw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=gw,this._logHandler=_w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const vw=(i,e)=>e.some(t=>i instanceof t);let Fm,jm;function Ew(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ww(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const py=new WeakMap,Jh=new WeakMap,my=new WeakMap,Bh=new WeakMap,Nd=new WeakMap;function Tw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&py.set(t,i)}).catch(()=>{}),Nd.set(e,i),e}function Iw(i){if(Jh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Jh.set(i,e)}let Zh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Jh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||my.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Sw(i){Zh=i(Zh)}function Aw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call($h(this),e,...t);return my.set(s,e.sort?e.sort():[e]),oi(s)}:ww().includes(i)?function(...e){return i.apply($h(this),e),oi(py.get(this))}:function(...e){return oi(i.apply($h(this),e))}}function Rw(i){return typeof i=="function"?Aw(i):(i instanceof IDBTransaction&&Iw(i),vw(i,Ew())?new Proxy(i,Zh):i)}function oi(i){if(i instanceof IDBRequest)return Tw(i);if(Bh.has(i))return Bh.get(i);const e=Rw(i);return e!==i&&(Bh.set(i,e),Nd.set(e,i)),e}const $h=i=>Nd.get(i);function Cw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(oi(h.result),y.oldVersion,y.newVersion,oi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const kw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],Hh=new Map;function zm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Hh.get(e))return Hh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Pw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||kw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Hh.set(e,u),u}Sw(i=>({...i,get:(e,t,s)=>zm(e,t)||i.get(e,t,s),has:(e,t)=>!!zm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",Bm="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Pd("@firebase/app"),Dw="@firebase/app-compat",Vw="@firebase/analytics-compat",Ow="@firebase/analytics",Lw="@firebase/app-check-compat",Mw="@firebase/app-check",bw="@firebase/auth",Uw="@firebase/auth-compat",Fw="@firebase/database",jw="@firebase/data-connect",zw="@firebase/database-compat",Bw="@firebase/functions",$w="@firebase/functions-compat",Hw="@firebase/installations",Ww="@firebase/installations-compat",qw="@firebase/messaging",Kw="@firebase/messaging-compat",Gw="@firebase/performance",Qw="@firebase/performance-compat",Xw="@firebase/remote-config",Yw="@firebase/remote-config-compat",Jw="@firebase/storage",Zw="@firebase/storage-compat",e0="@firebase/firestore",t0="@firebase/vertexai",n0="@firebase/firestore-compat",r0="firebase",i0="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="[DEFAULT]",s0={[ed]:"fire-core",[Dw]:"fire-core-compat",[Ow]:"fire-analytics",[Vw]:"fire-analytics-compat",[Mw]:"fire-app-check",[Lw]:"fire-app-check-compat",[bw]:"fire-auth",[Uw]:"fire-auth-compat",[Fw]:"fire-rtdb",[jw]:"fire-data-connect",[zw]:"fire-rtdb-compat",[Bw]:"fire-fn",[$w]:"fire-fn-compat",[Hw]:"fire-iid",[Ww]:"fire-iid-compat",[qw]:"fire-fcm",[Kw]:"fire-fcm-compat",[Gw]:"fire-perf",[Qw]:"fire-perf-compat",[Xw]:"fire-rc",[Yw]:"fire-rc-compat",[Jw]:"fire-gcs",[Zw]:"fire-gcs-compat",[e0]:"fire-fst",[n0]:"fire-fst-compat",[t0]:"fire-vertex","fire-js":"fire-js",[r0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map,o0=new Map,nd=new Map;function $m(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ao(i){const e=i.name;if(nd.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;nd.set(e,i);for(const t of Au.values())$m(t,i);for(const t of o0.values())$m(t,i);return!0}function xd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Ln(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new La("app","Firebase",a0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=i0;function gy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:td,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=dy()),!t)throw ai.create("no-options");const u=Au.get(o);if(u){if(Zi(t,u.options)&&Zi(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new pw(o);for(const y of nd.values())h.addComponent(y);const m=new l0(t,s,h);return Au.set(o,m),m}function yy(i=td){const e=Au.get(i);if(!e&&i===td&&dy())return gy();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=s0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(m.join(" "));return}ao(new es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="firebase-heartbeat-database",c0=1,Ca="firebase-heartbeat-store";let Wh=null;function _y(){return Wh||(Wh=Cw(u0,c0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ca)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),Wh}async function h0(i){try{const t=(await _y()).transaction(Ca),s=await t.objectStore(Ca).get(vy(i));return await t.done,s}catch(e){if(e instanceof Pr)Ar.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function Hm(i,e){try{const s=(await _y()).transaction(Ca,"readwrite");await s.objectStore(Ca).put(e,vy(i)),await s.done}catch(t){if(t instanceof Pr)Ar.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(s.message)}}}function vy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=1024,f0=30;class p0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new g0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Wm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>f0){const h=y0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wm(),{heartbeatsToSend:s,unsentEntries:o}=m0(this._heartbeatsCache.heartbeats),u=Su(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ar.warn(t),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function m0(i,e=d0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),qm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),qm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class g0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nw()?rw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await h0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function qm(i){return Su(JSON.stringify({version:2,heartbeats:i})).length}function y0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(i){ao(new es("platform-logger",e=>new Nw(e),"PRIVATE")),ao(new es("heartbeat",e=>new p0(e),"PRIVATE")),li(ed,Bm,i),li(ed,Bm,"esm2017"),li("fire-js","")}_0("");function Dd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v0=Ey,wy=new La("auth","Firebase",Ey());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Pd("@firebase/auth");function E0(i,...e){Ru.logLevel<=Ce.WARN&&Ru.warn(`Auth (${yo}): ${i}`,...e)}function pu(i,...e){Ru.logLevel<=Ce.ERROR&&Ru.error(`Auth (${yo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(i,...e){throw Od(i,...e)}function Mn(i,...e){return Od(i,...e)}function Vd(i,e,t){const s=Object.assign(Object.assign({},v0()),{[e]:t});return new La("auth","Firebase",s).create(e,{appName:i.name})}function Ji(i){return Vd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w0(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zn(i,"argument-error"),Vd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Od(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return wy.create(i,...e)}function ge(i,e,...t){if(!i)throw Od(e,...t)}function Tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw pu(e),new Error(e)}function Rr(i,e){i||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function T0(){return Km()==="http:"||Km()==="https:"}function Km(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T0()||JE()||"connection"in navigator)?navigator.onLine:!0}function S0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=QE()||ZE()}get(){return I0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new ba(3e4,6e4);function Md(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function _o(i,e,t,s,o={}){return Iy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ma(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return YE()||(v.referrerPolicy="no-referrer"),Ty.fetch()(Sy(i,i.config.apiHost,t,m),v)})}async function Iy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},A0),e);try{const o=new k0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw au(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw au(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw au(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Vd(i,w,v);Zn(i,w)}}catch(o){if(o instanceof Pr)throw o;Zn(i,"network-request-failed",{message:String(o)})}}async function C0(i,e,t,s,o={}){const u=await _o(i,e,t,s,o);return"mfaPendingCredential"in u&&Zn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Sy(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Ld(i.config,o):`${i.config.apiScheme}://${o}`}class k0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),R0.get())})}}function au(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(i,e){return _o(i,"POST","/v1/accounts:delete",e)}async function Ay(i,e){return _o(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N0(i,e=!1){const t=$t(i),s=await t.getIdToken(e),o=bd(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ta(qh(o.auth_time)),issuedAtTime:Ta(qh(o.iat)),expirationTime:Ta(qh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function qh(i){return Number(i)*1e3}function bd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=cy(t);return o?JSON.parse(o):(pu("Failed to decode base64 JWT payload"),null)}catch(o){return pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gm(i){const e=bd(i);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&x0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function x0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await ka(i,Ay(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ry(u.providerUserInfo):[],m=O0(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,P={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new id(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,P)}async function V0(i){const e=$t(i);await Cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ry(i){return i.map(e=>{var{providerId:t}=e,s=Dd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(i,e){const t=await Iy(i,{},async()=>{const s=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=Sy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Ty.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function M0(i,e){return _o(i,"POST","/v2/accounts:revokeToken",Md(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Gm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await L0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(i,e){ge(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new id(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ka(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return N0(this,e)}reload(){return V0(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Cu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await ka(this,P0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const P=(s=t.displayName)!==null&&s!==void 0?s:void 0,L=(o=t.email)!==null&&o!==void 0?o:void 0,U=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,_e=(v=t.createdAt)!==null&&v!==void 0?v:void 0,fe=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:we,isAnonymous:je,providerData:Te,stsTokenManager:R}=t;ge(ye&&R,e,"internal-error");const T=ro.fromJSON(this.name,R);ge(typeof ye=="string",e,"internal-error"),ti(P,e.name),ti(L,e.name),ge(typeof we=="boolean",e,"internal-error"),ge(typeof je=="boolean",e,"internal-error"),ti(U,e.name),ti(z,e.name),ti(X,e.name),ti(H,e.name),ti(_e,e.name),ti(fe,e.name);const S=new Ir({uid:ye,auth:e,email:L,emailVerified:we,displayName:P,isAnonymous:je,photoURL:z,phoneNumber:U,tenantId:X,stsTokenManager:T,createdAt:_e,lastLoginAt:fe});return Te&&Array.isArray(Te)&&(S.providerData=Te.map(k=>Object.assign({},k))),H&&(S._redirectEventId=H),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new Ir({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Cu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ry(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ro;m.updateFromIdToken(s);const y=new Ir({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new id(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;function Sr(i){Rr(i instanceof Function,"Expected a class definition");let e=Qm.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Qm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cy.type="NONE";const Xm=Cy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(i,e,t){return`firebase:${i}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=mu(this.userKey,o.apiKey,u),this.fullPersistenceKey=mu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(Sr(Xm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Sr(Xm);const h=mu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const P=Ir._fromJSON(e,w);v!==u&&(m=P),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new io(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new io(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vy(e))return"Blackberry";if(Oy(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||Ny(e))&&!e.includes("edge/"))return"Chrome";if(Dy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ky(i=Ut()){return/firefox\//i.test(i)}function Py(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ny(i=Ut()){return/crios\//i.test(i)}function xy(i=Ut()){return/iemobile/i.test(i)}function Dy(i=Ut()){return/android/i.test(i)}function Vy(i=Ut()){return/blackberry/i.test(i)}function Oy(i=Ut()){return/webos/i.test(i)}function Ud(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function b0(i=Ut()){var e;return Ud(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U0(){return ew()&&document.documentMode===10}function Ly(i=Ut()){return Ud(i)||Dy(i)||Oy(i)||Vy(i)||/windows phone/i.test(i)||xy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(i,e=[]){let t;switch(i){case"Browser":t=Ym(Ut());break;case"Worker":t=`${Ym(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(i,e={}){return _o(i,"GET","/v2/passwordPolicy",Md(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=6;class B0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:z0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new F0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ay(this,{idToken:e}),s=await Ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(Ji(this));const t=e?$t(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j0(this),t=new B0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await M0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=My(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&E0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Hu(i){return $t(i)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=lw(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H0(i){Fd=i}function W0(i){return Fd.loadJS(i)}function q0(){return Fd.gapiScript}function K0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(i,e){const t=xd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Zi(u,e??{}))return o;Zn(o,"already-initialized")}return t.initialize({options:e})}function Q0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function X0(i,e,t){const s=Hu(i);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=by(e),{host:h,port:m}=Y0(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(Zi(v,s.config.emulator)&&Zi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,J0()}function by(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Y0(i){const e=by(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Zm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Zm(h)}}}function Zm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function J0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(i,e){return C0(i,"POST","/v1/accounts:signInWithIdp",Md(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="http://localhost";class ts extends Uy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Dd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ts(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return so(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,so(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,so(e,t)}buildRequest(){const e={requestUri:Z0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ma(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ua{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return wr.credential(t,s)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ua{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ua{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ir._fromIdTokenResponse(e,s,o),h=eg(s);return new lo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=eg(s);return new lo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function eg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Pr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ku(e,t,s,o)}}function Fy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(i,u,e,s):u})}async function eT(i,e,t=!1){const s=await ka(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return lo._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(i,e,t=!1){const{auth:s}=i;if(Ln(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const u=await ka(i,Fy(s,o,e,i),t);ge(u.idToken,s,"internal-error");const h=bd(u.idToken);ge(h,s,"internal-error");const{sub:m}=h;return ge(i.uid===m,s,"user-mismatch"),lo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Zn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(i,e,t=!1){if(Ln(i.app))return Promise.reject(Ji(i));const s="signIn",o=await Fy(i,s,e),u=await lo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function rT(i,e,t,s){return $t(i).onIdTokenChanged(e,t,s)}function iT(i,e,t){return $t(i).beforeAuthStateChanged(e,t)}function sT(i){return $t(i).signOut()}const Pu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=1e3,aT=10;class zy extends jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);U0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,aT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zy.type="LOCAL";const lT=zy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By extends jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}By.type="SESSION";const $y=By;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Wu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await uT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=zd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(P){const L=P;if(L.data.eventId===v)switch(L.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(L.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function hT(i){Xn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function dT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function pT(){return Hy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="firebaseLocalStorageDb",mT=1,Nu="firebaseLocalStorage",qy="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qu(i,e){return i.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function gT(){const i=indexedDB.deleteDatabase(Wy);return new Fa(i).toPromise()}function sd(){const i=indexedDB.open(Wy,mT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Nu,{keyPath:qy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Nu)?e(s):(s.close(),await gT(),e(await sd()))})})}async function tg(i,e,t){const s=qu(i,!0).put({[qy]:e,value:t});return new Fa(s).toPromise()}async function yT(i,e){const t=qu(i,!1).get(e),s=await new Fa(t).toPromise();return s===void 0?null:s.value}function ng(i,e){const t=qu(i,!0).delete(e);return new Fa(t).toPromise()}const _T=800,vT=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>vT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance(pT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dT(),!this.activeServiceWorker)return;this.sender=new cT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await tg(e,Pu,"1"),await ng(e,Pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ng(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=qu(o,!1).getAll();return new Fa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const ET=Ky;new ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(i,e){return e?Sr(e):(ge(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends Uy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,t){return so(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wT(i){return nT(i.auth,new Bd(i),i.bypassAuthState)}function TT(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),tT(t,new Bd(i),i.bypassAuthState)}async function IT(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),eT(t,new Bd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wT;case"linkViaPopup":case"linkViaRedirect":return IT;case"reauthViaPopup":case"reauthViaRedirect":return TT;default:Zn(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=new ba(2e3,1e4);async function AT(i,e,t){if(Ln(i.app))return Promise.reject(Mn(i,"operation-not-supported-in-this-environment"));const s=Hu(i);w0(i,e,jd);const o=Gy(s,t);return new Qi(s,"signInViaPopup",e,o).executeNotNull()}class Qi extends Qy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ST.get())};e()}}Qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="pendingRedirect",gu=new Map;class CT extends Qy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gu.get(this.auth._key());if(!e){try{const s=await kT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gu.set(this.auth._key(),e)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kT(i,e){const t=xT(e),s=NT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function PT(i,e){gu.set(i._key(),e)}function NT(i){return Sr(i._redirectPersistence)}function xT(i){return mu(RT,i.config.apiKey,i.name)}async function DT(i,e,t=!1){if(Ln(i.app))return Promise.reject(Ji(i));const s=Hu(i),o=Gy(s,e),h=await new CT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=10*60*1e3;class OT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Xy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VT&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Xy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(i,e={}){return _o(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UT=/^https?/;async function FT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await MT(i);for(const t of e)try{if(jT(t))return}catch{}Zn(i,"unauthorized-domain")}function jT(i){const e=rd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!UT.test(t))return!1;if(bT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=new ba(3e4,6e4);function ig(){const i=Xn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function BT(i){return new Promise((e,t)=>{var s,o,u;function h(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),t(Mn(i,"network-request-failed"))},timeout:zT.get()})}if(!((o=(s=Xn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Xn().gapi)===null||u===void 0)&&u.load)h();else{const m=K0("iframefcb");return Xn()[m]=()=>{gapi.load?h():t(Mn(i,"network-request-failed"))},W0(`${q0()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw yu=null,e})}let yu=null;function $T(i){return yu=yu||BT(i),yu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new ba(5e3,15e3),WT="__/auth/iframe",qT="emulator/auth/iframe",KT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QT(i){const e=i.config;ge(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ld(e,qT):`https://${i.config.authDomain}/${WT}`,s={apiKey:e.apiKey,appName:i.name,v:yo},o=GT.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ma(s).slice(1)}`}async function XT(i){const e=await $T(i),t=Xn().gapi;return ge(t,i,"internal-error"),e.open({where:document.body,url:QT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mn(i,"network-request-failed"),m=Xn().setTimeout(()=>{u(h)},HT.get());function y(){Xn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JT=500,ZT=600,eI="_blank",tI="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nI(i,e,t,s=JT,o=ZT){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},YT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ut().toLowerCase();t&&(m=Ny(v)?eI:t),ky(v)&&(e=e||tI,y.scrollbars="yes");const w=Object.entries(y).reduce((L,[U,z])=>`${L}${U}=${z},`,"");if(b0(v)&&m!=="_self")return rI(e||"",m),new sg(null);const P=window.open(e||"",m,w);ge(P,i,"popup-blocked");try{P.focus()}catch{}return new sg(P)}function rI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="__/auth/handler",sI="emulator/auth/handler",oI=encodeURIComponent("fac");async function og(i,e,t,s,o,u){ge(i.config.authDomain,i,"auth-domain-config-required"),ge(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:yo,eventId:o};if(e instanceof jd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",aw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,P]of Object.entries({}))h[w]=P}if(e instanceof Ua){const w=e.getScopes().filter(P=>P!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${oI}=${encodeURIComponent(y)}`:"";return`${aI(i)}?${Ma(m).slice(1)}${v}`}function aI({config:i}){return i.emulator?Ld(i,sI):`https://${i.authDomain}/${iI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="webStorageSupport";class lI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$y,this._completeRedirectFn=DT,this._overrideRedirectResult=PT}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await og(e,t,s,rd(),o);return nI(e,h,zd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await og(e,t,s,rd(),o);return hT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await XT(e),s=new OT(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kh,{type:Kh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Kh];h!==void 0&&t(!!h),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ly()||Py()||Ud()}}const uI=lI;var ag="@firebase/auth",lg="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dI(i){ao(new es("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:My(i)},v=new $0(s,o,u,y);return Q0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ao(new es("auth-internal",e=>{const t=Hu(e.getProvider("auth").getImmediate());return(s=>new cI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(ag,lg,hI(i)),li(ag,lg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=5*60,pI=fy("authIdTokenMaxAge")||fI;let ug=null;const mI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pI)return;const o=t==null?void 0:t.token;ug!==o&&(ug=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gI(i=yy()){const e=xd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=G0(i,{popupRedirectResolver:uI,persistence:[ET,lT,$y]}),s=fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=mI(u.toString());iT(t,h,()=>h(t.currentUser)),rT(t,m=>h(m))}}const o=hy("auth");return o&&X0(t,`http://${o}`),t}function yI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}H0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Mn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",yI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dI("Browser");var _I="firebase",vI="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li(_I,vI,"app");var cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,Yy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function S(){}S.prototype=T.prototype,R.D=T.prototype,R.prototype=new S,R.prototype.constructor=R,R.C=function(k,x,V){for(var A=Array(arguments.length-2),et=2;et<arguments.length;et++)A[et-2]=arguments[et];return T.prototype[x].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var x=0;16>x;++x)k[x]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(x=0;16>x;++x)k[x]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=R.g[0],S=R.g[1],x=R.g[2];var V=R.g[3],A=T+(V^S&(x^V))+k[0]+3614090360&4294967295;T=S+(A<<7&4294967295|A>>>25),A=V+(x^T&(S^x))+k[1]+3905402710&4294967295,V=T+(A<<12&4294967295|A>>>20),A=x+(S^V&(T^S))+k[2]+606105819&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(T^x&(V^T))+k[3]+3250441966&4294967295,S=x+(A<<22&4294967295|A>>>10),A=T+(V^S&(x^V))+k[4]+4118548399&4294967295,T=S+(A<<7&4294967295|A>>>25),A=V+(x^T&(S^x))+k[5]+1200080426&4294967295,V=T+(A<<12&4294967295|A>>>20),A=x+(S^V&(T^S))+k[6]+2821735955&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(T^x&(V^T))+k[7]+4249261313&4294967295,S=x+(A<<22&4294967295|A>>>10),A=T+(V^S&(x^V))+k[8]+1770035416&4294967295,T=S+(A<<7&4294967295|A>>>25),A=V+(x^T&(S^x))+k[9]+2336552879&4294967295,V=T+(A<<12&4294967295|A>>>20),A=x+(S^V&(T^S))+k[10]+4294925233&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(T^x&(V^T))+k[11]+2304563134&4294967295,S=x+(A<<22&4294967295|A>>>10),A=T+(V^S&(x^V))+k[12]+1804603682&4294967295,T=S+(A<<7&4294967295|A>>>25),A=V+(x^T&(S^x))+k[13]+4254626195&4294967295,V=T+(A<<12&4294967295|A>>>20),A=x+(S^V&(T^S))+k[14]+2792965006&4294967295,x=V+(A<<17&4294967295|A>>>15),A=S+(T^x&(V^T))+k[15]+1236535329&4294967295,S=x+(A<<22&4294967295|A>>>10),A=T+(x^V&(S^x))+k[1]+4129170786&4294967295,T=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(T^S))+k[6]+3225465664&4294967295,V=T+(A<<9&4294967295|A>>>23),A=x+(T^S&(V^T))+k[11]+643717713&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^T&(x^V))+k[0]+3921069994&4294967295,S=x+(A<<20&4294967295|A>>>12),A=T+(x^V&(S^x))+k[5]+3593408605&4294967295,T=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(T^S))+k[10]+38016083&4294967295,V=T+(A<<9&4294967295|A>>>23),A=x+(T^S&(V^T))+k[15]+3634488961&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^T&(x^V))+k[4]+3889429448&4294967295,S=x+(A<<20&4294967295|A>>>12),A=T+(x^V&(S^x))+k[9]+568446438&4294967295,T=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(T^S))+k[14]+3275163606&4294967295,V=T+(A<<9&4294967295|A>>>23),A=x+(T^S&(V^T))+k[3]+4107603335&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^T&(x^V))+k[8]+1163531501&4294967295,S=x+(A<<20&4294967295|A>>>12),A=T+(x^V&(S^x))+k[13]+2850285829&4294967295,T=S+(A<<5&4294967295|A>>>27),A=V+(S^x&(T^S))+k[2]+4243563512&4294967295,V=T+(A<<9&4294967295|A>>>23),A=x+(T^S&(V^T))+k[7]+1735328473&4294967295,x=V+(A<<14&4294967295|A>>>18),A=S+(V^T&(x^V))+k[12]+2368359562&4294967295,S=x+(A<<20&4294967295|A>>>12),A=T+(S^x^V)+k[5]+4294588738&4294967295,T=S+(A<<4&4294967295|A>>>28),A=V+(T^S^x)+k[8]+2272392833&4294967295,V=T+(A<<11&4294967295|A>>>21),A=x+(V^T^S)+k[11]+1839030562&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^T)+k[14]+4259657740&4294967295,S=x+(A<<23&4294967295|A>>>9),A=T+(S^x^V)+k[1]+2763975236&4294967295,T=S+(A<<4&4294967295|A>>>28),A=V+(T^S^x)+k[4]+1272893353&4294967295,V=T+(A<<11&4294967295|A>>>21),A=x+(V^T^S)+k[7]+4139469664&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^T)+k[10]+3200236656&4294967295,S=x+(A<<23&4294967295|A>>>9),A=T+(S^x^V)+k[13]+681279174&4294967295,T=S+(A<<4&4294967295|A>>>28),A=V+(T^S^x)+k[0]+3936430074&4294967295,V=T+(A<<11&4294967295|A>>>21),A=x+(V^T^S)+k[3]+3572445317&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^T)+k[6]+76029189&4294967295,S=x+(A<<23&4294967295|A>>>9),A=T+(S^x^V)+k[9]+3654602809&4294967295,T=S+(A<<4&4294967295|A>>>28),A=V+(T^S^x)+k[12]+3873151461&4294967295,V=T+(A<<11&4294967295|A>>>21),A=x+(V^T^S)+k[15]+530742520&4294967295,x=V+(A<<16&4294967295|A>>>16),A=S+(x^V^T)+k[2]+3299628645&4294967295,S=x+(A<<23&4294967295|A>>>9),A=T+(x^(S|~V))+k[0]+4096336452&4294967295,T=S+(A<<6&4294967295|A>>>26),A=V+(S^(T|~x))+k[7]+1126891415&4294967295,V=T+(A<<10&4294967295|A>>>22),A=x+(T^(V|~S))+k[14]+2878612391&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~T))+k[5]+4237533241&4294967295,S=x+(A<<21&4294967295|A>>>11),A=T+(x^(S|~V))+k[12]+1700485571&4294967295,T=S+(A<<6&4294967295|A>>>26),A=V+(S^(T|~x))+k[3]+2399980690&4294967295,V=T+(A<<10&4294967295|A>>>22),A=x+(T^(V|~S))+k[10]+4293915773&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~T))+k[1]+2240044497&4294967295,S=x+(A<<21&4294967295|A>>>11),A=T+(x^(S|~V))+k[8]+1873313359&4294967295,T=S+(A<<6&4294967295|A>>>26),A=V+(S^(T|~x))+k[15]+4264355552&4294967295,V=T+(A<<10&4294967295|A>>>22),A=x+(T^(V|~S))+k[6]+2734768916&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~T))+k[13]+1309151649&4294967295,S=x+(A<<21&4294967295|A>>>11),A=T+(x^(S|~V))+k[4]+4149444226&4294967295,T=S+(A<<6&4294967295|A>>>26),A=V+(S^(T|~x))+k[11]+3174756917&4294967295,V=T+(A<<10&4294967295|A>>>22),A=x+(T^(V|~S))+k[2]+718787259&4294967295,x=V+(A<<15&4294967295|A>>>17),A=S+(V^(x|~T))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+x&4294967295,R.g[3]=R.g[3]+V&4294967295}s.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var S=T-this.blockSize,k=this.B,x=this.h,V=0;V<T;){if(x==0)for(;V<=S;)o(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<T;)if(k[x++]=R.charCodeAt(V++),x==this.blockSize){o(this,k),x=0;break}}else for(;V<T;)if(k[x++]=R[V++],x==this.blockSize){o(this,k),x=0;break}}this.h=x,this.o+=T},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var S=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=S&255,S/=256;for(this.u(R),R=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)R[S++]=this.g[T]>>>k&255;return R};function u(R,T){var S=m;return Object.prototype.hasOwnProperty.call(S,R)?S[R]:S[R]=T(R)}function h(R,T){this.h=T;for(var S=[],k=!0,x=R.length-1;0<=x;x--){var V=R[x]|0;k&&V==T||(S[x]=V,k=!1)}this.g=S}var m={};function y(R){return-128<=R&&128>R?u(R,function(T){return new h([T|0],0>T?-1:0)}):new h([R|0],0>R?-1:0)}function v(R){if(isNaN(R)||!isFinite(R))return P;if(0>R)return H(v(-R));for(var T=[],S=1,k=0;R>=S;k++)T[k]=R/S|0,S*=4294967296;return new h(T,0)}function w(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return H(w(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(T,8)),k=P,x=0;x<R.length;x+=8){var V=Math.min(8,R.length-x),A=parseInt(R.substring(x,x+V),T);8>V?(V=v(Math.pow(T,V)),k=k.j(V).add(v(A))):(k=k.j(S),k=k.add(v(A)))}return k}var P=y(0),L=y(1),U=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-H(this).m();for(var R=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);R+=(0<=k?k:4294967296+k)*T,T*=4294967296}return R},i.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(z(this))return"0";if(X(this))return"-"+H(this).toString(R);for(var T=v(Math.pow(R,6)),S=this,k="";;){var x=we(S,T).g;S=_e(S,x.j(T));var V=((0<S.g.length?S.g[0]:S.h)>>>0).toString(R);if(S=x,z(S))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},i.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function z(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function X(R){return R.h==-1}i.l=function(R){return R=_e(this,R),X(R)?-1:z(R)?0:1};function H(R){for(var T=R.g.length,S=[],k=0;k<T;k++)S[k]=~R.g[k];return new h(S,~R.h).add(L)}i.abs=function(){return X(this)?H(this):this},i.add=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],k=0,x=0;x<=T;x++){var V=k+(this.i(x)&65535)+(R.i(x)&65535),A=(V>>>16)+(this.i(x)>>>16)+(R.i(x)>>>16);k=A>>>16,V&=65535,A&=65535,S[x]=A<<16|V}return new h(S,S[S.length-1]&-2147483648?-1:0)};function _e(R,T){return R.add(H(T))}i.j=function(R){if(z(this)||z(R))return P;if(X(this))return X(R)?H(this).j(H(R)):H(H(this).j(R));if(X(R))return H(this.j(H(R)));if(0>this.l(U)&&0>R.l(U))return v(this.m()*R.m());for(var T=this.g.length+R.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<R.g.length;x++){var V=this.i(k)>>>16,A=this.i(k)&65535,et=R.i(x)>>>16,Pt=R.i(x)&65535;S[2*k+2*x]+=A*Pt,fe(S,2*k+2*x),S[2*k+2*x+1]+=V*Pt,fe(S,2*k+2*x+1),S[2*k+2*x+1]+=A*et,fe(S,2*k+2*x+1),S[2*k+2*x+2]+=V*et,fe(S,2*k+2*x+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new h(S,0)};function fe(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function ye(R,T){this.g=R,this.h=T}function we(R,T){if(z(T))throw Error("division by zero");if(z(R))return new ye(P,P);if(X(R))return T=we(H(R),T),new ye(H(T.g),H(T.h));if(X(T))return T=we(R,H(T)),new ye(H(T.g),T.h);if(30<R.g.length){if(X(R)||X(T))throw Error("slowDivide_ only works with positive integers.");for(var S=L,k=T;0>=k.l(R);)S=je(S),k=je(k);var x=Te(S,1),V=Te(k,1);for(k=Te(k,2),S=Te(S,2);!z(k);){var A=V.add(k);0>=A.l(R)&&(x=x.add(S),V=A),k=Te(k,1),S=Te(S,1)}return T=_e(R,x.j(T)),new ye(x,T)}for(x=P;0<=R.l(T);){for(S=Math.max(1,Math.floor(R.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=v(S),A=V.j(T);X(A)||0<A.l(R);)S-=k,V=v(S),A=V.j(T);z(V)&&(V=L),x=x.add(V),R=_e(R,A)}return new ye(x,R)}i.A=function(R){return we(this,R).h},i.and=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&R.i(k);return new h(S,this.h&R.h)},i.or=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|R.i(k);return new h(S,this.h|R.h)},i.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^R.i(k);return new h(S,this.h^R.h)};function je(R){for(var T=R.g.length+1,S=[],k=0;k<T;k++)S[k]=R.i(k)<<1|R.i(k-1)>>>31;return new h(S,R.h)}function Te(R,T){var S=T>>5;T%=32;for(var k=R.g.length-S,x=[],V=0;V<k;V++)x[V]=0<T?R.i(V+S)>>>T|R.i(V+S+1)<<32-T:R.i(V+S);return new h(x,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Yy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,ui=h}).apply(typeof cg<"u"?cg:typeof self<"u"?self:typeof window<"u"?window:{});var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jy,va,Zy,_u,od,e_,t_,n_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof lu=="object"&&lu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in g))break e;g=g[O]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,O={next:function(){if(!E&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function P(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function L(l,f,g){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:P,L.apply(null,arguments)}function U(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function z(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,O,j){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return f.prototype[O].apply(E,J)}}function X(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function H(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const O=l.length||0,j=E.length||0;l.length=O+j;for(let J=0;J<j;J++)l[O+J]=E[J]}else l.push(E)}}class _e{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var je=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Te(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function R(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let g,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(g in E)l[g]=E[g];for(let j=0;j<S.length;j++)g=S[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function x(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function A(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=Pt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new _e(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Z=!1,ue=new et,te=()=>{const l=m.Promise.resolve(void 0);Fe=()=>{l.then(D)}};var D=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){V(g)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ae(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(je){e:{try{we(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}z(Ae,ae);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,g,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=O,this.key=++Me,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,f,g,E,O){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var J=Nr(l,f,E,O);return-1<J?(f=l[J],g||(f.fa=!1)):(f=new Be(f,this.src,j,!!E,O),f.fa=g,l.push(f)),f};function as(l,f){var g=f.type;if(g in l.g){var E=l.g[g],O=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=O)&&Array.prototype.splice.call(E,O,1),j&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Nr(l,f,g,E){for(var O=0;O<l.length;++O){var j=l[O];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==E)return O}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),ls={};function Io(l,f,g,E,O){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Io(l,f[j],g,E,O);return null}return g=Ro(g),l&&l[Le]?l.K(f,g,v(E)?!!E.capture:!1,O):So(l,f,g,!1,E,O)}function So(l,f,g,E,O,j){if(!f)throw Error("Invalid event type");var J=v(O)?!!O.capture:!!O,Ue=cs(l);if(Ue||(l[Ei]=Ue=new nr(l)),g=Ue.add(f,g,E,J,j),g.proxy)return g;if(E=Wa(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ie||(O=J),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(ir(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Wa(){function l(g){return f.call(l.src,l.listener,g)}const f=Ao;return l}function us(l,f,g,E,O){if(Array.isArray(f))for(var j=0;j<f.length;j++)us(l,f[j],g,E,O);else E=v(E)?!!E.capture:!!E,g=Ro(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Nr(j,g,E,O),-1<g&&(mt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=cs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Nr(f,g,E,O)),(g=-1<l?f[l]:null)&&rr(g))}function rr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])as(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(ir(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=cs(f))?(as(g,l),g.h==0&&(g.src=null,f[Ei]=null)):mt(l)}}}function ir(l){return l in ls?ls[l]:ls[l]="on"+l}function Ao(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&rr(l),l=g.call(E,f)}return l}function cs(l){return l=l[Ei],l instanceof nr?l:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(l){return typeof l=="function"?l:(l[hs]||(l[hs]=function(f){return l.handleEvent(f)}),l[hs])}function at(){$.call(this),this.i=new nr(this),this.M=this,this.F=null}z(at,$),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,g,E){us(this,l,f,g,E)};function lt(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var O=f;f=new ae(E,l),k(f,O)}if(O=!0,g)for(var j=g.length-1;0<=j;j--){var J=f.g=g[j];O=sr(J,E,!0,f)&&O}if(J=f.g=l,O=sr(J,E,!0,f)&&O,O=sr(J,E,!1,f)&&O,g)for(j=0;j<g.length;j++)J=f.g=g[j],O=sr(J,E,!1,f)&&O}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},at.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function sr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,j=0;j<f.length;++j){var J=f[j];if(J&&!J.da&&J.capture==g){var Ue=J.listener,ut=J.ha||J.src;J.fa&&as(l.i,J),O=Ue.call(ut,E)!==!1&&O}}return O&&!E.defaultPrevented}function Co(l,f,g){if(typeof l=="function")g&&(l=L(l,g));else if(l&&typeof l.handleEvent=="function")l=L(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function xr(l){l.g=Co(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class wi extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(l){$.call(this),this.h=l,this.g={}}z(Ti,$);var ko=[];function Po(l){Te(l.g,function(f,g){this.g.hasOwnProperty(g)&&rr(f)},l),l.g={}}Ti.prototype.N=function(){Ti.aa.N.call(this),Po(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=m.JSON.stringify,xo=m.JSON.parse,Do=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ii(){}Ii.prototype.h=null;function ds(l){return l.h||(l.h=l.i())}function fs(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ae.call(this,"d")}z(Un,ae);function ps(){ae.call(this,"c")}z(ps,ae);var Fn={},Vo=null;function Si(){return Vo=Vo||new at}Fn.La="serverreachability";function Oo(l){ae.call(this,Fn.La,l)}z(Oo,ae);function or(l){const f=Si();lt(f,new Oo(f))}Fn.STAT_EVENT="statevent";function Lo(l,f){ae.call(this,Fn.STAT_EVENT,l),this.stat=f}z(Lo,ae);function tt(l){const f=Si();lt(f,new Lo(f,l))}Fn.Ma="timingevent";function ms(l,f){ae.call(this,Fn.Ma,l),this.size=f}z(ms,ae);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Ri(l,f,g,E,O,j){l.info(function(){if(l.g)if(j)for(var J="",Ue=j.split("&"),ut=0;ut<Ue.length;ut++){var xe=Ue[ut].split("=");if(1<xe.length){var gt=xe[0];xe=xe[1];var it=gt.split("_");J=2<=it.length&&it[1]=="type"?J+(gt+"="+xe+"&"):J+(gt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+g+`
`+J})}function gs(l,f,g,E,O,j,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+g+`
`+j+" "+J})}function wn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+cc(l,g)+(E?" "+E:"")})}function Mo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ai.prototype.info=function(){};function cc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var j=O[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<O.length;J++)O[J]=""}}}}return No(g)}catch{return f}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ci(){}z(Ci,Ii),Ci.prototype.g=function(){return new XMLHttpRequest},Ci.prototype.i=function(){return{}},Tn=new Ci;function In(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new Ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ka}function Ka(){this.i=null,this.g="",this.h=!1}var bo={},_s={};function vs(l,f,g){l.L=1,l.v=Mr(tn(f)),l.m=g,l.P=!0,Uo(l,null)}function Uo(l,f){l.F=Date.now(),$e(l),l.A=tn(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Ur(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Ka,l.g=hl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new wi(L(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(ko[0]=O.toString()),O=ko);for(var j=0;j<O.length;j++){var J=Io(g,O[j],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),or(),Ri(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const it=Wt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Ho(this.g)))){this.J||it!=4||f==7||(f==8||0>=dn?or(3):or(2)),ki(this);var g=this.g.Z();this.X=g;t:if(Ga(this)){var E=Ho(this.g);l="";var O=E.length,j=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Dr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(j&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,gs(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ut=this.g;if((Ue=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(Ue)){var xe=Ue;break t}}xe=null}if(g=xe)wn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,g);else{this.o=!1,this.s=3,tt(12),cn(this),Dr(this);break e}}if(this.P){g=!0;let rn;for(;!this.J&&this.C<J.length;)if(rn=hc(this,J),rn==_s){it==4&&(this.s=4,tt(14),g=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==bo){this.s=4,tt(15),wn(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else wn(this.i,this.l,rn,null),Fo(this,rn);if(Ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||J.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)wn(this.i,this.l,J,"[Invalid Chunked Response]"),cn(this),Dr(this);else if(0<J.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),qo(gt),gt.M=!0,tt(11))}}else wn(this.i,this.l,J,null),Fo(this,J);it==4&&cn(this),this.o&&!this.J&&(it==4?Ns(this.j,this):(this.o=!1,$e(this)))}else As(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),cn(this),Dr(this)}}}catch{}finally{}};function Ga(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function hc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?_s:(g=Number(f.substring(g,E)),isNaN(g)?bo:(E+=1,E+g>f.length?_s:(f=f.slice(E,E+g),l.C=E+g,f)))}In.prototype.cancel=function(){this.J=!0,cn(this)};function $e(l){l.S=Date.now()+l.I,Qa(l,l.I)}function Qa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(L(l.ba,l),f)}function ki(l){l.B&&(m.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mo(this.i,this.A),this.L!=2&&(or(),tt(17)),cn(this),this.s=2,Dr(this)):Qa(this,this.S-l)};function Dr(l){l.j.G==0||l.J||Ns(l.j,l)}function cn(l){ki(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Po(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Fo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ft(g.h,l))){if(!l.K&&Ft(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ps(g),kn(g);else break e;ks(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=En(L(g.Za,g),6e3));if(1>=Ya(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hr(g,11)}else if((l.K||g.g==l)&&Ps(g),!fe(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let xe=O[f];if(g.T=xe[0],xe=xe[1],g.G==2)if(xe[0]=="c"){g.K=xe[1],g.ia=xe[2];const gt=xe[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const it=xe[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const dn=xe[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const rn=l.g;if(rn){const Li=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var j=E.h;j.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(jo(j,j.h),j.h=null))}if(E.D){const Ds=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(E.ya=Ds,ze(E.I,E.D,Ds))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var J=l;if(E.qa=cl(E,E.J?E.ia:null,E.W),J.K){Ja(E.h,J);var Ue=J,ut=E.L;ut&&(Ue.I=ut),Ue.B&&(ki(Ue),$e(Ue)),E.g=J}else Oi(E);0<g.i.length&&$n(g)}else xe[0]!="stop"&&xe[0]!="close"||hr(g,7);else g.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?hr(g,7):Tt(g):xe[0]!="noop"&&g.l&&g.l.ta(xe),g.v=0)}}or(4)}catch{}}var Xa=class{constructor(l,f){this.g=l,this.map=f}};function Pi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ya(l){return l.h?1:l.g?l.g.size:0}function Ft(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function jo(l,f){l.g?l.g.add(f):l.h=f}function Ja(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Pi.prototype.cancel=function(){if(this.i=Za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Za(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return X(l.i)}function Es(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function ws(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Vr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ws(l),E=Es(l),O=E.length,j=0;j<O;j++)f.call(void 0,E[j],g&&g[j],l)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),O=null;if(0<=E){var j=l[g].substring(0,E);O=l[g].substring(E+1)}else j=l[g];f(j,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,Or(this,l.s),this.l=l.l;var f=l.i,g=new jn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Lr(this,g),this.m=l.m}else l&&(f=String(l).match(Ni))?(this.h=!1,xi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Or(this,f[4]),this.l=Pe(f[5]||"",!0),Lr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}ar.prototype.toString=function(){var l=[],f=this.j;f&&l.push(br(f,Ts,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(br(f,Ts,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(br(g,g.charAt(0)=="/"?nl:tl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",br(g,zo)),l.join("")};function tn(l){return new ar(l)}function xi(l,f,g){l.j=g?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Or(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Lr(l,f,g){f instanceof jn?(l.i=f,zn(l.i,l.h)):(g||(f=br(f,rl)),l.i=new jn(f,l.h))}function ze(l,f,g){l.i.set(f,g)}function Mr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function br(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,el),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function el(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ts=/[#\/\?@]/g,tl=/[#\?:]/g,nl=/[#\?]/g,rl=/[#\?@]/g,zo=/#/g;function jn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&dc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=jn.prototype,i.add=function(l,f){wt(this),this.i=null,l=hn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Sn(l,f){wt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return wt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(g,E){g.forEach(function(O){l.call(f,O,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const O=l[E];for(let j=0;j<O.length;j++)g.push(f[E])}return g},i.V=function(l){wt(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return wt(this),this.i=null,l=hn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ur(l,f,g){Sn(l,f),0<g.length&&(l.i=null,l.g.set(hn(l,f),X(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const j=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var O=j;J[E]!==""&&(O+="="+encodeURIComponent(String(J[E]))),l.push(O)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(g,E){var O=E.toLowerCase();E!=O&&(Sn(this,E),Ur(this,O,g))},l)),l.j=f}function fc(l,f){const g=new Ai;if(m.Image){const E=new Image;E.onload=U(Ht,g,"TestLoadImage: loaded",!0,f,E),E.onerror=U(Ht,g,"TestLoadImage: error",!1,f,E),E.onabort=U(Ht,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=U(Ht,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function il(l,f){const g=new Ai,E=new AbortController,O=setTimeout(()=>{E.abort(),Ht(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(O),j.ok?Ht(g,"TestPingServer: ok",!0,f):Ht(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Ht(g,"TestPingServer: error",!1,f)})}function Ht(l,f,g,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(g)}catch{}}function pc(){this.g=new Do}function sl(l,f,g){const E=g||"";try{Vr(l,function(O,j){let J=O;v(O)&&(J=No(O)),f.push(E+j+"="+encodeURIComponent(J))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}z(lr,Ii),lr.prototype.g=function(){return new Di(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function Di(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Di,at),i=Di.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Cn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ol(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ol(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Cn(this),this.readyState==3&&ol(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Cn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let f="";return Te(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Fr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ur(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,f,g))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Ke,at);var mc=/^https?$/i,Bo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?ds(this.o):ds(Tn),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Vi(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)g.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Bo,f,void 0))||E||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of g)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Vi(this,j)}};function Vi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Is(l),nn(l)}function Is(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},i.bb=function(){$o(this)};function $o(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)Co(l.Ea,0,l);else if(lt(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=J===0){var O=String(l.D).match(Ni)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),E=!mc.test(O?O.toLowerCase():"")}g=E}if(g)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var j=2<Wt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Is(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ss(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{g.onreadystatechange=E}catch{}}}function Ss(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),xo(f)}};function Ho(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function As(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(fe(l[E]))continue;var g=x(l[E]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[O]||[];f[O]=j,j.push(g)}R(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(l&&l.concurrentRequestLimit),this.Da=new pc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=cl(this,null,this.W),$n(this)};function Tt(l){if(Rs(l),l.G==3){var f=l.U++,g=tn(l.I);if(ze(g,"SID",l.K),ze(g,"RID",f),ze(g,"TYPE","terminate"),cr(l,g),f=new In(l,l.j,f),f.L=2,f.v=Mr(tn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=hl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}ul(l)}function kn(l){l.g&&(qo(l),l.g.cancel(),l.g=null)}function Rs(l){kn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ps(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function $n(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Fe||te(),Z||(Fe(),Z=!0),ue.add(f,l),l.B=0}}function gc(l,f){return Ya(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(L(l.Ga,l,f),ll(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new In(this,this.j,l);let j=this.o;if(this.S&&(j?(j=T(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(O.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=jr(this,O,f),g=tn(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),cr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(ur(j)))+"&"+f:this.m&&Fr(g,this.m,j)),jo(this.h,O),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",f),ze(g,"SID","null"),O.T=!0,vs(O,g,null)):vs(O,g,f),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||en(this.h)||Cs(this))};function Cs(l,f){var g;f?g=f.l:g=l.U++;const E=tn(l.I);ze(E,"SID",l.K),ze(E,"RID",g),ze(E,"AID",l.T),cr(l,E),l.m&&l.o&&Fr(E,l.m,l.o),g=new In(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=jr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),jo(l.h,g),vs(g,E,f)}function cr(l,f){l.H&&Te(l.H,function(g,E){ze(f,E,g)}),l.l&&Vr({},function(g,E){ze(f,E,g)})}function jr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?L(l.l.Na,l.l,l):null;e:{var O=l.i;let j=-1;for(;;){const J=["count="+g];j==-1?0<g?(j=O[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let Ue=!0;for(let ut=0;ut<g;ut++){let xe=O[ut].g;const gt=O[ut].map;if(xe-=j,0>xe)j=Math.max(0,O[ut].g-100),Ue=!1;else try{sl(gt,J,"req"+xe+"_")}catch{E&&E(gt)}}if(Ue){E=J.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Oi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Fe||te(),Z||(Fe(),Z=!0),ue.add(f,l),l.v=0}}function ks(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(L(l.Fa,l),ll(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,al(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(L(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),al(this))};function qo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function al(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),cr(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Mr(tn(f)),g.m=null,g.P=!0,Uo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),ks(this),tt(19))};function Ps(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ns(l,f){var g=null;if(l.g==f){Ps(l),qo(l),l.g=null;var E=2}else if(Ft(l.h,f))g=f.D,Ja(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=Si(),lt(E,new ms(E,g)),$n(l)}else Oi(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&gc(l,f)||E==2&&ks(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),O){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function ll(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function hr(l,f){if(l.j.info("Error code "+f),f==2){var g=L(l.fb,l),E=l.Xa;const O=!E;E=new ar(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||xi(E,"https"),Mr(E),O?fc(E.toString(),g):il(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),ul(l),Rs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ul(l){if(l.G=0,l.ka=[],l.l){const f=Za(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function cl(l,f,g){var E=g instanceof ar?tn(g):new ar(g);if(E.g!="")f&&(E.g=f+"."+E.g),Or(E,E.s);else{var O=m.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var j=new ar(null);E&&xi(j,E),f&&(j.g=f),O&&Or(j,O),g&&(j.l=g),E=j}return g=l.D,f=l.ya,g&&f&&ze(E,g,f),ze(E,"VER",l.la),cr(l,E),E}function hl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new lr({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}i=Ko.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function xs(){}xs.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){at.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!fe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Hn(this)}z(jt,at),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Tt(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=No(l),l=g);f.i.push(new Xa(f.Ya++,l)),f.G==3&&$n(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,jt.aa.N.call(this)};function dl(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}z(dl,Un);function fl(){ps.call(this),this.status=1}z(fl,ps);function Hn(l){this.g=l}z(Hn,Ko),Hn.prototype.ua=function(){lt(this.g,"a")},Hn.prototype.ta=function(l){lt(this.g,new dl(l))},Hn.prototype.sa=function(l){lt(this.g,new fl)},Hn.prototype.ra=function(){lt(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,n_=function(){return new xs},t_=function(){return Si()},e_=Fn,od={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,_u=ys,qa.COMPLETE="complete",Zy=qa,fs.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",at.prototype.listen=at.prototype.K,va=fs,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Jy=Ke}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});const hg="@firebase/firestore",dg="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Pd("@firebase/firestore");function Zs(){return ns.logLevel}function ne(i,...e){if(ns.logLevel<=Ce.DEBUG){const t=e.map($d);ns.debug(`Firestore (${vo}): ${i}`,...t)}}function Cr(i,...e){if(ns.logLevel<=Ce.ERROR){const t=e.map($d);ns.error(`Firestore (${vo}): ${i}`,...t)}}function uo(i,...e){if(ns.logLevel<=Ce.WARN){const t=e.map($d);ns.warn(`Firestore (${vo}): ${i}`,...t)}}function $d(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(i="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+i;throw Cr(e),new Error(e)}function be(i,e){i||pe()}function Ee(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class wI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ci,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ci)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new r_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Mt(e)}}class II{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class SI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new II(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AI{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new fg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new fg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=RI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Se(i,e){return i<e?-1:i>e?1:0}function ad(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const u=i_(),h=CI(u.encode(pg(i,t)),u.encode(pg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(i.length,e.length)}function pg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function CI(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Se(i[t],e[t]);return Se(i.length,e.length)}function co(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=-62135596800,gg=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*gg);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mg)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-mg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ft(0,0))}static max(){return new ve(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(),s===void 0?s=e.length-t:s>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Se(e.length,t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Qe extends Qn{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const kI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Qn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return kI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yg}static keyField(){return new Ct([yg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new le(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new le(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new le(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new le(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Qe.fromString(e))}static fromName(e){return new de(Qe.fromString(e).popFirst(5))}static empty(){return new de(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=-1;function PI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new di(o,de.empty(),e)}function NI(i){return new di(i.readTime,i.key,Pa)}class di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new di(ve.min(),de.empty(),Pa)}static max(){return new di(ve.max(),de.empty(),Pa)}}function xI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Se(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==DI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function OI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ku.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=-1;function Gu(i){return i==null}function xu(i){return i===0&&1/i==-1/0}function LI(i){return typeof i=="number"&&Number.isInteger(i)&&!xu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="";function MI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=_g(e)),e=bI(i.get(t),e);return _g(e)}function bI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case o_:t+="";break;default:t+=u}}return t}function _g(i){return i+o_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function _i(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function a_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uu(this.root,e,this.comparator,!0)}}class uu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eg(this.data.getIterator())}getIteratorFrom(e){return new Eg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Eg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new ln([])}unionWith(e){let t=new pt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new l_("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const UI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(i){if(be(!!i),typeof i=="string"){let e=0;const t=UI.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="server_timestamp",c_="__type__",h_="__previous_value__",d_="__local_write_time__";function Wd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[c_])===null||t===void 0?void 0:t.stringValue)===u_}function Qu(i){const e=i.mapValue.fields[h_];return Wd(e)?Qu(e):e}function Na(i){const e=fi(i.mapValue.fields[d_].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}const Du="(default)";class xa{constructor(e,t){this.projectId=e,this.database=t||Du}static empty(){return new xa("","")}get isDefaultDatabase(){return this.database===Du}isEqual(e){return e instanceof xa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="__type__",jI="__max__",cu={mapValue:{}},p_="__vector__",Vu="value";function mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Wd(i)?4:BI(i)?9007199254740991:zI(i)?10:11:pe()}function er(i,e){if(i===e)return!0;const t=mi(i);if(t!==mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Na(i).isEqual(Na(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fi(o.timestampValue),m=fi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return pi(o.bytesValue).isEqual(pi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?xu(h)===xu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return co(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(vg(h)!==vg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!er(h[y],m[y])))return!1;return!0}(i,e);default:return pe()}}function Da(i,e){return(i.values||[]).find(t=>er(t,e))!==void 0}function ho(i,e){if(i===e)return 0;const t=mi(i),s=mi(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return wg(i.timestampValue,e.timestampValue);case 4:return wg(Na(i),Na(e));case 5:return ad(i.stringValue,e.stringValue);case 6:return function(u,h){const m=pi(u),y=pi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Se(m[v],y[v]);if(w!==0)return w}return Se(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Se(rt(u.latitude),rt(h.latitude));return m!==0?m:Se(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Tg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const P=u.fields||{},L=h.fields||{},U=(m=P[Vu])===null||m===void 0?void 0:m.arrayValue,z=(y=L[Vu])===null||y===void 0?void 0:y.arrayValue,X=Se(((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0,((w=z==null?void 0:z.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:Tg(U,z)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===cu.mapValue&&h===cu.mapValue)return 0;if(u===cu.mapValue)return 1;if(h===cu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let P=0;P<y.length&&P<w.length;++P){const L=ad(y[P],w[P]);if(L!==0)return L;const U=ho(m[y[P]],v[w[P]]);if(U!==0)return U}return Se(y.length,w.length)}(i.mapValue,e.mapValue);default:throw pe()}}function wg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Se(i,e);const t=fi(i),s=fi(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Tg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=ho(t[o],s[o]);if(u)return u}return Se(t.length,s.length)}function fo(i){return ld(i)}function ld(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=fi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return pi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ld(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ld(t.fields[h])}`;return o+"}"}(i.mapValue):pe()}function vu(i){switch(mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qu(i);return e?16+vu(e):16;case 5:return 2*i.stringValue.length;case 6:return pi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+vu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return _i(s.fields,(u,h)=>{o+=u.length+vu(h)}),o}(i.mapValue);default:throw pe()}}function ud(i){return!!i&&"integerValue"in i}function qd(i){return!!i&&"arrayValue"in i}function Ig(i){return!!i&&"nullValue"in i}function Sg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Eu(i){return!!i&&"mapValue"in i}function zI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[f_])===null||t===void 0?void 0:t.stringValue)===p_}function Ia(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return _i(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ia(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ia(i.arrayValue.values[t]);return e}return Object.assign({},i)}function BI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===jI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Eu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ia(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Eu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Eu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){_i(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Zt(Ia(this.value))}}function m_(i){const e=[];return _i(i.fields,(t,s)=>{const o=new Ct([t]);if(Eu(s)){const u=m_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,ve.min(),ve.min(),ve.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,ve.min(),ve.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,ve.min(),ve.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.position=e,this.inclusive=t}}function Ag(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=ho(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Rg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t="asc"){this.field=e,this.dir=t}}function $I(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{}class dt extends g_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new WI(e,t,s):t==="array-contains"?new GI(e,s):t==="in"?new QI(e,s):t==="not-in"?new XI(e,s):t==="array-contains-any"?new YI(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qI(e,s):new KI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ho(t,this.value)):t!==null&&mi(this.value)===mi(t)&&this.matchesComparison(ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends g_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tr(e,t)}matches(e){return y_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function y_(i){return i.op==="and"}function __(i){return HI(i)&&y_(i)}function HI(i){for(const e of i.filters)if(e instanceof tr)return!1;return!0}function cd(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+fo(i.value);if(__(i))return i.filters.map(e=>cd(e)).join(",");{const e=i.filters.map(t=>cd(t)).join(",");return`${i.op}(${e})`}}function v_(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(i,e):i instanceof tr?function(s,o){return o instanceof tr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&v_(h,o.filters[m]),!0):!1}(i,e):void pe()}function E_(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${fo(t.value)}`}(i):i instanceof tr?function(t){return t.op.toString()+" {"+t.getFilters().map(E_).join(" ,")+"}"}(i):"Filter"}class WI extends dt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class qI extends dt{constructor(e,t){super(e,"in",t),this.keys=w_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class KI extends dt{constructor(e,t){super(e,"not-in",t),this.keys=w_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function w_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class GI extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&Da(t.arrayValue,this.value)}}class QI extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Da(this.value.arrayValue,t)}}class XI extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Da(this.value.arrayValue,t)}}class YI extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Da(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function Cg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new JI(i,e,t,s,o,u,h)}function Kd(i){const e=Ee(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>cd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Gu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>fo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>fo(s)).join(",")),e.le=t}return e.le}function Gd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!$I(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!v_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Rg(i.startAt,e.startAt)&&Rg(i.endAt,e.endAt)}function hd(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ZI(i,e,t,s,o,u,h,m){return new Xu(i,e,t,s,o,u,h,m)}function T_(i){return new Xu(i)}function kg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function eS(i){return i.collectionGroup!==null}function Sa(i){const e=Ee(i);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Ct.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Lu(u,s))}),t.has(Ct.keyField().canonicalString())||e.he.push(new Lu(Ct.keyField(),s))}return e.he}function Yn(i){const e=Ee(i);return e.Pe||(e.Pe=tS(e,Sa(i))),e.Pe}function tS(i,e){if(i.limitType==="F")return Cg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Lu(o.field,u)});const t=i.endAt?new Ou(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ou(i.startAt.position,i.startAt.inclusive):null;return Cg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function dd(i,e,t){return new Xu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Yu(i,e){return Gd(Yn(i),Yn(e))&&i.limitType===e.limitType}function I_(i){return`${Kd(Yn(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>E_(o)).join(", ")}]`),Gu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>fo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>fo(o)).join(",")),`Target(${s})`}(Yn(i))}; limitType=${i.limitType})`}function Ju(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Sa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=Ag(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,Sa(s),o)||s.endAt&&!function(h,m,y){const v=Ag(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,Sa(s),o))}(i,e)}function nS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function S_(i){return(e,t)=>{let s=!1;for(const o of Sa(i)){const u=rS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function rS(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?ho(y,v):pe()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return a_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new Je(de.comparator);function kr(){return iS}const A_=new Je(de.comparator);function Ea(...i){let e=A_;for(const t of i)e=e.insert(t.key,t);return e}function R_(i){let e=A_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xi(){return Aa()}function C_(){return Aa()}function Aa(){return new ss(i=>i.toString(),(i,e)=>i.isEqual(e))}const sS=new Je(de.comparator),oS=new pt(de.comparator);function ke(...i){let e=oS;for(const t of i)e=e.add(t);return e}const aS=new pt(Se);function lS(){return aS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function k_(i){return{integerValue:""+i}}function uS(i,e){return LI(e)?k_(e):Qd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function cS(i,e,t){return i instanceof Mu?function(o,u){const h={fields:{[c_]:{stringValue:u_},[d_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Wd(u)&&(u=Qu(u)),u&&(h.fields[h_]=u),{mapValue:h}}(t,e):i instanceof Va?N_(i,e):i instanceof Oa?x_(i,e):function(o,u){const h=P_(o,u),m=Pg(h)+Pg(o.Ie);return ud(h)&&ud(o.Ie)?k_(m):Qd(o.serializer,m)}(i,e)}function hS(i,e,t){return i instanceof Va?N_(i,e):i instanceof Oa?x_(i,e):t}function P_(i,e){return i instanceof bu?function(s){return ud(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Mu extends Zu{}class Va extends Zu{constructor(e){super(),this.elements=e}}function N_(i,e){const t=D_(e);for(const s of i.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Oa extends Zu{constructor(e){super(),this.elements=e}}function x_(i,e){let t=D_(e);for(const s of i.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class bu extends Zu{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Pg(i){return rt(i.integerValue||i.doubleValue)}function D_(i){return qd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function dS(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Va&&o instanceof Va||s instanceof Oa&&o instanceof Oa?co(s.elements,o.elements,er):s instanceof bu&&o instanceof bu?er(s.Ie,o.Ie):s instanceof Mu&&o instanceof Mu}(i.transform,e.transform)}class fS{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ec{}function V_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Xd(i.key,bn.none()):new ja(i.key,i.data,bn.none());{const t=i.data,s=Zt.empty();let o=new pt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new vi(i.key,s,new ln(o.toArray()),bn.none())}}function pS(i,e,t){i instanceof ja?function(o,u,h){const m=o.value.clone(),y=xg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof vi?function(o,u,h){if(!wu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=xg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(O_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ra(i,e,t,s){return i instanceof ja?function(u,h,m,y){if(!wu(u.precondition,h))return m;const v=u.value.clone(),w=Dg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof vi?function(u,h,m,y){if(!wu(u.precondition,h))return m;const v=Dg(u.fieldTransforms,y,h),w=h.data;return w.setAll(O_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(P=>P.field))}(i,e,t,s):function(u,h,m){return wu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function mS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=P_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function Ng(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,(u,h)=>dS(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ja extends ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class vi extends ec{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function O_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function xg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,hS(h,m,t[o]))}return s}function Dg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,cS(u,h,e))}return s}class Xd extends ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gS extends ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&pS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=C_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=V_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(t,s)=>Ng(t,s))&&co(this.baseMutations,e.baseMutations,(t,s)=>Ng(t,s))}}class Yd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return sS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Yd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,De;function ES(i){switch(i){case K.OK:return pe();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe()}}function L_(i){if(i===void 0)return Cr("GRPC error has no .code"),K.UNKNOWN;switch(i){case ot.OK:return K.OK;case ot.CANCELLED:return K.CANCELLED;case ot.UNKNOWN:return K.UNKNOWN;case ot.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case ot.INTERNAL:return K.INTERNAL;case ot.UNAVAILABLE:return K.UNAVAILABLE;case ot.UNAUTHENTICATED:return K.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case ot.NOT_FOUND:return K.NOT_FOUND;case ot.ALREADY_EXISTS:return K.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return K.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case ot.ABORTED:return K.ABORTED;case ot.OUT_OF_RANGE:return K.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return K.UNIMPLEMENTED;case ot.DATA_LOSS:return K.DATA_LOSS;default:return pe()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new ui([4294967295,4294967295],0);function Vg(i){const e=i_().encode(i),t=new Yy;return t.update(e),new Uint8Array(t.digest())}function Og(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class Jd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wa(`Invalid padding: ${t}`);if(s<0)throw new wa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wa(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ui.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(wS)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Vg(e),[s,o]=Og(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Jd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ee===0)return;const t=Vg(e),[s,o]=Og(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tc(ve.min(),o,new Je(Se),kr(),ke())}}class za{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new za(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class M_{constructor(e,t){this.targetId=e,this.ge=t}}class b_{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Lg{constructor(){this.pe=0,this.ye=Mg(),this.we=kt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ke(),t=ke(),s=ke();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe()}}),new za(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=Mg()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,be(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class TS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=kr(),this.$e=hu(),this.Ue=hu(),this.Ke=new Je(Se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(hd(u))if(s===0){const h=new de(u.path);this.ze(t,h,bt.newNoDocument(h,ve.min()))}else be(s===1);else{const h=this.et(t);if(h!==s){const m=this.tt(e),y=m?this.nt(m,e,h):1;if(y!==0){this.Ye(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=pi(s).toUint8Array()}catch(y){if(y instanceof l_)return uo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Jd(h,o,u)}catch(y){return uo(y instanceof wa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Ee===0?null:m}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const m=this.Xe(h);if(m){if(u.current&&hd(m.target)){const y=new de(m.target.path);this._t(y).has(h)||this.ut(h,y)||this.ze(h,y,bt.newNoDocument(y,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=ke();this.Ue.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Xe(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new tc(e,t,this.Ke,this.Qe,s);return this.Qe=kr(),this.$e=hu(),this.Ue=hu(),this.Ke=new Je(Se),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Lg,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new pt(Se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new pt(Se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Lg),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function hu(){return new Je(de.comparator)}function Mg(){return new Je(de.comparator)}const IS={asc:"ASCENDING",desc:"DESCENDING"},SS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AS={and:"AND",or:"OR"};class RS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fd(i,e){return i.useProto3Json||Gu(e)?e:{value:e}}function Uu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function CS(i,e){return Uu(i,e.toTimestamp())}function Jn(i){return be(!!i),ve.fromTimestamp(function(t){const s=fi(t);return new ft(s.seconds,s.nanos)}(i))}function Zd(i,e){return pd(i,e).canonicalString()}function pd(i,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function F_(i){const e=Qe.fromString(i);return be(H_(e)),e}function md(i,e){return Zd(i.databaseId,e.path)}function Gh(i,e){const t=F_(e);if(t.get(1)!==i.databaseId.projectId)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new le(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(z_(t))}function j_(i,e){return Zd(i.databaseId,e)}function kS(i){const e=F_(i);return e.length===4?Qe.emptyPath():z_(e)}function gd(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function z_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function bg(i,e,t){return{name:md(i,e),fields:t.value.mapValue.fields}}function PS(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),kt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?K.UNKNOWN:L_(v.code);return new le(w,v.message||"")}(h);t=new b_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Gh(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):ve.min(),m=new Zt({mapValue:{fields:s.document.fields}}),y=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Tu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Gh(i,s.document),u=s.readTime?Jn(s.readTime):ve.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Tu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Gh(i,s.document),u=s.removedTargetIds||[];t=new Tu([],u,o,null)}else{if(!("filter"in e))return pe();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new vS(o,u),m=s.targetId;t=new M_(m,h)}}return t}function NS(i,e){let t;if(e instanceof ja)t={update:bg(i,e.key,e.value)};else if(e instanceof Xd)t={delete:md(i,e.key)};else if(e instanceof vi)t={update:bg(i,e.key,e.data),updateMask:FS(e.fieldMask)};else{if(!(e instanceof gS))return pe();t={verify:md(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Mu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Oa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof bu)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw pe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:CS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe()}(i,e.precondition)),t}function xS(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(ve.min())&&(h=Jn(u)),new fS(h,o.transformResults||[])}(t,e))):[]}function DS(i,e){return{documents:[j_(i,e.path)]}}function VS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=j_(i,o);const u=function(v){if(v.length!==0)return $_(tr.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(L){return{field:to(L.field),direction:MS(L.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=fd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ht:t,parent:o}}function OS(i){let e=kS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(P){const L=B_(P);return L instanceof tr&&__(L)?L.getFilters():[L]}(t.where));let h=[];t.orderBy&&(h=function(P){return P.map(L=>function(z){return new Lu(no(z.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(L))}(t.orderBy));let m=null;t.limit&&(m=function(P){let L;return L=typeof P=="object"?P.value:P,Gu(L)?null:L}(t.limit));let y=null;t.startAt&&(y=function(P){const L=!!P.before,U=P.values||[];return new Ou(U,L)}(t.startAt));let v=null;return t.endAt&&(v=function(P){const L=!P.before,U=P.values||[];return new Ou(U,L)}(t.endAt)),ZI(e,o,h,u,m,"F",y,v)}function LS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function B_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return tr.create(t.compositeFilter.filters.map(s=>B_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe()}}(t.compositeFilter.op))}(i):pe()}function MS(i){return IS[i]}function bS(i){return SS[i]}function US(i){return AS[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return Ct.fromServerFormat(i.fieldPath)}function $_(i){return i instanceof dt?function(t){if(t.op==="=="){if(Sg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(Ig(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(Ig(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:bS(t.op),value:t.value}}}(i):i instanceof tr?function(t){const s=t.getFilters().map(o=>$_(o));return s.length===1?s[0]:{compositeFilter:{op:US(t.op),filters:s}}}(i):pe()}function FS(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function H_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,s,o,u=ve.min(),h=ve.min(),m=kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.Tt=e}}function zS(i){const e=OS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.Tn=new $S}addToCollectionParentIndex(e,t){return this.Tn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(di.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(di.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class $S{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W_=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(W_,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new po(0)}static Kn(){return new po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="LruGarbageCollector",HS=1048576;function jg([i,e],[t,s]){const o=Se(i,t);return o===0?Se(e,s):o}class WS{constructor(e){this.Hn=e,this.buffer=new pt(jg),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();jg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ne(Fg,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?ne(Fg,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.er(3e5)})}}class KS{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(Ku.ae);const s=new WS(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ug)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ug):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(P=>(P>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${P}`),o=this.params.maximumSequenceNumbersToCollect):o=P,h=Date.now(),this.nthSequenceNumber(e,o))).next(P=>(s=P,m=Date.now(),this.removeTargets(e,s,t))).next(P=>(u=P,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(P=>(v=Date.now(),Zs()<=Ce.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${P} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:P})))}}function GS(i,e){return new KS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.changes=new ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ra(s.mutation,o,ln.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=Xi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Ea();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Xi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=kr();const h=Aa(),m=function(){return Aa()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof vi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ra(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,ln.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var P;return m.set(v,new XS(w,(P=h.get(v))!==null&&P!==void 0?P:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Aa();let o=new Je((h,m)=>h-m),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||ln.empty();w=m.applyToLocalView(v,w),s.set(y,w);const P=(o.get(m.batchId)||ke()).add(y);o=o.insert(m.batchId,P)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,P=C_();w.forEach(L=>{if(!u.has(L)){const U=V_(t.get(L),s.get(L));U!==null&&P.set(L,U),u=u.add(L)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,P))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(Xi());let m=Pa,y=u;return h.next(v=>B.forEach(v,(w,P)=>(m<P.largestBatchId&&(m=P.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next(L=>{y=y.insert(w,L)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,ke())).next(w=>({batchId:m,changes:R_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=Ea();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ea();return this.indexManager.getCollectionParents(e,u).next(m=>B.forEach(m,y=>{const v=function(P,L){return new Xu(L,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((P,L)=>{h=h.insert(P,L)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=Ea();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&Ra(w.mutation,v,ln.empty(),ft.now()),Ju(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return B.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:zS(o.bundledQuery),readTime:Jn(o.readTime)}}(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.overlays=new Je(de.comparator),this.Rr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xi();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=Xi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Xi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Xi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return B.resolve(m)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new _S(t,s));let u=this.Rr.get(t);u===void 0&&(u=ke(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Vr=new pt(Et.mr),this.gr=new pt(Et.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Et(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new de(new Qe([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new de(new Qe([])),s=new Et(t,e),o=new Et(t,e+1);let u=ke();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return de.comparator(e.key,t.key)||Se(e.Cr,t.Cr)}static pr(e,t){return Se(e.Cr,t.Cr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new pt(Et.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new yS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Mr=this.Mr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Hd:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const m=this.Or(h.Cr);u.push(m)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Se);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{s=s.add(m.Cr)})}),B.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Et(new de(u),0);let m=new pt(Se);return this.Mr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Cr)),!0)},h),B.resolve(this.Br(m))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return B.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Et(t,0),o=this.Mr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.kr=e,this.docs=function(){return new Je(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=kr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||xI(NI(w),s)<=0||(o.has(w.key)||Ju(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe()}qr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new rA(this)}getSize(e){return B.resolve(this.size)}}class rA extends QS{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.persistence=e,this.Qr=new ss(t=>Kd(t),Gd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ef,this.targetCount=0,this.Kr=po.Un()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),B.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new po(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.zn(t),B.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ku(0),this.zr=!1,this.zr=!0,this.jr=new eA,this.referenceDelegate=e(this),this.Hr=new iA(this),this.indexManager=new BS,this.remoteDocumentCache=function(o){return new nA(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new jS(t),this.Yr=new JS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new tA(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new sA(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return B.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class sA extends VI{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.ti=new ef,this.ni=null}static ri(e){return new tf(e)}get ii(){if(this.ni)return this.ni;throw pe()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),B.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,s=>{const o=de.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,ve.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return B.or([()=>B.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Fu{constructor(e,t){this.persistence=e,this.oi=new ss(s=>MI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=GS(this,t)}static ri(e,t){return new Fu(e,t)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return B.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(m=>{m||(s++,u.removeEntry(h,ve.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vu(e.data.value)),t}ar(e,t,s){return B.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=ke(),o=ke();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new nf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return tw()?8:OI(Ut())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new oA;return this._s(e,t,h).next(m=>{if(u.result=m,this.Xi)return this.us(e,t,h,m.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(Zs()<=Ce.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Zs()<=Ce.DEBUG&&ne("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Zs()<=Ce.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):B.resolve())}rs(e,t){if(kg(t))return B.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=dd(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=ke(...u);return this.ns.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.cs(t,m);return this.ls(t,v,h,y.readTime)?this.rs(e,dd(t,null,"F")):this.hs(e,v,t,y)}))})))}ss(e,t,s,o){return kg(t)||o.isEqual(ve.min())?B.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?B.resolve(null):(Zs()<=Ce.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.hs(e,h,t,PI(o,Pa)).next(m=>m))})}cs(e,t){let s=new pt(S_(e));return t.forEach((o,u)=>{Ju(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return Zs()<=Ce.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ns.getDocumentsMatchingQuery(e,t,di.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="LocalStore",lA=3e8;class uA{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Je(Se),this.Is=new ss(u=>Kd(u),Gd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function cA(i,e,t,s){return new uA(i,e,t,s)}async function K_(i,e){const t=Ee(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=ke();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Rs:v,removedBatchIds:h,addedBatchIds:m}))})})}function hA(i,e){const t=Ee(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const P=v.batch,L=P.keys();let U=B.resolve();return L.forEach(z=>{U=U.next(()=>w.getEntry(y,z)).next(X=>{const H=v.docVersions.get(z);be(H!==null),X.version.compareTo(H)<0&&(P.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),w.addEntry(X)))})}),U.next(()=>m.mutationQueue.removeMutationBatch(y,P))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=ke();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function G_(i){const e=Ee(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function dA(i,e){const t=Ee(i),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const m=[];e.targetChanges.forEach((w,P)=>{const L=o.get(P);if(!L)return;m.push(t.Hr.removeMatchingKeys(u,w.removedDocuments,P).next(()=>t.Hr.addMatchingKeys(u,w.addedDocuments,P)));let U=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(P)!==null?U=U.withResumeToken(kt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(P,U),function(X,H,_e){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=lA?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0}(L,U,w)&&m.push(t.Hr.updateTargetData(u,U))});let y=kr(),v=ke();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(fA(u,h,e.documentUpdates).next(w=>{y=w.Vs,v=w.fs})),!s.isEqual(ve.min())){const w=t.Hr.getLastRemoteSnapshotVersion(u).next(P=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return B.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.Ts=o,u))}function fA(i,e,t){let s=ke(),o=ke();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=kr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ve.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(rf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Vs:h,fs:o}})}function pA(i,e){const t=Ee(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Hd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function mA(i,e){const t=Ee(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function yd(i,e,t){const s=Ee(i),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!wo(h))throw h;ne(rf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function zg(i,e,t){const s=Ee(i);let o=ve.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const P=Ee(y),L=P.Is.get(w);return L!==void 0?B.resolve(P.Ts.get(L)):P.Hr.getTargetData(v,w)}(s,h,Yn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:ke())).next(m=>(gA(s,nS(e),m),{documents:m,gs:u})))}function gA(i,e,t){let s=i.Es.get(e)||ve.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Es.set(e,s)}class Bg{constructor(){this.activeTargetIds=lS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yA{constructor(){this.ho=new Bg,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Bg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="ConnectivityMonitor";class Hg{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ne($g,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ne($g,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=null;function _d(){return du===null?du=function(){return 268435456+Math.round(2147483648*Math.random())}():du++,"0x"+du.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="RestConnection",vA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EA{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Du?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,u){const h=_d(),m=this.bo(e,t.toUriEncodedString());ne(Qh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,o,u),this.vo(e,m,y,s).then(v=>(ne(Qh,`Received RPC '${e}' ${h}: `,v),v),v=>{throw uo(Qh,`RPC '${e}' ${h} failed with error: `,v,"url: ",m,"request:",s),v})}Co(e,t,s,o,u,h){return this.So(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const s=vA[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class TA extends EA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=_d();return new Promise((h,m)=>{const y=new Jy;y.setWithCredentials(!0),y.listenOnce(Zy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case _u.NO_ERROR:const w=y.getResponseJson();ne(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case _u.TIMEOUT:ne(Lt,`RPC '${e}' ${u} timed out`),m(new le(K.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const P=y.getStatus();if(ne(Lt,`RPC '${e}' ${u} failed with status:`,P,"response text:",y.getResponseText()),P>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const U=L==null?void 0:L.error;if(U&&U.status&&U.message){const z=function(H){const _e=H.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(_e)>=0?_e:K.UNKNOWN}(U.status);m(new le(z,U.message))}else m(new le(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new le(K.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ne(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);ne(Lt,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)})}Wo(e,t,s){const o=_d(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=n_(),m=t_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ne(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const P=h.createWebChannel(w,y);let L=!1,U=!1;const z=new wA({Fo:H=>{U?ne(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(L||(ne(Lt,`Opening RPC '${e}' stream ${o} transport.`),P.open(),L=!0),ne(Lt,`RPC '${e}' stream ${o} sending:`,H),P.send(H))},Mo:()=>P.close()}),X=(H,_e,fe)=>{H.listen(_e,ye=>{try{fe(ye)}catch(we){setTimeout(()=>{throw we},0)}})};return X(P,va.EventType.OPEN,()=>{U||(ne(Lt,`RPC '${e}' stream ${o} transport opened.`),z.Qo())}),X(P,va.EventType.CLOSE,()=>{U||(U=!0,ne(Lt,`RPC '${e}' stream ${o} transport closed`),z.Uo())}),X(P,va.EventType.ERROR,H=>{U||(U=!0,uo(Lt,`RPC '${e}' stream ${o} transport errored:`,H),z.Uo(new le(K.UNAVAILABLE,"The operation could not be completed")))}),X(P,va.EventType.MESSAGE,H=>{var _e;if(!U){const fe=H.data[0];be(!!fe);const ye=fe,we=(ye==null?void 0:ye.error)||((_e=ye[0])===null||_e===void 0?void 0:_e.error);if(we){ne(Lt,`RPC '${e}' stream ${o} received error:`,we);const je=we.status;let Te=function(S){const k=ot[S];if(k!==void 0)return L_(k)}(je),R=we.message;Te===void 0&&(Te=K.INTERNAL,R="Unknown error status: "+je+" with message "+we.message),U=!0,z.Uo(new le(Te,R)),P.close()}else ne(Lt,`RPC '${e}' stream ${o} received:`,fe),z.Ko(fe)}}),X(m,e_.STAT_EVENT,H=>{H.stat===od.PROXY?ne(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===od.NOPROXY&&ne(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.$o()},0),z}}function Xh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(i){return new RS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="PersistentStream";class X_{constructor(e,t,s,o,u,h,m,y){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Q_(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Cr(t.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new le(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ne(Wg,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ne(Wg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IA extends X_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=PS(this.serializer,e),s=function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Jn(h.readTime):ve.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=gd(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=hd(y)?{documents:DS(u,y)}:{query:VS(u,y).ht},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=U_(u,h.resumeToken);const v=fd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=Uu(u,h.snapshotVersion.toTimestamp());const v=fd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=LS(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=gd(this.serializer),t.removeTarget=e,this.I_(t)}}class SA extends X_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=xS(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=gd(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>NS(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{}class RA extends AA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,pd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new le(K.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(e,pd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le(K.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class CA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Cr(t),this.N_=!1):ne("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="RemoteStore";class kA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{os(this)&&(ne(rs,"Restarting streams for network reachability change."),await async function(y){const v=Ee(y);v.W_.add(4),await Ba(v),v.j_.set("Unknown"),v.W_.delete(4),await rc(v)}(this))})}),this.j_=new CA(s,o)}}async function rc(i){if(os(i))for(const e of i.G_)await e(!0)}async function Ba(i){for(const e of i.G_)await e(!1)}function Y_(i,e){const t=Ee(i);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),lf(t)?af(t):To(t).c_()&&of(t,e))}function sf(i,e){const t=Ee(i),s=To(t);t.K_.delete(e),s.c_()&&J_(t,e),t.K_.size===0&&(s.c_()?s.P_():os(t)&&t.j_.set("Unknown"))}function of(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}To(i).y_(e)}function J_(i,e){i.H_.Ne(e),To(i).w_(e)}function af(i){i.H_=new TS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.K_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),To(i).start(),i.j_.B_()}function lf(i){return os(i)&&!To(i).u_()&&i.K_.size>0}function os(i){return Ee(i).W_.size===0}function Z_(i){i.H_=void 0}async function PA(i){i.j_.set("Online")}async function NA(i){i.K_.forEach((e,t)=>{of(i,e)})}async function xA(i,e){Z_(i),lf(i)?(i.j_.q_(e),af(i)):i.j_.set("Unknown")}async function DA(i,e,t){if(i.j_.set("Online"),e instanceof b_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.K_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.K_.delete(m),o.H_.removeTarget(m))}(i,e)}catch(s){ne(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ju(i,s)}else if(e instanceof Tu?i.H_.We(e):e instanceof M_?i.H_.Ze(e):i.H_.je(e),!t.isEqual(ve.min()))try{const s=await G_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.H_.ot(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.K_.get(v);w&&u.K_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.K_.get(y);if(!w)return;u.K_.set(y,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),J_(u,y);const P=new si(w.target,y,v,w.sequenceNumber);of(u,P)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne(rs,"Failed to raise snapshot:",s),await ju(i,s)}}async function ju(i,e,t){if(!wo(e))throw e;i.W_.add(1),await Ba(i),i.j_.set("Offline"),t||(t=()=>G_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne(rs,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await rc(i)})}function ev(i,e){return e().catch(t=>ju(i,t,e))}async function ic(i){const e=Ee(i),t=gi(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Hd;for(;VA(e);)try{const o=await pA(e.localStore,s);if(o===null){e.U_.length===0&&t.P_();break}s=o.batchId,OA(e,o)}catch(o){await ju(e,o)}tv(e)&&nv(e)}function VA(i){return os(i)&&i.U_.length<10}function OA(i,e){i.U_.push(e);const t=gi(i);t.c_()&&t.S_&&t.b_(e.mutations)}function tv(i){return os(i)&&!gi(i).u_()&&i.U_.length>0}function nv(i){gi(i).start()}async function LA(i){gi(i).C_()}async function MA(i){const e=gi(i);for(const t of i.U_)e.b_(t.mutations)}async function bA(i,e,t){const s=i.U_.shift(),o=Yd.from(s,e,t);await ev(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await ic(i)}async function UA(i,e){e&&gi(i).S_&&await async function(s,o){if(function(h){return ES(h)&&h!==K.ABORTED}(o.code)){const u=s.U_.shift();gi(s).h_(),await ev(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await ic(s)}}(i,e),tv(i)&&nv(i)}async function qg(i,e){const t=Ee(i);t.asyncQueue.verifyOperationInProgress(),ne(rs,"RemoteStore received new credentials");const s=os(t);t.W_.add(3),await Ba(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await rc(t)}async function FA(i,e){const t=Ee(i);e?(t.W_.delete(2),await rc(t)):e||(t.W_.add(2),await Ba(t),t.j_.set("Unknown"))}function To(i){return i.J_||(i.J_=function(t,s,o){const u=Ee(t);return u.M_(),new IA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:PA.bind(null,i),No:NA.bind(null,i),Lo:xA.bind(null,i),p_:DA.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),lf(i)?af(i):i.j_.set("Unknown")):(await i.J_.stop(),Z_(i))})),i.J_}function gi(i){return i.Y_||(i.Y_=function(t,s,o){const u=Ee(t);return u.M_(),new SA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:LA.bind(null,i),Lo:UA.bind(null,i),D_:MA.bind(null,i),v_:bA.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await ic(i)):(await i.Y_.stop(),i.U_.length>0&&(ne(rs,`Stopping write stream with ${i.U_.length} pending writes`),i.U_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new uf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(i,e){if(Cr("AsyncQueue",`${e}: ${i}`),wo(i))return new le(K.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ea(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.Z_=new Je(de.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):pe():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class mo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new mo(e,t,oo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class zA{constructor(){this.queries=Gg(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=Ee(t),u=o.queries;o.queries=Gg(),u.forEach((h,m)=>{for(const y of m.ta)y.onError(s)})})(this,new le(K.ABORTED,"Firestore shutting down"))}}function Gg(){return new ss(i=>I_(i),Yu)}async function BA(i,e){const t=Ee(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new jA,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=cf(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&hf(t)}async function $A(i,e){const t=Ee(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function HA(i,e){const t=Ee(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ta)m.oa(o)&&(s=!0);h.ea=o}}s&&hf(t)}function WA(i,e,t){const s=Ee(i),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function hf(i){i.ia.forEach(e=>{e.next()})}var vd,Qg;(Qg=vd||(vd={}))._a="default",Qg.Cache="cache";class qA{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new mo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.key=e}}class iv{constructor(e){this.key=e}}class KA{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=S_(e),this.wa=new oo(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new Kg,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,P)=>{const L=o.get(w),U=Ju(this.query,P)?P:null,z=!!L&&this.mutatedKeys.has(L.key),X=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let H=!1;L&&U?L.data.isEqual(U.data)?z!==X&&(s.track({type:3,doc:U}),H=!0):this.va(L,U)||(s.track({type:2,doc:U}),H=!0,(y&&this.ya(U,y)>0||v&&this.ya(U,v)<0)&&(m=!0)):!L&&U?(s.track({type:0,doc:U}),H=!0):L&&!U&&(s.track({type:1,doc:L}),H=!0,(y||v)&&(m=!0)),H&&(U?(h=h.add(U),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{wa:h,Da:s,ls:m,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((w,P)=>function(U,z){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return X(U)-X(z)}(w.type,P.type)||this.ya(w.doc,P.doc)),this.Ca(s),o=o!=null&&o;const m=t&&!o?this.Fa():[],y=this.pa.size===0&&this.current&&!o?1:0,v=y!==this.ga;return this.ga=y,h.length!==0||v?{snapshot:new mo(this.query,e.wa,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Kg,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new iv(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new rv(s))}),t}Oa(e){this.fa=e.gs,this.pa=ke();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return mo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const df="SyncEngine";class GA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class QA{constructor(e){this.key=e,this.Ba=!1}}class XA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new ss(m=>I_(m),Yu),this.qa=new Map,this.Qa=new Set,this.$a=new Je(de.comparator),this.Ua=new Map,this.Ka=new ef,this.Wa={},this.Ga=new Map,this.za=po.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function YA(i,e,t=!0){const s=cv(i);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await sv(s,e,t,!0),o}async function JA(i,e){const t=cv(i);await sv(t,e,!0,!1)}async function sv(i,e,t,s){const o=await mA(i.localStore,Yn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await ZA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Y_(i.remoteStore,o),m}async function ZA(i,e,t,s,o){i.Ha=(P,L,U)=>async function(X,H,_e,fe){let ye=H.view.ba(_e);ye.ls&&(ye=await zg(X.localStore,H.query,!1).then(({documents:R})=>H.view.ba(R,ye)));const we=fe&&fe.targetChanges.get(H.targetId),je=fe&&fe.targetMismatches.get(H.targetId)!=null,Te=H.view.applyChanges(ye,X.isPrimaryClient,we,je);return Yg(X,H.targetId,Te.Ma),Te.snapshot}(i,P,L,U);const u=await zg(i.localStore,e,!0),h=new KA(e,u.gs),m=h.ba(u.documents),y=za.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Yg(i,t,v.Ma);const w=new GA(e,t,h);return i.ka.set(e,w),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),v.snapshot}async function eR(i,e,t){const s=Ee(i),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!Yu(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await yd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&sf(s.remoteStore,o.targetId),Ed(s,o.targetId)}).catch(Eo)):(Ed(s,o.targetId),await yd(s.localStore,o.targetId,!0))}async function tR(i,e){const t=Ee(i),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sf(t.remoteStore,s.targetId))}async function nR(i,e,t){const s=uR(i);try{const o=await function(h,m){const y=Ee(h),v=ft.now(),w=m.reduce((U,z)=>U.add(z.key),ke());let P,L;return y.persistence.runTransaction("Locally write mutations","readwrite",U=>{let z=kr(),X=ke();return y.ds.getEntries(U,w).next(H=>{z=H,z.forEach((_e,fe)=>{fe.isValidDocument()||(X=X.add(_e))})}).next(()=>y.localDocuments.getOverlayedDocuments(U,z)).next(H=>{P=H;const _e=[];for(const fe of m){const ye=mS(fe,P.get(fe.key).overlayedDocument);ye!=null&&_e.push(new vi(fe.key,ye,m_(ye.value.mapValue),bn.exists(!0)))}return y.mutationQueue.addMutationBatch(U,v,_e,m)}).next(H=>{L=H;const _e=H.applyToLocalDocumentSet(P,X);return y.documentOverlayCache.saveOverlays(U,H.batchId,_e)})}).then(()=>({batchId:L.batchId,changes:R_(P)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.Wa[h.currentUser.toKey()];v||(v=new Je(Se)),v=v.insert(m,y),h.Wa[h.currentUser.toKey()]=v}(s,o.batchId,t),await $a(s,o.changes),await ic(s.remoteStore)}catch(o){const u=cf(o,"Failed to persist write");t.reject(u)}}async function ov(i,e){const t=Ee(i);try{const s=await dA(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ua.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?be(h.Ba):o.removedDocuments.size>0&&(be(h.Ba),h.Ba=!1))}),await $a(t,s,e)}catch(s){await Eo(s)}}function Xg(i,e,t){const s=Ee(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const m=h.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=Ee(h);y.onlineState=m;let v=!1;y.queries.forEach((w,P)=>{for(const L of P.ta)L.sa(m)&&(v=!0)}),v&&hf(y)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rR(i,e,t){const s=Ee(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ua.get(e),u=o&&o.key;if(u){let h=new Je(de.comparator);h=h.insert(u,bt.newNoDocument(u,ve.min()));const m=ke().add(u),y=new tc(ve.min(),new Map,new Je(Se),h,m);await ov(s,y),s.$a=s.$a.remove(u),s.Ua.delete(e),ff(s)}else await yd(s.localStore,e,!1).then(()=>Ed(s,e,t)).catch(Eo)}async function iR(i,e){const t=Ee(i),s=e.batch.batchId;try{const o=await hA(t.localStore,e);lv(t,s,null),av(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $a(t,o)}catch(o){await Eo(o)}}async function sR(i,e,t){const s=Ee(i);try{const o=await function(h,m){const y=Ee(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(P=>(be(P!==null),w=P.keys(),y.mutationQueue.removeMutationBatch(v,P))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);lv(s,e,t),av(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $a(s,o)}catch(o){await Eo(o)}}function av(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function lv(i,e,t){const s=Ee(i);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function Ed(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ka.br(e).forEach(s=>{i.Ka.containsKey(s)||uv(i,s)})}function uv(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(sf(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ua.delete(t),ff(i))}function Yg(i,e,t){for(const s of t)s instanceof rv?(i.Ka.addReference(s.key,e),oR(i,s)):s instanceof iv?(ne(df,"Document no longer in limbo: "+s.key),i.Ka.removeReference(s.key,e),i.Ka.containsKey(s.key)||uv(i,s.key)):pe()}function oR(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(ne(df,"New document in limbo: "+t),i.Qa.add(s),ff(i))}function ff(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new de(Qe.fromString(e)),s=i.za.next();i.Ua.set(s,new QA(t)),i.$a=i.$a.insert(t,s),Y_(i.remoteStore,new si(Yn(T_(t.path)),s,"TargetPurposeLimboResolution",Ku.ae))}}async function $a(i,e,t){const s=Ee(i),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((m,y)=>{h.push(s.Ha(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const P=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,P?"current":"not-current")}if(v){o.push(v);const P=nf.Yi(y.targetId,v);u.push(P)}}))}),await Promise.all(h),s.La.p_(o),await async function(y,v){const w=Ee(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>B.forEach(v,L=>B.forEach(L.Hi,U=>w.persistence.referenceDelegate.addReference(P,L.targetId,U)).next(()=>B.forEach(L.Ji,U=>w.persistence.referenceDelegate.removeReference(P,L.targetId,U)))))}catch(P){if(!wo(P))throw P;ne(rf,"Failed to update sequence numbers: "+P)}for(const P of v){const L=P.targetId;if(!P.fromCache){const U=w.Ts.get(L),z=U.snapshotVersion,X=U.withLastLimboFreeSnapshotVersion(z);w.Ts=w.Ts.insert(L,X)}}}(s.localStore,u))}async function aR(i,e){const t=Ee(i);if(!t.currentUser.isEqual(e)){ne(df,"User change. New user:",e.toKey());const s=await K_(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(m=>{m.forEach(y=>{y.reject(new le(K.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $a(t,s.Rs)}}function lR(i,e){const t=Ee(i),s=t.Ua.get(e);if(s&&s.Ba)return ke().add(s.key);{let o=ke();const u=t.qa.get(e);if(!u)return o;for(const h of u){const m=t.ka.get(h);o=o.unionWith(m.view.Sa)}return o}}function cv(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=ov.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rR.bind(null,e),e.La.p_=HA.bind(null,e.eventManager),e.La.Ja=WA.bind(null,e.eventManager),e}function uR(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sR.bind(null,e),e}class zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return cA(this.persistence,new aA,e.initialUser,this.serializer)}Xa(e){return new q_(tf.ri,this.serializer)}Za(e){return new yA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zu.provider={build:()=>new zu};class cR extends zu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){be(this.persistence.referenceDelegate instanceof Fu);const s=this.persistence.referenceDelegate.garbageCollector;return new qS(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new q_(s=>Fu.ri(s,t),this.serializer)}}class wd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aR.bind(null,this.syncEngine),await FA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zA}()}createDatastore(e){const t=nc(e.databaseInfo.databaseId),s=function(u){return new TA(u)}(e.databaseInfo);return function(u,h,m,y){return new RA(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new kA(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Xg(this.syncEngine,t,0),function(){return Hg.D()?new Hg:new _A}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const P=new XA(o,u,h,m,y,v);return w&&(P.ja=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Ee(o);ne(rs,"RemoteStore shutting down."),u.W_.add(5),await Ba(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}wd.provider={build:()=>new wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="FirestoreClient";class dR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=s_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(yi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(yi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=cf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Yh(i,e){i.asyncQueue.verifyOperationInProgress(),ne(yi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await K_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Jg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await fR(i);ne(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>qg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>qg(e.remoteStore,o)),i._onlineComponents=e}async function fR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(yi,"Using user provided OfflineComponentProvider");try{await Yh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;uo("Error using user provided cache. Falling back to memory cache: "+t),await Yh(i,new zu)}}else ne(yi,"Using default OfflineComponentProvider"),await Yh(i,new cR(void 0));return i._offlineComponents}async function hv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(yi,"Using user provided OnlineComponentProvider"),await Jg(i,i._uninitializedComponentsProvider._online)):(ne(yi,"Using default OnlineComponentProvider"),await Jg(i,new wd))),i._onlineComponents}function pR(i){return hv(i).then(e=>e.syncEngine)}async function mR(i){const e=await hv(i),t=e.eventManager;return t.onListen=YA.bind(null,e.syncEngine),t.onUnlisten=eR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tR.bind(null,e.syncEngine),t}function gR(i,e,t={}){const s=new ci;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new hR({next:L=>{w.su(),h.enqueueAndForget(()=>$A(u,P)),L.fromCache&&y.source==="server"?v.reject(new le(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(L)},error:L=>v.reject(L)}),P=new qA(m,w,{includeMetadataChanges:!0,Ta:!0});return BA(u,P)}(await mR(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(i,e,t){if(!t)throw new le(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function yR(i,e,t,s){if(e===!0&&s===!0)throw new le(K.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ey(i){if(!de.isDocumentKey(i))throw new le(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ty(i){if(de.isDocumentKey(i))throw new le(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function pf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe()}function is(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new le(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pf(i);throw new le(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="firestore.googleapis.com",ny=!0;class ry{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new le(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pv,this.ssl=ny}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ny;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HS)throw new le(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new le(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ry({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ry(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new EI;switch(s.type){case"firstParty":return new SI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Zg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Zg.delete(t),s.terminate())}(this),Promise.resolve()}}function _R(i,e,t,s={}){var o;const u=(i=is(i,sc))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;u.host!==pv&&u.host!==m&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!Zi(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,w;if(typeof s.mockUserToken=="string")v=s.mockUserToken,w=Mt.MOCK_USER;else{v=GE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new le(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Mt(P)}i._authCredentials=new wI(new r_(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new oc(this.firestore,e,this._query)}}class vn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class hi extends oc{constructor(e,t,s){super(e,t,T_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new de(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function Td(i,e,...t){if(i=$t(i),fv("collection","path",e),i instanceof sc){const s=Qe.fromString(e,...t);return ty(s),new hi(i,null,s)}{if(!(i instanceof vn||i instanceof hi))throw new le(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return ty(s),new hi(i.firestore,null,s)}}function Yi(i,e,...t){if(i=$t(i),arguments.length===1&&(e=s_.newId()),fv("doc","path",e),i instanceof sc){const s=Qe.fromString(e,...t);return ey(s),new vn(i,null,new de(s))}{if(!(i instanceof vn||i instanceof hi))throw new le(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return ey(s),new vn(i.firestore,i instanceof hi?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="AsyncQueue";class sy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Q_(this,"async_queue_retry"),this.Su=()=>{const s=Xh();s&&ne(iy,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=Xh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Xh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ci;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!wo(e))throw e;ne(iy,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Cr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=uf.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&pe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Ha extends sc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new sy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function vR(i,e){const t=typeof i=="object"?i:yy(),s=typeof i=="string"?i:Du,o=xd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=qE("firestore");u&&_R(o,...u)}return o}function mv(i){if(i._terminated)throw new le(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||ER(i),i._firestoreClient}function ER(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,w){return new FI(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,dv(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new dR(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(kt.fromBase64String(e))}catch(t){throw new le(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new go(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=/^__.*__$/;class TR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ja(e,this.data,t,this.fieldTransforms)}}class gv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class _f{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new _f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Bu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(yv(this.Lu)&&wR.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class IR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||nc(e)}ju(e,t,s,o=!1){return new _f({Lu:e,methodName:t,zu:s,path:Ct.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _v(i){const e=i._freezeSettings(),t=nc(i._databaseId);return new IR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function SR(i,e,t,s,o,u={}){const h=i.ju(u.merge||u.mergeFields?2:0,e,t,o);vf("Data must be an object, but it was:",h,s);const m=vv(s,h);let y,v;if(u.merge)y=new ln(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const P of u.mergeFields){const L=Id(e,P,t);if(!h.contains(L))throw new le(K.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);wv(w,L)||w.push(L)}y=new ln(w),v=h.fieldTransforms.filter(P=>y.covers(P.field))}else y=null,v=h.fieldTransforms;return new TR(new Zt(m),y,v)}class lc extends mf{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function AR(i,e,t,s){const o=i.ju(1,e,t);vf("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();_i(s,(y,v)=>{const w=Ef(e,y,t);v=$t(v);const P=o.Uu(w);if(v instanceof lc)u.push(w);else{const L=uc(v,P);L!=null&&(u.push(w),h.set(w,L))}});const m=new ln(u);return new gv(h,m,o.fieldTransforms)}function RR(i,e,t,s,o,u){const h=i.ju(1,e,t),m=[Id(e,s,t)],y=[o];if(u.length%2!=0)throw new le(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let L=0;L<u.length;L+=2)m.push(Id(e,u[L])),y.push(u[L+1]);const v=[],w=Zt.empty();for(let L=m.length-1;L>=0;--L)if(!wv(v,m[L])){const U=m[L];let z=y[L];z=$t(z);const X=h.Uu(U);if(z instanceof lc)v.push(U);else{const H=uc(z,X);H!=null&&(v.push(U),w.set(U,H))}}const P=new ln(v);return new gv(w,P,h.fieldTransforms)}function uc(i,e){if(Ev(i=$t(i)))return vf("Unsupported field value:",e,i),vv(i,e);if(i instanceof mf)return function(s,o){if(!yv(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=uc(m,o.Ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=$t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return uS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Uu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Uu(o.serializer,u)}}if(s instanceof gf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof go)return{bytesValue:U_(o.serializer,s._byteString)};if(s instanceof vn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yf)return function(h,m){return{mapValue:{fields:{[f_]:{stringValue:p_},[Vu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.Wu("VectorValues must only contain numeric values.");return Qd(m.serializer,v)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${pf(s)}`)}(i,e)}function vv(i,e){const t={};return a_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(i,(s,o)=>{const u=uc(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Ev(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof gf||i instanceof go||i instanceof vn||i instanceof mf||i instanceof yf)}function vf(i,e,t){if(!Ev(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=pf(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function Id(i,e,t){if((e=$t(e))instanceof ac)return e._internalPath;if(typeof e=="string")return Ef(i,e);throw Bu("Field path arguments must be of type string or ",i,!1,void 0,t)}const CR=new RegExp("[~\\*/\\[\\]]");function Ef(i,e,t){if(e.search(CR)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new ac(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Bu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new le(K.INVALID_ARGUMENT,m+i+y)}function wv(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Iv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kR extends Tv{data(){return super.data()}}function Iv(i,e){return typeof e=="string"?Ef(i,e):e instanceof ac?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new le(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NR{convertValue(e,t="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return _i(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Vu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new yf(u)}convertGeoPoint(e){return new gf(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Qu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const t=fi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);be(H_(s));const o=new xa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DR extends Tv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Iv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Iu extends DR{data(e={}){return super.data(e)}}class VR{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new fu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Iu(this._firestore,this._userDataWriter,s.key,s,new fu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new Iu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new fu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Iu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new fu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:OR(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function OR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class LR extends NR{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,t)}}function Sd(i){i=is(i,oc);const e=is(i.firestore,Ha),t=mv(e),s=new LR(e);return PR(i._query),gR(t,i._query).then(o=>new VR(e,s,i,o))}function Ad(i,e,t,...s){i=is(i,vn);const o=is(i.firestore,Ha),u=_v(o);let h;return h=typeof(e=$t(e))=="string"||e instanceof ac?RR(u,"updateDoc",i._key,e,t,s):AR(u,"updateDoc",i._key,e),wf(o,[h.toMutation(i._key,bn.exists(!0))])}function Rd(i){return wf(is(i.firestore,Ha),[new Xd(i._key,bn.none())])}function Cd(i,e){const t=is(i.firestore,Ha),s=Yi(i),o=xR(i.converter,e);return wf(t,[SR(_v(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then(()=>s)}function wf(i,e){return function(s,o){const u=new ci;return s.asyncQueue.enqueueAndForget(async()=>nR(await pR(s),o,u)),u.promise}(mv(i),e)}(function(e,t=!0){(function(o){vo=o})(yo),ao(new es("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ha(new TI(s.getProvider("auth-internal")),new AI(h,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new le(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xa(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),li(hg,dg,e),li(hg,dg,"esm2017")})();const MR={apiKey:"AIzaSyAuEXFJVcSkliUqQYPQZOCSA3TGd8iNTxU",authDomain:"inventario-colegio-a6278.firebaseapp.com",projectId:"inventario-colegio-a6278",storageBucket:"inventario-colegio-a6278.firebasestorage.app",messagingSenderId:"456773137762",appId:"1:456773137762:web:b1d9711c377eb7d40c283b"},Sv=gy(MR),Av=gI(Sv),Er=vR(Sv);function bR({onLoginSuccess:i}){const[e,t]=At.useState(""),s=async()=>{const o=new wr;try{const u=await AT(Av,o);u.user.email==="computacion@wessexschool.cl"?(t(""),i(u.user)):t("Correo no autorizado")}catch(u){t("Error al iniciar sesión. Inténtalo de nuevo."),console.log("Error al iniciar sesión:",u)}};return Y.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100dvh",backgroundColor:"white",textAlign:"center",padding:"20px",maxWidth:"10000px",margin:"0 auto",boxSizing:"border-box"},children:[Y.jsx("h1",{style:{color:"#050576",fontSize:"clamp(1.5rem, 5vw, 3rem)",marginBottom:"20px"},children:"Bienvenido al Inventario"}),e&&Y.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"20px",borderRadius:"10px",zIndex:1e3,textAlign:"center",maxWidth:"90%",boxSizing:"border-box"},children:[Y.jsx("p",{style:{margin:0,fontSize:"clamp(1rem, 2vw, 1.5rem)"},children:e}),Y.jsx("button",{onClick:()=>t(""),style:{marginTop:"10px",padding:"10px 20px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",fontSize:"clamp(1rem, 2vw, 1.2rem)",cursor:"pointer"},children:"Cerrar"})]}),Y.jsxs("div",{children:[Y.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.5rem)",marginBottom:"20px"},children:"Por favor, inicia sesión para continuar."}),Y.jsx("button",{onClick:s,style:{padding:"10px 20px",backgroundColor:"#050576",color:"white",border:"none",borderRadius:"5px",fontSize:"clamp(1rem, 2vw, 1.2rem)",cursor:"pointer",transition:"background-color 0.3s"},onMouseOver:o=>o.target.style.backgroundColor="#f44336",onMouseOut:o=>o.target.style.backgroundColor="#050576",children:"Iniciar sesión con Google"})]})]})}function UR({mensaje:i}){return i?Y.jsx("div",{style:{position:"fixed",top:"10%",left:"50%",transform:"translateX(-50%)",backgroundColor:"#050576",color:"white",padding:"10px 20px",borderRadius:"8px",zIndex:9999,boxShadow:"0 0 10px rgba(0,0,0,0.3)",fontWeight:"bold"},children:i}):null}function FR({departamento:i,mostrarAlerta:e}){const[t,s]=At.useState(!1),[o,u]=At.useState([]),[h,m]=At.useState([]),[y,v]=At.useState(!1),[w,P]=At.useState(!1),L=At.useRef(),U=Td(Er,"departamentos",i,"wifi"),z=Td(Er,"departamentos",i,"personal"),X=async()=>{const R=await Sd(U);u(R.docs.map(S=>({...S.data(),id:S.id})));const T=await Sd(z);m(T.docs.map(S=>({...S.data(),id:S.id})))};At.useEffect(()=>{t&&X()},[t]);const H=R=>{L.current&&!L.current.contains(R.target)&&s(!1)};At.useEffect(()=>(t?document.addEventListener("mousedown",H):document.removeEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)),[t]);const _e=async()=>{const R=await Cd(U,{nombre:"",clave:""});u([...o,{id:R.id,nombre:"",clave:""}])},fe=async(R,T,S)=>{await Ad(Yi(Er,"departamentos",i,"wifi",R),{[T]:S}),u(k=>k.map(x=>x.id===R?{...x,[T]:S}:x)),e("WiFi actualizado")},ye=async R=>{await Rd(Yi(Er,"departamentos",i,"wifi",R)),u(T=>T.filter(S=>S.id!==R)),e("WiFi eliminado")},we=async()=>{const R=await Cd(z,{nombre:"",correo:""});m([...h,{id:R.id,nombre:"",correo:""}])},je=async(R,T,S)=>{await Ad(Yi(Er,"departamentos",i,"personal",R),{[T]:S}),m(k=>k.map(x=>x.id===R?{...x,[T]:S}:x)),e("Personal actualizado")},Te=async R=>{await Rd(Yi(Er,"departamentos",i,"personal",R)),m(T=>T.filter(S=>S.id!==R)),e("Personal eliminado")};return Y.jsxs(Y.Fragment,{children:[Y.jsx("button",{onClick:()=>s(!t),style:_a,children:"Info del Departamento"}),t&&Y.jsx("div",{style:jR,children:Y.jsxs("div",{ref:L,style:zR,children:[Y.jsx("h2",{children:"Información del Departamento"}),Y.jsxs("div",{style:{marginBottom:"1rem"},children:[Y.jsx("button",{onClick:()=>v(!y),style:_a,children:y?"Ocultar WiFi":"Ver WiFi"}),y&&Y.jsxs(Y.Fragment,{children:[o.map(R=>Y.jsxs("div",{style:ay,children:[Y.jsx("input",{value:R.nombre,placeholder:"Nombre",onChange:T=>fe(R.id,"nombre",T.target.value)}),Y.jsx("input",{value:R.clave,placeholder:"Clave",onChange:T=>fe(R.id,"clave",T.target.value)}),Y.jsx("button",{onClick:()=>ye(R.id),style:oy,children:"❌"})]},R.id)),Y.jsx("button",{onClick:_e,style:_a,children:"+ Agregar WiFi"})]})]}),Y.jsxs("div",{children:[Y.jsx("button",{onClick:()=>P(!w),style:_a,children:w?"Ocultar Personal":"Ver Personal"}),w&&Y.jsxs(Y.Fragment,{children:[h.map(R=>Y.jsxs("div",{style:ay,children:[Y.jsx("input",{value:R.nombre,placeholder:"Nombre",onChange:T=>je(R.id,"nombre",T.target.value)}),Y.jsx("input",{value:R.correo,placeholder:"Correo",onChange:T=>je(R.id,"correo",T.target.value)}),Y.jsx("button",{onClick:()=>Te(R.id),style:oy,children:"❌"})]},R.id)),Y.jsx("button",{onClick:we,style:_a,children:"+ Agregar Personal"})]})]})]})})]})}const _a={padding:"8px 15px",backgroundColor:"#2196f3",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",marginLeft:"10px"},oy={backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",padding:"5px 10px"},ay={display:"flex",gap:"10px",marginBottom:"5px",alignItems:"center"},jR={position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:999},zR={backgroundColor:"white",padding:"30px",borderRadius:"10px",maxWidth:"600px",width:"90%",maxHeight:"90vh",overflowY:"auto"};function BR({departamento:i}){const[e,t]=At.useState([]),[s,o]=At.useState(""),u=Td(Er,"departamentos",i,"equipos"),h=async()=>{const U=await Sd(u);t(U.docs.map(z=>({...z.data(),id:z.id})))};At.useEffect(()=>{i&&h()},[i]);const m=U=>{o(U),setTimeout(()=>o(""),3e3)},y=async()=>{const U={tipo:"",marca:"",complementos:"",estado:"Desconocido",fecha:new Date().toISOString().split("T")[0],cantidad:1,observaciones:""},z=await Cd(u,U);t([...e,{...U,id:z.id}]),m("Equipo agregado")},v=async(U,z,X)=>{const H=Yi(Er,"departamentos",i,"equipos",U);await Ad(H,{[z]:z==="cantidad"?parseInt(X,10):X}),t(_e=>_e.map(fe=>fe.id===U?{...fe,[z]:X}:fe))},w=async U=>{await Rd(Yi(Er,"departamentos",i,"equipos",U)),t(e.filter(z=>z.id!==U)),m("Equipo eliminado")},P=U=>{switch(U){case"Desconocido":return"gray";case"Reemplazar":return"red";case"Mejorar":return"orange";case"Mantener":return"green";default:return"black"}},L=()=>e.reduce((U,z)=>U+(parseInt(z.cantidad,10)||0),0);return Y.jsxs("div",{style:{width:"100%",marginTop:"2rem"},children:[Y.jsx(UR,{mensaje:s}),Y.jsx("h2",{style:{color:"#050576"},children:i}),Y.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"1rem"},children:[Y.jsx("button",{onClick:y,style:$R,children:"+ Agregar equipo"}),Y.jsx(FR,{departamento:i,mostrarAlerta:m})]}),Y.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[Y.jsx("thead",{children:Y.jsxs("tr",{style:{backgroundColor:"#e0e0e0"},children:[Y.jsx("th",{children:"Tipo"}),Y.jsx("th",{children:"Marca"}),Y.jsx("th",{children:"Complementos"}),Y.jsx("th",{children:"Estado"}),Y.jsx("th",{children:"Fecha"}),Y.jsx("th",{children:"Cantidad"}),Y.jsx("th",{children:"Observaciones"}),Y.jsx("th",{children:"Eliminar"})]})}),Y.jsx("tbody",{children:e.map(U=>Y.jsxs("tr",{children:[Y.jsx("td",{children:Y.jsx("input",{value:U.tipo,onChange:z=>v(U.id,"tipo",z.target.value)})}),Y.jsx("td",{children:Y.jsx("input",{value:U.marca,onChange:z=>v(U.id,"marca",z.target.value)})}),Y.jsx("td",{children:Y.jsx("input",{value:U.complementos,onChange:z=>v(U.id,"complementos",z.target.value)})}),Y.jsx("td",{children:Y.jsxs("select",{value:U.estado,onChange:z=>v(U.id,"estado",z.target.value),style:{backgroundColor:P(U.estado),color:"white"},children:[Y.jsx("option",{value:"Desconocido",children:"Desconocido"}),Y.jsx("option",{value:"Reemplazar",children:"Reemplazar"}),Y.jsx("option",{value:"Mejorar",children:"Mejorar"}),Y.jsx("option",{value:"Mantener",children:"Mantener"})]})}),Y.jsx("td",{children:U.fecha}),Y.jsx("td",{children:Y.jsx("input",{type:"number",min:"1",value:U.cantidad,onChange:z=>v(U.id,"cantidad",z.target.value)})}),Y.jsx("td",{children:Y.jsx("input",{value:U.observaciones,onChange:z=>v(U.id,"observaciones",z.target.value)})}),Y.jsx("td",{children:Y.jsx("button",{onClick:()=>w(U.id),style:HR,children:"🗑️"})})]},U.id))})]}),Y.jsxs("p",{style:{textAlign:"right",marginTop:"10px",fontWeight:"bold"},children:["Total: ",L()]})]})}const $R={padding:"8px 15px",backgroundColor:"#050576",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},HR={backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",padding:"5px 10px"},WR="/Inventario/assets/logo-B7Tbo7Rn.png";function qR({user:i,cerrarSesion:e}){const[t,s]=At.useState(null),[o,u]=At.useState(!1);At.useEffect(()=>{const v=localStorage.getItem("departamento_activo");v&&s(v),u(!0)},[]);const h=async()=>{try{await sT(Av),e()}catch{alert("Error al cerrar sesión")}},m=["Biblioteca","Computación","Lenguaje","Ciencias","Matemáticas","Infant","PE","Inglés","Administración"],y=v=>{s(v),localStorage.setItem("departamento_activo",v)};return Y.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100dvh",width:"100vw",backgroundColor:"white",position:"relative",overflow:"hidden",padding:"5vw",boxSizing:"border-box"},children:[Y.jsx("img",{src:WR,alt:"Logo del colegio",style:{position:"absolute",top:"20px",right:"20px",width:"clamp(80px, 10vw, 120px)",height:"auto",objectFit:"contain",zIndex:40}}),Y.jsx("div",{style:{position:"absolute",top:"20px",left:"20px",maxWidth:"180px",pointerEvents:"none"},children:Y.jsxs("h4",{style:{margin:0,color:"#050576",fontSize:"clamp(1rem, 2vw, 1.2rem)"},children:["Hola, ",i.displayName]})}),Y.jsx("h1",{style:{color:"#050576",marginTop:"10vh",marginBottom:"5vh",textAlign:"center",fontSize:"clamp(1.5rem, 5vw, 3rem)",lineHeight:"1.2",wordWrap:"break-word",maxWidth:"90%"},children:"¿A qué departamento quieres ingresar?"}),Y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"2vw",justifyContent:"center",width:"100%",maxWidth:"800px"},children:m.map(v=>Y.jsx("button",{onClick:()=>y(v),style:{flex:"1 1 150px",maxWidth:"200px",padding:"clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",backgroundColor:t===v?"#4CAF50":"#050576",color:"white",border:"none",borderRadius:"8px",fontSize:"clamp(0.9rem, 1.5vw, 1rem)",cursor:"pointer",transition:"background-color 0.3s",textAlign:"center",boxShadow:t===v?"0 0 10px rgba(0, 0, 0, 0.3)":"none"},onMouseOver:w=>{w.target.style.backgroundColor=t===v?"#4CAF50":"#f44336"},onMouseOut:w=>{w.target.style.backgroundColor=t===v?"#4CAF50":"#050576"},children:v},v))}),Y.jsx("button",{onClick:h,style:{marginTop:"5vh",padding:"clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",fontSize:"clamp(1rem, 2vw, 1.2rem)",cursor:"pointer"},children:"Cerrar sesión"}),o&&t&&Y.jsx(BR,{departamento:t})]})}function KR(){const[i,e]=At.useState(null);return Y.jsx("div",{children:i?Y.jsx(qR,{user:i,cerrarSesion:()=>e(null)}):Y.jsx(bR,{onLoginSuccess:t=>e(t)})})}bE.createRoot(document.getElementById("root")).render(Y.jsx(At.StrictMode,{children:Y.jsx(KR,{})}));
