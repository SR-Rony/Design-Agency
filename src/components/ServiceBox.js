import Image from 'next/image'
import React from 'react'

const ServiceBox = ({img}) => {
    return (
        <div className=' w-5/12	shadow-lg rounded-lg mr-8'>
            <h4 className=' px-9 font-semibold text-[26px] uppercase'>Build & Launch without problems</h4>
            <p className=' font-normal text-base text-[#9D9D9D] pl-9 pr-5 pt-5 pb-14'>Increase your team’s productivity and save time with a bot that answers and fields customer inquiries</p>
            <Image
                alt='service'
                width={538}
                height={447}
                src={img}
            />
        </div>
    )
}

export default ServiceBox