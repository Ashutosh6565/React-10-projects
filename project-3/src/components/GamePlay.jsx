import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./numberSelector";
import RoleDice from "./RoleDice";
import { Button } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceValue, setDiceValue] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const genrateRandomDiceValue = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
const resetGame = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setDiceValue(1);
  };
  const roledice = () => {
    const randomValue = genrateRandomDiceValue(1, 7);
    setDiceValue(randomValue);
    if(!selectedNumber) {
      alert("Please select a number first");
      return;
    }
    if(randomValue === selectedNumber) {
      setScore((prev) => randomValue + prev);
    }else{
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice diceValue={diceValue} roledice={roledice} />
      <div className="btns">
        <Button onClick={resetGame}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
    
     { showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;
const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
    .btns{
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;
      justify-content: center;
    }
`;
