import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolid,
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="px-[100px] py-[70px] flex flex-row text-white gap-[100px]">
      <div className="basis-1/2 text-justify">
        <div className="w-[500px]">
          <h1 className="text-[30px] pb-[30px] font-bold">
            Need additional information?
          </h1>
          <p>
            Have a question, suggestion, or just want to get in touch? We'd love
            to hear from you! Our dedicated team is here to assist you with any
            inquiries you may have.
          </p>
          <p className="pt-[10px]">
            You can also reach us by filling out our online contact form. Please
            feel free to reach out to us anytime, and we'll get back to you as
            soon as possible. Your satisfaction is our priority, and we value
            your feedback and suggestions. Thank you for choosing us. We look
            forward to hearing from you!
          </p>
          <a className="flex flex-row items-center pt-[20px]" href="">
            <FontAwesomeIcon icon={faPhone} />
            <p className="ml-[10px]">(123)-531-226</p>
          </a>
          <a className="flex flex-row items-center" href="">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="ml-[10px]">rentalmantap@gmail.com</p>
          </a>
          <a className="flex flex-row items-center" href="">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <p className="ml-[8px]">Rental Mantap Depok</p>
          </a>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="pb-[20px]">
          <label>Full Name</label>
          <input
            className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
            type="name"
            placeholder="Your Name"
          ></input>
        </div>
        <div className="pb-[20px]">
          <label>Email</label>
          <input
            className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
            type="email"
            placeholder="Enter Email Address"
          ></input>
        </div>
        <div className="pb-[20px]">
          <label>Tell Us About It</label>
          <textarea
            className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950 pb-[100px]"
            type="email"
            placeholder="Write Here ..."
          ></textarea>
        </div>

        <button className="w-full p-2 bg-white hover:bg-cyan-950 border-2 border-white text-cyan-950 hover:text-white duration-300 uppercase font-bold">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
