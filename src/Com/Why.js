import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export default function Why() {
  return (
     <section className='container'>
         <div className='why text-center mt-5 py-4'>
        <img   src='https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/art-floral.svg'/>
        <h1 className='py-4'>What is Seven Vital CBD?</h1>
        <p className='fs-6'>
Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc <br/>   
urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!

</p>

        </div>
        <div className='whyr text-center'>
        <div className='row'>
   <div className='col-lg-4'>
   <i class="bi bi-heart-pulse fa-3x"></i>
   <h2>100% Natural Ingredients</h2>
      <p>Lorem ipsum - pulvinar dapibus leo consectetur dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p></div>
   <div className='col-lg-4 '>
   :"<i class="bi bi-recycle fa-3x"></i>
   <h2>Recyclable Materials</h2>
      <p>Dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
   </div>
   <div className='col-lg-4'>
   <i class="bi bi-chevron-double-right fa-3x"></i>
   <h2>FDA Approved</h2>
      <p>Glavrida amet sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo consectetur adipiscing lorem dolor ipsum.</p>
   </div>
   <div className='col-lg-4'>
   <i class="bi bi-filter-circle fa-3x"></i>
   <h2>Unique Technology</h2>
      <p>Nulla sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
   </div>
   <div className='col-lg-4'>
   <i class="bi bi-stars fa-3x"></i>
   <h2>Organic Production</h2>
   <p>Lorem ipsum bnulla ametamet consectetur adipiscing sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
   </div>
   <div className='col-lg-4'>
   <i class="bi bi-award fa-3x"></i>
   <h2>Multiple Level Control</h2>
   <p>Ametamet sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
   </div>
</div>
<Link to='pro'><button className='py-2 mt-5'>view popular Pages</button></Link>

        </div>
       
        

     </section>
  )
}
