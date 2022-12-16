class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("chào")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("chao")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("...")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("alo")) {
      this.actionProvider.greet();
    }
    if (lowerCaseMessage.includes("địa")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("chỉ")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("dia")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("chi")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("sinh")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("name")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("ten")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("tên")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("web")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("dương")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("duong")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("thông")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("thong")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("tin")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("info")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("in4")) {
      this.actionProvider.infoLink();
    }
    if (lowerCaseMessage.includes("liên")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("lien")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("he")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("hê")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("hệ")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("email")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("gmail")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("mail")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("facebook")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("fb")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("face")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("phone")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("số")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("sô")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("so")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("điện")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("điên")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("đien")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("diện")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("diên")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("dien")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("thoại")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("thoai")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("zalo")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("git")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("hub")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("github")) {
      this.actionProvider.contactLink();
    }
    if (lowerCaseMessage.includes("contact")) {
      this.actionProvider.contactLink();
    }


    if (lowerCaseMessage.includes("đồ")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("dồ")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("đô")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("dô")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("do")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("dô")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("dự")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("dư")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("du")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("án")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("an")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("pj")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("project")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("projects")) {
      this.actionProvider.projectsLink();
    }
    if (lowerCaseMessage.includes("")) {
      this.actionProvider.text();
    }
  }
}

export default MessageParser;
