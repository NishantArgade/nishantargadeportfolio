import React, { useState ,useEffect} from 'react'
import "./ScrollTopBtn.css"

const ScrollTopBtn = () => {
	const [isVisibleBtn, setIsVisibleBtn] = useState(false);

	const handleTopScroll = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	useEffect(() => {

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300)
				setIsVisibleBtn(true);
			else
				setIsVisibleBtn(false);
		})
		return () => {
			window.removeEventListener("scroll");
		}
	}, [])

	return (
		<>
			<div id="scrollBtn" onClick={handleTopScroll} style={isVisibleBtn?{opacity:100}:{opacity:0}} ><i className="arrow fas fa-arrow-up"></i></div>
		</>
	)
}

export default ScrollTopBtn
