import { useState, useEffect } from 'react';

type Breakpoints = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  is2K: boolean;
  is4K: boolean;
};

const useBreakpoints = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    isMobile: window.innerWidth < 480,
    isTablet: window.innerWidth >= 480 && window.innerWidth < 768,
    isDesktop: window.innerWidth >= 768 && window.innerWidth < 1024,
    isLargeDesktop: window.innerWidth >= 1024,
    is2K: window.innerWidth > 2560 && window.innerWidth <= 3840,
    is4K: window.innerWidth > 3840,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoints({
        isMobile: width <= 600,
        isTablet: width > 600 && width <= 1024,
        isDesktop: width > 1024 && width <= 1440,
        isLargeDesktop: width > 1440 && width <= 2560,
        is2K: width > 2560 && width <= 3840,
        is4K: width > 3840,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoints;
};

export default useBreakpoints;
