'use client';

import React, { useEffect } from 'react';
import EmptyState from './components/EmptyState';
interface ErrorStateProps {
  error: any;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <EmptyState
      title="Uh oh!"
      subTitle="Something went wrong. Please try again later."
    />
  );
};

export default ErrorState;
