import React from 'react'
import Image from 'next/image'
import { usePageOffset, useLazyImage } from '@hooks'
import { useRouter } from 'next/router'
import { Button } from '@common'
import { links } from '@utils'
import { useInView } from 'react-intersection-observer'
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
  const { ref, inView } = useInView()

  return (
    <Wrapper ref={ref}>
      <HeroImage src="/hero.jpg" alt="hero" loading="lazy" />
      <MoonImage
        loading="lazy"
        inital={false}
        src={moonSrc}
        alt="moon"
        style={{
          filter: moonBlur ? 'blur(20px)' : 'none',
          y: inView ? offset * 0.3 : 0,
        }}
        animate={{
          scale: [1.02, 1.04, 1.06, 1.08, 1.1, 1.12],
          rotate: 360,
        }}
        transition={{ repeat: Infinity, duration: 40, repeatType: 'reverse' }}
      />

      <InnerWrapper>
        <Content
          inital={false}
          style={{
            y: inView ? offset * 0.2 : 0,
          }}
        >
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
            inital={false}
            src={cosmoSrc}
            alt="cosmonaut"
            loading="lazy"
            style={{
              filter: cosmoBlur ? 'blur(20px)' : 'none',
              y: inView ? offset * 0.3 : 0,
            }}
            animate={{
              scale: [1.02, 1.04, 1.06, 1.08, 1.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: 'reverse',
            }}
          />
        </CosmonautWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
