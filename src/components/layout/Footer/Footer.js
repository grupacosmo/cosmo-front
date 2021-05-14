import React from 'react'
import Image from 'next/image'
import { FlexCentered, Title, FlexWrap } from '@common'
import { links } from '@utils'
import Contact from './Contact'
import { FooterComp, InnerFooter } from './Footer.styles'

const Footer = () => {
  return (
    <FooterComp>
      <InnerFooter>
        <div>
          <FlexCentered>
            <Image src="/logo.svg" width={60} height={60} objectFit="contain" />
            <Title color="white" size="h2">
              COSMO
            </Title>
          </FlexCentered>
          <FlexWrap style={{ marginTop: '20px' }}>
            {links.map((el) => (
              <a
                href={el.link}
                key={el.link}
                rel="noreferrer"
                target="_blank"
                style={{ margin: '10px' }}
              >
                <Image src={el.icon} width={25} height={25} />
              </a>
            ))}
          </FlexWrap>
        </div>
        <Contact />
      </InnerFooter>
    </FooterComp>
  )
}

export default Footer
