import React from 'react'

export default function Footer() {
  return (
    <>
    <section className='container-fluid fone mt-4'>
        <div className='text-center pt-5 pb-5'>
            <h1 className='text-uppercase'>Questions? We are here to help!</h1>
            <h2 >Hotline:001 234-567-890</h2>

        </div>
</section>
<section className='container-fluid ftwo'>
    <div className='container'>
    <div className='row pt-5'>
        <div className='col-lg-4'>
            <h2>Information</h2>
            <ul>
                <li>   Contact</li>
                <li>Demo Design System</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>404 error page</li>
             




            </ul>
        </div>
        <div className='col-lg-4'><h2>Payment methods</h2>
        <i class="bi bi-wallet2"></i>
        <i class="bi bi-credit-card-2-back-fill px-3"></i>
        <p>We care about your safety. We guarantee that your purchase will run smoothly. </p>
        </div>
        <div className='col-lg-4'>
            <h2>Get our newsletter</h2>
            <form className="row g-3">
  <div className="col-auto">
    <label for="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="comment"/>
  </div>
  <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeHolder="Password"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
        </div>

    </div>
    </div>
</section>
      
    </>
  )
}
