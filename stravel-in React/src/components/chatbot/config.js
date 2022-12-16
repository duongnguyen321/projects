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
      widgetName: "servicesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Tất cả các chuyến đi đều được đảm bảo chất lượng dịch vụ tốt nhất.",
            url: "/",
            id: 1,
          },
          {
            text: "Bạn có thểm xem thêm phần Dịch vụ ở trang chủ.",
            url: "/",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "covidLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Các chính sách mới đã góp phần thúc đẩy du lịch. Vì vậy bạn không cần lo lắng quá về tình hình dịch bệnh<3",
            url: "/",
            id: 1,
          },
          {
            text: "nếu bạn muốn xem thềm về những quốc gia mở cửa sau dịch bệnh !",
            url: "https://vnexpress.net/topic/cac-quoc-gia-mo-cua-du-lich-giua-covid-19-25280",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "safeLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Chúng tôi luôn tuân thủ các chính sách an toàn trong nước và quốc tế để đem đến cho bạn trải nghiệm tốt nhất.",
            url: "/",
            id: 1,
          },
          {
            text: "Bạn có thể xem các chính sách an toàn tại đây",
            url: "https://gapedu.vn/an-toan-an-ninh-cho-khach-du-lich/",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "aboutLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "View my db Json",
            url: "https://apiforstravel.herokuapp.com/",
            id: 1,
          },
          {
            text: "Contact me !",
            url: "https://duongcontact.vercel.app/",
            id: 2,
          },
          {
            text: "Trang Web được làm bởi Dương...",
            url: "https://github.com/DuongNguyen321/codestravel",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "packagesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Hầu hết các gói du lịch còn hoạt động, tuy nhiên bạn không thể đến những địa điểm đang có dịch bệnh hoặc xảy ra xung đột.",
            url: "/",
            id: 1,
          },
          {
            text: "Các ưu đãi mới sẽ được cập nhật ở phần Ưu đãi trong trang chủ.",
            url: "/",
            id: 2,
          },
          {
            text: "Nếu bạn muốn liên hệ thêm với chúng tôi, hãy bấm vào phần liên hệ ở trang chủ.",
            url: "/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "egyptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Egypt",
            url: "/egypt",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Egypt",
            url: "/egypt/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Egypt",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "hawaiiLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Hawaii",
            url: "/hawaii",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Hawaii",
            url: "/hawaii/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Hawaii",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "mumbaiLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Mumbai",
            url: "/mumbai",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Mumbai",
            url: "/mumbai/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Mumbai",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "parisLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Paris",
            url: "/paris",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Paris",
            url: "/paris/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Paris",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "sydneyLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Sydney",
            url: "/sydney",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Sydney",
            url: "/sydney/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Sydney",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "tokyoLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Tokyo",
            url: "/tokyo",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Tokyo",
            url: "/tokyo/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Tokyo",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "russiaLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Nước Nga",
            url: "/russia",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Nước Nga",
            url: "/russia/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Nước Nga",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "chinaLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Trung Quốc",
            url: "/china",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Trung Quốc",
            url: "/china/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Trung Quốc",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "englandLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Nước Anh",
            url: "/england",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Nước Anh",
            url: "/england/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Nước Anh",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "laocaiLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Xem thêm về các chuyến du lịch tới Tp.Lào Cai",
            url: "/laocai",
            id: 1,
          },
          {
            text: "Đặt chuyến du lịch tới Tp.Lào Cai",
            url: "/laocai/book",
            id: 2,
          },
          {
            text: "xem thêm các bức ảnh đẹp về Tp.Lào Cai",
            url: "/images",
            id: 3,
          },
        ],
      },
    },
  ],
};
export default config;
