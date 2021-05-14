import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 100px 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray};
`

export const InnerWrapper = styled.div`
  width: 80%;
  max-width: 1300px;
  margin: auto;
`
export const TeamsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Team = styled.div`
  width: 350px;
  margin: 20px;
  height: 250px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: all 200ms ease;
  span {
    display: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};

    img {
      display: none !important;
    }
    h1 {
      color: ${(props) => props.theme.colors.white} !important;
      margin-top: 0 !important;
    }
    p {
      display: none;
    }

    span {
      display: block;
      margin-top: 10px;
      color: ${(props) => props.theme.colors.white} !important;
    }
  }
`
