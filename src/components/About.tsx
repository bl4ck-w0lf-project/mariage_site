import { Heart, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Heart, label: 'Passion', value: '100%' },
    { icon: Award, label: 'Prix', value: '12+' },
    { icon: Users, label: 'Clients', value: '150+' },
    { icon: Calendar, label: 'Années', value: '12' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/10">
              <img
                src="/src/assets/about.jpg"
                alt="Équipe de wedding agency"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-rose-500" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Clients satisfaits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-rose-500 font-medium tracking-wider uppercase text-sm">À propos</span>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
                L'art de créer des
                <span className="block font-serif text-rose-500 mt-2">moments inoubliables</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Depuis plus de 12 ans, nous transformons les rêves en réalité. Notre équipe 
                dévouée met tout son cœur à orchestrer chaque détail de votre journée parfaite.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100/50">
                  <stat.icon className="w-6 h-6 text-rose-500 mb-2" />
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/25">
              Découvrir notre histoire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
