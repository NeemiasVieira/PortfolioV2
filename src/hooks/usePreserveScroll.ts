'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const usePreserveScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', saveScrollPosition);
    return () => window.removeEventListener('beforeunload', saveScrollPosition);
  }, []);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const needScroll = sessionStorage.getItem('needScroll');
    if (savedPosition && needScroll) {
      sessionStorage.removeItem('scrollPosition');
      sessionStorage.removeItem('needScroll');
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, [pathname]);
};
