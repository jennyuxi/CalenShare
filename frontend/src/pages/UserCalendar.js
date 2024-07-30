// Filename - pages/blogs.js

import React from "react";

const UserCalendar = () => {
	return (
		<div>
			<h1>
				Update your availability here!
			</h1>
			<iframe title="user-calendar"
					src="https://calendar.google.com/calendar/embed?src=calenshare%40gmail.com&ctz=America%2FNew_York"
					style={{ border: 0 }}
					width="800"
					height="600"
					frameBorder="0"
					scrolling="no"
				></iframe>
		</div>
	)
};

export default UserCalendar;
