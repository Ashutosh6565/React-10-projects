import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
          <h2>Game Rules</h2>
      <div className='text'>
        <p>1. Select a number between 1 and 6.</p>
        <p>2. Click on the dice to roll it.</p>
        <p>3. If the rolled number matches your selected number, you gain points.</p>
      <p>4. If it doesn't match, you lose points.</p>

      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  background-color: #f1f5f9;
  max-width: 600px;
  margin: 32px auto 0 auto;
  padding: 28px 36px;
  border-radius: 16px;
  box-shadow: 0 2px 16px #64748b22;
  h2 {
    font-size: 28px;
    color: #2563eb;
    margin-bottom: 18px;
  }
  .text {
    margin-top: 12px;
    p {
      font-size: 18px;
      color: #334155;
      margin-bottom: 8px;
    }
  }
`
