import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#About">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#Projects">
             Projects
            </a>
          </li>
          <li className="mx-2">
            <a href="#Resume">
              Resume
            </a>
          </li>
          
        
          <li className="mx-2">
            <a href="#Contact">
             Contact
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;