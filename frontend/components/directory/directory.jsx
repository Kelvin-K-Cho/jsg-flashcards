import React from 'react';
import { Navbar, NavLink, Button } from 'reactstrap';

const Directory = props => {
	let logo = (
		<a target="_blank" href="https://github.com/Kelvin-K-Cho/jsg-flashcards">
			<img src={window.staticImages.github} />
		</a>
	);

	let suggestions = (
		<NavLink href="#/suggestions">
			<Button outline size="sm">
				Suggestions ?
			</Button>
		</NavLink>
	);

	let display = (
		<Navbar>
			{logo}
			{suggestions}
		</Navbar>
	);

	return display;
};

export default Directory;
