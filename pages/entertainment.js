import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";

const data = [
  {
    id: 0,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Ella-Orten-1-1024x1280.jpeg",
    content:
      "Ella Orten was studying international business at the University\
  of Tampa, but ultimately unenrolled after completing numerous LA\
  trips for modeling jobs. She’s since made the West Coast move\
  and taken a keen interest in Web3, the most recent evolution of\
  the internet.",
  },
  {
    id: 2,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Ella-Orten-4-1024x1280.jpeg",
    content:
      "While Web 2.0 brought social networks and e-commerce, Web3 is\
    rooted in blockchain—a decentralized peer-to-peer network that’s\
    brought about cryptocurrency and non-fungible tokens. Orten has\
    an entire Instagram Highlight reel dedicated to Web3 activities,\
    where you can catch updates her latest crypto and NFT\
    investments.",
  },
  {
    id: 3,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Ella-Orten-3-1024x1280.jpeg",
    content:
      "But Orten’s main feed is dedicated to saucy snaps and photogenic dispatches from her various travels, be it Turks and Caicos or St. Barths. And for yet another flavor, Orten’s Facebook page is all about letting her gamer girl go with livestreams of popular titles like Among Us and Apex Legends.",
  },
  {
    id: 4,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Ella-Orten-5-1024x1280.jpeg",
    content:
      "Peep the photos above, and check out some recent highlights from her IG feed:",
  },
];

const data2 = [
  {
    id: 0,
    img: "https://images.outbrainimg.com/transform/v3/eyJpdSI6ImQ4ODA1YzdkZjQ4NDZlZmJjMmYwNTM0NzcxMDQ5YTJmNzhlNjJjMTI4OTk2MThmNmNiOTdmMjUwYzI4ODMxY2UiLCJ3Ijo1MDAsImgiOjMzMywiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp",
    headline: "'The Rock’ Picks Up $9.5 Million Georgia Farm",
    sponsors: "Mansion Global | Sponsored",
  },
  {
    id: 1,
    img: "https://images.outbrainimg.com/transform/v3/eyJpdSI6ImI5MjVlZTg3ODFiYzdjZjA4ZjY3YWQzYjQ2MzE3ZjczNWEzMWEwMGU3YmI0YWZkMmQwNmUyZGIyNzdlNzBjMWQiLCJ3Ijo1MDAsImgiOjMzMywiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp",
    headline: "Do you speak English? Work for a USA company, Live in Kapsoit",
    sponsors: "Find Jobs Online | Search Ads | Sponsored",
  },
  {
    id: 2,
    img: "https://images.outbrainimg.com/transform/v3/eyJpdSI6ImZiYzFhZDNkNmVkMGJmOTBkNjYyNzIzZTM4NjYwYzNmMDU2OTUzZjRjYWVlZjI3NjNiN2NmMGI4Y2JlOTkzNzEiLCJ3Ijo1MDAsImgiOjMzMywiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp",
    headline:
      "[Photos] 35 LGBT Celebs Who Are Couples And You Probably Didn't Know",
    sponsors: "Richouses | Sponsored",
  },
];

export default function entertainment() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Navbar3 />

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
            <h1
              style={{
                fontFamily: "antonio",
                fontSize: "56px",
                textTransform: "uppercase",
                lineHeight: "1em",
              }}
            >
              MEET MODEL, GAMER AND NFT INVESTOR ELLA ORTEN
            </h1>
            <p
              style={{
                fontFamily: "Libre Franklin",
                fontWeight: "400",
                fontSize: "22px",
                lineHeight: "1.15em",
              }}
            >
              Find out why this crypto-loving beauty’s IG feed is blowing up.
            </p>
            {data.map((item) => (
              <div key={item.id}>
                <img
                  src={item.src}
                  style={{
                    width: "800px",
                    height: "1000px",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{
                    lineHeight: "1.65em",
                    fontSize: "16px",
                  }}
                >
                  {item.content}
                </p>
              </div>
            ))}

            <div>
              <h2>You might also like</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {data2.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: "270px",
                      margin: ".5rem",
                    }}
                  >
                    <img
                      style={{
                        width: "260px",
                        height: "160px",
                        objectFit: "cover",
                      }}
                      src={item.img}
                    />
                    <div
                      style={{
                        fontWeight: "bold",
                        lineHeight: "1.5rem",
                      }}
                    >
                      <a href="#">{item.headline}</a>
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      {item.sponsors}
                    </p>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    margin: ".5rem",
                  }}
                >
                  <img
                    src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjZjYmUxOGQ0ODFmODkxMTc5ODE2MzljYmFjYzc0M2FjZWU0YjZkNzM4ZDg2ZGM3NzljY2IyMzAyY2ExN2IwODkiLCJ3Ijo1MDAsImgiOjMzMywiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp"
                    style={{
                      width: "400px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <a
                    href="#"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.65rem",
                    }}
                  >
                    As it happened: Refugees fleeing Ukraine top 2.5 million, EU
                    bans export of luxury goods to Russia
                  </a>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    France 24 | Sponsored
                  </p>
                </div>
                <div
                  style={{
                    margin: ".5rem",
                  }}
                >
                  <img
                    src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjM0YjFmZGVhZWUzMTA3ZDJiOWUwYjkzNGY0NWExMzhiYjg5YTI1YWQzYzU5N2VlNmU3MWJjYjE0MDk0YjRmY2YiLCJ3Ijo1MDAsImgiOjMzMywiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp"
                    style={{
                      width: "400px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <a
                    href="#"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.65rem",
                    }}
                  >
                    As it happened: Refugees fleeing Ukraine top 2.5 million, EU
                    bans export of luxury goods to Russia
                  </a>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    France 24 | Sponsored
                  </p>
                </div>
              </div>
            </div>
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
