import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
      return (
            <section className="w-full bg-slate-50 py-12 md:py-20">

                  <div className=" mx-auto px-6 flex flex-col items-center text-center">

                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2b3c] mb-4">
                              Friends to keep close in your life
                        </h1>

                        <p className="text-slate-500 text-sm md:text-base max-w-md mb-8 leading-relaxed">
                              Your personal shelf of meaningful connections. Browse, tend, and nurture the
                              relationships that matter most.
                        </p>

                        <button className="flex items-center gap-2 hover:cursor-pointer bg-[#234e3f] hover:bg-[#1a3a2f] text-white px-6 py-2.5 rounded-md transition-colors shadow-sm">
                              <FaPlus className="text-xs" />
                              <span className="text-sm font-medium">Add a Friend</span>
                        </button>

                  </div>
            </section>
      );
};

export default Hero;