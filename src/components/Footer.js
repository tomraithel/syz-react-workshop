import React from "react";
import styled from "styled-components";
import FooterContent from "./FooterContent";

const FooterContainer = styled.footer`
  padding: 10px 20px;
  background: ${props => props.theme.color.gray};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.theme.color.text};
  height: 60px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent />
    </FooterContainer>
  );
}
