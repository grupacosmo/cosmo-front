import { useState, useEffect } from 'react'

const useLazyImage = (lowerQualitySrc, higherQualitySrc) => {
  const [src, setSrc] = useState(lowerQualitySrc)

  useEffect(() => {
    const image = new Image()

    const handleLoad = () => {
      setSrc(higherQualitySrc)
    }

    image.src = higherQualitySrc

    image.addEventListener('load', handleLoad)

    return () => {
      image.removeEventListener('load', handleLoad)
    }
  }, [higherQualitySrc])

  return [src, src === lowerQualitySrc]
}

export default useLazyImage
