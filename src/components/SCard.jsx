import React from 'react'
import '../scss/Scard.scss'

function SCard(props) {
  return (
    <>
    <div className="scard border shadow-sm ">
        <img src={props.img} alt="" />
        <h6 className='fw-light '>{props.title}</h6>
    </div>
    </>
  )
}

export default SCard