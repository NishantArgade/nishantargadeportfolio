import React, { useState, useRef } from 'react'
import "./Resume.css"
import LineArrow from "../../assets/Home/LineArrow.png"
import SlidingDiv from "./SlidingContent"
import Aos from 'aos'


const Resume = () => {
	const ref = useRef(null);
	const [move, setMove] = useState(0);

	React.useEffect(() => {
		Aos.init({
			duration: 1100,
			easing: "ease-in-out"
		})
		const bullets = document.querySelectorAll(".bullet");

		function handleClick() {
			const activeBullet = this;
			if (activeBullet.id === "education")
				setMove(0);
			else if (activeBullet.id === "workHistory")
				setMove(-475);
			else if (activeBullet.id === "programmingSkills")
				setMove(-935);
			else if (activeBullet.id === "projects")
				setMove(-1427);
			else if (activeBullet.id === "interests")
				setMove(-1890);

			bullets.forEach((b) => {
				if (b === activeBullet)
					b.classList.add("animatedRowStyle");
				else
					b.classList.remove("animatedRowStyle");
			});
		}
		bullets.forEach((bullet) => {
			bullet.addEventListener("click", handleClick);
		});
		ref.current.click();//initialy auto click first bullet 
	}, [])

	return (
		<>
			<div className='container-fluid' id="resume" data-aos="fade-in">

				<h1 className='mainContainer-heading'>Resume</h1>
				<h6 className='mainContainer-subHeading'>My Formal Bio Details</h6>
				<div className='lineArrow'><img src={LineArrow} style={{ width: "260px" }} alt="" /></div>
				
				<div className="row">
					<div className="col-md-9 col-12 mx-auto">

						<div className="carosolContainer">

							<div className="resume-bullets">
								<div className="bullet-container">
									<div className="bullet-icons"></div>
									<div className="bullets" >
										<div className="bullet" id='education' ref={ref} >
											<i className="bullet-logo fas fa-user-graduate"></i>
											<p>Education</p>
										</div>
										<div className="bullet" id="workHistory">
											<i className=" bullet-logo fas fa-history"></i>
											<p>Work History</p>
										</div>
										<div className="bullet" id='programmingSkills'>
											<i className="bullet-logo fas fa-laptop"></i>
											<p>Programming Skills</p>
										</div>
										<div className="bullet" id='projects'>
											<i className="bullet-logo fas fa-chart-bar"></i>
											<p>Projects</p>
										</div>
										<div className="bullet" id="interests">
											<i className="bullet-logo fas  fa-palette"></i>
											<p>Interests</p>
										</div>
									</div>
								</div>
							</div>

							<div className='bullets-details-Container'>
								<SlidingDiv val={move} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Resume
