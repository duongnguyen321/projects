import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";
const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, Tôi là botchat. Tôi có thể giúp gì cho bạn?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "infoLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Tên : Nguyễn Minh Nhật Dương",
            url: "/",
            id: 1,
          },
          {
            text: "Sinh ngày : 22/11/2004",
            url: "/",
            id: 2,
          },
          {
            text: "Địa chỉ : 197 Trần Phú-Hà Đông-Hà Nội",
            url: "https://goo.gl/maps/BMrFjPBxkqMMVjR57",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "contactLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Email: duongcoilc2004@gmail.com",
            url: "mailto:duongcoilc2004@gmail.com",
            id: 1,
          },
          {
            text: "Facebook: Nguyễn Dương",
            url: "https://facebook.com/duongnguyen321",
            id: 2,
          },
          {
            text: "Số điện thoại : 0986921104",
            url: "tel:0986921104",
            id: 3,
          },
          {
            text: "Zalo : Nguyễn Dương",
            url: "https://bit.ly/zalonguyenduong",
            id: 4,
          },
          {
            text: "Github : duongnguyen321",
            url: "https://github.com/duongnguyen321",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "projectsLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Stravel-Html",
            url: "https://stravelhtml.vercel.app/",
            id: 1,
          },
          {
            text: "Stravel",
            url: "https://stravel.vercel.app/",
            id: 2,
          },
          {
            text: "Các projects khác",
            url: "https://github.com/duongnguyen321/projects",
            id: 3,
          },
        ],
      },
    },
    
  ],
};
export default config;
