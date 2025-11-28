import React from 'react'
import ScrollAnimate from '../../ScrollAnimate';
import '../../effect.css';

function CampusVideos() {
    return (
        <ScrollAnimate>
            <h1 className='text-center'>Campus Videos</h1>
            <p className='text-muted text-center'>
                Life at UniCamp University is enriching, exciting, and energizing
            </p>
            <div className="d-flex p-3 m-2 justify-content-evenly flex-wrap bg-light">
                <iframe width="555" height="312" className='mb-3' src="https://www.youtube.com/embed/IAdS9RyiPKI" title="Ruchi Yadav , B.Sc Biotech student |FS University shares his university Experiences | Student Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="555" height="312" className='mb-3' src="https://www.youtube.com/embed/LnskpYJ1Znw" title="Warm welcome to Shri Akhilesh Yadav |  Former CM of UP Unveiling statue of late Shri Phool Singh Ji" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="555" height="312" className='mb-3' src="https://www.youtube.com/embed/LbYk-jYPOPw" title="Fresher Party Night | FS University | Fresher welcome 2023-24 | Shikohabad Firozabad | FSU |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="555" height="312" className='mb-3' src="https://www.youtube.com/embed/sJov7pSw0qk" title="FS University Review | Shajib Khan , B.Sc Biotech student share his university Experiences | FSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="555" height="312" className='mb-3' src="https://www.youtube.com/embed/XHFfNcDZFPo" title="FS University Shikohabad &amp; Firozabad | Classrooms | Labs | Campus life | Student reviews" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="555" height="312" className='mb-3' src="https://www.youtube.com/embed/51tzzOdo2AA" title="FS University Shikohabad Firozabad | Events | Achievement&#39;s | Campus views | Campus life." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </ScrollAnimate>
    );
}

export default CampusVideos;