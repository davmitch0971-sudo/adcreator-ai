... (all previous imports)
import AICarouselGeneratorPage from "./pages/AICarouselGeneratorPage";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            ... (previous routes)
            <Route path="ai-carousel-generator" element={<AICarouselGeneratorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
