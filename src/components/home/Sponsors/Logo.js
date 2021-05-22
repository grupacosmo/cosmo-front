import React from 'react'
import { useLazyImage } from '@hooks'
import { Image } from './Sponsors.styles'

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

const Logo = ({ page, logos }) => {
  const [src, blur] = useLazyImage(logos[page.page].low, logos[page.page].high)

  return (
    <Image
      loading="lazy"
      key={page.page}
      src={src}
      custom={page.direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 50 },
        opacity: { duration: 0.2 },
      }}
      style={{ filter: blur ? 'blur(20px)' : 'none' }}
    />
  )
}

export default Logo
