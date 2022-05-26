import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 80%;
  height: 20px;
  transition: all 0.3s linear;
  font-family: "Josefin Sans", sans-serif;
  background-color: #212121;
  color: white;
  font-weight: 700;
  margin: auto;
  margin-top: 15px;
  font-size: 0.75rem;
  align-items: center;
  line-height: 22px;
  



  ul {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    color: white;

    li {
      list-style: none;
      

      > div {
        
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      a {
        color: white;
        margin-right: 16px;
      }
    }
  }
  @media screen and (min-width: 750px) {
    font-size: 16px;
    
  }
  @media screen and (min-width: 1024px) {
    padding-top: 40px;
    justify-content: center;
    display: flex;
    background-color: #212121;
    width: 50%;
    font-size: 1rem;
    font-family: "Montserrat";
    display: flex;
    box-shadow: none;
    margin: 0;
    margin-left: 12rem;

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
    display: flex;
    background-color: var(--color-primary);
    width: 40%;
    font-size: 1.25rem;
    font-family: "Montserrat";
    font-weight: 600;
    margin-left: 6rem;
    display: flex;

   
    
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
`;

export const ContainerDownLink = styled.li`
  
  justify-content: center;
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    svg {
      margin-right: 10px;
    }

    @media screen and (min-width: 700px) {
    div {
        display: flex; 
    }
  }
  }

  a {
    color: white;
    margin-right: 18px;
    text-decoration: none;
    /* margin-right: 25px; */
    &:hover {
      filter: drop-shadow(10px 10px 4px var(--primary-tittle));
    }

    @media screen and (min-width: 740px) {
      margin-right: 30px;
    }

    @media screen and (min-width: 1024px) {
      margin-right: 20px;
    }
  }

  

  @media screen and (min-width: 1440px) {
    div {
      display: flex;
       
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
