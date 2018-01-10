import React, {Component} from 'react';
import './Blog.css';

class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<h2>{this.props.title}</h2>
				<p>{this.props.summary}</p>
			</div>
		);
	}
}

export default Blog;
