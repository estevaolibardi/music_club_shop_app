import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  h1 {
    width: 90%;
    font-size: 25px;
    color: orange;
    font-family: "Montserrat", sans-serif;
    text-align: left;
  }
`;

export const ContainerChat = styled.div`
  width: 90%;
  height: 350px;
  max-width: 800px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #c9ecf7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const SearchDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  max-width: 800px;
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 50px;
  border: ${(props) => (props.notFound ? "1px solid red" : "transparent")};
  border-right: transparent;
  border-radius: 5px 0px 0px 5px;
  background-color: #e2e2e2;
  padding: 8px;
  font-size: 16px;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 20%;
  background-color: blue;
  color: white;
  cursor: pointer;
  border: transparent;
  border-radius: 0px 5px 5px 0px;
  font-size: 15px;
`;

export const MessageBox = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding-bottom: 10px;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  padding: 6px;
  h2 {
    font-size: 12px;
    color: blue;
    width: 100%;
  }
  max-width: 100px;
  @media (min-width: 900px) {
  }
`;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  span {
    font-size: 10px;
    text-align: start;
  }

  p {
    font-size: 14px;
    word-break: break-word;
    text-align: start;
  }
`;
