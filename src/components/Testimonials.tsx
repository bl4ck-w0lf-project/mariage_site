import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sophie & Thomas',
      date: 'Juillet 2026',
      comment: 'Une équipe exceptionnelle qui a su transformer nos rêves en réalité. Chaque détail était parfait, nous avons vécu le plus beau jour de notre vie.',
      rating: 5,
      image: '/src/assets/testimonial-1.jpg'
    },
    {
      name: 'Emma & Lucas',
      date: 'Juin 2026',
      comment: 'Un professionnalisme et une élégance remarquables. Nous avons été accompagnés avec douceur et bienveillance tout au long de cette aventure.',
      rating: 5,
      image: '/src/assets/testimonial-2.jpg'
    },
    {
      name: 'Marie & Antoine',
      date: 'Mai 2026',
      comment: 'La meilleure décision que nous ayons prise ! Notre mariage était tout simplement magique, nos invités en parlent encore.',
      rating: 5,
      image: '/src/assets/testimonial-3.jpg'
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">Témoignages</span>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mt-4">
            Ce que disent
            <span className="block font-serif text-rose-500 mt-2">nos couples</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group p-8 bg-gradient-to-br from-white to-rose-50/30 rounded-3xl border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-rose-300 mb-6 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700 leading-relaxed font-light mb-6">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
