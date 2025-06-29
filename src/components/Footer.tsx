import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S5</span>
              </div>
              <span className="font-display text-xl font-bold">Simpli5</span>
            </div>
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              Creating exceptional architectural experiences that blend innovation with timeless design principles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="font-body text-neutral-400 text-sm">Residential Architecture</li>
              <li className="font-body text-neutral-400 text-sm">Commercial Design</li>
              <li className="font-body text-neutral-400 text-sm">Interior Design</li>
              <li className="font-body text-neutral-400 text-sm">Renovation & Restoration</li>
              <li className="font-body text-neutral-400 text-sm">Consultation Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-1 flex-shrink-0" />
                <p className="font-body text-neutral-400 text-sm">
                  123 Design Street<br />
                  Mysore, Karnataka 570001<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <p className="font-body text-neutral-400 text-sm">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <p className="font-body text-neutral-400 text-sm">hello@simpli5design.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-neutral-400 text-sm">
              © 2024 Simpli5 Design Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;