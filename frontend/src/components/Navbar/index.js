// Filename - "./components/Navbar.js

import React, {useState} from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";
import "../../App.css"


import styled from "styled-components";
const theme = {
	blue: {
	  default: "#5e9ec9",
	  hover: "#283593",
	},
	pink: {
	  default: "#e91e63",
	  hover: "#ad1457",
	},
};

const Button = styled.button`
background-color: ${(props) => theme[props.theme].default};
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
border: 0; 
text-transform: uppercase;
margin: 10px 0px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;
&:hover {
	background-color: ${(props) => theme[props.theme].hover};
}
&:disabled {
	cursor: default;
	opacity: 0.7;
}
`;

Button.defaultProps = {
theme: "blue",
};

function clickMe() {
alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
opacity: 0.7;
${({ active }) =>
	active &&
	`
	opacity: 1; 
`}
`;

const Tab = styled.button`
padding: 10px 30px;
cursor: pointer;
opacity: 0.6;
background: white;
border: 0;
outline: 0;
border-bottom: 2px solid transparent;
transition: ease border-bottom 250ms;
${({ active }) =>
	active &&
	`
	border-bottom: 2px solid black;
	opacity: 1;
`}
`;

function TabGroup() {
const [active, setActive] = useState(types[0]);
return (
	<>
	<div>
		{types.map((type) => (
		<Tab
			key={type}
			active={active === type}
			onClick={() => setActive(type)}
		>
			{type}
		</Tab>
		))}
	</div>
	<p />
	<p> Your payment selection: {active} </p>
	</>
);
}
  
const types = ["Cash", "Credit Card", "Bitcoin"];

function ToggleGroup() {
	const [active, setActive] = useState(types[0]);
	return (
		<div>
		{types.map((type) => (
			<ButtonToggle active={active === type} onClick={() => setActive(type)}>
			{type}
			</ButtonToggle>
		))}
		</div>
	);
}



const Navbar = () => {
	return (

		<div className="App-header">

			<Link to="/home" className="App-Logo">
				<h1>CalenShare</h1>
			</Link>

			<div className="App-Nav">
				<div className="App-NavMenu">
					<Link to="/Home" className="App-NavLink">
						Home
					</Link>
					<Link to="/GroupCalendar" className="App-NavLink">
						Schedule
					</Link>
					<Link to="/UserCalendar" className="App-NavLink">
						Availability
					</Link>
					<Link to="/Contacts" className="App-NavLink">
						Contacts
					</Link>
				</div>
			</div>
			
			{/* <p>[Profile Button]</p> */}
			<Link to="/home" className="App-NavLink">
				<Button theme="blue" onClick={clickMe}>[Profile Button]</Button>
			</Link>

		</div>
	);
};

export default Navbar;
