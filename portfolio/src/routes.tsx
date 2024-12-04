import HomePage from './pages/HomePage';
import About from './pages/About';
import InstructionalDesignPortfolio from './pages/instructionalDesignPortfolio/instructionalDesignPortfolio';
import EducationalGames from './pages/instructionalDesignPortfolio/EducationalGames';
import ELearningProjects from './pages/instructionalDesignPortfolio/ELearningProjects';
import Infographs from './pages/instructionalDesignPortfolio/Inforgraphs';
import MentorTraining from './pages/instructionalDesignPortfolio/MentorTraining';
import TechnicalOnboarding from './pages/instructionalDesignPortfolio/TechnicalOnboarding';
import Resume from './pages/Resume';

const AppRoutes = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: '/resume',
        component: <Resume />
    },
    {
        path: '/instructional-design-portfolio',
        component: <InstructionalDesignPortfolio />
    },
    {
        path: '/instructional-design-portfolio/educational-games',
        component: <EducationalGames />
    },
    {
        path: '/instructional-design-portfolio/e-learning-projects',
        component: <ELearningProjects />
    },
    {
        path: '/instructional-design-portfolio/infographs',
        component: <Infographs />
    },
    {
        path: '/instructional-design-portfolio/mentor-training',
        component: <MentorTraining />
    },
    {
        path: '/instructional-design-portfolio/technical-onboarding',
        component: <TechnicalOnboarding />
    },
    {
        path: '/about',
        component: <About />
    }
];

export default AppRoutes;




