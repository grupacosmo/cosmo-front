import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
`

export const FormContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.form`
  width: 100%;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
`

export const ImageContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

export const Image = styled.img`
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  transition: filter 200ms ease;
`
