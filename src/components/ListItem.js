import styled from "styled-components";

const ListItem = styled.li`
  &:not(:first-child) {
    padding-top: 10px;
    border-top: 1px solid ${props => props.theme.color.gray2};
    margin-top: 10px;
  }
`;

export default ListItem;
