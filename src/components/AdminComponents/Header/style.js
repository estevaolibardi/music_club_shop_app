import styled from 'styled-components'


export const AdminHeaderContainer = styled.div`
    height: 50px;
    background-color: var(--color-admin-background-secondary);
    width: 100%;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
        cursor: pointer;
        font-size: 25px;
    }
    @media (max-width:695px) {
        padding: 30px 10px;
        figure{
            margin: 0 0 0 5px;
        }
        >svg{
            margin: 0 5px 0 0px;
        }
    }
    figure{
        cursor: pointer;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
`