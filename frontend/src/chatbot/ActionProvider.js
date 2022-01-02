class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    handleMessageParser = (userMessage) => {
      let response = {
          sender: "client",
          message: userMessage
      };
      fetch('http://localhost:5005/webhooks/rest/webhook', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(response)
      }).then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].text) {
                    const messages = this.createChatBotMessage(
                        res[i].text,
                        { withAvatar: true }
                    );
                    this.addMessageToBotState(messages);
                } else if (res[i].image) {
                    const messages = this.createChatBotMessage(
                        res[i].image,
                        { withAvatar: true }
                    );
                    this.addMessageToBotState(messages);
                }
            }
        });
    };

    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
          this.setState((state) => ({
              ...state,
              messages: [...state.messages, ...messages],
          }));
      } else {
          this.setState((state) => ({
              ...state,
              messages: [...state.messages, messages],
          }));
      }
    };
}
 
export default ActionProvider;