import React, { useEffect, useRef, useState } from 'react';
import { Network, Monitor, Cable, CheckCircle, Zap, ArrowRight, Target, Globe } from 'lucide-react';

export default function WhatResoundifyDoes() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Query for elements with data-animate within the intersecting section
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              // Ensure we only animate if not already animated to prevent re-triggering on every scroll
              // Using index as a simple unique key for tracking animated elements
              if (!animatedElements.has(index)) {
                setTimeout(() => {
                  setAnimatedElements(prev => new Set([...prev, index]));
                }, index * 100); // Stagger animation start
              }
            });
          } else {
            // Reset animation when out of view
            setIsVisible(false);
            setAnimatedElements(new Set()); // This is crucial for re-triggering animations on re-entry
          }
        });
      },
      { threshold: 0.15, rootMargin: '100px' } // Trigger when 15% of the element is visible, with a margin
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, [animatedElements]); // Re-run effect if animatedElements set changes

  return (
    // Main section container with a light gradient background
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-white to-slate-50 py-24 overflow-hidden font-inter">
      
      {/* Sophisticated Background Pattern (SVG) */}
      <div className="absolute inset-0 opacity-10 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary gradient for background shapes - adjusted for light theme */}
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.05"/> {/* Slate-200 */}
              <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.1"/> {/* Slate-100 */}
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.05"/>
            </linearGradient>
            {/* Accent gradient for background shapes - using amber/orange tones */}
            <linearGradient id="accentGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.1"/> {/* Amber-400 */}
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.15"/> {/* Orange-500 */}
            </linearGradient>
            {/* Subtle grid pattern - adjusted for light theme */}
            <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.1"/> {/* Slate-300 */}
            </pattern>
            {/* Subtle dot pattern - adjusted for light theme */}
            <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="1" fill="#f59e0b" opacity="0.1"/> {/* Amber-500 */}
            </pattern>
          </defs>
          
          {/* Elegant flowing shapes using the defined gradients */}
          <path
            d="M0,300 C360,200 720,400 1440,250 L1440,0 L0,0 Z"
            fill="url(#primaryGradient)"
          />
          <path
            d="M0,500 C480,350 960,550 1440,400 L1440,800 L0,800 Z"
            fill="url(#accentGradient)"
          />
          
          {/* Subtle grid and dot overlays */}
          <rect width="100%" height="100%" fill="url(#gridPattern)"/>
          <rect width="100%" height="100%" fill="url(#dotPattern)"/>
          
          {/* Refined geometric elements with subtle animation */}
          <g opacity="0.05"> {/* Increased opacity slightly for visibility on light background */}
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <circle
                  cx={120 + (i * 120)}
                  cy={150 + Math.sin(i * 0.5) * 100}
                  r="3"
                  fill="#f59e0b" // Amber-500 for consistency
                  className="animate-pulse"
                  style={{
                    animationDuration: `${4 + (i % 3)}s`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
                {i > 0 && (
                  <line
                    x1={120 + ((i-1) * 120)}
                    y1={150 + Math.sin((i-1) * 0.5) * 100}
                    x2={120 + (i * 120)}
                    y2={150 + Math.sin(i * 0.5) * 100}
                    stroke="#f59e0b" // Amber-500 for consistency
                    strokeWidth="1"
                    opacity="0.1"
                  />
                )}
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Floating accent elements (subtle visual interest) - adjusted for light theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-200/10 transition-all duration-2000 ${
              isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 300}ms`,
              filter: 'blur(1px)', // Soft blur for a glowing effect
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            animatedElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate={0} // Using index 0 for the header animation
        >
          <h2 className="text-5xl lg:text-6xl font-sans text-slate-800 mb-6 tracking-tight"
            style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.4), 0 0 15px rgba(251, 191, 36, 0.2)' }} // Amber text shadow
          >
            What <span className="font-semibold bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Resoundify</span> Delivers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional audio networking solutions engineered for enterprise excellence
          </p>
          <div className="w-72 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-8"></div> {/* Amber highlight line */}
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          
          {/* Network Architecture Card */}
          <div
            className={`group relative transition-all duration-1000 ${
              animatedElements.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate={1} // Index 1 for animation staging
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-2">
              {/* Inner gradient for "sound wave" effect on hover - using amber/orange tones */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-orange-400/40 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Network Architecture</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Enterprise-grade Dante network design and implementation for seamless audio distribution across complex infrastructures.
                </p>
                <div className="flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* System Integration Card */}
          <div
            className={`group relative transition-all duration-1000 delay-100 ${
              animatedElements.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate={2} // Index 2 for animation staging
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-2">
              {/* Inner gradient for "sound wave" effect on hover - using amber/orange tones */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-orange-400/40 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Cable className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">System Integration</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Comprehensive integration services connecting diverse audio systems through standardized Ethernet infrastructure.
                </p>
                <div className="flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">View Integration</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* 24/7 Monitoring Card */}
          <div
            className={`group relative transition-all duration-1000 delay-200 ${
              animatedElements.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-animate={3} // Index 3 for animation staging
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-2">
              {/* Inner gradient for "sound wave" effect on hover - using amber/orange tones */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-orange-400/40 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">24/7 Monitoring</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Continuous system monitoring, proactive maintenance, and expert technical support ensuring optimal performance.
                </p>
                <div className="flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">Support Details</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div
          className={`group relative transition-all duration-1000 delay-400 ${
            animatedElements.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate={4} // Index 4 for animation staging
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-700 mb-4">Proven Excellence</h3>
            <p className="text-slate-500 text-lg">Performance metrics that matter</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Projects Delivered", icon: Target, desc: "Successfully deployed worldwide" },
              { value: "99.8%", label: "System Uptime", icon: Zap, desc: "Industry-leading reliability" },
              { value: "50+", label: "Countries", icon: Globe, desc: "Global deployment reach" },
              { value: "24/7", label: "Support Coverage", icon: CheckCircle, desc: "Round-the-clock monitoring" }
            ].map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="group bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/50
                             hover:bg-white hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-500 hover:-translate-y-2
                             flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center
                                   group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                    <IconComponent className="w-6 h-6 text-slate-800" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="text-2xl font-bold text-slate-800 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-md font-semibold text-slate-700 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-slate-500">
                      {metric.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

