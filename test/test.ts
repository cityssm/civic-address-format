import assert from 'node:assert'
import { describe, it } from 'node:test'

import formatCivicAddress, {
  type CivicAddressPieces,
  formatPostalCode,
  isPostalCode
} from '../index.js'

const streetAddressTests: Record<string, CivicAddressPieces> = {
  '99 Foster Dr': {
    civicNumber: '99',
    streetName: 'Foster Dr'
  },

  '260A Elizabeth Street': {
    civicNumber: '260',
    streetName: 'Elizabeth Street',

    qualifier: 'A'
  },

  '100-556 GOULAIS AVE': {
    civicNumber: '556',
    streetName: 'GOULAIS AVE',
    unitNumber: '100'
  },

  '10-123 1/2 MAIN ST NW': {
    civicNumber: '123',
    streetName: 'MAIN ST NW',

    qualifier: '1/2',
    unitNumber: '10'
  }
}

await describe('formatCivicAddress', async () => {
  for (const [formattedCivicAddress, civicAddressPieces] of Object.entries(
    streetAddressTests
  )) {
    await it(`Formats "${formattedCivicAddress}"`, () => {
      assert.strictEqual(
        formatCivicAddress(civicAddressPieces),
        formattedCivicAddress
      )
    })
  }
})

await describe('isPostalCode', async () => {
  const validPostalCodes = ['p6a5x6', 'P6A 5X6']

  for (const postalCode of validPostalCodes) {
    await it(`Validates "${postalCode}"`, () => {
      assert.strictEqual(isPostalCode(postalCode), true)
    })
  }

  const invalidPostalCodes = [
    'P6A-5X6',
    'P6A5X',
    'P6A5X66',
    'P6A  5X6',
    'P6 5X6',
    'W6A 5X6',
    'Z6A 5X6'
  ]

  for (const postalCode of invalidPostalCodes) {
    await it(`Invalidates "${postalCode}"`, () => {
      assert.strictEqual(isPostalCode(postalCode), false)
    })
  }
})

await describe('formatPostalCode', async () => {
  const postalCodeTests: Record<string, string> = {
    p6a5x6: 'P6A 5X6',
    P6A5X6: 'P6A 5X6',
    'P6A 5X6 ': 'P6A 5X6',
    ' P6A5X6 ': 'P6A 5X6',
    ' P6A 5X6 ': 'P6A 5X6'
  }

  for (const [input, expected] of Object.entries(postalCodeTests)) {
    await it(`Formats "${input}"`, () => {
      assert.strictEqual(formatPostalCode(input), expected)
    })
  }
})
