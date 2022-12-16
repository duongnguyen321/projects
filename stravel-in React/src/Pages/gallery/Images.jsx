import { useEffect } from "react";
import Header from "../../components/gallery/Header";
import Footer from "../../components/gallery/Footer";
import Egypt from "../../components/gallery/Egypt";
import Tokyo from "../../components/gallery/Tokyo";
import Paris from "../../components/gallery/Paris";
import Sydney from "../../components/gallery/Sydney";
import Hawaii from "../../components/gallery/Hawaii";
import Mumbai from "../../components/gallery/Mumbai";
import Russia from "../../components/gallery/Russia";
import China from "../../components/gallery/China"
import England from "../../components/gallery/England";
import Laocai from "../../components/gallery/Laocai";
import Chat from "../../components/chatbot/MainChat";
import Home from "../../components/gallery/Home";
// https://apiforstravel.herokuapp.com/images/

export default function Images() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="HomePages">
      <Header />
      <div className="container" style={{ marginTop: 50 }}>
      <Home/>
      <Laocai/>
      <Egypt/>
      <Russia/>
      <Tokyo/>
      <Paris/>
      <China/>
      <Sydney/>
      <Hawaii/>
      <England/>
      <Mumbai/>
      <Chat/>
      </div>
      <Footer />
    </div>
  );
}
