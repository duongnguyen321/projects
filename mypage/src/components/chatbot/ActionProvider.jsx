class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet = () => {
    const message = this.createChatBotMessage(
      "Hi chào bạn, Tôi là chatbot. Tôi có thể giải đáp cho các câu hỏi thường gặp."
    );
    this.updateChatbotState(message);
  };
  text = () => {
    const message = this.createChatBotMessage("Tôi có thể giúp gì cho bạn?", {
      widget: "learningOptions",
    });
    this.updateChatbotState(message);
  };
  infoLink = () => {
    const message = this.createChatBotMessage("Đây là trang Personal web được tạo bởi Dương.", {
      widget: "infoLink",
    });
    this.updateChatbotState(message);
  };
  contactLink = () => {
    const message = this.createChatBotMessage("Bạn có thể liên hệ với tôi bằng :", {
      widget: "contactLink",
    });
    this.updateChatbotState(message);
  };
  projectsLink = () => {
    const message = this.createChatBotMessage("Các Projects của tôi :", {
      widget: "projectsLink",
    });
    this.updateChatbotState(message);
  };
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
