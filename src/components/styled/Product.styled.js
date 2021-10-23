import styled from 'styled-components';

export const StyledProduct = styled.div`
    width: 70%;
    margin: 0 auto;
    text-align: center;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    margin-top: 3rem;

    .container {
        display: grid;
        justify-items: center;
        justify-content: center;
        width: min-content;
    }

    .product-top {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        align-items: center;

        div {
            font-weight: bolder;
            color: ${({ theme }) => theme.colors.productText};
        }

        div:nth-child(1) {
            font-size: 1.8rem;
            justify-self: start;
        }

        div:nth-child(2) {
            font-size: 1.4rem;
            justify-self: end;
        }
    }

    figure {
        width: 200px;
        height: 260px;
        border: 2px solid black;
        border-radius: 5px;
        margin-top: 0.5rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    p {
      font-weight: bold;
      text-align: left;
    }

    .product-quantity {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        font-weight: bold;

        i {
            color: black;
            text-shadow: 0 0 10px black;
        }

        span {
            padding: 1rem;
        }
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