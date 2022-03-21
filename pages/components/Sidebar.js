const data = [
  {
    id: 0,
    href: "https://www.maxim.com/wp-content/uploads/2022/03/Ella-Orten-Promo-750x422.jpg",
    text: "  Meet Model, Gamer and NFT Investor Ella Orten",
  },
  {
    id: 1,
    href: "https://www.maxim.com/wp-content/uploads/2022/03/Megan-Thee-Stallion-Dua-Lipa-Sweetest-Pie-Promo-750x422.jpg",
    text: "Megan Thee Stallion and Dua Lipa Get Seductive In",
  },
  {
    id: 2,
    href: "https://www.maxim.com/wp-content/uploads/2021/12/Natalie-Roser-Promo-750x422.jpg",
    text: "Meet Former Maxim Australia Cover Model Natalie Roser",
  },
  {
    id: 3,
    href: "https://www.maxim.com/wp-content/uploads/2021/05/olivia-culpo-hot-100-promo-750x422.jpg",
    text: "Olivia Culpo's Most-Liked Photos of 2021 Include 'Underboob'",
  },
  {
    id: 4,
    href: "https://www.maxim.com/wp-content/uploads/2022/03/Erin-Cummins-Promo-1-336x176.jpg",
    text: "Meet Rising Model and Former Miss United States Erin Cummins",
  },
  {
    id: 5,
    href: "https://www.thedailygoalhorn.com/wp-content/uploads/2021/04/USATSI_10521268-336x224.jpg",
    text: "Jaromir Jagr comes to Ukraine's aid moving team's final",
    article:""
  },
];

export default function Sidebar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <div
            style={{
              fontSize: "22px",
              fontFamily: "Antonio",
              lineHeight: "1.3",
              fontWeight: "500",
              marginBottom: "15px",
            }}
          >
            Recommended
          </div>
        </div>
        <div
          className="pe-powered-by"
          style={{
            textAlign: "right",
            color: "rgb(153, 153, 153)",
            font: "10px/14px Helvetica,Arial,sans-seri",
            lineHeight: "14px",
          }}
        >
          <a
            rel="nofollow"
            href="https://welcome.pubexchange.com/promo/pub/maxim2"
            onclick="return PUBX.whatIsPubExchange(this);"
            target="_blank"
            className="pe-partner-with-us snip-a"
          >
            pubexchange
          </a>
        </div>
      </div>
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop:"15px"
          }}
          key={item.id}
        >
          <div
            style={{
              marginRight: "1rem",
            }}
          >
            <img
              style={{ height: "100px", width: "150px", objectFit: "cover" }}
              src={item.href}
              onerror="PUBX.imgErr(this);"
              className="snipcss-Cq5or snip-img"
            />
          </div>
          <div
            style={{
              fontFamily: "Antonio",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "1.3",
              marginBottom: "4px",
              backgroundImage:
                "url(`https://www.maxim.com/wp-content/uploads/2021/05/maxim-footer-logo.png`)",
              backgroungSize: "58px 22px",
            }}
          >
            <a
              className="pe-headline snipcss-3MF49 snip-a"
              rel="nofollow"
              href="https://www.maxim.com/entertainment/kate-beckinsale-stuns-in-black-tube-top-and-leather-pants-in-latest-sultry-photo/"
              data-url="https://www.maxim.com/entertainment/kate-beckinsale-stuns-in-black-tube-top-and-leather-pants-in-latest-sultry-photo/"
              onmousedown="this.href='http://traffic.pubexchange.com/l/799e01fa-6f58-44e8-aefb-4e0949bb9257/799e01fa-6f58-44e8-aefb-4e0949bb9257/23e48d1c-3d1c-4b35-9674-1033eb5ef1a3/f?u=';"
            >
              {item.text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
