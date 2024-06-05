
import DevOne from "@/assets/images/allDev1.png";
import DevTwo from "@/assets/images/allDev2.png";
import DevThree from "@/assets/images/allDev3.png";
import DevFour from "@/assets/images/allDev4.png";
import DevFive from "@/assets/images/allDev5.png";
import DevSix from "@/assets/images/allDev6.png";
import NavbarOtherPage from '@/components/NavbarOtherPage';
import NewsLetter from '@/components/NewsLetter';
import TestMonialbox from '@/components/TestMonialbox';
import TitleText from './../../components/TitleText';

const page = () => {
  return (
    <div>

      <NavbarOtherPage pageName="Testimonial List" />
      <div className='pl-[105px] pt-[66px]'>

        <div className='pr-10 mb-4'>
          <TitleText title="Testimonial List" text="Better Agency/SEO Solution At Your Fingertips" />
        </div>

        <div className=' flex'>
          <TestMonialbox img={DevOne} />
          <TestMonialbox img={DevTwo} />
          <TestMonialbox img={DevThree} />
        </div>
        <div className=' flex mt-10'>
          <TestMonialbox img={DevFour} />
          <TestMonialbox img={DevFive} />
          <TestMonialbox img={DevSix} />
        </div>
      </div>


      <NewsLetter />
    </div>
  )
}

export default page