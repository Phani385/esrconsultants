import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HomeHeroSection from "../../components/HomeHeroSection";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";
import "./index.css";

const Home = () => {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <HomeHeroSection />
      </div>
      <section className="w-[80%] mx-auto">
        <ServicesSection />
        <section className="mb-12 flex flex-col justify-center items-center lg:flex-row gap-6 mx-auto">
          <div className="w-[80%] rounded-lg flex-1">
            <div className="h-full rounded-lg bg-black">
              <video controls loop autoPlay muted className="w-[100%] h-[100%] rounded-lg">
                <source src="/ourstory.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%]">
            <h3 className="text-xl lg:text-2xl font-semibold">Our Story</h3>
            <p className="text-gray-500  lg:text-lg lg:w-[500px] xl:w-[700px] text-justify">
              We are on a mission to make Entrepreneurship easier and affordable
              to millions. IndiaFilings provides a simple and intuitive platform
              for setting up a business and managing compliance.
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
      </section>
      <Footer />
    </div>
  );
};

export default Home;
