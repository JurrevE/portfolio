import React from "react";
import "../App.css";
import "../MainContent.css";

function Project({ title, description, imageSrc, projectLink, repoLink }) {
	return (
		<div className="project">
			<img className="project-image" src={imageSrc} alt={title} />
			<div className="project-content">
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{description}</p>
				<div className="project-buttons">
					<a
						href={projectLink}
						className="project-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Project
					</a>
					<a
						href={repoLink}
						className="project-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						View GitHub Repository
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
