import React from "react";
import "../App.css";
import "../MainContent.css";

function MainContent() {
	return (
		<main>
			<section id="about">
				<h2 className="Name">
					I am: <br></br> Jurre<br></br> van <br></br>Eijk
				</h2>
				<img
					className="personalPicture"
					height="400px"
					width=" 250px"
					src="/IMG_1086.JPG"
					alt="Pic of Jurre"
				/>
			</section>
			<section>
				<p>
					Currently I am pursuing my bachelor's degree in Communication and
					Multimedia Design with a strong focus on front-end web development. I
					have a solid understanding of UI/UX principles a bit of backend and
					also know a thing or two about Video/Editing and 3D. My passion for
					creating user-friendly, visually engaging web experiences is matched
					by my social skills and commitment to working well in team
					environments.
				</p>
			</section>
			<section id="projects">{/* Projects section content here */}</section>
		</main>
	);
}

export default MainContent;
