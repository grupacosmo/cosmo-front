/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Header,
  Link,
  LogoWrapper,
  NavbarContent,
  NavbarLinks,
  NavbarWrapper,
} from './Navbar.styles'

const links = [
  {
    text: 'Kim jesteśmy',
    link: '/#kim',
  },
  { text: 'Kontakt', link: '/#kontakt' },
  { text: 'Aktualności', link: '/aktualnosci' },
]

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <LogoWrapper>
          <Image src="/logo.svg" width={60} height={60} alt="COSMOPK" />
          <Header>COSMO PK</Header>
        </LogoWrapper>
        <NavbarLinks>
          {links.map((el, i) => (
            <NextLink href={el.link} key={i}>
              <Link tabIndex={0}>{el.text}</Link>
            </NextLink>
          ))}
        </NavbarLinks>
      </NavbarContent>
    </NavbarWrapper>
  )
}

export default Navbar
