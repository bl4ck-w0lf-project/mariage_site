import { Sparkles, Camera, Flower2, Music, UtensilsCrossed, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Design & Décoration',
      description: 'Une scénographie unique qui reflète votre personnalité et vos goûts.',
      color: 'rose'
    },
    {
      icon: Camera,
      title: 'Photographie & Vidéo',
      description: 'Capturez chaque instant précieux avec nos experts en imagerie.',
      color: 'amber'
    },
    {
      icon: Flower2,
      title: 'Fleurs & Bouquets',
      description: 'Des compositions florales élégantes et raffinées pour sublimer votre jour.',
      color: 'pink'
    },
    {
      icon: Music,
      title: 'Animation Musicale',
      description: 'Une ambiance sonore parfaite pour faire danser vos invités.',
      color: 'purple'
    },
    {
      icon: UtensilsCrossed,
      title: 'Traiteur Gastronomique',
      description: 'Un voyage culinaire d\'exception pour émerveiller vos convives.',
      color: 'orange'
    },
    {
      icon: MapPin,
      title: 'Lieux d\'Exception',
      description: 'Des sites prestigieux sélectionnés pour leur beauté et leur charme.',
      color: 'teal'
    }
  ];

  const colorClasses = {
    rose: 'bg-rose-50 text-rose-500',
    amber: 'bg-amber-50 text-amber-500',
    pink: 'bg-pink-50 text-pink-500',
    purple: 'bg-purple-50 text-purple-500',
    orange: 'bg-orange-50 text-orange-500',
    teal: 'bg-teal-50 text-teal-500',
  };

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Nos services</span>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mt-4">
            Une expertise
            <span className="block font-serif text-rose-500 mt-2">à 360 degrés</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6">
            Des services sur mesure pour créer le mariage parfait, du début à la fin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-white rounded-3xl border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
