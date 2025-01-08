import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={clsx(
          isVisible ? 'opacity-100' : 'hidden',
          'bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
      >
        <FaArrowUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
