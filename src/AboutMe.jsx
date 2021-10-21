import React from 'react';
import heather from './assets/heather.png';

export default function AboutMe() {
  return (
    <>
      <h1
        className='mt-10 text-center font-header text-darkGray'
      >
        About Me
      </h1>

      <br />

      <main className='flex flex-row flex-wrap italic font-body justify-evenly items-center bg-lightGray min-h-screen'>
        <img
          className='mt-5 m-auto h-1/2 w-80 rounded-lg'
          src={heather}
          alt='Heather'
        />
        <p className='m-5 text-left font-body leading-10'>
          I’m a frontend software developer with a passion for user experiences, solving human-based pain points, design, collaborating on diverse teams, and creative problem-solving. I rely on test-driven development to create JavaScript and React user interfaces with CSS and Sass designs. I consistently bring positive energy, a hard work ethic, and an endless curiosity for knowledge! I’m excited to continue to discover, learn, and grow with amazing people.
        </p>
      </main>
    </>
  );
}
