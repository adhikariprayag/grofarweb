import React, { useEffect, useState } from 'react'
import '../scss/Bcard.scss'
import { Link } from 'react-router-dom';

function BCard(props) {

    const [count, setCount] = useState( 0  );

    const increaseCount = ()=>{
        setCount(count + 1)
    }

    const decreaseCount = ()=>{

        if (count > 0){
            setCount(count - 1);
        }
        
    }
    return (
        <>
            <div className="bcard border shadow-sm py-4">
                <div className="img-container ">
                    <img src={props.img} alt="" className='' />
                    <div className='discount'>{props.discount}%</div>
                </div>

                <div className='w-100 align-self-start px-2 fs-5'>
                   <Link to={props.link} className='text-decoration-none text-black'> {props.title}</Link>
                </div>
                <div className='w-100 align-self-start p-2 text-success d-flex justify-content-between flex-column flex-md-row gap-2 '>
                    <div>{props.price}$</div>
                    <div className='d-flex gap-1 flex-wrap buttons'>
                        <div><i className="bi bi-dash border shadow-sm" onClick={decreaseCount}></i></div>
                        <div className='px-2 '>{count}</div>
                        <div><i className="bi bi-plus-lg border shadow-sm" onClick={increaseCount}></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BCard