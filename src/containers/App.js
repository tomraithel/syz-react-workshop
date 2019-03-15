import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Expander from "../components/Expander";
import withToggle from "../hocs/withToggle";
import Headline from "../components/Headline";

const ToggleExpander = withToggle(Expander);

export default function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Headline>Simple expander</Headline>
        <Expander
          toggled
          onToggle={() => {
            alert("toggle");
          }}
        >
          Hallo, ich bin die Expander Komponente
        </Expander>

        <Headline>Expander mit HOC</Headline>
        <ToggleExpander>
          Hallo, ich bin die Expander Komponente mit Toggle Logik
        </ToggleExpander>
      </MainContent>
    </>
  );
}
