import React from "react";
import "../App.css";

import Header from "../components/Header";
import Page21 from  "../components/Page21";
import Page22 from  "../components/Page22";
import Pagination from "../components/Pagination";
import Zerodha from "../components/Zerodha";
import Page23 from "../components/Page23"
import Section8 from "../components/Section8";
import Footer from "../components/Footer";

export default function IPO() {
  return (
    <>
      <Header />
      <Page21 />
      <Page22 />
      <Pagination />
      <Zerodha />
      <Page23 />
      <Section8/>
      <Footer/>
    </>
  );
}
