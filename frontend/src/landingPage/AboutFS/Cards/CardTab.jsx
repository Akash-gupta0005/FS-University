import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';
import Card from './Card';
function CardTab() {
    return ( 
        <ScrollAnimate>
            <div className="d-flex justify-content-evenly flex-wrap p-2 my-3">
                <Card
                 title='Affordability'
                 info='Our financial aid program makes the FS University affordable for the every family throughout the world.'
                 iconSrc='fa-solid fa-graduation-cap fa-beat card-img-top my-2 '/>
                <Card 
                title='Academics' 
                info='An education at FS University has limitless possibilities. Our courses are taught by esteemed faculty members.'
                iconSrc='fa-solid fa-award fa-beat card-img-top my-2 '/>
                <Card 
                title='Inspiring Student' 
                info='Our system creates more opportunities for learning with peers and professors from different backgrounds.'
                iconSrc='fa-solid fa-book-open fa-beat card-img-top my-2 '/>
            </div>
        </ScrollAnimate>
     );
}

export default CardTab;