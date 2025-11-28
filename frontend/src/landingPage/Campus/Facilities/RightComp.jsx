import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';

function RightComp({ RightTitle, Desc, imgSrc, btnText,hrefLink }) {
    return (
        <ScrollAnimate>
            <div className="container p-4" id='GoalBox'>
                <div className="row p-3">
                    <div className="col-5 p-3">
                        <h1 className=' fw-bolder' style={{ fontSize: '3.5rem' }}>{RightTitle}</h1>
                        <p className='lh-lg fw-semibold' style={{ color: '#696969', fontSize: '18px' }}>{Desc}</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <a href={hrefLink} className='text-decoration-none text-light'>    
                        <button type="button" className="btn btn-danger  p-2 fs-5 text-light fw-bolder">{btnText}</button>
                        </a>
                        </div>
                    </div>
                    <div className="col-1 p-2"></div>
                    <div className="col-6 p-3">
                        <img src={imgSrc} className='rounded-3 border border-5 border-secondary-subtle' alt="imageUrl" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default RightComp;