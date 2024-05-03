import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default App;
