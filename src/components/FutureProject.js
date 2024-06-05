
import ProjectOne from '@/assets/images/project1.png';
import ProjectTwo from '@/assets/images/project2.png';
import ProjectThree from '@/assets/images/project3.png';
import ProjectFour from '@/assets/images/project4.png';
import ProjectFive from '@/assets/images/project5.png';
import Image from "next/image";
import ProjectBox from './ProjectBox';


const FutureProject = () => {
    return (
        <div className="bg-[#F0FDF4] pl-28	pt-16 pb-[84px]	">
            <h5 className=' font-medium text-xl	uppercase text-btnColor'>Featured Project</h5>
            <h4 className="font-semibold text-3xl size-5/12 pr-24 pt-4 pb-16">We provide the Perfect Solution to your business growth</h4>

            <div className=' flex'>
                <div className='pr-7'>
                    <Image
                        alt="Google"
                        width={603}
                        height={531}
                        src={ProjectOne}
                    />
                    <p className=' font-normal text-sm pt-4 pb-2.5'>App Design - June 20, 2022</p>
                    <h5 className=' font-bold text-2xl	'>App Redesign</h5>
                </div>
                <div className='flex'>
                    <div className='pr-7'>
                        <ProjectBox img={ProjectTwo} text="App Design - June 20, 2022" title="Redesign channel website landng page" />
                        <ProjectBox img={ProjectFour} text="App Design - June 20, 2022" title="Redesign channel website landng page" />
                    </div>
                    <div className='pr-7'>
                        <ProjectBox img={ProjectThree} text="App Design - June 20, 2022" title="Redesign channel website landng page" />
                        <ProjectBox img={ProjectFive} text="App Design - June 20, 2022" title="Redesign channel website landng page" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FutureProject