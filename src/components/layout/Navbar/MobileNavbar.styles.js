import styled from 'styled-components'
import { motion } from 'framer-motion'

export const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Button = styled.button`
  all: unset;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`
export const Modal = styled(motion.div)`
  display: none;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 2000;
  padding: 30px 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`
export const ButtonWrapper = styled.button`
  all: unset;
  position: absolute;
  top: 35px;
  align-self: flex-end;
  cursor: pointer;
`
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  font-size: 30px;
  font-weight: 600;
`

export const LinkButton = styled(motion.button)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  text-align: center;
  padding: 10px 0;
`
