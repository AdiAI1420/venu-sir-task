import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark p-3 fixed-top"  style={{backgroundColor:"white"}}>
    <div class="container-fluid">
    
      <Link to="/" class="navbar-brand text-dark" >
      <img  src="https://insemitech.com/wp-content/uploads/2022/03/insemi-logo.png" alt="logo" height="30" /> </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
       
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
              <li><Link to="/about" class="dropdown-item" >About </Link></li>
              <li><Link to="" class="dropdown-item" >Newsroom </Link></li>
            
            </ul>
          </li>



          <li class="nav-item dropdown">
          <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Blog</a></li>
            <li><a class="dropdown-item" href="#">About Us</a></li>
            <li><a class="dropdown-item" href="#">Contact us</a></li>
          </ul>
        </li>






        <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Careers
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>




          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>



          <li class="nav-item">
          <a class="nav-link mx-2  text-dark" aria-current="page" href="#">Conact</a>
        </li>
      

        </ul>
      </div>
    </div>
    </nav>
  
    </>
  );
}


export default Navbar;
