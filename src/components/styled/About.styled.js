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

    h1 {
        padding-top: 1rem;
    }

    p {
      font-weight: bold;
      text-align: justify;
      padding: 1rem;
    }

    button {
            font-weight: bold;
            background: ${({ theme }) => theme.colors.productBtn};
            border: 3px solid ${({ theme }) => theme.colors.productBorder};
            padding: 1rem;
            color: black;
            border-radius: 10px;

            &:hover {
                box-shadow: 0 0 10px green;
            }
        }
`