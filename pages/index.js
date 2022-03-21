import Head from "next/head";
import Link from "next/link";
import AfterTrending from "../components/AfterTrending";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalCard from "../components/HorizontalCard";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Navbar3 from "../components/Navbar3";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maxim Travel Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <Header />
      <Items />
      <HorizontalCard />
      <Trending />
      {/* <Carousel /> */}
      {/* <Navba */}
      <AfterTrending />

      <Footer/>
    </div>
  );
}
