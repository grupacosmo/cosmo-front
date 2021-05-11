import { useEffect, useState } from 'react'

const usePageOffset = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleOffsetChange = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener('scroll', handleOffsetChange)

    return () => {
      window.removeEventListener('scroll', handleOffsetChange)
    }
  }, [])

  return offset
}

export default usePageOffset
