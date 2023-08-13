import React from "react";
import Image from "next/image";
import Fast from "../images/choose/fast.png";
import Best from "../images/choose/best.png";
import Price from "../images/choose/low.png";

function Choose() {
  return (
    <section className="container dark:bg-cyan-950 dark:text-gray-100 pb-[100px]">
      <h1 className="font-bold text-5xl text-center pb-[80px]">
        WHY CHOOSE US
      </h1>
      <div className="flex flex-row justify-items-center text-center px-[100px] gap-[50px] text-xl">
        <div className="basis-1/3">
          <div className="w-[200px] h-[200px] flex place-items-center mx-auto rounded-full bg-white shadow-lg shadow-cyan-500/80">
            <Image src={Price} className="w-[130px] h-[130px] mx-auto" />
          </div>
          <p className="pt-[40px]">
            We offer the best rental price for this vehicle, so that you can
            enjoy first class experiences with the lowest price available
          </p>
        </div>
        <div className="basis-1/3">
          <div className="w-[200px] h-[200px] flex place-items-center mx-auto rounded-full bg-white shadow-lg shadow-cyan-500/80">
            <Image src={Best} className="w-[150px] h-[150px] mx-auto" />
          </div>
          <p className="pt-[40px]">
            This car for its quality and class is very top notch compared to its
            competitors. We can ensure your safety and pleasure during your trip
            using this vehicle. One of the best if we must say ourselves.
          </p>
        </div>
        <div className="basis-1/3 ">
          <div className="w-[200px] h-[200px] flex place-items-center mx-auto rounded-full bg-white shadow-lg shadow-cyan-500/80">
            <Image src={Fast} className="w-[150px] h-[150px] mx-auto" />
          </div>
          <p className="pt-[40px]">
            The process for renting this car is also quick and easy. You only
            need to provide simple identification and once that is done you'll
            then only need to confirm and you're ready to go with your new
            rented car
          </p>
        </div>
      </div>
    </section>
  );
}

export default Choose;
