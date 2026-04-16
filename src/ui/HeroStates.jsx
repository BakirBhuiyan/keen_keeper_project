import React from 'react';

const HeroStates = () => {
      const stats = [
            { value: 10, label: "Total Friends" },
            { value: 3, label: "On Track" },
            { value: 6, label: "Need Attention" },
            { value: 12, label: "Interactions This Month" },
      ];

      return (
            /* Full-width wrapper */
            <div className="w-full py-8">

                  {/* Centered Container */}
                  <div className="max-w-[1400px] mx-auto px-6">

                        {/* Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {stats.map((stat, index) => (
                                    <div
                                          key={index}
                                          className="bg-white border border-gray-100 rounded-xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                          {/* Number */}
                                          <span className="text-4xl font-extrabold text-[#1a3a2f] mb-2">
                                                {stat.value}
                                          </span>

                                          {/* Label */}
                                          <span className="text-slate-500 text-sm md:text-base font-medium text-center">
                                                {stat.label}
                                          </span>
                                    </div>
                              ))}
                        </div>

                  </div>
            </div>
      );
};

export default HeroStates;