import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #212121;
  border-radius: ${({ open }) => open && "0 0 15px 15px"};
  position: relative;
  height: 11rem;

  .cont2 {
    background-color: var(--color-primary-4);
  }

  section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;

    div {
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding-bottom: 2px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 740px) {
    

    
  }





  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 170px;
    justify-content: center;
    .cont2 {
      background-color: var(--color-primary);
    }

    section {
      display: flex;
      width: 90%;
      height: 60px;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      div{
        justify-content: flex-start;

        button{
          margin: 5px;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    

    section {
     

      div{
       

        div{
          padding-bottom: 0px;
        }
      }
    }
  }
`;

export const Input = styled.input`
  height: 28px;
  margin-right: 5px;
  border-style: none;
  border-radius: 20px;
  text-decoration: none;
  width: 80%;
  position: relative;
  text-indent: 20px;
`;

export const Butn = styled.button`
  position: absolute;
  right: 39%;
  border: none;
  background-color: transparent;
  color: #e67600;

  svg {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 740px) {
    top: 45%;
    left: 67%;
  }

  @media screen and (min-width: 1024px) {
    top: 37%;
    left: 80%;
  }

  @media screen and (min-width: 1440px) {
    top: 37%;
    left: 66%;
  }

  @media screen and (min-width: 1800px) {
    top: 37%;
    left: 67.5%;
  }
`;

export const BtnCart = styled.button`
  background-color: transparent;
  color: white;
  border: none;
`;

export const RightPart = styled.div`
  width: 80%;

  @media screen and (min-width: 740px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 45%;
    margin-right: 200px;
    margin-left: 90px;
  }
`;
