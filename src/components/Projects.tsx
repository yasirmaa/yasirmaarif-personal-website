import projectRemi from '@/assets/project-remi.png';
import projectRemiMobile from '@/assets/project-remi-mobile.png';
import projectEcommerce from '@/assets/project-olshop-laravel.png';
import projectRedux from '@/assets/project-redux.png';
import { ProjectCard } from './organism/ProjectCard';

const contentProject = [
  {
    title: 'ReMi: Reminder Me Website',
    type: 'Web Application',
    description: 'A web-based platform for managing tasks with reminder notifications.',
    link: 'https://remi.agileteknik.com/',
    image: projectRemi,
  },
  {
    title: 'ReMi: Reminder Me Mobile',
    type: 'Mobile Application',
    description: 'A mobile app for setting and receiving task reminders on-the-go.',
    link: 'https://play.google.com/store/apps/details?id=com.agileteknik.remi',
    image: projectRemiMobile,
  },
  {
    title: 'Online E-Commerce Store with Laravel',
    type: 'Web Application',
    description: 'An e-commerce website for managing and selling products online.',
    link: 'https://ecommerce.example.com',
    image: projectEcommerce,
  },
  {
    title: 'E-Commerce with React Redux',
    type: 'Web Application',
    description: 'An advanced e-commerce platform implementing Redux for state management.',
    link: 'https://redux-ecommerce.example.com',
    image: projectRedux,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-screen-xl mx-auto pt-12 md:pt-20 px-8 2xl:px-0 lg:px-10"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-16">My Projects</h2>
      <div className="grid grid-cols-6 gap-4">
        {contentProject.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            type={project.type}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
