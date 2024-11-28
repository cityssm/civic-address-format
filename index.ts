export interface CivicAddressPieces {
  civicNumber: string
  streetName: string
  unitNumber?: string
  qualifier?: string
}

const letterRegex = /^[A-Z]$/i

function isLetter(possibleLetter: string): boolean {
  return possibleLetter.length === 1 && letterRegex.test(possibleLetter)
}

/**
 * Formats a civic address from its pieces using Canada Post guidelines.
 * @param civicAddressPieces - The pieces of the civic address.
 * @returns the civic address as a formatted string.
 */
export default function formatCivicAddress(
  civicAddressPieces: CivicAddressPieces
): string {
  let civicAddress = civicAddressPieces.civicNumber.trim()

  // Unit Number (If Available)

  const unitNumber = (civicAddressPieces.unitNumber ?? '').trim()

  if (unitNumber !== '') {
    civicAddress = `${unitNumber}-${civicAddress}`
  }

  // Qualifier (If Available)

  const qualifier = (civicAddressPieces.qualifier ?? '').trim()

  if (qualifier !== '') {
    civicAddress = civicAddress + (isLetter(qualifier) ? '' : ' ') + qualifier
  }

  civicAddress += ` ${civicAddressPieces.streetName.trim()}`

  return civicAddress
}
