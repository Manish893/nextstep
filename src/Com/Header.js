import React from 'react'

export default function Header() {
  return (
    
    <section className='container-fluid hh p-0'>

     <div className='d-flex justify-content-center h'>
        <div className='p-2'>
        <i class="bi bi-question-circle"></i>
           <span> Hotline: 001 234-567-890</span>
            </div>
        <div className=' p-2'>
        <i class="bi bi-check-lg"></i>
        <span> Free shipping worldwide for orders over $50</span>
            </div>
        <div className=' p-2'>
        <i class="bi bi-check-lg"></i>
        <span> 30 days return period</span>
     </div> 
     </div>
    
    {/* </div> */}
    </section>
  
  )
}
