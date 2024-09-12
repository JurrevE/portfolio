import React from "react";

function MainContent() {
	return (
		<main>
			<section id="about">
				<h2>About Me</h2>
				<p>
					I'm a front-end developer passionate about creating beautiful and
					functional websites...
				</p>
			</section>
			<section id="projects">
				<h2>Projects</h2>
				<div className="projects-grid">
					<div className="project">Project 1</div>
					<div className="project">Project 2</div>
				</div>
			</section>
		</main>
	);
}

export default MainContent;
