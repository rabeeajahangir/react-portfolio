import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import ContactForm from "../Contact";





const  categories = [
  { name: 'About', description: 'My description' },
  { name: 'Projects', description: 'My description of projects' },
  { name: 'Resume', description: 'Copy of my resume' },
  { name: 'ContactForm', description: 'A form to contact me' }
];

function Nav() {
 

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
     
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#About" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li><a href="#Resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li><a href="#Projects" onClick={() => handleClick()}>
             Projects
            </a>
          </li>
          <li><a href="#ContactForm" onClick={() => handleClick()}>
             Contact
            </a>
          </li>
        
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;