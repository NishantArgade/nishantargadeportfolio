import React from 'react'

const Tabs = () => {
	return (
		<>
			<ul className="nav nav-pills">
				<li className="active"><a data-toggle="pill" href="#home">Home</a></li>
				<li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
				<li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
				<li><a data-toggle="pill" href="#menu3">Menu 3</a></li>
			</ul>

	
		</>
	)
}

export default Tabs
