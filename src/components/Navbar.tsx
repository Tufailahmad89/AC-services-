import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200"
            >
              <span className="text-white font-black text-2xl">PB</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 tracking-tighter leading-none">Pasa Bhai</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">AC Services</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9813909489" 
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-wider"
            >
              <Phone size={18} fill="currentColor" />
              <span className="hidden sm:inline">Call Now</span>
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}
