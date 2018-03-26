import React from 'react';

const Profile = () => {

	return (
		<div className="row profile">
			<div className="section-header">Ihsaan Patel</div>
			<div className="link-container">
				<a className="project-link" href="mailto:ihsaan.patel@gmail.com">Mail</a>
				<a className="project-link" href="https://www.linkedin.com/in/ihsaanpatel/">Linkedin</a>
				<a className="project-link" href="https://github.com/pateli18">Github</a>
			</div>
			<div className="container">
				<div className="profile-text">I’m a <span className="text-emph">data scientist</span> using <span className="text-emph">machine learning</span> and other tools to improve decision making across different industries, particularly <span className="text-emph">healthcare</span>.</div>
				<div className="profile-text">I have strong skills across the entire data science / ml stack particularly in <span className="text-emph">Python</span> (numpy / pandas / sklearn / keras) and <span className="text-emph">Javascript</span> (d3.js) and am always on the lookout for interesting <span className="text-emph">freelancing</span> opportunities.</div>
				<div className="profile-text">I'm finishing up my Masters in Public Policy at the <span className="text-emph">Harvard Kennedy School</span> where I've focused on applying machine learning to service delivery in the public sector and highly-regulated industries. In a prior life I was a finance professional working across transportation and energy, most recently managing my own team for a solar lantern company in India.</div>
			</div>
		</div>
	);
}

export default Profile;