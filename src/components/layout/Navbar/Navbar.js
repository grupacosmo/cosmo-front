/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useScrollHeight } from '@hooks'
import MobileNavbar from './MobileNavbar'

import {
  Header,
  Link,
  LogoWrapper,
  NavbarContent,
  NavbarLinks,
  NavbarWrapper,
} from './Navbar.styles'

export const links = [
  {
    text: 'Kim jesteśmy',
    link: '/#kim',
  },
  { text: 'Kontakt', link: '/#kontakt' },
  { text: 'Aktualności', link: '/aktualnosci' },
]

const Navbar = memo(() => {
  const scrollHeight = useScrollHeight()

  return (
    <NavbarWrapper isSmall={scrollHeight > 100}>
      <NavbarContent>
        <NextLink href="/">
          <LogoWrapper>
            <Image src="/logo.svg" width={60} height={60} alt="COSMOPK" />
            <Header isSmall={scrollHeight > 100}>COSMO PK</Header>
          </LogoWrapper>
        </NextLink>
        <NavbarLinks>
          {links.map((el, i) => (
            <NextLink href={el.link} key={i}>
              <Link
                tabIndex={0}
                isSmall={scrollHeight > 100}
                data-cy="nav-item"
              >
                {el.text}
              </Link>
            </NextLink>
          ))}
        </NavbarLinks>
      </NavbarContent>
      <MobileNavbar />
    </NavbarWrapper>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
