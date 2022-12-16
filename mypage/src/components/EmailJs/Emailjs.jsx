import emailjs from "emailjs-com";
import React, { useEffect } from "react";
import "./EmailJS.css";
import { useAuth0 } from "@auth0/auth0-react";
const formRef = React.createRef();
function Emailjs() {
  useEffect (()=> {
    window.addEventListener('scroll', () => {
      formRef.current.className = "form_hide";
    });
  })
  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_7srq67c",
        "template_dixqgc6",
        e.target,
        "AzIQRLQqWIrQkPJ0L"
      )
      .then(
        (result) => {
          alert(
            "Duong Nguyen đã gửi cho bạn một email, hy vọng được liên hệ lại với bạn sớm nhất có thể!"
          );
          e.preventDefault(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { user, isAuthenticated } = useAuth0();

  const formEmail = () => {
    if (isAuthenticated === true) {
      return (
        isAuthenticated && (
          <form
            action=""
            onSubmit={sendEmail}
            className="form_hide"
            ref={formRef}
          >
            <div className="form_container">
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  name="to_name"
                  defaultValue={user.name}
                  required
                />
                <input
                  type="email"
                  placeholder="Email liên hệ"
                  name="to_email"
                  defaultValue={user.email}
                  required
                />
              </div>
              <input
                type="submit"
                className="submit_email"
                name="send"
                value="Gửi tới chúng tôi"
              />
            </div>
          </form>
        )
      );
    } else {
      return (
        <form
          action=""
          onSubmit={sendEmail}
          className="form_hide"
          ref={formRef}
        >
          <div className="form_container">
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
            <input
              type="submit"
              className="submit_email"
              name="send"
              value="Gửi tới chúng tôi"
            />
          </div>
        </form>
      );
    }
  };
  const handleEmailClick = () => {
    if (formRef.current.className === "form_hide") {
      formRef.current.className = "form_show";
    } else {
      formRef.current.className = "form_hide";
    }
  };
  return (
    <>
      <button className="btn btn_email">
        <i className="bi bi-envelope " onClick={handleEmailClick}></i>
      </button>
      {formEmail()}
    </>
  );
}

export default Emailjs;
