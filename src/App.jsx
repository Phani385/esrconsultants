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
import {
  addDirectors,
  annualCompliance,
  barcodeRegistration,
  businessLoan,
  businessTaxFiling,
  companyAnnualFiling,
  companyRegisteredOffice,
  designRegistration,
  digitalSignatureContent,
  dir3kyc,
  ESIRegistration,
  findTrademark,
  Form16,
  FSSAIRegistration,
  gstAnnualReturn,
  gstEInvoicing,
  gstInvoicing,
  gstLutFiling,
  gstRegistration,
  gstRegistrationCancellation,
  gstReturnFiling,
  healthInsurance,
  importCertificate,
  incomeTaxNotice,
  increaseAuthorizedCapital,
  inputTaxCredit,
  ITR1Filing,
  ITR2Filing,
  ITR3Filing,
  ITR4Filing,
  ITR5Filing,
  ITR6Filing,
  ITR7Filing,
  lifeInsurance,
  motorInsurance,
  overdraftProtectionLoan,
  patentRegistration,
  payroll,
  personalLoan,
  pfRegistration,
  pfReturnFiling,
  professionalTax,
  rcmcRegistration,
  removeDirector,
  shareTransfer,
  startUpIndiaRegistrations,
  trademarkObjection,
  trademarkOpposition,
  trademarkRenewal,
  udyamRegistration,
  windingUpCompany,
} from "../constants";

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
      <Route
        exact
        path="/personal-tax-filing"
        element={<RegistrationSection content={gstAnnualReturn} />}
      />
      <Route
        exact
        path="/business-tax-filing"
        element={<RegistrationSection content={businessTaxFiling} />}
      />
      <Route
        exact
        path="/tax-notice"
        element={<RegistrationSection content={incomeTaxNotice} />}
      />
      <Route
        exact
        path="/tds-filing"
        element={<RegistrationSection content={gstAnnualReturn} />}
      />
      <Route
        exact
        path="/itr-1-return"
        element={<RegistrationSection content={ITR1Filing} />}
      />
      <Route
        exact
        path="/itr-2-return"
        element={<RegistrationSection content={ITR2Filing} />}
      />
      <Route
        exact
        path="/itr-3-return"
        element={<RegistrationSection content={ITR3Filing} />}
      />
      <Route
        exact
        path="/itr-4-return"
        element={<RegistrationSection content={ITR4Filing} />}
      />
      <Route
        exact
        path="/itr-5-return"
        element={<RegistrationSection content={ITR5Filing} />}
      />
      <Route
        exact
        path="/itr-6-return"
        element={<RegistrationSection content={ITR6Filing} />}
      />
      <Route
        exact
        path="/itr-7-return"
        element={<RegistrationSection content={ITR7Filing} />}
      />
      <Route
        exact
        path="/form-16"
        element={<RegistrationSection content={Form16} />}
      />
      <Route
        exact
        path="/company-annual-filing"
        element={<RegistrationSection content={companyAnnualFiling} />}
      />
      <Route
        exact
        path="/llp-compliance"
        element={<RegistrationSection content={annualCompliance} />}
      />
      <Route
        exact
        path="/payroll"
        element={<RegistrationSection content={payroll} />}
      />
      <Route
        exact
        path="/pf-registration"
        element={<RegistrationSection content={pfRegistration} />}
      />
      <Route
        exact
        path="/pf-return-filing"
        element={<RegistrationSection content={pfReturnFiling} />}
      />
      <Route
        exact
        path="/esi-registration"
        element={<RegistrationSection content={ESIRegistration} />}
      />
      <Route
        exact
        path="/share-transfer"
        element={<RegistrationSection content={shareTransfer} />}
      />
      <Route
        exact
        path="/add-director"
        element={<RegistrationSection content={addDirectors} />}
      />
      <Route
        exact
        path="/remove-director"
        element={<RegistrationSection content={removeDirector} />}
      />
      <Route
        exact
        path="/remove-director"
        element={<RegistrationSection content={removeDirector} />}
      />
      <Route
        exact
        path="/dir-3-kyc"
        element={<RegistrationSection content={dir3kyc} />}
      />
      <Route
        exact
        path="/registered-office-change"
        element={<RegistrationSection content={companyRegisteredOffice} />}
      />
      <Route
        exact
        path="/registered-office-change"
        element={<RegistrationSection content={increaseAuthorizedCapital} />}
      />
      <Route
        exact
        path="/increase-authorized-capital"
        element={<RegistrationSection content={increaseAuthorizedCapital} />}
      />
      <Route
        exact
        path="/winding-up-company"
        element={<RegistrationSection content={windingUpCompany} />}
      />
      <Route
        exact
        path="/personal-loan"
        element={<RegistrationSection content={personalLoan} />}
      />
      <Route
        exact
        path="/business-loan"
        element={<RegistrationSection content={businessLoan} />}
      />
      <Route
        exact
        path="/opl"
        element={<RegistrationSection content={overdraftProtectionLoan} />}
      />
      <Route
        exact
        path="/health-insurance"
        element={<RegistrationSection content={healthInsurance} />}
      />
      <Route
        exact
        path="/life-insurance"
        element={<RegistrationSection content={lifeInsurance} />}
      />
      <Route
        exact
        path="/motor-insurance"
        element={<RegistrationSection content={motorInsurance} />}
      />
    </Routes>
  );
};

export default App;
