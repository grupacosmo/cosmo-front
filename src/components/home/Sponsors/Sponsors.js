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
  { high: '/logos/1.png', low: '/logos/1_low.png' },
  { high: '/logos/2.png', low: '/logos/2_low.png' },
  { high: '/logos/3.png', low: '/logos/3_low.png' },
  { high: '/logos/4.png', low: '/logos/4_low.png' },
  { high: '/logos/5.jpg', low: '/logos/5_low.jpg' },
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
        <Title color="primary">Nasi sponsorzy</Title>
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
