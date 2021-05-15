import { useState, useEffect } from 'react'

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(
    typeof window !== 'undefined' ? window.screenY : 0
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollHeight
}

export default useScrollHeight
