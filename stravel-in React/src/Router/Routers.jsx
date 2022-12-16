import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import About from "../Pages/About/About";
import Success from "../Pages/Success/Success";
import Images from "../Pages/gallery/Images";

import Egypt from "../Pages/Egypt/Egypt";
import EgyptBook from "../Pages/Egypt/EgyptBook";

import Mumbai from "../Pages/Mumbai/Mumbai";
import MumbaiBook from "../Pages/Mumbai/MumbaiBook";

import Hawaii from "../Pages/Hawaii/Hawaii";
import HawaiiBook from "../Pages/Hawaii/HawaiiBook";

import Sydney from "../Pages/Sydney/Sydney";
import SydneyBook from "../Pages/Sydney/SydneyBook";

import Paris from "../Pages/Paris/Paris";
import ParisBook from "../Pages/Paris/ParisBook";

import Tokyo from "../Pages/Tokyo/Tokyo";
import TokyoBook from "../Pages/Tokyo/TokyoBook";

import Russia from "../Pages/Russia/Russia";
import RussiaBook from "../Pages/Russia/RussiaBook";

import China from "../Pages/China/China";
import ChinaBook from "../Pages/China/ChinaBook";
import England from "../Pages/England/England";
import EnglandBook from "../Pages/England/EnglandBook";
import Laocai from "../Pages/Laocai/Laocai";
import LaocaiBook from "../Pages/Laocai/LaocaiBook";
import CommingSoon from "../components/comming/Comming";

export default function Routers() {

  return (
    <Routes>
      <Route index path="/" element={<HomePage  />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/success" element={<Success />} />
      <Route path="/images" element={<Images />} />
      <Route path="/commingsoon" element={<CommingSoon />} />
      {/*  */}
      <Route path="/egypt" element={<Egypt  />} />
      <Route path="/egypt/book" element={<EgyptBook  />} />
      {/*  */}
      <Route path="/mumbai" element={<Mumbai  />} />
      <Route path="/mumbai/book" element={<MumbaiBook  />} />
      {/*  */}
      <Route path="/hawaii" element={<Hawaii  />} />
      <Route path="/hawaii/book" element={<HawaiiBook  />} />
      {/*  */}
      <Route path="/sydney" element={<Sydney  />} />
      <Route path="/sydney/book" element={<SydneyBook  />} />
      {/*  */}
      <Route path="/paris" element={<Paris  />} />
      <Route path="/paris/book" element={<ParisBook  />} />
      {/*  */}
      <Route path="/tokyo" element={<Tokyo  />} />
      <Route path="/tokyo/book" element={<TokyoBook  />} />
      {/*  */}
      <Route path="/russia" element={<Russia  />} />
      <Route path="/russia/book" element={<RussiaBook  />} />
      {/*  */}
      <Route path="/china" element={<China  />} />
      <Route path="/china/book" element={<ChinaBook  />} />
      {/*  */}
      <Route path="/england" element={<England  />} />
      <Route path="/england/book" element={<EnglandBook  />} />
      {/*  */}
      <Route path="/laocai" element={<Laocai  />} />
      <Route path="/laocai/book" element={<LaocaiBook  />} />
      {/*  */}
      
    </Routes>
  );
}
