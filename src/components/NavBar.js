import React from "react";
import styled from "styled-components";
const Wrapper = styled.nav`
  height: 50px;
  background: ${props => props.theme.color.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    padding: 0 20px;
    color: ${props => props.theme.color.text};
    display: inline-block;
    line-height: 30px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:not(:last-child) {
      border-right: 1px solid ${props => props.theme.color.gray2};
    }
  }
`;

export default function NavBar({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
