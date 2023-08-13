import Image from "next/image";
import Logo from "../images/logo/RENTAL MANTAP.png";
import Link from "next/link";
import Models from "./Models";

const Navbar = () => {
  return (
    <nav className="bg-white static w-full h-24 shadow-xl bg-white text-bg-cyan-950">
      <div className="flex justify-between items-center h-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div>
          <ul className="font-bold hidden sm:flex">
            <Link href="/">
              <li className="py-3 px-3 flex ml-1 uppercase hover:bg-cyan-950 hover:text-white rounded-lg duration-500 text-xl">
                Home
              </li>
            </Link>
            <Link href="/models">
              <li className="py-3 px-3 flex ml-1 uppercase hover:bg-cyan-950 hover:text-white rounded-lg duration-500 text-xl">
                Vehicle models
              </li>
            </Link>
            <Link href="/contact">
              <li className="py-3 px-3 flex ml-1 uppercase hover:bg-cyan-950 hover:text-white rounded-lg duration-500 text-xl">
                Contact us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
