import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  transition: transform 100ms ease;
  transform: ${(props) => `translateY(${props.translate * 0.1}px)`};
  z-index: -1;
`
