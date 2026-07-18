import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo avec photo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-200 shadow-sm">
              <img
                src="/logo-wedding.png"
                alt="JoyfullWedding Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-light tracking-tight">
              <span className="font-serif text-rose-500">Joyfull</span>
              <span className="text-gray-900">Wedding</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm text-gray-600 border border-rose-200 rounded-full hover:text-rose-500 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 font-light tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <button className="ml-3 px-6 py-2 bg-rose-500 text-white rounded-full text-sm font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25">
              Réserver
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2.5 text-gray-600 border border-rose-200 rounded-full hover:text-rose-500 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-2 px-6 py-3 bg-rose-500 text-white rounded-full text-sm font-medium hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-500/25">
                Réserver
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;