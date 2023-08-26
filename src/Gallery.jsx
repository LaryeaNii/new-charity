import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
        
      <div className="squeeze-container">
    
        <div className="box" id="one">
        <Link to='/tour'>
        <div className="overlay">
           <p>Trip To The Mountains, 2022</p>
         </div>
        </Link>
          
        </div>
      
        <div className="box" id="two">
          <Link to='/prison'>  
          <div className="overlay">
            <p>Visiting Ankaful Prison</p>
          </div>
          </Link>
        
        </div>
        <div className="box" id="three">
        <Link to='/girlchild'>
        <div className="overlay">
            <p>Empowering Girl Child Education</p>
        </div>  
        </Link>  
        
        </div>
        
        <div className="box" id="four">
         <Link to='/psych'>
          <div className="overlay">
            <p>Donations To The Psychiatric Hospital</p>
          </div>
          </Link>
          
        </div>

        <div className="box" id="five">
          <Link to='/anniversary'>
          <div className="overlay">
            <p>Celebrating Our Third Anniversary</p>
          </div>
          </Link>
        </div>

        <div className="box" id="six">
          <Link to='/more'>
          <div className="overlay">
            <p>More From Zion Helping Hand Foundation</p>
          </div>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Gallery;
