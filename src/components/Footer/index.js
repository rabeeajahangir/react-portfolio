import React from 'react';
import gitHub from '../../assets/images/github.png'
import linkedIn from '../../assets/images/linkedin.png'




const Footer = () => {
    return(
    <section className='footer'>
        <div className='row justify-content-center'>
            <div className='col col-sm-2 col-lg-2'><a href='https://github.com/rabeeajahangir' target='blank'><img src={gitHub} className='img-link-social' alt='GitHub logo'/></a></div>
            <div className='col col-sm-2 col-lg-2'><a href='www.linkedin.com/in/rabeea-jahangir' target='blank'><img src={linkedIn} className='img-link-social' alt='LinkedIn logo'/></a></div>
            
            <p className='pt-2'>Rabeea Jahangir &copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
    </section>
    )
};

export default Footer;