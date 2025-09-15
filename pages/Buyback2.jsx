import React from "react";
import "../App.css";
import Header from "../components/Header";
import Page41 from "../components/Page41";
import Page42 from "../components/Page42";
import Page43 from "../components/Page43";
import Page44 from "../components/Page44";
import Pagination from "../components/Pagination";
import Zerodha from "../components/Zerodha";
import Section8 from "../components/Section8";
import Footer from "../components/Footer";

export default function Buyback2() {
  return (
    <>
      <Header />
      <Page41 />
      <Page42 />
      <Pagination />
      <Zerodha />
      <Page43 />
      <Pagination />
      <Page44 />
      <Section8 />
      <Footer />
    </>
  );
}

