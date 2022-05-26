import styled from "styled-components";

export const DivMain = styled.div`
  width: 372px;
  height: 895px;
  background-color: #e07600;
  border-radius: 10px;
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-flow: column;
  align-items: center;
  color: white;

  h1 {
    margin: 20px 0;
  }
`;

export const FormContainer = styled.div`
  width: 314px;

  button {
    height: 46px;
    background-color: #edb97e;
    border: none;
    border-radius: 3px;
    margin: 10px 0;
    color: white;
    width: 100%;
  }

  > p {
    margin: 15px 0;
  }
`;
