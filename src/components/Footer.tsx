import { Sparkles, Heart, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGV', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-light tracking-tight text-white">
                <span className="font-serif text-rose-500">Wedding</span>
                <span className="text-white">Agency</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed font-light">
              L'art de créer des moments inoubliables. Depuis plus de 12 ans, 
              nous orchestrons les plus beaux jours de votre vie.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-rose-500 transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-0.5" />
                <span className="text-sm font-light">Paris, France</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rose-500 mt-0.5" />
                <span className="text-sm font-light">+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-rose-500 mt-0.5" />
                <span className="text-sm font-light">contact@weddingagency.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-sm font-light mb-4">
              Recevez nos inspirations et conseils pour votre mariage.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light">
            © {currentYear} Wedding Agency. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light hover:text-rose-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm font-light flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> à Paris
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
