import React from 'react'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <header className='sticky-top w-100 '>
                <nav className="navbar navbar-expand-lg bg-body-tertiary d-none d-lg-block ">
                    <div className="container d-flex align-items-centre">
                        <div className='d-flex align-items-center gap-3'>
                            <Link className="navbar-brand fw-bold p-0 m-0  text-dark" to="/"><img className='rounded-circle logo-img-lg' src={Logo} alt="" /></Link>
                            <div>
                                <div className="nav-item dropdown d-flex gap-5">
                                    <a className="nav-link dropdown-toggle text-top-nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-geo-alt-fill rounded-circle p-2 text-center fs-6 border "></i> <span className='text-secondary fs-6 fw-light ms-2'>Select Location</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div>
                                <form className="d-flex" role="search">
                                    <input className="form-control rounded-0 fs-6 fw-light " type="search" placeholder="Search For Products.." aria-label="Search" />
                                    <button className="btn btn-success  rounded-0" type="submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>

                        <div>
                            <ul className='navbar-nav top-navbar d-flex align-items-center m-0 p-0 gap-3 '>
                                <li className='nav-item'><a className='nav-link border shadow-sm' href="" title="Account"><i className="bi bi-box-arrow-in-right fs-5  "></i></a></li>
                                <li className='nav-item'><a className='nav-link border shadow-sm' href="" title="Notifications"><i className="bi bi-bell fs-5"></i></a></li>
                                <li className='nav-item'>
                                    <button type="button" className="btn m-0 p-0  position-relative">
                                        <Link className='nav-link border shadow-sm' to="/cart" title="Cart"><i className="bi bi-cart3 fs-5 "></i></Link>
                                        <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                                            {props.size}
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg  bg-success text-light py-lg-0 shadow " data-bs-theme="dark">
                    <div className="container d-flex align-items-center justify-content-between">
                        <Link className="navbar-brand fw-bold d-lg-none d-inline text-dark" to="/"><img className='rounded-circle logo-img' src={Logo} alt="" /> Grocery</Link>
                        <div className='d-flex align-items-center '>
                            <button type="button" className="btn  position-relative d-lg-none rounded-circle shadow-sm border">
                                <Link className='nav-link p-0 ' to="/cart" title="Cart"><i className="bi bi-cart3 fs-5 "></i></Link>
                                <span className="position-absolute top-50  start-100 translate-middle badge rounded-pill bg-danger">
                                    {props.size}
                                </span>
                            </button>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <i className="bi bi-list fs-1 text-dark fw-bolder "></i>
                            </button>
                        </div>

                        <div className="offcanvas offcanvas-end bg-success " tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header d-flex justify-content-end  d-lg-none">
                                <button type="button" className='btn' data-bs-dismiss="offcanvas"><i className="bi bi-x-lg text-dark fs-2 fw-bold "></i> </button>
                            </div>

                            <div className='d-flex justify-content-lg-between flex-column flex-lg-row align-items-start'>
                                <div className="offcanvas-body bg-success">
                                    {/*TOP NAV ITEMS */}
                                    <div className="d-lg-none d-flex align-items-centre flex-column gap-3 py-3 border-bottom  ">
                                        <div className='d-flex align-items-center gap-3'>

                                            <div>
                                                <div className="nav-item dropdown d-flex gap-5">
                                                    <a className="nav-link dropdown-toggle text-top-nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi bi-geo-alt-fill rounded-circle p-2 text-center fs-6 border "></i> <span className='text-secondary fs-6 fw-light ms-2'>Select Location</span>
                                                    </a>
                                                    <ul className="dropdown-menu bg-light">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div>
                                            <ul className='navbar-nav top-navbar d-flex align-items-center flex-row m-0 p-0 gap-3 '>
                                                <li className='nav-item'><a className='nav-link border shadow-sm' href="" title="Account"><i className="bi bi-box-arrow-in-right fs-5  "></i></a></li>
                                                <li className='nav-item'><a className='nav-link border shadow-sm' href="" title="Notifications"><i className="bi bi-bell fs-5"></i></a></li>
                                                <li className='nav-item'>
                                                    <button type="button" className="btn  position-relative">
                                                        <Link className='nav-link border shadow-sm' to="/cart" title="Cart"><i className="bi bi-cart3 fs-5 "></i></Link>
                                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                            {props.size}
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/*TOP NAV ITEMS */}

                                    <ul className="navbar-nav d-flex align-items-lg-center gap-2 align-items-start">
                                        <li className="nav-item">
                                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Products</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Checkout Process
                                            </a>
                                            <ul className="dropdown-menu bg-white shadow ">
                                                <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                                                <li><a className="dropdown-item" href="#">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                My Order
                                            </a>
                                            <ul className="dropdown-menu bg-white shadow ">
                                                <li><a className="dropdown-item" href="#">My Order</a></li>
                                                <li><a className="dropdown-item" href="#">Review</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Return</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="offcanvas-body bg-success">
                                    <ul className="navbar-nav d-flex align-items-center gap-3">
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="#">Trending</a>
                                        </li>
                                        <li className="nav-item bg-lg-danger ">
                                            <a className="nav-link" href="#">Promos</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='container py-3 d-lg-none'>
                        <form className="d-flex w-100 shadow " role="search" data-bs-theme="light">
                            <input className="form-control rounded-0 " type="search" placeholder="Search Products.." aria-label="Search" />
                            <button className="btn btn-success  rounded-0" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar