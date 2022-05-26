import styled from "styled-components";

export const DivContainer = styled.div`
  width: 372px;
  height: 525px;
  background-color: #e07600;
  border-radius: 10px;
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-flow: column;
  align-items: center;
  color: white;

  h1 {
    padding: 30px 0;
  }
`;

export const DivCreateText = styled.div`
  margin-top: 10px;
  p {
    margin: 15px;
  }
  text-align: center;
  a {
    text-decoration: none;
    color: white;

    &:hover {
    }

    @keyframes hoverLink {
      from {
        color: white;
      }
      to {
        color: red;
      }
    }

    animation: ease;
    animation-duration: 1s;
  }
`;

export const ForgetPassword = styled.p`
  display: block;
  text-align: right;
  margin: -10px 0 10px 0;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 315px;

  button {
    height: 46px;
    background-color: #edb97e;
    border: none;
    border-radius: 3px;
    margin: 10px 0;
    color: white;
    width: 100%;
  }
`;
