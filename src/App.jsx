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
import AIStoryboardPage from "./pages/AIStoryboardPage";
import AIVoiceoverGeneratorPage from "./pages/AIVoiceoverGeneratorPage";
import AIImageGeneratorPage from "./pages/AIImageGeneratorPage";
import AIThumbnailGeneratorPage from "./pages/AIThumbnailGeneratorPage";
import AIAdCreativeGeneratorPage from "./pages/AIAdCreativeGeneratorPage";
import AISocialPostGeneratorPage from "./pages/AISocialPostGeneratorPage";
import AIProductPhotoEnhancerPage from "./pages/AIProductPhotoEnhancerPage";
import AIBrandStyleGeneratorPage from "./pages/AIBrandStyleGeneratorPage";
import AILandingPageGeneratorPage from "./pages/AILandingPageGeneratorPage";
import AICarouselGeneratorPage from "./pages/AICarouselGeneratorPage";
import AIAdCopyOptimizerPage from "./pages/AIAdCopyOptimizerPage";
import AISEOContentGeneratorPage from "./pages/AISEOContentGeneratorPage";
import AIFullCampaignBuilderPage from "./pages/AIFullCampaignBuilderPage";
import AIAudienceTargetingEnginePage from "./pages/AIAudienceTargetingEnginePage";
import AICompetitorAnalyzerPage from "./pages/AICompetitorAnalyzerPage";
import AIEmailSequenceGeneratorPage from "./pages/AIEmailSequenceGeneratorPage";
import AIBrandVoiceGeneratorPage from "./pages/AIBrandVoiceGeneratorPage";
import AICreativeBriefGeneratorPage from "./pages/AICreativeBriefGeneratorPage";
import AIVideoAdGeneratorPage from "./pages/AIVideoAdGeneratorPage";
import AIOfferBuilderPage from "./pages/AIOfferBuilderPage";
import AIUGCScriptGeneratorPage from "./pages/AIUGCScriptGeneratorPage";
import AIAdVariationsEnginePage from "./pages/AIAdVariationsEnginePage";
import AISalesPageGeneratorPage from "./pages/AISalesPageGeneratorPage";
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
            <Route path="ai-storyboard" element={<AIStoryboardPage />} />
            <Route path="ai-voiceover" element={<AIVoiceoverGeneratorPage />} />
            <Route path="ai-image-generator" element={<AIImageGeneratorPage />} />
            <Route path="ai-thumbnail-generator" element={<AIThumbnailGeneratorPage />} />
            <Route path="ai-ad-creative-generator" element={<AIAdCreativeGeneratorPage />} />
            <Route path="ai-social-post-generator" element={<AISocialPostGeneratorPage />} />
            <Route path="ai-product-photo-enhancer" element={<AIProductPhotoEnhancerPage />} />
            <Route path="ai-brand-style-generator" element={<AIBrandStyleGeneratorPage />} />
            <Route path="ai-landing-page-generator" element={<AILandingPageGeneratorPage />} />
            <Route path="ai-carousel-generator" element={<AICarouselGeneratorPage />} />
            <Route path="ai-ad-copy-optimizer" element={<AIAdCopyOptimizerPage />} />
            <Route path="ai-seo-content-generator" element={<AISEOContentGeneratorPage />} />
            <Route path="ai-full-campaign-builder" element={<AIFullCampaignBuilderPage />} />
            <Route path="ai-audience-targeting-engine" element={<AIAudienceTargetingEnginePage />} />
            <Route path="ai-competitor-analyzer" element={<AICompetitorAnalyzerPage />} />
            <Route path="ai-email-sequence-generator" element={<AIEmailSequenceGeneratorPage />} />
            <Route path="ai-brand-voice-generator" element={<AIBrandVoiceGeneratorPage />} />
            <Route path="ai-creative-brief-generator" element={<AICreativeBriefGeneratorPage />} />
            <Route path="ai-video-ad-generator" element={<AIVideoAdGeneratorPage />} />
            <Route path="ai-offer-builder" element={<AIOfferBuilderPage />} />
            <Route path="ai-ugc-script-generator" element={<AIUGCScriptGeneratorPage />} />
            <Route path="ai-ad-variations-engine" element={<AIAdVariationsEnginePage />} />
            <Route path="ai-sales-page-generator" element={<AISalesPageGeneratorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
