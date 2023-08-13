import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolid,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Banner2() {
  return (
    <section className="w-full h-[150px] bg-gray-200 flex justify-center">
      <div className="flex flex-row text-center items-center font-bold text-cyan-950">
        <p className="text-[40px]">Book a car by getting in touch with us</p>
        <FontAwesomeIcon
          icon={faPhone}
          style={{ fontSize: 30 }}
          className="pl-[20px]"
        />
        <p className="text-[30px]">(123)-531-226</p>
      </div>
    </section>
  );
}

export default Banner2;
