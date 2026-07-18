import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophie & Thomas',
      date: 'Juillet 2026',
      comment: 'Une équipe exceptionnelle qui a su transformer nos rêves en réalité. Chaque détail était parfait, nous avons vécu le plus beau jour de notre vie.',
      rating: 5,
      image: '/assets/testimonial-1.jpeg'
    },
    {
      name: 'Emma & Lucas',
      date: 'Juin 2026',
      comment: 'Un professionnalisme et une élégance remarquables. Nous avons été accompagnés avec douceur et bienveillance tout au long de cette aventure.',
      rating: 5,
      image: '/assets/testimonial-1.jpeg'
    },
    {
      name: 'Marie & Antoine',
      date: 'Mai 2026',
      comment: 'La meilleure décision que nous ayons prise ! Notre mariage était tout simplement magique, nos invités en parlent encore.',
      rating: 5,
      image: '/assets/testimonial-1.jpeg'
    },
    {
      name: 'Julie & Marc',
      date: 'Avril 2026',
      comment: 'Une organisation sans faille et une équipe à l\'écoute. Ils ont su capturer l\'essence de notre amour dans chaque détail.',
      rating: 5,
      image: '/assets/testimonial-1.jpeg'
    },
    {
      name: 'Claire & Nicolas',
      date: 'Mars 2026',
      comment: 'Un véritable coup de cœur pour cette agence. Leur créativité et leur professionnalisme ont fait de notre mariage un conte de fées.',
      rating: 5,
      image: '/assets/testimonial-1.jpeg'
    },
    {
      name: 'Laura & Pierre',
      date: 'Février 2026',
      comment: 'Ils ont su créer une atmosphère unique et chaleureuse. Nos invités ont été bluffés par la qualité de l\'organisation.',
      rating: 5,
      image: '/assets/testimonial-1.jpeg'
    },
  ];

  // Dupliquer les témoignages pour créer une boucle infinie
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* En-tête style services */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3">
            <span className="text-rose-500 text-lg">✦</span>
            Témoignages
            <span className="text-rose-500 text-lg">✦</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mt-6">
            Ce que disent <span className="text-rose-500 font-semibold">nos couples</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6 max-w-2xl mx-auto">
            Des mots sincères qui reflètent notre engagement à rendre chaque mariage unique et mémorable.
          </p>
        </div>

        {/* Rangée 1 - De gauche à droite */}
        <div className="relative overflow-hidden mb-6 rounded-3xl shadow-xl shadow-rose-500/5">
          {/* Overlay dégradé gauche */}
          <div className="absolute left-0 top-0 z-10 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          {/* Overlay dégradé droite */}
          <div className="absolute right-0 top-0 z-10 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex gap-6 animate-scroll-left py-4">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={`row1-${idx}`}
                className="min-w-[340px] max-w-[340px] flex-shrink-0 group p-8 bg-white rounded-3xl border border-gray-100 hover:border-rose-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-rose-300/50 mb-4 group-hover:scale-110 group-hover:text-rose-300 transition-all duration-500" />
                <p className="text-gray-700 leading-relaxed font-light text-sm mb-5 line-clamp-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rangée 2 - De droite à gauche */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-rose-500/5">
          {/* Overlay dégradé gauche */}
          <div className="absolute left-0 top-0 z-10 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          {/* Overlay dégradé droite */}
          <div className="absolute right-0 top-0 z-10 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex gap-6 animate-scroll-right py-4">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={`row2-${idx}`}
                className="min-w-[340px] max-w-[340px] flex-shrink-0 group p-8 bg-white rounded-3xl border border-gray-100 hover:border-rose-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-rose-300/50 mb-4 group-hover:scale-110 group-hover:text-rose-300 transition-all duration-500" />
                <p className="text-gray-700 leading-relaxed font-light text-sm mb-5 line-clamp-4">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles pour les animations */}
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 25s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
          will-change: transform;
        }

        /* Ligne clamp pour limiter le texte */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hover pause */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;