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
