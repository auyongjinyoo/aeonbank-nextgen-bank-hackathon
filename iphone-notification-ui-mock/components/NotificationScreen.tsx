
import React, { useState, useEffect } from 'react';
import type { Notification } from '../types';
import NotificationItem from './NotificationItem';
import { WifiIcon, BatteryIcon } from './icons';

interface NotificationScreenProps {
  notifications: Notification[];
  loading: boolean;
}

const NotificationScreen: React.FC<NotificationScreenProps> = ({ notifications, loading }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div 
      className="h-full w-full bg-gradient-to-b from-gray-900 via-blue-900 to-purple-700 text-white"
    >
      <div className="absolute top-0 left-0 right-0 h-[100px] z-10 px-8 pt-6 flex justify-between items-start text-sm font-semibold">
        <span>{formattedTime}</span>
        <div className="bg-black/50 backdrop-blur-xl rounded-full h-8 w-[140px] absolute top-2 left-1/2 -translate-x-1/2"></div>
        <div className="flex items-center space-x-2">
          <WifiIcon className="w-4 h-4" />
          <BatteryIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="pt-24 pb-8 px-4 h-full overflow-y-auto">
        <div className="text-center mb-6">
            <h1 className="text-5xl font-bold">{time.toLocaleDateString([], { weekday: 'long' })}</h1>
            <p className="text-xl">{time.toLocaleDateString([], { month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Notification Centre</h2>
        </div>

        <div className="space-y-3">
          {loading ? (
            <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 shadow-lg text-white text-center">
              <p>Loading notifications...</p>
            </div>
          ) : notifications.length > 0 ? (
            notifications.map(notification => (
              <NotificationItem key={notification.id} notification={notification} />
            ))
          ) : (
            <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 shadow-lg text-white text-center">
              <p>No new notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;
