import React from 'react'
import styled from 'styled-components'

const TextComp = styled.p`
  font-size: ${(props) => `${props.theme.fontSizes[props.size]}px`};
  color: ${(props) => `${props.theme.colors[props.color]}`};
`

const Text = ({ children, color = 'primary', size = 'p', style = {} }) => {
  return (
    <TextComp color={color} size={size} style={style}>
      {children}
    </TextComp>
  )
}

export default Text
