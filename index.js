const letterRegex = /^[A-Z]$/i;
function isLetter(possibleLetter) {
    return possibleLetter.length === 1 && letterRegex.test(possibleLetter);
}
export default function formatCivicAddress(civicAddressPieces) {
    let civicAddress = civicAddressPieces.civicNumber.trim();
    const unitNumber = (civicAddressPieces.unitNumber ?? '').trim();
    if (unitNumber !== '') {
        civicAddress = `${unitNumber}-${civicAddress}`;
    }
    const qualifier = (civicAddressPieces.qualifier ?? '').trim();
    if (qualifier !== '') {
        civicAddress = civicAddress + (isLetter(qualifier) ? '' : ' ') + qualifier;
    }
    civicAddress += ` ${civicAddressPieces.streetName.trim()}`;
    return civicAddress;
}
const postalCodeRegex = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i;
const disallowedPostalCodeLetters = new Set(['D', 'F', 'I', 'O', 'Q', 'U']);
const disallowedPostalCodeFirstLetters = new Set(['W', 'Z']);
export function isPostalCode(possiblePostalCode) {
    if (postalCodeRegex.test(possiblePostalCode)) {
        const trimmedPostalCode = possiblePostalCode
            .toUpperCase()
            .replaceAll(' ', '');
        return !(disallowedPostalCodeFirstLetters.has(trimmedPostalCode.charAt(0)) ||
            disallowedPostalCodeLetters.has(trimmedPostalCode.charAt(0)) ||
            disallowedPostalCodeLetters.has(trimmedPostalCode.charAt(2)) ||
            disallowedPostalCodeLetters.has(trimmedPostalCode.charAt(4)));
    }
    return false;
}
export function formatPostalCode(postalCode) {
    let trimmedPostalCode = postalCode.trim().toUpperCase().replaceAll(' ', '');
    trimmedPostalCode =
        trimmedPostalCode.slice(0, 3) + ' ' + trimmedPostalCode.slice(3);
    if (!isPostalCode(trimmedPostalCode)) {
        throw new Error('Invalid Postal Code');
    }
    return trimmedPostalCode;
}
