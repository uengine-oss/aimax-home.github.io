import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
// import ProblemsSection from '../components/ProblemsSection';
import ProcessgptSection from '../components/ProcessgptSection';
import ProcessSection from '../components/ProcessSection';
// import SuccessSection from '../components/SuccessSection';
import AboutSection from '../components/AboutSection';
// import InsightsSection from '../components/InsightsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ProcessgptSection />
      {/* <ProblemsSection /> */}
      {/* <SuccessSection /> */}
      {/* <InsightsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
