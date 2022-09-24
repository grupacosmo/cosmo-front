import React from 'react'
import { useRouter } from 'next/router'
import { Title, FlexWrap, Button, Section } from '@common'
import Post from './Post'
import { Wrapper, InnerWrapper } from './Blog.styles'

const Blog = ({ posts }) => {
  const router = useRouter()
  return (
    <Wrapper>
      <Section>
        <InnerWrapper>
          <Title size="h1" color="primary" style={{ marginBottom: '50px' }}>
            Nasz blog{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </Title>
          <FlexWrap
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '75px',
            }}
          >
            {posts.slice(0,3).map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </FlexWrap>

          <Button
            color="white"
            bg="primary"
            size="h4"
            handleClick={() => router.push('/aktualnosci')}
          >
            Zobacz więcej
          </Button>
        </InnerWrapper>
      </Section>
    </Wrapper>
  )
}

export default Blog
