import React from "react";
import "../App.css";
import "../MainContent.css";
import Project from "./Project";

function MainContent() {
	const projectData = [
		{
			title: "Steunpunt-Friesland filter tool",
			description:
				"Developed an application for Steunpunt Friesland to efficiently manage and filter over 200 care locations, featuring advanced filtering and Excel export capabilities. Built using the TALL stack and Filament, with future plans to add a location radius filter.",
			imageSrc: "/#", // Adjust the path if necessary
			projectLink: "#",
			repoLink: "https://github.com/your-repo-link-here",
		},
		{
			title: "Resume builder in React",
			description: "Developed an online live resume creator using React.",
			imageSrc: "/CV.jpg",
			projectLink: "https://cv-builder-two-roan.vercel.app",
			repoLink: "https://github.com/JurrevE/CV-builder",
		},
		{
			title: "Custom website for Spelrebel",
			description:
				"Designed and developed a custom website and brand identity for Spelrebel.",
			imageSrc: "/spelrebel.jpg",
			projectLink: "https://youtu.be/A0YOL5Jo0Vo",
			repoLink: "https://github.com/JurrevE/spelrebel",
		},
		{
			title: "WeatherAPP",
			description: "Weather app using: Free Weather API",
			imageSrc: "#",
			projectLink: "#",
			repoLink: "#",
		},
	];

	return (
		<main>
			<section id="about">
				<h2 className="Name">
					I am: <br /> Jurre
					<br /> van <br />
					Eijk
				</h2>
				<img
					className="personalPicture"
					height="400px"
					width="250px"
					src="/Jurrepic.JPG"
					alt="Pic of Jurre"
				/>
			</section>
			<section>
				<p>
					Currently I am pursuing my bachelor's degree in Communication and
					Multimedia Design with a strong focus on front-end web development. I
					have a solid understanding of UI/UX principles, a bit of backend, and
					also know a thing or two about Video/Editing and 3D. My passion for
					creating user-friendly, visually engaging web experiences is matched
					by my social skills and commitment to working well in team
					environments.
				</p>
			</section>
			<section id="projects">
				{projectData.map((project, index) => (
					<Project
						key={index}
						title={project.title}
						description={project.description}
						imageSrc={project.imageSrc}
						projectLink={project.projectLink}
						repoLink={project.repoLink}
					/>
				))}
			</section>
		</main>
	);
}

export default MainContent;
