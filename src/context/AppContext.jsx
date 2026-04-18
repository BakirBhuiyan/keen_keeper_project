import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AppContext = createContext();

export const useAppContext = () => {
      const context = useContext(AppContext);
      if (!context) {
            throw new Error('useAppContext must be used within AppProvider');
      }
      return context;
};

export const AppProvider = ({ children }) => {
      const [friends, setFriends] = useState([]);
      const [timeline, setTimeline] = useState([]);
      const [loading, setLoading] = useState(true);

      // Load friends data from JSON
      useEffect(() => {
            fetch('/data.json')
                  .then(res => res.json())
                  .then(data => {
                        setFriends(data);
                        setLoading(false);
                  })
                  .catch(err => {
                        console.error('Error loading friends:', err);
                        setLoading(false);
                  });
      }, []);

      // Add timeline entry
      const addTimelineEntry = (friendId, friendName, type) => {
            const newEntry = {
                  id: Date.now(),
                  friendId,
                  friendName,
                  type, // 'call', 'text', 'video'
                  date: new Date().toISOString().split('T')[0],
                  title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`
            };
            setTimeline(prev => [newEntry, ...prev]);
      };

      // Show toast notification
      const showToast = (message, type = 'success') => {
            toast(message, {
                  type: type === 'success' ? 'success' : type === 'error' ? 'error' : 'info'
            });
      };

      // Get friend by ID
      const getFriendById = (id) => {
            return friends.find(friend => friend.id === parseInt(id));
      };

      // Get timeline stats for pie chart
      const getTimelineStats = () => {
            const stats = { call: 0, text: 0, video: 0 };
            timeline.forEach(entry => {
                  if (stats[entry.type] !== undefined) {
                        stats[entry.type]++;
                  }
            });
            return stats;
      };

      const value = {
            friends,
            timeline,
            loading,
            addTimelineEntry,
            showToast,
            getFriendById,
            getTimelineStats
      };

      return (
            <AppContext.Provider value={value}>
                  {children}
            </AppContext.Provider>
      );
};