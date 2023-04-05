import React from 'react'
import './project.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import savvy from '../images/screencapture-savvy-project-deploy.png'
import covid from '../images/screencapture-resilient-chimera-530486-netlify-app-2023-04-04-13_12_43.png'
import math from '../images/screencapture-golden-caramel-27f60c-netlify-app-2023-04-04-13_20_42.png'
import portfolio from '../images/screencapture-shuhad786-github-io-My-portfolio-website-2023-04-04-13_31_47.png'
import list from '../images/screencapture-shuhad786-github-io-ToDoListApp-2023-04-04-13_49_27.png'
import space from '../images/screencapture-inspiring-tulumba-f9e3e3-netlify-app-2023-04-04-13_50_16.png'

const project = () => {
  return (
    <div className='container-fluid p d-flex justify-content-center align-items-center animate__animated animate__jello bg-project'>
      <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="4"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h5 className='text-project'>Budget App</h5>
            <p className='text-description'>Savvy is an application that allows the user to keep track of expenditures and to catalog the type of expense it will fall under. Built with: ruby on rails.</p>
            <img src={ savvy } className="img" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <div className="btn-group">
                <a href="https://github.com/shuhad786/Budget-app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-square-up-right fa-beat"></i> GitHub Repo</a>
                <a href="https://savvy-project-deploy.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-eye fa-beat"></i> Live Version</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <h5 className='text-project'>Covid-19 World Status</h5>
          <p className='text-description'>This project is a database w ith an API that displays all the information about the world statistics of COVID-19 and allows the user to select a country to see all the stats available in that region or city. Built with: React-js and Redux</p>
          <img src={ covid } className="img" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <div className="btn-group">
              <a href="https://github.com/shuhad786/Covid-19-world-status" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-square-up-right fa-beat"></i> GitHub Repo</a>
              <a href="https://resilient-chimera-530486.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-eye fa-beat"></i> Live Version</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
            <h5 className='text-project'>Math Magician</h5>
            <p className='text-description'>A calculator application that allows the user to do simple mathematics with the look and feel of a personalized calculator. Built with: React-js</p>
            <img src={ math } className="img" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">  
            <div className="btn-group">
              <a href="https://github.com/shuhad786/math-magician-react" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">GitHub Repo</a>
              <a href="https://golden-caramel-27f60c.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Live Version</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <h5 className='text-project'>My Portfolio</h5>
          <p className='text-description'>Deployment of my portfolio in Microverse, where a Figma template is used and to recreate a chosen design as the Portfolio everything was created with Html, CSS and JavaScript.</p>
          <img src= { portfolio } className="img" alt="Slide 4" />
          <div className="carousel-caption d-none d-md-block">
            <div className="btn-group">
              <a href="https://github.com/shuhad786/My-portfolio-website" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-square-up-right fa-beat"></i> GitHub Repo</a>
              <a href="https://shuhad786.github.io/My-portfolio-website" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-eye fa-beat"></i> Live Version</a>
            </div>
          </div>
        </div>
        <div className="carousel-item p-5">
          <h5 className='text-project'>ToDoListApp</h5>
          <p className='text-description'>Create a to do list app with crud functionality</p>
          <img src= { list } className="img" alt="Slide 5" />
          <div className="carousel-caption d-none d-md-block">
            <div className="btn-group">
              <a href="https://github.com/shuhad786/ToDoListApp" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-square-up-right fa-beat"></i> GitHub Repo</a>
              <a href="https://shuhad786.github.io/ToDoListApp" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-eye fa-beat"></i> Live Version</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <h5 className='text-project'>Space Traveler Hub</h5>
          <p className='text-description'>This application allows a civilian to book a flight via SpaceX to outer space, you may choose the mission and rocket available and the date of departure. Built with: React-js and Redux</p>
          <img src= { space } className="img" alt="Slide 6" />
          <div className="carousel-caption d-none d-md-block">
            <div className="btn-group">
              <a href="https://github.com/shuhad786/space-traveler-hub" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-square-up-right fa-beat"></i> GitHub Repo</a>
              <a href="https://inspiring-tulumba-f9e3e3.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"><i className="fa-solid fa-eye fa-beat"></i> Live Version</a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <i className="fa-solid fa-circle-arrow-left fa-beat arrows"></i>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <i className="fa-solid fa-circle-arrow-right fa-beat arrows"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default project;





