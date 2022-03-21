import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

export default function prestige() {
  return (
    <div>
      <div
        style={{
          width: "60%",
          marginLeft: "5.5rem",
        }}
      >
        <h1
          style={{
            fontFamily: "antonio",
            fontSize: "56px",
            textTransform: "uppercase",
            lineHeight: "1em",
          }}
        >
          Spain’s Most Prestigious Regions For Red And White Wines
        </h1>
        <p
          style={{
            fontFamily: "Libre Franklin",
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "1.15",
          }}
        >
          Take a tour of Spain’s greatest wine regions, courtesy of a James
          Beard Award-winning writer.
        </p>
        <p className="snipcss-PZVJi snip-p">
          <strong
            style={{
              lineHeight: "1.65em",
              fontFamily: "Libre Franklin",
              fontWeight: "600",
              color: "rgb(0,102,104)",
            }}
          >
            <em>
              <a
                href="https://woorise.com/riberarueda/winatrip"
                target="_blank"
                rel="noopener"
                className="snip-a"
              >
                Enter to Win a Trip to Spain’s Most Prestigious Wine Regions
              </a>
              . Presented by
              <a
                href="https://www.riberaruedawine.com/"
                target="_blank"
                rel="noopener"
                className="snip-a"
              >
                Ribera y Rueda
              </a>
              and
              <a
                href="http://www.drinkrealspain.com"
                target="_blank"
                rel="noopener"
                className="snip-a"
              >
                DrinkRealSpain.com
              </a>
              &nbsp;
            </em>
          </strong>
          <div>
            <em className="snipcss-p3POf">
              Enter to win a trip for two to&nbsp;
              <a
                href="https://www.riberaruedawine.com/"
                rel="noreferrer noopener"
                target="_blank"
                className="snip-a"
              >
                Ribera y Rueda
              </a>
              &nbsp;in 2023&nbsp;(
              <a
                href="https://woorise.com/riberarueda/winatrip"
                target="_blank"
                rel="noreferrer noopener"
                className="snip-a"
              >
                Click here
              </a>
              ).&nbsp;Here’s&nbsp;your opportunity&nbsp;to experience the best
              bodegas (wineries), tour with winemakers and taste their best
              bottles&nbsp;while taking in historical sites.&nbsp;Stay in
              luxurious&nbsp;accommodations, partake in late lunches, tapas
              crawls and fancy dinners.&nbsp;The grand prize is a round trip for
              two from an airport in the U.S. to Madrid,&nbsp;ground
              transportation, five nights lodging, tours and meals while in
              Spain. Five runner-up prizes will
              be&nbsp;awarded&nbsp;gifts&nbsp;from&nbsp;
              <a
                href="http://www.drinkrealspain.com/"
                rel="noreferrer noopener"
                target="_blank"
                className="snip-a"
              >
                DrinkRealSpain.com
              </a>
              .
            </em>
          </div>
        </p>
        <div style={{
            width:"200px"
        }}>
          <video
          style={{
              width:"800px"
          }}
            controls
            src="https://www.maxim.com/wp-content/uploads/2022/02/Spanish-Wine-Hero-Video.mp4"
            className="snipcss-YExfY"
          ></video>
        </div>
      </div>
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
    </div>
  );
}
