import React, { useState } from "react";
import styled from "styled-components";
const RoleDice = ({ diceValue, roledice }) => {
  

  return (
    <DiceContainer>
      <div className="dice" onClick={() => roledice()}>
        <img
          src={`/images/dices/dice_${diceValue}.png`}
          alt={`dice_${diceValue}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    background: #f1f5f9;
    border-radius: 16px;
    box-shadow: 0 2px 12px #64748b22;
    padding: 18px;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 4px 24px #2563eb33;
      background: #e0e7ff;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  p {
    font-size: 22px;
    color: #334155;
    margin-top: 12px;
  }
`;
