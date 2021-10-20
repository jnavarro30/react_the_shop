import styled from 'styled-components';

export const StyledItem = styled.div`
    display: grid;
    justify-items: center;
    width: 80%;
    

    img {
        width: 250px;
        height: 280px;
        border: 4px solid green;
        border-radius: 5px;
        margin: 0.5rem;
        margin-top: 2rem;
    }

    div {
        list-style-type: none;
        display: grid;
        justify-content: center;
        color: green;
        text-shadow: 0 0 10px green;
        font-weight: bolder;
    }

    .description {
        color: rgb(156, 95, 235);
    }
`

export const StyledInfo = styled.div`
    margin: 0.5rem;
`