import React from 'react';


function Resume() {

    return (

        <section className='my-5'>
            <div className='container d-flex flex-column text-center' id = 'Resume'>
                <div className='p-2'>
                    <h6 id='about'><a href='https://docs.google.com/document/d/1jh0P-khgGcMQCSN8aL-bXU7kBqY1ZpGlTnkqCWYAJQw/edit?usp=sharing' target='blank' download>Download PDF</a></h6>

                </div>

                <div className='p-2'>
                    <iframe title='Resume' className='border' src="https://docs.google.com/document/d/1jh0P-khgGcMQCSN8aL-bXU7kBqY1ZpGlTnkqCWYAJQw/edit?usp=sharing" width='1200px' height='850px' />
                </div>
            </div>

        </section>
    )
}

export default Resume;