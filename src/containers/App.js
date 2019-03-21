import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { ColorConsumer } from "../lib/colorContext";
import Counter from "./Counter";
import NavBar from "../components/NavBar";
import Headline from "../components/Headline";

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
            <Link to="/nested/1">Nested 1</Link>
            <Link to="/nested/2">Nested 2</Link>
          </NavBar>
          <Route
            path="/nested/:id"
            render={({ match }) => (
              <NavBar>
                <Link to={`${match.url}/foo`}>Foo</Link>
                <Link to={`${match.url}/bar`}>Bar</Link>
              </NavBar>
            )}
          />
          <MainContent>
            <Route exact path="/" component={Counter} />
            <Route
              path="/nested/:id/:filter"
              render={({ match }) => (
                <Headline>
                  Id: {match.params.id}, Filter: {match.params.filter}
                </Headline>
              )}
            />
          </MainContent>
          <Footer />
        </AppWrapper>
      )}
    </ColorConsumer>
  );
}
