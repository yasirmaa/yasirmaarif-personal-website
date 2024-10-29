import yasirHero from '@/assets/yasir-hero.jpg';

export const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-12 h-[600px] max-w-screen-xl mx-auto">
      <div className="col-span-6 h-full flex flex-col items-start justify-center">
        <h1 className="text-5xl font-semibold">
          HEY! I'am <span className="font-bold">Yasir</span>, A <br />
          <span className="font-bold">Frontend Developer</span>
        </h1>
        <p className="text-xl mt-4">
          I'm a passionate student constantly learning and exploring the world of web development.
          Join me on my journey as I build and create amazing web experiences.
        </p>
        <button className="bg-[#006C8D] text-white px-4 py-2 font-semibold rounded-xl mt-4">
          Hire Me!
        </button>
      </div>
      <div className="col-span-6 h-full flex justify-end items-center">
        <img src={yasirHero} alt="" className="w-96 h-96" />
      </div>
    </section>
  );
};
