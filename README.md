# Civic Address Format

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bc565583138143578c48dfc3e6daec66)](https://www.codacy.com/gh/cityssm/civic-address-format/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cityssm/civic-address-format&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/fb7201564a832823e6c6/maintainability)](https://codeclimate.com/github/cityssm/civic-address-format/maintainability)

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