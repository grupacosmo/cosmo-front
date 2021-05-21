import React, { useReducer } from 'react'
import { Title, Button, Section } from '@common'
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

const FORM_SUBMIT_URL =
  'https://formsubmit.co/ajax/5846537c5750581320ec0a3c0b03cee1'

const initialState = {
  error: '',
  success: '',
  loading: false,
  name: '',
  email: '',
  message: '',
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Contact = () => {
  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  )

  const [src, blur] = useLazyImage('contact_small.png', 'contact.png')

  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail(form.email)) {
      setForm({ error: 'Podany email jest niepoprawny' })
      return
    }

    setForm({ error: '', success: false, loading: true })

    const { email, name, message } = form

    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Wystąpił błąd')
      }

      const data = await response.json()

      if (data.success === 'false') {
        throw new Error(data.message)
      }
      setForm({ email: '', name: '', message: '', success: true })
    } catch (error) {
      setForm({ error: error.message })
    } finally {
      setForm({ loading: false })
    }

    setTimeout(() => {
      setForm({ success: false })
    }, 5000)
  }

  return (
    <Section>
      <Wrapper id="kontakt">
        <ImageContainer>
          <Image
            src={src}
            style={{
              filter: blur ? 'blur(20px)' : 'none',
            }}
            alt="contact"
            loading="lazy"
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
              value={form.name}
              handleChange={handleChange}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              placeholder="Twój email"
              value={form.email}
              handleChange={handleChange}
            />
            <Label htmlFor="message">Wiadomość</Label>
            <Input
              name="message"
              placeholder="Twoja wiadomość"
              value={form.message}
              isTextArea
              rows={4}
              handleChange={handleChange}
            />
            <Button
              style={{ alignSelf: 'center', marginTop: '30px' }}
              type="submit"
            >
              Wyślij wiadomość
            </Button>

            {!form.error && !form.loading && form.success && (
              <Title size="p" color="white" style={{ marginTop: '20px' }}>
                Wiadomość wysłana pomyślnie
              </Title>
            )}
          </Form>
        </FormContainer>
      </Wrapper>
    </Section>
  )
}

export default Contact
