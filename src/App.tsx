import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import FinanceSolution from './pages/FinanceSolution';
import ManufacturingSolution from './pages/ManufacturingSolution';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview_page.html" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/finance" element={<FinanceSolution />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingSolution />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
