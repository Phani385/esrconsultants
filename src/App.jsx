import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import QueriesPage from "./pages/QueriesPage";
import Proprietorship from "./pages/Startup/Proprietorship";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<ServicesPage />} />
      <Route exact path="/contact" element={<ContactUsPage />} />
      <Route exact path="/queries" element={<QueriesPage />} />
      <Route exact path="/proprietorship" element={<Proprietorship />} />
    </Routes>
  );
};

export default App;
