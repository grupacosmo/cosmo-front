import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  all: unset;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 18px;
  border-radius: 8px;
  width: fit-content;
  font-weight: 600;
  font-size: ${(props) => `${props.theme.fontSizes.p}px`};
  cursor: pointer;
  transition: transform 200ms ease;
  &:hover {
    transform: scale(1.05);
  }
`

const Button = ({ children, handleClick = () => {}, style = {} }) => {
  return (
    <StyledButton onClick={handleClick} style={style}>
      {children}
    </StyledButton>
  )
}

export default Button
