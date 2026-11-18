import { useState } from 'react';
import About from '@/components/About';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import MobileBookingPill from '@/components/MobileBookingPill';
import Navbar from '@/components/Navbar';
import PanoramaBreak from '@/components/PanoramaBreak';
import Rooms from '@/components/Rooms';
import SoundscapePlayer from '@/components/SoundscapePlayer';
import Testimonials from '@/components/Testimonials';

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
        {/* Cinematic Panorama Break (Full-Bleed Divider) */}
        <PanoramaBreak />
        {/* 4. Experiences */}
        <Experiences />
        {/* 5. Guest Accolades & Testimonials */}
        <Testimonials />
        {/* 6. Gallery */}
        <Gallery />
        {/* 7. Location */}
        <Location />
        {/* 8. Booking Request Widget */}
        <Booking selectedSuite={selectedSuite} onSuiteChange={setSelectedSuite} />
        {/* 9. Contact Form & Direct Details */}
        <Contact />
      </main>
      <Footer />
      {/* Mobile Sticky Booking Pill */}
      <MobileBookingPill />
      {/* Coastal Soundscape Ambient Player */}
      <SoundscapePlayer />
    </div>
  );
}

export default App;
