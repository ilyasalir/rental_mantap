import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div className="bg-cyan-950 bg-full overflow-hidden">
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navbar />
      <Contact />
      <Banner2 />
      <Footer />
    </div>
  );
}
