import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const OurTeam = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 py-10 lg:w-[90%] mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-center text-secondaryColor-500">
          Our Team
        </h1>
        <div className="flex flex-col justify-center items-center w-[90%] mx-auto lg:w-full lg:flex-row gap-5 mb-3">
          <div className="w-full min-w-[30%]">
            <img src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-bold">CA Gaurav Jain</h2>
            <p className="text-gray-500 text-md mt-3 lg:w-[90%]">
              Gaurav Jain is the Founder, Managing partner and ESR CORPORATE
              CONSULTANTS LLP Gaurav Jain oversees ESR corporate and investment
              operation as well as service individual clients. Gaurav Jain is a
              member of the Institute of Chartered Accountants of India (ICAI)
              since 2013 and also be a member of institute of Company Secretary
              of India (ICSI). He received Master in Commerce form the Agra
              College and Completed his Law at the Faculty of Law Agra
              concentrating in Business Law at the University of Agra . Gaurav
              Jain also received a certificate in certified Concurrent Auditor
              of Bank form ICAI . Gaurav has worked with professionally managed
              corporate in capacity as a consultants He has experience of
              handling corporate affairs in different areas for over the years.
              He is expert in the field of Litigation in income taxes. he has
              helped many organizations to set up business in India and
              operating it smoothly.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] mx-auto lg:w-full lg:flex-row gap-5 mb-3">
          <div className="w-full min-w-[30%] ">
            <img src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-bold">CA Jitu Jain</h2>
            <p className="text-gray-500 text-md mt-3 lg:w-[90%]">
              CA Jitu is a highly skilled and accomplished Charted Accountants
              with expertise in indirect Taxes. Jitu jain oversees the
              compliance and dat to day supervision of the firm. He is a partner
              of the ESR CORPORATE CONSULTANTS and the Indirect Tax Expertise
              Committee. He is a Commerce Graduate from University of Calcutta.
              he. has been handling of various clients and leading a hard
              working and dedicated tax litigation team. He has been rendering
              Consultancy and opinion in various matters of Goods and service
              Tax.
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center text-secondaryColor-500">
          Additional Team Members
        </h1>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:w-[80%] mx-auto">
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CA Navratan</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]">
                CA Navratan is a Chartered Accountant of Institute of Chartered
                Accountants of India with more than 4 years of experience He has
                worked in a many big corporate Houses. He will look into the
                matter of & assurance services.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CA Rana Pratap</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]">
                CA Rana Pratap, is a Chartered Accountants of Institute of
                Chartered Accountants of India with more than 4 years of
                experience He will look into the matter related to M&A
                Strategies and Objectives he will also look onto the matter of
                MCA Legal & Taxation Compliances.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CA Manoj Tyagi</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]">
                CA Manoj Tyagi is a Chartered Accountants of Institute of India
                with more than 6 years of experience. He has work in a many big
                MNC's like Accenture. He Will Look the matter of payroll
                Statutory Compliance, processing Report & Analytics For Various
                company in our Firm.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CS Aarti</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]">
                CS Aarti is an associate member of the Institute of company
                Secretaries of (ICSI) with over 4 years of professional
                Experience. She holds expertise in the field of Regulatory
                Compliance matter related to the Societies & trust Registration.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CA Naman Jain</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]"></p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CA Muskan Jain</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]"></p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">CA Chavi</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]"></p>
            </div>
          </li>

          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Shubam Sharma</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]"></p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-5">
            <div className="w-[200px] h-[200px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">Dr. Saurav Jain</h2>
              <p className="text-gray-500 text-md mt-3 lg:w-[90%]"></p>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default OurTeam;
