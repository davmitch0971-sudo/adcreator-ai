import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import SuperGenerator from "./pages/SuperGenerator";
import ScriptGenerator from "./pages/ScriptGenerator";
import VideoGenerator from "./pages/VideoGenerator";
import ImagePromptGenerator from "./pages/ImagePromptGenerator";
import CaptionGenerator from "./pages/CaptionGenerator";
import TemplateBuilder from "./pages/TemplateBuilder";
import PostingPlanGenerator from "./pages/PostingPlanGenerator";
import Projects from "./pages/Projects";
import BrandAnalytics from "./pages/BrandAnalytics";
import Brands from "./pages/Brands";
import AiVideoEditor from "./pages/AiVideoEditor";
import SceneToVideo from "./pages/SceneToVideo";
import AiVoiceLab from "./pages/AiVoiceLab";
import MotionGraphics from "./pages/MotionGraphics";
import VideoExport from "./pages/VideoExport";
import AiAssetStudio from "./pages/AiAssetStudio";
import BrandMemoryEngine from "./pages/BrandMemoryEngine";
import TemplateEngine2 from "./pages/TemplateEngine2";
import AiAutoStoryboard from "./pages/AiAutoStoryboard";
import AiAutoShotlist from "./pages/AiAutoShotlist";
import AiAutoCameraMoves from "./pages/AiAutoCameraMoves";
import AiAutoTransitions from "./pages/AiAutoTransitions";
import AiAutoEdit from "./pages/AiAutoEdit";
import AiAutoColorGrade from "./pages/AiAutoColorGrade";
import AiAutoSoundDesign from "./pages/AiAutoSoundDesign";
import AiAutoVfx from "./pages/AiAutoVfx";
import AiAutoVoiceSync from "./pages/AiAutoVoiceSync";
import AiAutoMusic from "./pages/AiAutoMusic";
import AiBillingEngine from "./pages/AiBillingEngine";
import AiSubscriptionManager from "./pages/AiSubscriptionManager";
import AiUserAnalytics from "./pages/AiUserAnalytics";
import AiCrm from "./pages/AiCrm";
import AiTeamCollaboration from "./pages/AiTeamCollaboration";
import AiDistributionSuite from "./pages/AiDistributionSuite";
import AiEngagementOptimizer from "./pages/AiEngagementOptimizer";
import AiAudienceBuilder from "./pages/AiAudienceBuilder";
import AiMonetizationPlanner from "./pages/AiMonetizationPlanner";
import AiPartnershipsEngine from "./pages/AiPartnershipsEngine";
import AiCommunityBuilder from "./pages/AiCommunityBuilder";
import AiEnterpriseSuite from "./pages/AiEnterpriseSuite";
import AiTaskOrchestrator from "./pages/AiTaskOrchestrator";
import AiRenderPipelineManager from "./pages/AiRenderPipelineManager";
import AiAssetStorageEngine from "./pages/AiAssetStorageEngine";
import AiApiGateway from "./pages/AiApiGateway";
import AiTenantRuntime from "./pages/AiTenantRuntime";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<SuperGenerator />} />
            <Route path="scripts" element={<ScriptGenerator />} />
            <Route path="videos" element={<VideoGenerator />} />
            <Route path="images" element={<ImagePromptGenerator />} />
            <Route path="captions" element={<CaptionGenerator />} />
            <Route path="templates" element={<TemplateBuilder />} />
            <Route path="posting" element={<PostingPlanGenerator />} />
            <Route path="projects" element={<Projects />} />
            <Route path="analytics" element={<BrandAnalytics />} />
            <Route path="brands" element={<Brands />} />
            <Route path="video-editor" element={<AiVideoEditor />} />
            <Route path="scene-video" element={<SceneToVideo />} />
            <Route path="voice-lab" element={<AiVoiceLab />} />
            <Route path="motion-graphics" element={<MotionGraphics />} />
            <Route path="video-export" element={<VideoExport />} />
            <Route path="asset-studio" element={<AiAssetStudio />} />
            <Route path="brand-memory" element={<BrandMemoryEngine />} />
            <Route path="template-engine-2" element={<TemplateEngine2 />} />
            <Route path="auto-storyboard" element={<AiAutoStoryboard />} />
            <Route path="auto-shotlist" element={<AiAutoShotlist />} />
            <Route path="auto-camera-moves" element={<AiAutoCameraMoves />} />
            <Route path="auto-transitions" element={<AiAutoTransitions />} />
            <Route path="auto-edit" element={<AiAutoEdit />} />
            <Route path="auto-color-grade" element={<AiAutoColorGrade />} />
            <Route path="auto-sound-design" element={<AiAutoSoundDesign />} />
            <Route path="auto-vfx" element={<AiAutoVfx />} />
            <Route path="auto-voice-sync" element={<AiAutoVoiceSync />} />
            <Route path="auto-music" element={<AiAutoMusic />} />
            <Route path="billing" element={<AiBillingEngine />} />
            <Route path="subscription" element={<AiSubscriptionManager />} />
            <Route path="user-analytics" element={<AiUserAnalytics />} />
            <Route path="crm" element={<AiCrm />} />
            <Route path="team" element={<AiTeamCollaboration />} />
            <Route path="distribution" element={<AiDistributionSuite />} />
            <Route path="engagement" element={<AiEngagementOptimizer />} />
            <Route path="audience" element={<AiAudienceBuilder />} />
            <Route path="monetization" element={<AiMonetizationPlanner />} />
            <Route path="partnerships" element={<AiPartnershipsEngine />} />
            <Route path="community" element={<AiCommunityBuilder />} />
            <Route path="enterprise" element={<AiEnterpriseSuite />} />
            <Route path="tasks" element={<AiTaskOrchestrator />} />
            <Route path="render-pipeline" element={<AiRenderPipelineManager />} />
            <Route path="asset-storage" element={<AiAssetStorageEngine />} />
            <Route path="api-gateway" element={<AiApiGateway />} />
            <Route path="tenant-runtime" element={<AiTenantRuntime />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
