import styled from 'styled-components';

export const StyledNav = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

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

  // medium
  @media (min-width: ${({ theme }) => theme.responsive.medium}) {
    h1 {
      font-size: ${({ theme }) => theme.medium.navFontSize};
    }

    i {
      font-size: ${({ theme }) => theme.medium.iFontSize};
    }
  }

  // large
  @media (min-width: ${({ theme }) => theme.responsive.large}) {
    h1 {
      font-size: ${({ theme }) => theme.large.navFontSize};
    }

    i {
      font-size: ${({ theme }) => theme.large.iFontSize};
    }
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
  border-top: 2px solid white;

  .item {
      padding: 0.5rem;
      font-size: 1.4rem;
  }

  // medium
  @media (min-width: ${({ theme }) => theme.responsive.medium}) {
    .item {
      padding: ${({ theme }) => theme.medium.subNavPadding};
      font-size: ${({ theme }) => theme.medium.subNavFontSize};
    }
  }

  // large
  @media (min-width: ${({ theme }) => theme.responsive.large}) {
    .item {
      font-size: ${({ theme }) => theme.large.subNavFontSize};
    }
  }
`
