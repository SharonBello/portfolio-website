import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Home Page Content */}
      <HomePage />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;