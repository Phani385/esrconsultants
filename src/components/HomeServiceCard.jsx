// eslint-disable-next-line react/prop-types
const HomeServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white flex gap-4">
      <div className="flex items-center justify-center h-fit w-[40px]  p-[9px] rounded text-white bg-secondaryColor-500">
        <img width="24" height="24" className="fill-white" src={imageUrl} alt="service icon" />
      </div>
      <div className="service-card-text flex-1">
        <h4 className="text-xl font-semibold text-black mb-2">{title}</h4>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default HomeServiceCard;
