import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../scss/Home.scss'

function Home() {
  return (
    <>
    <Navbar/>

    <main className='py-5 s'>
      <div className='container '>
        <div className="row">

          <div className="col-12">
            <div className="title-container">
             <div className="main-title">what are you looking for?</div> 
             <div className="main-btn"><a href="">See More</a></div>
            </div>
          </div>

          <div className="col-12">
            <div className="title-container">
             <div className="main-title">promos for you </div> 
             <div className="main-btn"><a href="">See More</a></div>
            </div>
          </div>

          <div className="col-12">
            <div className="title-container">
             <div className="main-title">pick's today</div> 
             <div className="main-btn"><a href="">See More</a></div>
            </div>
          </div>

          <div className="col-12">
            <div className="title-container">
             <div className="main-title">recommended for you</div> 
             <div className="main-btn"><a href="">See More</a></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
    </>
  )
}

export default Home