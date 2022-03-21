import Image from "next/image";

export default function Header() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        src="https://www.maxim.com/wp-content/uploads/2022/03/Dogfish-Head-x-Patagonia-Beer-1024x535.jpg"
        className="attachment-large size-large wp-post-image snipcss-wP9wO snip-img"
        alt="Patagonia x Dogfish Head"
        style={{
          width: "100%",
          height: "440px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          // margin:"auto",
          // maxWidth:"1000px",
          width: "1000px",
          height: "150px",
          // padding:"5px"
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            margin: "20px 0 10px",
            fontFamily: "antonio",
            fontWeight: "600",
            textTransform: "uppercase",
            color:"white",
            textAlign:"center"
          }}
        >
          <a
            href="https://www.maxim.com/food-drink/patagonia-dogfish-head-team-up-for-sustainably-sourced-pilsner/"
            className="snip-a"
            style={{
              color:"white"
            }}
          >
            Patagonia & Dogfish Head Team Up For <br/> Sustainably-Sourced Pilsner
          </a>
        </h2>
      </div>
    </div>
  );
}
