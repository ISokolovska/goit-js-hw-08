!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,v=Math.min,d=function(){return c.Date.now()};function g(e,t,i){var o,r,a,u,f,l,c=0,s=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function h(e){return c=e,f=setTimeout(O,t),s?j(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-c>=a}function O(){var e=d();if(w(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return g?v(n,a-(e-c)):n}(e))}function S(e){return f=void 0,b&&o?j(e):(o=r=void 0,u)}function T(){var e=d(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return h(l);if(g)return f=setTimeout(O,t),j(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(g="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:S(d())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j="feedback-form-state";b.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.elements.email.value,message:b.elements.message.value};console.log(t),localStorage.removeItem(j),b.reset()})),b.addEventListener("input",t((function(){const e={email:b.elements.email.value,message:b.elements.message.value};localStorage.setItem(j,JSON.stringify(e))}),500)),function(){if(localStorage.getItem(j)){const e=JSON.parse(localStorage.getItem(j));b.elements.email.value=e.email,b.elements.message.value=e.message}}()}();
//# sourceMappingURL=03-feedback.4328f1c6.js.map