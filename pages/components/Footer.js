import Image from "next/image";

import styles from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <div style={{
      marginTop:"5rem"
    }}>
      {/* <hr
        style={{
          width: "50%",
          color: "black",
          marginTop: "5rem",
        }}
      /> */}
      <footer style ={{
        height:"200px"
      }}className={styles.footer}>
        <div
          style={{
            margin: ".5rem",
          }}
        >
          Subscribe
        </div>
        <div
          style={{
            margin: ".5rem",
          }}
        >
          Renew Subscription
        </div>
        <div style={{
          margin:".5rem"
        }}>Give a Gift</div>
        <div style={{
          margin:".5rem"
        }}>
        Contact Us
        </div>
        <div style={{
          margin: ".5rem"
        }}>
        RSS Feed
        </div>
        <div style={{
          margin:".5rem"
        }}>
        Privacy Policy

        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin:".5rem"
          }}
        >
          <img
            src="https://www.maxim.com/wp-content/uploads/2021/05/maxim-footer-logo.png"
            style={{
              width: "80px",
              height: "20px",
              objectFit: "contain",
            }}
          />
          Terms and Condition
        </div>
      </footer>
    </div>
  );
}
