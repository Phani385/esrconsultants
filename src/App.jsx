import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Proprietorship from "./pages/Startup/Proprietorship";
import OurTeam from "./pages/TeamPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<ServicesPage />} />
      <Route exact path="/contact" element={<ContactUsPage />} />
      <Route exact path="/proprietorship" element={<Proprietorship />} />
      <Route exact path="/team" element={<OurTeam />} />
    </Routes>
  );
};

export default App;
