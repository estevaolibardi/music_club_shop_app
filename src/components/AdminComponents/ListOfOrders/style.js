import styled from "styled-components";

export const ListOrdersContainer = styled.div`
  background-color: var(--color-admin-background-secondary);
  border-radius: 20px;
  padding: 30px 0;
  margin: 0 20px;
  max-height: 470px;
  font-family: Arial, Helvetica, sans-serif;

  .table {
    overflow-y: auto;
    overflow-x: auto;
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
  }
  .table-header {
    p {
      color: #000;
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
    width: 20%;
  }
  .price {
    width: 15%;
  }
  .status {
    width: 20%;
  }
  .typeOfPayment {
    width: 25%;
  }
  .edit {
    width: 20%;
    cursor: pointer;
    svg {
      font-size: 20px;
      color: var(--color-admin-primary);
    }
  }
`;
