import styled from 'styled-components';

export const StyledProduct = styled.div`
    display: grid;
    justify-items: center;
    border: 5px solid red;
    width: 70%;
    margin: 0 auto;
    
    img {
        width: 100%;
        height: 280px;
        border: 4px solid green;
        border-radius: 5px;
        margin: 0.5rem;
        margin-top: 2rem;
    }

    .product-btns {
        border: 2px solid yellow;
        display: grid;
        justify-items: center;
        grid-template-areas:
        'dash plus'
        'add add';

        .bi {
            color: red;
        }

        button {
            box-shadow: 0 0 10px rgb(156, 95, 235);
        }

        .plus {
            grid-area: plus;
        }

        .dash {
            grid-area: dash;
        }

        .add {
            grid-area: add;
        }
    }
`

export const StyledInfo = styled.div`
    margin: 0.5rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    border: 2px solid blue;
    width: 100%;
    color: green;
    text-shadow: 0 0 10px green;
    font-weight: bolder;

    .info-top {
        border: 2px solid yellow;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    .info-bottom {
        border: 2px solid yellow;
        /* color: rgb(156, 95, 235); */
        text-shadow: 0 0 10px green;
        width: 100%;
        text-align: center;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`