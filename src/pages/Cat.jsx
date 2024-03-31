import React from 'react'
import { products } from '../data/Products';
import { useParams } from 'react-router-dom'
import BCard from '../components/BCard';

function Cat() {

    let { cid } = useParams()
    let cdata = products.filter((a) => a.cat == cid)

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-container">
                            <div className="main-title fs-2">{cid}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {cdata.slice(0, 8).map(products => (
                        <div className="col-lg-3 col-md-4 mt-3 col-sm-6 d-flex justify-content-center" >
                            <BCard key={products.id} img={products.img} title={products.title} price={products.price} discount={products.discount} link={`/product/${products.id}/`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cat