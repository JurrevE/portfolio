import React from "react";
import "../Project.css";

function Project({ title, description, imageSrc, projectLink }) {
	return (
		<div className="project">
			<img src={imageSrc} alt={title} className="project-image" />
			<div className="project-content">
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{description}</p>
				{projectLink && (
					<a href={projectLink} className="project-link">
						View Project
					</a>
				)}
			</div>
		</div>
	);
}

export default Project;
