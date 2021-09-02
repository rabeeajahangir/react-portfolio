import React from 'react';
import profilePicture from "../../assets/images/IMG_1340.JPG";

const About = () => {
    return(
        <section className="my-5" >
     
                <div className='p-2'>
            <img src={profilePicture} className='my-2 profile-image' alt='profile'></img>
            </div>

            <div className='p-2'>
            <p className='about-me'>
            Hello There!! I am Rabeea Jahangir. I am a Full Stack Web Developer. I am working towards my Coding Certification with University of Toronto. I am currently working at Royal Bank of Canada as a Collections Agent, and needless to say, it is a challenging job where I am required think on our feet, problem solve and have a very solutions-based approach.
            <br/><br/>
            When I am not working or coding, I love to spend time with my family (I have 2 young kids), exploring new places and netflix. I also love reading, music, and traveling. I would describe myself as an Extroverted Introvert. I love talking to people and socializing but also need my precious 'me' time :) and like to keep my circle small.
            </p>
            </div>
            
        </section>
    )
};

export default About;