import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            R.P. Industry
          </h3>
          <p className="mb-2">
            Your trusted local mill for fresh, chemical-free flour products.
            Serving the community with quality and tradition.
          </p>
          <a
            href="https://maps.app.goo.gl/GArJ5mrLoJy9BbkK8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-3 text-white hover:underline"
          >
            <MapPin className="w-4 h-4" />
            <span>Gazipur, Near Panchkula, Haryana, 134201</span>
          </a>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+916280341384" className="hover:underline">
              +91 62803 41384
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:rpindustries1978@gmail.com"
              className="hover:underline"
            >
              rpindustries1978@gmail.com
            </a>
          </div>

          {/* ̦ */}
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-sm text-gray-400">
        © 2025 R.P. Industry. All rights reserved. | Quality flour products
        since establishment.
      </p>
    </footer>
  );
};

export default Footer;
