import styled from 'styled-components'


export const ShowProductsModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;

    justify-content: center;
    .modal{
        position: relative;
        max-width: 450px;
        width: 90%;
        padding:20px 10px;
        background-color: White;
        overflow-y: auto;
        max-height: 95vh;
        h2{
            margin-top: 10px;
        }
        p{
            display: block;
            white-space: normal;
            margin: 10px 0;
        }

    }
    .close{
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 8px;
        svg{
            font-size: 30px;
        }
    }


`