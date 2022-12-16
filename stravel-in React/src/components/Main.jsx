import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";
import Routers from "../Router/Routers";
dom.watch();

function Main() {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    disableMutationObserver: false,
    useClassNames: false,
    debounceDelay: 10,
    throttleDelay: 50,
    duration: 600,
    offset: 150,
    delay: 0,
    once: true,
  });
  return <Routers />;
}

export default Main;
