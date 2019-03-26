import reducer from "./counter";
import { inc } from "../actions/counter";

describe("counter reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, { type: "@@init" })).toEqual({ value: 0 });
  });

  it("increments by a given value", () => {
    expect(reducer(undefined, inc(1))).toEqual({ value: 1 });
  });

  it("increments negative value", () => {
    expect(reducer({ value: 2 }, inc(-5))).toEqual({ value: -3 });
  });

  it("increments negative value", () => {
    expect(reducer({ value: 2 }, inc(-5))).toEqual({ value: -3 });
  });
});
