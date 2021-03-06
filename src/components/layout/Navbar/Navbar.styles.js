import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  transform: ${(props) =>
    props.isSmall ? 'translateY(0)' : 'translateY(30px)'};
  z-index: 999;
  padding: 10px 0;
  background-color: ${({ isSmall, theme }) =>
    isSmall ? theme.colors.opacityPrimary : 'none'};
  transition-property: background-color, transform, font-size;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 20px;
    transform: none;
  }
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
  font-size: ${({ isSmall, theme }) =>
    isSmall ? `${theme.fontSizes.h3}px` : `${theme.fontSizes.h2}px`};
  font-weight: 700;
  margin-left: 5px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const Link = styled.div`
  font-size: ${({ isSmall, theme }) =>
    isSmall ? `${theme.fontSizes.p}px` : `${theme.fontSizes.h4}px`};
  font-weight: 600;
  margin-left: 30px;
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`
