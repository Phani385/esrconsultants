const ServiceCard = ({ title, description, iconUrl, subItems }) => {
  return (
    <li className="flex gap-4 lg:w-[80%] mx-auto my-8">
      <div className="flex items-center justify-center h-fit w-[40px]  p-[9px] rounded text-white bg-secondaryColor-500">
        <img src={iconUrl} height="24" width="24" alt="service icon" />
      </div>
      <div className="flex-1 text-left">
        <h4 className="text-xl font-semibold text-black">{title}</h4>
        <p className="text-gray-500 mb-3">{description}</p>
        <ul className="pl-6  text-gray-500">
          {subItems.map((item) => (
            <li className="list-disc" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

ServiceCard.propTypes = {
  title: String,
  description: String,
  iconUrl: String,
  subItems: Array,
};

export default ServiceCard;
