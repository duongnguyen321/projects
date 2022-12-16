class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet = () => {
    const message = this.createChatBotMessage(
      "Hi chào bạn, Tôi là chatbot. Tôi có thể giải đáp cho các câu hỏi thường gặp"
    );

    this.updateChatbotState(message);
  };
  text = () => {
    const message = this.createChatBotMessage("Tôi có thể giúp gì cho bạn?", {
      widget: "learningOptions",
    });

    this.updateChatbotState(message);
  };
  keyboard = () => {
    const message = this.createChatBotMessage("Xin lỗi, Tôi không có tay, Vậy nên tôi không chơi bàn phím cơ :(", {
      widget: "learningOptions",
    });

    this.updateChatbotState(message);
  };
  handlePackages = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Ưu đãi?",
      {
        widget: "packagesLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleServices = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Dịch vụ?",
      {
        widget: "servicesLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleCovid = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Du lịch trong dịch Covid?",
      {
        widget: "covidLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleSafe = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về chính sách An toàn của Stravel ?",
      {
        widget: "safeLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleAbout = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Stravel ?",
      {
        widget: "aboutLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleEgypt = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Egypt ?",
      {
        widget: "egyptLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleHawaii = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Hawaii ?",
      {
        widget: "hawaiiLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleMumbai = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Mumbai ?",
      {
        widget: "mumbaiLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleParis = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Paris ?",
      {
        widget: "parisLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleSydney = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Sydney ?",
      {
        widget: "sydneyLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleTokyo = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Tokyo ?",
      {
        widget: "tokyoLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleRussia = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Nước Nga ?",
      {
        widget: "russiaLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleChina = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Trung Quốc ?",
      {
        widget: "chinaLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleEngland = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Nước Anh ?",
      {
        widget: "englandLinks",
      }
    );

    this.updateChatbotState(message);
  };
  handleLaocai = () => {
    const message = this.createChatBotMessage(
      "Bạn muốn tìm hiểu thêm về Tp.Lào Cai ?",
      {
        widget: "laocaiLinks",
      }
    );

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
