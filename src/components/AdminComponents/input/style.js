import styled from 'styled-components'

export const InputContainer = styled.div`
    button,input{
        border: 0;
        outline: 0;
        background-color: transparent;
    }
    border:1px solid var(--color-admin-text-secondary);
    display: flex;
    align-items: stretch;
    border-radius: 20px;
    padding: 0 0 0 10px;
    input{
        padding: 7px;
        min-width: 450px;
        @media (max-width: 695px) {
            min-width: 50px;
            width: 100%;
            padding: 7px 0 7px 7px;
        
        }
    }
    button{
        svg{
            color: var(--color-admin-text-secondary);
            font-size: 18px;
        }
    }


`