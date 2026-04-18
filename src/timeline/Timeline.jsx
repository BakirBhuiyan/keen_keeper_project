import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaPhone, FaComment, FaVideo, FaFilter } from 'react-icons/fa';

const Timeline = () => {
      const { timeline } = useAppContext();
      const [filter, setFilter] = useState('all');

      const filteredTimeline = filter === 'all'
            ? timeline
            : timeline.filter(entry => entry.type === filter);

      const getIcon = (type) => {
            switch (type) {
                  case 'call':
                        return <FaPhone className="text-green-500" />;
                  case 'text':
                        return <FaComment className="text-blue-500" />;
                  case 'video':
                        return <FaVideo className="text-purple-500" />;
                  default:
                        return null;
            }
      };

      const getIconBg = (type) => {
            switch (type) {
                  case 'call':
                        return 'bg-green-100';
                  case 'text':
                        return 'bg-blue-100';
                  case 'video':
                        return 'bg-purple-100';
                  default:
                        return 'bg-gray-100';
            }
      };

      return (
            <div className="w-full bg-[#F3F4F6] min-h-screen py-8">
                  <div className="container mx-auto px-6 max-w-4xl">
                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-[#1D2939] mb-8">Timeline</h1>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3 mb-8">
                              <button
                                    onClick={() => setFilter('all')}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${filter === 'all'
                                                ? 'bg-[#234e3f] text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                          }`}
                              >
                                    <FaFilter />
                                    <span>All</span>
                              </button>
                              <button
                                    onClick={() => setFilter('call')}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${filter === 'call'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                          }`}
                              >
                                    <FaPhone />
                                    <span>Calls</span>
                              </button>
                              <button
                                    onClick={() => setFilter('text')}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${filter === 'text'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                          }`}
                              >
                                    <FaComment />
                                    <span>Texts</span>
                              </button>
                              <button
                                    onClick={() => setFilter('video')}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${filter === 'video'
                                                ? 'bg-purple-500 text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                          }`}
                              >
                                    <FaVideo />
                                    <span>Videos</span>
                              </button>
                        </div>

                        {/* Timeline Entries */}
                        {filteredTimeline.length === 0 ? (
                              <div className="bg-white rounded-2xl p-12 text-center">
                                    <p className="text-gray-500 text-lg">No timeline entries yet.</p>
                                    <p className="text-gray-400 text-sm mt-2">Start by checking in with a friend from the Home page!</p>
                              </div>
                        ) : (
                              <div className="space-y-4">
                                    {filteredTimeline.map((entry) => (
                                          <div
                                                key={entry.id}
                                                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4"
                                          >
                                                {/* Icon */}
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconBg(entry.type)}`}>
                                                      {getIcon(entry.type)}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                      <h3 className="font-semibold text-[#1D2939]">{entry.title}</h3>
                                                      <p className="text-sm text-gray-500">{entry.friendName}</p>
                                                </div>

                                                {/* Date */}
                                                <div className="text-right">
                                                      <p className="text-sm font-medium text-gray-700">{entry.date}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Timeline;