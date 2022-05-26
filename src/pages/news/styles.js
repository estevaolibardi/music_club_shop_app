import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerUl = styled.ul`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    display: flex;
    width: 310px;
    gap: 5px;
    border: 2px solid #dcdcdc;
    border-radius: 2px;
    img {
      width: 100px;
      height: 100%;
    }
  }
`;
