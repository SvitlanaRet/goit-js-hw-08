!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(x,t),d?b(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function x(){var e=p();if(T(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?b(e):(r=o=void 0,u)}function h(){var e=p(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(x,t),b(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:O(p())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j="feedback-form-state",T={},x={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form  input"),textarea:document.querySelector(".feedback-form textarea")};x.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;console.log({email:n.value.trim(),message:r.value.trim()}),localStorage.getItem(j)&&localStorage.removeItem(j);e.currentTarget.reset()})),x.form.addEventListener("input",e(t)((function(e){T={email:x.input.value.trim(),message:x.textarea.value.trim()},localStorage.setItem(j,JSON.stringify(T))}),500)),function(){var e=localStorage.getItem(j);if(e){var t,n;T=JSON.parse(e),x.input.value=null!==(t=T.email)&&void 0!==t?t:"",x.textarea.value=null!==(n=T.message)&&void 0!==n?n:""}}()}();
//# sourceMappingURL=03-feedback.9e2715c9.js.map
