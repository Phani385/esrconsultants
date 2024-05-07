import { Link, redirect, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import HomeHeroSection from "../../components/HomeHeroSection";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";
import "./index.css";
import { HomeTeamCard } from "../../components/HomeTeamCard";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <HomeHeroSection />
      </div>
      <section className="w-[80%] mx-auto flex flex-col gap-20">
        <ServicesSection />
        <section className="mb-12 flex flex-col justify-center items-center lg:flex-row gap-6 mx-auto">
          <div className="w-[80%] rounded-lg flex-1">
            <div className="h-full rounded-lg bg-black">
              <video
                controls
                loop
                autoPlay
                muted
                className="w-[100%] h-[100%] rounded-lg"
              >
                <source src="/ourstory.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%]">
            <h3 className="text-xl lg:text-2xl font-semibold">Our Story</h3>
            <p className="text-gray-500  lg:text-lg lg:w-[500px] xl:w-[700px] text-justify">
              We are on a mission to make Entrepreneurship easier and affordable
              to millions. ESR Corpotate Consultants provides a simple and
              intuitive platform for setting up a business and managing
              compliance.
              <br /> We started our journey in 2014 and bootstrapped the
              business till 2022, serving over 1 lakh businesses. In 2022, we
              raised funding from institutional investors to further our
              mission.
            </p>
          </div>
        </section>
       


        <div className="relative">
          <Link to="/contact">
            <img
              src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1714980076/CTA_f9nb30.png"
              className="mb-20 mx-auto"
            />
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-secondaryColor-500">
            Our Team
          </h2>
          <p className="text-center text-lg text-gray-500 lg:w-[80%] my-2 mx-auto">
            Our team has extensive experience in multiple domains across diverse
            industries. The organization is backed by several qualified
            Chartered Accountants, Company Secretaries, Cost Accountants and
            Lawyers.
          </p>
          <ul className="flex flex-col lg:flex-row gap-10 lg:w-[60%] mx-auto my-3">
            <HomeTeamCard
              imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
              name="CA Gaurav Jain"
              description=" Gaurav Jain is the Founder, Managing partner and ESR CORPORATE
                CONSULTANTS LLP Gaurav Jain oversees ESR corporate and
                investment operation as well as service individual clients.
                Gaurav Jain is a member of the Institute of Chartered
                Accountants of India (ICAI) since 2013 and also be a member of
                institute of Company Secretary of India (ICSI)..."
            />
            <HomeTeamCard
              imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1690629203/profilePic_zktmsn.jpg"
              name="CA Jitu Jain"
              description="CA Jitu is a highly skilled and accomplished Charted Accountants with expertise in indirect Taxes. Jitu jain oversees the compliance and dat to day supervision of the firm. He is a partner of the ESR CORPORATE CONSULTANTS and the Indirect Tax Expertise Committee...."
            />
          </ul>
          <div className="flex flex-col gap-4 lg:flex-row justify-center">
            <button
              className="btn border-none text-white   bg-secondaryColor-500 hover:bg-secondaryColor-600 mx-auto w-full md:w-[60%]  lg:w-fit lg:mx-0"
              onClick={() => {
                 navigate("/team");
              }}
            >
              View Team
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
