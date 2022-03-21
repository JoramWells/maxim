import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Navbar3 from "./components/Navbar3";
import Footer from "./components/Footer";

export default function travel() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Navbar3 />

      <h1
        style={{
          fontFamily: "antonio",
          fontSize: "56px",
          lineHeight: "1.15em",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Travel
      </h1>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "block",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "60%",
            }}
          >
            <Card />
          </div>
          <div
            style={{
              width: "27%",
            }}
          >
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
