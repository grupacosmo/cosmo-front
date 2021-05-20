/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Title, Section } from '@common'
import {
  ButtonsWrapper,
  CircleButton,
  Image,
  Wrapper,
  ImageWrapper,
} from './Sponsors.styles'

const logos = [
  '/logos/1.png',
  '/logos/2.png',
  '/logos/3.png',
  '/logos/4.png',
  '/logos/5.jpg',
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 600 : -600,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 600 : -600,
      opacity: 0,
    }
  },
}
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
  }, [])

  return (
    <Wrapper>
      <Section x="50vw">
        <Title color="primary">Nasi sponsorzy</Title>
        <AnimatePresence initial={false} custom={page.direction}>
          <ImageWrapper>
            <Image
              key={page.page}
              src={logos[page.page]}
              custom={page.direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 50 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
            />
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
