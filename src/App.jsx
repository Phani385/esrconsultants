import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Proprietorship from "./pages/Startup/Proprietorship";
import OurTeam from "./pages/TeamPage";
import Partnership from "./pages/Startup/Partnership";
import OnePersonCompany from "./pages/Startup/OnePersonCompany";
import LLPRegistration from "./pages/Startup/LLPRegistration";
import CheckCompany from "./pages/Startup/CheckCompany";
import IndianSubsidary from "./pages/Startup/IndianSubsidary";
import Section8 from "./pages/Startup/Section8";
import NidhiCompany from "./pages/Startup/NidhiCompany";

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
      <Route
        exact
        path="/limited-liability-company"
        element={<LLPRegistration />}
      />
      <Route
        exact
        path="/check-company-or-llp-name-avalibility"
        element={<CheckCompany />}
      />
      <Route exact path="/section-8-company" element={<Section8 />} />
      <Route exact path="/nidhi-company" element={<NidhiCompany />} />
      <Route exact path="/indian-subsidary" element={<IndianSubsidary />} />
    </Routes>
  );
};

export default App;
