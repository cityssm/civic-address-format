export interface CivicAddressPieces {
    civicNumber: string;
    streetName: string;
    qualifier?: string;
    unitNumber?: string;
}
/**
 * Formats a civic address from its pieces using Canada Post guidelines.
 * @param civicAddressPieces - The pieces of the civic address.
 * @returns the civic address as a formatted string.
 */
export default function formatCivicAddress(civicAddressPieces: CivicAddressPieces): string;
/**
 * A regular expression to validate Canadian postal codes.
 */
export declare const postalCodeRegex: RegExp;
/**
 * Checks if a string is a valid Canadian postal code.
 * A valid postal code is in the format "A1A 1A1" or "A1A1A1", where A is a letter and 1 is a digit.
 * @param possiblePostalCode - A string that may be a postal code.
 * @returns `true` if the string is a valid postal code, `false` otherwise.
 */
export declare function isPostalCode(possiblePostalCode: string): boolean;
/**
 * Formats a Canadian postal code to the standard "A1A 1A1" format.
 * @param postalCode - A string that represents a postal code.
 * @returns The formatted postal code.
 * @throws {Error} If the input string is not a valid postal code.
 */
export declare function formatPostalCode(postalCode: string): string;
