import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import 'animate.css';

const About = () => {
  return (
    <div className='container-fluid m pt-5 vh-100 d-flex flex-column justify-content-center align-items-center animate__animated animate__rubberBand bg-about'>
      <h1 className='about-header animate-character'>About Me</h1>
      <p className='text-about text-center text-light'>Full-stack developer with a value for collaboration and a love for connecting with people from diverse backgrounds.
        Excels in remote work settings and thrives in fast-paced environments.
        Fluency in multiple languages, frameworks, and technologies such as JavaScript, React, Ruby, Ruby on Rails, and Postgresql enables me to handle any challenge easily.
        Passionate about learning and constantly exploring new ideas to grow skills and share knowledge with others. Excited to join a dynamic team and contribute to business success through expertise and an innovative mindset.
      </p>

      <div className="row d-flex mt-3">
      <h2 className='text-tech-header text-center'>Tech Stack</h2>
      <section className='col-md-4 d-flex flex-column align-items-center justify-content-around mt-4 text-link'>
       
        <ul className='d-flex flex-column'>
          <li className='no-style text-tech'>Tools</li>
          <li className='text-start mt-4'>Node.js</li>
          <li className='text-start mt-2'>Git</li>
          <li className='text-start mt-2'>GitHub</li>
          <li className='text-start mt-2'>Figma</li>
          <li className='text-start mt-2'>Webpack</li>
          <li className='text-start mt-2'>Vite</li>
        </ul>
      </section>

      <section className='col-md-4 d-flex flex-column align-items-center mt-4 text-link'>
        <ul className='d-flex flex-column'>
          <li className='no-style text-tech'>Frameworks</li>
          <li className='text-start mt-4'>Bootstrap-5</li>
          <li className='text-start mt-2'>Capybara</li>
          <li className='text-start mt-2'>Selenium</li>
          <li className='text-start mt-2'>Jest</li>
          <li className='text-start mt-2'>JWT (Json Web Token)</li>
        </ul>
      </section>

      <section className='col-md-4 d-flex flex-column align-items-center mt-4 text-link'>
        <ul className='d-flex flex-column'>
          <li className='no-style text-tech'>Languages</li>
          <li className='text-start mt-4'>HTML-5</li>
          <li className='text-start mt-2'>CSS-3</li>
          <li className='text-start mt-2'>Vanilla Js</li>
          <li className='text-start mt-2'>React Js</li>
          <li className='text-start mt-2'>Ruby on Rails</li>
          <li className='text-start mt-2'>Webpack-5</li>
        </ul>
      </section>
    </div>
    </div>
  )
}

export default About;
