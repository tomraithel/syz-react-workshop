import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Button from "../components/Button";

export default function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Button
          onClick={() => {
            alert("danke!");
          }}
        >
          Klick mich!
        </Button>
      </MainContent>
    </>
  );
}
