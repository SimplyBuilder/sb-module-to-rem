# Simply Builder Module - Convert Pixels, Points, and Ems to Rem

The `toRem` function is a utility for converting length units (px, em, pt) to rem units in JavaScript.   
This conversion is particularly useful for responsive web design, where rem units provide scalability and flexibility. The module simplifies the process of ensuring that elements scale proportionally across different screen sizes by leveraging the rem unit, which is based on the root element's font size.


## Features

- **Multiple Units**: Converts px, em, and pt units to rem.
- **Customizable Precision**: Allows specifying the number of decimal places in the returned value.
- **Error Handling**: Returns the original value for unrecognized units and logs a warning.

## Installation
To install the `toRem` function, use the following npm command:
~~~bash
npm install --save-dev @jamilservices/sb-module-to-rem
~~~
This will add the toRem module as a development dependency in your project.

## Usage
Once installed, you can import the toRem function into your JavaScript project like so:
~~~javascript
import { toRem } from '@jamilservices/sb-module-to-rem';
~~~
Now you can use the function in your project to convert length units to rem.


### Basic Conversion
Convert a length from pixels to rem:
~~~javascript
const lengthInRem = toRem("24px");
console.log(lengthInRem); // Output: "1.5rem"
~~~

### Specifying Decimal Places
You can specify the number of decimal places in the returned value:
~~~javascript
const preciseLengthInRem = toRem("18px", 2);
console.log(preciseLengthInRem); // Output: "1.12rem"
~~~

### Handling Other Units
Convert lengths from em or pt to rem:
~~~javascript
const lengthFromEm = toRem("2em");
console.log(lengthFromEm); // Output based on default base of 16px for 1em

const lengthFromPt = toRem("12pt");
console.log(lengthFromPt); // Output based on conversion factor from pt to px to rem
~~~

### Unrecognized Units
For unrecognized units, the original value is returned:
~~~javascript
const unchangedLength = toRem("5vw");
console.log(unchangedLength); // Output: "5vw"
~~~

#
#### Released under [MIT](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).
* You can freely modify and reuse.
* The original license must be included with copies of this software.
* Please link back to this repo if you use a significant portion the source code.

