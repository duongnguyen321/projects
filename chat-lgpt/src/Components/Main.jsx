import { useState } from "react";
import HttpClient from "../Helpers/Api/HttpClient";
import server from "../Helpers/server/randomServer";
import Chatbox from "./Chatbox/Chatbox";
import Form from "./Form/Form";
import Header from "./Header/Header";

export default function Main() {
  const [state, setState] = useState({
    text: [],
    userChat: [],
    loading: false,
    count: 0,
  });
  const client = new HttpClient();
  const getData = async (value) => {
    const options = { prompt: value };
    const res = await client.post(server.link, options);
    if (res.response.ok) {
      setState({
        text: [...state.text, res.data.bot || res.data.choices[0].text],
        userChat: state.userChat,
        loading: false,
        count: state.count + 1,
      });
    } else {
      window.location.reload();
    }
  };
  return (
    <>
      <Header count={state.count} />
      <Chatbox {...state} />
      <Form
        getData={getData}
        setUserChat={(userChat) => setState({ ...state, userChat })}
        setLoading={(loading) => setState({ ...state, loading })}
        setCount={(count) => setState({ ...state, count })}
      />
    </>
  );
}
