import Fb from "@/assets/images/fbIcon.png";
import Instragram from "@/assets/images/insIcon.png";
import Linkedin from "@/assets/images/linkdinIcon.png";
import Twitter from "@/assets/images/twIcon.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-[116px] bg-black flex text-white justify-between">

            <div className="w-1/3">
                <h4 className="pt-20 font-bold text-[39px]">WEB LOGO</h4>
                <p className="py-5 pr-20 text-xl font-normal">
                    Some footer text about the Agency. Just a little description to help
                    people understand you better
                </p>

                <div className="flex">
                    <Link href="/">
                        <Image className="mr-4" alt="FB" width={41} height={41} src={Fb} />
                    </Link>

                    <Link href="/">
                        <Image
                            className="mr-4"
                            alt="Twitter"
                            width={41}
                            height={41}
                            src={Twitter}
                        />
                    </Link>

                    <Link href="/">
                        <Image
                            className="mr-4"
                            alt="Linkedin"
                            width={41}
                            height={41}
                            src={Linkedin}
                        />
                    </Link>

                    <Link href="/">
                        <Image alt="Instragram" width={41} height={41} src={Instragram} />
                    </Link>
                </div>
                <p className="text-xl font-normal pb-7 pt-20">
                    Copyright Design Agency 2022
                </p>
            </div>

            <div className="w-1/3 pl-40">
                <h4 className=" font-semibold text-xl pb-4 pt-24">Quick Links</h4>
                <ul>
                    <li className=" font-normal text-lg pb-6">
                        <Link href="/">Services</Link>
                    </li>
                    <li className=" font-normal text-lg pb-6">
                        <Link href="/">Portfolio</Link>
                    </li>
                    <li className=" font-normal text-lg pb-6">
                        <Link href="/">About Us </Link>
                    </li>
                    <li className=" font-normal text-lg pb-6">
                        <Link href="/">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="w-1/3 pl-40">
                <h4 className=" font-semibold text-xl pb-4 pt-24">Address</h4>
                <p className="font-normal text-xl w-[246px]">
                    Design Agency Head Office. Airport Road United Arab Emirate
                </p>
            </div>
        </div>
    );
};

export default Footer;
