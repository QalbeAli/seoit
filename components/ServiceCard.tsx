import { FC } from "react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    
    <div className="flex items-start space-x-4 p-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
