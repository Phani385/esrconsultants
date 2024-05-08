/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Dropdown = ({ dropdownList }) => {
  return (
    <div
      className={`dropdown dropdown-hover ${
        dropdownList.styles !== undefined ? dropdownList.styles : null
      }`}
    >
      <div tabIndex={0} role="button" className="font-semibold">
        {dropdownList.mainTitle}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[10] menu p-2 shadow bg-base-100 text-black rounded-box flex flex-row flex-nowrap"
      >
        {dropdownList.items.map((list) => {
          return (
            <ul className="flex flex-col flex-wrap" key={list}>
              {list.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} style={{ whiteSpace: "nowrap" }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
