import styled from 'styled-components';

export const StyledHome = styled.div`
    display: grid;
    justify-items: center;
    margin-bottom: 2rem;
    max-width: 1024px;

    // medium
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    // large
    @media (min-width: 992px) {
        width: 90%;
        margin: 0 auto;21   1
        margin-bottom: 2rem;
    }
`

