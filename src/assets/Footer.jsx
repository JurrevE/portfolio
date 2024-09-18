import React from "react";
import "../Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
	return (
		<footer id="footer">
			<div class="footer-content">
				<ul class="social-links">
					<li>
						<a href="mailto:jurreveijk13@gmail.com">
							Email <CgMail />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/jurre-van-eijk/"
							target="_blank"
						>
							LinkedIn
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a href="https://github.com/JurrevE" target="_blank">
							GitHub
							<FaGithub />
						</a>
					</li>
				</ul>

				<p>&copy; 2024 Jurre van Eijk. All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
