import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Proprietorship from "./pages/Startup/Proprietorship";
import OurTeam from "./pages/TeamPage";
import Partnership from "./pages/Startup/Partnership";
import OnePersonCompany from "./pages/Startup/OnePersonCompany";
import LLPRegistration from "./pages/Startup/LLPRegistration";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<ServicesPage />} />
      <Route exact path="/contact" element={<ContactUsPage />} />
      <Route exact path="/proprietorship" element={<Proprietorship />} />
      <Route exact path="/team" element={<OurTeam />} />
      <Route exact path="/partnership" element={<Partnership />} />
      <Route exact path="/one-person-company" element={<OnePersonCompany />} />
      <Route exact path="/limited-liability-company" element={<LLPRegistration />} />
    </Routes>
  );
};

export default App;
