import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
      return (
            <footer className="w-full bg-[#1a2b3c] text-white py-12">
                  <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {/* Brand Section */}
                              <div>
                                    <div className="flex items-center gap-2 mb-4">
                                          <div className="w-10 h-10 bg-[#234e3f] rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-xl">K</span>
                                          </div>
                                          <span className="text-xl font-bold">Keen Keeper</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                          Your personal shelf of meaningful connections. Browse, tend, and nurture the
                                          relationships that matter most.
                                    </p>
                              </div>

                              {/* Quick Links */}
                              <div>
                                    <h4 className="font-semibold mb-4">Quick Links</h4>
                                    <ul className="space-y-2">
                                          <li>
                                                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                                                      Home
                                                </a>
                                          </li>
                                          <li>
                                                <a href="/timeline" className="text-gray-400 hover:text-white transition-colors text-sm">
                                                      Timeline
                                                </a>
                                          </li>
                                          <li>
                                                <a href="/states" className="text-gray-400 hover:text-white transition-colors text-sm">
                                                      Stats
                                                </a>
                                          </li>
                                    </ul>
                              </div>

                              {/* Connect */}
                              <div>
                                    <h4 className="font-semibold mb-4">Connect</h4>
                                    <div className="flex gap-4">
                                          <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#234e3f] transition-colors"
                                          >
                                                <FaGithub />
                                          </a>
                                          <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#234e3f] transition-colors"
                                          >
                                                <FaTwitter />
                                          </a>
                                          <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#234e3f] transition-colors"
                                          >
                                                <FaLinkedin />
                                          </a>
                                    </div>
                              </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                              <p className="text-gray-400 text-sm">
                                    © {new Date().getFullYear()} Keen Keeper. All rights reserved.
                              </p>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;