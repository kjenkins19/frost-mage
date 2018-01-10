import React, {Component} from 'react';
import './MainImage.css';
import {
	Link
} from 'react-router-dom'

class MainImage extends Component {
	render() {
		return (
			<Link to="/">
				<div className="main-image">&nbsp;</div>
			</Link>
		);
	}
}

export default MainImage;
