import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Customers } from './pages/Customers';
import { Projects } from './pages/Projects';
import { Pricing } from './pages/Pricing';
import { Designer } from './pages/Designer';
import { Settings } from './pages/Settings';
import { useStore } from './store/useStore';

export function App() {
  const darkMode = useStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-900`}>
        <Sidebar />
        <Header />
        <main className="ml-64 pt-16 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;