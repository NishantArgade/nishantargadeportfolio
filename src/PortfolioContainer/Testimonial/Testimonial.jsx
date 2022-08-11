import React from 'react'
import LineArrow from "../../assets/Home/LineArrow.png"
import "./Testimonial.css"
import FooterCurve from "../Home/FooterCurve"
import Aos from 'aos'
import ReactOwlCarousel from "./ReactOwlCarousel"

const Testimonial = () => {

	React.useEffect(() => {
		Aos.init({
			duration: 1100,
			easing: "ease-in-out"
		})
	}, [])

	return (
		<>
			<div className='container-fluid' id="testimonial" data-aos="fade-in">
				<h1 className='mainContainer-heading'>Testimonial</h1>
				<h6 className='mainContainer-subHeading'>What My Client Say About Me ?</h6>
				<div className='lineArrow'><img src={LineArrow} style={{ width: "260px" }} alt="" /></div>

				<div className="testimonial-carosal-container">
					<div className='carousel'>
						<div className='carousel-body'>
							<ReactOwlCarousel />
						</div>
					</div>
					<div className='testimonial-footer-curve'>
						<FooterCurve />
					</div>

				</div>
			</div>
		</>
	)
}

export default Testimonial

