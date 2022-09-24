import React from 'react'
import { Title, Section } from '@common'
import { InfoWrapper, InnerWrapper, Wrapper } from './About.styles'
import Info from './Info'

const info = [
  {
    photo: '/universe.png',
    smallPhoto: '/universe_small.png',
    title: 'Kilka słów o nas',
    text:
      'COSMO PK jest kołem naukowym pracującym na Politechnice Krakowskiej. Zajmujemy się tematyką eksploracji kosmosu, zwłaszcza interesujemy się budową sond i satelit. Nasza działalność dotyczy głównie IT, ale poszerzamy też naszą wiedzę w tematach związanych z mechaniką i elektrotechniką. Naszym największym projektem do tej pory jest stworzenie i wysłanie wyniesienie sondy stratosferycznej HABSat.',
  },
  {
    photo: '/rocket.png',
    smallPhoto: '/rocket_small.png',
    title: 'Co to HABSat? ',
    text:
      'Naszym największym dotychczasowym projektem jest budowa i wyniesienie sondy stratosferycznej HABSat. Co to  takiego? To mała, niezbyt widowiskowa skrzynka skrywająca w sobie masę ciekawej techniki. Składa się ona z trzech głównych modułów, które budowały trzy nasze teamy naukowe, o których możecie przeczytać niżej. Są to komputer pokładowy wraz z wszystkimi urządzeniami pomiarowymi, nawigującymi oraz LoRa czyli radio za pomocą, którego sonda może się łączyć z Internetem. Kolejny moduł to AI czyli sprzęt robiący zdjęcia z góry i sztuczna inteligencja analizująca je pod kontem charakterystycznych obiektów. Mamy też jeszcze jedno radio czyli SSTV. Wysyła ono sygnał,  który po odebraniu na ziemi można przekonwertować na obraz. Dzięki niemu mieliśmy sporo zabawy podczas lotu kiedy lidzie z za granicy pisali nam, że odebrali nasze memy z dziekanem. Jeśli chcecie dowiedzieć się więcej o naszym projekcie to zachęcamy do odwiedzenia strony www.habsat.pl gdzie znajduje się zapis lotu i znacznie więcej szczegółów o projekcie.',
  },
  {
    photo: '/starman.png',
    smallPhoto: '/starman_small.png',
    title: 'Dlaczego COSMO PK',
    text:
      'Wiemy jak to wygląda. Czyli w COSMO cały czas siedzi się i pracuje. Jak nie kodowanie to lutownica. Generalnie ciężkie to musi być. Otóż zapewniamy Was, że nie. Oczywiście nasi członkowie są bardzo pracowici i zdarzyło im się mieć kalendarz wypełniony COSMO, ale poza pracą jest też czas na zabawę. Spotkania koła zawsze kończą się na piwie, a każdy z członków ma czas na studia i na rozwijanie innych pasji. Mamy między nami żeglarzy, fotografów, podróżników, sportowców, grafików i wiele innych. Poza pracą COSMO PK oferuje znajomości i wspomnienia. Jeśli chcesz dołączyć do nas, zacząć z nami współpracę czy po prostu nas poznać to mamy do zaoferowania zarówno rozwój i rzetelnie wykonaną pracę jak i miło spędzony czas.',
  },
  {
    photo: '/launch_day.png',
    smallPhoto: '/launch_day_small.png',
    title: 'Jak do nas dołączyć?',
    text:
      'Jeśli interesujesz się tematyką, którą się zajmujemy i czujesz, że możesz czegoś się z nami nauczyć serdecznie zapraszamy do wzięcia udziału w rekrutacji. Główna coroczna rekrutacja jest organizowana w październiku i na pewno znajdziesz o niej mnóstwo informacji na naszych social mediach. Czasem organizowane są również rekrutacje uzupełniające. Ma to miejsce jeśli chcemy stworzyć nowy zespół lub mamy wakat w kole po tym jak część naszych członków skończyła studia w semestrze zimowym. Jeśli do października jeszcze daleko nie martw się! Jesteśmy otwarci nawet poza rekrutacjami. Wystarczy, że do nas napiszesz z radością zaprosimy Cię na najbliższe spotkanie koła.',
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
