import styled from "styled-components";
const TextButton = styled.button`
  border: none;
  padding: 0;
  font-size: 1em;
  display: inline;
  color: ${props => props.theme.color.text};
  text-decoration: underline;
  cursor: pointer;
`;

export default TextButton;
