import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Correct import
import HomePage from './pages/HomePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

// Wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} /> {/* Homepage at root */}
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/category/:catName" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unmatched routes to homepage */}
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    // Wait for Pendo to be available, then initialize
    const initializePendo = () => {
      if (window.pendo) {
        window.pendo.initialize({
          visitor: {
            id: 'demo-visitor-123',
            email: 'fron1973@gustr.com',
            full_name: 'Demo User',
            role: 'demo-user',
          },
          account: {
            id: 'demo-account-456',
            name: 'News App Demo',
            is_paying: false,
            planLevel: 'free',
            creationDate: new Date().toISOString(),
          },
        });
      } else {
        // If Pendo isn't loaded yet, try again in 100ms
        setTimeout(initializePendo, 100);
      }
    };

    initializePendo();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Nav />
        <main className="flex-grow container mx-auto px-6 py-10 bg-transparent">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;