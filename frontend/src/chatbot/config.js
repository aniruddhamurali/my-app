import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const headerStyle = {
  padding: "12.5px",
  borderRadius: "3px",
  color: "#514F4F",
  fontSize: "13.6px",
  fontFamily: "Arial",
  fontWeight: "bold",
  backgroundColor: "#EFEFEF"
};

const buttonStyle = {
  float: "right",
  marginTop: "-3px"
};

const config = (close) => {
  return ({
    initialMessages: [createChatBotMessage(`Hello world`)],
    botName: 'Ani',
    customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />,
      header: () => 
        <div style={headerStyle}>
          Conversation with Ani 
          <button style={buttonStyle} onClick={close}>Close</button>
        </div>
    },
    customStyles: {
      botMessageBox: {
        backgroundColor: '#30B2FF',
      },
      chatButton: {
        backgroundColor: '#30B2FF',
      },
    },
  })
}

export default config;