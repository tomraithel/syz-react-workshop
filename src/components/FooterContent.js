import React from "react";
import styled from "styled-components";
import { ColorConsumer } from "../lib/colorContext";

const Wrapper = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.color.gray2};
`;

export default function FooterContent() {
  return (
    <Wrapper>
      <ColorConsumer>
        {value => (
          <>
            App color:{" "}
            <button
              onClick={e => {
                e.preventDefault();
                value.toggleColor();
              }}
            >
              {value.color}
            </button>
          </>
        )}
      </ColorConsumer>
    </Wrapper>
  );
}
