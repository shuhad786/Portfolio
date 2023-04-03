import React from 'react'
import './project.css'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


const project = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center animate__animated animate__jello bg-danger'>
    <div className='container-fluid d-flex justify-content-center align-items-center bg-danger'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/800x400/000000/FFFFFF?text=Slide+1" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400/FFFFFF/000000?text=Slide+2" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400/000000/FFFFFF?text=Slide+3" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
</div>
  )
}

export default project;





