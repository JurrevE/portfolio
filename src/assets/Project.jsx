import React from "react";
import "../App.css";
import "../MainContent.css";

function Project({ title, description, imageSrc, projectLink, repoLink }) {
	return (
		<div
			className="project"
			onClick={() => window.open(projectLink, "_blank")} // Opens the project link when the project is clicked
			style={{ cursor: "pointer" }}
		>
			<img className="project-image" src={imageSrc} alt={title} />
			<div className="project-content">
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{description}</p>
				<div className="project-buttons">
					{/* Stop propagation to prevent triggering the div's onClick when clicking the GitHub link */}
					<a
						href={repoLink}
						className="project-link"
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()} // Prevents the div's onClick from firing
					>
						View GitHub repository
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
