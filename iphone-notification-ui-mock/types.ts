
import React from 'react';

export interface Notification {
  id: string;
  appName: string;
  appIcon: React.ReactNode;
  time: string;
  title: string;
  message: string;
}
