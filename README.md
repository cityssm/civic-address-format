# Civic Address Format

Formats a civic address from its pieces based on
[guidelines from Canada Post](https://www.canadapost-postescanada.ca/cpc/en/support/kb/addressing/accuracy/addressing-mail-accurately)
for properly addressing mail to Canadian and American addresses.

## Features

- Typescript support.
- Places the unit number (when present) before the civic number with a hyphen in between.
- Uses no space when a single letter qualifier is present (i.e. '123A'), or one space for longer qualifiers (i.e. '123 1/2')

## Installation

    npm install @cityssm/civic-address-format

## Usage

```javascript

import { formatCivicAddress } from '@cityssm/civic-address-format'

formatCivicAddress({
  civicNumber: '99',
  streetName: 'Foster Dr'
})
// => "99 Foster Dr"

formatCivicAddress({
  civicNumber: '123',
  streetName: 'MAIN ST NW',
  unitNumber: '10',
  qualifier: '1/2'
})
// => "10-123 1/2 MAIN ST NW"