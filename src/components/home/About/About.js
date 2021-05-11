import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 60px;
`

const InnerWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
`

const About = () => {
  return (
    <Wrapper>
      <InnerWrapper />
    </Wrapper>
  )
}

export default About
