import yasirPict from '@/assets/yasir-pict.png';
import { motion } from 'framer-motion';

const motionVariants = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: delay,
    },
  },
});

export const Hero = () => {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-12 max-w-screen-xl px-8 2xl:px-0 lg:px-10 mx-auto pt-20 md:pt-32 lg:pt-20"
    >
      <motion.img
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        src={yasirPict}
        alt=""
        className="w-11/12 md:hidden mx-auto col-span-1 mb-4 mt-6"
      />
      <div className="md:col-span-7 lg:col-span-6 flex flex-col col-span-1 items-start justify-center">
        <motion.h1
          variants={motionVariants(0)}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold"
        >
          HEY! I'am <span className="font-bold">Yasir</span>, A <br />
          <span className="font-bold text-yellow-500">Frontend Developer</span>
        </motion.h1>
        <motion.p
          variants={motionVariants(0.5)}
          initial="hidden"
          animate="visible"
          className="md:text-lg lg:text-xl mt-4 text-base pr-4"
        >
          I'm a passionate student constantly learning and exploring the world of web development.
          Join me on my journey as I build and create amazing web experiences.
        </motion.p>
        <button className="bg-cyan-600 text-white px-4 py-2 font-semibold rounded-xl mt-4">
          Hire Me!
        </button>
      </div>
      <div className="hidden md:col-span-5 lg:col-span-6 md:flex justify-end items-center">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          src={yasirPict}
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
};
