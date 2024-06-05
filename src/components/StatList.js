import Image from 'next/image';


const StatList = ({ icon, Heading, text }) => {
    return (
        <div className='shadow-xl rounded-xl w-[288px] h-[290px] flex flex-col items-center justify-center mx-3.5'>
            <Image
                alt="Google"
                width={100}
                height={100}
                src={icon}
            />
            <h4 className='font-semibold text-3xl pt-6 pb-1'>{Heading}</h4>
            <p className='font-medium text-base'>{text}</p>
        </div>
    )
}

export default StatList