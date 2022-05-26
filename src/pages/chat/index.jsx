import { useState, useEffect } from "react";
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
import Header from "../../components/Header";
import { UseLoginProvider } from "../../provider/login";

const ChatPage = () => {
  const { user } = UseLoginProvider();
  const userData = JSON.parse(user);
  console.log(userData);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const idDestiny = "music_club_chat";

  useEffect(() => {
    socket.emit("join", idDestiny);

    socket.on("receivedMessage", (data) => {
      setChat([
        ...chat,
        {
          idRoom: data.idRoom,
          user: data.name,
          message: data.message,
          day: new Date().toString(),
        },
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
        day: new Date().toString(),
      },
    ]);
  };

  return (
    <>
      <Header />

      <Container>
        <h1>Music Club Chat - Vamos trocar uma ideia sobre música!</h1>

        <ContainerChat>
          {chat.map((data, index) => (
            <MessageBox key={index}>
              <UserBox>
                <h2>{data.user}</h2>
              </UserBox>
              <DataBox>
                <p>{data.message}</p>
                <span>{data.day}</span>
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
            title="Envie sua mensagem"
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
