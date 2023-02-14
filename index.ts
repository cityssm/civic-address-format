export interface CivicAddressPieces {
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

export function formatCivicAddress(
  civicAddressPieces: CivicAddressPieces
): string {
  let civicAddress = civicAddressPieces.civicNumber.trim()

  // Unit Number (If Available)

  const unitNumber = (civicAddressPieces.unitNumber ?? '').trim()

  if (unitNumber !== '') {
    civicAddress = unitNumber + '-' + civicAddress
  }

  // Qualifier (If Available)

  const qualifier = (civicAddressPieces.qualifier ?? '').trim()

  if (qualifier !== '') {
    civicAddress = civicAddress + (isLetter(qualifier) ? '' : ' ') + qualifier
  }

  civicAddress += ' ' + civicAddressPieces.streetName.trim()

  return civicAddress
}

export default formatCivicAddress
