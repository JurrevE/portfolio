import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../App.css";
import "../Header.css";

const Header = () => {
	const [currentDate, setCurrentDate] = useState("");
	const [daysLeft, setDaysLeft] = useState(0);
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const today = new Date();
		const internshipDeadline = new Date("2025-01-01");

		// Calculate the difference in time
		const timeDiff = internshipDeadline - today;
		// Convert the difference to days
		const daysUntilDeadline = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

		setDaysLeft(daysUntilDeadline);

		const options = { year: "numeric", month: "long", day: "numeric" };
		setCurrentDate(today.toLocaleDateString(undefined, options));

		// Set greeting based on time of day
		const hours = today.getHours();
		let greetingText = "";
		if (hours < 12) {
			greetingText = "Good morning";
		} else if (hours < 18) {
			greetingText = "Good afternoon";
		} else {
			greetingText = "Good evening";
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
					direction="right"
					loop={0}
					pauseOnHover={true}
				>
					<h1 className="h1marquee">{greeting}! Nice to meet you!</h1>
				</Marquee>
			</div>
			<div className="animationDiv2">
				<Marquee
					className="marquee"
					speed={140}
					gradient={false}
					direction="left"
					loop={0}
					pauseOnHover={true}
				>
					<h2 className="h2marquee">
						Today is: {currentDate}. AKA {daysLeft} days until my internship
						deadline!
					</h2>
				</Marquee>
			</div>
			<div className="animationDiv3">
				<Marquee
					className="marquee"
					speed={60}
					gradient={false}
					direction="right"
					loop={0}
					pauseOnHover={true}
				>
					<h1 className="h1marquee">Allow me to introduce myself.</h1>
				</Marquee>
			</div>
		</header>
	);
};

export default Header;
