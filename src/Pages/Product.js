import React from 'react'
import Productdata from '../Data/Productdata'




export default function Product() {
  return (
    <>
    <section className='container-fluid pr text-center fs-1 py-4 mt-2'>
        <p>PRODUCTS</p>
        </section>
        <section className='container mt-5'>
            <div className='row pg'>
               
                    {Productdata.map((a)=>
                    (<>
                     <div className='col-lg-4 py-4'>
                        <img className='' src={a.img}/>
                        <h1 className='py-2 pb-0'>{a.title}</h1>
                        <h2>{a.desc}</h2>
                        <ul>
                            <li>{a.t1}</li>
                            <li> {a.t2}</li>
                            <li>  {a.t3}</li>
                            <li>{a.t4}</li> 
                        
                        </ul>
                        <button className='px-3 py-2'><i class="bi bi-mailbox px-2"></i>Add to cart</button>
                        </div>
                        </>
                       ))}
                       
                        
                       
                  
                
            </div>

        </section>
        

    </>

  )
}
