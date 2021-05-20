import React from 'react'
import Image from 'next/image'
import { Title, Text, Section } from '@common'
import { InnerWrapper, Team, TeamsWrapper, Wrapper } from './Join.styles'

const teams = [
  {
    icon: '/website.svg',
    title: 'Team Webdev',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text:
      'Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
  {
    icon: '/microchip.svg',
    title: 'Team OBC',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
  {
    icon: '/innovation.svg',
    title: 'Team AI',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
  {
    icon: '/bullhorn.svg',
    title: 'Team Marketingu',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
  {
    icon: '/globe.svg',
    title: 'Team Komunikacji',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
  {
    icon: '/logistics.svg',
    title: 'Team Logistyki',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
]

const Join = () => {
  return (
    <Wrapper id="dolacz">
      <Section x="50vw">
        <InnerWrapper>
          <Title size="h1" style={{ textAlign: 'center' }} color="secondary">
            Dołącz do nas!
          </Title>
          <TeamsWrapper>
            {teams.map((team) => (
              <Team key={team.title}>
                <Image
                  src={team.icon}
                  alt="team icon"
                  width={55}
                  height={55}
                  loading="lazy"
                />
                <Title
                  size="h4"
                  color="secondary"
                  style={{ marginTop: '20px' }}
                >
                  {team.title}
                </Title>
                <Text style={{ marginTop: '10px' }}>{team.text}</Text>
                <span>{team.secondaryText}</span>
              </Team>
            ))}
          </TeamsWrapper>
        </InnerWrapper>
      </Section>
    </Wrapper>
  )
}

export default Join
