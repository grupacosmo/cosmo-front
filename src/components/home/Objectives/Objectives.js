import React, { useState } from 'react'
import { Button, Title } from '@common'
import {
  Circle,
  CircleWrapper,
  Connection,
  EarthImage,
  InnerCircle,
  InnerWrapper,
  SingleObjective,
  SpaceShip,
  Wrapper,
} from './Objectives.styles'

const objectives = [
  {
    date: '2019',
    text: 'Założenie kółka',
    isEarth: true,
  },
  {
    date: '',
    text: 'Organizacja i kształtowanie się struktury koła',
  },
  {
    date: '2022',
    text: 'Wysłanie do stratosfery sondy HABSat',
  },
  {
    date: '',
    text: 'Budowa i wysłanie w kosmos satelity CubeSat ',
  },
]

const Objectives = () => {
  const [step, setStep] = useState(0.2)

  const handleClick = () => {
    if (step >= objectives.length - 1) {
      setStep(0.25)
    } else {
      setStep((prev) => Math.floor(prev) + 1)
    }
  }

  return (
    <Wrapper>
      <Title style={{ margin: '20px auto 50px auto' }}>Nasze cele</Title>
      <InnerWrapper>
        <SpaceShip src="/spaceship.svg" alt="spaceship" step={step} />
        {objectives.map((el) => (
          <SingleObjective key={el.date}>
            <p>{el.text}</p>
            <p>{el.date !== '' ? 'Rok' : ''} {el.date}</p>
            <Connection />
            {el.isEarth ? (
              <EarthImage src="/earth.png" alt="earth" loading="lazy" />
            ) : (
              <CircleWrapper>
                <Circle>
                  <InnerCircle />
                </Circle>
              </CircleWrapper>
            )}
          </SingleObjective>
        ))}
      </InnerWrapper>
      <Button
        handleClick={handleClick}
        type="button"
        style={{ margin: '30px auto' }}
        size='h2'
      >
        Kliknij!
      </Button>
    </Wrapper>
  )
}

export default Objectives
