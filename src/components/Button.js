import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  background: ${props => props.theme.color.green};
  display: inline-block;
  border-radius: 4px;
  border: none;
  font-size: 16px;
`;

export default function Button({ onClick, children }) {
  return (
    <ButtonWrapper
      onClick={e => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </ButtonWrapper>
  );
}
