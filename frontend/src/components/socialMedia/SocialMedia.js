import React from 'react';

import { socialMediaLinks } from '../../portfolio';

import './SocialMedia.css';

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.github} className="icon-button github">
        <i className="fab fa-github" />
        <span />
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin">
        <i className="fab fa-linkedin-in" />
        <span />
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
      >
        <i className="fab fa-google" />
        <span />
      </a>
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab">
        <i className="fab fa-gitlab" />
        <span />
      </a>
      <a href={socialMediaLinks.facebook} className="icon-button facebook">
        <i className="fab fa-facebook-f" />
        <span />
      </a>
    </div>
  );
}
