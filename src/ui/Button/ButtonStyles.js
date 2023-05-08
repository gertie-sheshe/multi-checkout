import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  border: solid transparent 1px;

  &:hover {
    background-color: white;
    color: black;
    border: solid black 1px;
  }
`;
