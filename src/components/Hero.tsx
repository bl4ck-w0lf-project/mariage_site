import { ArrowRight, Calendar, Users, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/40" />
      
      {/* Pattern décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-200 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu gauche */}
          <div className="space-y-8">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-2 bg-rose-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100/50">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-rose-700">Agence de mariage premium</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.1]">
              Créez le mariage
              <span className="block font-serif text-rose-500 mt-2">de vos rêves</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              Une équipe passionnée à votre service pour orchestrer chaque détail 
              de votre journée parfaite, avec élégance et excellence.
            </p>

            {/* Statistiques */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-50 rounded-full">
                  <Calendar className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">150+</div>
                  <div className="text-sm text-gray-500">Mariages organisés</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-50 rounded-full">
                  <Users className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Clients satisfaits</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-50 rounded-full">
                  <Heart className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">12 ans</div>
                  <div className="text-sm text-gray-500">D'expérience</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="group relative px-8 py-4 bg-rose-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-500/25 active:scale-95 flex items-center gap-3"
                aria-label="Planifier mon mariage"
              >
                <span>Planifier mon mariage</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button 
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full font-medium transition-all duration-300 hover:border-rose-500 hover:text-rose-500 hover:bg-rose-50 active:scale-95"
                aria-label="Voir notre portfolio"
              >
                Voir notre portfolio
              </button>
            </div>
          </div>

          {/* Image droite */}
          <div className="relative lg:block">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/10">
              <img 
                src="/src/assets/hero.png" 
                alt="Couple de mariés élégants dans un cadre romantique" 
                className="w-full h-full object-cover"
                loading="eager"
                width="800"
                height="1000"
              />
              {/* Overlay décoratif */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
              
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-xl">★</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-500">200+ avis</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-rose-200/30 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-amber-200/20 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest font-light">Découvrir</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-rose-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
