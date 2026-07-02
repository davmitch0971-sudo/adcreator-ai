... (all previous imports)
import AILandingPageGeneratorPage from "./pages/AILandingPageGeneratorPage";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            ... (previous routes)
            <Route path="ai-landing-page-generator" element={<AILandingPageGeneratorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
