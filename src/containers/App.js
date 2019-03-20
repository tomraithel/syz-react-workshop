import React from "react";
import styled from "styled-components";

import Expander from "../components/Expander";
import Header from "../components/Header";
import Headline from "../components/Headline";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { ColorConsumer } from "../lib/colorContext";
import Accordion from "../components/Accordion";

import { createStore } from "redux";

const AppWrapper = styled.div`
  ${props => (props.color === "blue" ? "filter: hue-rotate(90deg);" : "")}
`;

export default function App() {
  return (
    <ColorConsumer>
      {value => (
        <AppWrapper color={value.color}>
          <Header />
          <MainContent>
            <Headline>Accordion</Headline>
            <Accordion>
              <Expander>Item 1</Expander>
              <Expander>Item 2</Expander>
              <Expander>Item 3</Expander>
              <Expander>Item 4</Expander>
            </Accordion>
          </MainContent>
          <Footer />
        </AppWrapper>
      )}
    </ColorConsumer>
  );
}

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

const inc = (amount = 1) => ({ type: "INC", payload: amount });

store.dispatch(inc(3));
store.dispatch(inc(4));
store.dispatch(inc(2));
