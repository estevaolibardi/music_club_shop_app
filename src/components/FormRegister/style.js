import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  /* width: 50%; */

  @media (max-width: 320px) {
    justify-content: flex-start;
  }

  @media (max-width: 375px) {
    justify-content: flex-start;
  }

  background-color: var(--bg-color-register-2);
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    background-color: var(--form-register);
    border-radius: 20px;
    padding-top: 30px;
    padding-bottom: 10px;
    box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 25%);

    @media (min-width: 375px) {
      width: 320px;
      margin-bottom: 20px;
    }

    @media (min-width: 425px) {
      width: 360px;
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      width: 420px;
    }

    @media (min-width: 1024px) {
      width: 350px;
    }

    @media (min-width: 1440px) {
      width: 400px;
    }

    > section {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > button {
        width: 265px;
        height: 38px;
        border-radius: 4px;
        background: var(--color-primary-2);
        color: white;
        margin-bottom: 20px;
        transition: background 0.5s;
      }
      > button:hover {
        background: var(--color-primary-3);
      }
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  > h1 {
    color: var(--primary-tittle);
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  > h4 {
    color: var(--primary-tittle);
    font-size: 22px;
    font-weight: 500;

    @media (min-width: 320px) {
      font-size: 1.2rem;
    }
    @media (min-width: 375px) {
      font-size: 1.35rem;
    }

    @media (min-width: 425px) {
      font-size: 1.55rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }

    > a {
      color: #1091ee;
    }
    > a:hover {
      text-decoration: underline;
    }
  }
`;
