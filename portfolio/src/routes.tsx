import HomePage from './pages/HomePage';
import InstructionalDesignPortfolio from './pages/instructionalDesignPortfolio/instructionalDesignPortfolio';
import Resume from './pages/Resume';
import StorylineCourses from './pages/instructionalDesignPortfolio/StorylineCourses';
import Inforgraphs from './pages/instructionalDesignPortfolio/Inforgraphs';
import EducationalGames from './pages/instructionalDesignPortfolio/EducationalGames';
import Presentations from './pages/instructionalDesignPortfolio/Presentations';
import FullCurriculum from './pages/instructionalDesignPortfolio/FullCurriculum';
import Websites from './pages/instructionalDesignPortfolio/Websites';
import Videos from './pages/instructionalDesignPortfolio/Videos';
import TechnicalOnboarding from './pages/instructionalDesignPortfolio/TechnicalOnboarding';
import ELearningProjects from './pages/instructionalDesignPortfolio/ELearningProjects';
import EmbeddedApp from './components/EmbeddedApp/EmbeddedApp';

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
        path: '/instructional-design-portfolio/storyline-courses',
        component: <StorylineCourses />
    },
    {
        path: '/instructional-design-portfolio/infographics',
        component: <Inforgraphs />
    },
    {
        path: '/instructional-design-portfolio/presentations',
        component: <Presentations />
    },
    {
        path: '/instructional-design-portfolio/full-curriculum',
        component: <FullCurriculum />
    },
    {
        path: '/instructional-design-portfolio/websites',
        component: <Websites />
    },
    {
        path: '/instructional-design-portfolio/videos',
        component: <Videos />
    },
    {
        path: '/instructional-design-portfolio/educational-games',
        component: <EducationalGames />
    },
    {
        path: '/instructional-design-portfolio/technical-onboarding',
        component: <TechnicalOnboarding />
    },
    {
        path: '/instructional-design-portfolio/e-learning-projects',
        component: <ELearningProjects />
    },
    // ── EMBEDDED APPS ──────────────────────────────────────────────
    // Any standalone app can be embedded here via the APP_REGISTRY.
    // Link cards to: /instructional-design-portfolio/app/{id}
    // The app opens in an iframe with the portfolio exit bar above it.
    {
        path: '/instructional-design-portfolio/app/:appId',
        component: <EmbeddedApp />
    },
];

export default AppRoutes;