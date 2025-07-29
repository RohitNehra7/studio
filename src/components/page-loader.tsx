"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Previous pathname logic to avoid showing loader on initial load
    let previousPathname = pathname;

    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = (newPathname: string) => {
       if (previousPathname !== newPathname) {
          setLoading(false);
          previousPathname = newPathname;
       }
    };
    
    // Simulate navigation start
    handleStart();

    // Simulate navigation end after a short delay
    const timer = setTimeout(() => handleComplete(pathname), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div className="h-full bg-primary animate-loader" />
    </div>
  );
}
