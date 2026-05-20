import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Kofi',
    location: 'Accra',
    text: 'Received my bundle in less than 1 minute 🔥. This is the best service I have used so far in Ghana.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kofi'
  },
  {
    name: 'Ama',
    location: 'Kumasi',
    text: 'Very affordable and reliable. I save almost GHS 10 every time I buy my 10GB bundle here.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ama'
  },
  {
    name: 'Emmanuel',
    location: 'Takoradi',
    text: 'I was skeptical at first but they are legit. Fast delivery and excellent customer support.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">What Our <span className="text-primary">Users Say</span></h2>
          <p className="text-muted-foreground">Don't just take our word for it. Here is what our community says.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-card border border-white/5 p-8 rounded-[2.5rem] relative hover:border-primary/20 transition-colors">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary opacity-10" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8 italic text-white/90">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.location}, Ghana</p>
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