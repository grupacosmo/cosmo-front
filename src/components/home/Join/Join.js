import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Title, Text } from '@common'

const Wrapper = styled.section`
  padding: 100px 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
`

const InnerWrapper = styled.div`
  width: 80%;
  max-width: 1300px;
  margin: auto;
`
const TeamsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Team = styled.div`
  width: 350px;
  margin: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: all 200ms ease;
  span {
    display: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};

    img {
      display: none !important;
    }
    h1 {
      color: ${(props) => props.theme.colors.white} !important;
      margin-top: 0 !important;
    }
    p {
      display: none;
    }

    span {
      display: block;
      margin-top: 10px;
      color: ${(props) => props.theme.colors.white} !important;
    }
  }
`

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
    <Wrapper>
      <InnerWrapper>
        <Title size="h1" style={{ textAlign: 'center' }} color="secondary">
          Dołącz do nas!
        </Title>
        <TeamsWrapper>
          {teams.map((team) => (
            <Team key={team.title}>
              <Image src={team.icon} alt="team icon" width={55} height={55} />
              <Title size="h4" color="secondary" style={{ marginTop: '20px' }}>
                {team.title}
              </Title>
              <Text style={{ marginTop: '10px' }}>{team.text}</Text>
              <span>{team.secondaryText}</span>
            </Team>
          ))}
        </TeamsWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Join
