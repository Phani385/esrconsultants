/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

export const MainHeading = ({ content }) => (
  <h1 className="text-2xl lg:text-3xl text-center font-semibold mb-3">
    {content}
  </h1>
);

export const Paragraph = ({ content }) => (
  <p className="text-justify text-gray-500 mb-3">{content}</p>
);

export const SubHeading = ({ content }) => (
  <h2 className="text-xl lg:text-2xl font-semibold font-sans mb-2">{content}</h2>
);

export const ListPoint = ({ heading, description, showIcon = false }) => {
  return (
    <li className="list-none flex gap-2 ml-3 my-3 items-start">
      {showIcon && (
        <img
          width="22"
          height="22"
          src="https://img.icons8.com/material-outlined/24/2250FC/checkmark--v1.png"
          alt="checkmark--v1"
        />
      )}
      <p className="text-gray-500">
        <span className="font-semibold text-black">{heading}:</span>{" "}
        {description}
      </p>
    </li>
  );
};

export const CheckItem = ({ point }) => {
  return (
    <li className="flex gap-1 mb-2 ml-2 items-start">
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-outlined/24/2250FC/checkmark--v1.png"
        alt="checkmark--v1"
      />
      <p className="text-gray-500">{point}</p>
    </li>
  );
};

export const FooterTopLink = ({ title, url }) => (
  <li>
    <Link to={url} className="text-secondaryColor-500 flex gap-2 items-center">
      <LuExternalLink />
      {title}
    </Link>
  </li>
);

export const SideHeading = ({ content }) => (
  <h1 className="font-semibold text-black text-lg my-3">{content}</h1>
);
