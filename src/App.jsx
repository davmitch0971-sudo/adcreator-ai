import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OnboardingPage from "./pages/OnboardingPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import DashboardHomePage from "./pages/DashboardHomePage";
import UserProfilePage from "./pages/UserProfilePage";
import BillingPortalPage from "./pages/BillingPortalPage";
import BrandManagerPage from "./pages/BrandManagerPage";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardHomePage />} />
            <Route path="landing" element={<LandingPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgot" element={<ForgotPasswordPage />} />
            <Route path="onboarding" element={<OnboardingPage />} />
            <Route path="account" element={<AccountSettingsPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="billing-portal" element={<BillingPortalPage />} />
            <Route path="brands" element={<BrandManagerPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
