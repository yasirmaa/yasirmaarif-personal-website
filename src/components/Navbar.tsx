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
        'sticky top-0 z-50 flex w-full items-center justify-center bg-transparent py-5 shadow-none transition-all duration-300 md:py-4 container mx-auto max-w-screen-xl',
        {
          'bg-transparent': !blur,
          'bg-white': blur,
        }
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="h-10">
            {theme === 'dark' ? (
              <img src={ymLogoWhite} alt="Remi Logo" className="h-full" />
            ) : (
              <img src={ymLogoBlack} alt="Remi Logo" className="h-full" />
            )}
          </a>
          <span className="font-bold text-2xl">Yasirmaa</span>
        </div>

        <div className="hidden gap-x-10 font-semibold md:flex">
          <a href="#hero" className="hover:text-remi-red">
            Home
          </a>
          <a href="#feature" className="hover:text-remi-red">
            Feature
          </a>
          <a href="#contact" className="hover:text-remi-red">
            Review
          </a>
        </div>

        <div className="md:hidden">
          <Sheet key={'right'}>
            <SheetTrigger className="">
              <IoMenu size={32} color="#FF5151" />
            </SheetTrigger>
            <SheetContent side={'right'}>
              <ul className="flex flex-col items-center space-y-5 px-5 py-4 transition-all duration-300">
                <li>
                  <a href="#hero" className="hover:text-remi-red">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#feature" className="hover:text-remi-red">
                    Feature
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-remi-red">
                    Review
                  </a>
                </li>
                <li>
                  <a href="/login">
                    <button className="h-10 w-32 rounded-2xl text-sm font-semibold hover:bg-red-500">
                      Login
                    </button>
                  </a>
                </li>
                <li>
                  <a href="/register">
                    <button className="h-10 w-32 rounded-2xl border-2 border-slate-950 bg-transparent text-sm font-semibold text-black hover:bg-slate-100">
                      Register
                    </button>
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <ul className="hidden items-center space-x-4 text-black md:flex">
          <li>
            <a href="/login">
              <button className="h-10 w-32 rounded-2xl text-sm font-semibold  hover:bg-red-500">
                Login
              </button>
            </a>
          </li>
          <li>
            <button onClick={handleTheme}>theme</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
