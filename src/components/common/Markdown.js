import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const StyledMarkdown = styled(ReactMarkdown)``

const Markdown = ({ children }) => {
  return <StyledMarkdown>{children}</StyledMarkdown>
}

export default Markdown
