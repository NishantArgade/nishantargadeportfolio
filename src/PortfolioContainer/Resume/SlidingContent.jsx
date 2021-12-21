import React from 'react'
import "./Resume.css"

const SlidingContent = (props) => {
	return (
		<>
			<div className="bullets-details " style={{ transform: `translateY(${props.val}px)` }}>

				<div className='common-container'>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Graduation</p>
							<p className='secondaryPara' >Zeal College Of Engineering and Research ,Katraj,Pune</p>
						</div>
						<p className='yearBtn'>2019-2023</p>
					</div>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Primary Education</p>
							<p className='secondaryPara' >Hutatma Rajguru Mahavidyalay Rajgurunagar ,Khed</p>
						</div>
						<p className='yearBtn'>2017-2019</p>
					</div>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>High School</p>
							<p className='secondaryPara' >New English School kalus ,pune</p>
						</div>
						<p className='yearBtn'>2007-2017</p>
					</div>
				</div>

				<div className='common-container'>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Microsoft</p>
							<p className='secondaryPara' >FULL STACK DEVELOPER INTERN</p>
						</div>
						<p className='yearBtn'>2021-pres</p>
					</div>
					<div className='workHistoryParas'>
						<p>Currently working as MERN stack web and Full stack Developer</p>
						<p>- Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .</p>
						<p>	- Integrated the web app with backend services to create new user onboarding application with dynamic form content.</p>
						<p>	- I stretch my mental capacity to develope UI as per the given designs.</p>
					</div>
				</div>

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

				<div className='common-container'>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Personal Portfolio Website</p>
							<p className='secondaryPara' >Technologies Used: ReactJS, Bootstrap</p>
						</div>
						<p className='yearBtn'>2021-2022</p>
					</div>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>E-Shop Website</p>
							<p className='secondaryPara' >Technologies Used: MongoDB, Express, NodeJs, Redux, ReactJS, Bootstrap, scss.</p>
						</div>
						<p className='yearBtn'>2021-2022</p>
					</div>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Ecommerce Website</p>
							<p className='secondaryPara' >Technologies Used: MongoDB, Express, NodeJs, Redux, ReactJS, Bootstrap, scss.</p>
						</div>
						<p className='yearBtn'>2022-2023</p>
					</div>
				</div>

				<div className='common-container'>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Painting</p>
							<p className='secondaryPara' >Apart from being a tech enthusiast and a code writer, i also love to painting and drawing.
							</p>
						</div>
					</div>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Music</p>
							<p className='secondaryPara' >Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on.</p>
						</div>
					</div>
					<div className="education-block">
						<div className='headings'>
							<p className='primaryPara'>Competitive Gaming</p>
							<p className='secondaryPara' >I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.</p>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default SlidingContent
