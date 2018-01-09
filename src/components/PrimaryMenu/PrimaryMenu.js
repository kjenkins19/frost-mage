import React, {Component} from 'react';
import './PrimaryMenu.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class PrimaryMenu extends Component {
	render() {
		console.log(this.props);
		return (
			<nav className="primary-menu">
				<div><Link to="/dev">Tales of the IT Consultant</Link></div>
				<div><Link to="/frost">Diaries of a frost mage</Link></div>
				<div><Link to="/human">Reality Check</Link></div>
			</nav>
		);
	}
}

export default PrimaryMenu;
