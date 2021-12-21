import React, { useRef } from 'react'
import "./Resume.css"
import LineArrow from "../../assets/Home/LineArrow.png"
import Aos from 'aos'


const Resume = () => {
	const ref = useRef(null);

	React.useEffect(() => {
		Aos.init({
			duration: 1100,
			easing: "ease-in-out"
		})

		const bullets = document.querySelectorAll(".bullet");
		function handleClick() {
			const activeBullet = this;
			bullets.forEach((b) => {
				(b === activeBullet) ? b.classList.add("animatedRowStyle") : b.classList.remove("animatedRowStyle");
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
					<div className="col-md-9 col-col-12 mx-auto">

						<div className="carosolContainer">

							<div className="resume-bullets">
								<div className="bullet-container">
									<div className="bullet-icons"></div>
									<div className="bullets" >

										<ul class="nav nav-pills mb-3 d-flex flex-column" id="pills-tab" role="tablist">

											<li role="presentation" >
												<p class="bullet" ref={ref} id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" role="tab" aria-controls="pills-education" aria-selected="false" >
													<i className="bullet-logo fas fa-user-graduate"></i>
													<p >Education</p>
												</p>
											</li>
											<li role="presentation" >
												<p class="bullet" id="pills-workHistory-tab" data-bs-toggle="pill" data-bs-target="#pills-workHistory" role="tab" aria-controls="pills-workHistory" >
													<i className=" bullet-logo fas fa-history" ></i >
													<p >Work History</p>
												</p>
											</li>
											<li role="presentation"  >
												<p class="bullet" id="pills-programmingSkills-tab" data-bs-toggle="pill" data-bs-target="#pills-programmingSkills" role="tab" aria-controls="pills-programmingSkills">
													<i className="bullet-logo fas fa-laptop"></i>
													<p >Programming Skills	</p>
												</p>
											</li>
											<li role="presentation"  >
												<p class="bullet" id="pills-projects-tab" data-bs-toggle="pill" data-bs-target="#pills-projects" role="tab" aria-controls="pills-projects">
													<i className="bullet-logo fas fa-chart-bar"></i>
													<p >Projects</p>
												</p>
											</li>

											<li role="presentation"  >
												<p class="bullet" id="pills-interests-tab" data-bs-toggle="pill" data-bs-target="#pills-interests" role="tab" aria-controls="pills-interests">
													<i className="bullet-logo fas  fa-palette"></i>
													<p >Interests</p>
												</p>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="bullets-details-Container tab-content" id="pills-tabContent">

								<div className="tab-pane fade show active" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
									<div className='common-container'>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>Graduation</p>
												<p className='yearBtn'>2019-2023</p>
											</div>
											<p className='secondaryPara' >Zeal College Of Engineering and Research ,Katraj,Pune</p>
										</div>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>Primary Education</p>
												<p className='yearBtn'>2017-2019</p>
											</div>
											<p className='secondaryPara' >Hutatma Rajguru Mahavidyalay Rajgurunagar ,Khed</p>
										</div>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>High School</p>
												<p className='yearBtn'>2007-2017</p>
											</div>
											<p className='secondaryPara' >New English School kalus ,pune</p>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="pills-workHistory" role="tabpanel" aria-labelledby="pills-workHistory-tab">
									<div className='common-container'>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>Microsoft</p>
												<p className='yearBtn'>2021-pres</p>
											</div>
											<p className='secondaryPara' >FULL STACK DEVELOPER INTERN</p>
										</div>
										<div className='workHistoryParas'>
											<p>Currently working as MERN stack web and Full stack Developer</p>
											<p>- Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .</p>
											<p>	- Integrated the web app with backend services to create new user onboarding application with dynamic form content.</p>
											<p>	- I stretch my mental capacity to develope UI as per the given designs.</p>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="pills-programmingSkills" role="tabpanel" aria-labelledby="pills-programmingSkills-tab">
									<div className='common-container'>
										<div className="programingSkill-blocks-div">
											<div className='skillBlock'>
												<p >JavaScript</p>
												<div className="progress">
													<div className="progress-bar" style={{ width: "90%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className='skillBlock'>
												<p>ReactJS</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "80%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className='skillBlock'>
												<p>ReactNative</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "75%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div className="programingSkill-blocks-div">
											<div className='skillBlock'>
												<p >ExpressJS</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "90%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className='skillBlock'>
												<p>NodeJS</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "85%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className='skillBlock'>
												<p>MongoDb</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "95%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div className="programingSkill-blocks-div">
											<div className='skillBlock'>
												<p >CoreJava</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "80%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className='skillBlock'>
												<p>HTML</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "92%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
											<div className='skillBlock'>
												<p>CSS</p>
												<div className="progress">
													<div className="progress-bar " style={{ width: "80%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>

									</div>
								</div>
								<div className="tab-pane fade" id="pills-projects" role="tabpanel" aria-labelledby="pills-projects-tab">
									<div className='common-container'>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>Portfolio Website</p>
												<p className='yearBtn'>2021-2022</p>
											</div>
											<p className='secondaryPara' >Technologies Used: ReactJS, Bootstrap</p>
										</div>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>E-Shop Website</p>
												<p className='yearBtn'>2021-2022</p>
											</div>
											<p className='secondaryPara' >Technologies Used: MongoDB, Express, NodeJs, Redux, ReactJS, Bootstrap, scss.</p>
										</div>
										<div className="common-lable-div">
											<div className='headings'>
												<p className='primaryPara'>Ecommerce Website</p>
												<p className='yearBtn'>2022-2023</p>
											</div>
											<p className='secondaryPara' >Technologies Used: MongoDB, Express, NodeJs, Redux, ReactJS, Bootstrap, scss.</p>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="pills-interests" role="tabpanel" aria-labelledby="pills-interests-tab">
									<div className='common-container '>
										<div className="interests-block common-lable-div">
											<p className='primaryPara'>Painting</p>
											<p className='secondaryPara' >Apart from being a tech enthusiast and a code writer, i also love to painting and drawing.
											</p>
										</div>
										<div className="interests-block common-lable-div">
											<p className='primaryPara'>Music</p>
											<p className='secondaryPara' >Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on.</p>
										</div>
										<div className="interests-block common-lable-div" >
											<p className='primaryPara'>Competitive Gaming</p>
											<p className='secondaryPara' >I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.</p>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>


		</>
	)
}

export default Resume


