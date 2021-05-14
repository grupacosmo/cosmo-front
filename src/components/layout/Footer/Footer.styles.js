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

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const ContactWrapper = styled.div`
  width: 350px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
    width: 80%;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
    text-align: center;
    max-width: 500px;
    margin: auto;

    p {
      width: 300px;
    }
  }
`
