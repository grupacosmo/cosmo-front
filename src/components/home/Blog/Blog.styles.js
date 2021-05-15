import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 100px 0;
`

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const PostWrapper = styled.div`
  width: 300px;
  margin: 20px;
  height: 420px;
  padding: 15px;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0px 1px 10px 4px #999999;
  display: flex;
  flex-direction: column;
  p {
    text-align: justify;
    height: 120px;
  }
  cursor: pointer;
`
