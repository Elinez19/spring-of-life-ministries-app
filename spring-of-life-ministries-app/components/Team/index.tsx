import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Adveen Desuza",
    designation: "UI Designer",
    image: "/images/team/boy1.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Jezmin uniya",
    designation: "Product Designer",
    image: "/images/mentor/boy1.svg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Andrieo Gloree",
    designation: "App Developer",
    image: "/images/mentor/boy2.svg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Jackie Sanders",
    designation: "Content Writer",
    image: "/images/mentor/boy3.svg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="bg-gray-1 dark:bg-dark-2 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
