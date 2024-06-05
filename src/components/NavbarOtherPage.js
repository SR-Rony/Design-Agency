import NavbarBg from "@/assets/images/navbarbg.png";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets//images/logo.png";
import { MdArrowForwardIos } from "react-icons/md";


const NavbarOtherPage = ({ pageName }) => {
  return (
    <div className="pb-20">
      <div className=" relative flex pt-4 py-2.5 align-middle  ">
        <div className=" -top-4 absolute -z-10 w-full">
          <Image alt="BG" width={1440} height={370} src={NavbarBg} />
        </div>
        <Link href="/">
          <Image
            className="ml-24 mr-64"
            alt="logo"
            width={150}
            height={30}
            src={Logo}
          />
        </Link>
        <ul className="flex font-medium text-black text-base">
          <li className="mr-8 p-2.5 hover:text-orange-500">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-8 p-2.5 hover:text-orange-500">
            <Link href="/team">Team</Link>
          </li>
          <li className="mr-8 p-2.5 hover:text-orange-500">
            <Link href="/service">Service</Link>
          </li>
          <li className="mr-8 p-2.5 hover:text-orange-500">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="mr-8 p-2.5 hover:text-orange-500">
            <Link href="/testimonials">Testimonials</Link>
          </li>
        </ul>

        <button className="py-2.5 mr-7 px-8 font-medium text-black text-base rounded-lg border border-btnColor hover:bg-btnColor hover:text-white">
          Login
        </button>
        <button className="py-2.5 mr-7 px-8 font-medium text-black text-base rounded-lg border border-btnColor hover:bg-btnColor hover:text-white">
          Register
        </button>
      </div>
      <div className=" ml-24 pt-24">
        <h4 className=" pb-5 font-semibold text-[40px]">{pageName}</h4>

        <div className="flex items-center">
          <Link href="/" className="text-base font-semibold">
            Home
          </Link>
          <MdArrowForwardIos className="mx-2" />
          <h5 className=" text-btnColor text-base font-semibold">{pageName}</h5>
        </div>
      </div>
    </div>
  );
};

export default NavbarOtherPage;
