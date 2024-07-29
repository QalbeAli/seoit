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
];

const Testimonials: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {teamMembers.map((member, index) => (
          <>
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-lg max-w-xl"
            >
              <div className="flex justify-center items-center p-6 shadow-xl ">
                <div className="text-center">
                  <div className="text-lg font-semibold">{member.name}</div>
                  <div className="text-gray-500">
                    {member.role} <br /> {member.company}
                  </div>
                  <div className="text-gray-400 mt-2">{member.joinDate}</div>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img  
                  src={member.imageUrl}
                  alt={member.name}
                  className="rounded-xl bg-gray-200 w-full h-60 object-cover"
                />
              </div>
              <div className="flex justify-center items-center mx-auto p-6">
                <div className="">
                  <div>
                    Sed commodo, est quis <br /> maximus fermentum, massa <br />
                    ipsum euismod neque, in <br /> varius risus tellus quis
                    lacus.
                    <br /> Sed ac bibendum odio.
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
