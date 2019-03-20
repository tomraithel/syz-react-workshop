import styled from "styled-components";

const Headline = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
  color: ${props => props.theme.color.gray2};
  margin: 2rem 0;
  &:first-child {
    margin-top: 0;
  }
`;

export default Headline;
