import Image from 'next/image';
import Social from "@/assets/images/social.png";
const TeamBox = ({ teamMermberPic, name }) => {
  return (
    <div className="w-[392px] shadow-lg rounded-lg mx-4 relative">
      <Image alt="BG" width={392} height={387} src={teamMermberPic} />
      <h4 className=" font-semibold text-3xl text-center pb-12 pt-8">{name}</h4>
      <button className=" absolute bottom-32 left-28">
        <Image alt="Social" width={170} height={70} src={Social} />
      </button>
    </div>
  );
};

export default TeamBox;
