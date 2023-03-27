import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import portrait from '../images/HeadShot.jpg'
import './sideBar.css'

const navBar = () => {
  return (
  	<div className='container-fluid'>
		<div className='row'>
			<div className='col-auto min-vh-100 bg'>
        <ul className='mt-3'>
          <li>
            <img className='portrait' src={portrait} alt=''></img>
          </li>
          <li>
            <a href='\' className='nav-link p-2'>
              <i class="fa-solid fa-house fa-fade"></i><span className='text-light m-2 d-none d-sm-inline'>Home</span>
            </a>
          </li>

          <li>
            <a href='\' className='nav-link p-2'>
            <i class="fa-solid fa-person-circle-question fa-fade"></i><span className='text-light m-2 d-none d-sm-inline'>About</span>
            </a>
          </li>

          <li>
            <a href='\' className='nav-link p-2'>
            <i class="fa-solid fa-envelope fa-fade"></i><span className='text-light m-2 d-none d-sm-inline'>Contact</span>
            </a>
          </li>
        </ul>
      </div>
		</div>
			
   </div>
  )
}

export default navBar
