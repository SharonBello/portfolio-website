import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './main.scss';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <Header />

      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} element={route.component} path={route.path} />
          ))}
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
);

export default App;
