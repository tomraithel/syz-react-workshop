import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Button from "../components/Button";
import Footer from "../components/Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  ${props => (props.color === "blue" ? "filter: hue-rotate(90deg);" : "")}
`;

export default function App() {
  return (
    <AppWrapper color="green">
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
      <Footer />
    </AppWrapper>
  );
}
