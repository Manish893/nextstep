import React from 'react'
 import Productdata from '../Data/Productdata'

export default function Most() {
  return (
    <section className='container'>
                 <div className='why text-center mt-5 py-4'>
        <img   src='https://the7.io/cbd/wp-content/uploads/sites/104/2022/12/art-floral.svg'/>
        <h1 className='py-4'>What is Seven Vital CBD?</h1>
        <p>
Nam vitae sapien dapibus, condimentum ipsum non, porttitor purus. Cras et diam ac – nunc <br/>   
urna magna, porttitor eu laoreet aliquam velit. Suspendisse potenti!

</p>
</div>
<div className='row text-center most'>
{Productdata.map((a)=>(
    <>
    
    <div className='col-lg-4 py-4'>
       <img className='' src={a.img}/>
       <h2 className='py-2 pb-0 fs-4'>{a.title}</h2>
       <h3 className='fs-5'>{a.desc}</h3>
       
       <button className='px-3 py-2'><i class="bi bi-mailbox px-2"></i>Add to cart</button>
       </div>
       </>
    
))}
</div>


    </section>
    
  )
}
