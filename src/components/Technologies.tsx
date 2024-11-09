import { BiLogoPostgresql } from 'react-icons/bi';
import { RiFlutterFill, RiReactjsLine } from 'react-icons/ri';
import { SiMysql, SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiLaravel } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
});

const Technologies = () => {
  return (
    <section id="technologies" className="pt-12 md:pt-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-16">Technologies</h2>
      <div className="flex items-center justify-center gap-x-4 gap-y-5 max-w-screen-lg flex-wrap mx-auto px-8">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <RiReactjsLine className="md:h-16 md:w-16 h-12 w-12 text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <SiNextdotjs className="md:h-16 md:w-16 h-12 w-12 text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <SiTailwindcss className="md:h-16 md:w-16 h-12 w-12 text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <SiTypescript className="md:h-16 md:w-16 h-12 w-12 text-[#037ACC]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <RiFlutterFill className="md:h-16 md:w-16 h-12 w-12 text-[#5FC9F8]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.75)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <SiMysql className="md:h-16 md:w-16 h-12 w-12 text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <BiLogoPostgresql className="md:h-16 md:w-16 h-12 w-12 text-[#316192]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.25)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <SiLaravel className="md:h-16 md:w-16 h-12 w-12 text-[#FF2D20]" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl p-2 border-4 border-neutral-800 bg-neutral-800 dark:bg-transparent"
        >
          <SiRedux className="md:h-16 md:w-16 h-12 w-12 text-[#764ABC]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
