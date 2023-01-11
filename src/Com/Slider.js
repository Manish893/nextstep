import React from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
  return (
    
    <section className='container-fluid mb-3 p-0'>
        <div className='slider py-5 mt-4 text-center'>
          <p className='fs-1 text-uppercase font-monospace'>SEvEn VITAl</p>
          <p className='fs-4 py-2'>Premium CBD Products</p>
          
         <Link  to="pro"> <button className='py-2'>view popular Pages</button></Link >
          <div className='d-flex flex-row justify-content-around py-5 fs-5'>
          <div className='py-2'><i class="bi bi-thermometer-half "></i>Gentle extraction</div>
          <div className='py-2'><i class="bi bi-flower1"></i>100% organic farming</div>
          <div className='py-2'><i class="bi bi-cup-straw"></i>100% organic farming</div>
          <div className='py-2'><i class="bi bi-bookmark-check"></i>Certified quality</div>
        </div>
         </div>
      

    </section>
      
    
  )
}
