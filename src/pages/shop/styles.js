import styled from "styled-components";

export const ContainerFull = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1027px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  li {
    width: 200px;
    height: 350px;
    border: 2px solid #dcdcdc;
    background-color: #fff;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    transition: calc(0.5s);
    :hover {
      transform: scale(1.2);
      transition: calc(1s);
      div {
        p {
          overflow: auto;
          text-overflow: initial;
          white-space: normal;
        }
      }
    }
    img {
      object-position: center;
      object-fit: contain;
      width: 100%;
      height: 190px;
    }
    p {
      height: 50px;
    }
    h4 {
      color: #ffb000;
      font-size: 1.2rem;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ContainerDescription = styled.div`
  p {
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 2px;
`;

export const Button = styled.button`
  margin: 5px;
  width: 100px;
  height: 40px;
  font-size: 14px;
  background-color: #ffb000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
`;
