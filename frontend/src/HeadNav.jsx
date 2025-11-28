import React from 'react'
import ScrollAnimate from './ScrollAnimate';
function HeadNav() {
    return (
        <ScrollAnimate>
            <div id='footNav' className="d-flex p-1 fs-5 align-items-center justify-content-between flex-wrap" style={{ backgroundColor: '#a31818ff' }}>
                <div>
                <a href="https://www.facebook.com/fsuedu">
                    <i className="fa-brands fa-facebook fa-shake  me-2 text-light" ></i>
                </a>
                <a href="https://www.instagram.com/fsuedu.in/?utm_medium=copy_link">
                    <i className="fa-brands fa-instagram fa-shake  me-2 text-light" ></i>
                </a>
                <a href="https://www.youtube.com/channel/UC2oEHAUkdADjxfJraVMu43g">
                    <i className="fa-brands fa-youtube fa-shake  me-2 text-light" ></i>
                </a>
                <a href="https://x.com/fsuedu">
                    <i className="fa-brands fa-twitter fa-shake  me-2 text-light" ></i>
                </a>
                </div>
                <a href="tel:+91-9720205727" className='text-decoration-none text-light'>
                    <i className="fa-solid fa-phone fa-shake  me-1 text-light" ></i>
                    +91-9720205727
                </a>
            </div>
        </ScrollAnimate>
    );
}

export default HeadNav;