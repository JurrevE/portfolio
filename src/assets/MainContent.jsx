import React from "react";
import "../App.css";
import "../MainContent.css";
import Project from "./Project";

function MainContent() {
	const projectData = [
		{
			title: "Steunpunt-Friesland ",
			description:
				"Developed an application for Steunpunt Friesland to efficiently manage and filter over 200 care locations. Built using the TALL stack and Filament with Supabase for the backend.",
			imageSrc: "/placeholder.jpg",
			projectLink: "https://www.yourproject1.com", // Correct project link
			repoLink: "https://github.com/JurrevE/Steunpunt-Friesland", // GitHub link
		},
		{
			title: "Spelrebel",
			description:
				"Created a custom website and brand identity for an acroyoga non-profit organization based in Leeuwarden. The project involved designing an engaging and functional site using Astro, coupled with dynamic GSAP animations.",
			imageSrc: "/spelrebel.jpg",
			projectLink: "https://youtu.be/A0YOL5Jo0Vo", // Correct project link
			repoLink: "https://github.com/JurrevE/spelrebel", // GitHub link
		},
		{
			title: "Resume creator",
			description: "Developed an online live resume creator using React.",
			imageSrc: "/CVgood.jpg",
			projectLink: "https://cv-builder-two-roan.vercel.app", // Correct project link
			repoLink: "https://github.com/JurrevE/CV-builder", // GitHub link
		},
		{
			title: "WeatherAPP",
			description:
				"Developed a weather app using the Free Weather API, built using vanilla HTML, CSS, and Javascript.",
			imageSrc: "/weatherapp.jpg",
			projectLink: "https://weatherapp-one-orcin.vercel.app", // Correct project link
			repoLink: "https://github.com/JurrevE/weatherapp", // GitHub link
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
			<h2 className="projectsh2">Projects:</h2>
			<section id="projects">
				{projectData.map((project, index) => (
					<Project
						key={index}
						title={project.title}
						description={project.description}
						imageSrc={project.imageSrc}
						projectLink={project.projectLink} // Passing correct project link
						repoLink={project.repoLink} // Passing correct GitHub link
					/>
				))}
			</section>
		</main>
	);
}

export default MainContent;
