var mdg=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports={patterns:{"#":new RegExp("\\d"),"&":new RegExp("[a-zA-Z]"),"@":new RegExp("[a-zA-Z0-9]"),$:new RegExp("[^a-zA-Z0-9\\s]")},allowedChars:new RegExp("[#@&\\$]","gi"),separators:new RegExp("[,\\.\\/(\\[\\{\\}\\])|\\-_\\*\\^:;\\|—¯]","g"),placeholder:"ø"}},function(e,t){e.exports=(e,t)=>e.replace(t,"")},function(e,t){e.exports=e=>e.join("")},function(e,t,n){const r=n(4);e.exports=function({pattern:e,onError:t,onSuccess:n,validation:o}){let a={pattern:e,onError:t,onSuccess:n,validation:o};const s=e=>r({input:e,...a}),c={...a,check:s,checkField:(e,t="input")=>{e.addEventListener(t,(function(e){e.target.value=s(e.target.value).output}))}};return Object.freeze(c),c}},function(e,t,n){const r=n(1),{separators:o}=n(0),a=n(5),s=n(7),c=n(12),u=()=>null;e.exports=({input:e,pattern:t,onSuccess:n=u,onError:l=u,validation:i=u})=>{const p=s(t),d=r(e,o),f=p.map(e=>a(d,e)),g=c(f),{completed:h,output:m}=g,x=i(m);if(!1===x)l();else{(h?n:l)()}return{input:e,output:m,completed:h,isValid:x}}},function(e,t,n){const{patterns:r}=n(0),o=n(6);e.exports=(e,t)=>{const{cleanedMask:n}=t;let a="";return[...e].forEach((e,t)=>{const o=r[n[t]];null!=o&&o.test(e)&&(a+=e)}),o(a,t)}},function(e,t,n){const r=n(2),{separators:o,placeholder:a}=n(0),s=n(1);e.exports=(e,t)=>{let n=r(t.blindedMask);const c=new RegExp(o.source+"*"+a+".*","g");[...e].forEach(e=>{n=n.replace(a,e)}),n=s(n,c);const{cleanedMask:u,originalMask:l}=t;return{cleanedMask:u,output:n,completed:n.length===l.length}}},function(e,t,n){const r=n(8),o=n(10),a=n(11);e.exports=e=>{const t=Array.isArray(e)?e:[e],n=t.map(e=>(e=>{const t=[...e];return{originalMask:t,cleanedMask:o(e),blindedMask:a(t)}})(e));return r({maskSettings:n,checkKey:"originalMask",orderByKey:"cleanedMask",errorMsg:"Two or more masks have the same amount of input characters. You must correct it."})}},function(e,t,n){const r=n(9);e.exports=({maskSettings:e,checkKey:t,orderByKey:n,errorMsg:o})=>Object.assign([],e).sort((e,a)=>{if(r(e[t])===r(a[t]))throw o;return e[n].length-a[n].length})},function(e,t,n){const r=n(2),o=n(1),{separators:a}=n(0);e.exports=e=>{const t=r(e);return o(t,a)}},function(e,t,n){const r=n(1),{allowedChars:o,separators:a}=n(0);e.exports=e=>{const t=r(e,a),n=t.match(o);if(t.length!==n.length)throw"The mask has some invalid pattern character.";return n}},function(e,t,n){const{allowedChars:r,placeholder:o}=n(0);e.exports=e=>e.map(e=>e.match(r)?o:e)},function(e,t,n){const r=n(1),{separators:o}=n(0),a=e=>r(e.output,o).length;e.exports=e=>e.sort((e,t)=>a(t)-a(e)).filter((e,t,n)=>a(e)===a(n[0])).filter((e,t,n)=>n.some(e=>e.completed)?e.completed:e).reduce((e,t)=>e.cleanedMask.length<t.cleanedMask.length?e:t)}]);export default mdg;export{mdg};