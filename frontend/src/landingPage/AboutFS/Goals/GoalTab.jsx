import React from 'react'
import ScrollAnimate from '../../../ScrollAnimate';
import '../../../effect.css';
import RightGoal from './RightGoal';
import LeftGoal from './LeftGoal';

function GoalTab() {
    return (
        <ScrollAnimate>
            <div className="my-3">
                <LeftGoal
                    imgSrc='\media\assets\fs-university-vision.jpg'
                    GoalTitle='Our Vision'
                    GoalDesc='We are committed to create a learning sphere which will facilitate our students to enhance their skill sets based on the imparted knowledge which will enable them to participate in nation building. Our vision is to be an inclusive, accessible, and valuable platform in fulfilling the aspirations and career goals of our diverse range of students and supporting future leaders, innovators, and entrepreneurs.' />
                <RightGoal
                    imgSrc='\media\assets\fs-university-mission.jpg'
                    GoalTitle='Our Mission'
                    GoalDesc='We are devoted to providing the best of education to our students to make them better citizens who will contribute towards building a better society through their aspiration and academic excellence. Our mission is to empower our students at all stages of their career journey to take ownership of their future, helping them to make the connection between their experience, education, and future ambitions.' />
                <LeftGoal
                    imgSrc='\media\assets\fs-aim.jpg'
                    GoalTitle='Our Aim'
                    GoalDesc='We are dedicated to transform the educational structure of the nation by inculcating the ethical and moral values in our students along with the quality education. We aim to uplift the people with weaker socioeconomic status through our mission and ensuring student progression through fulfilling their aspirations by refining their skill set.' />
            </div>
        </ScrollAnimate>
    );
}

export default GoalTab;