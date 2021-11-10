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
            font-weight: lighter;
        }

        #mssg {
            justify-self: center;
        }

        textarea {
            justify-self: center;
            border: 2px solid ${({ theme }) => theme.colors.productBorder};
            border-radius: 5px;
            min-height: 150px;
            width: 100%;
        }

    }
    
    .contact_icons {
        display: grid;
        grid-auto-flow: column;
        padding: 1rem;

        i {
            font-size: 1.6rem;
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

    // medium 
    @media (min-width: ${({ theme }) => theme.responsive.medium}) {
        h1 {
            font-size: ${({ theme }) => theme.medium.headerFontSize};
        }

        label {
            font-size: 1.8rem;

            span {
                font-size: 1.8rem;
            }
        }

        .contact_icons {
            i {
                font-size: 2.4rem;
            }
        }

        button {
            font-size: ${({ theme }) => theme.medium.buttonFontSize};
        }
    }

    // large
    @media (min-width: ${({ theme }) => theme.responsive.large}) {
        h1 {
            font-size: ${({ theme }) => theme.large.headerFontSize};
        }

        label {
            font-size: 2.4rem;

            span {
                font-size: 2.4rem;
            }
        }

        .contact_icons {
            margin: 1rem;

            i {
                font-size: 3rem;
            }
        }

        button {
            font-size: ${({ theme }) => theme.large.buttonFontSize};
            margin: 1rem;
        }
    }
`