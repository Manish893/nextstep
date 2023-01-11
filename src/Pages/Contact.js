import React from 'react'

export default function Contact() {
  return (
    <>
    <section className='container-fluid pr text-center fs-1 py-4 mt-5'>
        <p>CONTACT</p>
        </section>
        <section className='container text-center mb-5 mt-5'>
            <div className='d-flex flex-row mt-2 justify-content-evenly email'>
                <div className='py-2'>
                    <i class="bi bi-headset fx-10"></i>
                    <p>Customer support</p>
                    <h1>001 234-567-890</h1>
                    </div>
                <div className='py-2'>
                <i class="bi bi-envelope-heart"></i>
                    <p>Email</p>
                    <h1>001 234-567-890</h1>
                </div>
                <div className='py-2'>
                <i class="bi bi-geo-alt"></i>
                    <p>info@dream-theme.com</p>
                    <h1>001234, Los-Angeles, California</h1>
                </div>
            </div>
        </section>
        <section className='container form mt-3'>
        <div className='fst-italic py-5 text-center'><h1>Questions? Drop us a line!</h1></div>
     <form className='px-4'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name*</label>
    <input type="name" class="form-control" id="exampleInputEmail1" placeholder='Name*'/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email*</label>
    <input type="email" class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp"  placeholder='Email*'/>
  </div>
  
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Message</textarea>
</div>
<div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="htmlForm-check-label" for="exampleCheck1">By using this form you agree with the storage and handling of your data by this website.</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>      
            
            
        </section>
      
    </>
  )
}
