// components/Models.js

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import trans from "../images/icon/trans.png";
import seat from "../images/icon/seat.png";
import brand from "../images/icon/brand.png";
import Slider from "react-slick";
import data from "../data/data";
import { useRouter } from "next/router";

function Slidercar() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
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
    <div className="px-[100px] py-[70px]">
      <h1 className="text-white font-bold text-xl pb-[10px]">
        Choose your car
      </h1>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Change the interval (in milliseconds) as per your preference
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow arrow-prev"
            >
              {"🞀"}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow arrow-next"
            >
              {"🞂"}
            </button>
          )
        }
      >
        {data.map((i, index) => (
          <div className="bg-cyan-950 h-full">
            <div
              key={index}
              className="h-full bg-white px-[50px] p-[20px] justify-center items-center relative h-[30vh] flex flex-row"
            >
              <Image
                className="basis-1/4 "
                src={i.img}
                width={300}
                height={300}
              />
              <div className="basis-1/2 pl-[50px] h-[208px] gap-[35px] flex flex-col items-start">
                <h1 className="font-bold text-xl pt-[10px] truncate">
                  {i.name}
                </h1>
                <div className="flex flex-col justify-center items-start">
                  <div className="flex flex-row uppercase py-[3px]">
                    <Image src={trans} className="w-[25px] h-[20px] pr-[5px]" />
                    {i.transmisi}
                  </div>
                  <div className="flex flex-row uppercase py-[3px]">
                    <Image src={brand} className="w-[25px] h-[20px] pr-[5px]" />
                    {i.brand}
                  </div>
                  <div className="flex flex-row">
                    <div className="uppercase py-[3px]">
                      <Image
                        src={seat}
                        className="w-[25px] h-[20px] pr-[5px]"
                      />
                    </div>
                    <a className="uppercase">{i.kursi}</a>
                  </div>
                </div>
              </div>
              <div className="basis-1/4 text-center flex-col flex justify-center ]">
                <p className="text-xl pb-[10px]">
                  {formatter.format(i.harga)}/day
                </p>
                <a>
                  <button
                    className="px-5 py-2 text-lg font-bold border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white rounded duration-300"
                    onClick={() => handleClick(i)}
                  >
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <a
        className="text-white p-1 cursor-pointer hover:text-black"
        href="/models"
      >
        More ...
      </a>
    </div>
  );
}

export default Slidercar;
