import styled from 'styled-components'

export const ListProductsContainer = styled.div`
background-color: white;
    border-radius: 20px;
    padding: 30px;
    margin: 0 20px ;
    max-height: 470px;
    font-family: Arial, Helvetica, sans-serif;
    
    .table{
        overflow-y: auto;
        max-height: 300px;
    }

    p{
        display: inline-block;
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .line{
        
        padding:  14px 0;
        border-bottom: 2px solid #e2e2e2;
    }
    .section-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            border: 0;
            outline: 0;
            background-color: red;
            padding: 10px;
            color: white;
            font-size: 12px;
            font-weight: 900;
            border-radius: 20px;
        }
    }
    .table-header{
        p{
            color: #000;
        }

    }
    .name{
        width: 30%;
    }
    .price{
        width: 10%;

    }
    .qtd_in_stock{
        width: 25%;

    }
    .details{
        width: 20%;
        cursor: pointer;
        svg{
            font-size: 20px;
            border-radius: 50%;
            color: red;
        }
    }
    .edit{
        width: 10%;
        cursor: pointer;
        svg{
            font-size: 20px;
            border-radius: 50%;
            color: red;
        }
    }
` 