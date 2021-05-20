import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const AnimatedSection = styled(motion.div)`
  width: 100%;
`

const Section = ({ children, x = '-50vw' }) => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <AnimatedSection
      ref={ref}
      animate={{ x: inView ? 0 : x, opacity: inView ? 1 : 0 }}
      initial={{ x, opacity: 0 }}
      transition={{
        x: { type: 'spring', stiffness: 400, damping: 50 },
        opacity: { duration: 0.5 },
        delay: 0.3,
      }}
    >
      {children}
    </AnimatedSection>
  )
}

export default Section
