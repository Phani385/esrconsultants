/* eslint-disable react/prop-types */

const ListPoint = ({ heading, description }) => {
  return (
    <li className="list-none mb-2 text-gray-500">
      <span className="font-semibold text-black">{heading}:</span> {description}
    </li>
  );
};


export default ListPoint;
