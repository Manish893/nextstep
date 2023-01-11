import React from 'react'
import Magazinedata from '../Data/Magazinedata'


export default function Magazine() {
  return (
    <>
     <section className='container-fluid pr text-center fs-1 py-4 mt-2'>
        <p>MAGAZINE</p>
        </section>
        <section className='container mt-5'>
            <div className='row mg'>
        

 {Magazinedata.map((a)=>(
    <>
       <div className='col-lg-4 py-4'>
    <img src={a.img} className='position-relative'/>
    {/* <img src={a.image} className='position-absolute '/> */}
<h1>{a.title}</h1>
<p>{a.desc}</p>
<button className='px-3 py-2'><i class="bi bi-mailbox px-2"></i>Add to cart</button>
</div>
</>))} 
</div>
</section>
<section className='container'>
    <div className='more text-center py-5 px-5 mt-5 fs-2'>
        <button>Load more articles...</button>
    </div>
   
    
    
</section>

      
    </>
  )
}
