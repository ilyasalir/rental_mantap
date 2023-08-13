import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Models from "../components/Models";
import Footer from "../components/Footer";
import Banner2 from "../components/Banner2";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function ModelsPage() {
  return (
    <div className="bg-cyan-950 bg-full overflow-hidden">
      <Head>
        <title>Vehicle Models</title>
      </Head>
      <Navbar />
      <Models />
      <Banner2 />
      <Footer />
    </div>
  );
}
