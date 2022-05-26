import styled from "styled-components";

export const Container = styled.main`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #12465a;

  > div {
    width: 100%;
  }
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  figure {
    width: 100%;
    margin: auto;
    img {
      width: 100%;
    }
  }

  

  @media only screen and (min-width: 1024px) {
    .containerMobile {
      span {
        font-weight: 500;
      }

      h3 {
        font-weight: 500;
      }

      h2 {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .containerMobile {
      margin-top: 0;
      min-width: 60%;
      height: 400px;
      margin-left: 20px;
      margin-right: 20px;
      display: flex;
      justify-content: center;

      h2 {
        font-size: 4rem;
        font-family: "Josefin Sans", sans-serif;
      }

      h3 {
        margin-bottom: 1.5rem;
        font-size: 22px;
        font-weight: 500;
      }

      p {
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      figure {
        display: none;

        img {
          width: 400px;
          height: 292px;
        }
      }

      span {
        font-weight: 500;
        width: 90.4%;
        font-size: 1.2em;
      }
    }

    .containerDesktop {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-right: 5%;

      figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 320px;
        width: 100%;

        img {
          width: 72%;
          height: 85%;
          margin-bottom: 20px;
        }

        figcaption {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1px;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: #212121;
  width: 100%;
  height: 500px;
`;

export const BannerInfo = styled.div`
  div {
    display: flex;
    font-size: 0.875rem;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    div {
      span {
        text-transform: uppercase;
      }
    }

    span {
      font-weight: bold;
    }

    img {
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }

    p {
      width: 175px;
      margin: 10px;
    }
  }

  @media only screen and (min-width: 600px) {
    div{
      flex-wrap: wrap;
        div{
          width: 50%;
          
        }
    } 
  }

  @media only screen and (min-width: 1024px) {
    div{
      justify-content: space-around;
      
        div{
          width: 20%;
          
        }
    } 
  }
`;

export const Spotlight = styled.div`
  
    li{

      img{
        width: 200px;
      height: 400px;
      }
     
    }
  

`;