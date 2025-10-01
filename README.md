# Civic Address Format

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/civic-address-format)](https://www.npmjs.com/package/@cityssm/civic-address-format)
[![DeepSource](https://app.deepsource.com/gh/cityssm/civic-address-format.svg/?label=active+issues&show_trend=true&token=TB7MABBKAv5oGVsF21nBBawJ)](https://app.deepsource.com/gh/cityssm/civic-address-format/)
[![codecov](https://codecov.io/gh/cityssm/civic-address-format/branch/main/graph/badge.svg?token=JZX2EZXFPE)](https://codecov.io/gh/cityssm/civic-address-format)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/civic-address-format/coverage.yml)](https://github.com/cityssm/civic-address-format/actions/workflows/coverage.yml)

Formats a civic address from its pieces based on
[guidelines from Canada Post](https://www.canadapost-postescanada.ca/cpc/en/support/kb/business/address-accuracy/addressing-mail-accurately)
for properly addressing mail to Canadian and American addresses.

Includes Canadian postal code validation and formattings functions.

## Features

- Typescript support.
- Places the unit number (when present) before the civic number with a hyphen in between.
- Uses no space when a single letter qualifier is present (i.e. '123A'), or one space for longer qualifiers (i.e. '123 1/2')

## Installation

```sh
npm install @cityssm/civic-address-format
```

## Usage

```javascript
import formatCivicAddress, {
  formatPostalCode
} from '@cityssm/civic-address-format'

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

formatPostalCode('p6a5x6')
// => "P6A 5X6"
```

## Related NPM Packages

[**Statistics Canada (StatsCan) Tools for Node**](https://www.npmjs.com/package/@cityssm/statscan-tools)<br />
Lookups and utilities for working with Statistics Canada (StatsCan) data.

[**MPAC Tools for Node**](https://www.npmjs.com/package/@cityssm/mpac-tools)<br />
Lookups and utilities for working with MPAC data.
