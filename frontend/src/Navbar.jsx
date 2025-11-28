import React from 'react'
import {Link} from 'react-router-dom';
import DropdownPrograms from './DropDownPrograms';
import DropdownAbout from './DropDownAbout';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fs-5 border-bottom bg-warning sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="media/assets/fs-university-logo.png" style={{ width: '35%',background:'#fff',padding:'2px',borderRadius:'8px' }} alt="logo" />
                </Link>
                <button id='collapseBtn' className="navbar-toggler position-absolute top-0 end-0 me-3 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fs-3 "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item me-3">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <DropdownAbout/>
                        <DropdownPrograms/>
                        <li className="nav-item me-3 ">
                            <Link className="nav-link active" to="/campus">Campus</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to="/admission">Admission</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;