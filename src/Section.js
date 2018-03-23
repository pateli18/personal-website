import React from 'react';
import SectionContainer from './SectionContainer';
import FilterObject from './FilterObject';
import ProjectObject from './ProjectObject';
import ProfessionObject from './ProfessionObject';
import SchoolObject from './SchoolObject';
import userData from './data/user-data.json';

class Section extends React.Component {

	getSortedData() {
		const items = userData[this.props.header];
		const itemsSorted = items.sort(function(a, b) {
			return a.sortKey - b.sortKey;
		});

		return itemsSorted;
	}

	getItems() {
		const sectionName = this.props.header;
		const itemsSorted = this.getSortedData();
		const objectClicked = this.props.objectClicked;
		const onClick = this.props.onClick;
		let itemsFinal;

		switch (sectionName) {
			case "Skills":
			case "Sectors":
			case "Programming Languages":
				itemsFinal = itemsSorted.map(function(d) {
					return <FilterObject data={d} key={d.key} objectClicked={objectClicked} onClick={onClick}/>
				});
				break;
			case "Projects":
			case "Professional Experience":
			case "Education":
				let itemsFiltered;
				if (objectClicked !== null) {
					itemsFiltered = itemsSorted.filter(function(d) {
						return d.programmingLanguages.includes(objectClicked) || d.sectors.includes(objectClicked) || d.skills.includes(objectClicked);
					});
				} else {
					itemsFiltered = itemsSorted;
				}
				switch (sectionName) {
					case "Projects":
						itemsFinal = itemsFiltered.map(function(d) {
							return <ProjectObject data={d} key={d.key} />
						});
						break;
					case "Professional Experience":
						itemsFinal = itemsFiltered.map(function(d) {
							return <ProfessionObject data={d} key={d.key} />
						});
						break;
					case "Education":
						itemsFinal = itemsFiltered.map(function(d) {
							return <SchoolObject data={d} key={d.key} />
						});
						break;
				}	
				break;
		}
		return itemsFinal;
	}

	render() {
		const itemsFinal = this.getItems();
		const id = this.props.header.replace(' ', '-');
		if (itemsFinal.length > 0) {
			return <SectionContainer id={id} header={this.props.header} items={itemsFinal} sectionClass={this.props.sectionClass}/>;	
		} else {
			return null;
		}
		
	}
}

export default Section;