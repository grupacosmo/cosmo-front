import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  transform: translateY(50px);
  z-index: 999;
`

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Header = styled.h3`
  font-size: ${({ theme }) => `${theme.fontSizes.h2}px`};
  font-weight: 700;
  margin-left: 5px;
`

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Link = styled.div`
  font-size: ${({ theme }) => `${theme.fontSizes.h4}px`};
  font-weight: 600;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
