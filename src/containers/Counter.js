import React from "react";
import Headline from "../components/Headline";
import Button from "../components/Button";
import Box from "../components/Box";

import { connect } from "react-redux";

function Counter({ count, inc }) {
  return (
    <Box>
      <Button onClick={() => inc(1)}>+</Button>
      <Headline>Count: {count}</Headline>
      <Button onClick={() => inc(-1)}>-</Button>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: amount => dispatch({ type: "INC", payload: amount })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
