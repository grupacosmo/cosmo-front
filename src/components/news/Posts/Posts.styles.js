import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: ${(props) => props.theme.colors.white};
`

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`
