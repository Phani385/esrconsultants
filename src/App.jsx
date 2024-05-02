import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
