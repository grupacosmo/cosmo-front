import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px 0;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  width: 600px;
  margin: 50px auto 10px auto;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    min-width: 300px;
    max-width: 450px;
    width: unset;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 50px auto;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 220px;
  }
`

export const Image = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: contain;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 200px;
  }
`

export const CircleButton = styled.button`
  all: unset;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  cursor: pointer;
  box-shadow: 0px 1px 15px 2px lightgray;
`
