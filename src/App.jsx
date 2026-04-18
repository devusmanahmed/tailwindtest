import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutWhoWeArePage from './pages/about/AboutWhoWeArePage';
import AboutClientReviewsPage from './pages/about/AboutClientReviewsPage';
import AboutServersTechnologyPage from './pages/about/AboutServersTechnologyPage';
import AboutFaqPage from './pages/about/AboutFaqPage';
import ServicesWordPressHostingPage from './pages/services/ServicesWordPressHostingPage';
import ServicesWebDesignPage from './pages/services/ServicesWebDesignPage';
import ServicesWebDevelopmentPage from './pages/services/ServicesWebDevelopmentPage';
import ServicesWebsiteFixPage from './pages/services/ServicesWebsiteFixPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/who-we-are" element={<AboutWhoWeArePage />} />
        <Route path="/about/client-reviews" element={<AboutClientReviewsPage />} />
        <Route path="/about/servers-technology" element={<AboutServersTechnologyPage />} />
        <Route path="/about/faqs" element={<AboutFaqPage />} />
        <Route path="/services/wordpress-hosting" element={<ServicesWordPressHostingPage />} />
        <Route path="/services/web-design" element={<ServicesWebDesignPage />} />
        <Route path="/services/web-development" element={<ServicesWebDevelopmentPage />} />
        <Route path="/services/website-fix" element={<ServicesWebsiteFixPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
