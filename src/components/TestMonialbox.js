import Image from 'next/image';


const TestMonialbox = ({img}) => {
    return (
        <div className='w-[392px] h-[440px] rounded-lg shadow-lg px-6 text-center flex flex-col justify-center items-center mr-8'>
            <Image
                className='pt-12'
                alt='dev'
                width={100}
                height={100}
                src={img}
            />
            <p className='font-normal text-base text-[#9D9D9D] pt-10 px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
            <h4 className='font-semibold text-[26px] pt-6 pb-2.5 uppercase'>Alice Bradley</h4>
            <h5 className='font-normal text-base pb-10'>Backend Developer</h5>
        </div>

    )
}

export default TestMonialbox