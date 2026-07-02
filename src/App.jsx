... (all previous imports)
import AISEOContentGeneratorPage from "./pages/AISEOContentGeneratorPage";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            ... (previous routes)
            <Route path="ai-seo-content-generator" element={<AISEOContentGeneratorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
