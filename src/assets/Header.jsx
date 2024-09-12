import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../App.css";

const Header = () => {
	const [currentDate, setCurrentDate] = useState("");
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const today = new Date();
		const options = { year: "numeric", month: "long", day: "numeric" };
		setCurrentDate(today.toLocaleDateString(undefined, options));

		const hours = today.getHours();
		let greetingText = "";
		if (hours < 12) {
			greetingText = "Good morning";
		} else if (hours < 18) {
			greetingText = "Good afternoon";
		} else {
			greetingText = "Good night";
		}
		setGreeting(greetingText);
	}, []);

	return (
		<header className="header">
			<div className="animationDiv1">
				<Marquee
					className="marquee"
					speed={60}
					gradient={false}
					direction="left"
					loop={0}
					pauseOnHover={true}
				>
					<h1 className="h1marquee">{greeting}! Nice to meet you!</h1>
				</Marquee>
			</div>
			<div className="animationDiv2">
				<Marquee
					className="marquee"
					speed={60}
					gradient={false}
					direction="right"
					loop={0}
					pauseOnHover={true}
				>
					<h2 className="h2marquee">Today is {currentDate}</h2>
				</Marquee>
			</div>
			<div className="animationDiv3">
				<Marquee
					className="marquee"
					speed={60}
					gradient={false}
					direction="left"
					loop={0}
					pauseOnHover={true}
				>
					<h1 className="h1marquee">Allow me to introduce myself.</h1>
				</Marquee>
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
};

export default Header;
