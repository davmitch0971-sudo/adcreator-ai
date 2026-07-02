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
import ProjectManagerPage from "./pages/ProjectManagerPage";
import AssetLibraryPage from "./pages/AssetLibraryPage";
import AnalyticsDashboardPage from "./pages/AnalyticsDashboardPage";
import AIVideoEditorPage from "./pages/AIVideoEditorPage";
import TemplateBuilderPage from "./pages/TemplateBuilderPage";
import TeamCollaborationPage from "./pages/TeamCollaborationPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsAdminPage from "./pages/SettingsAdminPage";
import SupportCenterPage from "./pages/SupportCenterPage";
import StatusPage from "./pages/StatusPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import AutomationCenterPage from "./pages/AutomationCenterPage";
import AIScriptGeneratorPage from "./pages/AIScriptGeneratorPage";
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
            <Route path="projects" element={<ProjectManagerPage />} />
            <Route path="assets" element={<AssetLibraryPage />} />
            <Route path="analytics" element={<AnalyticsDashboardPage />} />
            <Route path="video-editor" element={<AIVideoEditorPage />} />
            <Route path="templates" element={<TemplateBuilderPage />} />
            <Route path="team" element={<TeamCollaborationPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="admin-settings" element={<SettingsAdminPage />} />
            <Route path="support" element={<SupportCenterPage />} />
            <Route path="status" element={<StatusPage />} />
            <Route path="integrations" element={<IntegrationsPage />} />
            <Route path="automation" element={<AutomationCenterPage />} />
            <Route path="ai-script-generator" element={<AIScriptGeneratorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
