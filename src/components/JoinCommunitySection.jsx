import React, { useRef, useEffect, useState } from 'react'; // Corrected import statement

const JoinCommunitySection = () => {
  // State to control the visibility of the join form modal
  const [showJoinForm, setShowJoinForm] = useState(false);
  // States for form inputs
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [receiveNotifications, setReceiveNotifications] = useState(false);
  // State for showing a confirmation message
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Ref for the section to observe for scroll animation
  const sectionRef = useRef(null);
  // State to control the visibility of the section content for scroll animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isVisible state based on whether the section is intersecting
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it and show a confirmation message.
    console.log({
      email,
      contactNumber,
      subscribeNewsletter,
      receiveNotifications,
    });

    setConfirmationMessage("Thank you for joining the community! We'll be in touch.");
    // Optionally clear the form after submission
    setEmail('');
    setContactNumber('');
    setSubscribeNewsletter(false);
    setReceiveNotifications(false);
    // Automatically close the modal after a short delay
    setTimeout(() => {
      setShowJoinForm(false);
      setConfirmationMessage(''); // Clear message when modal closes
    }, 3000); // Close after 3 seconds
  };

  return (
    <section
      ref={sectionRef} // Attach the ref for Intersection Observer
      className="relative py-20 px-4 sm:px-10 bg-slate-50 text-gray-900 overflow-hidden font-inter" // Reverted to original light gray background and dark text
    >
      {/* Font import link is ideally in your public/index.html or global CSS, but kept here for self-containment if needed */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <div className={`relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between z-10 space-y-8 lg:space-y-0 lg:space-x-8
        transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}> {/* Apply animation classes here */}
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
          <h2 className="text-5xl lg:text-6xl font-light text-slate-800 mb-6 tracking-tight">
            Join the <span className="font-semibold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Resoundify Community</span>
          </h2>
          <p className="mb-8 text-lg sm:text-xl text-gray-700 leading-relaxed font-light"> {/* Original text color */}
            At Resoundify, we believe in the power of sound to inspire, connect, and transform. Let us help you create audio-visual experiences that resonate. Explore our products, connect with our team, and experience the future of AV with Resoundify.
          </p>
          <p className="mb-8 text-lg sm:text-xl font-semibold text-blue-700"> {/* Original accent color */}
            Resoundify – Where Sound Meets Innovation.
          </p>
          {/* "Join the Community" Button */}
          <button
            onClick={() => setShowJoinForm(true)}
            className="inline-block bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75" // Original button styles
          >
            Join the Community
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 px-4 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Example image
            alt="Audio-visual collaboration"
            className="w-full max-w-2xl rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-100" // Original border style
          />
        </div>
      </div>

      {/* Floating decorative elements (removed for cleaner look unless explicitly requested back) */}
      {/*
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce-slow" />
      */}

      {/* Custom animations for the section */}
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Join Form Modal - Conditional rendering based on showJoinForm state */}
      {showJoinForm && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"> {/* Original modal overlay */}
          <div
            className={`bg-white text-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 ease-in-out border border-gray-100
              ${showJoinForm ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} // Original modal background and border
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900"> {/* Original heading text color */}
                Join Us!
              </h3>
              <button
                onClick={() => setShowJoinForm(false)} // Close the modal
                className="text-gray-500 hover:text-gray-700 transition duration-300" // Original close button color
                aria-label="Close form"
              >
                {/* SVG for a close (X) icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {confirmationMessage ? (
              // Confirmation message display
              <div className="text-center text-green-600 text-lg font-semibold py-8"> {/* Original green for success message */}
                {confirmationMessage}
              </div>
            ) : (
              // Form for joining the community
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2"> {/* Original label text color */}
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg placeholder-gray-500" // Original input styles
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700 mb-2"> {/* Original label text color */}
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg placeholder-gray-500" // Original input styles
                    placeholder="+91-9876543210"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={subscribeNewsletter}
                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md bg-white" // Original checkbox styles
                  />
                  <label htmlFor="newsletter" className="text-base text-gray-800 cursor-pointer select-none"> {/* Original label text color */}
                    Subscribe to our newsletter for the latest updates and exclusive content.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    id="notifications"
                    name="notifications"
                    type="checkbox"
                    checked={receiveNotifications}
                    onChange={(e) => setReceiveNotifications(e.target.checked)}
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md bg-white" // Original checkbox styles
                  />
                  <label htmlFor="notifications" className="text-base text-gray-800 cursor-pointer select-none"> {/* Original label text color */}
                    Receive notifications about new stock, product launches, and stock refills.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-blue-500 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden" // Original button styles
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right-circle w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="m12 16 4-4-4-4" />
                    </svg>
                    Submit
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinCommunitySection;