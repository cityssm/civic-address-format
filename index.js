const letterRegex = /^[A-Za-z]$/;
function isLetter(possibleLetter) {
    if (possibleLetter.length === 1 && letterRegex.test(possibleLetter)) {
        return true;
    }
    return false;
}
export function formatStreetAddress(streetAddressPieces) {
    let streetAddress = streetAddressPieces.civicNumber.trim();
    const unitNumber = (streetAddressPieces.unitNumber ?? '').trim();
    if (unitNumber !== '') {
        streetAddress = unitNumber + '-' + streetAddress;
    }
    const qualifier = (streetAddressPieces.qualifier ?? '').trim();
    if (qualifier !== '') {
        streetAddress = streetAddress + (isLetter(qualifier) ? '' : ' ') + qualifier;
    }
    streetAddress += ' ' + streetAddressPieces.streetName.trim();
    return streetAddress;
}
export default formatStreetAddress;
