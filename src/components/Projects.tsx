import projectRemi from '@/assets/project-remi.png';
import projectRemiMobile from '@/assets/project-remi-mobile.png';
import projectEcommerce from '@/assets/project-olshop-laravel.png';
import projectRedux from '@/assets/project-redux.png';

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-xl mx-auto py-20">
      <h2 className="text-4xl font-semibold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-6 gap-4">
        {/* Project 1: ReMi Web */}
        <div className="col-span-6 md:col-span-3 border shadow-md rounded-2xl p-3 bg-white dark:bg-slate-800">
          <img src={projectRemi} alt="ReMi Web Preview" className="w-full rounded-2xl" />
          <div className="flex flex-col items-start gap-y-1 mt-2">
            <h3 className="font-semibold text-2xl">ReMi: Reminder Me Website</h3>
            <p className="font-medium text-xl">Web Application</p>
            <p className="text-base text-slate-700 dark:text-white mb-5">
              A web-based platform for managing tasks with reminder notifications.
            </p>
            <a href="https://remi.agileteknik.com/" target="_blank">
              <button className="bg-cyan-600 text-white px-4 py-2 font-semibold rounded-xl">
                View Website
              </button>
            </a>
          </div>
        </div>

        {/* Project 2: ReMi Mobile */}
        <div className="col-span-6 md:col-span-3 border shadow-md rounded-2xl p-3 bg-white dark:bg-slate-800">
          <img src={projectRemiMobile} alt="ReMi Mobile Preview" className="w-full rounded-2xl" />
          <div className="flex flex-col items-start gap-y-1 mt-2">
            <h3 className="font-semibold text-2xl">ReMi: Reminder Me Mobile</h3>
            <p className="font-medium text-xl">Mobile Application</p>
            <p className="text-base text-slate-700 dark:text-white mb-5">
              A mobile app for setting and receiving task reminders on-the-go.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.agileteknik.remi"
              target="_blank"
            >
              <button className="bg-cyan-600 text-white px-4 py-2 font-semibold rounded-xl">
                View in Playstore
              </button>
            </a>
          </div>
        </div>

        {/* Project 3: E-Commerce Platform */}
        <div className="col-span-6 md:col-span-3 border shadow-md rounded-2xl p-3 bg-white dark:bg-slate-800">
          <img
            src={projectEcommerce}
            alt="E-Commerce Platform Preview"
            className="w-full rounded-2xl"
          />
          <div className="flex flex-col items-start gap-y-1 mt-2">
            <h3 className="font-semibold text-2xl">Online E-Commerce Store with Laravel</h3>
            <p className="font-medium text-xl">Web Application</p>
            <p className="text-base text-slate-700 dark:text-white mb-5">
              An e-commerce website for managing and selling products online.
            </p>
            <a href="https://ecommerce.example.com" target="_blank">
              <button className="bg-cyan-600 text-white px-4 py-2 font-semibold rounded-xl">
                View Website
              </button>
            </a>
          </div>
        </div>

        {/* Project 4: E-Commerce with Redux */}
        <div className="col-span-6 md:col-span-3 border shadow-md rounded-2xl p-3 bg-white dark:bg-slate-800">
          <img src={projectRedux} alt="Redux E-Commerce Preview" className="w-full rounded-2xl" />
          <div className="flex flex-col items-start gap-y-1 mt-2">
            <h3 className="font-semibold text-2xl">E-Commerce with React Redux</h3>
            <p className="font-medium text-xl">Web Application</p>
            <p className="text-base text-slate-700 dark:text-white mb-5">
              An advanced e-commerce platform implementing Redux for state management.
            </p>
            <a href="https://redux-ecommerce.example.com" target="_blank">
              <button className="bg-cyan-600 text-white px-4 py-2 font-semibold rounded-xl">
                View Website
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
