import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './main.scss';

const App: React.FC = () => (
  <Router>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      <main style={{ flexGrow: 1 }}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} element={route.component} path={route.path} />
          ))}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  </Router>
);

export default App;
