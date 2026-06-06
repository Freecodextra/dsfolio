import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      quote: "Joseph delivered our practice portal ahead of schedule. The revenue cycle support and grant application wizard he engineered have streamlined our provider onboarding and boosted our community social programs significantly.",
      author: "Dr. Arthur Benson",
      role: "Director, Grace Healthcare Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250"
    },
    {
      quote: "Joseph is a rare breed of full-stack engineer. He managed our entire Laravel/MySQL backend API structure and designed a premium, lightning-fast React checkout experience that handled our clothing drops with zero downtime.",
      author: "Maverick Idehen",
      role: "Founder, CLBM Streetwear Brand",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=250"
    },
    {
      quote: "Working with Joseph has been an absolute blessing for our organization. Our SEO scores hit a perfect 100% on lighthouse, and our digital volunteer and donation workflows are fast and secure. Highly recommended remote engineer!",
      author: "Mrs. Grace Alao",
      role: "Director of Outreach, Aerie Foundation",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="lg:py-24 py-20 px-6 sm:px-12 lg:px-24 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold mb-4">
            <MessageSquare size={12} />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            What Client Partners <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative p-8 sm:p-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col items-center">
          <Quote className="text-indigo-600/20 dark:text-indigo-400/20 w-16 h-16 mb-6" />

          {/* Testimonial Quote */}
          <blockquote className="text-center text-base sm:text-lg text-zinc-700 dark:text-zinc-200 font-light leading-relaxed mb-8">
            “{testimonials[currentIndex].quote}”
          </blockquote>

          {/* User Details */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/20"
            />
            <div className="text-left">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-xs text-zinc-400">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 left-2 right-2 flex justify-between items-center pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto p-2 rounded-lg bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto p-2 rounded-lg bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-350 ${
                currentIndex === idx
                  ? "w-6 bg-indigo-600 dark:bg-indigo-400"
                  : "w-2.5 bg-zinc-300 dark:bg-zinc-700"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
