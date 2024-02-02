### <span id="sb-module-to-rem">@jamilservices/sb-module-to-rem</span>   
## Simply Builder Module - Convert Pixels, Points, and Ems to Rem
      
The `toRem` function is a utility for converting length units (px, em, pt) to rem units in JavaScript.   
This conversion is particularly useful for responsive web design, where rem units provide scalability and flexibility. The module simplifies the process of ensuring that elements scale proportionally across different screen sizes by leveraging the rem unit, which is based on the root element's font size.     

#
[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
[![SimplyBuilder - sb-module-to-rem](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-module-to-rem&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-module-to-rem)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-module-to-rem)](https://github.com/SimplyBuilder/sb-module-to-rem/blob/main/LICENSE)

[![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/SimplyBuilder/sb-module-to-rem)](https://github.com/SimplyBuilder/sb-module-to-rem/blob/main/package.json#L4)
[![GitHub Release](https://img.shields.io/github/v/release/SimplyBuilder/sb-module-to-rem)](https://github.com/SimplyBuilder/sb-module-to-rem/releases)
[![Test with Node.js](https://img.shields.io/badge/Node.js->=20_10-blue?logo=node.js&logoColor=white)](https://nodejs.org)

[![npm - @jamilservices/sb-module-to-rem](https://img.shields.io/badge/npm-%40jamilservices%2Fsb--module--to--rem-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/sb-module-to-rem)
[![yarn - @jamilservices/sb-module-to-rem](https://img.shields.io/badge/yarn-%40jamilservices%2Fsb--module--to--rem-blue?logo=yarn&logoColor=white)](https://yarnpkg.com/package/@jamilservices/sb-module-to-rem)       



[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/jamilservicessb-module-to-rem-hcxj3h?embed=1&hideDevTools=1&hideExplorer=1&hideNavigation=1&view=preview)


#      

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Basic Conversion](#basic-conversion)
- [Specifying Decimal Places](#specifying-decimal-places)
- [Handling Other Units](#handling-other-units)
- [Unrecognized Units](#unrecognized-units)
- [License](#license)
- [Technologies](#technologies)
#

## <span id="features">Features</span>
[(go to top)](#sb-module-to-rem)
- **Multiple Units**: Converts px, em, and pt units to rem.
- **Customizable Precision**: Allows specifying the number of decimal places in the returned value.
- **Error Handling**: Returns the original value for unrecognized units and logs a warning.

## <span id="installation">Installation</span>
[(go to top)](#sb-module-to-rem)   
To install the `toRem` function, use the following npm command:
       
- from GitHub (npm/yarn):       
~~~bash
npm install --save-dev git+https://github.com/SimplyBuilder/sb-module-to-rem.git
~~~
~~~bash
yarn add --dev git+https://github.com/SimplyBuilder/sb-module-to-rem.git
~~~
       
- from npm (npm/yarn):       
~~~bash
npm install --save-dev @jamilservices/sb-module-to-rem
~~~
~~~bash
yarn add --dev @jamilservices/sb-module-to-rem
~~~             

> [!NOTE]
> This will add the toRem module as a development dependency in your project.
     
#              
- CDN:
~~~text
https://unpkg.com/@jamilservices/sb-module-to-rem@latest/src/main.js

https://cdn.jsdelivr.net/gh/SimplyBuilder/sb-module-to-rem@latest/src/main.min.js
~~~             

## <span id="usage">Usage</span>
[(go to top)](#sb-module-to-rem)   
Once installed, you can import the toRem function into your JavaScript project like so:    
       
- from install (npm/yarn):       
~~~javascript
import { toRem } from '@jamilservices/sb-module-to-rem';
~~~     
#        
- from cdn (html):
~~~html
<script type="module">
import { toRem } from 'https://unpkg.com/@jamilservices/sb-module-to-rem@latest/src/main.js';
// code
</script>
~~~     
or     
~~~html
<script type="module">
import { toRem } from 'https://cdn.jsdelivr.net/gh/SimplyBuilder/sb-module-to-rem@latest/src/main.min.js';
// code
</script>
~~~
#        

Now you can use the function in your project to convert length units to rem.


### <span id="basic-conversion">Basic Conversion</span>
[(go to top)](#sb-module-to-rem)   
Convert a length from pixels to rem:
~~~javascript
const lengthInRem = toRem("24px");
console.log(lengthInRem); // Output: "1.5rem"
~~~

### <span id="specifying-decimal-places">Specifying Decimal Places</span>
[(go to top)](#sb-module-to-rem)   
You can specify the number of decimal places in the returned value:
~~~javascript
const preciseLengthInRem = toRem("18px", 2);
console.log(preciseLengthInRem); // Output: "1.12rem"
~~~

### <span id="handling-other-units">Handling Other Units</span>
[(go to top)](#sb-module-to-rem)   
Convert lengths from em or pt to rem:
~~~javascript
const lengthFromEm = toRem("2em");
console.log(lengthFromEm); // Output based on default base of 16px for 1em

const lengthFromPt = toRem("12pt");
console.log(lengthFromPt); // Output based on conversion factor from pt to px to rem
~~~

### <span id="unrecognized-units">Unrecognized Units</span>
[(go to top)](#sb-module-to-rem)   
For unrecognized units, the original value is returned:
~~~javascript
const unchangedLength = toRem("5vw");
console.log(unchangedLength); // Output: "5vw"
~~~

#
### <span id="license">License</span>
[(go to top)](#sb-module-to-rem)

Released under [MIT](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).
[(go to top)](#sb-module-to-rem)

* You can freely modify and reuse.
* The original license must be included with copies of this software.
* Please link back to this repo if you use a significant portion the source code.


#
### <span id="technologies">👩‍💻💻 Technologies</span>   
[(go to top)](#sb-module-to-rem)   

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-196cb2?style=for-the-badge&logo=typescript&logoColor=white)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)   

#
