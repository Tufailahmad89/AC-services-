import { useState, FormEvent } from 'react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Repair'
  });

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello Pasa Bhai AC Services! %0A%0AMy Name: ${formData.name}%0APhone: ${formData.phone}%0AService Needed: ${formData.service}%0A%0AI would like to book a service. Please contact me.`;
    const whatsappUrl = `https://wa.me/919813909489?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Contact <span className="text-blue-600">Pasa Bhai</span>
            </h2>
            <p className="text-slate-600 mb-10 text-lg font-normal leading-relaxed">
              "Aapki thandak, hamari zimmedari" — Call us anytime for the best AC service in Gurgaon. 
              We are available 7 days a week to serve you.
            </p>

            <div className="space-y-8">
              <motion.a 
                whileHover={{ x: 10 }}
                href="tel:9813909489"
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-1">Call Us Directly</h4>
                  <p className="text-gray-600 text-lg font-medium group-hover:text-blue-600 transition-colors">+91 9813909489, 9813909451</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ x: 10 }}
                href="https://www.google.com/maps/search/?api=1&query=Radha-Krishna+Mandir+Sohna+Road+Badshapur+Gurgaon"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-1">Visit Our Office</h4>
                  <p className="text-gray-600 text-lg font-medium group-hover:text-blue-600 transition-colors">
                    Radha-Krishna Mandir, Sohna Road,<br />
                    Badshapur, Gurgaon (HR)
                  </p>
                </div>
              </motion.a>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-lg font-medium">Mon - Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl relative"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Book Service</h3>
            <form className="space-y-5" onSubmit={handleWhatsAppRedirect}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white font-normal"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white font-normal"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Service Needed</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white font-normal appearance-none"
                >
                  <option>AC Repair</option>
                  <option>Installation</option>
                  <option>Gas Refill</option>
                  <option>Foam-Jet Service</option>
                  <option>Master Servicing</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 mt-6"
              >
                Book Now
              </motion.button>
            </form>
            <p className="text-center text-slate-400 text-sm mt-6 font-normal">
              We will contact you shortly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
