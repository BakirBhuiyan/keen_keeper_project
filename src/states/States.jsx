import React from 'react';
import { useAppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const States = () => {
      const { friends, timeline, getTimelineStats } = useAppContext();

      const stats = getTimelineStats();

      const pieData = [
            { name: 'Calls', value: stats.call, color: '#22C55E' },
            { name: 'Texts', value: stats.text, color: '#3B82F6' },
            { name: 'Videos', value: stats.video, color: '#A855F7' }
      ];

      // Calculate friend status counts
      const friendStats = {
            total: friends.length,
            overdue: friends.filter(f => f.status === 'overdue').length,
            upcoming: friends.filter(f => f.status === 'upcoming').length,
            active: friends.filter(f => f.status === 'active').length
      };

      return (
            <div className="w-full bg-[#F3F4F6] min-h-screen py-8">
                  <div className="container mx-auto px-6 max-w-4xl">
                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-[#1D2939] mb-8">Friendship Analytics</h1>

                        {/* Friend Stats Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                                    <p className="text-3xl font-bold text-[#234e3f]">{friendStats.total}</p>
                                    <p className="text-sm text-gray-500">Total Friends</p>
                              </div>
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                                    <p className="text-3xl font-bold text-red-500">{friendStats.overdue}</p>
                                    <p className="text-sm text-gray-500">Overdue</p>
                              </div>
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                                    <p className="text-3xl font-bold text-yellow-500">{friendStats.upcoming}</p>
                                    <p className="text-sm text-gray-500">Almost Due</p>
                              </div>
                              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                                    <p className="text-3xl font-bold text-green-500">{friendStats.active}</p>
                                    <p className="text-sm text-gray-500">On Track</p>
                              </div>
                        </div>

                        {/* Pie Chart */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                              <h2 className="text-xl font-bold text-[#1D2939] mb-6">Interaction Breakdown</h2>

                              {stats.call === 0 && stats.text === 0 && stats.video === 0 ? (
                                    <div className="text-center py-12">
                                          <p className="text-gray-500 text-lg">No interactions logged yet.</p>
                                          <p className="text-gray-400 text-sm mt-2">Start checking in with friends to see your analytics!</p>
                                    </div>
                              ) : (
                                    <div className="h-80">
                                          <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                      <Pie
                                                            data={pieData}
                                                            cx="50%"
                                                            cy="50%"
                                                            innerRadius={60}
                                                            outerRadius={100}
                                                            paddingAngle={5}
                                                            dataKey="value"
                                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                      >
                                                            {pieData.map((entry, index) => (
                                                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                                            ))}
                                                      </Pie>
                                                      <Tooltip />
                                                      <Legend />
                                                </PieChart>
                                          </ResponsiveContainer>
                                    </div>
                              )}

                              {/* Stats Summary */}
                              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                                    <div className="text-center">
                                          <p className="text-2xl font-bold text-green-500">{stats.call}</p>
                                          <p className="text-sm text-gray-500">Total Calls</p>
                                    </div>
                                    <div className="text-center">
                                          <p className="text-2xl font-bold text-blue-500">{stats.text}</p>
                                          <p className="text-sm text-gray-500">Total Texts</p>
                                    </div>
                                    <div className="text-center">
                                          <p className="text-2xl font-bold text-purple-500">{stats.video}</p>
                                          <p className="text-sm text-gray-500">Total Videos</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default States;