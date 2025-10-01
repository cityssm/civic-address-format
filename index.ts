// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-magic-numbers */

export interface CivicAddressPieces {
  civicNumber: string
  streetName: string

  qualifier?: string
  unitNumber?: string
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

const postalCodeRegex = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i

const disallowedPostalCodeLetters = new Set(['D', 'F', 'I', 'O', 'Q', 'U'])
const disallowedPostalCodeFirstLetters = new Set(['W', 'Z'])

/**
 * Checks if a string is a valid Canadian postal code.
 * A valid postal code is in the format "A1A 1A1" or "A1A1A1", where A is a letter and 1 is a digit.
 * @param possiblePostalCode - A string that may be a postal code.
 * @returns True if the string is a valid postal code, false otherwise.
 */
export function isPostalCode(possiblePostalCode: string): boolean {
  // Canadian Postal Code: A1A 1A1 or A1A1A1
  if (postalCodeRegex.test(possiblePostalCode)) {
    const trimmedPostalCode = possiblePostalCode
      .toUpperCase()
      .replaceAll(' ', '')

    return !(
      disallowedPostalCodeFirstLetters.has(trimmedPostalCode.charAt(0)) ||
      disallowedPostalCodeLetters.has(trimmedPostalCode.charAt(0)) ||
      disallowedPostalCodeLetters.has(trimmedPostalCode.charAt(2)) ||
      disallowedPostalCodeLetters.has(trimmedPostalCode.charAt(4))
    )
  }

  return false
}

/**
 * Formats a Canadian postal code to the standard "A1A 1A1" format.
 * @param postalCode - A string that represents a postal code.
 * @returns The formatted postal code.
 */
export function formatPostalCode(postalCode: string): string {
  let trimmedPostalCode = postalCode.trim().toUpperCase().replaceAll(' ', '')
  trimmedPostalCode =
    trimmedPostalCode.slice(0, 3) + ' ' + trimmedPostalCode.slice(3)

  if (!isPostalCode(trimmedPostalCode)) {
    throw new Error('Invalid Postal Code')
  }

  return trimmedPostalCode
}
