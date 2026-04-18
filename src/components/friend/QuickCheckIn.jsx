import React from 'react';
import { FaPhone, FaComment, FaVideo } from 'react-icons/fa';

const QuickCheckIn = ({ friendName, onCheckIn }) => {
      const handleCheckIn = (type) => {
            onCheckIn(type);
      };

      return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1D2939] mb-4">Quick Check-In</h3>
                  <div className="grid grid-cols-3 gap-4">
                        <button
                              onClick={() => handleCheckIn('call')}
                              className="flex flex-col items-center gap-2 p-4 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors"
                        >
                              <FaPhone className="text-2xl" />
                              <span className="text-sm font-medium">Call</span>
                        </button>
                        <button
                              onClick={() => handleCheckIn('text')}
                              className="flex flex-col items-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
                        >
                              <FaComment className="text-2xl" />
                              <span className="text-sm font-medium">Text</span>
                        </button>
                        <button
                              onClick={() => handleCheckIn('video')}
                              className="flex flex-col items-center gap-2 p-4 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors"
                        >
                              <FaVideo className="text-2xl" />
                              <span className="text-sm font-medium">Video</span>
                        </button>
                  </div>
            </div>
      );
};

export default QuickCheckIn;