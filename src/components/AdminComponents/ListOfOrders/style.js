import styled from 'styled-components'

export const ListOrdersContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    margin: 0 20px ;
    max-height: 470px;
    font-family: Arial, Helvetica, sans-serif;
    
    .table{
        overflow-y: auto;
        overflow-x: auto;
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
    .status{
        width: 25%;

    }
    .typeOfPayment{
        width: 25%;

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