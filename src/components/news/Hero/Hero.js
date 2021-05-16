import React from 'react'
import { usePageOffset } from '@hooks'
import { Title } from '@common'
import { Wrapper, HeroImage } from './Hero.styles'

const Hero = () => {
  const offset = usePageOffset()
  return (
    <Wrapper>
      <HeroImage src="/hero.jpg" alt="background" translate={offset} />
      <Title color="white">Aktualności</Title>
    </Wrapper>
  )
}

export default Hero
