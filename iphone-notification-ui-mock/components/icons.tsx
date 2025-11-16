
import React from 'react';

export const WifiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038C8.586 15.336 9.073 15.336 9.371 15.038C9.669 14.74 9.669 14.253 9.371 13.955C9.073 13.657 8.586 13.657 8.288 13.955C7.99 14.253 7.99 14.74 8.288 15.038z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.938 12.388C11.794 13.244 13.206 13.244 14.062 12.388C14.918 11.532 14.918 10.12 14.062 9.264C13.206 8.408 11.794 8.408 10.938 9.264C10.082 10.12 10.082 11.532 10.938 12.388z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.152 16.59C15.908 15.834 16.664 15.078 17.42 14.322C19.782 12.06 19.782 8.352 17.42 6.09C15.058 3.828 11.35 3.828 8.988 6.09C6.626 8.352 6.626 12.06 8.988 14.322C9.744 15.078 10.5 15.834 11.256 16.59" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.86 10.23C7.222 7.968 10.93 7.968 13.292 10.23" />
  </svg>
);

export const BatteryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h13.5v-12h-13.5v12z" />
  </svg>
);

export const PostgresIcon: React.FC<{className?: string}> = ({ className }) => (
    <i className={`fa-solid fa-database text-blue-400 ${className}`}></i>
);

export const ReactIcon: React.FC<{className?: string}> = ({ className }) => (
    <i className={`fa-brands fa-react text-cyan-400 ${className}`}></i>
);

export const CalendarIcon: React.FC<{className?: string}> = ({ className }) => (
    <i className={`fa-solid fa-calendar-days text-red-400 ${className}`}></i>
);

export const NewsIcon: React.FC<{className?: string}> = ({ className }) => (
    <i className={`fa-solid fa-newspaper text-gray-300 ${className}`}></i>
);

export const MessageIcon: React.FC<{className?: string}> = ({ className }) => (
    <i className={`fa-solid fa-comment-dots text-green-400 ${className}`}></i>
);
