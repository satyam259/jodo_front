// src/routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../layout/404";
import LandingPage from "../layout/LandingPage";

// 404 page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
