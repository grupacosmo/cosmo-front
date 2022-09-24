/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Title, Section } from '@common'
import {
  ButtonsWrapper,
  CircleButton,
  Wrapper,
  ImageWrapper,
} from './Sponsors.styles'
import Logo from './Logo'

const logos = [
  { high: '/logos/botland.png',                 low: '/logos/botland_low.png' },
  { high: '/logos/future_lab.jpg',              low: '/logos/future_lab_low.jpg' },
  { high: '/logos/katedra_informatyki.png',     low: '/logos/katedra_informatyki_low.png' },
  { high: '/logos/politechnika_krakowska.png',  low: '/logos/politechnika_krakowska_low.png' },
  { high: '/logos/spectator_earth.png',         low: '/logos/spectator_earth_low.png' },
]

const Sponsors = () => {
  const [page, setPage] = useState({ page: 0, direction: 0 })

  const paginate = useCallback((newDirection) => {
    setPage((prev) => {
      const newPage =
        prev.page + newDirection > logos.length - 1
          ? 0
          : prev.page + newDirection < 0
          ? logos.length - 1
          : prev.page + newDirection
      return {
        page: newPage,
        direction: newDirection,
      }
    })
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      paginate(1)
    }, 10000)

    return () => {
      clearInterval(id)
    }
  }, [paginate, page])

  return (
    <Wrapper id="sponsorzy">
      <Section x="50vw">
        <Title color="primary">Nasi partnerzy</Title>
        <AnimatePresence initial={false} custom={page.direction}>
          <ImageWrapper>
            <Logo page={page} logos={logos} />
          </ImageWrapper>
        </AnimatePresence>
        <ButtonsWrapper>
          <CircleButton
            style={{ transform: 'rotate(180deg)' }}
            onClick={() => paginate(-1)}
            type="button"
          >
            ‣
          </CircleButton>
          <CircleButton onClick={() => paginate(1)} type="button">
            ‣
          </CircleButton>
        </ButtonsWrapper>
      </Section>
    </Wrapper>
  )
}

export default Sponsors
