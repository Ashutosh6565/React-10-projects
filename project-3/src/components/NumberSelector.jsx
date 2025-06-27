import React from "react";
import styled from "styled-components";
const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  

  console.log("Selected Number:", selectedNumber);
  return (
    <NumberSelectorContainer>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
display: flex;
gap: 24px;
font-size: 24px;
}
p{
  font-size 29px;
  font-weight: 500;}
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props) => (props.isSelected ? "blue" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
