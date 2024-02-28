import React from 'react'
import '../scss/Footer.scss'
import Appstore from '../img/appstore.png'
import Playstore from '../img/playmarket.png'

function Footer() {
  return (
    <>
      <footer className='py-5'>
        <div className='border-bottom border-top'>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 py-3">
                <div className=' d-flex gap-3 flex-wrap'>
                  <select id="currency" name="currency">
                    <option value="volvo">USD</option>
                    <option value="saab">EU</option>
                    <option value="fiat">INR</option>
                    <option value="audi">NPR</option>
                  </select>

                  <select id="country" name="country">
                    <option value="volvo">US</option>
                    <option value="saab">EUR</option>
                    <option value="fiat">IND</option>
                    <option value="audi">NPL</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4 py-3 ">
                <form className="d-flex" role="search">
                  <input className="form-control rounded-0 fs-6 fw-light " type="email" placeholder="Email" aria-label="" />
                  <button className="btn btn-success  rounded-0" type="submit">Subscribe</button>
                </form>
              </div>

              <div className="col-lg-4 socials py-3">
                <ul className='nav gap-2 d-flex justify-content-lg-end flex-wrap p-0 me-0 '>
                  <li className='nav-item'><a href="" className='nav-link border shadow-sm '><i className="bi bi-facebook fs-5"></i></a></li>
                  <li className='nav-item'><a href="" className='nav-link border shadow-sm '><i className="bi bi-twitter-x fs-5"></i></a></li>
                  <li className='nav-item'><a href="" className='nav-link border shadow-sm '><i className="bi bi-instagram fs-5"></i></a></li>
                  <li className='nav-item'><a href="" className='nav-link border shadow-sm '><i className="bi bi-youtube fs-5"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom">
          <div className="container py-5">
            <div className="row footer-links g-4  ">
              <div className="col-lg-4 col-12 col-md-4">
                <ul className='nav d-flex flex-column p-0 m-0 '>
                  <li className='fw-bold fs-6 '>Products</li>
                  <li className=''><a className='' href="">Listing</a></li>
                  <li className=''><a className='' href="">Detail</a></li>
                  <li className=''><a className='' href="">Trending</a></li>
                  <li className=''><a className='' href="">Recommended</a></li>
                  <li className=''><a className='' href="">Most Popular</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-12 col-md-4">
                <ul className='nav d-flex flex-column p-0 m-0 '>
                  <li className='fw-bold fs-6 '>Checkout Process</li>
                  <li className=''><a className='' href="">Cart</a></li>
                  <li className=''><a className='' href="">Order Address</a></li>
                  <li className=''><a className='' href="">Delivery Time</a></li>
                  <li className=''><a className='' href="">Order Payment</a></li>
                  <li className=''><a className='' href="">Checkout</a></li>
                  <li className=''><a className='' href="">Successful</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-12 col-md-4">
                <ul className='nav d-flex flex-column p-0 m-0 '>
                  <li className='fw-bold fs-6 '>My Order</li>
                  <li className=''><a className='' href="">My Account</a></li>
                  <li className=''><a className='' href="">Promos</a></li>
                  <li className=''><a className='' href=""> Terms & Conditions</a></li>
                  <li className=''><a className='' href="">Help & Support</a></li>
                  <li className=''><a className='' href="">Help Ticket</a></li>
                  <li className=''><a className='' href="">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container pt-3">
            <div className='d-flex flex-wrap justify-content-between '>
              <div className='d-flex gap-3 flex-wrap '>
                <p>© 2024 Grofarweb</p>
                <p><a href="" className='text-secondary '>Privacy</a></p>
                <p><a href="" className='text-secondary '>Terms & Conditions</a></p>
              </div>

              <div className='d-flex flex-wrap gap-3 downloads'>
                <div>
                 <a href=""><img src={Appstore} alt="" /></a> 
                </div>
                <div>
                 <a href=""><img src={Playstore} alt="" /></a> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer