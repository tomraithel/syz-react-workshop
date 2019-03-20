import React from "react";
import styled from "styled-components";

import Expander from "../components/Expander";
import Header from "../components/Header";
import Headline from "../components/Headline";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { ColorConsumer } from "../lib/colorContext";
import Accordion from "../components/Accordion";

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
