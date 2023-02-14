const letterRegex = /^[A-Za-z]$/;
function isLetter(possibleLetter) {
    if (possibleLetter.length === 1 && letterRegex.test(possibleLetter)) {
        return true;
    }
    return false;
}
export function formatCivicAddress(civicAddressPieces) {
    let civicAddress = civicAddressPieces.civicNumber.trim();
    const unitNumber = (civicAddressPieces.unitNumber ?? '').trim();
    if (unitNumber !== '') {
        civicAddress = unitNumber + '-' + civicAddress;
    }
    const qualifier = (civicAddressPieces.qualifier ?? '').trim();
    if (qualifier !== '') {
        civicAddress = civicAddress + (isLetter(qualifier) ? '' : ' ') + qualifier;
    }
    civicAddress += ' ' + civicAddressPieces.streetName.trim();
    return civicAddress;
}
export default formatCivicAddress;
