import styled from 'styled-components';

export const StyledShoppingCartItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 2px solid brown;

    .item-left {
        padding: 0.5rem;
    
        figure {
            height: 120px;
            border: 2px solid yellow;
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
`