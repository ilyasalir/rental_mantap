import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import Success from "../components/success";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function SuccessPage() {
  return (
    <div className="bg-cyan-950 bg-full overflow-hidden">
      <Head>
        <title>Success</title>
      </Head>
      <Navbar />
      <Success />
      <Banner2 />
      <Footer />
    </div>
  );
}
