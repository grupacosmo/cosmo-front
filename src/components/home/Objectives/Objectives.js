import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 200px;
  color: white;
  z-index: 1;
`
const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  position: relative;
`

const SingleObjective = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
`

const Circle = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const SpaceShip = styled.img`
  position: absolute;
  transform: ${(props) => `translateX(${props.step * 400}px )`} rotate(90deg);
  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  width: 50px;
  height: 50px;
`

const objectives = [
  {
    date: '2019',
    text: 'Setup',
  },
  {
    date: '2029',
    text: 'Setup 2',
  },
  {
    date: '2039',
    text: 'Setup 3',
  },
]

const Objectives = () => {
  const [step, setStep] = useState(0)

  return (
    <Wrapper>
      <InnerWrapper>
        <SpaceShip src="/spaceship.svg" alt="spaceship" step={step} />
        {objectives.map((el) => (
          <SingleObjective key={el.date}>
            <Circle />
            {el.text}
          </SingleObjective>
        ))}
      </InnerWrapper>
      <button onClick={() => setStep((prev) => prev + 1)} type="button">
        click
      </button>
    </Wrapper>
  )
}

export default Objectives
