
import Image from 'next/image';
import BannerFour from "../assets/images/banner_four.png";
import BannerOne from "../assets/images/banner_one.png";
import BannerThree from "../assets/images/banner_three.png";
import BannerTwo from "../assets/images/banner_two.png";
import Google from "../assets/images/logoGoogle.png";
import Trello from "../assets/images/trelloLogo.png";
import Monday from "../assets/images/logos_monday.png";
import Notion from "../assets/images/notionLogo.png";
import Slack from "../assets/images/logoSlack.png";
import Paragraph from './Paragraph';
import Heading from './Heading';
import Button from './Button';


const Banner = () => {
    return (

        <section className='bg-homeBg pt-40 pb-10'>
            <div className='container mx-auto'>
                <div className=' grid grid-cols-12 items-center' >
                    <div className=" col-span-6 pt-14 bg-homeBg">
                        <Heading className="text-7xl" text="Increase Your Customers Loyalty and Satisfaction"/>
                        <Paragraph className="pt-2.5 mb-12 " text="We help businesses like yours earn more customers, standout from competitors,  make more money"/>
                        <Button text="Get Started"/>
                    </div>
                    <div className=' grid col-span-6 justify-end'>
                        <div className='flex'>
                            <Image
                                className='pr-5'
                                alt="BannerOne"
                                width={408}
                                height={271}
                                src={BannerOne}
                            />
                            <Image
                                alt="BannerOne"
                                width={180}
                                height={271}
                                src={BannerTwo}
                            />
                        </div>
                        <div className='pt-5 flex'>
                            <Image
                                className='pr-5'
                                alt="BannerOne"
                                width={246}
                                height={166}
                                src={BannerThree}
                            />
                            <Image
                                alt="BannerOne"
                                width={345}
                                height={166}
                                src={BannerFour}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-homeBg pb-8 mt-20	'>
            <div className=' bg-[#F8FFF9] pl-28 py-11 pr-36 flex justify-between'>   
                <Image
                    alt="Google"
                    width={89}
                    height={30}
                    src={Google}
                />
                <Image
                    alt="Trello"
                    width={142}
                    height={30}
                    src={Trello}
                />
                <Image
                    alt="Monday"
                    width={157}
                    height={30}
                    src={Monday}
                />
                <Image
                    alt="Notion"
                    width={80}
                    height={30}
                    src={Notion}
                />
                <Image
                    alt="Slack"
                    width={115}
                    height={30}
                    src={Slack}
                />
            </div>
            </div>

        </section>
    )
}

export default Banner