import React, { useRef, useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const [Mode, setMode] = useState("Light");

	const handleHambuger = () => {
		ref.current.classList.toggle("active");
		ref2.current.classList.toggle("active");
		ref3.current.classList.toggle("modeOff");
		document.body.classList.toggle('stop-scrolling');
	}
	const toggleMode = (e) => {
		document.body.classList.toggle("dark-mode");
		(Mode === "Light") ? setMode("Dark") : setMode("Light");
	}

	return (
		<>
			<div className='container-fluid' id="navbar">
				<div className="row">
					<div className="col-md-11 col-12 mx-auto">

						<nav className="Navbar">
							<div className="max-width">
								<div className="logo"><a href="#home">NISHA<span>NT</span></a></div>
								<ul className="menu" ref={ref} onClick={handleHambuger}>
									<li><a href="#Home"  className="menu-btn activeHome">Home</a></li>
									<li><a href="#about" className="menu-btn">AboutMe</a></li>
									<li><a href="#resume" className="menu-btn">Resume</a></li>
									<li><a href="#testimonial" className="menu-btn">Testimonial</a></li>
									<li><a href="#contact" className="menu-btn">ContactMe</a></li>
								</ul>
							</div>
							<div className="menu-btn me-1" onClick={handleHambuger}>
								<i ref={ref2} className="fas fa-bars text-white"></i>
							</div>
							<div className="modeBtn" ref={ref3} onClick={toggleMode}>
								{(Mode === "Light") ?
									<i className="fas fa-moon moonIcon"></i> :
									<i className="fas fa-sun sunIcon"></i>
								}
							</div>
						</nav>

					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar

