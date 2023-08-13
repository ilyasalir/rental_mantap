import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Banner2 from "../components/Banner2";
import Footer from "../components/Footer";
import Book from "../components/Book";


const inter = Inter({ subsets: ["latin"] });


export default function BookPage() {
  return (
    <div className="bg-cyan-950 bg-full overflow-hidden">
      <Navbar />
      <Book />
      <Banner2 />
      <Footer />
    </div>
  );
}
