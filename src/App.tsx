import { useState } from 'react';
import About from '@/components/About';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import LocalCulture from '@/components/LocalCulture';
import Location from '@/components/Location';
import Navbar from '@/components/Navbar';
import Rooms from '@/components/Rooms';

function App() {
  const [selectedSuite, setSelectedSuite] = useState('');

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms onBookSuite={setSelectedSuite} />
        <Experiences />
        <LocalCulture />
        <Gallery />
        <Location />
        <Booking selectedSuite={selectedSuite} onSuiteChange={setSelectedSuite} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
