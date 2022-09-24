/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  Button,
  ButtonWrapper,
  LinkButton,
  LinkWrapper,
  Modal,
  variants,
} from './MobileNavbar.styles'

export const links = [
  {
    text: 'Kim jesteśmy',
    link: '/#kim',
  },
  // { text: 'Kontakt', link: '/#kontakt' },
  { text: 'Sponsorzy', link: '/#sponsorzy' },
  { text: 'Aktualności', link: '/aktualnosci' },
]

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        <Image src="/menu.svg" alt="menu" width={35} height={35} />
      </Button>

      <Modal animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <ButtonWrapper onClick={() => setIsOpen(false)}>
          <Image src="/cancel.svg" alt="menu" width={30} height={30} />
        </ButtonWrapper>

        <LinkWrapper>
          <LinkButton
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setIsOpen(false)
              router.push('/')
            }}
            type="button"
            style={{ marginBottom: '20px', fontSize: '34px' }}
          >
            <Image src="/logo_gray.svg" width={50} height={50} />
            COSMOPK
          </LinkButton>
          {links.map((link, i) => (
            <LinkButton
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              type="button"
              key={i}
              onClick={() => {
                setIsOpen(false)
                router.push(link.link)
              }}
            >
              {link.text}
            </LinkButton>
          ))}
        </LinkWrapper>
      </Modal>
    </>
  )
}

export default MobileNavbar
