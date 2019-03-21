import React from "react";
import { connect } from "react-redux";

import Headline from "../components/Headline";
import Button from "../components/Button";
import Box from "../components/Box";
import TextButton from "../components/TextButton";
import * as actions from "../store/actions/counter";

function Counter({ count, inc, reset, generateRandom }) {
  return (
    <>
      <Box>
        <Button onClick={() => inc(1)}>+</Button>
        <Headline>Count: {count}</Headline>
        <Button onClick={() => inc(-1)}>-</Button>
      </Box>
      <TextButton onClick={() => reset()}>reset</TextButton>{" "}
      <TextButton onClick={() => generateRandom()}>random number</TextButton>
    </>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: amount => dispatch(actions.inc(amount)),
    reset: () => dispatch(actions.reset()),
    generateRandom: () => dispatch(actions.setRandom())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
