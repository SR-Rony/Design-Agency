
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {

    return (
        <div className="bg-transparent absolute top-0 left-0 w-full py-4">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 items-center">
                <div className="grid col-span-3">
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
                <div className="grid col-span-6 items-center justify-center">
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
                <div className="grid col-span-3 justify-end">
                   <div className="flex gap-5">
                    <Button text="Login"/>
                    <Button text="Registation"/>
                   </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
