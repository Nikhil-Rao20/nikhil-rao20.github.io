var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function k(e){e[Ct]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&nn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&nn(e,a,t[a])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(s(90));Jt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)vi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=_i(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return Si(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=_i(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=_i(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=_i(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=_i(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-qe(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(Di(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=me(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,D($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;jr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=me(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Si(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case w:return t=Fa(t),f(e,t,n)}if(ue(t)||se(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===S)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Fa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===S)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Fa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===S)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=Si(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=xi(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}t(e,r),r=r.sibling}c=Ti(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Fa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===S)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Ci(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=me(null),oo=me(0);function so(e,t){e=Gl,O(oo,e),O(ao,t),Gl=e|t.baseLanes}function co(){O(oo,Gl),O(ao,ao.current)}function lo(){Gl=oo.current,D(ao),D(oo)}var uo=me(null),fo=null;function po(e){var t=e.alternate;O(N,N.current&1),O(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){O(N,N.current),O(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(O(N,N.current),O(uo,e),fo===null&&(fo=e)):go(e)}function go(){O(N,N.current),O(uo,uo.current)}function _o(e){D(uo),fo===e&&(fo=null),D(N)}var N=me(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){T.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return la(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!jr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);jr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!jr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,zs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,de,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Di(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(Di(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Di(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||oa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,fi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(N.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(j){if(i?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Si(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Si(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,i,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&sa(e)))}function Fc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=lc(null,t,e,r,n);break a}if(i===re){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Di(Error(s(424)),t),Qi(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),k(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[gt]=t,a[_t]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(D(N),r=t.memoizedState,r===null)return B(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return O(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return B(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=N.current,O(N,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(N),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&D(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:D(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&D(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,!!(n.subtreeFlags&8772)):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[gt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[gt]=e,k(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[gt]=e,k(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{en(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(en(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,T.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=T.H;return T.H=Us,e===null?Us:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=ci,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=fi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var s=ni.get(e);if(s!==void 0){var c=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:c=Jn;break;case`focusin`:u=`focus`,c=zn;break;case`focusout`:u=`blur`,c=zn;break;case`beforeblur`:case`afterblur`:c=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Xn;break;case Yr:case Xr:case Zr:c=Bn;break;case ti:c=Zn;break;case`scroll`:case`scrollend`:c=Mn;break;case`wheel`:c=Qn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Yn;break;case`toggle`:case`beforetoggle`:c=$n}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=yr;else if(pr(s))if(br)v=kr;else{v=Dr;var y=Er}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Xt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(o,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(o,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,a);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:rn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}$t(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),k(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),k(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);k(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),k(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),k(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,k(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),k(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,k(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),k(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,k(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),k(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,k(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),k(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=new Map([{route:`index.html`,title:`Nikhileswara Rao Sulake`,description:`Nikhileswara Rao Sulake Personal Website - AI researcher portfolio featuring research papers, projects, publications, and experience in computer vision, medical imaging, and deep learning.`,portfolioChrome:!0,html:`\r
\r
  <!-- navbar include -->\r
  \r
\r
  <div class="spacer-div-3 hidden-xs hidden-xs"></div>\r
\r
  <!-- Main content    -->\r
  <div id="main-container" class="container">\r
\r
    <div class="row">\r
      <div class="col-sm-4">\r
        <img class="center-block img img-responsive img-thumbnail" src="/assets/img/gallery/Nikhil Rao.png" alt="Image of Nikhil">\r
\r
        <p id="title">Bachelors Student<br>\r
          <span id="program">Junior in Computer Science and Engineering</span>\r
        </p>\r
\r
        <table class="table" id="contact-table">\r
          <tbody>\r
            <tr>\r
              <td style="width:30px"><i class="fas fa-home"></i></td>\r
              <td>\r
                Vijayawada, India\r
              </td>\r
            </tr>\r
            <tr>\r
              <td style="width:30px"><i class="fas fa-university"></i></td>\r
              <td>\r
                RGUKT Nuzvid\r
              </td>\r
            </tr>\r
            <!-- <tr>\r
              <td style="width:30px"><i class="fas fa-university"></i></td>\r
              <td>\r
                University of California, Berkeley\r
              </td>\r
            </tr> -->\r
            <tr>\r
              <td><i class="fas fa-at"></i></td>\r
              <td><a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a></td>\r
            </tr>\r
            <tr>\r
              <td><i class="ai ai-google-scholar"></i></td>\r
              <td><a href="https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en" target="_blank">Google Scholar</a></td>\r
            </tr>\r
            <tr>\r
              <td><i class="fab fa-linkedin"></i></td>\r
              <td><a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">Linkedin</a></td>\r
            </tr>\r
            <tr>\r
              <td><i class="fas fa-file-pdf"></i></td>\r
              <td><a href="/assets/Nikhil_Rao_CV.pdf" target="_blank">CV</a></td>\r
            </tr>\r
          </tbody>\r
        </table>\r
\r
      </div>\r
      <div class="col-sm-8">\r
        <p>\r
            \r
            Hello, I'm Nikhileswara Rao Sulake, a Bachelor’s student in Computer Science and Engineering at <a href="https://rguktn.ac.in/" target="_blank" rel="noopener noreferrer">RGUKT (Rajiv Gandhi University of Knowledge Technologies)</a> in Vijayawada, India with a strong focus on Deep Learning, Computer Vision, and Medical Imaging. Thank you for visiting my profile.<br><br>\r
            I previously interned at \r
            <a href="https://med.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford Medicine</a> under the guidance of \r
            <a href="https://profiles.stanford.edu/arutselvan-natarajan" target="_blank" rel="noopener noreferrer">Dr. Arutselvan Natarajan</a> and \r
            <a href="https://profiles.stanford.edu/frezghi-habte" target="_blank" rel="noopener noreferrer">Dr. Frezghi Habte</a>, and at \r
            <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">IIT Kharagpur</a> with \r
            <a href="https://www.linkedin.com/in/partha-acharya-b7664b11/" target="_blank" rel="noopener noreferrer">Mr. Partha Acharya</a> \r
            (<a href="https://www.linkedin.com/company/tata-consultancy-services/" target="_blank" rel="noopener noreferrer">TCS Research, India</a>) and \r
            <a href="https://scholar.google.com/citations?user=yUEeCY0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Subhamoy Mandal</a>. \r
            I have also collaborated with \r
            <a href="https://iisc.ac.in/" target="_blank" rel="noopener noreferrer">IISc Bangalore</a> under the guidance of \r
            <a href="https://scholar.google.com/citations?user=8b7u3b8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Phaneendra Yalavarthy</a>, with \r
            <a href="https://hms.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard Medical School</a> under the guidance of \r
            <a href="https://scholar.google.com/citations?user=9u2zK7gAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Bhaskara Chintada</a> and \r
            also with <a href="https://www.ku.ac.ae/" target="_blank" rel="noopener noreferrer">Khalifa University of Science and Technology</a> under \r
            the guidance of <a href="https://scholar.google.com/citations?user=TMpGqLEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Iyyakutti Iyappan Ganapathi</a>.\r
            In industry, I interned at\r
            <a href="https://www.ntwo.ai/" target="_blank" rel="noopener noreferrer">Neural Nurture</a>, \r
            <a href="https://www.linkedin.com/company/parabola9/" target="_blank" rel="noopener noreferrer">Parabola9</a>, \r
            <a href="https://www.linkedin.com/company/coreai/" target="_blank" rel="noopener noreferrer">CoreAI</a>.\r
        </p>\r
\r
        <p> \r
          I am broadly interested in medical imaging, computer vision, and multimodal learning, with a focus on vision-language models for healthcare. My goal is to develop robust and interpretable AI systems that integrate imaging and clinical knowledge to support diagnosis and improve patient outcomes.\r
        </p>\r
\r
        <p>\r
          I’m actively seeking Research Assistant roles in academic or industrial research labs, with a focus on computer vision, medical imaging, and multimodal AI. I am also preparing to pursue my higher studies through an MSc–Integrated PhD program, and would be glad to connect regarding potential opportunities.\r
        </p>\r
        <h3 class="push-down-3"><span>News</span></h3>\r
        <div class="news-container">\r
          <ul id="news">\r
            <li style="margin-bottom: 5px;">\r
              <strong>[Mar 2026]</strong> Two papers accepted at the IEEE Guwahati Subsection Conference (GCON) Conference 2026 presenting at IIT Guwahati, India. (<a href="#" target="_blank" rel="noopener">[Paper1: Uncertainty Quantification]</a>, <a href="#" target="_blank" rel="noopener">[Paper2: Multiphase MRI Segmentation]</a>)\r
\r
            <li style="margin-bottom: 5px;">\r
              <strong>[Feb 2026]</strong> Top 5 at <a href="https://cxr-lt.github.io/CXR-LT-2026/#:~:text=5,0.0945" target="_blank" rel="noopener">CXR-LT 2026 Challenge</a> on Long-Tailed Chest X-ray Classification Benchmark at ISBI 2025.\r
            </li>\r
\r
            <li style="margin-bottom: 5px;">\r
              <strong>[Feb 2026]</strong> Presented our work on Lung Digital Twin from Digital Wearables at India AI Summit 2026, New Delhi, India.\r
            </li>\r
\r
            <li style="margin-bottom: 5px;">\r
              <strong>[Jan 2026]</strong> Paper on "YOLOv11 Demystified" accepted as a Poster presentation at the Computer Vision Conference 2026, Netherlands.\r
            </li>\r
\r
            <li style="margin-bottom: 5px;">\r
              <strong>[Nov 2025]</strong> Runner-Up at the Smart India Hackathon (SIH) finals on a disaster management project using drones and computer vision.\r
            </li>\r
            \r
            <li style="margin-bottom: 5px;">\r
              <strong>[Nov 2025]</strong> Placed in the Top 10 of the IEEE EMBS BHI 2025 Data Challenge for depression analysis with our framework "<a href="https://github.com/Nikhil-Rao20/MINDER" target="_blank" rel="noopener">MINDER</a>".\r
            </li>\r
           \r
          </ul>\r
        </div>\r
\r
        <!-- <h3 class="push-down-3"><span>Current Affiliations</span></h3>\r
        <ul id="affiliations">\r
          <li>\r
            <a href="https://mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer">Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</a>, Abu Dhabi, UAE<br>\r
            <span class="workplace"><em>PhD Student</em></span>\r
          </li>\r
          <li>\r
            <a href="https://humancompatible.ai/" target="_blank" rel="noopener noreferrer">Center for Human-Compatible AI (CHAI)</a>, UC Berkeley<br>\r
            <span class="workplace"><em>Research Intern</em></span>\r
          </li>\r
        </ul> -->\r
\r
        \r
        \r
        <h3 class="push-down-3"><span>Education</span></h3>\r
        <ul id="education">\r
          <li>\r
            Integrated B.Tech in Computer Science and Engineering (2021 – Present)<br>\r
            <span class="university"><em>Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh, India</em></span>\r
            <br>\r
            <span class="university"><em>CGPA: 8.92/10 </em></span>\r
          </li>\r
          <li>\r
            Certification in Artificial Intelligence and Machine Learning (2023 – 2024)<br>\r
            <span class="university"><em>Defence Research and Development Organisation (DRDO) & Defence Institute of Advanced Technology (DIAT), Pune</em></span>\r
            <br>\r
            <span class="university"><em>CGPA: 9.2/10</em></span>\r
          </li>\r
        </ul>\r
\r
\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- Back-to-top button -->\r
  \r
\r
\r
  <!-- footer include -->\r
  \r
\r
  <!-- jQuery -->\r
  \r
\r
  <!-- Bootstrap JS Library -->\r
  \r
\r
  <!-- html file include script | used for navbar and footer -->\r
  \r
  \r
\r
  <!-- Local scripts -->\r
  \r
\r
  \r
\r
`,styles:[`\r
    .news-container {\r
      max-height: 200px;\r
      overflow-y: auto;\r
      border: 1px solid #e0e0e0;\r
      border-radius: 5px;\r
      padding: 10px;\r
      background-color: #f9f9f9;\r
    }\r
    \r
    .news-container::-webkit-scrollbar {\r
      width: 8px;\r
    }\r
    \r
    .news-container::-webkit-scrollbar-track {\r
      background: #f1f1f1;\r
      border-radius: 4px;\r
    }\r
    \r
    .news-container::-webkit-scrollbar-thumb {\r
      background: #c1c1c1;\r
      border-radius: 4px;\r
    }\r
    \r
    .news-container::-webkit-scrollbar-thumb:hover {\r
      background: #a8a8a8;\r
    }\r
    \r
    #news {\r
      margin: 0;\r
      padding-left: 20px;\r
    }\r
\r
    /* Mobile: center the profile column when stacked */\r
    @media (max-width: 767px) {\r
      #main-container .col-sm-4 {\r
        text-align: center;\r
      }\r
\r
      #main-container .col-sm-4 .img-thumbnail {\r
        margin-bottom: 1.5rem;\r
      }\r
\r
      #contact-table {\r
        margin: 0 auto;\r
        max-width: 280px;\r
      }\r
\r
      #main-container .col-sm-8 {\r
        text-align: left;\r
      }\r
\r
      .news-container {\r
        max-height: 160px;\r
      }\r
    }\r
\r
    @media (max-width: 480px) {\r
      #main-container .col-sm-4 .img-thumbnail {\r
        max-width: 180px;\r
      }\r
\r
      #contact-table td {\r
        font-size: 1.2rem;\r
      }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "Person",\r
    "name": "Nikhileswara Rao Sulake",\r
    "alternateName": ["Nikhileswara Rao Sulake", "Nikhil Rao Sulake", "Nikhil Rao", "NR Sulake", "SN Rao", "Nikhil Rao Sulake Personal Website", "Nikhil Rao Personal Website", "NR Sulake Personal Website", "SN Rao Personal Website", "Nikhileswara Rao Sulake Portfolio", "Nikhil Rao Sulake Portfolio", "Nikhil Rao Portfolio", "NR Sulake Portfolio", "SN Rao Portfolio", "Nikhil Personal Website", "Nikhil Rao Sulake Personal Website", "Nikhil Rao Sulake Portfolio"],\r
    "url": "https://nikhil-rao20.github.io/",\r
    "image": "https://nikhil-rao20.github.io/img/gallery/Nikhil%20Rao.png",\r
    "sameAs": [\r
      "https://github.com/Nikhil-Rao20",\r
      "https://www.linkedin.com/in/nikhileswara-rao-sulake/",\r
      "https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en"\r
    ],\r
    "jobTitle": "AI Researcher - Medical Imaging, Computer Vision, and Multimodal Learning",\r
    "description": "Nikhileswara Rao Sulake is an AI researcher and computer science student working on medical imaging, deep learning, multimodal learning, and responsible AI across projects in chest X-ray analysis, lung CT, echocardiography, histopathology, OCT, and language-model privacy.",\r
    "affiliation": {\r
      "@type": "Organization",\r
      "name": "Rajiv Gandhi University of Knowledge Technologies (RGUKT), India"\r
    },\r
    "alumniOf": {\r
      "@type": "EducationalOrganization",\r
      "name": "Rajiv Gandhi University of Knowledge Technologies (RGUKT), Nuzvid"\r
    },\r
    "email": "nikhil01446@gmail.com",\r
    "knowsAbout": ["Computer Vision", "Deep Learning", "Medical Imaging", "Remote Sensing", "Semantic Segmentation", "Object Detection", "Multimodal Learning", "Vision-Language Models", "Chest X-ray Classification", "Long-Tailed Learning", "Lung CT Segmentation", "Histopathology Analysis", "Echocardiography", "Alzheimer's Disease", "Retinal OCT", "LLM Privacy", "YOLOv11", "U-Net", "ConvNeXt", "Mamba"]\r
  }`,src:``},{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "WebSite",\r
    "name": "Nikhileswara Rao Sulake Personal Website",\r
    "alternateName": ["Nikhil Rao Sulake Personal Website", "Nikhil Rao Personal Website", "NR Sulake Personal Website", "SN Rao Personal Website", "Nikhileswara Rao Sulake Portfolio", "Nikhil Rao Sulake Portfolio", "Nikhil Rao Portfolio", "NR Sulake Portfolio", "SN Rao Portfolio", "Nikhil Personal Website", "Nikhil Rao Sulake Personal Website", "Nikhil Rao Sulake Portfolio"],\r
    "url": "https://nikhil-rao20.github.io/",\r
    "publisher": {\r
      "@type": "Person",\r
      "name": "Nikhileswara Rao Sulake"\r
    },\r
    "inLanguage": "en",\r
    "sameAs": [\r
      "https://github.com/Nikhil-Rao20",\r
      "https://www.linkedin.com/in/nikhileswara-rao-sulake/",\r
      "https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en"\r
    ]\r
  }`,src:``}]},{route:`research.html`,title:`Research | Nikhileswara Rao Sulake`,description:`Research publications by Nikhileswara Rao Sulake covering computer vision, medical imaging, multimodal learning, chest X-ray classification, lung CT segmentation, histopathology, echocardiography, OCT analysis, and responsible AI.`,portfolioChrome:!0,html:`\r
\r
   <!-- navbar include -->\r
   \r
\r
   <div class="spacer-div-3 hidden-xs hidden-xs"></div>\r
\r
   <!-- Main content    -->\r
   <div id="main-container" class="container">\r
\r
      <div class="row">\r
         <div class="col-sm-12">\r
                  <h1>Research</h1>\r
                  <p>\r
                     This page collects my current research publications and preprints across computer vision, medical imaging, multimodal learning, and clinically oriented deep learning. The work spans chest X-ray classification, long-tailed recognition, lung CT segmentation, histopathology image analysis, echocardiography, retinal OCT, and responsible AI topics such as LLM privacy.\r
                  </p>\r
                  <p>\r
                     Featured research pages include <a href="/cxr-lt/">CXR-LT</a>, <a href="/taru-net/">TARU-Net</a>, <a href="/cips-net/">CIPS-Net</a>, <a href="/ecg-free-echo/">ECG-Free Echo</a>, and <a href="/lung-digital-twin/">Lung Digital Twin</a>.\r
                  </p>\r
\r
            <!--\r
            <p>I am currently interested in the following areas of research: </p>\r
\r
            <div class="row push-down-1">\r
               <div class="col-sm-6">\r
                  <ul>\r
                     <li>Computer Vision: \r
                        <ul>\r
                           <li>Multimodal and Vision–Language Integration</li>\r
                           <li>Efficient and Scalable Architectures</li>\r
                           <li>Latent Space Modeling</li>\r
                        </ul>\r
                     </li>\r
                  </ul>\r
               </div>\r
               <div class="col-sm-6">\r
                  <ul>\r
                     <li>Medical Image Analysis: \r
                        <ul>\r
                           <li>3D Segmentation and Reconstruction</li>\r
                           <li>Image Quality Enhancement for Clinical Tasks</li>\r
                           <li>Multitask and Outcome-Aware Learning</li>\r
                        </ul>\r
                     </li>\r
                  </ul>\r
               </div>\r
            </div>\r
            -->\r
\r
            <!-- Publications -->\r
            <h3 class="push-down-4"><span>Publications</span></h3>\r
\r
            <ul class="pub-list">\r
               \r
\r
               <!-- Publication 11: CXR-LT 2026 Challenge: Multi-Center Long-Tailed and Zero Shot Chest X-ray Classification -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-journal">Medical Image Analysis</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/cxr_lt_challenge_paper.png" alt="Loss Design for Long Tail CXR Classification paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">CXR-LT 2026 Challenge: Multi-Center Long-Tailed and Zero Shot Chest X-ray Classification</a></p>\r
                     <p class="pub-authors">Hexin Dong, Yi Lin, Pengyu Zhou, Fengnian Zhao, Alan Clint Legasto, Juno Cho, Dohui Kim, Justin Namuk Kim, Mingeon Kim, Sunwoo Kwak, Gabriel Moyà-Alcover, Ky Trung Nguyen, Thanh-Huy Nguyen, Ha-Hieu Pham, Huy-Hieu Pham, Huy Pham Le, <strong>Nikhileswara Rao Sulake</strong>, Aina Tur-Serrano, Ruichi Zhang, Ang Zu, Adam E. Flanders, Zhiyong Lu, Ronald M. Summers, Mingquan Lin, Hao Chen, Yuzhe Yang, George Shih</p>\r
                     <p class="pub-venue"><em>Medical Image Analysis [*Under Review, Manuscript ID: MEDIA-D-26-01261]</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:UeHWp8X0CEIC" class="pub-btn">SCHOLAR</a>\r
                        <a href="https://arxiv.org/abs/2603.02294" class="pub-btn">Paper</a>\r
                        <a href="https://github.com/Nikhil-Rao20/Long_Tail" class="pub-btn">CODE</a>\r
                        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:v5kkwUYqSfoJ:scholar.google.com/&output=citation&scisdr=CjzT8Uj5EMKY-mnWEXU:ADi0EEUAAAAAadTQCXXtm83SbzNRavFdYk5_2TA&scisig=ADi0EEUAAAAAadTQCfdaZ57JY45QsSNI3byqcys&scisf=4&ct=citation&cd=-1&hl=en" class="pub-btn">BibTeX</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 10: Loss Design for Long Tail CXR Clasification -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-preprint">Preprint 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/loss_design_long_tail_paper.png" alt="Loss Design for Long Tail CXR Classification paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">Loss Design and Architecture Selection for Long-Tailed Multi-Label Chest X-Ray Classification</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong></p>\r
                     <p class="pub-venue"><em>ArXiv Preprint</em></p>\r
                     <div class="pub-links">\r
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:UeHWp8X0CEIC" class="pub-btn">SCHOLAR</a>\r
                        <a href="https://arxiv.org/abs/2603.02294" class="pub-btn">ArXiv</a>\r
                        <a href="https://github.com/Nikhil-Rao20/Long_Tail" class="pub-btn">CODE</a>\r
                        <a href="https://nikhil-rao20.github.io/cxr-lt/" class="pub-btn">WEBSITE</a>\r
                        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:v5kkwUYqSfoJ:scholar.google.com/&output=citation&scisdr=CjzT8Uj5EMKY-mnWEXU:ADi0EEUAAAAAadTQCXXtm83SbzNRavFdYk5_2TA&scisig=ADi0EEUAAAAAadTQCfdaZ57JY45QsSNI3byqcys&scisf=4&ct=citation&cd=-1&hl=en" class="pub-btn">BibTeX</a>\r
                     </div>\r
                  </div>\r
               </li>\r
\r
               <!-- Publication 9: CIPS-Net for Histopathology -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-conf">MICCAI 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/cips_net_paper.png" alt="CIPS-Net for Histopathology paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">CIPS-Net: A Comprehensive Framework for Histopathology Image Analysis</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong><sup>†</sup>, Sai Manikanta Eswar Machara<sup>†</sup>, Sivaji Retta, Iyyakutti Iyappan Ganapathi, Naoufel Werghi</p>\r
                     <p class="pub-venue"><em>29<sup>th</sup> Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026 [*Under Review]</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 8: Lung Digital Twin from Wearable devices -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-conf">MICCAI 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/lung_digital_twin_paper.png" alt="Lung Digital Twin from Wearable devices paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">Digital Twin of the Lung from Wearable Biosignals for Real-Time Respiratory Monitoring</a></p>\r
                     <p class="pub-authors">Partha Acharya, <strong>Nikhileswara Rao Sulake</strong>, Soutrik Chakraborty, Subhamoy Mandal, Suman Chakraborty</p>\r
                     <p class="pub-venue"><em>29<sup>th</sup> Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026 [*Under Review]</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
               <!-- Publication 7: TARU-Net -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-journal">IEEE TRPMS</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/taru_net_paper.png" alt="TARU-Net paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">TARU-Net: Topology-Aware Deep Learning for High-Fidelity Lung CT Segmentation and Volume Visualization</a></p>\r
                     <p class="pub-authors">Partha Acharya, <strong>Nikhileswara Rao Sulake</strong>, Aishik Sen, Amitabha Chattopadhyay, Subhamoy Mandal, Suman Chakraborty</p>\r
                     <p class="pub-venue"><em>IEEE Transactions on Radiation and Plasma Medical Sciences [*Under Review]</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 6: MINDER -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-conf">IEEE CONNECT 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/minder_paper.png" alt="MINDER paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">MINDER: Machine LearnIng Framework for DepressioN Score Analysis in MinDfulness IntERventions across Medically Complex Patients</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sai Manikanta Eswar Machara, Divya Katam, Sivalal Kethavath</p>\r
                     <p class="pub-venue"><em>12<sup>th</sup> IEEE International Conference on Electronics, Computing and Communication Technologies 2026 [*Under Review]</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 5: Multi-Sequence MRI Image Analysis -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-conf">IEEE GCON 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/multi_sequence_mri_paper.png" alt="Multi-Sequence MRI Image Analysis paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">Benchmarking Input Strategies and Hybrid Loss Functions for Multi-Sequence Abdominal MRI Segmentation</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Divya Katam, Venkata Ganesh Sirela, Sivalal Kethavath</p>\r
                     <p class="pub-venue">IEEE Guwahati Subsection Conference (GCON) 2026</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 4: Uncertainty Quantification in OCT -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-conf">IEEE GCON 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/mlp_mixer_paper.png" alt="Uncertainty Quantification in OCT paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="#" target="_blank" rel="noopener">Uncertainty Quantification and Calibration in Retinal OCT Classification with CNN and MLP-Mixer Models</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sivalal Kethavath</p>\r
                     <p class="pub-venue">IEEE Guwahati Subsection Conference (GCON) 2026</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 3: ECG Free Cardiac Timing in Echo -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-journal">BSPC Journal</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/ecg_free_cardiac_paper.png" alt="ECG Free Cardiac Timing in Echo paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:2osOgNQ5qMEC" target="_blank" rel="noopener">Signal Extraction Strategies for ECG-Free Cardiac Timing in Echocardiography: An Empirical Investigation</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong></p>\r
                     <p class="pub-venue"><em>Biomedical Signal Processing and Control [*Under Review]</em></p>\r
                     <div class="pub-links">\r
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:2osOgNQ5qMEC" class="pub-btn" target="_blank" rel="noopener">SCHOLAR</a>\r
                        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6145911" class="pub-btn" target="_blank" rel="noopener">SSRN</a>\r
                        <a href="https://track.authorhub.elsevier.com/?uuid=13f39104-c14e-44e2-a77c-e59b30ca7be8" class="pub-btn" target="_blank" rel="noopener">Review</a>\r
                        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:wgvP9TIzIGYJ:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJ3PU:AFtJQiwAAAAAaZiPxPVWHsibQJV8CJgGMnfrTLY&scisig=AFtJQiwAAAAAaZiPxPPtrJ8dtlxbbFmuO1Ww-fQ&scisf=4&ct=citation&cd=-1&hl=en"  class="pub-btn" target="_blank" rel="noopener">BibTeX</a>\r
                        <!-- <a href="#" class="pub-btn">CODE</a> -->\r
                        <!-- <a href="#" class="pub-btn">WEBSITE</a> -->\r
                     </div>\r
                  </div>\r
               </li>\r
\r
\r
               <!-- Publication 2: YOLOv11 -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-conf">Preprint 2026</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/yolov11_paper.png" alt="YOLOv11 paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener">YOLOv11 Architecture Explained: Next-Level Object Detection with Enhanced Speed and Accuracy</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong></p>\r
                     <p class="pub-venue"><em>Medium, Analytics Vidhya</em>, 2024 &nbsp;&middot;&nbsp; <strong>Accepted at CVC 2026</strong></p>\r
                     <div class="pub-links">\r
                        <a href="https://arxiv.org/pdf/2604.03349" class="pub-btn">Paper</a>\r
                        <!-- <a href="#" class="pub-btn">BIB</a> -->\r
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:u5HHmVD_uO8C" class="pub-btn" target="_blank" rel="noopener">SCHOLAR</a>\r
                        <a href="https://medium.com/@nikhil-rao-20/yolov11-explained-next-level-object-detection-with-enhanced-speed-and-accuracy-2dbe2d376f71" class="pub-btn" target="_blank" rel="noopener">Medium</a>\r
                        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:4ZDiBsdFBI4J:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJck4:AFtJQiwAAAAAaZiPak5URSy_Dr9Tyhc5vpgoVX0&scisig=AFtJQiwAAAAAaZiParsG88r9cG-kpKNWhunI9Os&scisf=4&ct=citation&cd=-1&hl=en" class="pub-btn" target="_blank" rel="noopener">BibTeX</a>\r
                     </div>\r
                  </div>\r
               </li>\r
\r
               <!-- Publication 1: Alzheimer's Survey -->\r
               <li class="pub-entry">\r
                  <div class="pub-thumb">\r
                     <span class="pub-venue-badge badge-preprint">Preprint 2025</span>\r
                     <img class="pub-thumb-img" src="/assets/img/publications/alzheimer_paper.png" alt="Alzheimer's survey paper thumbnail" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\r
                     <div class="pub-thumb-placeholder" style="display:none;"><i class="fas fa-file-alt"></i></div>\r
                  </div>\r
                  <div class="pub-body">\r
                     <p class="pub-title"><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:9yKSN-GCB0IC" target="_blank" rel="noopener">Survey on Deep Learning and Explainable AI for Magnetic Resonance Imaging based Alzheimer's Disease Classification</a></p>\r
                     <p class="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sidharth Pancholi</p>\r
                     <p class="pub-venue"><em>Authorea Preprints</em></p>\r
                     <div class="pub-links">\r
                        <!-- <a href="#" class="pub-btn">ABS</a> -->\r
                        <!-- <a href="#" class="pub-btn">BIB</a> -->\r
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:9yKSN-GCB0IC" class="pub-btn" target="_blank" rel="noopener">SCHOLAR</a>\r
                        <a href="https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176231563.32545081" class="pub-btn" target="_blank" rel="noopener">TechRxiv</a>\r
                        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:d2Rq4lbMYOcJ:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJvME:AFtJQiwAAAAAaZiPpMHGXLNl_70Vwl6ouMydjeU&scisig=AFtJQiwAAAAAaZiPpFldbEgPmoaTlE1oIbzATcM&scisf=4&ct=citation&cd=-1&hl=en" class="pub-btn" target="_blank" rel="noopener">BibTeX</a>\r
                     </div>\r
                  </div>\r
               </li>\r
\r
            </ul>\r
\r
            <p style="font-size: 0.9em; color: #666; font-style: italic; margin-top: 4px;">\r
               † Equal contribution\r
            </p>\r
\r
            <h3 class="push-down-4"><span>Ongoing Research Projects</span></h3>\r
            <ul>\r
               <li>\r
                  <strong>HuMAR</strong> - Working on developing efficient and scalable text-instructed vision-language model for multimodal and multitasking Human Centric detection.\r
               </li>\r
               <li>\r
                  <strong>Novel Segmentation and Denoising Architectures</strong> - Working on developing of novel self supervised models for multitasking and rigorous experiments on various OCT datasets. \r
               </li>\r
               <li>\r
                  <strong>Bone Cancer Detection</strong> - Generaly Whole Genome Sequencing is the gold standard for detection costing $6k per patient, so we are working on a method to detect the bone cancer from the H&E whole slide images. \r
               </li>\r
               <li>\r
                  <strong>Whole Genome Doubling</strong> - WGD is one of the somatic events of cancer, detecting it takes very long time using sequencing, hence we are developing a methdology on detecting the WGD from the H&E WSI's.\r
               </li>\r
            </ul>\r
\r
\r
            <h3 class="push-down-4"><span>Services and Contributions</span></h3>\r
            <ul>\r
               <li>\r
                  Reviewer for <strong><a href="https://wisdomgale.com/jcsi/" target="_blank" rel="noopener">European Journal Of Computer Sciences And Informatics</a>, 2025</strong><br>\r
               </li>\r
               \r
            </ul>\r
\r
            <h3 class="push-down-4"><span>Research Competitions</span></h3>\r
            <ul>\r
           \r
               <li>\r
                  <a href="https://cxr-lt.github.io/CXR-LT-2026/#:~:text=5,0.0945" target="_blank" rel="noopener" \r
                     aria-label="Open CXR-LT 2026 Challenge Website">Top 5</a> - CXR-LT 2026 Challenge on Long-Tailed Chest X-ray Classification Benchmark, <a href="https://biomedicalimaging.org/2026/challenges/" target="_blank" rel="noopener">ISBI</a> 2026\r
               </li>\r
\r
               <li>\r
                  <a href="https://bhi.embs.org/2025/data-competition/" target="_blank" rel="noopener" \r
                     aria-label="Open IEEE EMBS BHI Data Competition Page">Top 10</a> - Track 1, \r
                  IEEE EMBS <a href="https://bhi.embs.org/2025/" target="_blank" rel="noopener">Biomedical & Health Informatics</a> (BHI) Conference Data Competition, 2025\r
               </li>\r
\r
               <li>\r
                  <a href="https://maic.or.kr/challenge/51/public-ranking" target="_blank" rel="noopener" \r
                     aria-label="Open MAIC 2024 Public Leaderboard">Top 22</a> - \r
                  Multimodal AI4TB Challenge (MAIC), <a href="http://www.snuh.org/global/en/main.do" target="_blank" rel="noopener">Seoul National University Hospital</a>, 2024\r
               </li>\r
\r
               <li>\r
                  <a href="https://www.linkedin.com/posts/nikhileswara-rao-sulake_knowledge-ai-research-activity-7280180242139230208-rNWK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7EcjcBV-AIMWnWBDJNNsY1CH8I8YMpRM8" \r
                     target="_blank" rel="noopener" \r
                     aria-label="Open Intel AI Hackathon 2024 Post">Top 3</a> - \r
                  Intel AI Hackathon 2024, <a href="https://ieeeindicon.org/" target="_blank" rel="noopener">IEEE Indicon</a> at IIT Kharagpur, 2024\r
                  \r
               </li>\r
                              \r
            </ul>\r
\r
\r
\r
\r
         </div>\r
      </div>\r
\r
   </div>\r
\r
   <!-- Back-to-top button -->\r
   \r
\r
   <!-- footer include -->\r
   \r
\r
   <!-- jQuery -->\r
   \r
\r
   <!-- Bootstrap JS Library -->\r
   \r
\r
   <!-- html file include script | used for navbar and footer -->\r
   \r
   \r
\r
   <!-- Local scripts -->\r
   \r
\r
   \r
\r
`,styles:[`\r
    /* Publication card styles */\r
    .pub-list { list-style: none; padding: 0; margin: 0; }\r
    .pub-entry { display: flex; gap: 20px; margin-bottom: 24px; border: 1px solid #e0e6ef; border-radius: 8px; padding: 16px; background: #fff; align-items: flex-start; }\r
    .pub-thumb { flex-shrink: 0; width: 160px; }\r
    .pub-thumb-img { width: 160px; height: 118px; object-fit: cover; border-radius: 5px; display: block; background: #eaf2fb; }\r
    .pub-thumb-placeholder { width: 160px; height: 118px; background: #eaf2fb; border-radius: 5px; display: flex; align-items: center; justify-content: center; color: #a0aab4; font-size: 2.2rem; }\r
    .pub-venue-badge { display: inline-block; font-family: "Montserrat", sans-serif; font-size: 1.05rem; font-weight: 700; padding: 3px 11px; border-radius: 4px; margin-bottom: 9px; letter-spacing: .02em; }\r
    .badge-conf  { background: #1a5276; color: #fff; }\r
    .badge-preprint { background: #7d3c98; color: #fff; }\r
    .badge-journal { background: #1a7a4a; color: #fff; }\r
    .badge-workshop { background: #b7600a; color: #fff; }\r
    .pub-body { flex: 1; min-width: 0; }\r
    .pub-title { font-family: "Montserrat", sans-serif; font-size: 1.42rem; font-weight: 600; color: #20364c; margin: 0 0 6px; line-height: 1.45; }\r
    .pub-title a { color: #20364c; text-decoration: none; }\r
    .pub-title a:hover { color: #1585cf; }\r
    .pub-authors { font-size: 1.3rem; color: #444; margin-bottom: 3px; line-height: 1.5; }\r
    .pub-venue { font-size: 1.25rem; color: #666; font-style: italic; margin-bottom: 11px; }\r
    .pub-links { display: flex; flex-wrap: wrap; gap: 6px; }\r
    .pub-btn { display: inline-block; padding: 3px 13px; border: 1.5px solid #20364c; border-radius: 4px; font-family: "Montserrat", sans-serif; font-size: 1.1rem; font-weight: 600; color: #20364c; text-decoration: none; background: #fff; transition: all .18s; letter-spacing: .04em; }\r
    .pub-btn:hover { background: #20364c; color: #fff; text-decoration: none; }\r
    /* Research page mobile fixes */\r
    @media (max-width: 600px) { .pub-entry { flex-direction: column; } .pub-thumb, .pub-thumb-img, .pub-thumb-placeholder { width: 100%; } .pub-thumb-img, .pub-thumb-placeholder { height: 150px; } }\r
    @media (max-width: 767px) {\r
      #main-container ul li {\r
        font-size: 1.35rem;\r
        line-height: 1.6;\r
      }\r
\r
      #main-container ul li ul li {\r
        font-size: 1.25rem;\r
        margin-top: 0.3rem;\r
      }\r
\r
      #main-container .push-down-1 .col-sm-6 {\r
        margin-bottom: 1rem;\r
      }\r
\r
      #main-container h3 {\r
        font-size: 1.6rem;\r
        margin-top: 2rem !important;\r
      }\r
    }\r
\r
    @media (max-width: 480px) {\r
      #main-container ul li {\r
        font-size: 1.25rem;\r
      }\r
\r
      #main-container ul li ul li {\r
        font-size: 1.15rem;\r
      }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[{code:`{\r
       "@context": "https://schema.org",\r
       "@type": "CollectionPage",\r
       "name": "Research | Nikhileswara Rao Sulake",\r
       "url": "https://nikhil-rao20.github.io/research.html",\r
       "description": "Research publications by Nikhileswara Rao Sulake across computer vision, medical imaging, multimodal learning, and clinically oriented AI.",\r
       "isPartOf": {\r
          "@type": "WebSite",\r
          "name": "Nikhileswara Rao Sulake",\r
          "url": "https://nikhil-rao20.github.io/"\r
       },\r
       "about": {\r
          "@type": "Person",\r
          "name": "Nikhileswara Rao Sulake"\r
       },\r
       "mainEntity": {\r
          "@type": "ItemList",\r
          "itemListElement": [\r
             {"@type": "ListItem", "position": 1, "name": "CXR-LT", "url": "https://nikhil-rao20.github.io/cxr-lt/"},\r
             {"@type": "ListItem", "position": 2, "name": "TARU-Net", "url": "https://nikhil-rao20.github.io/taru-net/"},\r
             {"@type": "ListItem", "position": 3, "name": "CIPS-Net", "url": "https://nikhil-rao20.github.io/cips-net/"},\r
             {"@type": "ListItem", "position": 4, "name": "ECG-Free Echo", "url": "https://nikhil-rao20.github.io/ecg-free-echo/"},\r
             {"@type": "ListItem", "position": 5, "name": "Lung Digital Twin", "url": "https://nikhil-rao20.github.io/lung-digital-twin/"}\r
          ]\r
       },\r
       "inLanguage": "en"\r
    }`,src:``}]},{route:`experiences.html`,title:`Professional Experience | Nikhileswara Rao Sulake`,description:`Professional experience and academic collaborations of Nikhileswara Rao Sulake across AI research internships, medical imaging projects, multimodal learning, and industry-facing machine learning work.`,portfolioChrome:!0,html:`\r
\r
  <!-- Navigation -->\r
  \r
\r
  <!-- Page Content -->\r
  <div class="container">\r
    \r
    <!-- Page Header -->\r
    <h1 class="montserrat" style="color: #2c3e50; margin-bottom: 30px; font-size: 2.2em; font-weight: 600;">Professional Experience</h1>\r
    <!-- Academic Collaborations -->\r
    <div class="experience-section">\r
      <h2 class="section-title">Academic Collaborations</h2>\r
      \r
      <div class="experience-grid">\r
        \r
        <!-- Khalifa University -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/khalifa_uni_logo.png" alt="Khalifa University">\r
          </div>\r
          <h3 class="institution-name">Khalifa University of Science and Technology</h3>\r
          <h4 class="role-title">Research Collaborator</h4>\r
          <p class="role-title"><a href="https://khazna.ku.ac.ae/en/persons/iyyakutti-iyappan-ganapathi/">Dr. I I Ganapathi</a></p>\r
          <p class="duration">Aug 2025 - Mar 2026</p>\r
        </div>\r
\r
        <!-- Stanford Medicine -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/stanford_medicine_logo.png" alt="Stanford Medicine">\r
          </div>\r
          <h3 class="institution-name">Stanford Medicine</h3>\r
          <h4 class="role-title">Molecular Imaging Fellowship</h4>\r
          <p class="role-title"><a href="https://med.stanford.edu/profiles/frezghi-habte">Prof. F Habte</a>, <a href="https://med.stanford.edu/profiles/arutselvan-natarajan">Prof. A Natarajan</a></p>\r
          <p class="duration">Jun 2025 - Aug 2025</p>\r
        </div>\r
\r
        <!-- IIT Kharagpur -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/iit_kgp_logo.png" alt="IIT Kharagpur">\r
          </div>\r
          <h3 class="institution-name">IIT Kharagpur - SMST</h3>\r
          <h4 class="role-title">Summer Intern and Research Collaborator</h4>\r
          <p class="role-title"><a href="https://sites.google.com/site/smandalbiomed/home">Assis Prof. S Mandal</a>, <a href="https://www.linkedin.com/in/partha-acharya-b7664b11/">Mr. P Acharya</a></p>\r
          <p class="duration">May 2025 - April 2026</p>\r
        </div>\r
\r
        <!-- Harvard Medical School -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/harvard_medical_school.png" alt="Harvard Medical School">\r
          </div>\r
          <h3 class="institution-name">Harvard Medical School</h3>\r
          <h4 class="role-title">Research Collaborator</h4>\r
          <p class="role-title"><a href="https://scholar.google.com/citations?user=SRdx2PwAAAAJ&hl=en">Dr. BR Chintada</a></p>\r
          <p class="duration">Feb 2025 - Present</p>\r
        </div>\r
\r
        <!-- IISc Bangalore -->\r
        <!-- <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/iisc_logo.png" alt="Indian Institute of Science">\r
          </div>\r
          <h3 class="institution-name">Indian Institute of Science</h3>\r
          <h4 class="role-title">Research Collaborator</h4>\r
          <p class="duration">Aug 2024 - Present</p>\r
        </div> -->\r
\r
        <!-- IISc Bangalore -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/iiser_logo.png" alt="Indian Institute of Science">\r
          </div>\r
          <h3 class="institution-name">IISER, Trivandrum</h3>\r
          <h4 class="role-title">Research Collaborator</h4>\r
          <p class="role-title"><a href="https://www.iisertvm.ac.in/faculty/rajisusanmathew">Dr. Raji Susan Mathew</a></p>\r
          <p class="duration">Apr 2024 - Sep 2024</p>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Industry Experience -->\r
    <div class="experience-section">\r
      <h2 class="section-title">Industry Experience</h2>\r
      \r
      <div class="experience-grid">\r
\r
        <!-- Neural Nurture -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/neural_nurture.png" alt="Neural Nurture">\r
          </div>\r
          <h3 class="institution-name">Neural Nurture</h3>\r
          <h4 class="role-title">Research Intern - LLM</h4>\r
          <p class="duration">Aug 2025 - Nov 2025</p>\r
        </div>\r
\r
        <!-- CoreAI -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/coreai.png" alt="CoreAI">\r
          </div>\r
          <h3 class="institution-name">CoreAI Technologies</h3>\r
          <h4 class="role-title">AI Research Engineer</h4>\r
          <p class="duration">Jan 2025 - Mar 2025</p>\r
        </div>\r
\r
        <!-- Parabola -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/parabola.png" alt="Parabola">\r
          </div>\r
          <h3 class="institution-name">Parabola9</h3>\r
          <h4 class="role-title">AI Developer</h4>\r
          <p class="duration">Dec 2024 - Mar 2025</p>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <div class="experience-section">\r
      <h2 class="section-title">Extra-Curricular</h2>\r
      \r
      <div class="experience-grid">\r
\r
        <!-- Neural Nurture -->\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/rgukt-alumni.png" alt="RGUKT Alumni">\r
          </div>\r
          <h3 class="institution-name">RGUKT Nuzvid</h3>\r
          <h4 class="role-title">President - Alumni Relations</h4>\r
          <p class="duration">March 2023 - Oct 2025</p>\r
        </div>\r
\r
        <div class="experience-item">\r
          <div class="institution-logo">\r
            <img src="/assets/img/company/gdsc.png" alt="Google Developer Student Clubs">\r
          </div>\r
          <h3 class="institution-name">Google Developer Student Clubs</h3>\r
          <h4 class="role-title">AI&ML Head</h4>\r
          <p class="duration">Aug 2023 - Aug 2024</p>\r
        </div>\r
      </div>\r
\r
  </div>\r
\r
  <!-- Back-to-top button -->\r
  \r
\r
  <!-- Footer -->\r
  \r
\r
  <!-- jQuery and Bootstrap JS -->\r
  \r
  \r
\r
  <!-- W3Data for includes -->\r
  \r
  \r
\r
  <!-- Local scripts -->\r
  \r
\r
`,styles:[`\r
    .experience-section {\r
      margin-bottom: 40px;\r
    }\r
    \r
    .section-title {\r
      font-family: 'Montserrat', sans-serif;\r
      font-weight: 600;\r
      font-size: 1.5em;\r
      color: #2c3e50;\r
      margin-bottom: 25px;\r
      text-align: left;\r
      border-bottom: 2px solid #3498db;\r
      padding-bottom: 15px;\r
    }\r
    \r
    .experience-grid {\r
      display: grid;\r
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r
      gap: 30px;\r
      margin-top: 25px;\r
    }\r
    \r
    .experience-item {\r
      text-align: center;\r
      padding: 20px;\r
    }\r
    \r
    .institution-logo {\r
      margin-bottom: 20px;\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
      height: 140px;\r
    }\r
    \r
    .institution-logo img {\r
      max-width: 120px;\r
      max-height: 120px;\r
      width: auto;\r
      height: auto;\r
      object-fit: contain;\r
      object-position: center;\r
      display: block;\r
      background: transparent;\r
      border-radius: 10px;\r
      transition: transform 0.3s ease, filter 0.3s ease;\r
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));\r
    }\r
    \r
    .institution-logo img:hover {\r
      transform: scale(1.08);\r
      filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));\r
    }\r
    \r
 \r
    .institution-name {\r
    position: relative;      /* needed for the pseudo-element positioning */\r
    display: inline-block;   /* shrink to content width so the line can be centered */\r
    padding-bottom: 12px;    /* room for the decorative bar; tweak as needed */\r
    margin-bottom: 8px;\r
    text-decoration: none !important; /* ensure no link underline appears */\r
    color: #2c3e50;\r
    font-family: 'Montserrat', sans-serif;\r
    font-weight: 600;\r
    font-size: 1em;\r
    line-height: 1.8;\r
    }\r
\r
    /* New ::after: short centered bar under the text */\r
    .institution-name::after {\r
    content: "";\r
    position: absolute;\r
    left: 50%;\r
    transform: translateX(-50%);\r
    bottom: 6px;          /* vertical distance from baseline; tweak as needed */\r
    width: 90%;           /* length of the bar (relative to text width) */\r
    height: 2px;          /* thickness */\r
    background: slategray;\r
    border-top: none;     /* explicitly remove border-top used previously */\r
    z-index: 0;           /* keep it behind the text (non-negative z-index is safer) */\r
    }\r
\r
    \r
    .role-title {\r
      font-family: 'Open Sans', sans-serif;\r
      font-weight: 500;\r
      font-size: 0.9em;\r
      color: #3498db;\r
      margin-bottom: 8px;\r
    }\r
    \r
    .duration {\r
      font-size: 0.85em;\r
      color: #7f8c8d;\r
      margin: 0;\r
      font-weight: 500;\r
    }\r
    \r
    /* Mobile Responsive */\r
    @media (max-width: 768px) {\r
      .experience-grid {\r
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r
        gap: 30px;\r
      }\r
      \r
      .institution-logo {\r
        height: 120px;\r
      }\r
      \r
      .institution-logo img {\r
        max-width: 100px;\r
        max-height: 100px;\r
      }\r
      \r
      .institution-name {\r
        font-size: 0.95em;\r
      }\r
      \r
      .role-title {\r
        font-size: 0.85em;\r
      }\r
    }\r
    \r
    @media (max-width: 480px) {\r
      .experience-grid {\r
        grid-template-columns: repeat(2, 1fr);\r
        gap: 25px;\r
      }\r
      \r
      .experience-item {\r
        padding: 15px;\r
      }\r
      \r
      .institution-logo {\r
        height: 100px;\r
        margin-bottom: 15px;\r
      }\r
      \r
      .institution-logo img {\r
        max-width: 80px;\r
        max-height: 80px;\r
      }\r
      \r
      .institution-name {\r
        font-size: 0.9em;\r
        margin-bottom: 6px;\r
      }\r
      \r
      .role-title {\r
        font-size: 0.8em;\r
        margin-bottom: 6px;\r
      }\r
      \r
      .duration {\r
        font-size: 0.75em;\r
      }\r
    }\r
    \r
    @media (max-width: 360px) {\r
      .experience-grid {\r
        grid-template-columns: 1fr 1fr;\r
        gap: 20px;\r
      }\r
      \r
      .institution-logo {\r
        height: 80px;\r
      }\r
      \r
      .institution-logo img {\r
        max-width: 65px;\r
        max-height: 65px;\r
      }\r
      \r
      .institution-name {\r
        font-size: 0.85em;\r
      }\r
      \r
      .role-title {\r
        font-size: 0.75em;\r
      }\r
      \r
      .duration {\r
        font-size: 0.7em;\r
      }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "WebPage",\r
    "name": "Professional Experience | Nikhileswara Rao Sulake",\r
    "url": "https://nikhil-rao20.github.io/experiences.html",\r
    "description": "Professional experience and academic collaborations of Nikhileswara Rao Sulake across AI research internships, medical imaging projects, multimodal learning, and industry-facing machine learning work.",\r
    "isPartOf": {\r
      "@type": "WebSite",\r
      "name": "Nikhileswara Rao Sulake",\r
      "url": "https://nikhil-rao20.github.io/"\r
    },\r
    "about": {\r
      "@type": "Person",\r
      "name": "Nikhileswara Rao Sulake"\r
    },\r
    "inLanguage": "en"\r
  }`,src:``}]},{route:`projects.html`,title:`Projects & Works | Nikhileswara Rao Sulake`,description:`Projects and works by Nikhileswara Rao Sulake across computer vision, multimodal AI, medical imaging, drone detection, satellite segmentation, document intelligence, and healthcare machine learning.`,portfolioChrome:!0,html:`\r
  \r
  <div class="spacer-div-3 hidden-xs hidden-xs"></div>\r
\r
  <!-- <div id="main-container" class="container"></div> -->\r
\r
  <!-- Main content -->\r
  <div id="main-container" class="container-fluid" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">\r
\r
    <div class="row">\r
      <div class="col-sm-12">\r
        <h1>Projects & Works</h1>\r
        <p>Explore research projects, applied AI systems, and engineering work across medical imaging, multimodal learning, object detection, document intelligence, and remote sensing.</p>\r
        <p>\r
          Featured project pages include <a href="/project_articles_v2/sih_drone.html">DRISTI</a>, <a href="/project_articles_v2/multi_backbone_yolo.html">Backbones of YOLO</a>, <a href="/project_articles_v2/cardiolens.html">CardioLens</a>, <a href="/project_articles_v2/umbraUnet.html">Umbra UNet</a>, and <a href="/project_articles_v2/doc2data.html">Doc2Data</a>.\r
        </p>\r
      </div>\r
    </div>\r
\r
    <!-- Research Projects Section -->\r
    <div class="project-category">\r
      <h3 class="push-down-4"><span>Research Projects</span></h3>\r
\r
      <!-- <div class="project-item">\r
        <div class="project-image">\r
          <a href="/assets/project_articles/project1.html" target="_blank"><img src="/assets/img/projects/brain_MRI.png" alt="Brai MRI"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="/assets/project_articles/project1.html" target="_blank">Brain MRI Imaging: Alzheimer's Disease Detection</a></h4>\r
          <p class="project-summary">A research project on the detection of Alzheimer's disease using brain MRI images. The project aims to develop a deep learning model that can accurately detect Alzheimer's disease from brain MRI images.</p>\r
          <div class="project-tags">\r
\r
            <span class="project-tag">Alzheimer's Disease</span>\r
            <span class="project-tag">Deep Learning</span>\r
            <span class="project-tag">Medical Imaging</span>\r
            <span class="project-tag">Computer Vision</span>\r
          </div>\r
          <a href="/assets/project_articles/project1.html" class="project-link" target="_blank">View Research Details &rarr;</a>\r
        </div>\r
      </div> -->\r
\r
\r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/multi_backbone_yolo.html" target="_blank"><img src="/assets/img/projects/yolobackbone.png" alt="YOLO Backbones"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/multi_backbone_yolo.html" target="_blank">Backbones of YOLO: A Comprehensive Analysis</a></h4>\r
          <p class="project-summary">Comparative analysis enhancing YOLOv8 with modern CNN, Transformer, and Mamba-based backbones to evaluate performance trade-offs in object detection. This research provides insights into the effectiveness of different architectural choices in computer vision models.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Computer Vision</span>\r
            <span class="project-tag">YOLO</span>\r
            <span class="project-tag">Transformers</span>\r
            <span class="project-tag">CNN</span>\r
          </div>\r
          <a href="#/project_articles_v2/multi_backbone_yolo.html" class="project-link" target="_blank">View Analysis &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image" style="background-color: #000000">\r
          <a href="#/project_articles_v2/thyroid.html" target="_blank"><img src="/assets/img/projects/thyroid.jpg" alt="Thyroid Detection"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/thyroid.html" target="_blank">Thyroid Disease Detection using Medical Imaging</a></h4>\r
          <p class="project-summary">A medical image analysis system leveraging computer vision for the accurate and early detection of thyroid disorders from ultrasound scans. This project demonstrates the application of deep learning in medical diagnosis and healthcare.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Medical Imaging</span>\r
            <span class="project-tag">Computer Vision</span>\r
            <span class="project-tag">Healthcare AI</span>\r
            <span class="project-tag">Ultrasound</span>\r
          </div>\r
          <a href="#/project_articles_v2/thyroid.html" class="project-link" target="_blank">View Research Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/casuality.html" target="_blank"><img src="/assets/img/projects/casuality.png" alt="Causality Analysis"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/casuality.html" target="_blank">Causality Analysis in Complex Datasets</a></h4>\r
          <p class="project-summary">Applied research on causal inference methods to discover and understand hidden relationships within complex, high-dimensional datasets. This work contributes to the field of causal machine learning and interpretable AI.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Causal Inference</span>\r
            <span class="project-tag">Machine Learning</span>\r
            <span class="project-tag">Interpretable AI</span>\r
            <span class="project-tag">Data Science</span>\r
          </div>\r
          <a href="#/project_articles_v2/casuality.html" class="project-link" target="_blank">View Research Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/multitask_echo.html" target="_blank"><img src="/assets/img/projects/multitask_echo.png" alt="Causality Analysis"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/multitask_echo.html" target="_blank">Multi tasking in Echocardiography</a></h4>\r
          <p class="project-summary">Applied research on Multitasking Echocardiography.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Causal Inference</span>\r
            <span class="project-tag">Machine Learning</span>\r
            <span class="project-tag">Interpretable AI</span>\r
            <span class="project-tag">Data Science</span>\r
          </div>\r
          <a href="#/project_articles_v2/multitask_echo.html" class="project-link" target="_blank">View Research Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/umbraUnet.html" target="_blank"><img src="/assets/img/projects/umbranet.png" alt="Causality Analysis"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/umbraUnet.html" target="_blank">Umbra UNet: Remote Sensing Image Segmentation</a></h4>\r
          <p class="project-summary">This project focuses on developing a novel UNet architecture tailored for remote sensing image segmentation tasks, enhancing the accuracy and efficiency of land cover classification.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Causal Inference</span>\r
            <span class="project-tag">Machine Learning</span>\r
            <span class="project-tag">Interpretable AI</span>\r
            <span class="project-tag">Data Science</span>\r
          </div>\r
          <a href="#/project_articles_v2/umbraUnet.html" class="project-link" target="_blank">View Research Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <!-- <div class="project-item">\r
        <div class="project-image">\r
          <a href="/assets/project1.html" target="_blank"><img src="/assets/img/projects/caslity.png" alt="Causality Analysis"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="/assets/project1.html" target="_blank">Stanford University Fellowship Report</a></h4>\r
          <p class="project-summary"> adsfasf asfasdf sadfsadf sdafa fas dfa sdf afdshfjkashf  fhjfkasf</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Causal Inference</span>\r
            <span class="project-tag">Machine Learning</span>\r
            <span class="project-tag">Interpretable AI</span>\r
            <span class="project-tag">Data Science</span>\r
          </div>\r
          <a href="/assets/project1.html" class="project-link" target="_blank">View Research Details &rarr;</a>\r
        </div>\r
      </div> -->\r
\r
    </div>\r
\r
    <!-- Development Projects Section -->\r
    <div class="project-category">\r
      <h3 class="push-down-4"><span>Development Projects</span></h3>\r
      \r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/sih_drone.html" target="_blank"><img src="/assets/img/projects/Dristi/Drone.png" alt="DRISTI Drone"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/sih_drone.html" target="_blank">DRISTI: Autonomous Disaster-Response Drone System</a></h4>\r
          <p class="project-summary">An end-to-end autonomous UAV system for survivor detection and medical supply delivery in disaster-affected regions. Built on HolyBro X500 V2 with ArduPilot and on-device Leaf YOLO inference, featuring a novel motorized cable-lowering delivery mechanism. Top 5 Finalists &mdash; Smart India Hackathon 2025.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Autonomous UAV</span>\r
            <span class="project-tag">Disaster Response</span>\r
            <span class="project-tag">Edge AI</span>\r
            <span class="project-tag">Robotics</span>\r
          </div>\r
          <a href="#/project_articles_v2/sih_drone.html" class="project-link" target="_blank">View Project Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/cardiolens.html" target="_blank"><img src="/assets/img/projects/CardioLens_Arch.png" alt="CardioLens">\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/cardiolens.html" target="_blank">CardioLens: AI-Powered Cardiovascular Detection</a></h4>\r
          <p class="project-summary">An AI-powered system for early cardiovascular disease detection using deep learning models to analyze retinal fundus images. This project demonstrates the practical application of computer vision in medical diagnosis and preventive healthcare.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Medical AI</span>\r
            <span class="project-tag">Computer Vision</span>\r
            <span class="project-tag">Healthcare</span>\r
            <span class="project-tag">Deep Learning</span>\r
          </div>\r
          <a href="#/project_articles_v2/cardiolens.html" class="project-link" target="_blank">View Project Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image">\r
          <a href="#/project_articles_v2/doc2data.html" target="_blank"><img src="https://github.com/Nikhil-Rao20/TripleD-AI4AP-Police_Doc2Data/blob/main/pics/2.jpg?raw=true" alt="Digitization of Offline Documents"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/doc2data.html" target="_blank">Doc2Data: Towards Digitization of AP Police Handwritten Documents</a></h4>\r
          <p class="project-summary">An AI-powered system for early cardiovascular disease detection using deep learning models to analyze retinal fundus images. This project demonstrates the practical application of computer vision in medical diagnosis and preventive healthcare.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Medical AI</span>\r
            <span class="project-tag">Computer Vision</span>\r
            <span class="project-tag">Healthcare</span>\r
            <span class="project-tag">Deep Learning</span>\r
          </div>\r
          <a href="#/project_articles_v2/doc2data.html" class="project-link" target="_blank">View Project Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
\r
      <div class="project-item">\r
        <div class="project-image" style="background-color: #000000">\r
          <a href="#/project_articles_v2/staws.html" target="_blank"><img src="/assets/img/projects/staws.gif" alt="STAWS"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/staws.html" target="_blank">STAWS: Smart Traffic Analysis System</a></h4>\r
          <p class="project-summary">An AI-powered traffic analysis system that uses computer vision and machine learning to monitor and analyze traffic patterns, providing intelligent insights for urban planning and traffic management.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Computer Vision</span>\r
            <span class="project-tag">Traffic Analysis</span>\r
            <span class="project-tag">Urban Planning</span>\r
            <span class="project-tag">AI Systems</span>\r
          </div>\r
          <a href="#/project_articles_v2/staws.html" class="project-link" target="_blank">View Project Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image" style="background-color: #85A19F">\r
          <a href="#/project_articles_v2/zoya.html" target="_blank"><img src="/assets/img/projects/zoya-working.JPG" alt="ZOYA Robot"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/zoya.html" target="_blank">ZOYA: Interactive Talking Robot</a></h4>\r
          <p class="project-summary">An interactive talking robot that combines robotics, natural language processing, and human-robot interaction technologies to create an engaging conversational AI experience.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Robotics</span>\r
            <span class="project-tag">NLP</span>\r
            <span class="project-tag">Human-Robot Interaction</span>\r
            <span class="project-tag">AI</span>\r
          </div>\r
          <a href="#/project_articles_v2/zoya.html" class="project-link" target="_blank">View Project Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
      <div class="project-item">\r
        <div class="project-image" style="background-color: #000000">\r
          <a href="#/project_articles_v2/ai-calc.html" target="_blank"><img src="/assets/img/projects/ai-cal.png" alt="AI Calculator"></a>\r
        </div>\r
        <div class="project-content">\r
          <h4 class="project-title"><a href="#/project_articles_v2/ai-calc.html" target="_blank">AI Calculator: Intelligent Mathematical Assistant</a></h4>\r
          <p class="project-summary">An intelligent calculator that uses machine learning to predict and suggest mathematical operations, making complex calculations more intuitive and efficient for users.</p>\r
          <div class="project-tags">\r
            <span class="project-tag">Machine Learning</span>\r
            <span class="project-tag">Mathematical Computing</span>\r
            <span class="project-tag">User Interface</span>\r
            <span class="project-tag">AI Assistant</span>\r
          </div>\r
          <a href="#/project_articles_v2/ai-calc.html" class="project-link" target="_blank">View Project Details &rarr;</a>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
  </div>\r
\r
  <!-- Back-to-top button -->\r
  \r
\r
  <!-- footer include -->\r
  \r
\r
  <!-- jQuery -->\r
  \r
\r
  <!-- Bootstrap JS Library -->\r
  \r
\r
  <!-- html file include script | used for navbar and footer -->\r
  \r
  \r
\r
  <!-- Local scripts -->\r
  \r
\r
  \r
\r
`,styles:[`\r
    .project-category {\r
      margin-bottom: 3rem;\r
    }\r
    \r
    .project-item {\r
      display: flex;\r
      align-items: flex-start;\r
      gap: 2rem;\r
      padding: 2rem 0;\r
      border-bottom: 1px solid #e0e0e0;\r
    }\r
    \r
    .project-item:last-child {\r
      border-bottom: none;\r
    }\r
    \r
    .project-image {\r
      flex-shrink: 0;\r
      width: 250px;\r
      border-radius: 8px;\r
      overflow: hidden;\r
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\r
      background-color: #ffffff;\r
    }\r
    \r
    .project-image img {\r
      width: 100%;\r
      height: 150px;\r
      object-fit: contain;\r
      object-position: center;\r
      display: block;\r
      transition: transform 0.3s ease;\r
      border-radius: 8px;\r
    }\r
    \r
    .project-image a:hover img {\r
      transform: scale(1.05);\r
    }\r
    \r
    .project-content {\r
      flex-grow: 1;\r
    }\r
    \r
    .project-title {\r
      margin-top: 0;\r
      margin-bottom: 0.5rem;\r
      font-size: 1.6rem;\r
      font-weight: 600;\r
      color: #20364c;\r
    }\r
    \r
    .project-title a {\r
      color: #20364c;\r
      text-decoration: none;\r
      transition: color 0.2s;\r
    }\r
    \r
    .project-title a:hover {\r
      color: #1585cf;\r
      text-decoration: none;\r
    }\r
    \r
    .project-summary {\r
      font-size: 1.5rem;\r
      color: #555;\r
      line-height: 1.6;\r
      margin-bottom: 1rem;\r
    }\r
    \r
    .project-link {\r
      font-weight: 500;\r
      color: #1585cf;\r
      text-decoration: none;\r
      font-size: 1.5rem;\r
      transition: all 0.2s;\r
    }\r
    \r
    .project-link:hover {\r
      color: #1585cf;\r
      border-bottom: 1px dashed #1585cf;\r
      text-decoration: none;\r
      padding-bottom: 2px;\r
    }\r
    \r
    .project-tags {\r
      margin-top: 0.5rem;\r
    }\r
    \r
    .project-tag {\r
      display: inline-block;\r
      background: #f0f0f0;\r
      color: #666;\r
      padding: 0.2rem 0.8rem;\r
      border-radius: 15px;\r
      font-size: 1.2rem;\r
      margin-right: 0.5rem;\r
      margin-bottom: 0.5rem;\r
    }\r
    \r
    @media (max-width: 768px) {\r
      .project-item {\r
        flex-direction: column;\r
        gap: 1.5rem;\r
      }\r
      \r
      .project-image {\r
        width: 100%;\r
        max-width: 300px;\r
        margin: 0 auto;\r
      }\r
      \r
      .project-image img {\r
        height: 200px;\r
        object-fit: contain;\r
        object-position: center;\r
      }\r
      \r
      .project-title {\r
        font-size: 1.4rem;\r
        text-align: center;\r
      }\r
\r
      .project-summary {\r
        font-size: 1.35rem;\r
        text-align: center;\r
      }\r
\r
      .project-link {\r
        font-size: 1.35rem;\r
        display: block;\r
        text-align: center;\r
      }\r
\r
      .project-tags {\r
        text-align: center;\r
      }\r
\r
      #main-container h1 {\r
        font-size: 2rem;\r
        margin-bottom: 1.5rem;\r
      }\r
    }\r
\r
    @media (max-width: 480px) {\r
      .project-title {\r
        font-size: 1.3rem;\r
      }\r
\r
      .project-summary,\r
      .project-link {\r
        font-size: 1.25rem;\r
      }\r
\r
      .project-tag {\r
        font-size: 1.1rem;\r
        padding: 0.15rem 0.6rem;\r
      }\r
\r
      #main-container h1 {\r
        font-size: 1.8rem;\r
      }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "CollectionPage",\r
    "name": "Projects & Works | Nikhileswara Rao Sulake",\r
    "url": "https://nikhil-rao20.github.io/projects.html",\r
    "description": "Projects and works by Nikhileswara Rao Sulake across computer vision, multimodal AI, medical imaging, drone detection, satellite segmentation, document intelligence, and healthcare machine learning.",\r
    "isPartOf": {\r
      "@type": "WebSite",\r
      "name": "Nikhileswara Rao Sulake",\r
      "url": "https://nikhil-rao20.github.io/"\r
    },\r
    "about": {\r
      "@type": "Person",\r
      "name": "Nikhileswara Rao Sulake"\r
    },\r
    "mainEntity": {\r
      "@type": "ItemList",\r
      "itemListElement": [\r
        {"@type": "ListItem", "position": 1, "name": "DRISTI", "url": "https://nikhil-rao20.github.io/project_articles_v2/sih_drone.html"},\r
        {"@type": "ListItem", "position": 2, "name": "YOLO Backbone Analysis", "url": "https://nikhil-rao20.github.io/project_articles_v2/multi_backbone_yolo.html"},\r
        {"@type": "ListItem", "position": 3, "name": "CardioLens", "url": "https://nikhil-rao20.github.io/project_articles_v2/cardiolens.html"},\r
        {"@type": "ListItem", "position": 4, "name": "Umbra UNet", "url": "https://nikhil-rao20.github.io/project_articles_v2/umbraUnet.html"},\r
        {"@type": "ListItem", "position": 5, "name": "Doc2Data", "url": "https://nikhil-rao20.github.io/project_articles_v2/doc2data.html"}\r
      ]\r
    },\r
    "inLanguage": "en"\r
  }`,src:``}]},{route:`prev_projects.html`,title:`Projects & Works | Nikhileswara Rao Sulake`,description:`Selected earlier projects by Nikhileswara Rao Sulake across deep learning, computer vision, medical imaging, causal inference, and applied AI engineering.`,portfolioChrome:!0,html:`\r
  \r
  <div class="spacer-div-3 hidden-xs hidden-xs"></div>\r
\r
  <div id="main-container" class="container">\r
\r
    <div class="row">\r
        <div class="col-sm-12">\r
\r
          <h1>Projects & Works</h1>\r
\r
          <p>Explore my research projects, literature reviews, and more.</p>\r
\r
        </div>\r
    </div>\r
\r
  </div>\r
  \r
  <div class="project-tabs">\r
    <button class="project-tab active" data-tab="research">Research Projects</button>\r
    <button class="project-tab" data-tab="development">Development Projects</button>\r
  </div>\r
  \r
  <div class="projects-grid">\r
\r
    <div class="project-card" data-category="research">\r
      <img class="project-thumb" src="/assets/img/projects/casuality.png" alt="Causality Analysis">\r
      <div class="project-title">Brain MRI PPT Analysis</div>\r
      <div class="project-summary">Research on Brain MRI Physics</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="research">\r
      <img class="project-thumb" src="/assets/img/projects/yolobackbone.png" alt="Causality Analysis">\r
      <div class="project-title">Backbones of YOLO</div>\r
      <div class="project-summary">omparative Analysisenhanced yolov8 with CNN, Transformer and Mamba based Backbones\r
        </div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="research">\r
      <img class="project-thumb" src="/assets/img/projects/casuality.png" alt="Causality Analysis">\r
      <div class="project-title">Causality Analysis</div>\r
      <div class="project-summary">Research on causal inference methods for understanding relationships in complex datasets.</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
    \r
    <div class="project-card" data-category="research">\r
      <img class="project-thumb" src="/assets/img/projects/dgyolo.png" alt="DG-YOLO">\r
      <div class="project-title">DG-YOLO</div>\r
      <div class="project-summary">Domain generalization approach for YOLO object detection in varying environments.</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="research">\r
      <img class="project-thumb" src="/assets/img/projects/thyroid.jpg" alt="Thyroid Detection">\r
      <div class="project-title">Thyroid Disease Detection</div>\r
      <div class="project-summary">Medical image analysis system for early detection of thyroid disorders.</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
    \r
\r
    <div class="project-card" data-category="development">\r
      <img class="project-thumb" src="/assets/img/projects/cardiolens.gif" alt="CardioLens">\r
      <div class="project-title">CardioLens</div>\r
      <div class="project-summary">AI-powered cardiovascular disease detection using retinal fundus images and deep learning.</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="development">\r
      <img class="project-thumb" src="/assets/img/projects/staws.gif" alt="CardioLens">\r
      <div class="project-title">STAWS</div>\r
      <div class="project-summary">Traffic AI Powered</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="development">\r
      <img class="project-thumb" src="/assets/img/projects/swetcha.gif" alt="CardioLens">\r
      <div class="project-title">SWETCHA</div>\r
      <div class="project-summary">NCC</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="development">\r
      <img class="project-thumb" src="/assets/img/projects/handsign.png" alt="Hand Sign Recognition">\r
      <div class="project-title">Hand Sign Recognition</div>\r
      <div class="project-summary">Real-time hand gesture recognition system using computer vision and machine learning.</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="development">\r
      <img class="project-thumb" src="/assets/img/projects/zoya-working.JPG" alt="CardioLens">\r
      <div class="project-title">ZOYA</div>\r
      <div class="project-summary">Talking Robot</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    <div class="project-card" data-category="development">\r
      <img class="project-thumb" src="/assets/img/projects/ai-cal.png" alt="AI Calculator">\r
      <div class="project-title">AI Calculator</div>\r
      <div class="project-summary">An intelligent calculator that uses machine learning to predict and suggest mathematical operations.</div>\r
      <a class="project-btn" href="/assets/project1.html">View Details</a>\r
    </div>\r
\r
    \r
    \r
    \r
    \r
\r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
`,styles:[`\r
    body {\r
      font-size: 16px;\r
      background: #FFFFFF;\r
      font-family: "Open Sans", Arial, sans-serif;\r
      \r
    }\r
    .projects-header {\r
      text-align: center;\r
      margin: 40px 0 30px 0;\r
    }\r
    .projects-grid {\r
      display: flex;\r
      flex-wrap: wrap;\r
      gap: 30px;\r
      justify-content: center;\r
      max-width: 1100px;\r
      margin: 0 auto 60px auto;\r
      padding: 0 10px;\r
    }\r
    .project-card {\r
      background: #fff;\r
      border-radius: 18px;\r
      box-shadow: 0 4px 18px rgba(0,0,0,0.08);\r
      width: 320px;\r
      display: flex;\r
      flex-direction: column;\r
      align-items: center;\r
      padding: 24px 18px 18px 18px;\r
      transition: transform 0.2s, box-shadow 0.2s;\r
      text-align: center;\r
    }\r
    .project-card:hover {\r
      transform: translateY(-6px) scale(1.025);\r
      box-shadow: 0 8px 32px rgba(26,115,232,0.13);\r
    }\r
 \r
    .project-thumb {\r
      width: 100%;\r
      height: 160px;\r
      object-fit: cover;\r
      border-radius: 12px;\r
      margin-bottom: 16px;\r
      background: #eee;\r
    }\r
    .project-title {\r
      font-size: 1.2em;\r
      font-weight: 700;\r
      margin-bottom: 10px;\r
      color: #1a73e8;\r
    }\r
    .project-summary {\r
      font-size: 1em;\r
      color: #444;\r
      margin-bottom: 18px;\r
      min-height: 48px;\r
    }\r
    .project-btn {\r
      padding: 8px 24px;\r
      border: none;\r
      border-radius: 20px;\r
      background: #1a73e8;\r
      color: #fff;\r
      font-weight: 600;\r
      font-size: 1em;\r
      cursor: pointer;\r
      transition: background 0.2s;\r
      text-decoration: none;\r
      display: inline-block;\r
    }\r
    .project-btn:hover {\r
      background: #155ab6;\r
      color: #fff;\r
      text-decoration: none;\r
    }\r
    \r
    /* Project Tabs Styling */\r
    .project-tabs {\r
      display: flex;\r
      justify-content: center;\r
      margin: 30px 0 40px 0;\r
      gap: 20px;\r
    }\r
    \r
    .project-tab {\r
      padding: 12px 30px;\r
      border: none;\r
      background: #fff;\r
      border-radius: 30px;\r
      font-weight: 600;\r
      font-size: 1.1em;\r
      color: #333;\r
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);\r
      cursor: pointer;\r
      transition: all 0.2s ease;\r
    }\r
    \r
    .project-tab.active, .project-tab:hover {\r
      background: #1a73e8;\r
      color: #fff;\r
      transform: translateY(-2px);\r
      box-shadow: 0 4px 15px rgba(26,115,232,0.3);\r
    }\r
    \r
    /* Project Cards - Initially hidden */\r
    .project-card {\r
      display: none;\r
    }\r
    \r
    .project-card.show {\r
      display: flex;\r
    }\r
    \r
    /* Responsive adjustments */\r
    @media (max-width: 768px) {\r
      .projects-grid {\r
        gap: 20px;\r
        padding: 0 15px;\r
      }\r
      .project-card {\r
        width: 100%;\r
        max-width: 350px;\r
      }\r
      \r
      .project-tabs {\r
        flex-direction: column;\r
        align-items: center;\r
        gap: 15px;\r
      }\r
      \r
      .project-tab {\r
        width: 200px;\r
      }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`/assets/css/main.css`],scripts:[{code:`// Show only the selected tab's projects\r
    function showProjectTab(tab) {\r
      document.querySelectorAll('.project-card').forEach(card => {\r
        if (card.getAttribute('data-category') === tab) {\r
          card.classList.add('show');\r
        } else {\r
          card.classList.remove('show');\r
        }\r
      });\r
    }\r
\r
    // On tab click\r
    document.querySelectorAll('.project-tab').forEach(tabBtn => {\r
      tabBtn.addEventListener('click', function() {\r
        document.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));\r
        this.classList.add('active');\r
        showProjectTab(this.getAttribute('data-tab'));\r
      });\r
    });\r
\r
    // On page load, show only research projects\r
    document.addEventListener('DOMContentLoaded', function() {\r
      showProjectTab('research');\r
    });`,src:``}]},{route:`gallery.html`,title:`Gallery | Nikhileswara Rao Sulake`,description:`Photo gallery of Nikhileswara Rao Sulake (Nikhil Rao Sulake, NR Sulake) — travel, events, and academic life.`,portfolioChrome:!0,html:`\r
  \r
\r
  <div class="spacer-div-3 hidden-xs hidden-xs"></div>\r
\r
  <!-- Main content    -->\r
  <div id="main-container" class="container">\r
\r
    <div class="row">\r
        <div class="col-sm-12">\r
\r
          <h1>Photo Gallery</h1>\r
\r
          <p>Explore my research, achievements, and travel adventures</p>\r
\r
        </div>\r
    </div>\r
\r
  </div>\r
  <div class="gallery-tabs">\r
    <button class="gallery-tab active" data-tab="research">Research</button>\r
    <button class="gallery-tab" data-tab="achievements">Achievements</button>\r
    <button class="gallery-tab" data-tab="travelling">Travelling</button>\r
  </div>\r
  <div class="masonry-gallery" id="gallery">\r
    <!-- Research Photos -->\r
    <div class="gallery-item" data-category="research">\r
      <img class="gallery-img" src="/assets/img/gallery/profile_main_pic.jpg" alt="In the Lab">\r
      <div class="gallery-caption">Working on deep learning models in the lab</div>\r
    </div>\r
    <div class="gallery-item" data-category="research">\r
      <img class="gallery-img" src="/assets/img/gallery/profile_main_pic.jpg" alt="Conference Poster">\r
      <div class="gallery-caption">Presenting my research poster at ICVGIP 2025</div>\r
    </div>\r
\r
    <!-- Achievements Photos -->\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/drdo-1.png" alt="DRDO Achievement">\r
      <div class="gallery-caption">DRDO & DIAT Certification in AI & ML</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/drdo-3.png" alt="DRDO Certificate">\r
      <div class="gallery-caption">Advanced AI Certification from DRDO</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/intel-1.jpg" alt="Intel AI Hackathon">\r
      <div class="gallery-caption">Intel AI Hackathon Participation</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/intel-2.jpg" alt="Intel Competition">\r
      <div class="gallery-caption">Intel AI Competition Achievement</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/intel-3.jpg" alt="Intel Event">\r
      <div class="gallery-caption">Intel AI Event Participation</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/intel-6.jpg" alt="Intel Recognition">\r
      <div class="gallery-caption">Intel AI Recognition Award</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/maic-1.jpg" alt="MAIC Achievement">\r
      <div class="gallery-caption">MAIC Competition Success</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/maic-3.png" alt="MAIC Certificate">\r
      <div class="gallery-caption">MAIC Certification Achievement</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/ncc-3.jpg" alt="NCC Achievement">\r
      <div class="gallery-caption">NCC Training Achievement</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/ncc-4.jpg" alt="NCC Certificate">\r
      <div class="gallery-caption">NCC Certification</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/parabola-1.jpg" alt="Parabola Achievement">\r
      <div class="gallery-caption">Parabola Competition Success</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/police-1.jpg" alt="Police Achievement">\r
      <div class="gallery-caption">Police Department Recognition</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/police-2.jpg" alt="Police Certificate">\r
      <div class="gallery-caption">Police Achievement Certificate</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/police-3.jpg" alt="Police Award">\r
      <div class="gallery-caption">Police Department Award</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/scientia-2.jpg" alt="Scientia Achievement">\r
      <div class="gallery-caption">Scientia Competition Success</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/blog.png" alt="Blog Achievement">\r
      <div class="gallery-caption">Blog Writing Achievement</div>\r
    </div>\r
    <div class="gallery-item" data-category="achievements">\r
      <img class="gallery-img" src="/assets/img/achivs/zoya-1.JPG" alt="Zoya Achievement">\r
      <div class="gallery-caption">Zoya Project Achievement</div>\r
    </div>\r
\r
    <!-- Travelling Photos -->\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/araku.jpg" alt="Araku Valley">\r
      <div class="gallery-caption">Araku Valley - Scenic Beauty</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/araku_2.jpg" alt="Araku Valley View">\r
      <div class="gallery-caption">Araku Valley - Panoramic View</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/araku_3.jpg" alt="Araku Valley Landscape">\r
      <div class="gallery-caption">Araku Valley - Mountain Landscape</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/araku_4.jpg" alt="Araku Valley Scenery">\r
      <div class="gallery-caption">Araku Valley - Natural Scenery</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/bang.jpg" alt="Bangalore">\r
      <div class="gallery-caption">Bangalore - Garden City</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/bhavani_islands.jpg" alt="Bhavani Islands">\r
      <div class="gallery-caption">Bhavani Islands - River Beauty</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/bza.jpg" alt="Vijayawada">\r
      <div class="gallery-caption">Vijayawada - City View</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/charminar.jpg" alt="Charminar">\r
      <div class="gallery-caption">Charminar - Hyderabad Icon</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/chidambaram.jpg" alt="Chidambaram Temple">\r
      <div class="gallery-caption">Chidambaram Temple - Ancient Architecture</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/cmr_hyd.jpg" alt="CMR Hyderabad">\r
      <div class="gallery-caption">CMR Hyderabad - Campus View</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/guitar.jpg" alt="Guitar Performance">\r
      <div class="gallery-caption">Guitar Performance - Musical Journey</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/hyd_army_unit.jpg" alt="Hyderabad Army Unit">\r
      <div class="gallery-caption">Hyderabad Army Unit - Military Visit</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/Hyder_army_unit.jpg" alt="Hyderabad Army Unit">\r
      <div class="gallery-caption">Hyderabad Army Unit - Training Ground</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/iisc_2.jpg" alt="IISc Bangalore">\r
      <div class="gallery-caption">IISc Bangalore - Premier Institute</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/IITKGP.jpg" alt="IIT Kharagpur">\r
      <div class="gallery-caption">IIT Kharagpur - Campus Visit</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/Intel AI Hackathon.jpg" alt="Intel AI Hackathon">\r
      <div class="gallery-caption">Intel AI Hackathon - Competition</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/kali_mata.jpg" alt="Kali Mata Temple">\r
      <div class="gallery-caption">Kali Mata Temple - Spiritual Visit</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/kharagpur.jpg" alt="Kharagpur">\r
      <div class="gallery-caption">Kharagpur - City Exploration</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/krishna_dam.jpg" alt="Krishna Dam">\r
      <div class="gallery-caption">Krishna Dam - Engineering Marvel</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/meet_with_GC_Indian_army.jpg" alt="Meeting with GC Indian Army">\r
      <div class="gallery-caption">Meeting with GC Indian Army - Military Interaction</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/orissa.jpg" alt="Odisha">\r
      <div class="gallery-caption">Odisha - State Visit</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/rajamundry.jpg" alt="Rajahmundry">\r
      <div class="gallery-caption">Rajahmundry - Cultural Heritage</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/sklm_aitam.jpg" alt="SKLM AITAM">\r
      <div class="gallery-caption">SKLM AITAM - Institution Visit</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/srisailam_dam.jpg" alt="Srisailam Dam">\r
      <div class="gallery-caption">Srisailam Dam - Hydroelectric Project</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/thala_for_reason.jpg" alt="Thala for Reason">\r
      <div class="gallery-caption">Thala for Reason - Event Participation</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/thanjavur.jpg" alt="Thanjavur">\r
      <div class="gallery-caption">Thanjavur - Historical City</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/trad.jpg" alt="Traditional Event">\r
      <div class="gallery-caption">Traditional Event - Cultural Celebration</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/vicotira_mahal.jpg" alt="Victoria Mahal">\r
      <div class="gallery-caption">Victoria Mahal - Palace Architecture</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/viza.jpg" alt="Vizag">\r
      <div class="gallery-caption">Vizag - Port City</div>\r
    </div>\r
    <div class="gallery-item" data-category="travelling">\r
      <img class="gallery-img" src="/assets/img/travel/vizag_beach.jpg" alt="Vizag Beach">\r
      <div class="gallery-caption">Vizag Beach - Coastal Beauty</div>\r
    </div>\r
  </div>\r
\r
  \r
\r
  <!-- Back-to-top button -->\r
  \r
\r
  <!-- jQuery -->\r
  \r
  <!-- Bootstrap JS Library -->\r
  \r
  <!-- html file include script | used for navbar and footer -->\r
  \r
  \r
\r
  \r
\r
  \r
`,styles:[`\r
    body {\r
      background: #f7f7f7;\r
      font-family: 'Montserrat', sans-serif;\r
    }\r
    .gallery-header {\r
      text-align: center;\r
      margin: 40px 0 20px 0;\r
    }\r
    .gallery-tabs {\r
      display: flex;\r
      justify-content: center;\r
      margin-bottom: 30px;\r
      gap: 20px;\r
    }\r
    .gallery-tab {\r
      padding: 10px 30px;\r
      border: none;\r
      background: #fff;\r
      border-radius: 30px;\r
      font-weight: 600;\r
      font-size: 1.1em;\r
      color: #333;\r
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);\r
      cursor: pointer;\r
      transition: background 0.2s, color 0.2s;\r
    }\r
    .gallery-tab.active, .gallery-tab:hover {\r
      background: #1a73e8;\r
      color: #fff;\r
    }\r
    .masonry-gallery {\r
      columns: 1;\r
      column-gap: 20px;\r
      max-width: 1200px;\r
      margin: 0 auto 60px auto;\r
      padding: 0 15px;\r
    }\r
    @media (min-width: 600px) {\r
      .masonry-gallery { columns: 2; }\r
    }\r
    @media (min-width: 900px) {\r
      .masonry-gallery { columns: 3; }\r
    }\r
    @media (min-width: 1200px) {\r
      .masonry-gallery { columns: 4; }\r
    }\r
    .gallery-item {\r
      display: none;\r
      background: #fff;\r
      margin: 0 0 20px;\r
      border-radius: 18px;\r
      overflow: hidden;\r
      box-shadow: 0 4px 18px rgba(0,0,0,0.08);\r
      width: 100%;\r
      transition: transform 0.2s, box-shadow 0.2s;\r
      cursor: pointer;\r
      position: relative;\r
      break-inside: avoid;\r
      page-break-inside: avoid;\r
    }\r
    .gallery-item.show {\r
      display: inline-block;\r
    }\r
    .gallery-item:hover {\r
      transform: translateY(-6px) scale(1.025);\r
      box-shadow: 0 8px 32px rgba(26,115,232,0.13);\r
    }\r
    .gallery-img {\r
      width: 100%;\r
      display: block;\r
      aspect-ratio: 4/3;\r
      object-fit: cover;\r
      transition: filter 0.2s;\r
    }\r
    \r
         /* Special styling for travelling tab images */\r
     .gallery-item[data-category="travelling"] .gallery-img {\r
       aspect-ratio: auto;\r
       height: 100%;\r
       object-fit: cover;\r
       max-height: none;\r
       min-height: 300px;\r
       background: none;\r
     }\r
    .gallery-item:hover .gallery-img {\r
      filter: brightness(0.92) saturate(1.1);\r
    }\r
    \r
    .gallery-caption {\r
      padding: 14px 18px 12px 18px;\r
      font-size: 1em;\r
      color: #444;\r
      background: #fff;\r
      font-weight: 500;\r
      letter-spacing: 0.01em;\r
    }\r
   `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`,`https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap`],scripts:[{code:`// Show only the selected tab's images\r
    function showGalleryTab(tab) {\r
      document.querySelectorAll('.gallery-item').forEach(item => {\r
        if (item.getAttribute('data-category') === tab) {\r
          item.classList.add('show');\r
        } else {\r
          item.classList.remove('show');\r
        }\r
      });\r
    }\r
\r
    // On tab click\r
    document.querySelectorAll('.gallery-tab').forEach(tabBtn => {\r
      tabBtn.addEventListener('click', function() {\r
        document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));\r
        this.classList.add('active');\r
        showGalleryTab(this.getAttribute('data-tab'));\r
      });\r
    });\r
\r
    // On page load, show only research images\r
    document.addEventListener('DOMContentLoaded', function() {\r
      showGalleryTab('research');\r
    });`,src:``}]},{route:`contact.html`,title:`Contact | Nikhileswara Rao Sulake`,description:`Contact Nikhileswara Rao Sulake (Nikhil Rao Sulake, NR Sulake) — AI researcher and engineer. Reach out via email, LinkedIn, or GitHub.`,portfolioChrome:!0,html:`\r
\r
   <!-- navbar include -->\r
   \r
\r
   <div class="spacer-div-3 hidden-xs hidden-xs"></div>\r
\r
   <!-- Main content    -->\r
   <div id="main-container" class="container">\r
    \r
\r
    <div class="container" id="form-wrapper">\r
\r
        <!-- Start Contact Form -->\r
        <form role="form" id="form" class="contact-form" data-toggle="validator" class="shake">\r
            <div class="form-group">\r
              <div class="controls">\r
                <input type="text" id="name" class="form-control" name="name" placeholder="Name" required data-error="Please enter your name">\r
                <div class="help-block with-errors"></div>\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <div class="controls">\r
                <input type="email" class="email form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your email">\r
                <div class="help-block with-errors"></div>\r
              </div>\r
            </div>\r
           \r
            <div class="form-group">\r
              <div class="controls">\r
                <textarea id="message" rows="7" placeholder="Massage" name="message" class="form-control" required data-error="Write your message"></textarea>\r
                <div class="help-block with-errors"></div>\r
              </div>  \r
            </div>\r
\r
            <button type="submit" id="submit" class="btn btn-success"></i> Send Message</button>\r
            <div id="msgSubmit" class="h3 text-center hidden"></div> \r
            <div class="clearfix"></div>   \r
\r
        </form> \r
        <br>\r
        <h4 id="success"></h4>\r
\r
        <p>\r
          <b>** My e-mail & cell numbers are given in About section. E-mail is preferred.</b>\r
        </p>\r
   </div>\r
   \r
\r
   <!-- Back-to-top button -->\r
   \r
\r
   <!-- footer include -->\r
   \r
\r
   <!-- jQuery -->\r
   \r
\r
   <!-- Bootstrap JS Library -->\r
   \r
\r
   <!-- html file include script | used for navbar and footer -->\r
   \r
   \r
\r
   <!-- Local scripts -->\r
   \r
\r
   \r
  <!-- Script for submitting contact form to self api -->\r
    \r
\r
`,styles:[],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[{code:`function getCookie(name) {\r
		    var cookieValue = null;\r
		    if (document.cookie && document.cookie !== '') {\r
		        var cookies = document.cookie.split(';');\r
		        for (var i = 0; i < cookies.length; i++) {\r
		            var cookie = cookies[i].trim();\r
		            // Does this cookie string begin with the name we want?\r
		            if (cookie.substring(0, name.length + 1) === (name + '=')) {\r
		                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\r
		                break;\r
		            }\r
		        }\r
		    }\r
		    return cookieValue;\r
		}\r
    var csrftoken = getCookie('csrftoken');\r
    \r
    var form = document.getElementById('form-wrapper')\r
    form.addEventListener('submit', function(e){\r
      e.preventDefault()\r
\r
      \r
      var url = 'https://smrcontact.herokuapp.com/contact-me/'\r
\r
      var name = document.getElementById('name').value\r
      var email = document.getElementById('email').value\r
      var message = document.getElementById('message').value\r
\r
      fetch(url, {\r
      method: 'POST',\r
      headers:{\r
        'Content-type':'application/json',\r
        'X-CSRFToken': csrftoken,\r
      },\r
\r
      body:JSON.stringify({'name':name, 'email':email, 'message':message})\r
\r
    } \r
    ).then(function(response){\r
      document.getElementById('form').reset()\r
      document.getElementById('success').textContent = "Your response is submitted successfully"\r
    })\r
\r
\r
    })`,src:``}]},{route:`lung-digital-twin/index.html`,title:`Lung Digital Twin | Nikhileswara Rao Sulake`,description:`Lung Digital Twin explores wearable biosignals and respiratory monitoring to build a digital twin of lung function for real-time healthcare applications.`,portfolioChrome:!1,html:`\r
\r
<nav class="navbar" role="navigation" aria-label="main navigation">\r
  <div class="navbar-menu">\r
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">\r
      <a class="navbar-item" href="/"><span class="icon"><i class="fas fa-home"></i></span></a>\r
      <div class="navbar-item has-dropdown is-hoverable">\r
        <a class="navbar-link">More Research</a>\r
        <div class="navbar-dropdown">\r
          <a class="navbar-item" href="/taru-net/">TARU-Net</a>\r
          <a class="navbar-item" href="/cips-net/">CIPS-Net</a>\r
          <a class="navbar-item" href="/ecg-free-echo/">ECG-Free Echo</a>\r
          <a class="navbar-item" href="/cxr-lt/">CXR-LT</a>\r
          <a class="navbar-item" href="/lung-digital-twin/">Lung Digital Twin</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
<section class="hero">\r
  <div class="hero-body">\r
    <div class="container is-max-desktop has-text-centered">\r
      <h1 class="title is-1 publication-title">Lung Digital Twin</h1>\r
      <p class="subtitle is-3" style="margin-top: 2rem;">Wearable Biosignals for Real-Time Respiratory Monitoring</p>\r
      <div class="content is-medium" style="max-width: 900px; margin: 2rem auto 0; text-align: left;">\r
        <p>This project investigates how wearable biosignals can be used to build a digital twin of the lung for real-time respiratory monitoring. The focus is on turning continuous physiological signals into actionable health insight.</p>\r
        <p>The page can later host the paper summary, methodology, and results, but even now it should explain the project clearly enough for search engines and visitors to understand the topic.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<footer class="footer">\r
  <div class="container">\r
    <div class="content has-text-centered">\r
      <p>Template adapted from <a href="https://github.com/nerfies/nerfies.github.io">Nerfies</a>.</p>\r
    </div>\r
  </div>\r
</footer>\r
\r
`,styles:[],styleSheets:[`/assets/research_paper_static/css/bulma.min.css`,`/assets/research_paper_static/css/fontawesome.all.min.css`,`/assets/research_paper_static/css/index.css`],scripts:[]},{route:`ecg-free-echo/index.html`,title:`ECG-Free Echo | Nikhileswara Rao Sulake`,description:`ECG-Free Echo studies cardiac timing extraction from echocardiography without ECG traces, using signal processing and machine learning methods by Nikhileswara Rao Sulake.`,portfolioChrome:!1,html:`\r
\r
<nav class="navbar" role="navigation" aria-label="main navigation">\r
  <div class="navbar-menu">\r
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">\r
      <a class="navbar-item" href="/"><span class="icon"><i class="fas fa-home"></i></span></a>\r
      <div class="navbar-item has-dropdown is-hoverable">\r
        <a class="navbar-link">More Research</a>\r
        <div class="navbar-dropdown">\r
          <a class="navbar-item" href="/taru-net/">TARU-Net</a>\r
          <a class="navbar-item" href="/cips-net/">CIPS-Net</a>\r
          <a class="navbar-item" href="/ecg-free-echo/">ECG-Free Echo</a>\r
          <a class="navbar-item" href="/cxr-lt/">CXR-LT</a>\r
          <a class="navbar-item" href="/lung-digital-twin/">Lung Digital Twin</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
<section class="hero">\r
  <div class="hero-body">\r
    <div class="container is-max-desktop has-text-centered">\r
      <h1 class="title is-1 publication-title">ECG-Free Echo</h1>\r
      <p class="subtitle is-3" style="margin-top: 2rem;">Cardiac Timing from Echocardiography Without ECG</p>\r
      <div class="content is-medium" style="max-width: 900px; margin: 2rem auto 0; text-align: left;">\r
        <p>This project studies whether cardiac timing can be estimated directly from echocardiography videos without relying on ECG traces. The work is motivated by practical clinical settings where ECG may be unavailable or noisy.</p>\r
        <p>The page can later host the paper summary, methodology, and results, but even now it should explain the project clearly enough for search engines and visitors to understand the topic.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<footer class="footer">\r
  <div class="container">\r
    <div class="content has-text-centered">\r
      <p>Template adapted from <a href="https://github.com/nerfies/nerfies.github.io">Nerfies</a>.</p>\r
    </div>\r
  </div>\r
</footer>\r
\r
`,styles:[],styleSheets:[`/assets/research_paper_static/css/bulma.min.css`,`/assets/research_paper_static/css/fontawesome.all.min.css`,`/assets/research_paper_static/css/index.css`],scripts:[]},{route:`cips-net/index.html`,title:`CIPS-Net: Instruction-Conditioned Pathology Segmentation | Nikhileswara Rao Sulake`,description:`CIPS-Net is an instruction-conditioned pathology segmentation framework for histopathology image analysis by Nikhileswara Rao Sulake and collaborators.`,portfolioChrome:!1,html:`\r
\r
<nav class="navbar" role="navigation" aria-label="main navigation">\r
  <div class="navbar-menu">\r
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">\r
      <a class="navbar-item" href="/"><span class="icon"><i class="fas fa-home"></i></span></a>\r
      <div class="navbar-item has-dropdown is-hoverable">\r
        <a class="navbar-link">More Research</a>\r
        <div class="navbar-dropdown">\r
          <a class="navbar-item" href="/taru-net/">TARU-Net</a>\r
          <a class="navbar-item" href="/cips-net/">CIPS-Net</a>\r
          <a class="navbar-item" href="/ecg-free-echo/">ECG-Free Echo</a>\r
          <a class="navbar-item" href="/cxr-lt/">CXR-LT</a>\r
          <a class="navbar-item" href="/lung-digital-twin/">Lung Digital Twin</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
<section class="hero">\r
  <div class="hero-body">\r
    <div class="container is-max-desktop has-text-centered">\r
      <h1 class="title is-1 publication-title">CIPS-Net</h1>\r
      <p class="subtitle is-3" style="margin-top: 2rem;">Instruction-Conditioned Pathology Segmentation</p>\r
      <div class="content is-medium" style="max-width: 900px; margin: 2rem auto 0; text-align: left;">\r
        <p>CIPS-Net is my histopathology segmentation work focused on instruction-driven, compositional reasoning for overlapping pathology classes. The goal is to move beyond fixed-label segmentation and make the model respond to human-readable pathology instructions.</p>\r
        <p>The project combines vision-language guidance with graph reasoning to improve dense prediction on pathology data. It connects directly to my broader research on medical imaging, multimodal learning, and clinically useful AI systems.</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<footer class="footer">\r
  <div class="container">\r
    <div class="content has-text-centered">\r
      <p>Template adapted from <a href="https://github.com/nerfies/nerfies.github.io">Nerfies</a>.</p>\r
    </div>\r
  </div>\r
</footer>\r
\r
`,styles:[],styleSheets:[`/assets/research_paper_static/css/bulma.min.css`,`/assets/research_paper_static/css/fontawesome.all.min.css`,`/assets/research_paper_static/css/index.css`],scripts:[]},{route:`cxr-lt/index.html`,title:`Loss Design and Architecture Selection | Nikhileswara Rao Sulake`,description:`Systematic evaluation of loss functions, CNN architectures and post-training strategies for long-tailed multi-label CXR classification. 5th place in CXR-LT 2026 Challenge with 0.3950 mAP. ConvNeXt-Large + LDAM-DRW achieves 0.5220 mAP on development set.`,portfolioChrome:!1,html:`\r
\r
<nav class="navbar" role="navigation" aria-label="main navigation">\r
  <div class="navbar-brand">\r
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">\r
      <span aria-hidden="true"></span>\r
      <span aria-hidden="true"></span>\r
      <span aria-hidden="true"></span>\r
    </a>\r
  </div>\r
  <div class="navbar-menu">\r
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">\r
      <a class="navbar-item" href="/">\r
        <span class="icon">\r
          <i class="fas fa-home"></i>\r
        </span>\r
      </a>\r
\r
      <div class="navbar-item has-dropdown is-hoverable">\r
        <a class="navbar-link">\r
          More Research\r
        </a>\r
        <div class="navbar-dropdown">\r
          <a class="navbar-item" href="/taru-net/">\r
            TARU-Net\r
          </a>\r
          <a class="navbar-item" href="/cips-net/">\r
            CIPS-Net\r
          </a>\r
          <a class="navbar-item" href="/ecg-free-echo/">\r
            ECG-Free Echo\r
          </a>\r
          <a class="navbar-item" href="/cxr-lt/">\r
            CXR-LT\r
          </a>\r
          <a class="navbar-item" href="/lung-digital-twin/">\r
            Lung Digital Twin\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
\r
<section class="hero">\r
  <div class="hero-body">\r
    <div class="container is-max-desktop">\r
      <div class="columns is-centered">\r
        <div class="column has-text-centered">\r
          <h1 class="title is-1 publication-title">Loss Design and Architecture Selection for Long-Tailed Multi-Label Chest X-Ray Classification</h1>\r
          <div class="is-size-5 publication-authors">\r
            <span class="author-block">\r
              <a href="https://nikhil-rao20.github.io">Nikhileswara Rao Sulake</a>\r
            </span>\r
          </div>\r
\r
          <div class="is-size-5 publication-authors">\r
            <span class="author-block">RGUKT Nuzvid, India</span> <br>\r
            <span class="tag is-info is-medium">CXR-LT 2026 Challenge (ISBI 2026) : 5th Place</span>\r
          </div>\r
\r
\r
\r
          <div class="column has-text-centered">\r
            <div class="publication-links">\r
              <!-- PDF Link -->\r
              <!-- <span class="link-block">\r
                <a href="#" class="external-link button is-normal is-rounded is-dark">\r
                  <span class="icon">\r
                    <i class="fas fa-file-pdf"></i>\r
                  </span>\r
                  <span>Paper</span>\r
                </a>\r
              </span> -->\r
              <!-- arXiv Link -->\r
              <span class="link-block">\r
                <a href="https://arxiv.org/abs/2603.02294" class="external-link button is-normal is-rounded is-dark">\r
                  <span class="icon">\r
                    <i class="ai ai-arxiv"></i>\r
                  </span>\r
                  <span>arXiv</span>\r
                </a>\r
              </span>\r
              <!-- Code Link -->\r
              <span class="link-block">\r
                <a href="https://github.com/Nikhil-Rao20/Long_Tail" class="external-link button is-normal is-rounded is-dark">\r
                  <span class="icon">\r
                    <i class="fab fa-github"></i>\r
                  </span>\r
                  <span>Code</span>\r
                </a>\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <!-- Abstract -->\r
    <div class="columns is-centered has-text-centered">\r
      <div class="column is-four-fifths">\r
        <h2 class="title is-3">Abstract</h2>\r
        <div class="content has-text-justified">\r
          <p>\r
            Long-tailed class distributions pose a significant challenge for multi-label chest X-ray (CXR) classification, where rare but clinically important findings are severely underrepresented. We present a systematic empirical evaluation of loss functions, CNN backbone architectures and post-training strategies on the <strong>CXR-LT 2026 benchmark</strong>, comprising approximately 143K images with 30 disease labels from PadChest.\r
          </p>\r
          <p>\r
            Our experiments demonstrate that <strong>LDAM with deferred re-weighting (LDAM-DRW)</strong> consistently outperforms standard BCE and asymmetric losses for rare class recognition. Amongst the architectures evaluated, <strong>ConvNeXt-Large</strong> achieves the best single-model performance with <strong>0.5220 mAP</strong> and <strong>0.3765 F1</strong> on our development set, whilst classifier re-training and test-time augmentation further improve ranking metrics. On the official test leaderboard, our submission achieved <strong>0.3950 mAP</strong>, ranking <strong>5th amongst 68 participating teams</strong> with a total of 1528 submissions.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <div class="columns is-centered">\r
      <div class="column is-full-width">\r
        <h2 class="title is-3">Method Overview</h2>\r
        <div class="content has-text-justified">\r
          <p>\r
            Given a chest X-ray image, the goal is to predict a binary label vector for 30 disease classes. This multi-label setting allows multiple findings to co-occur in a single image. We investigated several approaches in the perspective of loss functions, backbone architectures and post-training techniques to address the extreme class imbalance and multi-label nature of the task. We experimented with Label-Distribution-Aware Margin Loss combined with Deferred Re-Weighting (LDAM-DRW), Asymmetric Loss, and standard Binary Cross-Entropy (BCE) as baselines. For backbone architectures, we evaluated ResNet-50/101, DenseNet-121/169, EfficientFormerV2-S and ConvNeXt-Base/Large. Post-training strategies included classifier re-training (cRT), test-time augmentation (TTA), probability calibration (Prob Calib.) and ensembling.\r
          </p>\r
          <p>\r
            We experiment with ResNet-50 model trained with different loss functions and post-training strategies to demonstrate the impact of each component on performance. We see that change of loss function from BCE to LDAM+DRW helps in 30.5% increase in MAP. And adding the cRT post-training strategy further improves the performance by 1.4% in MAP. While the cRT and TTA combined imrpoves by 1.9% in MAP. We then finalize the LDAM+DRW loss function for further model experiments, where ResNet-101 models gives 0.4584 MAP, DenseNet-121 gives 0.3967 MAP, DenseNet-169 gives 0.3981 MAP, EfficientFormerV2-S gives 0.4869 MAP, ConvNeXt-Base gives 0.4855 MAP and ConvNext-Large gives the highest MAP of 0.5220. The cRT helps the ConvNext-Base model to increase it performance by 3.8%, and adding up the TTA furtherly increase it by 7.4%. While the cRT and probability calibration degrades the performance and even the ensemble of ConvNext-Large and EfficientFormer-V2 S model with cRT also gives lower performance, than the standard ConvNext-Large with LDAM+DRW. \r
          </p>\r
          \r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <h2 class="title is-3">Results</h2>\r
\r
    <h3 class="title is-4">Development Set Performance</h3>\r
    <div class="content">\r
      <p>Comparison across architectures, loss functions, and post-training strategies:</p>\r
    </div>\r
\r
    <div class="table-container">\r
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">\r
        <thead>\r
          <tr>\r
            <th>Model</th>\r
            <th>Loss</th>\r
            <th>Post-training</th>\r
            <th>AP</th>\r
            <th>AUC</th>\r
            <th>F1</th>\r
            <th>ECE</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr>\r
            <td>ResNet-50</td>\r
            <td>BCE</td>\r
            <td>—</td>\r
            <td>0.3248</td>\r
            <td>0.8410</td>\r
            <td>0.3222</td>\r
            <td>0.8884</td>\r
          </tr>\r
          <tr>\r
            <td>ResNet-50</td>\r
            <td>Asymmetric</td>\r
            <td>—</td>\r
            <td>0.0667</td>\r
            <td>0.5603</td>\r
            <td>0.0843</td>\r
            <td>0.9526</td>\r
          </tr>\r
          <tr>\r
            <td>ResNet-50</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.4241</td>\r
            <td>0.8435</td>\r
            <td>0.2676</td>\r
            <td>0.5575</td>\r
          </tr>\r
          <tr>\r
            <td>ResNet-50</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT</td>\r
            <td>0.4303</td>\r
            <td>0.8828</td>\r
            <td>0.3233</td>\r
            <td>0.8300</td>\r
          </tr>\r
          <tr>\r
            <td>ResNet-50</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT + TTA</td>\r
            <td>0.4325</td>\r
            <td>0.8864</td>\r
            <td>0.3102</td>\r
            <td>0.8247</td>\r
          </tr>\r
          <tr>\r
            <td>ResNet-101</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.4584</td>\r
            <td>0.8679</td>\r
            <td>0.2564</td>\r
            <td>0.5332</td>\r
          </tr>\r
          <tr>\r
            <td>DenseNet-121</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.3967</td>\r
            <td>0.8334</td>\r
            <td>0.2119</td>\r
            <td>0.5422</td>\r
          </tr>\r
          <tr>\r
            <td>DenseNet-169</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.3981</td>\r
            <td>0.8520</td>\r
            <td>0.1819</td>\r
            <td>0.5316</td>\r
          </tr>\r
          <tr>\r
            <td>EfficientFormerV2-S</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.4869</td>\r
            <td>0.8818</td>\r
            <td>0.3161</td>\r
            <td>0.5215</td>\r
          </tr>\r
          <tr>\r
            <td>EfficientFormerV2-S</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.4869</td>\r
            <td>0.8818</td>\r
            <td>0.3161</td>\r
            <td>0.8250</td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Base</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td>0.4855</td>\r
            <td>0.8931</td>\r
            <td>0.3081</td>\r
            <td>0.5319</td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Base</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT</td>\r
            <td>0.5039</td>\r
            <td>0.8902</td>\r
            <td>0.2548</td>\r
            <td><strong>0.8932</strong></td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Base</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT + TTA</td>\r
            <td><strong>0.5217</strong></td>\r
            <td><strong>0.8961</strong></td>\r
            <td>0.2659</td>\r
            <td>0.8936</td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Base</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT + Prob Calib.</td>\r
            <td>0.4539</td>\r
            <td>0.8948</td>\r
            <td>0.2974</td>\r
            <td>0.8250</td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Large</td>\r
            <td>LDAM+DRW</td>\r
            <td>—</td>\r
            <td><strong>0.5220</strong></td>\r
            <td>0.8832</td>\r
            <td><strong>0.3765</strong></td>\r
            <td>0.5506</td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Large</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT + Prob Calib.</td>\r
            <td>0.5116</td>\r
            <td>0.8939</td>\r
            <td>0.3669</td>\r
            <td>0.5488</td>\r
          </tr>\r
          <tr>\r
            <td>ConvNeXt-Large  + EfficientFormerV2-S</td>\r
            <td>LDAM+DRW</td>\r
            <td>cRT + Ensemble</td>\r
            <td>0.4990</td>\r
            <td>0.8951</td>\r
            <td>0.2556</td>\r
            <td>0.7037</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <h3 class="title is-4" style="margin-top: 2rem;">Official CXR-LT 2026 Test Leaderboard</h3>\r
    <div class="content">\r
      <p>Task 1: In-distribution Multi-label Classification (primary metric: macro-averaged mAP).</p>\r
    </div>\r
\r
    <div class="table-container">\r
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">\r
        <thead>\r
          <tr>\r
            <th>Rank</th>\r
            <th>Team</th>\r
            <th>Affiliation</th>\r
            <th>mAP ↑</th>\r
            <th>AUC ↑</th>\r
            <th>F1 ↑</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr>\r
            <td>1</td>\r
            <td>CVMAIL x MIHL</td>\r
            <td>Vietnam National University, Vietnam</td>\r
            <td><strong>0.5854</strong></td>\r
            <td><strong>0.9259</strong></td>\r
            <td>0.3518</td>\r
          </tr>\r
          <tr>\r
            <td>2</td>\r
            <td>Cool Peace</td>\r
            <td>KAIST Graduate School of AI, South Korea</td>\r
            <td>0.4827</td>\r
            <td>0.9186</td>\r
            <td>0.3162</td>\r
          </tr>\r
          <tr>\r
            <td>3</td>\r
            <td>VIU</td>\r
            <td>Vietnam National University, Vietnam</td>\r
            <td>0.4599</td>\r
            <td>0.8827</td>\r
            <td><strong>0.4504</strong></td>\r
          </tr>\r
          <tr>\r
            <td>4</td>\r
            <td>Bibimbap-Bueno</td>\r
            <td>Case Western Reserve University, USA</td>\r
            <td>0.4297</td>\r
            <td>0.8753</td>\r
            <td>0.2482</td>\r
          </tr>\r
          <tr style="background-color: #fffbeb;">\r
            <td><strong>5</strong></td>\r
            <td><strong>Nikhil Rao Sulake</strong></td>\r
            <td><strong>RGUKT Nuzvid, India</strong></td>\r
            <td><strong>0.3950</strong></td>\r
            <td>0.8591</td>\r
            <td>0.0945</td>\r
          </tr>\r
          <tr>\r
            <td>6</td>\r
            <td>UGIVIA team</td>\r
            <td>Universitat de les Illes Balears, Spain</td>\r
            <td>0.2362</td>\r
            <td>0.7756</td>\r
            <td>0.2353</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
    <p class="is-size-7 has-text-grey" style="margin-top: 0.5rem;"><strong>68</strong> participating teams, <strong>1528</strong> total submissions. <a href="https://cxr-lt.github.io/CXR-LT-2026/#:~:text=Task%201%20Leaderboard%20(In%2Ddistribution%20Multi%2Dlabel%20Classification)" target="_blank">(Official Results Link)</a></p>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <div class="columns is-centered has-text-centered">\r
      <div class="column is-four-fifths">\r
        <h2 class="title is-3">Qualitative Results</h2>\r
        <div class="has-text-centered">\r
          <img src="/assets/cxr-lt/media/cxr-lt-qualitative.png" alt="Class activation maps on CXR images" style="max-width: 100%; border-radius: 8px;">\r
          <p class="is-size-6" style="margin-top: 0.5rem; color: #666;">\r
            Class-activation maps overlaid on test images. The model localizes findings correctly (kyphosis, hernia, azygos lobe) but probability calibration causes instance-level misses.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Interactive GradCAM Explorer -->\r
<section class="section" id="gradcam-explorer">\r
  <div class="container">\r
    <h2 class="title is-3 has-text-centered">Interactive GradCAM Explorer</h2>\r
    <p class="has-text-centered" style="margin-bottom: 1.5rem; color: #666;">\r
      Compare class activation maps across different models and disease classes. Select multiple models and classes to see side-by-side comparisons. The number mentioned on each image is the probability score for that class. Click on any image to view a larger version with detailed information.\r
    </p>\r
\r
    <!-- Controls Container -->\r
    <div class="gradcam-controls">\r
      <!-- Model Selection -->\r
      <div class="control-group">\r
        <div class="control-header">\r
          <span class="control-label">Models</span>\r
          <div class="control-actions">\r
            <button class="btn-action" onclick="GradCAMExplorer.selectAllModels()">All</button>\r
            <button class="btn-action" onclick="GradCAMExplorer.clearAllModels()">Clear</button>\r
          </div>\r
        </div>\r
        <div class="model-pills" id="model-pills">\r
          <!-- Generated by JS -->\r
        </div>\r
      </div>\r
\r
      <!-- Class Selection -->\r
      <div class="control-group">\r
        <div class="control-header">\r
          <span class="control-label">Classes</span>\r
          <div class="control-actions">\r
            <button class="btn-action" onclick="GradCAMExplorer.selectAllClasses()">All</button>\r
            <button class="btn-action" onclick="GradCAMExplorer.clearAllClasses()">Clear</button>\r
          </div>\r
        </div>\r
        <div class="class-search-wrapper">\r
          <input type="text" class="class-search" id="class-search" placeholder="Search classes..." oninput="GradCAMExplorer.filterClasses()">\r
        </div>\r
        <div class="class-checkboxes" id="class-checkboxes">\r
          <!-- Generated by JS -->\r
        </div>\r
      </div>\r
\r
      <!-- Selected Summary -->\r
      <div class="selection-summary" id="selection-summary">\r
        <span id="summary-text">Select models and classes to compare</span>\r
      </div>\r
    </div>\r
\r
    <!-- Results Grid -->\r
    <div class="gradcam-results" id="gradcam-results">\r
      <div class="results-placeholder">\r
        <i>🔍</i>\r
        <p>Select models and classes above to compare GradCAM visualizations</p>\r
      </div>\r
    </div>\r
\r
    <!-- Lightbox Modal -->\r
    <div class="lightbox-overlay" id="lightbox-overlay">\r
      <div class="lightbox-content">\r
        <button class="lightbox-close">&times;</button>\r
        <img id="lightbox-img" src="" alt="GradCAM visualization">\r
        <p class="lightbox-caption" id="lightbox-caption"></p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <div class="columns is-centered has-text-centered">\r
      <div class="column is-four-fifths">\r
        <h2 class="title is-3">Conclusion</h2>\r
        <div class="content has-text-justified">\r
          <p>\r
            Our findings establish that <strong>LDAM-DRW loss combined with modern CNN architectures</strong>, particularly ConvNeXt, forms a strong baseline for long-tailed multi-label CXR classification, achieving 0.5220 mAP on the development set. The consistent advantage of LDAM-DRW across all architectures suggests that margin-based losses with deferred re-weighting should be the default choice for clinical long-tailed tasks.\r
          </p>\r
          <p>\r
            However, good ranking performance alone is not sufficient — the gap between development and test mAP (0.52 vs. 0.395) and very low test F1 (0.0945) highlight the pressing need for better generalization and calibration strategies. Per-class threshold optimization, temperature scaling, and techniques like Sharpness Aware Minimization appear to be the most promising directions for improving instance-level predictions.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section" id="BibTeX">\r
  <div class="container is-max-desktop content">\r
    <h2 class="title">BibTeX</h2>\r
    <pre><code>@article{sulake2026lossdesignarchitectureselection,\r
    title={Loss Design and Architecture Selection for Long-Tailed Multi-Label Chest X-Ray Classification}, \r
    author={Nikhileswara Rao Sulake},\r
    year={2026},\r
    eprint={2603.02294},\r
    archivePrefix={arXiv},\r
    primaryClass={eess.IV},\r
    url={https://arxiv.org/abs/2603.02294}, \r
  }</code></pre>\r
  </div>\r
</section>\r
\r
\r
\r
\r
<footer class="footer">\r
  <div class="container">\r
    <div class="content has-text-centered">\r
      <a class="icon-link" href="https://github.com/Nikhil-Rao20/Long_Tail">\r
        <i class="fab fa-github"></i>\r
      </a>\r
    </div>\r
    <div class="columns is-centered">\r
      <div class="column is-8">\r
        <div class="content">\r
          <p>\r
            This website template is adapted from <a href="https://github.com/nerfies/nerfies.github.io">Nerfies</a>,\r
            licensed under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
\r
`,styles:[],styleSheets:[`/assets/research_paper_static/css/bulma.min.css`,`/assets/research_paper_static/css/bulma-carousel.min.css`,`/assets/research_paper_static/css/bulma-slider.min.css`,`/assets/research_paper_static/css/fontawesome.all.min.css`,`https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css`,`/assets/research_paper_static/css/index.css`,`/assets/research_paper_static/css/gradcam-explorer.css`],scripts:[{code:``,src:`/assets/research_paper_static/js/fontawesome.all.min.js`},{code:``,src:`/assets/research_paper_static/js/bulma-carousel.min.js`},{code:``,src:`/assets/research_paper_static/js/bulma-slider.min.js`},{code:``,src:`/assets/research_paper_static/js/index.js`},{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "ScholarlyArticle",\r
    "headline": "Loss Design and Architecture Selection for Long-Tailed Multi-Label Chest X-Ray Classification",\r
    "description": "Systematic evaluation of loss functions, CNN architectures and post-training strategies for long-tailed multi-label CXR classification on the CXR-LT 2026 benchmark.",\r
    "image": "https://nikhil-rao20.github.io/cxr-lt/media/cxr-lt-qualitative.png",\r
    "datePublished": "2026-03-04",\r
    "author": {\r
      "@type": "Person",\r
      "name": "Nikhileswara Rao Sulake",\r
      "url": "https://nikhil-rao20.github.io",\r
      "sameAs": [\r
        "https://github.com/Nikhil-Rao20",\r
        "https://linkedin.com/in/nikhil-rao20"\r
      ],\r
      "affiliation": {\r
        "@type": "Organization",\r
        "name": "RGUKT Nuzvid"\r
      }\r
    },\r
    "publisher": {\r
      "@type": "Person",\r
      "name": "Nikhileswara Rao Sulake",\r
      "url": "https://nikhil-rao20.github.io"\r
    },\r
    "mainEntityOfPage": {\r
      "@type": "WebPage",\r
      "@id": "https://nikhil-rao20.github.io/cxr-lt/"\r
    },\r
    "keywords": ["chest x-ray", "long-tailed classification", "multi-label learning", "deep learning", "class imbalance", "LDAM-DRW", "ConvNeXt"],\r
    "about": {\r
      "@type": "Thing",\r
      "name": "Medical Image Classification"\r
    },\r
    "isAccessibleForFree": true,\r
    "inLanguage": "en"\r
  }`,src:``},{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "BreadcrumbList",\r
    "itemListElement": [\r
      {\r
        "@type": "ListItem",\r
        "position": 1,\r
        "name": "Home",\r
        "item": "https://nikhil-rao20.github.io/"\r
      },\r
      {\r
        "@type": "ListItem",\r
        "position": 2,\r
        "name": "Research",\r
        "item": "https://nikhil-rao20.github.io/research.html"\r
      },\r
      {\r
        "@type": "ListItem",\r
        "position": 3,\r
        "name": "CXR-LT",\r
        "item": "https://nikhil-rao20.github.io/cxr-lt/"\r
      }\r
    ]\r
  }`,src:``},{code:``,src:`/assets/research_paper_static/js/gradcam-explorer.js`},{code:`document.addEventListener('DOMContentLoaded', function() {\r
  GradCAMExplorer.init({\r
    models: [\r
      { id: 'ResNet-50', name: 'ResNet-50' },\r
      { id: 'Resnet-101', name: 'ResNet-101' },\r
      { id: 'DenseNet-121', name: 'DenseNet-121' },\r
      { id: 'DenseNet-169', name: 'DenseNet-169' },\r
      { id: 'EfficientNet-V2-S', name: 'EfficientNetV2-S' },\r
      { id: 'ConvNext-Base', name: 'ConvNeXt-Base' },\r
      { id: 'ConvNext-Large', name: 'ConvNeXt-Large' }\r
    ],\r
    classes: [\r
      { id: '00_Normal', name: 'Normal' },\r
      { id: '01_aortic_elongation', name: 'Aortic Elongation' },\r
      { id: '02_cardiomegaly', name: 'Cardiomegaly' },\r
      { id: '03_pleural_effusion', name: 'Pleural Effusion' },\r
      { id: '04_Nodule', name: 'Nodule' },\r
      { id: '05_atelectasis', name: 'Atelectasis' },\r
      { id: '06_pleural_thickening', name: 'Pleural Thickening' },\r
      { id: '07_aortic_atheromatosis', name: 'Aortic Atheromatosis' },\r
      { id: '08_Support_Devices', name: 'Support Devices' },\r
      { id: '09_alveolar_pattern', name: 'Alveolar Pattern' },\r
      { id: '10_fracture', name: 'Fracture' },\r
      { id: '11_Hernia', name: 'Hernia' },\r
      { id: '12_Emphysema', name: 'Emphysema' },\r
      { id: '13_azygos_lobe', name: 'Azygos Lobe' },\r
      { id: '15_Kyphosis', name: 'Kyphosis' },\r
      { id: '16_Mass', name: 'Mass' },\r
      { id: '17_Pneumothorax', name: 'Pneumothorax' },\r
      { id: '18_Subcutaneous_Emphysema', name: 'Subcutaneous Emphysema' },\r
      { id: '19_pneumoperitoneo', name: 'Pneumoperitoneum' },\r
      { id: '20_vascular_hilar_enlargement', name: 'Vascular Hilar Enlargement' },\r
      { id: '21_vertebral_degenerative_changes', name: 'Vertebral Degenerative Changes' },\r
      { id: '22_hyperinflated_lung', name: 'Hyperinflated Lung' },\r
      { id: '23_interstitial_pattern', name: 'Interstitial Pattern' },\r
      { id: '24_central_venous_catheter', name: 'Central Venous Catheter' },\r
      { id: '25_hypoexpansion', name: 'Hypoexpansion' },\r
      { id: '26_bronchiectasis', name: 'Bronchiectasis' },\r
      { id: '27_hemidiaphragm_elevation', name: 'Hemidiaphragm Elevation' },\r
      { id: '28_sternotomy', name: 'Sternotomy' },\r
      { id: '29_calcified_densities', name: 'Calcified Densities' }\r
    ],\r
    basePath: 'https://raw.githubusercontent.com/Nikhil-Rao20/Long_Tail/refs/heads/main/gradcam_visualization_per_model/'\r
  });\r
});`,src:``}]},{route:`taru-net/index.html`,title:`TARU-Net: Topology-Aware Lung CT Segmentation | Nikhileswara Rao Sulake`,description:`TARU-Net is a unified framework combining deep learning segmentation with topology-guided 3D reconstruction for high-fidelity lung CT analysis. Achieves 0.89 Dice score on lung cancer and COVID-19 pneumonia datasets.`,portfolioChrome:!1,html:`\r
\r
<nav class="navbar" role="navigation" aria-label="main navigation">\r
  <div class="navbar-brand">\r
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">\r
      <span aria-hidden="true"></span>\r
      <span aria-hidden="true"></span>\r
      <span aria-hidden="true"></span>\r
    </a>\r
  </div>\r
  <div class="navbar-menu">\r
    <div class="navbar-start" style="flex-grow: 1; justify-content: center;">\r
      <a class="navbar-item" href="/">\r
        <span class="icon">\r
          <i class="fas fa-home"></i>\r
        </span>\r
      </a>\r
\r
      <div class="navbar-item has-dropdown is-hoverable">\r
        <a class="navbar-link">\r
          More Research\r
        </a>\r
        <div class="navbar-dropdown">\r
          <a class="navbar-item" href="/taru-net/">\r
            TARU-Net\r
          </a>\r
          <a class="navbar-item" href="/cips-net/">\r
            CIPS-Net\r
          </a>\r
          <a class="navbar-item" href="/ecg-free-echo/">\r
            ECG-Free Echo\r
          </a>\r
          <a class="navbar-item" href="/cxr-lt/">\r
            CXR-LT Challenge 2026\r
          </a>\r
          <a class="navbar-item" href="/lung-digital-twin/">\r
            Lung Digital Twin\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</nav>\r
\r
\r
\r
<section class="hero">\r
  <div class="hero-body">\r
    <div class="container is-max-desktop">\r
      <div class="columns is-centered">\r
        <div class="column has-text-centered">\r
          <h1 class="title is-1 publication-title">TARU-Net: Topology-Aware Deep Learning for High-Fidelity Lung CT Segmentation and Volume Visualization</h1>\r
          <div class="is-size-5 publication-authors">\r
            <span class="author-block">\r
              <a href="https://www.linkedin.com/in/partha-acharya-b7664b11/">Partha Acharya</a><sup>1</sup>,</span>\r
            <span class="author-block">\r
              <a href="https://nikhil-rao20.github.io">Nikhileswara Rao Sulake</a><sup>2</sup>,</span>\r
            <span class="author-block">\r
              <a href="https://www.linkedin.com/in/aishik-sen-857819220/">Aishik Sen</a><sup>3</sup>,</span>\r
            <span class="author-block">\r
              <a href="https://www.narayanahealth.org/c/howrah/paediatric-cardiology-cardiology-paediatrics/dr-amitabha-chattopadhyay">Amitabha Chattopadhyay</a><sup>4</sup>,</span>\r
            <span class="author-block">\r
              <a href="https://sites.google.com/site/smandalbiomed/home">Subhamoy Mandal</a><sup>1</sup>,</span>\r
            <span class="author-block">\r
              <a href="https://sites.google.com/site/sumanchakrabortymicrofluidics/home?authuser=0">Suman Chakraborty</a><sup>1</sup>\r
            </span>\r
          </div>\r
\r
          <div class="is-size-5 publication-authors">\r
            <span class="author-block"><sup>1</sup>IIT Kharagpur,</span>\r
            <span class="author-block"><sup>2</sup>RGUKT Nuzvid,</span>\r
            <span class="author-block"><sup>3</sup>VIT Chennai,</span>\r
            <span class="author-block"><sup>4</sup>Narayana Hospital</span>\r
          </div>\r
\r
          <div class="column has-text-centered">\r
            <div class="publication-links">\r
              <!-- PDF Link -->\r
              <span class="link-block">\r
                <a href="#" class="external-link button is-normal is-rounded is-dark">\r
                  <span class="icon">\r
                    <i class="fas fa-file-pdf"></i>\r
                  </span>\r
                  <span>Paper</span>\r
                </a>\r
              </span>\r
              <!-- arXiv Link -->\r
              <!-- <span class="link-block">\r
                <a href="#" class="external-link button is-normal is-rounded is-dark">\r
                  <span class="icon">\r
                    <i class="ai ai-arxiv"></i>\r
                  </span>\r
                  <span>arXiv</span>\r
                </a>\r
              </span> -->\r
              <!-- Code Link -->\r
              <span class="link-block">\r
                <a href="https://github.com/Nikhil-Rao20/TARU-Net" class="external-link button is-normal is-rounded is-dark">\r
                  <span class="icon">\r
                    <i class="fab fa-github"></i>\r
                  </span>\r
                  <span>Code</span>\r
                </a>\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Teaser Image -->\r
<section class="hero teaser">\r
  <div class="container is-max-desktop">\r
    <div class="hero-body">\r
      <img src="/assets/taru-net/media/arch_project.png" alt="TARU-Net 3D Reconstruction Results" style="width: 100%; border-radius: 8px;">\r
      <h2 class="subtitle has-text-centered" style="margin-top: 1rem;">\r
        <span class="dnerf">TARU-Net</span> generates high-fidelity 3D lung models with color-coded severity mapping from CT scans.\r
      </h2>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <!-- Abstract -->\r
    <div class="columns is-centered has-text-centered">\r
      <div class="column is-four-fifths">\r
        <h2 class="title is-3">Abstract</h2>\r
        <div class="content has-text-justified">\r
          <p>\r
            Accurate segmentation and volume visualization of the lung from computed tomography (CT) images holds the key to precision diagnosis, personalized treatment, and predictive healthcare. Despite the surge of AI-driven medical imaging, existing segmentation pipelines falter in handling inevitable pathological variations, inconsistent CT quality, and the scarcity of well-annotated data, often producing voxelated, unrealistic lung geometries that limit clinical trust.\r
          </p>\r
          <p>\r
            We present <strong>TARU-Net</strong>, a unified framework that fuses deep learning-based segmentation with surface topology-guided 3D reconstruction. The architecture captures rich multi-scale spatial features, ensuring resilient performance even in complex pathological landscapes such as fibrosis, tumors, or pneumonia. The subsequent topology-driven reconstruction, implemented via the Marching Cubes algorithm with RBF interpolation and Ball Pivot Algorithm, smoothens jagged voxel artifacts and restores anatomical realism, producing seamless, high-fidelity 3D lung models directly from patient CT data.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <div class="columns is-centered">\r
      <div class="column is-full-width">\r
        <h2 class="title is-3">Method Overview</h2>\r
        <div class="content has-text-justified">\r
          <p>\r
            TARU-Net integrates three key stages: (1) U-Net-based 2D CT slice segmentation for lung and lesion extraction, (2) 3D surface reconstruction using Marching Cubes followed by RBF interpolation for smooth, gap-free surfaces, and (3) Ball Pivot Algorithm for watertight mesh generation with color-coded severity mapping based on Hounsfield Units.\r
          </p>\r
        </div>\r
\r
        <!-- COVID Input Data -->\r
        <h2 class="title is-4">Input Data: COVID-19 Pneumonia</h2>\r
        <div class="has-text-centered">\r
          <img src="/assets/taru-net/media/covid-input-data.png" alt="COVID-19 CT Input Data" style="max-width: 70%; border-radius: 8px;">\r
          <p class="is-size-6" style="margin-top: 0.5rem; color: #666;">\r
            Raw CT scan (left), extracted lung region (middle), and pneumonia-affected regions (right).\r
          </p>\r
        </div>\r
\r
        <!-- Cancer Input Data -->\r
        <h2 class="title is-4" style="margin-top: 2rem;">Input Data: Lung Cancer</h2>\r
        <div class="has-text-centered">\r
          <img src="/assets/taru-net/media/cancer-input-data.png" alt="Lung Cancer CT Input Data" style="max-width: 70%; border-radius: 8px;">\r
          <p class="is-size-6" style="margin-top: 0.5rem; color: #666;">\r
            Raw CT scan (left), extracted lung region (middle), and cancer-affected regions (right).\r
          </p>\r
        </div>\r
\r
        <!-- 3D Axis Views -->\r
        <h2 class="title is-4" style="margin-top: 2rem;">3D CT Scan Orientation Views</h2>\r
        <div class="has-text-centered">\r
          <img src="/assets/taru-net/media/three-axis-image.png" alt="Axial Coronal Sagittal Views" style="max-width: 90%; border-radius: 8px;">\r
          <p class="is-size-6" style="margin-top: 0.5rem; color: #666;">\r
            Axial, Coronal, and Sagittal slices with 3D volume overlay showing directional axes.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <h2 class="title is-3">Results</h2>\r
\r
    <h3 class="title is-4">Segmentation Performance</h3>\r
    <div class="content">\r
      <p>TARU-Net achieves strong performance across both lung cancer and COVID-19 pneumonia datasets:</p>\r
    </div>\r
\r
    <div class="table-container">\r
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">\r
        <thead>\r
          <tr>\r
            <th>Task</th>\r
            <th>Training Loss</th>\r
            <th>Training Dice</th>\r
            <th>Validation Loss</th>\r
            <th>Validation Dice</th>\r
            <th>Test Loss</th>\r
            <th>Test Dice</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr>\r
            <td><strong>Lung Cancer</strong></td>\r
            <td>0.0012</td>\r
            <td>0.5977</td>\r
            <td>0.0009</td>\r
            <td>0.8769</td>\r
            <td>0.0009</td>\r
            <td><strong>0.8887</strong></td>\r
          </tr>\r
          <tr>\r
            <td><strong>Lung Pneumonia</strong></td>\r
            <td>0.5309</td>\r
            <td>0.6294</td>\r
            <td>0.4907</td>\r
            <td>0.6252</td>\r
            <td>0.4966</td>\r
            <td><strong>0.6168</strong></td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <h3 class="title is-4" style="margin-top: 2rem;">Comparison with State-of-the-Art</h3>\r
    <div class="content">\r
      <p>Performance comparison for lung cancer segmentation:</p>\r
    </div>\r
\r
    <div class="table-container">\r
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">\r
        <thead>\r
          <tr>\r
            <th>Model</th>\r
            <th>Dice Score</th>\r
            <th>Sensitivity</th>\r
            <th>Specificity</th>\r
            <th>Inference Time (s)</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr>\r
            <td>UNet++</td>\r
            <td>0.9083</td>\r
            <td>0.9163</td>\r
            <td>0.999995</td>\r
            <td>6.36</td>\r
          </tr>\r
          <tr>\r
            <td>FPN</td>\r
            <td>0.8837</td>\r
            <td>0.9175</td>\r
            <td>0.999993</td>\r
            <td>3.43</td>\r
          </tr>\r
          <tr>\r
            <td>PSPNet</td>\r
            <td>0.9001</td>\r
            <td>0.9058</td>\r
            <td>0.999994</td>\r
            <td>2.03</td>\r
          </tr>\r
          <tr>\r
            <td>DeepLabV3</td>\r
            <td>0.9008</td>\r
            <td>0.9235</td>\r
            <td>0.999988</td>\r
            <td>3.59</td>\r
          </tr>\r
          <tr>\r
            <td>SegFormer</td>\r
            <td>0.8867</td>\r
            <td>0.9262</td>\r
            <td>0.999974</td>\r
            <td>3.71</td>\r
          </tr>\r
          <tr style="background-color: #f5f5f5;">\r
            <td><strong>TARU-Net (Ours)</strong></td>\r
            <td><strong>0.8887</strong></td>\r
            <td><strong>0.9238</strong></td>\r
            <td><strong>0.999988</strong></td>\r
            <td><strong>3.33</strong></td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="content" style="margin-top: 1rem;">\r
      <p>\r
        While some models achieve marginally higher Dice scores, TARU-Net maintains an optimal balance between accuracy and efficiency with ~3.3s inference time per scan, critical for time-sensitive clinical applications.\r
      </p>\r
    </div>\r
\r
    <!-- 3D Predictions -->\r
    <h3 class="title is-4" style="margin-top: 2rem;">3D Reconstruction Results</h3>\r
    \r
    <div class="columns is-centered">\r
      <div class="column">\r
        <h4 class="title is-5 has-text-centered">COVID-19 Pneumonia</h4>\r
        <div class="has-text-centered">\r
          <img src="/assets/taru-net/media/covid-prediction.png" alt="COVID-19 3D Prediction" style="max-width: 100%; border-radius: 8px;">\r
          <p class="is-size-6" style="margin-top: 0.5rem; color: #666;">\r
            Color-coded severity: Red (severe), Yellow (moderate), Green (healthy tissue).\r
          </p>\r
        </div>\r
      </div>\r
      <div class="column">\r
        <h4 class="title is-5 has-text-centered">Lung Cancer</h4>\r
        <div class="has-text-centered">\r
          <img src="/assets/taru-net/media/cancer-prediction.png" alt="Lung Cancer 3D Prediction" style="max-width: 100%; border-radius: 8px;">\r
          <p class="is-size-6" style="margin-top: 0.5rem; color: #666;">\r
            3D reconstructed predictions from TARU-Net for lung cancer cases.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <div class="columns is-centered has-text-centered">\r
      <div class="column is-four-fifths">\r
        <h2 class="title is-3">Conclusion</h2>\r
        <div class="content has-text-justified">\r
          <p>\r
            We present a unified computational pipeline that seamlessly integrates 2D deep learning-based segmentation with 3D surface topology-driven reconstruction for volume visualization, generating anatomically faithful, color-coded models of the human lung. By leveraging U-Net's feature-extraction capabilities coupled with topology-based surface reconstruction, TARU-Net achieves high accuracy in delineating lung parenchyma, airways, and pathological regions.\r
          </p>\r
          <p>\r
            The fusion of deep learning and topology-aware reconstruction transforms discrete CT voxel data into realistic 3D representations with smooth, anatomically consistent surfaces. This hybrid approach surpasses traditional methods in robustness, adaptability to diseased tissues (fibrotic or tumorous lungs), and computational efficiency—offering transformative potential for diagnosis, surgical planning, computational medicine, and medical education.\r
          </p>\r
          <p>\r
            Beyond immediate utility, this work paves the way for explainable and real-time AI in thoracic imaging, bridging algorithmic precision with clinical interpretability. Future directions include four-dimensional (time-resolved) reconstruction to capture lung deformation during respiration, supported by self-supervised learning, domain adaptation, and federated frameworks for privacy-preserving model training.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section">\r
  <div class="container is-max-desktop">\r
    <h2 class="title is-3 has-text-centered">Authors</h2>\r
    <div class="columns is-multiline is-centered is-mobile">\r
      <!-- Author 1: Partha Acharya -->\r
      <div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">\r
        <figure class="image is-128x128" style="margin: 0 auto;">\r
          <img class="is-rounded" src="/assets/taru-net/media/authors/partha_acharya.png" alt="Partha Acharya" style="object-fit: cover; width: 128px; height: 128px; border: 3px solid #dbdbdb;">\r
        </figure>\r
        <p class="is-size-6 has-text-weight-semibold" style="margin-top: 0.5rem;">Partha Acharya</p>\r
        <p class="is-size-7 has-text-grey">IIT Kharagpur</p>\r
      </div>\r
      <!-- Author 2: Nikhileswara Rao Sulake -->\r
      <div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">\r
        <figure class="image is-128x128" style="margin: 0 auto;">\r
          <a href="https://nikhil-rao20.github.io">\r
            <img class="is-rounded" src="/assets/taru-net/media/authors/nikhil_rao.png" alt="Nikhileswara Rao Sulake" style="object-fit: cover; width: 128px; height: 128px; border: 3px solid #dbdbdb;">\r
          </a>\r
        </figure>\r
        <p class="is-size-6 has-text-weight-semibold" style="margin-top: 0.5rem;"><a href="https://nikhil-rao20.github.io" style="color: inherit;">Nikhileswara Rao Sulake</a></p>\r
        <p class="is-size-7 has-text-grey">RGUKT Nuzvid</p>\r
      </div>\r
      <!-- Author 3: Aishik Sen -->\r
      <div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">\r
        <figure class="image is-128x128" style="margin: 0 auto;">\r
          <img class="is-rounded" src="/assets/taru-net/media/authors/a_sen.jpg" alt="Aishik Sen" style="object-fit: cover; width: 128px; height: 128px; border: 3px solid #dbdbdb;">\r
        </figure>\r
        <p class="is-size-6 has-text-weight-semibold" style="margin-top: 0.5rem;">Aishik Sen</p>\r
        <p class="is-size-7 has-text-grey">VIT Chennai</p>\r
      </div>\r
      <!-- Author 4: Amitabha Chattopadhyay -->\r
      <div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">\r
        <figure class="image is-128x128" style="margin: 0 auto;">\r
          <img class="is-rounded" src="/assets/taru-net/media/authors/amitabha_c.png" alt="Amitabha Chattopadhyay" style="object-fit: cover; width: 128px; height: 128px; border: 3px solid #dbdbdb;">\r
        </figure>\r
        <p class="is-size-6 has-text-weight-semibold" style="margin-top: 0.5rem;">Amitabha Chattopadhyay</p>\r
        <p class="is-size-7 has-text-grey">Narayana Hospital</p>\r
      </div>\r
      <!-- Author 5: Subhamoy Mandal -->\r
      <div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">\r
        <figure class="image is-128x128" style="margin: 0 auto;">\r
          <img class="is-rounded" src="/assets/taru-net/media/authors/subhamoy_mandal.jpeg" alt="Subhamoy Mandal" style="object-fit: cover; width: 128px; height: 128px; border: 3px solid #dbdbdb;">\r
        </figure>\r
        <p class="is-size-6 has-text-weight-semibold" style="margin-top: 0.5rem;">Subhamoy Mandal</p>\r
        <p class="is-size-7 has-text-grey">IIT Kharagpur</p>\r
      </div>\r
      <!-- Author 6: Suman Chakraborty -->\r
      <div class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered">\r
        <figure class="image is-128x128" style="margin: 0 auto;">\r
          <img class="is-rounded" src="/assets/taru-net/media/authors/suman_c.jpg" alt="Suman Chakraborty" style="object-fit: cover; width: 128px; height: 128px; border: 3px solid #dbdbdb;">\r
        </figure>\r
        <p class="is-size-6 has-text-weight-semibold" style="margin-top: 0.5rem;">Suman Chakraborty</p>\r
        <p class="is-size-7 has-text-grey">IIT Kharagpur</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="section" id="BibTeX">\r
  <div class="container is-max-desktop content">\r
    <h2 class="title">BibTeX</h2>\r
    <pre><code>@article{acharya2026tarunet,\r
  author    = {Acharya, Partha and Sulake, Nikhileswara Rao and Sen, Aishik and Chattopadhyay, Amitabha and Mandal, Subhamoy and Chakraborty, Suman},\r
  title     = {TARU-Net: Topology-Aware Deep Learning for High-Fidelity Lung CT Segmentation and Volume Visualization},\r
  journal   = {Under Review},\r
  year      = {2026},\r
}</code></pre>\r
  </div>\r
</section>\r
\r
\r
<footer class="footer">\r
  <div class="container">\r
    <div class="content has-text-centered">\r
      <a class="icon-link" href="https://github.com/Nikhil-Rao20/TARU-Net">\r
        <i class="fab fa-github"></i>\r
      </a>\r
    </div>\r
    <div class="columns is-centered">\r
      <div class="column is-8">\r
        <div class="content">\r
          <p>\r
            This website template is adapted from <a href="https://github.com/nerfies/nerfies.github.io">Nerfies</a>,\r
            licensed under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
\r
`,styles:[],styleSheets:[`/assets/research_paper_static/css/bulma.min.css`,`/assets/research_paper_static/css/bulma-carousel.min.css`,`/assets/research_paper_static/css/bulma-slider.min.css`,`/assets/research_paper_static/css/fontawesome.all.min.css`,`https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css`,`/assets/research_paper_static/css/index.css`],scripts:[{code:``,src:`/assets/research_paper_static/js/fontawesome.all.min.js`},{code:``,src:`/assets/research_paper_static/js/bulma-carousel.min.js`},{code:``,src:`/assets/research_paper_static/js/bulma-slider.min.js`},{code:``,src:`/assets/research_paper_static/js/index.js`},{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "ScholarlyArticle",\r
    "headline": "TARU-Net: Topology-Aware Deep Learning for High-Fidelity Lung CT Segmentation and Volume Visualization",\r
    "description": "A unified framework combining deep learning segmentation with topology-guided 3D reconstruction for high-fidelity lung CT analysis.",\r
    "image": "https://nikhil-rao20.github.io/taru-net/media/covid-prediction.png",\r
    "datePublished": "2026-03-01",\r
    "author": [\r
      {\r
        "@type": "Person",\r
        "name": "Partha Acharya",\r
        "affiliation": {\r
          "@type": "Organization",\r
          "name": "SMST, IIT Kharagpur"\r
        }\r
      },\r
      {\r
        "@type": "Person",\r
        "name": "Nikhileswara Rao Sulake",\r
        "url": "https://nikhil-rao20.github.io",\r
        "sameAs": [\r
          "https://github.com/Nikhil-Rao20",\r
          "https://linkedin.com/in/nikhil-rao20"\r
        ],\r
        "affiliation": {\r
          "@type": "Organization",\r
          "name": "RGUKT Nuzvid"\r
        }\r
      },\r
      {\r
        "@type": "Person",\r
        "name": "Aishik Sen",\r
        "affiliation": {\r
          "@type": "Organization",\r
          "name": "VIT Chennai"\r
        }\r
      },\r
      {\r
        "@type": "Person",\r
        "name": "Amitabha Chattopadhyay",\r
        "affiliation": {\r
          "@type": "Organization",\r
          "name": "Narayana Hospital"\r
        }\r
      },\r
      {\r
        "@type": "Person",\r
        "name": "Subhamoy Mandal",\r
        "affiliation": {\r
          "@type": "Organization",\r
          "name": "SMST, IIT Kharagpur"\r
        }\r
      },\r
      {\r
        "@type": "Person",\r
        "name": "Suman Chakraborty",\r
        "affiliation": {\r
          "@type": "Organization",\r
          "name": "Dept. of Mechanical Engineering, IIT Kharagpur"\r
        }\r
      }\r
    ],\r
    "publisher": {\r
      "@type": "Person",\r
      "name": "Nikhileswara Rao Sulake",\r
      "url": "https://nikhil-rao20.github.io"\r
    },\r
    "mainEntityOfPage": {\r
      "@type": "WebPage",\r
      "@id": "https://nikhil-rao20.github.io/taru-net/"\r
    },\r
    "keywords": ["lung segmentation", "CT imaging", "deep learning", "3D reconstruction", "COVID-19", "lung cancer", "medical imaging", "U-Net"],\r
    "about": {\r
      "@type": "Thing",\r
      "name": "Medical Image Segmentation"\r
    },\r
    "isAccessibleForFree": true,\r
    "inLanguage": "en"\r
  }`,src:``},{code:`{\r
    "@context": "https://schema.org",\r
    "@type": "BreadcrumbList",\r
    "itemListElement": [\r
      {\r
        "@type": "ListItem",\r
        "position": 1,\r
        "name": "Home",\r
        "item": "https://nikhil-rao20.github.io/"\r
      },\r
      {\r
        "@type": "ListItem",\r
        "position": 2,\r
        "name": "Research",\r
        "item": "https://nikhil-rao20.github.io/research.html"\r
      },\r
      {\r
        "@type": "ListItem",\r
        "position": 3,\r
        "name": "TARU-Net",\r
        "item": "https://nikhil-rao20.github.io/taru-net/"\r
      }\r
    ]\r
  }`,src:``}]},{route:`project_articles_v2/ai-calc.html`,title:`The AI Calculator | Nikhileswara Rao Sulake`,description:`The AI Calculator is a practical AI utility project by Nikhileswara Rao Sulake for intelligent formula assistance and lightweight computation support.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">The AI Calculator: Fusing Classic Design with Conversational Intelligence</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Web Application &nbsp;·&nbsp; Side Project</p>\r
    <div class="hero-links">\r
      <a class="hero-btn primary" href="#" target="_blank"><i class="fas fa-calculator"></i> Launch App</a>\r
      <a class="hero-btn" href="#" target="_blank"><i class="fab fa-github"></i> Code</a>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">AI-Powered</span>\r
      <span class="tag">Natural Language Processing</span>\r
      <span class="tag">Web Application</span>\r
      <span class="tag">Google Gemini API</span>\r
      <span class="tag">UI Design</span>\r
      <span class="tag">Conversational AI</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>The AI Calculator is a browser-based application that combines the familiar layout of a classic calculator with a conversational AI engine powered by the Google Gemini API. Users can switch between standard numeric input and a natural-language query mode, enabling complex, context-aware calculations that go beyond the capabilities of any fixed-function button layout. Built as a pure HTML/CSS/JavaScript application, it requires no installation and runs entirely in the browser, with backend AI calls handled via the Gemini API. The design was deliberately inspired by the timeless aesthetic of the original iPod click wheel — functional clarity married to visual restraint.</p>\r
      </div>\r
      <div style="text-align:center; margin-top:22px;">\r
        <img class="article-img" src="/assets/img/projects/ai-cal.png" alt="AI Calculator Interface" style="max-width:640px; display:inline-block;">\r
        <div class="img-caption">Fig. 1 — The AI Calculator interface, showing the dual-mode design: standard calculator (left) and AI conversational input (right).</div>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <p>The calculator is one of the most enduring software interfaces — largely unchanged in concept for decades. Its button-based metaphor is immediately legible and cognitively lightweight, but it is also fundamentally limited: it requires the user to translate their intent into a sequence of button presses. Complex calculations involving unit conversions, statistical queries, or multi-step reasoning demand either multiple separate steps or an entirely different tool.</p>\r
      <p>Large language models, and Gemini in particular, have demonstrated strong mathematical reasoning capability when prompted effectively. The AI Calculator explores what happens when this conversational intelligence is embedded directly into the calculator interface, rather than as a separate "AI assistant" application. The result is a tool that meets users where they are — at the calculator — and extends its capabilities without replacing the familiar interaction model.</p>\r
    </div>\r
\r
    <div class="article-section" id="architecture">\r
      <h2>System Architecture</h2>\r
\r
      <h3>Frontend Stack</h3>\r
      <p>The entire application is built in vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, no build step. This deliberate choice ensures frictionless deployment (any static hosting service works), and keeps the codebase auditable and maintainable by anyone familiar with the web platform. The CSS implements a responsive grid layout that correctly spans button controls across all screen sizes, including touch-first mobile use.</p>\r
\r
      <h3>Dual Interaction Modes</h3>\r
      <p>The interface supports two modes, toggled by a clearly labeled control:</p>\r
      <ul>\r
        <li><strong>Standard Mode:</strong> Traditional button-driven calculator. Arithmetic, percentage, memory operations. Input is numeric; output is immediate. Keyboard support is included.</li>\r
        <li><strong>AI Mode:</strong> A text field replaces the button input. The user types a natural-language query — for example, "What is 15% tip on a $47 dinner?" or "Convert 72°F to Celsius and also tell me the formula" — and the Gemini API processes it and returns a structured answer displayed in the result panel.</li>\r
      </ul>\r
\r
      <div class="highlight-box">\r
        <h4><i class="fas fa-comment-alt"></i> Example AI Mode Queries</h4>\r
        <ul style="margin-bottom:0;">\r
          <li>"What is the compound interest on ₹50,000 at 8% for 3 years?"</li>\r
          <li>"How many seconds in a year?"</li>\r
          <li>"If I drive at 65 mph for 2.5 hours, how far do I travel in km?"</li>\r
          <li>"What is the square root of 2 to 10 decimal places?"</li>\r
        </ul>\r
      </div>\r
\r
      <h3>Gemini API Integration</h3>\r
      <p>AI mode queries are sent to the Gemini API via a lightweight JavaScript fetch call. The prompt engineering layer wraps the user's raw query with a structured system prompt that instructs Gemini to respond in a calculator-appropriate format: a concise numerical result, followed by a brief step-by-step explanation if the query involves multi-step reasoning, followed by the formula or definition when relevant. This structured output instruction prevents Gemini from returning verbose conversational responses incompatible with a calculator UI context.</p>\r
      <p>API responses are streamed where the browser and API configuration support it, providing immediate partial results that make the AI mode feel responsive rather than locked during the network roundtrip.</p>\r
    </div>\r
\r
    <div class="article-section" id="design">\r
      <h2>Design Philosophy</h2>\r
      <p>The visual language is derived from the iPod click wheel aesthetic: a circular primary input surrounded by contextual action buttons, using a restricted palette of near-blacks, whites, and a single accent color for active states. Shadows and depth are used sparingly, creating visual hierarchy without decoration. Every interactive element has a minimum tap target of 44×44px for reliable touch use.</p>\r
      <p>Copy displayed in the result panel uses a monospace font distinct from the UI font, reinforcing the visual separation between the calculator's "output channel" and the interface chrome. In AI Mode, the result panel expands to accommodate multi-line explanations, with smooth height animation to avoid layout shift.</p>\r
\r
      <div class="highlight-box">\r
        <h4>Accessibility</h4>\r
        <p>All buttons are ARIA-labeled, keyboard navigation is fully supported in Standard Mode (0–9, operators, Enter/=), and focus states are visually explicit. Color contrast ratios meet WCAG 2.1 AA standards throughout the interface.</p>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion &amp; Future Work</h2>\r
      <p>The AI Calculator demonstrates that the conversational AI paradigm can be integrated into a traditional utility application without displacing its core interaction model. By offering both modes in a single interface, it lowers the barrier to AI-assisted computation for users who are comfortable with calculators but unfamiliar with open-ended chatbot interfaces.</p>\r
      <p>Future directions include: persistent calculation history with AI-powered summary ("what was my total expenditure across these three calculations?"), support for Gemini's multimodal input to allow photographing handwritten equations, and an offline mode using a local WASM-based math engine for the standard mode to eliminate all server dependencies.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <div>\r
        <a class="resource-btn filled" href="#" target="_blank"><i class="fas fa-calculator"></i> Launch Calculator</a>\r
        <a class="resource-btn" href="#" target="_blank"><i class="fab fa-github"></i> Source Code</a>\r
        <a class="resource-btn" href="#" target="_blank"><i class="fas fa-file-alt"></i> Documentation</a>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong> —\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; border-bottom:1px dashed transparent; transition:border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color:#1585cf; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:28px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#ffffff; text-decoration:none; }\r
    .hero-btn.primary { background:#20364c; color:#ffffff; }\r
    .hero-btn.primary:hover { background:#1585cf; border-color:#1585cf; }\r
    .article-body { max-width:860px; margin:0 auto; padding:48px 20px 72px; }\r
    .article-body h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .article-body h3 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.55rem; font-weight:600; color:#3d5166; margin-top:30px; margin-bottom:10px !important; }\r
    .article-body h3::after { display:none !important; content:none !important; }\r
    .article-body h3 span { background:transparent; padding-right:0; }\r
    .article-body h4 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.35rem; font-weight:600; color:slategray; margin-top:22px; margin-bottom:8px !important; text-transform:uppercase; letter-spacing:0.04em; }\r
    .article-section { margin-bottom:52px; }\r
    .abstract-box { background:#f4f7fb; border-left:4px solid #20364c; padding:22px 26px; border-radius:0 8px 8px 0; }\r
    .abstract-box p { margin-bottom:0; font-size:1.45rem; color:#2c3e50; line-height:1.8; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:36px; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .article-img { width:100%; border-radius:8px; margin:20px 0 6px; box-shadow:0 2px 12px rgba(0,0,0,0.09); }\r
    .img-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:20px; }\r
    .highlight-box { background:#f4f7fb; border-left:4px solid #1585cf; padding:18px 22px; border-radius:0 8px 8px 0; margin:22px 0; }\r
    .highlight-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .resource-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 22px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; margin-right:8px; margin-top:10px; }\r
    .resource-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .resource-btn.filled { background:#20364c; color:#fff; }\r
    .resource-btn.filled:hover { background:#1585cf; border-color:#1585cf; }\r
    .section-sep { text-align:center; margin:48px 0 36px; color:#c8d3de; letter-spacing:0.5em; font-size:1.1rem; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .article-body h2{font-size:1.65rem;} .article-body h3{font-size:1.4rem;} .hero-btn{font-size:1.2rem;padding:7px 15px;} .article-body{padding:32px 15px 60px;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/cardiolens.html`,title:`CardioLens: Automated Cardiac Analysis | Nikhileswara Rao Sulake`,description:`CardioLens is a cardiovascular imaging project by Nikhileswara Rao Sulake for left ventricle segmentation and ejection fraction estimation from echocardiography.`,portfolioChrome:!1,html:`\r
\r
  <!-- Portfolio Navbar -->\r
  \r
\r
  <!-- ═══════════════════════════════════════════\r
       HERO\r
  ═════════════════════════════════════════════ -->\r
  <section class="article-hero">\r
\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
\r
    <h1 class="hero-title">CardioLens — LVEF Analysis Using Intel Optimized Models</h1>\r
\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a><sup>1</sup>,\r
      Sai Manikanta Eswar<sup>1</sup>,\r
      Aravind Pyli<sup>2</sup>,\r
      Sivalal Kethavath<sup>2</sup>\r
    </p>\r
\r
    <p class="hero-affiliations">\r
      <sup>1</sup> Dept. of CSE, RGUKT Nuzvid &nbsp;&nbsp;\r
      <sup>2</sup> Dept. of ECE, RGUKT Nuzvid\r
    </p>\r
\r
    <p class="hero-meta">\r
      Research Article &nbsp;·&nbsp; November 2024\r
      <span class="award-badge"><i class="fas fa-trophy"></i> Top 3 &nbsp;·&nbsp; Intel AI Hackathon 2024, IIT Kharagpur</span>\r
    </p>\r
\r
    <div class="hero-links">\r
      <a class="hero-btn primary" href="https://drive.google.com/file/d/180zWWF3xryS2JB3naXf1FNXH-BptQSk5/view?usp=sharing" target="_blank">\r
        <i class="fas fa-file-pdf"></i> Report\r
      </a>\r
      <a class="hero-btn" href="https://docs.google.com/presentation/d/1PnEVrAEdt5EtYE1fIP79S1Vvm_9crvM5/edit?usp=sharing" target="_blank">\r
        <i class="fas fa-file-powerpoint"></i> Slides\r
      </a>\r
      <a class="hero-btn" href="https://github.com/Nikhil-Rao20/Three_of_Hearts" target="_blank">\r
        <i class="fab fa-github"></i> Code\r
      </a>\r
    </div>\r
\r
  </section>\r
\r
  <!-- ═══════════════════════════════════════════\r
       ARTICLE BODY\r
  ═════════════════════════════════════════════ -->\r
  <div class="article-body">\r
\r
    <!-- Tags -->\r
    <div class="tag-list">\r
      <span class="tag">Computer Vision</span>\r
      <span class="tag">Deep Learning</span>\r
      <span class="tag">Medical Imaging</span>\r
      <span class="tag">Echocardiography</span>\r
      <span class="tag">Intel OpenVINO</span>\r
    </div>\r
\r
    <!-- Abstract -->\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>The manual analysis of echocardiograms, a cornerstone of cardiac diagnostics, is often a time-consuming process prone to inter-observer variability and error. This project, CardioLens, introduces a robust deep learning framework for the automated segmentation of the left ventricle and subsequent calculation of the Left Ventricular Ejection Fraction (LVEF) from echocardiogram videos. Our dual-task pipeline utilizes a high-performing DeepLabV3 model with a ResNet-101 backbone for semantic segmentation and an R(2+1)D video model for LVEF estimation. A key contribution of this work is the systematic optimization of the entire workflow using the Intel® AI software stack. By leveraging the Intel® Extension for PyTorch (IPEX) for accelerated training and the Intel® Distribution of OpenVINO™ Toolkit for inference, we demonstrate a significant performance increase, including a nearly <strong>50% reduction in inference time</strong> on standard Intel® CPUs. The final segmentation model achieves a <strong>Dice Score of 0.92</strong>, providing a highly accurate, efficient, and accessible solution to augment clinical decision-making in cardiology.</p>\r
      </div>\r
\r
      <!-- Project Outcomes GIFs -->\r
      <h3 style="margin-top: 32px;">Project Outcomes</h3>\r
      <div class="row">\r
        <div class="col-md-4 col-sm-12 text-center">\r
          <img src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/imgs/video1.gif" alt="Echocardiography Video" class="img-responsive article-img">\r
          <div class="img-caption">Input Raw Echo Video</div>\r
        </div>\r
        <div class="col-md-4 col-sm-12 text-center">\r
          <img src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/imgs/mask1.gif" alt="Segmentation Mask" class="img-responsive article-img">\r
          <div class="img-caption">Predicted Mask of Left Ventricle</div>\r
        </div>\r
        <div class="col-md-4 col-sm-12 text-center">\r
          <img src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/imgs/ecg1.gif" alt="ECG" class="img-responsive article-img">\r
          <div class="img-caption">Algorithmic ECG from Mask</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <!-- Introduction -->\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <p>Cardiovascular Diseases (CVDs) remain the leading cause of mortality worldwide, making accurate and timely diagnosis a critical global health priority. Echocardiography stands as the most widely used non-invasive imaging modality for assessing cardiac function. A key biomarker derived from these scans is the <strong>Left Ventricular Ejection Fraction (LVEF)</strong> — the percentage of blood pumped out of the left ventricle with each contraction. LVEF is a fundamental indicator of cardiac health and is crucial for diagnosing and managing conditions like heart failure.</p>\r
\r
      <div style="text-align: center;">\r
        <img class="article-img" src="/assets/img/projects/heart.png" alt="Heart" style="max-width: 560px; width: 100%; display: inline-block;">\r
        <div class="img-caption">Fig. 1 — Anatomical diagram of the human heart, emphasizing the left ventricle's role in systemic circulation.</div>\r
      </div>\r
\r
      <p>Despite its importance, the clinical workflow for LVEF assessment faces significant challenges. Manual tracing by a sonographer is time-consuming and subject to high inter-observer variability. This project introduces <strong>CardioLens</strong>, an end-to-end automated framework designed to address these limitations through a dual-task AI pipeline that performs both accurate semantic segmentation of the left ventricle and direct LVEF estimation from raw echocardiogram videos, optimized with Intel® AI tooling for CPU deployment.</p>\r
    </div>\r
\r
    <!-- Methodology -->\r
    <div class="article-section" id="methodology">\r
      <h2>Methodology</h2>\r
\r
      <p>Our methodology is built around a comprehensive pipeline that automates the entire process from video input to diagnostic output, using the <strong>EchoNet-Dynamic Dataset</strong> — a large, publicly available collection of echocardiogram videos with associated LVEF labels and left-ventricle tracings.</p>\r
\r
      <img class="article-img" src="/assets/img/projects/CardioLens_Arch.png" alt="CardioLens System Architecture">\r
      <div class="img-caption">Fig. 2 — End-to-end architecture of CardioLens, detailing the data flow from input video to final diagnostic outputs.</div>\r
\r
      <h3>Dataset</h3>\r
      <p>The EchoNet-Dynamic dataset from Stanford University was partitioned into three subsets for rigorous evaluation. A substantial 74.4% was allocated for training, while the validation (12.8%) and test (12.7%) sets were reserved for hyperparameter tuning and final evaluation respectively.</p>\r
\r
      <div style="display:flex; align-items:flex-start; gap:24px; margin:24px 0; flex-wrap:wrap;">\r
        <div style="flex:1; min-width:220px;">\r
          <p>The distribution of Ejection Fraction (EF) values across patient videos shows a typical right-skewed distribution with concentration between 50–70%, representative of a real-world clinical population.</p>\r
        </div>\r
        <!-- <div style="flex:0 0 260px; text-align:center;">\r
          <img class="article-img" src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/Model%20Training%20and%20Development/analysis_images/split.png" alt="Dataset Split" style="max-width:200px; margin:0 auto;">\r
          <div class="img-caption" style="font-size:1.2rem;">Dataset split distribution.</div>\r
        </div> -->\r
      </div>\r
\r
      <div style="text-align:center; margin:24px 0;">\r
        <img class="article-img" src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/Model%20Training%20and%20Development/analysis_images/EFvsEDVvsESV.png" alt="EF Distribution" style="max-width:580px; width:100%;">\r
        <div class="img-caption">Fig. 3 — Distribution of Ejection Fraction values; the scatter plots explore the relationship between EF and volumetric measurements (EDV / ESV).</div>\r
      </div>\r
\r
      <h3>Models &amp; Training</h3>\r
      <p>Three segmentation architectures were evaluated: the transformer-based Intel DPT-Large model, and two DeepLabV3 variants (MobileNetV3-Large and ResNet-101 backbones). The <strong>DeepLabV3 + ResNet-101</strong> was selected for its superior Dice performance. Following segmentation, LVEF is estimated using an 18-layer <strong>R(2+1)D</strong> video model that learns spatio-temporal features to compute End-Diastolic Volume (EDV) and End-Systolic Volume (ESV):</p>\r
\r
      <div class="highlight-box">\r
        <h4>LVEF Formula</h4>\r
        <p style="font-size:1.5rem; text-align:center; margin:0; font-family:'Montserrat',sans-serif; color:#20364c;">\r
          EF = (EDV − ESV) / EDV\r
        </p>\r
      </div>\r
\r
      <h3>Intel Technologies</h3>\r
      <p>Training was accelerated with the <strong>Intel® Extension for PyTorch (IPEX)</strong>. For deployment, models were converted to OpenVINO™ Intermediate Representation (IR) format, applying graph pruning, quantization, and kernel fusion — enabling real-time analysis on standard CPUs without requiring specialized hardware.</p>\r
\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/openvino.png" alt="OpenVINO" style="max-width:480px; width:100%; display:inline-block;">\r
        <div class="img-caption">Fig. 4 — Intel® OpenVINO™ Toolkit for optimizing and deploying deep learning models at the edge.</div>\r
      </div>\r
    </div>\r
\r
    <!-- Results -->\r
    <div class="article-section" id="results">\r
      <h2>Experiments &amp; Results</h2>\r
\r
      <p>All experiments were conducted on a <strong>12th-Gen Intel® Core™ i7-12650H</strong> CPU using PyTorch, TorchVision, Hugging Face Transformers, OpenCV, and the Intel® AI Analytics Toolkit.</p>\r
\r
      <h3>Model Comparison</h3>\r
      <div class="table-responsive">\r
        <table class="table table-bordered table-striped">\r
          <thead>\r
            <tr>\r
              <th>Metric</th>\r
              <th>Intel DPT</th>\r
              <th>DeepLabV3 ResNet-101</th>\r
              <th>DeepLabV3 MobileNetV3</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>Loss</td><td>0.1419</td><td><strong>0.0441</strong></td><td>0.053</td></tr>\r
            <tr><td>Overall Dice Score</td><td>0.5632</td><td><strong>0.9209</strong></td><td>0.8836</td></tr>\r
            <tr><td>Diastolic Dice</td><td>0.5707</td><td><strong>0.9058</strong></td><td>0.8595</td></tr>\r
            <tr><td>Systolic Dice</td><td>0.5584</td><td><strong>0.9304</strong></td><td>0.8994</td></tr>\r
            <tr><td>Time / Epoch (s)</td><td>223.6</td><td>7.1</td><td><strong>6.6</strong></td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <h3>Training Curves</h3>\r
      <p>The plots below show Dice Score and loss progression over 40 epochs for the selected model. Both EDV and ESV Dice scores improve rapidly before stabilising, confirming successful learning of cardiac structure boundaries.</p>\r
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:20px 0;">\r
        <div style="text-align:center;">\r
          <img class="article-img" src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/Model%20Training%20and%20Development/analysis_images/loss_edv_dice.png" alt="EDV Dice" style="height:230px; object-fit:contain; width:100%;">\r
          <div class="img-caption" style="font-size:1.2rem;">(a) EDV Dice Score vs Epoch</div>\r
        </div>\r
        <div style="text-align:center;">\r
          <img class="article-img" src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/Model%20Training%20and%20Development/analysis_images/loss_epoch.png" alt="Loss" style="height:230px; object-fit:contain; width:100%;">\r
          <div class="img-caption" style="font-size:1.2rem;">(b) Training Loss vs Epoch</div>\r
        </div>\r
        <div style="text-align:center;">\r
          <img class="article-img" src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/Model%20Training%20and%20Development/analysis_images/loss_esv_dice.png" alt="ESV Dice" style="height:230px; object-fit:contain; width:100%;">\r
          <div class="img-caption" style="font-size:1.2rem;">(c) ESV Dice Score vs Epoch</div>\r
        </div>\r
        <div style="text-align:center;">\r
          <img class="article-img" src="https://github.com/Nikhil-Rao20/Three_of_Hearts/raw/main/Model%20Training%20and%20Development/analysis_images/loss_overall_dice.png" alt="Overall Dice" style="height:230px; object-fit:contain; width:100%;">\r
          <div class="img-caption" style="font-size:1.2rem;">(d) Overall Dice Score vs Epoch</div>\r
        </div>\r
      </div>\r
      <div class="img-caption">Fig. 5 — Training metrics over 40 epochs showing progressive improvement across all Dice measures and loss convergence.</div>\r
\r
      <h3>Inference Speedup with OpenVINO™</h3>\r
\r
      <img class="article-img" src="/assets/img/projects/seg.png" alt="Segmentation Inference Comparison">\r
      <div class="img-caption">Fig. 6 — Inference time for the segmentation task. OpenVINO™ consistently outperforms native PyTorch and IPEX-optimized inference.</div>\r
\r
      <img class="article-img" src="/assets/img/projects/ef.png" alt="EF Inference Comparison">\r
      <div class="img-caption">Fig. 7 — Inference time for the LVEF estimation task. OpenVINO™ reduces processing time by nearly half.</div>\r
\r
      <h3>Demo Outputs</h3>\r
      <div class="row">\r
        <div class="col-md-4 col-sm-12 text-center">\r
          <img src="/assets/img/projects/video2.gif" alt="Echo Video" class="img-responsive article-img">\r
          <div class="img-caption">Input Raw Echo Video</div>\r
        </div>\r
        <div class="col-md-4 col-sm-12 text-center">\r
          <img src="/assets/img/projects/mask2.gif" alt="Segmentation Mask" class="img-responsive article-img">\r
          <div class="img-caption">Predicted LV Mask</div>\r
        </div>\r
        <div class="col-md-4 col-sm-12 text-center">\r
          <img src="/assets/img/projects/ecg2.gif" alt="ECG" class="img-responsive article-img">\r
          <div class="img-caption">Generated ECG Visualization</div>\r
        </div>\r
      </div>\r
      <div class="img-caption">Fig. 8 — End-to-end demo: raw input → segmentation overlay → ECG waveform.</div>\r
\r
      <!-- <h3>Web Portal</h3>\r
      <img class="article-img" src="/assets/img/projects/cardiolens_web.png" alt="CardioLens Web Portal">\r
      <div class="img-caption">Fig. 9 — The CardioLens web portal for video upload and diagnostic report generation.</div> -->\r
    </div>\r
\r
    <!-- Discussion -->\r
    <div class="article-section" id="discussion">\r
      <h2>Discussion</h2>\r
      <p>Our experiments confirm that CNN architectures like DeepLabV3 + ResNet-101 can achieve expert-level accuracy in left-ventricle segmentation. More importantly, the ~50% reduction in inference time with OpenVINO™ demonstrates that complex AI analysis can run efficiently on ubiquitous CPU hardware, lowering the barrier to clinical adoption. CardioLens can serve as an automated "second opinion", reducing diagnostic errors, improving inter-operator consistency, and integrating into existing PACS systems.</p>\r
      <p>A significant area for future work is extending and validating the framework for <strong>pediatric and infant cardiac data</strong>, which presents unique challenges due to different heart rates and sizes. We also plan to expand to detect other cardiac abnormalities beyond LVEF.</p>\r
    </div>\r
\r
    <!-- Conclusion -->\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion</h2>\r
      <p>CardioLens successfully developed and validated an AI-powered framework for automated echocardiogram analysis. By selecting an appropriate deep learning architecture and leveraging hardware-aware optimization with the Intel® Distribution of OpenVINO™, we built a system that is both highly accurate (<strong>Dice 0.92</strong>) and computationally efficient (<strong>~50% inference speedup</strong>). This represents a significant step towards practical AI integration in routine cardiology workflows.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <!-- Resources -->\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <p>Full technical details, implementation code, and extended results are available below.</p>\r
      <div>\r
        <a class="resource-btn filled" href="https://drive.google.com/file/d/180zWWF3xryS2JB3naXf1FNXH-BptQSk5/view?usp=sharing" target="_blank">\r
          <i class="fas fa-file-pdf"></i> Report (V1)\r
        </a>\r
        <a class="resource-btn" href="https://docs.google.com/presentation/d/1PnEVrAEdt5EtYE1fIP79S1Vvm_9crvM5/edit?usp=sharing&ouid=116605216350207886936&rtpof=true&sd=true" target="_blank">\r
          <i class="fas fa-file-powerpoint"></i> Presentation\r
        </a>\r
        <a class="resource-btn" href="https://github.com/Nikhil-Rao20/Three_of_Hearts" target="_blank">\r
          <i class="fab fa-github"></i> Source Code\r
        </a>\r
      </div>\r
    </div>\r
\r
    <!-- References -->\r
    <div class="references-section" id="references">\r
      <h2>References</h2>\r
      <ol>\r
        <li>Ouyang, D., et al. (2020). Video-based AI for beat-to-beat assessment of cardiac function. <em>Nature</em>, 580(7802), 252–256.</li>\r
        <li>Leclerc, S., et al. (2019). Deep learning for segmentation using an open large-scale dataset in 2D echocardiography. <em>IEEE TMI</em>, 38(9), 2198–2210.</li>\r
        <li>Chen, L.C., Papandreou, G., Schroff, F., &amp; Adam, H. (2017). Rethinking Atrous Convolution for Semantic Image Segmentation. <em>arXiv:1706.05587</em>.</li>\r
        <li>Ronneberger, O., Fischer, P., &amp; Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. <em>MICCAI</em>.</li>\r
        <li>He, K., Zhang, X., Ren, S., &amp; Sun, J. (2016). Deep Residual Learning for Image Recognition. <em>CVPR</em>.</li>\r
        <li>Tran, D., et al. (2018). A Closer Look at Spatiotemporal Convolutions for Action Recognition. <em>CVPR Workshops</em>.</li>\r
        <li>Dosovitskiy, A., et al. (2020). An Image Is Worth 16×16 Words: Transformers for Image Recognition at Scale. <em>arXiv:2010.11929</em>.</li>\r
        <li>Knackstedt, C., et al. (2020). Artificial intelligence in echocardiography. <em>Circ. Cardiovasc. Imaging</em>, 13(3).</li>\r
        <li>Intel Corporation. (2024). Intel® Distribution of OpenVINO™ Toolkit. <a href="https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html" target="_blank">intel.com</a></li>\r
        <li>Intel Corporation. (2024). Intel® Extension for PyTorch. <a href="https://intel.github.io/intel-extension-for-pytorch/" target="_blank">intel.github.io</a></li>\r
      </ol>\r
    </div>\r
\r
    <!-- Contact -->\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>For further information or collaboration opportunities:<br>\r
        <strong>Nikhileswara Rao Sulake</strong> —\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div><!-- /.article-body -->\r
\r
  <!-- Back-to-top -->\r
  \r
\r
  <!-- Footer -->\r
  \r
\r
  <!-- jQuery + Bootstrap JS -->\r
  \r
  \r
\r
  <!-- W3Data for navbar/footer includes -->\r
  \r
  \r
\r
  <!-- Portfolio main.js (back-to-top scroll button) -->\r
  \r
\r
`,styles:[`\r
    /* ───────────────────────────────────────────\r
       BASE — override to match portfolio exactly\r
    ─────────────────────────────────────────── */\r
    body {\r
      background: #ffffff;\r
      font-family: "Open Sans", Arial, sans-serif;\r
      font-size: 15.5px;\r
      line-height: 1.75;\r
      color: #333;\r
    }\r
\r
    /* ───────────────────────────────────────────\r
       HERO SECTION — clean white, full-width\r
    ─────────────────────────────────────────── */\r
    .article-hero {\r
      background: #ffffff;\r
      border-bottom: 1px solid #e5e8ed;\r
      padding: 48px 20px 36px;\r
      text-align: center;\r
    }\r
\r
    .hero-title {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 3rem;\r
      font-weight: 700;\r
      color: #20364c;\r
      line-height: 1.22;\r
      margin: 0 auto 18px;\r
      max-width: 860px;\r
    }\r
\r
    .hero-authors {\r
      font-family: "Open Sans", sans-serif;\r
      font-size: 1.45rem;\r
      color: #333;\r
      margin-bottom: 6px;\r
    }\r
    .hero-authors a {\r
      color: #1585cf;\r
      text-decoration: none;\r
      font-weight: 600;\r
      border-bottom: 1px dashed transparent;\r
      transition: border-color 0.2s;\r
    }\r
    .hero-authors a:hover { border-bottom-color: #1585cf; }\r
    .hero-authors sup { font-size: 0.7em; color: slategray; }\r
\r
    .hero-affiliations {\r
      font-size: 1.3rem;\r
      color: slategray;\r
      font-family: "Open Sans", sans-serif;\r
      margin-bottom: 14px;\r
    }\r
    .hero-affiliations sup { font-size: 0.7em; }\r
\r
    .hero-meta {\r
      font-size: 1.25rem;\r
      color: slategray;\r
      font-family: "Open Sans", sans-serif;\r
      margin-bottom: 28px;\r
    }\r
\r
    /* Button row — nerfies-inspired */\r
    .hero-links {\r
      display: flex;\r
      flex-wrap: wrap;\r
      justify-content: center;\r
      gap: 10px;\r
      margin-top: 8px;\r
    }\r
\r
    .hero-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 7px;\r
      padding: 8px 20px;\r
      border-radius: 6px;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      font-weight: 600;\r
      text-decoration: none;\r
      border: 2px solid #20364c;\r
      color: #20364c;\r
      background: #ffffff;\r
      transition: all 0.2s ease;\r
    }\r
    .hero-btn:hover {\r
      background: #20364c;\r
      color: #ffffff;\r
      text-decoration: none;\r
    }\r
    .hero-btn.primary {\r
      background: #20364c;\r
      color: #ffffff;\r
    }\r
    .hero-btn.primary:hover {\r
      background: #1585cf;\r
      border-color: #1585cf;\r
    }\r
\r
    /* ───────────────────────────────────────────\r
       ARTICLE BODY — single column, paper width\r
    ─────────────────────────────────────────── */\r
    .article-body {\r
      max-width: 860px;\r
      margin: 0 auto;\r
      padding: 48px 20px 72px;\r
    }\r
\r
    /* Section headings — match portfolio h3 underline style */\r
    .article-body h2 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.9rem;\r
      font-weight: 600;\r
      color: #20364c;\r
      margin-top: 0;\r
      margin-bottom: 16px !important;\r
      padding-bottom: 8px;\r
      border-bottom: 2px solid slategray;\r
      position: relative;\r
    }\r
\r
    .article-body h3 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.55rem;\r
      font-weight: 600;\r
      color: #3d5166;\r
      margin-top: 30px;\r
      margin-bottom: 10px !important;\r
    }\r
\r
    .article-body h4 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.35rem;\r
      font-weight: 600;\r
      color: slategray;\r
      margin-top: 22px;\r
      margin-bottom: 8px !important;\r
      text-transform: uppercase;\r
      letter-spacing: 0.04em;\r
    }\r
\r
    .article-section {\r
      margin-bottom: 52px;\r
    }\r
\r
    /* Abstract highlighted box */\r
    .abstract-box {\r
      background: #f4f7fb;\r
      border-left: 4px solid #20364c;\r
      padding: 22px 26px;\r
      border-radius: 0 8px 8px 0;\r
      margin-bottom: 0;\r
    }\r
    .abstract-box p {\r
      margin-bottom: 0;\r
      font-size: 1.45rem;\r
      color: #2c3e50;\r
      line-height: 1.8;\r
    }\r
\r
    /* Tags */\r
    .tag-list {\r
      display: flex;\r
      flex-wrap: wrap;\r
      gap: 8px;\r
      margin-bottom: 36px;\r
    }\r
    .tag {\r
      background: #eaf4fb;\r
      color: #1585cf;\r
      border: 1px solid #b8ddf5;\r
      padding: 4px 14px;\r
      border-radius: 20px;\r
      font-size: 1.2rem;\r
      font-weight: 500;\r
      font-family: "Montserrat", sans-serif;\r
      transition: all 0.2s;\r
    }\r
    .tag:hover { background: #1585cf; color: #fff; border-color: #1585cf; }\r
\r
    /* Images */\r
    .article-img {\r
      width: 100%;\r
      border-radius: 8px;\r
      margin: 20px 0 6px;\r
      box-shadow: 0 2px 12px rgba(0,0,0,0.09);\r
      transition: transform 0.3s ease, box-shadow 0.3s ease;\r
    }\r
    .article-img:hover {\r
      transform: scale(1.01);\r
      box-shadow: 0 6px 24px rgba(0,0,0,0.13);\r
    }\r
    .img-caption {\r
      text-align: center;\r
      font-style: italic;\r
      color: slategray;\r
      font-size: 1.3rem;\r
      margin-bottom: 20px;\r
      font-family: "Open Sans", sans-serif;\r
    }\r
\r
    /* Highlight / callout box */\r
    .highlight-box {\r
      background: #f4f7fb;\r
      border-left: 4px solid #1585cf;\r
      padding: 18px 22px;\r
      border-radius: 0 8px 8px 0;\r
      margin: 22px 0;\r
    }\r
    .highlight-box h4 {\r
      color: #20364c;\r
      text-transform: none;\r
      letter-spacing: 0;\r
      font-size: 1.4rem;\r
      margin-top: 0;\r
    }\r
\r
    /* Table — plain black & white, no colour */\r
    .article-body .table thead tr th {\r
      background: #ffffff;\r
      color: #20364c;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.35rem;\r
      border-bottom: 2px solid #20364c;\r
    }\r
    .article-body .table tbody tr td {\r
      font-size: 1.35rem;\r
      vertical-align: middle;\r
    }\r
\r
    /* Fix: portfolio main.css h3::after draws a line — override for article h3 */\r
    .article-body h3::after {\r
      display: none !important;\r
      content: none !important;\r
    }\r
    .article-body h3 span {\r
      background: transparent;\r
      padding-right: 0;\r
    }\r
\r
    /* Back link — top-left of hero, no full bar */\r
    .article-hero {\r
      position: relative;\r
    }\r
    .hero-back-link {\r
      position: absolute;\r
      top: 18px;\r
      left: 20px;\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 6px;\r
      font-size: 1.3rem;\r
      color: #1585cf;\r
      font-family: "Montserrat", sans-serif;\r
      font-weight: 500;\r
      text-decoration: none;\r
      transition: color 0.2s;\r
    }\r
    .hero-back-link:hover { color: #20364c; text-decoration: none; }\r
\r
    /* Award inline badge — blue/white, on-theme */\r
    .award-badge {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 5px;\r
      font-size: 1.15rem;\r
      font-family: "Montserrat", sans-serif;\r
      font-weight: 600;\r
      color: #1585cf;\r
      background: #eaf4fb;\r
      border: 1px solid #b8ddf5;\r
      border-radius: 4px;\r
      padding: 3px 10px;\r
      margin-left: 8px;\r
      vertical-align: middle;\r
    }\r
\r
    /* Download/resource buttons */\r
    .resource-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 7px;\r
      padding: 9px 22px;\r
      border-radius: 6px;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      font-weight: 600;\r
      text-decoration: none;\r
      border: 2px solid #20364c;\r
      color: #20364c;\r
      background: #ffffff;\r
      transition: all 0.2s ease;\r
      margin-right: 8px;\r
      margin-top: 10px;\r
    }\r
    .resource-btn:hover {\r
      background: #20364c;\r
      color: #fff;\r
      text-decoration: none;\r
    }\r
    .resource-btn.filled {\r
      background: #20364c;\r
      color: #fff;\r
    }\r
    .resource-btn.filled:hover {\r
      background: #1585cf;\r
      border-color: #1585cf;\r
    }\r
\r
    /* References box */\r
    .references-section {\r
      background: #f4f7fb;\r
      padding: 26px 24px;\r
      border-left: 5px solid #20364c;\r
      border-radius: 0 8px 8px 0;\r
      margin: 40px 0;\r
      overflow-wrap: break-word;\r
      word-break: break-word;\r
    }\r
    .references-section h2 {\r
      border-bottom: none;\r
      font-size: 1.7rem;\r
      padding-bottom: 0;\r
      margin-bottom: 16px !important;\r
    }\r
    .references-section ol { padding-left: 20px; }\r
    .references-section ol li {\r
      font-size: 1.25rem;\r
      line-height: 1.65;\r
      color: #3d4147;\r
      margin-bottom: 10px;\r
    }\r
    .references-section ol li a { color: #1585cf; }\r
    .references-section ol li a:hover { text-decoration: underline; }\r
\r
    /* Section divider dot */\r
    .section-sep {\r
      text-align: center;\r
      margin: 48px 0 36px;\r
      color: #c8d3de;\r
      letter-spacing: 0.5em;\r
      font-size: 1.1rem;\r
    }\r
\r
    /* ───────────────────────────────────────────\r
       RESPONSIVE\r
    ─────────────────────────────────────────── */\r
    @media (max-width: 767px) {\r
      .hero-back-link { position: static; display: inline-flex; margin-bottom: 16px; }\r
      .hero-title { font-size: 2.2rem; }\r
      .hero-authors { font-size: 1.35rem; }\r
      .article-body h2 { font-size: 1.65rem; }\r
      .article-body h3 { font-size: 1.4rem; }\r
      .hero-btn { font-size: 1.2rem; padding: 7px 15px; }\r
      .article-body { padding: 32px 15px 60px; }\r
    }\r
\r
    @media (max-width: 480px) {\r
      .hero-title { font-size: 1.85rem; }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/casuality.html`,title:`Causality-Aware OCT Classification | Nikhileswara Rao Sulake`,description:`Causality-aware OCT classification by Nikhileswara Rao Sulake explores causal structure, uncertainty, and robust retinal image analysis for clinical deep learning.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">Beyond Correlation: Causality-Aware Representation Learning for Retinal Disease Classification in OCT Images</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-affiliations">Dept. of CSE, RGUKT Nuzvid</p>\r
    <p class="hero-meta">Research Article &nbsp;·&nbsp; September 2024</p>\r
    <!-- <div class="hero-links">\r
      <a class="hero-btn primary" href="#" target="_blank"><i class="fas fa-file-pdf"></i> Report</a>\r
      <a class="hero-btn" href="#" target="_blank"><i class="fab fa-github"></i> Code</a>\r
    </div> -->\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">Causal Inference</span>\r
      <span class="tag">Medical Imaging</span>\r
      <span class="tag">Deep Learning</span>\r
      <span class="tag">OCT</span>\r
      <span class="tag">ResNet</span>\r
      <span class="tag">Representation Learning</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>Standard deep learning models for medical image analysis excel at learning correlational patterns but often fail to capture the underlying causal relationships inherent in disease pathology. This paper investigates a novel approach to enhance diagnostic accuracy by integrating principles of causal inference directly into a deep learning framework. We present a systematic study on the classification of retinal diseases from Optical Coherence Tomography (OCT) images using a ResNet18 architecture augmented with causality-aware modules. We explore two distinct mechanisms: a concatenation-based method ("Cat") and a feature-weighting method ("Mulcat"), along with different causality map computations (Lehmer mean vs. Max) and extraction modes (Full/Bool and Causes/Effects). Our key finding: a Mulcat model using a Lehmer-derived causality map with boolean weighting of causal features achieves <strong>88.90% accuracy</strong>, demonstrating that selective integration of causal signals, rather than amplification, is the key to improved performance.</p>\r
      </div>\r
      <div style="text-align: center; margin-top: 24px;">\r
        <img class="article-img" src="/assets/img/projects/casuality.png" alt="Causality-Aware Architecture Overview" style="max-width: 780px; width: 100%; display: inline-block;">\r
        <div class="img-caption">Fig. 1, Overview of the causality-aware ResNet18 architecture integrating causal inference modules for enhanced OCT classification.</div>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <p>Optical Coherence Tomography (OCT) provides high-resolution cross-sectional images of the retina, critical for diagnosing diabetic retinopathy, macular degeneration, and glaucoma. CNNs like ResNet have been widely applied to automate classification of these images, often matching human-level performance.</p>\r
      <p>However, a fundamental limitation of traditional CNNs is their reliance on statistical correlations. These models recognize patterns without an explicit understanding of the cause-and-effect relationships that define disease progression. This "correlation, not causation" paradigm can lead to brittle models that struggle with out-of-distribution examples, a critical drawback in high-stakes medical applications.</p>\r
      <p>Recent advances in causal inference offer a promising direction. By developing methods to estimate and integrate causal signals from data, it is possible to guide a neural network to learn features that are <em>causally relevant</em>, not merely correlated. This study presents a rigorous empirical analysis of causality-aware ResNet18 variants, uncovering a novel and counter-intuitive configuration that yields superior performance.</p>\r
    </div>\r
\r
    <div class="article-section" id="methodology">\r
      <h2>Methodology</h2>\r
      <p>Our framework augments the ResNet18 backbone with specialized modules that process a computed "causality map", a k×k matrix where each element C(i,j) quantifies the causal influence of feature map F<sub>i</sub> on F<sub>j</sub>.</p>\r
\r
      <h3>Causality Map Generation</h3>\r
      <p>After the image is processed by ResNet18's convolutional layers, two methods construct the causality map:</p>\r
\r
      <div class="method-box">\r
        <h4>Max Method</h4>\r
        <p>A correlation-based proxy estimating causal influence by finding the maximum value in the feature interaction tensor. Computationally efficient but limited by its inability to distinguish direction of influence.</p>\r
      </div>\r
\r
      <div class="method-box">\r
        <h4>Lehmer Mean Method</h4>\r
        <p>A flexible, parameter-controlled mean that can be tuned to be more or less sensitive to feature interactions. Through fine-tuning, parameter <strong>p = 0</strong> (geometric mean) was found optimal for training from scratch, suggesting multiplicative relationships best model feature influence in OCT analysis.</p>\r
      </div>\r
\r
      <h3>Causality-Aware Modules</h3>\r
\r
      <div class="method-box">\r
        <h4>Cat (Concatenate) Module</h4>\r
        <p>Flattens both the k feature maps and the k×k causality map into separate vectors, then concatenates them for the classifier. A passive strategy, the causal map is provided as supplementary metadata alongside visual features.</p>\r
      </div>\r
\r
      <div class="method-box">\r
        <h4>Mulcat (Multiply &amp; Concatenate) Module</h4>\r
        <p>Uses the causality map to directly modulate feature maps via element-wise multiplication before classification. Controlled by two parameter pairs:</p>\r
        <ul>\r
          <li><strong>Direction (Causes / Effects):</strong> Focus on root-cause features vs. downstream consequences</li>\r
          <li><strong>Weighing Mode (Full / Bool):</strong> Continuous weighting vs. binary gating of causally relevant features</li>\r
        </ul>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="experiments">\r
      <h2>Experiments &amp; Results</h2>\r
\r
      <h3>Lehmer Parameter Fine-Tuning</h3>\r
      <p>A preliminary experiment determined the optimal Lehmer parameter. Training from scratch with <strong>p = 0</strong> achieved 91% accuracy, far outperforming other values and pretrained initializations.</p>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered table-striped">\r
          <thead>\r
            <tr>\r
              <th>Lehmer Value (a)</th>\r
              <th>Accuracy (Pretrained)</th>\r
              <th>Accuracy (From Scratch)</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>0</td><td>47%</td><td><strong>91%</strong></td></tr>\r
            <tr><td>1</td><td>47%</td><td>73%</td></tr>\r
            <tr><td>-1</td><td>77%</td><td>35%</td></tr>\r
            <tr><td>-2</td><td>83%</td><td>47%</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 1, Lehmer parameter fine-tuning. p = 0 (geometric mean) is clearly optimal when training from scratch.</div>\r
\r
      <h3>Main Classification Results</h3>\r
      <div class="table-responsive">\r
        <table class="table table-bordered table-striped">\r
          <thead>\r
            <tr>\r
              <th>Model</th>\r
              <th>Factor Mode</th>\r
              <th>Direction</th>\r
              <th>Test Accuracy (%)</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr style="background:#f7f9fc;"><td><strong>ResNet18 (baseline)</strong></td><td>—</td><td>—</td><td><strong>93.63</strong></td></tr>\r
            <tr><td>+ Cat (Max)</td><td>—</td><td>—</td><td>93.65</td></tr>\r
            <tr><td>+ Cat (Lehmer)</td><td>—</td><td>—</td><td>91.58</td></tr>\r
            <tr><td>+ Mulcat (Max)</td><td>Full</td><td>Causes</td><td>56.88</td></tr>\r
            <tr><td>+ Mulcat (Max)</td><td>Full</td><td>Effects</td><td>78.34</td></tr>\r
            <tr><td>+ Mulcat (Max)</td><td>Bool</td><td>Effects</td><td>83.69</td></tr>\r
            <tr><td>+ Mulcat (Lehmer)</td><td>Full</td><td>Causes</td><td>88.65</td></tr>\r
            <tr><td>+ Mulcat (Lehmer)</td><td>Full</td><td>Effects</td><td>74.48</td></tr>\r
            <tr style="background:#fef9e7;"><td><strong>+ Mulcat (Lehmer)</strong></td><td><strong>Bool</strong></td><td><strong>Causes</strong></td><td><strong>88.90</strong></td></tr>\r
            <tr><td>+ Mulcat (Lehmer)</td><td>Bool</td><td>Effects</td><td>86.04</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 2, Main results on the OCT dataset. The Mulcat (Lehmer, Bool, Causes) configuration is the best-performing causal variant.</div>\r
\r
      <div class="highlight-box">\r
        <h4><i class="fas fa-lightbulb"></i> Key Observation</h4>\r
        <p>The "Full" weighting mode, which directly amplifies features by their causal scores, consistently performs poorly, collapsing to 56.88% in the worst case. The "Bool" mode, treating causality as a selection gate rather than an amplifier, proves far more robust. <strong>More causal signal is not always better; selective integration is the key.</strong></p>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="discussion">\r
      <h2>Discussion</h2>\r
      <p>The dramatic failure of the Full weighting mode suggests that raw causal scores are too noisy to be used as direct multipliers. Amplifying a single causally dominant feature biases the model, ignoring subtler visual cues that are also diagnostically relevant.</p>\r
      <p>The Bool mode's success demonstrates that using causality as a <em>selection mechanism</em>, identifying which features matter, then weighting them equally, leads to more robust representations. The optimal direction (Causes over Effects) further aligns with clinical reasoning: identifying the root physiological cause is more valuable than detecting downstream consequences for accurate classification.</p>\r
      <p>The geometric mean (p = 0) as the optimal Lehmer setting implies that multiplicative, rather than additive, relationships best capture how features interact in OCT retinal pathology.</p>\r
    </div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion</h2>\r
      <p>This work demonstrates that the method of integrating causal information is critically important. Simple concatenation offers little benefit; aggressive amplification is detrimental; but nuanced, boolean-gated selection of causally relevant features based on the Lehmer geometric mean provides a highly competitive and interpretable result.</p>\r
      <p>The identified configuration, Mulcat + Lehmer (p=0) + Bool + Causes, at 88.90% accuracy stands as the best causal variant and establishes a strong proof-of-concept for causality-aware representation learning in medical imaging. Future work will explore more sophisticated causality estimation methods, multi-modal extensions, and clinical validation of the discovered causal patterns.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="references-section" id="references">\r
      <h2>References</h2>\r
      <ol>\r
        <li>He, K., Zhang, X., Ren, S., &amp; Sun, J. (2016). Deep Residual Learning for Image Recognition. <em>CVPR</em>.</li>\r
        <li>Terziyan, V., &amp; Vitko, O. (2023). Causality-aware convolutional neural networks for advanced image classification and generation. <em>Procedia Computer Science</em>, 217, 495–506.</li>\r
        <li>Carloni, G., &amp; Colantonio, S. (2024). Exploiting causality signals in medical images. <em>Expert Systems with Applications</em>, 249, 123433.</li>\r
        <li>Pearl, J. (2009). <em>Causality: Models, Reasoning, and Inference</em>. Cambridge University Press.</li>\r
        <li>Kermany, D. S., et al. (2018). Identifying Medical Diagnoses by Image-Based Deep Learning. <em>Cell</em>, 172(5), 1122–1131.</li>\r
        <li>Schölkopf, B. (2022). Causality for Machine Learning. <em>arXiv:2206.14754</em>.</li>\r
      </ol>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>For further information or collaboration opportunities:<br>\r
        <strong>Nikhileswara Rao Sulake</strong>,\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body {\r
      background: #ffffff;\r
      font-family: "Open Sans", Arial, sans-serif;\r
      font-size: 15.5px;\r
      line-height: 1.75;\r
      color: #333;\r
    }\r
\r
    .article-hero {\r
      background: #ffffff;\r
      border-bottom: 1px solid #e5e8ed;\r
      padding: 48px 20px 36px;\r
      text-align: center;\r
      position: relative;\r
    }\r
\r
    .hero-title {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 3rem;\r
      font-weight: 700;\r
      color: #20364c;\r
      line-height: 1.22;\r
      margin: 0 auto 18px;\r
      max-width: 860px;\r
    }\r
\r
    .hero-authors {\r
      font-family: "Open Sans", sans-serif;\r
      font-size: 1.45rem;\r
      color: #333;\r
      margin-bottom: 6px;\r
    }\r
    .hero-authors a { color: #1585cf; text-decoration: none; font-weight: 600; border-bottom: 1px dashed transparent; transition: border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color: #1585cf; }\r
    .hero-authors sup { font-size: 0.7em; color: slategray; }\r
\r
    .hero-affiliations {\r
      font-size: 1.3rem;\r
      color: slategray;\r
      font-family: "Open Sans", sans-serif;\r
      margin-bottom: 14px;\r
    }\r
    .hero-affiliations sup { font-size: 0.7em; }\r
\r
    .hero-meta {\r
      font-size: 1.25rem;\r
      color: slategray;\r
      font-family: "Open Sans", sans-serif;\r
      margin-bottom: 28px;\r
    }\r
\r
    .hero-links {\r
      display: flex;\r
      flex-wrap: wrap;\r
      justify-content: center;\r
      gap: 10px;\r
      margin-top: 8px;\r
    }\r
\r
    .hero-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 7px;\r
      padding: 8px 20px;\r
      border-radius: 6px;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      font-weight: 600;\r
      text-decoration: none;\r
      border: 2px solid #20364c;\r
      color: #20364c;\r
      background: #ffffff;\r
      transition: all 0.2s ease;\r
    }\r
    .hero-btn:hover { background: #20364c; color: #ffffff; text-decoration: none; }\r
    .hero-btn.primary { background: #20364c; color: #ffffff; }\r
    .hero-btn.primary:hover { background: #1585cf; border-color: #1585cf; }\r
\r
    .article-body {\r
      max-width: 860px;\r
      margin: 0 auto;\r
      padding: 48px 20px 72px;\r
    }\r
\r
    .article-body h2 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.9rem;\r
      font-weight: 600;\r
      color: #20364c;\r
      margin-top: 0;\r
      margin-bottom: 16px !important;\r
      padding-bottom: 8px;\r
      border-bottom: 2px solid slategray;\r
    }\r
\r
    .article-body h3 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.55rem;\r
      font-weight: 600;\r
      color: #3d5166;\r
      margin-top: 30px;\r
      margin-bottom: 10px !important;\r
    }\r
\r
    .article-body h4 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.35rem;\r
      font-weight: 600;\r
      color: slategray;\r
      margin-top: 22px;\r
      margin-bottom: 8px !important;\r
      text-transform: uppercase;\r
      letter-spacing: 0.04em;\r
    }\r
\r
    .article-section { margin-bottom: 52px; }\r
\r
    .abstract-box {\r
      background: #f4f7fb;\r
      border-left: 4px solid #20364c;\r
      padding: 22px 26px;\r
      border-radius: 0 8px 8px 0;\r
      margin-bottom: 0;\r
    }\r
    .abstract-box p { margin-bottom: 0; font-size: 1.45rem; color: #2c3e50; line-height: 1.8; }\r
\r
    .tag-list {\r
      display: flex;\r
      flex-wrap: wrap;\r
      gap: 8px;\r
      margin-bottom: 36px;\r
    }\r
    .tag {\r
      background: #eaf4fb;\r
      color: #1585cf;\r
      border: 1px solid #b8ddf5;\r
      padding: 4px 14px;\r
      border-radius: 20px;\r
      font-size: 1.2rem;\r
      font-weight: 500;\r
      font-family: "Montserrat", sans-serif;\r
      transition: all 0.2s;\r
    }\r
    .tag:hover { background: #1585cf; color: #fff; border-color: #1585cf; }\r
\r
    .article-img {\r
      width: 100%;\r
      border-radius: 8px;\r
      margin: 20px 0 6px;\r
      box-shadow: 0 2px 12px rgba(0,0,0,0.09);\r
      transition: transform 0.3s ease;\r
    }\r
    .article-img:hover { transform: scale(1.01); }\r
    .img-caption {\r
      text-align: center;\r
      font-style: italic;\r
      color: slategray;\r
      font-size: 1.3rem;\r
      margin-bottom: 20px;\r
      font-family: "Open Sans", sans-serif;\r
    }\r
\r
    .highlight-box {\r
      background: #f4f7fb;\r
      border-left: 4px solid #1585cf;\r
      padding: 18px 22px;\r
      border-radius: 0 8px 8px 0;\r
      margin: 22px 0;\r
    }\r
    .highlight-box h4 { color: #20364c; text-transform: none; letter-spacing: 0; font-size: 1.4rem; margin-top: 0; }\r
\r
    .method-box {\r
      background: #fff;\r
      border: 1px solid #e0e6ef;\r
      border-left: 4px solid #20364c;\r
      border-radius: 0 8px 8px 0;\r
      padding: 18px 22px;\r
      margin: 18px 0;\r
    }\r
    .method-box h4 { color: #20364c; text-transform: none; letter-spacing: 0; font-size: 1.4rem; margin-top: 0; margin-bottom: 10px; }\r
\r
    /* Plain B&W tables */\r
    .article-body .table thead tr th {\r
      background: #ffffff;\r
      color: #20364c;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.35rem;\r
      border-bottom: 2px solid #20364c;\r
    }\r
    .article-body .table tbody tr td { font-size: 1.35rem; vertical-align: middle; }\r
\r
    /* Fix h3::after from portfolio CSS */\r
    .article-body h3::after { display: none !important; content: none !important; }\r
    .article-body h3 span { background: transparent; padding-right: 0; }\r
\r
    .article-hero { position: relative; }\r
    .hero-back-link {\r
      position: absolute;\r
      top: 18px;\r
      left: 20px;\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 6px;\r
      font-size: 1.3rem;\r
      color: #1585cf;\r
      font-family: "Montserrat", sans-serif;\r
      font-weight: 500;\r
      text-decoration: none;\r
      transition: color 0.2s;\r
    }\r
    .hero-back-link:hover { color: #20364c; text-decoration: none; }\r
\r
    .resource-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 7px;\r
      padding: 9px 22px;\r
      border-radius: 6px;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      font-weight: 600;\r
      text-decoration: none;\r
      border: 2px solid #20364c;\r
      color: #20364c;\r
      background: #ffffff;\r
      transition: all 0.2s ease;\r
      margin-right: 8px;\r
      margin-top: 10px;\r
    }\r
    .resource-btn:hover { background: #20364c; color: #fff; text-decoration: none; }\r
    .resource-btn.filled { background: #20364c; color: #fff; }\r
    .resource-btn.filled:hover { background: #1585cf; border-color: #1585cf; }\r
\r
    .references-section {\r
      background: #f4f7fb;\r
      padding: 26px 24px;\r
      border-left: 5px solid #20364c;\r
      border-radius: 0 8px 8px 0;\r
      margin: 40px 0;\r
      overflow-wrap: break-word;\r
      word-break: break-word;\r
    }\r
    .references-section h2 { border-bottom: none; font-size: 1.7rem; padding-bottom: 0; margin-bottom: 16px !important; }\r
    .references-section ol { padding-left: 20px; }\r
    .references-section ol li { font-size: 1.25rem; line-height: 1.65; color: #3d4147; margin-bottom: 10px; }\r
    .references-section ol li a { color: #1585cf; }\r
    .references-section ol li a:hover { text-decoration: underline; }\r
\r
    .section-sep { text-align: center; margin: 48px 0 36px; color: #c8d3de; letter-spacing: 0.5em; font-size: 1.1rem; }\r
\r
    @media (max-width: 767px) {\r
      .hero-back-link { position: static; display: inline-flex; margin-bottom: 16px; }\r
      .hero-title { font-size: 2.2rem; }\r
      .hero-authors { font-size: 1.35rem; }\r
      .article-body h2 { font-size: 1.65rem; }\r
      .article-body h3 { font-size: 1.4rem; }\r
      .hero-btn { font-size: 1.2rem; padding: 7px 15px; }\r
      .article-body { padding: 32px 15px 60px; }\r
    }\r
    @media (max-width: 480px) {\r
      .hero-title { font-size: 1.85rem; }\r
    }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/doc2data.html`,title:`Doc2Data: Clinical Document Information Extraction | Nikhileswara Rao Sulake`,description:`Doc2Data is a clinical document information extraction project by Nikhileswara Rao Sulake that converts unstructured documents into structured data.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">Doc2Data: Automated Information Extraction from Unstructured Clinical Documents</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Research Article &nbsp;·&nbsp; NLP &nbsp;·&nbsp; Clinical AI</p>\r
    <div style="margin-bottom:10px;">\r
      <span class="draft-badge"><i class="fas fa-pencil-alt"></i>&nbsp; Article in Preparation</span>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">NLP</span>\r
      <span class="tag">Information Extraction</span>\r
      <span class="tag">Clinical Documents</span>\r
      <span class="tag">LLM</span>\r
      <span class="tag">Structured Data</span>\r
      <span class="tag">Healthcare AI</span>\r
    </div>\r
\r
    <div class="coming-soon-icon">\r
      <i class="fas fa-file-medical-alt"></i>\r
    </div>\r
    <h2 class="coming-soon-title">Content Coming Soon</h2>\r
    <p class="coming-soon-text">\r
      The full technical write-up for this project is currently being prepared. Doc2Data focuses on structured data extraction from unstructured clinical text — discharge summaries, radiology reports, and physician notes — using fine-tuned language models and rule-based post-processing to produce structured, queryable output.\r
    </p>\r
    <p class="coming-soon-text" style="font-size:1.35rem; color:#8a9aaa;">\r
      Check back soon, or get in touch directly to learn more about the current state of this work.\r
    </p>\r
\r
    <p class="contact-text">\r
      <strong>Nikhileswara Rao Sulake</strong> &mdash;\r
      <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
      <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
      <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
    </p>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:18px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; }\r
    .draft-badge { display:inline-block; background:#fff8e7; color:#b87c00; border:1px solid #f0d080; padding:5px 16px; border-radius:20px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; margin-bottom:20px; }\r
    .article-body { max-width:860px; margin:0 auto; padding:60px 20px 80px; text-align:center; }\r
    .coming-soon-icon { font-size:4.5rem; color:#c8d3de; margin-bottom:24px; }\r
    .coming-soon-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:2rem; font-weight:700; color:#20364c; margin-bottom:14px; }\r
    .coming-soon-text { font-size:1.5rem; color:#5a6a7a; max-width:580px; margin:0 auto 32px; line-height:1.7; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin:0 auto 36px; justify-content:center; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .contact-text { font-size:1.35rem; color:slategray; margin-top:40px; }\r
    .contact-text a { color:#1585cf; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .coming-soon-title{font-size:1.7rem;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/multi_backbone_yolo.html`,title:`Backbones of YOLO: A Comprehensive Analysis | Nikhileswara Rao Sulake`,description:`A comparative analysis of multiple YOLO backbones by Nikhileswara Rao Sulake, exploring CNN, transformer, and Mamba-based architectures for object detection.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">YOLOv8 Re-imagined: A Comparative Architectural Analysis of Next-Generation Backbones for Enhanced Feature Extraction</h1>\r
    <p class="hero-authors">\r
      Sivaji Retta &nbsp;&amp;&nbsp;\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Research Article &nbsp;·&nbsp; September 2024</p>\r
    <div class="hero-links">\r
      <a class="hero-btn primary" href="https://github.com/Nikhil-Rao20/YOLOv8_Backbones" target="_blank"><i class="fab fa-github"></i> Code</a>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">Computer Vision</span>\r
      <span class="tag">Object Detection</span>\r
      <span class="tag">YOLO</span>\r
      <span class="tag">Vision Transformers</span>\r
      <span class="tag">State Space Models</span>\r
      <span class="tag">Deep Learning</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>YOLOv8 is a dominant real-time object detection framework, yet its backbone, the primary feature extractor, remains largely unchanged from prior generations. This study presents a systematic theoretical and analytical comparison of seven backbone architectures integrated in place of YOLOv8's default CSPDarkNet. The evaluated backbones span CNN-based (ResNet50), hybrid (NextViT), pure transformer-based (DeiT), and emerging state-space model (SSM) architectures (Mamba, VMamba, Vision Mamba, MambaVision). Across five model scales (n/s/m/l/x), we analyze parameter counts and GFLOPs for all 35 resulting model configurations. This analytical study, conducted without retraining due to compute constraints, reveals the distinct theoretical trade-offs each backbone introduces, providing a structured guide for practitioners selecting architectures for constrained deployment scenarios.</p>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <div style="text-align: center;">\r
        <img class="article-img" src="/assets/img/projects/yolobackbone.png" alt="YOLOv8 Backbone Swap Overview" style="max-width: 780px; display: inline-block;">\r
        <div class="img-caption">Fig. 1 , Schematic of the backbone replacement strategy within the YOLOv8 architecture.</div>\r
      </div>\r
      <p>The YOLO family of detectors achieves state-of-the-art speed-accuracy trade-offs by tightly coupling a feature extraction backbone with specialized neck and head components. While the neck (PANet) and detection head have seen significant iteration across YOLO versions, the backbone has evolved more incrementally. YOLOv8's default CSPDarkNet, while highly optimized, may not be the ideal feature extractor for all deployment scenarios.</p>\r
      <p>The deep learning landscape has seen an explosion of new backbone designs. Vision Transformers (ViTs) excel at capturing global context; hybrid models like NextViT balance locality and globality; and emerging state-space models (SSMs) rooted in the Mamba architecture promise efficient long-range dependency modeling with linear computational complexity. A principled comparison of these backbones within a unified detector framework is therefore valuable.</p>\r
      <p>This work provides exactly that: a rigorous architectural analysis of 7 backbones × 5 YOLO scales, examining the theoretical computational and parametric implications of each before any expensive training runs are committed.</p>\r
    </div>\r
\r
    <div class="article-section" id="backbones">\r
      <h2>Backbone Architectures</h2>\r
      <div style="text-align: center;">\r
        <img class="article-img" src="/assets/img/projects/dgyolo.png" alt="Directed Graph Overview of Backbones" style="max-width: 680px; display: inline-block;">\r
        <div class="img-caption">Fig. 2, Directed graph illustration of architectural relationships between studied backbones.</div>\r
      </div>\r
      <p>Each backbone was adapted to function as a drop-in replacement for the CSPDarkNet backbone by producing feature maps at the appropriate spatial scales expected by the PANet neck.</p>\r
\r
      <h3>CSPDarkNet (Baseline)</h3>\r
      <p>The default YOLOv8 backbone. Uses Cross-Stage Partial connections (CSP) to improve gradient flow and reduce redundant computation. Optimized specifically for detection by Ultralytics.</p>\r
\r
      <h3>ResNet50</h3>\r
      <p>A canonical CNN backbone with residual connections. Well-understood, widely pretrained, and highly transfer-effective. Serves as the traditional CNN comparison point in this study.</p>\r
\r
      <h3>DeiT (Data-efficient Image Transformer)</h3>\r
      <p>A pure Vision Transformer pretrained without large-scale datasets by using knowledge distillation. Captures global context via self-attention but introduces quadratic scaling in sequence length.</p>\r
\r
      <h3>NextViT</h3>\r
      <p>A hybrid architecture combining CNN local feature extraction with transformer global reasoning within a unified stage design. Targets efficient COCO-scale inference without specialized hardware operators.</p>\r
\r
      <h3>Mamba-Based Architectures (VMamba, Vision Mamba, MambaVision)</h3>\r
      <p>The three SSM-based backbones represent the frontier of sequence modeling applied to vision. All are grounded in the Mamba selective state-space model, which achieves linear computational complexity in sequence length, a crucial advantage over the quadratic scaling of attention. VMamba introduces 2D-Selective-Scan (SS2D) for efficient spatial traversal. Vision Mamba adds bidirectional SSM for improved global coverage. MambaVision combines hierarchical SSM with local attention for hybrid feature learning.</p>\r
\r
      <div class="highlight-box">\r
        <h4>Theoretical Advantage of SSMs</h4>\r
        <p>Mamba-based models model long-range dependencies with <strong>O(n)</strong> complexity vs. <strong>O(n²)</strong> for attention-based transformers. For high-resolution detection, this difference directly translates to reduced memory and faster inference, a significant practical advantage.</p>\r
      </div>\r
\r
    </div>\r
\r
    <div class="article-section" id="analysis">\r
      <h2>Comparative Analysis</h2>\r
      <p>All 35 configurations (7 backbones × 5 YOLO scales: n/s/m/l/x) were analyzed for theoretical complexity. Tables 1 and 2 summarize parameter counts and GFLOPs across scales.</p>\r
\r
      <h3>Parameters (Millions)</h3>\r
      <div class="table-responsive">\r
        <table class="table table-bordered table-striped">\r
          <thead>\r
            <tr>\r
              <th>Backbone</th>\r
              <th>YOLOv8-n</th>\r
              <th>YOLOv8-s</th>\r
              <th>YOLOv8-m</th>\r
              <th>YOLOv8-l</th>\r
              <th>YOLOv8-x</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>CSPDarkNet</td><td>3.2</td><td>11.2</td><td>25.9</td><td>43.7</td><td>68.2</td></tr>\r
            <tr><td>ResNet50</td><td>28.5</td><td>36.5</td><td>51.2</td><td>69.0</td><td>93.5</td></tr>\r
            <tr><td>DeiT</td><td>22.1</td><td>30.1</td><td>44.8</td><td>62.6</td><td>87.1</td></tr>\r
            <tr><td>NextViT</td><td>19.8</td><td>27.8</td><td>42.5</td><td>60.3</td><td>84.8</td></tr>\r
            <tr><td>VMamba</td><td>31.2</td><td>39.2</td><td>53.9</td><td>71.7</td><td>96.2</td></tr>\r
            <tr><td>Vision Mamba</td><td>26.8</td><td>34.8</td><td>49.5</td><td>67.3</td><td>91.8</td></tr>\r
            <tr><td>MambaVision</td><td>29.4</td><td>37.4</td><td>52.1</td><td>69.9</td><td>94.4</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 1, Parameter counts (in millions) for all backbone × scale combinations. CSPDarkNet remains the most parameter-efficient default.</div>\r
\r
      <h3>GFLOPs at 640×640 Input</h3>\r
      <div class="table-responsive">\r
        <table class="table table-bordered table-striped">\r
          <thead>\r
            <tr>\r
              <th>Backbone</th>\r
              <th>YOLOv8-n</th>\r
              <th>YOLOv8-s</th>\r
              <th>YOLOv8-m</th>\r
              <th>YOLOv8-l</th>\r
              <th>YOLOv8-x</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>CSPDarkNet</td><td>8.7</td><td>28.6</td><td>78.9</td><td>165.2</td><td>257.8</td></tr>\r
            <tr><td>ResNet50</td><td>18.9</td><td>38.8</td><td>89.1</td><td>175.4</td><td>268.0</td></tr>\r
            <tr><td>DeiT</td><td>21.4</td><td>41.3</td><td>91.6</td><td>177.9</td><td>270.5</td></tr>\r
            <tr><td>NextViT</td><td>16.2</td><td>36.1</td><td>86.4</td><td>172.7</td><td>265.3</td></tr>\r
            <tr><td>VMamba</td><td>24.1</td><td>44.0</td><td>94.3</td><td>180.6</td><td>273.2</td></tr>\r
            <tr><td>Vision Mamba</td><td>19.7</td><td>39.6</td><td>89.9</td><td>176.2</td><td>268.8</td></tr>\r
            <tr><td>MambaVision</td><td>22.3</td><td>42.2</td><td>92.5</td><td>178.8</td><td>271.4</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 2, GFLOPs at 640×640 resolution. NextViT offers the best compute-efficiency among non-default backbones.</div>\r
    </div>\r
\r
    <div class="article-section" id="discussion">\r
      <h2>Discussion</h2>\r
      <p>CSPDarkNet's dominant efficiency across all scales, fewest parameters at every size, confirms why it remains the standard. Its design was explicitly optimized for detection workflows, and no studied backbone matches its parametric efficiency at the nano and small scales.</p>\r
      <p>Among alternatives, <strong>NextViT</strong> presents the most favorable trade-off for practitioners unable to use CSPDarkNet: it provides hybrid local-global feature extraction at a lower GFLOP cost than transformer-only (DeiT) or SSM-based alternatives. It is the recommended replacement when transfer learning to specialized domains.</p>\r
      <p>The SSM-based backbones (VMamba, Vision Mamba, MambaVision) introduce the highest parameter overhead in this configuration. While their linear attention scaling is theoretically compelling at very high resolutions, the overhead is not justified at standard 640×640 YOLOv8 scales. Their advantage would materialize more clearly at image sizes above 1280×1280.</p>\r
      <p>Critically, this work is a theoretical and architectural study, no training was conducted. Observed FLOP/parameter trade-offs are a necessary but not sufficient predictor of final mAP. Future empirical validation on COCO17 and domain-specific datasets remains necessary to confirm these findings.</p>\r
    </div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion</h2>\r
      <p>This study provides a comprehensive theoretical map of the YOLOv8 backbone design space in 2024. With 35 analyzed configurations, it establishes clear quantitative trade-offs in parameters and GFLOPs across the full YOLO scale spectrum. CSPDarkNet retains its efficiency crown, NextViT is the best non-default alternative at standard scales, and the Mamba-family backbones offer the most theoretical promise at ultra-high-resolution inputs. The framework developed here provides practitioners with a principled, low-cost method for backbone selection before committing to expensive training runs.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <div>\r
        <a class="resource-btn filled" href="https://github.com/Nikhil-Rao20/YOLOv8_Backbones" target="_blank"><i class="fab fa-github"></i> Source Code</a>\r
      </div>\r
    </div>\r
\r
    <div class="references-section" id="references">\r
      <h2>References</h2>\r
      <ol>\r
        <li>Redmon, J., et al. (2016). You Only Look Once: Unified, Real-Time Object Detection. <em>CVPR</em>.</li>\r
        <li>Jocher, G., et al. (2023). Ultralytics YOLOv8. <em>GitHub</em>. <a href="https://github.com/ultralytics/ultralytics" target="_blank">ultralytics/ultralytics</a></li>\r
        <li>He, K., Zhang, X., Ren, S., &amp; Sun, J. (2016). Deep Residual Learning for Image Recognition. <em>CVPR</em>.</li>\r
        <li>Touvron, H., et al. (2021). Training data-efficient image transformers &amp; distillation through attention. <em>ICML</em>.</li>\r
        <li>Rao, Y., et al. (2022). DynamicViT: Efficient Vision Transformers with Dynamic Token Sparsification. <em>NeurIPS</em>.</li>\r
        <li>Li, Y., et al. (2022). Next-ViT: Next Generation Vision Transformer for Efficient Deployment. <em>arXiv:2207.05501</em>.</li>\r
        <li>Gu, A., &amp; Dao, T. (2023). Mamba: Linear-Time Sequence Modeling with Selective State Spaces. <em>arXiv:2312.00752</em>.</li>\r
        <li>Dosovitskiy, A., et al. (2020). An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale. <em>ICLR 2021</em>.</li>\r
        <li>Shi, Y., et al. (2024). VMamba: Visual State Space Model. <em>arXiv:2401.13260</em>.</li>\r
        <li>Zhu, L., et al. (2024). Vision Mamba: Efficient Visual Representation Learning with Bidirectional State Space Model. <em>arXiv:2401.13460</em>.</li>\r
        <li>Hatamizadeh, A., &amp; Kautz, J. (2024). MambaVision: A Hybrid Mamba-Transformer Vision Backbone. <em>arXiv:2407.08083</em>.</li>\r
      </ol>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong>,\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body {\r
      background: #ffffff;\r
      font-family: "Open Sans", Arial, sans-serif;\r
      font-size: 15.5px;\r
      line-height: 1.75;\r
      color: #333;\r
    }\r
    .article-hero {\r
      background: #ffffff;\r
      border-bottom: 1px solid #e5e8ed;\r
      padding: 48px 20px 36px;\r
      text-align: center;\r
      position: relative;\r
    }\r
    .hero-title {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 3rem;\r
      font-weight: 700;\r
      color: #20364c;\r
      line-height: 1.22;\r
      margin: 0 auto 18px;\r
      max-width: 860px;\r
    }\r
    .hero-authors {\r
      font-family: "Open Sans", sans-serif;\r
      font-size: 1.45rem;\r
      color: #333;\r
      margin-bottom: 6px;\r
    }\r
    .hero-authors a { color: #1585cf; text-decoration: none; font-weight: 600; border-bottom: 1px dashed transparent; transition: border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color: #1585cf; }\r
    .hero-meta {\r
      font-size: 1.25rem;\r
      color: slategray;\r
      font-family: "Open Sans", sans-serif;\r
      margin-bottom: 28px;\r
    }\r
    .hero-links {\r
      display: flex;\r
      flex-wrap: wrap;\r
      justify-content: center;\r
      gap: 10px;\r
      margin-top: 8px;\r
    }\r
    .hero-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 7px;\r
      padding: 8px 20px;\r
      border-radius: 6px;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      font-weight: 600;\r
      text-decoration: none;\r
      border: 2px solid #20364c;\r
      color: #20364c;\r
      background: #ffffff;\r
      transition: all 0.2s ease;\r
    }\r
    .hero-btn:hover { background: #20364c; color: #ffffff; text-decoration: none; }\r
    .hero-btn.primary { background: #20364c; color: #ffffff; }\r
    .hero-btn.primary:hover { background: #1585cf; border-color: #1585cf; }\r
    .article-body {\r
      max-width: 860px;\r
      margin: 0 auto;\r
      padding: 48px 20px 72px;\r
    }\r
    .article-body h2 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.9rem;\r
      font-weight: 600;\r
      color: #20364c;\r
      margin-top: 0;\r
      margin-bottom: 16px !important;\r
      padding-bottom: 8px;\r
      border-bottom: 2px solid slategray;\r
    }\r
    .article-body h3 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.55rem;\r
      font-weight: 600;\r
      color: #3d5166;\r
      margin-top: 30px;\r
      margin-bottom: 10px !important;\r
    }\r
    .article-body h3::after { display: none !important; content: none !important; }\r
    .article-body h3 span { background: transparent; padding-right: 0; }\r
    .article-body h4 {\r
      font-family: "Montserrat", Helvetica, sans-serif;\r
      font-size: 1.35rem;\r
      font-weight: 600;\r
      color: slategray;\r
      margin-top: 22px;\r
      margin-bottom: 8px !important;\r
      text-transform: uppercase;\r
      letter-spacing: 0.04em;\r
    }\r
    .article-section { margin-bottom: 52px; }\r
    .abstract-box {\r
      background: #f4f7fb;\r
      border-left: 4px solid #20364c;\r
      padding: 22px 26px;\r
      border-radius: 0 8px 8px 0;\r
    }\r
    .abstract-box p { margin-bottom: 0; font-size: 1.45rem; color: #2c3e50; line-height: 1.8; }\r
    .tag-list {\r
      display: flex;\r
      flex-wrap: wrap;\r
      gap: 8px;\r
      margin-bottom: 36px;\r
    }\r
    .tag {\r
      background: #eaf4fb;\r
      color: #1585cf;\r
      border: 1px solid #b8ddf5;\r
      padding: 4px 14px;\r
      border-radius: 20px;\r
      font-size: 1.2rem;\r
      font-weight: 500;\r
      font-family: "Montserrat", sans-serif;\r
    }\r
    .article-img {\r
      width: 100%;\r
      border-radius: 8px;\r
      margin: 20px 0 6px;\r
      box-shadow: 0 2px 12px rgba(0,0,0,0.09);\r
    }\r
    .img-caption {\r
      text-align: center;\r
      font-style: italic;\r
      color: slategray;\r
      font-size: 1.3rem;\r
      margin-bottom: 20px;\r
    }\r
    .highlight-box {\r
      background: #f4f7fb;\r
      border-left: 4px solid #1585cf;\r
      padding: 18px 22px;\r
      border-radius: 0 8px 8px 0;\r
      margin: 22px 0;\r
    }\r
    .highlight-box h4 { color: #20364c; text-transform: none; letter-spacing: 0; font-size: 1.4rem; margin-top: 0; }\r
    .article-body .table thead tr th {\r
      background: #ffffff;\r
      color: #20364c;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      border-bottom: 2px solid #20364c;\r
    }\r
    .article-body .table tbody tr td { font-size: 1.3rem; vertical-align: middle; }\r
    .article-body .table tbody tr td:first-child { font-weight: 600; }\r
    .hero-back-link {\r
      position: absolute;\r
      top: 18px;\r
      left: 20px;\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 6px;\r
      font-size: 1.3rem;\r
      color: #1585cf;\r
      font-family: "Montserrat", sans-serif;\r
      font-weight: 500;\r
      text-decoration: none;\r
      transition: color 0.2s;\r
    }\r
    .hero-back-link:hover { color: #20364c; text-decoration: none; }\r
    .resource-btn {\r
      display: inline-flex;\r
      align-items: center;\r
      gap: 7px;\r
      padding: 9px 22px;\r
      border-radius: 6px;\r
      font-family: "Montserrat", sans-serif;\r
      font-size: 1.3rem;\r
      font-weight: 600;\r
      text-decoration: none;\r
      border: 2px solid #20364c;\r
      color: #20364c;\r
      background: #ffffff;\r
      transition: all 0.2s ease;\r
      margin-right: 8px;\r
      margin-top: 10px;\r
    }\r
    .resource-btn:hover { background: #20364c; color: #fff; text-decoration: none; }\r
    .resource-btn.filled { background: #20364c; color: #fff; }\r
    .resource-btn.filled:hover { background: #1585cf; border-color: #1585cf; }\r
    .references-section {\r
      background: #f4f7fb;\r
      padding: 26px 24px;\r
      border-left: 5px solid #20364c;\r
      border-radius: 0 8px 8px 0;\r
      margin: 40px 0;\r
      overflow-wrap: break-word;\r
      word-break: break-word;\r
    }\r
    .references-section h2 { border-bottom: none; font-size: 1.7rem; padding-bottom: 0; margin-bottom: 16px !important; }\r
    .references-section ol { padding-left: 20px; }\r
    .references-section ol li { font-size: 1.25rem; line-height: 1.65; color: #3d4147; margin-bottom: 10px; }\r
    .references-section ol li a { color: #1585cf; }\r
    .section-sep { text-align: center; margin: 48px 0 36px; color: #c8d3de; letter-spacing: 0.5em; font-size: 1.1rem; }\r
\r
    @media (max-width: 767px) {\r
      .hero-back-link { position: static; display: inline-flex; margin-bottom: 16px; }\r
      .hero-title { font-size: 2.2rem; }\r
      .article-body h2 { font-size: 1.65rem; }\r
      .article-body h3 { font-size: 1.4rem; }\r
      .hero-btn { font-size: 1.2rem; padding: 7px 15px; }\r
      .article-body { padding: 32px 15px 60px; }\r
    }\r
    @media (max-width: 480px) { .hero-title { font-size: 1.85rem; } }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/multitask_echo.html`,title:`3D Left Ventricular Analysis | Nikhileswara Rao Sulake`,description:`A multi-task echocardiography analysis project by Nikhileswara Rao Sulake covering left ventricle segmentation, ejection fraction estimation, and cardiac timing support.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">A Two-Phase Framework for 3D Left Ventricular Analysis: From Synthetic Data Generation to Real-World Clinical Validation</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Research Article &nbsp;·&nbsp; May 2025</p>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">Echocardiography</span>\r
      <span class="tag">Left Ventricular Segmentation</span>\r
      <span class="tag">Ejection Fraction</span>\r
      <span class="tag">Synthetic Volume Generation</span>\r
      <span class="tag">3D Multitask Learning</span>\r
      <span class="tag">EchoNet-Dynamic</span>\r
      <span class="tag">MITEA Dataset</span>\r
      <span class="tag">Umbra UNet</span>\r
      <span class="tag">Domain Generalization</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>Automated analysis of the left ventricle (LV) from echocardiography, encompassing both segmentation and ejection fraction (EF) estimation, is a clinically important but technically challenging problem. This work presents a two-phase research program exploring the potential and limits of synthetic 3D data generation for multitask volumetric cardiac learning. In <strong>Phase One</strong>, a framework is proposed for joint 3D LV segmentation and EF estimation by leveraging synthetic volumetric data generated from an ensemble of fourteen diverse 2D segmentation models trained exclusively on end-diastolic (ED) and end-systolic (ES) frame annotations from the EchoNet-Dynamic dataset. A lightweight 3D multitask network with a shared encoder achieved a maximum Dice score of <strong>0.9701</strong> and a minimum EF MSE of <strong>163.9</strong>, with only <strong>1,183,682 parameters</strong> and a model size of <strong>4.73 MB</strong>, orders of magnitude more compact than DeepLabResNet101 (233 MB) or ViT-L-16 (1183 MB). In <strong>Phase Two</strong>, these results are critically re-examined through controlled experiments anchored to real ground truth. The 3D model evaluated on real 2D ground-truth masks achieves a Dice of only <strong>0.6782</strong>, substantially below 2D baselines (up to 0.8932), exposing a fundamental performance ceiling imposed by synthetic label training. Further experiments on the real-world 3D MITEA dataset confirm that complex models overfit on limited 3D clinical data, with the standard 3D UNet achieving the best test MSE of <strong>85.77</strong> at test Dice of <strong>0.8464</strong>.</p>\r
      </div>\r
    </div>\r
\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <p>The left ventricular ejection fraction (LVEF) is one of the most clinically consequential parameters in cardiology, used to diagnose heart failure, guide therapy, and stratify long-term patient risk. LVEF is defined as the ratio of stroke volume to end-diastolic volume, a quantity that fundamentally requires accurate LV segmentation across the cardiac cycle. Despite decades of research, automated and reliable computation of LVEF from echocardiographic video remains an open challenge due to the low signal-to-noise ratio of ultrasound images, significant inter-patient anatomical variability, and the inherent difficulty of constructing volumetric representations from 2D imaging data.</p>\r
      <p>Modern deep learning has substantially advanced both segmentation and regression in isolation. Fully convolutional networks, attention-based U-Nets, and Vision Transformers have brought 2D segmentation Dice scores above 0.93 on well-annotated datasets such as EchoNet-Dynamic. Concurrently, end-to-end video regression models have reduced EF mean absolute error (MAE) to below 4%. However, the integration of precise <em>volumetric</em> segmentation with functional regression in a unified 3D framework, and rigorous evaluation against ground-truth baselines, remains comparatively underexplored.</p>\r
      <p>A core practical barrier is the scarcity of 3D echocardiographic annotations. While datasets such as EchoNet-Dynamic provide 2D apical four-chamber video with sparse ED/ES masks, fully annotated 3D volumetric data is far rarer and more costly to acquire. One natural strategy is to use trained 2D models to generate dense <em>synthetic</em> 3D supervision by predicting masks for every frame and stacking them temporally. However, the faithfulness of such synthetic labels relative to true clinical annotations, and the degree to which a 3D model trained on them can generalize, are empirical questions that prior literature has not directly addressed.</p>\r
      <p>This paper presents a rigorous two-phase investigation of this strategy. <strong>Phase One</strong> develops and evaluates a lightweight 3D multitask framework trained entirely on synthetic volumes derived from an ensemble of fourteen 2D segmentation architectures, demonstrating high performance on within-distribution (synthetic) evaluation. <strong>Phase Two</strong> then systematically interrogates the validity and limits of those results through three controlled experiments: (1) full test-set evaluation of all 2D generators against real ground-truth labels; (2) direct evaluation of the 3D model on real 2D ground-truth masks to enable an unbiased comparison; and (3) experiments on the genuine 3D MITEA dataset to assess how well various architectures generalize when trained on authentic volumetric annotations.</p>\r
\r
      <div class="highlight-box">\r
        <h4>Main Contributions</h4>\r
        <ul style="margin-bottom:0;font-size:1.38rem;line-height:1.75;">\r
          <li>A comprehensive benchmark of <strong>fourteen 2D segmentation models</strong> on EchoNet-Dynamic, covering U-Net variants, FCN backbones, DeepLabV3+ configurations, and Vision Transformers.</li>\r
          <li>A <strong>lightweight 3D multitask architecture</strong> (1.18M parameters, 4.73 MB) substantially more compact and faster than all 2D counterparts.</li>\r
          <li>Methodologically rigorous Phase Two establishing: the 3D model's Phase One accuracy is bounded by synthetic label quality; on real ground truth the 3D model (Dice 0.6782) is outperformed by leading 2D models (Dice up to 0.8932); on the real 3D MITEA dataset, model complexity must be carefully controlled to avoid overfitting.</li>\r
          <li><strong>Umbra UNet</strong>, a novel hybrid 3D encoder-decoder integrating InceptionNeXt, FasterNet, and ConvNeXtV2 blocks, evaluated for the first time on 3D echocardiographic LV segmentation.</li>\r
          <li>Clear articulation of the synthetic-to-real domain gap and the conflation problem of jointly learning segmentation alongside a derived metric (EF).</li>\r
        </ul>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="related-work">\r
      <h2>Related Work</h2>\r
      <p>Automated LV segmentation and EF estimation from echocardiography has evolved rapidly. Early probabilistic approaches such as dual-view Bayesian fusion achieved EF MAE of 3.9% and established the clinical value of uncertainty-aware predictions. Video-based deep learning with Vision Transformers and lightweight 3D CNNs achieved MAE around 5–6% for EF regression but produced no segmentation output, limiting interpretability.</p>\r
      <p>On the multitask front, dual-encoder U-Nets fusing orthogonal apical views improved spatial context, while hierarchical transformer approaches achieved MAE around 4.3%. EFNet, a dual-branch CNN, achieved simultaneous LV segmentation (Dice ≈ 0.91) and EF estimation (MAE 4.5%) on 2D frames, a strong 2D multitask baseline directly motivating our unified design.</p>\r
      <p>Semi-supervised and weakly supervised methods have pushed toward minimal annotation regimes. UniLVSeg and SimLVSeg combine weak ED/ES labels with self-supervised temporal masking to propagate segmentation across the full cardiac cycle (Dice ≈ 0.91), directly inspiring our strategy of using 2D model predictions to densify sparse ED/ES annotations into full temporal volumes.</p>\r
      <p>Recent specialized architectures include dynamic-gating spatiotemporal attention reaching Dice 0.92, and fully volumetric 3D CNNs jointly learning motion fields and LV segmentation from genuine 3D echo data (Dice 0.90). On the clinical validation side, CardiacField combines 2D U-Net segmentation with a neural field regressor (Dice &gt; 0.88, EF error ~5%), while robustness studies on point-of-care ultrasound identify segmentation quality as the key limiting factor.</p>\r
      <p>Against this backdrop, our work makes two specific advances: rather than using a single 2D model to generate pseudo-labels, we systematically exploit an ensemble of fourteen heterogeneous architectures for denser synthetic supervision; and critically, we do not stop at evaluating on synthetic data, we rigorously re-evaluate on real ground truth to quantify exactly what the synthetic training ceiling costs in terms of true generalization.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="phase1-method">\r
      <h2>Phase One: Synthetic Volume Generation and 3D Multitask Learning</h2>\r
\r
      <div class="phase-card">\r
        <h4>Dataset: EchoNet-Dynamic</h4>\r
        <p>All Phase One experiments use EchoNet-Dynamic, a large-scale public echocardiography benchmark released by Stanford University comprising 10,030 apical four-chamber video clips. Each video is annotated with a single LVEF value and binary LV segmentation masks at the ED and ES frames. The official train/validation/test split (7465 / 1288 / 1277 videos) is followed. All frames are resized to 224×224 pixels and normalized to [0, 1].</p>\r
      </div>\r
\r
      <h3>Stage 1: Training the 2D Segmentation Ensemble</h3>\r
      <p>Fourteen 2D segmentation architectures are trained exclusively on ED/ES frame pairs from EchoNet-Dynamic. The ensemble spans four architectural families: the U-Net family (UNet, UNet++, R2U-Net, R2AttU-Net, Double U-Net, U²-Net, and AttU-Net); Fully Convolutional Networks (FCN-ResNet50 and FCN-ResNet101); DeepLabV3+ with three backbones (MobileNetV3-Large, ResNet50, and ResNet101); and Vision Transformer segmenters (ViT-B-16 and ViT-L-16).</p>\r
      <p>Each model minimizes a combined binary cross-entropy and Dice loss on predicted versus ground-truth binary masks. All models are optimized with Adam (learning rate 1×10⁻⁴, weight decay 1×10⁻⁵) for 100 epochs, selecting the best checkpoint by validation Dice.</p>\r
\r
      <h3>Stage 2: Synthetic 3D Volume Generation</h3>\r
      <p>Each trained 2D model is applied frame-by-frame to every training video to produce a sequence of binary masks stacked temporally into a synthetic volume. To enforce spatiotemporal continuity: morphological closing (disk kernel, radius 3) is applied slice-by-slice to fill intra-mask holes, and connected components with fewer than 50 pixels are removed as isolated artifacts. This generates fourteen distinct synthetic volume sets, one per 2D generator, each approximating the complete volumetric anatomy of the LV across the cardiac cycle from only two annotated frames.</p>\r
\r
      <h3>Stage 3: 3D Multitask Network Architecture</h3>\r
      <p>The 3D multitask network takes a full video volume as input and simultaneously predicts a binary segmentation mask volume and a scalar EF value. The architecture has three components. A <strong>shared 3D encoder</strong>, a lightweight 3D convolutional backbone inspired by ResNet50, modified for single-channel volumetric inputs, produces a hierarchy of spatiotemporal feature maps across four resolution levels via strided 3D convolutions with batch normalization and ReLU. A <strong>segmentation decoder</strong> reconstructs the full-resolution 3D mask via transposed convolutions and skip connections. An <strong>EF regression head</strong> applies global average pooling at the bottleneck followed by two fully connected layers (512→128→1) with dropout (p=0.3).</p>\r
      <p>Training minimizes a joint loss with equal weighting: the sum of binary cross-entropy and Dice loss for segmentation plus MSE for EF regression, where the segmentation target is the synthetic volume from the respective 2D generator and the EF target is the ground-truth EF from EchoNet-Dynamic.</p>\r
\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/multitask_echo.png" alt="Full methodology overview: 2D ensemble synthetic volume generation pipeline to 3D multitask network" style="max-width:780px;display:inline-block;" onerror="this.style.display='none'">\r
        <div class="img-caption">Fig. 1: Complete methodology overview — from 2D segmentation ensemble and synthetic 3D volume generation (Phase One) through real-world validation on MITEA (Phase Two).</div>\r
      </div>\r
\r
      <div class="highlight-box">\r
        <h4>Important Note on Phase One Evaluation</h4>\r
        <p>The 3D models are trained on <em>synthetic</em> volumes (pseudo-labels produced by the 2D generators) and are also <em>evaluated</em> by comparing predictions against those same synthetic volumes on the held-out test set. The Dice scores reported in Phase One therefore measure how well the 3D model reproduces the style of its specific 2D generator, they do <em>not</em> directly measure agreement with human-annotated ground truth. The rigorous ground-truth comparison is presented in Phase Two.</p>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="phase1-results">\r
      <h2>Phase One: Results and Analysis</h2>\r
\r
      <h3>Model Efficiency Comparison</h3>\r
      <p>Table 1 contextualizes the computational footprint of all models. The proposed 3D multitask model is dramatically more compact and faster than every 2D model in the ensemble, over 26× fewer parameters than the lightest 2D model (DeepLabV3+ MobileNetV3-L, 11M) and over 260× fewer than ViT-L-16. Its inference time of 0.6156 s is 3.4× faster than FCN-ResNet50 (1.87 s) and 11× faster than ViT-L-16 (6.79 s).</p>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered">\r
          <thead>\r
            <tr>\r
              <th>Model</th>\r
              <th>Parameters</th>\r
              <th>Size (MB)</th>\r
              <th>Inference (s)</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>DeepLabV3+ ResNet50</td><td>41,998,934</td><td>160.43</td><td>2.0907</td></tr>\r
            <tr><td>DeepLabV3+ ResNet101</td><td>60,991,062</td><td>233.08</td><td>3.9142</td></tr>\r
            <tr><td>DeepLabV3+ MobileNetV3-L</td><td>11,024,188</td><td>42.16</td><td>2.1450</td></tr>\r
            <tr><td>FCN-ResNet50</td><td>35,311,958</td><td>134.91</td><td>1.8698</td></tr>\r
            <tr><td>FCN-ResNet101</td><td>54,304,086</td><td>207.56</td><td>3.4331</td></tr>\r
            <tr><td>UNet</td><td>34,527,041</td><td>131.76</td><td>2.0870</td></tr>\r
            <tr><td>UNet++</td><td>36,629,633</td><td>139.79</td><td>4.4062</td></tr>\r
            <tr><td>U²-Net</td><td>44,009,869</td><td>168.00</td><td>5.4076</td></tr>\r
            <tr><td>Double UNet</td><td>29,288,886</td><td>111.76</td><td>2.8303</td></tr>\r
            <tr><td>R2U-Net</td><td>39,091,393</td><td>149.17</td><td>5.5711</td></tr>\r
            <tr><td>AttU-Net</td><td>34,878,573</td><td>133.11</td><td>2.3156</td></tr>\r
            <tr><td>R2AttU-Net</td><td>39,442,925</td><td>150.52</td><td>5.7607</td></tr>\r
            <tr><td>ViT-B-16</td><td>91,560,145</td><td>349.29</td><td>2.9406</td></tr>\r
            <tr><td>ViT-L-16</td><td>310,204,625</td><td>1183.35</td><td>6.7873</td></tr>\r
            <tr><td><strong>Proposed 3D Multitask Model</strong></td><td><strong>1,183,682</strong></td><td><strong>4.73</strong></td><td><strong>0.6156</strong></td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 1: Model parameter counts, storage sizes, and single-frame inference times.</div>\r
\r
      <h3>2D Segmentation Model Performance</h3>\r
      <p>Table 2 summarizes train and validation Dice scores for all fourteen 2D segmentation models on EchoNet-Dynamic ED/ES frames. These results establish the quality of the synthetic labels generated in Stage 2. The UNet family consistently leads in validation performance, with UNet achieving the best validation Dice (0.9272). Attention-based recurrent variants exhibit high training scores (0.98+) but show evidence of overfitting, R2AttU-Net's validation Dice drops to 0.7543. Vision Transformer models are competitive (validation ≈ 0.9069) but consistently trail the best CNNs.</p>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered">\r
          <thead>\r
            <tr><th>Model</th><th>Train Dice</th><th>Validation Dice</th></tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>DeepLabV3+ MobileNetV3-L</td><td>0.8978</td><td>0.8941</td></tr>\r
            <tr><td>DeepLabV3+ ResNet50</td><td>0.9155</td><td>0.9132</td></tr>\r
            <tr><td>DeepLabV3+ ResNet101</td><td>0.9193</td><td>0.9174</td></tr>\r
            <tr><td>FCN-ResNet50</td><td>0.9171</td><td>0.9173</td></tr>\r
            <tr><td>FCN-ResNet101</td><td>0.9193</td><td>0.9174</td></tr>\r
            <tr><td>UNet</td><td>0.9514</td><td><strong>0.9272</strong></td></tr>\r
            <tr><td>UNet++</td><td>0.9585</td><td>0.9254</td></tr>\r
            <tr><td>U²-Net</td><td>0.9329</td><td>0.9002</td></tr>\r
            <tr><td>AttU-Net</td><td>0.9841</td><td>0.9268</td></tr>\r
            <tr><td>Double UNet</td><td>0.9481</td><td>0.9216</td></tr>\r
            <tr><td>R2AttU-Net</td><td>0.9822</td><td>0.7543</td></tr>\r
            <tr><td>R2U-Net</td><td>0.9822</td><td>0.9152</td></tr>\r
            <tr><td>ViT-B-16</td><td>0.9186</td><td>0.9069</td></tr>\r
            <tr><td>ViT-L-16</td><td>0.9124</td><td>0.9055</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 2: Train and validation Dice similarity coefficients for all 2D models on EchoNet-Dynamic (ED/ES frames). Evaluated against synthetic labels.</div>\r
\r
      <h3>3D Multitask Model Performance on Synthetic Data</h3>\r
      <p>Table 3 reports test Dice scores and EF MSE for the fourteen 3D multitask models, each trained and evaluated on synthetic volumes from its respective 2D generator. FCN-ResNet50 as generator yields the highest test Dice (0.9701), while Double UNet achieves the lowest EF MSE (163.93) with a near-identical Dice (0.9698), representing the Pareto-optimal frontier. Transformer-based generators consistently produce lower Dice (≈0.946) and higher EF MSE (≈170–176), indicating ViT models trained solely on sparse ED/ES annotations do not generalize well to mid-cycle frames. Deeper CNN backbones outperform lighter counterparts in Dice, but EF error differences remain narrow (165–168 range), suggesting EF regression is relatively robust to generator choice as long as the generator is CNN-based.</p>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered">\r
          <thead>\r
            <tr><th>Synthetic Generator</th><th>Test Dice</th><th>Test EF MSE</th></tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>FCN-ResNet50</td><td><strong>0.9701</strong></td><td>165.78</td></tr>\r
            <tr><td>Double UNet</td><td>0.9698</td><td><strong>163.93</strong></td></tr>\r
            <tr><td>FCN-ResNet101</td><td>0.9692</td><td>167.83</td></tr>\r
            <tr><td>UNet</td><td>0.9672</td><td>166.36</td></tr>\r
            <tr><td>DeepLabV3+ ResNet101</td><td>0.9666</td><td>166.74</td></tr>\r
            <tr><td>AttU-Net</td><td>0.9633</td><td>168.63</td></tr>\r
            <tr><td>DeepLabV3+ ResNet50</td><td>0.9626</td><td>167.21</td></tr>\r
            <tr><td>UNet++</td><td>0.9618</td><td>167.07</td></tr>\r
            <tr><td>R2U-Net</td><td>0.9610</td><td>175.07</td></tr>\r
            <tr><td>R2AttU-Net</td><td>0.9608</td><td>169.43</td></tr>\r
            <tr><td>ViT-L-16</td><td>0.9465</td><td>176.41</td></tr>\r
            <tr><td>DeepLabV3+ MobileNetV3-L</td><td>0.9462</td><td>169.24</td></tr>\r
            <tr><td>ViT-B-16</td><td>0.9455</td><td>170.12</td></tr>\r
            <tr><td>U²-Net</td><td>0.9297</td><td>164.75</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 3: Test Dice and EF MSE for 3D multitask models. <em>Note: metrics are measured against synthetic labels, not human-annotated ground truth.</em></div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="phase2">\r
      <h2>Phase Two: Empirical Validation and Methodological Refinements</h2>\r
\r
      <h3>Experiment 1: 2D Model Test Performance on Real Ground Truth</h3>\r
      <p>Phase One reported only train and validation Dice scores. To establish a fair reference point, all fourteen 2D segmentation models were evaluated on the official EchoNet-Dynamic <em>test set</em> against human-annotated ED/ES masks. Table 4 presents the complete results.</p>\r
      <p>Several important patterns emerge. A systematic drop from validation to test Dice is observed across all models. R2AttU-Net, despite its poor validation Dice (0.7543), achieves the best test Dice (0.8932), a reversal explained by the attention-gated recurrent structure's expressive recovery beyond the specific validation split. R2U-Net closely follows at 0.8890. The U²-Net test Dice (0.7300) is notably lower than its validation score (0.9002), indicating overfitting. Vision Transformer models suffer a catastrophic drop: ViT-B-16 drops from 0.9069 to 0.5867, and ViT-L-16 from 0.9055 to 0.6422, suggesting pure transformer architectures are ill-suited for LV segmentation under the limited-label (ED/ES only) regime.</p>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered">\r
          <thead>\r
            <tr><th>Model</th><th>Train Dice</th><th>Val Dice</th><th>Test Dice</th></tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>DeepLabV3+ MobileNetV3-L</td><td>0.8978</td><td>0.8941</td><td>0.8045</td></tr>\r
            <tr><td>DeepLabV3+ ResNet50</td><td>0.9155</td><td>0.9132</td><td>0.8253</td></tr>\r
            <tr><td>DeepLabV3+ ResNet101</td><td>0.9193</td><td>0.9174</td><td>0.8624</td></tr>\r
            <tr><td>FCN-ResNet50</td><td>0.9171</td><td>0.9173</td><td>0.8514</td></tr>\r
            <tr><td>FCN-ResNet101</td><td>0.9193</td><td>0.9174</td><td>0.8624</td></tr>\r
            <tr><td>UNet</td><td>0.9514</td><td>0.9272</td><td>0.8511</td></tr>\r
            <tr><td>UNet++</td><td>0.9585</td><td>0.9254</td><td>0.8654</td></tr>\r
            <tr><td>U²-Net</td><td>0.9329</td><td>0.9002</td><td>0.7300</td></tr>\r
            <tr><td>AttU-Net</td><td>0.9841</td><td>0.9268</td><td>0.8867</td></tr>\r
            <tr><td>Double UNet</td><td>0.9481</td><td>0.9216</td><td>0.8398</td></tr>\r
            <tr><td>R2AttU-Net</td><td><strong>0.9822</strong></td><td>0.7543</td><td><strong>0.8932</strong></td></tr>\r
            <tr><td>R2U-Net</td><td>0.9822</td><td>0.9152</td><td>0.8890</td></tr>\r
            <tr><td>ViT-B-16</td><td>0.9186</td><td>0.9069</td><td>0.5867</td></tr>\r
            <tr><td>ViT-L-16</td><td>0.9124</td><td>0.9055</td><td>0.6422</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 4: Complete train/validation/test Dice scores for all 2D segmentation models evaluated against human-annotated ground-truth masks on EchoNet-Dynamic.</div>\r
\r
      <h3>Experiment 2: Fair Comparison of the 3D Model Against Real Ground Truth</h3>\r
      <p>The Phase One 3D model was assessed against <em>synthetic</em> labels it was trained to reproduce, not a fair comparison to the 2D models evaluated against human annotations. To construct a fair comparison, the best-performing 3D multitask model was evaluated on the <em>original 2D ground-truth masks</em> from EchoNet-Dynamic. Since the 3D network requires volumetric input, each 2D ground-truth mask was expanded with a singleton temporal dimension into a 1×224×224 volume; the model's predicted 3D mask was then projected back to 2D and compared using the Dice coefficient.</p>\r
\r
      <div class="highlight-box">\r
        <h4>Result: Test Dice of 0.6782 on Real Ground Truth</h4>\r
        <p>The 3D model, which appeared highly competitive in Phase One (Dice up to 0.9701), is in fact substantially <em>weaker</em> than its own generators when judged against human annotations. It falls below every CNN-based 2D model and is comparable only to the worst-performing ViT models (ViT-B-16: 0.5867, ViT-L-16: 0.6422).</p>\r
      </div>\r
\r
      <p>This result demonstrates a fundamental <strong>performance ceiling effect</strong>. The 3D model's training labels are themselves the predictions of a 2D model, predictions that contain that model's specific errors and biases. The 3D model learns to reproduce those imperfect predictions, and its accuracy is therefore bounded above by the fidelity of its synthetic labels. In practice, the 3D model performs <em>worse</em> than this bound suggests, because it additionally suffers from the domain mismatch between smooth, model-biased synthetic masks and irregular human-annotated contours.</p>\r
      <p>This finding also reveals a conceptual weakness in the joint learning objective. EF is a <em>derived</em> clinical metric computed from the volumetric ratio of end-diastolic to end-systolic LV volumes. Asking the network to simultaneously regress EF while learning segmentation from pseudo-labels creates a circular learning signal, the EF target is computed from ground-truth anatomy, but the segmentation target is synthetic and may not accurately encode that anatomy. This conflation hampers both tasks and suggests that EF should be treated as a post-processing output derived deterministically from the predicted segmentation volume, rather than as an independent regression target during training.</p>\r
\r
      <h3>Experiment 3: Transition to Real 3D Data with the MITEA Dataset</h3>\r
      <p>To entirely bypass the synthetic data bottleneck, experiments were extended to MITEA, a real-world 3D transesophageal echocardiography (3D TEE) dataset providing genuine volumetric annotations of the LV with voxel-level ground-truth segmentation and associated clinical measurements including EF.</p>\r
\r
      <h3>Umbra UNet: A Novel Hybrid 3D Architecture</h3>\r
\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/umbranet.png" alt="Umbra UNet Architecture" style="max-width:720px;display:inline-block;" onerror="this.style.display='none'">\r
        <div class="img-caption">Fig. 2: Architecture of the proposed Umbra UNet. The encoder integrates modular vision blocks (InceptionNeXt, FasterNet, ConvNeXtV2) in parallel streams, fusing local-detail and global-context features before passing them through the skip-connection decoder for volumetric mask reconstruction.</div>\r
      </div>\r
\r
      <p>Motivated by the limitations of the simple Phase One architecture, <strong>Umbra UNet</strong> is a hybrid 3D encoder-decoder integrating multiple modern lightweight vision blocks within a U-Net-style skeleton. The multi-branch parallel encoder employs three modern vision modules: <strong>InceptionNeXt blocks</strong> using decomposed depth-wise convolutions with multi-kernel branches to capture multi-scale local texture efficiently; <strong>FasterNet blocks</strong> using a partial convolution strategy that applies convolutions only to a subset of feature channels, dramatically reducing computational cost; and <strong>ConvNeXtV2 blocks</strong> with depthwise convolutions, global response normalization, and inverted bottleneck design. Features from all branches are fused via channel concatenation and a 1×1×1 projection convolution at each encoder level. A symmetric transposed-convolution decoder with skip connections reconstructs the full-resolution 3D segmentation mask, and the EF regression head remains at the bottleneck.</p>\r
\r
      <h3>Comparative Evaluation on MITEA</h3>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered">\r
          <thead>\r
            <tr><th>Model</th><th>Train Dice</th><th>Train MSE</th><th>Val Dice</th><th>Val MSE</th><th>Test Dice</th><th>Test MSE</th></tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>Proposed 3D Model (random init.)</td><td>0.8846</td><td>374.18</td><td>0.8747</td><td>81.02</td><td>0.8540</td><td>141.58</td></tr>\r
            <tr><td>Proposed 3D Model (EchoNet pretrained)</td><td>0.9085</td><td>373.41</td><td>0.9115</td><td>80.95</td><td>0.7815</td><td>120.14</td></tr>\r
            <tr><td>Umbra UNet 3D (full)</td><td>0.9387</td><td>59.33</td><td>0.9383</td><td>13.13</td><td>0.7474</td><td>283.71</td></tr>\r
            <tr><td>Umbra UNet 3D (FasterNet only)</td><td>0.9327</td><td>58.48</td><td>0.9316</td><td>13.16</td><td><strong>0.8456</strong></td><td>320.58</td></tr>\r
            <tr><td>Umbra UNet 3D (InceptionNeXt only)</td><td>0.9192</td><td>56.36</td><td>0.9219</td><td>12.87</td><td>0.8269</td><td>542.60</td></tr>\r
            <tr><td>Umbra UNet 3D (ConvNeXtV2 only)</td><td>0.9441</td><td>71.44</td><td>0.9420</td><td>15.90</td><td>0.7353</td><td>628.34</td></tr>\r
            <tr><td>3D UNet</td><td>0.9327</td><td>446.12</td><td>0.9281</td><td>96.37</td><td>0.8464</td><td><strong>85.77</strong></td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <div class="img-caption">Table 5: Performance on the MITEA real-world 3D echocardiography dataset. Best test Dice and test MSE values highlighted.</div>\r
\r
      <p><strong>Synthetic pretraining hurts generalization.</strong> The 3D model trained from random initialization achieves test Dice 0.8540, whereas the same model pretrained on EchoNet-Dynamic synthetic volumes drops to 0.7815 after fine-tuning on MITEA. The model pretrained on synthetic labels has learned features specific to the 2D-generator output style, smooth, morphologically post-processed mask boundaries, incompatible with the real 3D annotation style in MITEA. Pretraining thus serves as domain corruption rather than beneficial initialization. Interestingly, EF MSE improves slightly with pretraining (120.14 vs. 141.58), suggesting the functional regression branch transfers more readily than the segmentation branch.</p>\r
      <p><strong>Model complexity must be matched to data volume.</strong> The full Umbra UNet achieves excellent train and validation performance (Dice &gt;0.93, Val MSE ≈13) but generalizes poorly to the test set (Dice 0.7474, MSE 283.71). By contrast, simpler architectures, the standard 3D UNet and the single-block FasterNet variant, achieve considerably better test Dice (≈0.85), confirming that on limited real 3D medical data, inductive biases constraining model capacity are more valuable than raw representational power. The ConvNeXtV2-only variant, which has the highest training Dice (0.9441), generalizes the least (test Dice 0.7353).</p>\r
      <p><strong>Segmentation and EF regression are difficult to jointly optimize.</strong> The 3D UNet achieves strong test Dice (0.8464) <em>and</em> the best test MSE (85.77), suggesting its conservative capacity provides implicit regularization beneficial to both tasks. However, models that achieve the best validation EF MSE (Umbra UNet InceptionNeXt: 12.87) perform poorly on test MSE (542.60), a factor of 42, indicating severe overfitting of the regression head on the limited MITEA dataset.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="discussion">\r
      <h2>Discussion</h2>\r
      <p>The gap between a test Dice of 0.9701 (synthetic) and 0.6782 (real ground truth) for the same model is the most significant quantitative finding of this work. This gap arises from at least three sources: <strong>label noise</strong> from systematic prediction errors in mid-cycle frames far from ED/ES where generator confidence is lowest; <strong>style mismatch</strong> between smooth model-predicted boundaries and more conservative human annotations following the endocardial border; and <strong>temporal smoothing artifacts</strong> from morphological post-processing that may further deviate from annotator behavior.</p>\r
      <p>A core design issue is the joint optimization of LV segmentation and EF prediction. EF is a clinically defined quantity computed deterministically from segmentation volumes: EF = (V_ED − V_ES) / V_ED × 100%. Treating EF as an independent regression target forces the model to learn a quantity that can be exactly derived from its segmentation output, introducing gradient conflicts and diluting the segmentation-specific learning signal. Future work should either train exclusively for segmentation and compute EF analytically, or pair segmentation with a more complementary secondary task such as motion field estimation or myocardial strain quantification.</p>\r
      <p>The Umbra UNet demonstrates that hybrid multi-block encoders can achieve excellent validation performance (Dice &gt;0.93, Val MSE &lt;14), substantially better than the simple Phase One model on real 3D data. However, the full architecture overtly overfits on the MITEA dataset scale. Future deployment should incorporate stronger regularization (stochastic depth, mixup for 3D volumes, test-time augmentation) and evaluation on larger 3D clinical datasets. The FasterNet-only variant's balance of test Dice (0.8456) and structural accuracy suggests partial convolution-based feature extraction is a promising direction for data-efficient 3D echocardiographic segmentation.</p>\r
      <p>This work illustrates a pitfall not unique to echocardiography: when synthetic data generation pipelines are evaluated only within their own distribution, performance appears far better than in clinical reality. The field must be vigilant about establishing rigorous ground-truth benchmarks and reporting test performance on independent held-out splits with human annotations. The Phase Two single-frame 3D expansion protocol for fair 2D-versus-3D comparison provides a reusable methodology for future researchers.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion and Future Directions</h2>\r
      <p>This paper presented a rigorous two-phase investigation of 3D multitask learning for left ventricular segmentation and ejection fraction estimation in echocardiography. Phase One developed a compact and efficient 3D multitask network (1.18M parameters, 4.73 MB, sub-second inference) achieving Dice up to 0.9701 on synthetic evaluation data. Phase Two systematically exposed the limitations: when evaluated against real human-annotated ground truth, the model's Dice of 0.6782 falls significantly below the best 2D models (up to 0.8932), demonstrating a substantial synthetic-to-real domain gap. Further experiments on the authentic 3D MITEA dataset revealed that overly complex architectures overfit on limited clinical data, that synthetic pretraining from EchoNet actively harms MITEA generalization, and that jointly optimizing segmentation and EF regression remains challenging, with the 3D UNet emerging as the most robust baseline (test Dice 0.8464, test EF MSE 85.77).</p>\r
      <p>These findings motivate several concrete future directions: domain generalization strategies including adversarial domain adaptation or confidence-weighted label propagation; decoupled task design where EF is computed analytically from the predicted segmentation volume; 3D ultrasound-specific augmentations including acoustic shadowing simulation and synthetic cardiac motion perturbations; architecture search targeting generalization under limited 3D clinical data; and replacing EF regression with motion analysis or myocardial strain estimation as a secondary task, providing information orthogonal to the segmentation mask rather than derived from it.</p>\r
      <p>The negative results reported in this work are, in themselves, a positive scientific contribution: they clearly delineate where synthetic-data-based approaches succeed and where they fall short, providing future researchers with principled guidance for designing more clinically valid automated cardiac analysis systems.</p>\r
    </div>\r
\r
\r
  \r
\r
    <div class="references-section" id="references">\r
      <h2>References</h2>\r
      <ol>\r
        <li>Behnami, D., et al. "Dual-view joint estimation of left ventricular ejection fraction with uncertainty modelling in echocardiograms." <em>MICCAI</em>, pp. 256–264. Springer, 2019.</li>\r
        <li>Reynaud, H., et al. "Ultrasound video transformers for cardiac ejection fraction estimation." <em>MICCAI</em>, pp. 516–525. Springer, 2021.</li>\r
        <li>Tabuco, F. C. A., et al. "Two-View Left Ventricular Segmentation and Ejection Fraction Estimation in 2D Echocardiograms." <em>BMVC</em>, 2022.</li>\r
        <li>Kang, X., et al. "A light-weight deep video network: towards robust assessment of ejection fraction on mobile devices." <em>Medical Imaging 2022: Image-Guided Procedures</em>, Vol. 12034. SPIE, 2022.</li>\r
        <li>Fazry, L., et al. "Hierarchical vision transformers for cardiac ejection fraction estimation." <em>IWBIS 2022</em>. IEEE, 2022.</li>\r
        <li>Blaivas, M., and L. Blaivas. "Machine learning algorithm using publicly available echo database for simplified visual estimation of LVEF." <em>World Journal of Experimental Medicine</em> 12.2 (2022): 16–28.</li>\r
        <li>Dai, W., et al. "Cyclical self-supervision for semi-supervised ejection fraction prediction from echocardiogram videos." <em>IEEE Transactions on Medical Imaging</em> 42.5 (2022): 1446–1461.</li>\r
        <li>Maani, F. A., et al. "UniLVSeg: Unified Left Ventricular Segmentation with Sparsely Annotated Echocardiogram Videos." <em>arXiv:2304.01723</em>, 2023.</li>\r
        <li>Varalakshmi, P., et al. "Left Ventricular Ejection Fraction Estimation for Pediatric Patients using CNN." <em>ICSCAN 2023</em>. IEEE, 2023.</li>\r
        <li>Rahman, S., et al. "Deep learning-based left ventricular ejection fraction estimation from echocardiographic videos." <em>EASCT 2023</em>. IEEE, 2023.</li>\r
        <li>Muldoon, M., and N. Khan. "Lightweight and interpretable left ventricular ejection fraction estimation using mobile U-Net." <em>IEEE ISBI 2023</em>. IEEE, 2023.</li>\r
        <li>Maani, F., et al. "SimLVSeg: Simplifying left ventricular segmentation in 2-D+time echocardiograms." <em>Ultrasound in Medicine &amp; Biology</em> 50.12 (2024): 1945–1954.</li>\r
        <li>Carrera-Pinzón, A. F., et al. "Characterizing the Left Ventricular Ultrasound Dynamics in the Frequency Domain to Estimate the Cardiac Function." <em>MICCAI</em>. Springer, 2024.</li>\r
        <li>Batool, S., I. A. Taj, and M. Ghafoor. "EFNet: A multitask deep learning network for simultaneous quantification of left ventricle structure and function." <em>Physica Medica</em> 125 (2024): 104505.</li>\r
        <li>Chen, X., et al. "Research on automatic segmentation of the left ventricular echocardiogram and calculation of ejection fraction." <em>AEMCSE 2024</em>, Vol. 13229. SPIE, 2024.</li>\r
        <li>Lin, J., et al. "Dynamic-guided spatiotemporal attention for echocardiography video segmentation." <em>IEEE Transactions on Medical Imaging</em> (2024).</li>\r
        <li>Luong, C. L., et al. "Validation of machine learning models for estimation of LVEF on point-of-care ultrasound." <em>Echo Research &amp; Practice</em> 11.1 (2024): 9.</li>\r
        <li>Ta, K., et al. "Multi-task learning for motion analysis and segmentation in 3D echocardiography." <em>IEEE Transactions on Medical Imaging</em> 43.5 (2024): 2010–2020.</li>\r
        <li>Shen, C., et al. "CardiacField: computational echocardiography for automated heart function estimation." <em>European Heart Journal–Digital Health</em> 6.1 (2025): 137–146.</li>\r
        <li>Pieszko, K., et al. "Artificial intelligence to measure left atrial ejection fraction in transthoracic echocardiography videos." <em>European Heart Journal–Cardiovascular Imaging</em> 26.Supplement_1 (2025): jeae333-049.</li>\r
        <li>Ouyang, D., et al. "Video-based AI for beat-to-beat assessment of cardiac function." <em>Nature</em> 580 (2020): 252–256.</li>\r
        <li>Yu, W., et al. "InceptionNeXt: When Inception Meets ConvNeXt." <em>CVPR 2024</em>.</li>\r
        <li>Chen, J., et al. "Run, Don't Walk: Chasing Higher FLOPS for Faster Neural Networks." <em>CVPR 2023</em>.</li>\r
        <li>Woo, S., et al. "ConvNeXt V2: Co-designing and Scaling ConvNets with Masked Autoencoders." <em>CVPR 2023</em>.</li>\r
      </ol>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong>,\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;&middot;&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;&middot;&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; border-bottom:1px dashed transparent; transition:border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color:#1585cf; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:28px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#ffffff; text-decoration:none; }\r
    .hero-btn.primary { background:#20364c; color:#ffffff; }\r
    .hero-btn.primary:hover { background:#1585cf; border-color:#1585cf; }\r
    .article-body { max-width:860px; margin:0 auto; padding:48px 20px 72px; }\r
    .article-body h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .article-body h3 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.55rem; font-weight:600; color:#3d5166; margin-top:30px; margin-bottom:10px !important; }\r
    .article-body h3::after { display:none !important; content:none !important; }\r
    .article-body h3 span { background:transparent; padding-right:0; }\r
    .article-body h4 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.35rem; font-weight:600; color:slategray; margin-top:22px; margin-bottom:8px !important; text-transform:uppercase; letter-spacing:0.04em; }\r
    .article-section { margin-bottom:52px; }\r
    .abstract-box { background:#f4f7fb; border-left:4px solid #20364c; padding:22px 26px; border-radius:0 8px 8px 0; }\r
    .abstract-box p { margin-bottom:0; font-size:1.45rem; color:#2c3e50; line-height:1.8; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:36px; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .article-img { width:100%; border-radius:8px; margin:20px 0 6px; box-shadow:0 2px 12px rgba(0,0,0,0.09); }\r
    .img-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:20px; }\r
    .highlight-box { background:#f4f7fb; border-left:4px solid #1585cf; padding:18px 22px; border-radius:0 8px 8px 0; margin:22px 0; }\r
    .highlight-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; }\r
    .phase-card { border:1px solid #e0e6ef; border-left:5px solid #20364c; border-radius:0 8px 8px 0; padding:20px 24px; margin:20px 0; background:#fff; }\r
    .phase-card h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.5rem; margin-top:0; margin-bottom:10px; font-family:"Montserrat",sans-serif; }\r
    .article-body .table thead tr th { background:#ffffff; color:#20364c; font-family:"Montserrat",sans-serif; font-size:1.3rem; border-bottom:2px solid #20364c; }\r
    .article-body .table tbody tr td { font-size:1.3rem; vertical-align:middle; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .resource-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 22px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; margin-right:8px; margin-top:10px; }\r
    .resource-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .resource-btn.filled { background:#20364c; color:#fff; }\r
    .resource-btn.filled:hover { background:#1585cf; border-color:#1585cf; }\r
    .references-section { background:#f4f7fb; padding:26px 24px; border-left:5px solid #20364c; border-radius:0 8px 8px 0; margin:40px 0; overflow-wrap:break-word; word-break:break-word; }\r
    .references-section h2 { border-bottom:none; font-size:1.7rem; padding-bottom:0; margin-bottom:16px !important; }\r
    .references-section ol { padding-left:20px; }\r
    .references-section ol li { font-size:1.25rem; line-height:1.65; color:#3d4147; margin-bottom:10px; }\r
    .references-section ol li a { color:#1585cf; }\r
    .section-sep { text-align:center; margin:48px 0 36px; color:#c8d3de; letter-spacing:0.5em; font-size:1.1rem; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .article-body h2{font-size:1.65rem;} .article-body h3{font-size:1.4rem;} .hero-btn{font-size:1.2rem;padding:7px 15px;} .article-body{padding:32px 15px 60px;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/sih_drone.html`,title:`DRISTI: Disaster Response Drone | Nikhileswara Rao Sulake`,description:`DRISTI is a disaster response drone project by Nikhileswara Rao Sulake that combines aerial perception, computer vision, and intelligent decision support.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <div class="award-badge"><i class="fas fa-trophy"></i> Top 5 Finalists &middot; Smart India Hackathon 2025</div>\r
    <h1 class="hero-title">DRISTI: An Autonomous Drone System for Survivor Detection and Supply Delivery in Disaster-Affected Regions</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Technical Report &nbsp;&middot;&nbsp; Robotics &amp; Drones &nbsp;&middot;&nbsp; Smart India Hackathon 2025 &nbsp;&middot;&nbsp; PS-25047</p>\r
    <div class="hero-links">\r
      <a class="hero-btn primary" href="#" target="_blank"><i class="fab fa-github"></i> GitHub</a>\r
      <a class="hero-btn" href="#detection"><i class="fas fa-film"></i> Demo Video</a>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">Autonomous UAV</span>\r
      <span class="tag">Disaster Response</span>\r
      <span class="tag">ArduPilot</span>\r
      <span class="tag">Edge AI</span>\r
      <span class="tag">YOLO</span>\r
      <span class="tag">Raspberry Pi</span>\r
      <span class="tag">Obstacle Avoidance</span>\r
      <span class="tag">Payload Delivery</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>DRISTI is a fully autonomous, end-to-end unmanned aerial vehicle system designed for survivor detection and medical supply delivery in disaster-affected areas where ground access is unavailable. Built on the HolyBro X500 V2 quadrotor platform, it uses a Raspberry Pi companion computer running a custom-trained Leaf YOLO nano model for real-time person detection at 3&ndash;5 m operational altitude. Navigation is managed by ArduPilot, with onboard AI issuing MAVLink commands to close the loop between perception and flight control. Video is transmitted over a resilient two-tier architecture requiring no internet connectivity. The primary hardware contribution is a motorized cable-lowering delivery mechanism driven by dual DC motors and a pulley system, enabling supply deployment without altitude cycling and significantly improving battery efficiency over conventional servo-drop approaches. The complete system was selected among the Top 5 Finalists at Smart India Hackathon 2025 under Problem Statement 25047, organized by the Government of Odisha, Electronics &amp; IT Department.</p>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/Dristi/Drone.png" alt="DRISTI drone assembled" style="max-width:780px;display:inline-block;" onerror="this.style.display='none'">\r
        <div class="img-caption">Fig. 1: The assembled DRISTI drone with Raspberry Pi, 5 MP camera, and payload delivery module.</div>\r
      </div>\r
      <p>Natural disasters reliably destroy the infrastructure required to respond to them. Floods inundate roads, earthquakes collapse bridges, and cyclones knock out cellular networks. Within hours of a disaster event, isolated survivors become logistically unreachable by any ground-based system. The gap between a disaster management headquarters and a stranded individual may be short in geographic distance, yet insurmountable on the ground.</p>\r
      <p>Unmanned Aerial Vehicles (UAVs) present the natural solution to this problem. They operate above terrain obstructions, require no road infrastructure, and can navigate directly to GPS coordinates. The core engineering challenge, however, is not merely achieving flight — it is building a system that autonomously identifies survivors, navigates to their location, delivers supplies safely, and completes this entire cycle without internet connectivity or continuous human piloting intervention.</p>\r
      <p>Smart India Hackathon 2025 formalized this challenge as Problem Statement 25047 — "Disaster Response Drone for Remote Areas" — issued by the Government of Odisha, Electronics &amp; IT Department, and held at GEIT Gunupur, Odisha. The problem statement specified an operational payload capacity of 5 kg as the design target. DRISTI (Drone for Rescue, Intelligence, Supply and Terrain Inspection) is the team's response: a complete autonomous system designed, assembled, calibrated, and field-tested from individual hardware components, integrating open-source flight control, edge AI inference, and a novel mechanical delivery mechanism.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="hardware">\r
      <h2>Hardware Architecture</h2>\r
      <p>The drone was assembled entirely from individual components — no commercially pre-integrated UAV was procured. Every element was selected, assembled, and calibrated by the team. The mechanical platform is the HolyBro X500 V2 development kit, a 500 mm wheelbase quadrotor frame designed for research and development applications. The kit provides a complete propulsion stack: 2216 920KV brushless DC motors, 1045 carbon-fiber propellers, and 20A SimonK-firmware ESCs. The F9 power distribution board consolidates battery input and routes power cleanly to motors, flight controller, and companion computer. The platform is rated for a maximum take-off weight of approximately 2 kg on the standard 4S LiPo configuration, with a hover endurance of roughly 25 minutes unloaded and around 15–18 minutes at modest payload. Stable flight was demonstrated with approximately 1 kg of total onboard payload during the hackathon evaluation, below but progressing toward the 5 kg capacity specified in PS-25047, which would require an upgraded 6S propulsion stack.</p>\r
      <p>Position and navigation are handled by an M8N GPS module with integrated compass, which tracks across GPS, GLONASS, and Galileo constellations and achieves sub-2 m accuracy in open-sky conditions. Flight control runs on ArduPilot, the most widely deployed open-source autopilot firmware in UAV research. ArduPilot manages low-level PID control loops, sensor fusion across IMU, barometer, GPS and compass, motor mixing, and failsafe logic. All calibration and mission planning was performed in Mission Planner, the ArduPilot ground control station. AUTO mode executes pre-programmed GPS waypoint sequences; GUIDED mode accepts real-time position setpoints from the companion computer via MAVLink for dynamic target approach during delivery. A Flysky FS-i6 6-channel 2.4 GHz transmitter paired with an FS-iA6B receiver provides manual override capability and serves as a safety intervention mechanism in the field.</p>\r
      <p>A Raspberry Pi single-board computer is mounted onboard and communicates with the flight controller over the MAVLink serial protocol. This bidirectional link allows the companion computer to read flight telemetry and issue navigation commands, making the drone fully self-contained with no tethered laptop or cloud dependency. The vision system is a 5 megapixel CSI camera module mounted at a deliberate 45° downward-forward angle. This orientation simultaneously covers the ground surface below for survivor detection and the immediate forward airspace for obstacle detection within a single image frame, eliminating the need for a multi-camera setup while keeping system mass low.</p>\r
\r
      <div style="display:flex;gap:16px;align-items:flex-start;justify-content:center;flex-wrap:wrap;margin:20px 0 6px;">\r
        <div style="flex:1;min-width:180px;max-width:300px;text-align:center;">\r
          <img class="article-img" src="/assets/img/projects/Dristi/Drone_Flying.gif" alt="DRISTI drone in flight" style="width:100%;height:380px;object-fit:cover;margin:0;" onerror="this.style.display='none'">\r
        </div>\r
        <div style="flex:1;min-width:240px;max-width:460px;text-align:center;">\r
          <img class="article-img" src="/assets/img/projects/Dristi/Drone_Closeup.png" alt="DRISTI drone close-up" style="width:100%;height:380px;object-fit:cover;margin:0;" onerror="this.style.display='none'">\r
        </div>\r
      </div>\r
      <div class="img-caption">Fig. 2: DRISTI in autonomous flight (left) and close-up of the assembled hardware (right), during field evaluation at GEIT Gunupur.</div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="detection">\r
      <h2>On-Device Person Detection</h2>\r
      <p>Person detection is performed by Leaf YOLO, a lightweight variant of the YOLO (You Only Look Once) single-shot object detection family. YOLO processes the complete image in a single forward pass and directly regresses bounding box coordinates and class probabilities, making it substantially faster than two-stage detectors while maintaining competitive accuracy at small model sizes. The nano configuration was selected specifically for its minimal parameter count and memory footprint, enabling real-time inference at approximately <strong>15 frames per second</strong> on the Raspberry Pi's ARM processor without GPU acceleration — a non-negotiable constraint given that the companion computer must simultaneously sustain video capture, AI inference, MAVLink telemetry, and delivery actuation on a power-limited embedded platform.</p>\r
\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/Dristi/Drone_Analysis_Video.gif" alt="Leaf YOLO detection at operational altitude" style="max-width:720px;display:inline-block;" onerror="this.style.display='none'">\r
        <div class="img-caption">Fig. 3: Leaf YOLO nano inference on the live drone camera feed at 3&ndash;5 m operational altitude.</div>\r
      </div>\r
\r
      <p>Standard person detection benchmarks like COCO and PASCAL VOC are compiled from ground-level photography, typically shot from 1–2 m above the subject. A UAV operating at 3–5 m altitude produces a top-down to oblique perspective that differs considerably: head-to-shoulder aspect ratios are compressed, limbs are foreshortened, and lighting geometry diverges from ground-level norms. A model trained exclusively on such data generalizes poorly under aerial viewpoints.</p>\r
      <p>To address this domain mismatch, a custom aerial dataset was collected at the hackathon venue by flying the drone at operational altitudes while participants moved across the capture area in various poses and orientations. The dataset comprises approximately 1,000 images, each containing between 10 and 12 annotated person instances — a dense annotation setup well-suited for the crowded survivor scenarios the system targets. Initial bounding box annotations were generated using SAM (Segment Anything Model) for rapid segmentation coverage, then manually reviewed and corrected to ensure label quality. The dataset is not publicly available due to intellectual property restrictions imposed by the hackathon organizers. Fine-tuning was performed on a GPU-equipped development laptop, and the trained weights were transferred to the Raspberry Pi for onboard deployment. All inference executes entirely on the Raspberry Pi — detection outputs are consumed internally by the navigation controller and transmitted externally only as bounding box overlays on the video stream to the ground operator.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="transmission">\r
      <h2>Video Transmission</h2>\r
      <p>Disaster environments are characterized by the degradation or complete absence of communication infrastructure. A system dependent on internet connectivity for its video feed is unreliable in the very conditions it is designed for. DRISTI implements a two-tier transmission architecture that maintains operator situational awareness under both connected and fully disconnected conditions.</p>\r
\r
      <div class="pipeline-step">\r
        <div class="step-num">Tier 1</div>\r
        <h4>Wi-Fi Transmission</h4>\r
        <p>When a Wi-Fi access point is reachable — such as a portable router at a mobile command post — the Raspberry Pi streams the live annotated camera feed over standard Wi-Fi to the ground station terminal. The operator receives real-time video with YOLO bounding box overlays and delivery status indicators.</p>\r
      </div>\r
\r
      <div class="pipeline-step">\r
        <div class="step-num">Tier 2</div>\r
        <h4>Local RF Network</h4>\r
        <p>When Wi-Fi is unavailable, the system falls back to a direct point-to-point RF link between the drone and the ground laptop on a dedicated RF channel. This network is fully internet-independent and requires no external infrastructure. Video is streamed at reduced but operationally sufficient bandwidth, preserving operator awareness in completely disconnected environments.</p>\r
      </div>\r
\r
      <p>Crucially, all AI processing and autonomous navigation execute onboard regardless of which transmission tier is active. The mission — detecting survivors and delivering supplies — proceeds without any internet connectivity requirement.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="navigation">\r
      <h2>Autonomous Navigation and Obstacle Avoidance</h2>\r
      <p>The survey mission follows a lawnmower pattern programmed as an ArduPilot waypoint sequence in Mission Planner. Parallel horizontal tracks are spaced so that the camera's field of view at operational altitude provides complete, overlapping ground coverage of the target search area. On a high-confidence person detection event, the companion computer issues a MAVLink GUIDED mode command directing the drone toward the GPS coordinates of the detected individual, transitioning from survey to delivery mode.</p>\r
\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/Dristi/flowchart.png" alt="DRISTI area coverage sweep and target approach" style="max-width:720px;display:inline-block;" onerror="this.style.display='none'">\r
        <div class="img-caption">Fig. 4: Area coverage sweep and autonomous transition to a detected survivor's location.</div>\r
      </div>\r
\r
      <p>Obstacle avoidance operates using the same 45° camera that drives person detection, with no additional sensors required. The avoidance logic analyzes the bounding box position of any detected obstacle relative to the image center. If the box appears high and centered in the frame, the obstacle is directly ahead and proximate — the drone reduces forward velocity and incrementally gains altitude. If the box is laterally displaced, the drone steers in the opposite direction to route around the obstruction. Once the obstacle clears the central image zone, forward navigation resumes at normal speed. This approach requires no ultrasonic rangefinders, infrared sensors, or LiDAR, keeping the hardware configuration minimal and system mass low.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="payload">\r
      <h2>Payload Delivery System</h2>\r
      <p>The most common delivery strategy in UAV demonstrations is a servo-actuated drop: the drone descends to near-ground altitude, releases a latch, and the package falls. This approach has real drawbacks in disaster relief. Repeated descent-and-ascent cycles consume significant battery energy, reducing the number of deliveries possible per charge. Flying close to the ground in debris-laden post-disaster environments substantially increases collision risk. And free-releasing fragile medical supplies risks damage on impact.</p>\r
      <p>DRISTI's delivery system avoids all three problems. The drone does not descend during deployment. Instead, it maintains stable hover at operational altitude and lowers the supply package on a controlled cable, operating like an aerial crane. This is achieved through a dual DC motor and pulley assembly mounted to the airframe.</p>\r
\r
      <div class="method-box">\r
        <h4>Dual DC Motor Pulley Assembly</h4>\r
        <p>Two DC motors drive a common cable spool. Running the motors forward pays out cable at a controlled rate, lowering the attached supply package. Slack detection — monitored via motor current draw — signals that the package has reached the ground. The survivor unties the slip-knot attachment and collects the supplies. The motors then reverse automatically, retracting the cable fully before the drone resumes its mission.</p>\r
      </div>\r
\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/Dristi/Drone_Payload.png" alt="DRISTI cable-lowering delivery in operation" style="max-width:420px;display:inline-block;" onerror="this.style.display='none'">\r
        <div class="img-caption">Fig. 5: The dual DC motor cable-lowering assembly. The drone maintains altitude throughout the complete delivery cycle.</div>\r
      </div>\r
\r
      <p>The battery efficiency benefit is significant. In a conventional drone, the energy cost of each delivery cycle is dominated by altitude change — potential energy expenditure scales with vehicle mass and altitude delta. By maintaining a fixed hover altitude, DRISTI eliminates this cost entirely. The payload moves through mechanical motor work on the cable spool, which is far more efficient than lifting the full airframe up and down for every delivery. In multi-survivor scenarios, this translates directly into more successful deliveries per charge.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="challenges">\r
      <h2>Implementation Challenges</h2>\r
      <p>Building a fully integrated autonomous system under hackathon time constraints surfaced several non-trivial engineering problems across both software and hardware.</p>\r
\r
      <p>The most significant software debugging effort involved a compatibility conflict between Leaf YOLO and the Ultralytics library. Leaf YOLO's model loader uses an <code>attempt_load()</code> function that is incompatible with the standard Ultralytics YOLO model loading path. Attempting to initialize both within the same Python environment caused silent failures and incorrect model initialization. The fix was to isolate the two import paths entirely — Leaf YOLO and Ultralytics were loaded through separate module scopes, preventing namespace collision and ensuring each model initialized against its own correct backend.</p>\r
\r
      <p>A second problem was unexpectedly low CPU utilization on the Raspberry Pi, measured at around 30% despite the volume of concurrent tasks the companion computer was responsible for. The root cause was a serial pipeline architecture where inference, video capture, MAVLink communication, and delivery actuation were being serviced sequentially, each blocking on the previous. Restructuring the entire software stack around a concurrent pipeline — with each subsystem running in its own thread and communicating through shared queues — brought utilization to levels commensurate with the workload and eliminated the latency accumulating at pipeline boundaries.</p>\r
\r
      <p>Related to this was the overhead of coordinating multiple Python processes. Running each subsystem as a separate script introduced significant inter-process communication cost. The solution was a unified Flask server hosting all subsystems — inference, MAVLink telemetry, video streaming, and delivery control — within a single process, with Python threading managing internal concurrency. This reduced the deployment to a single startup command and removed the IPC layer entirely.</p>\r
\r
      <p>On the hardware side, a persistent issue was a camera ribbon cable dequeue timeout: under flight vibration, the CSI ribbon connector would intermittently lose contact and stall the capture pipeline. This was resolved through careful cable routing and mechanically securing the connector against vibration-induced loosening. Beyond the camera, hardware integration involved rounds of ESC and motor calibration, resolving MAVLink wiring conflicts, correcting propeller synchronization, and managing the attitude disturbances introduced by the hanging cable payload during hover — each requiring iterative field testing to characterize and correct.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="results">\r
      <h2>System Performance and Evaluation</h2>\r
\r
      <p>All development and evaluation was conducted under the time and resource constraints of the Smart India Hackathon 2025 finals. The table below summarizes validated performance characteristics as demonstrated at the event.</p>\r
\r
      <div class="table-responsive">\r
        <table class="table table-bordered">\r
          <thead>\r
            <tr>\r
              <th>System Attribute</th>\r
              <th>Demonstrated Performance</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr><td>Flight platform</td><td>HolyBro X500 V2, ArduPilot, Flysky FS-i6</td></tr>\r
            <tr><td>Demonstrated payload mass</td><td>400 g (Raspberry Pi + camera + delivery module)</td></tr>\r
            <tr><td>Person detection altitude</td><td>3&ndash;5 m with consistent bounding box localization</td></tr>\r
            <tr><td>Detection model</td><td>Leaf YOLO Nano, custom fine-tuned, deployed on Raspberry Pi</td></tr>\r
            <tr><td>Onboard inference speed</td><td>~15 FPS on Raspberry Pi ARM (no GPU)</td></tr>\r
            <tr><td>Training dataset</td><td>~1,000 aerial images, 10&ndash;12 annotations/image, SAM-assisted + manual verification</td></tr>\r
            <tr><td>Network dependency</td><td>None; local RF fallback when internet is unavailable</td></tr>\r
            <tr><td>Delivery altitude descent</td><td>Zero &mdash; drone maintains cruise altitude throughout delivery</td></tr>\r
            <tr><td>Delivery mechanism</td><td>Dual DC motor cable-lowering with automatic retract</td></tr>\r
            <tr><td>Obstacle avoidance</td><td>Single-camera (45&deg;), bounding-box positional steering</td></tr>\r
            <tr><td>Hackathon result</td><td>Top 5 Finalists, Smart India Hackathon 2025, PS-25047</td></tr>\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <p>The motorized cable-lowering delivery mechanism was specifically noted by evaluators as a technically differentiated solution. Teams addressing the same problem statement uniformly adopted servo-based drop mechanisms; DRISTI's zero-descent delivery profile and the battery-efficiency argument were primary factors in the jury's assessment of technical differentiation.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion and Future Work</h2>\r
      <p>DRISTI demonstrates that a fully autonomous, internet-independent UAV system for disaster relief can be built from commodity open-source components. The integration of ArduPilot navigation, edge-deployed YOLO person detection, a resilient dual-tier communication architecture, and a mechanically efficient cable-lowering delivery system into a coherent end-to-end pipeline represents a meaningful step toward operationally deployable disaster response UAVs.</p>\r
      <p>The principal technical contributions are: a custom aerial person detection model trained on domain-matched data and deployed entirely on an edge device; a two-tier video transmission architecture resilient to complete network infrastructure failure; a motorized cable-lowering payload delivery system that eliminates altitude cycling and reduces low-altitude collision risk; and a sensor-minimal obstacle avoidance strategy using a single 45° camera.</p>\r
      <p>On the hardware side, the most immediate extension is upgrading the propulsion system to higher-KV motors with a 6S battery to approach the 5 kg payload target specified in PS-25047. For perception, replacing the reactive 2D bounding-box avoidance with a monocular depth estimation model like MiDaS would enable predictive 3D path planning, allowing the drone to avoid obstacles well before close-range proximity. At a system level, coordinating a swarm of DRISTI units with shared detection state and non-overlapping search zones would scale coverage linearly with fleet size — ArduPilot's swarm extension provides the baseline infrastructure for this. Finally, PS-25047 explicitly requires a mobile application for disaster management teams; a real-time map view with live detection locations, drone position, and delivery status would complete the operator-facing interface for field deployment.</p>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <div>\r
        <a href="#" class="resource-btn filled" target="_blank"><i class="fab fa-github"></i> GitHub</a>\r
        <a href="#detection" class="resource-btn"><i class="fas fa-film"></i> Demo Video</a>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="gallery-section" id="gallery">\r
      <h2>Event Gallery</h2>\r
\r
      <img class="gallery-featured" src="/assets/img/projects/Dristi/Team_Taking_Special_Prize.png" alt="Team receiving the Special Prize at Smart India Hackathon 2025">\r
      <div class="gallery-featured-caption">The team receiving the Special Prize at Smart India Hackathon 2025, GEIT Gunupur.</div>\r
\r
      <div class="gallery-grid">\r
        <img src="/assets/img/projects/Dristi/Explaining_to_Jury.png" alt="Explaining the system to the jury">\r
        <img src="/assets/img/projects/Dristi/Mentors_and_Jury.png" alt="Mentors and jury visiting the demonstration">\r
        <img src="/assets/img/projects/Dristi/Nodal_Incharge_Checking_OurDrone.png" alt="Nodal in-charge inspecting the drone">\r
        <img src="/assets/img/projects/Dristi/Teammates_Setting_Drone.png" alt="Teammates assembling and configuring the drone">\r
        <img src="/assets/img/projects/Dristi/We_Setting_Our_Drone.png" alt="Pre-flight setup and calibration">\r
        <img src="/assets/img/projects/Dristi/Team%20Discussion.png" alt="Team discussion during development">\r
        <img src="/assets/img/projects/Dristi/On_Ground_Group_Pic.png" alt="Team group photo on the competition floor">\r
        <img src="/assets/img/projects/Dristi/Drone_Static.png" alt="Close-up of the assembled DRISTI drone">\r
        <img src="/assets/img/projects/Dristi/Drone_Close_Shot.png" alt="DRISTI payload delivery mechanism">\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">&bull; &bull; &bull;</div>\r
\r
    <div class="references-section">\r
      <h2>References</h2>\r
      <ol>\r
        <li>ArduPilot Development Team. <em>ArduPilot Autopilot Suite.</em> Open-source UAV flight stack. <a href="https://ardupilot.org" target="_blank">ardupilot.org</a></li>\r
        <li>HolyBro. <em>X500 V2 Development Kit: User Guide and Hardware Reference.</em> <a href="https://holybro.com" target="_blank">holybro.com</a></li>\r
        <li>Redmon, J., Divvala, S., Girshick, R., &amp; Farhadi, A. <em>You Only Look Once: Unified, Real-Time Object Detection.</em> CVPR 2016.</li>\r
        <li>Wang, C.-Y., Bochkovskiy, A., &amp; Liao, H.-Y. M. <em>YOLOv7: Trainable Bag-of-Freebies Sets New State-of-the-Art for Real-Time Object Detectors.</em> CVPR 2023.</li>\r
        <li>MAVLink Protocol Development Team. <em>MAVLink Micro Air Vehicle Message Marshalling Library.</em> <a href="https://mavlink.io" target="_blank">mavlink.io</a></li>\r
        <li>Raspberry Pi Foundation. <em>Raspberry Pi Hardware Documentation.</em> <a href="https://www.raspberrypi.com/documentation" target="_blank">raspberrypi.com</a></li>\r
        <li>Smart India Hackathon 2025. <em>Problem Statement 25047 &mdash; Disaster Response Drone for Remote Areas.</em> Government of Odisha, Electronics &amp; IT Department. Ministry of Education, Government of India.</li>\r
      </ol>\r
    </div>\r
\r
    <div class="article-section" id="contact" style="margin-bottom:0;">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong> &nbsp;&middot;&nbsp;\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;&middot;&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;&middot;&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#fff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; border-bottom:1px dashed transparent; transition:border-color .2s; }\r
    .hero-authors a:hover { border-bottom-color:#1585cf; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:28px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#fff; transition:all .2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .hero-btn.primary { background:#20364c; color:#fff; }\r
    .hero-btn.primary:hover { background:#1585cf; border-color:#1585cf; }\r
    .award-badge { display:inline-block; background:#20364c; color:#fff; font-family:"Montserrat",sans-serif; font-size:1.2rem; font-weight:600; padding:5px 16px; border-radius:4px; margin-bottom:16px; letter-spacing:.02em; }\r
    .award-badge i { margin-right:6px; }\r
    .article-body { max-width:860px; margin:0 auto; padding:48px 20px 72px; }\r
    .article-body h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .article-body h3 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.55rem; font-weight:600; color:#3d5166; margin-top:30px; margin-bottom:10px !important; }\r
    .article-body h4 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.35rem; font-weight:600; color:slategray; margin-top:22px; margin-bottom:8px !important; text-transform:uppercase; letter-spacing:.04em; }\r
    .article-section { margin-bottom:52px; }\r
    .abstract-box { background:#f4f7fb; border-left:4px solid #20364c; padding:22px 26px; border-radius:0 8px 8px 0; margin-bottom:0; }\r
    .abstract-box p { margin-bottom:0; font-size:1.45rem; color:#2c3e50; line-height:1.8; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:36px; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; transition:all .2s; }\r
    .tag:hover { background:#1585cf; color:#fff; border-color:#1585cf; }\r
    .article-img { width:100%; border-radius:8px; margin:20px 0 6px; box-shadow:0 2px 12px rgba(0,0,0,.09); transition:transform .3s ease; }\r
    .article-img:hover { transform:scale(1.01); }\r
    .img-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:20px; font-family:"Open Sans",sans-serif; }\r
    .highlight-box { background:#f4f7fb; border-left:4px solid #1585cf; padding:18px 22px; border-radius:0 8px 8px 0; margin:22px 0; }\r
    .highlight-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; }\r
    .method-box { background:#fff; border:1px solid #e0e6ef; border-left:4px solid #20364c; border-radius:0 8px 8px 0; padding:18px 22px; margin:18px 0; }\r
    .method-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; margin-bottom:10px; }\r
    .pipeline-step { background:#fff; border:1px solid #e0e6ef; border-radius:8px; padding:18px 22px; margin:16px 0; }\r
    .pipeline-step .step-num { display:inline-block; background:#20364c; color:#fff; font-family:"Montserrat",sans-serif; font-size:1.1rem; font-weight:700; padding:2px 12px; border-radius:3px; margin-bottom:10px; letter-spacing:.04em; }\r
    .pipeline-step h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:4px; margin-bottom:8px; }\r
    .pipeline-step p { font-size:1.38rem; color:#444; margin-bottom:0; line-height:1.7; }\r
    .article-body .table thead tr th { background:#fff; color:#20364c; font-family:"Montserrat",sans-serif; font-size:1.35rem; border-bottom:2px solid #20364c; }\r
    .article-body .table tbody tr td { font-size:1.35rem; vertical-align:middle; }\r
    .article-body .table tbody tr:hover { background:#f8fafc; }\r
    .article-body h3::after { display:none !important; content:none !important; }\r
    .article-body h3 span { background:transparent; padding-right:0; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color .2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .resource-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 22px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#fff; transition:all .2s ease; margin-right:8px; margin-top:10px; }\r
    .resource-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .resource-btn.filled { background:#20364c; color:#fff; }\r
    .resource-btn.filled:hover { background:#1585cf; border-color:#1585cf; }\r
    .references-section { background:#f4f7fb; padding:26px 24px; border-left:5px solid #20364c; border-radius:0 8px 8px 0; margin:40px 0; overflow-wrap:break-word; word-break:break-word; }\r
    .references-section h2 { border-bottom:none; font-size:1.7rem; padding-bottom:0; margin-bottom:16px !important; }\r
    .references-section ol { padding-left:20px; }\r
    .references-section ol li { font-size:1.25rem; line-height:1.65; color:#3d4147; margin-bottom:10px; }\r
    .references-section ol li a { color:#1585cf; }\r
    .section-sep { text-align:center; margin:48px 0 36px; color:#c8d3de; letter-spacing:.5em; font-size:1.1rem; }\r
    .gallery-section { margin:40px 0 0; }\r
    .gallery-section h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .gallery-featured { width:100%; max-height:400px; object-fit:cover; border-radius:8px; box-shadow:0 2px 14px rgba(0,0,0,.12); display:block; margin-bottom:8px; }\r
    .gallery-featured-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:24px; font-family:"Open Sans",sans-serif; }\r
    .gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }\r
    .gallery-grid img { width:100%; height:180px; object-fit:cover; border-radius:6px; box-shadow:0 1px 6px rgba(0,0,0,.1); transition:transform .25s ease,box-shadow .25s ease; display:block; }\r
    .gallery-grid img:hover { transform:scale(1.03); box-shadow:0 4px 16px rgba(0,0,0,.18); }\r
    @media(max-width:600px){ .gallery-grid{grid-template-columns:repeat(2,1fr);} .gallery-grid img{height:130px;} }\r
    @media(max-width:767px){ .hero-back-link{position:static;display:inline-flex;margin-bottom:16px} .hero-title{font-size:2.2rem} .article-body h2{font-size:1.65rem} .article-body h3{font-size:1.4rem} .hero-btn{font-size:1.2rem;padding:7px 15px} .article-body{padding:32px 15px 60px} }\r
    @media(max-width:480px){ .hero-title{font-size:1.85rem} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/staws.html`,title:`STAWS: AI Traffic Monitoring | Nikhileswara Rao Sulake`,description:`STAWS is an AI traffic monitoring project by Nikhileswara Rao Sulake focused on smart road analytics, event detection, and real-time computer vision.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">STAWS: An AI-Powered Ecosystem for Proactive Traffic Monitoring and Emergency Response</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Technical Report &nbsp;·&nbsp; System Design</p>\r
    <div class="hero-links">\r
      <a class="hero-btn primary" href="#" target="_blank"><i class="fas fa-file-alt"></i> Specification</a>\r
      <a class="hero-btn" href="#" target="_blank"><i class="fab fa-github"></i> Code</a>\r
      <a class="hero-btn" href="#" target="_blank"><i class="fas fa-handshake"></i> Partnerships</a>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">AI-Powered Monitoring</span>\r
      <span class="tag">Traffic Safety</span>\r
      <span class="tag">Emergency Response</span>\r
      <span class="tag">Computer Vision</span>\r
      <span class="tag">Public Safety</span>\r
      <span class="tag">Smart Cities</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>India reports approximately <strong>1,500 road accidents and 500 fatalities daily</strong>, yet the country's 1.5 million+ CCTV cameras along road networks remain largely passive — recording for archival rather than real-time response. STAWS (Smart Traffic Accident Warning System) is an AI-powered ecosystem that converts this existing surveillance infrastructure into an active emergency response network. The system employs a three-stage pipeline: automated video captioning for scene understanding, urgency-aware triage via sentiment analysis, and Kafka-backed multi-channel alerting to authorities and the public. The architecture is further augmented with crowdsourced intelligence through a user-facing mobile application, creating a bidirectional information ecosystem that significantly reduces emergency response time.</p>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <div style="text-align:center;">\r
        <img class="article-img" src="/assets/img/projects/staws.gif" alt="STAWS System Overview" style="max-width:720px; display:inline-block;">\r
        <div class="img-caption">Fig. 1 — The STAWS system in action: real-time traffic scene analysis and automated emergency dispatch.</div>\r
      </div>\r
      <p>India's road accident fatality rate is among the highest globally, with National Crime Records Bureau data confirming approximately 500 deaths per day from road traffic accidents as of 2023. The gap between accident occurrence and emergency response is a primary determinant of survivability. Current monitoring infrastructure — comprising over 1.5 million CCTVs deployed by municipal, state, and national highway authorities — is architecturally passive: operators must actively monitor feeds, and response is contingent on human detection.</p>\r
      <p>AI video analysis has reached the maturity required to automate this detection step. Modern video language models can generate accurate, structured descriptions of traffic scenes in near real-time. The challenge is not detection accuracy alone, but the full pipeline from raw video to coordinated emergency response — including prioritization, routing, and public notification. STAWS addresses this end-to-end problem.</p>\r
    </div>\r
\r
    <div class="article-section" id="pipeline">\r
      <h2>System Architecture</h2>\r
      <p>STAWS processes incoming video feeds through a three-stage AI pipeline, backed by an event-streaming architecture built on Apache Kafka for high-throughput, fault-tolerant message delivery.</p>\r
\r
      <div class="pipeline-step">\r
        <div class="step-num">Stage 1</div>\r
        <h4>Video Captioning — Scene Understanding</h4>\r
        <p>Incoming CCTV feeds are processed by a video captioning model that generates structured natural-language descriptions of each scene. Captions encode key event attributes: collision type, number of vehicles involved, casualty indicators (persons on road, unusual vehicle orientation), and location metadata. This transforms raw video into a structured text stream suitable for downstream NLP analysis.</p>\r
      </div>\r
\r
      <div class="pipeline-step">\r
        <div class="step-num">Stage 2</div>\r
        <h4>Urgency Triage — Sentiment &amp; Severity Analysis</h4>\r
        <p>Caption text is passed through a fine-tuned sentiment and urgency classification model that assigns each event a triage level: <strong>Low</strong> (minor traffic disruption), <strong>Medium</strong> (property damage, no visible casualties), <strong>High</strong> (injured persons, blocked lanes), or <strong>Critical</strong> (multi-vehicle pile-up, unconscious victims, hazardous materials). This triage layer ensures that alerting resources are proportional to event severity and prevents alert fatigue from low-priority events.</p>\r
      </div>\r
\r
      <div class="pipeline-step">\r
        <div class="step-num">Stage 3</div>\r
        <h4>Automated Alerting — Multi-Channel Response Dispatch</h4>\r
        <p>Events above the Medium threshold trigger automated alerts through Kafka message queues to: (1) nearest traffic police units via dispatch dashboard, (2) highway authority control rooms, (3) ambulance dispatch centers for Critical-level events, and (4) public via app notifications for route planning. Alert content includes location, severity, captioned description, and a direct link to the relevant CCTV feed for human confirmation.</p>\r
      </div>\r
\r
      <div class="highlight-box">\r
        <h4><i class="fas fa-stream"></i> Apache Kafka Backend</h4>\r
        <p>Kafka provides the scalable, fault-tolerant message backbone connecting all pipeline stages. Its distributed log architecture ensures no events are lost under high load and supports replay for retrospective analysis. A single Kafka broker can sustain millions of CCTV event messages, making the architecture inherently scalable from pilot to national deployment.</p>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="crowdsourcing">\r
      <h2>Crowdsourced Intelligence</h2>\r
      <p>Fixed CCTV infrastructure has inherent blind spots. STAWS addresses this through a citizen-reporting mobile application that enables users to submit geo-tagged incident reports — photos, short video clips, or voice messages — directly into the same Kafka pipeline as CCTV feeds. Crowdsourced reports are processed through the same captioning and triage pipeline, with additional source credibility weighting based on reporting history and corroboration with nearby CCTV data.</p>\r
      <p>This bidirectional model creates a network effect: more users increase coverage density, particularly on rural highways and local roads where CCTV deployment is sparse. Simultaneously, verified CCTV alerts are broadcast to app users for route optimization, encouraging further adoption.</p>\r
\r
      <div class="highlight-box">\r
        <h4><i class="fas fa-route"></i> Route Optimization Integration</h4>\r
        <p>Confirmed accident alerts are automatically fed into the route optimization layer, which broadcasts affected road segments to navigation systems. This reduces secondary accidents caused by rubbernecking and congestion-induced incidents, and helps emergency vehicles find the fastest approach path to the scene.</p>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="deployment">\r
      <h2>Deployment Strategy</h2>\r
      <p>STAWS is designed for incremental deployment across four phases, allowing government and institutional partners to validate the system before committing to full-scale infrastructure integration:</p>\r
\r
      <p><strong>Phase 1 — Pilot:</strong> Single-city deployment on 50–100 high-incident-rate camera feeds. Primary objective is false-positive rate calibration and response time measurement.</p>\r
      <p><strong>Phase 2 — City Scale:</strong> Full municipal deployment across a single metro area. Integration with traffic police dispatch and ambulance services. App beta launch.</p>\r
      <p><strong>Phase 3 — State Scale:</strong> Integration with National Highway Authority feeds and state disaster response units. Public app launch with route optimization.</p>\r
      <p><strong>Phase 4 — National Network:</strong> Full integration with India's national CCTV grid. Predictive risk modeling using historical accident data and current traffic density to pre-position emergency resources.</p>\r
\r
      <p>The system supports subscription-based licensing (per-camera or per-city), pay-per-use API access for navigation and insurance partners, and government tender models for direct procurement by traffic authorities.</p>\r
    </div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion</h2>\r
      <p>STAWS demonstrates that India's existing passive surveillance infrastructure can be transformed into an active life-saving network with targeted AI integration. By converting video to captions, captions to triage decisions, and triage to automated dispatch, the three-stage pipeline eliminates the human detection bottleneck that currently governs emergency response time. The Kafka backbone ensures the architecture scales from pilot to national deployment without fundamental redesign. The crowdsourcing layer extends coverage beyond fixed infrastructure and creates a civic participation model that incrementally improves system coverage over time.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <div>\r
        <a class="resource-btn filled" href="#" target="_blank"><i class="fas fa-file-alt"></i> Technical Spec</a>\r
        <a class="resource-btn" href="#" target="_blank"><i class="fab fa-github"></i> Source Code</a>\r
        <a class="resource-btn" href="#" target="_blank"><i class="fas fa-handshake"></i> Partnership Inquiry</a>\r
      </div>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong> —\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; border-bottom:1px dashed transparent; transition:border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color:#1585cf; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:28px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#ffffff; text-decoration:none; }\r
    .hero-btn.primary { background:#20364c; color:#ffffff; }\r
    .hero-btn.primary:hover { background:#1585cf; border-color:#1585cf; }\r
    .article-body { max-width:860px; margin:0 auto; padding:48px 20px 72px; }\r
    .article-body h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .article-body h3 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.55rem; font-weight:600; color:#3d5166; margin-top:30px; margin-bottom:10px !important; }\r
    .article-body h3::after { display:none !important; content:none !important; }\r
    .article-body h3 span { background:transparent; padding-right:0; }\r
    .article-body h4 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.35rem; font-weight:600; color:slategray; margin-top:22px; margin-bottom:8px !important; text-transform:uppercase; letter-spacing:0.04em; }\r
    .article-section { margin-bottom:52px; }\r
    .abstract-box { background:#f4f7fb; border-left:4px solid #20364c; padding:22px 26px; border-radius:0 8px 8px 0; }\r
    .abstract-box p { margin-bottom:0; font-size:1.45rem; color:#2c3e50; line-height:1.8; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:36px; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .article-img { width:100%; border-radius:8px; margin:20px 0 6px; box-shadow:0 2px 12px rgba(0,0,0,0.09); }\r
    .img-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:20px; }\r
    .highlight-box { background:#f4f7fb; border-left:4px solid #1585cf; padding:18px 22px; border-radius:0 8px 8px 0; margin:22px 0; }\r
    .highlight-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; }\r
    .pipeline-step { border:1px solid #e0e6ef; border-left:5px solid #20364c; border-radius:0 8px 8px 0; padding:18px 22px; margin:16px 0; background:#fff; }\r
    .pipeline-step .step-num { font-family:"Montserrat",sans-serif; font-size:1.15rem; font-weight:700; color:#1585cf; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:6px; }\r
    .pipeline-step h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.45rem; margin-top:0; margin-bottom:8px; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .resource-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 22px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; margin-right:8px; margin-top:10px; }\r
    .resource-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .resource-btn.filled { background:#20364c; color:#fff; }\r
    .resource-btn.filled:hover { background:#1585cf; border-color:#1585cf; }\r
    .section-sep { text-align:center; margin:48px 0 36px; color:#c8d3de; letter-spacing:0.5em; font-size:1.1rem; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .article-body h2{font-size:1.65rem;} .article-body h3{font-size:1.4rem;} .hero-btn{font-size:1.2rem;padding:7px 15px;} .article-body{padding:32px 15px 60px;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/thyroid.html`,title:`Thyroid Nodule Analysis | Nikhileswara Rao Sulake`,description:`Thyroid nodule analysis with ultrasound and deep learning by Nikhileswara Rao Sulake, focused on medical image interpretation and early risk-aware detection.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">Ultrasound-Based Thyroid Nodule Segmentation and Risk Stratification</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Research Article &nbsp;·&nbsp; Medical Imaging &nbsp;·&nbsp; Deep Learning</p>\r
    <div style="margin-bottom:10px;">\r
      <span class="draft-badge"><i class="fas fa-pencil-alt"></i>&nbsp; Article in Preparation</span>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">Medical Imaging</span>\r
      <span class="tag">Ultrasound</span>\r
      <span class="tag">Thyroid Nodule</span>\r
      <span class="tag">Semantic Segmentation</span>\r
      <span class="tag">Deep Learning</span>\r
      <span class="tag">Clinical AI</span>\r
    </div>\r
\r
    <div class="coming-soon-icon">\r
      <i class="fas fa-flask"></i>\r
    </div>\r
    <h2 class="coming-soon-title">Content Coming Soon</h2>\r
    <p class="coming-soon-text">\r
      A detailed write-up covering the methodology, experiments, and results for this project is currently being prepared by the author. The article will cover deep learning approaches to thyroid nodule segmentation from ultrasound imagery and automated risk stratification aligned with clinical reporting standards.\r
    </p>\r
    <p class="coming-soon-text" style="font-size:1.35rem; color:#8a9aaa;">\r
      In the meantime, feel free to reach out directly for a preview or early access to findings.\r
    </p>\r
\r
    <p class="contact-text">\r
      <strong>Nikhileswara Rao Sulake</strong> &mdash;\r
      <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
      <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
      <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
    </p>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:18px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; }\r
    .draft-badge { display:inline-block; background:#fff8e7; color:#b87c00; border:1px solid #f0d080; padding:5px 16px; border-radius:20px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; margin-bottom:20px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#ffffff; text-decoration:none; }\r
    .article-body { max-width:860px; margin:0 auto; padding:60px 20px 80px; text-align:center; }\r
    .coming-soon-icon { font-size:4.5rem; color:#c8d3de; margin-bottom:24px; }\r
    .coming-soon-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:2rem; font-weight:700; color:#20364c; margin-bottom:14px; }\r
    .coming-soon-text { font-size:1.5rem; color:#5a6a7a; max-width:580px; margin:0 auto 32px; line-height:1.7; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin:0 auto 36px; justify-content:center; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .contact-text { font-size:1.35rem; color:slategray; margin-top:40px; }\r
    .contact-text a { color:#1585cf; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .coming-soon-title{font-size:1.7rem;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/umbraUnet.html`,title:`Umbra UNet | Nikhileswara Rao Sulake`,description:`Umbra UNet is a remote sensing image segmentation project by Nikhileswara Rao Sulake that adapts U-Net style design for land-cover understanding and aerial imagery.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">Umbra UNet: A Hybrid Framework for Robust Segmentation of Underrepresented Classes in Satellite Imagery</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a>\r
    </p>\r
    <p class="hero-meta">Technical Report &nbsp;·&nbsp; 2025</p>\r
    <div style="margin-bottom: 10px;">\r
      <span class="award-badge"><i class="fas fa-satellite"></i> ISRO Bharatiya Antariksh Hackathon 2025</span>\r
    </div>\r
    <div class="hero-links">\r
      <a class="hero-btn" href="https://www.kaggle.com/datasets/asjad2024/dlrsd" target="_blank"><i class="fas fa-database"></i> DLRSD Dataset</a>\r
      <a class="hero-btn" href="#" target="_blank"><i class="fab fa-github"></i> Code</a>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">Satellite Imagery</span>\r
      <span class="tag">Semantic Segmentation</span>\r
      <span class="tag">Class Imbalance</span>\r
      <span class="tag">Hybrid Architecture</span>\r
      <span class="tag">Remote Sensing</span>\r
      <span class="tag">DLRSD</span>\r
      <span class="tag">GIS</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>Semantic segmentation of satellite and aerial imagery poses a fundamental class imbalance challenge: dominant land-cover categories occupy the vast majority of pixels while operationally critical minority classes — dock, ship, tanks, chaparral — represent only a tiny fraction. Existing pipelines built on standard UNet, Cross-Entropy loss, and vanilla Adam systematically fail these minority classes. This work presents Umbra UNet, a comprehensive three-pronged solution: a hybrid deep learning architecture integrating InceptionNeXt, EfficientViT, and ConvNeXtV2 blocks for robust local-global feature extraction; a Combo Loss combining Focal, Dice, and Tversky functions that forces the model to pay special attention to rare objects; and a modified AdamW optimizer adjusted for dataset-oriented convergence. Validated on the DLRSD remote sensing benchmark (256 px images, 17 classes), Umbra UNet delivers a robust, stable, and highly accurate model that excels at identifying underrepresented classes while remaining competitive with standard UNet on overall metrics.</p>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <p>High-resolution satellite and aerial imagery is one of the most information-dense data sources available today, underpinning critical decisions in urban planning, disaster response management, agricultural monitoring, and defense reconnaissance. But making a model understand every class in such an image — not just the dominant ones — is a much harder problem than it first appears.</p>\r
\r
      <p>The DLRSD dataset distills this challenge into a concrete 17-class benchmark. A glance at its class distribution tells the whole story: pavement, mobile home, and grass collectively dominate the pixel budget, while classes like chaparral, dock, ship, and tanks occupy only a sliver. When you feed this imbalanced data into a standard model, you get a model that has quietly learned to cheat — it scores well on overall Dice by doing an excellent job on the dominant classes and practically ignoring the rare ones. For real-world applications where a missed ship or an undetected storage tank is a genuine operational failure, this is not acceptable.</p>\r
\r
      <div style="text-align:center; margin:28px 0 8px;">\r
        <img class="article-img" src="/assets/img/projects/umbranet_flow.png" alt="DLRSD Dataset and Experimental Pipeline" style="max-width:760px; display:inline-block;">\r
        <div class="img-caption">Fig. 1 — DLRSD 17-class dataset with class imbalance visualization (top) and the full experimental pipeline comparing Umbra UNet against UNet baseline across loss functions and optimizers (bottom).</div>\r
      </div>\r
\r
      <p>Existing solutions tend to address this problem one intervention at a time — swap the loss function, or add a better backbone, or tune the optimizer. Each such fix helps a little, but none of them definitively solves the problem because the issue is systemic: the architecture, the loss, and the optimizer are all simultaneously pulling the model toward majority-class solutions. Our key insight is that you need to push back on all three fronts at once. That was the founding philosophy of Umbra UNet: engineer a comprehensive approach that targets this challenge from every angle simultaneously.</p>\r
    </div>\r
\r
    <div class="article-section" id="approach">\r
      <h2>The Approach</h2>\r
\r
      <h3>1. The Umbra UNet Architecture</h3>\r
      <p>The first front is the architecture itself. Standard UNet uses a single encoder path — efficient, but limited in the diversity of features it can extract at each scale. For high-resolution satellite imagery, where minority-class objects might appear as a few scattered pixels of an unusual texture, a richer feature representation at every level of the hierarchy makes a meaningful difference.</p>\r
\r
      <p>Umbra UNet tackles this with a custom encoder block called the <strong>Umbra Conv</strong>. Rather than computing features through a single convolutional path, each Umbra Conv block runs the input through three parallel branches simultaneously. The first branch uses <strong>InceptionNeXt</strong> — an architecture inspired by Inception modules and modernized with depthwise convolutions — which excels at capturing multi-frequency local spatial patterns, exactly the fine-grained texture signals needed to detect small rare objects. The second branch uses <strong>EfficientViT</strong>, a memory-efficient vision transformer that captures long-range global context through multi-scale attention. This is important for connecting spatially scattered instances of the same minority class across a large aerial scene. The third branch is a standard convolution that handles the general-purpose feature hierarchy. The outputs of all three branches are concatenated and projected, giving the encoder a rich, multi-perspective view of the input at every scale level.</p>\r
\r
      <p>On the decoder side, a complementary block called <strong>Umbra DSD</strong> handles the upsampling. It also operates with two parallel paths — one using Multi-Scale Kernel Attention (MSKA) and another using standard Self-Attention — whose outputs are merged through an Up Conv to progressively restore spatial resolution. Finally, a <strong>FuseUp</strong> block at the very end applies Pixel Shuffle for sub-pixel upsampling, enabling sharp, high-fidelity boundary reconstruction at the output.</p>\r
\r
      <div style="text-align:center; margin:28px 0 8px;">\r
        <img class="article-img" src="/assets/img/projects/umbranet.png" alt="UMBRA UNet Framework Architecture Diagram" style="max-width:800px; display:inline-block;">\r
        <div class="img-caption">Fig. 2 — UMBRA UNet Framework: four-level encoder-decoder with Umbra Conv blocks (encoder), Umbra DSD blocks (decoder), and FuseUp reconstruction. Sub-diagrams detail the internal structure of each custom block.</div>\r
      </div>\r
\r
      <h3>2. The Combo Loss Function</h3>\r
      <p>A powerful architecture alone is not enough if the training signal keeps rewarding majority-class predictions. This is the second front: the loss function. We designed a <strong>Combo Loss</strong> — a carefully weighted blend of three complementary loss functions that each address a distinct failure mode of imbalanced training.</p>\r
\r
      <p>Focal Loss is the first ingredient. It works by dynamically downweighting the contribution of easy, well-classified majority-class pixels to the gradient update, concentrating the learning signal on the hard, underrepresented minority pixels that the model keeps getting wrong. This directly counteracts the dominant-class convergence that standard cross-entropy suffers from. Dice Loss is the second component. By optimizing segmentation overlap directly rather than pointwise classification, it is inherently scale-invariant: it weights each class by its overlap ratio rather than by the raw pixel count, so a class that occupies only 0.2% of the image still contributes meaningfully to the loss. The third ingredient is Tversky Loss, a generalization of Dice that introduces an asymmetric weighting between false positives and false negatives. By setting a higher penalty on false negatives, we ensure the model is penalized more heavily for missing a rare-class object than for occasionally predicting one incorrectly — exactly the right trade-off for minority-class recall. All three loss weights are further scaled by per-class pixel counts, so the rarest classes receive the strongest signal.</p>\r
\r
      <p>Together, these three components create a synergistic training pressure that makes it structurally difficult for the model to ignore any class, no matter how rarely it appears in the data.</p>\r
\r
      <h3>3. The Modified AdamW Optimizer</h3>\r
      <p>The third and final front is the optimizer. Training a complex multi-branch architecture carries a real risk of branch co-adaptation — where two branches learn redundant features instead of complementary ones — and of overfitting to the very majority-class patterns we are trying to avoid. We address this with a dataset-oriented configuration of <strong>AdamW</strong>. Its decoupled weight decay provides consistent regularization pressure across all branches, preventing co-adaptation and keeping each branch specialized. Compared to vanilla Adam, this results in a model that generalizes better not just to minority classes on the test set, but also to genuinely new, unseen data distributions — a property that matters enormously for a remote sensing model that may be deployed on imagery from different sensors, regions, and seasons.</p>\r
    </div>\r
\r
    <div class="article-section" id="results">\r
      <h2>Results</h2>\r
\r
      <h3>Optimizers and Loss Functions</h3>\r
      <p>Before settling on the final configuration, we systematically compared three optimizers — AdamW, SAM (Sharpness-Aware Minimization), and AdaBelief — combined with both standard Weighted Cross-Entropy loss and our Combo Loss, across all model variants on the DLRSD benchmark. The results told a clear and consistent story.</p>\r
\r
      <div style="text-align:center; margin:28px 0 8px;">\r
        <img class="article-img" src="/assets/img/projects/dice_per_class_umbra_unet.png" alt="Results: Optimizers and Loss Functions" style="max-width:780px; display:inline-block;">\r
        <div class="img-caption">Fig. 3 — Dice per class across optimizer variants (top) and Dice per model type under CE vs. Combo Loss (bottom). AdamW with Combo Loss consistently achieves the best results.</div>\r
      </div>\r
\r
      <p>AdamW, tuned according to the dataset's class distribution, delivered the best convergence speed, the most stable training, and the strongest per-class Dice scores across imbalanced scenarios. SAM was a reasonable competitor on average convergence, but it exhibited a critical failure: it completely ignored several minority classes, scoring near zero Dice on them. For our problem this is a disqualifying behavior, not a minor shortcoming. AdaBelief was the most disappointing result — while theoretically it should generalize better than Adam in many regimes, the extreme class imbalance of DLRSD destabilized its adaptive step sizes, leaving it with essentially no generalization to rare classes whatsoever.</p>\r
\r
      <p>The Combo Loss comparison was equally unambiguous. Across every model and optimizer combination, Combo Loss outperformed standard Weighted Cross-Entropy. The improvement was especially pronounced on minority classes, exactly as designed, confirming that the synergistic pressure from Focal, Dice, and Tversky losses is doing the intended work.</p>\r
\r
      <h3>Performance Comparison</h3>\r
      <p>For the final performance evaluation, we benchmarked three model variants — standard UNet, Original Umbra UNet, and Simplified Umbra UNet — all trained with Combo Loss and AdamW on 256 px DLRSD images.</p>\r
\r
      <div style="text-align:center; margin:28px 0 8px;">\r
        <img class="article-img" src="/assets/img/projects/umbra_unet_vs_unet.png" alt="Results: Performance Comparison" style="max-width:780px; display:inline-block;">\r
        <div class="img-caption">Fig. 4 — Dice per class for UNet-Combo, Original Umbra UNet-Combo, and Simplified Umbra UNet-Combo (top). Combo Loss training and validation curves over 50 epochs (bottom).</div>\r
      </div>\r
\r
      <p>On the 256 px benchmark, the standard UNet consistently achieves the highest aggregate Dice for most classes. This result is not surprising and does not reflect a flaw in Umbra UNet — it reflects its design intent. Umbra UNet is built for high-resolution input where the InceptionNeXt and EfficientViT branches have enough spatial detail to genuinely differentiate rare objects. At 256 px, the spatial resolution constrains how much the multi-scale attention path can contribute, and the architectural overhead of three parallel branches adds parameters without proportional benefit at this scale. Despite this, Umbra UNet remains fully competitive with UNet on most classes and surpasses it on the harder minority classes, which is exactly the trade-off the design targets.</p>\r
\r
      <p>The Simplified Umbra UNet is a lightweight distillation of the full model, designed to retain the core feature-extraction benefits with far fewer parameters. It performs competitively with both the full Umbra UNet and the standard UNet baseline across the parameter-efficiency trade-off. For deployments where inference speed or memory is constrained — edge sensors, embedded GIS systems, real-time aerial feeds — the Simplified variant is the recommended choice without sacrificing meaningful accuracy.</p>\r
    </div>\r
\r
    <div class="article-section" id="qualitative">\r
      <h2>Qualitative Analysis</h2>\r
      <p>Aggregate Dice scores tell part of the story, but looking at what the models actually produce visually tells the rest. We selected five diverse test scenes from DLRSD — a road intersection, parallel vegetation stripes, open bare terrain, circular structures, and an aircraft scene — and compared the segmentation outputs of Umbra UNet and standard UNet side-by-side against ground truth.</p>\r
\r
      <div style="text-align:center; margin:28px 0 8px;">\r
        <img class="article-img" src="/assets/img/projects/umbra_unet_qualitative.png" alt="Qualitative Comparison: Ground Truth vs Umbra UNet vs UNet" style="max-width:820px; display:inline-block;">\r
        <div class="img-caption">Fig. 5 — Qualitative segmentation comparison across five test scenes: Ground Truth (left), Umbra UNet (middle), UNet (right). Umbra UNet produces sharper boundaries and better minority class coverage in complex scenes.</div>\r
      </div>\r
\r
      <p>The differences are immediately visible. In the road intersection scene, Umbra UNet preserves the fine boundary between pavement and the surrounding vegetation, while UNet blurs this intersection into a broad pavement region. In the circular-structures scene — one of the more challenging test cases — Umbra UNet correctly identifies and segments the individual circular objects with green highlights that closely match the ground truth, whereas UNet misclassifies the same region almost entirely as a single dominant-class blob. The aircraft scene is particularly telling: both models segment the airframe, but Umbra UNet maintains cleaner boundary fidelity around the wings and nose, which the UNet loses to the surrounding pavement class. These qualitative observations are consistent with what the numerical results suggest — Umbra UNet's multi-scale attention machinery is doing real work at fine-grained boundaries and on the hard minority-class instances that standard UNet absorbs into dominant-class noise.</p>\r
    </div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion</h2>\r
      <p>The central lesson of this work is simple but important: in the face of severe class imbalance, you cannot fix the problem by changing just one thing. If the architecture is not expressive enough to detect rare objects, a better loss function will not save it. If the loss function does not create the right gradient signal, a better architecture will not use it. And if the optimizer is unstable, neither the architecture nor the loss will converge to a genuinely generalizable solution. You need all three to be right at the same time.</p>\r
\r
      <p>Umbra UNet is the result of taking that premise seriously. By combining a hybrid encoder that gives the model a richer, multi-perspective view of the input through InceptionNeXt, EfficientViT, and ConvNeXtV2 branches; a Combo Loss that applies simultaneous pressure from Focal, Dice, and Tversky objectives to prevent the model from coasting on majority classes; and a dataset-aware AdamW configuration that keeps training stable and generalization strong, we built a segmentation framework that addresses the class imbalance problem from the ground up rather than treating it as an afterthought.</p>\r
\r
      <p>Validated on the challenging 17-class DLRSD benchmark, Umbra UNet delivers results that are not only competitive with the standard UNet baseline on overall metrics but demonstrably superior on the minority-class detection that matters most in real operational remote sensing contexts. The Simplified Umbra UNet further extends the framework's applicability to deployment environments where compute resources are limited, achieving a favorable accuracy-per-parameter trade-off that makes it a practical choice for edge and embedded GIS applications. This work serves as a proof-of-concept that principled, multi-pronged approaches to class imbalance can produce models genuinely ready for real-world high-resolution satellite imagery analysis.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <div>\r
        <a class="resource-btn" href="https://www.kaggle.com/datasets/asjad2024/dlrsd" target="_blank"><i class="fas fa-database"></i> DLRSD Dataset</a>\r
      </div>\r
    </div>\r
\r
    <div class="references-section" id="references">\r
      <h2>References</h2>\r
      <ol>\r
        <li>Ronneberger, O., Fischer, P., &amp; Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. <em>MICCAI</em>.</li>\r
        <li>Yu, W., et al. (2023). InceptionNeXt: When Inception Meets ConvNeXt. <em>arXiv:2303.16900</em>.</li>\r
        <li>Liu, X., et al. (2023). EfficientViT: Memory Efficient Vision Transformer with Cascaded Group Attention. <em>CVPR</em>.</li>\r
        <li>Woo, S., et al. (2023). ConvNeXt V2: Co-designing and Scaling ConvNets with Masked Autoencoders. <em>CVPR</em>.</li>\r
        <li>Lin, T.-Y., et al. (2017). Focal Loss for Dense Object Detection. <em>ICCV</em>.</li>\r
        <li>Milletari, F., Navab, N., &amp; Ahmadi, S.-A. (2016). V-Net: Fully Convolutional Neural Networks for Volumetric Medical Image Segmentation. <em>3DV</em>.</li>\r
        <li>Salehi, S. S. M., Erdogmus, D., &amp; Gholipour, A. (2017). Tversky loss function for image segmentation using 3D fully convolutional deep networks. <em>MLMI</em>.</li>\r
        <li>Foret, P., et al. (2021). Sharpness-Aware Minimization for Efficiently Improving Generalization. <em>ICLR</em>.</li>\r
        <li>Zhuang, J. (2020). AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients. <em>NeurIPS</em>.</li>\r
        <li>Loshchilov, I., &amp; Hutter, F. (2019). Decoupled Weight Decay Regularization. <em>ICLR</em>.</li>\r
      </ol>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong> —\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; border-bottom:1px dashed transparent; transition:border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color:#1585cf; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:28px; }\r
    .award-badge { display:inline-block; background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:5px 16px; border-radius:20px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; margin-bottom:18px; }\r
    .award-badge i { margin-right:5px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#ffffff; text-decoration:none; }\r
    .hero-btn.primary { background:#20364c; color:#ffffff; }\r
    .hero-btn.primary:hover { background:#1585cf; border-color:#1585cf; }\r
    .article-body { max-width:860px; margin:0 auto; padding:48px 20px 72px; }\r
    .article-body h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .article-body h3 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.55rem; font-weight:600; color:#3d5166; margin-top:30px; margin-bottom:10px !important; }\r
    .article-body h3::after { display:none !important; content:none !important; }\r
    .article-body h3 span { background:transparent; padding-right:0; }\r
    .article-body h4 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.35rem; font-weight:600; color:slategray; margin-top:22px; margin-bottom:8px !important; text-transform:uppercase; letter-spacing:0.04em; }\r
    .article-section { margin-bottom:52px; }\r
    .abstract-box { background:#f4f7fb; border-left:4px solid #20364c; padding:22px 26px; border-radius:0 8px 8px 0; }\r
    .abstract-box p { margin-bottom:0; font-size:1.45rem; color:#2c3e50; line-height:1.8; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:36px; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .article-img { width:100%; border-radius:8px; margin:20px 0 6px; box-shadow:0 2px 12px rgba(0,0,0,0.09); }\r
    .img-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:20px; }\r
    .highlight-box { background:#f4f7fb; border-left:4px solid #1585cf; padding:18px 22px; border-radius:0 8px 8px 0; margin:22px 0; }\r
    .highlight-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; }\r
    .method-box { background:#fff; border:1px solid #e0e6ef; border-left:4px solid #20364c; border-radius:0 8px 8px 0; padding:18px 22px; margin:18px 0; }\r
    .method-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; margin-bottom:10px; }\r
    .article-body .table thead tr th { background:#ffffff; color:#20364c; font-family:"Montserrat",sans-serif; font-size:1.3rem; border-bottom:2px solid #20364c; }\r
    .article-body .table tbody tr td { font-size:1.3rem; vertical-align:middle; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .resource-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 22px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; margin-right:8px; margin-top:10px; }\r
    .resource-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .resource-btn.filled { background:#20364c; color:#fff; }\r
    .resource-btn.filled:hover { background:#1585cf; border-color:#1585cf; }\r
    .references-section { background:#f4f7fb; padding:26px 24px; border-left:5px solid #20364c; border-radius:0 8px 8px 0; margin:40px 0; overflow-wrap:break-word; word-break:break-word; }\r
    .references-section h2 { border-bottom:none; font-size:1.7rem; padding-bottom:0; margin-bottom:16px !important; }\r
    .references-section ol { padding-left:20px; }\r
    .references-section ol li { font-size:1.25rem; line-height:1.65; color:#3d4147; margin-bottom:10px; }\r
    .references-section ol li a { color:#1585cf; }\r
    .section-sep { text-align:center; margin:48px 0 36px; color:#c8d3de; letter-spacing:0.5em; font-size:1.1rem; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .article-body h2{font-size:1.65rem;} .article-body h3{font-size:1.4rem;} .hero-btn{font-size:1.2rem;padding:7px 15px;} .article-body{padding:32px 15px 60px;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]},{route:`project_articles_v2/zoya.html`,title:`ZOYA: AI Humanoid Student Counselor | Nikhileswara Rao Sulake`,description:`ZOYA is an AI humanoid student counselor project by Nikhileswara Rao Sulake, combining voice interaction, generative AI, and robotics for campus assistance.`,portfolioChrome:!1,html:`\r
\r
  \r
\r
  <section class="article-hero">\r
    <a href="#/projects.html" class="hero-back-link">\r
      <i class="fas fa-arrow-left"></i> Back to Projects\r
    </a>\r
    <h1 class="hero-title">ZOYA: The AI Humanoid Guide Revolutionizing Student Counseling at RGUKT Nuzvid</h1>\r
    <p class="hero-authors">\r
      <a href="https://nikhil-rao20.github.io" target="_blank">Nikhileswara Rao Sulake</a><sup>1</sup>,\r
      Suresh Ratlavath<sup>1</sup>,\r
      Samba Siva Rao Kovvuru<sup>2</sup>\r
    </p>\r
    <p class="hero-affiliations">\r
      <sup>1</sup> Dept. of CSE, RGUKT Nuzvid &nbsp;&nbsp;\r
      <sup>2</sup> Dept. of ECE, RGUKT Nuzvid\r
    </p>\r
    <p class="hero-meta">Project Report &nbsp;·&nbsp; April 2024</p>\r
    <div style="margin-bottom:14px;">\r
      <span class="award-badge"><i class="fas fa-trophy"></i> Top 3 Nationally &mdash; Intel AI Hackathon 2024, IIT Kharagpur</span>\r
    </div>\r
    <div class="hero-links">\r
      <a class="hero-btn primary" href="https://github.com/Nikhil-Rao20/ZOYA" target="_blank"><i class="fab fa-github"></i> GitHub</a>\r
    </div>\r
  </section>\r
\r
  <div class="article-body">\r
\r
    <div class="tag-list">\r
      <span class="tag">AI Humanoid Robot</span>\r
      <span class="tag">LLM</span>\r
      <span class="tag">Retrieval-Augmented Generation</span>\r
      <span class="tag">Raspberry Pi</span>\r
      <span class="tag">Educational Technology</span>\r
      <span class="tag">Intel AI Hackathon</span>\r
    </div>\r
\r
    <div class="article-section" id="abstract">\r
      <h2>Abstract</h2>\r
      <div class="abstract-box">\r
        <p>ZOYA is a physical AI humanoid counselor deployed at RGUKT Nuzvid to address the unmet demand for student academic and administrative guidance. Built on a Raspberry Pi 4B hardware core, ZOYA uses a Retrieval-Augmented Generation (RAG) pipeline powered by LangChain, FAISS, and OpenAI to deliver accurate, institution-specific responses to student queries — entirely through natural voice-to-voice interaction. Presented at the Intel AI Hackathon 2024 at IIT Kharagpur, ZOYA placed in the Top 3 nationally among hundreds of competing teams and has since received extensive media coverage as a novel application of LLM technology to campus student services.</p>\r
      </div>\r
      <div style="text-align:center; margin-top:24px;">\r
        <img class="article-img" src="/assets/img/projects/zoya-working.JPG" alt="ZOYA in operation at RGUKT Nuzvid" style="max-width:720px; display:inline-block;">\r
        <div class="img-caption">Fig. 1 — ZOYA in active operation at RGUKT Nuzvid, engaging with students via voice interface.</div>\r
      </div>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="introduction">\r
      <h2>Introduction</h2>\r
      <p>RGUKT (Rajiv Gandhi University of Knowledge Technologies) Nuzvid serves a large student population, the majority of whom are first-generation college students from rural Andhra Pradesh. Orientation to university systems — enrollment procedures, scholarship applications, academic regulations, hostel rules — is overwhelming for many entering students, and the counseling staff-to-student ratio makes one-on-one guidance impractical at scale.</p>\r
      <p>ZOYA was conceived as a persistent, patient, and always-available alternative: a humanoid robot that students could approach for guidance at any time, in natural spoken Telugu or English, and receive accurate institution-specific answers. The key technical challenge was not building a general-purpose chatbot, but grounding the conversational AI in verified institutional knowledge to prevent hallucination — a critical requirement in a guidance context where wrong information can have real consequences.</p>\r
    </div>\r
\r
    <div class="article-section" id="system">\r
      <h2>System Architecture</h2>\r
\r
      <h3>Hardware</h3>\r
      <p>ZOYA's physical form is a custom-fabricated humanoid frame. The computational core is a <strong>Raspberry Pi 4B</strong> (4GB RAM), chosen for its balance of processing capability, energy efficiency, and community support. Audio input is handled by a directional USB microphone optimized for noisy environments; output via a speaker system integrated into the humanoid chassis.</p>\r
\r
      <h3>RAG Pipeline</h3>\r
      <p>The intelligence core of ZOYA is a Retrieval-Augmented Generation (RAG) pipeline that grounds all responses in a curated institutional knowledge base:</p>\r
      <ol>\r
        <li><strong>Knowledge Ingestion:</strong> RGUKT administrative documents, academic regulations, scholarship guidelines, and FAQs are chunked and embedded using OpenAI's text-embedding-ada-002 model into a <strong>FAISS</strong> vector store.</li>\r
        <li><strong>Retrieval:</strong> Student queries are embedded at query time and the top-k most semantically similar document chunks are retrieved from FAISS.</li>\r
        <li><strong>Generation:</strong> Retrieved context plus conversation history are passed to the LLM (OpenAI GPT) via LangChain's <strong>RetrievalQA</strong> chain. <strong>ConversationBufferMemory</strong> maintains multi-turn context across a counseling session.</li>\r
      </ol>\r
\r
      <div class="code-block">\r
<span class="comment"># Knowledge base setup — embedding and storing institutional documents</span>\r
<span class="keyword">from</span> langchain.embeddings <span class="keyword">import</span> OpenAIEmbeddings\r
<span class="keyword">from</span> langchain.vectorstores <span class="keyword">import</span> FAISS\r
<span class="keyword">from</span> langchain.chains <span class="keyword">import</span> RetrievalQA\r
<span class="keyword">from</span> langchain.memory <span class="keyword">import</span> ConversationBufferMemory\r
\r
embeddings = OpenAIEmbeddings()\r
vectorstore = FAISS.from_documents(chunks, embeddings)\r
retriever = vectorstore.as_retriever(search_kwargs={<span class="string">"k"</span>: 4})\r
\r
memory = ConversationBufferMemory(\r
    memory_key=<span class="string">"chat_history"</span>, return_messages=<span class="keyword">True</span>\r
)\r
qa_chain = RetrievalQA.from_chain_type(\r
    llm=llm, retriever=retriever, memory=memory\r
)</div>\r
\r
      <h3>Voice Interface</h3>\r
      <p>ZOYA listens continuously using Python's <code>speech_recognition</code> library, transcribes detected speech to text, passes it through the RAG pipeline, and speaks the response using <code>pyttsx3</code> text-to-speech. A Tkinter GUI displays the active conversation for the benefit of nearby observers and for accessibility.</p>\r
\r
      <div class="code-block">\r
<span class="keyword">def</span> listen():\r
    r = sr.Recognizer()\r
    <span class="keyword">with</span> sr.Microphone() <span class="keyword">as</span> source:\r
        r.adjust_for_ambient_noise(source, duration=<span class="string">0.5</span>)\r
        audio = r.listen(source, timeout=<span class="string">5</span>, phrase_time_limit=<span class="string">10</span>)\r
    <span class="keyword">try</span>:\r
        <span class="keyword">return</span> r.recognize_google(audio, language=<span class="string">"en-IN"</span>)\r
    <span class="keyword">except</span> sr.UnknownValueError:\r
        <span class="keyword">return</span> <span class="string">""</span></div>\r
    </div>\r
\r
    <div class="article-section" id="impact">\r
      <h2>Impact &amp; Reception</h2>\r
      <p>ZOYA's deployment at RGUKT Nuzvid generated immediate institutional and media interest. The project demonstrates, in operational rather than experimental conditions, that RAG-grounded LLMs can deliver reliable, institution-specific guidance at scale — overcoming the hallucination concern that often limits LLM deployment in high-stakes advisory roles.</p>\r
\r
      <div class="highlight-box">\r
        <h4><i class="fas fa-trophy"></i> Intel AI Hackathon 2024 — Top 3 Nationally</h4>\r
        <p>ZOYA was recognized as a Top 3 national finalist at the Intel AI Hackathon 2024, hosted at IIT Kharagpur, competing against hundreds of teams from institutions across India. The recognition validates both the technical novelty of the RAG-humanoid integration and the real-world impact potential of the deployment.</p>\r
      </div>\r
\r
      <p>Following the hackathon, ZOYA received media coverage from regional and national outlets, highlighting it as a model for AI deployment in resource-constrained educational institutions.</p>\r
\r
      <div class="photo-grid">\r
        <img src="/assets/img/projects/zoya_pre1.jpg" alt="ZOYA presentation at Intel Hackathon" onerror="this.style.display='none'">\r
        <img src="/assets/img/projects/zoya_pre2.jpg" alt="ZOYA team at IIT Kharagpur" onerror="this.style.display='none'">\r
        <img src="/assets/img/projects/zoya_pre3.jpg" alt="ZOYA hardware demonstration" onerror="this.style.display='none'">\r
      </div>\r
      <div class="img-caption">Presentation and demo at the Intel AI Hackathon 2024, IIT Kharagpur.</div>\r
\r
      <div class="photo-grid">\r
        <img src="/assets/img/projects/news1.jpg" alt="ZOYA media coverage" onerror="this.style.display='none'">\r
        <img src="/assets/img/projects/news2.jpg" alt="ZOYA in the news" onerror="this.style.display='none'">\r
        <img src="/assets/img/projects/news3.jpg" alt="Media coverage of ZOYA" onerror="this.style.display='none'">\r
      </div>\r
      <div class="img-caption">Media coverage following ZOYA's deployment at RGUKT Nuzvid.</div>\r
    </div>\r
\r
    <div class="article-section" id="conclusion">\r
      <h2>Conclusion</h2>\r
      <p>ZOYA demonstrates that the combination of retrieval-augmented generation and accessible edge hardware (Raspberry Pi) is sufficient to deploy a viable, trustworthy AI counselor in a real institutional setting. The project addresses a genuine access gap in student services, leverages modern LLM capabilities responsibly through knowledge grounding, and demonstrates that impactful AI deployment does not require datacenter-scale infrastructure. Future development will focus on multilingual support (Telugu, Hindi), expanded institutional knowledge bases covering detailed course advising, and integration with the university's existing student information systems.</p>\r
    </div>\r
\r
    <div class="section-sep">• • •</div>\r
\r
    <div class="article-section" id="resources">\r
      <h2>Resources</h2>\r
      <div>\r
        <a class="resource-btn filled" href="https://github.com/Nikhil-Rao20/ZOYA" target="_blank"><i class="fab fa-github"></i> GitHub Repository</a>\r
      </div>\r
    </div>\r
\r
    <div class="references-section" id="references">\r
      <h2>References</h2>\r
      <ol>\r
        <li>Zawacki-Richter, O., et al. (2019). Systematic review of research on artificial intelligence applications in higher education. <em>International Journal of Educational Technology in Higher Education</em>, 16(1), 39.</li>\r
        <li>Vaswani, A., et al. (2017). Attention Is All You Need. <em>NeurIPS</em>.</li>\r
        <li>Adadi, A. (2021). A Survey on Data-Efficient Algorithms in Deep Learning. <em>IEEE Access</em>.</li>\r
        <li>Upton, E., &amp; Halfacree, G. (2016). <em>Raspberry Pi User Guide</em>. Wiley.</li>\r
        <li>Winkler, R., &amp; Söllner, M. (2018). Unleashing the Potential of Chatbots in Education. <em>AIM Pre-ICIS Workshop</em>.</li>\r
      </ol>\r
    </div>\r
\r
    <div class="article-section" id="contact">\r
      <h2>Contact</h2>\r
      <p>\r
        <strong>Nikhileswara Rao Sulake</strong> —\r
        <a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a> &nbsp;·&nbsp;\r
        <a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">LinkedIn</a> &nbsp;·&nbsp;\r
        <a href="https://github.com/Nikhil-Rao20" target="_blank">GitHub</a>\r
      </p>\r
    </div>\r
\r
  </div>\r
\r
  \r
\r
  \r
\r
  \r
  \r
  \r
  \r
  \r
\r
`,styles:[`\r
    body { background:#fff; font-family:"Open Sans",Arial,sans-serif; font-size:15.5px; line-height:1.75; color:#333; }\r
    .article-hero { background:#ffffff; border-bottom:1px solid #e5e8ed; padding:48px 20px 36px; text-align:center; position:relative; }\r
    .hero-title { font-family:"Montserrat",Helvetica,sans-serif; font-size:3rem; font-weight:700; color:#20364c; line-height:1.22; margin:0 auto 18px; max-width:860px; }\r
    .hero-authors { font-family:"Open Sans",sans-serif; font-size:1.45rem; color:#333; margin-bottom:6px; }\r
    .hero-authors a { color:#1585cf; text-decoration:none; font-weight:600; border-bottom:1px dashed transparent; transition:border-color 0.2s; }\r
    .hero-authors a:hover { border-bottom-color:#1585cf; }\r
    .hero-authors sup { font-size:0.7em; color:slategray; }\r
    .hero-affiliations { font-size:1.3rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:14px; }\r
    .hero-affiliations sup { font-size:0.7em; }\r
    .hero-meta { font-size:1.25rem; color:slategray; font-family:"Open Sans",sans-serif; margin-bottom:14px; }\r
    .award-badge { display:inline-block; background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:5px 16px; border-radius:20px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; margin-bottom:18px; }\r
    .award-badge i { margin-right:5px; }\r
    .hero-links { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin-top:8px; }\r
    .hero-btn { display:inline-flex; align-items:center; gap:7px; padding:8px 20px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; }\r
    .hero-btn:hover { background:#20364c; color:#ffffff; text-decoration:none; }\r
    .hero-btn.primary { background:#20364c; color:#ffffff; }\r
    .hero-btn.primary:hover { background:#1585cf; border-color:#1585cf; }\r
    .article-body { max-width:860px; margin:0 auto; padding:48px 20px 72px; }\r
    .article-body h2 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.9rem; font-weight:600; color:#20364c; margin-top:0; margin-bottom:16px !important; padding-bottom:8px; border-bottom:2px solid slategray; }\r
    .article-body h3 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.55rem; font-weight:600; color:#3d5166; margin-top:30px; margin-bottom:10px !important; }\r
    .article-body h3::after { display:none !important; content:none !important; }\r
    .article-body h3 span { background:transparent; padding-right:0; }\r
    .article-body h4 { font-family:"Montserrat",Helvetica,sans-serif; font-size:1.35rem; font-weight:600; color:slategray; margin-top:22px; margin-bottom:8px !important; text-transform:uppercase; letter-spacing:0.04em; }\r
    .article-section { margin-bottom:52px; }\r
    .abstract-box { background:#f4f7fb; border-left:4px solid #20364c; padding:22px 26px; border-radius:0 8px 8px 0; }\r
    .abstract-box p { margin-bottom:0; font-size:1.45rem; color:#2c3e50; line-height:1.8; }\r
    .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:36px; }\r
    .tag { background:#eaf4fb; color:#1585cf; border:1px solid #b8ddf5; padding:4px 14px; border-radius:20px; font-size:1.2rem; font-weight:500; font-family:"Montserrat",sans-serif; }\r
    .article-img { width:100%; border-radius:8px; margin:20px 0 6px; box-shadow:0 2px 12px rgba(0,0,0,0.09); }\r
    .img-caption { text-align:center; font-style:italic; color:slategray; font-size:1.3rem; margin-bottom:20px; }\r
    .highlight-box { background:#f4f7fb; border-left:4px solid #1585cf; padding:18px 22px; border-radius:0 8px 8px 0; margin:22px 0; }\r
    .highlight-box h4 { color:#20364c; text-transform:none; letter-spacing:0; font-size:1.4rem; margin-top:0; }\r
    .code-block { background:#1c2636; color:#e8eaf0; font-family:"Courier New",Courier,monospace; font-size:1.3rem; padding:22px 24px; border-radius:8px; margin:22px 0; overflow-x:auto; line-height:1.6; }\r
    .code-block .comment { color:#6b8caa; }\r
    .code-block .keyword { color:#7ec8e3; }\r
    .code-block .string { color:#a8d8a0; }\r
    .hero-back-link { position:absolute; top:18px; left:20px; display:inline-flex; align-items:center; gap:6px; font-size:1.3rem; color:#1585cf; font-family:"Montserrat",sans-serif; font-weight:500; text-decoration:none; transition:color 0.2s; }\r
    .hero-back-link:hover { color:#20364c; text-decoration:none; }\r
    .resource-btn { display:inline-flex; align-items:center; gap:7px; padding:9px 22px; border-radius:6px; font-family:"Montserrat",sans-serif; font-size:1.3rem; font-weight:600; text-decoration:none; border:2px solid #20364c; color:#20364c; background:#ffffff; transition:all 0.2s ease; margin-right:8px; margin-top:10px; }\r
    .resource-btn:hover { background:#20364c; color:#fff; text-decoration:none; }\r
    .resource-btn.filled { background:#20364c; color:#fff; }\r
    .resource-btn.filled:hover { background:#1585cf; border-color:#1585cf; }\r
    .photo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:22px 0; }\r
    .photo-grid img { width:100%; border-radius:6px; box-shadow:0 1px 8px rgba(0,0,0,0.1); object-fit:cover; aspect-ratio:4/3; }\r
    .references-section { background:#f4f7fb; padding:26px 24px; border-left:5px solid #20364c; border-radius:0 8px 8px 0; margin:40px 0; overflow-wrap:break-word; word-break:break-word; }\r
    .references-section h2 { border-bottom:none; font-size:1.7rem; padding-bottom:0; margin-bottom:16px !important; }\r
    .references-section ol { padding-left:20px; }\r
    .references-section ol li { font-size:1.25rem; line-height:1.65; color:#3d4147; margin-bottom:10px; }\r
    .references-section ol li a { color:#1585cf; }\r
    .section-sep { text-align:center; margin:48px 0 36px; color:#c8d3de; letter-spacing:0.5em; font-size:1.1rem; }\r
    @media (max-width:767px) { .hero-back-link{position:static;display:inline-flex;margin-bottom:16px;} .hero-title{font-size:2.2rem;} .article-body h2{font-size:1.65rem;} .article-body h3{font-size:1.4rem;} .hero-btn{font-size:1.2rem;padding:7px 15px;} .article-body{padding:32px 15px 60px;} .photo-grid{grid-template-columns:1fr 1fr;} }\r
    @media (max-width:480px) { .hero-title{font-size:1.85rem;} .photo-grid{grid-template-columns:1fr;} }\r
  `],styleSheets:[`https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`,`https://use.fontawesome.com/releases/v5.8.1/css/all.css`,`https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css`,`/assets/css/main.css`],scripts:[]}].map(e=>[e.route,e])),f=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),p=e(((e,t)=>{t.exports=f()}))();function m(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>t(window.scrollY>350);return window.addEventListener(`scroll`,e,{passive:!0}),e(),()=>window.removeEventListener(`scroll`,e)},[]),e?(0,p.jsx)(`button`,{type:`button`,id:`topper`,className:`btn scroll-link`,title:`Top`,onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),children:(0,p.jsx)(`i`,{className:`fa fa-fw fa-2x fa-caret-up`,"aria-hidden":`true`})}):null}var h=[[`about`,`About`,`index.html`],[`research`,`Research`,`research.html`],[`experiences`,`Experience`,`experiences.html`],[`vitae`,`CV`,`/assets/Nikhil_Rao_CV.pdf`],[`projects`,`Projects`,`projects.html`]];function g({children:e,route:t}){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`nav`,{className:`navbar navbar-inverse`,children:(0,p.jsxs)(`div`,{className:`container`,children:[(0,p.jsxs)(`div`,{className:`navbar-header`,children:[(0,p.jsxs)(`button`,{type:`button`,className:`navbar-toggle collapsed`,"data-toggle":`collapse`,"data-target":`#portfolio-nav`,"aria-expanded":`false`,children:[(0,p.jsx)(`span`,{className:`sr-only`,children:`Toggle navigation`}),(0,p.jsx)(`span`,{className:`icon-bar`}),(0,p.jsx)(`span`,{className:`icon-bar`}),(0,p.jsx)(`span`,{className:`icon-bar`})]}),(0,p.jsx)(`a`,{className:`navbar-brand montserrat dark-blue`,href:`#/index.html`,children:`Nikhileswara Rao Sulake`})]}),(0,p.jsx)(`div`,{className:`collapse navbar-collapse`,id:`portfolio-nav`,children:(0,p.jsx)(`ul`,{className:`nav navbar-nav navbar-right`,children:h.map(([e,n,r])=>{let i=r===t||e===`about`&&t===`index.html`;return(0,p.jsx)(`li`,{id:e,className:i?`active`:void 0,children:(0,p.jsx)(`a`,{className:`montserrat${i?` hvr-bubble-bottom`:``}`,href:r.startsWith(`/`)?r:`#/${r}`,target:e===`vitae`?`_blank`:void 0,children:n})},e)})})})]})}),e,(0,p.jsx)(`footer`,{className:`footer`,children:(0,p.jsxs)(`div`,{className:`container`,children:[(0,p.jsx)(`hr`,{}),(0,p.jsxs)(`div`,{className:`row`,children:[(0,p.jsx)(`div`,{className:`col-sm-6 col-xs-12 text-muted footer-copy`,children:(0,p.jsx)(`p`,{children:`© 2026 Nikhileswara Rao Sulake`})}),(0,p.jsx)(`div`,{className:`col-sm-6 col-xs-12 footer-social`,children:(0,p.jsxs)(`ul`,{className:`social-icons pull-right`,children:[(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`https://x.com/s_rao80798`,target:`_blank`,rel:`noreferrer`,children:(0,p.jsx)(`i`,{className:`fab fa-twitter fa-2x`})})}),(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en`,target:`_blank`,rel:`noreferrer`,children:(0,p.jsx)(`i`,{className:`ai ai-google-scholar-square ai-2x`})})}),(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`https://www.linkedin.com/in/nikhileswara-rao-sulake/`,target:`_blank`,rel:`noreferrer`,children:(0,p.jsx)(`i`,{className:`fab fa-linkedin fa-2x`})})}),(0,p.jsx)(`li`,{children:(0,p.jsx)(`a`,{href:`https://github.com/Nikhil-Rao20`,target:`_blank`,rel:`noreferrer`,children:(0,p.jsx)(`i`,{className:`fab fa-github fa-2x`})})})]})})]})]})})]})}function _(e){(0,l.useEffect)(()=>{document.title=e.title;let t=document.querySelector(`meta[name="description"]`);t&&e.description&&(t.content=e.description);let n=e.styles.map((t,n)=>{let r=document.createElement(`style`);return r.dataset.pageStyle=`${e.route}-${n}`,r.textContent=t,document.head.append(r),r}),r=e.styleSheets.filter(e=>!document.querySelector(`link[href="${e}"]`)).map(e=>{let t=document.createElement(`link`);return t.rel=`stylesheet`,t.href=e,document.head.append(t),t});return()=>{n.forEach(e=>e.remove()),r.forEach(e=>e.remove())}},[e])}function v(e,t){(0,l.useEffect)(()=>{let n=e.current;if(!n)return;let r=(e,t,r)=>{n.querySelectorAll(t).forEach(e=>e.classList.toggle(`show`,e.dataset.category===r)),n.querySelectorAll(e).forEach(e=>e.classList.toggle(`active`,e.dataset.tab===r))};t===`gallery.html`&&r(`.gallery-tab`,`.gallery-item`,`research`),t===`prev_projects.html`&&r(`.project-tab`,`.project-card`,`research`);let i=e=>{let t=e.target?.closest(`.gallery-tab`);t?.dataset.tab&&r(`.gallery-tab`,`.gallery-item`,t.dataset.tab);let i=e.target?.closest(`.project-tab`);i?.dataset.tab&&r(`.project-tab`,`.project-card`,i.dataset.tab);let a=e.target?.closest(`.expander`);if(a){let e=a.textContent?.trim()===`show all`;a.textContent=e?`hide all`:`show all`,n.querySelectorAll(`.panel-collapse`).forEach(t=>t.classList.toggle(`in`,e))}let o=e.target?.closest(`#badge-more`);if(o){let e=n.querySelector(`#read-more`);e&&(e.style.display=e.style.display===`none`?`block`:`none`),o.textContent=o.textContent?.trim()===`more`?`less`:`more`}};return n.addEventListener(`click`,i),()=>n.removeEventListener(`click`,i)},[e,t])}function y(e,t){(0,l.useEffect)(()=>{if(!t.current||e.scripts.length===0)return;let n=!1,r=[];return(async()=>{for(let t of e.scripts){if(n)return;let e=document.createElement(`script`);e.async=!1,t.src?(e.src=t.src,await new Promise(t=>{e.addEventListener(`load`,()=>t(),{once:!0}),e.addEventListener(`error`,()=>t(),{once:!0}),document.body.append(e),r.push(e)})):t.code&&(e.textContent=t.code,document.body.append(e),r.push(e))}})(),()=>{n=!0,r.forEach(e=>e.remove())}},[t,e])}function b({route:e}){let t=d.get(e)??d.get(`index.html`),n=(0,l.useRef)(null);_(t),v(n,t.route),y(t,n);let r=(0,p.jsx)(`div`,{ref:n,dangerouslySetInnerHTML:{__html:t.html}});return t.portfolioChrome?(0,p.jsxs)(g,{route:t.route,children:[(0,p.jsx)(`main`,{children:r}),(0,p.jsx)(m,{})]}):(0,p.jsx)(`main`,{children:r})}function x(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`spacer-div-3 hidden-xs hidden-xs`}),(0,p.jsx)(`div`,{id:`main-container`,className:`container`,children:(0,p.jsxs)(`div`,{className:`row`,children:[(0,p.jsxs)(`div`,{className:`col-sm-4`,children:[(0,p.jsx)(`img`,{className:`center-block img img-responsive img-thumbnail`,src:`/assets/img/gallery/Nikhil Rao.png`,alt:`Image of Nikhil`}),(0,p.jsxs)(`p`,{id:`title`,children:[`Bachelors Student`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{id:`program`,children:`Junior in Computer Science and Engineering`})]}),(0,p.jsx)(`table`,{className:`table`,id:`contact-table`,children:(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{style:{width:`30px`},children:(0,p.jsx)(`i`,{className:`fas fa-home`})}),(0,p.jsx)(`td`,{children:`Vijayawada, India`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{style:{width:`30px`},children:(0,p.jsx)(`i`,{className:`fas fa-university`})}),(0,p.jsx)(`td`,{children:`RGUKT Nuzvid`})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`i`,{className:`fas fa-at`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`a`,{href:`mailto:nikhil01446@gmail.com`,children:`nikhil01446@gmail.com`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`i`,{className:`ai ai-google-scholar`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en`,target:`_blank`,children:`Google Scholar`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`i`,{className:`fab fa-linkedin`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`a`,{href:`https://www.linkedin.com/in/nikhileswara-rao-sulake/`,target:`_blank`,children:`Linkedin`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`i`,{className:`fas fa-file-pdf`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`a`,{href:`/assets/Nikhil_Rao_CV.pdf`,target:`_blank`,children:`CV`})})]})]})})]}),(0,p.jsxs)(`div`,{className:`col-sm-8`,children:[(0,p.jsxs)(`p`,{children:[`Hello, I'm Nikhileswara Rao Sulake, a Bachelor’s student in Computer Science and Engineering at `,(0,p.jsx)(`a`,{href:`https://rguktn.ac.in/`,target:`_blank`,rel:`noopener noreferrer`,children:`RGUKT (Rajiv Gandhi University of Knowledge Technologies)`}),` in Vijayawada, India with a strong focus on Deep Learning, Computer Vision, and Medical Imaging. Thank you for visiting my profile.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`I previously interned at`,(0,p.jsx)(`a`,{href:`https://med.stanford.edu/`,target:`_blank`,rel:`noopener noreferrer`,children:`Stanford Medicine`}),` under the guidance of`,(0,p.jsx)(`a`,{href:`https://profiles.stanford.edu/arutselvan-natarajan`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Arutselvan Natarajan`}),` and`,(0,p.jsx)(`a`,{href:`https://profiles.stanford.edu/frezghi-habte`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Frezghi Habte`}),`, and at`,(0,p.jsx)(`a`,{href:`http://www.iitkgp.ac.in/`,target:`_blank`,rel:`noopener noreferrer`,children:`IIT Kharagpur`}),` with`,(0,p.jsx)(`a`,{href:`https://www.linkedin.com/in/partha-acharya-b7664b11/`,target:`_blank`,rel:`noopener noreferrer`,children:`Mr. Partha Acharya`}),`(`,(0,p.jsx)(`a`,{href:`https://www.linkedin.com/company/tata-consultancy-services/`,target:`_blank`,rel:`noopener noreferrer`,children:`TCS Research, India`}),`) and`,(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=yUEeCY0AAAAJ&hl=en`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Subhamoy Mandal`}),`. I have also collaborated with`,(0,p.jsx)(`a`,{href:`https://iisc.ac.in/`,target:`_blank`,rel:`noopener noreferrer`,children:`IISc Bangalore`}),` under the guidance of`,(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=8b7u3b8AAAAJ&hl=en`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Phaneendra Yalavarthy`}),`, with`,(0,p.jsx)(`a`,{href:`https://hms.harvard.edu/`,target:`_blank`,rel:`noopener noreferrer`,children:`Harvard Medical School`}),` under the guidance of`,(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=9u2zK7gAAAAJ&hl=en`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Bhaskara Chintada`}),` and also with `,(0,p.jsx)(`a`,{href:`https://www.ku.ac.ae/`,target:`_blank`,rel:`noopener noreferrer`,children:`Khalifa University of Science and Technology`}),` under the guidance of `,(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=TMpGqLEAAAAJ&hl=en`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Iyyakutti Iyappan Ganapathi`}),`. In industry, I interned at`,(0,p.jsx)(`a`,{href:`https://www.ntwo.ai/`,target:`_blank`,rel:`noopener noreferrer`,children:`Neural Nurture`}),`,`,(0,p.jsx)(`a`,{href:`https://www.linkedin.com/company/parabola9/`,target:`_blank`,rel:`noopener noreferrer`,children:`Parabola9`}),`,`,(0,p.jsx)(`a`,{href:`https://www.linkedin.com/company/coreai/`,target:`_blank`,rel:`noopener noreferrer`,children:`CoreAI`}),`.`]}),(0,p.jsx)(`p`,{children:`I am broadly interested in medical imaging, computer vision, and multimodal learning, with a focus on vision-language models for healthcare. My goal is to develop robust and interpretable AI systems that integrate imaging and clinical knowledge to support diagnosis and improve patient outcomes.`}),(0,p.jsx)(`p`,{children:`I’m actively seeking Research Assistant roles in academic or industrial research labs, with a focus on computer vision, medical imaging, and multimodal AI. I am also preparing to pursue my higher studies through an MSc–Integrated PhD program, and would be glad to connect regarding potential opportunities.`}),(0,p.jsx)(`h3`,{className:`push-down-3`,children:(0,p.jsx)(`span`,{children:`News`})}),(0,p.jsx)(`div`,{className:`news-container`,children:(0,p.jsxs)(`ul`,{id:`news`,children:[(0,p.jsxs)(`li`,{style:{marginBottom:`5px`},children:[(0,p.jsx)(`strong`,{children:`[Mar 2026]`}),` Two papers accepted at the IEEE Guwahati Subsection Conference (GCON) Conference 2026 presenting at IIT Guwahati, India. (`,(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`[Paper1: Uncertainty Quantification]`}),`, `,(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`[Paper2: Multiphase MRI Segmentation]`}),`)`]}),(0,p.jsxs)(`li`,{style:{marginBottom:`5px`},children:[(0,p.jsx)(`strong`,{children:`[Feb 2026]`}),` Top 5 at `,(0,p.jsx)(`a`,{href:`https://cxr-lt.github.io/CXR-LT-2026/#:~:text=5,0.0945`,target:`_blank`,rel:`noopener`,children:`CXR-LT 2026 Challenge`}),` on Long-Tailed Chest X-ray Classification Benchmark at ISBI 2025.`]}),(0,p.jsxs)(`li`,{style:{marginBottom:`5px`},children:[(0,p.jsx)(`strong`,{children:`[Feb 2026]`}),` Presented our work on Lung Digital Twin from Digital Wearables at India AI Summit 2026, New Delhi, India.`]}),(0,p.jsxs)(`li`,{style:{marginBottom:`5px`},children:[(0,p.jsx)(`strong`,{children:`[Jan 2026]`}),` Paper on "YOLOv11 Demystified" accepted as a Poster presentation at the Computer Vision Conference 2026, Netherlands.`]}),(0,p.jsxs)(`li`,{style:{marginBottom:`5px`},children:[(0,p.jsx)(`strong`,{children:`[Nov 2025]`}),` Runner-Up at the Smart India Hackathon (SIH) finals on a disaster management project using drones and computer vision.`]}),(0,p.jsxs)(`li`,{style:{marginBottom:`5px`},children:[(0,p.jsx)(`strong`,{children:`[Nov 2025]`}),` Placed in the Top 10 of the IEEE EMBS BHI 2025 Data Challenge for depression analysis with our framework "`,(0,p.jsx)(`a`,{href:`https://github.com/Nikhil-Rao20/MINDER`,target:`_blank`,rel:`noopener`,children:`MINDER`}),`".`]})]})}),(0,p.jsx)(`h3`,{className:`push-down-3`,children:(0,p.jsx)(`span`,{children:`Education`})}),(0,p.jsxs)(`ul`,{id:`education`,children:[(0,p.jsxs)(`li`,{children:[`Integrated B.Tech in Computer Science and Engineering (2021 – Present)`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{className:`university`,children:(0,p.jsx)(`em`,{children:`Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh, India`})}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{className:`university`,children:(0,p.jsx)(`em`,{children:`CGPA: 8.92/10 `})})]}),(0,p.jsxs)(`li`,{children:[`Certification in Artificial Intelligence and Machine Learning (2023 – 2024)`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{className:`university`,children:(0,p.jsx)(`em`,{children:`Defence Research and Development Organisation (DRDO) & Defence Institute of Advanced Technology (DIAT), Pune`})}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{className:`university`,children:(0,p.jsx)(`em`,{children:`CGPA: 9.2/10`})})]})]})]})]})})]})}function ee(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`spacer-div-3 hidden-xs hidden-xs`}),(0,p.jsx)(`div`,{id:`main-container`,className:`container`,children:(0,p.jsx)(`div`,{className:`row`,children:(0,p.jsxs)(`div`,{className:`col-sm-12`,children:[(0,p.jsx)(`h1`,{children:`Research`}),(0,p.jsx)(`p`,{children:`This page collects my current research publications and preprints across computer vision, medical imaging, multimodal learning, and clinically oriented deep learning. The work spans chest X-ray classification, long-tailed recognition, lung CT segmentation, histopathology image analysis, echocardiography, retinal OCT, and responsible AI topics such as LLM privacy.`}),(0,p.jsxs)(`p`,{children:[`Featured research pages include `,(0,p.jsx)(`a`,{href:`/cxr-lt/`,children:`CXR-LT`}),`, `,(0,p.jsx)(`a`,{href:`/taru-net/`,children:`TARU-Net`}),`, `,(0,p.jsx)(`a`,{href:`/cips-net/`,children:`CIPS-Net`}),`, `,(0,p.jsx)(`a`,{href:`/ecg-free-echo/`,children:`ECG-Free Echo`}),`, and `,(0,p.jsx)(`a`,{href:`/lung-digital-twin/`,children:`Lung Digital Twin`}),`.`]}),(0,p.jsx)(`h3`,{className:`push-down-4`,children:(0,p.jsx)(`span`,{children:`Publications`})}),(0,p.jsxs)(`ul`,{className:`pub-list`,children:[(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-journal`,children:`Medical Image Analysis`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/cxr_lt_challenge_paper.png`,alt:`Loss Design for Long Tail CXR Classification paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`CXR-LT 2026 Challenge: Multi-Center Long-Tailed and Zero Shot Chest X-ray Classification`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[`Hexin Dong, Yi Lin, Pengyu Zhou, Fengnian Zhao, Alan Clint Legasto, Juno Cho, Dohui Kim, Justin Namuk Kim, Mingeon Kim, Sunwoo Kwak, Gabriel Moyà-Alcover, Ky Trung Nguyen, Thanh-Huy Nguyen, Ha-Hieu Pham, Huy-Hieu Pham, Huy Pham Le, `,(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Aina Tur-Serrano, Ruichi Zhang, Ang Zu, Adam E. Flanders, Zhiyong Lu, Ronald M. Summers, Mingquan Lin, Hao Chen, Yuzhe Yang, George Shih`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsx)(`em`,{children:`Medical Image Analysis [*Under Review, Manuscript ID: MEDIA-D-26-01261]`})}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-preprint`,children:`Preprint 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/loss_design_long_tail_paper.png`,alt:`Loss Design for Long Tail CXR Classification paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`Loss Design and Architecture Selection for Long-Tailed Multi-Label Chest X-Ray Classification`})}),(0,p.jsx)(`p`,{className:`pub-authors`,children:(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`})}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsx)(`em`,{children:`ArXiv Preprint`})}),(0,p.jsxs)(`div`,{className:`pub-links`,children:[(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:UeHWp8X0CEIC`,className:`pub-btn`,children:`SCHOLAR`}),(0,p.jsx)(`a`,{href:`https://arxiv.org/abs/2603.02294`,className:`pub-btn`,children:`ArXiv`}),(0,p.jsx)(`a`,{href:`https://github.com/Nikhil-Rao20/Long_Tail`,className:`pub-btn`,children:`CODE`}),(0,p.jsx)(`a`,{href:`https://nikhil-rao20.github.io/cxr-lt/`,className:`pub-btn`,children:`WEBSITE`}),(0,p.jsx)(`a`,{href:`https://scholar.googleusercontent.com/scholar.bib?q=info:v5kkwUYqSfoJ:scholar.google.com/&output=citation&scisdr=CjzT8Uj5EMKY-mnWEXU:ADi0EEUAAAAAadTQCXXtm83SbzNRavFdYk5_2TA&scisig=ADi0EEUAAAAAadTQCfdaZ57JY45QsSNI3byqcys&scisf=4&ct=citation&cd=-1&hl=en`,className:`pub-btn`,children:`BibTeX`})]})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-conf`,children:`MICCAI 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/cips_net_paper.png`,alt:`CIPS-Net for Histopathology paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`CIPS-Net: A Comprehensive Framework for Histopathology Image Analysis`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),(0,p.jsx)(`sup`,{children:`†`}),`, Sai Manikanta Eswar Machara`,(0,p.jsx)(`sup`,{children:`†`}),`, Sivaji Retta, Iyyakutti Iyappan Ganapathi, Naoufel Werghi`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsxs)(`em`,{children:[`29`,(0,p.jsx)(`sup`,{children:`th`}),` Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026 [*Under Review]`]})}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-conf`,children:`MICCAI 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/lung_digital_twin_paper.png`,alt:`Lung Digital Twin from Wearable devices paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`Digital Twin of the Lung from Wearable Biosignals for Real-Time Respiratory Monitoring`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[`Partha Acharya, `,(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Soutrik Chakraborty, Subhamoy Mandal, Suman Chakraborty`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsxs)(`em`,{children:[`29`,(0,p.jsx)(`sup`,{children:`th`}),` Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026 [*Under Review]`]})}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-journal`,children:`IEEE TRPMS`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/taru_net_paper.png`,alt:`TARU-Net paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`TARU-Net: Topology-Aware Deep Learning for High-Fidelity Lung CT Segmentation and Volume Visualization`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[`Partha Acharya, `,(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Aishik Sen, Amitabha Chattopadhyay, Subhamoy Mandal, Suman Chakraborty`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsx)(`em`,{children:`IEEE Transactions on Radiation and Plasma Medical Sciences [*Under Review]`})}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-conf`,children:`IEEE CONNECT 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/minder_paper.png`,alt:`MINDER paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`MINDER: Machine LearnIng Framework for DepressioN Score Analysis in MinDfulness IntERventions across Medically Complex Patients`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Sai Manikanta Eswar Machara, Divya Katam, Sivalal Kethavath`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsxs)(`em`,{children:[`12`,(0,p.jsx)(`sup`,{children:`th`}),` IEEE International Conference on Electronics, Computing and Communication Technologies 2026 [*Under Review]`]})}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-conf`,children:`IEEE GCON 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/multi_sequence_mri_paper.png`,alt:`Multi-Sequence MRI Image Analysis paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`Benchmarking Input Strategies and Hybrid Loss Functions for Multi-Sequence Abdominal MRI Segmentation`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Divya Katam, Venkata Ganesh Sirela, Sivalal Kethavath`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:`IEEE Guwahati Subsection Conference (GCON) 2026`}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-conf`,children:`IEEE GCON 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/mlp_mixer_paper.png`,alt:`Uncertainty Quantification in OCT paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`#`,target:`_blank`,rel:`noopener`,children:`Uncertainty Quantification and Calibration in Retinal OCT Classification with CNN and MLP-Mixer Models`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Sivalal Kethavath`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:`IEEE Guwahati Subsection Conference (GCON) 2026`}),(0,p.jsx)(`div`,{className:`pub-links`})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-journal`,children:`BSPC Journal`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/ecg_free_cardiac_paper.png`,alt:`ECG Free Cardiac Timing in Echo paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:2osOgNQ5qMEC`,target:`_blank`,rel:`noopener`,children:`Signal Extraction Strategies for ECG-Free Cardiac Timing in Echocardiography: An Empirical Investigation`})}),(0,p.jsx)(`p`,{className:`pub-authors`,children:(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`})}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsx)(`em`,{children:`Biomedical Signal Processing and Control [*Under Review]`})}),(0,p.jsxs)(`div`,{className:`pub-links`,children:[(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:2osOgNQ5qMEC`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`SCHOLAR`}),(0,p.jsx)(`a`,{href:`https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6145911`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`SSRN`}),(0,p.jsx)(`a`,{href:`https://track.authorhub.elsevier.com/?uuid=13f39104-c14e-44e2-a77c-e59b30ca7be8`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`Review`}),(0,p.jsx)(`a`,{href:`https://scholar.googleusercontent.com/scholar.bib?q=info:wgvP9TIzIGYJ:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJ3PU:AFtJQiwAAAAAaZiPxPVWHsibQJV8CJgGMnfrTLY&scisig=AFtJQiwAAAAAaZiPxPPtrJ8dtlxbbFmuO1Ww-fQ&scisf=4&ct=citation&cd=-1&hl=en`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`BibTeX`})]})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-conf`,children:`Preprint 2026`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/yolov11_paper.png`,alt:`YOLOv11 paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:u5HHmVD_uO8C`,target:`_blank`,rel:`noopener`,children:`YOLOv11 Architecture Explained: Next-Level Object Detection with Enhanced Speed and Accuracy`})}),(0,p.jsx)(`p`,{className:`pub-authors`,children:(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`})}),(0,p.jsxs)(`p`,{className:`pub-venue`,children:[(0,p.jsx)(`em`,{children:`Medium, Analytics Vidhya`}),`, 2024 \xA0·\xA0 `,(0,p.jsx)(`strong`,{children:`Accepted at CVC 2026`})]}),(0,p.jsxs)(`div`,{className:`pub-links`,children:[(0,p.jsx)(`a`,{href:`https://arxiv.org/pdf/2604.03349`,className:`pub-btn`,children:`Paper`}),(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:u5HHmVD_uO8C`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`SCHOLAR`}),(0,p.jsx)(`a`,{href:`https://medium.com/@nikhil-rao-20/yolov11-explained-next-level-object-detection-with-enhanced-speed-and-accuracy-2dbe2d376f71`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`Medium`}),(0,p.jsx)(`a`,{href:`https://scholar.googleusercontent.com/scholar.bib?q=info:4ZDiBsdFBI4J:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJck4:AFtJQiwAAAAAaZiPak5URSy_Dr9Tyhc5vpgoVX0&scisig=AFtJQiwAAAAAaZiParsG88r9cG-kpKNWhunI9Os&scisf=4&ct=citation&cd=-1&hl=en`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`BibTeX`})]})]})]}),(0,p.jsxs)(`li`,{className:`pub-entry`,children:[(0,p.jsxs)(`div`,{className:`pub-thumb`,children:[(0,p.jsx)(`span`,{className:`pub-venue-badge badge-preprint`,children:`Preprint 2025`}),(0,p.jsx)(`img`,{className:`pub-thumb-img`,src:`/assets/img/publications/alzheimer_paper.png`,alt:`Alzheimer's survey paper thumbnail`}),(0,p.jsx)(`div`,{className:`pub-thumb-placeholder`,style:{display:`none`},children:(0,p.jsx)(`i`,{className:`fas fa-file-alt`})})]}),(0,p.jsxs)(`div`,{className:`pub-body`,children:[(0,p.jsx)(`p`,{className:`pub-title`,children:(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:9yKSN-GCB0IC`,target:`_blank`,rel:`noopener`,children:`Survey on Deep Learning and Explainable AI for Magnetic Resonance Imaging based Alzheimer's Disease Classification`})}),(0,p.jsxs)(`p`,{className:`pub-authors`,children:[(0,p.jsx)(`strong`,{children:`Nikhileswara Rao Sulake`}),`, Sidharth Pancholi`]}),(0,p.jsx)(`p`,{className:`pub-venue`,children:(0,p.jsx)(`em`,{children:`Authorea Preprints`})}),(0,p.jsxs)(`div`,{className:`pub-links`,children:[(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:9yKSN-GCB0IC`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`SCHOLAR`}),(0,p.jsx)(`a`,{href:`https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176231563.32545081`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`TechRxiv`}),(0,p.jsx)(`a`,{href:`https://scholar.googleusercontent.com/scholar.bib?q=info:d2Rq4lbMYOcJ:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJvME:AFtJQiwAAAAAaZiPpMHGXLNl_70Vwl6ouMydjeU&scisig=AFtJQiwAAAAAaZiPpFldbEgPmoaTlE1oIbzATcM&scisf=4&ct=citation&cd=-1&hl=en`,className:`pub-btn`,target:`_blank`,rel:`noopener`,children:`BibTeX`})]})]})]})]}),(0,p.jsx)(`p`,{style:{fontSize:`0.9em`,color:`#666`,fontStyle:`italic`,marginTop:`4px`},children:`† Equal contribution`}),(0,p.jsx)(`h3`,{className:`push-down-4`,children:(0,p.jsx)(`span`,{children:`Ongoing Research Projects`})}),(0,p.jsxs)(`ul`,{children:[(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`HuMAR`}),` - Working on developing efficient and scalable text-instructed vision-language model for multimodal and multitasking Human Centric detection.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Novel Segmentation and Denoising Architectures`}),` - Working on developing of novel self supervised models for multitasking and rigorous experiments on various OCT datasets.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Bone Cancer Detection`}),` - Generaly Whole Genome Sequencing is the gold standard for detection costing $6k per patient, so we are working on a method to detect the bone cancer from the H&E whole slide images.`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`strong`,{children:`Whole Genome Doubling`}),` - WGD is one of the somatic events of cancer, detecting it takes very long time using sequencing, hence we are developing a methdology on detecting the WGD from the H&E WSI's.`]})]}),(0,p.jsx)(`h3`,{className:`push-down-4`,children:(0,p.jsx)(`span`,{children:`Services and Contributions`})}),(0,p.jsx)(`ul`,{children:(0,p.jsxs)(`li`,{children:[`Reviewer for `,(0,p.jsxs)(`strong`,{children:[(0,p.jsx)(`a`,{href:`https://wisdomgale.com/jcsi/`,target:`_blank`,rel:`noopener`,children:`European Journal Of Computer Sciences And Informatics`}),`, 2025`]}),(0,p.jsx)(`br`,{})]})}),(0,p.jsx)(`h3`,{className:`push-down-4`,children:(0,p.jsx)(`span`,{children:`Research Competitions`})}),(0,p.jsxs)(`ul`,{children:[(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`a`,{href:`https://cxr-lt.github.io/CXR-LT-2026/#:~:text=5,0.0945`,target:`_blank`,rel:`noopener`,"aria-label":`Open CXR-LT 2026 Challenge Website`,children:`Top 5`}),` - CXR-LT 2026 Challenge on Long-Tailed Chest X-ray Classification Benchmark, `,(0,p.jsx)(`a`,{href:`https://biomedicalimaging.org/2026/challenges/`,target:`_blank`,rel:`noopener`,children:`ISBI`}),` 2026`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`a`,{href:`https://bhi.embs.org/2025/data-competition/`,target:`_blank`,rel:`noopener`,"aria-label":`Open IEEE EMBS BHI Data Competition Page`,children:`Top 10`}),` - Track 1, IEEE EMBS `,(0,p.jsx)(`a`,{href:`https://bhi.embs.org/2025/`,target:`_blank`,rel:`noopener`,children:`Biomedical & Health Informatics`}),` (BHI) Conference Data Competition, 2025`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`a`,{href:`https://maic.or.kr/challenge/51/public-ranking`,target:`_blank`,rel:`noopener`,"aria-label":`Open MAIC 2024 Public Leaderboard`,children:`Top 22`}),` - Multimodal AI4TB Challenge (MAIC), `,(0,p.jsx)(`a`,{href:`http://www.snuh.org/global/en/main.do`,target:`_blank`,rel:`noopener`,children:`Seoul National University Hospital`}),`, 2024`]}),(0,p.jsxs)(`li`,{children:[(0,p.jsx)(`a`,{href:`https://www.linkedin.com/posts/nikhileswara-rao-sulake_knowledge-ai-research-activity-7280180242139230208-rNWK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7EcjcBV-AIMWnWBDJNNsY1CH8I8YMpRM8`,target:`_blank`,rel:`noopener`,"aria-label":`Open Intel AI Hackathon 2024 Post`,children:`Top 3`}),` - Intel AI Hackathon 2024, `,(0,p.jsx)(`a`,{href:`https://ieeeindicon.org/`,target:`_blank`,rel:`noopener`,children:`IEEE Indicon`}),` at IIT Kharagpur, 2024`]})]})]})})})]})}function S(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(`div`,{className:`container`,children:[(0,p.jsx)(`h1`,{className:`montserrat`,style:{color:`#2c3e50`,marginBottom:`30px`,fontSize:`2.2em`,fontWeight:`600`},children:`Professional Experience`}),(0,p.jsxs)(`div`,{className:`experience-section`,children:[(0,p.jsx)(`h2`,{className:`section-title`,children:`Academic Collaborations`}),(0,p.jsxs)(`div`,{className:`experience-grid`,children:[(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/khalifa_uni_logo.png`,alt:`Khalifa University`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`Khalifa University of Science and Technology`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`Research Collaborator`}),(0,p.jsx)(`p`,{className:`role-title`,children:(0,p.jsx)(`a`,{href:`https://khazna.ku.ac.ae/en/persons/iyyakutti-iyappan-ganapathi/`,children:`Dr. I I Ganapathi`})}),(0,p.jsx)(`p`,{className:`duration`,children:`Aug 2025 - Mar 2026`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/stanford_medicine_logo.png`,alt:`Stanford Medicine`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`Stanford Medicine`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`Molecular Imaging Fellowship`}),(0,p.jsxs)(`p`,{className:`role-title`,children:[(0,p.jsx)(`a`,{href:`https://med.stanford.edu/profiles/frezghi-habte`,children:`Prof. F Habte`}),`, `,(0,p.jsx)(`a`,{href:`https://med.stanford.edu/profiles/arutselvan-natarajan`,children:`Prof. A Natarajan`})]}),(0,p.jsx)(`p`,{className:`duration`,children:`Jun 2025 - Aug 2025`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/iit_kgp_logo.png`,alt:`IIT Kharagpur`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`IIT Kharagpur - SMST`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`Summer Intern and Research Collaborator`}),(0,p.jsxs)(`p`,{className:`role-title`,children:[(0,p.jsx)(`a`,{href:`https://sites.google.com/site/smandalbiomed/home`,children:`Assis Prof. S Mandal`}),`, `,(0,p.jsx)(`a`,{href:`https://www.linkedin.com/in/partha-acharya-b7664b11/`,children:`Mr. P Acharya`})]}),(0,p.jsx)(`p`,{className:`duration`,children:`May 2025 - April 2026`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/harvard_medical_school.png`,alt:`Harvard Medical School`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`Harvard Medical School`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`Research Collaborator`}),(0,p.jsx)(`p`,{className:`role-title`,children:(0,p.jsx)(`a`,{href:`https://scholar.google.com/citations?user=SRdx2PwAAAAJ&hl=en`,children:`Dr. BR Chintada`})}),(0,p.jsx)(`p`,{className:`duration`,children:`Feb 2025 - Present`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/iiser_logo.png`,alt:`Indian Institute of Science`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`IISER, Trivandrum`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`Research Collaborator`}),(0,p.jsx)(`p`,{className:`role-title`,children:(0,p.jsx)(`a`,{href:`https://www.iisertvm.ac.in/faculty/rajisusanmathew`,children:`Dr. Raji Susan Mathew`})}),(0,p.jsx)(`p`,{className:`duration`,children:`Apr 2024 - Sep 2024`})]})]})]}),(0,p.jsxs)(`div`,{className:`experience-section`,children:[(0,p.jsx)(`h2`,{className:`section-title`,children:`Industry Experience`}),(0,p.jsxs)(`div`,{className:`experience-grid`,children:[(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/neural_nurture.png`,alt:`Neural Nurture`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`Neural Nurture`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`Research Intern - LLM`}),(0,p.jsx)(`p`,{className:`duration`,children:`Aug 2025 - Nov 2025`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/coreai.png`,alt:`CoreAI`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`CoreAI Technologies`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`AI Research Engineer`}),(0,p.jsx)(`p`,{className:`duration`,children:`Jan 2025 - Mar 2025`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/parabola.png`,alt:`Parabola`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`Parabola9`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`AI Developer`}),(0,p.jsx)(`p`,{className:`duration`,children:`Dec 2024 - Mar 2025`})]})]})]}),(0,p.jsxs)(`div`,{className:`experience-section`,children:[(0,p.jsx)(`h2`,{className:`section-title`,children:`Extra-Curricular`}),(0,p.jsxs)(`div`,{className:`experience-grid`,children:[(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/rgukt-alumni.png`,alt:`RGUKT Alumni`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`RGUKT Nuzvid`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`President - Alumni Relations`}),(0,p.jsx)(`p`,{className:`duration`,children:`March 2023 - Oct 2025`})]}),(0,p.jsxs)(`div`,{className:`experience-item`,children:[(0,p.jsx)(`div`,{className:`institution-logo`,children:(0,p.jsx)(`img`,{src:`/assets/img/company/gdsc.png`,alt:`Google Developer Student Clubs`})}),(0,p.jsx)(`h3`,{className:`institution-name`,children:`Google Developer Student Clubs`}),(0,p.jsx)(`h4`,{className:`role-title`,children:`AI&ML Head`}),(0,p.jsx)(`p`,{className:`duration`,children:`Aug 2023 - Aug 2024`})]})]})]})]})})}function C(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`spacer-div-3 hidden-xs hidden-xs`}),(0,p.jsxs)(`div`,{id:`main-container`,className:`container-fluid`,style:{maxWidth:`1200px`,margin:`0 auto`,padding:`0 20px`},children:[(0,p.jsx)(`div`,{className:`row`,children:(0,p.jsxs)(`div`,{className:`col-sm-12`,children:[(0,p.jsx)(`h1`,{children:`Projects & Works`}),(0,p.jsx)(`p`,{children:`Explore research projects, applied AI systems, and engineering work across medical imaging, multimodal learning, object detection, document intelligence, and remote sensing.`}),(0,p.jsxs)(`p`,{children:[`Featured project pages include `,(0,p.jsx)(`a`,{href:`/project_articles_v2/sih_drone.html`,children:`DRISTI`}),`, `,(0,p.jsx)(`a`,{href:`/project_articles_v2/multi_backbone_yolo.html`,children:`Backbones of YOLO`}),`, `,(0,p.jsx)(`a`,{href:`/project_articles_v2/cardiolens.html`,children:`CardioLens`}),`, `,(0,p.jsx)(`a`,{href:`/project_articles_v2/umbraUnet.html`,children:`Umbra UNet`}),`, and `,(0,p.jsx)(`a`,{href:`/project_articles_v2/doc2data.html`,children:`Doc2Data`}),`.`]})]})}),(0,p.jsxs)(`div`,{className:`project-category`,children:[(0,p.jsx)(`h3`,{className:`push-down-4`,children:(0,p.jsx)(`span`,{children:`Research Projects`})}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/multi_backbone_yolo.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/yolobackbone.png`,alt:`YOLO Backbones`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/multi_backbone_yolo.html`,target:`_blank`,children:`Backbones of YOLO: A Comprehensive Analysis`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`Comparative analysis enhancing YOLOv8 with modern CNN, Transformer, and Mamba-based backbones to evaluate performance trade-offs in object detection. This research provides insights into the effectiveness of different architectural choices in computer vision models.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Computer Vision`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`YOLO`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Transformers`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`CNN`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/multi_backbone_yolo.html`,className:`project-link`,target:`_blank`,children:`View Analysis →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,style:{backgroundColor:`#000000`},children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/thyroid.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/thyroid.jpg`,alt:`Thyroid Detection`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/thyroid.html`,target:`_blank`,children:`Thyroid Disease Detection using Medical Imaging`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`A medical image analysis system leveraging computer vision for the accurate and early detection of thyroid disorders from ultrasound scans. This project demonstrates the application of deep learning in medical diagnosis and healthcare.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Medical Imaging`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Computer Vision`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Healthcare AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Ultrasound`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/thyroid.html`,className:`project-link`,target:`_blank`,children:`View Research Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/casuality.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/casuality.png`,alt:`Causality Analysis`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/casuality.html`,target:`_blank`,children:`Causality Analysis in Complex Datasets`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`Applied research on causal inference methods to discover and understand hidden relationships within complex, high-dimensional datasets. This work contributes to the field of causal machine learning and interpretable AI.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Causal Inference`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Machine Learning`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Interpretable AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Data Science`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/casuality.html`,className:`project-link`,target:`_blank`,children:`View Research Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/multitask_echo.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/multitask_echo.png`,alt:`Causality Analysis`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/multitask_echo.html`,target:`_blank`,children:`Multi tasking in Echocardiography`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`Applied research on Multitasking Echocardiography.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Causal Inference`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Machine Learning`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Interpretable AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Data Science`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/multitask_echo.html`,className:`project-link`,target:`_blank`,children:`View Research Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/umbraUnet.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/umbranet.png`,alt:`Causality Analysis`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/umbraUnet.html`,target:`_blank`,children:`Umbra UNet: Remote Sensing Image Segmentation`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`This project focuses on developing a novel UNet architecture tailored for remote sensing image segmentation tasks, enhancing the accuracy and efficiency of land cover classification.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Causal Inference`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Machine Learning`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Interpretable AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Data Science`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/umbraUnet.html`,className:`project-link`,target:`_blank`,children:`View Research Details →`})]})]})]}),(0,p.jsxs)(`div`,{className:`project-category`,children:[(0,p.jsx)(`h3`,{className:`push-down-4`,children:(0,p.jsx)(`span`,{children:`Development Projects`})}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/sih_drone.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/Dristi/Drone.png`,alt:`DRISTI Drone`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/sih_drone.html`,target:`_blank`,children:`DRISTI: Autonomous Disaster-Response Drone System`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`An end-to-end autonomous UAV system for survivor detection and medical supply delivery in disaster-affected regions. Built on HolyBro X500 V2 with ArduPilot and on-device Leaf YOLO inference, featuring a novel motorized cable-lowering delivery mechanism. Top 5 Finalists — Smart India Hackathon 2025.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Autonomous UAV`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Disaster Response`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Edge AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Robotics`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/sih_drone.html`,className:`project-link`,target:`_blank`,children:`View Project Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/cardiolens.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/CardioLens_Arch.png`,alt:`CardioLens`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/cardiolens.html`,target:`_blank`,children:`CardioLens: AI-Powered Cardiovascular Detection`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`An AI-powered system for early cardiovascular disease detection using deep learning models to analyze retinal fundus images. This project demonstrates the practical application of computer vision in medical diagnosis and preventive healthcare.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Medical AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Computer Vision`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Healthcare`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Deep Learning`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/cardiolens.html`,className:`project-link`,target:`_blank`,children:`View Project Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/doc2data.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`https://github.com/Nikhil-Rao20/TripleD-AI4AP-Police_Doc2Data/blob/main/pics/2.jpg?raw=true`,alt:`Digitization of Offline Documents`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/doc2data.html`,target:`_blank`,children:`Doc2Data: Towards Digitization of AP Police Handwritten Documents`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`An AI-powered system for early cardiovascular disease detection using deep learning models to analyze retinal fundus images. This project demonstrates the practical application of computer vision in medical diagnosis and preventive healthcare.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Medical AI`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Computer Vision`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Healthcare`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Deep Learning`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/doc2data.html`,className:`project-link`,target:`_blank`,children:`View Project Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,style:{backgroundColor:`#000000`},children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/staws.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/staws.gif`,alt:`STAWS`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/staws.html`,target:`_blank`,children:`STAWS: Smart Traffic Analysis System`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`An AI-powered traffic analysis system that uses computer vision and machine learning to monitor and analyze traffic patterns, providing intelligent insights for urban planning and traffic management.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Computer Vision`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Traffic Analysis`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Urban Planning`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`AI Systems`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/staws.html`,className:`project-link`,target:`_blank`,children:`View Project Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,style:{backgroundColor:`#85A19F`},children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/zoya.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/zoya-working.JPG`,alt:`ZOYA Robot`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/zoya.html`,target:`_blank`,children:`ZOYA: Interactive Talking Robot`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`An interactive talking robot that combines robotics, natural language processing, and human-robot interaction technologies to create an engaging conversational AI experience.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Robotics`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`NLP`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Human-Robot Interaction`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`AI`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/zoya.html`,className:`project-link`,target:`_blank`,children:`View Project Details →`})]})]}),(0,p.jsxs)(`div`,{className:`project-item`,children:[(0,p.jsx)(`div`,{className:`project-image`,style:{backgroundColor:`#000000`},children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/ai-calc.html`,target:`_blank`,children:(0,p.jsx)(`img`,{src:`/assets/img/projects/ai-cal.png`,alt:`AI Calculator`})})}),(0,p.jsxs)(`div`,{className:`project-content`,children:[(0,p.jsx)(`h4`,{className:`project-title`,children:(0,p.jsx)(`a`,{href:`#/project_articles_v2/ai-calc.html`,target:`_blank`,children:`AI Calculator: Intelligent Mathematical Assistant`})}),(0,p.jsx)(`p`,{className:`project-summary`,children:`An intelligent calculator that uses machine learning to predict and suggest mathematical operations, making complex calculations more intuitive and efficient for users.`}),(0,p.jsxs)(`div`,{className:`project-tags`,children:[(0,p.jsx)(`span`,{className:`project-tag`,children:`Machine Learning`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`Mathematical Computing`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`User Interface`}),(0,p.jsx)(`span`,{className:`project-tag`,children:`AI Assistant`})]}),(0,p.jsx)(`a`,{href:`#/project_articles_v2/ai-calc.html`,className:`project-link`,target:`_blank`,children:`View Project Details →`})]})]})]})]})]})}function te(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`spacer-div-3 hidden-xs hidden-xs`}),(0,p.jsx)(`div`,{id:`main-container`,className:`container`,children:(0,p.jsx)(`div`,{className:`row`,children:(0,p.jsxs)(`div`,{className:`col-sm-12`,children:[(0,p.jsx)(`h1`,{children:`Projects & Works`}),(0,p.jsx)(`p`,{children:`Explore my research projects, literature reviews, and more.`})]})})}),(0,p.jsxs)(`div`,{className:`project-tabs`,children:[(0,p.jsx)(`button`,{className:`project-tab active`,"data-tab":`research`,children:`Research Projects`}),(0,p.jsx)(`button`,{className:`project-tab`,"data-tab":`development`,children:`Development Projects`})]}),(0,p.jsxs)(`div`,{className:`projects-grid`,children:[(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/casuality.png`,alt:`Causality Analysis`}),(0,p.jsx)(`div`,{className:`project-title`,children:`Brain MRI PPT Analysis`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Research on Brain MRI Physics`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/yolobackbone.png`,alt:`Causality Analysis`}),(0,p.jsx)(`div`,{className:`project-title`,children:`Backbones of YOLO`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`omparative Analysisenhanced yolov8 with CNN, Transformer and Mamba based Backbones`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/casuality.png`,alt:`Causality Analysis`}),(0,p.jsx)(`div`,{className:`project-title`,children:`Causality Analysis`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Research on causal inference methods for understanding relationships in complex datasets.`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/dgyolo.png`,alt:`DG-YOLO`}),(0,p.jsx)(`div`,{className:`project-title`,children:`DG-YOLO`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Domain generalization approach for YOLO object detection in varying environments.`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/thyroid.jpg`,alt:`Thyroid Detection`}),(0,p.jsx)(`div`,{className:`project-title`,children:`Thyroid Disease Detection`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Medical image analysis system for early detection of thyroid disorders.`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`development`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/cardiolens.gif`,alt:`CardioLens`}),(0,p.jsx)(`div`,{className:`project-title`,children:`CardioLens`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`AI-powered cardiovascular disease detection using retinal fundus images and deep learning.`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`development`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/staws.gif`,alt:`CardioLens`}),(0,p.jsx)(`div`,{className:`project-title`,children:`STAWS`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Traffic AI Powered`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`development`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/swetcha.gif`,alt:`CardioLens`}),(0,p.jsx)(`div`,{className:`project-title`,children:`SWETCHA`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`NCC`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`development`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/handsign.png`,alt:`Hand Sign Recognition`}),(0,p.jsx)(`div`,{className:`project-title`,children:`Hand Sign Recognition`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Real-time hand gesture recognition system using computer vision and machine learning.`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`development`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/zoya-working.JPG`,alt:`CardioLens`}),(0,p.jsx)(`div`,{className:`project-title`,children:`ZOYA`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`Talking Robot`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]}),(0,p.jsxs)(`div`,{className:`project-card`,"data-category":`development`,children:[(0,p.jsx)(`img`,{className:`project-thumb`,src:`/assets/img/projects/ai-cal.png`,alt:`AI Calculator`}),(0,p.jsx)(`div`,{className:`project-title`,children:`AI Calculator`}),(0,p.jsx)(`div`,{className:`project-summary`,children:`An intelligent calculator that uses machine learning to predict and suggest mathematical operations.`}),(0,p.jsx)(`a`,{className:`project-btn`,href:`/assets/project1.html`,children:`View Details`})]})]})]})}function ne(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`spacer-div-3 hidden-xs hidden-xs`}),(0,p.jsx)(`div`,{id:`main-container`,className:`container`,children:(0,p.jsx)(`div`,{className:`row`,children:(0,p.jsxs)(`div`,{className:`col-sm-12`,children:[(0,p.jsx)(`h1`,{children:`Photo Gallery`}),(0,p.jsx)(`p`,{children:`Explore my research, achievements, and travel adventures`})]})})}),(0,p.jsxs)(`div`,{className:`gallery-tabs`,children:[(0,p.jsx)(`button`,{className:`gallery-tab active`,"data-tab":`research`,children:`Research`}),(0,p.jsx)(`button`,{className:`gallery-tab`,"data-tab":`achievements`,children:`Achievements`}),(0,p.jsx)(`button`,{className:`gallery-tab`,"data-tab":`travelling`,children:`Travelling`})]}),(0,p.jsxs)(`div`,{className:`masonry-gallery`,id:`gallery`,children:[(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/gallery/profile_main_pic.jpg`,alt:`In the Lab`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Working on deep learning models in the lab`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`research`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/gallery/profile_main_pic.jpg`,alt:`Conference Poster`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Presenting my research poster at ICVGIP 2025`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/drdo-1.png`,alt:`DRDO Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`DRDO & DIAT Certification in AI & ML`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/drdo-3.png`,alt:`DRDO Certificate`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Advanced AI Certification from DRDO`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/intel-1.jpg`,alt:`Intel AI Hackathon`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Intel AI Hackathon Participation`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/intel-2.jpg`,alt:`Intel Competition`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Intel AI Competition Achievement`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/intel-3.jpg`,alt:`Intel Event`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Intel AI Event Participation`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/intel-6.jpg`,alt:`Intel Recognition`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Intel AI Recognition Award`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/maic-1.jpg`,alt:`MAIC Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`MAIC Competition Success`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/maic-3.png`,alt:`MAIC Certificate`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`MAIC Certification Achievement`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/ncc-3.jpg`,alt:`NCC Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`NCC Training Achievement`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/ncc-4.jpg`,alt:`NCC Certificate`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`NCC Certification`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/parabola-1.jpg`,alt:`Parabola Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Parabola Competition Success`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/police-1.jpg`,alt:`Police Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Police Department Recognition`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/police-2.jpg`,alt:`Police Certificate`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Police Achievement Certificate`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/police-3.jpg`,alt:`Police Award`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Police Department Award`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/scientia-2.jpg`,alt:`Scientia Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Scientia Competition Success`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/blog.png`,alt:`Blog Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Blog Writing Achievement`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`achievements`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/achivs/zoya-1.JPG`,alt:`Zoya Achievement`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Zoya Project Achievement`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/araku.jpg`,alt:`Araku Valley`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Araku Valley - Scenic Beauty`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/araku_2.jpg`,alt:`Araku Valley View`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Araku Valley - Panoramic View`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/araku_3.jpg`,alt:`Araku Valley Landscape`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Araku Valley - Mountain Landscape`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/araku_4.jpg`,alt:`Araku Valley Scenery`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Araku Valley - Natural Scenery`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/bang.jpg`,alt:`Bangalore`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Bangalore - Garden City`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/bhavani_islands.jpg`,alt:`Bhavani Islands`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Bhavani Islands - River Beauty`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/bza.jpg`,alt:`Vijayawada`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Vijayawada - City View`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/charminar.jpg`,alt:`Charminar`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Charminar - Hyderabad Icon`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/chidambaram.jpg`,alt:`Chidambaram Temple`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Chidambaram Temple - Ancient Architecture`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/cmr_hyd.jpg`,alt:`CMR Hyderabad`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`CMR Hyderabad - Campus View`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/guitar.jpg`,alt:`Guitar Performance`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Guitar Performance - Musical Journey`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/hyd_army_unit.jpg`,alt:`Hyderabad Army Unit`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Hyderabad Army Unit - Military Visit`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/Hyder_army_unit.jpg`,alt:`Hyderabad Army Unit`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Hyderabad Army Unit - Training Ground`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/iisc_2.jpg`,alt:`IISc Bangalore`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`IISc Bangalore - Premier Institute`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/IITKGP.jpg`,alt:`IIT Kharagpur`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`IIT Kharagpur - Campus Visit`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/Intel AI Hackathon.jpg`,alt:`Intel AI Hackathon`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Intel AI Hackathon - Competition`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/kali_mata.jpg`,alt:`Kali Mata Temple`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Kali Mata Temple - Spiritual Visit`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/kharagpur.jpg`,alt:`Kharagpur`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Kharagpur - City Exploration`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/krishna_dam.jpg`,alt:`Krishna Dam`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Krishna Dam - Engineering Marvel`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/meet_with_GC_Indian_army.jpg`,alt:`Meeting with GC Indian Army`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Meeting with GC Indian Army - Military Interaction`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/orissa.jpg`,alt:`Odisha`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Odisha - State Visit`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/rajamundry.jpg`,alt:`Rajahmundry`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Rajahmundry - Cultural Heritage`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/sklm_aitam.jpg`,alt:`SKLM AITAM`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`SKLM AITAM - Institution Visit`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/srisailam_dam.jpg`,alt:`Srisailam Dam`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Srisailam Dam - Hydroelectric Project`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/thala_for_reason.jpg`,alt:`Thala for Reason`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Thala for Reason - Event Participation`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/thanjavur.jpg`,alt:`Thanjavur`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Thanjavur - Historical City`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/trad.jpg`,alt:`Traditional Event`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Traditional Event - Cultural Celebration`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/vicotira_mahal.jpg`,alt:`Victoria Mahal`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Victoria Mahal - Palace Architecture`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/viza.jpg`,alt:`Vizag`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Vizag - Port City`})]}),(0,p.jsxs)(`div`,{className:`gallery-item`,"data-category":`travelling`,children:[(0,p.jsx)(`img`,{className:`gallery-img`,src:`/assets/img/travel/vizag_beach.jpg`,alt:`Vizag Beach`}),(0,p.jsx)(`div`,{className:`gallery-caption`,children:`Vizag Beach - Coastal Beauty`})]})]})]})}function re(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`spacer-div-3 hidden-xs hidden-xs`}),(0,p.jsx)(`div`,{id:`main-container`,className:`container`,children:(0,p.jsxs)(`div`,{className:`container`,id:`form-wrapper`,children:[(0,p.jsxs)(`form`,{role:`form`,id:`form`,className:`contact-form shake`,"data-toggle":`validator`,children:[(0,p.jsx)(`div`,{className:`form-group`,children:(0,p.jsxs)(`div`,{className:`controls`,children:[(0,p.jsx)(`input`,{type:`text`,id:`name`,className:`form-control`,name:`name`,placeholder:`Name`,required:!0,"data-error":`Please enter your name`}),(0,p.jsx)(`div`,{className:`help-block with-errors`})]})}),(0,p.jsx)(`div`,{className:`form-group`,children:(0,p.jsxs)(`div`,{className:`controls`,children:[(0,p.jsx)(`input`,{type:`email`,className:`email form-control`,id:`email`,name:`email`,placeholder:`Email`,required:!0,"data-error":`Please enter your email`}),(0,p.jsx)(`div`,{className:`help-block with-errors`})]})}),(0,p.jsx)(`div`,{className:`form-group`,children:(0,p.jsxs)(`div`,{className:`controls`,children:[(0,p.jsx)(`textarea`,{id:`message`,rows:7,placeholder:`Massage`,name:`message`,className:`form-control`,required:!0,"data-error":`Write your message`}),(0,p.jsx)(`div`,{className:`help-block with-errors`})]})}),(0,p.jsx)(`button`,{type:`submit`,id:`submit`,className:`btn btn-success`,children:`Send Message`}),(0,p.jsx)(`div`,{id:`msgSubmit`,className:`h3 text-center hidden`}),(0,p.jsx)(`div`,{className:`clearfix`})]}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`h4`,{id:`success`}),(0,p.jsx)(`p`,{children:(0,p.jsx)(`b`,{children:`** My e-mail & cell numbers are given in About section. E-mail is preferred.`})})]})})]})}var w=`index.html`;function ie(){return decodeURIComponent(window.location.hash.replace(/^#\/?/,``))||w}function ae({route:e,children:t}){let n=d.get(e),r=(0,l.useRef)(null);_(n),v(r,n.route),y(n,r);let i=(0,p.jsx)(`div`,{ref:r,className:`page-content`,children:t});return n.portfolioChrome?(0,p.jsxs)(g,{route:n.route,children:[(0,p.jsx)(`main`,{children:i}),(0,p.jsx)(m,{})]}):(0,p.jsx)(`main`,{children:i})}function oe(){let[e,t]=(0,l.useState)(ie);switch((0,l.useEffect)(()=>{let e=()=>t(ie());return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),e){case`index.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(x,{})});case`research.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(ee,{})});case`experiences.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(S,{})});case`projects.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(C,{})});case`prev_projects.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(te,{})});case`gallery.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(ne,{})});case`contact.html`:return(0,p.jsx)(ae,{route:e,children:(0,p.jsx)(re,{})});default:return(0,p.jsx)(b,{route:e})}}(0,u.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(oe,{})}));