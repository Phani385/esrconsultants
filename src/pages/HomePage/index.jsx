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
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Home;
