import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.section`
  color: ${props => props.theme.color.text};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  flex: 1 1 auto;
`;

export default function MainContent({ children }) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
