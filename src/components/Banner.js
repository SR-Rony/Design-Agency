
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


const Banner = () => {
    return (

        <>
            <div className='bg-homeBg pt-20 flex' >

                <div className=" pt-14 bg-homeBg pl-[102px]">
                    <h2 className="font-bold text-5xl leading-[65px] w-[500px]">Increase Your Customers Loyalty and Satisfaction</h2>
                    <p className="w-[430px] pt-2.5 mb-12 font-normal text-xl">We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                    <button className="py-5 mr-7 px-8 font-medium text-xl	rounded-xl border border-btnColor bg-btnColor text-white">Get Started</button>
                </div>
                <div className='pl-[81px] pt-[51px] pb-20'>
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
            <div className='bg-homeBg pb-8	'>
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

        </>
    )
}

export default Banner