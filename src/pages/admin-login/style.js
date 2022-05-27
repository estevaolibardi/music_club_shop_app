import styled from 'styled-components'


export const AdminLoginPageContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-admin-background-primary);
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        font-size: 23px;
        margin: 10px 0 0 0;
    }
    form{
        background-color: var(--color-admin-background-secondary);
        width: 320px;
        padding: 20px;
        border-radius: 20px;
        position: relative;
        .icon-lock{
            position: absolute;
            text-align: center;
            width: 100%;
            top: -20px;
            left: 140px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--color-admin-primary);
            display: flex;
            justify-content: center;
            align-items: center;
            svg{
                color: white;
            }
        }
        >button{
            width: 100%;
            border: 0;
            outline: 0;
            padding: 12px;
            background-color: var(--color-admin-primary);
            color: var(--color-admin-text-white);
            border-radius: 10px;
            margin-top: 10px;
            :hover{
                background-color: var();
            }
        }
        .go-back{
            color: var(--color-admin-text-primary);
            transition: 300ms all;
            background-color: var(--color-admin-background-primary);
            :hover{
                transition: 300ms all;
                background-color: var(--color-admin-primary);
                color: var(--color-admin-text-white);
            }
        }
    }
`