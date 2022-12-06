import { describe, it, expect } from "vitest";
import { rangesInclusive } from "./intersect.js";

describe("Intersections", () => {
  describe("Find inclusive", () => {
    it.concurrent("returns false if no intersection", () => {
      expect(
        rangesInclusive({
          rangeOne: {
            start: 6,
            end: 6,
          },
          rangeTwo: {
            start: 7,
            end: 7,
          },
        })
      ).toEqual(false);
    });

    expect(
      rangesInclusive({
        rangeOne: {
          start: 6,
          end: 7,
        },
        rangeTwo: {
          start: 8,
          end: 9,
        },
      })
    ).toEqual(false);
  });

  it.concurrent("returns false if intersection but not encapsulating", () => {
    expect(
      rangesInclusive({
        rangeOne: {
          start: 6,
          end: 7,
        },
        rangeTwo: {
          start: 7,
          end: 9,
        },
      })
    ).toEqual(false);

    expect(
      rangesInclusive({
        rangeOne: {
          start: 1,
          end: 5,
        },
        rangeTwo: {
          start: 3,
          end: 10,
        },
      })
    ).toEqual(false);
  });

  it.concurrent("returns true if one range encapsulates the other", () => {
    expect(
      rangesInclusive({
        rangeOne: {
          start: 1,
          end: 20,
        },
        rangeTwo: {
          start: 3,
          end: 10,
        },
      })
    ).toEqual(true);
  });

  it.concurrent("returns true if ranges inclusively overlap", () => {
    expect(
      rangesInclusive({
        rangeOne: {
          start: 1,
          end: 2,
        },
        rangeTwo: {
          start: 1,
          end: 2,
        },
      })
    ).toEqual(true);

    expect(
      rangesInclusive({
        rangeOne: {
          start: 6,
          end: 6,
        },
        rangeTwo: {
          start: 3,
          end: 6,
        },
      })
    ).toEqual(true);
  });
});
