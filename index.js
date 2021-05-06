"use strict";

const hasOwn = {}.hasOwnProperty;

/**
 * @name getReinforcementCount
 * @param {String} army
 * @param {Object<String, Region>} world
 * @return {Number[]}
 */
const getReinforcementCount =
  (army, world) => {
    if (!army || typeof army != "string") {
      throw new Error("Invalid reinforcement request: must specify the army.");
    }

    if (world == null) {
      throw new Error("Invalid reinforcement request: must pass the current world map.");
    }

    let controlledRegion = 0;

    for (const countryName in world) {
      if (hasOwn.call(world, countryName)) {
        const country = world[countryName];
        if (country.army === army) {
          controlledRegion += 1;
        }
      }
    }

    const armies = Math.floor(controlledRegion / 3);

    return [Math.max(armies, 1), controlledRegion];
  };

module.exports = getReinforcementCount;

/**
 * @typedef Region
 * @property {String} army
 */
