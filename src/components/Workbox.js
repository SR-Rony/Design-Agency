import Image from 'next/image';
import Icon from "../assets/images/boxicon1.png";
import arrowIcon from "../assets/images/arrorIcon.png"

const Workbox = ({ title,iconImg }) => {
    return (
        <div className='pt-20'>
            <Image
                alt="Google"
                width={93}
                height={93}
                src={iconImg}
            />
            <h4 className=' font-semibold text-2xl py-3.5 '>{title}</h4>
            <p className='text-base font-normal pb-8 pr-36'>We help identify the best ways to improve your business</p>
            <button className='flex text-base font-normal px-2.5 py-4'>Learn More
                <Image
                    className='m-1.5'
                    alt="Google"
                    width={16}
                    height={14}
                    src={arrowIcon}
                /> </button>
        </div>
    )
}

export default Workbox