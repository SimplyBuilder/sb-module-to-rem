// types.d.ts

/**
 * Declares the type signature for the `toRem` function.
 *
 * `toRem` is a utility function for converting length units (px, em, pt) to rem units.
 * It is useful in responsive web design where rem units provide scalability and flexibility.
 * The function accepts a length value (either as a string or number) and an optional
 * precision parameter to specify the number of decimal places in the returned value.
 * If the unit of the input length is not recognized, it returns the original value as a string.
 */

/**
 * Converts length units (px, em, pt) to rem units.
 *
 * @param length The length value to convert. Can be a number or a string with a unit (px, em, pt, rem).
 * @param decimal The number of decimal places in the returned value. Defaults to 4.
 * @returns The converted length in rem units, or the original length as a string if the unit is not recognized or on error.
 */
export function toRem(length: string | number, decimal?: number): string;
