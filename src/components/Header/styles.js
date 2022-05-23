import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: var(--color-primary);
  height: 162px;
  border-radius: ${({ open }) => open && "0 0 15px 15px"};

  .cont2 {
    background-color: var(--color-primary-4);
  }

  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    background-color: var(--color-primary);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    justify-content: center;

    .cont2 {
      background-color: var(--color-primary);
    }

    section {
      width: 100%;
      position: relative;
      align-items: center;
      justify-content: space-around;
      padding: 0px;
      display: flex;

      div {
        align-items: center;
        display: flex;
        align-items: flex-start;
        position: relative;
        justify-content: center;
      }
    }
  }
`;

export const Input = styled.input`
  height: 35px;
  width: 650px;
  border-radius: 10px;
`;
