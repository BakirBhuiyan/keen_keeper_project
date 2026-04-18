import React from 'react';
import { FaEdit } from 'react-icons/fa';

const RelationshipGoalCard = ({ friend }) => {
      return (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1D2939] mb-4">Relationship Goal</h3>
                  <div className="flex items-center justify-between">
                        <div>
                              <p className="text-3xl font-bold text-[#234e3f]">{friend.goal} days</p>
                              <p className="text-sm text-gray-500">Contact every {friend.goal} days</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#234e3f] text-white rounded-lg hover:bg-[#1a3a2f] transition-colors">
                              <FaEdit />
                              <span className="text-sm font-medium">Edit</span>
                        </button>
                  </div>
            </div>
      );
};

export default RelationshipGoalCard;