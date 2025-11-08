import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Facilitating Effective Teaching and Learning",
      description: "St. Augustine Publications, Inc. dedicates itself to provide quality books and reading materials to enhance the minds of its customers.",
      image: "/slide1.jpg"
    },
    {
      title: "Quality Educational Materials",
      description: "Empowering students with comprehensive learning resources for all levels.",
      image: "/slide2.jpg"
    },
    {
      title: "Recognizing Filipino Teachers",
      description: "Supporting the wonderful efforts of Filipino teachers in the total development of the youth.",
      image: "/slide3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` 
            }}
          >
            <div className="text-center text-white max-w-4xl px-8 z-10">
              <h2 className="text-4xl md:text-5xl mb-4 font-bold drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white cursor-pointer transition-colors p-0 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

