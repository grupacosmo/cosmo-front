import styled from 'styled-components'

export const FooterComp = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 50px 0;
`

export const InnerFooter = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: space-between;
`

export const ContactWrapper = styled.div`
  max-width: 350px;
`
