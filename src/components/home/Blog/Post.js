import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Text, Title, Button } from '@common'
import { PostWrapper } from './Blog.styles'

const trucanate = (text, pos) => {
  return text.slice(0, pos).concat('...')
}

const Post = ({ post }) => {
  const router = useRouter()
  return (
    <PostWrapper>
      <Image
        src={post.photo.url}
        width={280}
        height={200}
        objectFit="contain"
      />
      <Title
        size="h4"
        color="primary"
        style={{ textAlign: 'left', marginTop: '10px' }}
      >
        {post.title}
      </Title>
      <Text size="psm">{trucanate(post.description, 180)}</Text>
      <Button
        bg="primary"
        color="white"
        handleClick={() => router.push(`/aktualnosci/${post.slug}`)}
        size="psm"
      >
        Czytaj dalej
      </Button>
    </PostWrapper>
  )
}

export default Post
