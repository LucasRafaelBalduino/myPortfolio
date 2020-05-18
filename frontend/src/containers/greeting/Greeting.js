import React from 'react';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';

import Button from '../../components/button/Button';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { greeting } from '../../portfolio';

import './Greeting.css';

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {' '}
                {greeting.title} <span className="wave-emoji">👋</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contato" href="#contact" />
                <Button text="resumo" newTab href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require('../../temp/images/manOnTable.svg')}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
