import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.section`
  color: ${props => props.theme.color.text};
  width: 800px;
  margin: 0 auto;
  padding: 50px;
`;

export default function MainContent({ children }) {
  return <MainContentWrapper>{children}</MainContentWrapper>;
}
