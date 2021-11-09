import styled from 'styled-components';

export const StyledApp = styled.div`
    background: ${({ theme}) => theme.colors.appBg};
    height: 100%;

    .filters {
        display: flex;
        justify-content: end;
        max-width: 1024px;
        margin: 0 auto;
        
        select {
            font-size: 1.3rem;
            margin: 0.2rem;
            border: 1px solid ${({ theme }) => theme.colors.productBorder};
            background: rgba(77, 71, 69, 0.1);
        }
    }

    // medium
    @media (min-width: 768px) {
        .filters {
            justify-content: center;
            padding: 1rem;

            select {
                font-size: 1.7rem;

                option {
                    font-size: 1.1rem;
                }
            }
        }
    }

    // large
    @media (min-width: 992px) {
        .filters {
            select {
            font-size: 2.2rem;

                option {
                
                }
            }
        }
    }
`


