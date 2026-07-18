import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
  ];

  const rightLinks = [
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-rose-50/80 backdrop-blur-md border-b border-rose-100/50 shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Liens gauche */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            {leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-md font-bold tracking-wide transition-colors duration-300 ${scrolled
                  ? 'text-rose-600 hover:text-rose-800'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo central */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div className={`w-12 h-12 rounded-xl overflow-hidden shadow-sm transition-all duration-500 ${scrolled ? 'border border-rose-200' : 'border border-white/20'
              }`}>
              <img
                src="/logo-wedding.png"
                alt="JoyfullWedding Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-light tracking-tight">
              <span className={`font-serif transition-colors duration-300 ${scrolled ? 'text-rose-600' : 'text-white'
                }`}>Joyfull</span>
              <span className={`transition-colors duration-300 ${scrolled ? 'text-rose-400' : 'text-white/90'
                }`}>Wedding</span>
            </span>
          </a>

          {/* Liens droite + bouton */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-bold tracking-wide transition-colors duration-300 ${scrolled
                  ? 'text-rose-600 hover:text-rose-800'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="ml-3 px-6 py-2 font-bold bg-rose-500 text-white rounded-xl text-sm font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
            >
              Réserver
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'hover:bg-rose-100' : 'hover:bg-white/10'
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 transition-colors ${scrolled ? 'text-rose-600' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors ${scrolled ? 'text-rose-600' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 backdrop-blur-lg transition-all duration-500 ${scrolled
            ? 'border-t border-rose-100 bg-rose-50/95'
            : 'border-t border-white/10 bg-black/90'
            }`}>
            <div className="flex flex-col gap-3 px-4">
              {[...leftLinks, ...rightLinks].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg transition-all duration-300 text-center ${scrolled
                    ? 'text-rose-600 hover:text-rose-800 hover:bg-rose-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={scrollToContact}
                className="mt-2 px-6 py-3 bg-rose-500 text-white rounded-xl text-sm font-medium hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-500/25"
              >
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