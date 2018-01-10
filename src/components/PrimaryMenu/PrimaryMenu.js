import React, {Component} from 'react';
import './PrimaryMenu.css';
import {
	NavLink
} from 'react-router-dom'

class PrimaryMenu extends Component {
	render() {
		return (
			<nav className="primary-menu">
				<div><NavLink to="/dev">Tales of the IT Consultant</NavLink></div>
				<div><NavLink to="/frost">Diaries of a frost mage</NavLink></div>
				<div><NavLink to="/human">Reality Check</NavLink></div>
			</nav>
		);
	}
}

export default PrimaryMenu;
