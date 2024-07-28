import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  company: string;
  joinDate: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO of",
    company: "CoolCompany",
    joinDate: "Joined April, 2018",
    imageUrl: "/john.webp",
  },
  {
    name: "Jane Smith",
    role: "Developer at",
    company: "AwesomeCo",
    joinDate: "Joined March, 2019",
    imageUrl: "/john.webp",
  },
  {
    name: "Sarah Doe",
    role: "Social Media",
    company: "Manager",
    joinDate: "Joined May, 2020",
    imageUrl: "/john.webp",
  },
  {
    name: "Steve Grant",
    role: "Freelancer",
    company: "Developer",
    joinDate: "Joined June, 2020",
    imageUrl: "/john.webp",
  },
  {
    name: "Florrie Jacobs",
    role: "Senior Fashion",
    company: "Designer",
    joinDate: "Joined August, 2020",
    imageUrl: "/john.webp",
  },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-x-4">
        {teamMembers.map((member) => (
          <div className="border border-white border-4xl shadow-lg p-2">
              <img
                src={member.imageUrl}
                alt={member.imageUrl}
                className="rounded-xl bg-[#E2E8F0]"
              />
            <div className="flex flex-col justify-center items-center text-center py-4">
              <div className="font-bold p-1">John Doe</div>
              <div className="text-[#718096] p-1">CEO Of</div>
              <div className="text-[#718096] p-1">CoolCompany</div>
              <div className="text-[#718096]">Joined April, 2018</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
