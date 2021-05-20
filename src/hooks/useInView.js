import { useCallback, useRef, useState } from 'react'

const useInView = (
  options = { rootMargin: '0px', threshold: [0] },
  once = false
) => {
  const [inView, setInView] = useState(false)
  const observerRef = useRef()
  const counter = useRef(0)

  const ref = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      observerRef.current = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
          setInView(true)
          counter.current += 1
        } else {
          if (once && counter.current >= 1) {
            return
          }

          setInView(false)
        }
      }, options)

      if (node) {
        observerRef.current.observe(node)
      }
    },
    [once, options]
  )

  return { ref, inView }
}

export default useInView
