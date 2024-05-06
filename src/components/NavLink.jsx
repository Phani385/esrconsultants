/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ linkDetails }) => {
  const location = useLocation();

  return (
    <Link to={linkDetails.route}>
      <li
        className={`list-none text-black btn rounded-md flex justify-center items-center ${
          linkDetails.route === location.pathname
            ? "bg-primaryColor px-3 py-2 rounded-md text-white hover:bg-primaryColor"
            : "bg-transparent border-0"
        }`}
      >
        {linkDetails.name}
      </li>
    </Link>
  );
};

export default NavLink;
