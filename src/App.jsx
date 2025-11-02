import React, { useCallback, useMemo, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import Tabs, { TABS } from './components/Tabs';
import Panels from './components/Panels';
import Footer from './components/Footer';

const App = () => {
  const [active, setActive] = useState('shop');
  const contentRef = useRef(null);

  const order = useMemo(() => TABS.map(t => t.key), []);

  const goTo = useCallback((key) => {
    setActive(key);
    // Smooth scroll into the content when user clicks explore
    requestAnimationFrame(() => {
      const target = contentRef.current;
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  const handleExplore = useCallback(() => {
    goTo('shop');
  }, [goTo]);

  const handleSwipe = useCallback((direction) => {
    const idx = order.indexOf(active);
    if (direction === 'left' && idx < order.length - 1) setActive(order[idx + 1]);
    if (direction === 'right' && idx > 0) setActive(order[idx - 1]);
  }, [active, order]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <HeroSection onExplore={handleExplore} />

      <div ref={contentRef} />

      <Tabs active={active} onChange={goTo} />

      <main className="max-w-7xl mx-auto px-4">
        <Panels active={active} onSwipe={handleSwipe} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
