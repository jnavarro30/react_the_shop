import styled from 'styled-components';

export const StyledShoppingCart = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    margin-top: 3rem;
    display: grid;

    .cart-list {
        overflow-y: scroll;
        display: grid;
    }

    .product-bottom {
        width: 100%;
        font-weight: bold;
        margin: 0.5rem;
        display: grid;
        
        div {
            margin: 0.2rem;
        }

        button {
            font-weight: bold;
            margin: 0.4rem;
            padding: 0.5rem;
            background: ${({ theme }) => theme.colors.productBtn};
            border: none;

            &:hover {
                box-shadow: 0 0 10px green;
            }
        }
    }
`