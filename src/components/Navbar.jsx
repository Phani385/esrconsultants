import NavLink from "../components/NavLink";

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
  {
    name: "Have a Query",
    route: "/queries",
  },
];

const startupDropdown = [
  "Proprietorship",
  "Partnership",
  "One Person Company",
  "Limited Liability Company",
  "Check Company or LLP Name Avalibility",
  "Section 8 company",
  "Nidhi Company",
  "Indian Subsidary",
];

const Navbar = () => {
  return (
    <nav className="border-b-2 border-b-primaryColor">
      <div className="lg:px-[5%] xl:px-[10%] mx-auto px-4 flex justify-between items-center gap-10 pb-4">
        <div className="gap-2 flex items-center">
          <img
            src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1714631670/esrConsultancy_gwk7f0.png"
            className="w-[40px] lg:w-[60px]"
          />
          <h2 className="text-lg text-[#5e2119] lg:text-2xl font-bold py-5 mt-4">
            ESR Corpotate Consultants LLP
          </h2>
        </div>
        <ul className="hidden lg:flex justify-between items-center flex-1 mt-4 lg:max-w-[50%] min-[1440px]:max-w-[40%]">
          {navLinks.map((link) => (
            <NavLink linkDetails={link} key={link.name} />
          ))}
        </ul>
      </div>
      <div className="hidden lg:block px-[5%] xl:px-[10%] mx-auto py-3 bg-primaryColor">
        <ul className="text-white flex w-[80%] justify-between xl:w-[70%] min-[1440px]:w-[60%]">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="font-semibold">
              Startup
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <div>
                {startupDropdown.map((name) => (
                  <li key={name}>
                    <a href="/proprietorship">{name}</a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <li className="font-semibold">Registration</li>
          <li className="font-semibold">Trademark</li>
          <li className="font-semibold">Goods & Service Tax</li>
          <li className="font-semibold">Income tax</li>
          <li className="font-semibold">Compliance</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
