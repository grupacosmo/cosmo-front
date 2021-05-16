import React from 'react'
import { FlexWrap } from '@common'
import { InnerWrapper, Wrapper } from './Posts.styles'
import Post from '../../home/Blog/Post'

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <FlexWrap
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '75px',
          }}
        >
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </FlexWrap>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Posts
