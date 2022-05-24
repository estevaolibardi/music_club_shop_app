import styled from "styled-components";

export const Container = styled.div`
  list-style: none;
  display: flex;

  flex-wrap: wrap;
  gap: 5px;
  li {
    width: 200px;
    height: 400px;
    border: 2px solid black;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    img {
      object-position: center;
      object-fit: contain;
      width: 100%;
      height: 190px;
    }
    p {
      height: 37px;
    }
    h4 {
      color: #ffb000;
      font-size: 1.2rem;
      width: 100%;
      height: 100px;
      text-align: center;
    }
    h4 + p {
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 70px;
    }
  }
`;
