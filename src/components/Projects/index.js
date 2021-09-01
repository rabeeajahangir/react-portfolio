
import React from 'react';
import Footer from '../Footer';


const Projects = () => {
    const tech = [
        {
            language: 'HTML',
            id: 0
        },
        {
            language: 'CSS',
            id: 1
        },
        {
            language: 'BootStrap',
            id: 2
        },
        {
            language: 'React',
            id: 3
        },
        {
            language: 'JavaScript',
            id: 4
        },
        {
            language: 'jQuery',
            id: 5
        },
        {
            language: 'Handlebars.js',
            id: 6
        },
        {
            language: 'Foundations',
            id: 7
        },
        {
            language: 'APIs',
            id: 8
        },
        {
            language: 'IndexDB',
            id: 9
        },
        {
            language: 'Sequelize',
            id: 10
        },
        {
            language: 'Express.js',
            id: 11
        },
        {
            language: 'MongoDB',
            id: 12
        },
        {
            language: 'Heroku',
            id: 13
        },
        {
            language: 'Mongoose',
            id: 14
        },
        {
            language: 'MySQL2',
            id: 15
        },
        {
            language: 'GraphQL',
            id: 16
        },{
            language: 'Node.js',
            id: 17
        }
    ]

    const projects = [
        {
            name: 'Code Quiz',
            description: 'Code Quiz allows students learning to code to test their knowledge of various compnents of Javascript. During this project I was learning to dynamically create objects from user input and to store data to use later. I was also getting my first exposure to implementing the use of local storage.',
            githubLink: 'github link',
            deploymentLink: 'deployment link',
            techUsed: [tech[0], tech[1], tech[4]]
        },
        {
            name: 'Password Generator',
            description: 'This application was created to help users generate a secure, randomized password based off their preferences for criteria. The length of the password and including lowercase, uppercase, numeric or special characters is all decided by the user. This project was my introduction to Javascript and the usefullness of the language became clearer as I progressed and learned more about the capabilities.',
            githubLink: '',
            deploymentLink: '',
            techUsed: [tech[0], tech[1], tech[4]]
        }, 
        {
            name: 'Budget Tracker',
            description: 'Budget Tracker is an application to allow users to track their deposits and withdrawls while being online or off. As a PWA, progressive web application, it can be installed onto your phone or desktop and accessed at anytime. This project helped me understand that a PWA can truly increase user experience and meet their expectations of always having access to their applications.',
            githubLink: '',
            deploymentLink: '',
            techUsed: [tech[0], tech[1], tech[4], tech[9], tech[11], tech[12], tech[14], tech[13]]
        },
        {
            name: 'Tech Blog',
            description: 'This application was developed for bloggers to have a place to talk all things tech. It is versatile in the way that it could really be used for any blogger to start writing and sharing content. This project taught me how to utilize password security, session-storage and user authorization for specific activities (creating new posts, making comments) involving the server and database.',
            githubLink: '',
            deploymentLink: '',
            techUsed: [tech[1], tech[2], tech[4], tech[6], tech[8], tech[10], tech[15], tech[11],tech[13]]
        }
    ]

    return(
        <>
        <section>
            <div className='container'>
            <div className='row'>
            {projects.map(project => (
                <div className='card-group col col-sm-12 col-md-6 col-lg-6 mt-3 mb-3 mx-auto align-self-center' key={project.name}>
                <div className='card results-card col-sm-4 py-2 border-secondary' style={{"width": "26rem", "height": "70rem"}}>
                <a href={project.deploymentLink} className='card-link' target='blank'><img src={project.image} alt='screenshot of application' className='img-thumbnail card-img-top'/></a>
                <div className='card-body'>
                <h2 className='card-title mb-4'>{project.name}</h2>
                <p className='card-text fw-light'>{project.description}</p>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item fs-6 borderless border-0 p-1 pt-3">Technologies used:</li>
                    {project.techUsed.map(tech => (
                            <li className="list-group-item fw-light fs-6 borderless border-0 p-0" key={tech.id}>{tech.language}</li>
                    ))}
                </ul>
                <a href={project.deploymentLink} className='card-link' target='blank'>deployed</a>{' '}
                <a href={project.githubLink} className='card-link' target='blank'>github</a>
                </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Projects;
