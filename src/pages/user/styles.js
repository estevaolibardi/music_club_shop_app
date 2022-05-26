import styled from "styled-components";
import img from "../../assets/background-image-login.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 80vh;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 300px;
  background-color: #e97c03;
  padding: 20px;
  border-radius: 3px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 104px;
  }
  h3 {
    font-size: 1.2rem;
  }
`;
