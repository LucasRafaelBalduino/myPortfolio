import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';

import api from '../../services/api';
import Button from '../button/Button';

import './GithubRepoCard.css';

export default function GithubRepoCard() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function loadProject() {
      const response = await api.get('/create-project');
      setProject(response.data);
    }
    loadProject();
  }, []);
  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="opensource">
          <h1 className="project-title">Projetos Open Source</h1>
          <div className="repo-cards-div-main">
            {project.map((projects) => (
              <Fade bottom duration={1000} distance="20px">
                <div>
                  <div className="repo-card-div">
                    <div className="repo-name-div">
                      <svg
                        aria-hidden="true"
                        className="octicon"
                        height="16"
                        role="img"
                        viewBox="0 0 12 16"
                        width="12"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                        />
                      </svg>
                      <p className="repo-name">{projects.name}</p>
                    </div>
                    <div className="repo-image">
                      <header
                        style={{
                          backgroundImage: `url(${projects.image_url})`,
                        }}
                      />
                    </div>
                    <p className="repo-description">{projects.description}</p>
                    <div className="repo-stats">
                      <div className="repo-left-stat">
                        <span>
                          <div
                            className="language-color"
                            style={{ backgroundColor: projects.stack.color }}
                          />
                          <p>{projects.stack}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <Button text="More Projects" className="project-button" h newTab />
        </div>
      </Fade>
    </>
  );
}
