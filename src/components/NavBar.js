import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid row">
                <a className="d-flex navbar-brand col-md-2" href="#">ZOI | STORE</a>


                <form className="d-flex col-sm-6" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="d-flex col-sm-4 justify-content-around ">
                    <div className="container row justify-content-between">
                        <div className="btn btn-outline-primary nav-item col-3">
                            <a className="nav-link" href="#">Location</a>
                        </div>

                        <div className="btn btn-info nav-item dropdown col-4">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                John Doe
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li> {/* Corrected */}
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <div className="btn btn-warning nav-item col-3">
                            <a className="nav-link" href="#" aria-disabled="true">Chart</a>
                        </div>

                    </div>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;
