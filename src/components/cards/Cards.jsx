import React from 'react';
import { useNavigate } from 'react-router';

const Cards = ({ item }) => {
      const navigate = useNavigate();
      const { id, name, picture, days_since_contact, tags, status } = item;

      const getStatusColor = () => {
            switch (status) {
                  case 'overdue':
                        return 'bg-[#FEE2E2] text-[#DC2626]';
                  case 'upcoming':
                        return 'bg-[#FEF3C7] text-[#D97706]';
                  case 'active':
                        return 'bg-[#DCFCE7] text-[#16A34A]';
                  default:
                        return 'bg-gray-100 text-gray-600';
            }
      };

      const getStatusLabel = () => {
            switch (status) {
                  case 'overdue':
                        return 'Overdue';
                  case 'upcoming':
                        return 'Almost Due';
                  case 'active':
                        return 'On Track';
                  default:
                        return status;
            }
      };

      const getButtonColor = () => {
            switch (status) {
                  case 'overdue':
                        return 'bg-[#F04438] hover:bg-red-600';
                  case 'upcoming':
                        return 'bg-[#F2A93B] hover:bg-[#e0982d]';
                  case 'active':
                        return 'bg-[#16A34A] hover:bg-green-600';
                  default:
                        return 'bg-gray-400 hover:bg-gray-500';
            }
      };

      const handleClick = () => {
            navigate(`/friend/${id}`);
      };

      return (
            <div
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full"
                  onClick={handleClick}
            >
                  {/* Profile Picture */}
                  <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full overflow-hidden mb-4 border-3 border-gray-100 flex-shrink-0">
                        <img
                              src={picture}
                              alt={name}
                              className="w-full h-full object-cover"
                        />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D2939] mb-1 truncate w-full">
                        {name}
                  </h3>

                  {/* Days Since Contact */}
                  <p className="text-gray-400 font-medium text-sm mb-4">
                        {days_since_contact} days ago
                  </p>

                  {/* Tags */}
                  <div className="flex justify-center gap-2 mb-4 flex-wrap min-h-[32px]">
                        {tags && tags.slice(0, 2).map((tag, index) => (
                              <span
                                    key={index}
                                    className="bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-full text-xs font-semibold"
                              >
                                    {tag}
                              </span>
                        ))}
                  </div>

                  {/* Status Button */}
                  <div className="mt-auto w-full">
                        <span className={`inline-block w-full py-2.5 px-4 rounded-full font-semibold text-sm text-white shadow-sm ${getButtonColor()}`}>
                              {getStatusLabel()}
                        </span>
                  </div>
            </div>
      );
};

export default Cards;