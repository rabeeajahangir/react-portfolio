import React from 'react';

// import profilePicture from "../../assets/images/"

const About = () => {
    return(
        <section className="my-5" >
      <h1 id="about">Who am I?</h1>
                {/* <div className='p-2'>
            <img src={profilePicture} className='my-2 profile-image' alt='profile'></img>
            </div> */}

            <div className='p-2'>
            <p className='about-me'>
            Hello There!! I am Rabeea Jahangir. I am a Full Stack Web Developer. I working towards my certification with University of Toronto. I am currently working at Royal Bank of Canada as a Collections Agent, and needless to say, it is a challenging job where we have think on our feet, problem solve and have a very solutions-based approach.
            <br/><br/>
            When I am not working or coding, I love to spend time with my family (I have 2 young kids), exploring new places and netflix. I also love reading, music, and travelling. I think I would describe myself as an Extroverted Introvert. I love talking to people and socializing but also need my precious 'me' time :) and keep my circle small.
            </p>
            </div>
           
            
        </section>
    )
};

export default About;