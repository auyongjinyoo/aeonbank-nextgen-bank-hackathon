
import React from 'react';
import type { Notification } from './types';
import { PostgresIcon, ReactIcon, CalendarIcon, NewsIcon, MessageIcon } from './components/icons';

export const NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    appName: 'Postgres Monitor',
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    appIcon: React.createElement(PostgresIcon, {className: "text-xl"}),
    time: 'now',
    title: 'Database Alert: High Connection Count',
    message: 'Connections have exceeded 90% of the configured limit. Consider scaling or optimizing queries.',
  },
  {
    id: '2',
    appName: 'Project Deploy',
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    appIcon: React.createElement(ReactIcon, {className: "text-xl"}),
    time: '5m ago',
    title: 'New Feature Deployed to Production',
    message: 'The new user dashboard feature has been successfully deployed. Monitor performance metrics.',
  },
  {
    id: '3',
    appName: 'Team Calendar',
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    appIcon: React.createElement(CalendarIcon, {className: "text-xl"}),
    time: '15m ago',
    title: 'Upcoming: Sprint Planning',
    message: 'Your team sprint planning meeting starts in 30 minutes in the "War Room" channel.',
  },
  {
    id: '4',
    appName: 'Tech Weekly',
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    appIcon: React.createElement(NewsIcon, {className: "text-xl"}),
    time: '1h ago',
    title: 'The Rise of Serverless PostgreSQL',
    message: 'Discover how new serverless architectures are changing the game for database management.',
  },
  {
    id: '5',
    appName: 'Team Chat',
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    appIcon: React.createElement(MessageIcon, {className: "text-xl"}),
    time: '2h ago',
    title: 'Jane Smith mentioned you',
    message: '"@here can someone review my pull request on the auth service? The data retrieval logic is tricky."',
  },
  {
    id: '6',
    appName: 'Postgres Monitor',
    // FIX: Replaced JSX syntax with React.createElement to avoid parsing errors in a .ts file.
    appIcon: React.createElement(PostgresIcon, {className: "text-xl"}),
    time: 'yesterday',
    title: 'Weekly Backup Successful',
    message: 'Your weekly database backup completed successfully. No issues were found.',
  },
];
