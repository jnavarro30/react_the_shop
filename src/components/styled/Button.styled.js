import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: rgba(255, 255, 0, 0.5);
    border: 3px solid #704C16;
    border-radius: 10px;
    padding: 1rem;
    font-weight: bold;

    &:hover {
        background-color: rgba(0,0,0,0.8);
        color: white;
    }

    @media (min-width: ${({ theme }) => theme.responsive.medium}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.responsive.large}) {
        font-size: 2.2rem;
    }
`