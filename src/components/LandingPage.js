import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useGetProductsQuery } from "../features/mainSlice";
import { useSelector, useDispatch } from 'react-redux'

const LandingPage = () => {

    const product = useSelector((state) => state.productsApi)
    const dispatch = useDispatch()


    const { data, error, isLoading } = useGetProductsQuery();
    console.log("Data:", data);
    console.log("Error:", error);
    console.log("Loading:", isLoading);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }





    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container">

            {/* categories section */}
            <div>
                <nav className="navbar navbar-expand-lg bg-danger-subtle mt-3">
                    <div className="container-fluid row justify-content-center">

                        <ul className="navbar-nav row col-10 justify-content-center">
                            <li className="nav-item col-auto mx-2 justify-content-center">
                                <a className="nav-link" aria-current="page" href="#">Smartphones</a>
                            </li>
                            <li className="nav-item col-auto mx-2 justify-content-center">
                                <a className="nav-link" href="#">Laptops</a>
                            </li>
                            <li className="nav-item col-auto mx-2 justify-content-center">
                                <a className="nav-link" href="#">Fragrances</a>
                            </li>
                            <li className="nav-item col-auto mx-2 justify-content-center">
                                <a className="nav-link" href="#" >Home-Decoration</a>
                            </li>
                            <li className="nav-item col-auto mx-2 justify-content-center">
                                <a className="nav-link" href="#" >Groceries</a>
                            </li>
                            <li className="nav-item col-auto mx-2 justify-content-center">
                                <a className="nav-link" href="#" >Skincare</a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div >

            {/* slide section */}
            <div id="carouselExampleAutoplaying" className="container carousel slide mt-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/seed/picsum/300/150" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/seed/picsum/300/150" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/seed/picsum/300/150" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/*discover section */}
            <div className="row my-4">
                <div className="col d-flex flex-column m-2">
                    <img src="https://picsum.photos/300/200" className="mb-auto" alt="..." />
                    <div className="card-body mt-auto">
                        <button className="btn btn-secondary w-100">Discover Electronics! </button>
                    </div>
                </div>
                <div className="col d-flex flex-column m-2">
                    <img src="https://picsum.photos/300/200" className="mb-auto" alt="..." />
                    <div className="card-body mt-auto">
                        <button className="btn btn-secondary w-100">Discover Electronics! </button>
                    </div>
                </div>
                <div className="col d-flex flex-column m-2">
                    <img src="https://picsum.photos/300/200" className="mb-auto" alt="..." />
                    <div className="card-body mt-auto">
                        <button className="btn btn-secondary w-100">Discover Electronics! </button>
                    </div>
                </div>
                <div className="col d-flex flex-column m-2">
                    <img src="https://picsum.photos/300/200" className="mb-auto" alt="..." />
                    <div className="card-body mt-auto">
                        <button className="btn btn-secondary w-100">Discover Electronics! </button>
                    </div>
                </div>
                <div className="col d-flex flex-column m-2">
                    <img src="https://picsum.photos/300/200" className="mb-auto" alt="..." />
                    <div className="card-body mt-auto">
                        <button className="btn btn-secondary w-100">Discover Electronics! </button>
                    </div>
                </div>
                <div className="col d-flex flex-column m-2">
                    <img src="https://picsum.photos/300/200" className="mb-auto" alt="..." />
                    <div className="card-body mt-auto">
                        <button className="btn btn-secondary w-100">Discover Electronics! </button>
                    </div>
                </div>
            </div>

            {/*best selling products section */}
            <div className="container bg-secondary-subtle rounded-3 bg-warning-subtle">
                <span className="m-5 fs-3 fw-bold">Best Selling Products</span>
                <div className="p-4">

                    <Carousel responsive={responsive}>
                        {product.map((prd) => (
                            <div className="card mx-3" key={prd.id}>
                                <img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{prd.title}</p>
                                </div>
                            </div>
                        ))}

                    </Carousel>
                </div>

            </div>

            {/*footer section */}
            <div>
                <nav className="mt-4 navbar navbar-expand-lg bg-body-secondary">

                    <div className="container justify-content-around" id="navbarNav">

                        <span className="col-auto nav-item" href="#">
                            <a className="nav-link" href="#">About Us</a></span>
                        <span className="col-auto nav-item">
                            <a className="nav-link" href="#">Social Media</a>
                        </span>
                        <span className="col-auto nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </span>

                    </div>

                </nav>
            </div>


        </div >

    );
};

export default LandingPage;