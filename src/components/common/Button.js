import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  all: unset;
  background-color: ${(props) => props.theme.colors[props.bg]};
  color: ${(props) => props.theme.colors[props.color]};
  padding: 8px 18px;
  border-radius: 8px;
  width: fit-content;
  font-weight: 600;
  font-size: ${(props) => `${props.theme.fontSizes[props.size]}px`};
  cursor: pointer;
  transition: transform 200ms ease;
  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    pointer-events: none;
    background-color: ${(props) => props.theme.colors.gray};
  }
`

const Button = ({
  children,
  handleClick = () => {},
  style = {},
  color = 'primary',
  bg = 'white',
  size = 'p',
  ...rest
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      style={style}
      bg={bg}
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button
