import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
function Education() {
  return (
    <ScrollAnimate>
      <div className="card text-bg-dark">
        <img src="\media\assets\education-school-outline-seamless-pattern_104589-278.png" className="card-img" alt="..." id='educationImg' style={{ width: '100%', height:'780px',opacity: '0.3' }} />
        <div className="card-img-overlay">
          <h1 className="card-title fw-bolder text-center">Why Choose FS University?  </h1>
          <div className="d-flex justify-content-around flex-wrap align-items-center text-dark" >
            <div className='p-3 bg-light mb-3 rounded-2' style={{ width: '650px', borderBottom: '4px solid #b3050d' }} >
              <div className="d-flex justify-content-evenly flex-wrap">
                <i className="fa-solid fa-wallet" style={{ color: '#b3050d', fontSize: '3rem' }}></i>
                <div>
                  <h4 className='fw-semibold'>Values-Based Learning</h4>
                  <p className='fw-medium' style={{ fontSize: '18px', color:"#696969" }}>We focus on both professional skills and personal growth of students.</p>
                </div>
              </div>
            </div>
            <div className='p-3 bg-light mb-3 rounded-2' style={{ width: '650px', borderBottom: '4px solid #b3050d' }} >
              <div className="d-flex flex-column align-items-center justify-content-evenly flex-wrap">
                <i className="fa-solid fa-people-group" style={{ color: '#b3050d', fontSize: '3rem' }}></i>
                <div>
                  <h4 className='fw-semibold'>Proven Excellence</h4>
                  <p className='fw-medium' style={{ fontSize: '18px', color:"#696969" }}>20+ years of experience in the best quality of education of the students</p>
                </div>
              </div>
            </div>
            <div className='p-3 bg-light mb-3 rounded-2' style={{ width: '650px', borderBottom: '4px solid #b3050d' }} >
              <div className="d-flex justify-content-evenly flex-wrap">
                <i className="fa-solid fa-globe" style={{ color: '#b3050d', fontSize: '3rem' }}></i>
                <div>
                  <h4 className='fw-semibold'>Global Recognition</h4>
                  <p className='fw-medium' style={{ fontSize: '18px', color:"#696969" }}>Programs meet international standards with collaborations worldwide</p>
                </div>
              </div>
            </div>
            <div className='p-3 bg-light mb-3 rounded-2' style={{ width: '650px', borderBottom: '4px solid #b3050d' }} >
              <div className="d-flex justify-content-evenly flex-wrap">
                <i className="fa-solid fa-industry" style={{ color: '#b3050d', fontSize: '3rem' }}></i>
                <div>
                  <h4 className='fw-semibold'>Industry Connections</h4>
                  <p className='fw-medium' style={{ fontSize: '18px', color:"#696969" }}>Strong partnerships with companies to prepare students for real-world challenges</p>
                </div>
              </div>
            </div>
            <div className='p-3 bg-light mb-3 rounded-2' style={{ width: '650px', borderBottom: '4px solid #b3050d' }} >
              <div className="d-flex justify-content-evenly flex-wrap">
                <i className="fa-solid fa-graduation-cap" style={{ color: '#b3050d', fontSize: '3rem' }}></i>
                <div>
                  <h4 className='fw-semibold'>Expert Faculty</h4>
                  <p className='fw-medium' style={{ fontSize: '18px', color:"#696969" }}>Teachers with industry experience, published research, and a passion for mentoring</p>
                </div>
              </div>
            </div>  
            <div className='p-3 bg-light mb-3 rounded-2' style={{ width: '650px', borderBottom: '4px solid #b3050d' }} >
              <div className="d-flex justify-content-evenly flex-wrap">
                <i className="fa-solid fa-school-circle-check" style={{ color: '#b3050d', fontSize: '3rem' }}></i>
                <div>
                  <h4 className='fw-semibold'>Modern Campus</h4>
                  <p className='fw-medium' style={{ fontSize: '18px', color:"#696969" }}>100-acre campus with advanced labs, libraries, sports facilities and many more.</p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
}

export default Education;