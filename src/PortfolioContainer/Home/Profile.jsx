import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";

const Profile = () => {
	return (
		<>
			<div className='container-fluid' id='profile' >
				<div className="profile-container">
					<div className="profile-parent">
						<div className="profile-details">
							<div className="social-media-icons ">
								<a href="https://www.facebook.com/nishant.argade.14" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
								<a href="https://www.linkedin.com/in/nishant-argade-9058ab1a5/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
								<a href="https://www.instagram.com/nishant.argade/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
								<a href="https://www.youtube.com/channel/UCg3KKuCp6ID1l9BPxRJmUng" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i></a>
							</div>
							<div className="profile-details-name">
								<div className="primary-text">
									Hello,I'M <span className="highlighted-text">Nishant</span>
								</div>
							</div>
							<div className="profile-details-role">
								<div className="primary-text">
									<div className='typical-text'>
										<Typical
											loop={Infinity}
											steps={[
												"Enthusiastic Dev 🔴",
												1000,
												"Full Stack Dev 💻",
												1000,
												"MERN Stack Dev 😎",
												1000,
												"Cross Platform 🌐",
												1000,
												"React Native Dev ❄",
												1000,
											]}
										/>
									</div>
									<div className='profile-role-description'>
										Knack of building application with front end and back end operations.
									</div>
								</div>
							</div>
							<div className="profile-options">
								<a href="#contact" className="btn primary-btn menu-btn">ContactMe</a>
								<a href="resume.pdf" download="Nishant resume.pdf">
									<button className='btn highlighted-btn'>Get Resume</button>
								</a>
							</div>
						</div>
						<div className="profile-picture">
							<div className="profile-picture-background">

							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Profile
