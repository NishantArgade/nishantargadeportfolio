import React from 'react'
import "./Footer.css"

const Footer = () => {
	return (
		<>
			<footer>
				<div className="Container" id="Footer">
					<div className="sec aboutus">
						<h2>About Me</h2>
						<p>I am full stack and MERN stack developer,i am expert in this filed,if you want to create awesome website then you can hire me.</p>
						<p>Follow Me :</p>
						<ul className="sci">
							<li><a href="https://www.facebook.com/nishant.argade.14"  target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
							<li><a href="https://bit.ly/3eatAPK" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a></li>
							<li><a href="https://www.instagram.com/nishant.argade/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
							<li><a href="https://www.linkedin.com/in/nishant-argade-9058ab1a5/" target="_blank" rel="noreferrer" ><i className='fab fa-linkedin-in' target="_blank" rel="noreferrer"></i></a></li>
						</ul>
					</div>
					<div className="sec quickLinks">
						<h2>Quick Links</h2>
						<ul>
							<li><a href="#about">About Me</a></li>
							<li><a href="#contact">Contact Me</a></li>
							<li><a href="resume.pdf" download="Nishant resume.pdf">Get Resume</a></li>
							<li><a href="#contact">Help</a></li>
						</ul>
					</div>
					<div className="sec contact">
						<h2>Contact info</h2>
						<ul className='info'>
							<li>
								<span><i className="fas fa-map-marker-alt"></i></span>
								<a href='https://goo.gl/maps/6zj5w5pA7seZLqN47' target="_blank" rel="noreferrer" className='contact-address'>Chakan Pune,Maharashtra<br />
									pin-410501<br />India
								</a>
							</li>
							<li>
								<span><i className="fas fa-phone-alt"></i></span>
								<p>
									<a href="tel:+918007896396">+918007896396</a><br />
									<a href="tel:+919561454579">+919561454579</a>
								</p>
							</li>
							<li>
								<span><i className="fas fa-envelope"></i></span>
								<p><a href="mailto:nishantargade4579@gmail.com">nishantargade4579@gmail.com</a></p>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className="copyrightText">
				<p>Copyright @2021 Nishant Argade. All Rights Reserved.</p>
			</div>
		</>
	)
}

export default Footer
