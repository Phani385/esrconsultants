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
