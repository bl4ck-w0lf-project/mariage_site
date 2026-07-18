import { Camera, Heart } from 'lucide-react';

const Gallery = () => {
  // Chaque colonne contient les mêmes images dupliquées pour la boucle infinie
  const columnImages = [
    // Colonne 1 - Du haut vers le bas
    [
      { id: 1, category: 'Cérémonie', label: 'Échange de voeux', src: '/assets/gallery/3.jpeg' },
      { id: 2, category: 'Décoration', label: 'Table d\'honneur', src: '/assets/gallery/2.jpeg' },
      { id: 3, category: 'Couple', label: 'Séance photo', src: '/assets/gallery/5.jpeg' },
      { id: 4, category: 'Fleurs', label: 'Bouquet de mariée', src: '/assets/gallery/4.jpeg' },
      { id: 5, category: 'Lieu', label: 'Salle de réception', src: '/assets/gallery/3.jpeg' },
      { id: 6, category: 'Gastronomie', label: 'Dîner de gala', src: '/assets/gallery/4.jpeg' },
      // Duplication pour la boucle infinie
      { id: 1, category: 'Cérémonie', label: 'Échange de voeux', src: '/assets/gallery/1.jpeg' },
      { id: 2, category: 'Décoration', label: 'Table d\'honneur', src: '/assets/gallery/2.jpeg' },
      { id: 3, category: 'Couple', label: 'Séance photo', src: '/assets/gallery/5.jpeg' },
      { id: 4, category: 'Fleurs', label: 'Bouquet de mariée', src: '/assets/gallery/1.jpeg' },
      { id: 5, category: 'Lieu', label: 'Salle de réception', src: '/assets/gallery/1.jpeg' },
      { id: 6, category: 'Gastronomie', label: 'Dîner de gala', src: '/assets/gallery/1.jpeg' },
    ],
    // Colonne 2 - Du bas vers le haut (ordre inversé)
    [
      { id: 6, category: 'Gastronomie', label: 'Dîner de gala', src: '/assets/gallery/1.jpeg' },
      { id: 5, category: 'Lieu', label: 'Salle de réception', src: '/assets/gallery/4.jpeg' },
      { id: 4, category: 'Fleurs', label: 'Bouquet de mariée', src: '/assets/gallery/1.jpeg' },
      { id: 3, category: 'Couple', label: 'Séance photo', src: '/assets/gallery/5.jpeg' },
      { id: 2, category: 'Décoration', label: 'Table d\'honneur', src: '/assets/gallery/3.jpeg' },
      { id: 1, category: 'Cérémonie', label: 'Échange de voeux', src: '/assets/gallery/1.jpeg' },
      // Duplication pour la boucle infinie
      { id: 6, category: 'Gastronomie', label: 'Dîner de gala', src: '/assets/gallery/1.jpeg' },
      { id: 5, category: 'Lieu', label: 'Salle de réception', src: '/assets/gallery/3.jpeg' },
      { id: 4, category: 'Fleurs', label: 'Bouquet de mariée', src: '/assets/gallery/4.jpeg' },
      { id: 3, category: 'Couple', label: 'Séance photo', src: '/assets/gallery/5.jpeg' },
      { id: 2, category: 'Décoration', label: 'Table d\'honneur', src: '/assets/gallery/1.jpeg' },
      { id: 1, category: 'Cérémonie', label: 'Échange de voeux', src: '/assets/gallery/1.jpeg' },
    ],
    // Colonne 3 - Du haut vers le bas (comme colonne 1 mais décalée)
    [
      { id: 3, category: 'Couple', label: 'Séance photo', src: '/assets/gallery/5.jpeg' },
      { id: 4, category: 'Fleurs', label: 'Bouquet de mariée', src: '/assets/gallery/1.jpeg' },
      { id: 5, category: 'Lieu', label: 'Salle de réception', src: '/assets/gallery/1.jpeg' },
      { id: 6, category: 'Gastronomie', label: 'Dîner de gala', src: '/assets/gallery/1.jpeg' },
      { id: 1, category: 'Cérémonie', label: 'Échange de voeux', src: '/assets/gallery/2.jpeg' },
      { id: 2, category: 'Décoration', label: 'Table d\'honneur', src: '/assets/gallery/1.jpeg' },
      // Duplication pour la boucle infinie
      { id: 3, category: 'Couple', label: 'Séance photo', src: '/assets/gallery/5.jpeg' },
      { id: 4, category: 'Fleurs', label: 'Bouquet de mariée', src: '/assets/gallery/1.jpeg' },
      { id: 5, category: 'Lieu', label: 'Salle de réception', src: '/assets/gallery/1.jpeg' },
      { id: 6, category: 'Gastronomie', label: 'Dîner de gala', src: '/assets/gallery/1.jpeg' },
      { id: 1, category: 'Cérémonie', label: 'Échange de voeux', src: '/assets/gallery/1.jpeg' },
      { id: 2, category: 'Décoration', label: 'Table d\'honneur', src: '/assets/gallery/1.jpeg' },
    ],
  ];

  return (
    <section id="gallery" className="py-28 px-7 bg-gradient-to-b from-rose-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3">
            <span className="text-rose-500 text-lg">✦</span>
            Galerie
            <span className="text-rose-500 text-lg">✦</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mt-6">
            Nos plus beaux <span className="text-rose-500 font-semibold">souvenirs en images</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6 max-w-2xl mx-auto">
            Découvrez notre travail à travers ces moments magiques capturés lors de nos événements.
          </p>
        </div>

        {/* Colonnes d'images avec défilement continu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Colonne 1 - Défile vers le bas */}
          <div className="relative overflow-hidden rounded-2xl h-[700px] shadow-xl shadow-rose-500/5">
            {/* Overlay dégradé en haut */}
            <div className="absolute top-0 left-0 right-0 z-10 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
            {/* Overlay dégradé en bas */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex flex-col gap-4 animate-scroll-down">
              {columnImages[0].map((image, idx) => (
                <div key={`col1-${idx}`} className="relative aspect-[3/4] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Camera className="w-4 h-4" />
                      <span>{image.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1">{image.label}</h3>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Heart className="w-5 h-5 text-white hover:text-rose-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 2 - Défile vers le haut */}
          <div className="relative overflow-hidden rounded-2xl h-[700px] shadow-xl shadow-rose-500/5">
            {/* Overlay dégradé en haut */}
            <div className="absolute top-0 left-0 right-0 z-10 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
            {/* Overlay dégradé en bas */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex flex-col gap-4 animate-scroll-up">
              {columnImages[1].map((image, idx) => (
                <div key={`col2-${idx}`} className="relative aspect-[3/4] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Camera className="w-4 h-4" />
                      <span>{image.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1">{image.label}</h3>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Heart className="w-5 h-5 text-white hover:text-rose-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 3 - Défile vers le bas (décalé) */}
          <div className="relative overflow-hidden rounded-2xl h-[700px] shadow-xl shadow-rose-500/5">
            {/* Overlay dégradé en haut */}
            <div className="absolute top-0 left-0 right-0 z-10 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
            {/* Overlay dégradé en bas */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex flex-col gap-4 animate-scroll-down-delayed">
              {columnImages[2].map((image, idx) => (
                <div key={`col3-${idx}`} className="relative aspect-[3/4] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Camera className="w-4 h-4" />
                      <span>{image.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1">{image.label}</h3>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Heart className="w-5 h-5 text-white hover:text-rose-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations de défilement continu */}
      <style>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes scrollDownDelayed {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-down {
          animation: scrollDown 20s linear infinite;
        }

        .animate-scroll-up {
          animation: scrollUp 18s linear infinite;
        }

        .animate-scroll-down-delayed {
          animation: scrollDown 22s linear infinite;
        }

        /* Masquer le scrollbar */
        .overflow-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;