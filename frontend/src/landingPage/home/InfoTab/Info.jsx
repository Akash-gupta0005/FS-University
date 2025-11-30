import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';
import './Info.css'
function Info({title,count}) {
    return ( 
        <ScrollAnimate>
            <div className="d-flex flex-column align-items-center p-2 justify-content-around flex-wrap bg-light p-5 rounded-3 mb-4" id='box'>
                <div>
                    <span id='counter'>{count}</span>
                    <span id='counter'>+</span>
                </div>
                <p className='fs-4 font-medium'>{title}</p>
            </div>
        </ScrollAnimate>
     );
}

export default Info;