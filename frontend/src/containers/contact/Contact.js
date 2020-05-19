import React from 'react';
import { Fade } from 'react-reveal';

import SocialMedia from '../../components/socialMedia/SocialMedia';
import { contactInfo } from '../../portfolio';

import './Contact.css';

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-text-div">
              <a
                className="contact-detail"
                href={`tel:${contactInfo.opportunities}`}
              >
                {contactInfo.opportunities}
              </a>
              <br />
              <br />
              <a className="contact-detail" href={`tel:${contactInfo.number}`}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={`mailto:${contactInfo.email_address}`}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              alt="Lucas Balduino"
              src="https://avatars3.githubusercontent.com/u/42643459?v=4"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
