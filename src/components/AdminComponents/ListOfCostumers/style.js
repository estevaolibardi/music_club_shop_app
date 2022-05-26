import styled from 'styled-components'


export const ListCustomersContainer = styled.div`
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
    padding: 0 20px;
    white-space: nowrap;
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
  .status {
    width: 25%;
  }
  .typeOfPayment {
    width: 25%;
  }
  .edit {
    width: 10%;
    cursor: pointer;
    svg {
      font-size: 20px;
      color: var(--color-admin-primary);
    }
  }
`