import React from "react";
import "../App.css";                   // go UP one level to src

import Header from "../components/Header";
import Section8 from "../components/Section8";
import Page31 from "../components/Page31";
import Page32 from "../components/Page32";
import Page33 from "../components/Page33";
import Page34 from "../components/Page34";
import Pagination from "../components/Pagination";
import Zerodha from "../components/Zerodha";
import Footer from "../components/Footer";

export default function Buyback1() {
  return (
    <>
      <Header />
      <Page31 />
      <Page32 />
      <Pagination />
      <Zerodha />
      <Page33 />
      <Pagination />
      <Page34 />
      <Section8 />
      <Footer />
    </>
  );
}
