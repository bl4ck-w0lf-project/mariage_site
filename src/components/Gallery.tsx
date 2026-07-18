import { Camera, Heart } from 'lucide-react';

const Gallery = () => {
  const images = [
    { id: 1, category: 'Cérémonie', label: 'Échange de voeux' },
    { id: 2, category: 'Décoration', label: 'Table d\'honneur' },
    { id: 3, category: 'Couple', label: 'Séance photo' },
    { id: 4, category: 'Fleurs', label: 'Bouquet de mariée' },
    { id: 5, category: 'Lieu', label: 'Salle de réception' },
    { id: 6, category: 'Gastronomie', label: 'Dîner de gala' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Galerie</span>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mt-4">
            Nos plus beaux
            <span className="block font-serif text-rose-500 mt-2">souvenirs en images</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-6">
            Découvrez notre travail à travers ces moments magiques capturés lors de nos événements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Camera className="w-4 h-4" />
                  <span>{image.category}</span>
                </div>
                <h3 className="text-xl font-semibold mt-1">{image.label}</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Heart className="w-6 h-6 text-white hover:text-rose-500 transition-colors" />
              </div>
              <img
                src={`/src/assets/gallery-${image.id}.jpg`}
                alt={image.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-rose-500 text-rose-500 rounded-full font-medium hover:bg-rose-500 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25">
            Voir plus de photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
