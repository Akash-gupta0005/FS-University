import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';
import Info from './Info';
import './Info.css'
function InfoTab() {
    return ( 
        <ScrollAnimate>
            <div className='d-flex align-items-center p-2 justify-content-evenly flex-wrap' id='InfoBox'>
            <Info title='Accreditations' count={8}/>
            <Info title='Faculty' count={100}/>
            <Info title='Streams' count={25}/>
            <Info title='Programs' count={75}/>
            </div>
        </ScrollAnimate>
     );
}

export default InfoTab;