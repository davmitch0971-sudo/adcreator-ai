import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";

import SuperGenerator from "./pages/SuperGenerator";
import ScriptGenerator from "./pages/ScriptGenerator";
import VideoGenerator from "./pages/VideoGenerator";
import ImagePromptGenerator from "./pages/ImagePromptGenerator";
import CaptionGenerator from "./pages/CaptionGenerator";
import TemplateBuilder from "./pages/TemplateBuilder";
import PostingPlanGenerator from "./pages/PostingPlanGenerator";
import BrandLibrary from "./pages/BrandLibrary";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<SuperGenerator />} />
          <Route path="scripts" element={<ScriptGenerator />} />
          <Route path="videos" element={<VideoGenerator />} />
          <Route path="images" element={<ImagePromptGenerator />} />
          <Route path="captions" element={<CaptionGenerator />} />
          <Route path="templates" element={<TemplateBuilder />} />
          <Route path="posting" element={<PostingPlanGenerator />} />
          <Route path="brands" element={<BrandLibrary />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
