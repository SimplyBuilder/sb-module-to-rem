"use strict";const i={px:e=>parseFloat(e.tempLength),em:e=>parseFloat(e.tempLength)*e.base,pt:e=>1.333*parseFloat(e.tempLength)};var e=(t,n=4)=>{try{if(void 0===t)return"0";let e=t.toString(),r="0";var a=1<=Number(n)?Number(n):4,o=e.replace(/[\d.]/g,"");if("rem"===o)return"0rem"===e?"0":e;if(i[o])e=i[o]({tempLength:e,base:16});else if(o)return 0<Number(e.replace(o,""))?("undefined"===process.env.unitTest&&console.warn(`Unit '${o}' not recognized. Returning original value.`),t):"0";return 0<(r=0<e?1/16*e:r)?Number(parseFloat(r).toFixed(a))+"rem":"0"}catch(e){console.error(e)}return t};export{e as toRem};