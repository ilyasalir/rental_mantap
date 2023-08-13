import React from "react";
import data from "../data/data";
import Image from "next/image";
import trans from "../images/icon/trans.png";
import seat from "../images/icon/seat.png";
import brand from "../images/icon/brand.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Models() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const router = useRouter();

  const handleClick = (cardData) => {
    // Encodes the data as JSON and converts it to a base64 string
    const encodedData = Buffer.from(JSON.stringify(cardData)).toString(
      "base64"
    );

    // Navigate to the destination page with the encoded data in the query parameter
    router.push(`/book?data=${encodedData}`);
  };

  return (
    <div className="px-[250px] py-[70px] grid grid-cols-1 bg-cyan-950 h-full gap-[50px] ">
      {data.map((i) => (
        <div className="h-full bg-white rounded-lg px-[50px] p-[20px] justify-center items-center relative h-[30vh] flex flex-row">
          {/* <div className="flex flex-row "> */}
          <Image className="basis-1/4 " src={i.img} width={300} height={300} />
          <div className="basis-1/2 pl-[50px] h-[208px] gap-[35px] flex flex-col items-start">
            <h1 className="font-bold text-xl pt-[10px] truncate">{i.name}</h1>
            <div className="flex flex-col justify-center items-start">
              <p className="flex flex-row uppercase py-[3px]">
                <Image src={trans} className="w-[25px] h-[20px] pr-[5px]" />
                {i.transmisi}
              </p>
              <p className="flex flex-row uppercase py-[3px]">
                <Image src={brand} className="w-[25px] h-[20px] pr-[5px]" />
                {i.brand}
              </p>
              <p className="flex flex-row uppercase py-[3px]">
                <Image src={seat} className="w-[25px] h-[20px] pr-[5px]" />
                {i.kursi}
              </p>
            </div>
          </div>
          <div className="basis-1/4 text-center flex-col flex justify-center ]">
            <p className="text-xl pb-[10px]">{formatter.format(i.harga)}/day</p>
            <a>
              <button
                className="px-5 py-2 text-lg font-bold border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white rounded duration-300"
                onClick={() => handleClick(i)}
              >
                BOOK NOW
              </button>
            </a>
          </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
}

export default Models;
