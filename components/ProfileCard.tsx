import Image from 'next/image';

type ProfileCardProps = {
  image: string;
  name: string;
  title: string;
  company: string;
  joinedDate: string;
};

const ProfileCard = ({ image, name, title, company, joinedDate }: ProfileCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mx-auto"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-500">{title}</p>
      <p className="text-gray-600 mt-2">{company}</p>
      <hr className="my-4 border-t-2 border-orange-600" />
      <p className="text-gray-500">Joined {joinedDate}</p>
    </div>
  );
};

export default ProfileCard;
