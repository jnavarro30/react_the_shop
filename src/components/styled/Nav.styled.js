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

  @media (min-width: 768px) {
    h1 {
      font-size: 2.6rem;
    }

    i {
      font-size: 3rem;
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

  // tablet
  @media (min-width: 768px) {
    .item {
      padding: 1rem;
      font-size: 1.8rem;
    }
  }
`
