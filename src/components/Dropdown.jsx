/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdownList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`dropdown ${isOpen ? "dropdown-open" : ""} ${
        dropdownList.styles !== undefined ? dropdownList.styles : ""
      }`}
      ref={dropdownRef}
    >
      <div
        tabIndex={0}
        role="button"
        className="font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {dropdownList.mainTitle}
      </div>
      {isOpen && (
        <ul
          className="dropdown-content z-[10] menu p-2 shadow bg-base-100 text-black rounded-box flex flex-row flex-nowrap"
        >
          {dropdownList.items.map((list, index) => (
            <ul className="flex flex-col flex-wrap" key={index}>
              {list.map((item) => (
                <li key={item.title}>
                  <Link to={item.path} style={{ whiteSpace: "nowrap" }} onClick={handleLinkClick}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;