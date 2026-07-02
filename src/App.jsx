... (all previous imports)
import AIBrandStyleGeneratorPage from "./pages/AIBrandStyleGeneratorPage";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            ... (all previous routes)
            <Route path="ai-brand-style-generator" element={<AIBrandStyleGeneratorPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
