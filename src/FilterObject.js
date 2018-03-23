import React from 'react';

class FilterObject extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.onClick(this.props.data.name);
	}

	render() {

		let imgContainerClass = 'item-img-container';
		let itemLabelClass = 'item-label';
		if (this.props.objectClicked === this.props.data.name) {
			imgContainerClass += ' clicked';
			itemLabelClass += ' clicked';
		}

		return (
			<div className="item-container">
				<div className={imgContainerClass} value={this.props.data.name} onClick={this.clickHandler}>
					<img className="item-img" src={this.props.data.imgSrc}/>
					<div className="item-overlay"><p>Click to Filter</p></div>
				</div>
				<div className={itemLabelClass}>{this.props.data.name}</div>
				
			</div>
		);
	}
}

export default FilterObject;