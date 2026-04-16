import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const NavBar = () => {
      return (
            <nav className='navbar bg-base-100 shadow-sm  '>

                  <div className=" container mx-auto">
                        <div className="navbar-start">
                              <a className="btn btn-ghost text-xl">Keen<span className='text-green-800'>Keeper</span></a>
                        </div>
                        <div className="navbar-end gap-4">
                              <NavLink to="/"
                                    className={({ isActive }) =>
                                          `btn flex items-center gap-2 ${isActive ? "bg-green-900 text-white" : "bg-gray-200 text-black"}`}><FaHome />Home</NavLink>
                              <NavLink to="/timeline" className={({ isActive }) => `btn flex items-center gap-2 ${isActive ? "bg-green-900 text-white" : "bg-gray-200 text-black"}`} ><RiTimeLine />TimeLine</NavLink>
                              <NavLink to={"/states"} className={({ isActive }) => `btn flex items-center gap-2 ${isActive ? "bg-green-900 text-white" : "bg-gray-200 text-black"}`}><ImStatsDots />States</NavLink>
                        </div>
                  </div>
            </nav >
      );
};

export default NavBar;