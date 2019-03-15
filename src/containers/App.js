import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Expander from "../components/Expander";
import withToggle from "../hocs/withToggle";

const ToggleExpander = withToggle(Expander);

export default function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Expander
          toggled
          onToggle={() => {
            alert("toggle");
          }}
        >
          Hallo, ich bin die Expander Komponente
        </Expander>

        <ToggleExpander>
          Hallo, ich bin die Expander Komponente mit Toggle Logik
        </ToggleExpander>
      </MainContent>
    </>
  );
}
