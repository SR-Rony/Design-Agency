import Image from 'next/image'
import React from 'react'
import ProjectOne from "@/assets/images/allProject1.png"

const AllProjectBox = ({ img }) => {
    return (
        <div className='w-[604px] h-[604px] mr-8 flex flex-col justify-center items-center shadow-lg rounded-xl text-center'>
            <Image
                alt='project'
                width={544}
                height={477}
                src={img}
            />
            <h4 className='uppercase font-semibold text-[26px] pt-7'>Lorem ipsum dolor sit consectutar</h4>
        </div>

    )
}

export default AllProjectBox