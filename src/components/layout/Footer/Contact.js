import React from 'react'
import { Text, Title } from '@common'
import Image from 'next/image'
import { ContactWrapper, Flex } from './Footer.styles'

const Contact = () => {
  return (
    <ContactWrapper>
      <Title size="h4" style={{ textAlign: 'left' }}>
        Kontakt:
      </Title>
      <Flex>
        <Image alt="localization" src="/mail.svg" width={35} height={35} />
        <a
          href="mailto:kolocosmopk@gmail.com"
          style={{ all: 'unset', cursor: 'pointer' }}
        >
          <Text style={{ marginLeft: '15px' }}>kolocosmopk@gmail.com</Text>
        </a>
      </Flex>
      <Flex>
        <Image alt="localization" src="/place.svg" width={35} height={35} />
        <Text style={{ marginLeft: '15px' }}>
          Warszawska 24
          <br />
          Wydział Informatyki i telekomunikacji
          <br />
          Katedra Informatyki
        </Text>
      </Flex>
    </ContactWrapper>
  )
}

export default Contact
