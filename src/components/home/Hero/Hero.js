import React from 'react'
import Image from 'next/image'
import { usePageOffset } from '@hooks'
import { useRouter } from 'next/router'
import { Button } from '@common'
import {
  Content,
  Heading,
  HeroImage,
  MediaLinks,
  Text,
  Wrapper,
  CosmonautImage,
  InnerWrapper,
  CosmonautWrapper,
  MoonImage,
} from './Hero.styles'

const links = [
  {
    icon: '/facebook.svg',
    link: 'https://www.facebook.com/pkcosmopk/',
  },
  {
    icon: '/twitter.svg',
    link: 'https://twitter.com/pkcosmopk',
  },
  {
    icon: '/github.svg',
    link: 'https://github.com/grupacosmo',
  },
  {
    icon: '/instagram.svg',
    link: 'https://www.instagram.com/pkcosmopk/',
  },
]

const Hero = () => {
  const offset = usePageOffset()
  const router = useRouter()

  return (
    <Wrapper>
      <HeroImage src="/hero.jpg" alt="hero" />
      <MoonImage src="/moon.png" alt="moon" translate={offset} />

      <InnerWrapper>
        <Content translate={offset}>
          <Heading>COSMO PK</Heading>
          <Text>Studenckie koło naukowe Politechniki Krakowskiej</Text>
          <MediaLinks>
            {links.map((link) => (
              <a
                target="_blank"
                key={link.icon}
                href={link.link}
                rel="noreferrer"
              >
                <Image src={link.icon} width={35} height={35} />
              </a>
            ))}
          </MediaLinks>
          <Button
            style={{ marginTop: '20px' }}
            handleClick={() => router.push('/#dolacz')}
          >
            Dołącz do nas
          </Button>
        </Content>
        <CosmonautWrapper>
          <CosmonautImage
            src="/cosmonaut.png"
            alt="cosmonaut"
            translate={offset}
          />
        </CosmonautWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
