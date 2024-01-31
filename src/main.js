"use strict";

/**
 * Converts pixel values to rem units.
 *
 * This function takes a pixel value and an optional base value (defaulting to 16) to convert the pixel value
 * into rem units. It handles both string and numeric inputs for the pixel value. If an error occurs during the
 * conversion process, it logs the error and returns the original pixel value.
 *
 * @function toRem
 * @param {number|string} px - The pixel value to convert. Can be a number or a string ending in 'px'.
 * @param {number} [base=16] - The base pixel size for the conversion, typically the font-size of the document. Defaults to 16.
 * @returns {string} - The converted value in rem units, or the original pixel value if an error occurs.
 */

export const toRem = (px, base = 16) => {
    try {
        let tempPx = px;
        let value = "0";
        if (typeof px === 'string' || px instanceof String) {
            const checkPxUnit =  px.split('px');
            const checkRemUnit =  px.split('rem');
            if(checkRemUnit.length > 1) return px;
            if(checkPxUnit.length > 1) tempPx = checkPxUnit[0];
        }
        tempPx = Number(tempPx);
        if(tempPx >= 1) {
            value = (1 / base) * tempPx + 'rem';
        }
        return value;
    } catch (err) {
        console.error(err);
    }
    return px;
};