import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import trans from "../images/icon/trans.png";
import seat from "../images/icon/seat.png";
import brand from "../images/icon/brand.png";
import { sendContactForm } from "../lib/api";
import Head from "next/head";

const initValues = { name: "", email: "", phone: "" };

const initState = { isLoading: false, error: "", values: initValues };

function Book() {
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;
  // const handleChange = ({ target }) =>
  //   setState((prev) => ({
  //     ...prev,
  //     values: {
  //       ...prev.values,
  //       [target.name]: target.value,
  //     },
  //   }));

  const onSubmit = async () => {
    console.log(name);
    console.log(email);
    console.log(phonenum);

    // setState((prev) => ({
    //   ...prev,
    //   isLoading: true,
    // }));
    try {
      await sendContactForm({
        name: name,
        email: email,
        phone: phonenum,
        carName: cardData.name,
      });

      // setState(initState);
    } catch (error) {
      console.log(error);
      // setState((prev) => ({
      //   ...prev,
      //   isLoading: false,
      //   error: error.message,
      // }));
    }
    // alert("SUCCESS");
    router.push("/success");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const router = useRouter();
  const [cardData, setCardData] = useState(null);
  const [name, setName] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [email, setEmail] = useState("");

  // function handleSubmit() {
  //   console.log(name);
  //   console.log(email);
  //   console.log(phonenum);
  // }

  useEffect(() => {
    // Get the query parameter from the URL
    const encodedData = router.query.data;

    // Decode the data from the base64 string
    const decodedData = JSON.parse(
      Buffer.from(encodedData, "base64").toString()
    );
    setCardData(decodedData);

    // Do something with the data
    console.log("Received data:", decodedData);
  }, [router.query]);
  return (
    <section className="text-black flex  justify-center py-[20px]">
      <div className="bg-white py-3 px-3">
        {cardData && (
          <div>
            <Head>
              <title>{cardData.name}</title>
            </Head>
            <h1 className="font-bold pt-[9px] pb-[50px]">{cardData.name}</h1>
            <img
              src={cardData.img}
              alt={cardData.name}
              width={400}
              height={400}
            />
            <p className="flex flex-row uppercase pt-[5px] gap-[20px]">
              <Image src={trans} className="w-[25px] h-[20px] pr-[5px]" />
              {cardData.transmisi}
            </p>
            <p className="flex flex-row uppercase gap-[20px]">
              <Image src={brand} className="w-[25px] h-[20px] pr-[5px]" />
              {cardData.brand}
            </p>
            <p className="flex flex-row uppercase gap-[20px] pb-[6px]">
              <Image src={seat} className="w-[25px] h-[20px] pr-[5px]" />
              {cardData.kursi}
            </p>
            <p className="pb-[10px] p-2 bg-white border border-cyan-950 items-center flex justify-center text-cyan-950">
              {formatter.format(cardData.harga)}/day
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col bg-white py-3">
        <div className="px-3">
          <label>
            Fullname <span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
            type="name"
            placeholder="Your First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-row justify-between py-2">
          <div className="px-3">
            <label>
              Phone Number <span className="text-rose-700">*</span>
            </label>
            <input
              className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
              type="phone"
              placeholder="Your Phone Number"
              value={phonenum}
              onChange={(e) => setPhonenum(e.target.value)}
            ></input>
          </div>
          <div className="px-3">
            <label>
              Age <span className="text-rose-700">*</span>
            </label>
            <input
              className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
              type="age"
              placeholder="18"
            ></input>
          </div>
        </div>
        <div className="flex flex-col py-2 px-3">
          <label>
            Email Address <span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col py-2 px-3">
          <label>
            Address <span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
            type="address"
            placeholder="Your Address"
          ></input>
        </div>
        <div className="flex flex-row justify-between py-2">
          <div className="px-3">
            <label>
              City <span className="text-rose-700">*</span>
            </label>
            <input
              className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
              type="city"
              placeholder="Your City"
            ></input>
          </div>
          <div className="px-3">
            <label>
              Zip Code <span className="text-rose-700">*</span>
            </label>
            <input
              className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-cyan-950 py-2 px-3 text-cyan-950"
              type="zip"
              placeholder="Your Zip Code"
            ></input>
          </div>
        </div>
        <div className="flex justify-center px-3 pt-2">
          <button
            className="w-full h-[50px] bg-white hover:bg-cyan-950 border-2 border-cyan-950 text-cyan-950 hover:text-white duration-300 uppercase font-bold"
            onClick={onSubmit}
            // disabled={!values.name || !values.email || !values.phone}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Book;
