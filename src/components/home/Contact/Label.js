import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.white};
  padding: 5px;
  font-weight: 600;
  font-size: ${(props) => `${props.theme.fontSizes.p}px`};
`

const Label = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}

export default Label
