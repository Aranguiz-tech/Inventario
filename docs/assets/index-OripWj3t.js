(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Lh={exports:{}},ya={},Mh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function kE(){if(Cm)return Re;Cm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function L(D){return D===null||typeof D!="object"?null:(D=C&&D[C]||D["@@iterator"],typeof D=="function"?D:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Q={};function H(D,$,ce){this.props=D,this.context=$,this.refs=Q,this.updater=ce||U}H.prototype.isReactComponent={},H.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ee(){}ee.prototype=H.prototype;function ie(D,$,ce){this.props=D,this.context=$,this.refs=Q,this.updater=ce||U}var ue=ie.prototype=new ee;ue.constructor=ie,z(ue,H.prototype),ue.isPureReactComponent=!0;var Te=Array.isArray,Fe=Object.prototype.hasOwnProperty,ve={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(D,$,ce){var Ie,Ae={},Ne=null,Le=null;if($!=null)for(Ie in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(Ne=""+$.key),$)Fe.call($,Ie)&&!N.hasOwnProperty(Ie)&&(Ae[Ie]=$[Ie]);var Me=arguments.length-2;if(Me===1)Ae.children=ce;else if(1<Me){for(var Be=Array(Me),mt=0;mt<Me;mt++)Be[mt]=arguments[mt+2];Ae.children=Be}if(D&&D.defaultProps)for(Ie in Me=D.defaultProps,Me)Ae[Ie]===void 0&&(Ae[Ie]=Me[Ie]);return{$$typeof:i,type:D,key:Ne,ref:Le,props:Ae,_owner:ve.current}}function A(D,$){return{$$typeof:i,type:D.type,key:$,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function x(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ce){return $[ce]})}var V=/\/+/g;function S(D,$){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):$.toString(36)}function et(D,$,ce,Ie,Ae){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var Le=!1;if(D===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(D.$$typeof){case i:case e:Le=!0}}if(Le)return Le=D,Ae=Ae(Le),D=Ie===""?"."+S(Le,0):Ie,Te(Ae)?(ce="",D!=null&&(ce=D.replace(V,"$&/")+"/"),et(Ae,$,ce,"",function(mt){return mt})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,ce+(!Ae.key||Le&&Le.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+D)),$.push(Ae)),1;if(Le=0,Ie=Ie===""?".":Ie+":",Te(D))for(var Me=0;Me<D.length;Me++){Ne=D[Me];var Be=Ie+S(Ne,Me);Le+=et(Ne,$,ce,Be,Ae)}else if(Be=L(D),typeof Be=="function")for(D=Be.call(D),Me=0;!(Ne=D.next()).done;)Ne=Ne.value,Be=Ie+S(Ne,Me++),Le+=et(Ne,$,ce,Be,Ae);else if(Ne==="object")throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(D,$,ce){if(D==null)return D;var Ie=[],Ae=0;return et(D,Ie,"","",function(Ne){return $.call(ce,Ne,Ae++)}),Ie}function Pt(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(ce){(D._status===0||D._status===-1)&&(D._status=1,D._result=ce)},function(ce){(D._status===0||D._status===-1)&&(D._status=2,D._result=ce)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var je={current:null},J={transition:null},de={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:J,ReactCurrentOwner:ve};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:kt,forEach:function(D,$,ce){kt(D,function(){$.apply(this,arguments)},ce)},count:function(D){var $=0;return kt(D,function(){$++}),$},toArray:function(D){return kt(D,function($){return $})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=H,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ie,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=ne,Re.cloneElement=function(D,$,ce){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ie=z({},D.props),Ae=D.key,Ne=D.ref,Le=D._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,Le=ve.current),$.key!==void 0&&(Ae=""+$.key),D.type&&D.type.defaultProps)var Me=D.type.defaultProps;for(Be in $)Fe.call($,Be)&&!N.hasOwnProperty(Be)&&(Ie[Be]=$[Be]===void 0&&Me!==void 0?Me[Be]:$[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=ce;else if(1<Be){Me=Array(Be);for(var mt=0;mt<Be;mt++)Me[mt]=arguments[mt+2];Ie.children=Me}return{$$typeof:i,type:D.type,key:Ae,ref:Ne,props:Ie,_owner:Le}},Re.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Re.createElement=I,Re.createFactory=function(D){var $=I.bind(null,D);return $.type=D,$},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:m,render:D}},Re.isValidElement=k,Re.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Pt}},Re.memo=function(D,$){return{$$typeof:v,type:D,compare:$===void 0?null:$}},Re.startTransition=function(D){var $=J.transition;J.transition={};try{D()}finally{J.transition=$}},Re.unstable_act=ne,Re.useCallback=function(D,$){return je.current.useCallback(D,$)},Re.useContext=function(D){return je.current.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D){return je.current.useDeferredValue(D)},Re.useEffect=function(D,$){return je.current.useEffect(D,$)},Re.useId=function(){return je.current.useId()},Re.useImperativeHandle=function(D,$,ce){return je.current.useImperativeHandle(D,$,ce)},Re.useInsertionEffect=function(D,$){return je.current.useInsertionEffect(D,$)},Re.useLayoutEffect=function(D,$){return je.current.useLayoutEffect(D,$)},Re.useMemo=function(D,$){return je.current.useMemo(D,$)},Re.useReducer=function(D,$,ce){return je.current.useReducer(D,$,ce)},Re.useRef=function(D){return je.current.useRef(D)},Re.useState=function(D){return je.current.useState(D)},Re.useSyncExternalStore=function(D,$,ce){return je.current.useSyncExternalStore(D,$,ce)},Re.useTransition=function(){return je.current.useTransition()},Re.version="18.3.1",Re}var km;function Cd(){return km||(km=1,Mh.exports=kE()),Mh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function PE(){if(Pm)return ya;Pm=1;var i=Cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,C={},L=null,U=null;v!==void 0&&(L=""+v),y.key!==void 0&&(L=""+y.key),y.ref!==void 0&&(U=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(C[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)C[w]===void 0&&(C[w]=y[w]);return{$$typeof:e,type:m,key:L,ref:U,props:C,_owner:o.current}}return ya.Fragment=t,ya.jsx=h,ya.jsxs=h,ya}var Nm;function NE(){return Nm||(Nm=1,Lh.exports=PE()),Lh.exports}var Z=NE(),an=Cd(),su={},bh={exports:{}},Xt={},Uh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function xE(){return xm||(xm=1,function(i){function e(J,de){var ne=J.length;J.push(de);e:for(;0<ne;){var D=ne-1>>>1,$=J[D];if(0<o($,de))J[D]=de,J[ne]=$,ne=D;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var de=J[0],ne=J.pop();if(ne!==de){J[0]=ne;e:for(var D=0,$=J.length,ce=$>>>1;D<ce;){var Ie=2*(D+1)-1,Ae=J[Ie],Ne=Ie+1,Le=J[Ne];if(0>o(Ae,ne))Ne<$&&0>o(Le,Ae)?(J[D]=Le,J[Ne]=ne,D=Ne):(J[D]=Ae,J[Ie]=ne,D=Ie);else if(Ne<$&&0>o(Le,ne))J[D]=Le,J[Ne]=ne,D=Ne;else break e}}return de}function o(J,de){var ne=J.sortIndex-de.sortIndex;return ne!==0?ne:J.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,C=null,L=3,U=!1,z=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(J){for(var de=t(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=J)s(v),de.sortIndex=de.expirationTime,e(y,de);else break;de=t(v)}}function Te(J){if(Q=!1,ue(J),!z)if(t(y)!==null)z=!0,Pt(Fe);else{var de=t(v);de!==null&&je(Te,de.startTime-J)}}function Fe(J,de){z=!1,Q&&(Q=!1,ee(I),I=-1),U=!0;var ne=L;try{for(ue(de),C=t(y);C!==null&&(!(C.expirationTime>de)||J&&!x());){var D=C.callback;if(typeof D=="function"){C.callback=null,L=C.priorityLevel;var $=D(C.expirationTime<=de);de=i.unstable_now(),typeof $=="function"?C.callback=$:C===t(y)&&s(y),ue(de)}else s(y);C=t(y)}if(C!==null)var ce=!0;else{var Ie=t(v);Ie!==null&&je(Te,Ie.startTime-de),ce=!1}return ce}finally{C=null,L=ne,U=!1}}var ve=!1,N=null,I=-1,A=5,k=-1;function x(){return!(i.unstable_now()-k<A)}function V(){if(N!==null){var J=i.unstable_now();k=J;var de=!0;try{de=N(!0,J)}finally{de?S():(ve=!1,N=null)}}else ve=!1}var S;if(typeof ie=="function")S=function(){ie(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,kt=et.port2;et.port1.onmessage=V,S=function(){kt.postMessage(null)}}else S=function(){H(V,0)};function Pt(J){N=J,ve||(ve=!0,S())}function je(J,de){I=H(function(){J(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){z||U||(z=!0,Pt(Fe))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return L},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(L){case 1:case 2:case 3:var de=3;break;default:de=L}var ne=L;L=de;try{return J()}finally{L=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,de){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=L;L=J;try{return de()}finally{L=ne}},i.unstable_scheduleCallback=function(J,de,ne){var D=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?D+ne:D):ne=D,J){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,J={id:w++,callback:de,priorityLevel:J,startTime:ne,expirationTime:$,sortIndex:-1},ne>D?(J.sortIndex=ne,e(v,J),t(y)===null&&J===t(v)&&(Q?(ee(I),I=-1):Q=!0,je(Te,ne-D))):(J.sortIndex=$,e(y,J),z||U||(z=!0,Pt(Fe))),J},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(J){var de=L;return function(){var ne=L;L=de;try{return J.apply(this,arguments)}finally{L=ne}}}}(Fh)),Fh}var Dm;function DE(){return Dm||(Dm=1,Uh.exports=xE()),Uh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function VE(){if(Vm)return Xt;Vm=1;var i=Cd(),e=DE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function L(n){return y.call(C,n)?!0:y.call(w,n)?!1:v.test(n)?C[n]=!0:(w[n]=!0,!1)}function U(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,r,a,c){if(r===null||typeof r>"u"||U(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function ie(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ee,ie);H[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ee,ie);H[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ee,ie);H[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(z(r,a,d,c)&&(a=null),c||d===null?L(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fe=Symbol.for("react.element"),ve=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),x=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),J=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,D;function $(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var ce=!1;function Ie(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ae(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ve:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=mt(n))}function as(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Nr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ls(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Io(n,r){r=r.checked,r!=null&&ue(n,"checked",r,!1)}function So(n,r){Io(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?us(n,r.type,a):r.hasOwnProperty("defaultValue")&&us(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ha(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function us(n,r,a){(r!=="number"||Nr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ao(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function hs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ro(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,Co=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ti=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(n){Ti.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),wi[r]=wi[n]})});function ko(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||wi.hasOwnProperty(n)&&wi[n]?(""+r).trim():r+"px"}function Po(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ko(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(n,r){if(r){if(No[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Do(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fs=null,un=null,Un=null;function ps(n){if(n=na(n)){if(typeof fs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=El(r),fs(n.stateNode,n.type,r))}}function Fn(n){un?Un?Un.push(n):Un=[n]:un=n}function Vo(){if(un){var n=un,r=Un;if(Un=un=null,ps(n),r)for(n=0;n<r.length;n++)ps(r[n])}}function Si(n,r){return n(r)}function Oo(){}var or=!1;function Lo(n,r,a){if(or)return n(r,a);or=!0;try{return Si(n,r,a)}finally{or=!1,(un!==null||Un!==null)&&(Oo(),Vo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=El(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ms=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){ms=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ms=!1}function Ai(n,r,a,c,d,p,_,T,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(q){this.onError(q)}}var Ri=!1,gs=null,wn=!1,Mo=null,uc={onError:function(n){Ri=!0,gs=n}};function ys(n,r,a,c,d,p,_,T,R){Ri=!1,gs=null,Ai.apply(uc,arguments)}function Wa(n,r,a,c,d,p,_,T,R){if(ys.apply(this,arguments),Ri){if(Ri){var F=gs;Ri=!1,gs=null}else throw Error(t(198));wn||(wn=!0,Mo=F)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ci(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function qa(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return In(d),n;if(p===c)return In(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function bo(n){return n=qa(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=_s(n);if(r!==null)return r;n=n.sibling}return null}var vs=e.unstable_scheduleCallback,Uo=e.unstable_cancelCallback,Ka=e.unstable_shouldYield,cc=e.unstable_requestPaint,$e=e.unstable_now,Ga=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Dr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,Qa=e.unstable_IdlePriority,Pi=null,Zt=null;function Xa(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Pi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Ja,jo=Math.log,Ya=Math.LN2;function Ja(n){return n>>>=0,n===0?32:31-(jo(n)/Ya|0)|0}var Es=64,ws=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ni(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Vr(T):(p&=_,p!==0&&(c=Vr(p)))}else _=a&~d,_!==0?c=Vr(_):p!==0&&(c=Vr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function hc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=hc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=Es;return Es<<=1,(Es&4194240)===0&&(Es=64),n}function Or(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Lr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Mr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Za,Ts,el,tl,nl,zo=!1,jn=[],wt=null,Sn=null,An=null,Ur=new Map,hn=new Map,zn=[],dc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rl(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Ur.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=na(r),r!==null&&Ts(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function fc(n,r,a,c,d){switch(r){case"focusin":return wt=$t(wt,n,r,a,c,d),!0;case"dragenter":return Sn=$t(Sn,n,r,a,c,d),!0;case"mouseover":return An=$t(An,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Ur.set(p,$t(Ur.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,$t(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function il(n){var r=Mi(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ci(a),r!==null){n.blockedOn=r,nl(n.priority,function(){el(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Is(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ii=c,a.target.dispatchEvent(c),Ii=null}else return r=na(a),r!==null&&Ts(r),n.blockedOn=a,!1;r.shift()}return!0}function Di(n,r,a){lr(n)&&a.delete(r)}function sl(){zo=!1,wt!==null&&lr(wt)&&(wt=null),Sn!==null&&lr(Sn)&&(Sn=null),An!==null&&lr(An)&&(An=null),Ur.forEach(Di),hn.forEach(Di)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,zo||(zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sl)))}function Cn(n){function r(d){return Rn(d,n)}if(0<jn.length){Rn(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Rn(wt,n),Sn!==null&&Rn(Sn,n),An!==null&&Rn(An,n),Ur.forEach(r),hn.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)il(a),a.blockedOn===null&&zn.shift()}var ur=Te.ReactCurrentBatchConfig,Fr=!0;function Ke(n,r,a,c){var d=Pe,p=ur.transition;ur.transition=null;try{Pe=1,Bo(n,r,a,c)}finally{Pe=d,ur.transition=p}}function pc(n,r,a,c){var d=Pe,p=ur.transition;ur.transition=null;try{Pe=4,Bo(n,r,a,c)}finally{Pe=d,ur.transition=p}}function Bo(n,r,a,c){if(Fr){var d=Is(n,r,a,c);if(d===null)Ac(n,r,c,Vi,a),rl(n,c);else if(fc(d,n,r,a,c))c.stopPropagation();else if(rl(n,c),r&4&&-1<dc.indexOf(n)){for(;d!==null;){var p=na(d);if(p!==null&&Za(p),p=Is(n,r,a,c),p===null&&Ac(n,r,c,Vi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ac(n,r,c,null,a)}}var Vi=null;function Is(n,r,a,c){if(Vi=null,n=ds(c),n=Mi(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ci(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Vi=n,null}function $o(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ga()){case ki:return 1;case Dr:return 4;case cn:case Fo:return 16;case Qa:return 536870912;default:return 16}default:return 16}}var tn=null,Ss=null,Ht=null;function Ho(){if(Ht)return Ht;var n,r=Ss,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function As(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Wo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Wo,this.isPropagationStopped=Wo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Tt(kn),$n=ne({},kn,{view:0,detail:0}),mc=Tt($n),Cs,cr,jr,Oi=ne({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jr&&(jr&&n.type==="mousemove"?(Cs=n.screenX-jr.screenX,cr=n.screenY-jr.screenY):cr=Cs=0,jr=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),ks=Tt(Oi),qo=ne({},Oi,{dataTransfer:0}),ol=Tt(qo),Ps=ne({},$n,{relatedTarget:0}),Ns=Tt(Ps),al=ne({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=Tt(al),ll=ne({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ul=Tt(ll),cl=ne({},kn,{data:0}),Ko=Tt(cl),xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ft={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=hl[n])?!!r[n]:!1}function Hn(){return dl}var l=ne({},$n,{key:function(n){if(n.key){var r=xs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=As(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ft[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?As(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?As(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=ne({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(g),O=ne({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),j=Tt(O),Y=ne({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Tt(Y),ut=ne({},Oi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Tt(ut),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var nn=m&&"TextEvent"in window&&!dn,Li=m&&(!it||dn&&8<dn&&11>=dn),Ds=" ",wf=!1;function Tf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function Av(n,r){switch(n){case"compositionend":return If(r);case"keypress":return r.which!==32?null:(wf=!0,Ds);case"textInput":return n=r.data,n===Ds&&wf?null:n;default:return null}}function Rv(n,r){if(Vs)return n==="compositionend"||!it&&Tf(n,r)?(n=Ho(),Ht=Ss=tn=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Li&&r.locale!=="ko"?null:r.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Cv[n.type]:r==="textarea"}function Af(n,r,a,c){Fn(c),r=yl(r,"onChange"),0<r.length&&(a=new Rs("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Go=null,Qo=null;function kv(n){$f(n,0)}function fl(n){var r=Us(n);if(as(r))return n}function Pv(n,r){if(n==="change")return r}var Rf=!1;if(m){var gc;if(m){var yc="oninput"in document;if(!yc){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),yc=typeof Cf.oninput=="function"}gc=yc}else gc=!1;Rf=gc&&(!document.documentMode||9<document.documentMode)}function kf(){Go&&(Go.detachEvent("onpropertychange",Pf),Qo=Go=null)}function Pf(n){if(n.propertyName==="value"&&fl(Qo)){var r=[];Af(r,Qo,n,ds(n)),Lo(kv,r)}}function Nv(n,r,a){n==="focusin"?(kf(),Go=r,Qo=a,Go.attachEvent("onpropertychange",Pf)):n==="focusout"&&kf()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fl(Qo)}function Dv(n,r){if(n==="click")return fl(r)}function Vv(n,r){if(n==="input"||n==="change")return fl(r)}function Ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:Ov;function Xo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function Nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xf(n,r){var a=Nf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function Df(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Df(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Vf(){for(var n=window,r=Nr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Nr(n.document)}return r}function _c(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Lv(n){var r=Vf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Df(a.ownerDocument.documentElement,a)){if(c!==null&&_c(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=xf(a,p);var _=xf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Mv=m&&"documentMode"in document&&11>=document.documentMode,Os=null,vc=null,Yo=null,Ec=!1;function Of(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Os==null||Os!==Nr(c)||(c=Os,"selectionStart"in c&&_c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&Xo(Yo,c)||(Yo=c,c=yl(vc,"onSelect"),0<c.length&&(r=new Rs("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Os)))}function pl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ls={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},wc={},Lf={};m&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function ml(n){if(wc[n])return wc[n];if(!Ls[n])return n;var r=Ls[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Lf)return wc[n]=r[a];return n}var Mf=ml("animationend"),bf=ml("animationiteration"),Uf=ml("animationstart"),Ff=ml("transitionend"),jf=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){jf.set(n,r),u(r,[n])}for(var Tc=0;Tc<zf.length;Tc++){var Ic=zf[Tc],bv=Ic.toLowerCase(),Uv=Ic[0].toUpperCase()+Ic.slice(1);zr(bv,"on"+Uv)}zr(Mf,"onAnimationEnd"),zr(bf,"onAnimationIteration"),zr(Uf,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Ff,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Bf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Wa(c,r,void 0,n),n.currentTarget=null}function $f(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,F=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Bf(d,T,F),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,F=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Bf(d,T,F),p=R}}}if(wn)throw n=Mo,wn=!1,Mo=null,n}function We(n,r){var a=r[xc];a===void 0&&(a=r[xc]=new Set);var c=n+"__bubble";a.has(c)||(Hf(r,n,2,!1),a.add(c))}function Sc(n,r,a){var c=0;r&&(c|=4),Hf(a,n,c,r)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[gl]){n[gl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Fv.has(a)||Sc(a,!1,n),Sc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[gl]||(r[gl]=!0,Sc("selectionchange",!1,r))}}function Hf(n,r,a,c){switch($o(r)){case 1:var d=Ke;break;case 4:d=pc;break;default:d=Bo}a=d.bind(null,r,a,n),d=void 0,!ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Ac(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Mi(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Lo(function(){var F=p,q=ds(a),G=[];e:{var W=jf.get(n);if(W!==void 0){var te=Rs,oe=n;switch(n){case"keypress":if(As(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":oe="focus",te=Ns;break;case"focusout":oe="blur",te=Ns;break;case"beforeblur":case"afterblur":te=Ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=ol;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=j;break;case Mf:case bf:case Uf:te=hr;break;case Ff:te=Ue;break;case"scroll":te=mc;break;case"wheel":te=xe;break;case"copy":case"cut":case"paste":te=ul;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var ae=(r&4)!==0,nt=!ae&&n==="scroll",M=ae?W!==null?W+"Capture":null:W;ae=[];for(var P=F,b;P!==null;){b=P;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=tt(P,M),X!=null&&ae.push(ea(P,X,b)))),nt)break;P=P.return}0<ae.length&&(W=new te(W,oe,null,a,q),G.push({event:W,listeners:ae}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",W&&a!==Ii&&(oe=a.relatedTarget||a.fromElement)&&(Mi(oe)||oe[dr]))break e;if((te||W)&&(W=q.window===q?q:(W=q.ownerDocument)?W.defaultView||W.parentWindow:window,te?(oe=a.relatedTarget||a.toElement,te=F,oe=oe?Mi(oe):null,oe!==null&&(nt=Tn(oe),oe!==nt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=F),te!==oe)){if(ae=ks,X="onMouseLeave",M="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,X="onPointerLeave",M="onPointerEnter",P="pointer"),nt=te==null?W:Us(te),b=oe==null?W:Us(oe),W=new ae(X,P+"leave",te,a,q),W.target=nt,W.relatedTarget=b,X=null,Mi(q)===F&&(ae=new ae(M,P+"enter",oe,a,q),ae.target=b,ae.relatedTarget=nt,X=ae),nt=X,te&&oe)t:{for(ae=te,M=oe,P=0,b=ae;b;b=Ms(b))P++;for(b=0,X=M;X;X=Ms(X))b++;for(;0<P-b;)ae=Ms(ae),P--;for(;0<b-P;)M=Ms(M),b--;for(;P--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Ms(ae),M=Ms(M)}ae=null}else ae=null;te!==null&&Wf(G,W,te,ae,!1),oe!==null&&nt!==null&&Wf(G,nt,oe,ae,!0)}}e:{if(W=F?Us(F):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var le=Pv;else if(Sf(W))if(Rf)le=Vv;else{le=xv;var fe=Nv}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(le=Dv);if(le&&(le=le(n,F))){Af(G,le,a,q);break e}fe&&fe(n,W,F),n==="focusout"&&(fe=W._wrapperState)&&fe.controlled&&W.type==="number"&&us(W,"number",W.value)}switch(fe=F?Us(F):window,n){case"focusin":(Sf(fe)||fe.contentEditable==="true")&&(Os=fe,vc=F,Yo=null);break;case"focusout":Yo=vc=Os=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Of(G,a,q);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Of(G,a,q)}var pe;if(it)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Vs?Tf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Li&&a.locale!=="ko"&&(Vs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Vs&&(pe=Ho()):(tn=q,Ss="value"in tn?tn.value:tn.textContent,Vs=!0)),fe=yl(F,ye),0<fe.length&&(ye=new Ko(ye,n,null,a,q),G.push({event:ye,listeners:fe}),pe?ye.data=pe:(pe=If(a),pe!==null&&(ye.data=pe)))),(pe=nn?Av(n,a):Rv(n,a))&&(F=yl(F,"onBeforeInput"),0<F.length&&(q=new Ko("onBeforeInput","beforeinput",null,a,q),G.push({event:q,listeners:F}),q.data=pe))}$f(G,r)})}function ea(n,r,a){return{instance:n,listener:r,currentTarget:a}}function yl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(ea(n,p,d)),p=tt(n,r),p!=null&&c.push(ea(n,p,d))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,F=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&F!==null&&(T=F,d?(R=tt(a,p),R!=null&&_.unshift(ea(a,R,T))):d||(R=tt(a,p),R!=null&&_.push(ea(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var jv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(jv,`
`).replace(zv,"")}function _l(n,r,a){if(r=qf(r),qf(n)!==r&&a)throw Error(t(425))}function vl(){}var Rc=null,Cc=null;function kc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(Hv)}:Pc;function Hv(n){setTimeout(function(){throw n})}function Nc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Cn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Cn(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Gf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Wn="__reactFiber$"+bs,ta="__reactProps$"+bs,dr="__reactContainer$"+bs,xc="__reactEvents$"+bs,Wv="__reactListeners$"+bs,qv="__reactHandles$"+bs;function Mi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Gf(n);n!==null;){if(a=n[Wn])return a;n=Gf(n)}return r}n=a,a=n.parentNode}return null}function na(n){return n=n[Wn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function El(n){return n[ta]||null}var Dc=[],Fs=-1;function $r(n){return{current:n}}function qe(n){0>Fs||(n.current=Dc[Fs],Dc[Fs]=null,Fs--)}function He(n,r){Fs++,Dc[Fs]=n.current,n.current=r}var Hr={},Nt=$r(Hr),Wt=$r(!1),bi=Hr;function js(n,r){var a=n.type.contextTypes;if(!a)return Hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function wl(){qe(Wt),qe(Nt)}function Qf(n,r,a){if(Nt.current!==Hr)throw Error(t(168));He(Nt,r),He(Wt,a)}function Xf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ne({},a,c)}function Tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,bi=Nt.current,He(Nt,n),He(Wt,Wt.current),!0}function Yf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Xf(n,r,bi),c.__reactInternalMemoizedMergedChildContext=n,qe(Wt),qe(Nt),He(Nt,n)):qe(Wt),He(Wt,a)}var fr=null,Il=!1,Vc=!1;function Jf(n){fr===null?fr=[n]:fr.push(n)}function Kv(n){Il=!0,Jf(n)}function Wr(){if(!Vc&&fr!==null){Vc=!0;var n=0,r=Pe;try{var a=fr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Il=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),vs(ki,Wr),d}finally{Pe=r,Vc=!1}}return null}var zs=[],Bs=0,Sl=null,Al=0,fn=[],pn=0,Ui=null,pr=1,mr="";function Fi(n,r){zs[Bs++]=Al,zs[Bs++]=Sl,Sl=n,Al=r}function Zf(n,r,a){fn[pn++]=pr,fn[pn++]=mr,fn[pn++]=Ui,Ui=n;var c=pr;n=mr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,pr=1<<32-Ut(r)+d|a<<d|c,mr=p+n}else pr=1<<p|a<<d|c,mr=n}function Oc(n){n.return!==null&&(Fi(n,1),Zf(n,1,0))}function Lc(n){for(;n===Sl;)Sl=zs[--Bs],zs[Bs]=null,Al=zs[--Bs],zs[Bs]=null;for(;n===Ui;)Ui=fn[--pn],fn[pn]=null,mr=fn[--pn],fn[pn]=null,pr=fn[--pn],fn[pn]=null}var rn=null,sn=null,Ge=!1,Nn=null;function ep(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function tp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ui!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Mc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bc(n){if(Ge){var r=sn;if(r){var a=r;if(!tp(n,r)){if(Mc(n))throw Error(t(418));r=Br(a.nextSibling);var c=rn;r&&tp(n,r)?ep(c,a):(n.flags=n.flags&-4097|2,Ge=!1,rn=n)}}else{if(Mc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,rn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Rl(n){if(n!==rn)return!1;if(!Ge)return np(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!kc(n.type,n.memoizedProps)),r&&(r=sn)){if(Mc(n))throw rp(),Error(t(418));for(;r;)ep(n,r),r=Br(r.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Br(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Br(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=sn;n;)n=Br(n.nextSibling)}function $s(){sn=rn=null,Ge=!1}function Uc(n){Nn===null?Nn=[n]:Nn.push(n)}var Gv=Te.ReactCurrentBatchConfig;function ra(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Cl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ip(n){var r=n._init;return r(n._payload)}function sp(n){function r(M,P){if(n){var b=M.deletions;b===null?(M.deletions=[P],M.flags|=16):b.push(P)}}function a(M,P){if(!n)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=Zr(M,P),M.index=0,M.sibling=null,M}function p(M,P,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<P?(M.flags|=2,P):b):(M.flags|=2,P)):(M.flags|=1048576,P)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,P,b,X){return P===null||P.tag!==6?(P=Ph(b,M.mode,X),P.return=M,P):(P=d(P,b),P.return=M,P)}function R(M,P,b,X){var le=b.type;return le===N?q(M,P,b.props.children,X,b.key):P!==null&&(P.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Pt&&ip(le)===P.type)?(X=d(P,b.props),X.ref=ra(M,P,b),X.return=M,X):(X=Yl(b.type,b.key,b.props,null,M.mode,X),X.ref=ra(M,P,b),X.return=M,X)}function F(M,P,b,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==b.containerInfo||P.stateNode.implementation!==b.implementation?(P=Nh(b,M.mode,X),P.return=M,P):(P=d(P,b.children||[]),P.return=M,P)}function q(M,P,b,X,le){return P===null||P.tag!==7?(P=Ki(b,M.mode,X,le),P.return=M,P):(P=d(P,b),P.return=M,P)}function G(M,P,b){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ph(""+P,M.mode,b),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Fe:return b=Yl(P.type,P.key,P.props,null,M.mode,b),b.ref=ra(M,null,P),b.return=M,b;case ve:return P=Nh(P,M.mode,b),P.return=M,P;case Pt:var X=P._init;return G(M,X(P._payload),b)}if(rr(P)||de(P))return P=Ki(P,M.mode,b,null),P.return=M,P;Cl(M,P)}return null}function W(M,P,b,X){var le=P!==null?P.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,P,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fe:return b.key===le?R(M,P,b,X):null;case ve:return b.key===le?F(M,P,b,X):null;case Pt:return le=b._init,W(M,P,le(b._payload),X)}if(rr(b)||de(b))return le!==null?null:q(M,P,b,X,null);Cl(M,b)}return null}function te(M,P,b,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(P,M,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Fe:return M=M.get(X.key===null?b:X.key)||null,R(P,M,X,le);case ve:return M=M.get(X.key===null?b:X.key)||null,F(P,M,X,le);case Pt:var fe=X._init;return te(M,P,b,fe(X._payload),le)}if(rr(X)||de(X))return M=M.get(b)||null,q(P,M,X,le,null);Cl(P,X)}return null}function oe(M,P,b,X){for(var le=null,fe=null,pe=P,ye=P=0,vt=null;pe!==null&&ye<b.length;ye++){pe.index>ye?(vt=pe,pe=null):vt=pe.sibling;var Oe=W(M,pe,b[ye],X);if(Oe===null){pe===null&&(pe=vt);break}n&&pe&&Oe.alternate===null&&r(M,pe),P=p(Oe,P,ye),fe===null?le=Oe:fe.sibling=Oe,fe=Oe,pe=vt}if(ye===b.length)return a(M,pe),Ge&&Fi(M,ye),le;if(pe===null){for(;ye<b.length;ye++)pe=G(M,b[ye],X),pe!==null&&(P=p(pe,P,ye),fe===null?le=pe:fe.sibling=pe,fe=pe);return Ge&&Fi(M,ye),le}for(pe=c(M,pe);ye<b.length;ye++)vt=te(pe,M,ye,b[ye],X),vt!==null&&(n&&vt.alternate!==null&&pe.delete(vt.key===null?ye:vt.key),P=p(vt,P,ye),fe===null?le=vt:fe.sibling=vt,fe=vt);return n&&pe.forEach(function(ei){return r(M,ei)}),Ge&&Fi(M,ye),le}function ae(M,P,b,X){var le=de(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var fe=le=null,pe=P,ye=P=0,vt=null,Oe=b.next();pe!==null&&!Oe.done;ye++,Oe=b.next()){pe.index>ye?(vt=pe,pe=null):vt=pe.sibling;var ei=W(M,pe,Oe.value,X);if(ei===null){pe===null&&(pe=vt);break}n&&pe&&ei.alternate===null&&r(M,pe),P=p(ei,P,ye),fe===null?le=ei:fe.sibling=ei,fe=ei,pe=vt}if(Oe.done)return a(M,pe),Ge&&Fi(M,ye),le;if(pe===null){for(;!Oe.done;ye++,Oe=b.next())Oe=G(M,Oe.value,X),Oe!==null&&(P=p(Oe,P,ye),fe===null?le=Oe:fe.sibling=Oe,fe=Oe);return Ge&&Fi(M,ye),le}for(pe=c(M,pe);!Oe.done;ye++,Oe=b.next())Oe=te(pe,M,ye,Oe.value,X),Oe!==null&&(n&&Oe.alternate!==null&&pe.delete(Oe.key===null?ye:Oe.key),P=p(Oe,P,ye),fe===null?le=Oe:fe.sibling=Oe,fe=Oe);return n&&pe.forEach(function(CE){return r(M,CE)}),Ge&&Fi(M,ye),le}function nt(M,P,b,X){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Fe:e:{for(var le=b.key,fe=P;fe!==null;){if(fe.key===le){if(le=b.type,le===N){if(fe.tag===7){a(M,fe.sibling),P=d(fe,b.props.children),P.return=M,M=P;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Pt&&ip(le)===fe.type){a(M,fe.sibling),P=d(fe,b.props),P.ref=ra(M,fe,b),P.return=M,M=P;break e}a(M,fe);break}else r(M,fe);fe=fe.sibling}b.type===N?(P=Ki(b.props.children,M.mode,X,b.key),P.return=M,M=P):(X=Yl(b.type,b.key,b.props,null,M.mode,X),X.ref=ra(M,P,b),X.return=M,M=X)}return _(M);case ve:e:{for(fe=b.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===b.containerInfo&&P.stateNode.implementation===b.implementation){a(M,P.sibling),P=d(P,b.children||[]),P.return=M,M=P;break e}else{a(M,P);break}else r(M,P);P=P.sibling}P=Nh(b,M.mode,X),P.return=M,M=P}return _(M);case Pt:return fe=b._init,nt(M,P,fe(b._payload),X)}if(rr(b))return oe(M,P,b,X);if(de(b))return ae(M,P,b,X);Cl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,b),P.return=M,M=P):(a(M,P),P=Ph(b,M.mode,X),P.return=M,M=P),_(M)):a(M,P)}return nt}var Hs=sp(!0),op=sp(!1),kl=$r(null),Pl=null,Ws=null,Fc=null;function jc(){Fc=Ws=Pl=null}function zc(n){var r=kl.current;qe(kl),n._currentValue=r}function Bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function qs(n,r){Pl=n,Fc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:r,next:null},Ws===null){if(Pl===null)throw Error(t(308));Ws=n,Pl.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return r}var ji=null;function $c(n){ji===null?ji=[n]:ji.push(n)}function ap(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,$c(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function Hc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Kr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,$c(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function Nl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Mr(n,a)}}function up(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function xl(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var q=n.alternate;q!==null&&(q=q.updateQueue,T=q.lastBaseUpdate,T!==_&&(T===null?q.firstBaseUpdate=F:T.next=F,q.lastBaseUpdate=R))}if(p!==null){var G=d.baseState;_=0,q=F=R=null,T=p;do{var W=T.lane,te=T.eventTime;if((c&W)===W){q!==null&&(q=q.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(W=r,te=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){G=oe.call(te,G,W);break e}G=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,W=typeof oe=="function"?oe.call(te,G,W):oe,W==null)break e;G=ne({},G,W);break e;case 2:qr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else te={eventTime:te,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},q===null?(F=q=te,R=G):q=q.next=te,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(q===null&&(R=G),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);$i|=_,n.lanes=_,n.memoizedState=G}}function cp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ia={},qn=$r(ia),sa=$r(ia),oa=$r(ia);function zi(n){if(n===ia)throw Error(t(174));return n}function Wc(n,r){switch(He(oa,r),He(sa,n),He(qn,ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}qe(qn),He(qn,r)}function Ks(){qe(qn),qe(sa),qe(oa)}function hp(n){zi(oa.current);var r=zi(qn.current),a=lt(r,n.type);r!==a&&(He(sa,n),He(qn,a))}function qc(n){sa.current===n&&(qe(qn),qe(sa))}var Xe=$r(0);function Dl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Kc=[];function Gc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var Vl=Te.ReactCurrentDispatcher,Qc=Te.ReactCurrentBatchConfig,Bi=0,Ye=null,ct=null,yt=null,Ol=!1,aa=!1,la=0,Qv=0;function xt(){throw Error(t(321))}function Xc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Yc(n,r,a,c,d,p){if(Bi=p,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Vl.current=n===null||n.memoizedState===null?Zv:eE,n=a(c,d),aa){p=0;do{if(aa=!1,la=0,25<=p)throw Error(t(301));p+=1,yt=ct=null,r.updateQueue=null,Vl.current=tE,n=a(c,d)}while(aa)}if(Vl.current=bl,r=ct!==null&&ct.next!==null,Bi=0,yt=ct=Ye=null,Ol=!1,r)throw Error(t(300));return n}function Jc(){var n=la!==0;return la=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=n:yt=yt.next=n,yt}function gn(){if(ct===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=yt===null?Ye.memoizedState:yt.next;if(r!==null)yt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Ye.memoizedState=yt=n:yt=yt.next=n}return yt}function ua(n,r){return typeof r=="function"?r(n):r}function Zc(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,F=p;do{var q=F.lane;if((Bi&q)===q)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(T=R=G,_=c):R=R.next=G,Ye.lanes|=q,$i|=q}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=T,Pn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ye.lanes|=p,$i|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function eh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function dp(){}function fp(n,r){var a=Ye,c=gn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,th(gp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ca(9,mp.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(Bi&30)!==0||pp(a,r,d)}return d}function pp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function mp(n,r,a,c){r.value=a,r.getSnapshot=c,yp(r)&&_p(n)}function gp(n,r,a){return a(function(){yp(r)&&_p(n)})}function yp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function _p(n){var r=gr(n,1);r!==null&&On(r,n,1,-1)}function vp(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},r.queue=n,n=n.dispatch=Jv.bind(null,Ye,n),[r.memoizedState,n]}function ca(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Ep(){return gn().memoizedState}function Ll(n,r,a,c){var d=Kn();Ye.flags|=n,d.memoizedState=ca(1|r,a,void 0,c===void 0?null:c)}function Ml(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&Xc(c,_.deps)){d.memoizedState=ca(r,a,p,c);return}}Ye.flags|=n,d.memoizedState=ca(1|r,a,p,c)}function wp(n,r){return Ll(8390656,8,n,r)}function th(n,r){return Ml(2048,8,n,r)}function Tp(n,r){return Ml(4,2,n,r)}function Ip(n,r){return Ml(4,4,n,r)}function Sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ap(n,r,a){return a=a!=null?a.concat([n]):null,Ml(4,4,Sp.bind(null,r,n),a)}function nh(){}function Rp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Xc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Cp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Xc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function kp(n,r,a){return(Bi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Pn(a,r)||(a=xi(),Ye.lanes|=a,$i|=a,n.baseState=!0),r)}function Xv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),r()}finally{Pe=a,Qc.transition=c}}function Pp(){return gn().memoizedState}function Yv(n,r,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))xp(r,a);else if(a=ap(n,r,a,c),a!==null){var d=zt();On(a,n,c,d),Dp(a,r,c)}}function Jv(n,r,a){var c=Yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))xp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Pn(T,_)){var R=r.interleaved;R===null?(d.next=d,$c(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=ap(n,r,d,c),a!==null&&(d=zt(),On(a,n,c,d),Dp(a,r,c))}}function Np(n){var r=n.alternate;return n===Ye||r!==null&&r===Ye}function xp(n,r){aa=Ol=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Dp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Mr(n,a)}}var bl={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Zv={readContext:mn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:wp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ll(4194308,4,Sp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ll(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Yv.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:vp,useDebugValue:nh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=vp(!1),r=n[0];return n=Xv.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ye,d=Kn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(Bi&30)!==0||pp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,wp(gp.bind(null,c,p,n),[n]),c.flags|=2048,ca(9,mp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Kn(),r=_t.identifierPrefix;if(Ge){var a=mr,c=pr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=la++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Qv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},eE={readContext:mn,useCallback:Rp,useContext:mn,useEffect:th,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:Cp,useReducer:Zc,useRef:Ep,useState:function(){return Zc(ua)},useDebugValue:nh,useDeferredValue:function(n){var r=gn();return kp(r,ct.memoizedState,n)},useTransition:function(){var n=Zc(ua)[0],r=gn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1},tE={readContext:mn,useCallback:Rp,useContext:mn,useEffect:th,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:Cp,useReducer:eh,useRef:Ep,useState:function(){return eh(ua)},useDebugValue:nh,useDeferredValue:function(n){var r=gn();return ct===null?r.memoizedState=n:kp(r,ct.memoizedState,n)},useTransition:function(){var n=eh(ua)[0],r=gn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1};function xn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function rh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ul={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Yr(n),p=yr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(On(r,n,d,c),Nl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=zt(),d=Yr(n),p=yr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Kr(n,p,d),r!==null&&(On(r,n,d,c),Nl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=zt(),c=Yr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Kr(n,d,c),r!==null&&(On(r,n,c,a),Nl(r,n,c))}};function Vp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Xo(a,c)||!Xo(d,p):!0}function Op(n,r,a){var c=!1,d=Hr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=qt(r)?bi:Nt.current,c=r.contextTypes,p=(c=c!=null)?js(n,d):Hr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ul,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Lp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ul.enqueueReplaceState(r,r.state,null)}function ih(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Hc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=qt(r)?bi:Nt.current,d.context=js(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(rh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ul.enqueueReplaceState(d,d.state,null),xl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function sh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function oh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var nE=typeof WeakMap=="function"?WeakMap:Map;function Mp(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Wl||(Wl=!0,wh=c),oh(n,r)},a}function bp(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){oh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){oh(n,r),typeof c!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Up(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=gE.bind(null,n,r,a),r.then(n,n))}function Fp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function jp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,Kr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rE=Te.ReactCurrentOwner,Kt=!1;function jt(n,r,a,c){r.child=n===null?op(r,null,a,c):Hs(r,n.child,a,c)}function zp(n,r,a,c,d){a=a.render;var p=r.ref;return qs(r,d),c=Yc(n,r,a,c,p,d),a=Jc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ge&&a&&Oc(r),r.flags|=1,jt(n,r,c,d),r.child)}function Bp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!kh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,$p(n,r,p,c,d)):(n=Yl(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(_,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Zr(p,c),n.ref=r.ref,n.return=r,r.child=n}function $p(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Xo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return ah(n,r,a,c,d)}function Hp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Xs,on),on|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Xs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(Xs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(Xs,on),on|=c;return jt(n,r,d,a),r.child}function Wp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ah(n,r,a,c,d){var p=qt(a)?bi:Nt.current;return p=js(r,p),qs(r,d),a=Yc(n,r,a,c,p,d),c=Jc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Ge&&c&&Oc(r),r.flags|=1,jt(n,r,a,d),r.child)}function qp(n,r,a,c,d){if(qt(a)){var p=!0;Tl(r)}else p=!1;if(qs(r,d),r.stateNode===null)jl(n,r),Op(r,a,c),ih(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=qt(a)?bi:Nt.current,F=js(r,F));var q=a.getDerivedStateFromProps,G=typeof q=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==F)&&Lp(r,_,c,F),qr=!1;var W=r.memoizedState;_.state=W,xl(r,c,_,d),R=r.memoizedState,T!==c||W!==R||Wt.current||qr?(typeof q=="function"&&(rh(r,a,q,c),R=r.memoizedState),(T=qr||Vp(r,a,T,c,W,R,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,lp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:xn(r.type,T),_.props=F,G=r.pendingProps,W=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=mn(R):(R=qt(a)?bi:Nt.current,R=js(r,R));var te=a.getDerivedStateFromProps;(q=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||W!==R)&&Lp(r,_,c,R),qr=!1,W=r.memoizedState,_.state=W,xl(r,c,_,d);var oe=r.memoizedState;T!==G||W!==oe||Wt.current||qr?(typeof te=="function"&&(rh(r,a,te,c),oe=r.memoizedState),(F=qr||Vp(r,a,F,c,W,oe,R)||!1)?(q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),_.props=c,_.state=oe,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return lh(n,r,a,c,p,d)}function lh(n,r,a,c,d,p){Wp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Yf(r,a,!1),_r(n,r,p);c=r.stateNode,rE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Hs(r,n.child,null,p),r.child=Hs(r,null,T,p)):jt(n,r,T,p),r.memoizedState=c.state,d&&Yf(r,a,!0),r.child}function Kp(n){var r=n.stateNode;r.pendingContext?Qf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Qf(n,r.context,!1),Wc(n,r.containerInfo)}function Gp(n,r,a,c,d){return $s(),Uc(d),r.flags|=256,jt(n,r,a,c),r.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qp(n,r,a){var c=r.pendingProps,d=Xe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return bc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Jl(_,c,0,null),n=Ki(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=ch(a),r.memoizedState=uh,n):hh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return iE(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Zr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Zr(T,p):(p=Ki(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?ch(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=uh,c}return p=n.child,n=p.sibling,c=Zr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function hh(n,r){return r=Jl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Fl(n,r,a,c){return c!==null&&Uc(c),Hs(r,n.child,null,a),n=hh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function iE(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=sh(Error(t(422))),Fl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Jl({mode:"visible",children:c.children},d,0,null),p=Ki(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Hs(r,n.child,null,_),r.child.memoizedState=ch(_),r.memoizedState=uh,p);if((r.mode&1)===0)return Fl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=sh(p,c,void 0),Fl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,gr(n,d),On(c,n,d,-1))}return Ch(),c=sh(Error(t(421))),Fl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=yE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=Br(d.nextSibling),rn=r,Ge=!0,Nn=null,n!==null&&(fn[pn++]=pr,fn[pn++]=mr,fn[pn++]=Ui,pr=n.id,mr=n.overflow,Ui=r),r=hh(r,c.children),r.flags|=4096,r)}function Xp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Bc(n.return,r,a)}function dh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Yp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,r,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xp(n,a,r);else if(n.tag===19)Xp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Dl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),dh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Dl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}dh(r,!0,a,null,p);break;case"together":dh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function jl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),$i|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Zr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Zr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function sE(n,r,a){switch(r.tag){case 3:Kp(r),$s();break;case 5:hp(r);break;case 1:qt(r.type)&&Tl(r);break;case 4:Wc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(kl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Qp(n,r,a):(He(Xe,Xe.current&1),n=_r(n,r,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Yp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,Hp(n,r,a)}return _r(n,r,a)}var Jp,fh,Zp,em;Jp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},fh=function(){},Zp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,zi(qn.current);var p=null;switch(a){case"input":d=Ei(n,d),c=Ei(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=vl)}xo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==T&&(R!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&We("scroll",n),p||T===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},em=function(n,r,a,c){a!==c&&(r.flags|=4)};function ha(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function oE(n,r,a){var c=r.pendingProps;switch(Lc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(r),null;case 1:return qt(r.type)&&wl(),Dt(r),null;case 3:return c=r.stateNode,Ks(),qe(Wt),qe(Nt),Gc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Rl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nn!==null&&(Sh(Nn),Nn=null))),fh(n,r),Dt(r),null;case 5:qc(r);var d=zi(oa.current);if(a=r.type,n!==null&&r.stateNode!=null)Zp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dt(r),null}if(n=zi(qn.current),Rl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Wn]=r,c[ta]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ls(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":cs(c,p),We("invalid",c)}xo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&_l(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&_l(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":nr(c),Ha(c,p,!0);break;case"textarea":nr(c),Ro(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=vl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[ta]=c,Jp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Do(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ls(n,c),d=Ei(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),We("invalid",n);break;case"textarea":cs(n,c),d=Ao(n,c),We("invalid",n);break;default:d=c}xo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Po(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Co(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&xr(n,R):typeof R=="number"&&xr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&We("scroll",n):R!=null&&ue(n,p,R,_))}switch(a){case"input":nr(n),Ha(n,c,!1);break;case"textarea":nr(n),Ro(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ir(n,!!c.multiple,p,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dt(r),null;case 6:if(n&&r.stateNode!=null)em(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=zi(oa.current),zi(qn.current),Rl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:_l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_l(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Dt(r),null;case 13:if(qe(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)rp(),$s(),r.flags|=98560,p=!1;else if(p=Rl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Wn]=r}else $s(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dt(r),p=!1}else Nn!==null&&(Sh(Nn),Nn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?ht===0&&(ht=3):Ch())),r.updateQueue!==null&&(r.flags|=4),Dt(r),null);case 4:return Ks(),fh(n,r),n===null&&Zo(r.stateNode.containerInfo),Dt(r),null;case 10:return zc(r.type._context),Dt(r),null;case 17:return qt(r.type)&&wl(),Dt(r),null;case 19:if(qe(Xe),p=r.memoizedState,p===null)return Dt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ha(p,!1);else{if(ht!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Dl(n),_!==null){for(r.flags|=128,ha(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Ys&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304)}else{if(!c)if(n=Dl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ha(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Dt(r),null}else 2*$e()-p.renderingStartTime>Ys&&a!==1073741824&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),r):(Dt(r),null);case 22:case 23:return Rh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Dt(r),r.subtreeFlags&6&&(r.flags|=8192)):Dt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function aE(n,r){switch(Lc(r),r.tag){case 1:return qt(r.type)&&wl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ks(),qe(Wt),qe(Nt),Gc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return qc(r),null;case 13:if(qe(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));$s()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Xe),null;case 4:return Ks(),null;case 10:return zc(r.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var zl=!1,Vt=!1,lE=typeof WeakSet=="function"?WeakSet:Set,se=null;function Qs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function ph(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var tm=!1;function uE(n,r){if(Rc=Fr,n=Vf(),_c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,F=0,q=0,G=n,W=null;t:for(;;){for(var te;G!==a||d!==0&&G.nodeType!==3||(T=_+d),G!==p||c!==0&&G.nodeType!==3||(R=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(te=G.firstChild)!==null;)W=G,G=te;for(;;){if(G===n)break t;if(W===a&&++F===d&&(T=_),W===p&&++q===c&&(R=_),(te=G.nextSibling)!==null)break;G=W,W=G.parentNode}G=te}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},Fr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,nt=oe.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?ae:xn(r.type,ae),nt);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){Ze(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=tm,tm=!1,oe}function da(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ph(r,a,p)}d=d.next}while(d!==c)}}function Bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function mh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function nm(n){var r=n.alternate;r!==null&&(n.alternate=null,nm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[ta],delete r[xc],delete r[Wv],delete r[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=vl));else if(c!==4&&(n=n.child,n!==null))for(gh(n,r,a),n=n.sibling;n!==null;)gh(n,r,a),n=n.sibling}function yh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yh(n,r,a),n=n.sibling;n!==null;)yh(n,r,a),n=n.sibling}var It=null,Dn=!1;function Gr(n,r,a){for(a=a.child;a!==null;)sm(n,r,a),a=a.sibling}function sm(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Pi,a)}catch{}switch(a.tag){case 5:Vt||Qs(a,r);case 6:var c=It,d=Dn;It=null,Gr(n,r,a),It=c,Dn=d,It!==null&&(Dn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Dn?(n=It,a=a.stateNode,n.nodeType===8?Nc(n.parentNode,a):n.nodeType===1&&Nc(n,a),Cn(n)):Nc(It,a.stateNode));break;case 4:c=It,d=Dn,It=a.stateNode.containerInfo,Dn=!0,Gr(n,r,a),It=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&ph(a,r,_),d=d.next}while(d!==c)}Gr(n,r,a);break;case 1:if(!Vt&&(Qs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Gr(n,r,a);break;case 21:Gr(n,r,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Gr(n,r,a),Vt=c):Gr(n,r,a);break;default:Gr(n,r,a)}}function om(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lE),r.forEach(function(c){var d=_E.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Dn=!1;break e;case 3:It=T.stateNode.containerInfo,Dn=!0;break e;case 4:It=T.stateNode.containerInfo,Dn=!0;break e}T=T.return}if(It===null)throw Error(t(160));sm(p,_,d),It=null,Dn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)am(r,n),r=r.sibling}function am(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Gn(n),c&4){try{da(3,n,n.return),Bl(3,n)}catch(ae){Ze(n,n.return,ae)}try{da(5,n,n.return)}catch(ae){Ze(n,n.return,ae)}}break;case 1:Vn(r,n),Gn(n),c&512&&a!==null&&Qs(a,a.return);break;case 5:if(Vn(r,n),Gn(n),c&512&&a!==null&&Qs(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(ae){Ze(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Io(d,p),Do(T,_);var F=Do(T,p);for(_=0;_<R.length;_+=2){var q=R[_],G=R[_+1];q==="style"?Po(d,G):q==="dangerouslySetInnerHTML"?Co(d,G):q==="children"?xr(d,G):ue(d,q,G,F)}switch(T){case"input":So(d,p);break;case"textarea":hs(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?ir(d,!!p.multiple,te,!1):W!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[ta]=p}catch(ae){Ze(n,n.return,ae)}}break;case 6:if(Vn(r,n),Gn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){Ze(n,n.return,ae)}}break;case 3:if(Vn(r,n),Gn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(ae){Ze(n,n.return,ae)}break;case 4:Vn(r,n),Gn(n);break;case 13:Vn(r,n),Gn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Eh=$e())),c&4&&om(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(F=Vt)||q,Vn(r,n),Vt=F):Vn(r,n),Gn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!q&&(n.mode&1)!==0)for(se=n,q=n.child;q!==null;){for(G=se=q;se!==null;){switch(W=se,te=W.child,W.tag){case 0:case 11:case 14:case 15:da(4,W,W.return);break;case 1:Qs(W,W.return);var oe=W.stateNode;if(typeof oe.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(ae){Ze(c,a,ae)}}break;case 5:Qs(W,W.return);break;case 22:if(W.memoizedState!==null){cm(G);continue}}te!==null?(te.return=W,se=te):cm(G)}q=q.sibling}e:for(q=null,G=n;;){if(G.tag===5){if(q===null){q=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=G.stateNode,R=G.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=ko("display",_))}catch(ae){Ze(n,n.return,ae)}}}else if(G.tag===6){if(q===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(ae){Ze(n,n.return,ae)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;q===G&&(q=null),G=G.return}q===G&&(q=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Vn(r,n),Gn(n),c&4&&om(n);break;case 21:break;default:Vn(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var p=im(n);yh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=im(n);gh(n,T,_);break;default:throw Error(t(161))}}catch(R){Ze(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function cE(n,r,a){se=n,lm(n)}function lm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||zl;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Vt;T=zl;var F=Vt;if(zl=_,(Vt=R)&&!F)for(se=d;se!==null;)_=se,R=_.child,_.tag===22&&_.memoizedState!==null?hm(d):R!==null?(R.return=_,se=R):hm(d);for(;p!==null;)se=p,lm(p),p=p.sibling;se=d,zl=T,Vt=F}um(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):um(n)}}function um(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vt||Bl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:xn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&cp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}cp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var G=q.dehydrated;G!==null&&Cn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&mh(r)}catch(W){Ze(r,r.return,W)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function cm(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function hm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Bl(4,r)}catch(R){Ze(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Ze(r,d,R)}}var p=r.return;try{mh(r)}catch(R){Ze(r,p,R)}break;case 5:var _=r.return;try{mh(r)}catch(R){Ze(r,_,R)}}}catch(R){Ze(r,r.return,R)}if(r===n){se=null;break}var T=r.sibling;if(T!==null){T.return=r.return,se=T;break}se=r.return}}var hE=Math.ceil,$l=Te.ReactCurrentDispatcher,_h=Te.ReactCurrentOwner,yn=Te.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,on=0,Xs=$r(0),ht=0,fa=null,$i=0,Hl=0,vh=0,pa=null,Gt=null,Eh=0,Ys=1/0,vr=null,Wl=!1,wh=null,Qr=null,ql=!1,Xr=null,Kl=0,ma=0,Th=null,Gl=-1,Ql=0;function zt(){return(Ve&6)!==0?$e():Gl!==-1?Gl:Gl=$e()}function Yr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&St!==0?St&-St:Gv.transition!==null?(Ql===0&&(Ql=xi()),Ql):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:$o(n.type)),n)}function On(n,r,a,c){if(50<ma)throw ma=0,Th=null,Error(t(185));Lr(n,a,c),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(Hl|=a),ht===4&&Jr(n,St)),Qt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(Ys=$e()+500,Il&&Wr()))}function Qt(n,r){var a=n.callbackNode;ar(n,r);var c=Ni(n,n===_t?St:0);if(c===0)a!==null&&Uo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Uo(a),r===1)n.tag===0?Kv(fm.bind(null,n)):Jf(fm.bind(null,n)),$v(function(){(Ve&6)===0&&Wr()}),a=null;else{switch(br(c)){case 1:a=ki;break;case 4:a=Dr;break;case 16:a=cn;break;case 536870912:a=Qa;break;default:a=cn}a=wm(a,dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function dm(n,r){if(Gl=-1,Ql=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Ni(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Xl(n,c);else{r=c;var d=Ve;Ve|=2;var p=mm();(_t!==n||St!==r)&&(vr=null,Ys=$e()+500,Wi(n,r));do try{pE();break}catch(T){pm(n,T)}while(!0);jc(),$l.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=ht)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Ih(n,d))),r===1)throw a=fa,Wi(n,0),Jr(n,c),Qt(n,$e()),a;if(r===6)Jr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!dE(d)&&(r=Xl(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Ih(n,p))),r===1))throw a=fa,Wi(n,0),Jr(n,c),Qt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:qi(n,Gt,vr);break;case 3:if(Jr(n,c),(c&130023424)===c&&(r=Eh+500-$e(),10<r)){if(Ni(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pc(qi.bind(null,n,Gt,vr),r);break}qi(n,Gt,vr);break;case 4:if(Jr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hE(c/1960))-c,10<c){n.timeoutHandle=Pc(qi.bind(null,n,Gt,vr),c);break}qi(n,Gt,vr);break;case 5:qi(n,Gt,vr);break;default:throw Error(t(329))}}}return Qt(n,$e()),n.callbackNode===a?dm.bind(null,n):null}function Ih(n,r){var a=pa;return n.current.memoizedState.isDehydrated&&(Wi(n,r).flags|=256),n=Xl(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Sh(r)),n}function Sh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function dE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Jr(n,r){for(r&=~vh,r&=~Hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function fm(n){if((Ve&6)!==0)throw Error(t(327));Js();var r=Ni(n,0);if((r&1)===0)return Qt(n,$e()),null;var a=Xl(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Ih(n,c))}if(a===1)throw a=fa,Wi(n,0),Jr(n,r),Qt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,qi(n,Gt,vr),Qt(n,$e()),null}function Ah(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Ys=$e()+500,Il&&Wr())}}function Hi(n){Xr!==null&&Xr.tag===0&&(Ve&6)===0&&Js();var r=Ve;Ve|=1;var a=yn.transition,c=Pe;try{if(yn.transition=null,Pe=1,n)return n()}finally{Pe=c,yn.transition=a,Ve=r,(Ve&6)===0&&Wr()}}function Rh(){on=Xs.current,qe(Xs)}function Wi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Bv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Lc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&wl();break;case 3:Ks(),qe(Wt),qe(Nt),Gc();break;case 5:qc(c);break;case 4:Ks();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:zc(c.type._context);break;case 22:case 23:Rh()}a=a.return}if(_t=n,st=n=Zr(n.current,null),St=on=r,ht=0,fa=null,vh=Hl=$i=0,Gt=pa=null,ji!==null){for(r=0;r<ji.length;r++)if(a=ji[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}ji=null}return n}function pm(n,r){do{var a=st;try{if(jc(),Vl.current=bl,Ol){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ol=!1}if(Bi=0,yt=ct=Ye=null,aa=!1,la=0,_h.current=null,a===null||a.return===null){ht=1,fa=r,st=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=St,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,q=T,G=q.tag;if((q.mode&1)===0&&(G===0||G===11||G===15)){var W=q.alternate;W?(q.updateQueue=W.updateQueue,q.memoizedState=W.memoizedState,q.lanes=W.lanes):(q.updateQueue=null,q.memoizedState=null)}var te=Fp(_);if(te!==null){te.flags&=-257,jp(te,_,T,p,r),te.mode&1&&Up(p,F,r),r=te,R=F;var oe=r.updateQueue;if(oe===null){var ae=new Set;ae.add(R),r.updateQueue=ae}else oe.add(R);break e}else{if((r&1)===0){Up(p,F,r),Ch();break e}R=Error(t(426))}}else if(Ge&&T.mode&1){var nt=Fp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),jp(nt,_,T,p,r),Uc(Gs(R,T));break e}}p=R=Gs(R,T),ht!==4&&(ht=2),pa===null?pa=[p]:pa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Mp(p,R,r);up(p,M);break e;case 1:T=R;var P=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Qr===null||!Qr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var X=bp(p,T,r);up(p,X);break e}}p=p.return}while(p!==null)}ym(a)}catch(le){r=le,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function mm(){var n=$l.current;return $l.current=bl,n===null?bl:n}function Ch(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||($i&268435455)===0&&(Hl&268435455)===0||Jr(_t,St)}function Xl(n,r){var a=Ve;Ve|=2;var c=mm();(_t!==n||St!==r)&&(vr=null,Wi(n,r));do try{fE();break}catch(d){pm(n,d)}while(!0);if(jc(),Ve=a,$l.current=c,st!==null)throw Error(t(261));return _t=null,St=0,ht}function fE(){for(;st!==null;)gm(st)}function pE(){for(;st!==null&&!Ka();)gm(st)}function gm(n){var r=Em(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?ym(n):st=r,_h.current=null}function ym(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=oE(a,r,on),a!==null){st=a;return}}else{if(a=aE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function qi(n,r,a){var c=Pe,d=yn.transition;try{yn.transition=null,Pe=1,mE(n,r,a,c)}finally{yn.transition=d,Pe=c}return null}function mE(n,r,a,c){do Js();while(Xr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,St=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ql||(ql=!0,wm(cn,function(){return Js(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var _=Pe;Pe=1;var T=Ve;Ve|=4,_h.current=null,uE(n,a),am(a,n),Lv(Cc),Fr=!!Rc,Cc=Rc=null,n.current=a,cE(a),cc(),Ve=T,Pe=_,yn.transition=p}else n.current=a;if(ql&&(ql=!1,Xr=n,Kl=d),p=n.pendingLanes,p===0&&(Qr=null),Xa(a.stateNode),Qt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Wl)throw Wl=!1,n=wh,wh=null,n;return(Kl&1)!==0&&n.tag!==0&&Js(),p=n.pendingLanes,(p&1)!==0?n===Th?ma++:(ma=0,Th=n):ma=0,Wr(),null}function Js(){if(Xr!==null){var n=br(Kl),r=yn.transition,a=Pe;try{if(yn.transition=null,Pe=16>n?16:n,Xr===null)var c=!1;else{if(n=Xr,Xr=null,Kl=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var F=T[R];for(se=F;se!==null;){var q=se;switch(q.tag){case 0:case 11:case 15:da(8,q,p)}var G=q.child;if(G!==null)G.return=q,se=G;else for(;se!==null;){q=se;var W=q.sibling,te=q.return;if(nm(q),q===F){se=null;break}if(W!==null){W.return=te,se=W;break}se=te}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var nt=ae.sibling;ae.sibling=null,ae=nt}while(ae!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:da(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var P=n.current;for(se=P;se!==null;){_=se;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,se=b;else e:for(_=P;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Bl(9,T)}}catch(le){Ze(T,T.return,le)}if(T===_){se=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,se=X;break e}se=T.return}}if(Ve=d,Wr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Pi,n)}catch{}c=!0}return c}finally{Pe=a,yn.transition=r}}return!1}function _m(n,r,a){r=Gs(a,r),r=Mp(n,r,1),n=Kr(n,r,1),r=zt(),n!==null&&(Lr(n,1,r),Qt(n,r))}function Ze(n,r,a){if(n.tag===3)_m(n,n,a);else for(;r!==null;){if(r.tag===3){_m(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qr===null||!Qr.has(c))){n=Gs(a,n),n=bp(r,n,1),r=Kr(r,n,1),n=zt(),r!==null&&(Lr(r,1,n),Qt(r,n));break}}r=r.return}}function gE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=zt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(ht===4||ht===3&&(St&130023424)===St&&500>$e()-Eh?Wi(n,0):vh|=a),Qt(n,r)}function vm(n,r){r===0&&((n.mode&1)===0?r=1:(r=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var a=zt();n=gr(n,r),n!==null&&(Lr(n,r,a),Qt(n,a))}function yE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),vm(n,a)}function _E(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),vm(n,a)}var Em;Em=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,sE(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ge&&(r.flags&1048576)!==0&&Zf(r,Al,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;jl(n,r),n=r.pendingProps;var d=js(r,Nt.current);qs(r,a),d=Yc(null,r,c,n,d,a);var p=Jc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(c)?(p=!0,Tl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hc(r),d.updater=Ul,r.stateNode=d,d._reactInternals=r,ih(r,c,n,a),r=lh(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&Oc(r),jt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(jl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=EE(c),n=xn(c,n),d){case 0:r=ah(null,r,c,n,a);break e;case 1:r=qp(null,r,c,n,a);break e;case 11:r=zp(null,r,c,n,a);break e;case 14:r=Bp(null,r,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),ah(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),qp(n,r,c,d,a);case 3:e:{if(Kp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,lp(n,r),xl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Gs(Error(t(423)),r),r=Gp(n,r,c,a,d);break e}else if(c!==d){d=Gs(Error(t(424)),r),r=Gp(n,r,c,a,d);break e}else for(sn=Br(r.stateNode.containerInfo.firstChild),rn=r,Ge=!0,Nn=null,a=op(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),c===d){r=_r(n,r,a);break e}jt(n,r,c,a)}r=r.child}return r;case 5:return hp(r),n===null&&bc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,kc(c,d)?_=null:p!==null&&kc(c,p)&&(r.flags|=32),Wp(n,r),jt(n,r,_,a),r.child;case 6:return n===null&&bc(r),null;case 13:return Qp(n,r,a);case 4:return Wc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Hs(r,null,c,a):jt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),zp(n,r,c,d,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,He(kl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!Wt.current){r=_r(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=yr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?R.next=R:(R.next=q.next,q.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Bc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Bc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}jt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,qs(r,a),d=mn(d),c=c(d),r.flags|=1,jt(n,r,c,a),r.child;case 14:return c=r.type,d=xn(c,r.pendingProps),d=xn(c.type,d),Bp(n,r,c,d,a);case 15:return $p(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),jl(n,r),r.tag=1,qt(c)?(n=!0,Tl(r)):n=!1,qs(r,a),Op(r,c,d),ih(r,c,d,a),lh(null,r,c,!0,n,a);case 19:return Yp(n,r,a);case 22:return Hp(n,r,a)}throw Error(t(156,r.tag))};function wm(n,r){return vs(n,r)}function vE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new vE(n,r,a,c)}function kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function EE(n){if(typeof n=="function")return kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===kt)return 14}return 2}function Zr(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Yl(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")kh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Ki(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=_n(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=_n(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=_n(19,a,r,d),n.elementType=et,n.lanes=p,n;case je:return Jl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case x:_=9;break e;case V:_=11;break e;case kt:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ki(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function Jl(n,r,a,c){return n=_n(22,n,c,r),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Ph(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Nh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function wE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Or(0),this.expirationTimes=Or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function xh(n,r,a,c,d,p,_,T,R){return n=new wE(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(p),n}function TE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Tm(n){if(!n)return Hr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return Xf(n,a,r)}return r}function Im(n,r,a,c,d,p,_,T,R){return n=xh(a,c,!0,n,d,p,_,T,R),n.context=Tm(null),a=n.current,c=zt(),d=Yr(a),p=yr(c,d),p.callback=r??null,Kr(a,p,d),n.current.lanes=d,Lr(n,d,c),Qt(n,c),n}function Zl(n,r,a,c){var d=r.current,p=zt(),_=Yr(d);return a=Tm(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Kr(d,r,_),n!==null&&(On(n,d,_,p),Nl(n,d,_)),_}function eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Dh(n,r){Sm(n,r),(n=n.alternate)&&Sm(n,r)}function IE(){return null}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vh(n){this._internalRoot=n}tu.prototype.render=Vh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Zl(n,r,null,null)},tu.prototype.unmount=Vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Hi(function(){Zl(null,n,null,null)}),r[dr]=null}};function tu(n){this._internalRoot=n}tu.prototype.unstable_scheduleHydration=function(n){if(n){var r=tl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,n),a===0&&il(n)}};function Oh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function SE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=eu(_);p.call(F)}}var _=Im(r,c,n,0,null,!1,!1,"",Rm);return n._reactRootContainer=_,n[dr]=_.current,Zo(n.nodeType===8?n.parentNode:n),Hi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=eu(R);T.call(F)}}var R=xh(n,0,!1,null,null,!1,!1,"",Rm);return n._reactRootContainer=R,n[dr]=R.current,Zo(n.nodeType===8?n.parentNode:n),Hi(function(){Zl(r,R,a,c)}),R}function ru(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=eu(_);T.call(R)}}Zl(r,_,n,d)}else _=SE(a,r,n,d,c);return eu(_)}Za=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vr(r.pendingLanes);a!==0&&(Mr(r,a|1),Qt(r,$e()),(Ve&6)===0&&(Ys=$e()+500,Wr()))}break;case 13:Hi(function(){var c=gr(n,1);if(c!==null){var d=zt();On(c,n,1,d)}}),Dh(n,1)}},Ts=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=zt();On(r,n,134217728,a)}Dh(n,134217728)}},el=function(n){if(n.tag===13){var r=Yr(n),a=gr(n,r);if(a!==null){var c=zt();On(a,n,r,c)}Dh(n,r)}},tl=function(){return Pe},nl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},fs=function(n,r,a){switch(r){case"input":if(So(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=El(c);if(!d)throw Error(t(90));as(c),So(c,d)}}}break;case"textarea":hs(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Si=Ah,Oo=Hi;var AE={usingClientEntryPoint:!1,Events:[na,Us,El,Fn,Vo,Ah]},ga={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bo(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Pi=iu.inject(RE),Zt=iu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(r))throw Error(t(200));return TE(n,r,null,a)},Xt.createRoot=function(n,r){if(!Oh(n))throw Error(t(299));var a=!1,c="",d=Am;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=xh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,Zo(n.nodeType===8?n.parentNode:n),new Vh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=bo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Hi(n)},Xt.hydrate=function(n,r,a){if(!nu(r))throw Error(t(200));return ru(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Oh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Am;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Im(r,null,n,1,a??null,d,!1,p,_),n[dr]=r.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new tu(r)},Xt.render=function(n,r,a){if(!nu(r))throw Error(t(200));return ru(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!nu(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){ru(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Ah,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!nu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ru(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Om;function OE(){if(Om)return bh.exports;Om=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),bh.exports=VE(),bh.exports}var Lm;function LE(){if(Lm)return su;Lm=1;var i=OE();return su.createRoot=i.createRoot,su.hydrateRoot=i.hydrateRoot,su}var ME=LE();const bE=()=>{};var Mm={};/**
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
 */const ay=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},UE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let L=(m&15)<<2|v>>6,U=v&63;y||(U=64,h||(L=64)),s.push(t[w],t[C],t[L],t[U])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ay(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):UE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||C==null)throw new FE;const L=u<<2|m>>4;if(s.push(L),v!==64){const U=m<<4&240|v>>2;if(s.push(U),C!==64){const z=v<<6&192|C;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jE=function(i){const e=ay(i);return ly.encodeByteArray(e,!0)},Iu=function(i){return jE(i).replace(/\./g,"")},uy=function(i){try{return ly.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BE=()=>zE().__FIREBASE_DEFAULTS__,$E=()=>{if(typeof process>"u"||typeof Mm>"u")return;const i=Mm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},HE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&uy(i[1]);return e&&JSON.parse(e)},Bu=()=>{try{return bE()||BE()||$E()||HE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},cy=i=>{var e,t;return(t=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},WE=i=>{const e=cy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hy=()=>{var i;return(i=Bu())===null||i===void 0?void 0:i.config},dy=i=>{var e;return(e=Bu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class qE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function KE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Iu(JSON.stringify(t)),Iu(JSON.stringify(h)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function QE(){var i;const e=(i=Bu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function JE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZE(){const i=bt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ew(){return!QE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tw(){try{return typeof indexedDB=="object"}catch{return!1}}function nw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const rw="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=rw,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?iw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Pr(o,m,s)}}function iw(i,e){return i.replace(sw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const sw=/\{\$([^}]+)}/g;function ow(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(bm(u)&&bm(h)){if(!Zi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function bm(i){return i!==null&&typeof i=="object"}/**
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
 */function La(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function aw(i,e){const t=new lw(i,e);return t.subscribe.bind(t)}class lw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");uw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=jh),o.error===void 0&&(o.error=jh),o.complete===void 0&&(o.complete=jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function jh(){}/**
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
 */function Bt(i){return i&&i._delegate?i._delegate:i}class es{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class cw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dw(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hw(i){return i===Gi?void 0:i}function dw(i){return i.instantiationMode==="EAGER"}/**
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
 */class fw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const pw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},mw=Ce.INFO,gw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},yw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=gw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=mw,this._logHandler=yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const _w=(i,e)=>e.some(t=>i instanceof t);let Um,Fm;function vw(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ew(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fy=new WeakMap,Yh=new WeakMap,py=new WeakMap,zh=new WeakMap,Pd=new WeakMap;function ww(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fy.set(t,i)}).catch(()=>{}),Pd.set(e,i),e}function Tw(i){if(Yh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Yh.set(i,e)}let Jh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Yh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||py.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Iw(i){Jh=i(Jh)}function Sw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Bh(this),e,...t);return py.set(s,e.sort?e.sort():[e]),oi(s)}:Ew().includes(i)?function(...e){return i.apply(Bh(this),e),oi(fy.get(this))}:function(...e){return oi(i.apply(Bh(this),e))}}function Aw(i){return typeof i=="function"?Sw(i):(i instanceof IDBTransaction&&Tw(i),_w(i,vw())?new Proxy(i,Jh):i)}function oi(i){if(i instanceof IDBRequest)return ww(i);if(zh.has(i))return zh.get(i);const e=Aw(i);return e!==i&&(zh.set(i,e),Pd.set(e,i)),e}const Bh=i=>Pd.get(i);function Rw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(oi(h.result),y.oldVersion,y.newVersion,oi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Cw=["get","getKey","getAll","getAllKeys","count"],kw=["put","add","delete","clear"],$h=new Map;function jm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=kw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Cw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return $h.set(e,u),u}Iw(i=>({...i,get:(e,t,s)=>jm(e,t)||i.get(e,t,s),has:(e,t)=>!!jm(e,t)||i.has(e,t)}));/**
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
 */class Pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Nw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Nw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zh="@firebase/app",zm="0.11.3";/**
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
 */const Ar=new kd("@firebase/app"),xw="@firebase/app-compat",Dw="@firebase/analytics-compat",Vw="@firebase/analytics",Ow="@firebase/app-check-compat",Lw="@firebase/app-check",Mw="@firebase/auth",bw="@firebase/auth-compat",Uw="@firebase/database",Fw="@firebase/data-connect",jw="@firebase/database-compat",zw="@firebase/functions",Bw="@firebase/functions-compat",$w="@firebase/installations",Hw="@firebase/installations-compat",Ww="@firebase/messaging",qw="@firebase/messaging-compat",Kw="@firebase/performance",Gw="@firebase/performance-compat",Qw="@firebase/remote-config",Xw="@firebase/remote-config-compat",Yw="@firebase/storage",Jw="@firebase/storage-compat",Zw="@firebase/firestore",e0="@firebase/vertexai",t0="@firebase/firestore-compat",n0="firebase",r0="11.5.0";/**
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
 */const ed="[DEFAULT]",i0={[Zh]:"fire-core",[xw]:"fire-core-compat",[Vw]:"fire-analytics",[Dw]:"fire-analytics-compat",[Lw]:"fire-app-check",[Ow]:"fire-app-check-compat",[Mw]:"fire-auth",[bw]:"fire-auth-compat",[Uw]:"fire-rtdb",[Fw]:"fire-data-connect",[jw]:"fire-rtdb-compat",[zw]:"fire-fn",[Bw]:"fire-fn-compat",[$w]:"fire-iid",[Hw]:"fire-iid-compat",[Ww]:"fire-fcm",[qw]:"fire-fcm-compat",[Kw]:"fire-perf",[Gw]:"fire-perf-compat",[Qw]:"fire-rc",[Xw]:"fire-rc-compat",[Yw]:"fire-gcs",[Jw]:"fire-gcs-compat",[Zw]:"fire-fst",[t0]:"fire-fst-compat",[e0]:"fire-vertex","fire-js":"fire-js",[n0]:"fire-js-all"};/**
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
 */const Su=new Map,s0=new Map,td=new Map;function Bm(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ao(i){const e=i.name;if(td.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,i);for(const t of Su.values())Bm(t,i);for(const t of s0.values())Bm(t,i);return!0}function Nd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Ln(i){return i==null?!1:i.settings!==void 0}/**
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
 */const o0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new Oa("app","Firebase",o0);/**
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
 */class a0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=r0;function my(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ed,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=hy()),!t)throw ai.create("no-options");const u=Su.get(o);if(u){if(Zi(t,u.options)&&Zi(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new fw(o);for(const y of td.values())h.addComponent(y);const m=new a0(t,s,h);return Su.set(o,m),m}function gy(i=ed){const e=Su.get(i);if(!e&&i===ed&&hy())return my();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=i0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(m.join(" "));return}ao(new es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const l0="firebase-heartbeat-database",u0=1,Ra="firebase-heartbeat-store";let Hh=null;function yy(){return Hh||(Hh=Rw(l0,u0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ra)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),Hh}async function c0(i){try{const t=(await yy()).transaction(Ra),s=await t.objectStore(Ra).get(_y(i));return await t.done,s}catch(e){if(e instanceof Pr)Ar.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function $m(i,e){try{const s=(await yy()).transaction(Ra,"readwrite");await s.objectStore(Ra).put(e,_y(i)),await s.done}catch(t){if(t instanceof Pr)Ar.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(s.message)}}}function _y(i){return`${i.name}!${i.options.appId}`}/**
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
 */const h0=1024,d0=30;class f0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new m0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Hm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>d0){const h=g0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hm(),{heartbeatsToSend:s,unsentEntries:o}=p0(this._heartbeatsCache.heartbeats),u=Iu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ar.warn(t),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function p0(i,e=h0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Wm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Wm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class m0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tw()?nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await c0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return $m(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return $m(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Wm(i){return Iu(JSON.stringify({version:2,heartbeats:i})).length}function g0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function y0(i){ao(new es("platform-logger",e=>new Pw(e),"PRIVATE")),ao(new es("heartbeat",e=>new f0(e),"PRIVATE")),li(Zh,zm,i),li(Zh,zm,"esm2017"),li("fire-js","")}y0("");function xd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _0=vy,Ey=new Oa("auth","Firebase",vy());/**
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
 */const Au=new kd("@firebase/auth");function v0(i,...e){Au.logLevel<=Ce.WARN&&Au.warn(`Auth (${yo}): ${i}`,...e)}function fu(i,...e){Au.logLevel<=Ce.ERROR&&Au.error(`Auth (${yo}): ${i}`,...e)}/**
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
 */function Zn(i,...e){throw Vd(i,...e)}function Mn(i,...e){return Vd(i,...e)}function Dd(i,e,t){const s=Object.assign(Object.assign({},_0()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function Ji(i){return Dd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function E0(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zn(i,"argument-error"),Dd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ey.create(i,...e)}function _e(i,e,...t){if(!i)throw Vd(e,...t)}function Tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw fu(e),new Error(e)}function Rr(i,e){i||Tr(e)}/**
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
 */function nd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function w0(){return qm()==="http:"||qm()==="https:"}function qm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function T0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w0()||YE()||"connection"in navigator)?navigator.onLine:!0}function I0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ma{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=GE()||JE()}get(){return T0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Od(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const S0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const A0=new Ma(3e4,6e4);function Ld(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function _o(i,e,t,s,o={}){return Ty(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=La(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return XE()||(v.referrerPolicy="no-referrer"),wy.fetch()(Iy(i,i.config.apiHost,t,m),v)})}async function Ty(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},S0),e);try{const o=new C0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw ou(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw ou(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw ou(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw ou(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Dd(i,w,v);Zn(i,w)}}catch(o){if(o instanceof Pr)throw o;Zn(i,"network-request-failed",{message:String(o)})}}async function R0(i,e,t,s,o={}){const u=await _o(i,e,t,s,o);return"mfaPendingCredential"in u&&Zn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Iy(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Od(i.config,o):`${i.config.apiScheme}://${o}`}class C0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Mn(this.auth,"network-request-failed")),A0.get())})}}function ou(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Mn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function k0(i,e){return _o(i,"POST","/v1/accounts:delete",e)}async function Sy(i,e){return _o(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function wa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(i,e=!1){const t=Bt(i),s=await t.getIdToken(e),o=Md(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:wa(Wh(o.auth_time)),issuedAtTime:wa(Wh(o.iat)),expirationTime:wa(Wh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Wh(i){return Number(i)*1e3}function Md(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const o=uy(t);return o?JSON.parse(o):(fu("Failed to decode base64 JWT payload"),null)}catch(o){return fu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Km(i){const e=Md(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ca(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&N0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function N0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class x0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ru(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ca(i,Sy(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ay(u.providerUserInfo):[],m=V0(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new rd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function D0(i){const e=Bt(i);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ay(i){return i.map(e=>{var{providerId:t}=e,s=xd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function O0(i,e){const t=await Ty(i,{},async()=>{const s=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=Iy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",wy.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function L0(i,e){return _o(i,"POST","/v2/accounts:revokeToken",Ld(i,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Km(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await O0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function ti(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new rd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return P0(this,e)}reload(){return D0(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ru(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await Ca(this,k0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,L=(o=t.email)!==null&&o!==void 0?o:void 0,U=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,ee=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ie=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ue,emailVerified:Te,isAnonymous:Fe,providerData:ve,stsTokenManager:N}=t;_e(ue&&N,e,"internal-error");const I=ro.fromJSON(this.name,N);_e(typeof ue=="string",e,"internal-error"),ti(C,e.name),ti(L,e.name),_e(typeof Te=="boolean",e,"internal-error"),_e(typeof Fe=="boolean",e,"internal-error"),ti(U,e.name),ti(z,e.name),ti(Q,e.name),ti(H,e.name),ti(ee,e.name),ti(ie,e.name);const A=new Ir({uid:ue,auth:e,email:L,emailVerified:Te,displayName:C,isAnonymous:Fe,photoURL:z,phoneNumber:U,tenantId:Q,stsTokenManager:I,createdAt:ee,lastLoginAt:ie});return ve&&Array.isArray(ve)&&(A.providerData=ve.map(k=>Object.assign({},k))),H&&(A._redirectEventId=H),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new Ir({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ru(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ay(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ro;m.updateFromIdToken(s);const y=new Ir({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const Gm=new Map;function Sr(i){Rr(i instanceof Function,"Expected a class definition");let e=Gm.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gm.set(i,e),e)}/**
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
 */class Ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ry.type="NONE";const Qm=Ry;/**
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
 */function pu(i,e,t){return`firebase:${i}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=pu(this.userKey,o.apiKey,u),this.fullPersistenceKey=pu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(Sr(Qm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Sr(Qm);const h=pu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const C=Ir._fromJSON(e,w);v!==u&&(m=C),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new io(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new io(u,e,s))}}/**
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
 */function Xm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ny(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dy(e))return"Blackberry";if(Vy(e))return"Webos";if(ky(e))return"Safari";if((e.includes("chrome/")||Py(e))&&!e.includes("edge/"))return"Chrome";if(xy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cy(i=bt()){return/firefox\//i.test(i)}function ky(i=bt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Py(i=bt()){return/crios\//i.test(i)}function Ny(i=bt()){return/iemobile/i.test(i)}function xy(i=bt()){return/android/i.test(i)}function Dy(i=bt()){return/blackberry/i.test(i)}function Vy(i=bt()){return/webos/i.test(i)}function bd(i=bt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function M0(i=bt()){var e;return bd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b0(){return ZE()&&document.documentMode===10}function Oy(i=bt()){return bd(i)||xy(i)||Vy(i)||Dy(i)||/windows phone/i.test(i)||Ny(i)}/**
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
 */function Ly(i,e=[]){let t;switch(i){case"Browser":t=Xm(bt());break;case"Worker":t=`${Xm(bt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yo}/${s}`}/**
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
 */class U0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function F0(i,e={}){return _o(i,"GET","/v2/passwordPolicy",Ld(i,e))}/**
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
 */const j0=6;class z0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:j0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class B0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new U0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sy(this,{idToken:e}),s=await Ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ln(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(Ji(this));const t=e?Bt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F0(this),t=new z0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await L0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&v0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $u(i){return Bt(i)}class Ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=aw(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $0(i){Ud=i}function H0(i){return Ud.loadJS(i)}function W0(){return Ud.gapiScript}function q0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function K0(i,e){const t=Nd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Zi(u,e??{}))return o;Zn(o,"already-initialized")}return t.initialize({options:e})}function G0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Q0(i,e,t){const s=$u(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=My(e),{host:h,port:m}=X0(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(Zi(v,s.config.emulator)&&Zi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Y0()}function My(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function X0(i){const e=My(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Jm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Jm(h)}}}function Jm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Y0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class by{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
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
 */async function so(i,e){return R0(i,"POST","/v1/accounts:signInWithIdp",Ld(i,e))}/**
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
 */const J0="http://localhost";class ts extends by{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=xd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ts(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return so(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,so(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,so(e,t)}buildRequest(){const e={requestUri:J0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=La(t)}return e}}/**
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
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ni extends ba{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
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
 */class wr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return wr.credential(t,s)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
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
 */class ri extends ba{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
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
 */class ii extends ba{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
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
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ir._fromIdTokenResponse(e,s,o),h=Zm(s);return new lo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Zm(s);return new lo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Zm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Cu extends Pr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Cu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Cu(e,t,s,o)}}function Uy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Cu._fromErrorAndOperation(i,u,e,s):u})}async function Z0(i,e,t=!1){const s=await Ca(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return lo._forOperation(i,"link",s)}/**
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
 */async function eT(i,e,t=!1){const{auth:s}=i;if(Ln(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const u=await Ca(i,Uy(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=Md(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),lo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Zn(s,"user-mismatch"),u}}/**
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
 */async function tT(i,e,t=!1){if(Ln(i.app))return Promise.reject(Ji(i));const s="signIn",o=await Uy(i,s,e),u=await lo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function nT(i,e,t,s){return Bt(i).onIdTokenChanged(e,t,s)}function rT(i,e,t){return Bt(i).beforeAuthStateChanged(e,t)}function iT(i){return Bt(i).signOut()}const ku="__sak";/**
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
 */class Fy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sT=1e3,oT=10;class jy extends Fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);b0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,oT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jy.type="LOCAL";const aT=jy;/**
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
 */class zy extends Fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zy.type="SESSION";const By=zy;/**
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
 */function lT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Hu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await lT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
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
 */function jd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class uT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=jd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const L=C;if(L.data.eventId===v)switch(L.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(L.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Xn(){return window}function cT(i){Xn().location.href=i}/**
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
 */function $y(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function hT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function fT(){return $y()?self:null}/**
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
 */const Hy="firebaseLocalStorageDb",pT=1,Pu="firebaseLocalStorage",Wy="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wu(i,e){return i.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function mT(){const i=indexedDB.deleteDatabase(Hy);return new Ua(i).toPromise()}function id(){const i=indexedDB.open(Hy,pT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Pu,{keyPath:Wy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Pu)?e(s):(s.close(),await mT(),e(await id()))})})}async function eg(i,e,t){const s=Wu(i,!0).put({[Wy]:e,value:t});return new Ua(s).toPromise()}async function gT(i,e){const t=Wu(i,!1).get(e),s=await new Ua(t).toPromise();return s===void 0?null:s.value}function tg(i,e){const t=Wu(i,!0).delete(e);return new Ua(t).toPromise()}const yT=800,_T=3;class qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>_T)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(fT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hT(),!this.activeServiceWorker)return;this.sender=new uT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await eg(e,ku,"1"),await tg(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>eg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>gT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Wu(o,!1).getAll();return new Ua(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qy.type="LOCAL";const vT=qy;new Ma(3e4,6e4);/**
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
 */function Ky(i,e){return e?Sr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class zd extends by{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,t){return so(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ET(i){return tT(i.auth,new zd(i),i.bypassAuthState)}function wT(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),eT(t,new zd(i),i.bypassAuthState)}async function TT(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),Z0(t,new zd(i),i.bypassAuthState)}/**
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
 */class Gy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ET;case"linkViaPopup":case"linkViaRedirect":return TT;case"reauthViaPopup":case"reauthViaRedirect":return wT;default:Zn(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IT=new Ma(2e3,1e4);async function ST(i,e,t){if(Ln(i.app))return Promise.reject(Mn(i,"operation-not-supported-in-this-environment"));const s=$u(i);E0(i,e,Fd);const o=Ky(s,t);return new Qi(s,"signInViaPopup",e,o).executeNotNull()}class Qi extends Gy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IT.get())};e()}}Qi.currentPopupAction=null;/**
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
 */const AT="pendingRedirect",mu=new Map;class RT extends Gy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const s=await CT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CT(i,e){const t=NT(e),s=PT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function kT(i,e){mu.set(i._key(),e)}function PT(i){return Sr(i._redirectPersistence)}function NT(i){return pu(AT,i.config.apiKey,i.name)}async function xT(i,e,t=!1){if(Ln(i.app))return Promise.reject(Ji(i));const s=$u(i),o=Ky(s,e),h=await new RT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const DT=10*60*1e3;class VT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Qy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Mn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Qy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qy(i);default:return!1}}/**
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
 */async function LT(i,e={}){return _o(i,"GET","/v1/projects",e)}/**
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
 */const MT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bT=/^https?/;async function UT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await LT(i);for(const t of e)try{if(FT(t))return}catch{}Zn(i,"unauthorized-domain")}function FT(i){const e=nd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!bT.test(t))return!1;if(MT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const jT=new Ma(3e4,6e4);function rg(){const i=Xn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function zT(i){return new Promise((e,t)=>{var s,o,u;function h(){rg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rg(),t(Mn(i,"network-request-failed"))},timeout:jT.get()})}if(!((o=(s=Xn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Xn().gapi)===null||u===void 0)&&u.load)h();else{const m=q0("iframefcb");return Xn()[m]=()=>{gapi.load?h():t(Mn(i,"network-request-failed"))},H0(`${W0()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw gu=null,e})}let gu=null;function BT(i){return gu=gu||zT(i),gu}/**
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
 */const $T=new Ma(5e3,15e3),HT="__/auth/iframe",WT="emulator/auth/iframe",qT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GT(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Od(e,WT):`https://${i.config.authDomain}/${HT}`,s={apiKey:e.apiKey,appName:i.name,v:yo},o=KT.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${La(s).slice(1)}`}async function QT(i){const e=await BT(i),t=Xn().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:GT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mn(i,"network-request-failed"),m=Xn().setTimeout(()=>{u(h)},$T.get());function y(){Xn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const XT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YT=500,JT=600,ZT="_blank",eI="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tI(i,e,t,s=YT,o=JT){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},XT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=bt().toLowerCase();t&&(m=Py(v)?ZT:t),Cy(v)&&(e=e||eI,y.scrollbars="yes");const w=Object.entries(y).reduce((L,[U,z])=>`${L}${U}=${z},`,"");if(M0(v)&&m!=="_self")return nI(e||"",m),new ig(null);const C=window.open(e||"",m,w);_e(C,i,"popup-blocked");try{C.focus()}catch{}return new ig(C)}function nI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const rI="__/auth/handler",iI="emulator/auth/handler",sI=encodeURIComponent("fac");async function sg(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:yo,eventId:o};if(e instanceof Fd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",ow(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof ba){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${sI}=${encodeURIComponent(y)}`:"";return`${oI(i)}?${La(m).slice(1)}${v}`}function oI({config:i}){return i.emulator?Od(i,iI):`https://${i.authDomain}/${rI}`}/**
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
 */const qh="webStorageSupport";class aI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=By,this._completeRedirectFn=xT,this._overrideRedirectResult=kT}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await sg(e,t,s,nd(),o);return tI(e,h,jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await sg(e,t,s,nd(),o);return cT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await QT(e),s=new VT(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qh,{type:qh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[qh];h!==void 0&&t(!!h),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oy()||ky()||bd()}}const lI=aI;var og="@firebase/auth",ag="1.9.1";/**
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
 */class uI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hI(i){ao(new es("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ly(i)},v=new B0(s,o,u,y);return G0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ao(new es("auth-internal",e=>{const t=$u(e.getProvider("auth").getImmediate());return(s=>new uI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(og,ag,cI(i)),li(og,ag,"esm2017")}/**
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
 */const dI=5*60,fI=dy("authIdTokenMaxAge")||dI;let lg=null;const pI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>fI)return;const o=t==null?void 0:t.token;lg!==o&&(lg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function mI(i=gy()){const e=Nd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=K0(i,{popupRedirectResolver:lI,persistence:[vT,aT,By]}),s=dy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=pI(u.toString());rT(t,h,()=>h(t.currentUser)),nT(t,m=>h(m))}}const o=cy("auth");return o&&Q0(t,`http://${o}`),t}function gI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}$0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Mn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",gI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hI("Browser");var yI="firebase",_I="11.5.0";/**
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
 */li(yI,_I,"app");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,Xy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,x,V){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[x].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var x=0;16>x;++x)k[x]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(x=0;16>x;++x)k[x]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],x=N.g[2];var V=N.g[3],S=I+(V^A&(x^V))+k[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=V+(x^I&(A^x))+k[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=x+(A^V&(I^A))+k[2]+606105819&4294967295,x=V+(S<<17&4294967295|S>>>15),S=A+(I^x&(V^I))+k[3]+3250441966&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(V^A&(x^V))+k[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(x^I&(A^x))+k[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=x+(A^V&(I^A))+k[6]+2821735955&4294967295,x=V+(S<<17&4294967295|S>>>15),S=A+(I^x&(V^I))+k[7]+4249261313&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(V^A&(x^V))+k[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(x^I&(A^x))+k[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=x+(A^V&(I^A))+k[10]+4294925233&4294967295,x=V+(S<<17&4294967295|S>>>15),S=A+(I^x&(V^I))+k[11]+2304563134&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(V^A&(x^V))+k[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(x^I&(A^x))+k[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=x+(A^V&(I^A))+k[14]+2792965006&4294967295,x=V+(S<<17&4294967295|S>>>15),S=A+(I^x&(V^I))+k[15]+1236535329&4294967295,A=x+(S<<22&4294967295|S>>>10),S=I+(x^V&(A^x))+k[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^x&(I^A))+k[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(V^I))+k[11]+643717713&4294967295,x=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(x^V))+k[0]+3921069994&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^V&(A^x))+k[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^x&(I^A))+k[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(V^I))+k[15]+3634488961&4294967295,x=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(x^V))+k[4]+3889429448&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^V&(A^x))+k[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^x&(I^A))+k[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(V^I))+k[3]+4107603335&4294967295,x=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(x^V))+k[8]+1163531501&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(x^V&(A^x))+k[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^x&(I^A))+k[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=x+(I^A&(V^I))+k[7]+1735328473&4294967295,x=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(x^V))+k[12]+2368359562&4294967295,A=x+(S<<20&4294967295|S>>>12),S=I+(A^x^V)+k[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^x)+k[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=x+(V^I^A)+k[11]+1839030562&4294967295,x=V+(S<<16&4294967295|S>>>16),S=A+(x^V^I)+k[14]+4259657740&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^V)+k[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^x)+k[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=x+(V^I^A)+k[7]+4139469664&4294967295,x=V+(S<<16&4294967295|S>>>16),S=A+(x^V^I)+k[10]+3200236656&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^V)+k[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^x)+k[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=x+(V^I^A)+k[3]+3572445317&4294967295,x=V+(S<<16&4294967295|S>>>16),S=A+(x^V^I)+k[6]+76029189&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(A^x^V)+k[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^x)+k[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=x+(V^I^A)+k[15]+530742520&4294967295,x=V+(S<<16&4294967295|S>>>16),S=A+(x^V^I)+k[2]+3299628645&4294967295,A=x+(S<<23&4294967295|S>>>9),S=I+(x^(A|~V))+k[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~x))+k[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=x+(I^(V|~A))+k[14]+2878612391&4294967295,x=V+(S<<15&4294967295|S>>>17),S=A+(V^(x|~I))+k[5]+4237533241&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~V))+k[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~x))+k[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=x+(I^(V|~A))+k[10]+4293915773&4294967295,x=V+(S<<15&4294967295|S>>>17),S=A+(V^(x|~I))+k[1]+2240044497&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~V))+k[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~x))+k[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=x+(I^(V|~A))+k[6]+2734768916&4294967295,x=V+(S<<15&4294967295|S>>>17),S=A+(V^(x|~I))+k[13]+1309151649&4294967295,A=x+(S<<21&4294967295|S>>>11),S=I+(x^(A|~V))+k[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~x))+k[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=x+(I^(V|~A))+k[2]+718787259&4294967295,x=V+(S<<15&4294967295|S>>>17),S=A+(V^(x|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,x=this.h,V=0;V<I;){if(x==0)for(;V<=A;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<I;)if(k[x++]=N.charCodeAt(V++),x==this.blockSize){o(this,k),x=0;break}}else for(;V<I;)if(k[x++]=N[V++],x==this.blockSize){o(this,k),x=0;break}}this.h=x,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,x=N.length-1;0<=x;x--){var V=N[x]|0;k&&V==I||(A[x]=V,k=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return C;if(0>N)return H(v(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return H(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),k=C,x=0;x<N.length;x+=8){var V=Math.min(8,N.length-x),S=parseInt(N.substring(x,x+V),I);8>V?(V=v(Math.pow(I,V)),k=k.j(V).add(v(S))):(k=k.j(A),k=k.add(v(S)))}return k}var C=y(0),L=y(1),U=y(16777216);i=h.prototype,i.m=function(){if(Q(this))return-H(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(z(this))return"0";if(Q(this))return"-"+H(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,k="";;){var x=Te(A,I).g;A=ee(A,x.j(I));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=x,z(A))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function z(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Q(N){return N.h==-1}i.l=function(N){return N=ee(this,N),Q(N)?-1:z(N)?0:1};function H(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(L)}i.abs=function(){return Q(this)?H(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,x=0;x<=I;x++){var V=k+(this.i(x)&65535)+(N.i(x)&65535),S=(V>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);k=S>>>16,V&=65535,S&=65535,A[x]=S<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ee(N,I){return N.add(H(I))}i.j=function(N){if(z(this)||z(N))return C;if(Q(this))return Q(N)?H(this).j(H(N)):H(H(this).j(N));if(Q(N))return H(this.j(H(N)));if(0>this.l(U)&&0>N.l(U))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var x=0;x<N.g.length;x++){var V=this.i(k)>>>16,S=this.i(k)&65535,et=N.i(x)>>>16,kt=N.i(x)&65535;A[2*k+2*x]+=S*kt,ie(A,2*k+2*x),A[2*k+2*x+1]+=V*kt,ie(A,2*k+2*x+1),A[2*k+2*x+1]+=S*et,ie(A,2*k+2*x+1),A[2*k+2*x+2]+=V*et,ie(A,2*k+2*x+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function ie(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ue(N,I){this.g=N,this.h=I}function Te(N,I){if(z(I))throw Error("division by zero");if(z(N))return new ue(C,C);if(Q(N))return I=Te(H(N),I),new ue(H(I.g),H(I.h));if(Q(I))return I=Te(N,H(I)),new ue(H(I.g),I.h);if(30<N.g.length){if(Q(N)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var A=L,k=I;0>=k.l(N);)A=Fe(A),k=Fe(k);var x=ve(A,1),V=ve(k,1);for(k=ve(k,2),A=ve(A,2);!z(k);){var S=V.add(k);0>=S.l(N)&&(x=x.add(A),V=S),k=ve(k,1),A=ve(A,1)}return I=ee(N,x.j(I)),new ue(x,I)}for(x=C;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=v(A),S=V.j(I);Q(S)||0<S.l(N);)A-=k,V=v(A),S=V.j(I);z(V)&&(V=L),x=x.add(V),N=ee(N,S)}return new ue(x,N)}i.A=function(N){return Te(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Fe(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function ve(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,x=[],V=0;V<k;V++)x[V]=0<I?N.i(V+A)>>>I|N.i(V+A+1)<<32-I:N.i(V+A);return new h(x,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Xy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,ui=h}).apply(typeof ug<"u"?ug:typeof self<"u"?self:typeof window<"u"?window:{});var au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yy,_a,Jy,yu,sd,Zy,e_,t_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof au=="object"&&au];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in g))break e;g=g[O]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,O={next:function(){if(!E&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function C(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function L(l,f,g){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,L.apply(null,arguments)}function U(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function z(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,O,j){for(var Y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Y[Ue-2]=arguments[Ue];return f.prototype[O].apply(E,Y)}}function Q(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function H(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const O=l.length||0,j=E.length||0;l.length=O+j;for(let Y=0;Y<j;Y++)l[O+Y]=E[Y]}else l.push(E)}}class ee{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ie(l){return/^[\s\xa0]*$/.test(l)}function ue(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var Fe=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function ve(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let g,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(g in E)l[g]=E[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function x(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function S(){var l=de;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=kt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new ee(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let je,J=!1,de=new et,ne=()=>{const l=m.Promise.resolve(void 0);je=()=>{l.then(D)}};var D=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){V(g)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ae(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Fe){e:{try{Te(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}z(Ae,ce);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,g,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=O,this.key=++Me,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,f,g,E,O){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var Y=Nr(l,f,E,O);return-1<Y?(f=l[Y],g||(f.fa=!1)):(f=new Be(f,this.src,j,!!E,O),f.fa=g,l.push(f)),f};function as(l,f){var g=f.type;if(g in l.g){var E=l.g[g],O=Array.prototype.indexOf.call(E,f,void 0),j;(j=0<=O)&&Array.prototype.splice.call(E,O,1),j&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Nr(l,f,g,E){for(var O=0;O<l.length;++O){var j=l[O];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==E)return O}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),ls={};function Io(l,f,g,E,O){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Io(l,f[j],g,E,O);return null}return g=Ro(g),l&&l[Le]?l.K(f,g,v(E)?!!E.capture:!1,O):So(l,f,g,!1,E,O)}function So(l,f,g,E,O,j){if(!f)throw Error("Invalid event type");var Y=v(O)?!!O.capture:!!O,Ue=cs(l);if(Ue||(l[Ei]=Ue=new nr(l)),g=Ue.add(f,g,E,Y,j),g.proxy)return g;if(E=Ha(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ie||(O=Y),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(ir(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ha(){function l(g){return f.call(l.src,l.listener,g)}const f=Ao;return l}function us(l,f,g,E,O){if(Array.isArray(f))for(var j=0;j<f.length;j++)us(l,f[j],g,E,O);else E=v(E)?!!E.capture:!!E,g=Ro(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Nr(j,g,E,O),-1<g&&(mt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=cs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Nr(f,g,E,O)),(g=-1<l?f[l]:null)&&rr(g))}function rr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])as(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(ir(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=cs(f))?(as(g,l),g.h==0&&(g.src=null,f[Ei]=null)):mt(l)}}}function ir(l){return l in ls?ls[l]:ls[l]="on"+l}function Ao(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&rr(l),l=g.call(E,f)}return l}function cs(l){return l=l[Ei],l instanceof nr?l:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(l){return typeof l=="function"?l:(l[hs]||(l[hs]=function(f){return l.handleEvent(f)}),l[hs])}function at(){$.call(this),this.i=new nr(this),this.M=this,this.F=null}z(at,$),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,g,E){us(this,l,f,g,E)};function lt(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var O=f;f=new ce(E,l),k(f,O)}if(O=!0,g)for(var j=g.length-1;0<=j;j--){var Y=f.g=g[j];O=sr(Y,E,!0,f)&&O}if(Y=f.g=l,O=sr(Y,E,!0,f)&&O,O=sr(Y,E,!1,f)&&O,g)for(j=0;j<g.length;j++)Y=f.g=g[j],O=sr(Y,E,!1,f)&&O}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},at.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function sr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,j=0;j<f.length;++j){var Y=f[j];if(Y&&!Y.da&&Y.capture==g){var Ue=Y.listener,ut=Y.ha||Y.src;Y.fa&&as(l.i,Y),O=Ue.call(ut,E)!==!1&&O}}return O&&!E.defaultPrevented}function Co(l,f,g){if(typeof l=="function")g&&(l=L(l,g));else if(l&&typeof l.handleEvent=="function")l=L(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function xr(l){l.g=Co(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class wi extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(l){$.call(this),this.h=l,this.g={}}z(Ti,$);var ko=[];function Po(l){ve(l.g,function(f,g){this.g.hasOwnProperty(g)&&rr(f)},l),l.g={}}Ti.prototype.N=function(){Ti.aa.N.call(this),Po(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=m.JSON.stringify,xo=m.JSON.parse,Do=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ii(){}Ii.prototype.h=null;function ds(l){return l.h||(l.h=l.i())}function fs(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ce.call(this,"d")}z(Un,ce);function ps(){ce.call(this,"c")}z(ps,ce);var Fn={},Vo=null;function Si(){return Vo=Vo||new at}Fn.La="serverreachability";function Oo(l){ce.call(this,Fn.La,l)}z(Oo,ce);function or(l){const f=Si();lt(f,new Oo(f))}Fn.STAT_EVENT="statevent";function Lo(l,f){ce.call(this,Fn.STAT_EVENT,l),this.stat=f}z(Lo,ce);function tt(l){const f=Si();lt(f,new Lo(f,l))}Fn.Ma="timingevent";function ms(l,f){ce.call(this,Fn.Ma,l),this.size=f}z(ms,ce);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Ri(l,f,g,E,O,j){l.info(function(){if(l.g)if(j)for(var Y="",Ue=j.split("&"),ut=0;ut<Ue.length;ut++){var xe=Ue[ut].split("=");if(1<xe.length){var gt=xe[0];xe=xe[1];var it=gt.split("_");Y=2<=it.length&&it[1]=="type"?Y+(gt+"="+xe+"&"):Y+(gt+"=redacted&")}}else Y=null;else Y=j;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+g+`
`+Y})}function gs(l,f,g,E,O,j,Y){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+g+`
`+j+" "+Y})}function wn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+uc(l,g)+(E?" "+E:"")})}function Mo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ai.prototype.info=function(){};function uc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var j=O[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Y=1;Y<O.length;Y++)O[Y]=""}}}}return No(g)}catch{return f}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ci(){}z(Ci,Ii),Ci.prototype.g=function(){return new XMLHttpRequest},Ci.prototype.i=function(){return{}},Tn=new Ci;function In(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new Ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var bo={},_s={};function vs(l,f,g){l.L=1,l.v=Mr(en(f)),l.m=g,l.P=!0,Uo(l,null)}function Uo(l,f){l.F=Date.now(),$e(l),l.A=en(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Ur(g.i,"t",E),l.C=0,g=l.j.J,l.h=new qa,l.g=cl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new wi(L(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(ko[0]=O.toString()),O=ko);for(var j=0;j<O.length;j++){var Y=Io(g,O[j],E||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),or(),Ri(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Ho(this.g)))){this.J||it!=4||f==7||(f==8||0>=dn?or(3):or(2)),ki(this);var g=this.g.Z();this.X=g;t:if(Ka(this)){var E=Ho(this.g);l="";var O=E.length,j=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Dr(this);var Y="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(j&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,gs(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ut=this.g;if((Ue=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Ue)){var xe=Ue;break t}}xe=null}if(g=xe)wn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,g);else{this.o=!1,this.s=3,tt(12),cn(this),Dr(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<Y.length;)if(nn=cc(this,Y),nn==_s){it==4&&(this.s=4,tt(14),g=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==bo){this.s=4,tt(15),wn(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else wn(this.i,this.l,nn,null),Fo(this,nn);if(Ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Y.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)wn(this.i,this.l,Y,"[Invalid Chunked Response]"),cn(this),Dr(this);else if(0<Y.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),qo(gt),gt.M=!0,tt(11))}}else wn(this.i,this.l,Y,null),Fo(this,Y);it==4&&cn(this),this.o&&!this.J&&(it==4?Ns(this.j,this):(this.o=!1,$e(this)))}else As(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),cn(this),Dr(this)}}}catch{}finally{}};function Ka(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function cc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?_s:(g=Number(f.substring(g,E)),isNaN(g)?bo:(E+=1,E+g>f.length?_s:(f=f.slice(E,E+g),l.C=E+g,f)))}In.prototype.cancel=function(){this.J=!0,cn(this)};function $e(l){l.S=Date.now()+l.I,Ga(l,l.I)}function Ga(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(L(l.ba,l),f)}function ki(l){l.B&&(m.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mo(this.i,this.A),this.L!=2&&(or(),tt(17)),cn(this),this.s=2,Dr(this)):Ga(this,this.S-l)};function Dr(l){l.j.G==0||l.J||Ns(l.j,l)}function cn(l){ki(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Po(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Fo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ut(g.h,l))){if(!l.K&&Ut(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ps(g),kn(g);else break e;ks(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=En(L(g.Za,g),6e3));if(1>=Xa(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hr(g,11)}else if((l.K||g.g==l)&&Ps(g),!ie(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let xe=O[f];if(g.T=xe[0],xe=xe[1],g.G==2)if(xe[0]=="c"){g.K=xe[1],g.ia=xe[2];const gt=xe[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const it=xe[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const dn=xe[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const nn=l.g;if(nn){const Li=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var j=E.h;j.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(jo(j,j.h),j.h=null))}if(E.D){const Ds=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(E.ya=Ds,ze(E.I,E.D,Ds))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Y=l;if(E.qa=ul(E,E.J?E.ia:null,E.W),Y.K){Ya(E.h,Y);var Ue=Y,ut=E.L;ut&&(Ue.I=ut),Ue.B&&(ki(Ue),$e(Ue)),E.g=Y}else Oi(E);0<g.i.length&&$n(g)}else xe[0]!="stop"&&xe[0]!="close"||hr(g,7);else g.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?hr(g,7):Tt(g):xe[0]!="noop"&&g.l&&g.l.ta(xe),g.v=0)}}or(4)}catch{}}var Qa=class{constructor(l,f){this.g=l,this.map=f}};function Pi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Xa(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function jo(l,f){l.g?l.g.add(f):l.h=f}function Ya(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Pi.prototype.cancel=function(){if(this.i=Ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ja(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Q(l.i)}function Es(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function ws(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Vr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ws(l),E=Es(l),O=E.length,j=0;j<O;j++)f.call(void 0,E[j],g&&g[j],l)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),O=null;if(0<=E){var j=l[g].substring(0,E);O=l[g].substring(E+1)}else j=l[g];f(j,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,Or(this,l.s),this.l=l.l;var f=l.i,g=new jn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Lr(this,g),this.m=l.m}else l&&(f=String(l).match(Ni))?(this.h=!1,xi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Or(this,f[4]),this.l=Pe(f[5]||"",!0),Lr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}ar.prototype.toString=function(){var l=[],f=this.j;f&&l.push(br(f,Ts,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(br(f,Ts,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(br(g,g.charAt(0)=="/"?tl:el,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",br(g,zo)),l.join("")};function en(l){return new ar(l)}function xi(l,f,g){l.j=g?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Or(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Lr(l,f,g){f instanceof jn?(l.i=f,zn(l.i,l.h)):(g||(f=br(f,nl)),l.i=new jn(f,l.h))}function ze(l,f,g){l.i.set(f,g)}function Mr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function br(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Za),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Za(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ts=/[#\/\?@]/g,el=/[#\?:]/g,tl=/[#\?]/g,nl=/[#\?@]/g,zo=/#/g;function jn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&hc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=jn.prototype,i.add=function(l,f){wt(this),this.i=null,l=hn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Sn(l,f){wt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return wt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(g,E){g.forEach(function(O){l.call(f,O,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const O=l[E];for(let j=0;j<O.length;j++)g.push(f[E])}return g},i.V=function(l){wt(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return wt(this),this.i=null,l=hn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ur(l,f,g){Sn(l,f),0<g.length&&(l.i=null,l.g.set(hn(l,f),Q(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const j=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var O=j;Y[E]!==""&&(O+="="+encodeURIComponent(String(Y[E]))),l.push(O)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(g,E){var O=E.toLowerCase();E!=O&&(Sn(this,E),Ur(this,O,g))},l)),l.j=f}function dc(l,f){const g=new Ai;if(m.Image){const E=new Image;E.onload=U($t,g,"TestLoadImage: loaded",!0,f,E),E.onerror=U($t,g,"TestLoadImage: error",!1,f,E),E.onabort=U($t,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=U($t,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function rl(l,f){const g=new Ai,E=new AbortController,O=setTimeout(()=>{E.abort(),$t(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(O),j.ok?$t(g,"TestPingServer: ok",!0,f):$t(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),$t(g,"TestPingServer: error",!1,f)})}function $t(l,f,g,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(g)}catch{}}function fc(){this.g=new Do}function il(l,f,g){const E=g||"";try{Vr(l,function(O,j){let Y=O;v(O)&&(Y=No(O)),f.push(E+j+"="+encodeURIComponent(Y))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}z(lr,Ii),lr.prototype.g=function(){return new Di(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function Di(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Di,at),i=Di.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Cn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Cn(this),this.readyState==3&&sl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Cn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let f="";return ve(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Fr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ur(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,f,g))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Ke,at);var pc=/^https?$/i,Bo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?ds(this.o):ds(Tn),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Vi(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)g.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Bo,f,void 0))||E||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Y]of g)this.g.setRequestHeader(j,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Vi(this,j)}};function Vi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Is(l),tn(l)}function Is(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},i.bb=function(){$o(this)};function $o(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Co(l.Ea,0,l);else if(lt(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Y===0){var O=String(l.D).match(Ni)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),E=!pc.test(O?O.toLowerCase():"")}g=E}if(g)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var j=2<Ht(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Is(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Ss(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{g.onreadystatechange=E}catch{}}}function Ss(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),xo(f)}};function Ho(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function As(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ie(l[E]))continue;var g=x(l[E]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[O]||[];f[O]=j,j.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(l&&l.concurrentRequestLimit),this.Da=new fc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=ul(this,null,this.W),$n(this)};function Tt(l){if(Rs(l),l.G==3){var f=l.U++,g=en(l.I);if(ze(g,"SID",l.K),ze(g,"RID",f),ze(g,"TYPE","terminate"),cr(l,g),f=new In(l,l.j,f),f.L=2,f.v=Mr(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=cl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}ll(l)}function kn(l){l.g&&(qo(l),l.g.cancel(),l.g=null)}function Rs(l){kn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ps(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function $n(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;je||ne(),J||(je(),J=!0),de.add(f,l),l.B=0}}function mc(l,f){return Xa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(L(l.Ga,l,f),al(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new In(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(O.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=jr(this,O,f),g=en(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),cr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(ur(j)))+"&"+f:this.m&&Fr(g,this.m,j)),jo(this.h,O),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",f),ze(g,"SID","null"),O.T=!0,vs(O,g,null)):vs(O,g,f),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||Zt(this.h)||Cs(this))};function Cs(l,f){var g;f?g=f.l:g=l.U++;const E=en(l.I);ze(E,"SID",l.K),ze(E,"RID",g),ze(E,"AID",l.T),cr(l,E),l.m&&l.o&&Fr(E,l.m,l.o),g=new In(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=jr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),jo(l.h,g),vs(g,E,f)}function cr(l,f){l.H&&ve(l.H,function(g,E){ze(f,E,g)}),l.l&&Vr({},function(g,E){ze(f,E,g)})}function jr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?L(l.l.Na,l.l,l):null;e:{var O=l.i;let j=-1;for(;;){const Y=["count="+g];j==-1?0<g?(j=O[0].g,Y.push("ofs="+j)):j=0:Y.push("ofs="+j);let Ue=!0;for(let ut=0;ut<g;ut++){let xe=O[ut].g;const gt=O[ut].map;if(xe-=j,0>xe)j=Math.max(0,O[ut].g-100),Ue=!1;else try{il(gt,Y,"req"+xe+"_")}catch{E&&E(gt)}}if(Ue){E=Y.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Oi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;je||ne(),J||(je(),J=!0),de.add(f,l),l.v=0}}function ks(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(L(l.Fa,l),al(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,ol(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(L(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),ol(this))};function qo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function ol(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),cr(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Mr(en(f)),g.m=null,g.P=!0,Uo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),ks(this),tt(19))};function Ps(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ns(l,f){var g=null;if(l.g==f){Ps(l),qo(l),l.g=null;var E=2}else if(Ut(l.h,f))g=f.D,Ya(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=Si(),lt(E,new ms(E,g)),$n(l)}else Oi(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&mc(l,f)||E==2&&ks(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),O){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function al(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function hr(l,f){if(l.j.info("Error code "+f),f==2){var g=L(l.fb,l),E=l.Xa;const O=!E;E=new ar(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||xi(E,"https"),Mr(E),O?dc(E.toString(),g):rl(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),ll(l),Rs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ll(l){if(l.G=0,l.ka=[],l.l){const f=Ja(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function ul(l,f,g){var E=g instanceof ar?en(g):new ar(g);if(E.g!="")f&&(E.g=f+"."+E.g),Or(E,E.s);else{var O=m.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var j=new ar(null);E&&xi(j,E),f&&(j.g=f),O&&Or(j,O),g&&(j.l=g),E=j}return g=l.D,f=l.ya,g&&f&&ze(E,g,f),ze(E,"VER",l.la),cr(l,E),E}function cl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new lr({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}i=Ko.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function xs(){}xs.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){at.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ie(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ie(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Hn(this)}z(Ft,at),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Tt(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=No(l),l=g);f.i.push(new Qa(f.Ya++,l)),f.G==3&&$n(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Ft.aa.N.call(this)};function hl(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}z(hl,Un);function dl(){ps.call(this),this.status=1}z(dl,ps);function Hn(l){this.g=l}z(Hn,Ko),Hn.prototype.ua=function(){lt(this.g,"a")},Hn.prototype.ta=function(l){lt(this.g,new hl(l))},Hn.prototype.sa=function(l){lt(this.g,new dl)},Hn.prototype.ra=function(){lt(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,t_=function(){return new xs},e_=function(){return Si()},Zy=Fn,sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,yu=ys,Wa.COMPLETE="complete",Jy=Wa,fs.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",at.prototype.listen=at.prototype.K,_a=fs,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Yy=Ke}).apply(typeof au<"u"?au:typeof self<"u"?self:typeof window<"u"?window:{});const cg="@firebase/firestore",hg="4.7.10";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */const ns=new kd("@firebase/firestore");function Zs(){return ns.logLevel}function re(i,...e){if(ns.logLevel<=Ce.DEBUG){const t=e.map(Bd);ns.debug(`Firestore (${vo}): ${i}`,...t)}}function Cr(i,...e){if(ns.logLevel<=Ce.ERROR){const t=e.map(Bd);ns.error(`Firestore (${vo}): ${i}`,...t)}}function uo(i,...e){if(ns.logLevel<=Ce.WARN){const t=e.map(Bd);ns.warn(`Firestore (${vo}): ${i}`,...t)}}function Bd(i){if(typeof i=="string")return i;try{/**
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
 */function ge(i="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+i;throw Cr(e),new Error(e)}function be(i,e){i||ge()}function we(i,e){return i}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class n_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class EI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wI{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ci,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ci)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new n_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Lt(e)}}class TI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class II{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new TI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SI{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ln(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new dg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new dg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function r_(){return new TextEncoder}/**
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
 */class i_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=AI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Se(i,e){return i<e?-1:i>e?1:0}function od(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const u=r_(),h=RI(u.encode(fg(i,t)),u.encode(fg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(i.length,e.length)}function fg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function RI(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Se(i[t],e[t]);return Se(i.length,e.length)}function co(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const pg=-62135596800,mg=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*mg);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pg)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new ft(0,0))}static max(){return new Ee(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gg="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(),s===void 0?s=e.length-t:s>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Se(e.length,t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):od(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Qe extends Qn{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const CI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Qn{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return CI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gg}static keyField(){return new Rt([gg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new he(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Qe.fromString(e))}static fromName(e){return new me(Qe.fromString(e).popFirst(5))}static empty(){return new me(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Qe(e.slice()))}}/**
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
 */const ka=-1;function kI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new di(o,me.empty(),e)}function PI(i){return new di(i.readTime,i.key,ka)}class di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new di(Ee.min(),me.empty(),ka)}static max(){return new di(Ee.max(),me.empty(),ka)}}function NI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(i.documentKey,e.documentKey),t!==0?t:Se(i.largestBatchId,e.largestBatchId))}/**
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
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Eo(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==xI)throw i;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function VI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class qu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}qu.ae=-1;/**
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
 */const $d=-1;function Ku(i){return i==null}function Nu(i){return i===0&&1/i==-1/0}function OI(i){return typeof i=="number"&&Number.isInteger(i)&&!Nu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const s_="";function LI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=yg(e)),e=MI(i.get(t),e);return yg(e)}function MI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case s_:t+="";break;default:t+=u}}return t}function yg(i){return i+s_+""}/**
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
 */function _g(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function _i(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function o_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lu(this.root,e,this.comparator,!0)}}class lu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vg(this.data.getIterator())}getIteratorFrom(e){return new vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ln{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new ln([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class a_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new a_("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const bI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(i){if(be(!!i),typeof i=="string"){let e=0;const t=bI.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pi(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
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
 */const l_="server_timestamp",u_="__type__",c_="__previous_value__",h_="__local_write_time__";function Hd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[u_])===null||t===void 0?void 0:t.stringValue)===l_}function Gu(i){const e=i.mapValue.fields[c_];return Hd(e)?Gu(e):e}function Pa(i){const e=fi(i.mapValue.fields[h_].timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class UI{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}const xu="(default)";class Na{constructor(e,t){this.projectId=e,this.database=t||xu}static empty(){return new Na("","")}get isDefaultDatabase(){return this.database===xu}isEqual(e){return e instanceof Na&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const d_="__type__",FI="__max__",uu={mapValue:{}},f_="__vector__",Du="value";function mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Hd(i)?4:zI(i)?9007199254740991:jI(i)?10:11:ge()}function er(i,e){if(i===e)return!0;const t=mi(i);if(t!==mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Pa(i).isEqual(Pa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fi(o.timestampValue),m=fi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return pi(o.bytesValue).isEqual(pi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Nu(h)===Nu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return co(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(_g(h)!==_g(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!er(h[y],m[y])))return!1;return!0}(i,e);default:return ge()}}function xa(i,e){return(i.values||[]).find(t=>er(t,e))!==void 0}function ho(i,e){if(i===e)return 0;const t=mi(i),s=mi(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return Eg(i.timestampValue,e.timestampValue);case 4:return Eg(Pa(i),Pa(e));case 5:return od(i.stringValue,e.stringValue);case 6:return function(u,h){const m=pi(u),y=pi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Se(m[v],y[v]);if(w!==0)return w}return Se(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Se(rt(u.latitude),rt(h.latitude));return m!==0?m:Se(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return wg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const C=u.fields||{},L=h.fields||{},U=(m=C[Du])===null||m===void 0?void 0:m.arrayValue,z=(y=L[Du])===null||y===void 0?void 0:y.arrayValue,Q=Se(((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0,((w=z==null?void 0:z.values)===null||w===void 0?void 0:w.length)||0);return Q!==0?Q:wg(U,z)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===uu.mapValue&&h===uu.mapValue)return 0;if(u===uu.mapValue)return 1;if(h===uu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let C=0;C<y.length&&C<w.length;++C){const L=od(y[C],w[C]);if(L!==0)return L;const U=ho(m[y[C]],v[w[C]]);if(U!==0)return U}return Se(y.length,w.length)}(i.mapValue,e.mapValue);default:throw ge()}}function Eg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Se(i,e);const t=fi(i),s=fi(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function wg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=ho(t[o],s[o]);if(u)return u}return Se(t.length,s.length)}function fo(i){return ad(i)}function ad(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=fi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return pi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return me.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=ad(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${ad(t.fields[h])}`;return o+"}"}(i.mapValue):ge()}function _u(i){switch(mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(i);return e?16+_u(e):16;case 5:return 2*i.stringValue.length;case 6:return pi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+_u(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return _i(s.fields,(u,h)=>{o+=u.length+_u(h)}),o}(i.mapValue);default:throw ge()}}function ld(i){return!!i&&"integerValue"in i}function Wd(i){return!!i&&"arrayValue"in i}function Tg(i){return!!i&&"nullValue"in i}function Ig(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function vu(i){return!!i&&"mapValue"in i}function jI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[d_])===null||t===void 0?void 0:t.stringValue)===f_}function Ta(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return _i(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ta(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ta(i.arrayValue.values[t]);return e}return Object.assign({},i)}function zI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===FI}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!vu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ta(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());vu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];vu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){_i(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Jt(Ta(this.value))}}function p_(i){const e=[];return _i(i.fields,(t,s)=>{const o=new Rt([t]);if(vu(s)){const u=p_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new ln(e)}/**
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
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,Ee.min(),Ee.min(),Ee.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,Ee.min(),Ee.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,Ee.min(),Ee.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vu{constructor(e,t){this.position=e,this.inclusive=t}}function Sg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=ho(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ag(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ou{constructor(e,t="asc"){this.field=e,this.dir=t}}function BI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class m_{}class dt extends m_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new HI(e,t,s):t==="array-contains"?new KI(e,s):t==="in"?new GI(e,s):t==="not-in"?new QI(e,s):t==="array-contains-any"?new XI(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new WI(e,s):new qI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ho(t,this.value)):t!==null&&mi(this.value)===mi(t)&&this.matchesComparison(ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends m_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tr(e,t)}matches(e){return g_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function g_(i){return i.op==="and"}function y_(i){return $I(i)&&g_(i)}function $I(i){for(const e of i.filters)if(e instanceof tr)return!1;return!0}function ud(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+fo(i.value);if(y_(i))return i.filters.map(e=>ud(e)).join(",");{const e=i.filters.map(t=>ud(t)).join(",");return`${i.op}(${e})`}}function __(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(i,e):i instanceof tr?function(s,o){return o instanceof tr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&__(h,o.filters[m]),!0):!1}(i,e):void ge()}function v_(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${fo(t.value)}`}(i):i instanceof tr?function(t){return t.op.toString()+" {"+t.getFilters().map(v_).join(" ,")+"}"}(i):"Filter"}class HI extends dt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class WI extends dt{constructor(e,t){super(e,"in",t),this.keys=E_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qI extends dt{constructor(e,t){super(e,"not-in",t),this.keys=E_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function E_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>me.fromName(s.referenceValue))}class KI extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wd(t)&&xa(t.arrayValue,this.value)}}class GI extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xa(this.value.arrayValue,t)}}class QI extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!xa(this.value.arrayValue,t)}}class XI extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>xa(this.value.arrayValue,s))}}/**
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
 */class YI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function Rg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new YI(i,e,t,s,o,u,h)}function qd(i){const e=we(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ud(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Ku(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>fo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>fo(s)).join(",")),e.le=t}return e.le}function Kd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!BI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!__(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Ag(i.startAt,e.startAt)&&Ag(i.endAt,e.endAt)}function cd(i){return me.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Qu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function JI(i,e,t,s,o,u,h,m){return new Qu(i,e,t,s,o,u,h,m)}function w_(i){return new Qu(i)}function Cg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function ZI(i){return i.collectionGroup!==null}function Ia(i){const e=we(i);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Ou(u,s))}),t.has(Rt.keyField().canonicalString())||e.he.push(new Ou(Rt.keyField(),s))}return e.he}function Yn(i){const e=we(i);return e.Pe||(e.Pe=eS(e,Ia(i))),e.Pe}function eS(i,e){if(i.limitType==="F")return Rg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ou(o.field,u)});const t=i.endAt?new Vu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Vu(i.startAt.position,i.startAt.inclusive):null;return Rg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function hd(i,e,t){return new Qu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Xu(i,e){return Kd(Yn(i),Yn(e))&&i.limitType===e.limitType}function T_(i){return`${qd(Yn(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>v_(o)).join(", ")}]`),Ku(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>fo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>fo(o)).join(",")),`Target(${s})`}(Yn(i))}; limitType=${i.limitType})`}function Yu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ia(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=Sg(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,Ia(s),o)||s.endAt&&!function(h,m,y){const v=Sg(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,Ia(s),o))}(i,e)}function tS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function I_(i){return(e,t)=>{let s=!1;for(const o of Ia(i)){const u=nS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function nS(i,e,t){const s=i.field.isKeyField()?me.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?ho(y,v):ge()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ge()}}/**
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
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return o_(this.inner)}size(){return this.innerSize}}/**
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
 */const rS=new Je(me.comparator);function kr(){return rS}const S_=new Je(me.comparator);function va(...i){let e=S_;for(const t of i)e=e.insert(t.key,t);return e}function A_(i){let e=S_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xi(){return Sa()}function R_(){return Sa()}function Sa(){return new ss(i=>i.toString(),(i,e)=>i.isEqual(e))}const iS=new Je(me.comparator),sS=new pt(me.comparator);function ke(...i){let e=sS;for(const t of i)e=e.add(t);return e}const oS=new pt(Se);function aS(){return oS}/**
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
 */function Gd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nu(e)?"-0":e}}function C_(i){return{integerValue:""+i}}function lS(i,e){return OI(e)?C_(e):Gd(i,e)}/**
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
 */class Ju{constructor(){this._=void 0}}function uS(i,e,t){return i instanceof Lu?function(o,u){const h={fields:{[u_]:{stringValue:l_},[h_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Hd(u)&&(u=Gu(u)),u&&(h.fields[c_]=u),{mapValue:h}}(t,e):i instanceof Da?P_(i,e):i instanceof Va?N_(i,e):function(o,u){const h=k_(o,u),m=kg(h)+kg(o.Ie);return ld(h)&&ld(o.Ie)?C_(m):Gd(o.serializer,m)}(i,e)}function cS(i,e,t){return i instanceof Da?P_(i,e):i instanceof Va?N_(i,e):t}function k_(i,e){return i instanceof Mu?function(s){return ld(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Lu extends Ju{}class Da extends Ju{constructor(e){super(),this.elements=e}}function P_(i,e){const t=x_(e);for(const s of i.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Va extends Ju{constructor(e){super(),this.elements=e}}function N_(i,e){let t=x_(e);for(const s of i.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class Mu extends Ju{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function kg(i){return rt(i.integerValue||i.doubleValue)}function x_(i){return Wd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function hS(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Da&&o instanceof Da||s instanceof Va&&o instanceof Va?co(s.elements,o.elements,er):s instanceof Mu&&o instanceof Mu?er(s.Ie,o.Ie):s instanceof Lu&&o instanceof Lu}(i.transform,e.transform)}class dS{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Zu{}function D_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Qd(i.key,bn.none()):new Fa(i.key,i.data,bn.none());{const t=i.data,s=Jt.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new vi(i.key,s,new ln(o.toArray()),bn.none())}}function fS(i,e,t){i instanceof Fa?function(o,u,h){const m=o.value.clone(),y=Ng(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof vi?function(o,u,h){if(!Eu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Ng(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(V_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Aa(i,e,t,s){return i instanceof Fa?function(u,h,m,y){if(!Eu(u.precondition,h))return m;const v=u.value.clone(),w=xg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof vi?function(u,h,m,y){if(!Eu(u.precondition,h))return m;const v=xg(u.fieldTransforms,y,h),w=h.data;return w.setAll(V_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(i,e,t,s):function(u,h,m){return Eu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function pS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=k_(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function Pg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,(u,h)=>hS(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Fa extends Zu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class vi extends Zu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function V_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Ng(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,cS(h,m,t[o]))}return s}function xg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,uS(u,h,e))}return s}class Qd extends Zu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mS extends Zu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&fS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Aa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Aa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=R_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=D_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(t,s)=>Pg(t,s))&&co(this.baseMutations,e.baseMutations,(t,s)=>Pg(t,s))}}class Xd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return iS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Xd(e,t,s,o)}}/**
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
 */class yS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _S{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,De;function vS(i){switch(i){case K.OK:return ge();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return ge()}}function O_(i){if(i===void 0)return Cr("GRPC error has no .code"),K.UNKNOWN;switch(i){case ot.OK:return K.OK;case ot.CANCELLED:return K.CANCELLED;case ot.UNKNOWN:return K.UNKNOWN;case ot.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case ot.INTERNAL:return K.INTERNAL;case ot.UNAVAILABLE:return K.UNAVAILABLE;case ot.UNAUTHENTICATED:return K.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case ot.NOT_FOUND:return K.NOT_FOUND;case ot.ALREADY_EXISTS:return K.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return K.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case ot.ABORTED:return K.ABORTED;case ot.OUT_OF_RANGE:return K.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return K.UNIMPLEMENTED;case ot.DATA_LOSS:return K.DATA_LOSS;default:return ge()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ES=new ui([4294967295,4294967295],0);function Dg(i){const e=r_().encode(i),t=new Xy;return t.update(e),new Uint8Array(t.digest())}function Vg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class Yd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ea(`Invalid padding: ${t}`);if(s<0)throw new Ea(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ea(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ea(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ui.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(ES)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Dg(e),[s,o]=Vg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Yd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ee===0)return;const t=Dg(e),[s,o]=Vg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ec(Ee.min(),o,new Je(Se),kr(),ke())}}class ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ja(s,t,ke(),ke(),ke())}}/**
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
 */class wu{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class L_{constructor(e,t){this.targetId=e,this.ge=t}}class M_{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Og{constructor(){this.pe=0,this.ye=Lg(),this.we=Ct.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ke(),t=ke(),s=ke();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge()}}),new ja(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=Lg()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,be(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class wS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=kr(),this.$e=cu(),this.Ue=cu(),this.Ke=new Je(Se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(cd(u))if(s===0){const h=new me(u.path);this.ze(t,h,Mt.newNoDocument(h,Ee.min()))}else be(s===1);else{const h=this.et(t);if(h!==s){const m=this.tt(e),y=m?this.nt(m,e,h):1;if(y!==0){this.Ye(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=pi(s).toUint8Array()}catch(y){if(y instanceof a_)return uo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Yd(h,o,u)}catch(y){return uo(y instanceof Ea?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Ee===0?null:m}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const m=this.Xe(h);if(m){if(u.current&&cd(m.target)){const y=new me(m.target.path);this._t(y).has(h)||this.ut(h,y)||this.ze(h,y,Mt.newNoDocument(y,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=ke();this.Ue.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Xe(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new ec(e,t,this.Ke,this.Qe,s);return this.Qe=kr(),this.$e=cu(),this.Ue=cu(),this.Ke=new Je(Se),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Og,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new pt(Se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new pt(Se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Og),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function cu(){return new Je(me.comparator)}function Lg(){return new Je(me.comparator)}const TS={asc:"ASCENDING",desc:"DESCENDING"},IS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SS={and:"AND",or:"OR"};class AS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dd(i,e){return i.useProto3Json||Ku(e)?e:{value:e}}function bu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function RS(i,e){return bu(i,e.toTimestamp())}function Jn(i){return be(!!i),Ee.fromTimestamp(function(t){const s=fi(t);return new ft(s.seconds,s.nanos)}(i))}function Jd(i,e){return fd(i,e).canonicalString()}function fd(i,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function U_(i){const e=Qe.fromString(i);return be($_(e)),e}function pd(i,e){return Jd(i.databaseId,e.path)}function Kh(i,e){const t=U_(e);if(t.get(1)!==i.databaseId.projectId)throw new he(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new he(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new me(j_(t))}function F_(i,e){return Jd(i.databaseId,e)}function CS(i){const e=U_(i);return e.length===4?Qe.emptyPath():j_(e)}function md(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function j_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Mg(i,e,t){return{name:pd(i,e),fields:t.value.mapValue.fields}}function kS(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?K.UNKNOWN:O_(v.code);return new he(w,v.message||"")}(h);t=new M_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Kh(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):Ee.min(),m=new Jt({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new wu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Kh(i,s.document),u=s.readTime?Jn(s.readTime):Ee.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new wu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Kh(i,s.document),u=s.removedTargetIds||[];t=new wu([],u,o,null)}else{if(!("filter"in e))return ge();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new _S(o,u),m=s.targetId;t=new L_(m,h)}}return t}function PS(i,e){let t;if(e instanceof Fa)t={update:Mg(i,e.key,e.value)};else if(e instanceof Qd)t={delete:pd(i,e.key)};else if(e instanceof vi)t={update:Mg(i,e.key,e.data),updateMask:US(e.fieldMask)};else{if(!(e instanceof mS))return ge();t={verify:pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Lu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Da)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Mu)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw ge()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:RS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ge()}(i,e.precondition)),t}function NS(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(Ee.min())&&(h=Jn(u)),new dS(h,o.transformResults||[])}(t,e))):[]}function xS(i,e){return{documents:[F_(i,e.path)]}}function DS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=F_(i,o);const u=function(v){if(v.length!==0)return B_(tr.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(L){return{field:to(L.field),direction:LS(L.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=dd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ht:t,parent:o}}function VS(i){let e=CS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(C){const L=z_(C);return L instanceof tr&&y_(L)?L.getFilters():[L]}(t.where));let h=[];t.orderBy&&(h=function(C){return C.map(L=>function(z){return new Ou(no(z.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(L))}(t.orderBy));let m=null;t.limit&&(m=function(C){let L;return L=typeof C=="object"?C.value:C,Ku(L)?null:L}(t.limit));let y=null;t.startAt&&(y=function(C){const L=!!C.before,U=C.values||[];return new Vu(U,L)}(t.startAt));let v=null;return t.endAt&&(v=function(C){const L=!C.before,U=C.values||[];return new Vu(U,L)}(t.endAt)),JI(e,o,h,u,m,"F",y,v)}function OS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function z_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return tr.create(t.compositeFilter.filters.map(s=>z_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge()}}(t.compositeFilter.op))}(i):ge()}function LS(i){return TS[i]}function MS(i){return IS[i]}function bS(i){return SS[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return Rt.fromServerFormat(i.fieldPath)}function B_(i){return i instanceof dt?function(t){if(t.op==="=="){if(Ig(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(Tg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ig(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(Tg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:MS(t.op),value:t.value}}}(i):i instanceof tr?function(t){const s=t.getFilters().map(o=>B_(o));return s.length===1?s[0]:{compositeFilter:{op:bS(t.op),filters:s}}}(i):ge()}function US(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class si{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FS{constructor(e){this.Tt=e}}function jS(i){const e=VS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?hd(e,e.limit,"L"):e}/**
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
 */class zS{constructor(){this.Tn=new BS}addToCollectionParentIndex(e,t){return this.Tn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(di.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(di.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class BS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Qe.comparator)).toArray()}}/**
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
 */const bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},H_=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(H_,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
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
 */const Ug="LruGarbageCollector",$S=1048576;function Fg([i,e],[t,s]){const o=Se(i,t);return o===0?Se(e,s):o}class HS{constructor(e){this.Hn=e,this.buffer=new pt(Fg),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Fg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(Ug,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?re(Ug,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.er(3e5)})}}class qS{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(qu.ae);const s=new HS(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(bg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bg):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o))).next(C=>(s=C,m=Date.now(),this.removeTargets(e,s,t))).next(C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(C=>(v=Date.now(),Zs()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function KS(i,e){return new qS(i,e)}/**
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
 */class GS{constructor(){this.changes=new ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class XS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Aa(s.mutation,o,ln.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=Xi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=va();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Xi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=kr();const h=Sa(),m=function(){return Sa()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof vi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Aa(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,ln.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var C;return m.set(v,new QS(w,(C=h.get(v))!==null&&C!==void 0?C:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Sa();let o=new Je((h,m)=>h-m),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||ln.empty();w=m.applyToLocalView(v,w),s.set(y,w);const C=(o.get(m.batchId)||ke()).add(y);o=o.insert(m.batchId,C)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,C=R_();w.forEach(L=>{if(!u.has(L)){const U=D_(t.get(L),s.get(L));U!==null&&C.set(L,U),u=u.add(L)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ZI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(Xi());let m=ka,y=u;return h.next(v=>B.forEach(v,(w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?B.resolve():this.remoteDocumentCache.getEntry(e,w).next(L=>{y=y.insert(w,L)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,ke())).next(w=>({batchId:m,changes:A_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(s=>{let o=va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=va();return this.indexManager.getCollectionParents(e,u).next(m=>B.forEach(m,y=>{const v=function(C,L){return new Qu(L,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((C,L)=>{h=h.insert(C,L)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=va();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&Aa(w.mutation,v,ln.empty(),ft.now()),Yu(t,v)&&(m=m.insert(y,v))}),m})}}/**
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
 */class YS{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return B.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:jS(o.bundledQuery),readTime:Jn(o.readTime)}}(t)),B.resolve()}}/**
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
 */class JS{constructor(){this.overlays=new Je(me.comparator),this.Rr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xi();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=Xi(),u=t.length+1,h=new me(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Xi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Xi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return B.resolve(m)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new yS(t,s));let u=this.Rr.get(t);u===void 0&&(u=ke(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
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
 */class ZS{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class Zd{constructor(){this.Vr=new pt(Et.mr),this.gr=new pt(Et.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Et(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new me(new Qe([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new me(new Qe([])),s=new Et(t,e),o=new Et(t,e+1);let u=ke();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return me.comparator(e.key,t.key)||Se(e.Cr,t.Cr)}static pr(e,t){return Se(e.Cr,t.Cr)||me.comparator(e.key,t.key)}}/**
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
 */class eA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new pt(Et.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new gS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Mr=this.Mr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?$d:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const m=this.Or(h.Cr);u.push(m)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Se);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{s=s.add(m.Cr)})}),B.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const h=new Et(new me(u),0);let m=new pt(Se);return this.Mr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Cr)),!0)},h),B.resolve(this.Br(m))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return B.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Et(t,0),o=this.Mr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tA{constructor(e){this.kr=e,this.docs=function(){return new Je(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=kr();const h=t.path,m=new me(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||NI(PI(w),s)<=0||(o.has(w.key)||Yu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ge()}qr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new nA(this)}getSize(e){return B.resolve(this.size)}}class nA extends GS{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class rA{constructor(e){this.persistence=e,this.Qr=new ss(t=>qd(t),Kd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Zd,this.targetCount=0,this.Kr=po.Un()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),B.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new po(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.zn(t),B.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.Ur.containsKey(t))}}/**
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
 */class W_{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new qu(0),this.zr=!1,this.zr=!0,this.jr=new ZS,this.referenceDelegate=e(this),this.Hr=new rA(this),this.indexManager=new zS,this.remoteDocumentCache=function(o){return new tA(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new FS(t),this.Yr=new YS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new eA(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new iA(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return B.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class iA extends DI{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.ti=new Zd,this.ni=null}static ri(e){return new ef(e)}get ii(){if(this.ni)return this.ni;throw ge()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),B.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,s=>{const o=me.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,Ee.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return B.or([()=>B.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Uu{constructor(e,t){this.persistence=e,this.oi=new ss(s=>LI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=KS(this,t)}static ri(e,t){return new Uu(e,t)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return B.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_u(e.data.value)),t}ar(e,t,s){return B.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=ke(),o=ke();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new tf(e,t.fromCache,s,o)}}/**
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
 */class sA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oA{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ew()?8:VI(bt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new sA;return this._s(e,t,h).next(m=>{if(u.result=m,this.Xi)return this.us(e,t,h,m.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(Zs()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Zs()<=Ce.DEBUG&&re("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Zs()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):B.resolve())}rs(e,t){if(Cg(t))return B.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=hd(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=ke(...u);return this.ns.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.cs(t,m);return this.ls(t,v,h,y.readTime)?this.rs(e,hd(t,null,"F")):this.hs(e,v,t,y)}))})))}ss(e,t,s,o){return Cg(t)||o.isEqual(Ee.min())?B.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?B.resolve(null):(Zs()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.hs(e,h,t,kI(o,ka)).next(m=>m))})}cs(e,t){let s=new pt(I_(e));return t.forEach((o,u)=>{Yu(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return Zs()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ns.getDocumentsMatchingQuery(e,t,di.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const nf="LocalStore",aA=3e8;class lA{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Je(Se),this.Is=new ss(u=>qd(u),Kd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function uA(i,e,t,s){return new lA(i,e,t,s)}async function q_(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=ke();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Rs:v,removedBatchIds:h,addedBatchIds:m}))})})}function cA(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const C=v.batch,L=C.keys();let U=B.resolve();return L.forEach(z=>{U=U.next(()=>w.getEntry(y,z)).next(Q=>{const H=v.docVersions.get(z);be(H!==null),Q.version.compareTo(H)<0&&(C.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),w.addEntry(Q)))})}),U.next(()=>m.mutationQueue.removeMutationBatch(y,C))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=ke();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function K_(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function hA(i,e){const t=we(i),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const m=[];e.targetChanges.forEach((w,C)=>{const L=o.get(C);if(!L)return;m.push(t.Hr.removeMatchingKeys(u,w.removedDocuments,C).next(()=>t.Hr.addMatchingKeys(u,w.addedDocuments,C)));let U=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?U=U.withResumeToken(Ct.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(w.resumeToken,s)),o=o.insert(C,U),function(Q,H,ee){return Q.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=aA?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(L,U,w)&&m.push(t.Hr.updateTargetData(u,U))});let y=kr(),v=ke();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(dA(u,h,e.documentUpdates).next(w=>{y=w.Vs,v=w.fs})),!s.isEqual(Ee.min())){const w=t.Hr.getLastRemoteSnapshotVersion(u).next(C=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return B.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.Ts=o,u))}function dA(i,e,t){let s=ke(),o=ke();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=kr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ee.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):re(nf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Vs:h,fs:o}})}function fA(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=$d),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function pA(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function gd(i,e,t){const s=we(i),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!wo(h))throw h;re(nf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function jg(i,e,t){const s=we(i);let o=Ee.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const C=we(y),L=C.Is.get(w);return L!==void 0?B.resolve(C.Ts.get(L)):C.Hr.getTargetData(v,w)}(s,h,Yn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:ke())).next(m=>(mA(s,tS(e),m),{documents:m,gs:u})))}function mA(i,e,t){let s=i.Es.get(e)||Ee.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Es.set(e,s)}class zg{constructor(){this.activeTargetIds=aS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gA{constructor(){this.ho=new zg,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new zg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yA{To(e){}shutdown(){}}/**
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
 */const Bg="ConnectivityMonitor";class $g{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(Bg,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(Bg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hu=null;function yd(){return hu===null?hu=function(){return 268435456+Math.round(2147483648*Math.random())}():hu++,"0x"+hu.toString(16)}/**
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
 */const Gh="RestConnection",_A={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vA{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===xu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,u){const h=yd(),m=this.bo(e,t.toUriEncodedString());re(Gh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,o,u),this.vo(e,m,y,s).then(v=>(re(Gh,`Received RPC '${e}' ${h}: `,v),v),v=>{throw uo(Gh,`RPC '${e}' ${h} failed with error: `,v,"url: ",m,"request:",s),v})}Co(e,t,s,o,u,h){return this.So(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const s=_A[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
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
 */class EA{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Ot="WebChannelConnection";class wA extends vA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=yd();return new Promise((h,m)=>{const y=new Yy;y.setWithCredentials(!0),y.listenOnce(Jy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case yu.NO_ERROR:const w=y.getResponseJson();re(Ot,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case yu.TIMEOUT:re(Ot,`RPC '${e}' ${u} timed out`),m(new he(K.DEADLINE_EXCEEDED,"Request time out"));break;case yu.HTTP_ERROR:const C=y.getStatus();if(re(Ot,`RPC '${e}' ${u} failed with status:`,C,"response text:",y.getResponseText()),C>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const U=L==null?void 0:L.error;if(U&&U.status&&U.message){const z=function(H){const ee=H.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ee)>=0?ee:K.UNKNOWN}(U.status);m(new he(z,U.message))}else m(new he(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new he(K.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{re(Ot,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);re(Ot,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)})}Wo(e,t,s){const o=yd(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=t_(),m=e_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");re(Ot,`Creating RPC '${e}' stream ${o}: ${w}`,y);const C=h.createWebChannel(w,y);let L=!1,U=!1;const z=new EA({Fo:H=>{U?re(Ot,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(L||(re(Ot,`Opening RPC '${e}' stream ${o} transport.`),C.open(),L=!0),re(Ot,`RPC '${e}' stream ${o} sending:`,H),C.send(H))},Mo:()=>C.close()}),Q=(H,ee,ie)=>{H.listen(ee,ue=>{try{ie(ue)}catch(Te){setTimeout(()=>{throw Te},0)}})};return Q(C,_a.EventType.OPEN,()=>{U||(re(Ot,`RPC '${e}' stream ${o} transport opened.`),z.Qo())}),Q(C,_a.EventType.CLOSE,()=>{U||(U=!0,re(Ot,`RPC '${e}' stream ${o} transport closed`),z.Uo())}),Q(C,_a.EventType.ERROR,H=>{U||(U=!0,uo(Ot,`RPC '${e}' stream ${o} transport errored:`,H),z.Uo(new he(K.UNAVAILABLE,"The operation could not be completed")))}),Q(C,_a.EventType.MESSAGE,H=>{var ee;if(!U){const ie=H.data[0];be(!!ie);const ue=ie,Te=(ue==null?void 0:ue.error)||((ee=ue[0])===null||ee===void 0?void 0:ee.error);if(Te){re(Ot,`RPC '${e}' stream ${o} received error:`,Te);const Fe=Te.status;let ve=function(A){const k=ot[A];if(k!==void 0)return O_(k)}(Fe),N=Te.message;ve===void 0&&(ve=K.INTERNAL,N="Unknown error status: "+Fe+" with message "+Te.message),U=!0,z.Uo(new he(ve,N)),C.close()}else re(Ot,`RPC '${e}' stream ${o} received:`,ie),z.Ko(ie)}}),Q(m,Zy.STAT_EVENT,H=>{H.stat===sd.PROXY?re(Ot,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===sd.NOPROXY&&re(Ot,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.$o()},0),z}}function Qh(){return typeof document<"u"?document:null}/**
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
 */function tc(i){return new AS(i,!0)}/**
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
 */class G_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Hg="PersistentStream";class Q_{constructor(e,t,s,o,u,h,m,y){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new G_(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Cr(t.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new he(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(Hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(Hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TA extends Q_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=kS(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?Jn(h.readTime):Ee.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=md(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=cd(y)?{documents:xS(u,y)}:{query:DS(u,y).ht},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=b_(u,h.resumeToken);const v=dd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=bu(u,h.snapshotVersion.toTimestamp());const v=dd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=OS(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=md(this.serializer),t.removeTarget=e,this.I_(t)}}class IA extends Q_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=NS(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=md(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>PS(this.serializer,s))};this.I_(t)}}/**
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
 */class SA{}class AA extends SA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,fd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(K.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(e,fd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(K.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class RA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Cr(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const rs="RemoteStore";class CA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{os(this)&&(re(rs,"Restarting streams for network reachability change."),await async function(y){const v=we(y);v.W_.add(4),await za(v),v.j_.set("Unknown"),v.W_.delete(4),await nc(v)}(this))})}),this.j_=new RA(s,o)}}async function nc(i){if(os(i))for(const e of i.G_)await e(!0)}async function za(i){for(const e of i.G_)await e(!1)}function X_(i,e){const t=we(i);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),af(t)?of(t):To(t).c_()&&sf(t,e))}function rf(i,e){const t=we(i),s=To(t);t.K_.delete(e),s.c_()&&Y_(t,e),t.K_.size===0&&(s.c_()?s.P_():os(t)&&t.j_.set("Unknown"))}function sf(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}To(i).y_(e)}function Y_(i,e){i.H_.Ne(e),To(i).w_(e)}function of(i){i.H_=new wS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.K_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),To(i).start(),i.j_.B_()}function af(i){return os(i)&&!To(i).u_()&&i.K_.size>0}function os(i){return we(i).W_.size===0}function J_(i){i.H_=void 0}async function kA(i){i.j_.set("Online")}async function PA(i){i.K_.forEach((e,t)=>{sf(i,e)})}async function NA(i,e){J_(i),af(i)?(i.j_.q_(e),of(i)):i.j_.set("Unknown")}async function xA(i,e,t){if(i.j_.set("Online"),e instanceof M_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.K_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.K_.delete(m),o.H_.removeTarget(m))}(i,e)}catch(s){re(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fu(i,s)}else if(e instanceof wu?i.H_.We(e):e instanceof L_?i.H_.Ze(e):i.H_.je(e),!t.isEqual(Ee.min()))try{const s=await K_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.H_.ot(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.K_.get(v);w&&u.K_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.K_.get(y);if(!w)return;u.K_.set(y,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),Y_(u,y);const C=new si(w.target,y,v,w.sequenceNumber);sf(u,C)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){re(rs,"Failed to raise snapshot:",s),await Fu(i,s)}}async function Fu(i,e,t){if(!wo(e))throw e;i.W_.add(1),await za(i),i.j_.set("Offline"),t||(t=()=>K_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{re(rs,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await nc(i)})}function Z_(i,e){return e().catch(t=>Fu(i,t,e))}async function rc(i){const e=we(i),t=gi(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:$d;for(;DA(e);)try{const o=await fA(e.localStore,s);if(o===null){e.U_.length===0&&t.P_();break}s=o.batchId,VA(e,o)}catch(o){await Fu(e,o)}ev(e)&&tv(e)}function DA(i){return os(i)&&i.U_.length<10}function VA(i,e){i.U_.push(e);const t=gi(i);t.c_()&&t.S_&&t.b_(e.mutations)}function ev(i){return os(i)&&!gi(i).u_()&&i.U_.length>0}function tv(i){gi(i).start()}async function OA(i){gi(i).C_()}async function LA(i){const e=gi(i);for(const t of i.U_)e.b_(t.mutations)}async function MA(i,e,t){const s=i.U_.shift(),o=Xd.from(s,e,t);await Z_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await rc(i)}async function bA(i,e){e&&gi(i).S_&&await async function(s,o){if(function(h){return vS(h)&&h!==K.ABORTED}(o.code)){const u=s.U_.shift();gi(s).h_(),await Z_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await rc(s)}}(i,e),ev(i)&&tv(i)}async function Wg(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),re(rs,"RemoteStore received new credentials");const s=os(t);t.W_.add(3),await za(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await nc(t)}async function UA(i,e){const t=we(i);e?(t.W_.delete(2),await nc(t)):e||(t.W_.add(2),await za(t),t.j_.set("Unknown"))}function To(i){return i.J_||(i.J_=function(t,s,o){const u=we(t);return u.M_(),new TA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:kA.bind(null,i),No:PA.bind(null,i),Lo:NA.bind(null,i),p_:xA.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),af(i)?of(i):i.j_.set("Unknown")):(await i.J_.stop(),J_(i))})),i.J_}function gi(i){return i.Y_||(i.Y_=function(t,s,o){const u=we(t);return u.M_(),new IA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:OA.bind(null,i),Lo:bA.bind(null,i),D_:LA.bind(null,i),v_:MA.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await rc(i)):(await i.Y_.stop(),i.U_.length>0&&(re(rs,`Stopping write stream with ${i.U_.length} pending writes`),i.U_=[]))})),i.Y_}/**
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
 */class lf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new lf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uf(i,e){if(Cr("AsyncQueue",`${e}: ${i}`),wo(i))return new he(K.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=va(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class qg{constructor(){this.Z_=new Je(me.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):ge():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class mo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new mo(e,t,oo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class FA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class jA{constructor(){this.queries=Kg(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=Kg(),u.forEach((h,m)=>{for(const y of m.ta)y.onError(s)})})(this,new he(K.ABORTED,"Firestore shutting down"))}}function Kg(){return new ss(i=>T_(i),Xu)}async function zA(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new FA,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=uf(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&cf(t)}async function BA(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function $A(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ta)m.oa(o)&&(s=!0);h.ea=o}}s&&cf(t)}function HA(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function cf(i){i.ia.forEach(e=>{e.next()})}var _d,Gg;(Gg=_d||(_d={}))._a="default",Gg.Cache="cache";class WA{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new mo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==_d.Cache}}/**
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
 */class nv{constructor(e){this.key=e}}class rv{constructor(e){this.key=e}}class qA{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=I_(e),this.wa=new oo(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new qg,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,C)=>{const L=o.get(w),U=Yu(this.query,C)?C:null,z=!!L&&this.mutatedKeys.has(L.key),Q=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let H=!1;L&&U?L.data.isEqual(U.data)?z!==Q&&(s.track({type:3,doc:U}),H=!0):this.va(L,U)||(s.track({type:2,doc:U}),H=!0,(y&&this.ya(U,y)>0||v&&this.ya(U,v)<0)&&(m=!0)):!L&&U?(s.track({type:0,doc:U}),H=!0):L&&!U&&(s.track({type:1,doc:L}),H=!0,(y||v)&&(m=!0)),H&&(U?(h=h.add(U),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{wa:h,Da:s,ls:m,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((w,C)=>function(U,z){const Q=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return Q(U)-Q(z)}(w.type,C.type)||this.ya(w.doc,C.doc)),this.Ca(s),o=o!=null&&o;const m=t&&!o?this.Fa():[],y=this.pa.size===0&&this.current&&!o?1:0,v=y!==this.ga;return this.ga=y,h.length!==0||v?{snapshot:new mo(this.query,e.wa,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new qg,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new rv(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new nv(s))}),t}Oa(e){this.fa=e.gs,this.pa=ke();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return mo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const hf="SyncEngine";class KA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class GA{constructor(e){this.key=e,this.Ba=!1}}class QA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new ss(m=>T_(m),Xu),this.qa=new Map,this.Qa=new Set,this.$a=new Je(me.comparator),this.Ua=new Map,this.Ka=new Zd,this.Wa={},this.Ga=new Map,this.za=po.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function XA(i,e,t=!0){const s=uv(i);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await iv(s,e,t,!0),o}async function YA(i,e){const t=uv(i);await iv(t,e,!0,!1)}async function iv(i,e,t,s){const o=await pA(i.localStore,Yn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await JA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&X_(i.remoteStore,o),m}async function JA(i,e,t,s,o){i.Ha=(C,L,U)=>async function(Q,H,ee,ie){let ue=H.view.ba(ee);ue.ls&&(ue=await jg(Q.localStore,H.query,!1).then(({documents:N})=>H.view.ba(N,ue)));const Te=ie&&ie.targetChanges.get(H.targetId),Fe=ie&&ie.targetMismatches.get(H.targetId)!=null,ve=H.view.applyChanges(ue,Q.isPrimaryClient,Te,Fe);return Xg(Q,H.targetId,ve.Ma),ve.snapshot}(i,C,L,U);const u=await jg(i.localStore,e,!0),h=new qA(e,u.gs),m=h.ba(u.documents),y=ja.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Xg(i,t,v.Ma);const w=new KA(e,t,h);return i.ka.set(e,w),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),v.snapshot}async function ZA(i,e,t){const s=we(i),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!Xu(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await gd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&rf(s.remoteStore,o.targetId),vd(s,o.targetId)}).catch(Eo)):(vd(s,o.targetId),await gd(s.localStore,o.targetId,!0))}async function eR(i,e){const t=we(i),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),rf(t.remoteStore,s.targetId))}async function tR(i,e,t){const s=lR(i);try{const o=await function(h,m){const y=we(h),v=ft.now(),w=m.reduce((U,z)=>U.add(z.key),ke());let C,L;return y.persistence.runTransaction("Locally write mutations","readwrite",U=>{let z=kr(),Q=ke();return y.ds.getEntries(U,w).next(H=>{z=H,z.forEach((ee,ie)=>{ie.isValidDocument()||(Q=Q.add(ee))})}).next(()=>y.localDocuments.getOverlayedDocuments(U,z)).next(H=>{C=H;const ee=[];for(const ie of m){const ue=pS(ie,C.get(ie.key).overlayedDocument);ue!=null&&ee.push(new vi(ie.key,ue,p_(ue.value.mapValue),bn.exists(!0)))}return y.mutationQueue.addMutationBatch(U,v,ee,m)}).next(H=>{L=H;const ee=H.applyToLocalDocumentSet(C,Q);return y.documentOverlayCache.saveOverlays(U,H.batchId,ee)})}).then(()=>({batchId:L.batchId,changes:A_(C)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.Wa[h.currentUser.toKey()];v||(v=new Je(Se)),v=v.insert(m,y),h.Wa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ba(s,o.changes),await rc(s.remoteStore)}catch(o){const u=uf(o,"Failed to persist write");t.reject(u)}}async function sv(i,e){const t=we(i);try{const s=await hA(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ua.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?be(h.Ba):o.removedDocuments.size>0&&(be(h.Ba),h.Ba=!1))}),await Ba(t,s,e)}catch(s){await Eo(s)}}function Qg(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const m=h.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=we(h);y.onlineState=m;let v=!1;y.queries.forEach((w,C)=>{for(const L of C.ta)L.sa(m)&&(v=!0)}),v&&cf(y)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nR(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ua.get(e),u=o&&o.key;if(u){let h=new Je(me.comparator);h=h.insert(u,Mt.newNoDocument(u,Ee.min()));const m=ke().add(u),y=new ec(Ee.min(),new Map,new Je(Se),h,m);await sv(s,y),s.$a=s.$a.remove(u),s.Ua.delete(e),df(s)}else await gd(s.localStore,e,!1).then(()=>vd(s,e,t)).catch(Eo)}async function rR(i,e){const t=we(i),s=e.batch.batchId;try{const o=await cA(t.localStore,e);av(t,s,null),ov(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ba(t,o)}catch(o){await Eo(o)}}async function iR(i,e,t){const s=we(i);try{const o=await function(h,m){const y=we(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(C=>(be(C!==null),w=C.keys(),y.mutationQueue.removeMutationBatch(v,C))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);av(s,e,t),ov(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ba(s,o)}catch(o){await Eo(o)}}function ov(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function av(i,e,t){const s=we(i);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function vd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ka.br(e).forEach(s=>{i.Ka.containsKey(s)||lv(i,s)})}function lv(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(rf(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ua.delete(t),df(i))}function Xg(i,e,t){for(const s of t)s instanceof nv?(i.Ka.addReference(s.key,e),sR(i,s)):s instanceof rv?(re(hf,"Document no longer in limbo: "+s.key),i.Ka.removeReference(s.key,e),i.Ka.containsKey(s.key)||lv(i,s.key)):ge()}function sR(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(re(hf,"New document in limbo: "+t),i.Qa.add(s),df(i))}function df(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new me(Qe.fromString(e)),s=i.za.next();i.Ua.set(s,new GA(t)),i.$a=i.$a.insert(t,s),X_(i.remoteStore,new si(Yn(w_(t.path)),s,"TargetPurposeLimboResolution",qu.ae))}}async function Ba(i,e,t){const s=we(i),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((m,y)=>{h.push(s.Ha(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,C?"current":"not-current")}if(v){o.push(v);const C=tf.Yi(y.targetId,v);u.push(C)}}))}),await Promise.all(h),s.La.p_(o),await async function(y,v){const w=we(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>B.forEach(v,L=>B.forEach(L.Hi,U=>w.persistence.referenceDelegate.addReference(C,L.targetId,U)).next(()=>B.forEach(L.Ji,U=>w.persistence.referenceDelegate.removeReference(C,L.targetId,U)))))}catch(C){if(!wo(C))throw C;re(nf,"Failed to update sequence numbers: "+C)}for(const C of v){const L=C.targetId;if(!C.fromCache){const U=w.Ts.get(L),z=U.snapshotVersion,Q=U.withLastLimboFreeSnapshotVersion(z);w.Ts=w.Ts.insert(L,Q)}}}(s.localStore,u))}async function oR(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){re(hf,"User change. New user:",e.toKey());const s=await q_(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(m=>{m.forEach(y=>{y.reject(new he(K.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ba(t,s.Rs)}}function aR(i,e){const t=we(i),s=t.Ua.get(e);if(s&&s.Ba)return ke().add(s.key);{let o=ke();const u=t.qa.get(e);if(!u)return o;for(const h of u){const m=t.ka.get(h);o=o.unionWith(m.view.Sa)}return o}}function uv(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nR.bind(null,e),e.La.p_=$A.bind(null,e.eventManager),e.La.Ja=HA.bind(null,e.eventManager),e}function lR(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iR.bind(null,e),e}class ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return uA(this.persistence,new oA,e.initialUser,this.serializer)}Xa(e){return new W_(ef.ri,this.serializer)}Za(e){return new gA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ju.provider={build:()=>new ju};class uR extends ju{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){be(this.persistence.referenceDelegate instanceof Uu);const s=this.persistence.referenceDelegate.garbageCollector;return new WS(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new W_(s=>Uu.ri(s,t),this.serializer)}}class Ed{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oR.bind(null,this.syncEngine),await UA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jA}()}createDatastore(e){const t=tc(e.databaseInfo.databaseId),s=function(u){return new wA(u)}(e.databaseInfo);return function(u,h,m,y){return new AA(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new CA(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Qg(this.syncEngine,t,0),function(){return $g.D()?new $g:new yA}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const C=new QA(o,u,h,m,y,v);return w&&(C.ja=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=we(o);re(rs,"RemoteStore shutting down."),u.W_.add(5),await za(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ed.provider={build:()=>new Ed};/**
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
 */class cR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const yi="FirestoreClient";class hR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=i_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{re(yi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(re(yi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=uf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xh(i,e){i.asyncQueue.verifyOperationInProgress(),re(yi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await q_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Yg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await dR(i);re(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Wg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Wg(e.remoteStore,o)),i._onlineComponents=e}async function dR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){re(yi,"Using user provided OfflineComponentProvider");try{await Xh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;uo("Error using user provided cache. Falling back to memory cache: "+t),await Xh(i,new ju)}}else re(yi,"Using default OfflineComponentProvider"),await Xh(i,new uR(void 0));return i._offlineComponents}async function cv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(re(yi,"Using user provided OnlineComponentProvider"),await Yg(i,i._uninitializedComponentsProvider._online)):(re(yi,"Using default OnlineComponentProvider"),await Yg(i,new Ed))),i._onlineComponents}function fR(i){return cv(i).then(e=>e.syncEngine)}async function pR(i){const e=await cv(i),t=e.eventManager;return t.onListen=XA.bind(null,e.syncEngine),t.onUnlisten=ZA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eR.bind(null,e.syncEngine),t}function mR(i,e,t={}){const s=new ci;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new cR({next:L=>{w.su(),h.enqueueAndForget(()=>BA(u,C)),L.fromCache&&y.source==="server"?v.reject(new he(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(L)},error:L=>v.reject(L)}),C=new WA(m,w,{includeMetadataChanges:!0,Ta:!0});return zA(u,C)}(await pR(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function hv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Jg=new Map;/**
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
 */function dv(i,e,t){if(!t)throw new he(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function gR(i,e,t,s){if(e===!0&&s===!0)throw new he(K.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Zg(i){if(!me.isDocumentKey(i))throw new he(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ey(i){if(me.isDocumentKey(i))throw new he(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ff(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ge()}function is(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ff(i);throw new he(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const fv="firestore.googleapis.com",ty=!0;class ny{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fv,this.ssl=ty}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ty;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=H_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$S)throw new he(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ic{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vI;switch(s.type){case"firstParty":return new II(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Jg.get(t);s&&(re("ComponentProvider","Removing Datastore"),Jg.delete(t),s.terminate())}(this),Promise.resolve()}}function yR(i,e,t,s={}){var o;const u=(i=is(i,ic))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;u.host!==fv&&u.host!==m&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!Zi(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,w;if(typeof s.mockUserToken=="string")v=s.mockUserToken,w=Lt.MOCK_USER;else{v=KE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new he(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Lt(C)}i._authCredentials=new EI(new n_(v,w))}}/**
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
 */class sc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new sc(this.firestore,e,this._query)}}class vn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class hi extends sc{constructor(e,t,s){super(e,t,w_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new me(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function wd(i,e,...t){if(i=Bt(i),dv("collection","path",e),i instanceof ic){const s=Qe.fromString(e,...t);return ey(s),new hi(i,null,s)}{if(!(i instanceof vn||i instanceof hi))throw new he(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return ey(s),new hi(i.firestore,null,s)}}function Yi(i,e,...t){if(i=Bt(i),arguments.length===1&&(e=i_.newId()),dv("doc","path",e),i instanceof ic){const s=Qe.fromString(e,...t);return Zg(s),new vn(i,null,new me(s))}{if(!(i instanceof vn||i instanceof hi))throw new he(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return Zg(s),new vn(i.firestore,i instanceof hi?i.converter:null,new me(s))}}/**
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
 */const ry="AsyncQueue";class iy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new G_(this,"async_queue_retry"),this.Su=()=>{const s=Qh();s&&re(ry,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=Qh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Qh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ci;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!wo(e))throw e;re(ry,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Cr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=lf.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&ge()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class $a extends ic{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new iy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iy(e),this._firestoreClient=void 0,await e}}}function _R(i,e){const t=typeof i=="object"?i:gy(),s=typeof i=="string"?i:xu,o=Nd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=WE("firestore");u&&yR(o,...u)}return o}function pv(i){if(i._terminated)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||vR(i),i._firestoreClient}function vR(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,w){return new UI(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,hv(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new hR(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(Ct.fromBase64String(e))}catch(t){throw new he(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new go(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pf{constructor(e){this._methodName=e}}/**
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
 */class mf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class gf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const ER=/^__.*__$/;class wR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fa(e,this.data,t,this.fieldTransforms)}}class mv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class yf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return zu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(gv(this.Lu)&&ER.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class TR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||tc(e)}ju(e,t,s,o=!1){return new yf({Lu:e,methodName:t,zu:s,path:Rt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yv(i){const e=i._freezeSettings(),t=tc(i._databaseId);return new TR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function IR(i,e,t,s,o,u={}){const h=i.ju(u.merge||u.mergeFields?2:0,e,t,o);_f("Data must be an object, but it was:",h,s);const m=_v(s,h);let y,v;if(u.merge)y=new ln(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const L=Td(e,C,t);if(!h.contains(L))throw new he(K.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);Ev(w,L)||w.push(L)}y=new ln(w),v=h.fieldTransforms.filter(C=>y.covers(C.field))}else y=null,v=h.fieldTransforms;return new wR(new Jt(m),y,v)}class ac extends pf{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}function SR(i,e,t,s){const o=i.ju(1,e,t);_f("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();_i(s,(y,v)=>{const w=vf(e,y,t);v=Bt(v);const C=o.Uu(w);if(v instanceof ac)u.push(w);else{const L=lc(v,C);L!=null&&(u.push(w),h.set(w,L))}});const m=new ln(u);return new mv(h,m,o.fieldTransforms)}function AR(i,e,t,s,o,u){const h=i.ju(1,e,t),m=[Td(e,s,t)],y=[o];if(u.length%2!=0)throw new he(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let L=0;L<u.length;L+=2)m.push(Td(e,u[L])),y.push(u[L+1]);const v=[],w=Jt.empty();for(let L=m.length-1;L>=0;--L)if(!Ev(v,m[L])){const U=m[L];let z=y[L];z=Bt(z);const Q=h.Uu(U);if(z instanceof ac)v.push(U);else{const H=lc(z,Q);H!=null&&(v.push(U),w.set(U,H))}}const C=new ln(v);return new mv(w,C,h.fieldTransforms)}function lc(i,e){if(vv(i=Bt(i)))return _f("Unsupported field value:",e,i),_v(i,e);if(i instanceof pf)return function(s,o){if(!gv(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=lc(m,o.Ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Bt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:bu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:bu(o.serializer,u)}}if(s instanceof mf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof go)return{bytesValue:b_(o.serializer,s._byteString)};if(s instanceof vn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Jd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof gf)return function(h,m){return{mapValue:{fields:{[d_]:{stringValue:f_},[Du]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.Wu("VectorValues must only contain numeric values.");return Gd(m.serializer,v)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${ff(s)}`)}(i,e)}function _v(i,e){const t={};return o_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(i,(s,o)=>{const u=lc(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function vv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof mf||i instanceof go||i instanceof vn||i instanceof pf||i instanceof gf)}function _f(i,e,t){if(!vv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=ff(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function Td(i,e,t){if((e=Bt(e))instanceof oc)return e._internalPath;if(typeof e=="string")return vf(i,e);throw zu("Field path arguments must be of type string or ",i,!1,void 0,t)}const RR=new RegExp("[~\\*/\\[\\]]");function vf(i,e,t){if(e.search(RR)>=0)throw zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new oc(...e.split("."))._internalPath}catch{throw zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function zu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new he(K.INVALID_ARGUMENT,m+i+y)}function Ev(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class wv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CR extends wv{data(){return super.data()}}function Tv(i,e){return typeof e=="string"?vf(i,e):e instanceof oc?e._internalPath:e._delegate._internalPath}/**
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
 */function kR(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new he(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PR{convertValue(e,t="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return _i(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Du].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new gf(u)}convertGeoPoint(e){return new mf(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Gu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Pa(e));default:return null}}convertTimestamp(e){const t=fi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);be($_(s));const o=new Na(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(t)||Cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function NR(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xR extends wv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Tv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Tu extends xR{data(e={}){return super.data(e)}}class DR{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new du(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Tu(this._firestore,this._userDataWriter,s.key,s,new du(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new Tu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new du(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Tu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new du(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:VR(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function VR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}class OR extends PR{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,t)}}function Id(i){i=is(i,sc);const e=is(i.firestore,$a),t=pv(e),s=new OR(e);return kR(i._query),mR(t,i._query).then(o=>new DR(e,s,i,o))}function Sd(i,e,t,...s){i=is(i,vn);const o=is(i.firestore,$a),u=yv(o);let h;return h=typeof(e=Bt(e))=="string"||e instanceof oc?AR(u,"updateDoc",i._key,e,t,s):SR(u,"updateDoc",i._key,e),Ef(o,[h.toMutation(i._key,bn.exists(!0))])}function Ad(i){return Ef(is(i.firestore,$a),[new Qd(i._key,bn.none())])}function Rd(i,e){const t=is(i.firestore,$a),s=Yi(i),o=NR(i.converter,e);return Ef(t,[IR(yv(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then(()=>s)}function Ef(i,e){return function(s,o){const u=new ci;return s.asyncQueue.enqueueAndForget(async()=>tR(await fR(s),o,u)),u.promise}(pv(i),e)}(function(e,t=!0){(function(o){vo=o})(yo),ao(new es("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new $a(new wI(s.getProvider("auth-internal")),new SI(h,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new he(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),li(cg,hg,e),li(cg,hg,"esm2017")})();const LR={apiKey:"AIzaSyAuEXFJVcSkliUqQYPQZOCSA3TGd8iNTxU",authDomain:"inventario-colegio-a6278.firebaseapp.com",projectId:"inventario-colegio-a6278",storageBucket:"inventario-colegio-a6278.firebasestorage.app",messagingSenderId:"456773137762",appId:"1:456773137762:web:b1d9711c377eb7d40c283b"},Iv=my(LR),Sv=mI(Iv),Er=_R(Iv);function MR({InicioDeSesionExitoso:i}){const[e,t]=an.useState(""),s=async()=>{const o=new wr;try{const u=await ST(Sv,o);u.user.email==="computacion@wessexschool.cl"?(t(""),i(u.user)):t("Correo no autorizado")}catch(u){t("Error al iniciar sesión. Inténtalo de nuevo."),console.log("Error al iniciar sesión:",u)}};return Z.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100dvh",backgroundColor:"white",textAlign:"center",padding:"20px",maxWidth:"10000px",margin:"0 auto",boxSizing:"border-box"},children:[Z.jsx("h1",{style:{color:"#050576",fontSize:"clamp(1.5rem, 5vw, 3rem)",marginBottom:"20px"},children:"Bienvenido al Inventario"}),e&&Z.jsxs("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"20px",borderRadius:"10px",zIndex:1e3,textAlign:"center",maxWidth:"90%",boxSizing:"border-box"},children:[Z.jsx("p",{style:{margin:0,fontSize:"clamp(1rem, 2vw, 1.5rem)"},children:e}),Z.jsx("button",{onClick:()=>t(""),style:{marginTop:"10px",padding:"10px 20px",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",fontSize:"clamp(1rem, 2vw, 1.2rem)",cursor:"pointer"},children:"Cerrar"})]}),Z.jsxs("div",{children:[Z.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.5rem)",marginBottom:"20px"},children:"Por favor, inicia sesión para continuar."}),Z.jsx("button",{onClick:s,style:{padding:"10px 20px",backgroundColor:"#050576",color:"white",border:"none",borderRadius:"5px",fontSize:"clamp(1rem, 2vw, 1.2rem)",cursor:"pointer",transition:"background-color 0.3s"},onMouseOver:o=>o.target.style.backgroundColor="#f44336",onMouseOut:o=>o.target.style.backgroundColor="#050576",children:"Iniciar sesión con Google"})]})]})}function bR({mensaje:i}){return i?Z.jsx("div",{style:{position:"fixed",top:"10%",left:"50%",transform:"translateX(-50%)",backgroundColor:"#050576",color:"white",padding:"10px 20px",borderRadius:"8px",zIndex:9999,boxShadow:"0 0 10px rgba(0,0,0,0.3)",fontWeight:"bold"},children:i}):null}function UR({departamento:i,mostrarAlerta:e}){const[t,s]=an.useState([]),[o,u]=an.useState([]),[h,m]=an.useState(!1),y=wd(Er,"departamentos",i,"wifi"),v=wd(Er,"departamentos",i,"personal"),w=async()=>{const ee=await Id(y);s(ee.docs.map(ue=>({...ue.data(),id:ue.id})));const ie=await Id(v);u(ie.docs.map(ue=>({...ue.data(),id:ue.id})))};an.useEffect(()=>{h&&w()},[h]);const C=async()=>{const ee=await Rd(y,{nombre:"",clave:""});s([...t,{id:ee.id,nombre:"",clave:""}])},L=async(ee,ie,ue)=>{const Te=Yi(Er,"departamentos",i,"wifi",ee);await Sd(Te,{[ie]:ue}),s(Fe=>Fe.map(ve=>ve.id===ee?{...ve,[ie]:ue}:ve)),e("WiFi actualizado")},U=async ee=>{await Ad(Yi(Er,"departamentos",i,"wifi",ee)),s(t.filter(ie=>ie.id!==ee)),e("WiFi eliminado")},z=async()=>{const ee=await Rd(v,{nombre:"",correo:""});u([...o,{id:ee.id,nombre:"",correo:""}])},Q=async(ee,ie,ue)=>{const Te=Yi(Er,"departamentos",i,"personal",ee);await Sd(Te,{[ie]:ue}),u(Fe=>Fe.map(ve=>ve.id===ee?{...ve,[ie]:ue}:ve)),e("Personal actualizado")},H=async ee=>{await Ad(Yi(Er,"departamentos",i,"personal",ee)),u(o.filter(ie=>ie.id!==ee)),e("Personal eliminado")};return Z.jsxs(Z.Fragment,{children:[Z.jsx("button",{onClick:()=>m(!h),style:{marginLeft:"10px",backgroundColor:"#2196f3",color:"white",padding:"8px 15px",border:"none",borderRadius:"5px",cursor:"pointer"},children:h?"Ocultar info":"Info del Departamento"}),h&&Z.jsxs("div",{style:{marginTop:"1rem",background:"#f0f0f0",padding:"15px",borderRadius:"8px"},children:[Z.jsx("h3",{children:"WiFi"}),t.map(ee=>Z.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"5px"},children:[Z.jsx("input",{placeholder:"Nombre",value:ee.nombre,onChange:ie=>L(ee.id,"nombre",ie.target.value)}),Z.jsx("input",{placeholder:"Clave",value:ee.clave,onChange:ie=>L(ee.id,"clave",ie.target.value)}),Z.jsx("button",{onClick:()=>U(ee.id),style:oy,children:"❌"})]},ee.id)),Z.jsx("button",{onClick:C,style:{...sy,backgroundColor:"gray"},children:"+ Agregar WiFi"}),Z.jsx("h3",{style:{marginTop:"1rem"},children:"Personal"}),o.map(ee=>Z.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"5px"},children:[Z.jsx("input",{placeholder:"Nombre",value:ee.nombre,onChange:ie=>Q(ee.id,"nombre",ie.target.value)}),Z.jsx("input",{placeholder:"Correo",value:ee.correo,onChange:ie=>Q(ee.id,"correo",ie.target.value)}),Z.jsx("button",{onClick:()=>H(ee.id),style:oy,children:"❌"})]},ee.id)),Z.jsx("button",{onClick:z,style:{...sy,backgroundColor:"gray"},children:"+ Agregar Personal"})]})]})}const sy={padding:"8px 15px",backgroundColor:"#050576",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},oy={backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",padding:"5px 10px"};function FR({departamento:i}){const[e,t]=an.useState([]),[s,o]=an.useState(""),u=wd(Er,"departamentos",i,"equipos"),h=async()=>{const U=await Id(u);t(U.docs.map(z=>({...z.data(),id:z.id})))};an.useEffect(()=>{i&&h()},[i]);const m=U=>{o(U),setTimeout(()=>o(""),3e3)},y=async()=>{const U={tipo:"",marca:"",complementos:"",estado:"Desconocido",fecha:new Date().toISOString().split("T")[0],cantidad:1,observaciones:""},z=await Rd(u,U);t([...e,{...U,id:z.id}]),m("Equipo agregado")},v=async(U,z,Q)=>{const H=Yi(Er,"departamentos",i,"equipos",U);await Sd(H,{[z]:z==="cantidad"?parseInt(Q,10):Q}),t(ee=>ee.map(ie=>ie.id===U?{...ie,[z]:Q}:ie))},w=async U=>{await Ad(Yi(Er,"departamentos",i,"equipos",U)),t(e.filter(z=>z.id!==U)),m("Equipo eliminado")},C=U=>{switch(U){case"Desconocido":return"gray";case"Reemplazar":return"red";case"Mejorar":return"orange";case"Mantener":return"green";default:return"black"}},L=()=>e.reduce((U,z)=>U+(parseInt(z.cantidad,10)||0),0);return Z.jsxs("div",{style:{width:"100%",marginTop:"2rem"},children:[Z.jsx(bR,{mensaje:s}),Z.jsx("h2",{style:{color:"#050576"},children:i}),Z.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"1rem"},children:[Z.jsx("button",{onClick:y,style:jR,children:"+ Agregar equipo"}),Z.jsx(UR,{departamento:i,mostrarAlerta:m})]}),Z.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[Z.jsx("thead",{children:Z.jsxs("tr",{style:{backgroundColor:"#e0e0e0"},children:[Z.jsx("th",{children:"Tipo"}),Z.jsx("th",{children:"Marca"}),Z.jsx("th",{children:"Complementos"}),Z.jsx("th",{children:"Estado"}),Z.jsx("th",{children:"Fecha"}),Z.jsx("th",{children:"Cantidad"}),Z.jsx("th",{children:"Observaciones"}),Z.jsx("th",{children:"Eliminar"})]})}),Z.jsx("tbody",{children:e.map(U=>Z.jsxs("tr",{children:[Z.jsx("td",{children:Z.jsx("input",{value:U.tipo,onChange:z=>v(U.id,"tipo",z.target.value)})}),Z.jsx("td",{children:Z.jsx("input",{value:U.marca,onChange:z=>v(U.id,"marca",z.target.value)})}),Z.jsx("td",{children:Z.jsx("input",{value:U.complementos,onChange:z=>v(U.id,"complementos",z.target.value)})}),Z.jsx("td",{children:Z.jsxs("select",{value:U.estado,onChange:z=>v(U.id,"estado",z.target.value),style:{backgroundColor:C(U.estado),color:"white"},children:[Z.jsx("option",{value:"Desconocido",children:"Desconocido"}),Z.jsx("option",{value:"Reemplazar",children:"Reemplazar"}),Z.jsx("option",{value:"Mejorar",children:"Mejorar"}),Z.jsx("option",{value:"Mantener",children:"Mantener"})]})}),Z.jsx("td",{children:U.fecha}),Z.jsx("td",{children:Z.jsx("input",{type:"number",min:"1",value:U.cantidad,onChange:z=>v(U.id,"cantidad",z.target.value)})}),Z.jsx("td",{children:Z.jsx("input",{value:U.observaciones,onChange:z=>v(U.id,"observaciones",z.target.value)})}),Z.jsx("td",{children:Z.jsx("button",{onClick:()=>w(U.id),style:zR,children:"🗑️"})})]},U.id))})]}),Z.jsxs("p",{style:{textAlign:"right",marginTop:"10px",fontWeight:"bold"},children:["Total: ",L()]})]})}const jR={padding:"8px 15px",backgroundColor:"#050576",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},zR={backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",cursor:"pointer",padding:"5px 10px"};function BR({user:i,cerrarSesion:e}){const[t,s]=an.useState(null),[o,u]=an.useState(!1);an.useEffect(()=>{const v=localStorage.getItem("departamento_activo");v&&s(v),u(!0)},[]);const h=async()=>{try{await iT(Sv),e()}catch{alert("Error al cerrar sesión")}},m=["Biblioteca","Computación","Lenguaje","Ciencias","Matemáticas","Infant","PE","Inglés","Administración"],y=v=>{s(v),localStorage.setItem("departamento_activo",v)};return Z.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100dvh",width:"100vw",backgroundColor:"white",position:"relative",overflow:"hidden",padding:"5vw",maxWidth:"10000px",margin:"0 auto",boxSizing:"border-box"},children:[Z.jsx("div",{style:{position:"absolute",top:"2%",left:"2%",width:"fit-content",maxWidth:"180px",zIndex:10,pointerEvents:"none",overflowWrap:"break-word",lineHeight:"1.2"},children:Z.jsxs("h4",{style:{margin:0,color:"#050576",fontSize:"clamp(1rem, 2vw, 1.2rem)",wordWrap:"break-word"},children:["Hola, ",i.displayName]})}),Z.jsx("h1",{style:{color:"#050576",marginTop:"6vh",marginBottom:"5vh",textAlign:"center",fontSize:"clamp(1.5rem, 5vw, 3rem)",lineHeight:"1.2",wordWrap:"break-word",maxWidth:"90%"},children:"¿A qué departamento quieres ingresar?"}),Z.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"2vw",justifyContent:"center",width:"100%",maxWidth:"800px"},children:m.map(v=>Z.jsx("button",{onClick:()=>y(v),style:{flex:"1 1 150px",maxWidth:"200px",padding:"clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",backgroundColor:t===v?"#4CAF50":"#050576",color:"white",border:"none",borderRadius:"8px",fontSize:"clamp(0.9rem, 1.5vw, 1rem)",cursor:"pointer",transition:"background-color 0.3s",textAlign:"center",boxShadow:t===v?"0 0 10px rgba(0, 0, 0, 0.3)":"none"},onMouseOver:w=>{w.target.style.backgroundColor=t===v?"#4CAF50":"#f44336"},onMouseOut:w=>{w.target.style.backgroundColor=t===v?"#4CAF50":"#050576"},children:v},v))}),Z.jsx("button",{onClick:h,style:{marginTop:"5vh",padding:"clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",backgroundColor:"#f44336",color:"white",border:"none",borderRadius:"5px",fontSize:"clamp(1rem, 2vw, 1.2rem)",cursor:"pointer"},children:"Cerrar sesión"}),o&&t&&Z.jsx(FR,{departamento:t})]})}function $R(){const[i,e]=an.useState(null);return Z.jsx("div",{children:i?Z.jsx(BR,{user:i,cerrarSesion:()=>e(null)}):Z.jsx(MR,{InicioDeSesionExitoso:t=>e(t)})})}ME.createRoot(document.getElementById("root")).render(Z.jsx(an.StrictMode,{children:Z.jsx($R,{})}));
