import React from 'react'
import Image from 'next/image'
import { usePageOffset, useLazyImage } from '@hooks'
import { useRouter } from 'next/router'
import { Button } from '@common'
import { links } from '@utils'
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

const cosmonaut = ['cosmonaut_small.png', 'cosmonaut.png']
const moon = ['moon_small.png', 'moon.png']

const Hero = () => {
  const offset = usePageOffset()
  const router = useRouter()
  const [moonSrc, moonBlur] = useLazyImage(moon[0], moon[1])
  const [cosmoSrc, cosmoBlur] = useLazyImage(cosmonaut[0], cosmonaut[1])

  return (
    <Wrapper>
      <HeroImage src="/hero.jpg" alt="hero" />
      <MoonImage
        src={moonSrc}
        alt="moon"
        translate={offset}
        style={{
          filter: moonBlur ? 'blur(20px)' : 'none',
        }}
      />

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
            src={cosmoSrc}
            alt="cosmonaut"
            translate={offset}
            style={{
              filter: cosmoBlur ? 'blur(20px)' : 'none',
            }}
          />
        </CosmonautWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
