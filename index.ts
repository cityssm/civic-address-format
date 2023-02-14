export interface StreetAddressPieces {
  civicNumber: string
  streetName: string
  unitNumber?: string
  qualifier?: string
}

const letterRegex = /^[A-Za-z]$/

function isLetter(possibleLetter: string): boolean {
  if (possibleLetter.length === 1 && letterRegex.test(possibleLetter)) {
    return true
  }

  return false
}

export function formatStreetAddress(
  streetAddressPieces: StreetAddressPieces
): string {
  let streetAddress = streetAddressPieces.civicNumber.trim()

  // Unit Number (If Available)

  const unitNumber = (streetAddressPieces.unitNumber ?? '').trim()

  if (unitNumber !== '') {
    streetAddress = unitNumber + '-' + streetAddress
  }

  // Qualifier (If Available)

  const qualifier = (streetAddressPieces.qualifier ?? '').trim()

  if (qualifier !== '') {
    streetAddress = streetAddress + (isLetter(qualifier) ? '' : ' ') + qualifier
  }

  streetAddress += ' ' + streetAddressPieces.streetName.trim()

  return streetAddress
}

export default formatStreetAddress
