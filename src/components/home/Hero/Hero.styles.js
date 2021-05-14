import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const InnerWrapper = styled.div`
  height: 100%;
  width: 80%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;
`

export const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  position: absolute;
  z-index: -1;
  transition: transform 100ms ease;
`

export const Content = styled.div`
  height: 100%;
  width: 50%;
  margin: auto;
  padding: 150px 30px 250px 30px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: ${(props) => `translateY(${props.translate * 0.1}px)`};
  transition: transform 300ms ease;
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

export const CosmonautWrapper = styled.div`
  width: 40%;
  height: 85%;
  display: flex;
  align-items: flex-end;
`

export const CosmonautImage = styled.img`
  max-width: 450px;
  height: 450px;
  transform: ${(props) => `translateY(${props.translate * 0.2}px)`};
  transition: filter 0.4s ease-out, transform 300ms ease;
`

export const MoonImage = styled.img`
  position: absolute;
  width: 270px;
  height: 270px;
  transform: ${(props) => `translateY(${props.translate * 0.3}px)`};
  transition: filter 0.4s ease-out, transform 300ms ease;
  top: 100px;
  right: 30px;
`
