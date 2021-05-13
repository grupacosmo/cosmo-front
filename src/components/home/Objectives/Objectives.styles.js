import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 75px 0;
  color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
`
export const InnerWrapper = styled.div`
  width: 1000px;
  display: flex;
  margin: auto;
  position: relative;
`

export const SingleObjective = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 300px;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: center;
  }
`

export const CircleWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerCircle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 1;
`

export const SpaceShip = styled.img`
  position: absolute;
  transform: ${(props) => `translateX(${props.step * 250 + 100}px )`}
    rotate(90deg);
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 60px;
  height: 60px;
  top: 75%;
`

export const Connection = styled.div`
  height: 100px;
  width: 1px;
  border: 1px dashed white;
`

export const EarthImage = styled.img`
  width: 100px;
  height: 100px;
`
