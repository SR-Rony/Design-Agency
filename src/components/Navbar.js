
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png";

const Navbar = () => {

    return (
        <div className="bg-transparent absolute top-0 left-0 w-full">
            <div className="grid grid-cols-12 align-middle">
                <div className="grid col-span-2">
                    <Link href="/">
                        <Image
                            className="ml-24 mr-64"
                            alt="logo"
                            width={150}
                            height={30}
                            src={Logo}
                        />
                    </Link>
                </div>
                <div className="grid col-span-8 items-center justify-center">
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
                </div>
                <div className="grid col-span-2 bg-red-400">
                   <div className="flex">
                   <button className="py-2.5 mr-7 px-8 font-medium text-black text-base rounded-lg border border-btnColor hover:bg-btnColor hover:text-white">
                        Login
                    </button>
                    <button className="py-2.5 mr-7 px-8 font-medium text-black text-base rounded-lg border border-btnColor hover:bg-btnColor hover:text-white">
                        Register
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
