import styled from "styled-components"

export const FriendButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.selected ? "#3985F5" : props.active ? "#ffffff" : "transparent"};
  cursor: pointer;
  padding: 8px 0px;
  text-align: left;
  padding-left: 20px;
`
