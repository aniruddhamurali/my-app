import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import "./config.css";

import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const config = (close) => {
  return ({
    initialMessages: [createChatBotMessage(`Hey there! I'm Ani, Aniruddha's chatbot. What would you like to know?`)],
    botName: 'Ani',
    customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />,
      header: () => 
        <div className="chatbot-header">
          Conversation with Ani 
          <span onClick={close}>
            <FontAwesomeIcon className="chatbot-close" icon={faTimes}></FontAwesomeIcon>
          </span>
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