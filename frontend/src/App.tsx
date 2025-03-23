import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

// Lazy load other pages
const DetectPage = React.lazy(() => import('./pages/DetectPage'));
const LogsPage = React.lazy(() => import('./pages/LogsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <React.Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detect" element={<DetectPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
