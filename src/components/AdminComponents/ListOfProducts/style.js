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
  }
  .exclude{
      width: 10%;
      svg {
        cursor: pointer;
      font-size: 17px;
      color: var(--color-admin-primary);
    }
  }
  .details {
    width: 20%;
    svg {
        cursor: pointer;
      font-size: 20px;
      color: var(--color-admin-primary);
    }
  }
  .edit {
    width: 10%;
    cursor: pointer;
    svg {
      font-size: 20px;
      color: var(--color-admin-primary);
    }
  }
`;
