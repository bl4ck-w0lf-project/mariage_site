import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Full Screen */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/hero.jpg"
          alt="Mariage de rêve"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay couleur très légère rose/amber */}
        <div className="absolute inset-0 bg-rose-500/5" />
        <div className="absolute inset-0 bg-amber-400/5" />
        {/* Overlay sombre très léger pour lisibilité */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge premium "L'élégance intemporelle" */}
        <div className="mb-10 inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/25 shadow-lg shadow-rose-500/10">
          <div className="flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <Sparkles className="w-3 h-3 text-rose-300" />
          </div>
          <span className="text-sm md:text-base font-serif italic text-white tracking-wide">
            L'élégance intemporelle
          </span>
          <div className="w-8 h-px bg-gradient-to-r from-white/60 to-transparent" />
        </div>

        {/* Grand titre - plus gros et visible */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-6 leading-[1.05] tracking-tight">
          Créez le mariage
          <span className="block text-rose-300 italic font-light mt-1">de vos rêves</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
          Une équipe passionnée pour orchestrer chaque détail
          <br className="hidden sm:block" />
          de votre journée parfaite avec élégance
        </p>

        {/* Boutons avec animation brillante au hover */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* Bouton Réserver */}
          <button
            className="group relative px-10 py-4 bg-rose-500 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/40 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Réserver</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </button>

          {/* Bouton Voir la galerie */}
          <button
            className="group relative px-10 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>Voir la galerie</span>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </button>
        </div>
      </div>

      {/* CSS pour l'animation shimmer */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;