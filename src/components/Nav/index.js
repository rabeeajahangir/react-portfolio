import React from 'react';

function Nav() {
    const categories = [
        {
          name: "About Me",
          description:
            "My description",
        },
        { name: "Contact Me", 
        description: "FOrm" },

        { name: "Projects", 
        description: "My portfolio" },
        {
          name: "Resume",
          description: "Details of my career history",
        },
      ];
  return (
    <header>
  
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="#contact">
          Contact me
        </a>
      </li>
      <li className="mx-2">
        <a href="#projects">
          Projects
        </a>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;