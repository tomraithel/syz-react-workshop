import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.section`
  color: ${props => props.theme.color.text};
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  min-height: calc(100vh - 160px);
`;

export default function MainContent({ children }) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
