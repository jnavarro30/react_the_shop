import styled from 'styled-components';

export const StyledNav = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
  }
`

export const StyledNavBar = styled.div`
  background: rgb(5, 112, 14, 0.5);
  color: white;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;

  i {
      font-size: 1.6rem;
      cursor: pointer;
  }
`
export const StyledSubNavBar = styled.div`
  background: rgb(5, 112, 14, 0.8);
  color: white;
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