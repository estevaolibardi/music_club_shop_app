import { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerChat,
  SearchDiv,
  SearchInput,
  Button,
  MessageBox,
  UserBox,
  DataBox,
} from "./styles";
import socket from "../../services/chatApi";

const ChatPage = () => {
  const userData = JSON.parse(localStorage.getItem("user-data"));

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const idDestiny = "music_club_chat";

  useEffect(() => {
    socket.emit("join", idDestiny);

    socket.on("receivedMessage", (data) => {
      setChat([
        ...chat,
        { idRoom: data.idRoom, user: data.name, message: data.message },
      ]);
    });
  }, [chat]);

  const sendMessage = (data) => {
    socket.emit("sendMessage", {
      idRoom: data.idRoom,
      name: data.name,
      message: data.message,
    });

    setChat([
      ...chat,
      {
        idRoom: data.idRoom,
        user: data.name,
        message: data.message,
      },
    ]);
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Music Club Chat</h1>

        <ContainerChat>
          {chat.map((data, index) => (
            <MessageBox key={index}>
              <UserBox>
                <h2>{data.user}</h2>
              </UserBox>
              <DataBox>
                <p>{data.message}</p>
                <span>{new Date().toString()}</span>
              </DataBox>
            </MessageBox>
          ))}
        </ContainerChat>

        <SearchDiv>
          <SearchInput
            id="entry"
            type="text"
            placeholder="Envie uma mensagem"
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            id="botao"
            onClick={() =>
              sendMessage({
                idRoom: idDestiny,
                name: userData.name,
                message: message,
              })
            }
          >
            Enviar
          </Button>
        </SearchDiv>
      </Container>
    </>
  );
};

export default ChatPage;
