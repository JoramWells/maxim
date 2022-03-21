import styled from "styled-components";

const data = [
  {
    id: 0,
    src: "https://www.maxim.com/wp-content/uploads/2022/02/Ribera-y-Rueda-Promo-788x443.jpg",
    herf: "https://www.maxim.com/partner/spains-most-prestigious-regions-for-red-and-white-wines/",
    text: "SPAIN’S MOST PRESTIGIOUS REGIONS FOR RED AND WHITE WINES",
    author: "LAURA WERLIN",
    date: "• MAR 2, 2022",
  },
  {
    id: 1,
    src: "https://www.maxim.com/wp-content/uploads/2022/02/Worlds-Coolest-Bars-Promo-788x443.jpg",
    herf: "https://www.maxim.com/partner/spains-most-prestigious-regions-for-red-and-white-wines/",
    text: "Inside The World’s Best (And Most Beautiful) Bars",
    author: "Jared Paul Stern",
    date: "• Feb 25, 2022",
  },
  {
    id: 2,
    src: "https://www.maxim.com/wp-content/uploads/2022/02/Virgin-Galactic-Promo-788x443.jpg",
    herf: "https://www.maxim.com/rides/virgin-galactics-450000-civilian-spaceflight-showcased-in-new-video/",
    text: "Virgin Galactic’s $450,000 Civilian Spaceflight Showcased In New Video",
    author: "Maxim Video",
    date: "• Feb 17, 2022",
  },
  {
    id: 3,
    src: "https://www.maxim.com/wp-content/uploads/2022/02/Land-Rover-Defender-Cape-Breton-Island-Promo-788x443.jpg",
    herf: "https://www.maxim.com/partner/spains-most-prestigious-regions-for-red-and-white-wines/",
    text: "Exploring Canada’s Cape Breton Island In A Classic Land Rover Defender",
    author: "Jared Paul Stern",
    date: "• Feb 17, 2022",
  },
  {
    id: 4,
    src: "https://www.maxim.com/wp-content/uploads/2022/02/MHB-POOL-05-2987-788x443.jpeg",
    herf: "https://www.maxim.com/food-drink/this-stunning-california-resort-and-vineyard-is-sonomas-ultimate-wine-country-getaway/",
    text: "This Stunning California Resort and Vineyard Is Sonoma’s Ultimate Wine Country Getaway",
    author: "Jared Paul Stern",
    date: "• Feb 15, 2022",
  },
  {
    id: 5,
    src: "https://www.maxim.com/wp-content/uploads/2022/02/Jesse-Katz-Promo-788x443.jpg",
    herf: "https://www.maxim.com/food-drink/meet-the-winemaker-who-made-a-record-breaking-1-million-bottle-of-california-cabernet/",
    text: "Meet the Winemaker Who Made A Record-Breaking $1 Million Bottle Of California Cabernet",
    author: "Jared Paul Stern",
    date: "• Feb 11, 2022",
  },
];

export default function Card() {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginBottom: "0.5rem",
            borderBottomWidth: "1px",
            borderBottomColor: "rgb(231,231,231)",
            borderBottomStyle: "solid",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          <img
            src={item.src}
            className="attachment-medium size-medium wp-post-image snipcss-I48Vn snip-img"
            alt=""
            loading="lazy"
            style={{
              width: "260px",
              height: "160px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              marginLeft: "1rem",
            }}
          >
            <CardTitle>
              <A href={item.herf} class="snip-a">
                {item.text}
              </A>
            </CardTitle>
            <div
              style={{
                fontSize: "10px",
                marginTop: "10px",
                fontWeight: "600",
              }}
            >
              By {item.author} {item.date}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const CardTitle = styled.h2`
  :hover {
    color: rgb(68, 68, 68);
  }
  font-size: 26px;
  font-family: Antonio;
  margin-bottom: 10px;
`;

const A = styled.a`
  :hover {
    color: rgb(0, 102, 204);
  }
  font-family: antonio;
`;
