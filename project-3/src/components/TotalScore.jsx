import React from "react";
import styled from "styled-components";
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 140px;
  min-width: 120px;
  background: linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%);
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border-radius: 18px;
  padding: 32px 12px 24px 12px;
  text-align: center;
  margin: 0 16px;

  h1 {
    font-size: 72px;
    line-height: 1;
    color: #3b82f6;
    margin-bottom: 8px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #64748b;
    margin: 0;
  }
`;
