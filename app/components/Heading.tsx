'use client';

import React from 'react';

interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ title, center, subTitle }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">{title}</div>
      {subTitle && (
        <div className="mt-2 text-sm text-neutral-500">{subTitle}</div>
      )}
    </div>
  );
};

export default Heading;
