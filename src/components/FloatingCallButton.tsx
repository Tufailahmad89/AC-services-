import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCallButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="tel:9813909489"
      className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
    >
      <Phone size={32} fill="currentColor" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
      </span>
    </motion.a>
  );
}
