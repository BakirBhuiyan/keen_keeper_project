import React from 'react';
// Import your assets based on your file structure
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
            <footer className="w-full bg-[#1a3a2f] text-white py-12 md:py-24">
                  {/* --- Main Content (Contained) --- */}
                  <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">

                        {/* Text Logo - Bold and Responsive */}
                        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
                              Keen<span className="text-white/80">Keeper</span>
                        </h2>

                        {/* Description */}
                        <p className="max-w-2xl text-base md:text-xl text-gray-300/90 mb-12 leading-relaxed">
                              Your personal shelf of meaningful connections. Browse, tend, and nurture the
                              relationships that matter most.
                        </p>

                        {/* Social Section */}
                        <div className="flex flex-col items-center gap-8">
                              <h3 className="text-lg md:text-xl font-medium tracking-widest uppercase opacity-80">
                                    Social Links
                              </h3>

                              <div className="flex gap-6 md:gap-10">
                                    {[
                                          { src: instagram, alt: 'Instagram' },
                                          { src: facebook, alt: 'Facebook' },
                                          { src: twitter, alt: 'Twitter' }
                                    ].map((social, index) => (
                                          <a
                                                key={index}
                                                href="#"
                                                className="group w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:-translate-y-2 shadow-2xl"
                                          >
                                                {/* Icons are large and responsive */}
                                                <img
                                                      src={social.src}
                                                      alt={social.alt}
                                                      className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform group-hover:scale-110"
                                                />
                                          </a>
                                    ))}
                              </div>
                        </div>
                  </div>

                  {/* --- Bottom Legal Bar (Contained) --- */}
                  <div className="mt-20 md:mt-28 border-t border-white/10 pt-10">
                        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm md:text-base text-gray-400">

                              <div className="order-2 md:order-1 font-medium">
                                    © {currentYear} KeenKeeper. All rights reserved.
                              </div>

                              <div className="flex flex-wrap justify-center gap-8 md:gap-12 order-1 md:order-2">
                                    <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Privacy Policy</a>
                                    <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Terms of Service</a>
                                    <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white">Cookies</a>
                              </div>

                        </div>
                  </div>
            </footer>
      );
};

export default Footer;