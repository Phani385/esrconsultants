import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";
import { HiMiniBars3 } from "react-icons/hi2";
import Dropdown from "./Dropdown";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Our Team",
    route: "/team",
  },
  {
    name: "Our Services",
    route: "/services",
  },
  {
    name: "Contact Us",
    route: "/contact",
  },
];

const dropdownLists = [
  {
    mainTitle: "Startup",
    items: [
      [
        {
          title: "Proprietorship",
          path: "/proprietorship",
        },
        {
          title: "Partnership",
          path: "/partnership",
        },
        {
          title: "One Person Company",
          path: "/one-person-company",
        },
        {
          title: "Limited Liability Company",
          path: "/limited-liability-company",
        },
        {
          title: "Check Company or LLP Name Avalibility",
          path: "/check-company-or-llp-name-avalibility",
        },
      ],
      [
        {
          title: "Section 8 company",
          path: "/section-8-company",
        },
        {
          title: "Nidhi Company",
          path: "/nidhi-company",
        },
        {
          title: "Indian Subsidary",
          path: "/indian-subsidary",
        },
      ],
    ],
  },
  {
    mainTitle: "Registrations",
    items: [
      [
        {
          title: "Digital Signature",
          path: "/digital-signature",
        },
        {
          title: "Udyam Registration",
          path: "/udyam-registration",
        },
        {
          title: "Startup India Registration",
          path: "/startup-india-registration",
        },
        {
          title: "FSSAI Registration",
          path: "/fssai-registration",
        },
        {
          title: "Professional Tax",
          path: "/professional-tax",
        },
      ],
      [
        {
          title: "Barcode Registration",
          path: "/barcode-registration",
        },
        {
          title: "RCMC Registration",
          path: "/rcmc-registration",
        },
        {
          title: "Import Certificate",
          path: "/import-certificate",
        },
      ],
    ],
  },
  {
    mainTitle: "Trademark",
    items: [
      [
        {
          title: "Trademark Registration",
          path: "/",
        },
        {
          title: "Trademark Objection",
          path: "/trademark-objection",
        },
        {
          title: "Trademark Opposition",
          path: "/trademark-opposition",
        },
        {
          title: "Find Trademark for Over 8000 goods and services",
          path: "/find-trademark",
        },
      ],
      [
        {
          title: "Trademark Renewal",
          path: "/trademark-renwal",
        },
        {
          title: "Copyright Registration",
          path: "/copyright-registration",
        },
        {
          title: "Design Registration",
          path: "/design-registration",
        },
        {
          title: "Patent Registration",
          path: "/patent-registration",
        },
      ],
    ],
  },
  {
    mainTitle: "Goods & Service Tax",
    items: [
      [
        {
          title: "GST Registration",
          path: "/gst-registration",
        },
        {
          title: "GST Return Filing",
          path: "/gst-return-filing",
        },
        {
          title: "GST LUT Filing",
          path: "/gst-lut-filing",
        },
        {
          title: "GST Registration Cancellation",
          path: "/gst-registration-cancellation",
        },
        {
          title: "GST Annual Return",
          path: "/gst-annual-return",
        },
      ],
      [
        {
          title: "GST Invoicing",
          path: "/gst-invoicing",
        },
        {
          title: "GST eInvoicing",
          path: "/gst-einvoicing",
        },
        {
          title: "Input Tax Credit",
          path: "/input-tax-credit",
        },
        {
          title: "GST Software for Accountants",
          path: "/",
        },
      ],
    ],
  },
  {
    mainTitle: "Income Tax",
    items: [
      [
        {
          title: "Personal Tax Filing",
          path: "",
        },
        {
          title: "Business Tax Filing",
          path: "",
        },
        {
          title: "Tax Notice",
          path: "",
        },
        {
          title: "TDS Filing",
          path: "",
        },
      ],
      [
        {
          title: "ITR-1 Return",
          path: "",
        },
        {
          title: "ITR-2 Return",
          path: "",
        },
        {
          title: "ITR-3 Return",
          path: "",
        },
        {
          title: "ITR-4 Return",
          path: "",
        },
      ],
      [
        {
          title: "ITR 5 Return",
          path: "",
        },
        {
          title: "ITR 6 Return",
          path: "",
        },
        {
          title: "ITR 7 Return",
          path: "",
        },
        {
          title: "Form 16",
          path: "",
        },
      ],
    ],
  },
  {
    mainTitle: "Compliance",
    styles: "dropdown-end",
    items: [
      [
        {
          title: "Proprietorship",
          path: "/proprietorship",
        },
        {
          title: "Partnership",
          path: "/partnership",
        },
        {
          title: "Company",
          path: "",
        },
        {
          title: "LLP Compliance",
          path: "",
        },
        {
          title: "Payroll",
          path: "",
        },
      ],
      [
        {
          title: "PF Registration",
          path: "",
        },
        {
          title: "PF Return Filing",
          path: "",
        },
        {
          title: "ESI Registration",
          path: "",
        },
        {
          title: "Share Transfer",
          path: "",
        },
        {
          title: "DIR-3 KYC",
          path: "",
        },
      ],
      [
        {
          title: "Add Directors",
          path: "",
        },
        {
          title: "Remove Directors",
          path: "",
        },
        {
          title: "Registered Office Change",
          path: "",
        },
        {
          title: "Increase Authorized Capital",
          path: "",
        },
        {
          title: "Winding Up of Company",
          path: "",
        },
      ],
    ],
  },
  {
    mainTitle: "Loans",
    items: [
      [
        {
          title: "Personal Loans",
          path: "",
        },
        {
          title: "Business Loans",
          path: "",
        },
        {
          title: "OPL",
          path: "",
        },
      ],
    ],
  },
  {
    mainTitle: "Insurance",
    items: [
      [
        {
          title: "Health Insurance",
          path: "",
        },
        {
          title: "Life Insurance",
          path: "",
        },
        {
          title: "Motor Insurance",
          path: "",
        },
      ],
    ],
  },
];

const Navbar = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  return (
    <>
      <nav className="border-b-2 border-b-primaryColor">
        <div className="lg:px-[5%] xl:px-[10%] mx-auto px-4 flex justify-between items-center gap-10 pb-4">
          <Link to="/">
            <div className="gap-2 flex items-center">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1714631670/esrConsultancy_gwk7f0.png"
                className="w-[40px] lg:w-[60px]"
              />
              <h2 className="text-sm text-[#5e2119] lg:text-2xl font-bold py-5 mt-4">
                ESR Corpotate Consultants LLP
              </h2>
            </div>
          </Link>
          <ul className="hidden lg:flex justify-between items-center flex-1 mt-4 lg:max-w-[50%] min-[1440px]:max-w-[30%]">
            {navLinks.map((link) => (
              <NavLink linkDetails={link} key={link.name} />
            ))}
          </ul>
          <div
            className="btn lg:hidden bg-transparent mt-4"
            onClick={() => {
              setShowMobileDropdown(!showMobileDropdown);
            }}
          >
            <HiMiniBars3 />
          </div>
        </div>

        <div className="hidden lg:block px-[5%] xl:px-[10%] mx-auto py-3 bg-primaryColor">
          <ul className="text-white flex w-[90%] justify-between xl:w-[90%] min-[1440px]:w-[80%]">
            {dropdownLists.map((dropdownList) => (
              <Dropdown
                dropdownList={dropdownList}
                key={dropdownList.mainTitle}
              />
            ))}
          </ul>
        </div>
      </nav>
      {showMobileDropdown && (
        <div className="lg:hidden">
          <ul className="flex flex-col m-2 gap-y-2">
            {navLinks.map((link) => (
              <NavLink linkDetails={link} key={link.name} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
