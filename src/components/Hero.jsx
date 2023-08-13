import Image from "next/image";
import Link from "next/link";
import bgHero from "../images/hero/bgHero.png";

const Hero = () => {
  return (
    <section className="dark:bg-cyan-950 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 ml-3 mr-3 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="ml-9 text-5xl font-bold leadi sm:text-6xl">
            The
            <span className="dark:text-black"> Best </span>Rental Car
          </h1>
          <p className="mt-6 ml-9 mb-8 text-lg sm:mb-12">
            We only provides our customer the best quality car with reasonable
            prices
          </p>
          <div className="ml-9 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/models"
              className="px-8 py-3 text-lg font-bold border hover:bg-white hover:text-cyan-950 rounded dark:border-gray-50 duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={bgHero}
            alt=""
            className="mt-16 object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
