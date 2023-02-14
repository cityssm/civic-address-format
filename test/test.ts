import * as assert from 'node:assert'
import { formatStreetAddress, type StreetAddressPieces } from '../index.js'

const streetAddressTests: Record<string, StreetAddressPieces> = {
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

describe('formatStreetAddress', () => {
  for (const [formattedStreetAddress, streetAddressPieces] of Object.entries(
    streetAddressTests
  )) {
    it(`Formats "${formattedStreetAddress}"`, () => {
      assert.strictEqual(
        formatStreetAddress(streetAddressPieces),
        formattedStreetAddress
      )
    })
  }
})
