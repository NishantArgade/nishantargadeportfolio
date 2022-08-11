import React, { useState } from 'react'
import "./Contact.css"
import LineArrow from "../../assets/Home/LineArrow.png"

import Aos from 'aos'
import Emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
	const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

	React.useEffect(() => {

		Aos.init({
			duration: 1100,
			easing: 'ease-in-out'
		});

		const inputs = document.querySelectorAll(".input");
		function handleFocus() {
			const parent = this.parentNode;
			parent.classList.add("focus");
		}
		inputs.forEach((input) => {
			input.addEventListener("focus", handleFocus);
		})
	}, [])

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	const handelSubmit = (e) => {
		e.preventDefault();
		Emailjs.sendForm("service_anit8tl", "template_p75gdzn", e.target, "user_ZeuDrRocdlUZk8k3rjA0N")
			.then((res) => {
				toast.success('Message send Successfuly!')
				setFormData({ name: "", email: "", phone: "", message: "" });
			})
			.catch((err) => toast.error('Something  went Wrong!'));
	}

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
				limit={3}
			/>

			<div className='container-fluid' id="contact" data-aos="fade-in">
				<h1 className='mainContainer-heading'>Contact Me</h1>
				<h6 className='mainContainer-subHeading'>Get touch with me</h6>
				<div className='lineArrow'><img src={LineArrow} style={{ width: "260px" }} alt="" /></div>

				<div className="row">
					<div className="col-md-9 col-col-12 mx-auto">
						<div className="contact-parenet">
							<div className="contact-info-sec">
								<div className="contact-info">
									<h3 className='title'>Let's get in touch</h3>
									<p className='text'>
										You can Hire me or if you want to ask somthing to me then message me here.
										Keep in touch me.
									</p>
									<div className="info">
										<div className="information">
											<i className="fas fa-map-marked-alt icon" ></i>
											<a href='https://goo.gl/maps/6zj5w5pA7seZLqN47' target="_blank" rel="noreferrer">Kalus,Pune Maharashtra</a>
										</div>
										<div className="information">
											<i className="fas fa-envelope icon" ></i>
											<a href='mailto:nishantargade4579@gmail.com'>nishantargade4579@gmail.com</a>
										</div>
										<div className="information">
											<i className="fas fa-phone-square-alt icon"></i>
											<a href='tel:+918007896396'>+918007896396</a>
										</div>
									</div>
									<div className="social-media">
										<p>Connect with me :</p>
										<div className='social-icons-container'>
											<div className="social-icon">
												<a href='https://www.facebook.com/nishant.argade.14' target="_blank" rel="noreferrer"><i className='fab fa-facebook'></i></a>
											</div>
											<div className="social-icon">
												<a href='https://bit.ly/3eatAPK' target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
											</div>
											<div className="social-icon">
												<a href='https://www.instagram.com/nishant.argade/' target="_blank" rel="noreferrer"><i className='fab fa-instagram'></i></a>
											</div>
											<div className="social-icon">
												<a href='https://www.linkedin.com/in/nishant-argade-9058ab1a5/' target="_blank" rel="noreferrer"><i className='fab fa-linkedin-in' target="_blank" rel="noreferrer"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="contact-form-sec">
								<div className="contact-form">
									<div className="circle one"></div>
									<div className="circle two"></div>

									<form action="POST" onSubmit={handelSubmit} autoComplete="off">
										<h3 className="title">
											Contact Me
										</h3>
										<div className='input-container ' >
											<input type="text" name="name" className='input' value={formData.name} onChange={handleChange} required />
											<label htmlFor="">Name</label>
											<span>Name</span>
										</div>
										<div className='input-container ' >
											<input type="email" name="email" className='input' value={formData.email} onChange={handleChange} required />
											<label htmlFor="">Email</label>
											<span>Email</span>
										</div>
										<div className='input-container' >
											<input type="tel" name="phone" className='input' value={formData.phone} onChange={handleChange} required minLength={10} />
											<label htmlFor="">Phone</label>
											<span>Phone</span>
										</div>
										<div className='input-container textarea' >
											<textarea name="message" className='input' value={formData.message} onChange={handleChange} required ></textarea>
											<label htmlFor="">Message</label>
											<span>Message</span>
										</div>
										<input type="submit" value="Send" className='sendBtn' />
									</form>

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
