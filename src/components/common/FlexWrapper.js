import React from 'react'
import styled from 'styled-components'

const FlexCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const FlexWrapper = ({ children, style = {} }) => {
  return <FlexCentered style={style}>{children}</FlexCentered>
}

export default FlexWrapper
