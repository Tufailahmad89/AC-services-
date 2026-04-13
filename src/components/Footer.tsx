export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <span className="text-white font-bold text-xl">PB</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Pasa Bhai</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all AC service and repair needs in Gurgaon. 
              Quality work, expert technicians, and customer satisfaction guaranteed.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Service Area</h4>
            <p className="text-gray-400 leading-relaxed">
              Serving all major areas in Gurgaon including Badshapur, Sohna Road, Golf Course Road, and Cyber City.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Pasa Bhai AC Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
