import React from 'react'
import Man from "../../assets/Home/man.png"
import Mike from "../../assets/Home/mike.png"
import lady from "../../assets/Home/lady.png"
import NoImg from "../../assets/Home/blankImg.png"

import OwlCarousel from "react-owl-carousel";

const options ={
	loop:true,
	autoplay:true,
    autoplayTimeout:4000,
	smartSpeed:2000,
	margin:15,
	responsiveClass:true,
	responsive:{
		0:{
			items:1
		},
		1000:{
			items:3
		}
	}
};

const  ReactOwlCarousel = ()=>{
		return (
			<>
				<OwlCarousel   {...options}>
					<div className='item'>
						<div className='carousel-block'>
							<p className='client-comment'> &nbsp; &nbsp; &nbsp; It was nice hiring  this guy for my Ecommerce project. He delivered even more than i can imagine. I recommend him for you. &nbsp;&nbsp;</p>
							<p className='profile-rating'>&#9733; &#9733; &#9733; &#9733;</p>
							<div className="client-profile d-flex ">
								<div className='client-profile-img'>
									<img src={Man} alt="notFound" className='img-fluid' />
								</div>
								<div className='ms-4'>
									<p className='name'>Prashant</p>
									<p className='companey'>CEO Info.tech.pvt</p>
								</div>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='carousel-block'>
							<p className='client-comment'> &nbsp; &nbsp; &nbsp; When he delivered my job, my head spinned, it was so nice and he implemented every fuctionality i requested for. Thank you.&nbsp;&nbsp;</p>
							<p className='profile-rating'>&#9733; &#9733; &#9733; &#9733;</p>
							<div className="client-profile d-flex ">
								<div className='client-profile-img'>
									<img src={NoImg} alt="notFound" className='img-fluid' />
								</div>
								<div className='ms-4'>
									<p className='name'>Dinesh</p>
									<p className='companey'>CEO InansGlobal</p>
								</div>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='carousel-block'>
							<p className='client-comment'> &nbsp; &nbsp; &nbsp; This guy is incridibly awesome, I hired him and when He deliverd ,I honestly fell in love with the project .He is indeed a great guy. &nbsp;&nbsp;</p>
							<p className='profile-rating'>&#9733; &#9733; &#9733; &#9733;</p>
							<div className="client-profile d-flex ">
								<div className='client-profile-img'>
									<img src={Mike} alt="notFound" className='img-fluid' />
								</div>
								<div className='ms-4'>
									<p className='name'>Rajendra</p>
									<p className='companey'>Maneger of Flipkart</p>
								</div>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='carousel-block'>
							<p className='client-comment'> &nbsp; &nbsp; &nbsp; I patronized Nishant and when He delivered, I honestly fell in love with project ,when i saw project i fell great. Thank you Nishant. &nbsp;&nbsp;</p>
							<p className='profile-rating'>&#9733; &#9733; &#9733; &#9733;</p>
							<div className="client-profile d-flex ">
								<div className='client-profile-img'>
									<img src={lady} alt="notFound" className='img-fluid' />
								</div>
								<div className='ms-4'>
									<p className='name'>Priyanka</p>
									<p className='companey'>Infosis HR</p>
								</div>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='carousel-block'>
							<p className='client-comment'> &nbsp; &nbsp; &nbsp; first of all thank you,Nishant he delivered me project what i wanted and this guy did it very nicly and in Time. &nbsp;&nbsp;</p>
							<p className='profile-rating'>&#9733; &#9733; &#9733; &#9733;</p>
							<div className="client-profile d-flex ">
								<div className='client-profile-img'>
									<img src={NoImg} alt="notFound" className='img-fluid' />
								</div>
								<div className='ms-4'>
									<p className='name'>Yogesh Singh</p>
									<p className='companey'>Mahindra (Maneger)</p>
								</div>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='carousel-block'>
							<p className='client-comment'> &nbsp; &nbsp; &nbsp; That's a guy who fullfill my projects requirement, i have been giving to him many project work and he did it well and in time ,i am happy to hired this guy. &nbsp;&nbsp;</p>
							<p className='profile-rating'>&#9733; &#9733; &#9733; &#9733;</p>
							<div className="client-profile d-flex ">
								<div className='client-profile-img'>
									<img src={NoImg} alt="notFound" className='img-fluid' />
								</div>
								<div className='ms-4'>
									<p className='name'>Jon roy</p>
									<p className='companey'>joinflex.pvt</p>
								</div>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</>
		)
	
}

export default ReactOwlCarousel