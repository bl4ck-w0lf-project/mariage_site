import { Sparkles, Camera, Flower2, Music, UtensilsCrossed, MapPin, MessageCircle, Calendar, Heart, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Lieux d\'Exception',
      description: 'Des sites prestigieux sélectionnés pour leur beauté et leur charme.',
      number: '01',
      isFeatured: true
      
    },
    {
      icon: Sparkles,
      title: 'Design & Décoration',
      description: 'Une scénographie unique qui reflète votre personnalité et vos goûts.',
      number: '02',
     
    },
    {
      icon: Camera,
      title: 'Photographie & Vidéo',
      description: 'Capturez chaque instant précieux avec nos experts en imagerie.',
      number: '03'
    },
    {
      icon: Flower2,
      title: 'Fleurs & Bouquets',
      description: 'Des compositions florales élégantes et raffinées pour sublimer votre jour.',
      number: '04'
    },
    {
      icon: Music,
      title: 'Animation Musicale',
      description: 'Une ambiance sonore parfaite pour faire danser vos invités.',
      number: '05'
    },
    {
      icon: UtensilsCrossed,
      title: 'Traiteur Gastronomique',
      description: 'Un voyage culinaire d\'exception pour émerveiller vos convives.',
      number: '06'
    }
  ];

  const processSteps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Nous échangeons sur votre vision, vos envies et votre budget pour définir ensemble les contours de votre mariage de rêve.'
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Planification',
      description: 'Notre équipe coordonne chaque détail : lieu, prestataires, décoration, logistique. Vous validez, nous orchestrons.'
    },
    {
      number: '03',
      icon: Heart,
      title: 'Le Jour J',
      description: 'Le jour tant attendu, nous sommes à vos côtés pour que tout soit parfait. Vous profitez, nous gérons.'
    }
  ];

  return (
    <section id="services" className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3">
            <span className="text-rose-500 text-lg">✦</span>
            Nos services
            <span className="text-rose-500 text-lg">✦</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mt-6">
            Une expertise <span className="text-rose-500 font-semibold">à 360 degrés</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6 max-w-2xl mx-auto">
            Des services sur mesure pour créer le mariage parfait, du début à la fin.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 cursor-pointer ${service.isFeatured
                ? 'bg-gradient-to-br from-rose-50/90 to-rose-100/50 border-rose-200 shadow-xl shadow-rose-500/10'
                : 'bg-white border-gray-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/5 hover:bg-rose-50/20'
                }`}
            >
              {/* Numéro en Syne */}
              <div className={`absolute top-6 right-6 text-4xl font-syne font-bold tracking-tighter transition-all duration-300 ${service.isFeatured
                ? 'text-rose-300/70 group-hover:text-rose-400/90'
                : 'text-gray-200/70 group-hover:text-rose-300/70 group-hover:scale-110'
                }`}>
                {service.number}
              </div>

              {/* Icône */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${service.isFeatured
                ? 'bg-rose-100 text-rose-500 group-hover:bg-rose-200 group-hover:shadow-rose-500/20'
                : 'bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-rose-500/25'
                }`}>
                <service.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Titre en Outfit */}
              <h3 className={`text-lg font-outfit font-semibold mb-2 transition-colors duration-300 ${service.isFeatured
                ? 'text-rose-700'
                : 'text-gray-900 group-hover:text-rose-500'
                }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed font-light transition-colors duration-300 ${service.isFeatured
                ? 'text-gray-600'
                : 'text-gray-500 group-hover:text-gray-600'
                }`}>
                {service.description}
              </p>

              {/* Badge "À la une" */}
              {service.isFeatured && (
                <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg shadow-rose-500/25 font-outfit">
                  À la une
                </div>
              )}

              {/* Élément décoratif */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${service.isFeatured
                ? 'opacity-0 group-hover:opacity-100 bg-gradient-to-br from-rose-100/40 to-transparent'
                : 'opacity-0 group-hover:opacity-100 bg-gradient-to-br from-rose-50/30 to-transparent'
                }`}></div>
            </div>
          ))}
        </div>

        {/* Section Comment ça marche */}
        <div className="pt-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-500  font-medium tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3">
              <span className="text-rose-500 text-lg">✦</span>
              Comment ça marche
              <span className="text-rose-500 text-lg">✦</span>
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mt-6">
              Notre <span className="text-rose-500 font-semibold">Processus</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mt-6 max-w-2xl mx-auto">
              De l'idée à la livraison, un processus structuré pour un résultat sans compromis.
            </p>
          </div>

          {/* Étapes du processus avec flèches */}
          <div className="flex flex-col md:flex-row items-stretch gap-4 relative">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex-1">
                <div
                  className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-rose-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/5 h-full"
                >
                  {/* Numéro + Icône avant le chiffre */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-[50px]">
                      <div className="w-15 h-15 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                        <step.icon className="w-7 h-7" />
                      </div>
                      <span className="text-[55px] font-syne font-bold text-rose-100/50 group-hover:text-rose-200/70 transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-outfit font-semibold text-gray-900 group-hover:text-rose-500 transition-colors duration-300 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    {step.description}
                  </p>

                  {/* Élément décoratif au hover */}
                  <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-br from-rose-50/30 to-transparent"></div>
                </div>

                {/* Flèche entre les étapes */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex justify-center items-center py-2">
                    <ChevronRight className="w-8 h-8 text-rose-300/50 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Flèches entre les étapes - version mobile */}
          <div className="flex md:hidden justify-center gap-8 my-4 text-rose-300/50">
            {processSteps.slice(0, -1).map((_, index) => (
              <ChevronRight
                key={index}
                className="w-6 h-6 animate-pulse"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;