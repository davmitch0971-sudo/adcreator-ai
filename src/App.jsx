import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
// (your other imports stay the same)

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<LandingPage />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <!-- KEEP ALL YOUR OTHER ROUTES HERE -->
        </Route>
      </Routes>
    </Router>
  );
}
