import React from 'react';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';

import './Footer.css';

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">{emoji('Feito com ❤️ por Lucas')}</p>
      </div>
    </Fade>
  );
}
