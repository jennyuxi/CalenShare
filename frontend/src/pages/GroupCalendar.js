// Filename - pages/contact.js

import React from "react";
import "../App.css";

const GroupCalendar = () => {
	return (
		<div className="page">
			<h1>
				Group Availability:
			</h1>
			<div className="row">
				<p>0/6 Available</p>
				<div className="stack">
					<div className="box-shape bg-dark-grey"></div>
					<div className="row-no-padding">
						<div className="square bg-blue-lightest"></div>
						<div className="square bg-blue-lighter"></div>
						<div className="square bg-blue-light"></div>
						<div className="square bg-blue-normal"></div>
						<div className="square bg-blue-dark"></div>
					</div>
				</div>
				<p>4/6 Available</p>
			</div>
			<div className="row">
				<iframe title="group-calendar"
					src="https://calendar.google.com/calendar/embed?src=calenshare%40gmail.com&ctz=America%2FNew_York"
					style={{ border: 0 }}
					width="800"
					height="600"
					frameBorder="0"
					scrolling="no"
				></iframe>
				<p>[Insert Friends List Panel]</p>
			</div>
		</div>
	);
};

export default GroupCalendar;
