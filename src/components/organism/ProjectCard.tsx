export const ProjectCard = ({
  image,
  title,
  type,
  description,
  link,
}: {
  image: string;
  title: string;
  type: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="col-span-6 md:col-span-3 border shadow-md rounded-2xl p-3 bg-white dark:bg-slate-800">
      <img src={image} alt={title} className="w-full rounded-2xl" />
      <div className="flex flex-col items-start gap-y-1 mt-2">
        <h3 className="font-semibold md:text-2xl text-xl">{title}</h3>
        <p className="font-medium md:text-xl text-lg">{type}</p>
        <p className="text-sm md:text-base text-slate-700 dark:text-white mb-5">{description}</p>
        <a href={link} target="_blank">
          <button className="bg-cyan-600 text-white px-4 py-2 font-semibold rounded-xl text-base md:text-xl">
            View Website
          </button>
        </a>
      </div>
    </div>
  );
};
