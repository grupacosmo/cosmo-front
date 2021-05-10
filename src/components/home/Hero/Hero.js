import React from 'react'
import Image from 'next/image'
import {
  Content,
  Heading,
  HeroImage,
  MediaLinks,
  Text,
  Wrapper,
} from './Hero.styles'

const links = [
  {
    icon: '/facebook.svg',
    link: '',
  },
  {
    icon: '/twitter.svg',
    link: '',
  },
  {
    icon: '/github.svg',
    link: '',
  },
  {
    icon: '/instagram.svg',
    link: '',
  },
]

const Hero = () => {
  return (
    <Wrapper>
      <HeroImage src="/hero.jpg" alt="hero" />
      <Content>
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
      </Content>
    </Wrapper>
  )
}

export default Hero
