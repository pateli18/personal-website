import React from 'react';

class SchoolObject extends React.Component {

	processList(data, label) {
		let listObject;
		if (data.length > 0) {
			const objects = data.map(function(d, i) {
				return <li className='school-point' key={i}>{d}</li>;
			});
			listObject = <div className="school-list"><span className='text-header'>{label}:</span><ul>{objects}</ul></div>;
		} else {
			listObject = null;
		}

		return listObject;
	}

	
	render() {

		const classes = this.processList(this.props.data.classes, 'Classes');
		const activities = this.processList(this.props.data.activities, 'Activities');

		return (
			<div className="tile-container">
				<div className='tile-img-container'>
					<img className='tile-img' src={this.props.data.school}/>
				</div>
				<div className='tile-title'>{this.props.data.degree}</div>
				<div className='tile-subtitle'>{this.props.data.major} | {this.props.data.gpa} GPA</div>
				<div className='text-container'>
					{classes}
					{activities}
				</div>
			</div>
		);	
	}
	

}

export default SchoolObject;