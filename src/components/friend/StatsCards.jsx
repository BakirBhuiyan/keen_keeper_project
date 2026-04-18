import React from 'react';
import { FaClock, FaBullseye, FaCalendarAlt } from 'react-icons/fa';

const StatsCards = ({ friend }) => {
      return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1D2939] mb-4">Statistics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-[#F3F4F6] rounded-xl p-4 text-center">
                              <FaClock className="text-2xl text-[#234e3f] mx-auto mb-2" />
                              <p className="text-2xl font-bold text-[#1D2939]">{friend.days_since_contact}</p>
                              <p className="text-xs text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-[#F3F4F6] rounded-xl p-4 text-center">
                              <FaBullseye className="text-2xl text-[#234e3f] mx-auto mb-2" />
                              <p className="text-2xl font-bold text-[#1D2939]">{friend.goal}</p>
                              <p className="text-xs text-gray-500">Goal (days)</p>
                        </div>
                        <div className="bg-[#F3F4F6] rounded-xl p-4 text-center">
                              <FaCalendarAlt className="text-2xl text-[#234e3f] mx-auto mb-2" />
                              <p className="text-lg font-bold text-[#1D2939]">{friend.next_due_date}</p>
                              <p className="text-xs text-gray-500">Next Due Date</p>
                        </div>
                  </div>
            </div>
      );
};

export default StatsCards;