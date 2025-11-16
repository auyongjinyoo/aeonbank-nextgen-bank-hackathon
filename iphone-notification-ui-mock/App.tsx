
import React, { useState, useEffect, useCallback } from 'react';
import IphoneFrame from './components/IphoneFrame';
import NotificationScreen from './components/NotificationScreen';
import type { Notification } from './types';
import { MessageIcon, PostgresIcon, ReactIcon, CalendarIcon, NewsIcon } from './components/icons';

// This function now fetches live data from your API endpoint.
const fetchNotifications = async (): Promise<Omit<Notification, 'appIcon'>[]> => {
  console.log('Fetching live notifications from /api/notifications...');
  try {
    const response = await fetch('http://localhost:3001/api/notifications');
    if (!response.ok) {
      // If the server response is not OK, throw an error to be caught below.
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Successfully fetched live notifications.');
    return data;
  } catch (error) {
    // If the fetch fails, log the error and return an empty array to prevent the app from crashing.
    console.error('Failed to fetch notifications:', error);
    return [];
  }
};

// Helper to get an icon based on the app name
const getIconForApp = (appName: string): React.ReactNode => {
    switch (appName.toLowerCase()) {
      case 'postgres monitor':
        return React.createElement(PostgresIcon, { className: "text-xl" });
      case 'project deploy':
        return React.createElement(ReactIcon, { className: "text-xl" });
      case 'team calendar':
        return React.createElement(CalendarIcon, { className: "text-xl" });
      case 'tech weekly':
        return React.createElement(NewsIcon, { className: "text-xl" });
      case 'team chat':
        return React.createElement(MessageIcon, { className: "text-xl" });
      case 'hadrian': // Assign an icon for your app
        return React.createElement(MessageIcon, { className: "text-xl text-blue-400" });
      default:
        // A generic fallback icon
        return React.createElement(MessageIcon, { className: "text-xl" });
    }
  };


const App: React.FC = () => {
  // State to hold the notifications and loading status
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  // Memoize the notification loading function with useCallback for stability.
  const loadNotifications = useCallback(async () => {
    const data = await fetchNotifications();
    // Map the raw API data to the Notification type required by the UI
    const processedData = data.map(notification => ({
        ...notification,
        appIcon: getIconForApp(notification.appName),
    }));
    setNotifications(processedData);
  }, []); // Empty dependency array means this function is created only once.

  // useEffect to fetch data when the component mounts and then poll for new data
  useEffect(() => {
    // Perform the initial load and manage loading state
    const initialLoad = async () => {
      setLoading(true);
      await loadNotifications();
      setLoading(false);
    };
    
    initialLoad();

    // Set up an interval to poll for new notifications every 5 seconds
    const intervalId = setInterval(loadNotifications, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [loadNotifications]); // Now we depend on the stable loadNotifications function.

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 font-sans">
      <main>
        <IphoneFrame>
          <NotificationScreen notifications={notifications} loading={loading} />
        </IphoneFrame>
      </main>
    </div>
  );
};

export default App;
