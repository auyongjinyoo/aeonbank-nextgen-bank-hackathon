
import React from 'react';
import type { Notification } from '../types';

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  const { appIcon, appName, time, title, message } = notification;

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 shadow-lg text-white">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 mr-2 flex items-center justify-center">
          {appIcon}
        </div>
        <span className="text-sm font-medium opacity-80">{title}</span>
        <span className="text-xs opacity-60 ml-auto">{time}</span>
      </div>
      <div>
        {/* <h3 className="font-semibold text-base">{title}</h3> */}
        <p className="text-sm opacity-90 leading-snug">{message}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
