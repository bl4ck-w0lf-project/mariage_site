import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@weddingagency.com', link: 'mailto:contact@weddingagency.com' },
    { icon: Phone, label: 'Téléphone', value: '+33 6 12 34 56 78', link: 'tel:+33612345678' },
    { icon: MapPin, label: 'Adresse', value: 'Paris, France', link: '#' },
    { icon: Clock, label: 'Horaires', value: 'Lun - Sam : 9h - 20h', link: '#' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mt-4">
            Commençons à
            <span className="block font-serif text-rose-500 mt-2">écrire votre histoire</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6">
            Une question ? Un projet ? Contactez-nous, nous serons ravis de vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulaire */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none"
                  placeholder="Parlez-nous de votre projet..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25 flex items-center justify-center gap-3 group"
              >
                <span>Envoyer le message</span>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Informations */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-rose-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                      <info.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="font-medium text-gray-900">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-rose-200">✦</span>
                  <span>12 ans d'expérience dans l'organisation de mariages</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-rose-200">✦</span>
                  <span>Une approche personnalisée et sur mesure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-rose-200">✦</span>
                  <span>Un réseau de partenaires d'exception</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-rose-200">✦</span>
                  <span>98% de couples entièrement satisfaits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
