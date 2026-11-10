import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import FeaturePage from './pages/FeaturePage';
import { FEATURE_PAGES } from './utils/bannerData';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {FEATURE_PAGES.map((page) => (
          <Route key={page.path} path={page.path} element={<FeaturePage title={page.title} blurb={page.blurb} />} />
        ))}
        <Route path="*" element={<FeaturePage title="Page not found" blurb="That page does not exist." />} />
      </Routes>
      <Footer/>
    </>
  );
}
