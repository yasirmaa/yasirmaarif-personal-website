import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IoMenu } from 'react-icons/io5';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ymLogoBlack from '@/assets/logo-ym-black.png';
import ymLogoWhite from '@/assets/logo-ym-white.png';
import { useTheme } from '@/hooks/useTheme';

export const Navbar = () => {
  const [blur, setBlur] = useState(false);

  const { theme, setDarkTheme, setLightTheme } = useTheme();

  const handleTheme = () => {
    if (document.querySelector('html')?.classList.contains('dark')) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  useEffect(() => {
    const blurHandler = () => {
      if (window.scrollY > 10) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };
    window.addEventListener('scroll', blurHandler);
    return () => {
      window.removeEventListener('scroll', blurHandler);
    };
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 z-50 flex w-full items-center justify-center bg-transparent py-5 shadow-none transition-all duration-300 md:py-4 ',
        {
          'bg-transparent': !blur,
          'bg-white/50 backdrop-blur-sm backdrop-filter dark:bg-black/50': blur,
        }
      )}
    >
      <div className="flex w-full items-center justify-between px-8 2xl:px-0 lg:px-10 max-w-screen-xl">
        <a href="/" className="flex items-center gap-2">
          <div className="md:h-10 h-7">
            {theme === 'dark' ? (
              <img src={ymLogoWhite} alt="Remi Logo" className="h-full" />
            ) : (
              <img src={ymLogoBlack} alt="Remi Logo" className="h-full" />
            )}
          </div>
          <span className="font-bold md:text-2xl text-xl">Yasirmaarif</span>
        </a>

        <div className="hidden gap-x-10 font-semibold md:flex">
          <a href="#hero" className="hover:text-remi-red">
            Home
          </a>
          <a href="#technologies" className="hover:text-remi-red">
            Technologies
          </a>
          <a href="#projects" className="hover:text-remi-red">
            Projects
          </a>
        </div>

        <div className="md:hidden flex">
          <div className="flex flex-col justify-center">
            <input
              id="light-switch"
              type="checkbox"
              name="light-switch"
              onClick={handleTheme}
              className="light-switch sr-only"
            />
            <label className="relative cursor-pointer p-2" htmlFor="light-switch">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 dark:hidden"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  className="fill-sky-400/20 stroke-cyan-500"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  className="stroke-cyan-500"
                ></path>
              </svg>
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 hidden dark:block">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="fill-sky-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  className="fill-sky-500"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  className="fill-sky-500"
                ></path>
              </svg>
            </label>
          </div>
          <Sheet key={'right'}>
            <SheetTrigger className="">
              <IoMenu size={32} />
            </SheetTrigger>
            <SheetContent side={'right'}>
              <ul className="flex flex-col items-center space-y-5 px-5 py-4 transition-all duration-300">
                <li>
                  <a href="#hero" className="hover:text-remi-red">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="hover:text-remi-red">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-remi-red">
                    Projects
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <ul className="hidden items-center space-x-4 text-black md:flex">
          <li>
            <div className="flex flex-col justify-center ml-3">
              <input
                id="light-switch"
                type="checkbox"
                name="light-switch"
                onClick={handleTheme}
                className="light-switch sr-only"
              />
              <label className="relative cursor-pointer p-2" htmlFor="light-switch">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 dark:hidden"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className="fill-sky-400/20 stroke-cyan-500"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className="stroke-cyan-500"
                  ></path>
                </svg>
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 hidden dark:block">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-sky-400/20"
                  ></path>
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className="fill-sky-500"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className="fill-sky-500"
                  ></path>
                </svg>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
