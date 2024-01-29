import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark p-3 fixed-top"  style={{backgroundColor:"white"}}>
    <div class="container-fluid">
    
      <Link to="/" class="navbar-brand text-dark" >
      <img  src="../assets/logo.jpg" alt="logo" height="50" width="50px" className='img-fluid' /> </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
       
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" >
          
              <li><Link to="/about" class="dropdown-item" >About </Link></li>
              <li><Link to="/NewsRoom" class="dropdown-item" >Newsroom </Link></li>
            
            </ul>
          </li>




          <li class="nav-item dropdown">
          <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" >
            <li><Link to='/frontend' class="dropdown-item" >Semi Condutor-Frentend Design  </Link></li>
            <li><a class="dropdown-item" href="#">Current Openings</a></li>
            
          </ul>
        </li>



        <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Careers
            </a>
            <ul class="dropdown-menu" >
              <li><a class="dropdown-item" href="#">Life at InSemi</a></li>
              <li><a class="dropdown-item" href="#">Current Openings</a></li>
              
            </ul>
          </li>




          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
            </a>
            <ul class="dropdown-menu" >
              <li><Link to='/Blogs' class="dropdown-item" href="#">Blogs</Link></li>
              <li><Link to='/Educationcenter' class="dropdown-item" >Education Center</Link></li>
              
            </ul>
          </li>



          <li class="nav-item">
          <Link to='/Contact' class="nav-link mx-2  text-dark" aria-current="page" >Conact</Link>
        </li>
      

        </ul>
      </div>
    </div>
    </nav>
  
    </>
  );
}


export default Navbar;





