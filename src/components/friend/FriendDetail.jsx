import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContext';
import { FaArrowLeft } from 'react-icons/fa';
import FriendInfoCard from './FriendInfoCard';
import StatsCards from './StatsCards';
import RelationshipGoalCard from './RelationshipGoalCard';
import QuickCheckIn from './QuickCheckIn';

const FriendDetail = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const { getFriendById, addTimelineEntry, showToast } = useAppContext();

      const friend = getFriendById(id);

      if (!friend) {
            return (
                  <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                              <h2 className="text-2xl font-bold text-gray-600">Friend not found</h2>
                              <button
                                    onClick={() => navigate('/')}
                                    className="mt-4 text-[#234e3f] hover:underline"
                              >
                                    Go back home
                              </button>
                        </div>
                  </div>
            );
      }

      const handleCheckIn = (type) => {
            addTimelineEntry(friend.id, friend.name, type);
            showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name} logged successfully!`, 'success');
      };

      return (
            <div className="w-full bg-[#F3F4F6] min-h-screen py-8">
                  <div className="container mx-auto px-6 max-w-6xl">
                        {/* Back Button */}
                        <button
                              onClick={() => navigate('/')}
                              className="flex items-center gap-2 text-gray-600 hover:text-[#234e3f] mb-6 transition-colors"
                        >
                              <FaArrowLeft />
                              <span className="font-medium">Back to Friends</span>
                        </button>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {/* Left Column - Friend Info Card */}
                              <FriendInfoCard friend={friend} />

                              {/* Right Column - 3 Sections */}
                              <div className="space-y-6">
                                    <StatsCards friend={friend} />
                                    <RelationshipGoalCard friend={friend} />
                                    <QuickCheckIn
                                          friendName={friend.name}
                                          onCheckIn={handleCheckIn}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FriendDetail;