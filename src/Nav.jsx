import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='pt-3 pb-3 text-center font-header tracking-wide bg-darkGray sm:p-3 lg:tracking-widest'>
      <Link
        to='/'
        className='text-lightBlue md:m-10 p-2 rounded-lg cursor-pointer hover:text-white transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Home
      </Link>
      <Link
        to='/projects'
        className='text-lightBlue md:m-10 p-2 rounded-lg cursor-pointer hover:text-white transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Projects
      </Link>
      <Link
        to='/techstack'
        className='text-lightBlue md:m-10 p-2 rounded-lg cursor-pointer hover:text-white transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Stack
      </Link>
      <Link
        to='/aboutme'
        className='text-lightBlue md:m-10 p-2 rounded-lg cursor-pointer hover:text-white transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        About Me
      </Link>
      <Link
        to='/contact'
        className='text-lightBlue md:m-10 p-2 rounded-lg cursor-pointer hover:text-white transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
      >
        Contact
      </Link>
    </nav>
  );
}
