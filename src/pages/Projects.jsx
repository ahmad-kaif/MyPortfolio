import { Link } from "react-router-dom";

// import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='text-2xl md:text-5xl'>
        My{" "}
        <span className='text-[#285c8f] drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-200 mt-2 text-sm leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Feel free to
        explore the codebase and contribute your ideas for further enhancements.
        I'm constantly learning and working on new projects, many of which are still in the building phase. Stay tuned for updates as they continue to evolve. Your ideas and contributions are always welcome!
      </p>

      <div className='flex flex-wrap mt-20 m-auto gap-20'>
        {projects.map((project) => (
          <div className='lg:w-[300px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-sm text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-md text-blue-600'
                >
                  Github Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 mt-6' />

      <CTA />
    </section>
  );
};

export default Projects;