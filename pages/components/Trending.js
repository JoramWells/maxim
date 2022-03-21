import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    id: 0,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Riesling-Promo-336x176.jpg",
    title: "7 Great Riesling Wines To Try Now",
  },
  {
    id: 1,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Dogfish-Head-x-Patagonia-Beer-336x176.jpg",
    title: "Patagonia & Dogfish Head Team Up For Sustainably-Sourced Pilsner",
  },
  {
    id: 2,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/709A1626-Edit-336x224.jpeg",
    title: "This Handsome Cast Iron Dutch Oven Is An Instant Cookware Upgrade",
  },
  {
    id: 3,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Tom-Brady-Tampa-Bay-Buccaneers-Promo-336x176.jpg",
    title: "Tom Brady’s Return Blows Up Super Bowl and MVP Odds at MaximBet",
  },
  {
    id: 4,
    src: "https://www.maxim.com/wp-content/uploads/2022/03/Jack-Ma-Alibaba-Promo-336x176.jpg",
    title: "How Alibaba Founder Jack Ma Built A Global Internet Empire",
  },
];

export default function Trending() {
  return (
    <div
      style={{
        width: "87%",
        margin: "auto",
        display: "block",
        marginTop: "1rem",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderTop: "2px solid #E0E0E0",
          borderBottom: "2px solid #E0E0E0",
        }}
        className="tpd-featured-posts-title has-slider-controls snipcss-ShOUT"
      >
        <button
          type="button"
          aria-label="Previous Slide"
          className="slick-prev slick-arrow tpd-slick-prev slick-disabled snip-button"
          aria-disabled="true"
          style={{}}
        ></button>
        <h2
          className="is-style-heading-dashed snip-h2"
          style={{ color: "#000", fontSize: "28px", fontFamily: "antonio" }}
        >
          TRENDING NOW
        </h2>
        <button
          type="button"
          aria-label="Next Slide"
          className="slick-next slick-arrow tpd-slick-next snip-button"
          aria-disabled="false"
          style={{}}
        ></button>
      </div>
      <Carousel autoPlay={true} responsive={responsive}>
        {data.map((item) => (
          <Container>
            <img
              src={item.src}
              style={{
                width: "220px",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <h2
              style={{
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "1.2",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                fontFamily: "antonio",
                textAlign: "center",
              }}
            >
              <a href="https://www.maxim.com/food-drink/7-great-riesling-wines-to-try-now/">
                {item.title}
              </a>
            </h2>
          </Container>
        ))}
      </Carousel>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  margin-top: 3.5rem;
  @media all {
    /* text-align: center;
    padding: 0 20px; */
  }

  @media screen and (min-width: 640px) {
    /* display: flex;
    -ms-flex-direction: column;
    flex-direction: column; */
  }
`;
