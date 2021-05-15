import React, { forwardRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  all: unset;
  width: 100%;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.p};
  border-radius: 10px;
  margin-bottom: 5px;
`

const StyledTextArea = styled.textarea`
  all: unset;
  width: 100%;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.p};
  border-radius: 10px;
  margin-bottom: 5px;
  resize: none;
`

const Input = forwardRef(({ isTextArea, ...rest }, ref) => {
  return isTextArea ? (
    <StyledTextArea ref={ref} {...rest} />
  ) : (
    <StyledInput ref={ref} {...rest} />
  )
})

Input.displayName = 'Input'

export default Input
