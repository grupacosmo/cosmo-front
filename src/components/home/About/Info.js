import React from 'react'
import { Title } from '@common'
import { useLazyImage } from '@hooks'
import { Info as InfoWrapper, InfoContent, Text, Image } from './About.styles'

const Info = ({ info, i }) => {
  const [src, blur] = useLazyImage(info.smallPhoto, info.photo)

  return (
    <InfoWrapper isReversed={i % 2 === 0}>
      <Image
        src={src}
        style={{
          filter: blur ? 'blur(20px)' : 'none',
        }}
      />
      <InfoContent>
        <Title
          size="h3"
          color="secondary"
          style={{
            textAlign: i % 2 === 0 ? 'right' : 'left',
            marginBottom: '15px',
          }}
        >
          {info.title}
        </Title>
        <Text isReversed={i % 2 === 0}>{info.text}</Text>
      </InfoContent>
    </InfoWrapper>
  )
}

export default Info
