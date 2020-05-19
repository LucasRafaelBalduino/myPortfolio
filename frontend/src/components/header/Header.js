import React from 'react';
import { Fade } from 'react-reveal';

import './Header.css';

function header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Lucas Balduino</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#opensource">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default header;
