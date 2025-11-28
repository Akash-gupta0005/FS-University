import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';

function LeftGoal({ GoalTitle, GoalDesc, imgSrc }) {
    return (
        <ScrollAnimate>
            <div className="container p-4" id='GoalBox'>
                <div className="row p-3">
                    <div className="col-6 p-3">
                        <img src={imgSrc} className='text-center rounded-3 border border-5 border-secondary-subtle' alt="imageUrl" style={{ width: '100%' }} />
                    </div>
                    <div className="col-1 p-2"></div>
                    <div className="col-5 p-3">
                        <h1 className=' fw-bolder' style={{ fontSize: '3.5rem' }}>{GoalTitle}</h1>
                        <p className='lh-lg fw-semibold' style={{ color: '#696969', fontSize: '18px' }}>{GoalDesc}</p>
                    </div>
                </div>
            </div>
        </ScrollAnimate>
    );
}

export default LeftGoal;