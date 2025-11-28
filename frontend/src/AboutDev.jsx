import React from 'react'
import ScrollAnimate from './ScrollAnimate';
import './effect.css';
function AboutDev() {
  return (
    <ScrollAnimate>
      <div className="container-fluid d-flex justify-content-evenly align-items-center flex-wrap my-5" id='DevContainer' >
        <div className="col-1 p-2"></div>
        <div className="col-5 p-2 mb-3">
          <img src="/media/assets/DevImg2.jpg" style={{ width: '80%', borderRadius: '50%' }} alt="" />
        </div>
        <div className="col-5 p-2 mb-3 ">
          <p className='text-center text-dark fw-semibold fs-5 lh-lg'>
            Hello, My Name is Akash Gupta. I'm a MERN Stack Developer.
            <br />
            I've created FS University's Clone using technologies like ReactJs . In my project I've included the chatBot named "Kia" which resolves the queries regarding university which helps the users more interactive towards university. 
          </p>
          <p className='text-center text-dark fw-semibold fs-5 lh-lg'>
            Connect to me on &nbsp;
            <a href="https://www.instagram.com/akash_gupta0004/?hl=en" className='text-dark'><i className="fa-brands fa-instagram fa-shake" style={{ fontSize: '1.8rem', color: '#d20f2c' }}></i>Instagram</a>
            &nbsp; &#124;
            <a href="https://www.linkedin.com/in/itzakashgupta8055/" className='text-dark'><i className="fa-brands fa-linkedin fa-shake" style={{ fontSize: '1.8rem', color: '#094cc9ff' }}></i>LinkedIn</a>
            &nbsp; &#124;
            <a href="https://github.com/Akash-gupta0005" className='text-dark'><i className="fa-brands fa-github fa-shake" style={{ fontSize: '1.8rem', color: '#111213ff' }}></i>GitHub</a>
          </p>
          <div className="col-1 p-2"></div>
        </div>
      </div>
    </ScrollAnimate>
  );
}

export default AboutDev;