import styled from "styled-components";

export default function Navbar2() {
  return (
    <Container>
      {/* <div
        style={{
          backgroundColor: "white !important",
        }}
        className="mob-menu-container"
        onClick="changeMenu( this )"
      >
        <div
          className="bar1"
          style={{
            backgroundColor: "#1c3665",
          }}
        ></div>
        <div
          className="bar2"
          style={{
            backgroundColor: "#1c3665",
          }}
        ></div>
        <div
          className="bar3"
          style={{
            backgroundColor: "#1c3665",
          }}
        ></div>
      </div> */}
      <div>
        <a
          className="header-banner-promotion snip-a"
          href="https://promo.maximbet.com/co/welcome-offer/?btag=a_181b_164c_"
          title="Maxim Bet"
          target="_blank"
          rel="noopener"
          style={{
            // marginLeft: "1rem",
          }}
        >
          <img
            height={75}
            width={200}
            src="https://www.maxim.com/wp-content/themes/maxim-child-theme/assets/imgs/maxim-bet-400x150.jpeg"
            alt=""
            className="snip-img"
          />
        </a>
      </div>

      <HeaderContainer
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="header-container__main container"
      >
        <a
          href="https://www.maxim.com/"
          className="custom-logo-link snip-a"
          rel="home"
          aria-current="page"
        >
          <img
            width={458}
            height={129}
            src="https://www.maxim.com/wp-content/uploads/2021/12/maxim-logo-transparent-458x129-1.png"
            className="custom-logo snip-img"
            alt="Maxim"
            srcSet="https://www.maxim.com/wp-content/uploads/2021/12/maxim-logo-transparent-458x129-1.png 458w, https://www.maxim.com/wp-content/uploads/2021/12/maxim-logo-transparent-458x129-1-336x95.png 336w"
            sizes="(max-width: 458px) 100vw, 458px"
          />
        </a>
      </HeaderContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  top: 0px;
  background-color: black;
  /* position: sticky; */
  /* z-index: 200; */
  /* background-image: initial;
  background-position-x: initial; */
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;

  @media screen and (min-width: 768px) {
    /* display: none; */
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const HeaderContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  top: 0px;
  /* margin-right: 2rem; */
  /* display: block; */
  /* position: sticky; */
  /* z-index: 200; */
  /* background-color: white; */
  /* width: 100%; */
  /* padding-right: 15px; */
  /* padding-left: 15px; */
  /* margin-right: auto; */
  /* margin-left: auto; */
`;

const Conc = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
