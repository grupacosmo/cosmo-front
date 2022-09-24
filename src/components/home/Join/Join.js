import React from 'react'
import Image from 'next/image'
import { Title, Text, Section } from '@common'
import { InnerWrapper, Team, TeamsWrapper, Wrapper } from './Join.styles'

const teams = [
  {
    icon: '/website.svg',
    title: 'Webdev',
    secondaryText: 'Stworzyli również stroną HABSat i zapewniają nam najwyższą jakość zarówno od strony wizualnej jak i użytkowej. ',
    text:
      'Osoby z tego teamu projektują i implementują aplikacji i strony internetowe . Strona którą właśnie czytacie jest ich dziełem.',
  },
  {
    icon: '/microchip.svg',
    title: 'OBC',
    secondaryText: 'Wszystkie najważniejsze funkcje naszych sond, takie jak kontakt z Ziemią, zbieranie i pobieranie danych pomiarowych oraz informacji na temat aktualnego położenia sondy, są ich zasługą.',
    text:
      'Członkowie tego działu odpowiadają za komputer pokładowy we wszystkich projektach.',
  },
  {
    icon: '/innovation.svg',
    title: 'AI',
    secondaryText: 'Posługują się w swoich projektach różnymi rodzajami uczenia maszynowego.',
    text:
      'Członkowie tego zespołu zajmują się analizą i przetwarzaniem obrazu. Przeprowadzają eksperymenty na podstawie, których uczona jest sztuczna inteligencja.',
  },
  {
    icon: '/bullhorn.svg',
    title: 'Team Marketingu',
    secondaryText: 'Rozmawiają z naszymi partnerami i dbanie o nasze finanse i zarządzanie kołem.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh nec quam vulputate tempus. Cras vel est nisl. In non vulputate ex. Ut id faucibus elit.',
  },
  {
    icon: '/globe.svg',
    title: 'Logistyka',
    secondaryText: 'Rozmawiają z naszymi partnerami i dbanie o nasze finanse i zarządzanie kołem.',
    text:
      'Nasi organizatorzy. Organizacją wydarzenia związanych z naszym kołem takich jak szkolenia czy uczestnictwo w zlotach i konkursach naszych członków.',
  },
  {
    icon: '/electronic.svg',
    title: 'Elektro-mech',
    secondaryText: '',
    text:
      'Do tego działu należą osoby posiadające umiejętności pozwalające na projektowanie, prototypowanie elektroniki, druków 3D oraz konstrukcji mechanicznych.',
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
