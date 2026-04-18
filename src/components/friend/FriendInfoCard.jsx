import React from 'react';
import { FaClock, FaArchive, FaTrash } from 'react-icons/fa';

const FriendInfoCard = ({ friend }) => {
      const getStatusColor = () => {
            switch (friend.status) {
                  case 'overdue':
                        return 'bg-red-100 text-red-700';
                  case 'upcoming':
                        return 'bg-yellow-100 text-yellow-700';
                  case 'active':
                        return 'bg-green-100 text-green-700';
                  default:
                        return 'bg-gray-100 text-gray-600';
            }
      };

      const getStatusLabel = () => {
            switch (friend.status) {
                  case 'overdue':
                        return 'Overdue';
                  case 'upcoming':
                        return 'Almost Due';
                  case 'active':
                        return 'On Track';
                  default:
                        return friend.status;
            }
      };

      return (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  {/* Profile Picture */}
                  <div className="flex flex-col items-center mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100">
                              <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="w-full h-full object-cover"
                              />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1D2939]">{friend.name}</h2>
                        <span className={`mt-2 px-4 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
                              {getStatusLabel()}
                        </span>
                  </div>

                  {/* Tags */}
                  <div className="flex justify-center gap-2 mb-6 flex-wrap">
                        {friend.tags.map((tag, index) => (
                              <span
                                    key={index}
                                    className="bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-full text-xs font-bold uppercase"
                              >
                                    {tag}
                              </span>
                        ))}
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Bio</h3>
                        <p className="text-gray-700">{friend.bio}</p>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Email</h3>
                        <p className="text-gray-700">{friend.email}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3 mt-8">
                        <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                              <FaClock className="text-xl" />
                              <span className="text-xs font-medium">Snooze 2 Weeks</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors">
                              <FaArchive className="text-xl" />
                              <span className="text-xs font-medium">Archive</span>
                        </button>
                        <button className="flex flex-col items-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
                              <FaTrash className="text-xl" />
                              <span className="text-xs font-medium">Delete</span>
                        </button>
                  </div>
            </div>
      );
};

export default FriendInfoCard;