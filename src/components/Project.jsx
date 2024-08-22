/* eslint-disable react/prop-types */

import "./Project.css";

export default function Project( {projectInfo} ) {
    return (
        <div className="project-card">
            <h2 className="project-title">{projectInfo.title}</h2>
            <a className="img-link" href={projectInfo.url} target='_blank'>
            <img src={projectInfo.imgPath} alt="" className="project-img"/>
            </a>
            <a className="button-link" href={projectInfo.url} target='_blank'>
            <button className="button-light">Visit Site</button>
            </a>
            <a className="button-link" href={projectInfo.repoUrl} target='_blank'>
            <button className="button-light">Visit GitHub Repo</button>
            </a>
            <p className="project-description">{projectInfo.description}</p>
        </div>
    );
}