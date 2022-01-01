import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: 'Ani',
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#30B2FF',
    },
    chatButton: {
      backgroundColor: '#30B2FF',
    },
  },
}

export default config;