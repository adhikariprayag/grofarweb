import React from 'react'
import p1 from '../img/r1.jpg'
import { products } from '../data/Products';
import BCard from '../components/BCard';
import { useParams } from 'react-router-dom';

function Product() {

    let { id } = useParams()
    var dataid = products.find((a) => a.id == id)

    return (
        <>
            <div className="container py-5 ">
                <div className="row gap-lg-2 gap-2">
                    <div className="col-lg border shadow-sm rounded-4">
                        <img src={dataid.img} alt="" className='w-100 rounded-4 ' />
                    </div>

                    <div className="col-lg border shadow-sm rounded-4 px-3 py-4 ">
                        <h2 className='fw-bold fs-2'>{dataid.title}</h2>
                        <div className='d-flex align-items-center gap-3'>
                            <p> <span className='fw-light'>Product Price:</span> <span className='fw-bold fs-5'>${dataid.price}</span></p>
                            <p className='rounded-2 bg-body-secondary text-success fs-6 p-1'>{dataid.discount}% Off</p>
                        </div>
                        <div>
                            <h5 className='fw-normal fs-6'>Product Details</h5>
                            <p className='fw-light '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, voluptates?</p>
                        </div>
                        <div className='d-flex justify-content-between '>
                            <div>
                                <h5 className='fw-normal fs-6 p-0 m-0'>Delivery</h5>
                                <p className='fw-light p-0 m-0'>Free</p>
                            </div>
                            <div className="text-end">
                                <h5 className='fw-normal fs-6 p-0 m-0'>Available In:</h5>
                                <p className='fw-light p-0 m-0'>1kg, 2kg, 5kg</p>
                            </div>
                        </div>
                        <div className='mt-3 '>
                            <div className="btn btn-success w-100 text-uppercase py-3"><i className="bi bi-cart3"></i> Buy Now</div>
                            <div className="btn btn-warning w-100 mt-3 text-uppercase py-3"><i className="bi bi-plus-lg"></i> Add to Cart</div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="title-container">
                            <div className="main-title">You May Also Like</div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map(products => (
                            <div className="col-lg-3 col-md-4 mt-3 col-sm-6 d-flex justify-content-center" >
                                <BCard key={products.id} img={products.img} title={products.title} price={products.price} discount={products.discount}  link={`/product/${products.id}/`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product