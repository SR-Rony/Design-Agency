
import Image from "next/image";

const ProjectBox = ({img,text,title}) => {
    return (
        <div>

            <Image
                alt="Google"
                width={287}
                height={188}
                src={img}
            />
            <p className=' font-normal text-sm pt-3 pb-2'>{text}</p>
            <h5 className=' font-bold text-lg pb-8 w-[263px]'>{title}</h5>

        </div>
    )
}

export default ProjectBox