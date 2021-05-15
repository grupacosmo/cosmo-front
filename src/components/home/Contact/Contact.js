import React, { useRef } from 'react'
import styled from 'styled-components'
import { Title, Button } from '@common'
import { useLazyImage } from '@hooks'
import Input from './Input'
import Label from './Label'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
`

const FormContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Form = styled.form`
  width: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
`

const ImageContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Image = styled.img`
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  transition: filter 200ms ease;
`

const Contact = () => {
  const [src, blur] = useLazyImage('contact_small.png', 'contact.png')
  const inputEmailRef = useRef()
  const inputNameRef = useRef()
  const inputMessageRef = useRef()

  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={src}
          style={{
            filter: blur ? 'blur(20px)' : 'none',
          }}
          alt="contact"
        />
      </ImageContainer>
      <FormContainer>
        <Title size="h2">Kontakt</Title>
        <Form>
          <Label htmlFor="name">Imię</Label>
          <Input
            name="name"
            type="text"
            required
            placeholder="Twoje imię"
            ref={inputNameRef}
          />
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="Twój email" ref={inputEmailRef} />
          <Label htmlFor="message">Wiadomość</Label>
          <Input
            name="message"
            placeholder="Twoja wiadomość"
            ref={inputMessageRef}
            isTextArea
            rows={4}
          />
          <Button style={{ alignSelf: 'center', marginTop: '30px' }}>
            Wyślij wiadomość
          </Button>
        </Form>
      </FormContainer>
    </Wrapper>
  )
}

export default Contact
