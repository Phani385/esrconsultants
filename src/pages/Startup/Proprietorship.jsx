import Footer from "../../components/Footer";
import ListPoint from "../../components/ListPoint";
import Navbar from "../../components/Navbar";
import "../../index.css";

const advantagesList = [
  {
    heading: "Easy registration",
    description:
      "Sole proprietorship does not have any formal incorporation or dissolution process - as its the same as the Proprietor. However, to operate a business, the proprietor may have to obtain certain registrations and licenses to be compliant with the laws and regulations of India.",
  },
  {
    heading: "Lower compliance",
    description:
      "As most proprietorship are only registered with government departments like Income Tax & GST, the compliance burden will be lower. On the other hand, entities like LLP or Company are registered with the Ministry of Corporate Affairs and have to file various statutory returns and be audited by a Chartered Accountant each year.",
  },
  {
    heading: "Simplicity",
    description:
      " As there are no partners, shareholders, or directors, the proprietor can easily operate this business with minimal documents and consent requirements. Hence, this type of business structure is best suited for very small businesses.",
  },
  {
    heading: "Business decision",
    description:
      "In a proprietorship, the business owner takes all business decisions. There is no consent or approval required from any other person. Hence, a proprietor can normally take quick decisions regarding his business affairs.",
  },
  {
    heading: "Complete control",
    description:
      "As sole proprietorship is owned only by the proprietor. He/she has complete control over the assets, revenue, expenses and all business operations.",
  },
];

const disadvantagesList = [
  {
    heading: "Funding",
    description:
      "This type of business structure relies solely on one persons savings, borrowings and credit history. As there are no other persons are involved in this type of business structure, raising funds from banks will be very hard. Raising equity funds will not be possible - as this type of business entity does not allow for profit sharing or shareholding.",
  },
  {
    heading: "Personal liability",
    description:
      "If a proprietor is unable to pay business loans or taxes, in a proprietorship - the personal assets of the business owner can be attached or encumbered. Hence, in this type of business structure - the proprietor will be held personally liable until all the liabilities are extinguished.",
  },
  {
    heading: "Business continuity",
    description:
      "In case of death or disability of the business owner, the sole proprietorship will be automatically dissolved. Hence, there is will be no business continuity.",
  },
  {
    heading: "Growth",
    description:
      "A proprietorship has various restrictions in terms of fundraising, liability and business continuity. Hence, only very small businesses that are in the unorganized sector operate as proprietorship.",
  },
  {
    heading: "Unincorporated business",
    description:
      "Sole proprietorship are unincorporated businesses. Hence, there is no centralized database available to see if a sole proprietorship is active or inactive. Thus, sole proprietorship entities are mostly classified as unorganized business.",
  },
];

const Proprietorship = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 py-10 px-10 lg:px-0 lg:w-[80%] mx-auto">
        <h1 className="text-2xl lg:text-3xl text-center font-semibold mb-3">
          Proprietorship Registration
        </h1>
        <div className="flex gap-10">
          <div className="lg:w-[80%]">
            <p className="text-justify text-gray-500 mb-3">
              Sole proprietorship is one of the oldest and easiest Business
              Structure to start in India. A proprietorship is a type of
              business that is owned, managed, and controlled by one person -
              who is the proprietor. As the proprietorship and proprietor are
              one and the same, it is very easy to start and there are very
              minimal compliance requirements.
            </p>
            <p className="text-justify text-gray-500 mb-3">
              As the proprietor and the business are one and the same, a
              proprietorship cannot have other partners or shareholders.
              Further, there is no limited liability protection for the
              proprietor from the business activities conducted in the sole
              proprietorship. Hence, this type of business entity is best suited
              for every small businesses with no more than 5 employees.
            </p>
            <p className="text-justify text-gray-500 mb-3">
              IndiaFilings can assist you in registering a Sole Proprietorship,
              a simple and efficient business structure that is ideal for solo
              entrepreneurs. With our expert guidance and streamlined process,
              you can start your proprietorship quickly and hassle-free. Start
              your Sole Proprietorship with us and unlock the potential of your
              business ideas.
            </p>
            <h2 className="text-2xl font-semibold mb-2">
              Proprietorship Registration in India
            </h2>
            <p className="text-justify text-gray-500 mb-3">
              Registering a proprietorship in India follows a unique approach,
              as there isn&apos;t a dedicated government-established
              registration process for this business structure. Instead, a
              proprietorship gains recognition through tax registrations
              mandated by relevant laws and regulations.One pivotal tax
              registration is the GST (Goods and Services Tax) Registration,
              which must be secured under the proprietor&apos;s name to
              formalize the business&apos;s proprietorship status. This
              registration signifies that the proprietor is conducting business
              within the framework of a proprietorship.
            </p>
            <h2 className="text-2xl font-semibold mb-2">
              Essential Licenses and Registrations for Proprietorships
            </h2>
            <p className="text-md text-gray-500">
              To run a proprietorship in India, you need important licenses and
              registrations, including:
            </p>
            <ul className="ml-8 text-gray-500 mb-3">
              <li className="list-disc">
                Get a Permanent Account Number (PAN) and an Aadhaar card for
                your business identification.
              </li>
              <li className="list-disc">
                Register under{" "}
                <a href="https://www.indiafilings.com/udyam-registration">
                  UDYAM
                </a>
                , which recognizes your business as a Micro, Small, or Medium
                Enterprise (MSME) and offers government benefits.
              </li>
              <li className="list-disc">
                If your business exceeds specific thresholds, you must register
                for{" "}
                <a href="https://www.indiafilings.com/gst-registration">
                  Goods and Services Tax (GST)
                </a>{" "}
                to collect and pay GST.
              </li>
              <li>
                Open a separate{" "}
                <a href="https://www.indiafilings.com/banking">bank account</a>{" "}
                for your business to manage finances smoothly.
              </li>
              <li>
                Depending on your business location, register under your
                state&apos;s Shops and Establishment Act to follow local labor
                regulations.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">
              Advantages of Proprietorship
            </h2>
            <ul className="list-none text-gray-500 mb-3">
              {advantagesList.map((item) => (
                <ListPoint
                  heading={item.heading}
                  description={item.description}
                  key={item.heading}
                />
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">
              Disadvantages of Proprietorship
            </h2>
            <ul className="list-none text-gray-500 mb-3">
              {disadvantagesList.map((item) => (
                <ListPoint
                  heading={item.heading}
                  description={item.description}
                  key={item.heading}
                />
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3>Related Guides</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proprietorship;
