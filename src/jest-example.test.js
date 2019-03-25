import React from "react";
import TestRenderer from "react-test-renderer";

const HappyIndicator = ({ isHappy = true }) => (
  <div>{isHappy ? "😄" : "🙁"}</div>
);

test("Renders happy", () => {
  const result = TestRenderer.create(<HappyIndicator />);
  expect(result).toMatchSnapshot();
});

test("Renders sad", () => {
  const result = TestRenderer.create(<HappyIndicator isHappy={false} />);
  expect(result).toMatchSnapshot();
});

test("Renders sad v2", () => {
  const result = TestRenderer.create(<HappyIndicator isHappy={false} />);
  expect(result.root.findByType("div").props.children).toBe("🙁");
});

const sum = (a, b) => a + b;

test("Should sum 1 + 2 correctly", () => {
  expect(sum(1, 2)).toBe(3);
});
