import React from "react";
import './Home.scss'; 
import Sushi from './sushi.jpg'; 

export default function Home() {
  return (
    <div className="main-container">
    <div className="placeholder">
      <div className="image-container">
        <img src={Sushi} alt="Placeholder img" />
      </div>
  
      <button>Boka</button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse 
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.
      </p>

    </div>
    </div>

  );
}
