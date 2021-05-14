import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
`

const Flex = ({ style = {}, children }) => {
  return <FlexWrapper style={style}>{children}</FlexWrapper>
}

export default Flex
