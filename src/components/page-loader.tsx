"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // A key state change is required to re-trigger the animation
    setKey(prev => prev + 1); 
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div key={key} className="fixed top-0 left-0 right-0 h-1 z-50">
      <div className="h-full bg-primary animate-loader" />
    </div>
  );
}
