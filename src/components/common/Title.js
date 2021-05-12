import React from 'react'
import styled from 'styled-components'

const TitleComponent = styled.h1`
  font-weight: 600;
  text-align: center;
  font-size: ${(props) => `${props.theme.fontSizes[props.size]}px`};
  color: ${(props) => `${props.theme.fontSizes[props.color]}`};
`

const Title = ({ children, size = 'h1', color = 'white', style = {} }) => {
  return (
    <TitleComponent style={style} size={size} color={color}>
      {children}
    </TitleComponent>
  )
}

export default Title
