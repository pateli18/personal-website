import React from 'react';

const SectionContainer = (props) => {
		return (
			<div id={props.id} className={props.sectionClass}>
				<h1 className="section-header">{props.header}</h1>
				{props.items}
			</div>
		);
};

export default SectionContainer;