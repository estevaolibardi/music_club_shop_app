import styled from 'styled-components'

export const InfoBlockContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    flex-wrap: wrap;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    >div{
        transition: 400ms all;
        cursor: pointer;
        min-width: 260px;
        border-radius: 15px;
        margin: 10px 0px;
        flex-basis: 23%;
        padding: 25px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width:696px) {
            margin: 10px 20px;
            flex-basis: 100%;
            width: 100%;
        }
        p{
            font-size: 45px;
        }
        span{
            font-size: 15px;
            color:#666;
            font-weight: 400;
        }
        figure{
            svg{
                font-size: 50px;
                color: red;
            }
        }
        :hover{
            background-color: red;
            transition: 400ms all;
            p,span{
                color: white;
                transition: 400ms all;
            }
            figure{
                svg{
                    transition: 400ms all;
                    color: white;
                }
            }
        }
    }
`