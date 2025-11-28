import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';
import RightComp from './RightComp';
import LeftComp from './LeftComp';

function Combo() {
    return (
        <ScrollAnimate>
            <div className="my-3">
                <LeftComp
                    imgSrc='\media\assets\about-fs-university-slide2.jpg'
                    LeftTitle='Infrastructure'
                    Desc='FS University believes in providing the best college experience to the students. The technologically upgraded classrooms facilitate teaching through advanced tools and techniques.' 
                    btnText='Read More'
                    hrefLink='/'
                    />
                <RightComp
                    imgSrc='\media\assets\ff19-600x500.jpg'
                    RightTitle='Library'
                    Desc='The library is the heart of academic and research excellence at FS University – our extensive library system, serving as the backbone of our institution’s intellectual pursuits.'
                    btnText='Read More'
                    hrefLink='/' />
                <LeftComp
                    imgSrc='\media\assets\IMGL9758-768x512.jpg'
                    LeftTitle='Academic Facilities'
                    Desc='FS University provides a magnificent and comprehensive range of facilities within the campus for its students. The classrooms at Fs University are contemporary, equipped with ceiling mounted LCD projectors and computers.' 
                    btnText='Read More'
                    hrefLink='/'/>
                <RightComp
                    imgSrc='\media\assets\IMGL9758-768x512.jpg'
                    RightTitle='Cafeteria'
                    Desc='Our well-designed and facilitated cafeteria, situated on campus, serves as a hub of activity where students come together to relax, recharge, and experience the changing seasons in its serene atmosphere.'
                    btnText='Read More'
                    hrefLink='/' />
                <LeftComp
                    imgSrc='\media\assets\auditorium-qydn369aclm2fya1381pl5yio4s8u96k6f8t1xczgk.jpg'
                    LeftTitle='Auditorium'
                    Desc='Our auditoriums are meticulously set up to accommodate a wide range of events, from large-scale conferences and cultural performances to academic seminars and guest speaker series.'
                    btnText='Read More'
                    hrefLink='/' />
            </div>
        </ScrollAnimate>
    );
}

export default Combo;