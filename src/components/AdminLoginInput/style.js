import styled from 'styled-components'

export const AdminInpuContainer = styled.fieldset`
    padding:  10px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px 0;
    border-radius: 5px;
    border:2px solid var(--color-admin-background-primary) ;
    background-color: var(--color-admin-background-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    position: relative;
    .error{
        bottom: -10px;
        left: 0px;
        position: absolute;
        font-size: 7px;
        color: red;
    }
    legend{
        padding: 0 0 0 0px;
        display: none;
        line-height: 2px;
        transition: 300ms all;
        font-size: 11px;
        animation: fadeUp 400ms;
    }
    :focus-within{
        border: 2px solid var(--color-admin-primary) ;
        transition: 300ms all;
        legend{
        transition: 300ms all;
            display: inherit;

        }
    }
    input{
        background-color: transparent;
        border: 0;
        outline: 0;
    }
    div{
        >svg{
            cursor: pointer;
            font-size: 24px;
        }
    }
    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateY(10px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);

        }
    }
`