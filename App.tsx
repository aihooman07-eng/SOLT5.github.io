import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WisdomLab from './components/WisdomLab';
import CareerMap from './components/CareerMap';
import SpecimenRoom from './components/SpecimenRoom';
import SpecimenGallery from './components/SpecimenGallery';
import StudyMaterial from './components/StudyMaterial';
import Interesting from './components/Interesting';
import Footer from './components/Footer';
import FunZone from './components/FunZone';

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'study' | 'interesting'>('home');

  // Simple scroll spy to update active section in nav (only active on home view)
  useEffect(() => {
    if (currentView !== 'home') return;

    const handleScroll = () => {
      const sections = ['hero', 'about', 'career', 'specimen', 'funzone', 'wisdom'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Reset scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  if (currentView === 'gallery') {
    return <SpecimenGallery onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'study') {
    return <StudyMaterial onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'interesting') {
    return <Interesting onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <About />
        <CareerMap />
        <SpecimenRoom onNavigate={setCurrentView} />
        <FunZone />
        <WisdomLab />
      </main>
      <Footer />
    </div>
  );
}

export default App;