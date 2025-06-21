import React from 'react';

const HeroSection = () => {
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
          <span className="text-yellow-400 font-serif">
            Audio-Visual
          </span>{' '}
          Experiences
          
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white mx-auto mb-12 leading-relaxed font-sans animate-fade-in-up" style={{animationDelay: '0.4s'}}>
         At Resoundify, we deliver cutting-edge Dante-enabled solutions that redefinehow you connect, <br /> communicate, and create exceptional results.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button className="group px-8 py-4 bg-transparent border-2 border-yellow-400 text-white rounded-lg font-semibold text-xl hover:bg-yellow-200 hover:text-yellow-900 transition-all duration-300 flex items-center gap-3 min-w-[200px] backdrop-blur-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-6 0H3m6 0v-5a2 2 0 012-2h2a2 2 0 012 2v5" />
            </svg>
            Explore Products
          </button>
          
          <button className="group px-8 py-4 bg-transparent border-2 border-yellow-400 text-white rounded-lg font-semibold text-xl hover:bg-yellow-200 hover:text-yellow-900 transition-all duration-300 flex items-center gap-3 min-w-[200px] backdrop-blur-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-6 0H3m6 0v-5a2 2 0 012-2h2a2 2 0 012 2v5" />
            </svg>
            Contact Us
          </button>
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