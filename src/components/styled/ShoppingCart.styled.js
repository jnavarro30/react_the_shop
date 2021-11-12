import styled from 'styled-components';

export const StyledShoppingCart = styled.div`
    background-color: ${({ theme }) => theme.colors.productBg};
    width: 80%;
    margin: 2.6rem auto;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    display: grid;

    .cart-list {
        overflow-y: scroll;
        display: grid;
    }

    .product-bottom {
        width: 100%;
        font-weight: bold;
        display: grid;
        
        div {
            margin: 0.2rem;
        }

        button {
            margin: 0.4rem auto;
            width: 40%;
        }
    }

    // medium
    @media (min-width: ${({ theme }) => theme.responsive.medium}) {
        .product-bottom {
            font-size: 1.6rem;
        }
    }

    // large
    @media (min-width: ${({ theme }) => theme.responsive.large}) {
        .product-bottom {
            font-size: 2.2rem;
        }
    }
`

