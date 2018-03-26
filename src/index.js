import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import Profile from './Profile';
import NavBar from './NavBar';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {objectClicked:null, displayFilters:false};
		this.filterHandler = this.filterHandler.bind(this);
		this.toggleFilter = this.toggleFilter.bind(this);
	}

	toggleFilter() {
		if (this.state.displayFilters) {
			this.setState({displayFilters:false, objectClicked:null});
		} else {
			this.setState({displayFilters:true});
		}
	}


	filterHandler(filterVal) {
		if (filterVal !== this.state.objectClicked) {
			this.setState({objectClicked:filterVal});
		} else {
			this.setState({objectClicked:null});
		}
	}

	render() {

		let filters;
		if (this.state.displayFilters) {
			filters = (
				<div className="row all-filters">
					<Section header="Skills" onClick={this.filterHandler} objectClicked={this.state.objectClicked} sectionClass="col-md-3 filter-section"/>
					<Section header="Sectors" onClick={this.filterHandler} objectClicked={this.state.objectClicked} sectionClass="col-md-3"/>
					<Section header="Programming Languages" onClick={this.filterHandler} objectClicked={this.state.objectClicked} sectionClass="col-md-6 filter-section"/>
				</div>
			);	
		} else {
			filters = null;
		}
		 
		return (
			<div>
				<NavBar onClick={this.toggleFilter} filters={filters} />
				<Profile />
				<Section header="Projects" objectClicked={this.state.objectClicked} sectionClass="row section"/>
				<Section header="Professional Experience" objectClicked={this.state.objectClicked} sectionClass="row section bg-grey"/>
				<Section header="Education" objectClicked={this.state.objectClicked} sectionClass="row section"/>
			</div>
		);
	}
}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
