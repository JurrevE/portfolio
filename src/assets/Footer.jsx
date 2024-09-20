import React from "react";
import "../Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
	return (
		<footer id="footer">
			<div class="footer-content">
				<h2>Get in contact with me!</h2>
				<ul class="social-links">
					<li>
						<a href="mailto:jurreveijk13@gmail.com">
							<CgMail />
						</a>
					</li>
					<li>
						<a href="https://github.com/JurrevE" target="_blank">
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/jurre-van-eijk/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</li>
				</ul>

				<p>&copy; 2024 Jurre van Eijk. All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
