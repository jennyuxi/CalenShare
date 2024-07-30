// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import UserCalendar from "./pages/UserCalendar";
import GroupCalendar from "./pages/GroupCalendar";
import Contacts from "./pages/Contacts";
import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/GroupCalendar" element={<GroupCalendar />} />
					<Route path="/UserCalendar" element={<UserCalendar />} />
					<Route path="/Contacts" element={<Contacts />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
