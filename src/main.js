"use strict";

/**
 * Contains functions for converting various length units to pixels.
 * @type {Object.<string, Function>}
 */
const types = {
    'px': (data) => parseFloat(data.tempLength),
    'em': (data) => parseFloat(data.tempLength) * data.base,
    'pt': (data) => parseFloat(data.tempLength) * 1.333
};
/**
 * Converts various length units (px, em, pt) to rem units.
 *
 * This function takes a length value in pixels, ems, or points, and converts it to rem units.
 * It allows specifying the number of decimal places in the returned value.
 * If the unit of the input length is not recognized, it returns the original value.
 *
 * @param {string|number} length - The length value to convert, which can be a number or a string with a unit (px, em, pt, rem).
 * @param {number} [decimal=4] - The number of decimal places to include in the returned value. Defaults to 4.
 * @returns {string} - The converted length in rem units, or the original length if the unit is not recognized or on error.
 */
export const toRem = (length, decimal= 4) => {
    try {
        if (typeof length === "undefined") return "0";
        const base = 16;
        let tempLength = length.toString();
        let value = "0";

        const limitDecimal = Number(decimal) >= 1 ? Number(decimal) : 4;

        const unit = tempLength.replace(/[\d.]/g, '');
        if (unit === 'rem') return tempLength === "0rem" ? "0" : tempLength;
        if (types[unit]) {
            tempLength = types[unit]({tempLength, base});
        } else if (unit) {
            console.warn(`Unit '${unit}' not recognized. Returning original value.`);
            return length;
        }


        if (tempLength > 0) value = ((1 / base) * tempLength);
        if (value > 0) return Number(parseFloat(value).toFixed(limitDecimal)) + 'rem';
        return "0";
    } catch (err) {
        console.error(err);
    }
    return length;
};