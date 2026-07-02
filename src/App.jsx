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
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
