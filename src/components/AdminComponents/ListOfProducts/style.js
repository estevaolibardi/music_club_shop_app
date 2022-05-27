import styled from "styled-components";

export const ListProductsContainer = styled.div`
  background-color: var(--color-admin-background-secondary);
  border-radius: 20px;
  padding: 30px 0;
  margin: 0 20px;
  max-height: 470px;
  font-family: Arial, Helvetica, sans-serif;

  .table {
    overflow-y: auto;
    max-height: 300px;
    
  }
  h2{
    padding: 0 20px;
  }
  p {
    display: inline-block;
    color: var(--color-admin-text-secondary);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0 20px;
  }
  .line {
    padding: 14px 0;
    border-bottom: 2px solid var(--color-admin-background-primary);
  }
  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px 0 0;
    button {
      border: 0;
      outline: 0;
      background-color: var(--color-admin-primary);
      padding: 10px;
      color: var(--color-admin-text-white);
      font-size: 12px;
      font-weight: 900;
      border-radius: 20px;
    }
  }
  .table-header {
    p {
      color: var(--color-admin-text-primary);
    }
  }


  .table-line{
    :hover{
      background-color: var(--color-admin-primary);
      transition: 400ms all;
      p,svg{
        color:var(--color-admin-text-white)
      }
    }
  }


  .name {
    width: 30%;
  }
  .price {
    width: 10%;
  }
  .qtd_in_stock {
    width: 20%;
    text-align: center;
  }
  .exclude{
    text-align: center;
      width: 10%;
      svg {
        cursor: pointer;
      font-size: 17px;
      color: var(--color-admin-primary);
    }
  }
  .details {
    text-align: center;
    width: 20%;
    svg {
        cursor: pointer;
      font-size: 20px;
      color: var(--color-admin-primary);
    }
  }
  .edit {
    width: 10%;
    text-align: center;
    cursor: pointer;
    svg {
      font-size: 20px;
      color: var(--color-admin-primary);
    }
  }
  .modal-confirmation{
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-confirmation-window{
      max-width: 320px;
      width: 90%;
      padding: 15px 0;
      position: relative;
      background-color: white;
      min-height: 50px;
      >h2{
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
      }
      .close{
        position: absolute;
        top: 5px;
        right: 5px;
        svg{
          font-size: 25px;
          cursor: pointer;
        }
      }
      button{
        border: 0;
        outline: 0;
        padding: 10px;
        
      }
    }
    .button-modal{
      display: flex;
      justify-content: space-around;
    }
  }
`;
