import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@joyfullwedding.com', link: 'mailto:contact@joyfullwedding.com' },
    { icon: Phone, label: 'Téléphone', value: '+229 01 74 85 63 41', link: 'tel:+2290174856341' },
    { icon: MapPin, label: 'Adresse', value: 'Porto-Novo, Bénin', link: '#' },
    { icon: Clock, label: 'Horaires', value: 'Lundi à Samedi : 08h - 21h', link: '#' },
  ];

  return (
    <section id="contact" className="py-28 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3">
            <span className="text-rose-500 text-lg">✦</span>
            Contact
            <span className="text-rose-500 text-lg">✦</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mt-6">
            Commençons à <span className="text-rose-500 font-semibold">écrire votre histoire</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6 max-w-2xl mx-auto">
            Une question ? Un projet ? Contactez-nous, nous serons ravis de vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Formulaire - occupe 3 colonnes */}
          <div className="lg:col-span-3 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
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
                  placeholder="+229 01 74 85 63 41"
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
                className="w-full px-8 py-4 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25 flex items-center justify-center gap-3 group"
              >
                <span>Envoyer le message</span>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Informations de contact - occupe 2 colonnes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-outfit font-semibold text-gray-900 mb-6">Nos coordonnées</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-rose-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-100 transition-colors flex-shrink-0">
                      <info.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-light">{info.label}</div>
                      <div className="font-medium text-gray-900 text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mini carte avec une touche élégante */}
            <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-rose-100/50 p-8 rounded-3xl border border-rose-200/30">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-300/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-rose-500 text-2xl">✦</span>
                  <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">Disponible</span>
                </div>
                <p className="text-gray-700 font-light text-sm leading-relaxed">
                  Nous répondons à vos messages dans les meilleurs délais. 
                  Votre projet mérite toute notre attention.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;