import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import 'animate.css';

const about = () => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center animate__animated animate__rubberBand bg-about'>
      <h1 className='about-header animate-character'>About Me</h1>
      <p className='text-about text-center text-light'>Full-stack developer with a value for collaboration and a love for connecting with people from diverse backgrounds.
        Excels in remote work settings and thrives in fast-paced environments.
        Fluency in multiple languages, frameworks, and technologies such as JavaScript, React, Ruby, Ruby on Rails, and Postgresql enables me to handle any challenge easily.
        Passionate about learning and constantly exploring new ideas to grow skills and share knowledge with others. Excited to join a dynamic team and contribute to business success through expertise and an innovative mindset.
      </p>
      
      <section className='d-flex flex-column align-items-center h-auto w-100 mt-4 text-link'>
        <h2 className='text-tech-header'>Tech Stack</h2>
        <ul className='d-flex justify-content-around mt-5 w-100 ps-5'>
          <ul className=''>
            <li className='no-style text-tech'>Tools</li>
            <li className='text-start mt-4'>Node.js</li>
            <li className='text-start mt-2'>Git</li>
            <li className='text-start mt-2'>GitHub</li>
            <li className='text-start mt-2'>Figma</li>
            <li className='text-start mt-2'>Webpack</li>
            <li className='text-start mt-2'>Vite</li>
          </ul>
          
          <ul className=''>
          <li className='no-style text-tech'>Frameworks</li>
            <li className='text-start mt-4'>Bootstrap-5</li>
            <li className='text-start mt-2'>Capybara</li>
            <li className='text-start mt-2'>Selenium</li>
            <li className='text-start mt-2'>Jest</li>
            <li className='text-start mt-2'>JWT (Json Web Token)</li>
          </ul>
          
          <ul className=''>
          <li className='no-style text-tech'>Languages</li>
            <li className='text-start mt-4'>HTML-5</li>
            <li className='text-start mt-2'>CSS-3</li>
            <li className='text-start mt-2'>Vanilla Js</li>
            <li className='text-start mt-2'>React Js</li>
            <li className='text-start mt-2'>Ruby on Rails</li>
            <li className='text-start mt-2'>Webpack-5</li>
          </ul>
        </ul>
      </section>
    </div>
  )
}

export default about