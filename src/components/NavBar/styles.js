import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 20px;
  transition: all 0.3s linear;
  font-family: "Josefin Sans", sans-serif;
  background-color: #212121;
  color: white;
  z-index: 1;
  font-weight: 700;
  padding-top: 40px;
  font-size: 12px;
  align-items: center;
  line-height: 22px;
  letter-spacing: 0.1rem;
  display: flex;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 5px 4px 0px rgb(0 0 0 / 25%);
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    color: white;

    li {
      list-style: none;
      margin-bottom: 10px;

      > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
      }
      a {
        color: white;
      }
    }
  }
  @media screen and (min-width: 620px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1024px) {
    display: ${({ open }) => (open ? "flex" : "flex")};
    box-shadow: ${({ open }) => (open ? "none" : "none")};
    background-color: #212121;
    z-index: 1;
    width: 50%;
    top: 24%;
    font-size: 1rem;
    font-family: "Montserrat";
    left: 40%;
    display: -ms-flexbox;
    display: flex;
    box-shadow: none;

    ul {
      li {
        margin-bottom: 0;
      }
      button {
        font-size: 1rem;
        background-color: var(--color-primary);
        font-family: "Montserrat";
        font-weight: 700;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    display: ${({ open }) => (open ? "flex" : "flex")};
    box-shadow: ${({ open }) => (open ? "none" : "none")};
    background-color: var(--color-primary);
    width: 100%;
    top: 24%;
    font-size: 1.25rem;
    font-family: "Montserrat";
    font-weight: 600;
    left: 40%;
    display: -ms-flexbox;
    display: flex;
    box-shadow: none;

    ul {
      li {
        margin-bottom: 0;
      }
      button {
        font-size: 1.25rem;
        background-color: var(--color-primary);
        font-family: "Montserrat";
        font-weight: 600;
      }
    }
  }
`;

export const ContainerDownLink = styled.li`
  display: flex;
  justify-content: center;
  flex: 1;

  div {
    display: none;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  a {
    color: white;
    transition: 0.5s;
    text-decoration: none;
    margin-right: 60px;
    &:hover {
      filter: drop-shadow(10px 10px 4px var(--primary-tittle));
    }
  }

  @media screen and (min-width: 750px) {
    div {
      display: flex;
      margin-right: -50px;
    }
  }
`;

export const Div = styled.div`
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: drop-shadow(10px 10px 4px var(--primary-tittle));
  }
`;
