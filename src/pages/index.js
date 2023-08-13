import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Models from "../components/Models";
import Slider from "../components/Slider";
import Choose from "../components/Choose";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-cyan-950 overflow-hidden">
      <Head>
        <title>Rental Mantap</title>
      </Head>
      <Navbar />
      <Hero />
      <Banner />
      <Slider />
      <Choose />
      <Banner2 />
      <Footer />
    </div>
  );
}
