
import TeamMermberOne from "@/assets/images/teamMember1.png";
import TeamMermberTwo from "@/assets/images/teamMember2.png";
import TeamMermberThree from "@/assets/images/teamMember3.png";
import TitleText from './TitleText';
import TeamBox from './TeamBox';


const TeamMember = () => {
    return (
        <div className='pl-24 pt-16 pb-20'>
            <div className='pr-10'>
                <TitleText title="Our Team Member" text="Check our awesome team members" />
            </div>
            <div className="flex">
               <TeamBox teamMermberPic={TeamMermberOne} name="Devon Lane"/>
               <TeamBox teamMermberPic={TeamMermberTwo} name="Devon Lane"/>
               <TeamBox teamMermberPic={TeamMermberThree} name="Devon Lane"/>
            </div>
        </div>
    )
}

export default TeamMember