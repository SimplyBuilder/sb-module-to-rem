"use strict";var r=(e,n=16)=>{try{let r=e,t="0";if("string"==typeof e||e instanceof String){var i=e.split("px");if(1<e.split("rem").length)return e;1<i.length&&(r=i[0])}return r=Number(r),t=1<=r?1/n*r+"rem":t}catch(r){console.error(r)}return e};export{r as toRem};