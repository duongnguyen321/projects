import React from "react";
import emailjs from "emailjs-com";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contactHeading: [],
    };
  }

  componentDidMount() {
    fetch("https://apiforstravel.herokuapp.com/home")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            contactHeading: result.contactHeading,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_es5f8da",
        "template_gs4wdku",
        e.target,
        "KclByHfCL2ncJinR1"
      )
      .then(
        (result) => {
          alert(
            "Stravel đã ghi nhận lời liên hệ của bạn. Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể"
          );
         e.preventDefault(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <section className="contact" id="contact">
        <h1 className="heading">
          {this.state.contactHeading.map((contactHeading) => {
            return (
              <span
                key={contactHeading.id}
                className={contactHeading.className}
              >
                {contactHeading.text}
              </span>
            );
          })}
        </h1>
        <div className="row">
          <div className="image">
            <iframe
              title="Địa chỉ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1639249145111!5m2!1svi!2s"
              width="100%"
              height="350vh"
            ></iframe>
          </div>
          <form action="" onSubmit={this.sendEmail}>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Tên của bạn"
                name="to_name"
                required
              />
              <input
                type="email"
                placeholder="Email liên hệ"
                name="to_email"
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Số điện thoại"
                minLength={9}
                maxLength={11}
                name="contact_number"
              />
              <input
                type="text"
                placeholder="Vấn đề bạn cần trao đổi"
                name="subject"
                required
              />
            </div>
            <textarea
              placeholder="Viết lời nhắn của bạn"
              cols="30"
              rows="10"
              name="reply_to"
              required
            ></textarea>
            <input
              type="submit"
              className="btn"
              name="send"
              value="Gửi tới chúng tôi"
            />
          </form>
        </div>
      </section>
    );
  }
}
