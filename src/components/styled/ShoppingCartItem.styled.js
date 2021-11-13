import styled from 'styled-components';

export const StyledShoppingCartItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px dashed ${({ theme }) => theme.colors.productBorder};

    .item-left {
        padding: 0.5rem;
    
        figure {
            height: 120px;
            border: 2px solid yellow;
            border-radius: 10px;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .item-right {
        padding: 1rem;

        div, span {
            font-weight: bolder;
        }

        i {
            font-size: 1.2rem;
            text-shadow: 0px 0px 10px green;
        }
    }

    span {
        margin: 0.4rem;
    }

    button {
        padding: 0;
        width: 80%;
    }

    // medium
    @media (min-width: ${({ theme }) => theme.responsive.medium}) {
        font-size: 1.5rem;

        figure {
            width: 280px;
            min-height: 100%;
            border: 2px solid yellow;
            border-radius: 10px;
        }

        button {
        width: 50%;
        }
    }

    // large
    @media (min-width: ${({ theme }) => theme.responsive.large}) {
        font-size: 2.2rem;

        figure {
            width: 320px;
        }

        .item-right {
            i {
                font-size: 2rem;
                margin: 1rem;
            }
        }
    }
`