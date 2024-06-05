import React from 'react'
import TitleText from './TitleText';
import ServiceBox from './ServiceBox';
import ServiceOne from "@/assets/images/service1.png"
import ServiceTwo from "@/assets/images/service2.png"
import ServiceThree from "@/assets/images/service3.png"
import ServiceFour from "@/assets/images/service4.png"

const AllService = () => {
    return (
        <div className='pt-[67px] pl-[105px]'>
            <div className=' pr-20'>
                <TitleText title="Our All Services" text="We Provide BestWeb design services" />
            </div>
            <div className='flex'>
                <ServiceBox img={ServiceOne} />
                <ServiceBox img={ServiceTwo} />
            </div>
            <div className='flex mt-12'>
                <ServiceBox img={ServiceThree} />
                <ServiceBox img={ServiceFour} />
            </div>
        </div>
    )
}

export default AllService