import React from "react";
import Headline from "../components/Headline";
import Button from "../components/Button";
import Box from "../components/Box";

import { connect } from "react-redux";

import * as actions from "../store/actions/counter";

function Counter({ count, inc, reset }) {
  return (
    <>
      <Box>
        <Button onClick={() => inc(1)}>+</Button>
        <Headline>Count: {count}</Headline>
        <Button onClick={() => inc(-1)}>-</Button>
      </Box>
      <button onClick={() => reset()}>reset</button>
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
    reset: () => dispatch(actions.reset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
