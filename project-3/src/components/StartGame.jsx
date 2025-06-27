import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        {/* <Button >Play Now</Button> */}
        <Button onClick={toggle}>Play Now </Button>
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
  justify-content: center;
  gap: 60px;
  background: linear-gradient(120deg, #f0f9ff 60%, #e0e7ff 100%);

  .content {
    h1 {
      font-size: 80px;
      font-weight: 900;
      color: #2563eb;
      margin-bottom: 32px;
      letter-spacing: -2px;
      white-space: nowrap;
    }
    button {
      margin-top: 24px;
      font-size: 22px;
      padding: 16px 36px;
      border-radius: 12px;
    }
  }
  img {
    width: 320px;
    border-radius: 24px;
    box-shadow: 0 4px 32px #2563eb22;
  }
`;

