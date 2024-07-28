import React from "react";

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
    <div className="container mx-auto px-4 max-w-5xl py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-md p-4">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="rounded-xl bg-gray-200 w-full object-cover mb-4"
            />
            <div className="text-center">
              <div className="font-bold text-lg mb-1">{member.name}</div>
              <div className="text-gray-600">{member.role}</div>
              <div className="text-gray-600">{member.company}</div>
              <div className="text-gray-600 mt-2">{member.joinDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
