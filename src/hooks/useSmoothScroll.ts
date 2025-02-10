import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const scrollToElement = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');

      if (targetElement) {
        const headerHeight = 100;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    };

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach((link) => {
      link.addEventListener('click', scrollToElement as EventListener);
    });

    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener('click', scrollToElement as EventListener);
      });
    };
  }, []);
};

export default useSmoothScroll;
