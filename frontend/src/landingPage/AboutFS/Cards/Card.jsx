import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';

function Card({title,info,iconSrc}) {
    return (
        <ScrollAnimate>
            <div className="card p-3 m-3" style={{width: '20rem'}}>
                    <i className={iconSrc} style={{color:'#d40718ff',fontSize:'6rem'}}></i>
                    <div className="card-body">
                        <h4 className="card-title text-center fw-bolder">{title}</h4>
                        <p className="card-text text-center lh-lg fw-semibold" style={{color:'#696969',fontSize:'20px'}}>{info}</p>
                    </div>
            </div>
        </ScrollAnimate>
    );
}

export default Card;