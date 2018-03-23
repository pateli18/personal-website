import React from 'react';

const ProjectObject = (props) => {

	const client = props.data.client !== null ? <p className="project-text"><span className="text-header">Client:</span> {props.data.client}</p> : null;
	const outcomeLink = props.data.outcomeLink !== null ? <a href={props.data.outcomeLink}><span className="text-header">Outcome:</span></a> : <span className="text-header">Outcome:</span>;
	const outcome = props.data.outcome !== null ? <p className="project-text">{outcomeLink} {props.data.outcome}</p> : null;
	const website = props.data.website !== null ? <a className="project-link" href={props.data.website}>Website</a> : null;
	const github = props.data.github !== null ? <a className="project-link" href={props.data.github}>Github</a> : null;

	return (
		<div className="tile-container">
			<div className='tile-img-container'>
				<img className="tile-img" src={props.data.imgSrc}/>
			</div>
			<div className="tile-title">{props.data.title}</div>
			{website} {github}
			<div className='text-container'>
				{client}
				<p className="project-text"><span className="text-header">Description:</span> {props.data.description}</p>
				{outcome}
			</div>
		</div>
	);
}

export default ProjectObject;