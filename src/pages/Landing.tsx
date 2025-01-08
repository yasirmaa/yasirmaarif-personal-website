import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/landing/Hero';
import { Navbar } from '@/components/landing/Navbar';
import Projects from '@/components/landing/Projects';
import { ScrollToTop } from '@/components/molecules/ScrollToTop';
import Technologies from '@/components/landing/Technologies';
import { useTheme } from '@/hooks/useTheme';

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <div className="overflow-x-hidden text-neutral-800 dark:text-white">
      {theme === 'dark' ? (
        <div className="fixed top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      ) : (
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      )}
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
