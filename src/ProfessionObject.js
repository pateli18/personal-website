import React from 'react';

const ProfessionObject = (props) => {

	const points = props.data.points;
	const professionPoints = points.map(function(d, i) {
		return <li className="profession-point" key={i}>{d}</li>
	});

	return (
		<div className="tile-container">
			<div className='tile-img-container'>
				<a href={props.data.link}><img className="tile-img" src={props.data.company} /></a>
			</div>
			<div className="tile-title">{props.data.title}</div>
			<div className="tile-subtitle">{props.data.date} | {props.data.location}</div>
			<div className='text-container'>
				<ul className="profession-points-list">
					{professionPoints}
				</ul>
			</div>
		</div>
	);

}

export default ProfessionObject;