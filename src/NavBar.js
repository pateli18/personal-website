import React from 'react';

const NavBar = (props) => {

	const filterClass = props.filters !== null ? "filters-on" : "filters-off";

	return (
		<div className='nav-bar'>
			<div className='nav-buttons'>
				<a><div className={filterClass} onClick={props.onClick}>Filter Items</div></a>
				<a href="#Projects"><div>Projects</div></a>
				<a href="#Professional-Experience"><div>Professional Experience</div></a>
				<a href="#Education"><div>Education</div></a>
			</div>
			{props.filters}
		</div>
	);
}

export default NavBar;