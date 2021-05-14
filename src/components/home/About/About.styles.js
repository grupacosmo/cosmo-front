import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 60px;
`

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
`

export const InfoWrapper = styled.div`
  width: 100%;
`

export const Info = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: ${(props) => (props.isReversed ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
`

export const InfoContent = styled.div`
  width: 50%;
`

export const Text = styled.p`
  font-size: ${(props) => `${props.theme.fontSizes[props.size]}`};
  color: ${(props) => `${props.theme.fontSizes[props.color]}`};
  text-align: ${(props) => (props.isReversed ? 'right' : 'left')};
`

export const Image = styled.img`
  width: 350px;
  height: 300px;
  transition: filter 0.4s ease-out;
`
