import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@everafterevents.com', link: 'mailto:contact@everafterevents.com' },
    { icon: Phone, label: 'Téléphone', value: '+229 01 74 85 63 41', link: 'tel:+2290174856341' },
    { icon: MapPin, label: 'Adresse', value: 'Porto-Novo, Bénin', link: '#' },
    { icon: Clock, label: 'Horaires', value: 'Lundi à Samedi : 08h - 21h', link: '#' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler un envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);

      // Réinitialiser le formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });

      // Fermer automatiquement le toast après 6 secondes
      setTimeout(() => {
        setShowToast(false);
      }, 6000);
    }, 2000);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <section id="contact" className="py-28 px-4 bg-gradient-to-b from-white to-rose-50/30 relative">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none"
                  placeholder="+229 01 74 85 63 41"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none"
                  placeholder="Parlez-nous de votre projet..."
                  required
                />
              </div>

              {/* Bouton avec animation d'envoi */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-rose-500 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group ${isSubmitting
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-500/25'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
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

      {/* Toast de notification - POPUP PREMIUM */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 max-w-md w-full animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl shadow-rose-500/20 border border-rose-100 overflow-hidden">
            {/* Barre de progression colorée en haut */}
            <div className="h-1 bg-gradient-to-r from-rose-400 to-rose-500 animate-progress"></div>

            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Icône de succès */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-50 rounded-full flex items-center justify-center animate-bounce-in">
                    <CheckCircle className="w-6 h-6 text-rose-500" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-outfit font-semibold text-gray-900">
                        Message envoyé !!!
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 font-light leading-relaxed">
                        Votre message a bien été reçu. Nous vous répondrons dans les meilleurs délais.
                      </p>
                    </div>
                    <button
                      onClick={closeToast}
                      className="flex-shrink-0 ml-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="Fermer"
                    >
                      <X className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    </button>
                  </div>

                  {/* Petit détail - heure d'envoi */}
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                    <span>✓ Envoyé maintenant</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>Réponse sous 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles pour les animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;