import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';
import Combo from './Facilities/Combo';
function CampusLife() {
    return (
        <ScrollAnimate>
            <h1 className='text-center fw-bolder mt-4'>Campus Life at FSU</h1>
            <p className='text-muted text-center lh-lg fs-5'>
                Life at FS University is enriching, exciting, and energizing
            </p>
            <Combo/>
        </ScrollAnimate>
    );
}

export default CampusLife;