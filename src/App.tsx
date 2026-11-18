import { useState } from 'react';
import About from '@/components/About';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import Navbar from '@/components/Navbar';
import Rooms from '@/components/Rooms';

function App() {
  const [selectedSuite, setSelectedSuite] = useState('');

  return (
    <div className="min-h-screen bg-sand-50 text-ink-900 antialiased selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Welcome Story */}
        <About />
        {/* 3. Rooms and Suites */}
        <Rooms onBookSuite={setSelectedSuite} />
        {/* 4. Experiences */}
        <Experiences />
        {/* 5. Gallery */}
        <Gallery />
        {/* 6. Location */}
        <Location />
        {/* 7. Booking Request Widget */}
        <Booking selectedSuite={selectedSuite} onSuiteChange={setSelectedSuite} />
        {/* 8. Contact Form & Direct Details */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
