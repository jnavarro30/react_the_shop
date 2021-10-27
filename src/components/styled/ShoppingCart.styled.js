import styled from 'styled-components';

export const StyledShoppingCart = styled.div`
    height: 50vh;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    margin-top: 3rem;

    ul {
        border: 2px solid red;
        height: 100%;
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