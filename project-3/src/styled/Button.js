import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 20px;
  width: 200px;
  border: none;
  background: #000000;
  border-radius: 5px;
  font-size: 17px;

  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
