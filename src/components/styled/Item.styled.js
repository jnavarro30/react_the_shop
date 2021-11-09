import styled from 'styled-components';

export const StyledItem = styled.div`
    width: 70%;
    display: grid;
    grid-template-rows: 3fr 1fr;
    justify-items: center;
    align-items: center;
    text-align: center;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    margin-top: 3rem;
    background-color: ${({ theme }) => theme.colors.productBg};
    
    a {
        color: ${({ theme }) => theme.colors.productText};
        text-decoration: none;
    }

    figure {
        width: 200px;
        height: 260px;
        border: 2px solid black;
        border-radius: 5px;
        margin-top: 1rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    p {
        font-size: 2rem;
        font-weight: bolder;
        color: ${({ theme }) => theme.colors.productText};
    }

    @media (min-width: 766px) {
        width: 80%;
    }
`