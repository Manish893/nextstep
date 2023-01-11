 import React from 'react'
 import { Routes, Route, Link } from "react-router-dom";
import Account from '../Pages/Account';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Magazine from '../Pages/Magazine';
import Product from '../Pages/Product';
 
 export default function Nav() {
   return (
     <>
       <section className='container'>
      <div className='row mt-5 hi'>
        <div className='col-lg-4'>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
  <Link to='/'><i class="bi bi-house-door fa-1x"></i></Link>
   
     
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
          <Link class="nav-link" to='about'>Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="acc">Account</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="magg">Magazine</Link >
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="cont">Contact</Link>
        </li>
          </ul>
       
    </div>
  </div>
</nav>
        </div>
        <div className='col-lg-4'>
        <Link to='/'>  <img  className='w-100' src='https://the7.io/cbd/wp-content/uploads/sites/104/2021/05/vital-logo-seven.svg'/></Link>
        </div>
        <div className='col-lg-4 pt-3 text-end'>
        <i class="bi bi-lock-fill pe-2"></i>
        <i class="bi bi-search "></i>
        </div>
      </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Product />} />
        <Route path="acc" element={<Account />} />
        <Route path="magg" element={<Magazine />} />
        <Route path="cont" element={<Contact />} />
        <Route path="pro" element={<Product />} />
        
      </Routes>
       
     </>
   )
 }
 