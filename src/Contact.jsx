import React from 'react';
import { Link } from 'react-router-dom';
import { SiLinkedin } from 'react-icons/si';
import { ImFileText } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  const handleLiClick = (e) => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/hpeterson462/')
  }

  const handleGitClick = (e) => {
    e.preventDefault();
    window.open('https://github.com/hpeterson462')
  }

  return (
    <>
      <h1
        className='mt-10 text-center font-header text-darkGray'
      >
        Contact
      </h1>

      <br />

      <main className='flex flex-row flex-wrap italic font-body justify-evenly items-center bg-lightBlue'>
        <h3 className='m-1 mb-5'>
          Get in touch!
        </h3>
        <div className='flex items-center justify-center p-5 pt-3'>
          <div className='rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out'>
            <FaGithubSquare size={45} onClick={handleGitClick} />
          </div>
          <div className='p-1 rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out'>
            <SiLinkedin size={40} onClick={handleLiClick} />
          </div>
          <span className='p-2 text-2xl font-body'>
            /hpeterson462
          </span>
        </div>
        <div className='flex items-center justify-center p-5 pt-1'>
          <div className='p-1 rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out'>
            <Link to='/resume'>
              <ImFileText size={40} />
            </Link>
          </div>
          <span className='p-2 text-2xl font-body'>
            Resume
          </span>
        </div>
        <div className='flex items-center justify-center p-5 pt-1'>
          <div className='rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out'>
            <a href='mailto:hpeterson462@gmail.com'>
              <HiOutlineMail size={45} />
            </a>
          </div>
          <span className='p-2 text-2xl font-body'>
            hpeterson462@gmail.com
          </span>
        </div>
      </main>
    </>
  );
}
