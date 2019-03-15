import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Expander from "../components/Expander";

export default function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Expander>Hallo, ich bin Text, den man ausklappen kann!</Expander>
      </MainContent>
    </>
  );
}
