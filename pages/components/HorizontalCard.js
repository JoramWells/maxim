import styled from "styled-components";

const data = [
  {
    id: 0,
    header1: "Rides",
    header2: "Video",
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Hummer-H1-X3-Promo-788x443.jpg",
    title: "Watch: World’s Biggest Hummer Absolutely DWARFS Original H1",
    href: "https://www.maxim.com/rides/watch-the-worlds-biggest-hummer-makes-original-h1-look-like-a-toy/",
  },
  {
    id: 1,
    header1: "Gear",
    header2: "Food & Drink",
    src: "https://www.maxim.com/wp-content/uploads/2022/03/709A1626-Edit-788x443.jpeg",
    title: "This Handsome Cast Iron Dutch Oven Is An Instant Cookware Upgrade",
    href: "https://www.maxim.com/rides/watch-the-worlds-biggest-hummer-makes-original-h1-look-like-a-toy/",
  },
  {
    id: 2,
    header1: "Gear",
    header2: "Food & Drink",
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Tom-Brady-Tampa-Bay-Buccaneers-Promo-788x443.jpg",
    title: "Tom Brady’s Return Blows Up Super Bowl and MVP Odds at MaximBet",
    href: "https://www.maxim.com/rides/watch-the-worlds-biggest-hummer-makes-original-h1-look-like-a-toy/",
  },
  {
    id: 3,
    header1: "News",
    header2: "",
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Jack-Ma-Alibaba-Promo-788x443.jpg",
    title: "How Alibaba Founder Jack Ma Built A Global Internet Empire",
    href: "https://www.maxim.com/rides/watch-the-worlds-biggest-hummer-makes-original-h1-look-like-a-toy/",
  },
];

export default function HorizontalCard() {
  return (
    <div
      style={{
        paddingLeft: "5.5rem",
      }}
    >
      {data.map((item) => (
        <Container key={item.id} className="tpd-card snipcss-8pECo">
          <div>
            <a
              thumbnail-size="medium"
              aria-label="Watch: World’s Biggest Hummer Absolutely DWARFS Original H1"
              href={item.href}
              className="img-container snip-a"
              style={{
                gridRowStart: "1",
                gridRowEnd: "6",
              }}
            >
              <img
                src={item.src}
                className="attachment-medium size-medium wp-post-image snip-img"
                alt=""
                loading="lazy"
                style={{
                  width: "260px",
                  // height: "auto",
                  height: "150px",
                  objectFit: "cover",
                  marginTop: "1rem",
                }}
              />
            </a>
          </div>

          {/* img-container */}
          <div
            className="tpd-card-title"
            style={{
              marginTop: "1rem",
              paddingLeft: "1rem",
            }}
          >
            <p
              className="categories snip-p"
              style={{
                color: "rgba(213, 19, 21, 0.8)",
                fontSize: "10px",
                fontWeight: "600",
                textTransform: "uppercase",
                lineHeight: "1em",
              }}
            >
              <a
                style={{
                  marginRight: "1rem",
                }}
                href="https://www.maxim.com/rides/"
                rel="tag"
                className="snip-a"
              >
                {item.header1}
              </a>
              <a
                href="https://www.maxim.com/video/"
                rel="tag"
                className="snip-a"
              >
                {item.header2}
              </a>
            </p>
            <h2
              style={{
                fontWeight: "400",
                fontSize: "18px",
                fontFamily: "Antonio",
                fontStyle: "normal",
              }}
              className="snip-h2"
            >
              <a
                href="https://www.maxim.com/rides/watch-the-worlds-biggest-hummer-makes-original-h1-look-like-a-toy/"
                className="snip-a"
                style={{
                  textTransform: "uppercase",
                  fontSize: "24px",
                  lineHeight: "1.3",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </a>
            </h2>
            <div className="tpd-card_meta_mobile"></div>
            {/* tpd-card_meta_mobile */}
          </div>
          {/* tpd-card-title */}
        </Container>
      ))}
    </div>
  );
}

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 33.33% 66.66%;
  grid-gap: 15px;
  margin-bottom: 15px;
  row-gap: 15px;
  column-gap: 15px;
  position: relative; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 60%;
  align-items: flex-start;
  border-bottom: 1px solid #cdcdcd;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;
