import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { ColorConsumer } from "../lib/colorContext";
import Counter from "./Counter";
import NavBar from "../components/NavBar";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${props => (props.color === "blue" ? "filter: hue-rotate(90deg);" : "")}
`;

export default function App() {
  return (
    <ColorConsumer>
      {value => (
        <AppWrapper color={value.color}>
          <Header />
          <NavBar>
            <Link to="/">Counter</Link>
            <Link to="/about">About</Link>
          </NavBar>
          <MainContent>
            <Route exact path="/" component={Counter} />
            <Route path="/about" component={Footer} />
          </MainContent>
          <Footer />
        </AppWrapper>
      )}
    </ColorConsumer>
  );
}
