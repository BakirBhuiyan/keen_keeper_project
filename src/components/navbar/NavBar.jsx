import React from 'react';
import { NavLink } from 'react-router';
import { FaHome, FaChartBar, FaHistory } from 'react-icons/fa';

const NavBar = () => {
      const navLinks = [
            { path: '/', label: 'Home', icon: <FaHome /> },
            { path: '/timeline', label: 'Timeline', icon: <FaHistory /> },
            { path: '/states', label: 'Stats', icon: <FaChartBar /> }
      ];

      return (
            <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
                  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                              <div className="w-10 h-10 bg-[#234e3f] rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">K</span>
                              </div>
                              <span className="text-xl font-bold text-[#1a2b3c]">Keen Keeper</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-2">
                              {navLinks.map((link) => (
                                    <NavLink
                                          key={link.path}
                                          to={link.path}
                                          className={({ isActive }) =>
                                                `flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${isActive
                                                      ? 'bg-[#234e3f] text-white'
                                                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#234e3f]'
                                                }`
                                          }
                                    >
                                          <span className="text-sm">{link.icon}</span>
                                          <span>{link.label}</span>
                                    </NavLink>
                              ))}
                        </div>
                  </div>
            </nav>
      );
};

export default NavBar;