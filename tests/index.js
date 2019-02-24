/* eslint-env jest */

"use strict";

const getReinforcement = require("../index.js");

describe("invalid request", () => {
  it("throws", () => {
    expect(
      function () {
        getReinforcement();
      }
    ).toThrow("Invalid reinforcement request: must specify the army.");
  });

  it("throws / 2", () => {
    expect(
      function () {
        getReinforcement("Blue");
      }
    ).toThrow("Invalid reinforcement request: must pass the current world map.");
  });
});

describe("reinforces assignment", () => {
  const smallWorld = {
    alaska: { army: "Black" },
    alberta: { army: "Blue" },
    argentina: { army: "Blue" },
    brazil: { army: "Blue" },
    china: { army: "Blue" },
    congo: { army: "Blue" },
    egypt: { army: "Black" },
    greenland: { army: "Green" },
    india: { army: "Blue" },
    indonesia: { army: "Black" },
    island: { army: "Blue" },
    madagascar: { army: "Blue" },
    mongolia: { army: "Yellow" },
    japan: { army: "Red" },
    ontario: { army: "Red" },
    quebec: { army: "Red" },
    peru: { army: "Violet" },
    siberia: { army: "Black" },
    siam: { army: "Blue" },
    ukraine: { army: "Yellow" },
    ural: { army: "Black" },
    venezuela: { army: "Blue" },
  };

  it("receives at least 1 army, no matter what (Yellow)", () => {
    expect(
      getReinforcement("Yellow", smallWorld)
    ).toEqual([1, 2]);
  });

  it("receives at least 1 army, no matter what (Green)", () => {
    expect(
      getReinforcement("Green", smallWorld)
    ).toEqual([1, 1]);
  });

  it("receives 1 army each three controlled territory (Black)", () => {
    expect(
      getReinforcement("Black", smallWorld)
    ).toEqual([1, 5]);
  });

  it("receives 1 army each three controlled (Blue)", () => {
    expect(
      getReinforcement("Blue", smallWorld)
    ).toEqual([3, 10]);
  });

  it("receives 1 army each three controlled (Red)", () => {
    expect(
      getReinforcement("Red", smallWorld)
    ).toEqual([1, 3]);
  });

  it("receives 1 army each three controlled (Violet)", () => {
    expect(
      getReinforcement("Violet", smallWorld)
    ).toEqual([1, 1]);
  });
});
