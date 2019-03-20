import React from "react";
import styled from "styled-components";

import Expander from "../components/Expander";
import Header from "../components/Header";
import Headline from "../components/Headline";
import MainContent from "../components/MainContent";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";

const AppWrapper = styled.div`
  ${props => (props.color === "blue" ? "filter: hue-rotate(90deg);" : "")}
`;

export default function App() {
  return (
    <AppWrapper color="green">
      <Header />
      <MainContent>
        <Headline>Expander als render prop</Headline>
        <Toggle
          render={toggleProps => (
            <Expander {...toggleProps}>
              Hallo, ich bin die Expander Komponente
            </Expander>
          )}
        />
      </MainContent>
      <Footer />
    </AppWrapper>
  );
}
