import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
  font-family: "Concert One", cursive;

  img {
    width: 82px;
    height: 56px;
    position: absolute;
    top: -10px;
    left: 260px;
  }

  a {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #12465a;
    transition: 0.5s;

    &:hover {
      filter: drop-shadow(10px 10px 4px var(--primary-tittle));
    }
  }

  @media only screen and (min-width: 1024px) {
    a {
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 21px;
      color: #12465a;
    }
  }

  @media only screen and (min-width: 1440px) {
    a {
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 21px;
      text-transform: uppercase;
      color: white;
      margin-right: 10rem;
    }
  }
`;
