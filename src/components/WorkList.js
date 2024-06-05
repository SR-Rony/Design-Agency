import React from 'react'
import Workbox from './Workbox'
import { Image } from 'next/image';
import icon1 from "@/assets/images/boxicon1.png"
import icon2 from "@/assets/images/boxicon2.png"
import icon3 from "@/assets/images/boxicon3.png"
import StatList from './StatList';
import FllowerIcon from "@/assets/images/followersIcon.png"
import LikeIcon from "@/assets/images/likeIcon.png"
import SmileIcon from "@/assets/images/smileIcon.png"
import ProjectIcon from "@/assets/images/followersIcon.png"
import TitleText from './TitleText';

const WorkList = () => {
    return (
        <div className='py-[67px] px-[105px]'>
           
            <TitleText title="Work List" text="We provide the Perfect Solution to your business growth"/>

            <div className='flex justify-between'>
                <Workbox title="Grow Your Business" iconImg={icon1} />
                <Workbox title="Improve brand loyalty" iconImg={icon2} />
                <Workbox title="Improve Business Model" iconImg={icon3} />

            </div>

            <div className='flex pt-44'>
                <StatList icon={FllowerIcon} Heading="240452" text="Followers" />
                <StatList icon={LikeIcon} Heading="6300" text="Solved Problems" />
                <StatList icon={SmileIcon} Heading="25000" text="Happy Customers" />
                <StatList icon={ProjectIcon} Heading="360452" text="Projects" />
            </div>


        </div>
    )
}

export default WorkList