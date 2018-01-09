import React, {Component} from 'react';
import './MainImage.css';

class MainImage extends Component {
	render() {
		console.log(this.props);
		console.log(window.location);
		return (
			<div className="main-image">&nbsp;</div>
		);
	}
}

export default MainImage;
