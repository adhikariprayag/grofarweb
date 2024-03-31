import React from 'react'
import '../scss/Scard.scss'
import { Link } from 'react-router-dom'

function SCard(props) {
  return (
    <>
      <div className="scard border shadow-sm ">
        <img src={props.img} alt="" />
        <Link to={props.link} className='text-decoration-none text-black'> <h6 className='fw-light '>{props.title}</h6></Link>
      </div>
    </>
  )
}

export default SCard