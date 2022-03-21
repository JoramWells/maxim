import styled from "styled-components";

const data = [
  {
    id: 0,
    text: "Entertainment",
    href: "/entertainment/",
  },
  {
    id: 1,
    text: "Style",
    href: "https://www.maxim.com/style/",
  },
  {
    id: 2,
    text: "Rides",
    href: "https://www.maxim.com/rides/",
  },
  {
    id: 3,
    text: "Luxury",
    href: "https://www.maxim.com/luxury/",
  },
  {
    id: 4,
    text: "Gear",
    href: "https://www.maxim.com/gear/",
  },
  {
    id: 5,
    text: "Food & Drink",
    href: "https://www.maxim.com/food-drink/",
  },
  {
    id: 6,
    text: "Travel",
    href: "/travel/",
  },
  {
    id: 7,
    text: "Prestige",
    href: "/prestige/",
  },
  {
    id: 8,
    text: "Women",
    href: "https://www.maxim.com/women/",
  },
  {
    id: 9,
    text: "Video",
    href: "/video/",
  },
  {
    id: 10,
    text: "MaximBet",
    href: "https://www.maxim.com/maximbet/",
  },
  {
    id: 11,
    text: "Maxim Cover Girl",
    href: "https://maximcovergirl.com/",
  },
];

export default function Navbar3() {
  return (
    <Container
      className="tpd-wrap container snipcss-DiHZY"
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <div
        className="header__nav"
        style={{
          display: "flex",
          justifyContent: "center`",
          backgroundColor: "black",
          padding: "1rem",
        }}
      >
        <Nav className="nav" role="navigation">
          <Ul>
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.href}> {item.text} </a>
              </li>
            ))}
          </Ul>
          {/* <ul id="menu-mobile-sub-menu" className="menu mobile-sub-menu">
            <li
              id="menu-item-78993"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78993"
            >
              <a
                href="https://www.simplecirc.com/subscribe/maxim/I9AA01"
                className="snip-a"
              >
                Subscribe
              </a>
            </li>
            <li
              id="menu-item-78992"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78992"
            >
              <a
                href="https://www.simplecirc.com/subscribe/maxim/I9AA01"
                className="snip-a"
              >
                Renew Subscription
              </a>
            </li>
            <li
              id="menu-item-78991"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78991"
            >
              <a
                href="https://www.simplecirc.com/subscribe/maxim/I9AA01"
                className="snip-a"
              >
                Give a Gift
              </a>
            </li>
            <li
              id="menu-item-78990"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78990"
            >
              <a href="https://www.maxim.com/contact/" className="snip-a">
                Contact Us
              </a>
            </li>
            <li
              id="menu-item-78989"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78989"
            >
              <a href="https://www.maxim.com/feed" className="snip-a">
                RSS Feed
              </a>
            </li>
            <li
              id="menu-item-78985"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-78985"
            >
              <a
                href="https://www.maxim.com/privacy-policy/"
                className="snip-a"
              >
                Privacy Policy
              </a>
            </li>
            <li
              id="menu-item-78988"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78988"
            >
              <a
                href="https://www.maxim.com/terms-conditions/"
                className="snip-a"
              >
                Terms and Conditions
              </a>
            </li>
            <li
              id="menu-item-78986"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78986"
            >
              <a
                href="https://www.maxim.com/maxim-international/"
                className="snip-a"
              >
                Maxim International
              </a>
            </li>
            <li
              id="menu-item-78987"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-78987"
            >
              <a
                href="https://www.maxim.com/maxim-product-licensing/"
                className="snip-a"
              >
                Maxim Product Licensing
              </a>
            </li>
            <li
              id="menu-item-78984"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78984"
            >
              <a href="https://www.saymedia.com/privacy" className="snip-a">
                Platform Privacy
              </a>
            </li>
          </ul> */}
          {/* <ul
            className="social-links"
            style={{
              display: "flex",
              marginRight: "0px",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              backgroundColor: "white",
            }}
          >
            <li>
              <a
                href="https://www.facebook.com/maximmagazine"
                title="Follow us on Facebook"
                target="_blank"
                rel="noreferrer"
                className="snip-a"
              >
                <svg
                  width="21px"
                  height="41px"
                  viewBox="0 0 21 41"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="social-svg facebook"
                >
                  <title id="facebook-svg-7827122938">Facebook</title>
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-17.000000, -8.000000)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <g transform="translate(17.000000, 8.000000)">
                        <path d="M13.125,14.09375 L13.125,8.96875 C13.125,7.55425 14.301,6.40625 15.75,6.40625 L18.375,6.40625 L18.375,0 L13.125,0 C8.775375,0 5.25,3.4414375 5.25,7.6875 L5.25,14.09375 L0,14.09375 L0,20.5 L5.25,20.5 L5.25,41 L13.125,41 L13.125,20.5 L18.375,20.5 L21,14.09375 L13.125,14.09375 Z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MaximMag"
                title="Follow us on Twitter"
                target="_blank"
                rel="noreferrer"
                className="snip-a"
              >
                <svg
                  width="46px"
                  height="38px"
                  viewBox="0 0 46 38"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="social-svg twitter"
                >
                  <title id="twitter-svg-5699092702">Twitter</title>
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-5.000000, -9.000000)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <g transform="translate(5.000000, 9.000000)">
                        <path d="M46,4.49861538 C44.289375,5.26153846 42.466625,5.76723077 40.56625,6.01276923 C42.52125,4.826 44.013375,2.96107692 44.714875,0.713230769 C42.892125,1.81815385 40.879625,2.59861538 38.734875,3.03415385 C37.004125,1.16046154 34.537375,0 31.846375,0 C26.625375,0 22.422125,4.30861538 22.422125,9.59061538 C22.422125,10.3506154 22.485375,11.0813846 22.640625,11.7770769 C14.8005,11.3883077 7.863125,7.56784615 3.20275,1.748 C2.389125,3.18323077 1.911875,4.826 1.911875,6.59446154 C1.911875,9.91507692 3.59375,12.8586154 6.10075,14.5627692 C4.585625,14.5335385 3.09925,14.0863077 1.84,13.3818462 C1.84,13.4110769 1.84,13.4490769 1.84,13.4870769 C1.84,18.1464615 5.108875,22.0166154 9.3955,22.9081538 C8.627875,23.1215385 7.79125,23.2238462 6.923,23.2238462 C6.31925,23.2238462 5.70975,23.1887692 5.137625,23.0601538 C6.3595,26.8572308 9.82675,29.6487692 13.9495,29.7393846 C10.741,32.2912308 6.667125,33.8287692 2.256875,33.8287692 C1.4835,33.8287692 0.74175,33.7936923 0,33.6972308 C4.177375,36.4361538 9.128125,38 14.467,38 C31.8205,38 41.308,23.3846154 41.308,10.716 C41.308,10.2921538 41.293625,9.88292308 41.2735,9.47661538 C43.145125,8.12615385 44.71775,6.43953846 46,4.49861538 Z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/videosbyMaxim"
                title="Follow us on Youtube"
                target="_blank"
                className="snip-a"
              >
                <svg
                  width="44px"
                  height="30px"
                  viewBox="0 0 44 30"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="social-svg youtube"
                  id="svg_youtube"
                >
                  <title id="youtube-svg-5265023493">Youtube</title>
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="youtube"
                      transform="translate(-6.000000, -13.000000)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <g
                        id="Youtube"
                        transform="translate(6.000000, 13.000000)"
                      >
                        <path
                          d="M43.0930866,4.69428314 C42.5860588,2.85867464 41.0998865,1.41168468 39.2151817,0.917412 C35.7720638,0 21.9993237,0 21.9993237,0 C21.9993237,0 8.22712081,0 4.78400298,0.882629795 C2.93555274,1.37637947 1.41312586,2.85893613 0.906097819,4.69428314 C0,8.04696897 0,15 0,15 C0,15 0,21.9880747 0.906097819,25.3057169 C1.41366293,27.1410639 2.89929807,28.5880538 4.78427152,29.0823265 C8.26337543,30 21.9998608,30 21.9998608,30 C21.9998608,30 35.7720638,30 39.2151817,29.1173703 C41.1001549,28.6233589 42.5860588,27.1763691 43.0936237,25.3410221 C43.9998203,21.9880747 43.9998203,15.0353052 43.9998203,15.0353052 C43.9998203,15.0353052 44.0357077,8.04696897 43.0930866,4.69428314 L43.0930866,4.69428314 Z M17.6143906,21.4234531 L17.6143906,8.57654692 L29.0671014,15 L17.6143906,21.4234531 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/maximmag"
                title="Follow us on Instagram"
                target="_blank"
                rel="noreferrer"
                className="snip-a"
              >
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 40 40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="social-svg instagram"
                  id="svg_instagram"
                >
                  <title id="instagram-svg-8739333988">Instagram</title>
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="instagram"
                      transform="translate(-8.000000, -8.000000)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <g
                        id="Instagram"
                        transform="translate(8.000000, 8.000000)"
                      >
                        <path
                          d="M11.6680223,0 C5.24003074,0 0,5.24003074 0,11.6680223 L0,28.3319777 C0,34.7599693 5.24003074,40 11.6680223,40 L28.3319777,40 C34.7599693,40 40,34.7599693 40,28.3319777 L40,11.6680223 C40,5.24003074 34.7599693,0 28.3319777,0 L11.6680223,0 Z M31.6680223,6.6720894 C32.5793324,6.6720894 33.3279106,7.4206676 33.3279106,8.33197765 C33.3279106,9.25956006 32.5793324,10.0081341 31.6680223,10.0081341 C30.7404399,10.0081341 29.9918659,9.25956006 29.9918659,8.33197765 C29.9918659,7.4206676 30.7404399,6.6720894 31.6680223,6.6720894 Z M20,10.0081341 C25.5166816,10.0081341 29.9918659,14.4833184 29.9918659,20 C29.9918659,25.5166816 25.5166816,29.9918659 20,29.9918659 C14.4833184,29.9918659 10.0081341,25.5166816 10.0081341,20 C10.0081341,14.4833184 14.4833184,10.0081341 20,10.0081341 Z M20,13.3279106 C16.3222151,13.3279106 13.3279106,16.3222151 13.3279106,20 C13.3279106,23.6777849 16.3222151,26.6720894 20,26.6720894 C23.6777849,26.6720894 26.6720894,23.6777849 26.6720894,20 C26.6720894,16.3222151 23.6777849,13.3279106 20,13.3279106 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://pinterest.com/maximmag"
                title="Follow us on pinterest"
                target="_blank"
                className="snip-a"
              >
                <svg
                  role="img"
                  style={{ maxWidth: "15px" }}
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="social-svg"
                >
                  <title id="pinterest-svg-638568048">Pinterest</title>
                  <path
                    fill="#fff"
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul> */}
          {/* search */}
          {/* <form
            className="search"
            method="get"
            action="https://www.maxim.com"
            role="search"
            style={{
              display: "flex",
              backgroundColor:"black"
            }}
          >
            <input
              className="search-input"
              type="search"
              name="s"
              placeholder="To search, type and hit enter."
            />
            <button
              className="search-submit mobile snip-button"
              type="submit"
              role="button"
              aria-label="Search Button"
              style={{
                  display:"inline-block"
              }}
            >
              <svg
                className="search-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
               s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
               c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
               s-17-7.626-17-17S14.61,6,23.984,6z"
                ></path>
              </svg>
            </button>
          </form> */}
          {/* <button
            className="search-submit desktop snip-button"
            type="submit"
            role="button"
            aria-label="Search Button"
          >
            <svg
              className="search-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
             s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
             c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
             s-17-7.626-17-17S14.61,6,23.984,6z"
              ></path>
            </svg>
          </button> */}
          {/* /search */}
        </Nav>
        <a
          className="join-maxim snip-a"
          href="/register"
          style={{
            textTransform: "uppercase",
            color: "#fff",
            fontSize: "12px",
          }}
        >
          Join
        </a>
      </div>
    </Container>
  );
}

const Nav = styled.nav`
  position: relative;
  display: block;
  margin: auto;
  width: 68%;
  background-color: black;
  color: white;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    display: flex !important;
    border-bottom: none;
    align-items: center;
    justify-content: center;
    border-bottom-color: white;
  }
`;

const Container = styled.div`
position: sticky;
z-index: 200;
top:0px;
  @media screen and (min-width: 980px) {
    max-width: 100% !important;
  }
`;

const Ul = styled.ul`
  margin: 0 auto 0 0;
  padding-left: 15px;
  transition: 0.3s;
  transition-duration: 0.3ms;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
