import styled from 'styled-components';
import { theme } from './Theme';

export const StyledApp = styled.div`
    background: ${({ theme}) => theme.colors.appBg};
    height: 100%;

    .filters {
        display: flex;
        justify-content: end;
        
        select {
            font-size: 1.2rem;
            margin: 0.2rem;
            border: 1px solid ${({ theme }) => theme.colors.productBorder};
            background: rgba(77, 71, 69, 0.1);
        }
    }
`


