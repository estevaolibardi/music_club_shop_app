import styled from 'styled-components'


export const SideMenuContainer = styled.div`
    background-color: red;
    min-height: 100vh;
    height: 100%;
    padding: 0 0 0 0px;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    transition: 400ms all;
    svg{
        font-size: 26px;
        color: white;
    }
    ul{
        transition: 400ms all;
        li{
            
            transition: 400ms all;
            display: flex;
            align-items: center;
            margin: 0 0 0px;
            padding:13px 20px 13px 20px ;
            border-radius: 30px 0 0 30px;
            cursor: pointer;
            :hover{
                background-color: white;
                p,svg{
                    color: red;
                }
            }
            p{
                transition: 300ms all;
                padding: 0px 0 0 20px;
                font-size: 14px;
                color: white;
                font-weight: 500;
                width: 230px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        
    }
    .closed{
        li{
            p{
                width:0px;
                padding: 0;
                margin: 0;
                transition-delay: 300ms;
                span{
                    display: none;
                }
            }
        }
    }
    .close_btn{
        padding: 15px;
        cursor: pointer;
        svg{
            font-size: 32px;
            color: white;
        }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width:695px) {
        position: fixed;
        top: 0;
        left: ${(prop)=>prop.openSideMenu ? 0 : '-100%'};
    }

    .title-page{
        margin: 15px 0 15px;
        p{
            font-weight: 900;
        }
    }

`