import React, { Component } from 'react';
import Chatbot from "react-chatbot-kit";
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './Chat.css';
import config from '../../chatbot/config';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWindow: false
        };
    }

    switchChat = () => {
        this.setState({showWindow: !this.state.showWindow});
    }

    render() {
        if (!this.state.showWindow) {
            return (
                <div id="chat" onClick={this.switchChat}>
                    <FontAwesomeIcon size="2x" icon={faCommentAlt}></FontAwesomeIcon>
                </div>
            );
        } else {
            return (
                <div id="chatbot">
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                </div>
            );
        }
    }
}


export default Chat;