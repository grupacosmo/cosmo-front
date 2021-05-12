import React from 'react'
import Image from 'next/image'
import { Title } from '@common'
import {
  Info,
  InfoContent,
  InfoWrapper,
  InnerWrapper,
  Text,
  Wrapper,
} from './About.styles'

const info = [
  {
    photo: '/universe.svg',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
  {
    photo: '/rocket.svg',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
  {
    photo: '/starman.svg',
    title: 'Example title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien ullamcorper, consectetur magna ac, auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ornare mi. Vestibulum ut sapien',
  },
  {
    photo: '/launch_day.svg',
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
            <Info key={el.photo} isReversed={i % 2 === 0}>
              <Image src={el.photo} width={400} height={350} />
              <InfoContent>
                <Title
                  size="h3"
                  style={{
                    textAlign: i % 2 === 0 ? 'right' : 'left',
                    marginBottom: '15px',
                  }}
                >
                  {el.title}
                </Title>
                <Text isReversed={i % 2 === 0}>{el.text}</Text>
              </InfoContent>
            </Info>
          ))}
        </InfoWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default About
