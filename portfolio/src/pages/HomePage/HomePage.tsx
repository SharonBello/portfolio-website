import React from 'react';
import './HomePage.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioCard from '../../components/PortfolioCard';
import ContactForm from '../../components/ContactForm';
import LessonPlannerBot from '../../components/LessonPlannerBot';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        {/* Sidebar Section */}
        <aside className="sidebar">
          <img
            src="https://via.placeholder.com/150" // Replace with actual profile picture
            alt="Profile"
            className="profile-image"
          />
          <h2>Your Name</h2>
          <p>Instructional Designer</p>
          <button className="message-button">Message</button>

          <div className="work-experience">
            <h3>Work Experience</h3>
            <p>Spring (2021 – Present)</p>
            <button className="show-more">Show more</button>
          </div>

          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </aside>

        {/* Portfolio Section */}
        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            <PortfolioCard
              title="Project 1"
              description="Description of project 1."
              image="https://via.placeholder.com/150"
              link="#"
            />
            <PortfolioCard
              title="Project 2"
              description="Description of project 2."
              image="https://via.placeholder.com/150"
              link="#"
            />
             <LessonPlannerBot />
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact">
          <h2>Contact Me</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
