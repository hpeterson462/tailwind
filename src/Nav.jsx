import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='mt-3 text-center tracking-wide lg:tracking-widest'>
      <Link
        to='/'
        className='md:m-10 p-2 rounded-lg cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Home
      </Link>
      <Link
        to='/projects'
        className='md:m-10 p-2 rounded-lg cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Projects
      </Link>
      <Link
        to='/aboutme'
        className='md:m-10 p-2 rounded-lg cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        About Me
      </Link>
      <Link
        to='/techstack'
        className='md:m-10 p-2 rounded-lg cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Stack
      </Link>
      <Link
        to='/contact'
        className='md:m-10 p-2 rounded-lg cursor-pointer hover:text-blue-400 transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Contact
      </Link>
    </nav>
  );
}
