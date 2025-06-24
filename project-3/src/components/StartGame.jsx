import React from "react";
import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
max-width: 1180px;
margin: 0 auto;
display: flex;
height: 100vh;
align-items: center;

.content {
h1 {
font-size: 96px;
white-space: nowrap;
}

`;

const Button = styled.button`
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
