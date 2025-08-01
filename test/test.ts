import assert from 'node:assert'
import { describe, it } from 'node:test'

import formatCivicAddress, { type CivicAddressPieces } from '../index.js'

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
    unitNumber: '10',
    qualifier: '1/2'
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
