import React from 'react'
import styled from 'styled-components'

const FlexWrapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexWrap = ({ style = {}, children }) => {
  return <FlexWrapWrapper style={style}>{children}</FlexWrapWrapper>
}

export default FlexWrap
