import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import portrait from '../images/HeadShot.jpg'
import './sideBar.css'
import { NavLink } from 'react-router-dom';

const navBar = () => {
  return (
  	<nav className='container-fluid w-auto'>
      <div className='row h-100'>
        <div className='col-auto min-vh-100 bg-sidebar padding'>
          <ul className='no-style mt-3 d-flex flex-column align-items-center'>
            <li>
              <img className='portrait img-fluid' src={portrait} alt=''></img>
            </li>
            <li>
              <h4 className='mt-5 w-auto pe-2 text-style-portfolio color8'>My Portfolio</h4>
            </li>
            <li>
              <NavLink className='nav-link pe-2 mt-5' to='/'>
                <i className="fa-solid fa-house fa-fade"></i><span className='text-style-sidebar text-light m-2 d-none d-lg-inline'>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link pe-2 mt-5' to='/project'>
                <i className="fa-solid fa-laptop-file fa-fade"></i><span className='text-style-sidebar text-light m-2 d-none d-lg-inline'>Projects</span>
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link pe-2 mt-5' to='/about'>
                <i className="fa-solid fa-person-circle-question fa-fade"></i><span className='text-style-sidebar text-light m-2 d-none d-lg-inline'>About</span>
              </NavLink>
            </li>

            <li>
              <NavLink className='nav-link pe-2 mt-5' to='/contact'>
                <i className="fa-solid fa-envelope fa-fade"></i><span className='text-style-sidebar text-light m-2 d-none d-lg-inline'>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navBar
