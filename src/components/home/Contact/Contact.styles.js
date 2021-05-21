import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    flex-direction: column;
  }
`

export const FormContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    width: 100%;
  }
`

export const Form = styled.form`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    min-width: 300px;
    max-width: 450px;
    width: unset;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.smallLaptop}) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  transition: filter 200ms ease;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    min-width: 300px;
    max-width: 450px;
  }
`
