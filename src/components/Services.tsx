import { motion } from 'motion/react';
import { Snowflake, Droplets, Wind, Zap, Volume2, ThermometerSnowflake, Settings, PlusCircle, MinusCircle } from 'lucide-react';

const services = [
  { icon: Droplets, title: "AC Water Leakage Repair", desc: "Fixing all types of indoor and outdoor unit leaks." },
  { icon: Zap, title: "Gas Refill & Check-up", desc: "Complete gas charging and pressure testing." },
  { icon: PlusCircle, title: "Split AC Installation", desc: "Professional mounting and piping for split units." },
  { icon: PlusCircle, title: "Window AC Installation", desc: "Secure installation for window AC units." },
  { icon: MinusCircle, title: "Window AC Uninstallation", desc: "Safe removal and packing of window units." },
  { icon: MinusCircle, title: "Split AC Uninstallation", desc: "Proper gas locking and unit removal." },
  { icon: Wind, title: "Split-AC Foam-Jet Service", desc: "Deep cleaning with high-pressure foam jet." },
  { icon: Wind, title: "Window-AC Foam-Jet Service", desc: "Thorough cleaning for window units." },
  { icon: Settings, title: "Split Master Foam-Jet Service", desc: "Premium deep cleaning for maximum efficiency." },
  { icon: ThermometerSnowflake, title: "AC Less/No Cooling Repair", desc: "Diagnosing and fixing cooling performance issues." },
  { icon: Zap, title: "AC Power Issue Repair", desc: "Fixing electrical faults and PCB issues." },
  { icon: Volume2, title: "AC Noise/Smell Repair", desc: "Eliminating unusual sounds and bad odors." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background icon */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.02] pointer-events-none">
        <Snowflake size={800} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Our <span className="text-blue-600">AC Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg font-normal"
          >
            "Thandi hawa, har ghar ki shaan" — We provide professional AC repair, installation, and cleaning services for all brands.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: "#f8fafc",
              }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 group cursor-default"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-slate-500 font-normal leading-relaxed text-base">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
