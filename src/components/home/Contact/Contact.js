import React, { useRef } from 'react'
import { Title, Button } from '@common'
import { useLazyImage } from '@hooks'
import Input from './Input'
import Label from './Label'
import {
  Form,
  FormContainer,
  Image,
  ImageContainer,
  Wrapper,
} from './Contact.styles'

const Contact = () => {
  const [src, blur] = useLazyImage('contact_small.png', 'contact.png')
  const inputEmailRef = useRef()
  const inputNameRef = useRef()
  const inputMessageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
        <Form onSubmit={handleSubmit}>
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
          <Button
            style={{ alignSelf: 'center', marginTop: '30px' }}
            type="submit"
          >
            Wyślij wiadomość
          </Button>
        </Form>
      </FormContainer>
    </Wrapper>
  )
}

export default Contact
