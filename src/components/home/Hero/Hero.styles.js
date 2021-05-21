import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
`

export const InnerWrapper = styled.div`
  height: 100%;
  width: 80%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`

export const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: absolute;
  z-index: -1;
`

export const Content = styled(motion.div)`
  height: 100%;
  width: 50%;
  margin: auto;
  padding: 150px 30px 250px 30px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 300ms ease;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    width: 90%;
  }
`

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const Text = styled.p`
  max-width: 500px;
  font-size: ${(props) => `${props.theme.fontSizes.h3}px`};
  line-height: 1.2;
  margin-bottom: 20px;
`

export const MediaLinks = styled.div`
  display: flex;
  max-width: 500px;
  a {
    margin-right: 20px;
  }
`

export const CosmonautWrapper = styled.div`
  width: 40%;
  height: 85%;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

export const CosmonautImage = styled(motion.img)`
  max-width: 450px;
  height: 450px;
  transition: filter 0.4s ease-out, transform 300ms ease;

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    max-width: 300px;
    height: 300px;
  }
`

export const MoonImage = styled(motion.img)`
  position: absolute;
  width: 270px;
  height: 270px;
  transition: filter 0.4s ease-out, transform 300ms ease;
  top: 100px;
  right: 30px;

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    display: none;
  }
`
