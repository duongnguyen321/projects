import React, { useState } from "react";
import HttpClient from "../Helpers/Api/HttpClient";
import server from "../Helpers/server/randomServer";
import Chatbox from "./Chatbox/Chatbox";
import Form from "./Form/Form";
import Header from "./Header/Header";

export default function Main() {
  const [text, setText] = useState([]);
  const [userChat, setUserChat] = useState([]);
  const [loading, setLoading] = useState(false);
  let [count, setCount] = useState(0);
  const client = new HttpClient();
  const getData = async (value) => {
    const options = {
      model: "?model=text-davinci-003 ['text-curie-001','text-babbage-001']",
      prompt: `${value}`,
      temperature: 0,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
    const res = await client.post(
      server.link,
      { ...options },
      {},
      server.token
    );
    if (res.response.ok) {
      if (res.data.bot) {
        setText(text.concat(res.data?.bot));
      } else if (res.data.choices) {
        setText(text.concat(res.data?.choices[0].text));
      }
      setLoading(false);
      setCount(count+1);
    } else {
      window.location.reload()
    }
  };
  return (
    <>
      <Header count={count} />
      <Chatbox text={text} userChat={userChat} loading={loading} />
        <Form
          getData={getData}
          setUserChat={setUserChat}
          userChat={userChat}
          setLoading={setLoading}
          loading={loading}
          setCount={setCount}
          count={count}
        />
    </>
  );
}
