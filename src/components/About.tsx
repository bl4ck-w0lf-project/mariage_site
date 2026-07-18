import { Heart, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image avec badges */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/10 relative h-[600px] lg:h-[700px]">
              <img
                src="/assets/about.jpeg"
                alt="Équipe de JoyfullWedding"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Badge en haut à gauche - SUR l'image */}
            <div className="absolute top-[-22px] left-[-35px] bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg border border-white/50">
              <span className="font-serif italic text-rose-500 text-base tracking-wide">
                « L'art du détail »
              </span>
            </div>

            {/* Badge en bas à droite - SUR l'image */}
            <div className="absolute bottom-[-35px] right-[15px] bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-gray-100/50 min-w-[160px]">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <Heart className="w-7 h-7 text-rose-500 fill-rose-500/20" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full opacity-20"></div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900 leading-none">98%</div>
                  <div className="text-sm text-gray-500 font-light tracking-wide">Clients satisfaits</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu droit */}
          <div className="space-y-10">
            <div className="space-y-6">
              {/* Label Notre Mission - Style identique à Services */}
              <span className="text-rose-500 font-medium tracking-[0.2em] uppercase text-sm flex items-center gap-3">
                <span className="text-rose-500 text-lg">✦</span>
                Notre Mission
                <span className="text-rose-500 text-lg">✦</span>
              </span>

              {/* Titre - Style identique à Services */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight leading-tight">
                Inspirer la confiance,
                <span className="block font-serif text-rose-500 mt-2">créer du rêve.</span>
              </h2>

              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed font-light">
                  Chez <span className="font-semibold text-rose-500">JoyfullWedding</span>, nous croyons que chaque mariage est une œuvre d'art unique. Notre approche allie le raffinement de la haute couture à une logistique impeccable.
                </p>
                <p className="text-lg leading-relaxed font-light">
                  Nous ne nous contentons pas de planifier des événements ; nous créons des souvenirs qui traversent le temps. Notre équipe dédiée s'occupe de chaque aspect technique pour vous permettre de vivre pleinement chaque instant de votre union.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-px h-10 bg-gradient-to-b from-rose-300 to-transparent"></div>
                <div>
                  <div className="text-gray-700 text-sm font-light tracking-wide">
                    <span className="text-rose-500 font-medium">✦</span> Sophie Valois
                  </div>
                  <div className="text-xs text-gray-400 font-light tracking-wider">Fondatrice</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#gallery"
                className="group px-8 py-4 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25 flex items-center gap-2"
              >
                <span>Voir la galerie</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-rose-500 text-rose-500 rounded-xl font-medium hover:bg-rose-500 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25"
              >
                Nos services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;