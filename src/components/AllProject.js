import React from 'react'
import TitleText from './TitleText'
import AllProjectBox from './AllProjectBox'
import ProjectOne from "@/assets/images/allProject1.png"
import ProjectTwo from "@/assets/images/allProject2.png"
import ProjectThree from "@/assets/images/allProject3.png"
import ProjectFour from "@/assets/images/allProject4.png"
import ProjectFive from "@/assets/images/allProject5.png"
import ProjectSix from "@/assets/images/allProject6.png"

const AllProject = () => {
  return (
    <div className='pl-[105px] pt-[66px]'>
      <div className='pr-10 mb-4'>
        <TitleText title="All Project" text="Better Agency/SEO Solution At Your Fingertips" />
      </div>
      <div className=' flex'>
        <AllProjectBox img={ProjectOne} />
        <AllProjectBox img={ProjectTwo} />
      </div>
      <div className=' flex py-8'>
        <AllProjectBox img={ProjectThree} />
        <AllProjectBox img={ProjectFour} />
      </div>
      <div className=' flex'>
        <AllProjectBox img={ProjectFive} />
        <AllProjectBox img={ProjectSix} />
      </div>
    </div>
  )
}



export default AllProject