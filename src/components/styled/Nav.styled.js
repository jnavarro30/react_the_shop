import styled from 'styled-components';

export const StyledNav = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme}) => theme.colors.navText};
  }
`
export const StyledNavBar = styled.div`
  background: ${({ theme }) => theme.colors.navBg};
  color: ${({ theme}) => theme.colors.navText};
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  padding: 0.4rem;

  i {
      font-size: ${({ theme }) => theme.icons.iconFontSize};
      cursor: pointer;
  }
`
export const StyledSubNavBar = styled.div`
  background: ${({ theme}) => theme.colors.subNav};
  color: ${({ theme}) => theme.colors.navText};
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  position: absolute;
  width: 100%;

  .item {
      padding: 0.5rem;
  }
`