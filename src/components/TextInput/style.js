import styled from "styled-components";

export const DivContainer = styled.div`
  text-align: left;
  margin: 12px 0;

  input {
    width: 100%;
    height: 47px;
    background-color: #edb97e;
    border: none;
    border-radius: 4px;
    margin: 8px auto;
    border: 2px solid;
    border-color: ${({ color }) => color};
    padding-left: 10px;
  }

  span {
    color: #e00000;
  }

  p {
    color: white;
  }
`;
