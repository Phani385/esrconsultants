import React from "react";

const ListPoint = ({ heading, description }) => {
  return (
    <li className="list-none mb-2 text-gray-500">
      <span className="font-semibold text-black">{heading}:</span> {description}
    </li>
  );
};

ListPoint.propTypes = {
  heading: String,
  description: String,
};

export default ListPoint;
