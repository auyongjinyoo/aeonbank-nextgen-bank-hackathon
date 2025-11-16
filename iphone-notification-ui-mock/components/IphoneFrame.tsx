
import React from 'react';

interface IphoneFrameProps {
  children: React.ReactNode;
}

const IphoneFrame: React.FC<IphoneFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[60px] h-[850px] w-[420px] shadow-2xl">
        <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[10px] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[46px] overflow-hidden w-full h-full bg-black">
            {children}
        </div>
    </div>
  );
};

export default IphoneFrame;
