import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 10px;
  background: ${props => props.theme.color.gray};
  border-radius: 5px;
`;

export default List;
