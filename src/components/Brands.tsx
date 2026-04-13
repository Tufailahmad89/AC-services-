import { motion } from 'motion/react';

const brands = [
  { name: 'Voltas', domain: 'voltas.com' },
  { name: 'LG', domain: 'lg.com' },
  { name: 'Godrej', domain: 'godrej.com' },
  { name: 'Whirlpool', domain: 'whirlpool.com' },
  { name: 'Blue Star', domain: 'bluestarindia.com' },
  { name: 'Samsung', domain: 'samsung.com' },
  { name: 'Daikin', domain: 'daikin.com' },
  { name: 'Hitachi', domain: 'hitachi.com' },
];

export default function Brands() {
  return (
    <section className="py-16 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Brands We Service</h4>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <img 
                src={`https://logo.clearbit.com/${brand.domain}`} 
                alt={brand.name}
                className="h-8 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{brand.name}</span>
            </motion.div>
          ))}
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-2xl md:text-3xl font-black text-blue-600 tracking-tighter italic">& ETC.</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Many More</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
