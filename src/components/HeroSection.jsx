import React from 'react';

const HeroSection = () => {
  const FancyButton = ({ text = 'Buy Tickets', href = '#' }) => {
    return (
      <a
        href={href}
        className="relative inline-block px-8 py-5 border-2 border-amber-200 text-amber-300 font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 group overflow-visible"
      >
        {/* Top Key */}
        <span className="absolute top-[-2px] left-2.5 w-6 h-[2px] bg-gray-200 transition-all duration-500 ease-out group-hover:left-[-2px] group-hover:w-0"></span>

        {/* Text with animated left padding */}
        <span className="block text-left pl-8 transition-all duration-300 ease-in-out group-hover:pl-6 group-hover:text-black">
          {text}
        </span>

        {/* ::before bar on the left */}
        <span className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-[2px] bg-amber-400 transition-all duration-300 ease-in-out group-hover:w-3.5 group-hover:bg-black"></span>

        {/* Bottom Keys */}
        <span className="absolute bottom-[-2px] right-7.5 w-6 h-[2px] bg-gray-200 transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
        <span className="absolute bottom-[-2px] right-2.5 w-2.5 h-[2px] bg-gray-200 transition-all duration-500 ease-out group-hover:right-0 group-hover:w-0"></span>
      </a>
    );
  };
  return (
    <div className="min-h-[95vh] relative flex items-center pl-5 font-light overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/newbg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 items-start mx-auto px-6 py-20 w-full">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Redefining {' '}
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-serif">
            Audio-Visual
          </span>{' '}
          Experience
          
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white mx-auto mb-12 leading-relaxed font-sans animate-fade-in-up" style={{animationDelay: '0.4s'}}>
         At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefinehow you connect, <br /> communicate, and create exceptional results.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <FancyButton text="Explore Products" href="/tickets" />
          
          <FancyButton text="Explore Products" href="/tickets" />
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;