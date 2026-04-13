/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Brands from './components/Brands';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
