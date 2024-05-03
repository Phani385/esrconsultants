import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import QueriesPage from "./pages/QueriesPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<ServicesPage />} />
      <Route exact path="/contact" element={<ContactUsPage />} />
      <Route exact path="/queries" element={<QueriesPage />} />
    </Routes>
  );
};

export default App;
