import React from "react";
import Logo from "./Logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 30px;
  background: ${props => props.theme.color.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.color.text};
  height: 100px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      React Workshop 26.3.2019
    </HeaderContainer>
  );
}
