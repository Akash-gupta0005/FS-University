import React from 'react'
import ScrollAnimate from './ScrollAnimate';
import './effect.css';
function NotFoundPage() {
    return (
        <ScrollAnimate>
            <div className="d-flex my-2 flex-column justify-content-center align-items-center flex-wrap">
                <img src="\media\assets\fs-university-logo-300x139.png" className='my-2' alt="collegeLogo" />
                <img src="\media\assets\page-404-image.png" alt="error img" />
                    <h3 className='fw-bolder text-center my-3'>Oops! That page can't be found.</h3>
                    <p className='fs-5 text-muted fw-semibold text-center'>It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
                    <a href='/' className='text-decoration-none my-3 text-center text-light'>
                        <button type="button" className="btn btn-danger p-2 fs-5 text-light fw-bolder">Go to Home</button>
                    </a>
            </div>
        </ScrollAnimate>
    );
}

export default NotFoundPage;