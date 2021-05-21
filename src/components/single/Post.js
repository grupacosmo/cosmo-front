import React from 'react'
import { Title, Text, Markdown, Section } from '@common'
import { usePageOffset } from '@hooks'
import { ContentWrapper, Image, Wrapper } from './Post.styles'

const Post = ({ post }) => {
  const offset = usePageOffset()

  return (
    <>
      <Wrapper>
        <Image
          alt="hero"
          src={post.photo.url}
          loading="lazy"
          translate={offset}
        />

        <Title style={{ marginTop: '100px' }}>{post.title}</Title>
        <Text
          color="white"
          style={{
            maxWidth: '600px',
            textAlign: 'center',
            lineHeight: 1.2,
            fontSize: 18,
          }}
        >
          {post.description}
        </Text>
      </Wrapper>
      <Section>
        <ContentWrapper>
          <time>Dodano: {post.date}</time>
          <Markdown>{post.content}</Markdown>
        </ContentWrapper>
      </Section>
    </>
  )
}

export default Post
