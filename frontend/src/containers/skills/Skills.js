import React from 'react';
import { Fade } from 'react-reveal';

import SoftwareSkill from '../../components/softwareSkill/SoftwareSkill';
import { skillsSection } from '../../portfolio';

import './Skills.css';

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img
              alt="Saad Working"
              src={require('../../temp/images/developerActivity.svg')}
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills) => {
                return <p className="subTitle skills-text">{skills}</p>;
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
