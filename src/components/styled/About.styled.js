import styled from 'styled-components';

export const StyledAbout = styled.div`
    width: 70%;
    height: 80vh;
    margin: 0 auto;
    text-align: center;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    margin-top: 2rem;
    background-color: ${({ theme}) => theme.colors.productBg};
    max-width: 1024px;

    h1 {
        padding-top: 1rem;
    }

    p {
      font-weight: bold;
      text-align: justify;
      padding: 1rem;
    }

    
    // medium
    @media (min-width: ${({ theme }) => theme.responsive.medium}) {
        h1 {
            font-size: ${({ theme }) => theme.medium.headerFontSize};
        }
        p {
            padding: ${({ theme }) => theme.medium.pPadding};
            font-size: ${({ theme }) => theme.medium.pFontSize};
        }
    }

    // large
    @media (min-width: ${({ theme }) => theme.responsive.large}) {
        h1 {
            font-size: ${({ theme }) => theme.large.headerFontSize};
        }
        
        p {
            padding: ${({ theme }) => theme.large.pPadding};
            font-size: ${({ theme }) => theme.large.pFontSize};
        }
    }
`