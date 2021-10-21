import React from 'react';
import {
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiCss3,
  DiPostgresql,
} from 'react-icons/di';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const stack = [
  {
    subtitle: 'HTML',
    icon: <DiHtml5 size={160} />,
  },
  {
    subtitle: 'CSS',
    icon: <DiCss3 size={160} />,
  },
  {
    subtitle: 'Sass',
    icon: <DiSass size={160} />,
  },
  {
    subtitle: 'TailwindCSS',
    icon: <SiTailwindcss size={160} />,
  },
  {
    subtitle: 'JavaScript',
    icon: <DiJsBadge size={160} />,
  },
  {
    subtitle: 'React.js',
    icon: <DiReact size={160} />,
  },
  {
    subtitle: 'TypeScript',
    icon: <SiTypescript size={160} />,
  },
  {
    subtitle: 'Node.js',
    icon: <DiNodejsSmall size={160} />,
  },
  {
    subtitle: 'PostgreSQL',
    icon: <DiPostgresql size={160} />,
  },
];

export default function TechStack() {
  const displayTechStack = stack.map((stack) =>
    <section className='flex p-5 items-center justify-around'>
      <div className='relative h-52 w-52 cursor-pointer mb-5'>
        <div className='absolute text-center inset-0 bg-white opacity-25 rounded-lg shadow-2xl'>
          {stack.subtitle}
        </div>
        <div className='absolute inset-0 transform hover:translate-y-10 transition duration-300'>
          <div className='flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl'>
            {stack.icon}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <h1
        className='mt-10 text-center font-header text-darkGray'
      >
        Tech Stack
      </h1>

      <br />

      <main className='flex flex-row flex-wrap italic font-body justify-evenly items-center bg-lightBlue min-h-screen'>

        {displayTechStack}

      </main>
    </>
  );
}
