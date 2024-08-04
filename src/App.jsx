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
import RegistrationSection from "./pages/registrations/page";
import { barcodeRegistration, designRegistration, digitalSignatureContent, findTrademark, FSSAIRegistration, gstAnnualReturn, gstEInvoicing, gstInvoicing, gstLutFiling, gstRegistration, gstRegistrationCancellation, gstReturnFiling, importCertificate, inputTaxCredit, patentRegistration, professionalTax, rcmcRegistration, startUpIndiaRegistrations, trademarkObjection, trademarkOpposition, trademarkRenewal, udyamRegistration } from "../constants";



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
      <Route
        exact
        path="/digital-signature"
        element={<RegistrationSection content={digitalSignatureContent} />}
      />
       <Route
        exact
        path="/udyam-registration"
        element={<RegistrationSection content={udyamRegistration} />}
      />
       <Route
        exact
        path="/startup-india-registration"
        element={<RegistrationSection content={startUpIndiaRegistrations} />}
      />
       <Route
        exact
        path="/fssai-registration"
        element={<RegistrationSection content={FSSAIRegistration} />}
      />
      <Route
        exact
        path="/professional-tax"
        element={<RegistrationSection content={professionalTax} />}
      />
      <Route
        exact
        path="/barcode-registration"
        element={<RegistrationSection content={barcodeRegistration} />}
      />
      <Route
        exact
        path="/rcmc-registration"
        element={<RegistrationSection content={rcmcRegistration} />}
      />
      <Route
        exact
        path="/import-certificate"
        element={<RegistrationSection content={importCertificate} />}
      />
      <Route
        exact
        path="/trademark-registration"
        element={<RegistrationSection content={importCertificate} />}
      />
      <Route
        exact
        path="/trademark-objection"
        element={<RegistrationSection content={trademarkObjection} />}
      />
      <Route
        exact
        path="/trademark-opposition"
        element={<RegistrationSection content={trademarkOpposition} />}
      />
       <Route
        exact
        path="/find-trademark"
        element={<RegistrationSection content={findTrademark} />}
      />
      <Route
        exact
        path="/trademark-renwal"
        element={<RegistrationSection content={trademarkRenewal} />}
      />
      <Route
        exact
        path="/copyright-registration"
        element={<RegistrationSection content={findTrademark} />}
      />
      <Route
        exact
        path="/design-registration"
        element={<RegistrationSection content={designRegistration} />}
      />
      <Route
        exact
        path="/patent-registration"
        element={<RegistrationSection content={patentRegistration} />}
      />
      <Route
        exact
        path="/gst-registration"
        element={<RegistrationSection content={gstRegistration} />}
      />
      <Route
        exact
        path="/gst-return-filing"
        element={<RegistrationSection content={gstReturnFiling} />}
      />
      <Route
        exact
        path="/gst-lut-filing"
        element={<RegistrationSection content={gstLutFiling} />}
      />
      <Route
        exact
        path="/gst-registration-cancellation"
        element={<RegistrationSection content={gstRegistrationCancellation} />}
      />
       <Route
        exact
        path="/gst-annual-return"
        element={<RegistrationSection content={gstAnnualReturn} />}
      />
      <Route
        exact
        path="/gst-invoicing"
        element={<RegistrationSection content={gstInvoicing} />}
      />
       <Route
        exact
        path="/gst-einvoicing"
        element={<RegistrationSection content={gstEInvoicing} />}
      />
      <Route
        exact
        path="/input-tax-credit"
        element={<RegistrationSection content={inputTaxCredit} />}
      />
      <Route
        exact
        path="/gst-software-for-accountants"
        element={<RegistrationSection content={gstAnnualReturn} />}
      />
    </Routes>
  );
};

export default App;
