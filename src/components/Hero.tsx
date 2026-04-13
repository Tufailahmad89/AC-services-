import { motion } from 'motion/react';
import { ShieldCheck, Clock, Users, Snowflake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-50 rounded-full blur-[120px]" 
        />
      </div>

      {/* Floating Snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: Math.random() * 100 + "%", opacity: 0 }}
            animate={{ 
              y: "110vh", 
              opacity: [0, 1, 1, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute text-blue-200/30"
          >
            <Snowflake size={Math.random() * 30 + 15} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 border border-blue-100 rounded-full backdrop-blur-sm shadow-sm">
              <Snowflake size={14} className="animate-spin-slow" />
              Gurgaon's Premier AC Specialists
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Best AC Service <br />
              <span className="text-blue-600">In Gurgaon</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-normal">
              "Garmi ki chutti, AC ki thandak" — We provide the most reliable and affordable AC repair and maintenance. 
              Trusted by thousands of families for a cooler home.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-24"
          >
            <motion.a 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="tel:9813909489" 
              className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 flex items-center gap-3 uppercase tracking-wider"
            >
              Book Service
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="#services" 
              className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-xl transition-all shadow-xl uppercase tracking-wider"
            >
              Our Expertise
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Best Quality", desc: "Original parts and expert service" },
              { icon: Clock, title: "Fast Service", desc: "Quick response across Gurgaon" },
              { icon: Users, title: "Expert Team", desc: "Experienced and verified technicians" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (i * 0.1) }}
                whileHover={{ y: -12 }}
                className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:bg-blue-700 transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-normal text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
