# aws-converter

This module provides the AWS converter which appeared in AWS 2.71.0. Since
Lambda receive 2.54.0, you can't easily unmarshall records returned by
dynamodb stream.

This Library have been created to resolve this issue without having to
manually add AWS-SDK within your bundle.

## install

```
npm install aws-converter
```

or

```
yarn add aws-converter
```

## Usage

```js
import { marshall, unmarshall } from "aws-converter"


marshall({bar: "foo bar", fooz: ["foo", "32.23"] })
//{
//   baz: { S: "foo bar" },
//   fooz: {
//     L: [
//       {
//         S: "foo",
//       },
//       {
//         N: "32.23",
//       },
//     ],
//   },
// })

unmarshall()
// {bar: 32.23}

```

## Test

Tests run under jest

```
yarn test
```