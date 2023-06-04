import React from "react";
import "./links.css";
import linkedin from './imgs/linkedin.png'
import github from './imgs/github.png'

export default function Links(props) {
    return (
      <div className="listwrapper">
        <ul className="list">
            <li><a href="https://www.linkedin.com/in/jake-coffey-421a31188/"><img src={linkedin}  alt="Linked in logo" /></a></li>
            <li><a href="https://github.com/JakeCoffey"><img src= {github} alt="Github Logo"/></a></li>
            
        </ul>

      </div>
    );
  }