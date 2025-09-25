/* eslint-disable react/prop-types */
import React from "react";

export const HomeTeamCard = ({ imageUrl, name, description }) => {
  return (
    <li className="w-[50%] mx-auto ">
      <img src={imageUrl} className="h-[300px] w-full rounded-md " />
      <div className="mt-3">
        <h3 className="text-2xl font-bold text-secondaryColor-500">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
};
