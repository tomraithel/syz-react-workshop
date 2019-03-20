import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.color.gray2};
`;

export default function FooterContent() {
  return (
    <Wrapper>
      App color: <strong>green</strong>
    </Wrapper>
  );
}
