import React, { useEffect, useRef } from "react";
import "../App.css";

// Array of month names
const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function getGreeting() {
	const now = new Date();
	const hours = now.getHours();
	const day = now.getDate(); // Day of the month
	const monthIndex = now.getMonth(); // Month (0-11)
	const year = now.getFullYear(); // Four-digit year

	// Get the month name from the array
	const monthName = monthNames[monthIndex];
	// meow
	// Return the greeting based on the time of day
	if (hours < 12) {
		return "Good morning!";
	} else if (hours < 18) {
		return "Good afternoon!";
	} else {
		return "Good evening!";
	}
}

function getDateInfo() {
	const now = new Date();
	const day = now.getDate();
	const monthIndex = now.getMonth();
	const year = now.getFullYear();

	// Get the month name from the array
	const monthName = monthNames[monthIndex];

	return `Today is ${monthName} ${day}, ${year}`;
}

function Header() {
	const greetingMessage = getGreeting();
	const dateInfo = getDateInfo();

	const scrollTextRef = useRef(null);

	useEffect(() => {
		if (scrollTextRef.current) {
			const scrollText = scrollTextRef.current;
			scrollText.setAttribute("data-content", scrollText.textContent);
		}
	}, []);

	return (
		<header className="header">
			<div className="animationDiv1">
				<h1 className="scroll-text" ref={scrollTextRef}>
					{greetingMessage} Nice to meet you!
				</h1>
			</div>
			<div className="animationDiv2">
				<h2 className="scroll-text">{dateInfo}</h2>
			</div>
			<div className="animationDiv2">
				<h1 id="goodbyeMessage">Let's build something amazing together.</h1>
			</div>
			<h1>Jurre van Eijk</h1>
			<nav>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
