import styled from "styled-components";

export const Container = styled.div`
  font-family: "Concert One", cursive;
  color: white;
  width: 90%;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    display: flex;
    color: white;
    transition: 0.5s;
    text-decoration: none;

    &:hover {
      filter: drop-shadow(10px 10px 4px var(--primary-tittle));
    }
  }

  img {
    width: 40px;
    margin-left: 10px;
  }

  div {
    width: 20px;
    color: white;
    padding-bottom: auto;

    button {
    }

    svg {
      padding-bottom: 6px;
    }

    div {
    }
  }

  @media only screen and (min-width: 1024px) {
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 21px;
      color: white;
    }
  }

  @media only screen and (min-width: 1440px) {
    width: 24%;

    a{
      text-decoration: none;
    }

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 21px;
      height: 40px;
      color: white;
    }

    img {
      width: 80px;
      margin-left: 10px;
    }
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  color: white;
  border-style: none;
  display: flex;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
