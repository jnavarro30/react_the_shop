import styled from 'styled-components';

export const StyledContact = styled.div`
    width: 70%;
    height: 80vh;
    margin: 0 auto;
    border: 4px solid ${({ theme }) => theme.colors.productBorder};
    border-radius: 10px;
    margin-top: 2rem;
    background-color: rgba(210, 180, 140,0.3);

    .container {
        text-align: center;
        width: 90%;
    }

    h1 {
        padding-top: 1rem;
    }

    label {
        display: grid;
        justify-items: start;
        padding: 1rem;

        input {
            justify-self: center;
            width: 100%;
            border: 2px solid ${({ theme }) => theme.colors.productBorder};
            border-radius: 5px;
        }

        span {
            font-size: 1.4rem;
            font-weight: bolder;
        }

        #mssg {
            justify-self: center;
        }

        textarea {
            justify-self: center;
            border: 2px solid ${({ theme }) => theme.colors.productBorder};
            border-radius: 5px;
        }

    }
    
    .contact_icons {
        display: grid;
        grid-auto-flow: column;
        padding: 1rem;

        i {
            font-size: 1.5rem;
        }
    }

    button {
        font-weight: bold;
        background: ${({ theme }) => theme.colors.productBtn};
        border: 3px solid ${({ theme }) => theme.colors.productBorder};
        padding: 0.5rem;
        color: black;
        border-radius: 10px;
        width: 40%;
        margin: 0.4rem;

        &:hover {
            box-shadow: 0 0 10px green;
        }
    }
`