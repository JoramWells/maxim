import React from "react";

import styled from "styled-components";

const data = [
  {
    id: 0,
    bg: "url(https://www.maxim.com/wp-content/uploads/2022/03/Riesling-Promo-788x443.jpg)",
    text: "Food & Drink",
    href: "https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/",
    pg: "7 Great Riesling Wines To Try Now",
  },
  {
    id: 1,
    bg: "url(https://www.maxim.com/wp-content/uploads/2022/03/Unbearable-Weight-of-Massive-Talent-Promo-788x443.jpg)",
    text: "Entertainment",
    href: "https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/",
    pg: "Nicolas Cage’s ‘Unbearable Weight’s Gets Rare Perfect Rotten Tomatoes Score",
  },

  {
    id: 2,
    bg: "url(https://www.maxim.com/wp-content/uploads/2022/03/MaximBet-March-Madness-Promo-788x443.jpg)",
    text: "Sports",
    href: "https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/",
    pg: "MAXIMBET 101: HOW TO BET ON MARCH MADNESS",
  },
  {
    id: 3,
    bg: "url(https://www.maxim.com/wp-content/uploads/2022/03/MaximBet-March-Madness-Promo-788x443.jpg)",
    text: "Food & Drink",
    href: "https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/",
    pg: "MAXIMBET 101: HOW TO BET ON MARCH MADNESS",
  },

  {
    id: 4,
    bg: "url(https://www.maxim.com/wp-content/uploads/2022/03/Bell-and-Ross-Feature-788x443.jpg)",
    text: "Gear",
    href: "https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/",
    pg: "Bell & Ross Channels Vintage Style With Latest Dive Watch",
  },
  {
    id: 5,
    bg: "url(https://www.maxim.com/wp-content/uploads/2022/03/Aston-Martin-V12-Vantage-Promo-788x443.jpg)",
    text: "Rides",
    href: "https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/",
    pg: "Aston Martin’s Final V12 Vantage Is Most Powerful Version Yet",
  },
];

export default function Items() {
  return (
    <div
      style={{
        width: "89%",
        display: "block",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          width: "100%",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              height: "450px",
              backgroundColor: "red",
              backgroundImage: item.bg,

              width: "380px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
              position: "relative",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <Container
              className="tpd-card-title snipcss-LEE8c"
              style={{
                // padding: "8px",
                height: "100px",
              }}
            >
              <h2
                className="snip-h2"
                style={{
                  fontSize: "26px",
                  margin: "20px 0 10px",
                  letterSpacing: "0.03em",
                  lineHeight: "1.2em",
                  textTransform: "uppercase",
                  fontFamily: "antonio",
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "35%",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    // fontSize:"10px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    // right: "50%",
                    // margin: "auto",
                    // display: "block",
                    // widows: "100%"
                  }}
                >
                  {item.text}
                </button>
                <a
                  href={item.href}
                  className="snip-a"
                  style={{
                    // background:
                    //   "url(https://www.maxim.com/wp-content/uploads/2022/03/Riesling-Promo-788x443.jpg)",
                    // backgroundRepeat: "no-repeat",
                    // backgroundsize: "cover",
                    // backgroundPosition: "top",
                    position: "absolute",
                    bottom: "0",
                    paddingBottom: "1rem",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {item.pg}
                </a>
              </h2>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}

const Container = styled.div`
  padding: 8px;
  height: 100px;
  ::before {
    content: "";
    background-image: radial-gradient(
      300% 90% at center 40%,
      rgba(0, 0, 0, 0.1) 0px,
      rgba(0, 0, 0, 0.8) 100%
    );
    height: 100px;
    width: 100%;
  }
`;
