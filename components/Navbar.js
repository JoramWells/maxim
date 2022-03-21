import React from "react";
import styled from "styled-components";

const data = [
  {
    id: 0,
    href: "https://www.facebook.com/maximmagazine",
    title: "Follow us on Facebook",
    target: "_blank",
    rel: "noreferrer",
    width: "21px",
    height: "41px",
    viewBox: "0 0 21 41",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "social-svg facebook",
    id2: "facebook-svg-9535008121",
    transform1: "translate(-17.000000, -8.000000)",
    transform2: "translate(17.000000, 8.000000)",
    d: "M13.125,14.09375 L13.125,8.96875 C13.125,7.55425 14.301,6.40625 15.75,6.40625 L18.375,6.40625 L18.375,0 L13.125,0 C8.775375,0 5.25,3.4414375 5.25,7.6875 L5.25,14.09375 L0,14.09375 L0,20.5 L5.25,20.5 L5.25,41 L13.125,41 L13.125,20.5 L18.375,20.5 L21,14.09375 L13.125,14.09375 Z",
  },
  {
    id: 1,
    href: "https://twitter.com/MaximMag",
    title: "Follow us on Twitter",
    target: "_blank",
    rel: "noreferrer",
    width: "46px",
    height: "38px",
    viewBox: "0 0 46 38",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "social-svg twitter",
    id2: "twitter-svg-3325325055",
    transform1: "translate(-5.000000, -9.000000)",
    transform2: "translate(5.000000, 9.000000)",
    d: "M46,4.49861538 C44.289375,5.26153846 42.466625,5.76723077 40.56625,6.01276923 C42.52125,4.826 44.013375,2.96107692 44.714875,0.713230769 C42.892125,1.81815385 40.879625,2.59861538 38.734875,3.03415385 C37.004125,1.16046154 34.537375,0 31.846375,0 C26.625375,0 22.422125,4.30861538 22.422125,9.59061538 C22.422125,10.3506154 22.485375,11.0813846 22.640625,11.7770769 C14.8005,11.3883077 7.863125,7.56784615 3.20275,1.748 C2.389125,3.18323077 1.911875,4.826 1.911875,6.59446154 C1.911875,9.91507692 3.59375,12.8586154 6.10075,14.5627692 C4.585625,14.5335385 3.09925,14.0863077 1.84,13.3818462 C1.84,13.4110769 1.84,13.4490769 1.84,13.4870769 C1.84,18.1464615 5.108875,22.0166154 9.3955,22.9081538 C8.627875,23.1215385 7.79125,23.2238462 6.923,23.2238462 C6.31925,23.2238462 5.70975,23.1887692 5.137625,23.0601538 C6.3595,26.8572308 9.82675,29.6487692 13.9495,29.7393846 C10.741,32.2912308 6.667125,33.8287692 2.256875,33.8287692 C1.4835,33.8287692 0.74175,33.7936923 0,33.6972308 C4.177375,36.4361538 9.128125,38 14.467,38 C31.8205,38 41.308,23.3846154 41.308,10.716 C41.308,10.2921538 41.293625,9.88292308 41.2735,9.47661538 C43.145125,8.12615385 44.71775,6.43953846 46,4.49861538 Z",
  },
  {
    id: 2,
    href: "https://www.instagram.com/maximmag",
    title: "Follow us on Instagram",
    target: "_blank",
    rel: "noreferrer",
    width: "40px",
    height: "40px",
    viewBox: "0 0 40 40",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "social-svg instagram",
    id2: "instagram-svg-1134229945",
    transform1: "translate(-8.000000, -8.000000)",
    transform2: "translate(8.000000, 8.000000)",
    d: "M11.6680223,0 C5.24003074,0 0,5.24003074 0,11.6680223 L0,28.3319777 C0,34.7599693 5.24003074,40 11.6680223,40 L28.3319777,40 C34.7599693,40 40,34.7599693 40,28.3319777 L40,11.6680223 C40,5.24003074 34.7599693,0 28.3319777,0 L11.6680223,0 Z M31.6680223,6.6720894 C32.5793324,6.6720894 33.3279106,7.4206676 33.3279106,8.33197765 C33.3279106,9.25956006 32.5793324,10.0081341 31.6680223,10.0081341 C30.7404399,10.0081341 29.9918659,9.25956006 29.9918659,8.33197765 C29.9918659,7.4206676 30.7404399,6.6720894 31.6680223,6.6720894 Z M20,10.0081341 C25.5166816,10.0081341 29.9918659,14.4833184 29.9918659,20 C29.9918659,25.5166816 25.5166816,29.9918659 20,29.9918659 C14.4833184,29.9918659 10.0081341,25.5166816 10.0081341,20 C10.0081341,14.4833184 14.4833184,10.0081341 20,10.0081341 Z M20,13.3279106 C16.3222151,13.3279106 13.3279106,16.3222151 13.3279106,20 C13.3279106,23.6777849 16.3222151,26.6720894 20,26.6720894 C23.6777849,26.6720894 26.6720894,23.6777849 26.6720894,20 C26.6720894,16.3222151 23.6777849,13.3279106 20,13.3279106 Z",
  },
  {
    id: 3,
    href: "https://pinterest.com/maximmag",
    title: "Follow us on pinterest",
    target: "_blank",
    rel: "noreferrer",
    width: "15px",
    height: "30px",
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "social-svg pinterest",
    id2: "pinterest-svg-2875822831",
    transform1: "",
    transform2: "",
    d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z",
  },
];

export default function Navbar() {
  return (
    <Nav>
      <Ul>
        {data.map((social) => (
          <li key={social.id}>
            <a
              href={social.href}
              title={social.title}
              target={social.target}
              style={{
                color: "white",
              }}
            >
              <svg
                width={social.width}
                height={social.height}
                viewBox={social.viewBox}
                version={social.version}
                xmlns={social.xmlns}
                xmlnsXlink={social.xmlnsXlink}
                className={social.className}
                style={{
                  height: "1.1em",
                  verticalAlign: "middle",
                  fill: "white",
                  backgroundColor: "white",
                  color: "white",

                }}
              >
                <title id={social.id2}>Facebook</title>
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g
                    transform={social.transform1}
                    fill="#000000"
                    fillRule="nonzero"
                  >
                    <g transform={social.transform2}>
                      <path d={social.d}></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        ))}
      </Ul>
      <ul
        className="tpd-pre-header-menu"
        style={{
          display: "flex",
          margin: "0px",
          listStyle: "none",
          justifyContent: "space-between",
        }}
      >
        <li
          id="menu-item-8"
          style={{
            marginRight: "1rem",
          }}
        >
          <a
            target="_blank"
            rel="noopener"
            href="https://www.simplecirc.com/subscribe/maxim/I9AA01"
          >
            Subscribe
          </a>
        </li>
        <li id="menu-item-84594">
          <a href="https://www.maxim.com/newsletter/" className="snip-a">
            Newsletter
          </a>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  list-style: none;
  color: white;
  font-size: 14px;
  padding: 10px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 0px;
  margin-right: 15px;
  list-style: none;
  margin-left: 0px;
  margin-bottom: 0px;
`;


const Li = styled.li`
 margin-right:"15px"
`