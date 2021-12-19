import React from 'react'
import "./About.css"
import LineArrow from "../../assets/Home/LineArrow.png"
import nishantAboutMePic from "../../assets/Home/aboutMePic.jpeg"
import Aos from 'aos'

const About = () => {

	React.useEffect(() => {
		Aos.init({
			duration: 1100,
			easing: 'ease-in-out'
		});
	}, [])

	return (
		<>
			<div className='container-fluid' id="about" data-aos="fade-in">
				<h1 className='mainContainer-heading'>About Me</h1>
				<h6 className='mainContainer-subHeading'>Why Choose Me ?</h6>
				<div className='lineArrow'><img src={LineArrow} style={{ width: "260px" }} alt="" /></div>

				<div className="row">
					<div className="col-md-9 col-12 mx-auto">

						<div className="aboutMeDiv">
							<div className='imgDiv'>
								<img src={nishantAboutMePic} alt="" />
							</div>
							<div className='textContent'>
								<div className="firstContent">
									<p>Full stack web developer with background knowledge of MERN stacks with redux, along with a knock of building application with atmost efficiency. Strong professional with a BE (IT) willing to be on asset for an organization.</p>
								</div>
								<div className="secondContent">
									<h6>Here are a Few Highlights :</h6>
									<li>Full Stack web developer</li>
									<li>Intractive front end as per design </li>
									<li>React and React Native</li>
									<li>Redux for State Management</li>
									<li>Managing database</li>
								</div>
								<div className="aboutMe-options">
									<a href="#contact" className='btn primary-btn'>Hire Me</a>
									<a href="resume.pdf" download="Nishant resume.pdf">
										<button className='btn highlighted-btn'>Get Resume</button>
									</a>
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		</>
	)
}

export default About
