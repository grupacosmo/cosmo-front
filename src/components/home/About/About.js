import React from 'react'
import { Title, Section } from '@common'
import { InfoWrapper, InnerWrapper, Wrapper } from './About.styles'
import Info from './Info'

const info = [
  {
    photo: '/universe.png',
    smallPhoto: '/universe_small.png',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
  {
    photo: '/rocket.png',
    smallPhoto: '/rocket_small.png',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
  {
    photo: '/starman.png',
    smallPhoto: '/starman_small.png',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
  {
    photo: '/launch_day.png',
    smallPhoto: '/launch_day_small.png',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
]

const About = () => {
  return (
    <Wrapper id="kim">
      <InnerWrapper>
        <Title color="primary" size="h1">
          Kim jesteśmy?
        </Title>
        <InfoWrapper>
          {info.map((el, i) => (
            <Section key={el.photo} x={i % 2 === 0 ? '-50vw' : '50vw'}>
              <Info i={i} info={el} />
            </Section>
          ))}
        </InfoWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default About
