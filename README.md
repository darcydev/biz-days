
# biz-days

_WORK-IN-PROGRESS_

Count a number the number of relevant days

## Quick Features

* Calculate the number of working days
* Calculate the number of weekend days
* Calculate the number of holidays
* Applicable to Australia (all states and territories, except WA) and USA (all states)

### Western Australia

The package does not currently

## Motivation



## Installation

You can install Biz Days with NPM or Yarn.

```
$ npm i biz-days
// or
$ yarn add biz-days
```
## Features

The functions between requires the following parameters:

```
startDate: Date,
endDate: Date,
jurisdiction: string[COUNTRY_CODE, TERRITORY_CODE]
```

For example, in NSW, Australia it would be ['AUS', 'NSW'];

| Territory      | Code |
| ----------- | ----------- |
| NSW, Australia      | ['AUS', 'NSW']       |
| ACT, Australia      | ['AUS', 'ACT']       |
| Queensland, Australia      | ['AUS', 'QLD']       |
| SA, Australia      | ['AUS', 'SA']       |
| Victoria, Australia      | ['AUS', 'VIC']       |
| Northern Territory, Australia      | ['AUS', 'NT']       |

### `getBizDays(startDate, endDate, jurisdiction)`



