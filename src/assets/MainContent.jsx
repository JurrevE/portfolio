import React, { useState, useEffect } from "react";
import "../App.css";
import "../MainContent.css";
function MainContent() {
	return (
		<main>
			<section id="about">
				<h2>My name is: Jurre van Eijk</h2>
				<p>
					I am currently pursuing my bachelor's degree in Communication and
					Multimedia Design with a strong focus on front-end web development. I
					have a solid understanding of UI/UX principles and also know a thing
					or 2 about Video and 3D. My passion for creating user-friendly,
					visually engaging web experiences is matched by my social skills and
					commitment to working well in team environments.
				</p>
			</section>
			<section id="projects"></section>
		</main>
	);
}

export default MainContent;
