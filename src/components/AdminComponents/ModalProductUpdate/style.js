import styled from 'styled-components'


export const ModalUpdateContainer = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal{
        padding: 20px;
        max-width: 450px;
        width: 93%;
        position: relative;
        .close{
            position: absolute;
            top: 4px;
            right: 4px;
            cursor: pointer;
            svg{
                font-size: 28px;
            }
        }

        input{
            width:100%;
        }
        background-color: white;
        button{
            border: 0;
            outline: 0;
            width: 100%;
            padding: 14px ;
            color: white;
            background-color: var(--color-admin-primary);
        }
    }

`