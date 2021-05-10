import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
`

export const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: absolute;
  z-index: -1;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  max-width: 1200px;
  padding: 150px 30px 250px 30px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const Text = styled.p`
  max-width: 500px;
  font-size: ${(props) => `${props.theme.fontSizes.h3}px`};
  line-height: 1.2;
  margin-bottom: 20px;
`

export const MediaLinks = styled.div`
  display: flex;
  max-width: 500px;
  a {
    margin-right: 20px;
  }
`
