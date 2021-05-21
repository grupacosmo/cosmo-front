import styled from 'styled-components'

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

export const ContentWrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 100px 20px;
  text-align: justify;

  p {
    padding: 5px 0;
    line-height: 1.5;
  }

  img {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
  }

  time {
    font-size: ${(props) => `${props.theme.fontSizes.h4}px`};
    text-decoration: underline;
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 5px 0;
    line-height: 1.5;
    font-weight: 600;
  }

  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 22px;
  }

  h6 {
    font-size: 20px;
  }

  ul,
  ol {
    list-style: inside;
  }

  ul {
    list-style: decimal inside;
  }

  li {
    display: list-item;
    font-size: 16px;
    padding: 2px 0;
    line-height: 1.5;

    &::marker {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  a {
    font-weight: 600;
  }
`
