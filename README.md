# risk-reinforces

Computes the number of reinforces a player can have.

## Install

```bash
npm install risk-reinforces
```

## Usage

```js
const getReinforcesCount = require("risk-reinforces");

const world = {
  "alaska": { army: "Blue" },
  "argentina": { army: "Red" },
}

getReinforcesCount("Blue", world); // [Number of reinforces, Number of regions]
```
