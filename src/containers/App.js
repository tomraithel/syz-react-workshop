import React from "react";
import Expander from "../components/Expander";
import Header from "../components/Header";
import Headline from "../components/Headline";
import MainContent from "../components/MainContent";
import Toggle from "../components/Toggle";

export default function App() {
  return (
    <>
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
    </>
  );
}
