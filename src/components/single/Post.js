import React from 'react'
import styled from 'styled-components'
import { Title, Text, Markdown } from '@common'
import { usePageOffset } from '@hooks'

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  flex-direction: column;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  transition: transform 100ms ease;
  transform: ${(props) => `translateY(${props.translate * 0.1}px)`};
  z-index: -1;
`

const ContentWrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 100px 0;
  text-align: justify;

  p {
    padding: 10px 0;
    line-height: 1.5;
  }

  time {
    font-size: ${(props) => `${props.theme.fontSizes.h4}px`};
  }
`

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
      <ContentWrapper>
        <time>Dodano: {post.date}</time>
        <Markdown>{post.content}</Markdown>
      </ContentWrapper>
    </>
  )
}

export default Post
