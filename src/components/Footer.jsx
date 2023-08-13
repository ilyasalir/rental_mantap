import React from "react";
import Call from "../images/footer/call.png";
import Image from "next/image";
import Logo from "../images/logo/RENTAL MANTAP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolid,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className="flex flex-row bg-white px-[100px] py-[20px] gap-[50px] justify-between">
      <div className="basis-1/4 text-justify">
        <h1 className="font-bold text-2xl pb-[10px] uppercase">
          Rental mantap
        </h1>
        <p>
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="flex flex-row mt-[20px] hover:text-cyan-950 font-bold ">
          <a href="/contact" className="flex flex-row items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p className="ml-[10px]">(123)-531-226</p>
          </a>
        </div>
        <div className="flex flex-row mt-[20px] items-center hover:text-cyan-950 font-bold ">
          <a href="/contact" className="flex flex-row items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="ml-[10px]">rentalmantap@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="basis-1/4">
        <h1 className="font-bold text-2xl pb-[10px] uppercase">
          Working Hours
        </h1>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="basis-1/4 flex flex-col">
        <h1 className="font-bold text-2xl pb-[10px] uppercase">pages</h1>
        <a href="/" className="hover:text-cyan-950">
          Home
        </a>
        <a href="/models" className="hover:text-cyan-950">
          Vehicle Models
        </a>
        <a href="/contact" className="hover:text-cyan-950">
          Contact Us
        </a>
      </div>
      <div className="basis-1/4 flex flex-col gap-[10px]">
        <h1 className="font-bold text-2xl uppercase">subcription</h1>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input
          className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3"
          type="email"
          placeholder="Enter Email Address"
        ></input>
        <button className="w-full submit-email p-2 bg-cyan-950 hover:bg-white border-4 border-cyan-950 hover:border-cyan-950 text-white hover:text-cyan-950 duration-300 uppercase font-bold">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Footer;
