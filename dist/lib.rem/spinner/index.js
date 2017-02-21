/*! vue-ydui v0.2.3 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Spinner=void 0;var i=n(78),o=r(i);t.Spinner=o.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},2:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=c[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(u(r.parts[o],t));c[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],u=i[3],l={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e,t){var n,r,i;if(t.singleton){var o=v++;n=h||(h=s(t)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=s(t),r=d.bind(null,n),i=function(){a(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=c[s.id];u.refs--,o.push(u)}if(e){var l=i(e);r(l,t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete c[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},28:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'.m-spinner{border:1px solid #eae8e8;border-radius:1px;display:inline-block;overflow:hidden}.m-spinner>a{float:left;width:.6rem;height:.6rem;line-height:.62rem;text-align:center;font-weight:700;color:#666;letter-spacing:0;background-color:#f8f8f8}.m-spinner>a:active{background-color:#ececec}.m-spinner>a:after{font-family:YDUI-INLAY;color:#777;font-size:.18rem}.m-spinner>a:first-child:after{content:"\\E60B"}.m-spinner>a:last-child:after{content:"\\E602"}.m-spinner>input{letter-spacing:0;float:left;width:.85rem;height:.6rem;line-height:2.7;text-align:center;color:#666;border:none;font-size:.26rem;background-color:#fff}',""])},46:function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},78:function(e,t,n){var r,i;n(46),r=n(151);var o=n(116);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=r},116:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"m-spinner"},[n("a",{ref:"minus",attrs:{href:"javascript:;"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.counter,expression:"counter"}],ref:"numInput",attrs:{type:"text",readonly:e.readonly,placeholder:""},domProps:{value:e._s(e.counter)},on:{input:function(t){t.target.composing||(e.counter=t.target.value)}}}),e._v(" "),n("a",{ref:"add",attrs:{href:"javascript:;"}})])},staticRenderFns:[]}},151:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-spinner",data:function(){return{counter:0,tapParams:{timer:null,tapStartTime:0},parms:{max:0,min:-1}}},props:{unit:{default:1,validator:function(e){return/^([1-9]\d*)$/.test(e)}},max:{default:0,validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)}},min:{default:-1,validator:function(e){return/^((-?([1-9]\d*))|0)$/.test(e)}},longpress:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},value:{validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)}}},methods:{init:function(){this.checkParameters()&&(this.setDefalutValue(),this.bindEvents())},checkParameters:function(){var e=~~this.max,t=~~this.unit,n=~~this.min;return e<t&&0!=e?(console.error("[YDUI warn]: The parameter 'max'("+e+") must be greater than or equal to 'unit'("+t+")."),!1):e%t!=0?(console.error("[YDUI warn]: The parameter 'max'("+e+") and 'unit'("+t+") must be multiple."),!1):n%t!=0&&n>=0?(console.error("[YDUI warn]: The parameter 'min'("+n+") and 'unit'("+t+") must be multiple."),!1):!(e<n&&0!=e)||(console.error("[YDUI warn]: The parameter 'max'("+e+") must be greater than to 'min'("+n+")."),!1)},setDefalutValue:function(){var e=~~this.unit,t=~~this.min,n=~~this.value;return~~n>0?void this.setValue(n):void(t<0?this.setValue(e):this.setValue(t))},calculation:function(e){var t=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,r=~~this.unit;if(!this.readonly){var i=this.counter,o=void 0;if("add"==e){if(o=i+r,0!=t&&o>t)return}else if(o=i-r,o<n)return;this.setValue(o),this.longpress&&this.longpressHandler(e)}},setValue:function(e){var t=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,r=~~this.unit;/^(([1-9]\d*)|0)$/.test(e)||(e=r),e>t&&0!=t&&(e=t),e%r>0&&(e=e-e%r+r,e>t&&0!=t&&(e-=r)),e<n&&(e=n-n%r),this.counter=e,this.$emit("input",e)},longpressHandler:function(e){var t=this,n=(new Date).getTime()/1e3,r=n-this.tapParams.tapStartTime;r<1&&(r=.5);var i=10*r;30==r&&(i=50),r>=40&&(i=100),this.tapParams.timer=setTimeout(function(){t.calculation(e)},1e3/i)},clearTapTimer:function(){clearTimeout(this.tapParams.timer)},bindEvents:function(){var e=this,t=this.$refs.add,n=this.$refs.minus,r={mousedownEvent:"touchstart",mouseupEvent:"touchend"},i=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();i||(r.mousedownEvent="mousedown",r.mouseupEvent="mouseup"),t.addEventListener(r.mousedownEvent,function(n){e.longpress&&(n.preventDefault(),n.stopPropagation(),e.tapParams.tapStartTime=(new Date).getTime()/1e3,t.addEventListener(r.mouseupEvent,e.clearTapTimer)),e.calculation("add")}),n.addEventListener(r.mousedownEvent,function(t){e.longpress&&(t.preventDefault(),t.stopPropagation(),e.tapParams.tapStartTime=(new Date).getTime()/1e3,n.addEventListener(r.mouseupEvent,e.clearTapTimer)),e.calculation("minus")}),this.$refs.numInput.addEventListener("change",function(){e.setValue(e.counter)})}},mounted:function(){this.init()}}}})});