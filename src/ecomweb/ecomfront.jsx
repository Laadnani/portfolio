import { Link } from "react-router-dom"
// for the new mui 
import * as React from 'react';





export function EcomTemplate() {
    return (
        <>
        {/* Nav bar  */}
        <div Classname="navWrapper" id="home">
          <div Classname=" clearfix">
            <h2 Classname="company" id="Camp">Company Name</h2>
            <nav Classname="mainNav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#work" Classname="smoothScroll">Work</a></li>
                <li><a href="#about" Classname="smoothScroll">About</a></li>
                <li><a href="#contact" Classname="smoothScroll">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        </>
    )
}