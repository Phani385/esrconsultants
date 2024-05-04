import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HomeHeroSection from "../../components/HomeHeroSection";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeroSection />
      <section className="w-[80%] mx-auto">
        <ServicesSection />
        <div className="relative">
          <Link to="/contact">
            <img
              src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1714829094/Group_1_kh6qlc.png"
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
